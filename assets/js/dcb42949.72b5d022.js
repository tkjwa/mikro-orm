"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8271],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(r),m=a,f=c["".concat(s,".").concat(m)]||c[m]||d[m]||o;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},55993:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return d}});var n=r(83117),a=r(80102),o=(r(67294),r(3905)),i=["components"],l={title:"Property Validation"},s=void 0,p={unversionedId:"property-validation",id:"version-5.1/property-validation",title:"Property Validation",description:"Required properties",source:"@site/versioned_docs/version-5.1/property-validation.md",sourceDirName:".",slug:"/property-validation",permalink:"/docs/5.1/property-validation",draft:!1,editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-5.1/property-validation.md",tags:[],version:"5.1",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1658155268,formattedLastUpdatedAt:"Jul 18, 2022",frontMatter:{title:"Property Validation"},sidebar:"docs",previous:{title:"Naming Strategy",permalink:"/docs/5.1/naming-strategy"},next:{title:"Migrations",permalink:"/docs/5.1/migrations"}},u={},d=[{value:"Required properties",id:"required-properties",level:2},{value:"Properties with default value",id:"properties-with-default-value",level:3},{value:"Runtime validation",id:"runtime-validation",level:3},{value:"Note about optional properties and metadata reflection",id:"note-about-optional-properties-and-metadata-reflection",level:3},{value:"Strict property type validation",id:"strict-property-type-validation",level:2}],c={toc:d};function m(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"required-properties"},"Required properties"),(0,o.kt)("p",null,"Entity properties are by default considered as required, and as such, they will be validated on both type level and runtime level. To make a property nullable, we need to mark this both at type level and at metadata level (unless we are using ",(0,o.kt)("inlineCode",{parentName:"p"},"ts-morph")," for metadata reflection):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"@Property({ nullable: true })\nname?: string;\n")),(0,o.kt)("p",null,"In case we want to use explicit ",(0,o.kt)("inlineCode",{parentName:"p"},"null"),", we should also provide property initializer:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"@Property({ type: 'string', nullable: true })\nname: string | null = null;\n")),(0,o.kt)("h3",{id:"properties-with-default-value"},"Properties with default value"),(0,o.kt)("p",null,"The runtime validation will work fine if your required properties have default value. But when it comes to type validation, we will need additional hint for TypeScript, so it understands our property (for TS defined as required) is in fact optional too (because we have a default value for it). We have two options:"),(0,o.kt)("p",null,"Define property as optional even when it has a default value (not perfect as it will allow unsetting such property, which might not be what you want):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"@Property({ default: 1 })\nlevel?: number = 1;\n")),(0,o.kt)("p",null,"Or use ",(0,o.kt)("inlineCode",{parentName:"p"},"OptionalProps")," symbol, specially designed to help with this use case. It should be defined as optional property on the entity and its type needs to be a union of all the properties you want to mark as optional."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { OptionalProps } from '@mikro-orm/core';\n\n@Entity()\nclass User {\n\n  [OptionalProps]?: 'foo' | 'bar';\n\n  @PrimaryKey()\n  id!: number;\n\n  @Property({ default: 1 })\n  foo: number = 1;\n\n  @Property({ default: 2 })\n  bar: number = 2;\n\n}\n")),(0,o.kt)("h3",{id:"runtime-validation"},"Runtime validation"),(0,o.kt)("p",null,"The runtime validation happens on flush operation, right before we fire the insert queries."),(0,o.kt)("p",null,"If for some reason we don't want the ORM to throw on missing properties that are marked as required, we can disable the validation via ",(0,o.kt)("inlineCode",{parentName:"p"},"validateRequired: false"),". This validation is enabled by default since v5."),(0,o.kt)("h3",{id:"note-about-optional-properties-and-metadata-reflection"},"Note about optional properties and metadata reflection"),(0,o.kt)("p",null,"When we define our entities, we need to be careful about optional properties. With ",(0,o.kt)("inlineCode",{parentName:"p"},"reflect-metadata")," provider (the default one), the property type can be inferred only if we mark properties as optional via ",(0,o.kt)("inlineCode",{parentName:"p"},"?")," suffix - if we would use a type union like ",(0,o.kt)("inlineCode",{parentName:"p"},"string | null"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"reflect-metadata")," won't help us with such type, and we will be forced to define it explicitly. This issue is not present with ",(0,o.kt)("inlineCode",{parentName:"p"},"ts-morph")," provider."),(0,o.kt)("h2",{id:"strict-property-type-validation"},"Strict property type validation"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Since v4.0.3 the validation needs to be explicitly enabled via ",(0,o.kt)("inlineCode",{parentName:"p"},"validate: true"),".\nIt has performance implications and usually should not be needed, as long as\nyou don't modify your entities via ",(0,o.kt)("inlineCode",{parentName:"p"},"Object.assign()"),".")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"MirkoORM")," will validate your properties before actual persisting happens. It will try to fix wrong\ndata types for you automatically. If automatic conversion fails, it will throw an error. You can\nenable strict mode to disable this feature and let ORM throw errors instead. Validation is triggered\nwhen persisting the entity."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// number instead of string will throw\nconst author = new Author('test', 'test');\nwrap(author).assign({ name: 111, email: 222 });\nawait orm.em.persistAndFlush(author); // throws \"Validation error: trying to set Author.name of type 'string' to '111' of type 'number'\"\n\n// string date with unknown format will throw\nwrap(author).assign(author, { name: '333', email: '444', born: 'asd' });\nawait orm.em.persistAndFlush(author); // throws \"Validation error: trying to set Author.born of type 'date' to 'asd' of type 'string'\"\n\n// string date with correct format will be auto-corrected\nwrap(author).assign({ name: '333', email: '444', born: '2018-01-01' });\nawait orm.em.persistAndFlush(author);\nconsole.log(author.born).toBe(true); // instance of Date\n\n// Date object will be ok\nwrap(author).assign({ born: new Date() });\nawait orm.em.persistAndFlush(author);\nconsole.log(author.born).toBe(true); // instance of Date\n\n// null will be ok\nwrap(author).assign({ born: null });\nawait orm.em.persistAndFlush(author);\nconsole.log(author.born); // null\n\n// string number with correct format will be auto-corrected\nwrap(author).assign({ age: '21' });\nawait orm.em.persistAndFlush(author);\nconsole.log(author.age); // number 21\n\n// string instead of number with will throw\nwrap(author).assign({ age: 'asd' });\nawait orm.em.persistAndFlush(author); // throws \"Validation error: trying to set Author.age of type 'number' to 'asd' of type 'string'\"\nwrap(author).assign({ age: new Date() });\nawait orm.em.persistAndFlush(author); // throws \"Validation error: trying to set Author.age of type 'number' to '2019-01-17T21:14:23.875Z' of type 'date'\"\nwrap(author).assign({ age: false });\nawait orm.em.persistAndFlush(author); // throws \"Validation error: trying to set Author.age of type 'number' to 'false' of type 'boolean'\"\n")))}m.isMDXComponent=!0}}]);