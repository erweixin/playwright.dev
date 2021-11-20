"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[98097],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),h=c(r),m=n,f=h["".concat(s,".").concat(m)]||h[m]||u[m]||i;return r?a.createElement(f,l(l({ref:t},p),{},{components:r})):a.createElement(f,l({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=h;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var c=2;c<i;c++)l[c]=r[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},58215:function(e,t,r){var a=r(67294);t.Z=function(e){var t=e.children,r=e.hidden,n=e.className;return a.createElement("div",{role:"tabpanel",hidden:r,className:n},t)}},55064:function(e,t,r){r.d(t,{Z:function(){return u}});var a=r(67294),n=r(79443);var i=function(){var e=(0,a.useContext)(n.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=r(86010),o="tabItem_1uMI",s="tabItemActive_2DSg";var c=37,p=39;var u=function(e){var t=e.lazy,r=e.block,n=e.defaultValue,u=e.values,h=e.groupId,m=e.className,f=i(),w=f.tabGroupChoices,d=f.setTabGroupChoices,y=(0,a.useState)(n),g=y[0],b=y[1],k=a.Children.toArray(e.children),v=[];if(null!=h){var x=w[h];null!=x&&x!==g&&u.some((function(e){return e.value===x}))&&b(x)}var N=function(e){var t=e.currentTarget,r=v.indexOf(t),a=u[r].value;b(a),null!=h&&(d(h,a),setTimeout((function(){var e,r,a,n,i,l,o,c;(e=t.getBoundingClientRect(),r=e.top,a=e.left,n=e.bottom,i=e.right,l=window,o=l.innerHeight,c=l.innerWidth,r>=0&&i<=c&&n<=o&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},O=function(e){var t,r;switch(e.keyCode){case p:var a=v.indexOf(e.target)+1;r=v[a]||v[0];break;case c:var n=v.indexOf(e.target)-1;r=v[n]||v[v.length-1]}null==(t=r)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":r},m)},u.map((function(e){var t=e.value,r=e.label;return a.createElement("li",{role:"tab",tabIndex:g===t?0:-1,"aria-selected":g===t,className:(0,l.Z)("tabs__item",o,{"tabs__item--active":g===t}),key:t,ref:function(e){return v.push(e)},onKeyDown:O,onFocus:N,onClick:N},r)}))),t?(0,a.cloneElement)(k.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},k.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==g})}))))}},79443:function(e,t,r){var a=(0,r(67294).createContext)(void 0);t.Z=a},56096:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return o},metadata:function(){return s},toc:function(){return c},default:function(){return u}});var a=r(22122),n=r(19756),i=(r(67294),r(3905)),l=(r(55064),r(58215),{id:"class-playwright",title:"Playwright Library"}),o=void 0,s={unversionedId:"api/class-playwright",id:"api/class-playwright",isDocsHomePage:!1,title:"Playwright Library",description:"Playwright module provides a method to launch a browser instance. The following is a typical example of using Playwright to drive automation:",source:"@site/docs/api/class-playwright.mdx",sourceDirName:"api",slug:"/api/class-playwright",permalink:"/docs/next/api/class-playwright",version:"current",frontMatter:{id:"class-playwright",title:"Playwright Library"},sidebar:"api",previous:{title:"Playwright Test",permalink:"/docs/next/api/class-test"},next:{title:"APIRequest",permalink:"/docs/next/api/class-apirequest"}},c=[{value:"playwright.chromium",id:"playwright-chromium",children:[]},{value:"playwright.devices",id:"playwright-devices",children:[]},{value:"playwright.errors",id:"playwright-errors",children:[]},{value:"playwright.firefox",id:"playwright-firefox",children:[]},{value:"playwright.request",id:"playwright-request",children:[]},{value:"playwright.selectors",id:"playwright-selectors",children:[]},{value:"playwright.webkit",id:"playwright-webkit",children:[]}],p={toc:c};function u(e){var t=e.components,r=(0,n.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Playwright module provides a method to launch a browser instance. The following is a typical example of using Playwright to drive automation:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const { chromium, firefox, webkit } = require('playwright');\n\n(async () => {\n  const browser = await chromium.launch();  // Or 'firefox' or 'webkit'.\n  const page = await browser.newPage();\n  await page.goto('http://example.com');\n  // other actions...\n  await browser.close();\n})();\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/class-playwright#playwright-chromium"},"playwright.chromium")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/class-playwright#playwright-devices"},"playwright.devices")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/class-playwright#playwright-errors"},"playwright.errors")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/class-playwright#playwright-firefox"},"playwright.firefox")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/class-playwright#playwright-request"},"playwright.request")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/class-playwright#playwright-selectors"},"playwright.selectors")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/class-playwright#playwright-webkit"},"playwright.webkit"))),(0,i.kt)("h2",{id:"playwright-chromium"},"playwright.chromium"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"type: ","<",(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/class-browsertype",title:"BrowserType"},"BrowserType"),">")),(0,i.kt)("p",null,"This object can be used to launch or connect to Chromium, returning instances of ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/class-browser",title:"Browser"},"Browser"),"."),(0,i.kt)("h2",{id:"playwright-devices"},"playwright.devices"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"type: ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"},"Object"),">")),(0,i.kt)("p",null,"Returns a dictionary of devices to be used with ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/class-browser#browser-new-context"},"browser.newContext([options])")," or ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/class-browser#browser-new-page"},"browser.newPage([options])"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const { webkit, devices } = require('playwright');\nconst iPhone = devices['iPhone 6'];\n\n(async () => {\n  const browser = await webkit.launch();\n  const context = await browser.newContext({\n    ...iPhone\n  });\n  const page = await context.newPage();\n  await page.goto('http://example.com');\n  // other actions...\n  await browser.close();\n})();\n")),(0,i.kt)("h2",{id:"playwright-errors"},"playwright.errors"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"type: ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"},"Object"),">",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"TimeoutError")," ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function",title:"Function"},"function"),">"," A class of ",(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/class-timeouterror",title:"TimeoutError"},"TimeoutError"),".")))),(0,i.kt)("p",null,"Playwright methods might throw errors if they are unable to fulfill a request. For example, ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/class-locator#locator-wait-for"},"locator.waitFor([options])")," might fail if the selector doesn't match any nodes during the given timeframe."),(0,i.kt)("p",null,"For certain types of errors Playwright uses specific error classes. These classes are available via ",(0,i.kt)("a",{parentName:"p",href:"#playwrighterrors"},(0,i.kt)("inlineCode",{parentName:"a"},"playwright.errors")),"."),(0,i.kt)("p",null,"An example of handling a timeout error:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"try {\n  await page.locator('.foo').waitFor();\n} catch (e) {\n  if (e instanceof playwright.errors.TimeoutError) {\n    // Do something if this is a timeout.\n  }\n}\n")),(0,i.kt)("h2",{id:"playwright-firefox"},"playwright.firefox"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"type: ","<",(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/class-browsertype",title:"BrowserType"},"BrowserType"),">")),(0,i.kt)("p",null,"This object can be used to launch or connect to Firefox, returning instances of ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/class-browser",title:"Browser"},"Browser"),"."),(0,i.kt)("h2",{id:"playwright-request"},"playwright.request"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"type: ","<",(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/class-apirequest",title:"APIRequest"},"APIRequest"),">")),(0,i.kt)("p",null,"Exposes API that can be used for the Web API testing."),(0,i.kt)("h2",{id:"playwright-selectors"},"playwright.selectors"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"type: ","<",(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/class-selectors",title:"Selectors"},"Selectors"),">")),(0,i.kt)("p",null,"Selectors can be used to install custom selector engines. See ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/selectors"},"Working with selectors")," for more information."),(0,i.kt)("h2",{id:"playwright-webkit"},"playwright.webkit"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"type: ","<",(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/class-browsertype",title:"BrowserType"},"BrowserType"),">")),(0,i.kt)("p",null,"This object can be used to launch or connect to WebKit, returning instances of ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/class-browser",title:"Browser"},"Browser"),"."))}u.isMDXComponent=!0},86010:function(e,t,r){function a(e){var t,r,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=a(e[t]))&&(n&&(n+=" "),n+=r);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function n(){for(var e,t,r=0,n="";r<arguments.length;)(e=arguments[r++])&&(t=a(e))&&(n&&(n+=" "),n+=t);return n}r.d(t,{Z:function(){return n}})}}]);