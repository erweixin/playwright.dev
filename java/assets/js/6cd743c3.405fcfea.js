"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[858],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),s=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),h=s(r),d=n,g=h["".concat(l,".").concat(d)]||h[d]||u[d]||i;return r?a.createElement(g,o(o({ref:t},p),{},{components:r})):a.createElement(g,o({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=h;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var s=2;s<i;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},1434:function(e,t,r){r.r(t),r.d(t,{assets:function(){return m},contentTitle:function(){return d},default:function(){return v},frontMatter:function(){return h},metadata:function(){return g},toc:function(){return f}});var a=r(3905),n=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))l.call(t,r)&&p(e,r,t[r]);if(c)for(var r of c(t))s.call(t,r)&&p(e,r,t[r]);return e};const h={id:"trace-viewer",title:"Trace Viewer"},d=void 0,g={unversionedId:"trace-viewer",id:"trace-viewer",title:"Trace Viewer",description:"Playwright Trace Viewer is a GUI tool that helps exploring recorded Playwright traces after the script ran. Open traces locally or in your browser on trace.playwright.dev.",source:"@site/docs/trace-viewer.mdx",sourceDirName:".",slug:"/trace-viewer",permalink:"/java/docs/next/trace-viewer",draft:!1,tags:[],version:"current",frontMatter:{id:"trace-viewer",title:"Trace Viewer"},sidebar:"docs",previous:{title:"Test Generator",permalink:"/java/docs/next/codegen"},next:{title:"Test Runners",permalink:"/java/docs/next/test-runners"}},m={},f=[{value:"Recording a trace",id:"recording-a-trace",level:2},{value:"Viewing the trace",id:"viewing-the-trace",level:2},{value:"Actions",id:"actions",level:2},{value:"Screenshots",id:"screenshots",level:2},{value:"Snapshots",id:"snapshots",level:2},{value:"Viewing remote Traces",id:"viewing-remote-traces",level:2},{value:"Using trace.playwright.dev",id:"using-traceplaywrightdev",level:2},{value:"Viewing local traces",id:"viewing-local-traces",level:3},{value:"Remote traces",id:"remote-traces",level:3}],w={toc:f};function v(e){var t,r=e,{components:n}=r,p=((e,t)=>{var r={};for(var a in e)l.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&c)for(var a of c(e))t.indexOf(a)<0&&s.call(e,a)&&(r[a]=e[a]);return r})(r,["components"]);return(0,a.kt)("wrapper",(t=u(u({},w),p),i(t,o({components:n,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"Playwright Trace Viewer is a GUI tool that helps exploring recorded Playwright traces after the script ran. Open traces ",(0,a.kt)("a",u({parentName:"p"},{href:"#viewing-the-trace"}),"locally")," or in your browser on ",(0,a.kt)("a",u({parentName:"p"},{href:"https://trace.playwright.dev"}),(0,a.kt)("inlineCode",{parentName:"a"},"trace.playwright.dev")),"."),(0,a.kt)("img",{width:"1212",alt:"Playwright Trace Viewer",src:"https://user-images.githubusercontent.com/883973/120585896-6a1bca80-c3e7-11eb-951a-bd84002480f5.png"}),(0,a.kt)("h2",u({},{id:"recording-a-trace"}),"Recording a trace"),(0,a.kt)("p",null,"Traces can be recorded using the ",(0,a.kt)("a",u({parentName:"p"},{href:"/java/docs/next/api/class-browsercontext#browser-context-tracing"}),"BrowserContext.tracing()")," API as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-java"}),'Browser browser = browserType.launch();\nBrowserContext context = browser.newContext();\n\n// Start tracing before creating / navigating a page.\ncontext.tracing().start(new Tracing.StartOptions()\n  .setScreenshots(true)\n  .setSnapshots(true)\n  .setSources(true));\n\nPage page = context.newPage();\npage.navigate("https://playwright.dev");\n\n// Stop tracing and export it into a zip archive.\ncontext.tracing().stop(new Tracing.StopOptions()\n  .setPath(Paths.get("trace.zip")));\n')),(0,a.kt)("p",null,"This will record the trace and place it into the file named ",(0,a.kt)("inlineCode",{parentName:"p"},"trace.zip"),"."),(0,a.kt)("h2",u({},{id:"viewing-the-trace"}),"Viewing the trace"),(0,a.kt)("p",null,"You can open the saved trace using Playwright CLI or in your browser on ",(0,a.kt)("a",u({parentName:"p"},{href:"https://trace.playwright.dev"}),(0,a.kt)("inlineCode",{parentName:"a"},"trace.playwright.dev")),"."),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-bash"}),'mvn exec:java -e -Dexec.mainClass=com.microsoft.playwright.CLI -Dexec.args="show-trace trace.zip"\n')),(0,a.kt)("h2",u({},{id:"actions"}),"Actions"),(0,a.kt)("p",null,"Once trace is opened, you will see the list of actions Playwright performed on the left hand side:"),(0,a.kt)("img",{width:"301",alt:"Actions",src:"https://user-images.githubusercontent.com/883973/120588303-d39dd800-c3eb-11eb-9e8b-bfea8b775354.png"}),(0,a.kt)("p",null,"Selecting each action reveals:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"action snapshots,"),(0,a.kt)("li",{parentName:"ul"},"action log,"),(0,a.kt)("li",{parentName:"ul"},"source code location,"),(0,a.kt)("li",{parentName:"ul"},"network log for this action")),(0,a.kt)("p",null,"in the properties pane. You will also see rendered DOM snapshots associated with each action."),(0,a.kt)("h2",u({},{id:"screenshots"}),"Screenshots"),(0,a.kt)("p",null,"When tracing with the ",(0,a.kt)("inlineCode",{parentName:"p"},"screenshots")," option turned on, each trace records screencast and renders it as a film strip:"),(0,a.kt)("img",{width:"353",alt:"Film strip",src:"https://user-images.githubusercontent.com/883973/120588069-5d997100-c3eb-11eb-97a3-acbd5e0eb358.png"}),(0,a.kt)("p",null,"You can hover over the film strip to see a magnified image:"),(0,a.kt)("img",{width:"617",alt:"Magnify",src:"https://user-images.githubusercontent.com/883973/120588147-8f123c80-c3eb-11eb-864b-19d800619234.png"}),(0,a.kt)("p",null,"That helps locating the action of interest very quickly."),(0,a.kt)("h2",u({},{id:"snapshots"}),"Snapshots"),(0,a.kt)("p",null,"When tracing with the ",(0,a.kt)("inlineCode",{parentName:"p"},"snapshots")," option turned on, Playwright captures a set of complete DOM snapshots for each action. Depending on the type of the action, it will capture:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"Before"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"A snapshot at the time action is called.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"Action"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"A snapshot at the moment of the performed input. This type of snapshot is especially useful when exploring where exactly Playwright clicked.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"After"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"A snapshot after the action.")))),(0,a.kt)("br",null),(0,a.kt)("p",null,"Here is what the typical Action snapshot looks like:"),(0,a.kt)("img",{width:"682",alt:"Snapshots",src:"https://user-images.githubusercontent.com/883973/120588728-879f6300-c3ec-11eb-85d6-e67b0e92e4e3.png"}),(0,a.kt)("p",null,"Notice how it highlights both, the DOM Node as well as the exact click position."),(0,a.kt)("h2",u({},{id:"viewing-remote-traces"}),"Viewing remote Traces"),(0,a.kt)("p",null,"You can open remote traces using it's URL. They could be generated in a CI run and makes it easy to view the remote trace without having to manually download the file."),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-bash"}),'mvn exec:java -e -Dexec.mainClass=com.microsoft.playwright.CLI -Dexec.args="show-trace https://example.com/trace.zip"\n')),(0,a.kt)("h2",u({},{id:"using-traceplaywrightdev"}),"Using ",(0,a.kt)("a",u({parentName:"h2"},{href:"https://trace.playwright.dev"}),"trace.playwright.dev")),(0,a.kt)("p",null,(0,a.kt)("a",u({parentName:"p"},{href:"https://trace.playwright.dev"}),"trace.playwright.dev")," is a statically hosted variant of the Trace Viewer. "),(0,a.kt)("h3",u({},{id:"viewing-local-traces"}),"Viewing local traces"),(0,a.kt)("p",null,"When navigating to ",(0,a.kt)("a",u({parentName:"p"},{href:"https://trace.playwright.dev"}),"trace.playwright.dev"),", you can upload trace files using drag and drop."),(0,a.kt)("h3",u({},{id:"remote-traces"}),"Remote traces"),(0,a.kt)("p",null,"You can also pass the URL of your uploaded trace (e.g. inside your CI) from some accessible storage as a parameter. CORS (Cross-Origin Resource Sharing) rules might apply."),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-txt"}),"https://trace.playwright.dev/?trace=https://demo.playwright.dev/reports/todomvc/data/cb0fa77ebd9487a5c899f3ae65a7ffdbac681182.zip\n")))}v.isMDXComponent=!0}}]);