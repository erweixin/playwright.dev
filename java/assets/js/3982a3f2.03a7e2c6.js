"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[3699],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),p=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(a),m=n,h=d["".concat(i,".").concat(m)]||d[m]||u[m]||o;return a?r.createElement(h,s(s({ref:t},c),{},{components:a})):r.createElement(h,s({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,s[1]=l;for(var p=2;p<o;p++)s[p]=a[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},9467:function(e,t,a){a.r(t),a.d(t,{assets:function(){return k},contentTitle:function(){return m},default:function(){return v},frontMatter:function(){return d},metadata:function(){return h},toc:function(){return f}});var r=a(3905),n=Object.defineProperty,o=Object.defineProperties,s=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,t,a)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,u=(e,t)=>{for(var a in t||(t={}))i.call(t,a)&&c(e,a,t[a]);if(l)for(var a of l(t))p.call(t,a)&&c(e,a,t[a]);return e};const d={id:"network",title:"Network"},m=void 0,h={unversionedId:"network",id:"network",title:"Network",description:"Playwright provides APIs to monitor and modify network traffic, both HTTP and HTTPS. Any requests that page does, including XHRs and fetch requests, can be tracked, modified and handled.",source:"@site/docs/network.mdx",sourceDirName:".",slug:"/network",permalink:"/java/docs/next/network",draft:!1,tags:[],version:"current",frontMatter:{id:"network",title:"Network"},sidebar:"docs",previous:{title:"Navigations",permalink:"/java/docs/next/navigations"},next:{title:"Pages",permalink:"/java/docs/next/pages"}},k={},f=[{value:"HTTP Authentication",id:"http-authentication",level:2},{value:"API reference",id:"api-reference",level:3},{value:"HTTP Proxy",id:"http-proxy",level:2},{value:"Network events",id:"network-events",level:2},{value:"Variations",id:"variations",level:4},{value:"API reference",id:"api-reference-1",level:3},{value:"Handle requests",id:"handle-requests",level:2},{value:"Variations",id:"variations-1",level:4},{value:"API reference",id:"api-reference-2",level:3},{value:"Modify requests",id:"modify-requests",level:2},{value:"Abort requests",id:"abort-requests",level:2},{value:"API reference",id:"api-reference-3",level:3},{value:"Modify responses",id:"modify-responses",level:2},{value:"API reference",id:"api-reference-4",level:3},{value:"Record and replay requests",id:"record-and-replay-requests",level:2},{value:"Recording HAR with CLI",id:"recording-har-with-cli",level:3},{value:"Recording HAR with a script",id:"recording-har-with-a-script",level:3},{value:"Replaying from HAR",id:"replaying-from-har",level:3},{value:"WebSockets",id:"websockets",level:2},{value:"API reference",id:"api-reference-5",level:3},{value:"Missing Network Events and Service Workers",id:"missing-network-events-and-service-workers",level:2}],g={toc:f};function v(e){var t,a=e,{components:n}=a,c=((e,t)=>{var a={};for(var r in e)i.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&p.call(e,r)&&(a[r]=e[r]);return a})(a,["components"]);return(0,r.kt)("wrapper",(t=u(u({},g),c),o(t,s({components:n,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"Playwright provides APIs to ",(0,r.kt)("strong",{parentName:"p"},"monitor")," and ",(0,r.kt)("strong",{parentName:"p"},"modify")," network traffic, both HTTP and HTTPS. Any requests that page does, including ",(0,r.kt)("a",u({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest"}),"XHRs")," and ",(0,r.kt)("a",u({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API"}),"fetch")," requests, can be tracked, modified and handled."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"#http-authentication"}),"HTTP Authentication")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"#http-proxy"}),"HTTP Proxy")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"#network-events"}),"Network events")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"#handle-requests"}),"Handle requests")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"#modify-requests"}),"Modify requests")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"#abort-requests"}),"Abort requests")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"#modify-responses"}),"Modify responses")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"#record-and-replay-requests"}),"Record and replay requests")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"#websockets"}),"WebSockets")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"#missing-network-events-and-service-workers"}),"Missing Network Events and Service Workers"))),(0,r.kt)("br",null),(0,r.kt)("h2",u({},{id:"http-authentication"}),"HTTP Authentication"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-java"}),'BrowserContext context = browser.newContext(new Browser.NewContextOptions()\n  .setHttpCredentials("bill", "pa55w0rd"));\nPage page = context.newPage();\npage.navigate("https://example.com");\n')),(0,r.kt)("h3",u({},{id:"api-reference"}),"API reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"/java/docs/next/api/class-browser#browser-new-context"}),"Browser.newContext([options])"))),(0,r.kt)("h2",u({},{id:"http-proxy"}),"HTTP Proxy"),(0,r.kt)("p",null,"You can configure pages to load over the HTTP(S) proxy or SOCKSv5. Proxy can be either set globally for the entire browser, or for each browser context individually."),(0,r.kt)("p",null,"You can optionally specify username and password for HTTP(S) proxy, you can also specify hosts to bypass proxy for."),(0,r.kt)("p",null,"Here is an example of a global proxy:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-java"}),"Browser browser = chromium.launch(new BrowserType.LaunchOptions()\n  .setProxy(new Proxy(\"http://myproxy.com:3128\")\n  .setUsername('usr')\n  .setPassword('pwd'));\n")),(0,r.kt)("p",null,"When specifying proxy for each context individually, ",(0,r.kt)("strong",{parentName:"p"},"Chromium on Windows")," needs a hint that proxy will be set. This is done via passing a non-empty proxy server to the browser itself. Here is an example of a context-specific proxy:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-java"}),'Browser browser = chromium.launch(new BrowserType.LaunchOptions()\n  // Browser proxy option is required for Chromium on Windows.\n  .setProxy(new Proxy("per-context"));\nBrowserContext context = chromium.launch(new Browser.NewContextOptions()\n  .setProxy(new Proxy("http://myproxy.com:3128"));\n')),(0,r.kt)("h2",u({},{id:"network-events"}),"Network events"),(0,r.kt)("p",null,"You can monitor all the requests and responses:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-java"}),'import com.microsoft.playwright.*;\n\npublic class Example {\n  public static void main(String[] args) {\n    try (Playwright playwright = Playwright.create()) {\n      BrowserType chromium = playwright.chromium();\n      Browser browser = chromium.launch();\n      Page page = browser.newPage();\n      page.onRequest(request -> System.out.println(">> " + request.method() + " " + request.url()));\n      page.onResponse(response -> System.out.println("<<" + response.status() + " " + response.url()));\n      page.navigate("https://example.com");\n      browser.close();\n    }\n  }\n}\n')),(0,r.kt)("p",null,"Or wait for a network response after the button click:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-java"}),'// Use a glob URL pattern\nResponse response = page.waitForResponse("**/api/fetch_data", () -> {\n  page.locator("button#update").click();\n});\n')),(0,r.kt)("h4",u({},{id:"variations"}),"Variations"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-java"}),'// Use a RegExp\nResponse response = page.waitForResponse(Pattern.compile("\\\\.jpeg$"), () -> {\n  page.locator("button#update").click();\n});\n\n// Use a predicate taking a Response object\nResponse response = page.waitForResponse(r -> r.url().contains(token), () -> {\n  page.locator("button#update").click();\n});\n')),(0,r.kt)("h3",u({},{id:"api-reference-1"}),"API reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"/java/docs/next/api/class-request",title:"Request"}),"Request")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"/java/docs/next/api/class-response",title:"Response"}),"Response")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"/java/docs/next/api/class-page#page-event-request"}),"Page.onRequest(handler)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"/java/docs/next/api/class-page#page-event-response"}),"Page.onResponse(handler)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"/java/docs/next/api/class-page#page-wait-for-request"}),"Page.waitForRequest(urlOrPredicate[, options], callback)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"/java/docs/next/api/class-page#page-wait-for-response"}),"Page.waitForResponse(urlOrPredicate[, options], callback)"))),(0,r.kt)("br",null),(0,r.kt)("h2",u({},{id:"handle-requests"}),"Handle requests"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-java"}),'page.route("**/api/fetch_data", route -> route.fulfill(new Route.FulfillOptions()\n  .setStatus(200)\n  .setBody(testData)));\npage.navigate("https://example.com");\n')),(0,r.kt)("p",null,"You can mock API endpoints via handling the network requests in your Playwright script."),(0,r.kt)("h4",u({},{id:"variations-1"}),"Variations"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-java"}),'browserContext.route("**/api/login", route -> route.fulfill(new Route.FulfillOptions()\n  .setStatus(200)\n  .setBody("accept")));\npage.navigate("https://example.com");\n')),(0,r.kt)("h3",u({},{id:"api-reference-2"}),"API reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"/java/docs/next/api/class-browsercontext#browser-context-route"}),"BrowserContext.route(url, handler[, options])")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"/java/docs/next/api/class-browsercontext#browser-context-unroute"}),"BrowserContext.unroute(url[, handler])")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"/java/docs/next/api/class-page#page-route"}),"Page.route(url, handler[, options])")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"/java/docs/next/api/class-page#page-unroute"}),"Page.unroute(url[, handler])")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"/java/docs/next/api/class-route",title:"Route"}),"Route"))),(0,r.kt)("br",null),(0,r.kt)("h2",u({},{id:"modify-requests"}),"Modify requests"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-java"}),'// Delete header\npage.route("**/*", route -> {\n  Map<String, String> headers = new HashMap<>(route.request().headers());\n  headers.remove("X-Secret");\n    route.resume(new Route.ResumeOptions().setHeaders(headers));\n});\n\n// Continue requests as POST.\npage.route("**/*", route -> route.resume(new Route.ResumeOptions().setMethod("POST")));\n')),(0,r.kt)("p",null,"You can continue requests with modifications. Example above removes an HTTP header from the outgoing requests."),(0,r.kt)("h2",u({},{id:"abort-requests"}),"Abort requests"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-java"}),'page.route("**/*.{png,jpg,jpeg}", route -> route.abort());\n\n// Abort based on the request type\npage.route("**/*", route -> {\n  if ("image".equals(route.request().resourceType()))\n    route.abort();\n  else\n    route.resume();\n});\n')),(0,r.kt)("h3",u({},{id:"api-reference-3"}),"API reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"/java/docs/next/api/class-page#page-route"}),"Page.route(url, handler[, options])")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"/java/docs/next/api/class-browsercontext#browser-context-route"}),"BrowserContext.route(url, handler[, options])")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"/java/docs/next/api/class-route#route-abort"}),"Route.abort([errorCode])"))),(0,r.kt)("br",null),(0,r.kt)("h2",u({},{id:"modify-responses"}),"Modify responses"),(0,r.kt)("p",null,"To modify a response use ",(0,r.kt)("a",u({parentName:"p"},{href:"/java/docs/next/api/class-apirequestcontext",title:"APIRequestContext"}),"APIRequestContext")," to get original response and then pass the response to ",(0,r.kt)("a",u({parentName:"p"},{href:"/java/docs/next/api/class-route#route-fulfill"}),"Route.fulfill([options])"),". You can override individual fields on the response via options:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-java"}),'page.route("**/title.html", route -> {\n  // Fetch original response.\n  APIResponse response = page.request().fetch(route.request());\n  // Add a prefix to the title.\n  String body = response.text();\n  body = body.replace("<title>", "<title>My prefix:");\n  Map<String, String> headers = response.headers();\n  headers.put("content-type": "text/html");\n  route.fulfill(new Route.FulfillOptions()\n    // Pass all fields from the response.\n    .setResponse(response)\n    // Override response body.\n    .setBody(body)\n    // Force content type to be html.\n    .setHeaders(headers));\n});\n')),(0,r.kt)("h3",u({},{id:"api-reference-4"}),"API reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"/java/docs/next/api/class-apirequestcontext",title:"APIRequestContext"}),"APIRequestContext")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"/java/docs/next/api/class-page#page-route"}),"Page.route(url, handler[, options])")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"/java/docs/next/api/class-browsercontext#browser-context-route"}),"BrowserContext.route(url, handler[, options])")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"/java/docs/next/api/class-playwright#playwright-request"}),"Playwright.request()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"/java/docs/next/api/class-browsercontext#browser-context-request"}),"BrowserContext.request()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"/java/docs/next/api/class-page#page-request"}),"Page.request()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"/java/docs/next/api/class-route#route-fulfill"}),"Route.fulfill([options])"))),(0,r.kt)("br",null),(0,r.kt)("h2",u({},{id:"record-and-replay-requests"}),"Record and replay requests"),(0,r.kt)("p",null,"You can record network activity as an HTTP Archive file (HAR). Later on, this archive can be used to mock responses to the network requests. You'll need to:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Record a HAR file."),(0,r.kt)("li",{parentName:"ol"},"Commit the HAR file alongside the tests."),(0,r.kt)("li",{parentName:"ol"},"Route requests using the saved HAR files in the tests.")),(0,r.kt)("h3",u({},{id:"recording-har-with-cli"}),"Recording HAR with CLI"),(0,r.kt)("p",null,"Open the browser with ",(0,r.kt)("a",u({parentName:"p"},{href:"/java/docs/next/cli"}),"Playwright CLI")," and pass ",(0,r.kt)("inlineCode",{parentName:"p"},"--save-har")," option to produce a HAR file. Optionally, use ",(0,r.kt)("inlineCode",{parentName:"p"},"--save-har-glob")," to only save requests you are interested in, for example API endpoints. If the har file name ends with ",(0,r.kt)("inlineCode",{parentName:"p"},".zip"),", artifacts are written as separate files and are all compressed into a single ",(0,r.kt)("inlineCode",{parentName:"p"},"zip"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-bash"}),'# Save API requests from example.com as "example.har" archive.\nmvn exec:java -e -Dexec.mainClass=com.microsoft.playwright.CLI -Dexec.args="open --save-har=example.har --save-har-glob=\'**/api/**\' https://example.com"\n')),(0,r.kt)("h3",u({},{id:"recording-har-with-a-script"}),"Recording HAR with a script"),(0,r.kt)("p",null,"Alternatively, instead of using the CLI, you can record HAR programmatically. Pass ",(0,r.kt)("inlineCode",{parentName:"p"},"har")," option when creating a ",(0,r.kt)("a",u({parentName:"p"},{href:"/java/docs/next/api/class-browsercontext",title:"BrowserContext"}),"BrowserContext")," with ",(0,r.kt)("a",u({parentName:"p"},{href:"/java/docs/next/api/class-browser#browser-new-context"}),"Browser.newContext([options])")," to create an archive. If the har file name ends with ",(0,r.kt)("inlineCode",{parentName:"p"},".zip"),", artifacts are written as separate files and are all compressed into a single ",(0,r.kt)("inlineCode",{parentName:"p"},"zip"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-java"}),'BrowserContext context = browser.newContext(new Browser.NewContextOptions()\n    .setRecordHarPath(Paths.get("example.har"))\n    .setRecordHarUrlFilter("**/api/**"));\n\n// ... Perform actions ...\n\n// Close context to ensure HAR is saved to disk.\ncontext.close();\n')),(0,r.kt)("h3",u({},{id:"replaying-from-har"}),"Replaying from HAR"),(0,r.kt)("p",null,"Use ",(0,r.kt)("a",u({parentName:"p"},{href:"/java/docs/next/api/class-page#page-route-from-har"}),"Page.routeFromHAR(har[, options])")," or ",(0,r.kt)("a",u({parentName:"p"},{href:"/java/docs/next/api/class-browsercontext#browser-context-route-from-har"}),"BrowserContext.routeFromHAR(har[, options])")," to serve matching responses from the ",(0,r.kt)("a",u({parentName:"p"},{href:"http://www.softwareishard.com/blog/har-12-spec/"}),"HAR")," file."),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-java"}),'// Either use a matching response from the HAR,\n// or abort the request if nothing matches.\npage.routeFromHAR(Paths.get("example.har"));\n')),(0,r.kt)("p",null,"HAR replay matches URL and HTTP method strictly. For POST requests, it also matches POST payloads strictly. If multiple recordings match a request, the one with the most matching headers is picked. An entry resulting in a redirect will be followed automatically."),(0,r.kt)("p",null,"Similar to when recording, if given HAR file name ends with ",(0,r.kt)("inlineCode",{parentName:"p"},".zip"),", it is considered an archive containing the HAR file along with network payloads stored as separate entries. You can also extract this archive, edit payloads or HAR log manually and point to the extracted har file. All the payloads will be resolved relative to the extracted har file on the file system."),(0,r.kt)("br",null),(0,r.kt)("h2",u({},{id:"websockets"}),"WebSockets"),(0,r.kt)("p",null,"Playwright supports ",(0,r.kt)("a",u({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API"}),"WebSockets")," inspection out of the box. Every time WebSocket is created, ",(0,r.kt)("a",u({parentName:"p"},{href:"/java/docs/next/api/class-page#page-event-web-socket"}),"Page.onWebSocket(handler)")," event is fired. This event contains the ",(0,r.kt)("a",u({parentName:"p"},{href:"/java/docs/next/api/class-websocket",title:"WebSocket"}),"WebSocket")," instance for further web socket frames inspection:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-java"}),'page.onWebSocket(ws -> {\n  log("WebSocket opened: " + ws.url());\n  ws.onFrameSent(frameData -> log(frameData.text()));\n  ws.onFrameReceived(frameData -> log(frameData.text()));\n  ws.onClose(ws1 -> log("WebSocket closed"));\n});\n')),(0,r.kt)("h3",u({},{id:"api-reference-5"}),"API reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"/java/docs/next/api/class-websocket",title:"WebSocket"}),"WebSocket")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"/java/docs/next/api/class-page#page-event-web-socket"}),"Page.onWebSocket(handler)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"/java/docs/next/api/class-websocket#web-socket-event-frame-sent"}),"WebSocket.onFrameSent(handler)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"/java/docs/next/api/class-websocket#web-socket-event-frame-received"}),"WebSocket.onFrameReceived(handler)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"/java/docs/next/api/class-websocket#web-socket-event-close"}),"WebSocket.onClose(handler)"))),(0,r.kt)("br",null),(0,r.kt)("h2",u({},{id:"missing-network-events-and-service-workers"}),"Missing Network Events and Service Workers"),(0,r.kt)("p",null,"Playwright's built-in ",(0,r.kt)("a",u({parentName:"p"},{href:"/java/docs/next/api/class-browsercontext#browser-context-route"}),"BrowserContext.route(url, handler[, options])")," and ",(0,r.kt)("a",u({parentName:"p"},{href:"/java/docs/next/api/class-page#page-route"}),"Page.route(url, handler[, options])")," allow your tests to natively route requests and perform mocking and interception."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"If you're using Playwright's native ",(0,r.kt)("a",u({parentName:"li"},{href:"/java/docs/next/api/class-browsercontext#browser-context-route"}),"BrowserContext.route(url, handler[, options])")," and ",(0,r.kt)("a",u({parentName:"li"},{href:"/java/docs/next/api/class-page#page-route"}),"Page.route(url, handler[, options])"),", and it appears network events are missing, disable Service Workers by setting ",(0,r.kt)("inlineCode",{parentName:"li"},"Browser.newContext.serviceWorkers")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"'block'"),"."),(0,r.kt)("li",{parentName:"ol"},"It might be that you are using a mock tool such as Mock Service Worker (MSW). While this tool works out of the box for mocking responses, it adds its own Service Worker that takes over the network requests, hence making them invisible to ",(0,r.kt)("a",u({parentName:"li"},{href:"/java/docs/next/api/class-browsercontext#browser-context-route"}),"BrowserContext.route(url, handler[, options])")," and ",(0,r.kt)("a",u({parentName:"li"},{href:"/java/docs/next/api/class-page#page-route"}),"Page.route(url, handler[, options])"),". If you are interested in both network testing and mocking, consider using built-in ",(0,r.kt)("a",u({parentName:"li"},{href:"/java/docs/next/api/class-browsercontext#browser-context-route"}),"BrowserContext.route(url, handler[, options])")," and ",(0,r.kt)("a",u({parentName:"li"},{href:"/java/docs/next/api/class-page#page-route"}),"Page.route(url, handler[, options])")," for ",(0,r.kt)("a",u({parentName:"li"},{href:"#handle-requests"}),"response mocking"),"."),(0,r.kt)("li",{parentName:"ol"},"If you're interested in not solely using Service Workers for testing and network mocking, but in routing and listening for requests made by Service Workers themselves, please see ",(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/microsoft/playwright/issues/15684"}),"this experimental feature"),".")),(0,r.kt)("br",null))}v.isMDXComponent=!0}}]);