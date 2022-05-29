"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6226],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return h}});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=p(a),h=i,c=u["".concat(s,".").concat(h)]||u[h]||d[h]||r;return a?n.createElement(c,o(o({ref:t},m),{},{components:a})):n.createElement(c,o({ref:t},m))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},9285:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return d}});var n=a(83117),i=a(80102),r=(a(67294),a(3905)),o=["components"],l={slug:"mikro-orm-5-released",title:"MikroORM 5: Stricter, Safer, Smarter",author:"Martin Ad\xe1mek",authorTitle:"Author of MikroORM",authorURL:"https://github.com/B4nan",authorImageURL:"https://avatars1.githubusercontent.com/u/615580?s=460&v=4",authorTwitter:"B4nan",tags:["typescript","javascript","node","sql"]},s=void 0,p={permalink:"/blog/mikro-orm-5-released",source:"@site/blog/2022-02-06-mikro-orm-5-released.md",title:"MikroORM 5: Stricter, Safer, Smarter",description:"The next major version of MikroORM has been just released. The title says: Stricter, Safer, Smarter \u2013 why?",date:"2022-02-06T00:00:00.000Z",formattedDate:"February 6, 2022",tags:[{label:"typescript",permalink:"/blog/tags/typescript"},{label:"javascript",permalink:"/blog/tags/javascript"},{label:"node",permalink:"/blog/tags/node"},{label:"sql",permalink:"/blog/tags/sql"}],readingTime:15.695,hasTruncateMarker:!1,authors:[{name:"Martin Ad\xe1mek",title:"Author of MikroORM",url:"https://github.com/B4nan",imageURL:"https://avatars1.githubusercontent.com/u/615580?s=460&v=4"}],frontMatter:{slug:"mikro-orm-5-released",title:"MikroORM 5: Stricter, Safer, Smarter",author:"Martin Ad\xe1mek",authorTitle:"Author of MikroORM",authorURL:"https://github.com/B4nan",authorImageURL:"https://avatars1.githubusercontent.com/u/615580?s=460&v=4",authorTwitter:"B4nan",tags:["typescript","javascript","node","sql"]},nextItem:{title:"MikroORM 4.1: Let\u2019s talk about performance",permalink:"/blog/mikro-orm-4-1-released"}},m={authorsImageUrls:[void 0]},d=[{value:"In case you don\u2019t know\u2026",id:"in-case-you-dont-know",level:3},{value:"Quick summary of 4.x releases",id:"quick-summary-of-4x-releases",level:3},{value:"Improved type safety",id:"improved-type-safety",level:3},{value:"Validation improvements",id:"validation-improvements",level:3},{value:"Reworked schema diffing",id:"reworked-schema-diffing",level:3},{value:"Smarter migrations",id:"smarter-migrations",level:3},{value:"Auto-flush mode",id:"auto-flush-mode",level:3},{value:"Automatic refreshing of loaded entities",id:"automatic-refreshing-of-loaded-entities",level:3},{value:"Seeder package",id:"seeder-package",level:3},{value:"Polymorphic embeddables",id:"polymorphic-embeddables",level:3},{value:"Populating lazy scalar properties",id:"populating-lazy-scalar-properties",level:3},{value:"Creating references without EntityManager",id:"creating-references-without-entitymanager",level:3},{value:"Smarter <code>expr</code> helper",id:"smarter-expr-helper",level:3},{value:"Awaitable QueryBuilder",id:"awaitable-querybuilder",level:3},{value:"Wildcard schema entities",id:"wildcard-schema-entities",level:3},{value:"Deep assigning of entities",id:"deep-assigning-of-entities",level:3},{value:"Experimental support for ES modules",id:"experimental-support-for-es-modules",level:3},{value:"Other notable changes",id:"other-notable-changes",level:3},{value:"What\u2019s next?",id:"whats-next",level:3}],u={toc:d};function h(e){var t=e.components,a=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The next major version of MikroORM has been just released. The title says: Stricter, Safer, Smarter \u2013 why?"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn-images-1.medium.com/max/430/0*atMJ3hrlUosSpnQy.jpg",alt:null})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Greatly improved type safety (e.g. populate and partial loading hints)"),(0,r.kt)("li",{parentName:"ul"},"Auto-flush mode (so we never lose in-memory changes)"),(0,r.kt)("li",{parentName:"ul"},"Automatic refreshing of loaded entities (say goodby to refresh: true)"),(0,r.kt)("li",{parentName:"ul"},"Reworked schema diffing with automatic down migrations support"),(0,r.kt)("li",{parentName:"ul"},"and ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/mikro-orm/mikro-orm/blob/master/CHANGELOG.md#500-rc0-2022-01-23"},"many many more"),"...")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This time it took almost a year to get here \u2013 initial work on v5 started ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/issues/1623"},"back in March 2021"),".")),(0,r.kt)("h3",{id:"in-case-you-dont-know"},"In case you don\u2019t know\u2026"),(0,r.kt)("p",null,"If you never heard of ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm"},"MikroORM"),", it\u2019s a TypeScript data-mapper ORM with Unit of Work and Identity Map. It supports MongoDB, MySQL, PostgreSQL, and SQLite drivers currently. Key features of the ORM are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/mikro-orm/mikro-orm#implicit-transactions"},"Implicit transactions")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/mikro-orm/mikro-orm#changeset-based-persistence"},"ChangeSet based persistence")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://mikro-orm.io/docs/identity-map/"},"Identity map"))),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn-images-1.medium.com/max/1024/0*fKozvvTJns0y3w5U.png",alt:null})),(0,r.kt)("p",null,"You can read the full ",(0,r.kt)("a",{parentName:"p",href:"https://medium.com/dailyjs/introducing-mikro-orm-typescript-data-mapper-orm-with-identity-map-9ba58d049e02"},"introductory article here")," (but note that many things have changed since that was written) or ",(0,r.kt)("a",{parentName:"p",href:"https://mikro-orm.io/"},"browse through the docs"),"."),(0,r.kt)("h3",{id:"quick-summary-of-4x-releases"},"Quick summary of 4.x releases"),(0,r.kt)("p",null,"Before we dive into all the things v5, let\u2019s recap what happened in 4.x releases:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://mikro-orm.io/docs/caching/"},"Result cache")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/mikro-orm/mikro-orm/pull/959"},"Automatic transaction context")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://mikro-orm.io/docs/embeddables/#nested-embeddables"},"Nested embeddables")," and many other improvements in this domain"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://mikro-orm.io/docs/configuration/#using-environment-variables"},"Using env vars for configuration"))),(0,r.kt)("p",null,"But enough of the history lesson, let\u2019s talk about the future!"),(0,r.kt)("h3",{id:"improved-type-safety"},"Improved type safety"),(0,r.kt)("p",null,"Let\u2019s jump right into the most interesting feature \u2013 strict typing (almost) everywhere! ",(0,r.kt)("inlineCode",{parentName:"p"},"em.create()"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"toJSON()"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"toObject()"),", populate, partial loading, and order by hints, all of that (and even more!) is now strictly typed."),(0,r.kt)("p",null,"Let\u2019s check the following example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const god = em.create(Author, {\n  name: 'God', // validates required properties\n  email: 'god@heaven.io',\n  books: [{\n    title: 'Bible, part 1',\n    tags: [{ name: 'old' }, { name: 'bestseller' }],\n  }],\n}, { persist: true }); // we can enable this globally via `persistOnCreate: true`\nawait em.flush();\n\n// simulate new request\nem.clear();\n\n// `authors` is of type `Loaded<Author, 'books.tags'>[]`\nconst authors = await em.find(Author, {}, {\n  populate: ['books.tags'], // populate hint can be inferred from `fields` if not explicitly provided\n  fields: ['books.tags.name'], // strict partial loading with dot notation support\n  orderBy: { name: 'asc', books: { tags: { name: 'asc' } } }, // strict order by with object nesting\n});\n\n// `books` and `tags` will be typed as `LoadedCollection` so we can use safe `$` accessor\nconsole.log(authors[0].books.$[0].tags.$[0].name);\nconst dto = wrap(authors[0]).toObject();\nconsole.log(dto.books[0].tags[0].name); // DTOs are also strictly typed\n")),(0,r.kt)("p",null,"First, we use ",(0,r.kt)("inlineCode",{parentName:"p"},"em.create()")," to build the whole entity graph in a single step. It will validate the payload for both types and optionality. Some properties on the entity might have default values provided via hooks or database functions \u2013 while we might want to define them as required properties, they should act as optional in the context of ",(0,r.kt)("inlineCode",{parentName:"p"},"em.create()"),". To deal with this problem, we can specify such properties that should be considered as optional via ",(0,r.kt)("inlineCode",{parentName:"p"},"OptionalProps")," symbol:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"@Entity()\nexport class Author {\n\n  // only `name` will be considered as required for `em.create()`\n  [OptionalProps]?: 'createdAt' | 'updatedAt';\n\n  @PrimaryKey()\n  id!: number;\n\n  @Property({ defaultRaw: 'current_timestamp()' })\n  createdAt!: Date;\n\n  @Property({ onUpdate: () => new Date(), length: 3, defaultRaw: 'current_timestamp(3)' })\n  updatedAt!: Date;\n\n  @Property()\n  name!: string;\n\n}\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Some property names are always considered as optional: ",(0,r.kt)("inlineCode",{parentName:"p"},"id"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"_id"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"uuid"),".")),(0,r.kt)("p",null,"Then we load all Author entities, populating their books and the book tags. All of the FindOptions here are strictly typed, moreover, we could even skip the populate hint as it can be inferred from fields option automatically."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn-images-1.medium.com/max/600/0*3g12H4O5KrzmQMrk.jpg",alt:null})),(0,r.kt)("p",null,"We might still need some type casting for DTOs. The serialized form of an entity can be very unpredictable \u2013 there are many variables that define how an entity will be serialized, e.g. loaded relation vs reference, property serializers, lazy properties, custom entity serializer/",(0,r.kt)("inlineCode",{parentName:"p"},"toJSON")," method, eager loading, recursion checks, \u2026 Therefore, all relations on the EntityDTO type are considered as loaded, this is mainly done to allow better DX as if we had all relations typed as ",(0,r.kt)("inlineCode",{parentName:"p"},"Primary<T> | EntityDTO<T>")," (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"number | EntityDTO<Book>"),"), it would be impossible to benefit from intellisense/autosuggestions. Imagine this scenario:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const book = {} as Book;\nconst dto = wrap(book).toObject(); // EntityDTO<Book>\n\n// this is now possible, but with the PK union type, we would need to type cast all the time\nconst name = dto.author.name;\n")),(0,r.kt)("h3",{id:"validation-improvements"},"Validation improvements"),(0,r.kt)("p",null,"Adding on top of the compile-time validation, we also get a runtime validation right before insert queries are fired, to ensure required properties have their values. This is important mainly in mongo, where we don\u2019t have optionality checks on the schema level."),(0,r.kt)("p",null,"When we try to use the CLI without installing it locally, we also get a warning. And what if we forget to update some of the ORM packages and ended up with version mismatch and multiple installed core packages? We now validate that too!"),(0,r.kt)("h3",{id:"reworked-schema-diffing"},"Reworked schema diffing"),(0,r.kt)("p",null,"Schema diffing has been one of the weakest spots. Often, additional queries were produced or it was even impossible to get to a fully synchronized state."),(0,r.kt)("p",null,"Schema diffing has been completely reworked to address all currently known issues, and adding ",(0,r.kt)("em",{parentName:"p"},"a bit more")," on top of that:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Diffing foreign key constraints"),(0,r.kt)("li",{parentName:"ul"},"Proper index diffing (before we compared just names)"),(0,r.kt)("li",{parentName:"ul"},"Custom index expressions"),(0,r.kt)("li",{parentName:"ul"},"Comment diffing"),(0,r.kt)("li",{parentName:"ul"},"Column length diffing (e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"numeric(10,2)")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"varchar(100)"),")"),(0,r.kt)("li",{parentName:"ul"},"Changing primary key types"),(0,r.kt)("li",{parentName:"ul"},"Schema/namespace diffing (Postgres only)"),(0,r.kt)("li",{parentName:"ul"},"Automatic down migrations (no SQLite support yet)"),(0,r.kt)("li",{parentName:"ul"},"Check constraints support (Postgres only)")),(0,r.kt)("h3",{id:"smarter-migrations"},"Smarter migrations"),(0,r.kt)("p",null,"In the production environment, we might want to use compiled migration files. Since v5, this should work almost out of the box, all we need to do is to configure the migrations path accordingly. Executed migrations now ignore the file extension, so we can use both node and ts-node on the same database. This is done in a backward-compatible manner."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { MikroORM, Utils } from '@mikro-orm/core';\n\nawait MikroORM.init({\n  migrations: {\n    path: 'dist/migrations',\n    pathTs: 'src/migrations',\n  },\n  // or alternatively\n  // migrations: {\n  //   path: Utils.detectTsNode() ? 'src/migrations' : 'dist/migrations',\n  // },\n  // ...\n});\n")),(0,r.kt)("p",null,"Creating new migration will now automatically save the target schema snapshot into the migrations folder. This snapshot will be then used if we try creating a new migration, instead of using the current database schema. This means that if we try to create new migration before we run the pending ones, we still get the right schema diff (and no migration will be created if no additional changes were made)."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Snapshots should be versioned just like the regular migration files.")),(0,r.kt)("h3",{id:"auto-flush-mode"},"Auto-flush mode"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn-images-1.medium.com/max/1024/0*J74FKP7MaZoHO3Al.jpg",alt:null})),(0,r.kt)("p",null,"Up until now, flushing was always an explicit action. With v5, we can configure the flushing strategy, similarly to how JPA/hibernate work. We have 3 flush modes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"FlushMode.COMMIT")," - The ",(0,r.kt)("inlineCode",{parentName:"li"},"EntityManager")," tries to delay the flush until the current transaction is committed, although it might flush prematurely too."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"FlushMode.AUTO")," - This is the default mode, and it flushes the ",(0,r.kt)("inlineCode",{parentName:"li"},"EntityManager")," only if necessary."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"FlushMode.ALWAYS")," - Flushes the ",(0,r.kt)("inlineCode",{parentName:"li"},"EntityManager")," before every query.")),(0,r.kt)("p",null,"FlushMode.AUTO will try to detect changes on the entity we are querying, and flush if there is an overlap:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// querying for author will trigger auto-flush if we have new author persisted\nconst a1 = new Author(...);\nem.persist(a1);\nconst r1 = await em.find(Author, {});\n\n// querying author won't trigger auto-flush if we have new book, but no changes on author\nconst b4 = new Book(...);\nem.persist(b4);\nconst r2 = await em.find(Author, {});\n\n// but querying for book will trigger auto-flush\nconst r3 = await em.find(Book, {});\n")),(0,r.kt)("p",null,"More about flush modes ",(0,r.kt)("a",{parentName:"p",href:"https://mikro-orm.io/docs/unit-of-work/#flush-modes"},"in the docs"),"."),(0,r.kt)("h3",{id:"automatic-refreshing-of-loaded-entities"},"Automatic refreshing of loaded entities"),(0,r.kt)("p",null,"Previously, when an entity was loaded and we needed to reload it, providing explicit refresh: true in the options was required. Refreshing of entity also had one problematic side effect \u2013 the entity data (used for computing changesets) were always updated based on the newly loaded entity, hence forgetting the previous state (resulting in possibly lost updates done on the entity before refreshing)."),(0,r.kt)("p",null,"Now we always merge the newly loaded data with the current state, and when we see an updated property, we keep the changed value instead. Moreover, for ",(0,r.kt)("inlineCode",{parentName:"p"},"em.findOne()")," with a primary key condition, we try to detect whether it makes sense to reload an entity, by comparing the options and already loaded property names. In this step the ",(0,r.kt)("inlineCode",{parentName:"p"},"fields")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"populate")," options are taken into account to support both partial loading and lazy properties."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// first partially load author with `id` and `email` only\nconst a1 = await em.findOneOrFail(Author, 123, { fields: ['id', 'email'] });\na1.email = 'lol'; // let's change the email\n\n// reloading with same fields won't fire the query (as before)\nconst a2 = await em.findOneOrFail(Author, 123, { fields: ['email'] });\nconsole.log(a1 === a2); // true, same entity instance, no query was fired\n\n// reloading with additional fields will work without `refresh: true`\nconst a3 = await em.findOneOrFail(Author, 123, { fields: ['id', 'age'] });\nconsole.log(a1 === a3); // true, same entity instance, but updated!\nconsole.log(a1.age); // new values are loaded\na1.age = 1000; // let's override them\n\n// reloading full entity will work without `refresh: true`\nconst a4 = await em.findOneOrFail(Author, 123, { populate: ['books'] });\nconsole.log(a1 === a4); // true, same entity instance, but updated!\nconsole.log(a1.termsAccepted); // new values are loaded\n\nawait em.flush(); // updates the author with new email and age\n")),(0,r.kt)("p",null,"For complex conditions in ",(0,r.kt)("inlineCode",{parentName:"p"},"em.findOne()")," and for any queries via ",(0,r.kt)("inlineCode",{parentName:"p"},"em.find()"),", we always do the query anyway, but now instead of ignoring the data in case such entity was loaded, we merge them in the same manner."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// first partially load author entities\nconst r1 = await em.find(Author, {}, { fields: ['id'] });\nr1[0].email = 'lol'; // let's change one of the emails\nconsole.log(r1[0].name); // undefined, not loaded\n\n// reload full entities - no `refresh: true` needed!\nconst r2 = await em.find(Author, {});\nconsole.log(r2[0]); // fully loaded author entity, but `email` is changed to 'lol'\nconsole.log(r1[0] === r2[0]); // true, same entity instance, just updated!\n\n// flushing will now fire one update query to change the email of one author\nawait em.flush();\n")),(0,r.kt)("h3",{id:"seeder-package"},"Seeder package"),(0,r.kt)("p",null,"MikroORM v5 now has a new package for seeding your database with initial or testing data. It allows creating entities via the same EntityManager API as usual, adding support for entity factories, and generating fake data via faker (the newly release community version)."),(0,r.kt)("p",null,"See the ",(0,r.kt)("a",{parentName:"p",href:"https://mikro-orm.io/docs/seeding"},"seeder docs")," for more examples."),(0,r.kt)("h3",{id:"polymorphic-embeddables"},"Polymorphic embeddables"),(0,r.kt)("p",null,"Polymorphic embeddables allow us to define multiple classes for a single embedded property and the right one will be used based on the discriminator column, similar to how single table inheritance works. While this currently works only for embeddables, support for polymorphic entities will be probably added in one of the 5.x releases."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"@Entity()\nclass Owner {\n\n  @PrimaryKey()\n  id!: number;\n\n  @Property()\n  name!: string;\n\n  @Embedded(() => [Cat, Dog])\n  pet!: Cat | Dog;\n\n}\n")),(0,r.kt)("p",null,"Check out the ",(0,r.kt)("a",{parentName:"p",href:"https://mikro-orm.io/docs/embeddables/#polymorphic-embeddables"},"documentation")," for a complete example."),(0,r.kt)("p",null,"There are many other small improvements in embeddables, as well as many issues were addressed. Two examples:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Support for many-to-one relations (storing only primary key and being able to populate the relation same as with regular entities)"),(0,r.kt)("li",{parentName:"ul"},"Support for ",(0,r.kt)("inlineCode",{parentName:"li"},"onCreate")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"onUpdate")," property options")),(0,r.kt)("h3",{id:"populating-lazy-scalar-properties"},"Populating lazy scalar properties"),(0,r.kt)("p",null,"Previously, the only way to populate a lazy scalar property was during the initial load of containing entity. If such entity was already loaded in the identity map (without this property), we needed to refresh its state \u2013 and potentially lose some state. MikroORM v5 allows to populate such properties via ",(0,r.kt)("inlineCode",{parentName:"p"},"em.populate()")," too. Doing so will never override any in-memory changes we might have done on the entity."),(0,r.kt)("h3",{id:"creating-references-without-entitymanager"},"Creating references without EntityManager"),(0,r.kt)("p",null,"When we wanted to create a reference, so an entity that is represented only by its primary key, we always had to have access to the current ",(0,r.kt)("inlineCode",{parentName:"p"},"EntityManager")," instance, as such entity always needed to be managed."),(0,r.kt)("p",null,"Thanks to the new helper methods on the Reference class, we can now create entity references without access to ",(0,r.kt)("inlineCode",{parentName:"p"},"EntityManager"),". This can be handy if you want to create a reference from an inside entity constructor:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"@Entity()\nexport class Book {\n\n  @ManyToOne(() => Author, { wrappedReference: true })\n  author!: IdentifiedReference<Author>;\n\n  constructor(authorId: number) {\n    this.author = Reference.createFromPK(Author, authorId);\n  }\n\n}\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Reference")," wrapper is an optional class to allow more type safety over relationships. Alternatively, we can use ",(0,r.kt)("inlineCode",{parentName:"p"},"Reference.createNakedFromPK()"),".")),(0,r.kt)("p",null,"This will create an unmanaged reference, that will be then merged to the ",(0,r.kt)("inlineCode",{parentName:"p"},"EntityManager")," once owning entity gets flushed. Note that before we flush it, methods like ",(0,r.kt)("inlineCode",{parentName:"p"},"Reference.init()")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"Reference.load()")," won\u2019t be available as they require the EntityManager instance."),(0,r.kt)("h3",{id:"smarter-expr-helper"},"Smarter ",(0,r.kt)("inlineCode",{parentName:"h3"},"expr")," helper"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"expr()")," helper can be used to get around strict typing. It was an identity function, doing nothing more than returning its parameter \u2013 all it did was to tell TypeScript the value is actually of a different type (a generic string to be precise)."),(0,r.kt)("p",null,"We can now use the helper in two more ways:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"With a callback signature to allow dynamic aliasing of the expression"),(0,r.kt)("li",{parentName:"ul"},"With an array argument to allow comparing tuples")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { expr } from '@mikro-orm/core';\n\nconst res1 = await em.find(Book, {\n  // the type argument is optional, use it to get autocomplete on the entity properties\n  [expr<Book>(['price', 'createdAt'])]: { $lte: [100, new Date()] },\n});\n\n// will issue query similar to this:\n// select `b0`.* from `book` as `b0` where (`b0`.`price`, `b0`.`created_at`) <= (?, ?)\n\nconst res2 = await em.find(Book, {\n  // the type argument is optional, use it to get autocomplete on the entity properties\n  [expr(as => `lower(${as}.name)`)]: 'jon',\n});\n\n// will issue query similar to this:\n// select `b0`.* from `book` as `b0` where lower(b0.name) = ?\n")),(0,r.kt)("h3",{id:"awaitable-querybuilder"},"Awaitable QueryBuilder"),(0,r.kt)("p",null,"QueryBuilder is now aware of its type, and the ",(0,r.kt)("inlineCode",{parentName:"p"},"getResult()")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"execute()")," methods are typed based on it. We can also await the QueryBuilder instance directly, which will automatically execute the QB and return the appropriate response. The QB instance is now typed based on usage of ",(0,r.kt)("inlineCode",{parentName:"p"},"select"),"/",(0,r.kt)("inlineCode",{parentName:"p"},"insert"),"/",(0,r.kt)("inlineCode",{parentName:"p"},"update"),"/",(0,r.kt)("inlineCode",{parentName:"p"},"delete"),"/",(0,r.kt)("inlineCode",{parentName:"p"},"truncate")," methods to one of:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"SelectQueryBuilder")," \u2013 awaiting yields array of entities"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"CountQueryBuilder")," \u2013 awaiting yields number"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"InsertQueryBuilder")," \u2013 awaiting yields ",(0,r.kt)("inlineCode",{parentName:"li"},"QueryResult")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"UpdateQueryBuilder")," \u2013 awaiting yields ",(0,r.kt)("inlineCode",{parentName:"li"},"QueryResult")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"DeleteQueryBuilder")," \u2013 awaiting yields ",(0,r.kt)("inlineCode",{parentName:"li"},"QueryResult")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"TruncateQueryBuilder")," \u2013 awaiting yields ",(0,r.kt)("inlineCode",{parentName:"li"},"QueryResult"))),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn-images-1.medium.com/max/798/0*jFsyXtSw1ZzZ9-cD.jpg",alt:null})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const res1 = await em.createQueryBuilder(Publisher).insert({\n  name: 'p1',\n  type: PublisherType.GLOBAL,\n});\n// res1 is of type `QueryResult<Publisher>`\nconsole.log(res1.insertId);\n\nconst res2 = await em.createQueryBuilder(Publisher)\n  .select('*')\n  .where({ name: 'p1' })\n  .limit(5);\n// res2 is Publisher[]\nconsole.log(res2.map(p => p.name));\n\nconst res3 = await em.createQueryBuilder(Publisher).count().where({ name: 'p1' });\n// res3 is number\nconsole.log(res3 > 0);\n\nconst res4 = await em.createQueryBuilder(Publisher)\n  .update({ type: PublisherType.LOCAL })\n  .where({ name: 'p1' });\n// res4 is QueryResult<Publisher>\nconsole.log(res4.affectedRows > 0);\n\nconst res5 = await em.createQueryBuilder(Publisher).delete().where({ name: 'p1' });\n// res4 is QueryResult<Publisher>\nconsole.log(res4.affectedRows > 0);\nexpect(res5.affectedRows > 0).toBe(true); // test the type\n")),(0,r.kt)("h3",{id:"wildcard-schema-entities"},"Wildcard schema entities"),(0,r.kt)("p",null,"Up until now, we were able to define entities in a specific schema, or without a schema. Such entities then used the schema based on ORM config or ",(0,r.kt)("inlineCode",{parentName:"p"},"FindOptions"),". This allowed us to read entities from a specific schema, but we were missing the power of Unit of Work here."),(0,r.kt)("p",null,"With v5, entity instances now hold schema name (as part of ",(0,r.kt)("inlineCode",{parentName:"p"},"WrappedEntity"),"). Managed entities will have the schema from FindOptions or metadata. Methods that create new entity instances like ",(0,r.kt)("inlineCode",{parentName:"p"},"em.create()")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"em.getReference()")," now have an options parameter to allow setting the schema. We can also use ",(0,r.kt)("inlineCode",{parentName:"p"},"wrap(entity).getSchema()")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"wrap(entity).setSchema()"),"."),(0,r.kt)("p",null,"Entities can now specify wildcard schema via ",(0,r.kt)("inlineCode",{parentName:"p"},"@Entity({ schema: '*' })"),". That way they will be ignored in SchemaGenerator unless the schema option is specified."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If we specify schema, the entity only exists in that schema"),(0,r.kt)("li",{parentName:"ul"},"If we define ",(0,r.kt)("inlineCode",{parentName:"li"},"*")," schema, the entity can exist in any schema, always controlled by the parameter"),(0,r.kt)("li",{parentName:"ul"},"If we skip schema option, the value will be taken from global ORM config")),(0,r.kt)("p",null,"More about this topic can be found ",(0,r.kt)("a",{parentName:"p",href:"https://mikro-orm.io/docs/next/multiple-schemas#wildcard-schema"},"here"),"."),(0,r.kt)("h3",{id:"deep-assigning-of-entities"},"Deep assigning of entities"),(0,r.kt)("p",null,"Another weak spot was assigning new values to existing entities. While ",(0,r.kt)("inlineCode",{parentName:"p"},"wrap().assign()")," was originally designed to update a single entity and its values, a lot of users wanted to assign an entity graph, updating relations in a single step too."),(0,r.kt)("p",null,"With v5, the way how ",(0,r.kt)("inlineCode",{parentName:"p"},"EntityAssigner")," detects what entity should be updated has changed. Assigning a deep entity graph should be possible by default, without any additional options. It works based on matching entity primary keys, so if you want to issue an update for a relationship instead of creating new relation, make sure you first load it and pass down its primary key to the assign helper:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const book = await em.findOneOrFail(Book, 1, { populate: ['author'] });\n\n// update existing book's author's name\nwrap(book).assign({\n  author: {\n    id: book.author.id,\n    name: 'New name...',\n  },\n});\n")),(0,r.kt)("p",null,"If we want to always update the entity, even without the entity PK being present in data, we can use ",(0,r.kt)("inlineCode",{parentName:"p"},"updateByPrimaryKey: false"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const book = await em.findOneOrFail(Book, 1, { populate: ['author'] });\n\n// update existing book's author's name\nwrap(book).assign({\n  author: {\n    name: 'New name...',\n  },\n}, { updateByPrimaryKey: false });\n")),(0,r.kt)("p",null,"More examples on this topic can be found ",(0,r.kt)("a",{parentName:"p",href:"https://mikro-orm.io/docs/entity-helper/#updating-deep-entity-graph"},"in the docs"),"."),(0,r.kt)("h3",{id:"experimental-support-for-es-modules"},"Experimental support for ES modules"),(0,r.kt)("p",null,"While MikroORM v5 is still compiled and published as CommonJS, we added several improvements that should allow using it with ESM projects too. Namely, we use the ",(0,r.kt)("inlineCode",{parentName:"p"},"gen-esm-wrapper")," package to allow using named imports, and we use one nasty trick to keep dynamic imports instead of compiling them to require statements \u2013 for that we need to use ",(0,r.kt)("inlineCode",{parentName:"p"},"MIKRO_ORM_DYNAMIC_IMPORTS")," env var. This should allow us to use folder-based discovery with ES modules, which was previously not possible."),(0,r.kt)("h3",{id:"other-notable-changes"},"Other notable changes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Partial loading support (",(0,r.kt)("inlineCode",{parentName:"li"},"fields"),") for joined loading strategy"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"AsyncLocalStorage")," used by default in the ",(0,r.kt)("inlineCode",{parentName:"li"},"RequestContext")," helper"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"onLoad")," event (like ",(0,r.kt)("inlineCode",{parentName:"li"},"onInit"),", but allows async and fires only for loaded entities, not references)"),(0,r.kt)("li",{parentName:"ul"},"Exporting async functions from CLI config"),(0,r.kt)("li",{parentName:"ul"},"Configurable aliasing strategy for SQL"),(0,r.kt)("li",{parentName:"ul"},"Allow providing ",(0,r.kt)("a",{parentName:"li",href:"https://mikro-orm.io/docs/logging"},"custom Logger instance")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://mikro-orm.io/docs/configuration/#persist-created-entities-automatically"},(0,r.kt)("inlineCode",{parentName:"a"},"persist")," option in ",(0,r.kt)("inlineCode",{parentName:"a"},"em.create()")," and ",(0,r.kt)("inlineCode",{parentName:"a"},"persistOnCreate")," global configuration")),(0,r.kt)("li",{parentName:"ul"},"M:N support in entity generator"),(0,r.kt)("li",{parentName:"ul"},"Support for specifying transaction isolation level"),(0,r.kt)("li",{parentName:"ul"},"Controlling ",(0,r.kt)("a",{parentName:"li",href:"https://mikro-orm.io/docs/loading-strategies#population-where-condition"},"where condition for populate hints")),(0,r.kt)("li",{parentName:"ul"},"Revamped ",(0,r.kt)("a",{parentName:"li",href:"https://mikro-orm.io/api"},"API docs")),(0,r.kt)("li",{parentName:"ul"},"and ",(0,r.kt)("em",{parentName:"li"},"many many")," more, see the ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/mikro-orm/mikro-orm/blob/master/CHANGELOG.md#500-rc2-2022-02-03"},"full changelog here"))),(0,r.kt)("p",null,"Also be sure to check the ",(0,r.kt)("a",{parentName:"p",href:"https://mikro-orm.io/docs/upgrading-v4-to-v5"},"upgrading guide"),"."),(0,r.kt)("h3",{id:"whats-next"},"What\u2019s next?"),(0,r.kt)("p",null,"Here is a list of things I would like to focus on going forward:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"allow specifying pivot entity for M:N relations (so we can have additional columns there, but still map it as M:N for reading purposes)"),(0,r.kt)("li",{parentName:"ul"},"support for database views (or maybe just entities representing SQL expressions)"),(0,r.kt)("li",{parentName:"ul"},"more drivers \u2013 namely better-sqlite3 and cockroach sounds like low hanging fruit, given knex now supports those natively")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"Like")," ",(0,r.kt)("a",{parentName:"p",href:"https://mikro-orm.io/"},(0,r.kt)("em",{parentName:"a"},"MikroORM")),(0,r.kt)("em",{parentName:"p"},"? \u2b50\ufe0f")," ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm"},(0,r.kt)("em",{parentName:"a"},"Star it"))," ",(0,r.kt)("em",{parentName:"p"},"on GitHub and share this article with your friends. If you want to support the project financially, you can do so via")," ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/sponsors/B4nan"},(0,r.kt)("em",{parentName:"a"},"GitHub Sponsors")),(0,r.kt)("em",{parentName:"p"},"."))))}h.isMDXComponent=!0}}]);