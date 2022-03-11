"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[7614],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(a),m=r,g=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return a?n.createElement(g,l(l({ref:t},u),{},{components:a})):n.createElement(g,l({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},3811:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(7294),r=Object.defineProperty,o=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,s=(e,t,a)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;function c({children:e,hidden:t,className:a}){return n.createElement("div",((e,t)=>{for(var a in t||(t={}))l.call(t,a)&&s(e,a,t[a]);if(o)for(var a of o(t))i.call(t,a)&&s(e,a,t[a]);return e})({role:"tabpanel"},{hidden:t,className:a}),e)}},3824:function(e,t,a){a.d(t,{Z:function(){return b}});var n=a(7294),r=a(4939),o=a(5882),l=a(6010),i="tabItem_LplD",s=Object.defineProperty,c=Object.defineProperties,u=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,g=(e,t,a)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,h=(e,t)=>{for(var a in t||(t={}))d.call(t,a)&&g(e,a,t[a]);if(p)for(var a of p(t))m.call(t,a)&&g(e,a,t[a]);return e};function f(e){var t,a,r;const{lazy:s,block:p,defaultValue:d,values:m,groupId:g,className:f}=e,b=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=null!=m?m:b.map((({props:{value:e,label:t,attributes:a}})=>({value:e,label:t,attributes:a}))),y=(0,o.lx)(v,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const w=null===d?d:null!=(r=null!=d?d:null==(t=b.find((e=>e.props.default)))?void 0:t.props.value)?r:null==(a=b[0])?void 0:a.props.value;if(null!==w&&!v.some((e=>e.value===w)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${w}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:O}=(0,o.UB)(),[N,P]=(0,n.useState)(w),x=[],{blockElementScrollPositionUntilNextRender:E}=(0,o.o5)();if(null!=g){const e=k[g];null!=e&&e!==N&&v.some((t=>t.value===e))&&P(e)}const j=e=>{const t=e.currentTarget,a=x.indexOf(t),n=v[a].value;n!==N&&(E(t),P(n),null!=g&&O(g,n))},T=e=>{let t=null;switch(e.key){case"ArrowRight":{const a=x.indexOf(e.currentTarget)+1;t=x[a]||x[0];break}case"ArrowLeft":{const a=x.indexOf(e.currentTarget)-1;t=x[a]||x[x.length-1];break}}null==t||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":p},f)},v.map((({value:e,label:t,attributes:a})=>{return n.createElement("li",(r=h({role:"tab",tabIndex:N===e?0:-1,"aria-selected":N===e,key:e,ref:e=>x.push(e),onKeyDown:T,onFocus:j,onClick:j},a),o={className:(0,l.Z)("tabs__item",i,null==a?void 0:a.className,{"tabs__item--active":N===e})},c(r,u(o))),null!=t?t:e);var r,o}))),s?(0,n.cloneElement)(b.filter((e=>e.props.value===N))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},b.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function b(e){const t=(0,r.Z)();return n.createElement(f,h({key:String(t)},e))}},587:function(e,t,a){a.r(t),a.d(t,{assets:function(){return b},contentTitle:function(){return h},default:function(){return w},frontMatter:function(){return g},metadata:function(){return f},toc:function(){return v}});var n=a(3905),r=a(3824),o=a(3811),l=Object.defineProperty,i=Object.defineProperties,s=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,d=(e,t,a)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,m=(e,t)=>{for(var a in t||(t={}))u.call(t,a)&&d(e,a,t[a]);if(c)for(var a of c(t))p.call(t,a)&&d(e,a,t[a]);return e};const g={id:"codegen",title:"Test Generator"},h=void 0,f={unversionedId:"codegen",id:"version-1.19/codegen",title:"Test Generator",description:"Playwright comes with the ability to generate tests out of the box.",source:"@site/versioned_docs/version-1.19/codegen.mdx",sourceDirName:".",slug:"/codegen",permalink:"/python/docs/codegen",tags:[],version:"1.19",frontMatter:{id:"codegen",title:"Test Generator"},sidebar:"version-1.19/docs",previous:{title:"Trace Viewer",permalink:"/python/docs/trace-viewer"},next:{title:"Debugging tools",permalink:"/python/docs/debug"}},b={},v=[{value:"Generate tests",id:"generate-tests",level:2},{value:"Preserve authenticated state",id:"preserve-authenticated-state",level:2},{value:"Record using custom setup",id:"record-using-custom-setup",level:2},{value:"Emulate devices",id:"emulate-devices",level:2},{value:"Emulate color scheme and viewport size",id:"emulate-color-scheme-and-viewport-size",level:2},{value:"Emulate geolocation, language and timezone",id:"emulate-geolocation-language-and-timezone",level:2}],y={toc:v};function w(e){var t,a=e,{components:l}=a,d=((e,t)=>{var a={};for(var n in e)u.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&c)for(var n of c(e))t.indexOf(n)<0&&p.call(e,n)&&(a[n]=e[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(t=m(m({},y),d),i(t,s({components:l,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"Playwright comes with the ability to generate tests out of the box."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"#generate-tests"}),"Generate tests")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"#preserve-authenticated-state"}),"Preserve authenticated state")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"#record-using-custom-setup"}),"Record using custom setup")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"#emulate-devices"}),"Emulate devices")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"#emulate-color-scheme-and-viewport-size"}),"Emulate color scheme and viewport size")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"#emulate-geolocation-language-and-timezone"}),"Emulate geolocation, language and timezone"))),(0,n.kt)("h2",m({},{id:"generate-tests"}),"Generate tests"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"playwright codegen wikipedia.org\n")),(0,n.kt)("p",null,"Run ",(0,n.kt)("inlineCode",{parentName:"p"},"codegen")," and perform actions in the browser. Playwright will generate the code for the user interactions. ",(0,n.kt)("inlineCode",{parentName:"p"},"codegen")," will attempt to generate resilient text-based selectors."),(0,n.kt)("img",{src:"https://user-images.githubusercontent.com/284612/92536033-7e7ebe00-f1ed-11ea-9e1a-7cbd912e3391.gif"}),(0,n.kt)("h2",m({},{id:"preserve-authenticated-state"}),"Preserve authenticated state"),(0,n.kt)("p",null,"Run ",(0,n.kt)("inlineCode",{parentName:"p"},"codegen")," with ",(0,n.kt)("inlineCode",{parentName:"p"},"--save-storage")," to save ",(0,n.kt)("a",m({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies"}),"cookies")," and ",(0,n.kt)("a",m({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage"}),"localStorage")," at the end of the session. This is useful to separately record authentication step and reuse it later in the tests."),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"playwright codegen --save-storage=auth.json\n# Perform authentication and exit.\n# auth.json will contain the storage state.\n")),(0,n.kt)("p",null,"Run with ",(0,n.kt)("inlineCode",{parentName:"p"},"--load-storage")," to consume previously loaded storage. This way, all ",(0,n.kt)("a",m({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies"}),"cookies")," and ",(0,n.kt)("a",m({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage"}),"localStorage")," will be restored, bringing most web apps to the authenticated state."),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"playwright open --load-storage=auth.json my.web.app\nplaywright codegen --load-storage=auth.json my.web.app\n# Perform actions in authenticated state.\n")),(0,n.kt)("h2",m({},{id:"record-using-custom-setup"}),"Record using custom setup"),(0,n.kt)("p",null,"If you would like to use codegen in some non-standard setup (for example, use ",(0,n.kt)("a",m({parentName:"p"},{href:"/python/docs/api/class-browsercontext#browser-context-route"}),"browser_context.route(url, handler, **kwargs)"),"), it is possible to call ",(0,n.kt)("a",m({parentName:"p"},{href:"/python/docs/api/class-page#page-pause"}),"page.pause()")," that will open a separate window with codegen controls."),(0,n.kt)(r.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"sync",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-py"}),"from playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    # Make sure to run headed.\n    browser = p.chromium.launch(headless=False)\n\n    # Setup context however you like.\n    context = browser.new_context() # Pass any options\n    context.route('**/*', lambda route: route.continue_())\n\n    # Pause the page, and start recording manually.\n    page = context.new_page()\n    page.pause()\n"))),(0,n.kt)(o.Z,{value:"async",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-py"}),"import asyncio\nfrom playwright.async_api import async_playwright\n\nasync def main():\n    async with async_playwright() as p:\n        # Make sure to run headed.\n        browser = await p.chromium.launch(headless=False)\n\n        # Setup context however you like.\n        context = await browser.new_context() # Pass any options\n        await context.route('**/*', lambda route: route.continue_())\n\n        # Pause the page, and start recording manually.\n        page = await context.new_page()\n        await page.pause()\n\nasyncio.run(main())\n")))),(0,n.kt)("h2",m({},{id:"emulate-devices"}),"Emulate devices"),(0,n.kt)("p",null,"You can record scripts and tests while emulating a device."),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-bash"}),'# Emulate iPhone 11.\nplaywright codegen --device="iPhone 11" wikipedia.org\n')),(0,n.kt)("h2",m({},{id:"emulate-color-scheme-and-viewport-size"}),"Emulate color scheme and viewport size"),(0,n.kt)("p",null,"You can also record scripts and tests while emulating various browser properties."),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"# Emulate screen size and color scheme.\nplaywright codegen --viewport-size=800,600 --color-scheme=dark twitter.com\n")),(0,n.kt)("h2",m({},{id:"emulate-geolocation-language-and-timezone"}),"Emulate geolocation, language and timezone"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-bash"}),'# Emulate timezone, language & location\n# Once page opens, click the "my location" button to see geolocation in action\nplaywright codegen --timezone="Europe/Rome" --geolocation="41.890221,12.492348" --lang="it-IT" maps.google.com\n')))}w.isMDXComponent=!0}}]);