"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[1905],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(a),m=r,g=u["".concat(s,".").concat(m)]||u[m]||d[m]||l;return a?n.createElement(g,i(i({ref:t},c),{},{components:a})):n.createElement(g,i({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},73811:function(e,t,a){a.d(t,{Z:function(){return p}});var n=a(67294),r=Object.defineProperty,l=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,s=(e,t,a)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;function p({children:e,hidden:t,className:a}){return n.createElement("div",((e,t)=>{for(var a in t||(t={}))i.call(t,a)&&s(e,a,t[a]);if(l)for(var a of l(t))o.call(t,a)&&s(e,a,t[a]);return e})({role:"tabpanel"},{hidden:t,className:a}),e)}},73824:function(e,t,a){a.d(t,{Z:function(){return f}});var n=a(67294),r=a(54939),l=a(39670),i=a(86010),o="tabItem_LplD",s=Object.defineProperty,p=Object.defineProperties,c=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,g=(e,t,a)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,h=(e,t)=>{for(var a in t||(t={}))u.call(t,a)&&g(e,a,t[a]);if(d)for(var a of d(t))m.call(t,a)&&g(e,a,t[a]);return e};function y(e){var t,a,r;const{lazy:s,block:d,defaultValue:u,values:m,groupId:g,className:y}=e,f=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=null!=m?m:f.map((({props:{value:e,label:t,attributes:a}})=>({value:e,label:t,attributes:a}))),b=(0,l.lx)(v,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const k=null===u?u:null!=(r=null!=u?u:null==(t=f.find((e=>e.props.default)))?void 0:t.props.value)?r:null==(a=f[0])?void 0:a.props.value;if(null!==k&&!v.some((e=>e.value===k)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${k}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:w,setTabGroupChoices:N}=(0,l.UB)(),[O,x]=(0,n.useState)(k),j=[],{blockElementScrollPositionUntilNextRender:E}=(0,l.o5)();if(null!=g){const e=w[g];null!=e&&e!==O&&v.some((t=>t.value===e))&&x(e)}const T=e=>{const t=e.currentTarget,a=j.indexOf(t),n=v[a].value;n!==O&&(E(t),x(n),null!=g&&N(g,n))},P=e=>{let t=null;switch(e.key){case"ArrowRight":{const a=j.indexOf(e.currentTarget)+1;t=j[a]||j[0];break}case"ArrowLeft":{const a=j.indexOf(e.currentTarget)-1;t=j[a]||j[j.length-1];break}}null==t||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":d},y)},v.map((({value:e,label:t,attributes:a})=>{return n.createElement("li",(r=h({role:"tab",tabIndex:O===e?0:-1,"aria-selected":O===e,key:e,ref:e=>j.push(e),onKeyDown:P,onFocus:T,onClick:T},a),l={className:(0,i.Z)("tabs__item",o,null==a?void 0:a.className,{"tabs__item--active":O===e})},p(r,c(l))),null!=t?t:e);var r,l}))),s?(0,n.cloneElement)(f.filter((e=>e.props.value===O))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},f.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}function f(e){const t=(0,r.Z)();return n.createElement(y,h({key:String(t)},e))}},6641:function(e,t,a){a.r(t),a.d(t,{assets:function(){return f},contentTitle:function(){return h},default:function(){return k},frontMatter:function(){return g},metadata:function(){return y},toc:function(){return v}});var n=a(3905),r=a(73824),l=a(73811),i=Object.defineProperty,o=Object.defineProperties,s=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,u=(e,t,a)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,m=(e,t)=>{for(var a in t||(t={}))c.call(t,a)&&u(e,a,t[a]);if(p)for(var a of p(t))d.call(t,a)&&u(e,a,t[a]);return e};const g={id:"class-dialog",title:"Dialog"},h=void 0,y={unversionedId:"api/class-dialog",id:"version-1.20/api/class-dialog",title:"Dialog",description:'Dialog] objects are dispatched by page via the [page.on("dialog") event.',source:"@site/versioned_docs/version-1.20/api/class-dialog.mdx",sourceDirName:"api",slug:"/api/class-dialog",permalink:"/python/docs/1.20/api/class-dialog",tags:[],version:"1.20",frontMatter:{id:"class-dialog",title:"Dialog"},sidebar:"api",previous:{title:"ConsoleMessage",permalink:"/python/docs/1.20/api/class-consolemessage"},next:{title:"Download",permalink:"/python/docs/1.20/api/class-download"}},f={},v=[{value:"dialog.accept(**kwargs)",id:"dialog-accept",level:2},{value:"dialog.default_value",id:"dialog-default-value",level:2},{value:"dialog.dismiss()",id:"dialog-dismiss",level:2},{value:"dialog.message",id:"dialog-message",level:2},{value:"dialog.type",id:"dialog-type",level:2}],b={toc:v};function k(e){var t,a=e,{components:i}=a,u=((e,t)=>{var a={};for(var n in e)c.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&p)for(var n of p(e))t.indexOf(n)<0&&d.call(e,n)&&(a[n]=e[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(t=m(m({},b),u),o(t,s({components:i,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,(0,n.kt)("a",m({parentName:"p"},{href:"/python/docs/1.20/api/class-dialog",title:"Dialog"}),"Dialog")," objects are dispatched by page via the ",(0,n.kt)("a",m({parentName:"p"},{href:"/python/docs/1.20/api/class-page#page-event-dialog"}),'page.on("dialog")')," event."),(0,n.kt)("p",null,"An example of using ",(0,n.kt)("inlineCode",{parentName:"p"},"Dialog")," class:"),(0,n.kt)(r.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"sync",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-py"}),'from playwright.sync_api import sync_playwright\n\ndef handle_dialog(dialog):\n    print(dialog.message)\n    dialog.dismiss()\n\ndef run(playwright):\n    chromium = playwright.chromium\n    browser = chromium.launch()\n    page = browser.new_page()\n    page.on("dialog", handle_dialog)\n    page.evaluate("alert(\'1\')")\n    browser.close()\n\nwith sync_playwright() as playwright:\n    run(playwright)\n'))),(0,n.kt)(l.Z,{value:"async",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-py"}),'import asyncio\nfrom playwright.async_api import async_playwright\n\nasync def handle_dialog(dialog):\n    print(dialog.message)\n    await dialog.dismiss()\n\nasync def run(playwright):\n    chromium = playwright.chromium\n    browser = await chromium.launch()\n    page = await browser.new_page()\n    page.on("dialog", handle_dialog)\n    page.evaluate("alert(\'1\')")\n    await browser.close()\n\nasync def main():\n    async with async_playwright() as playwright:\n        await run(playwright)\nasyncio.run(main())\n')))),(0,n.kt)("div",m({},{className:"admonition admonition-note alert alert--secondary"}),(0,n.kt)("div",m({parentName:"div"},{className:"admonition-heading"}),(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",m({parentName:"h5"},{className:"admonition-icon"}),(0,n.kt)("svg",m({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),(0,n.kt)("path",m({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),(0,n.kt)("div",m({parentName:"div"},{className:"admonition-content"}),(0,n.kt)("p",{parentName:"div"},"Dialogs are dismissed automatically, unless there is a ",(0,n.kt)("a",m({parentName:"p"},{href:"/python/docs/1.20/api/class-page#page-event-dialog"}),'page.on("dialog")')," listener. When listener is present, it ",(0,n.kt)("strong",{parentName:"p"},"must")," either ",(0,n.kt)("a",m({parentName:"p"},{href:"/python/docs/1.20/api/class-dialog#dialog-accept"}),"dialog.accept(**kwargs)")," or ",(0,n.kt)("a",m({parentName:"p"},{href:"/python/docs/1.20/api/class-dialog#dialog-dismiss"}),"dialog.dismiss()")," the dialog - otherwise the page will ",(0,n.kt)("a",m({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop#never_blocking"}),"freeze")," waiting for the dialog, and actions like click will never finish."))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"/python/docs/1.20/api/class-dialog#dialog-accept"}),"dialog.accept(**kwargs)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"/python/docs/1.20/api/class-dialog#dialog-default-value"}),"dialog.default_value")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"/python/docs/1.20/api/class-dialog#dialog-dismiss"}),"dialog.dismiss()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"/python/docs/1.20/api/class-dialog#dialog-message"}),"dialog.message")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"/python/docs/1.20/api/class-dialog#dialog-type"}),"dialog.type"))),(0,n.kt)("h2",m({},{id:"dialog-accept"}),"dialog.accept(**kwargs)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"prompt_text"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"dialog-accept-option-prompt-text"})," ","<",(0,n.kt)("a",m({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"}),"str"),">"," A text to enter in prompt. Does not cause any effects if the dialog's ",(0,n.kt)("inlineCode",{parentName:"li"},"type")," is not prompt. Optional.",(0,n.kt)("a",{href:"#dialog-accept-option-prompt-text",class:"list-anchor"},"#")),(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"dialog-accept-return"})," ","<",(0,n.kt)("a",m({parentName:"li"},{href:"https://docs.python.org/3/library/constants.html#None",title:"None"}),"NoneType"),">",(0,n.kt)("a",{href:"#dialog-accept-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"Returns when the dialog has been accepted."),(0,n.kt)("h2",m({},{id:"dialog-default-value"}),"dialog.default_value"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"dialog-default-value-return"})," ","<",(0,n.kt)("a",m({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"}),"str"),">",(0,n.kt)("a",{href:"#dialog-default-value-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"If dialog is prompt, returns default prompt value. Otherwise, returns empty string."),(0,n.kt)("h2",m({},{id:"dialog-dismiss"}),"dialog.dismiss()"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"dialog-dismiss-return"})," ","<",(0,n.kt)("a",m({parentName:"li"},{href:"https://docs.python.org/3/library/constants.html#None",title:"None"}),"NoneType"),">",(0,n.kt)("a",{href:"#dialog-dismiss-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"Returns when the dialog has been dismissed."),(0,n.kt)("h2",m({},{id:"dialog-message"}),"dialog.message"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"dialog-message-return"})," ","<",(0,n.kt)("a",m({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"}),"str"),">",(0,n.kt)("a",{href:"#dialog-message-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"A message displayed in the dialog."),(0,n.kt)("h2",m({},{id:"dialog-type"}),"dialog.type"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"dialog-type-return"})," ","<",(0,n.kt)("a",m({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"}),"str"),">",(0,n.kt)("a",{href:"#dialog-type-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"Returns dialog's type, can be one of ",(0,n.kt)("inlineCode",{parentName:"p"},"alert"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"beforeunload"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"confirm")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"prompt"),"."))}k.isMDXComponent=!0}}]);