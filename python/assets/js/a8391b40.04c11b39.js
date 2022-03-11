"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[8260],{3905:function(e,r,t){t.d(r,{Zo:function(){return s},kt:function(){return y}});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),u=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},s=function(e){var r=u(e.components);return n.createElement(c.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=u(t),y=a,f=m["".concat(c,".").concat(y)]||m[y]||p[y]||o;return t?n.createElement(f,l(l({ref:r},s),{},{components:t})):n.createElement(f,l({ref:r},s))}));function y(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=m;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=t[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3811:function(e,r,t){t.d(r,{Z:function(){return u}});var n=t(7294),a=Object.defineProperty,o=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,c=(e,r,t)=>r in e?a(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t;function u({children:e,hidden:r,className:t}){return n.createElement("div",((e,r)=>{for(var t in r||(r={}))l.call(r,t)&&c(e,t,r[t]);if(o)for(var t of o(r))i.call(r,t)&&c(e,t,r[t]);return e})({role:"tabpanel"},{hidden:r,className:t}),e)}},3824:function(e,r,t){t.d(r,{Z:function(){return v}});var n=t(7294),a=t(4939),o=t(5882),l=t(6010),i="tabItem_LplD",c=Object.defineProperty,u=Object.defineProperties,s=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable,f=(e,r,t)=>r in e?c(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,b=(e,r)=>{for(var t in r||(r={}))m.call(r,t)&&f(e,t,r[t]);if(p)for(var t of p(r))y.call(r,t)&&f(e,t,r[t]);return e};function d(e){var r,t,a;const{lazy:c,block:p,defaultValue:m,values:y,groupId:f,className:d}=e,v=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=null!=y?y:v.map((({props:{value:e,label:r,attributes:t}})=>({value:e,label:r,attributes:t}))),w=(0,o.lx)(h,((e,r)=>e.value===r.value));if(w.length>0)throw new Error(`Docusaurus error: Duplicate values "${w.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===m?m:null!=(a=null!=m?m:null==(r=v.find((e=>e.props.default)))?void 0:r.props.value)?a:null==(t=v[0])?void 0:t.props.value;if(null!==g&&!h.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:O,setTabGroupChoices:E}=(0,o.UB)(),[T,k]=(0,n.useState)(g),j=[],{blockElementScrollPositionUntilNextRender:P}=(0,o.o5)();if(null!=f){const e=O[f];null!=e&&e!==T&&h.some((r=>r.value===e))&&k(e)}const x=e=>{const r=e.currentTarget,t=j.indexOf(r),n=h[t].value;n!==T&&(P(r),k(n),null!=f&&E(f,n))},N=e=>{let r=null;switch(e.key){case"ArrowRight":{const t=j.indexOf(e.currentTarget)+1;r=j[t]||j[0];break}case"ArrowLeft":{const t=j.indexOf(e.currentTarget)-1;r=j[t]||j[j.length-1];break}}null==r||r.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":p},d)},h.map((({value:e,label:r,attributes:t})=>{return n.createElement("li",(a=b({role:"tab",tabIndex:T===e?0:-1,"aria-selected":T===e,key:e,ref:e=>j.push(e),onKeyDown:N,onFocus:x,onClick:x},t),o={className:(0,l.Z)("tabs__item",i,null==t?void 0:t.className,{"tabs__item--active":T===e})},u(a,s(o))),null!=r?r:e);var a,o}))),c?(0,n.cloneElement)(v.filter((e=>e.props.value===T))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},v.map(((e,r)=>(0,n.cloneElement)(e,{key:r,hidden:e.props.value!==T})))))}function v(e){const r=(0,a.Z)();return n.createElement(d,b({key:String(r)},e))}},6336:function(e,r,t){t.r(r),t.d(r,{assets:function(){return v},contentTitle:function(){return b},default:function(){return g},frontMatter:function(){return f},metadata:function(){return d},toc:function(){return h}});var n=t(3905),a=t(3824),o=t(3811),l=Object.defineProperty,i=Object.defineProperties,c=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,m=(e,r,t)=>r in e?l(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,y=(e,r)=>{for(var t in r||(r={}))s.call(r,t)&&m(e,t,r[t]);if(u)for(var t of u(r))p.call(r,t)&&m(e,t,r[t]);return e};const f={id:"class-timeouterror",title:"TimeoutError"},b=void 0,d={unversionedId:"api/class-timeouterror",id:"version-1.18/api/class-timeouterror",title:"TimeoutError",description:"* extends: [Error]",source:"@site/versioned_docs/version-1.18/api/class-timeouterror.mdx",sourceDirName:"api",slug:"/api/class-timeouterror",permalink:"/python/docs/1.18/api/class-timeouterror",tags:[],version:"1.18",frontMatter:{id:"class-timeouterror",title:"TimeoutError"},sidebar:"version-1.18/api",previous:{title:"Selectors",permalink:"/python/docs/1.18/api/class-selectors"},next:{title:"Touchscreen",permalink:"/python/docs/1.18/api/class-touchscreen"}},v={},h=[],w={toc:h};function g(e){var r,t=e,{components:l}=t,m=((e,r)=>{var t={};for(var n in e)s.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&u)for(var n of u(e))r.indexOf(n)<0&&p.call(e,n)&&(t[n]=e[n]);return t})(t,["components"]);return(0,n.kt)("wrapper",(r=y(y({},w),m),i(r,c({components:l,mdxType:"MDXLayout"}))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"extends: ",(0,n.kt)("a",y({parentName:"li"},{href:"/python/docs/1.18/api/class-error",title:"Error"}),"Error"))),(0,n.kt)("p",null,"TimeoutError is emitted whenever certain operations are terminated due to timeout, e.g. ",(0,n.kt)("a",y({parentName:"p"},{href:"/python/docs/1.18/api/class-locator#locator-wait-for"}),"locator.wait_for(**kwargs)")," or ",(0,n.kt)("a",y({parentName:"p"},{href:"/python/docs/1.18/api/class-browsertype#browser-type-launch"}),"browser_type.launch(**kwargs)"),"."),(0,n.kt)(a.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"sync",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",y({parentName:"pre"},{className:"language-py"}),'from playwright.sync_api import sync_playwright, TimeoutError as PlaywrightTimeoutError\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    try:\n      page.click("text=Example", timeout=100)\n    except PlaywrightTimeoutError:\n      print("Timeout!")\n    browser.close()\n'))),(0,n.kt)(o.Z,{value:"async",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",y({parentName:"pre"},{className:"language-py"}),'import asyncio\nfrom playwright.async_api import async_playwright, TimeoutError as PlaywrightTimeoutError\n\nasync def run(playwright):\n    browser = await playwright.chromium.launch()\n    page = await browser.new_page()\n    try:\n      await page.click("text=Example", timeout=100)\n    except PlaywrightTimeoutError:\n      print("Timeout!")\n    await browser.close()\n\nasync def main():\n    async with async_playwright() as playwright:\n        await run(playwright)\n\nasyncio.run(main())\n')))))}g.isMDXComponent=!0}}]);