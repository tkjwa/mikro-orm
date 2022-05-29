"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2288],{9460:function(e,n,t){t.d(n,{C:function(){return a},n:function(){return i}});var r=t(67294),u=t(44700),o=r.createContext(null);function i(e){var n=e.children,t=e.content,u=e.isBlogPostPage,i=function(e){var n=e.content,t=e.isBlogPostPage;return(0,r.useMemo)((function(){return{metadata:n.metadata,frontMatter:n.frontMatter,assets:n.assets,toc:n.toc,isBlogPostPage:t}}),[n,t])}({content:t,isBlogPostPage:void 0!==u&&u});return r.createElement(o.Provider,{value:i},n)}function a(){var e=(0,r.useContext)(o);if(null===e)throw new u.i6("BlogPostProvider");return e}},65130:function(e,n,t){t.d(n,{b:function(){return i},k:function(){return a}});var r=t(67294),u=t(44700),o=r.createContext(null);function i(e){var n=e.children,t=function(e){return(0,r.useMemo)((function(){return{metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc}}),[e])}(e.content);return r.createElement(o.Provider,{value:t},n)}function a(){var e=(0,r.useContext)(o);if(null===e)throw new u.i6("DocProvider");return e}},14353:function(e,n,t){t.d(n,{D:function(){return a},f:function(){return c}});var r=t(67294),u=t(44700),o=Symbol("EmptyContext"),i=r.createContext(o);function a(e){var n=e.children,t=(0,r.useState)(null),u=t[0],o=t[1],a=(0,r.useMemo)((function(){return{expandedItem:u,setExpandedItem:o}}),[u]);return r.createElement(i.Provider,{value:a},n)}function c(){var e=(0,r.useContext)(i);if(e===o)throw new u.i6("DocSidebarItemsExpandedStateProvider");return e}},2730:function(e,n,t){t.d(n,{a:function(){return i}});var r=t(67294),u=t(12466),o=t(85936);function i(e){var n=e.threshold,t=(0,r.useState)(!1),i=t[0],a=t[1],c=(0,r.useRef)(!1),s=(0,u.Ct)(),l=s.startScroll,f=s.cancelScroll;return(0,u.RF)((function(e,t){var r=e.scrollY,u=null==t?void 0:t.scrollY;u&&(c.current?c.current=!1:r>=u?(f(),a(!1)):r<n?a(!1):r+window.innerHeight<document.documentElement.scrollHeight&&a(!0))})),(0,o.S)((function(e){e.location.hash&&(c.current=!0,a(!1))})),{shown:i,scrollToTop:function(){return l(0)}}}},96841:function(e,n,t){t.d(n,{S:function(){return c}});var r=t(67294),u=t(86668);function o(e){var n=e.getBoundingClientRect();return n.top===n.bottom?o(e.parentNode):n}function i(e,n){var t,r,u=n.anchorTopOffset,i=e.find((function(e){return o(e).top>=u}));return i?function(e){return e.top>0&&e.bottom<window.innerHeight/2}(o(i))?i:null!=(r=e[e.indexOf(i)-1])?r:null:null!=(t=e[e.length-1])?t:null}function a(){var e=(0,r.useRef)(0),n=(0,u.L)().navbar.hideOnScroll;return(0,r.useEffect)((function(){e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function c(e){var n=(0,r.useRef)(void 0),t=a();(0,r.useEffect)((function(){if(!e)return function(){};var r=e.linkClassName,u=e.linkActiveClassName,o=e.minHeadingLevel,a=e.maxHeadingLevel;function c(){var e=function(e){return Array.from(document.getElementsByClassName(e))}(r),c=function(e){for(var n=e.minHeadingLevel,t=e.maxHeadingLevel,r=[],u=n;u<=t;u+=1)r.push("h"+u+".anchor");return Array.from(document.querySelectorAll(r.join()))}({minHeadingLevel:o,maxHeadingLevel:a}),s=i(c,{anchorTopOffset:t.current}),l=e.find((function(e){return s&&s.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)}));e.forEach((function(e){!function(e,t){t?(n.current&&n.current!==e&&n.current.classList.remove(u),e.classList.add(u),n.current=e):e.classList.remove(u)}(e,e===l)}))}return document.addEventListener("scroll",c),document.addEventListener("resize",c),c(),function(){document.removeEventListener("scroll",c),document.removeEventListener("resize",c)}}),[e,t])}},6497:function(e,n,t){t.r(n),t.d(n,{Collapsible:function(){return c.z},HtmlClassNameProvider:function(){return f.FG},NavbarSecondaryMenuFiller:function(){return m.Zo},PageMetadata:function(){return f.d},ReactContextError:function(){return l.i6},ThemeClassNames:function(){return s.k},composeProviders:function(){return l.Qc},createStorageSlot:function(){return u.W},duplicates:function(){return C.l},isMultiColumnFooterLinks:function(){return h},isRegexpStringMatch:function(){return p.F},listStorageKeys:function(){return u._},listTagsByLetters:function(){return g.P},translateTagsPageTitle:function(){return g.M},uniq:function(){return C.j},useCollapsible:function(){return c.u},useColorMode:function(){return d.I},useContextualSearchFilters:function(){return o._q},useCurrentSidebarCategory:function(){return i.jA},useDocsPreferredVersion:function(){return b.J},useEvent:function(){return l.zX},useIsomorphicLayoutEffect:function(){return l.LI},usePluralForm:function(){return a.c},usePrevious:function(){return l.D9},usePrismTheme:function(){return P.p},useThemeConfig:function(){return r.L},useWindowSize:function(){return v.i}});var r=t(86668),u=t(50012),o=t(43320),i=t(24575),a=t(88824),c=t(86043),s=t(35281),l=t(44700),f=t(10833),d=t(92949),m=t(13102),v=t(87524),g=t(35155);function h(e){return"title"in e[0]}var p=t(98022),C=t(67392),P=t(66412),b=t(60373)},90932:function(e,n,t){t.r(n),t.d(n,{AnnouncementBarProvider:function(){return l.pl},BlogPostProvider:function(){return c.n},Collapsible:function(){return r.Collapsible},ColorModeProvider:function(){return v.S},DEFAULT_SEARCH_TAG:function(){return p.HX},DocProvider:function(){return a.b},DocSidebarItemsExpandedStateProvider:function(){return u.D},DocsPreferredVersionContextProvider:function(){return s.L5},DocsSidebarProvider:function(){return i.b},DocsVersionProvider:function(){return o.q},HtmlClassNameProvider:function(){return r.HtmlClassNameProvider},NavbarProvider:function(){return x.V},NavbarSecondaryMenuFiller:function(){return r.NavbarSecondaryMenuFiller},PageMetadata:function(){return r.PageMetadata},PluginHtmlClassNameProvider:function(){return M.VC},ReactContextError:function(){return r.ReactContextError},ScrollControllerProvider:function(){return L.OC},TabGroupChoiceProvider:function(){return f.z},ThemeClassNames:function(){return r.ThemeClassNames},composeProviders:function(){return r.composeProviders},containsLineNumbers:function(){return h.nt},createStorageSlot:function(){return r.createStorageSlot},docVersionSearchTag:function(){return p.os},duplicates:function(){return r.duplicates},findFirstCategoryLink:function(){return C.Wl},findSidebarCategory:function(){return C.em},getPrismCssVariables:function(){return h.QC},isActiveSidebarItem:function(){return C._F},isDocsPluginEnabled:function(){return C.cE},isMultiColumnFooterLinks:function(){return r.isMultiColumnFooterLinks},isRegexpStringMatch:function(){return r.isRegexpStringMatch},isSamePath:function(){return y.Mg},keyboardFocusedClassName:function(){return H.h},listStorageKeys:function(){return r.listStorageKeys},listTagsByLetters:function(){return r.listTagsByLetters},parseCodeBlockTitle:function(){return h.bc},parseLanguage:function(){return h.Vo},parseLines:function(){return h.nZ},splitNavbarItems:function(){return x.A},translateTagsPageTitle:function(){return r.translateTagsPageTitle},uniq:function(){return r.uniq},useAlternatePageUtils:function(){return g.l},useAnnouncementBar:function(){return l.nT},useBackToTopButton:function(){return w.a},useBlogPost:function(){return c.C},useCodeWordWrap:function(){return B.F},useCollapsible:function(){return r.useCollapsible},useColorMode:function(){return r.useColorMode},useContextualSearchFilters:function(){return r.useContextualSearchFilters},useCurrentSidebarCategory:function(){return r.useCurrentSidebarCategory},useDoc:function(){return a.k},useDocById:function(){return C.xz},useDocRouteMetadata:function(){return C.hI},useDocSidebarItemsExpandedState:function(){return u.f},useDocsPreferredVersion:function(){return r.useDocsPreferredVersion},useDocsPreferredVersionByPluginId:function(){return s.Oh},useDocsSidebar:function(){return i.V},useDocsVersion:function(){return o.E},useDocsVersionCandidates:function(){return C.lO},useEvent:function(){return r.useEvent},useFilteredAndTreeifiedTOC:function(){return E.b},useHideableNavbar:function(){return D.c},useHistoryPopHandler:function(){return T.R},useHomePageRoute:function(){return y.Ns},useIsomorphicLayoutEffect:function(){return r.useIsomorphicLayoutEffect},useKeyboardNavigation:function(){return H.t},useLayoutDoc:function(){return C.vY},useLayoutDocsSidebar:function(){return C.oz},useLocalPathname:function(){return S.b},useLocationChange:function(){return b.S},useLockBodyScroll:function(){return N.N},useNavbarMobileSidebar:function(){return d.e},useNavbarSecondaryMenu:function(){return m.Y},usePluralForm:function(){return r.usePluralForm},usePrevious:function(){return r.usePrevious},usePrismTheme:function(){return r.usePrismTheme},useScrollController:function(){return L.sG},useScrollPosition:function(){return L.RF},useScrollPositionBlocker:function(){return L.o5},useSearchPage:function(){return I.O},useSidebarBreadcrumbs:function(){return C.s1},useSkipToContent:function(){return k.a},useSmoothScrollTo:function(){return L.Ct},useTOCHighlight:function(){return F.S},useTabGroupChoice:function(){return f.U},useThemeConfig:function(){return r.useThemeConfig},useTitleFormatter:function(){return P.p},useTreeifiedTOC:function(){return E.a},useWindowSize:function(){return r.useWindowSize}});var r=t(6497),u=t(14353),o=t(74477),i=t(1116),a=t(65130),c=t(9460),s=t(60373),l=t(59689),f=t(7094),d=t(93163),m=t(76857),v=t(92949),g=t(94711),h=t(37016),p=t(43320),C=t(24575),P=t(82128),b=t(85936),S=t(51753),T=t(91980),E=t(39665),L=t(12466),y=t(48596),M=t(10833),x=t(58978),F=t(96841),D=t(99445),H=t(19727),N=t(69800),I=t(66177),B=t(85448),k=t(68721),w=t(2730)},35155:function(e,n,t){t.d(n,{M:function(){return u},P:function(){return o}});var r=t(95999),u=function(){return(0,r.I)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"})};function o(e){var n={};return Object.values(e).forEach((function(e){var t=function(e){return e[0].toUpperCase()}(e.label);null!=n[t]||(n[t]=[]),n[t].push(e)})),Object.entries(n).sort((function(e,n){var t=e[0],r=n[0];return t.localeCompare(r)})).map((function(e){return{letter:e[0],tags:e[1].sort((function(e,n){return e.label.localeCompare(n.label)}))}}))}},39665:function(e,n,t){t.d(n,{a:function(){return a},b:function(){return s}});var r=t(80102),u=t(67294),o=["parentIndex"];function i(e){var n=e.map((function(e){return Object.assign({},e,{parentIndex:-1,children:[]})})),t=Array(7).fill(-1);n.forEach((function(e,n){var r=t.slice(2,e.level);e.parentIndex=Math.max.apply(Math,r),t[e.level]=n}));var u=[];return n.forEach((function(e){var t=e.parentIndex,i=(0,r.Z)(e,o);t>=0?n[t].children.push(i):u.push(i)})),u}function a(e){return(0,u.useMemo)((function(){return i(e)}),[e])}function c(e){var n=e.toc,t=e.minHeadingLevel,r=e.maxHeadingLevel;return n.flatMap((function(e){var n=c({toc:e.children,minHeadingLevel:t,maxHeadingLevel:r});return function(e){return e.level>=t&&e.level<=r}(e)?[Object.assign({},e,{children:n})]:n}))}function s(e){var n=e.toc,t=e.minHeadingLevel,r=e.maxHeadingLevel;return(0,u.useMemo)((function(){return c({toc:i(n),minHeadingLevel:t,maxHeadingLevel:r})}),[n,t,r])}},88824:function(e,n,t){t.d(n,{c:function(){return s}});var r=t(67294),u=t(52263),o=["zero","one","two","few","many","other"];function i(e){return o.filter((function(n){return e.includes(n)}))}var a={locale:"en",pluralForms:i(["one","other"]),select:function(e){return 1===e?"one":"other"}};function c(){var e=(0,u.default)().i18n.currentLocale;return(0,r.useMemo)((function(){try{return n=e,t=new Intl.PluralRules(n),{locale:n,pluralForms:i(t.resolvedOptions().pluralCategories),select:function(e){return t.select(e)}}}catch(r){return console.error('Failed to use Intl.PluralRules for locale "'+e+'".\nDocusaurus will fallback to the default (English) implementation.\nError: '+r.message+"\n"),a}var n,t}),[e])}function s(){var e=c();return{selectMessage:function(n,t){return function(e,n,t){var r=e.split("|");if(1===r.length)return r[0];r.length>t.pluralForms.length&&console.error("For locale="+t.locale+", a maximum of "+t.pluralForms.length+" plural forms are expected ("+t.pluralForms.join(",")+"), but the message contains "+r.length+": "+e);var u=t.select(n),o=t.pluralForms.indexOf(u);return r[Math.min(o,r.length-1)]}(t,n,e)}}}},85098:function(e,n,t){Object.defineProperty(n,"__esModule",{value:!0});var r=function(e){return e&&e.__esModule?e:{default:e}}(t(67294));n.Footer=function(){return r.default.createElement("footer",{className:"tsd-footer"},"Powered by"," ",r.default.createElement("a",{href:"https://github.com/milesj/docusaurus-plugin-typedoc-api"},"docusaurus-plugin-typedoc-api")," ","and ",r.default.createElement("a",{href:"https://typedoc.org/"},"TypeDoc"))}},95296:function(e,n,t){Object.defineProperty(n,"__esModule",{value:!0});var r=t(67294),u=t(39960),o=t(80143),i=t(6497),a=t(90932),c=function(e){return e&&e.__esModule?e:{default:e}},s=c(r),l=c(u);n.VersionBanner=function(){var e=a.useDocsVersion(),n=e.banner,t=e.docs,u=e.pluginId,c=e.version,f=o.useDocVersionSuggestions(u).latestVersionSuggestion,d=i.useDocsPreferredVersion(u).savePreferredVersionName,m=r.useCallback((function(){d(f.name)}),[f.name,d]);if(!n||!f)return null;var v=t[f.label];return s.default.createElement("div",{className:i.ThemeClassNames.docs.docVersionBanner+" alert alert--warning margin-bottom--md",role:"alert"},s.default.createElement("div",null,"unreleased"===n&&s.default.createElement(s.default.Fragment,null,"This is documentation for an unreleased version."),"unmaintained"===n&&s.default.createElement(s.default.Fragment,null,"This is documentation for version ",s.default.createElement("b",null,c),".")," ","For the latest API, see version"," ",s.default.createElement("b",null,s.default.createElement(l.default,{to:v.id,onClick:m},v.title)),"."))}}}]);