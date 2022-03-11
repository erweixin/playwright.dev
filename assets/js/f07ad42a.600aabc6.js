"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[2806],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return h}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),u=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(r),h=n,m=d["".concat(s,".").concat(h)]||d[h]||c[h]||l;return r?a.createElement(m,o(o({ref:t},p),{},{components:r})):a.createElement(m,o({ref:t},p))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var u=2;u<l;u++)o[u]=r[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},73811:function(e,t,r){r.d(t,{Z:function(){return u}});var a=r(67294),n=Object.defineProperty,l=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,s=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;function u({children:e,hidden:t,className:r}){return a.createElement("div",((e,t)=>{for(var r in t||(t={}))o.call(t,r)&&s(e,r,t[r]);if(l)for(var r of l(t))i.call(t,r)&&s(e,r,t[r]);return e})({role:"tabpanel"},{hidden:t,className:r}),e)}},73824:function(e,t,r){r.d(t,{Z:function(){return v}});var a=r(67294),n=r(54939),l=r(5882),o=r(86010),i="tabItem_LplD",s=Object.defineProperty,u=Object.defineProperties,p=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,m=(e,t,r)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,g=(e,t)=>{for(var r in t||(t={}))d.call(t,r)&&m(e,r,t[r]);if(c)for(var r of c(t))h.call(t,r)&&m(e,r,t[r]);return e};function b(e){var t,r,n;const{lazy:s,block:c,defaultValue:d,values:h,groupId:m,className:b}=e,v=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=null!=h?h:v.map((({props:{value:e,label:t,attributes:r}})=>({value:e,label:t,attributes:r}))),k=(0,l.lx)(f,((e,t)=>e.value===t.value));if(k.length>0)throw new Error(`Docusaurus error: Duplicate values "${k.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const w=null===d?d:null!=(n=null!=d?d:null==(t=v.find((e=>e.props.default)))?void 0:t.props.value)?n:null==(r=v[0])?void 0:r.props.value;if(null!==w&&!f.some((e=>e.value===w)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${w}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:N}=(0,l.UB)(),[P,O]=(0,a.useState)(w),T=[],{blockElementScrollPositionUntilNextRender:j}=(0,l.o5)();if(null!=m){const e=y[m];null!=e&&e!==P&&f.some((t=>t.value===e))&&O(e)}const D=e=>{const t=e.currentTarget,r=T.indexOf(t),a=f[r].value;a!==P&&(j(t),O(a),null!=m&&N(m,a))},C=e=>{let t=null;switch(e.key){case"ArrowRight":{const r=T.indexOf(e.currentTarget)+1;t=T[r]||T[0];break}case"ArrowLeft":{const r=T.indexOf(e.currentTarget)-1;t=T[r]||T[T.length-1];break}}null==t||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":c},b)},f.map((({value:e,label:t,attributes:r})=>{return a.createElement("li",(n=g({role:"tab",tabIndex:P===e?0:-1,"aria-selected":P===e,key:e,ref:e=>T.push(e),onKeyDown:C,onFocus:D,onClick:D},r),l={className:(0,o.Z)("tabs__item",i,null==r?void 0:r.className,{"tabs__item--active":P===e})},u(n,p(l))),null!=t?t:e);var n,l}))),s?(0,a.cloneElement)(v.filter((e=>e.props.value===P))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},v.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==P})))))}function v(e){const t=(0,n.Z)();return a.createElement(b,g({key:String(t)},e))}},99407:function(e,t,r){r.r(t),r.d(t,{assets:function(){return v},contentTitle:function(){return g},default:function(){return w},frontMatter:function(){return m},metadata:function(){return b},toc:function(){return f}});var a=r(3905),n=r(73824),l=r(73811),o=Object.defineProperty,i=Object.defineProperties,s=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,d=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,h=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&d(e,r,t[r]);if(u)for(var r of u(t))c.call(t,r)&&d(e,r,t[r]);return e};const m={id:"debug",title:"Debugging tools"},g=void 0,b={unversionedId:"debug",id:"version-1.19/debug",title:"Debugging tools",description:"Playwright scripts work with existing debugging tools, like Node.js debuggers and browser developer tools. Playwright also introduces new debugging features for browser automation.",source:"@site/versioned_docs/version-1.19/debug.mdx",sourceDirName:".",slug:"/debug",permalink:"/docs/debug",tags:[],version:"1.19",frontMatter:{id:"debug",title:"Debugging tools"},sidebar:"version-1.19/docs",previous:{title:"Test Generator",permalink:"/docs/codegen"},next:{title:"Release notes",permalink:"/docs/release-notes"}},v={},f=[{value:"Playwright Inspector",id:"playwright-inspector",level:2},{value:"Playwright Trace Viewer",id:"playwright-trace-viewer",level:2},{value:"Run in headed mode",id:"run-in-headed-mode",level:2},{value:"Browser Developer Tools",id:"browser-developer-tools",level:2},{value:"Run in Debug Mode",id:"run-in-debug-mode",level:2},{value:"Selectors in Developer Tools Console",id:"selectors-in-developer-tools-console",level:2},{value:"Visual Studio Code debugger (Node.js)",id:"visual-studio-code-debugger-nodejs",level:2},{value:"Use launch config",id:"use-launch-config",level:3},{value:"Use the JavaScript Debug Terminal",id:"use-the-javascript-debug-terminal",level:3},{value:"Verbose API logs",id:"verbose-api-logs",level:2}],k={toc:f};function w(e){var t,r=e,{components:o}=r,d=((e,t)=>{var r={};for(var a in e)p.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&u)for(var a of u(e))t.indexOf(a)<0&&c.call(e,a)&&(r[a]=e[a]);return r})(r,["components"]);return(0,a.kt)("wrapper",(t=h(h({},k),d),i(t,s({components:o,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"Playwright scripts work with existing debugging tools, like Node.js debuggers and browser developer tools. Playwright also introduces new debugging features for browser automation."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",h({parentName:"li"},{href:"#playwright-inspector"}),"Playwright Inspector")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",h({parentName:"li"},{href:"#playwright-trace-viewer"}),"Playwright Trace Viewer")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",h({parentName:"li"},{href:"#run-in-headed-mode"}),"Run in headed mode")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",h({parentName:"li"},{href:"#browser-developer-tools"}),"Browser Developer Tools")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",h({parentName:"li"},{href:"#run-in-debug-mode"}),"Run in Debug Mode")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",h({parentName:"li"},{href:"#selectors-in-developer-tools-console"}),"Selectors in Developer Tools Console")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",h({parentName:"li"},{href:"#visual-studio-code-debugger-nodejs"}),"Visual Studio Code debugger (Node.js)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",h({parentName:"li"},{href:"#verbose-api-logs"}),"Verbose API logs"))),(0,a.kt)("h2",h({},{id:"playwright-inspector"}),"Playwright Inspector"),(0,a.kt)("p",null,(0,a.kt)("a",h({parentName:"p"},{href:"/docs/inspector"}),"Playwright Inspector")," is a GUI tool that helps authoring and debugging Playwright scripts. That's our default recommended tool for scripts troubleshooting."),(0,a.kt)("img",{width:"712",alt:"Playwright Inspector",src:"https://user-images.githubusercontent.com/883973/108614092-8c478a80-73ac-11eb-9597-67dfce110e00.png"}),(0,a.kt)("h2",h({},{id:"playwright-trace-viewer"}),"Playwright Trace Viewer"),(0,a.kt)("p",null,(0,a.kt)("a",h({parentName:"p"},{href:"/docs/trace-viewer"}),"Playwright Trace Viewer")," is a GUI tool that helps troubleshooting test runs in a post-mortem manner."),(0,a.kt)("img",{width:"1212",alt:"Playwright Trace Viewer",src:"https://user-images.githubusercontent.com/883973/120585896-6a1bca80-c3e7-11eb-951a-bd84002480f5.png"}),(0,a.kt)("h2",h({},{id:"run-in-headed-mode"}),"Run in headed mode"),(0,a.kt)("p",null,"Playwright runs browsers in headless mode by default. To change this behavior, use ",(0,a.kt)("inlineCode",{parentName:"p"},"headless: false")," as a launch option. You can also use the ",(0,a.kt)("inlineCode",{parentName:"p"},"slowMo")," option to slow down execution and follow along while debugging."),(0,a.kt)("pre",null,(0,a.kt)("code",h({parentName:"pre"},{className:"language-js"}),"await chromium.launch({ headless: false, slowMo: 100 }); // or firefox, webkit\n")),(0,a.kt)("h2",h({},{id:"browser-developer-tools"}),"Browser Developer Tools"),(0,a.kt)("p",null,"You can use browser developer tools in Chromium, Firefox and WebKit while running a Playwright script in headed mode. Developer tools help to:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Inspect the DOM tree and ",(0,a.kt)("strong",{parentName:"li"},"find element selectors")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"See console logs")," during execution (or learn how to ",(0,a.kt)("a",h({parentName:"li"},{href:"/docs/verification#console-logs"}),"read logs via API"),")"),(0,a.kt)("li",{parentName:"ul"},"Check ",(0,a.kt)("strong",{parentName:"li"},"network activity")," and other developer tools features")),(0,a.kt)("a",{href:"https://user-images.githubusercontent.com/284612/77234134-5f21a500-6b69-11ea-92ec-1c146e1333ec.png"},(0,a.kt)("img",{src:"https://user-images.githubusercontent.com/284612/77234134-5f21a500-6b69-11ea-92ec-1c146e1333ec.png",width:"500",alt:"Chromium Developer Tools"})),(0,a.kt)("p",null,"Using a ",(0,a.kt)("a",h({parentName:"p"},{href:"/docs/api/class-page#page-pause"}),"page.pause()")," method is an easy way to pause the Playwright script execution and inspect the page in Developer tools. It will also open ",(0,a.kt)("a",h({parentName:"p"},{href:"/docs/inspector"}),"Playwright Inspector")," to help with debugging."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"For Chromium"),": you can also open developer tools through a launch option."),(0,a.kt)("pre",null,(0,a.kt)("code",h({parentName:"pre"},{className:"language-js"}),"await chromium.launch({ devtools: true });\n")),(0,a.kt)("div",h({},{className:"admonition admonition-note alert alert--secondary"}),(0,a.kt)("div",h({parentName:"div"},{className:"admonition-heading"}),(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",h({parentName:"h5"},{className:"admonition-icon"}),(0,a.kt)("svg",h({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),(0,a.kt)("path",h({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),(0,a.kt)("div",h({parentName:"div"},{className:"admonition-content"}),(0,a.kt)("p",{parentName:"div"},(0,a.kt)("strong",{parentName:"p"},"For WebKit"),": launching WebKit Inspector during the execution will   prevent the Playwright script from executing any further."))),(0,a.kt)("h2",h({},{id:"run-in-debug-mode"}),"Run in Debug Mode"),(0,a.kt)("p",null,"Set the ",(0,a.kt)("inlineCode",{parentName:"p"},"PWDEBUG")," environment variable to run your scripts in debug mode. Using ",(0,a.kt)("inlineCode",{parentName:"p"},"PWDEBUG=1")," will open ",(0,a.kt)("a",h({parentName:"p"},{href:"/docs/inspector"}),"Playwright Inspector"),"."),(0,a.kt)("p",null,"Using ",(0,a.kt)("inlineCode",{parentName:"p"},"PWDEBUG=console")," will configure the browser for debugging in Developer tools console:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Runs headed"),": Browsers always launch in headed mode"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Disables timeout"),": Sets default timeout to 0 (= no timeout)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Console helper"),": Configures a ",(0,a.kt)("inlineCode",{parentName:"li"},"playwright")," object in the browser to generate and highlight ",(0,a.kt)("a",h({parentName:"li"},{href:"/docs/selectors"}),"Playwright selectors"),". This can be used to verify text or composite selectors.")),(0,a.kt)(n.Z,{groupId:"bash-flavor",defaultValue:"bash",values:[{label:"Bash",value:"bash"},{label:"PowerShell",value:"powershell"},{label:"Batch",value:"batch"}],mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"bash",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",h({parentName:"pre"},{className:"language-bash"}),"PWDEBUG=console npm run test\n"))),(0,a.kt)(l.Z,{value:"powershell",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",h({parentName:"pre"},{className:"language-powershell"}),'env:PWDEBUG="console"\nnpm run test\n'))),(0,a.kt)(l.Z,{value:"batch",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",h({parentName:"pre"},{className:"language-batch"}),"set PWDEBUG=console\nnpm run test\n")))),(0,a.kt)("h2",h({},{id:"selectors-in-developer-tools-console"}),"Selectors in Developer Tools Console"),(0,a.kt)("p",null,"When running in Debug Mode with ",(0,a.kt)("inlineCode",{parentName:"p"},"PWDEBUG=console"),", a ",(0,a.kt)("inlineCode",{parentName:"p"},"playwright")," object is available in Developer tools console."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Run with ",(0,a.kt)("inlineCode",{parentName:"li"},"PWDEBUG=console")),(0,a.kt)("li",{parentName:"ol"},"Setup a breakpoint to pause the execution"),(0,a.kt)("li",{parentName:"ol"},"Open the console panel in browser developer tools"),(0,a.kt)("li",{parentName:"ol"},"Use the ",(0,a.kt)("inlineCode",{parentName:"li"},"playwright")," API",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"playwright.$(selector)"),": Highlight the first occurrence of the selector. This reflects how ",(0,a.kt)("inlineCode",{parentName:"li"},"page.$")," would see the page."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"playwright.$$(selector)"),": Highlight all occurrences of the selector. This reflects how ",(0,a.kt)("inlineCode",{parentName:"li"},"page.$$")," would see the page."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"playwright.inspect(selector)"),": Inspect the selector in the Elements panel."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"playwright.locator(selector)"),": Highlight the first occurrence of the locator."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"playwright.clear()"),": Clear existing highlights."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"playwright.selector(element)"),": Generate a selector that points to the element.")))),(0,a.kt)("a",{href:"https://user-images.githubusercontent.com/284612/86857345-299abc00-c073-11ea-9e31-02923a9f0d4b.png"},(0,a.kt)("img",{src:"https://user-images.githubusercontent.com/284612/86857345-299abc00-c073-11ea-9e31-02923a9f0d4b.png",width:"500",alt:"Highlight selectors"})),(0,a.kt)("h2",h({},{id:"visual-studio-code-debugger-nodejs"}),"Visual Studio Code debugger (Node.js)"),(0,a.kt)("p",null,"The VS Code debugger can be used to pause and resume execution of Playwright scripts with breakpoints. The debugger can be configured in two ways."),(0,a.kt)("h3",h({},{id:"use-launch-config"}),"Use launch config"),(0,a.kt)("p",null,"Setup ",(0,a.kt)("a",h({parentName:"p"},{href:"https://code.visualstudio.com/docs/nodejs/nodejs-debugging"}),(0,a.kt)("inlineCode",{parentName:"a"},"launch.json")," configuration")," for your Node.js project. Once configured launch the scripts with F5 and use breakpoints."),(0,a.kt)("h3",h({},{id:"use-the-javascript-debug-terminal"}),"Use the JavaScript Debug Terminal"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Open ",(0,a.kt)("a",h({parentName:"li"},{href:"https://code.visualstudio.com/docs/nodejs/nodejs-debugging#_javascript-debug-terminal"}),"JavaScript Debug Terminal")),(0,a.kt)("li",{parentName:"ol"},"Set a breakpoint in VS Code",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Use the ",(0,a.kt)("inlineCode",{parentName:"li"},"debugger")," keyword or set a breakpoint in the VS Code UI"))),(0,a.kt)("li",{parentName:"ol"},"Run your Node.js script from the terminal")),(0,a.kt)("h2",h({},{id:"verbose-api-logs"}),"Verbose API logs"),(0,a.kt)("p",null,"Playwright supports verbose logging with the ",(0,a.kt)("inlineCode",{parentName:"p"},"DEBUG")," environment variable."),(0,a.kt)(n.Z,{groupId:"bash-flavor",defaultValue:"bash",values:[{label:"Bash",value:"bash"},{label:"PowerShell",value:"powershell"},{label:"Batch",value:"batch"}],mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"bash",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",h({parentName:"pre"},{className:"language-bash"}),"DEBUG=pw:api npm run test\n"))),(0,a.kt)(l.Z,{value:"powershell",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",h({parentName:"pre"},{className:"language-powershell"}),'$env:DEBUG="pw:api"\nnpm run test\n'))),(0,a.kt)(l.Z,{value:"batch",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",h({parentName:"pre"},{className:"language-batch"}),"set DEBUG=pw:api\nnpm run test\n")))))}w.isMDXComponent=!0}}]);