"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[16969],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return g}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),g=o,h=d["".concat(s,".").concat(g)]||d[g]||p[g]||a;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},58215:function(e,t,n){var r=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,o=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:o},t)}},55064:function(e,t,n){n.d(t,{Z:function(){return p}});var r=n(67294),o=n(79443);var a=function(){var e=(0,r.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=n(86010),l="tabItem_1uMI",s="tabItemActive_2DSg";var u=37,c=39;var p=function(e){var t=e.lazy,n=e.block,o=e.defaultValue,p=e.values,d=e.groupId,g=e.className,h=a(),m=h.tabGroupChoices,f=h.setTabGroupChoices,k=(0,r.useState)(o),b=k[0],v=k[1],w=r.Children.toArray(e.children),N=[];if(null!=d){var y=m[d];null!=y&&y!==b&&p.some((function(e){return e.value===y}))&&v(y)}var P=function(e){var t=e.currentTarget,n=N.indexOf(t),r=p[n].value;v(r),null!=d&&(f(d,r),setTimeout((function(){var e,n,r,o,a,i,l,u;(e=t.getBoundingClientRect(),n=e.top,r=e.left,o=e.bottom,a=e.right,i=window,l=i.innerHeight,u=i.innerWidth,n>=0&&a<=u&&o<=l&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},C=function(e){var t,n;switch(e.keyCode){case c:var r=N.indexOf(e.target)+1;n=N[r]||N[0];break;case u:var o=N.indexOf(e.target)-1;n=N[o]||N[N.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},g)},p.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:b===t?0:-1,"aria-selected":b===t,className:(0,i.Z)("tabs__item",l,{"tabs__item--active":b===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:C,onFocus:P,onClick:P},n)}))),t?(0,r.cloneElement)(w.filter((function(e){return e.props.value===b}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},w.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==b})}))))}},79443:function(e,t,n){var r=(0,n(67294).createContext)(void 0);t.Z=r},77427:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return u},default:function(){return p}});var r=n(22122),o=n(19756),a=(n(67294),n(3905)),i=(n(55064),n(58215),{id:"debug",title:"Debugging tools"}),l=void 0,s={unversionedId:"debug",id:"version-1.14/debug",isDocsHomePage:!1,title:"Debugging tools",description:"Playwright scripts work with existing debugging tools, like Node.js debuggers and browser developer tools. Playwright also introduces new debugging features for browser automation.",source:"@site/versioned_docs/version-1.14/debug.mdx",sourceDirName:".",slug:"/debug",permalink:"/docs/1.14/debug",version:"1.14",frontMatter:{id:"debug",title:"Debugging tools"},sidebar:"version-1.14/docs",previous:{title:"Getting started",permalink:"/docs/1.14/intro"},next:{title:"Command line tools",permalink:"/docs/1.14/cli"}},u=[{value:"Playwright Inspector",id:"playwright-inspector",children:[]},{value:"Playwright Trace Viewer",id:"playwright-trace-viewer",children:[]},{value:"Run in headed mode",id:"run-in-headed-mode",children:[]},{value:"Browser Developer Tools",id:"browser-developer-tools",children:[]},{value:"Run in Debug Mode",id:"run-in-debug-mode",children:[]},{value:"Selectors in Developer Tools Console",id:"selectors-in-developer-tools-console",children:[]},{value:"Visual Studio Code debugger (Node.js)",id:"visual-studio-code-debugger-nodejs",children:[{value:"Use launch config",id:"use-launch-config",children:[]},{value:"Use the JavaScript Debug Terminal",id:"use-the-javascript-debug-terminal",children:[]}]},{value:"Verbose API logs",id:"verbose-api-logs",children:[]}],c={toc:u};function p(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Playwright scripts work with existing debugging tools, like Node.js debuggers and browser developer tools. Playwright also introduces new debugging features for browser automation."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#playwright-inspector"},"Playwright Inspector")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#playwright-trace-viewer"},"Playwright Trace Viewer")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#run-in-headed-mode"},"Run in headed mode")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#browser-developer-tools"},"Browser Developer Tools")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#run-in-debug-mode"},"Run in Debug Mode")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#selectors-in-developer-tools-console"},"Selectors in Developer Tools Console")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#visual-studio-code-debugger-nodejs"},"Visual Studio Code debugger (Node.js)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#verbose-api-logs"},"Verbose API logs"))),(0,a.kt)("h2",{id:"playwright-inspector"},"Playwright Inspector"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/1.14/inspector"},"Playwright Inspector")," is a GUI tool that helps authoring and debugging Playwright scripts. That's our default recommended tool for scripts troubleshooting."),(0,a.kt)("img",{width:"712",alt:"Playwright Inspector",src:"https://user-images.githubusercontent.com/883973/108614092-8c478a80-73ac-11eb-9597-67dfce110e00.png"}),(0,a.kt)("h2",{id:"playwright-trace-viewer"},"Playwright Trace Viewer"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/1.14/trace-viewer"},"Playwright Trace Viewer")," is a GUI tool that helps troubleshooting test runs in a post-mortem manner."),(0,a.kt)("img",{width:"1212",alt:"Playwright Trace Viewer",src:"https://user-images.githubusercontent.com/883973/120585896-6a1bca80-c3e7-11eb-951a-bd84002480f5.png"}),(0,a.kt)("h2",{id:"run-in-headed-mode"},"Run in headed mode"),(0,a.kt)("p",null,"Playwright runs browsers in headless mode by default. To change this behavior, use ",(0,a.kt)("inlineCode",{parentName:"p"},"headless: false")," as a launch option. You can also use the ",(0,a.kt)("inlineCode",{parentName:"p"},"slowMo")," option to slow down execution and follow along while debugging."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"await chromium.launch({ headless: false, slowMo: 100 }); // or firefox, webkit\n")),(0,a.kt)("h2",{id:"browser-developer-tools"},"Browser Developer Tools"),(0,a.kt)("p",null,"You can use browser developer tools in Chromium, Firefox and WebKit while running a Playwright script in headed mode. Developer tools help to:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Inspect the DOM tree and ",(0,a.kt)("strong",{parentName:"li"},"find element selectors")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"See console logs")," during execution (or learn how to ",(0,a.kt)("a",{parentName:"li",href:"/docs/1.14/verification#console-logs"},"read logs via API"),")"),(0,a.kt)("li",{parentName:"ul"},"Check ",(0,a.kt)("strong",{parentName:"li"},"network activity")," and other developer tools features")),(0,a.kt)("a",{href:"https://user-images.githubusercontent.com/284612/77234134-5f21a500-6b69-11ea-92ec-1c146e1333ec.png"},(0,a.kt)("img",{src:"https://user-images.githubusercontent.com/284612/77234134-5f21a500-6b69-11ea-92ec-1c146e1333ec.png",width:"500",alt:"Chromium Developer Tools"})),(0,a.kt)("p",null,"Using a ",(0,a.kt)("a",{parentName:"p",href:"/docs/1.14/api/class-page#page-pause"},"page.pause()")," method is an easy way to pause the Playwright script execution and inspect the page in Developer tools. It will also open ",(0,a.kt)("a",{parentName:"p",href:"/docs/1.14/inspector"},"Playwright Inspector")," to help with debugging."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"For Chromium"),": you can also open developer tools through a launch option."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"await chromium.launch({ devtools: true });\n")),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},(0,a.kt)("strong",{parentName:"p"},"For WebKit"),": launching WebKit Inspector during the execution will   prevent the Playwright script from executing any further."))),(0,a.kt)("h2",{id:"run-in-debug-mode"},"Run in Debug Mode"),(0,a.kt)("p",null,"Set the ",(0,a.kt)("inlineCode",{parentName:"p"},"PWDEBUG")," environment variable to run your scripts in debug mode. Using ",(0,a.kt)("inlineCode",{parentName:"p"},"PWDEBUG=1")," will open ",(0,a.kt)("a",{parentName:"p",href:"/docs/1.14/inspector"},"Playwright Inspector"),"."),(0,a.kt)("p",null,"Using ",(0,a.kt)("inlineCode",{parentName:"p"},"PWDEBUG=console")," will configure the browser for debugging in Developer tools console:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Runs headed"),": Browsers always launch in headed mode"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Disables timeout"),": Sets default timeout to 0 (= no timeout)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Console helper"),": Configures a ",(0,a.kt)("inlineCode",{parentName:"li"},"playwright")," object in the browser to generate and highlight ",(0,a.kt)("a",{parentName:"li",href:"/docs/1.14/selectors"},"Playwright selectors"),". This can be used to verify text or composite selectors.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'# Linux/macOS\nPWDEBUG=console npm run test\n\n# Windows with cmd.exe\nset PWDEBUG=console\nnpm run test\n\n# Windows with PowerShell\n$env:PWDEBUG="console"\nnpm run test\n')),(0,a.kt)("h2",{id:"selectors-in-developer-tools-console"},"Selectors in Developer Tools Console"),(0,a.kt)("p",null,"When running in Debug Mode with ",(0,a.kt)("inlineCode",{parentName:"p"},"PWDEBUG=console"),", a ",(0,a.kt)("inlineCode",{parentName:"p"},"playwright")," object is available in Developer tools console."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Run with ",(0,a.kt)("inlineCode",{parentName:"li"},"PWDEBUG=console")),(0,a.kt)("li",{parentName:"ol"},"Setup a breakpoint to pause the execution"),(0,a.kt)("li",{parentName:"ol"},"Open the console panel in browser developer tools"),(0,a.kt)("li",{parentName:"ol"},"Use the ",(0,a.kt)("inlineCode",{parentName:"li"},"playwright")," API",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"playwright.$(selector)"),": Highlight the first occurrence of the selector. This reflects how ",(0,a.kt)("inlineCode",{parentName:"li"},"page.$")," would see the page."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"playwright.$$(selector)"),": Highlight all occurrences of the selector. This reflects how ",(0,a.kt)("inlineCode",{parentName:"li"},"page.$$")," would see the page."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"playwright.inspect(selector)"),": Inspect the selector in the Elements panel."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"playwright.clear()"),": Clear existing highlights."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"playwright.selector(element)"),": Generate a selector that points to the element.")))),(0,a.kt)("a",{href:"https://user-images.githubusercontent.com/284612/86857345-299abc00-c073-11ea-9e31-02923a9f0d4b.png"},(0,a.kt)("img",{src:"https://user-images.githubusercontent.com/284612/86857345-299abc00-c073-11ea-9e31-02923a9f0d4b.png",width:"500",alt:"Highlight selectors"})),(0,a.kt)("h2",{id:"visual-studio-code-debugger-nodejs"},"Visual Studio Code debugger (Node.js)"),(0,a.kt)("p",null,"The VS Code debugger can be used to pause and resume execution of Playwright scripts with breakpoints. The debugger can be configured in two ways."),(0,a.kt)("h3",{id:"use-launch-config"},"Use launch config"),(0,a.kt)("p",null,"Setup ",(0,a.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/docs/nodejs/nodejs-debugging"},(0,a.kt)("inlineCode",{parentName:"a"},"launch.json")," configuration")," for your Node.js project. Once configured launch the scripts with F5 and use breakpoints."),(0,a.kt)("h3",{id:"use-the-javascript-debug-terminal"},"Use the JavaScript Debug Terminal"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Open ",(0,a.kt)("a",{parentName:"li",href:"https://code.visualstudio.com/docs/nodejs/nodejs-debugging#_javascript-debug-terminal"},"JavaScript Debug Terminal")),(0,a.kt)("li",{parentName:"ol"},"Set a breakpoint in VS Code",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Use the ",(0,a.kt)("inlineCode",{parentName:"li"},"debugger")," keyword or set a breakpoint in the VS Code UI"))),(0,a.kt)("li",{parentName:"ol"},"Run your Node.js script from the terminal")),(0,a.kt)("h2",{id:"verbose-api-logs"},"Verbose API logs"),(0,a.kt)("p",null,"Playwright supports verbose logging with the ",(0,a.kt)("inlineCode",{parentName:"p"},"DEBUG")," environment variable."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'# Linux/macOS\nDEBUG=pw:api npm run test\n\n# Windows with cmd.exe\nset DEBUG=pw:api\nnpm run test\n\n# Windows with PowerShell\n$env:DEBUG="pw:api"\nnpm run test\n')))}p.isMDXComponent=!0},86010:function(e,t,n){function r(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function o(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(o&&(o+=" "),o+=t);return o}n.d(t,{Z:function(){return o}})}}]);