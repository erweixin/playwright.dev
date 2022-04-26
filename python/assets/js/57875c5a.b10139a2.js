"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[9958],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(t),m=a,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return t?r.createElement(f,l(l({ref:n},u),{},{components:t})):r.createElement(f,l({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=d;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},73811:function(e,n,t){t.d(n,{Z:function(){return c}});var r=t(67294),a=Object.defineProperty,o=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,s=(e,n,t)=>n in e?a(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;function c({children:e,hidden:n,className:t}){return r.createElement("div",((e,n)=>{for(var t in n||(n={}))l.call(n,t)&&s(e,t,n[t]);if(o)for(var t of o(n))i.call(n,t)&&s(e,t,n[t]);return e})({role:"tabpanel"},{hidden:n,className:t}),e)}},73824:function(e,n,t){t.d(n,{Z:function(){return b}});var r=t(67294),a=t(54939),o=t(39670),l=t(86010),i="tabItem_LplD",s=Object.defineProperty,c=Object.defineProperties,u=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,f=(e,n,t)=>n in e?s(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,y=(e,n)=>{for(var t in n||(n={}))d.call(n,t)&&f(e,t,n[t]);if(p)for(var t of p(n))m.call(n,t)&&f(e,t,n[t]);return e};function h(e){var n,t,a;const{lazy:s,block:p,defaultValue:d,values:m,groupId:f,className:h}=e,b=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=null!=m?m:b.map((({props:{value:e,label:n,attributes:t}})=>({value:e,label:n,attributes:t}))),g=(0,o.lx)(v,((e,n)=>e.value===n.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const w=null===d?d:null!=(a=null!=d?d:null==(n=b.find((e=>e.props.default)))?void 0:n.props.value)?a:null==(t=b[0])?void 0:t.props.value;if(null!==w&&!v.some((e=>e.value===w)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${w}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:x,setTabGroupChoices:O}=(0,o.UB)(),[k,_]=(0,r.useState)(w),j=[],{blockElementScrollPositionUntilNextRender:E}=(0,o.o5)();if(null!=f){const e=x[f];null!=e&&e!==k&&v.some((n=>n.value===e))&&_(e)}const N=e=>{const n=e.currentTarget,t=j.indexOf(n),r=v[t].value;r!==k&&(E(n),_(r),null!=f&&O(f,r))},T=e=>{let n=null;switch(e.key){case"ArrowRight":{const t=j.indexOf(e.currentTarget)+1;n=j[t]||j[0];break}case"ArrowLeft":{const t=j.indexOf(e.currentTarget)-1;n=j[t]||j[j.length-1];break}}null==n||n.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":p},h)},v.map((({value:e,label:n,attributes:t})=>{return r.createElement("li",(a=y({role:"tab",tabIndex:k===e?0:-1,"aria-selected":k===e,key:e,ref:e=>j.push(e),onKeyDown:T,onFocus:N,onClick:N},t),o={className:(0,l.Z)("tabs__item",i,null==t?void 0:t.className,{"tabs__item--active":k===e})},c(a,u(o))),null!=n?n:e);var a,o}))),s?(0,r.cloneElement)(b.filter((e=>e.props.value===k))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},b.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==k})))))}function b(e){const n=(0,a.Z)();return r.createElement(h,y({key:String(n)},e))}},52974:function(e,n,t){t.r(n),t.d(n,{assets:function(){return b},contentTitle:function(){return y},default:function(){return w},frontMatter:function(){return f},metadata:function(){return h},toc:function(){return v}});var r=t(3905),a=t(73824),o=t(73811),l=Object.defineProperty,i=Object.defineProperties,s=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,d=(e,n,t)=>n in e?l(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,m=(e,n)=>{for(var t in n||(n={}))u.call(n,t)&&d(e,t,n[t]);if(c)for(var t of c(n))p.call(n,t)&&d(e,t,n[t]);return e};const f={id:"chrome-extensions",title:"Chrome Extensions"},y=void 0,h={unversionedId:"chrome-extensions",id:"version-1.20/chrome-extensions",title:"Chrome Extensions",description:"Extensions only work in Chrome / Chromium in non-headless mode.",source:"@site/versioned_docs/version-1.20/chrome-extensions.mdx",sourceDirName:".",slug:"/chrome-extensions",permalink:"/python/docs/1.20/chrome-extensions",tags:[],version:"1.20",frontMatter:{id:"chrome-extensions",title:"Chrome Extensions"},sidebar:"docs",previous:{title:"Browser Contexts",permalink:"/python/docs/1.20/browser-contexts"},next:{title:"Command line tools",permalink:"/python/docs/1.20/cli"}},b={},v=[],g={toc:v};function w(e){var n,t=e,{components:l}=t,d=((e,n)=>{var t={};for(var r in e)u.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&c)for(var r of c(e))n.indexOf(r)<0&&p.call(e,r)&&(t[r]=e[r]);return t})(t,["components"]);return(0,r.kt)("wrapper",(n=m(m({},g),d),i(n,s({components:l,mdxType:"MDXLayout"}))),(0,r.kt)("div",m({},{className:"admonition admonition-note alert alert--secondary"}),(0,r.kt)("div",m({parentName:"div"},{className:"admonition-heading"}),(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",m({parentName:"h5"},{className:"admonition-icon"}),(0,r.kt)("svg",m({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),(0,r.kt)("path",m({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),(0,r.kt)("div",m({parentName:"div"},{className:"admonition-content"}),(0,r.kt)("p",{parentName:"div"},"Extensions only work in Chrome / Chromium in non-headless mode."))),(0,r.kt)("p",null,"The following is code for getting a handle to the ",(0,r.kt)("a",m({parentName:"p"},{href:"https://developer.chrome.com/extensions/background_pages"}),"background page")," of an extension whose source is located in ",(0,r.kt)("inlineCode",{parentName:"p"},"./my-extension"),":"),(0,r.kt)(a.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"sync",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-py"}),'from playwright.sync_api import sync_playwright\n\npath_to_extension = "./my-extension"\nuser_data_dir = "/tmp/test-user-data-dir"\n\n\ndef run(playwright):\n    context = playwright.chromium.launch_persistent_context(\n        user_data_dir,\n        headless=False,\n        args=[\n            f"--disable-extensions-except={path_to_extension}",\n            f"--load-extension={path_to_extension}",\n        ],\n    )\n    background_page = context.background_pages[0]\n    # Test the background page as you would any other page.\n    context.close()\n\n\nwith sync_playwright() as playwright:\n    run(playwright)\n'))),(0,r.kt)(o.Z,{value:"async",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-py"}),'import asyncio\nfrom playwright.async_api import async_playwright\n\npath_to_extension = "./my-extension"\nuser_data_dir = "/tmp/test-user-data-dir"\n\n\nasync def run(playwright):\n    context = await playwright.chromium.launch_persistent_context(\n        user_data_dir,\n        headless=False,\n        args=[\n            f"--disable-extensions-except={path_to_extension}",\n            f"--load-extension={path_to_extension}",\n        ],\n    )\n    background_page = context.background_pages[0]\n    # Test the background page as you would any other page.\n    await context.close()\n\n\nasync def main():\n    async with async_playwright() as playwright:\n        await run(playwright)\n\n\nasyncio.run(main())\n')))))}w.isMDXComponent=!0}}]);