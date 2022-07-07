"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[6472],{3905:function(e,a,t){t.d(a,{Zo:function(){return c},kt:function(){return u}});var n=t(7294);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function r(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,i=function(e,a){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=n.createContext({}),s=function(e){var a=n.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):r(r({},a),e)),t},c=function(e){var a=s(e.components);return n.createElement(p.Provider,{value:a},e.children)},g={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},d=n.forwardRef((function(e,a){var t=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(t),u=i,m=d["".concat(p,".").concat(u)]||d[u]||g[u]||o;return t?n.createElement(m,r(r({ref:a},c),{},{components:t})):n.createElement(m,r({ref:a},c))}));function u(e,a){var t=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var o=t.length,r=new Array(o);r[0]=d;var l={};for(var p in a)hasOwnProperty.call(a,p)&&(l[p]=a[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var s=2;s<o;s++)r[s]=t[s];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1170:function(e,a,t){t.r(a),t.d(a,{assets:function(){return f},contentTitle:function(){return u},default:function(){return v},frontMatter:function(){return d},metadata:function(){return m},toc:function(){return k}});var n=t(3905),i=Object.defineProperty,o=Object.defineProperties,r=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,a,t)=>a in e?i(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,g=(e,a)=>{for(var t in a||(a={}))p.call(a,t)&&c(e,t,a[t]);if(l)for(var t of l(a))s.call(a,t)&&c(e,t,a[t]);return e};const d={id:"navigations",title:"Navigations"},u=void 0,m={unversionedId:"navigations",id:"navigations",title:"Navigations",description:"Playwright can navigate to URLs and handle navigations caused by page interactions. This guide covers common scenarios to wait for page navigations and loading to complete.",source:"@site/docs/navigations.mdx",sourceDirName:".",slug:"/navigations",permalink:"/docs/next/navigations",tags:[],version:"current",frontMatter:{id:"navigations",title:"Navigations"},sidebar:"docs",previous:{title:"Locators",permalink:"/docs/next/locators"},next:{title:"Network",permalink:"/docs/next/network"}},f={},k=[{value:"Navigation lifecycle",id:"navigation-lifecycle",level:2},{value:"Scenarios initiated by browser UI",id:"scenarios-initiated-by-browser-ui",level:2},{value:"Auto-wait",id:"auto-wait",level:3},{value:"Custom wait",id:"custom-wait",level:3},{value:"Wait for element",id:"wait-for-element",level:3},{value:"API reference",id:"api-reference",level:3},{value:"Scenarios initiated by page interaction",id:"scenarios-initiated-by-page-interaction",level:2},{value:"Auto-wait",id:"auto-wait-1",level:3},{value:"Custom wait",id:"custom-wait-1",level:3},{value:"Wait for element",id:"wait-for-element-1",level:3},{value:"Asynchronous navigation",id:"asynchronous-navigation",level:3},{value:"Multiple navigations",id:"multiple-navigations",level:3},{value:"Loading a popup",id:"loading-a-popup",level:3},{value:"API reference",id:"api-reference-1",level:3},{value:"Advanced patterns",id:"advanced-patterns",level:2},{value:"API reference",id:"api-reference-2",level:3}],w={toc:k};function v(e){var a,t=e,{components:i}=t,c=((e,a)=>{var t={};for(var n in e)p.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&l)for(var n of l(e))a.indexOf(n)<0&&s.call(e,n)&&(t[n]=e[n]);return t})(t,["components"]);return(0,n.kt)("wrapper",(a=g(g({},w),c),o(a,r({components:i,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"Playwright can navigate to URLs and handle navigations caused by page interactions. This guide covers common scenarios to wait for page navigations and loading to complete."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",g({parentName:"li"},{href:"#navigation-lifecycle"}),"Navigation lifecycle")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",g({parentName:"li"},{href:"#scenarios-initiated-by-browser-ui"}),"Scenarios initiated by browser UI")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",g({parentName:"li"},{href:"#scenarios-initiated-by-page-interaction"}),"Scenarios initiated by page interaction")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",g({parentName:"li"},{href:"#advanced-patterns"}),"Advanced patterns"))),(0,n.kt)("h2",g({},{id:"navigation-lifecycle"}),"Navigation lifecycle"),(0,n.kt)("p",null,"Playwright splits the process of showing a new document in a page into ",(0,n.kt)("strong",{parentName:"p"},"navigation")," and ",(0,n.kt)("strong",{parentName:"p"},"loading"),"."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Navigation starts")," by changing the page URL or by interacting with the page (e.g., clicking a link). The navigation intent may be canceled, for example, on hitting an unresolved DNS address or transformed into a file download."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Navigation is committed")," when the response headers have been parsed and session history is updated. Only after the navigation succeeds (is committed), the page starts ",(0,n.kt)("strong",{parentName:"p"},"loading")," the document."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Loading")," covers getting the remaining response body over the network, parsing, executing the scripts and firing load events:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",g({parentName:"li"},{href:"/docs/next/api/class-page#page-url"}),"page.url()")," is set to the new url"),(0,n.kt)("li",{parentName:"ul"},"document content is loaded over network and parsed"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",g({parentName:"li"},{href:"/docs/next/api/class-page#page-event-dom-content-loaded"}),"page.on('domcontentloaded')")," event is fired"),(0,n.kt)("li",{parentName:"ul"},"page executes some scripts and loads resources like stylesheets and images"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",g({parentName:"li"},{href:"/docs/next/api/class-page#page-event-load"}),"page.on('load')")," event is fired"),(0,n.kt)("li",{parentName:"ul"},"page executes dynamically loaded scripts"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"networkidle")," is fired when no new network requests are made for 500 ms")),(0,n.kt)("h2",g({},{id:"scenarios-initiated-by-browser-ui"}),"Scenarios initiated by browser UI"),(0,n.kt)("p",null,"Navigations can be initiated by changing the URL bar, reloading the page or going back or forward in session history."),(0,n.kt)("h3",g({},{id:"auto-wait"}),"Auto-wait"),(0,n.kt)("p",null,"Navigating to a URL auto-waits for the page to fire the ",(0,n.kt)("inlineCode",{parentName:"p"},"load")," event. If the page does a client-side redirect before ",(0,n.kt)("inlineCode",{parentName:"p"},"load"),", ",(0,n.kt)("a",g({parentName:"p"},{href:"/docs/next/api/class-page#page-goto"}),"page.goto(url[, options])")," will auto-wait for the redirected page to fire the ",(0,n.kt)("inlineCode",{parentName:"p"},"load")," event."),(0,n.kt)("pre",null,(0,n.kt)("code",g({parentName:"pre"},{className:"language-js"}),"// Navigate the page\nawait page.goto('https://example.com');\n")),(0,n.kt)("h3",g({},{id:"custom-wait"}),"Custom wait"),(0,n.kt)("p",null,"Override the default behavior to wait until a specific event, like ",(0,n.kt)("inlineCode",{parentName:"p"},"networkidle"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",g({parentName:"pre"},{className:"language-js"}),"// Navigate and wait until network is idle\nawait page.goto('https://example.com', { waitUntil: 'networkidle' });\n")),(0,n.kt)("h3",g({},{id:"wait-for-element"}),"Wait for element"),(0,n.kt)("p",null,"In lazy-loaded pages, it can be useful to wait until an element is visible with ",(0,n.kt)("a",g({parentName:"p"},{href:"/docs/next/api/class-locator#locator-wait-for"}),"locator.waitFor([options])"),". Alternatively, page interactions like ",(0,n.kt)("a",g({parentName:"p"},{href:"/docs/next/api/class-page#page-click"}),"page.click(selector[, options])")," auto-wait for elements."),(0,n.kt)("pre",null,(0,n.kt)("code",g({parentName:"pre"},{className:"language-js"}),"// Navigate and wait for element\nawait page.goto('https://example.com');\nawait page.locator('text=Example Domain').waitFor();\n\n// Navigate and click element\n// Click will auto-wait for the element\nawait page.goto('https://example.com');\nawait page.click('text=Example Domain');\n")),(0,n.kt)("h3",g({},{id:"api-reference"}),"API reference"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",g({parentName:"li"},{href:"/docs/next/api/class-page#page-goto"}),"page.goto(url[, options])")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",g({parentName:"li"},{href:"/docs/next/api/class-page#page-reload"}),"page.reload([options])")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",g({parentName:"li"},{href:"/docs/next/api/class-page#page-go-back"}),"page.goBack([options])")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",g({parentName:"li"},{href:"/docs/next/api/class-page#page-go-forward"}),"page.goForward([options])"))),(0,n.kt)("h2",g({},{id:"scenarios-initiated-by-page-interaction"}),"Scenarios initiated by page interaction"),(0,n.kt)("p",null,"In the scenarios below, ",(0,n.kt)("a",g({parentName:"p"},{href:"/docs/next/api/class-page#page-click"}),"page.click(selector[, options])")," initiates a navigation and then waits for the navigation to complete."),(0,n.kt)("h3",g({},{id:"auto-wait-1"}),"Auto-wait"),(0,n.kt)("p",null,"By default, ",(0,n.kt)("a",g({parentName:"p"},{href:"/docs/next/api/class-page#page-click"}),"page.click(selector[, options])")," will wait for the navigation step to complete. This can be combined with a page interaction on the navigated page which would auto-wait for an element."),(0,n.kt)("pre",null,(0,n.kt)("code",g({parentName:"pre"},{className:"language-js"}),"// Click will auto-wait for navigation to complete\nawait page.click('text=Login');\n\n// Fill will auto-wait for element on navigated page\nawait page.fill('#username', 'John Doe');\n")),(0,n.kt)("h3",g({},{id:"custom-wait-1"}),"Custom wait"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"page.click")," can be combined with ",(0,n.kt)("a",g({parentName:"p"},{href:"/docs/next/api/class-page#page-wait-for-load-state"}),"page.waitForLoadState([state, options])")," to wait for a loading event."),(0,n.kt)("pre",null,(0,n.kt)("code",g({parentName:"pre"},{className:"language-js"}),"await page.click('button'); // Click triggers navigation\nawait page.waitForLoadState('networkidle'); // This resolves after 'networkidle'\n")),(0,n.kt)("h3",g({},{id:"wait-for-element-1"}),"Wait for element"),(0,n.kt)("p",null,"In lazy-loaded pages, it can be useful to wait until an element is visible with ",(0,n.kt)("a",g({parentName:"p"},{href:"/docs/next/api/class-locator#locator-wait-for"}),"locator.waitFor([options])"),". Alternatively, page interactions like ",(0,n.kt)("a",g({parentName:"p"},{href:"/docs/next/api/class-page#page-click"}),"page.click(selector[, options])")," auto-wait for elements."),(0,n.kt)("pre",null,(0,n.kt)("code",g({parentName:"pre"},{className:"language-js"}),"// Click will auto-wait for the element and trigger navigation\nawait page.click('text=Login');\n// Wait for the element\nawait page.locator('#username').waitFor();\n\n// Click triggers navigation\nawait page.click('text=Login');\n// Fill will auto-wait for element\nawait page.fill('#username', 'John Doe');\n")),(0,n.kt)("h3",g({},{id:"asynchronous-navigation"}),"Asynchronous navigation"),(0,n.kt)("p",null,"Clicking an element could trigger asynchronous processing before initiating the navigation. In these cases, it is recommended to explicitly call ",(0,n.kt)("a",g({parentName:"p"},{href:"/docs/next/api/class-page#page-wait-for-navigation"}),"page.waitForNavigation([options])"),". For example:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Navigation is triggered from a ",(0,n.kt)("inlineCode",{parentName:"li"},"setTimeout")),(0,n.kt)("li",{parentName:"ul"},"Page waits for network requests before navigation")),(0,n.kt)("pre",null,(0,n.kt)("code",g({parentName:"pre"},{className:"language-js"}),"// Note that Promise.all prevents a race condition\n// between clicking and waiting for a navigation.\nawait Promise.all([\n  // Waits for the next navigation.\n  // It is important to call waitForNavigation before click to set up waiting.\n  page.waitForNavigation(),\n  // Triggers a navigation after a timeout.\n  page.locator('div.delayed-navigation').click(),\n]);\n")),(0,n.kt)("h3",g({},{id:"multiple-navigations"}),"Multiple navigations"),(0,n.kt)("p",null,"Clicking an element could trigger multiple navigations. In these cases, it is recommended to explicitly ",(0,n.kt)("a",g({parentName:"p"},{href:"/docs/next/api/class-page#page-wait-for-navigation"}),"page.waitForNavigation([options])")," to a specific url. For example:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Client-side redirects issued after the ",(0,n.kt)("inlineCode",{parentName:"li"},"load")," event"),(0,n.kt)("li",{parentName:"ul"},"Multiple pushes to history state")),(0,n.kt)("pre",null,(0,n.kt)("code",g({parentName:"pre"},{className:"language-js"}),"// Note that Promise.all prevents a race condition\n// between clicking and waiting for a navigation.\nawait Promise.all([\n  // It is important to call waitForNavigation before click to set up waiting.\n  page.waitForNavigation({ url: '**/login' }),\n  // Triggers a navigation with a script redirect.\n  page.locator('text=Click me').click(),\n]);\n")),(0,n.kt)("h3",g({},{id:"loading-a-popup"}),"Loading a popup"),(0,n.kt)("p",null,"When popup is opened, explicitly calling ",(0,n.kt)("a",g({parentName:"p"},{href:"/docs/next/api/class-page#page-wait-for-load-state"}),"page.waitForLoadState([state, options])")," ensures that popup is loaded to the desired state."),(0,n.kt)("pre",null,(0,n.kt)("code",g({parentName:"pre"},{className:"language-js"}),"// Note that Promise.all prevents a race condition\n// between clicking and waiting for the popup.\nconst [ popup ] = await Promise.all([\n  // It is important to call waitForEvent before click to set up waiting.\n  page.waitForEvent('popup'),\n  // Opens popup.\n  page.locator('a[target=\"_blank\"]').click(),\n]);\nawait popup.waitForLoadState('load');\n")),(0,n.kt)("h3",g({},{id:"api-reference-1"}),"API reference"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",g({parentName:"li"},{href:"/docs/next/api/class-page#page-click"}),"page.click(selector[, options])")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",g({parentName:"li"},{href:"/docs/next/api/class-page#page-wait-for-load-state"}),"page.waitForLoadState([state, options])")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",g({parentName:"li"},{href:"/docs/next/api/class-page#page-wait-for-navigation"}),"page.waitForNavigation([options])")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",g({parentName:"li"},{href:"/docs/next/api/class-page#page-wait-for-function"}),"page.waitForFunction(pageFunction[, arg, options])"))),(0,n.kt)("h2",g({},{id:"advanced-patterns"}),"Advanced patterns"),(0,n.kt)("p",null,"For pages that have complicated loading patterns, ",(0,n.kt)("a",g({parentName:"p"},{href:"/docs/next/api/class-page#page-wait-for-function"}),"page.waitForFunction(pageFunction[, arg, options])")," is a powerful and extensible approach to define a custom wait criteria."),(0,n.kt)("pre",null,(0,n.kt)("code",g({parentName:"pre"},{className:"language-js"}),"await page.goto('http://example.com');\nawait page.waitForFunction(() => window.amILoadedYet());\n// Ready to take a screenshot, according to the page itself.\nawait page.screenshot();\n")),(0,n.kt)("h3",g({},{id:"api-reference-2"}),"API reference"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",g({parentName:"li"},{href:"/docs/next/api/class-page#page-wait-for-function"}),"page.waitForFunction(pageFunction[, arg, options])"))))}v.isMDXComponent=!0}}]);