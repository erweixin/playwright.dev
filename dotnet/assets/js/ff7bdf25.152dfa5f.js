"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[5841],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return k}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(n),k=a,m=d["".concat(l,".").concat(k)]||d[k]||u[k]||o;return n?r.createElement(m,s(s({ref:t},c),{},{components:n})):r.createElement(m,s({ref:t},c))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},742:function(e,t,n){n.r(t),n.d(t,{assets:function(){return f},contentTitle:function(){return k},default:function(){return h},frontMatter:function(){return d},metadata:function(){return m},toc:function(){return w}});var r=n(3905),a=Object.defineProperty,o=Object.defineProperties,s=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))l.call(t,n)&&c(e,n,t[n]);if(i)for(var n of i(t))p.call(t,n)&&c(e,n,t[n]);return e};const d={id:"network",title:"Network"},k=void 0,m={unversionedId:"network",id:"version-1.19/network",title:"Network",description:"Playwright provides APIs to monitor and modify network traffic, both HTTP and HTTPS. Any requests that page does, including XHRs and fetch requests, can be tracked, modified and handled.",source:"@site/versioned_docs/version-1.19/network.mdx",sourceDirName:".",slug:"/network",permalink:"/dotnet/docs/network",tags:[],version:"1.19",frontMatter:{id:"network",title:"Network"},sidebar:"version-1.19/docs",previous:{title:"Navigations",permalink:"/dotnet/docs/navigations"},next:{title:"Pages",permalink:"/dotnet/docs/pages"}},f={},w=[{value:"HTTP Authentication",id:"http-authentication",level:2},{value:"API reference",id:"api-reference",level:3},{value:"HTTP Proxy",id:"http-proxy",level:2},{value:"Network events",id:"network-events",level:2},{value:"Variations",id:"variations",level:4},{value:"API reference",id:"api-reference-1",level:3},{value:"Handle requests",id:"handle-requests",level:2},{value:"Variations",id:"variations-1",level:4},{value:"API reference",id:"api-reference-2",level:3},{value:"Modify requests",id:"modify-requests",level:2},{value:"Abort requests",id:"abort-requests",level:2},{value:"API reference",id:"api-reference-3",level:3},{value:"WebSockets",id:"websockets",level:2},{value:"API reference",id:"api-reference-4",level:3}],y={toc:w};function h(e){var t,n=e,{components:a}=n,c=((e,t)=>{var n={};for(var r in e)l.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&i)for(var r of i(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=u(u({},y),c),o(t,s({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"Playwright provides APIs to ",(0,r.kt)("strong",{parentName:"p"},"monitor")," and ",(0,r.kt)("strong",{parentName:"p"},"modify")," network traffic, both HTTP and HTTPS. Any requests that page does, including ",(0,r.kt)("a",u({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest"}),"XHRs")," and ",(0,r.kt)("a",u({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API"}),"fetch")," requests, can be tracked, modified and handled."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"#http-authentication"}),"HTTP Authentication")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"#http-proxy"}),"HTTP Proxy")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"#network-events"}),"Network events")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"#handle-requests"}),"Handle requests")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"#modify-requests"}),"Modify requests")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"#abort-requests"}),"Abort requests")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"#websockets"}),"WebSockets"))),(0,r.kt)("br",null),(0,r.kt)("h2",u({},{id:"http-authentication"}),"HTTP Authentication"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-csharp"}),'using var context = await Browser.NewContextAsync(new BrowserNewContextOptions\n{\n    HttpCredentials = new HttpCredentials\n    {\n        Username = "bill",\n        Password = "pa55w0rd"\n    },\n});\nvar page = await context.NewPageAsync();\nawait page.GotoAsync("https://example.com");\n')),(0,r.kt)("h3",u({},{id:"api-reference"}),"API reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"/dotnet/docs/api/class-browser#browser-new-context"}),"Browser.NewContextAsync(options)"))),(0,r.kt)("h2",u({},{id:"http-proxy"}),"HTTP Proxy"),(0,r.kt)("p",null,"You can configure pages to load over the HTTP(S) proxy or SOCKSv5. Proxy can be either set globally for the entire browser, or for each browser context individually."),(0,r.kt)("p",null,"You can optionally specify username and password for HTTP(S) proxy, you can also specify hosts to bypass proxy for."),(0,r.kt)("p",null,"Here is an example of a global proxy:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-csharp"}),'var proxy = new Proxy\n{\n    Server = "http://myproxy.com:3128",\n    Username = "user",\n    Password = "pwd"\n};\nawait using var browser = await BrowserType.LaunchAsync(new BrowserTypeLaunchOptions\n{\n    Proxy = proxy\n});\n')),(0,r.kt)("p",null,"When specifying proxy for each context individually, ",(0,r.kt)("strong",{parentName:"p"},"Chromium on Windows")," needs a hint that proxy will be set. This is done via passing a non-empty proxy server to the browser itself. Here is an example of a context-specific proxy:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-csharp"}),'var proxy = new Proxy { Server = "per-context" };\nawait using var browser = await BrowserType.LaunchAsync(new BrowserTypeLaunchOptions\n{\n    // Browser proxy option is required for Chromium on Windows.\n    Proxy = proxy\n});\nusing var context = await Browser.NewContextAsync(new BrowserNewContextOptions\n{\n    Proxy = new Proxy { Server = "http://myproxy.com:3128" })\n});\n')),(0,r.kt)("h2",u({},{id:"network-events"}),"Network events"),(0,r.kt)("p",null,"You can monitor all the requests and responses:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-csharp"}),'using Microsoft.Playwright;\nusing System;\n\nclass Program\n{\n    public static async Task Main()\n    {\n        using var playwright = await Playwright.CreateAsync();\n        await using var browser = await playwright.Chromium.LaunchAsync();\n        var page = await browser.NewPageAsync();\n        page.Request += (_, request) => Console.WriteLine(">> " + request.Method + " " + request.Url);\n        page.Response += (_, response) => Console.WriteLine("<< " + response.Status + " " + response.Url);\n        await page.GotoAsync("https://example.com");\n    }\n}\n')),(0,r.kt)("p",null,"Or wait for a network response after the button click:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-csharp"}),'// Use a glob URL pattern\nvar waitForResponseTask = page.WaitForResponseAsync("**/api/fetch_data");\nawait page.ClickAsync("button#update");\nvar response = await waitForResponseTask;\n')),(0,r.kt)("h4",u({},{id:"variations"}),"Variations"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-csharp"}),'// Use a regular expression\nvar waitForResponseTask = page.WaitForResponseAsync(new Regex("\\\\.jpeg$"));\nawait page.ClickAsync("button#update");\nvar response = await waitForResponseTask;\n\n// Use a predicate taking a Response object\nvar waitForResponseTask = page.WaitForResponseAsync(r => r.Url.Contains(token));\nawait page.ClickAsync("button#update");\nvar response = await waitForResponseTask;\n')),(0,r.kt)("h3",u({},{id:"api-reference-1"}),"API reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"/dotnet/docs/api/class-request",title:"Request"}),"Request")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"/dotnet/docs/api/class-response",title:"Response"}),"Response")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"/dotnet/docs/api/class-page#page-event-request"}),"event Page.Request")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"/dotnet/docs/api/class-page#page-event-response"}),"event Page.Response")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"/dotnet/docs/api/class-page#page-wait-for-request"}),"Page.RunAndWaitForRequestAsync(action, urlOrPredicate, options)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"/dotnet/docs/api/class-page#page-wait-for-response"}),"Page.RunAndWaitForResponseAsync(action, urlOrPredicate, options)"))),(0,r.kt)("br",null),(0,r.kt)("h2",u({},{id:"handle-requests"}),"Handle requests"),(0,r.kt)("p",null,"You can mock API endpoints via handling the network requests in your Playwright script."),(0,r.kt)("h4",u({},{id:"variations-1"}),"Variations"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-csharp"}),'await page.RouteAsync("**/api/fetch_data", async route => {\n  await route.FulfillAsync(status: 200, body: testData);\n});\nawait page.GotoAsync("https://example.com");\n')),(0,r.kt)("h3",u({},{id:"api-reference-2"}),"API reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"/dotnet/docs/api/class-browsercontext#browser-context-route"}),"BrowserContext.RouteAsync(url, handler, options)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"/dotnet/docs/api/class-browsercontext#browser-context-unroute"}),"BrowserContext.UnrouteAsync(url, handler)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"/dotnet/docs/api/class-page#page-route"}),"Page.RouteAsync(url, handler, options)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"/dotnet/docs/api/class-page#page-unroute"}),"Page.UnrouteAsync(url, handler)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"/dotnet/docs/api/class-route",title:"Route"}),"Route"))),(0,r.kt)("br",null),(0,r.kt)("h2",u({},{id:"modify-requests"}),"Modify requests"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-csharp"}),'// Delete header\nawait page.RouteAsync("**/*", async route => {\n    var headers = new Dictionary<string, string>(route.Request.Headers.ToDictionary(x => x.Key, x => x.Value));\n    headers.Remove("X-Secret");\n    await route.ContinueAsync(new RouteContinueOptions { Headers = headers });\n});\n\n// Continue requests as POST.\nawait page.RouteAsync("**/*", async route => await route.ContinueAsync(method: "POST"));\n')),(0,r.kt)("p",null,"You can continue requests with modifications. Example above removes an HTTP header from the outgoing requests."),(0,r.kt)("h2",u({},{id:"abort-requests"}),"Abort requests"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-csharp"}),'await page.RouteAsync("**/*.{png,jpg,jpeg}", route => route.AbortAsync());\n\n// Abort based on the request type\nawait page.RouteAsync("**/*", async route => {\nif ("image".Equals(route.Request.ResourceType))\n    await route.AbortAsync();\nelse\n    await route.ContinueAsync();\n});\n')),(0,r.kt)("h3",u({},{id:"api-reference-3"}),"API reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"/dotnet/docs/api/class-page#page-route"}),"Page.RouteAsync(url, handler, options)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"/dotnet/docs/api/class-browsercontext#browser-context-route"}),"BrowserContext.RouteAsync(url, handler, options)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"/dotnet/docs/api/class-route#route-abort"}),"Route.AbortAsync(errorCode)"))),(0,r.kt)("br",null),(0,r.kt)("h2",u({},{id:"websockets"}),"WebSockets"),(0,r.kt)("p",null,"Playwright supports ",(0,r.kt)("a",u({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API"}),"WebSockets")," inspection out of the box. Every time WebSocket is created, ",(0,r.kt)("a",u({parentName:"p"},{href:"/dotnet/docs/api/class-page#page-event-web-socket"}),"event Page.WebSocket")," event is fired. This event contains the ",(0,r.kt)("a",u({parentName:"p"},{href:"/dotnet/docs/api/class-websocket",title:"WebSocket"}),"WebSocket")," instance for further web socket frames inspection:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-csharp"}),'page.WebSocket += (_, ws) =>\n{\n    Console.WriteLine("WebSocket opened: " + ws.Url);\n    ws.FrameSent += (_, f) => Console.WriteLine(f.Text);\n    ws.FrameReceived += (_, f) => Console.WriteLine(f.Text);\n    ws.Close += (_, ws1) => Console.WriteLine("WebSocket closed");\n};\n')),(0,r.kt)("h3",u({},{id:"api-reference-4"}),"API reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"/dotnet/docs/api/class-websocket",title:"WebSocket"}),"WebSocket")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"/dotnet/docs/api/class-page#page-event-web-socket"}),"event Page.WebSocket")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"/dotnet/docs/api/class-websocket#web-socket-event-frame-sent"}),"event WebSocket.FrameSent")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"/dotnet/docs/api/class-websocket#web-socket-event-frame-received"}),"event WebSocket.FrameReceived")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"/dotnet/docs/api/class-websocket#web-socket-event-close"}),"event WebSocket.Close"))),(0,r.kt)("br",null))}h.isMDXComponent=!0}}]);