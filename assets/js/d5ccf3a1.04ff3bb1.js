"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[78875],{3905:function(e,r,t){t.d(r,{Zo:function(){return c},kt:function(){return d}});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),u=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},c=function(e){var r=u(e.components);return n.createElement(s.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),f=u(t),d=a,m=f["".concat(s,".").concat(d)]||f[d]||p[d]||o;return t?n.createElement(m,l(l({ref:r},c),{},{components:t})):n.createElement(m,l({ref:r},c))}));function d(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=f;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=t[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},73811:function(e,r,t){t.d(r,{Z:function(){return u}});var n=t(67294),a=Object.defineProperty,o=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,s=(e,r,t)=>r in e?a(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t;function u({children:e,hidden:r,className:t}){return n.createElement("div",((e,r)=>{for(var t in r||(r={}))l.call(r,t)&&s(e,t,r[t]);if(o)for(var t of o(r))i.call(r,t)&&s(e,t,r[t]);return e})({role:"tabpanel"},{hidden:r,className:t}),e)}},73824:function(e,r,t){t.d(r,{Z:function(){return w}});var n=t(67294),a=t(54939),o=t(39670),l=t(86010),i="tabItem_LplD",s=Object.defineProperty,u=Object.defineProperties,c=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,m=(e,r,t)=>r in e?s(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,k=(e,r)=>{for(var t in r||(r={}))f.call(r,t)&&m(e,t,r[t]);if(p)for(var t of p(r))d.call(r,t)&&m(e,t,r[t]);return e};function b(e){var r,t,a;const{lazy:s,block:p,defaultValue:f,values:d,groupId:m,className:b}=e,w=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=null!=d?d:w.map((({props:{value:e,label:r,attributes:t}})=>({value:e,label:r,attributes:t}))),h=(0,o.lx)(v,((e,r)=>e.value===r.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===f?f:null!=(a=null!=f?f:null==(r=w.find((e=>e.props.default)))?void 0:r.props.value)?a:null==(t=w[0])?void 0:t.props.value;if(null!==y&&!v.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:g,setTabGroupChoices:x}=(0,o.UB)(),[N,O]=(0,n.useState)(y),I=[],{blockElementScrollPositionUntilNextRender:j}=(0,o.o5)();if(null!=m){const e=g[m];null!=e&&e!==N&&v.some((r=>r.value===e))&&O(e)}const T=e=>{const r=e.currentTarget,t=I.indexOf(r),n=v[t].value;n!==N&&(j(r),O(n),null!=m&&x(m,n))},P=e=>{let r=null;switch(e.key){case"ArrowRight":{const t=I.indexOf(e.currentTarget)+1;r=I[t]||I[0];break}case"ArrowLeft":{const t=I.indexOf(e.currentTarget)-1;r=I[t]||I[I.length-1];break}}null==r||r.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":p},b)},v.map((({value:e,label:r,attributes:t})=>{return n.createElement("li",(a=k({role:"tab",tabIndex:N===e?0:-1,"aria-selected":N===e,key:e,ref:e=>I.push(e),onKeyDown:P,onFocus:T,onClick:T},t),o={className:(0,l.Z)("tabs__item",i,null==t?void 0:t.className,{"tabs__item--active":N===e})},u(a,c(o))),null!=r?r:e);var a,o}))),s?(0,n.cloneElement)(w.filter((e=>e.props.value===N))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},w.map(((e,r)=>(0,n.cloneElement)(e,{key:r,hidden:e.props.value!==N})))))}function w(e){const r=(0,a.Z)();return n.createElement(b,k({key:String(r)},e))}},71525:function(e,r,t){t.r(r),t.d(r,{assets:function(){return w},contentTitle:function(){return k},default:function(){return y},frontMatter:function(){return m},metadata:function(){return b},toc:function(){return v}});var n=t(3905),a=t(73824),o=t(73811),l=Object.defineProperty,i=Object.defineProperties,s=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,f=(e,r,t)=>r in e?l(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,d=(e,r)=>{for(var t in r||(r={}))c.call(r,t)&&f(e,t,r[t]);if(u)for(var t of u(r))p.call(r,t)&&f(e,t,r[t]);return e};const m={id:"class-workerinfo",title:"WorkerInfo"},k=void 0,b={unversionedId:"api/class-workerinfo",id:"api/class-workerinfo",title:"WorkerInfo",description:"WorkerInfo contains information about the worker that is running tests. It is available to test.beforeAll(hookFunction) and test.afterAll(hookFunction) hooks and worker-scoped fixtures.",source:"@site/docs/api/class-workerinfo.mdx",sourceDirName:"api",slug:"/api/class-workerinfo",permalink:"/docs/next/api/class-workerinfo",tags:[],version:"current",frontMatter:{id:"class-workerinfo",title:"WorkerInfo"}},w={},v=[{value:"workerInfo.config",id:"worker-info-config",level:2},{value:"workerInfo.parallelIndex",id:"worker-info-parallel-index",level:2},{value:"workerInfo.project",id:"worker-info-project",level:2},{value:"workerInfo.workerIndex",id:"worker-info-worker-index",level:2}],h={toc:v};function y(e){var r,t=e,{components:l}=t,f=((e,r)=>{var t={};for(var n in e)c.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&u)for(var n of u(e))r.indexOf(n)<0&&p.call(e,n)&&(t[n]=e[n]);return t})(t,["components"]);return(0,n.kt)("wrapper",(r=d(d({},h),f),i(r,s({components:l,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"WorkerInfo")," contains information about the worker that is running tests. It is available to ",(0,n.kt)("a",d({parentName:"p"},{href:"/docs/next/api/class-test#test-before-all"}),"test.beforeAll(hookFunction)")," and ",(0,n.kt)("a",d({parentName:"p"},{href:"/docs/next/api/class-test#test-after-all"}),"test.afterAll(hookFunction)")," hooks and worker-scoped fixtures."),(0,n.kt)(a.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"ts",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-ts"}),"import { test, expect } from '@playwright/test';\n\ntest.beforeAll(async ({ browserName }, workerInfo) => {\n  console.log(`Running ${browserName} in worker #${workerInfo.workerIndex}`);\n});\n"))),(0,n.kt)(o.Z,{value:"js",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-js"}),"const { test, expect } = require('@playwright/test');\n\ntest.beforeAll(async ({ browserName }, workerInfo) => {\n  console.log(`Running ${browserName} in worker #${workerInfo.workerIndex}`);\n});\n")))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"/docs/next/api/class-workerinfo#worker-info-config"}),"workerInfo.config")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"/docs/next/api/class-workerinfo#worker-info-parallel-index"}),"workerInfo.parallelIndex")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"/docs/next/api/class-workerinfo#worker-info-project"}),"workerInfo.project")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"/docs/next/api/class-workerinfo#worker-info-worker-index"}),"workerInfo.workerIndex"))),(0,n.kt)("h2",d({},{id:"worker-info-config"}),"workerInfo.config"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"type: ","<",(0,n.kt)("a",d({parentName:"li"},{href:"/docs/next/api/class-testconfig",title:"TestConfig"}),"TestConfig"),">")),(0,n.kt)("p",null,"Processed configuration from the ",(0,n.kt)("a",d({parentName:"p"},{href:"/docs/next/test-configuration"}),"configuration file"),"."),(0,n.kt)("h2",d({},{id:"worker-info-parallel-index"}),"workerInfo.parallelIndex"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"type: ","<",(0,n.kt)("a",d({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"}),"number"),">")),(0,n.kt)("p",null,"The index of the worker between ",(0,n.kt)("inlineCode",{parentName:"p"},"0")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"workers - 1"),". It is guaranteed that workers running at the same time have a different ",(0,n.kt)("inlineCode",{parentName:"p"},"parallelIndex"),". When a worker is restarted, for example after a failure, the new worker process has the same ",(0,n.kt)("inlineCode",{parentName:"p"},"parallelIndex"),"."),(0,n.kt)("p",null,"Also available as ",(0,n.kt)("inlineCode",{parentName:"p"},"process.env.TEST_PARALLEL_INDEX"),". Learn more about ",(0,n.kt)("a",d({parentName:"p"},{href:"/docs/next/test-parallel"}),"parallelism and sharding")," with Playwright Test."),(0,n.kt)("h2",d({},{id:"worker-info-project"}),"workerInfo.project"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"type: ","<",(0,n.kt)("a",d({parentName:"li"},{href:"/docs/next/api/class-testproject",title:"TestProject"}),"TestProject"),">")),(0,n.kt)("p",null,"Processed project configuration from the ",(0,n.kt)("a",d({parentName:"p"},{href:"/docs/next/test-configuration"}),"configuration file"),"."),(0,n.kt)("h2",d({},{id:"worker-info-worker-index"}),"workerInfo.workerIndex"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"type: ","<",(0,n.kt)("a",d({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"}),"number"),">")),(0,n.kt)("p",null,"The unique index of the worker process that is running the test. When a worker is restarted, for example after a failure, the new worker process gets a new unique ",(0,n.kt)("inlineCode",{parentName:"p"},"workerIndex"),"."),(0,n.kt)("p",null,"Also available as ",(0,n.kt)("inlineCode",{parentName:"p"},"process.env.TEST_WORKER_INDEX"),". Learn more about ",(0,n.kt)("a",d({parentName:"p"},{href:"/docs/next/test-parallel"}),"parallelism and sharding")," with Playwright Test."))}y.isMDXComponent=!0}}]);