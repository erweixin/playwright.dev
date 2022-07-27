"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[8122],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return d}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),u=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=u(a),d=r,g=h["".concat(i,".").concat(d)]||h[d]||c[d]||o;return a?n.createElement(g,l(l({ref:t},p),{},{components:a})):n.createElement(g,l({ref:t},p))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=h;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var u=2;u<o;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},3811:function(e,t,a){a.d(t,{Z:function(){return u}});var n=a(7294),r=Object.defineProperty,o=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,i=(e,t,a)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;function u({children:e,hidden:t,className:a}){return n.createElement("div",((e,t)=>{for(var a in t||(t={}))l.call(t,a)&&i(e,a,t[a]);if(o)for(var a of o(t))s.call(t,a)&&i(e,a,t[a]);return e})({role:"tabpanel"},{hidden:t,className:a}),e)}},3824:function(e,t,a){a.d(t,{Z:function(){return f}});var n=a(7294),r=a(4939),o=a(9670),l=a(6010),s="tabItem_LplD",i=Object.defineProperty,u=Object.defineProperties,p=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,g=(e,t,a)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,m=(e,t)=>{for(var a in t||(t={}))h.call(t,a)&&g(e,a,t[a]);if(c)for(var a of c(t))d.call(t,a)&&g(e,a,t[a]);return e};function b(e){var t,a,r;const{lazy:i,block:c,defaultValue:h,values:d,groupId:g,className:b}=e,f=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=null!=d?d:f.map((({props:{value:e,label:t,attributes:a}})=>({value:e,label:t,attributes:a}))),k=(0,o.lx)(v,((e,t)=>e.value===t.value));if(k.length>0)throw new Error(`Docusaurus error: Duplicate values "${k.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const w=null===h?h:null!=(r=null!=h?h:null==(t=f.find((e=>e.props.default)))?void 0:t.props.value)?r:null==(a=f[0])?void 0:a.props.value;if(null!==w&&!v.some((e=>e.value===w)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${w}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:N}=(0,o.UB)(),[x,P]=(0,n.useState)(w),O=[],{blockElementScrollPositionUntilNextRender:T}=(0,o.o5)();if(null!=g){const e=y[g];null!=e&&e!==x&&v.some((t=>t.value===e))&&P(e)}const D=e=>{const t=e.currentTarget,a=O.indexOf(t),n=v[a].value;n!==x&&(T(t),P(n),null!=g&&N(g,n))},E=e=>{let t=null;switch(e.key){case"ArrowRight":{const a=O.indexOf(e.currentTarget)+1;t=O[a]||O[0];break}case"ArrowLeft":{const a=O.indexOf(e.currentTarget)-1;t=O[a]||O[O.length-1];break}}null==t||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":c},b)},v.map((({value:e,label:t,attributes:a})=>{return n.createElement("li",(r=m({role:"tab",tabIndex:x===e?0:-1,"aria-selected":x===e,key:e,ref:e=>O.push(e),onKeyDown:E,onFocus:D,onClick:D},a),o={className:(0,l.Z)("tabs__item",s,null==a?void 0:a.className,{"tabs__item--active":x===e})},u(r,p(o))),null!=t?t:e);var r,o}))),i?(0,n.cloneElement)(f.filter((e=>e.props.value===x))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},f.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==x})))))}function f(e){const t=(0,r.Z)();return n.createElement(b,m({key:String(t)},e))}},4455:function(e,t,a){a.r(t),a.d(t,{assets:function(){return f},contentTitle:function(){return m},default:function(){return w},frontMatter:function(){return g},metadata:function(){return b},toc:function(){return v}});var n=a(3905),r=a(3824),o=a(3811),l=Object.defineProperty,s=Object.defineProperties,i=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,h=(e,t,a)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,d=(e,t)=>{for(var a in t||(t={}))p.call(t,a)&&h(e,a,t[a]);if(u)for(var a of u(t))c.call(t,a)&&h(e,a,t[a]);return e};const g={id:"debug",title:"Debugging Tests"},m=void 0,b={unversionedId:"debug",id:"debug",title:"Debugging Tests",description:"The Playwright inspector is a great tool to help with debugging. It opens up a browser window highlighting the selectors as you step through each line of the test. You can also use the explore button to find other available selectors which you can then copy into your test file and rerun your tests to see if it passes. For debugging selectors, see here.",source:"@site/docs/debug.mdx",sourceDirName:".",slug:"/debug",permalink:"/docs/next/debug",tags:[],version:"current",frontMatter:{id:"debug",title:"Debugging Tests"},sidebar:"docs",previous:{title:"Command line tools",permalink:"/docs/next/cli"},next:{title:"Debugging Selectors",permalink:"/docs/next/debug-selectors"}},f={},v=[{value:"Playwright Inspector",id:"playwright-inspector",level:2},{value:"--debug",id:"--debug",level:3},{value:"PWDEBUG",id:"pwdebug",level:3},{value:"page.pause",id:"pagepause",level:3},{value:"Stepping through the Playwright script",id:"stepping-through-the-playwright-script",level:3},{value:"Actionability Logs",id:"actionability-logs",level:3},{value:"Exploring selectors",id:"exploring-selectors",level:3},{value:"Browser Developer Tools",id:"browser-developer-tools",level:2},{value:"Headed mode",id:"headed-mode",level:2},{value:"What&#39;s Next",id:"whats-next",level:2}],k={toc:v};function w(e){var t,a=e,{components:l}=a,h=((e,t)=>{var a={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&u)for(var n of u(e))t.indexOf(n)<0&&c.call(e,n)&&(a[n]=e[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(t=d(d({},k),h),s(t,i({components:l,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"The Playwright inspector is a great tool to help with debugging. It opens up a browser window highlighting the selectors as you step through each line of the test. You can also use the explore button to find other available ",(0,n.kt)("a",d({parentName:"p"},{href:"/docs/next/selectors"}),"selectors")," which you can then copy into your test file and rerun your tests to see if it passes. For debugging selectors, see ",(0,n.kt)("a",d({parentName:"p"},{href:"/docs/next/debug-selectors"}),"here"),"."),(0,n.kt)("h2",d({},{id:"playwright-inspector"}),"Playwright Inspector"),(0,n.kt)("p",null,"Playwright Inspector is a GUI tool that helps authoring and debugging Playwright scripts. That's our default recommended tool for scripts troubleshooting."),(0,n.kt)("img",{width:"712",alt:"Playwright Inspector",src:"https://user-images.githubusercontent.com/883973/108614092-8c478a80-73ac-11eb-9597-67dfce110e00.png"}),(0,n.kt)("p",null,"There are several ways of opening Playwright Inspector:"),(0,n.kt)("h3",d({},{id:"--debug"}),"--debug"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Debugging all Tests"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"npx playwright test --debug\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Debugging one test"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"npx playwright test example --debug\n")))),(0,n.kt)("h3",d({},{id:"pwdebug"}),"PWDEBUG"),(0,n.kt)("p",null,"Set the ",(0,n.kt)("inlineCode",{parentName:"p"},"PWDEBUG")," environment variable to run your scripts in debug mode. This configures Playwright for debugging and opens the inspector."),(0,n.kt)(r.Z,{groupId:"bash-flavor",defaultValue:"bash",values:[{label:"Bash",value:"bash"},{label:"PowerShell",value:"powershell"},{label:"Batch",value:"batch"}],mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"bash",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"PWDEBUG=1 npm run test\n"))),(0,n.kt)(o.Z,{value:"powershell",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-powershell"}),"$env:PWDEBUG=1\nnpm run test\n"))),(0,n.kt)(o.Z,{value:"batch",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-batch"}),"set PWDEBUG=1\nnpm run test\n")))),(0,n.kt)("p",null,"Additional useful defaults are configured when ",(0,n.kt)("inlineCode",{parentName:"p"},"PWDEBUG=1")," is set:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Browsers launch in the headed mode"),(0,n.kt)("li",{parentName:"ul"},"Default timeout is set to 0 (= no timeout)")),(0,n.kt)("p",null,"Using ",(0,n.kt)("inlineCode",{parentName:"p"},"PWDEBUG=console")," will configure the browser for debugging in Developer tools console:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Runs headed"),": Browsers always launch in headed mode"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Disables timeout"),": Sets default timeout to 0 (= no timeout)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Console helper"),": Configures a ",(0,n.kt)("inlineCode",{parentName:"li"},"playwright")," object in the browser to generate and highlight ",(0,n.kt)("a",d({parentName:"li"},{href:"/docs/next/selectors"}),"Playwright selectors"),". This can be used to verify text or composite selectors.")),(0,n.kt)(r.Z,{groupId:"bash-flavor",defaultValue:"bash",values:[{label:"Bash",value:"bash"},{label:"PowerShell",value:"powershell"},{label:"Batch",value:"batch"}],mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"bash",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"PWDEBUG=console npm run test\n"))),(0,n.kt)(o.Z,{value:"powershell",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-powershell"}),'$env:PWDEBUG="console"\nnpm run test\n'))),(0,n.kt)(o.Z,{value:"batch",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-batch"}),"set PWDEBUG=console\nnpm run test\n")))),(0,n.kt)("h3",d({},{id:"pagepause"}),"page.pause"),(0,n.kt)("p",null,"Call ",(0,n.kt)("a",d({parentName:"p"},{href:"/docs/next/api/class-page#page-pause"}),"page.pause()")," method from your script when running in headed browser."),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-js"}),"// Pause on the following line.\nawait page.pause();\n")),(0,n.kt)("p",null,"Use ",(0,n.kt)("inlineCode",{parentName:"p"},"open")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"codegen")," commands in the Playwright ",(0,n.kt)("a",d({parentName:"p"},{href:"/docs/next/cli"}),"CLI"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"npx playwright codegen wikipedia.org\n")),(0,n.kt)("h3",d({},{id:"stepping-through-the-playwright-script"}),"Stepping through the Playwright script"),(0,n.kt)("p",null,"The Inspector opens up a browser window highlighting the selectors as you step through each line of the test. Use the explore button to find other available ",(0,n.kt)("a",d({parentName:"p"},{href:"/docs/next/selectors"}),"selectors")," which you can then copy into your test file and rerun your tests to see if they pass."),(0,n.kt)("img",{width:"557",alt:"Paused on line",src:"https://user-images.githubusercontent.com/883973/108614337-71761580-73ae-11eb-9f61-3d29c52c9520.png"}),(0,n.kt)("p",null,'Use the toolbar to play the test or step over each action using the "Step over" action (keyboard shortcut: ',(0,n.kt)("inlineCode",{parentName:"p"},"F10"),") or resume script without further pauses (",(0,n.kt)("inlineCode",{parentName:"p"},"F8"),"):"),(0,n.kt)("center",null,(0,n.kt)("img",{width:"98",alt:"Stepping toolbar",src:"https://user-images.githubusercontent.com/883973/108614389-f9f4b600-73ae-11eb-8df2-8d9ce9da5d5c.png"})),(0,n.kt)("p",null,"Now we know what action is about to be performed and we can look into the details on that action. For example, when stopped on an input action such as ",(0,n.kt)("inlineCode",{parentName:"p"},"click"),", the exact point Playwright is about to click is highlighted with the large red dot on the inspected page:"),(0,n.kt)("img",{width:"344",alt:"Red dot on inspected page",src:"https://user-images.githubusercontent.com/883973/108614363-b69a4780-73ae-11eb-8f5e-51f9c91ec9b4.png"}),(0,n.kt)("h3",d({},{id:"actionability-logs"}),"Actionability Logs"),(0,n.kt)("p",null,"By the time Playwright has paused on that click action, it has already performed ",(0,n.kt)("a",d({parentName:"p"},{href:"/docs/next/actionability"}),"actionability checks")," that can be found in the log:"),(0,n.kt)("img",{width:"712",alt:"Action log",src:"https://user-images.githubusercontent.com/883973/108614564-72a84200-73b0-11eb-9de2-828b28d78b36.png"}),(0,n.kt)("p",null,"If actionability can't be reached, it'll show action as pending:"),(0,n.kt)("img",{width:"712",alt:"Pending action",src:"https://user-images.githubusercontent.com/883973/108614840-e6e3e500-73b2-11eb-998f-0cf31b2aa9a2.png"}),(0,n.kt)("h3",d({},{id:"exploring-selectors"}),"Exploring selectors"),(0,n.kt)("p",null,"Use the Explore button to hover over an element on the page and explore it's selector by clicking on it. You can then copy this selector into your tests and rerun your tests to see if they now pass with this selector. You can also debug selectors, checkout our ",(0,n.kt)("a",d({parentName:"p"},{href:"/docs/next/debug-selectors"}),"debugging selectors")," guide for more details."),(0,n.kt)("h2",d({},{id:"browser-developer-tools"}),"Browser Developer Tools"),(0,n.kt)("p",null,"You can use browser developer tools in Chromium, Firefox and WebKit while running a Playwright script in headed mode. Developer tools help to:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Inspect the DOM tree and ",(0,n.kt)("strong",{parentName:"li"},"find element selectors")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"See console logs")," during execution (or learn how to ",(0,n.kt)("a",d({parentName:"li"},{href:"/docs/next/api/class-page#page-event-console"}),"read logs via API"),")"),(0,n.kt)("li",{parentName:"ul"},"Check ",(0,n.kt)("strong",{parentName:"li"},"network activity")," and other developer tools features")),(0,n.kt)("a",{href:"https://user-images.githubusercontent.com/284612/77234134-5f21a500-6b69-11ea-92ec-1c146e1333ec.png"},(0,n.kt)("img",{src:"https://user-images.githubusercontent.com/284612/77234134-5f21a500-6b69-11ea-92ec-1c146e1333ec.png",width:"500",alt:"Chromium Developer Tools"})),(0,n.kt)("p",null,"Using a ",(0,n.kt)("a",d({parentName:"p"},{href:"/docs/next/api/class-page#page-pause"}),"page.pause()")," method is an easy way to pause the Playwright script execution and inspect the page in Developer tools. It will also open Playwright Inspector to help with debugging."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"For Chromium"),": you can also open developer tools through a launch option."),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-js"}),"await chromium.launch({ devtools: true });\n")),(0,n.kt)("div",d({},{className:"admonition admonition-note alert alert--secondary"}),(0,n.kt)("div",d({parentName:"div"},{className:"admonition-heading"}),(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",d({parentName:"h5"},{className:"admonition-icon"}),(0,n.kt)("svg",d({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),(0,n.kt)("path",d({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),(0,n.kt)("div",d({parentName:"div"},{className:"admonition-content"}),(0,n.kt)("p",{parentName:"div"},(0,n.kt)("strong",{parentName:"p"},"For WebKit"),": launching WebKit Inspector during the execution will prevent the Playwright script from executing any further."))),(0,n.kt)("h2",d({},{id:"headed-mode"}),"Headed mode"),(0,n.kt)("p",null,"Playwright runs browsers in headless mode by default. To change this behavior, use ",(0,n.kt)("inlineCode",{parentName:"p"},"headless: false")," as a launch option. You can also use the ",(0,n.kt)("inlineCode",{parentName:"p"},"slowMo")," option to slow down execution and follow along while debugging."),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-js"}),"await chromium.launch({ headless: false, slowMo: 100 }); // or firefox, webkit\n")),(0,n.kt)("h2",d({},{id:"whats-next"}),"What's Next"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"/docs/next/codegen"}),"Generate tests with Codegen")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"/docs/next/trace-viewer"}),"See a trace of your tests"))))}w.isMDXComponent=!0}}]);