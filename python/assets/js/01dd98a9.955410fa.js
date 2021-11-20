"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[9260],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return y}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),h=p(r),y=n,w=h["".concat(s,".").concat(y)]||h[y]||u[y]||i;return r?a.createElement(w,l(l({ref:t},c),{},{components:r})):a.createElement(w,l({ref:t},c))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=h;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var p=2;p<i;p++)l[p]=r[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},8215:function(e,t,r){var a=r(7294);t.Z=function(e){var t=e.children,r=e.hidden,n=e.className;return a.createElement("div",{role:"tabpanel",hidden:r,className:n},t)}},5064:function(e,t,r){r.d(t,{Z:function(){return u}});var a=r(7294),n=r(9443);var i=function(){var e=(0,a.useContext)(n.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=r(6010),o="tabItem_1uMI",s="tabItemActive_2DSg";var p=37,c=39;var u=function(e){var t=e.lazy,r=e.block,n=e.defaultValue,u=e.values,h=e.groupId,y=e.className,w=i(),g=w.tabGroupChoices,m=w.setTabGroupChoices,f=(0,a.useState)(n),d=f[0],b=f[1],k=a.Children.toArray(e.children),v=[];if(null!=h){var N=g[h];null!=N&&N!==d&&u.some((function(e){return e.value===N}))&&b(N)}var x=function(e){var t=e.currentTarget,r=v.indexOf(t),a=u[r].value;b(a),null!=h&&(m(h,a),setTimeout((function(){var e,r,a,n,i,l,o,p;(e=t.getBoundingClientRect(),r=e.top,a=e.left,n=e.bottom,i=e.right,l=window,o=l.innerHeight,p=l.innerWidth,r>=0&&i<=p&&n<=o&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},T=function(e){var t,r;switch(e.keyCode){case c:var a=v.indexOf(e.target)+1;r=v[a]||v[0];break;case p:var n=v.indexOf(e.target)-1;r=v[n]||v[v.length-1]}null==(t=r)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":r},y)},u.map((function(e){var t=e.value,r=e.label;return a.createElement("li",{role:"tab",tabIndex:d===t?0:-1,"aria-selected":d===t,className:(0,l.Z)("tabs__item",o,{"tabs__item--active":d===t}),key:t,ref:function(e){return v.push(e)},onKeyDown:T,onFocus:x,onClick:x},r)}))),t?(0,a.cloneElement)(k.filter((function(e){return e.props.value===d}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},k.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==d})}))))}},9443:function(e,t,r){var a=(0,r(7294).createContext)(void 0);t.Z=a},9381:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return u},default:function(){return y}});var a=r(2122),n=r(9756),i=(r(7294),r(3905)),l=r(5064),o=r(8215),s={id:"class-playwright",title:"Playwright"},p=void 0,c={unversionedId:"api/class-playwright",id:"version-1.17/api/class-playwright",isDocsHomePage:!1,title:"Playwright",description:"Playwright module provides a method to launch a browser instance. The following is a typical example of using Playwright to drive automation:",source:"@site/versioned_docs/version-1.17/api/class-playwright.mdx",sourceDirName:"api",slug:"/api/class-playwright",permalink:"/python/docs/api/class-playwright",version:"1.17",frontMatter:{id:"class-playwright",title:"Playwright"},sidebar:"version-1.17/api",next:{title:"Accessibility",permalink:"/python/docs/api/class-accessibility"}},u=[{value:"playwright.stop()",id:"playwright-stop",children:[]},{value:"playwright.chromium",id:"playwright-chromium",children:[]},{value:"playwright.devices",id:"playwright-devices",children:[]},{value:"playwright.firefox",id:"playwright-firefox",children:[]},{value:"playwright.request",id:"playwright-request",children:[]},{value:"playwright.selectors",id:"playwright-selectors",children:[]},{value:"playwright.webkit",id:"playwright-webkit",children:[]}],h={toc:u};function y(e){var t=e.components,r=(0,n.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Playwright module provides a method to launch a browser instance. The following is a typical example of using Playwright to drive automation:"),(0,i.kt)(l.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"sync",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},'from playwright.sync_api import sync_playwright\n\ndef run(playwright):\n    chromium = playwright.chromium # or "firefox" or "webkit".\n    browser = chromium.launch()\n    page = browser.new_page()\n    page.goto("http://example.com")\n    # other actions...\n    browser.close()\n\nwith sync_playwright() as playwright:\n    run(playwright)\n'))),(0,i.kt)(o.Z,{value:"async",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},'import asyncio\nfrom playwright.async_api import async_playwright\n\nasync def run(playwright):\n    chromium = playwright.chromium # or "firefox" or "webkit".\n    browser = await chromium.launch()\n    page = await browser.new_page()\n    await page.goto("http://example.com")\n    # other actions...\n    await browser.close()\n\nasync def main():\n    async with async_playwright() as playwright:\n        await run(playwright)\nasyncio.run(main())\n')))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/python/docs/api/class-playwright#playwright-stop"},"playwright.stop()")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/python/docs/api/class-playwright#playwright-chromium"},"playwright.chromium")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/python/docs/api/class-playwright#playwright-devices"},"playwright.devices")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/python/docs/api/class-playwright#playwright-firefox"},"playwright.firefox")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/python/docs/api/class-playwright#playwright-request"},"playwright.request")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/python/docs/api/class-playwright#playwright-selectors"},"playwright.selectors")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/python/docs/api/class-playwright#playwright-webkit"},"playwright.webkit"))),(0,i.kt)("h2",{id:"playwright-stop"},"playwright.stop()"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"returns:",(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"playwright-stop-return"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/constants.html#None",title:"None"},"NoneType"),">",(0,i.kt)("a",{href:"#playwright-stop-return",class:"list-anchor"},"#"))),(0,i.kt)("p",null,"Terminates this instance of Playwright in case it was created bypassing the Python context manager. This is useful in REPL applications."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},'>>> from playwright.sync_api import sync_playwright\n\n>>> playwright = sync_playwright().start()\n\n>>> browser = playwright.chromium.launch()\n>>> page = browser.new_page()\n>>> page.goto("http://whatsmyuseragent.org/")\n>>> page.screenshot(path="example.png")\n>>> browser.close()\n\n>>> playwright.stop()\n')),(0,i.kt)("h2",{id:"playwright-chromium"},"playwright.chromium"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"type: ","<",(0,i.kt)("a",{parentName:"li",href:"/python/docs/api/class-browsertype",title:"BrowserType"},"BrowserType"),">")),(0,i.kt)("p",null,"This object can be used to launch or connect to Chromium, returning instances of ",(0,i.kt)("a",{parentName:"p",href:"/python/docs/api/class-browser",title:"Browser"},"Browser"),"."),(0,i.kt)("h2",{id:"playwright-devices"},"playwright.devices"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"type: ","<",(0,i.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/typing.html#typing.Dict",title:"Dict"},"Dict"),">")),(0,i.kt)("p",null,"Returns a dictionary of devices to be used with ",(0,i.kt)("a",{parentName:"p",href:"/python/docs/api/class-browser#browser-new-context"},"browser.new_context(**kwargs)")," or ",(0,i.kt)("a",{parentName:"p",href:"/python/docs/api/class-browser#browser-new-page"},"browser.new_page(**kwargs)"),"."),(0,i.kt)(l.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"sync",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},'from playwright.sync_api import sync_playwright\n\ndef run(playwright):\n    webkit = playwright.webkit\n    iphone = playwright.devices["iPhone 6"]\n    browser = webkit.launch()\n    context = browser.new_context(**iphone)\n    page = context.new_page()\n    page.goto("http://example.com")\n    # other actions...\n    browser.close()\n\nwith sync_playwright() as playwright:\n    run(playwright)\n'))),(0,i.kt)(o.Z,{value:"async",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},'import asyncio\nfrom playwright.async_api import async_playwright\n\nasync def run(playwright):\n    webkit = playwright.webkit\n    iphone = playwright.devices["iPhone 6"]\n    browser = await webkit.launch()\n    context = await browser.new_context(**iphone)\n    page = await context.new_page()\n    await page.goto("http://example.com")\n    # other actions...\n    await browser.close()\n\nasync def main():\n    async with async_playwright() as playwright:\n        await run(playwright)\nasyncio.run(main())\n')))),(0,i.kt)("h2",{id:"playwright-firefox"},"playwright.firefox"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"type: ","<",(0,i.kt)("a",{parentName:"li",href:"/python/docs/api/class-browsertype",title:"BrowserType"},"BrowserType"),">")),(0,i.kt)("p",null,"This object can be used to launch or connect to Firefox, returning instances of ",(0,i.kt)("a",{parentName:"p",href:"/python/docs/api/class-browser",title:"Browser"},"Browser"),"."),(0,i.kt)("h2",{id:"playwright-request"},"playwright.request"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"type: ","<",(0,i.kt)("a",{parentName:"li",href:"/python/docs/api/class-apirequest",title:"APIRequest"},"APIRequest"),">")),(0,i.kt)("p",null,"Exposes API that can be used for the Web API testing."),(0,i.kt)("h2",{id:"playwright-selectors"},"playwright.selectors"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"type: ","<",(0,i.kt)("a",{parentName:"li",href:"/python/docs/api/class-selectors",title:"Selectors"},"Selectors"),">")),(0,i.kt)("p",null,"Selectors can be used to install custom selector engines. See ",(0,i.kt)("a",{parentName:"p",href:"/python/docs/selectors"},"Working with selectors")," for more information."),(0,i.kt)("h2",{id:"playwright-webkit"},"playwright.webkit"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"type: ","<",(0,i.kt)("a",{parentName:"li",href:"/python/docs/api/class-browsertype",title:"BrowserType"},"BrowserType"),">")),(0,i.kt)("p",null,"This object can be used to launch or connect to WebKit, returning instances of ",(0,i.kt)("a",{parentName:"p",href:"/python/docs/api/class-browser",title:"Browser"},"Browser"),"."))}y.isMDXComponent=!0},6010:function(e,t,r){function a(e){var t,r,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=a(e[t]))&&(n&&(n+=" "),n+=r);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function n(){for(var e,t,r=0,n="";r<arguments.length;)(e=arguments[r++])&&(t=a(e))&&(n&&(n+=" "),n+=t);return n}r.d(t,{Z:function(){return n}})}}]);