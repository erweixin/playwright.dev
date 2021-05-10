(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{150:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return b}));var n=a(3),r=a(7),i=(a(0),a(211)),o=(a(214),a(215),{id:"release-notes",title:"Release notes"}),l={unversionedId:"release-notes",id:"release-notes",isDocsHomePage:!1,title:"Release notes",description:"- Version 1.11",source:"@site/docs/release-notes.mdx",slug:"/release-notes",permalink:"/java/docs/next/release-notes",version:"current",sidebar:"docs",previous:{title:"Supported languages",permalink:"/java/docs/next/languages"},next:{title:"Auto-waiting",permalink:"/java/docs/next/actionability"}},c=[{value:"Version 1.11",id:"version-111",children:[]},{value:"Version 1.10",id:"version-110",children:[]},{value:"Version 1.9",id:"version-19",children:[]},{value:"Version 1.8",id:"version-18",children:[]},{value:"Version 1.7",id:"version-17",children:[]}],s={toc:c};function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"#version-111"}),"Version 1.11")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"#version-110"}),"Version 1.10")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"#version-19"}),"Version 1.9")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"#version-18"}),"Version 1.8")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"#version-17"}),"Version 1.7"))),Object(i.b)("h2",{id:"version-111"},"Version 1.11"),Object(i.b)("p",null,"\ud83c\udfa5  New video: ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://youtu.be/_Jla6DyuEu4"}),"Playwright: A New Test Automation Framework for the Modern Web")," (",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.google.com/presentation/d/1xFhZIJrdHkVe2CuMKOrni92HoG2SWslo0DhJJQMR1DI/edit?usp=sharing"}),"slides"),")"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"We talked about Playwright"),Object(i.b)("li",{parentName:"ul"},"Showed engineering work behind the scenes"),Object(i.b)("li",{parentName:"ul"},"Did live demos with new features \u2728"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Special thanks")," to ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"http://applitools.com/"}),"applitools")," for hosting the event and inviting us!")),Object(i.b)("h4",{id:"browser-versions"},"Browser Versions"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Chromium 92.0.4498.0"),Object(i.b)("li",{parentName:"ul"},"Mozilla Firefox 89.0b6"),Object(i.b)("li",{parentName:"ul"},"WebKit 14.2")),Object(i.b)("h4",{id:"new-apis"},"New APIs"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"support for ",Object(i.b)("strong",{parentName:"li"},"async predicates")," across the API in methods such as ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/java/docs/next/api/class-page#pagewaitforrequesturlorpredicate-options-callback"}),"Page.waitForRequest(urlOrPredicate[, options], callback)")," and others"),Object(i.b)("li",{parentName:"ul"},"new ",Object(i.b)("strong",{parentName:"li"},"emulation devices"),": Galaxy S8, Galaxy S9+, Galaxy Tab S4, Pixel 3, Pixel 4"),Object(i.b)("li",{parentName:"ul"},"new methods:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/java/docs/next/api/class-page#pagewaitforurlurl-options"}),"Page.waitForURL(url[, options])")," to await navigations to URL"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/java/docs/next/api/class-video#videodelete"}),"Video.delete()")," and ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/java/docs/next/api/class-video#videosaveaspath"}),"Video.saveAs(path)")," to manage screen recording"))),Object(i.b)("li",{parentName:"ul"},"new options:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"screen")," option in the ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/java/docs/next/api/class-browser#browsernewcontextoptions"}),"Browser.newContext([options])")," method to emulate ",Object(i.b)("inlineCode",{parentName:"li"},"window.screen")," dimensions"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"position")," option in ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/java/docs/next/api/class-page#pagecheckselector-options"}),"Page.check(selector[, options])")," and ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/java/docs/next/api/class-page#pageuncheckselector-options"}),"Page.uncheck(selector[, options])")," methods"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"trial")," option to dry-run actions in ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/java/docs/next/api/class-page#pagecheckselector-options"}),"Page.check(selector[, options])"),", ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/java/docs/next/api/class-page#pageuncheckselector-options"}),"Page.uncheck(selector[, options])"),", ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/java/docs/next/api/class-page#pageclickselector-options"}),"Page.click(selector[, options])"),", ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/java/docs/next/api/class-page#pagedblclickselector-options"}),"Page.dblclick(selector[, options])"),", ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/java/docs/next/api/class-page#pagehoverselector-options"}),"Page.hover(selector[, options])")," and ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/java/docs/next/api/class-page#pagetapselector-options"}),"Page.tap(selector[, options])"))))),Object(i.b)("h2",{id:"version-110"},"Version 1.10"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/microsoft/playwright-java"}),"Playwright for Java v1.10")," is ",Object(i.b)("strong",{parentName:"li"},"now stable"),"!"),Object(i.b)("li",{parentName:"ul"},"Run Playwright against ",Object(i.b)("strong",{parentName:"li"},"Google Chrome")," and ",Object(i.b)("strong",{parentName:"li"},"Microsoft Edge")," stable channels with the ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"./browsers"}),"new channels API"),"."),Object(i.b)("li",{parentName:"ul"},"Chromium screenshots are ",Object(i.b)("strong",{parentName:"li"},"fast")," on Mac & Windows.")),Object(i.b)("h4",{id:"bundled-browser-versions"},"Bundled Browser Versions"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Chromium 90.0.4430.0"),Object(i.b)("li",{parentName:"ul"},"Mozilla Firefox 87.0b10"),Object(i.b)("li",{parentName:"ul"},"WebKit 14.2")),Object(i.b)("p",null,"This version of Playwright was also tested against the following stable channels:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Google Chrome 89"),Object(i.b)("li",{parentName:"ul"},"Microsoft Edge 89")),Object(i.b)("h4",{id:"new-apis-1"},"New APIs"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"./api/class-browsertype#browsertypelaunchoptions"}),Object(i.b)("inlineCode",{parentName:"a"},"browserType.launch()"))," now accepts the new ",Object(i.b)("inlineCode",{parentName:"li"},"'channel'")," option. Read more in ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"./browsers"}),"our documentation"),".")),Object(i.b)("h2",{id:"version-19"},"Version 1.9"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/java/docs/next/inspector"}),"Playwright Inspector")," is a ",Object(i.b)("strong",{parentName:"li"},"new GUI tool")," to author and debug your tests.",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Line-by-line debugging")," of your Playwright scripts, with play, pause and step-through."),Object(i.b)("li",{parentName:"ul"},"Author new scripts by ",Object(i.b)("strong",{parentName:"li"},"recording user actions"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Generate element selectors")," for your script by hovering over elements."),Object(i.b)("li",{parentName:"ul"},"Set the ",Object(i.b)("inlineCode",{parentName:"li"},"PWDEBUG=1")," environment variable to launch the Inspector"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Pause script execution")," with ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/java/docs/next/api/class-page#pagepause"}),"Page.pause()")," in headed mode. Pausing the page launches ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/java/docs/next/inspector"}),"Playwright Inspector")," for debugging."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"New has-text pseudo-class")," for CSS selectors. ",Object(i.b)("inlineCode",{parentName:"li"},':has-text("example")')," matches any element containing ",Object(i.b)("inlineCode",{parentName:"li"},'"example"')," somewhere inside, possibly in a child or a descendant element. See ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/java/docs/next/selectors#text-selector"}),"more examples"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Page dialogs are now auto-dismissed")," during execution, unless a listener for ",Object(i.b)("inlineCode",{parentName:"li"},"dialog")," event is configured. ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/java/docs/next/dialogs"}),"Learn more")," about this."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/microsoft/playwright-python"}),"Playwright for Python")," is ",Object(i.b)("strong",{parentName:"li"},"now stable")," with an idiomatic snake case API and pre-built ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/java/docs/next/docker"}),"Docker image")," to run tests in CI/CD.")),Object(i.b)("h4",{id:"browser-versions-1"},"Browser Versions"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Chromium 90.0.4421.0"),Object(i.b)("li",{parentName:"ul"},"Mozilla Firefox 86.0b10"),Object(i.b)("li",{parentName:"ul"},"WebKit 14.1")),Object(i.b)("h4",{id:"new-apis-2"},"New APIs"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/java/docs/next/api/class-page#pagepause"}),"Page.pause()"),".")),Object(i.b)("h2",{id:"version-18"},"Version 1.8"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/java/docs/next/selectors#selecting-elements-based-on-layout"}),"Selecting elements based on layout")," with ",Object(i.b)("inlineCode",{parentName:"li"},":left-of()"),", ",Object(i.b)("inlineCode",{parentName:"li"},":right-of()"),", ",Object(i.b)("inlineCode",{parentName:"li"},":above()")," and ",Object(i.b)("inlineCode",{parentName:"li"},":below()"),"."),Object(i.b)("li",{parentName:"ul"},"Playwright now includes ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/java/docs/next/cli"}),"command line interface"),", former playwright-cli."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/java/docs/next/api/class-page#pageselectoptionselector-values-options"}),"Page.selectOption(selector, values[, options])")," now waits for the options to be present."),Object(i.b)("li",{parentName:"ul"},"New methods to ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"./actionability#assertions"}),"assert element state")," like ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/java/docs/next/api/class-page#pageiseditableselector-options"}),"Page.isEditable(selector[, options])"),".")),Object(i.b)("h4",{id:"new-apis-3"},"New APIs"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/java/docs/next/api/class-elementhandle#elementhandleischecked"}),"ElementHandle.isChecked()"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/java/docs/next/api/class-elementhandle#elementhandleisdisabled"}),"ElementHandle.isDisabled()"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/java/docs/next/api/class-elementhandle#elementhandleiseditable"}),"ElementHandle.isEditable()"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/java/docs/next/api/class-elementhandle#elementhandleisenabled"}),"ElementHandle.isEnabled()"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/java/docs/next/api/class-elementhandle#elementhandleishidden"}),"ElementHandle.isHidden()"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/java/docs/next/api/class-elementhandle#elementhandleisvisible"}),"ElementHandle.isVisible()"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/java/docs/next/api/class-page#pageischeckedselector-options"}),"Page.isChecked(selector[, options])"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/java/docs/next/api/class-page#pageisdisabledselector-options"}),"Page.isDisabled(selector[, options])"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/java/docs/next/api/class-page#pageiseditableselector-options"}),"Page.isEditable(selector[, options])"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/java/docs/next/api/class-page#pageisenabledselector-options"}),"Page.isEnabled(selector[, options])"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/java/docs/next/api/class-page#pageishiddenselector-options"}),"Page.isHidden(selector[, options])"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/java/docs/next/api/class-page#pageisvisibleselector-options"}),"Page.isVisible(selector[, options])"),"."),Object(i.b)("li",{parentName:"ul"},"New option ",Object(i.b)("inlineCode",{parentName:"li"},"'editable'")," in ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/java/docs/next/api/class-elementhandle#elementhandlewaitforelementstatestate-options"}),"ElementHandle.waitForElementState(state[, options])"),".")),Object(i.b)("h4",{id:"browser-versions-2"},"Browser Versions"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Chromium 90.0.4392.0"),Object(i.b)("li",{parentName:"ul"},"Mozilla Firefox 85.0b5"),Object(i.b)("li",{parentName:"ul"},"WebKit 14.1")),Object(i.b)("h2",{id:"version-17"},"Version 1.7"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"New Java SDK"),": ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/microsoft/playwright-java"}),"Playwright for Java")," is now on par with ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/microsoft/playwright"}),"JavaScript"),", ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/microsoft/playwright-python"}),"Python")," and ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/microsoft/playwright-sharp"}),"C# bindings"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Browser storage API"),": New convenience APIs to save and load browser storage state (cookies, local storage) to simplify automation scenarios with authentication."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"New CSS selectors"),": We heard your feedback for more flexible selectors and have revamped the selectors implementation. Playwright 1.7 introduces ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/java/docs/next/selectors"}),"new CSS extensions")," and there's more coming soon."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"New website"),": The docs website at ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://playwright.dev/"}),"playwright.dev")," has been updated and is now built with ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://v2.docusaurus.io/"}),"Docusaurus"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Support for Apple Silicon"),": Playwright browser binaries for WebKit and Chromium are now built for Apple Silicon.")),Object(i.b)("h4",{id:"new-apis-4"},"New APIs"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/java/docs/next/api/class-browsercontext#browsercontextstoragestateoptions"}),"BrowserContext.storageState([options])")," to get current state for later reuse."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"storageState")," option in ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/java/docs/next/api/class-browser#browsernewcontextoptions"}),"Browser.newContext([options])")," and ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/java/docs/next/api/class-browser#browsernewpageoptions"}),"Browser.newPage([options])")," to setup browser context state.")),Object(i.b)("h4",{id:"browser-versions-3"},"Browser Versions"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Chromium 89.0.4344.0"),Object(i.b)("li",{parentName:"ul"},"Mozilla Firefox 84.0b9"),Object(i.b)("li",{parentName:"ul"},"WebKit 14.1")))}b.isMDXComponent=!0},210:function(e,t,a){"use strict";function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}},211:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=b(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},j=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=b(a),j=n,m=p["".concat(o,".").concat(j)]||p[j]||u[j]||i;return a?r.a.createElement(m,l(l({ref:t},s),{},{components:a})):r.a.createElement(m,l({ref:t},s))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=j;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}j.displayName="MDXCreateElement"},212:function(e,t,a){"use strict";var n=a(0),r=a(213);t.a=function(){var e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},213:function(e,t,a){"use strict";var n=a(0),r=Object(n.createContext)(void 0);t.a=r},214:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(212),o=a(210),l=a(53),c=a.n(l),s=37,b=39;t.a=function(e){var t=e.lazy,a=e.block,l=e.defaultValue,p=e.values,u=e.groupId,j=e.className,m=Object(i.a)(),O=m.tabGroupChoices,d=m.setTabGroupChoices,h=Object(n.useState)(l),f=h[0],N=h[1],g=n.Children.toArray(e.children);if(null!=u){var v=O[u];null!=v&&v!==f&&p.some((function(e){return e.value===v}))&&N(v)}var w=function(e){N(e),null!=u&&d(u,e)},y=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":a},j)},p.map((function(e){var t=e.value,a=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":f===t,className:Object(o.a)("tabs__item",c.a.tabItem,{"tabs__item--active":f===t}),key:t,ref:function(e){return y.push(e)},onKeyDown:function(e){!function(e,t,a){switch(a.keyCode){case b:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case s:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}}(y,e.target,e)},onFocus:function(){return w(t)},onClick:function(){w(t)}},a)}))),t?Object(n.cloneElement)(g.filter((function(e){return e.props.value===f}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},g.map((function(e,t){return Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==f})}))))}},215:function(e,t,a){"use strict";var n=a(3),r=a(0),i=a.n(r);t.a=function(e){var t=e.children,a=e.hidden,r=e.className;return i.a.createElement("div",Object(n.a)({role:"tabpanel"},{hidden:a,className:r}),t)}}}]);