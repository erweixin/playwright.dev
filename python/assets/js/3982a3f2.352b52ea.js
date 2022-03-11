"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[3699],{3905:function(e,t,a){a.d(t,{Zo:function(){return i},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),u=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},i=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),d=u(a),m=r,y=d["".concat(p,".").concat(m)]||d[m]||c[m]||o;return a?n.createElement(y,l(l({ref:t},i),{},{components:a})):n.createElement(y,l({ref:t},i))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var u=2;u<o;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},3811:function(e,t,a){a.d(t,{Z:function(){return u}});var n=a(7294),r=Object.defineProperty,o=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(e,t,a)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;function u({children:e,hidden:t,className:a}){return n.createElement("div",((e,t)=>{for(var a in t||(t={}))l.call(t,a)&&p(e,a,t[a]);if(o)for(var a of o(t))s.call(t,a)&&p(e,a,t[a]);return e})({role:"tabpanel"},{hidden:t,className:a}),e)}},3824:function(e,t,a){a.d(t,{Z:function(){return h}});var n=a(7294),r=a(4939),o=a(5882),l=a(6010),s="tabItem_LplD",p=Object.defineProperty,u=Object.defineProperties,i=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,y=(e,t,a)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,b=(e,t)=>{for(var a in t||(t={}))d.call(t,a)&&y(e,a,t[a]);if(c)for(var a of c(t))m.call(t,a)&&y(e,a,t[a]);return e};function k(e){var t,a,r;const{lazy:p,block:c,defaultValue:d,values:m,groupId:y,className:k}=e,h=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=null!=m?m:h.map((({props:{value:e,label:t,attributes:a}})=>({value:e,label:t,attributes:a}))),g=(0,o.lx)(f,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===d?d:null!=(r=null!=d?d:null==(t=h.find((e=>e.props.default)))?void 0:t.props.value)?r:null==(a=h[0])?void 0:a.props.value;if(null!==v&&!f.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:w,setTabGroupChoices:x}=(0,o.UB)(),[N,T]=(0,n.useState)(v),_=[],{blockElementScrollPositionUntilNextRender:P}=(0,o.o5)();if(null!=y){const e=w[y];null!=e&&e!==N&&f.some((t=>t.value===e))&&T(e)}const O=e=>{const t=e.currentTarget,a=_.indexOf(t),n=f[a].value;n!==N&&(P(t),T(n),null!=y&&x(y,n))},I=e=>{let t=null;switch(e.key){case"ArrowRight":{const a=_.indexOf(e.currentTarget)+1;t=_[a]||_[0];break}case"ArrowLeft":{const a=_.indexOf(e.currentTarget)-1;t=_[a]||_[_.length-1];break}}null==t||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":c},k)},f.map((({value:e,label:t,attributes:a})=>{return n.createElement("li",(r=b({role:"tab",tabIndex:N===e?0:-1,"aria-selected":N===e,key:e,ref:e=>_.push(e),onKeyDown:I,onFocus:O,onClick:O},a),o={className:(0,l.Z)("tabs__item",s,null==a?void 0:a.className,{"tabs__item--active":N===e})},u(r,i(o))),null!=t?t:e);var r,o}))),p?(0,n.cloneElement)(h.filter((e=>e.props.value===N))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},h.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function h(e){const t=(0,r.Z)();return n.createElement(k,b({key:String(t)},e))}},9467:function(e,t,a){a.r(t),a.d(t,{assets:function(){return h},contentTitle:function(){return b},default:function(){return v},frontMatter:function(){return y},metadata:function(){return k},toc:function(){return f}});var n=a(3905),r=a(3824),o=a(3811),l=Object.defineProperty,s=Object.defineProperties,p=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,d=(e,t,a)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,m=(e,t)=>{for(var a in t||(t={}))i.call(t,a)&&d(e,a,t[a]);if(u)for(var a of u(t))c.call(t,a)&&d(e,a,t[a]);return e};const y={id:"network",title:"Network"},b=void 0,k={unversionedId:"network",id:"network",title:"Network",description:"Playwright provides APIs to monitor and modify network traffic, both HTTP and HTTPS. Any requests that page does, including XHRs and fetch requests, can be tracked, modified and handled.",source:"@site/docs/network.mdx",sourceDirName:".",slug:"/network",permalink:"/python/docs/next/network",tags:[],version:"current",frontMatter:{id:"network",title:"Network"},sidebar:"docs",previous:{title:"Navigations",permalink:"/python/docs/next/navigations"},next:{title:"Pages",permalink:"/python/docs/next/pages"}},h={},f=[{value:"HTTP Authentication",id:"http-authentication",level:2},{value:"API reference",id:"api-reference",level:3},{value:"HTTP Proxy",id:"http-proxy",level:2},{value:"Network events",id:"network-events",level:2},{value:"Variations",id:"variations",level:4},{value:"API reference",id:"api-reference-1",level:3},{value:"Handle requests",id:"handle-requests",level:2},{value:"Variations",id:"variations-1",level:4},{value:"API reference",id:"api-reference-2",level:3},{value:"Modify requests",id:"modify-requests",level:2},{value:"Abort requests",id:"abort-requests",level:2},{value:"API reference",id:"api-reference-3",level:3},{value:"WebSockets",id:"websockets",level:2},{value:"API reference",id:"api-reference-4",level:3}],g={toc:f};function v(e){var t,a=e,{components:l}=a,d=((e,t)=>{var a={};for(var n in e)i.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&u)for(var n of u(e))t.indexOf(n)<0&&c.call(e,n)&&(a[n]=e[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(t=m(m({},g),d),s(t,p({components:l,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"Playwright provides APIs to ",(0,n.kt)("strong",{parentName:"p"},"monitor")," and ",(0,n.kt)("strong",{parentName:"p"},"modify")," network traffic, both HTTP and HTTPS. Any requests that page does, including ",(0,n.kt)("a",m({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest"}),"XHRs")," and ",(0,n.kt)("a",m({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API"}),"fetch")," requests, can be tracked, modified and handled."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"#http-authentication"}),"HTTP Authentication")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"#http-proxy"}),"HTTP Proxy")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"#network-events"}),"Network events")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"#handle-requests"}),"Handle requests")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"#modify-requests"}),"Modify requests")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"#abort-requests"}),"Abort requests")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"#websockets"}),"WebSockets"))),(0,n.kt)("br",null),(0,n.kt)("h2",m({},{id:"http-authentication"}),"HTTP Authentication"),(0,n.kt)(r.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"sync",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-py"}),'context = browser.new_context(\n    http_credentials={"username": "bill", "password": "pa55w0rd"}\n)\npage = context.new_page()\npage.goto("https://example.com")\n'))),(0,n.kt)(o.Z,{value:"async",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-py"}),'context = await browser.new_context(\n    http_credentials={"username": "bill", "password": "pa55w0rd"}\n)\npage = await context.new_page()\nawait page.goto("https://example.com")\n')))),(0,n.kt)("h3",m({},{id:"api-reference"}),"API reference"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"/python/docs/next/api/class-browser#browser-new-context"}),"browser.new_context(**kwargs)"))),(0,n.kt)("h2",m({},{id:"http-proxy"}),"HTTP Proxy"),(0,n.kt)("p",null,"You can configure pages to load over the HTTP(S) proxy or SOCKSv5. Proxy can be either set globally for the entire browser, or for each browser context individually."),(0,n.kt)("p",null,"You can optionally specify username and password for HTTP(S) proxy, you can also specify hosts to bypass proxy for."),(0,n.kt)("p",null,"Here is an example of a global proxy:"),(0,n.kt)(r.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"sync",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-py"}),'browser = chromium.launch(proxy={\n  "server": "http://myproxy.com:3128",\n  "username": "usr",\n  "password": "pwd"\n})\n'))),(0,n.kt)(o.Z,{value:"async",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-py"}),'browser = await chromium.launch(proxy={\n  "server": "http://myproxy.com:3128",\n  "username": "usr",\n  "password": "pwd"\n})\n')))),(0,n.kt)("p",null,"When specifying proxy for each context individually, ",(0,n.kt)("strong",{parentName:"p"},"Chromium on Windows")," needs a hint that proxy will be set. This is done via passing a non-empty proxy server to the browser itself. Here is an example of a context-specific proxy:"),(0,n.kt)(r.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"sync",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-py"}),'# Browser proxy option is required for Chromium on Windows.\nbrowser = chromium.launch(proxy={"server": "per-context"})\ncontext = browser.new_context(proxy={"server": "http://myproxy.com:3128"})\n'))),(0,n.kt)(o.Z,{value:"async",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-py"}),'# Browser proxy option is required for Chromium on Windows.\nbrowser = await chromium.launch(proxy={"server": "per-context"})\ncontext = await browser.new_context(proxy={"server": "http://myproxy.com:3128"})\n')))),(0,n.kt)("h2",m({},{id:"network-events"}),"Network events"),(0,n.kt)("p",null,"You can monitor all the requests and responses:"),(0,n.kt)(r.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"sync",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-py"}),'from playwright.sync_api import sync_playwright\n\ndef run(playwright):\n    chromium = playwright.chromium\n    browser = chromium.launch()\n    page = browser.new_page()\n    # Subscribe to "request" and "response" events.\n    page.on("request", lambda request: print(">>", request.method, request.url))\n    page.on("response", lambda response: print("<<", response.status, response.url))\n    page.goto("https://example.com")\n    browser.close()\n\nwith sync_playwright() as playwright:\n    run(playwright)\n'))),(0,n.kt)(o.Z,{value:"async",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-py"}),'import asyncio\nfrom playwright.async_api import async_playwright\n\nasync def run(playwright):\n    chromium = playwright.chromium\n    browser = await chromium.launch()\n    page = await browser.new_page()\n    # Subscribe to "request" and "response" events.\n    page.on("request", lambda request: print(">>", request.method, request.url))\n    page.on("response", lambda response: print("<<", response.status, response.url))\n    await page.goto("https://example.com")\n    await browser.close()\n\nasync def main():\n    async with async_playwright() as playwright:\n        await run(playwright)\nasyncio.run(main())\n')))),(0,n.kt)("p",null,"Or wait for a network response after the button click:"),(0,n.kt)(r.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"sync",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-py"}),'# Use a glob url pattern\nwith page.expect_response("**/api/fetch_data") as response_info:\n    page.click("button#update")\nresponse = response_info.value\n'))),(0,n.kt)(o.Z,{value:"async",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-py"}),'# Use a glob url pattern\nasync with page.expect_response("**/api/fetch_data") as response_info:\n    await page.click("button#update")\nresponse = await response_info.value\n')))),(0,n.kt)("h4",m({},{id:"variations"}),"Variations"),(0,n.kt)(r.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"sync",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-py"}),'# Use a regular expression\nwith page.expect_response(re.compile(r"\\.jpeg$")) as response_info:\n    page.click("button#update")\nresponse = response_info.value\n\n# Use a predicate taking a response object\nwith page.expect_response(lambda response: token in response.url) as response_info:\n    page.click("button#update")\nresponse = response_info.value\n'))),(0,n.kt)(o.Z,{value:"async",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-py"}),'# Use a regular expression\nasync with page.expect_response(re.compile(r"\\.jpeg$")) as response_info:\n    await page.click("button#update")\nresponse = await response_info.value\n\n# Use a predicate taking a response object\nasync with page.expect_response(lambda response: token in response.url) as response_info:\n    await page.click("button#update")\nresponse = await response_info.value\n')))),(0,n.kt)("h3",m({},{id:"api-reference-1"}),"API reference"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"/python/docs/next/api/class-request",title:"Request"}),"Request")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"/python/docs/next/api/class-response",title:"Response"}),"Response")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"/python/docs/next/api/class-page#page-event-request"}),'page.on("request")')),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"/python/docs/next/api/class-page#page-event-response"}),'page.on("response")')),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"/python/docs/next/api/class-page#page-wait-for-request"}),"page.expect_request(url_or_predicate, **kwargs)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"/python/docs/next/api/class-page#page-wait-for-response"}),"page.expect_response(url_or_predicate, **kwargs)"))),(0,n.kt)("br",null),(0,n.kt)("h2",m({},{id:"handle-requests"}),"Handle requests"),(0,n.kt)(r.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"sync",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-py"}),'page.route(\n    "**/api/fetch_data",\n    lambda route: route.fulfill(status=200, body=test_data))\npage.goto("https://example.com")\n'))),(0,n.kt)(o.Z,{value:"async",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-py"}),'await page.route(\n    "**/api/fetch_data",\n    lambda route: route.fulfill(status=200, body=test_data))\nawait page.goto("https://example.com")\n')))),(0,n.kt)("p",null,"You can mock API endpoints via handling the network requests in your Playwright script."),(0,n.kt)("h4",m({},{id:"variations-1"}),"Variations"),(0,n.kt)(r.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"sync",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-py"}),'# Set up route on the entire browser context.\n# It will apply to popup windows and opened links.\ncontext.route(\n    "**/api/login",\n    lambda route: route.fulfill(status=200, body="accept"))\npage.goto("https://example.com")\n'))),(0,n.kt)(o.Z,{value:"async",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-py"}),'# Set up route on the entire browser context.\n# It will apply to popup windows and opened links.\nawait context.route(\n    "**/api/login",\n    lambda route: route.fulfill(status=200, body="accept"))\nawait page.goto("https://example.com")\n')))),(0,n.kt)("h3",m({},{id:"api-reference-2"}),"API reference"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"/python/docs/next/api/class-browsercontext#browser-context-route"}),"browser_context.route(url, handler, **kwargs)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"/python/docs/next/api/class-browsercontext#browser-context-unroute"}),"browser_context.unroute(url, **kwargs)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"/python/docs/next/api/class-page#page-route"}),"page.route(url, handler, **kwargs)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"/python/docs/next/api/class-page#page-unroute"}),"page.unroute(url, **kwargs)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"/python/docs/next/api/class-route",title:"Route"}),"Route"))),(0,n.kt)("br",null),(0,n.kt)("h2",m({},{id:"modify-requests"}),"Modify requests"),(0,n.kt)(r.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"sync",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-py"}),'# Delete header\ndef handle_route(route):\n    headers = route.request.headers\n    del headers["x-secret"]\n    route.continue_(headers=headers)\npage.route("**/*", handle_route)\n\n# Continue requests as POST.\npage.route("**/*", lambda route: route.continue_(method="POST"))\n'))),(0,n.kt)(o.Z,{value:"async",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-py"}),'# Delete header\nasync def handle_route(route):\n    headers = route.request.headers\n    del headers["x-secret"]\n    route.continue_(headers=headers)\nawait page.route("**/*", handle_route)\n\n# Continue requests as POST.\nawait page.route("**/*", lambda route: route.continue_(method="POST"))\n')))),(0,n.kt)("p",null,"You can continue requests with modifications. Example above removes an HTTP header from the outgoing requests."),(0,n.kt)("h2",m({},{id:"abort-requests"}),"Abort requests"),(0,n.kt)(r.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"sync",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-py"}),'page.route("**/*.{png,jpg,jpeg}", lambda route: route.abort())\n\n# Abort based on the request type\npage.route("**/*", lambda route: route.abort() if route.request.resource_type == "image"  else route.continue_())\n'))),(0,n.kt)(o.Z,{value:"async",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-py"}),'await page.route("**/*.{png,jpg,jpeg}", lambda route: route.abort())\n\n# Abort based on the request type\nawait page.route("**/*", lambda route: route.abort() if route.request.resource_type == "image"  else route.continue_())\n')))),(0,n.kt)("h3",m({},{id:"api-reference-3"}),"API reference"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"/python/docs/next/api/class-page#page-route"}),"page.route(url, handler, **kwargs)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"/python/docs/next/api/class-browsercontext#browser-context-route"}),"browser_context.route(url, handler, **kwargs)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"/python/docs/next/api/class-route#route-abort"}),"route.abort(**kwargs)"))),(0,n.kt)("br",null),(0,n.kt)("h2",m({},{id:"websockets"}),"WebSockets"),(0,n.kt)("p",null,"Playwright supports ",(0,n.kt)("a",m({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API"}),"WebSockets")," inspection out of the box. Every time WebSocket is created, ",(0,n.kt)("a",m({parentName:"p"},{href:"/python/docs/next/api/class-page#page-event-web-socket"}),'page.on("websocket")')," event is fired. This event contains the ",(0,n.kt)("a",m({parentName:"p"},{href:"/python/docs/next/api/class-websocket",title:"WebSocket"}),"WebSocket")," instance for further web socket frames inspection:"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-py"}),'def on_web_socket(ws):\n    print(f"WebSocket opened: {ws.url}")\n    ws.on("framesent", lambda payload: print(payload))\n    ws.on("framereceived", lambda payload: print(payload))\n    ws.on("close", lambda payload: print("WebSocket closed"))\n\npage.on("websocket", on_web_socket)\n')),(0,n.kt)("h3",m({},{id:"api-reference-4"}),"API reference"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"/python/docs/next/api/class-websocket",title:"WebSocket"}),"WebSocket")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"/python/docs/next/api/class-page#page-event-web-socket"}),'page.on("websocket")')),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"/python/docs/next/api/class-websocket#web-socket-event-frame-sent"}),'web_socket.on("framesent")')),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"/python/docs/next/api/class-websocket#web-socket-event-frame-received"}),'web_socket.on("framereceived")')),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"/python/docs/next/api/class-websocket#web-socket-event-close"}),'web_socket.on("close")'))),(0,n.kt)("br",null))}v.isMDXComponent=!0}}]);