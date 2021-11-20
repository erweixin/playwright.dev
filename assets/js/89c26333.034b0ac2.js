"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[95542],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var a=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,i=function(e,t){if(null==e)return{};var r,a,i={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,i=e.mdxType,n=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),h=p(r),m=i,d=h["".concat(s,".").concat(m)]||h[m]||u[m]||n;return r?a.createElement(d,l(l({ref:t},c),{},{components:r})):a.createElement(d,l({ref:t},c))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=r.length,l=new Array(n);l[0]=h;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var p=2;p<n;p++)l[p]=r[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},58215:function(e,t,r){var a=r(67294);t.Z=function(e){var t=e.children,r=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",hidden:r,className:i},t)}},55064:function(e,t,r){r.d(t,{Z:function(){return u}});var a=r(67294),i=r(79443);var n=function(){var e=(0,a.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=r(86010),o="tabItem_1uMI",s="tabItemActive_2DSg";var p=37,c=39;var u=function(e){var t=e.lazy,r=e.block,i=e.defaultValue,u=e.values,h=e.groupId,m=e.className,d=n(),g=d.tabGroupChoices,f=d.setTabGroupChoices,w=(0,a.useState)(i),k=w[0],y=w[1],b=a.Children.toArray(e.children),v=[];if(null!=h){var N=g[h];null!=N&&N!==k&&u.some((function(e){return e.value===N}))&&y(N)}var S=function(e){var t=e.currentTarget,r=v.indexOf(t),a=u[r].value;y(a),null!=h&&(f(h,a),setTimeout((function(){var e,r,a,i,n,l,o,p;(e=t.getBoundingClientRect(),r=e.top,a=e.left,i=e.bottom,n=e.right,l=window,o=l.innerHeight,p=l.innerWidth,r>=0&&n<=p&&i<=o&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},x=function(e){var t,r;switch(e.keyCode){case c:var a=v.indexOf(e.target)+1;r=v[a]||v[0];break;case p:var i=v.indexOf(e.target)-1;r=v[i]||v[v.length-1]}null==(t=r)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":r},m)},u.map((function(e){var t=e.value,r=e.label;return a.createElement("li",{role:"tab",tabIndex:k===t?0:-1,"aria-selected":k===t,className:(0,l.Z)("tabs__item",o,{"tabs__item--active":k===t}),key:t,ref:function(e){return v.push(e)},onKeyDown:x,onFocus:S,onClick:S},r)}))),t?(0,a.cloneElement)(b.filter((function(e){return e.props.value===k}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},b.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==k})}))))}},79443:function(e,t,r){var a=(0,r(67294).createContext)(void 0);t.Z=a},77723:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return o},metadata:function(){return s},toc:function(){return p},default:function(){return u}});var a=r(22122),i=r(19756),n=(r(67294),r(3905)),l=(r(55064),r(58215),{id:"class-playwright",title:"Playwright Library"}),o=void 0,s={unversionedId:"api/class-playwright",id:"version-1.15/api/class-playwright",isDocsHomePage:!1,title:"Playwright Library",description:"Playwright module provides a method to launch a browser instance. The following is a typical example of using Playwright to drive automation:",source:"@site/versioned_docs/version-1.15/api/class-playwright.mdx",sourceDirName:"api",slug:"/api/class-playwright",permalink:"/docs/1.15/api/class-playwright",version:"1.15",frontMatter:{id:"class-playwright",title:"Playwright Library"},sidebar:"version-1.15/api",previous:{title:"Playwright Test",permalink:"/docs/1.15/api/class-test"},next:{title:"Accessibility",permalink:"/docs/1.15/api/class-accessibility"}},p=[{value:"playwright._newRequest(options)",id:"playwright-new-request",children:[]},{value:"playwright.chromium",id:"playwright-chromium",children:[]},{value:"playwright.devices",id:"playwright-devices",children:[]},{value:"playwright.errors",id:"playwright-errors",children:[]},{value:"playwright.firefox",id:"playwright-firefox",children:[]},{value:"playwright.selectors",id:"playwright-selectors",children:[]},{value:"playwright.webkit",id:"playwright-webkit",children:[]}],c={toc:p};function u(e){var t=e.components,r=(0,i.Z)(e,["components"]);return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Playwright module provides a method to launch a browser instance. The following is a typical example of using Playwright to drive automation:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"const { chromium, firefox, webkit } = require('playwright');\n\n(async () => {\n  const browser = await chromium.launch();  // Or 'firefox' or 'webkit'.\n  const page = await browser.newPage();\n  await page.goto('http://example.com');\n  // other actions...\n  await browser.close();\n})();\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/1.15/api/class-playwright#playwright-new-request"},"playwright._newRequest([options])")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/1.15/api/class-playwright#playwright-chromium"},"playwright.chromium")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/1.15/api/class-playwright#playwright-devices"},"playwright.devices")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/1.15/api/class-playwright#playwright-errors"},"playwright.errors")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/1.15/api/class-playwright#playwright-firefox"},"playwright.firefox")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/1.15/api/class-playwright#playwright-selectors"},"playwright.selectors")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/1.15/api/class-playwright#playwright-webkit"},"playwright.webkit"))),(0,n.kt)("h2",{id:"playwright-new-request"},"playwright._newRequest(","[options]",")"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"options")," ","<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"},"Object"),">",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"baseURL"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"playwright-new-request-option-base-url"})," ","<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">"," When using ",(0,n.kt)("a",{parentName:"li",href:"/docs/1.15/api/class-fetchrequest#fetch-request-get"},"fetchRequest.get(urlOrRequest[, options])"),", ",(0,n.kt)("a",{parentName:"li",href:"/docs/1.15/api/class-fetchrequest#fetch-request-post"},"fetchRequest.post(urlOrRequest[, options])"),", ",(0,n.kt)("a",{parentName:"li",href:"/docs/1.15/api/class-fetchrequest#fetch-request-fetch"},"fetchRequest.fetch(urlOrRequest[, options])")," it takes the base URL in consideration by using the ",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/URL/URL"},(0,n.kt)("inlineCode",{parentName:"a"},"URL()"))," constructor for building the corresponding URL. Examples:",(0,n.kt)("a",{href:"#playwright-new-request-option-base-url",class:"list-anchor"},"#"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"baseURL: ",(0,n.kt)("inlineCode",{parentName:"li"},"http://localhost:3000")," and sending rquest to ",(0,n.kt)("inlineCode",{parentName:"li"},"/bar.html")," results in ",(0,n.kt)("inlineCode",{parentName:"li"},"http://localhost:3000/bar.html")),(0,n.kt)("li",{parentName:"ul"},"baseURL: ",(0,n.kt)("inlineCode",{parentName:"li"},"http://localhost:3000/foo/")," and sending rquest to ",(0,n.kt)("inlineCode",{parentName:"li"},"./bar.html")," results in ",(0,n.kt)("inlineCode",{parentName:"li"},"http://localhost:3000/foo/bar.html")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"extraHTTPHeaders"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"playwright-new-request-option-extra-http-headers"})," ","<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"},"Object"),"<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),", ",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">",">"," An object containing additional HTTP headers to be sent with every request.",(0,n.kt)("a",{href:"#playwright-new-request-option-extra-http-headers",class:"list-anchor"},"#")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"httpCredentials"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"playwright-new-request-option-http-credentials"})," ","<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"},"Object"),">"," Credentials for ",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication"},"HTTP authentication"),".",(0,n.kt)("a",{href:"#playwright-new-request-option-http-credentials",class:"list-anchor"},"#"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"username")," ","<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"password")," ","<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"ignoreHTTPSErrors"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"playwright-new-request-option-ignore-https-errors"})," ","<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type",title:"Boolean"},"boolean"),">"," Whether to ignore HTTPS errors when sending network requests. Defaults to ",(0,n.kt)("inlineCode",{parentName:"li"},"false"),".",(0,n.kt)("a",{href:"#playwright-new-request-option-ignore-https-errors",class:"list-anchor"},"#")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"proxy"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"playwright-new-request-option-proxy"})," ","<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"},"Object"),">"," Network proxy settings.",(0,n.kt)("a",{href:"#playwright-new-request-option-proxy",class:"list-anchor"},"#"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"server")," ","<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">"," Proxy to be used for all requests. HTTP and SOCKS proxies are supported, for example ",(0,n.kt)("inlineCode",{parentName:"li"},"http://myproxy.com:3128")," or ",(0,n.kt)("inlineCode",{parentName:"li"},"socks5://myproxy.com:3128"),". Short form ",(0,n.kt)("inlineCode",{parentName:"li"},"myproxy.com:3128")," is considered an HTTP proxy."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"bypass")," ","<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">"," Optional coma-separated domains to bypass proxy, for example ",(0,n.kt)("inlineCode",{parentName:"li"},'".com, chromium.org, .domain.com"'),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"username")," ","<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">"," Optional username to use if HTTP proxy requires authentication."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"password")," ","<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">"," Optional password to use if HTTP proxy requires authentication."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"timeout"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"playwright-new-request-option-timeout"})," ","<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"},"number"),">"," Maximum time in milliseconds to wait for the response. Defaults to ",(0,n.kt)("inlineCode",{parentName:"li"},"30000")," (30 seconds). Pass ",(0,n.kt)("inlineCode",{parentName:"li"},"0")," to disable timeout.",(0,n.kt)("a",{href:"#playwright-new-request-option-timeout",class:"list-anchor"},"#")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"userAgent"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"playwright-new-request-option-user-agent"})," ","<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">"," Specific user agent to use in this context.",(0,n.kt)("a",{href:"#playwright-new-request-option-user-agent",class:"list-anchor"},"#")))),(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"playwright-new-request-return"})," ","<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),"<",(0,n.kt)("a",{parentName:"li",href:"/docs/1.15/api/class-fetchrequest",title:"FetchRequest"},"FetchRequest"),">",">",(0,n.kt)("a",{href:"#playwright-new-request-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"experimental")," Creates new instances of ",(0,n.kt)("a",{parentName:"p",href:"/docs/1.15/api/class-fetchrequest",title:"FetchRequest"},"FetchRequest"),"."),(0,n.kt)("h2",{id:"playwright-chromium"},"playwright.chromium"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"type: ","<",(0,n.kt)("a",{parentName:"li",href:"/docs/1.15/api/class-browsertype",title:"BrowserType"},"BrowserType"),">")),(0,n.kt)("p",null,"This object can be used to launch or connect to Chromium, returning instances of ",(0,n.kt)("a",{parentName:"p",href:"/docs/1.15/api/class-browser",title:"Browser"},"Browser"),"."),(0,n.kt)("h2",{id:"playwright-devices"},"playwright.devices"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"type: ","<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"},"Object"),">")),(0,n.kt)("p",null,"Returns a dictionary of devices to be used with ",(0,n.kt)("a",{parentName:"p",href:"/docs/1.15/api/class-browser#browser-new-context"},"browser.newContext([options])")," or ",(0,n.kt)("a",{parentName:"p",href:"/docs/1.15/api/class-browser#browser-new-page"},"browser.newPage([options])"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"const { webkit, devices } = require('playwright');\nconst iPhone = devices['iPhone 6'];\n\n(async () => {\n  const browser = await webkit.launch();\n  const context = await browser.newContext({\n    ...iPhone\n  });\n  const page = await context.newPage();\n  await page.goto('http://example.com');\n  // other actions...\n  await browser.close();\n})();\n")),(0,n.kt)("h2",{id:"playwright-errors"},"playwright.errors"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"type: ","<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"},"Object"),">",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"TimeoutError")," ","<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function",title:"Function"},"function"),">"," A class of ",(0,n.kt)("a",{parentName:"li",href:"/docs/1.15/api/class-timeouterror",title:"TimeoutError"},"TimeoutError"),".")))),(0,n.kt)("p",null,"Playwright methods might throw errors if they are unable to fulfill a request. For example, ",(0,n.kt)("a",{parentName:"p",href:"/docs/1.15/api/class-page#page-wait-for-selector"},"page.waitForSelector(selector[, options])")," might fail if the selector doesn't match any nodes during the given timeframe."),(0,n.kt)("p",null,"For certain types of errors Playwright uses specific error classes. These classes are available via ",(0,n.kt)("a",{parentName:"p",href:"#playwrighterrors"},(0,n.kt)("inlineCode",{parentName:"a"},"playwright.errors")),"."),(0,n.kt)("p",null,"An example of handling a timeout error:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"try {\n  await page.waitForSelector('.foo');\n} catch (e) {\n  if (e instanceof playwright.errors.TimeoutError) {\n    // Do something if this is a timeout.\n  }\n}\n")),(0,n.kt)("h2",{id:"playwright-firefox"},"playwright.firefox"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"type: ","<",(0,n.kt)("a",{parentName:"li",href:"/docs/1.15/api/class-browsertype",title:"BrowserType"},"BrowserType"),">")),(0,n.kt)("p",null,"This object can be used to launch or connect to Firefox, returning instances of ",(0,n.kt)("a",{parentName:"p",href:"/docs/1.15/api/class-browser",title:"Browser"},"Browser"),"."),(0,n.kt)("h2",{id:"playwright-selectors"},"playwright.selectors"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"type: ","<",(0,n.kt)("a",{parentName:"li",href:"/docs/1.15/api/class-selectors",title:"Selectors"},"Selectors"),">")),(0,n.kt)("p",null,"Selectors can be used to install custom selector engines. See ",(0,n.kt)("a",{parentName:"p",href:"/docs/1.15/selectors"},"Working with selectors")," for more information."),(0,n.kt)("h2",{id:"playwright-webkit"},"playwright.webkit"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"type: ","<",(0,n.kt)("a",{parentName:"li",href:"/docs/1.15/api/class-browsertype",title:"BrowserType"},"BrowserType"),">")),(0,n.kt)("p",null,"This object can be used to launch or connect to WebKit, returning instances of ",(0,n.kt)("a",{parentName:"p",href:"/docs/1.15/api/class-browser",title:"Browser"},"Browser"),"."))}u.isMDXComponent=!0},86010:function(e,t,r){function a(e){var t,r,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=a(e[t]))&&(i&&(i+=" "),i+=r);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}function i(){for(var e,t,r=0,i="";r<arguments.length;)(e=arguments[r++])&&(t=a(e))&&(i&&(i+=" "),i+=t);return i}r.d(t,{Z:function(){return i}})}}]);