import type { AbstractSqlConnection, Check, Column, Index, Knex, TableDifference, DatabaseTable } from '@mikro-orm/knex';
import { SchemaHelper } from '@mikro-orm/knex';
import type { Dictionary, Type } from '@mikro-orm/core';
import { EnumType, StringType, TextType, MediumIntType } from '@mikro-orm/core';

/* istanbul ignore next */
export class MariaDbSchemaHelper extends SchemaHelper {

  static readonly DEFAULT_VALUES = {
    'now()': ['now()', 'current_timestamp'],
    'current_timestamp(?)': ['current_timestamp(?)'],
    '0': ['0', 'false'],
  };

  getSchemaBeginning(charset: string): string {
    return `set names ${charset};\n${this.disableForeignKeysSQL()}\n\n`;
  }

  disableForeignKeysSQL(): string {
    return 'set foreign_key_checks = 0;';
  }

  enableForeignKeysSQL(): string {
    return 'set foreign_key_checks = 1;';
  }

  finalizeTable(table: Knex.CreateTableBuilder, charset: string, collate?: string): void {
    table.engine('InnoDB');
    table.charset(charset);

    if (collate) {
      table.collate(collate);
    }
  }

  getListTablesSQL(): string {
    return `select table_name as table_name, nullif(table_schema, schema()) as schema_name, table_comment as table_comment from information_schema.tables where table_type = 'BASE TABLE' and table_schema = schema()`;
  }

  getPreAlterTable(tableDiff: TableDifference, safe: boolean): string {
    // Dropping primary keys requires to unset autoincrement attribute on the particular column first.
    const pk = Object.values(tableDiff.removedIndexes).find(idx => idx.primary);

    if (!pk || safe) {
      return '';
    }

    return pk.columnNames
      .filter(col => tableDiff.fromTable.hasColumn(col))
      .map(col => tableDiff.fromTable.getColumn(col)!)
      .filter(col => col.autoincrement)
      .map(col => `alter table \`${tableDiff.name}\` modify \`${col.name}\` ${this.getColumnDeclarationSQL({ ...col, autoincrement: false })}`)
      .join(';\n');
  }

  configureColumnDefault(column: Column, col: Knex.ColumnBuilder, knex: Knex, changedProperties?: Set<string>) {
    if (changedProperties || column.default !== undefined) {
      if (column.default == null) {
        col.defaultTo(null);
      } else {
        col.defaultTo(knex.raw(column.default + (column.extra ? ' ' + column.extra : '')));
      }
    }

    return col;
  }

  getRenameColumnSQL(tableName: string, oldColumnName: string, to: Column): string {
    tableName = this.platform.quoteIdentifier(tableName);
    oldColumnName = this.platform.quoteIdentifier(oldColumnName);
    const columnName = this.platform.quoteIdentifier(to.name);

    return `alter table ${tableName} change ${oldColumnName} ${columnName} ${this.getColumnDeclarationSQL(to)}`;
  }

  getRenameIndexSQL(tableName: string, index: Index, oldIndexName: string): string {
    tableName = this.platform.quoteIdentifier(tableName);
    oldIndexName = this.platform.quoteIdentifier(oldIndexName);
    const keyName = this.platform.quoteIdentifier(index.keyName);

    return `alter table ${tableName} rename index ${oldIndexName} to ${keyName}`;
  }

  getChangeColumnCommentSQL(tableName: string, to: Column): string {
    tableName = this.platform.quoteIdentifier(tableName);
    const columnName = this.platform.quoteIdentifier(to.name);

    return `alter table ${tableName} modify ${columnName} ${this.getColumnDeclarationSQL(to)}`;
  }

  createTableColumn(table: Knex.TableBuilder, column: Column, fromTable: DatabaseTable, changedProperties?: Set<string>) {
    if (column.mappedType instanceof MediumIntType) {
      return table.specificType(column.name, this.getColumnDeclarationSQL(column, true));
    }

    return super.createTableColumn(table, column, fromTable, changedProperties);
  }

  configureColumn(column: Column, col: Knex.ColumnBuilder, knex: Knex, changedProperties?: Set<string>) {
    if (column.mappedType instanceof MediumIntType) {
      return col;
    }

    return super.configureColumn(column, col, knex, changedProperties);
  }

  private getColumnDeclarationSQL(col: Column, addPrimary = false): string {
    let ret = col.type;
    ret += col.unsigned ? ' unsigned' : '';
    ret += col.autoincrement ? ' auto_increment' : '';
    ret += ' ';
    ret += col.nullable ? 'null' : 'not null';
    ret += col.default ? ' default ' + col.default : '';

    if (addPrimary && col.primary) {
      ret += ' primary key';
    }

    ret += col.comment ? ` comment ${this.platform.quoteValue(col.comment)}` : '';

    return ret;
  }

  getForeignKeysSQL(tableName: string, schemaName?: string): string {
    return `select distinct k.constraint_name as constraint_name, k.column_name as column_name, k.referenced_table_name as referenced_table_name, k.referenced_column_name as referenced_column_name, c.update_rule as update_rule, c.delete_rule as delete_rule `
      + `from information_schema.key_column_usage k `
      + `inner join information_schema.referential_constraints c on c.constraint_name = k.constraint_name and c.table_name = '${tableName}' `
      + `where k.table_name = '${tableName}' and k.table_schema = database() and c.constraint_schema = database() and k.referenced_column_name is not null`;
  }

  private getChecksSQL(tableName: string, _schemaName: string): string {
    return `select tc.constraint_schema as table_schema, tc.table_name as table_name, tc.constraint_name as name, tc.check_clause as expression,
      case when tc.level = 'Column' then tc.constraint_name else null end as column_name
      from information_schema.check_constraints tc
      where tc.table_name = '${tableName}' and tc.constraint_schema = database()`;
  }

  async getChecks(connection: AbstractSqlConnection, tableName: string, schemaName: string, columns?: Column[]): Promise<Check[]> {
    const sql = this.getChecksSQL(tableName, schemaName);
    const checks = await connection.execute<{ name: string; column_name: string; expression: string }[]>(sql);
    const ret: Check[] = [];

    for (const check of checks) {
      const match = check.expression.match(/^json_valid\(`(.*)`\)$/i);
      const col = columns?.find(col => col.name === match?.[1]);

      if (col && match) {
        col.type = 'json';
        col.mappedType = this.platform.getMappedType('json');
        delete col.length;
        continue;
      }

      ret.push({
        name: check.name,
        columnName: check.column_name,
        definition: `check (${check.expression})`,
        expression: check.expression,
      });
    }

    return ret;
  }

  async getEnumDefinitions(connection: AbstractSqlConnection, checks: Check[], tableName: string, schemaName?: string): Promise<Dictionary<string[]>> {
    const sql =  `select column_name as column_name, column_type as column_type from information_schema.columns
      where data_type = 'enum' and table_name = '${tableName}' and table_schema = database()`;
    const enums = await connection.execute<any[]>(sql);

    return enums.reduce((o, item) => {
      o[item.column_name] = item.column_type.match(/enum\((.*)\)/)[1].split(',').map((item: string) => item.match(/'(.*)'/)![1]);
      return o;
    }, {} as Dictionary<string[]>);
  }

  async getColumns(connection: AbstractSqlConnection, tableName: string, schemaName?: string): Promise<Column[]> {
    const sql = `select column_name as column_name,
      column_default as column_default,
      column_comment as column_comment,
      is_nullable as is_nullable,
      data_type as data_type,
      column_type as column_type,
      column_key as column_key,
      extra as extra,
      numeric_precision as numeric_precision,
      numeric_scale as numeric_scale,
      ifnull(datetime_precision, character_maximum_length) length
      from information_schema.columns where table_schema = database() and table_name = '${tableName}'
      order by ordinal_position`;
    const columns = await connection.execute<any[]>(sql);
    const str = (val?: string | number | null) => val != null ? '' + val : val;
    const extra = (val: string) => val.replace(/auto_increment|default_generated/i, '').trim();

    return columns.map(col => {
      const platform = connection.getPlatform();
      const mappedType = platform.getMappedType(col.column_type);
      const tmp = this.normalizeDefaultValue(col.column_default, col.length);
      const defaultValue = str(tmp === 'NULL' && col.is_nullable === 'YES' ? null : tmp);
      return {
        name: col.column_name,
        type: platform.isNumericColumn(mappedType) ? col.column_type.replace(/ unsigned$/, '').replace(/\(\d+\)$/, '') : col.column_type,
        mappedType,
        unsigned: col.column_type.endsWith(' unsigned'),
        length: col.length,
        default: this.wrap(defaultValue, mappedType),
        nullable: col.is_nullable === 'YES',
        primary: col.column_key === 'PRI',
        unique: col.column_key === 'UNI',
        autoincrement: col.extra === 'auto_increment',
        precision: col.numeric_precision,
        scale: col.numeric_scale,
        comment: col.column_comment,
        extra: extra(col.extra),
      };
    });
  }

  async getIndexes(connection: AbstractSqlConnection, tableName: string, schemaName?: string): Promise<Index[]> {
    const sql = `show index from \`${tableName}\``;
    const indexes = await connection.execute<any[]>(sql);

    return this.mapIndexes(indexes.map(index => ({
      columnNames: [index.Column_name],
      keyName: index.Key_name,
      unique: !index.Non_unique,
      primary: index.Key_name === 'PRIMARY',
    })));
  }

  normalizeDefaultValue(defaultValue: string, length: number) {
    return super.normalizeDefaultValue(defaultValue, length, MariaDbSchemaHelper.DEFAULT_VALUES);
  }

  protected wrap(val: string | undefined | null, type: Type<unknown>): string | undefined | null {
    return val;
  }

}
