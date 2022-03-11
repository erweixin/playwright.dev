"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[6612],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return f}});var a=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,o=function(t,e){if(null==t)return{};var n,a,o={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var s=a.createContext({}),u=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},p=function(t){var e=u(t.components);return a.createElement(s.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,o=t.mdxType,r=t.originalType,s=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),m=u(n),f=o,d=m["".concat(s,".").concat(f)]||m[f]||c[f]||r;return n?a.createElement(d,l(l({ref:e},p),{},{components:n})):a.createElement(d,l({ref:e},p))}));function f(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var r=n.length,l=new Array(r);l[0]=m;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i.mdxType="string"==typeof t?t:o,l[1]=i;for(var u=2;u<r;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},73811:function(t,e,n){n.d(e,{Z:function(){return u}});var a=n(67294),o=Object.defineProperty,r=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,s=(t,e,n)=>e in t?o(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;function u({children:t,hidden:e,className:n}){return a.createElement("div",((t,e)=>{for(var n in e||(e={}))l.call(e,n)&&s(t,n,e[n]);if(r)for(var n of r(e))i.call(e,n)&&s(t,n,e[n]);return t})({role:"tabpanel"},{hidden:e,className:n}),t)}},73824:function(t,e,n){n.d(e,{Z:function(){return b}});var a=n(67294),o=n(54939),r=n(5882),l=n(86010),i="tabItem_LplD",s=Object.defineProperty,u=Object.defineProperties,p=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,d=(t,e,n)=>e in t?s(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,g=(t,e)=>{for(var n in e||(e={}))m.call(e,n)&&d(t,n,e[n]);if(c)for(var n of c(e))f.call(e,n)&&d(t,n,e[n]);return t};function k(t){var e,n,o;const{lazy:s,block:c,defaultValue:m,values:f,groupId:d,className:k}=t,b=a.Children.map(t.children,(t=>{if((0,a.isValidElement)(t)&&void 0!==t.props.value)return t;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof t.type?t.type:t.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=null!=f?f:b.map((({props:{value:t,label:e,attributes:n}})=>({value:t,label:e,attributes:n}))),y=(0,r.lx)(v,((t,e)=>t.value===e.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((t=>t.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const h=null===m?m:null!=(o=null!=m?m:null==(e=b.find((t=>t.props.default)))?void 0:e.props.value)?o:null==(n=b[0])?void 0:n.props.value;if(null!==h&&!v.some((t=>t.value===h)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${h}" but none of its children has the corresponding value. Available values are: ${v.map((t=>t.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:T,setTabGroupChoices:x}=(0,r.UB)(),[w,N]=(0,a.useState)(h),j=[],{blockElementScrollPositionUntilNextRender:O}=(0,r.o5)();if(null!=d){const t=T[d];null!=t&&t!==w&&v.some((e=>e.value===t))&&N(t)}const S=t=>{const e=t.currentTarget,n=j.indexOf(e),a=v[n].value;a!==w&&(O(e),N(a),null!=d&&x(d,a))},P=t=>{let e=null;switch(t.key){case"ArrowRight":{const n=j.indexOf(t.currentTarget)+1;e=j[n]||j[0];break}case"ArrowLeft":{const n=j.indexOf(t.currentTarget)-1;e=j[n]||j[j.length-1];break}}null==e||e.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":c},k)},v.map((({value:t,label:e,attributes:n})=>{return a.createElement("li",(o=g({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:t=>j.push(t),onKeyDown:P,onFocus:S,onClick:S},n),r={className:(0,l.Z)("tabs__item",i,null==n?void 0:n.className,{"tabs__item--active":w===t})},u(o,p(r))),null!=e?e:t);var o,r}))),s?(0,a.cloneElement)(b.filter((t=>t.props.value===w))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},b.map(((t,e)=>(0,a.cloneElement)(t,{key:e,hidden:t.props.value!==w})))))}function b(t){const e=(0,o.Z)();return a.createElement(k,g({key:String(e)},t))}},2346:function(t,e,n){n.r(e),n.d(e,{assets:function(){return b},contentTitle:function(){return g},default:function(){return h},frontMatter:function(){return d},metadata:function(){return k},toc:function(){return v}});var a=n(3905),o=n(73824),r=n(73811),l=Object.defineProperty,i=Object.defineProperties,s=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,m=(t,e,n)=>e in t?l(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,f=(t,e)=>{for(var n in e||(e={}))p.call(e,n)&&m(t,n,e[n]);if(u)for(var n of u(e))c.call(e,n)&&m(t,n,e[n]);return t};const d={id:"test-timeouts",title:"Timeouts"},g=void 0,k={unversionedId:"test-timeouts",id:"test-timeouts",title:"Timeouts",description:"- Overview",source:"@site/docs/test-timeouts.mdx",sourceDirName:".",slug:"/test-timeouts",permalink:"/docs/next/test-timeouts",tags:[],version:"current",frontMatter:{id:"test-timeouts",title:"Timeouts"},sidebar:"docs",previous:{title:"Test retry",permalink:"/docs/next/test-retries"},next:{title:"Visual comparisons",permalink:"/docs/next/test-snapshots"}},b={},v=[{value:"Overview",id:"overview",level:2},{value:"Test timeout",id:"test-timeout",level:2},{value:"Set test timeout in the config",id:"set-test-timeout-in-the-config",level:3},{value:"Set timeout for a single test",id:"set-timeout-for-a-single-test",level:3},{value:"Change timeout from a hook or fixture",id:"change-timeout-from-a-hook-or-fixture",level:3},{value:"Expect timeout",id:"expect-timeout",level:2},{value:"Set expect timeout in the config",id:"set-expect-timeout-in-the-config",level:3},{value:"Set timeout for a single assertion",id:"set-timeout-for-a-single-assertion",level:3},{value:"Action and navigation timeouts",id:"action-and-navigation-timeouts",level:2},{value:"Set action and navigation timeouts in the config",id:"set-action-and-navigation-timeouts-in-the-config",level:3},{value:"Set timeout for a single action",id:"set-timeout-for-a-single-action",level:3},{value:"Global timeout",id:"global-timeout",level:2}],y={toc:v};function h(t){var e,n=t,{components:l}=n,m=((t,e)=>{var n={};for(var a in t)p.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(null!=t&&u)for(var a of u(t))e.indexOf(a)<0&&c.call(t,a)&&(n[a]=t[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(e=f(f({},y),m),i(e,s({components:l,mdxType:"MDXLayout"}))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",f({parentName:"li"},{href:"#overview"}),"Overview")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",f({parentName:"li"},{href:"#test-timeout"}),"Test timeout")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",f({parentName:"li"},{href:"#expect-timeout"}),"Expect timeout")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",f({parentName:"li"},{href:"#action-and-navigation-timeouts"}),"Action and navigation timeouts")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",f({parentName:"li"},{href:"#global-timeout"}),"Global timeout"))),(0,a.kt)("h2",f({},{id:"overview"}),"Overview"),(0,a.kt)("p",null,"Playwright Test has multiple configurable timeouts for various tasks."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",f({parentName:"tr"},{align:"left"}),"Timeout"),(0,a.kt)("th",f({parentName:"tr"},{align:"left"}),"Default"),(0,a.kt)("th",f({parentName:"tr"},{align:"left"}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",f({parentName:"tr"},{align:"left"}),"Test timeout"),(0,a.kt)("td",f({parentName:"tr"},{align:"left"}),"30000 ms"),(0,a.kt)("td",f({parentName:"tr"},{align:"left"}),"Timeout for each test, includes test, hooks and fixtures:",(0,a.kt)("br",null),(0,a.kt)("span",{style:{textTransform:"uppercase",fontSize:"smaller",fontWeight:"bold",opacity:"0.6"}},"Set default"),(0,a.kt)("br",null),(0,a.kt)("code",null,"config = { timeout: 60000 }"),(0,a.kt)("br",null),(0,a.kt)("span",{style:{textTransform:"uppercase",fontSize:"smaller",fontWeight:"bold",opacity:"0.6"}},"Override"),(0,a.kt)("br",null),(0,a.kt)("code",null,"{",(0,a.kt)("inlineCode",{parentName:"td"},"test.setTimeout(120000)"),"}`"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",f({parentName:"tr"},{align:"left"}),"Expect timeout"),(0,a.kt)("td",f({parentName:"tr"},{align:"left"}),"5000 ms"),(0,a.kt)("td",f({parentName:"tr"},{align:"left"}),"Timeout for each assertion:",(0,a.kt)("br",null),(0,a.kt)("span",{style:{textTransform:"uppercase",fontSize:"smaller",fontWeight:"bold",opacity:"0.6"}},"Set default"),(0,a.kt)("br",null),(0,a.kt)("code",null,"config = { expect: { timeout: 10000 } }"),(0,a.kt)("br",null),(0,a.kt)("span",{style:{textTransform:"uppercase",fontSize:"smaller",fontWeight:"bold",opacity:"0.6"}},"Override"),(0,a.kt)("br",null),(0,a.kt)("code",null,"{",(0,a.kt)("inlineCode",{parentName:"td"},"expect(locator).toBeVisible({ timeout: 10000 })"),"}"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",f({parentName:"tr"},{align:"left"}),"Action timeout"),(0,a.kt)("td",f({parentName:"tr"},{align:"left"}),"no timeout"),(0,a.kt)("td",f({parentName:"tr"},{align:"left"}),"Timeout for each action:",(0,a.kt)("br",null),(0,a.kt)("span",{style:{textTransform:"uppercase",fontSize:"smaller",fontWeight:"bold",opacity:"0.6"}},"Set default"),(0,a.kt)("br",null),(0,a.kt)("code",null,"config = { use: { actionTimeout: 10000 } }"),(0,a.kt)("br",null),(0,a.kt)("span",{style:{textTransform:"uppercase",fontSize:"smaller",fontWeight:"bold",opacity:"0.6"}},"Override"),(0,a.kt)("br",null),(0,a.kt)("code",null,"{",(0,a.kt)("inlineCode",{parentName:"td"},"locator.click({ timeout: 10000 })"),"}"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",f({parentName:"tr"},{align:"left"}),"Navigation timeout"),(0,a.kt)("td",f({parentName:"tr"},{align:"left"}),"no timeout"),(0,a.kt)("td",f({parentName:"tr"},{align:"left"}),"Timeout for each navigation action:",(0,a.kt)("br",null),(0,a.kt)("span",{style:{textTransform:"uppercase",fontSize:"smaller",fontWeight:"bold",opacity:"0.6"}},"Set default"),(0,a.kt)("br",null),(0,a.kt)("code",null,"config = { use: { navigationTimeout: 30000 } }"),(0,a.kt)("br",null),(0,a.kt)("span",{style:{textTransform:"uppercase",fontSize:"smaller",fontWeight:"bold",opacity:"0.6"}},"Override"),(0,a.kt)("br",null),(0,a.kt)("code",null,"{",(0,a.kt)("inlineCode",{parentName:"td"},"page.goto('/', { timeout: 30000 })"),"}"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",f({parentName:"tr"},{align:"left"}),"Global timeout"),(0,a.kt)("td",f({parentName:"tr"},{align:"left"}),"no timeout"),(0,a.kt)("td",f({parentName:"tr"},{align:"left"}),"Global timeout for the whole test run:",(0,a.kt)("br",null),(0,a.kt)("span",{style:{textTransform:"uppercase",fontSize:"smaller",fontWeight:"bold",opacity:"0.6"}},"Set in config"),(0,a.kt)("br",null),(0,a.kt)("code",null,"{",(0,a.kt)("inlineCode",{parentName:"td"},"config = { globalTimeout: 60*60*1000 }"),"}"),(0,a.kt)("br",null))))),(0,a.kt)("h2",f({},{id:"test-timeout"}),"Test timeout"),(0,a.kt)("p",null,"Playwright Test enforces a timeout for each test, 30 seconds by default. Time spent by the test function, fixtures, ",(0,a.kt)("inlineCode",{parentName:"p"},"beforeEach")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"afterEach")," hooks is included in the test timeout."),(0,a.kt)("p",null,"Timed out test produces the following error:"),(0,a.kt)("pre",null,(0,a.kt)("code",f({parentName:"pre"},{}),"example.spec.ts:3:1 \u203a basic test ===========================\n\nTimeout of 30000ms exceeded.\n")),(0,a.kt)("p",null,"The same test timeout also applies to ",(0,a.kt)("inlineCode",{parentName:"p"},"beforeAll")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"afterAll")," hooks."),(0,a.kt)("h3",f({},{id:"set-test-timeout-in-the-config"}),"Set test timeout in the config"),(0,a.kt)(o.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,a.kt)(r.Z,{value:"ts",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",f({parentName:"pre"},{className:"language-ts"}),"// playwright.config.ts\nimport { PlaywrightTestConfig } from '@playwright/test';\n\nconst config: PlaywrightTestConfig = {\n  timeout: 5 * 60 * 1000,\n};\nexport default config;\n"))),(0,a.kt)(r.Z,{value:"js",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",f({parentName:"pre"},{className:"language-js"}),"// playwright.config.js\n// @ts-check\n\n/** @type {import('@playwright/test').PlaywrightTestConfig} */\nconst config = {\n  timeout: 5 * 60 * 1000,\n};\n\nmodule.exports = config;\n")))),(0,a.kt)("p",null,"API reference: ",(0,a.kt)("a",f({parentName:"p"},{href:"/docs/next/api/class-testconfig#test-config-timeout"}),"testConfig.timeout"),"."),(0,a.kt)("h3",f({},{id:"set-timeout-for-a-single-test"}),"Set timeout for a single test"),(0,a.kt)(o.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,a.kt)(r.Z,{value:"ts",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",f({parentName:"pre"},{className:"language-ts"}),"import { test, expect } from '@playwright/test';\n\ntest('slow test', async ({ page }) => {\n  test.slow(); // Easy way to triple the default timeout\n  // ...\n});\n\ntest('very slow test', async ({ page }) => {\n  test.setTimeout(120000);\n  // ...\n});\n"))),(0,a.kt)(r.Z,{value:"js",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",f({parentName:"pre"},{className:"language-js"}),"const { test, expect } = require('@playwright/test');\n\ntest('slow test', async ({ page }) => {\n  test.slow(); // Easy way to triple the default timeout\n  // ...\n});\n\ntest('very slow test', async ({ page }) => {\n  test.setTimeout(120000);\n  // ...\n});\n")))),(0,a.kt)("p",null,"API reference: ",(0,a.kt)("a",f({parentName:"p"},{href:"/docs/next/api/class-test#test-set-timeout"}),"test.setTimeout(timeout)")," and ",(0,a.kt)("a",f({parentName:"p"},{href:"/docs/next/api/class-test#test-slow"}),"test.slow([condition, description])"),"."),(0,a.kt)("h3",f({},{id:"change-timeout-from-a-hook-or-fixture"}),"Change timeout from a hook or fixture"),(0,a.kt)(o.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,a.kt)(r.Z,{value:"ts",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",f({parentName:"pre"},{className:"language-ts"}),"import { test, expect } from '@playwright/test';\n\ntest.beforeEach(async ({ page }, testInfo) => {\n  // Extend timeout for all tests running this hook by 30 seconds.\n  testInfo.setTimeout(testInfo.timeout + 30000);\n});\n"))),(0,a.kt)(r.Z,{value:"js",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",f({parentName:"pre"},{className:"language-js"}),"const { test, expect } = require('@playwright/test');\n\ntest.beforeEach(async ({ page }, testInfo) => {\n  // Extend timeout for all tests running this hook by 30 seconds.\n  testInfo.setTimeout(testInfo.timeout + 30000);\n});\n")))),(0,a.kt)("p",null,"API reference: ",(0,a.kt)("a",f({parentName:"p"},{href:"/docs/next/api/class-testinfo#test-info-set-timeout"}),"testInfo.setTimeout(timeout)"),"."),(0,a.kt)("h2",f({},{id:"expect-timeout"}),"Expect timeout"),(0,a.kt)("p",null,"Web-first assertions like ",(0,a.kt)("inlineCode",{parentName:"p"},"expect(locator).toHaveText()")," have a separate timeout, 5 seconds by default. Assertion timeout is unrelated to the test timeout. It produces the following error:"),(0,a.kt)("pre",null,(0,a.kt)("code",f({parentName:"pre"},{}),'example.spec.ts:3:1 \u203a basic test ===========================\n\nError: expect(received).toHaveText(expected)\n\nExpected string: "my text"\nReceived string: ""\nCall log:\n  - expect.toHaveText with timeout 5000ms\n  - waiting for selector "button"\n')),(0,a.kt)("h3",f({},{id:"set-expect-timeout-in-the-config"}),"Set expect timeout in the config"),(0,a.kt)(o.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,a.kt)(r.Z,{value:"ts",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",f({parentName:"pre"},{className:"language-ts"}),"// playwright.config.ts\nimport { PlaywrightTestConfig } from '@playwright/test';\n\nconst config: PlaywrightTestConfig = {\n  expect: {\n    timeout: 10 * 1000,\n  },\n};\nexport default config;\n"))),(0,a.kt)(r.Z,{value:"js",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",f({parentName:"pre"},{className:"language-js"}),"// playwright.config.js\n// @ts-check\n\n/** @type {import('@playwright/test').PlaywrightTestConfig} */\nconst config = {\n  expect: {\n    timeout: 10 * 1000,\n  },\n};\n\nmodule.exports = config;\n")))),(0,a.kt)("p",null,"API reference: ",(0,a.kt)("a",f({parentName:"p"},{href:"/docs/next/api/class-testconfig#test-config-expect"}),"testConfig.expect"),"."),(0,a.kt)("h3",f({},{id:"set-timeout-for-a-single-assertion"}),"Set timeout for a single assertion"),(0,a.kt)(o.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,a.kt)(r.Z,{value:"ts",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",f({parentName:"pre"},{className:"language-ts"}),"import { test, expect } from '@playwright/test';\n\ntest('basic test', async ({ page }) => {\n  await expect(page.locator('button')).toHaveText('Sign in', { timeout: 10000 });\n});\n"))),(0,a.kt)(r.Z,{value:"js",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",f({parentName:"pre"},{className:"language-js"}),"const { test, expect } = require('@playwright/test');\n\ntest('basic test', async ({ page }) => {\n  await expect(page.locator('button')).toHaveText('Sign in', { timeout: 10000 });\n});\n")))),(0,a.kt)("h2",f({},{id:"action-and-navigation-timeouts"}),"Action and navigation timeouts"),(0,a.kt)("p",null,"Test usually performs some actions by calling Playwright APIs, for example ",(0,a.kt)("inlineCode",{parentName:"p"},"locator.click()"),". These actions do not have a timeout by default, but you can set one. Action that timed out produces the following error:"),(0,a.kt)("pre",null,(0,a.kt)("code",f({parentName:"pre"},{}),'example.spec.ts:3:1 \u203a basic test ===========================\n\nlocator.click: Timeout 1000ms exceeded.\n=========================== logs ===========================\nwaiting for selector "button"\n============================================================\n')),(0,a.kt)("p",null,"Playwright also allows to set a separate timeout for navigation actions like ",(0,a.kt)("inlineCode",{parentName:"p"},"page.goto()")," because loading a page is usually slower."),(0,a.kt)("h3",f({},{id:"set-action-and-navigation-timeouts-in-the-config"}),"Set action and navigation timeouts in the config"),(0,a.kt)(o.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,a.kt)(r.Z,{value:"ts",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",f({parentName:"pre"},{className:"language-ts"}),"// playwright.config.ts\nimport { PlaywrightTestConfig } from '@playwright/test';\n\nconst config: PlaywrightTestConfig = {\n  use: {\n    actionTimeout: 10 * 1000,\n    navigationTimeout: 30 * 1000,\n  },\n};\nexport default config;\n"))),(0,a.kt)(r.Z,{value:"js",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",f({parentName:"pre"},{className:"language-js"}),"// playwright.config.js\n// @ts-check\n\n/** @type {import('@playwright/test').PlaywrightTestConfig} */\nconst config = {\n  use: {\n    actionTimeout: 10 * 1000,\n    navigationTimeout: 30 * 1000,\n  },\n};\n\nmodule.exports = config;\n")))),(0,a.kt)("p",null,"API reference: ",(0,a.kt)("a",f({parentName:"p"},{href:"/docs/next/api/class-testoptions#test-options-action-timeout"}),"testOptions.actionTimeout")," and ",(0,a.kt)("a",f({parentName:"p"},{href:"/docs/next/api/class-testoptions#test-options-navigation-timeout"}),"testOptions.navigationTimeout"),"."),(0,a.kt)("h3",f({},{id:"set-timeout-for-a-single-action"}),"Set timeout for a single action"),(0,a.kt)(o.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,a.kt)(r.Z,{value:"ts",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",f({parentName:"pre"},{className:"language-ts"}),"import { test, expect } from '@playwright/test';\n\ntest('basic test', async ({ page }) => {\n  await page.goto('https://playwright.dev', { timeout: 30000 });\n  await page.locator('text=Get Started').click({ timeout: 10000 });\n});\n"))),(0,a.kt)(r.Z,{value:"js",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",f({parentName:"pre"},{className:"language-js"}),"const { test, expect } = require('@playwright/test');\n\ntest('basic test', async ({ page }) => {\n  await page.goto('https://playwright.dev', { timeout: 30000 });\n  await page.locator('text=Get Started').click({ timeout: 10000 });\n});\n")))),(0,a.kt)("h2",f({},{id:"global-timeout"}),"Global timeout"),(0,a.kt)("p",null,"Playwright Test supports a timeout for the whole test run. This prevents excess resource usage when everything went wrong. There is no default global timeout, but you can set a reasonable one in the config, for example one hour. Global timeout produces the following error:"),(0,a.kt)("pre",null,(0,a.kt)("code",f({parentName:"pre"},{}),"Running 1000 tests using 10 workers\n\n  514 skipped\n  486 passed\n  Timed out waiting 3600s for the entire test run\n")),(0,a.kt)("p",null,"You can set global timeout in the config."),(0,a.kt)(o.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,a.kt)(r.Z,{value:"ts",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",f({parentName:"pre"},{className:"language-ts"}),"// playwright.config.ts\nimport { PlaywrightTestConfig } from '@playwright/test';\n\nconst config: PlaywrightTestConfig = {\n  globalTimeout: 60 * 60 * 1000,\n};\nexport default config;\n"))),(0,a.kt)(r.Z,{value:"js",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",f({parentName:"pre"},{className:"language-js"}),"// playwright.config.js\n// @ts-check\n\n/** @type {import('@playwright/test').PlaywrightTestConfig} */\nconst config = {\n  globalTimeout: 60 * 60 * 1000,\n};\n\nmodule.exports = config;\n")))),(0,a.kt)("p",null,"API reference: ",(0,a.kt)("a",f({parentName:"p"},{href:"/docs/next/api/class-testconfig#test-config-global-timeout"}),"testConfig.globalTimeout"),"."))}h.isMDXComponent=!0}}]);