"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[60620],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return d}});var n=a(67294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,r=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),g=p(a),d=s,m=g["".concat(l,".").concat(d)]||g[d]||c[d]||r;return a?n.createElement(m,i(i({ref:t},u),{},{components:a})):n.createElement(m,i({ref:t},u))}));function d(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=a.length,i=new Array(r);i[0]=g;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:s,i[1]=o;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},73811:function(e,t,a){a.d(t,{Z:function(){return p}});var n=a(67294),s=Object.defineProperty,r=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,l=(e,t,a)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;function p({children:e,hidden:t,className:a}){return n.createElement("div",((e,t)=>{for(var a in t||(t={}))i.call(t,a)&&l(e,a,t[a]);if(r)for(var a of r(t))o.call(t,a)&&l(e,a,t[a]);return e})({role:"tabpanel"},{hidden:t,className:a}),e)}},73824:function(e,t,a){a.d(t,{Z:function(){return b}});var n=a(67294),s=a(54939),r=a(39670),i=a(86010),o="tabItem_LplD",l=Object.defineProperty,p=Object.defineProperties,u=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,m=(e,t,a)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,h=(e,t)=>{for(var a in t||(t={}))g.call(t,a)&&m(e,a,t[a]);if(c)for(var a of c(t))d.call(t,a)&&m(e,a,t[a]);return e};function f(e){var t,a,s;const{lazy:l,block:c,defaultValue:g,values:d,groupId:m,className:f}=e,b=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),w=null!=d?d:b.map((({props:{value:e,label:t,attributes:a}})=>({value:e,label:t,attributes:a}))),v=(0,r.lx)(w,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===g?g:null!=(s=null!=g?g:null==(t=b.find((e=>e.props.default)))?void 0:t.props.value)?s:null==(a=b[0])?void 0:a.props.value;if(null!==y&&!w.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${w.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:S}=(0,r.UB)(),[x,j]=(0,n.useState)(y),T=[],{blockElementScrollPositionUntilNextRender:N}=(0,r.o5)();if(null!=m){const e=k[m];null!=e&&e!==x&&w.some((t=>t.value===e))&&j(e)}const P=e=>{const t=e.currentTarget,a=T.indexOf(t),n=w[a].value;n!==x&&(N(t),j(n),null!=m&&S(m,n))},O=e=>{let t=null;switch(e.key){case"ArrowRight":{const a=T.indexOf(e.currentTarget)+1;t=T[a]||T[0];break}case"ArrowLeft":{const a=T.indexOf(e.currentTarget)-1;t=T[a]||T[T.length-1];break}}null==t||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":c},f)},w.map((({value:e,label:t,attributes:a})=>{return n.createElement("li",(s=h({role:"tab",tabIndex:x===e?0:-1,"aria-selected":x===e,key:e,ref:e=>T.push(e),onKeyDown:O,onFocus:P,onClick:P},a),r={className:(0,i.Z)("tabs__item",o,null==a?void 0:a.className,{"tabs__item--active":x===e})},p(s,u(r))),null!=t?t:e);var s,r}))),l?(0,n.cloneElement)(b.filter((e=>e.props.value===x))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},b.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==x})))))}function b(e){const t=(0,s.Z)();return n.createElement(f,h({key:String(t)},e))}},93985:function(e,t,a){a.r(t),a.d(t,{assets:function(){return b},contentTitle:function(){return h},default:function(){return y},frontMatter:function(){return m},metadata:function(){return f},toc:function(){return w}});var n=a(3905),s=a(73824),r=a(73811),i=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,g=(e,t,a)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,d=(e,t)=>{for(var a in t||(t={}))u.call(t,a)&&g(e,a,t[a]);if(p)for(var a of p(t))c.call(t,a)&&g(e,a,t[a]);return e};const m={id:"test-auth",title:"Authentication"},h=void 0,f={unversionedId:"test-auth",id:"version-1.20/test-auth",title:"Authentication",description:"Tests written with Playwright execute in isolated clean-slate environments called browser contexts. Each test gets a brand new page created in a brand new context. This isolation model improves reproducibility and prevents cascading test failures.",source:"@site/versioned_docs/version-1.20/test-auth.mdx",sourceDirName:".",slug:"/test-auth",permalink:"/docs/1.20/test-auth",tags:[],version:"1.20",frontMatter:{id:"test-auth",title:"Authentication"},sidebar:"docs",previous:{title:"Assertions",permalink:"/docs/1.20/test-assertions"},next:{title:"Command line",permalink:"/docs/1.20/test-cli"}},b={},w=[{value:"Sign in with beforeEach",id:"sign-in-with-beforeeach",level:2},{value:"Reuse signed in state",id:"reuse-signed-in-state",level:2},{value:"Sign in via API request",id:"sign-in-via-api-request",level:3},{value:"Multiple signed in roles",id:"multiple-signed-in-roles",level:2},{value:"Reuse the signed in page in multiple tests",id:"reuse-the-signed-in-page-in-multiple-tests",level:2}],v={toc:w};function y(e){var t,a=e,{components:i}=a,g=((e,t)=>{var a={};for(var n in e)u.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&p)for(var n of p(e))t.indexOf(n)<0&&c.call(e,n)&&(a[n]=e[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(t=d(d({},v),g),o(t,l({components:i,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"Tests written with Playwright execute in isolated clean-slate environments called ",(0,n.kt)("a",d({parentName:"p"},{href:"/docs/1.20/browser-contexts"}),"browser contexts"),". Each test gets a brand new page created in a brand new context. This isolation model improves reproducibility and prevents cascading test failures."),(0,n.kt)("p",null,"Below are the typical strategies for implementing the signed-in scenarios."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"#sign-in-with-beforeeach"}),"Sign in with beforeEach")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"#reuse-signed-in-state"}),"Reuse signed in state")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"#multiple-signed-in-roles"}),"Multiple signed in roles")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"#reuse-the-signed-in-page-in-multiple-tests"}),"Reuse the signed in page in multiple tests"))),(0,n.kt)("h2",d({},{id:"sign-in-with-beforeeach"}),"Sign in with beforeEach"),(0,n.kt)("p",null,"This is the simplest way where each test signs in inside the ",(0,n.kt)("inlineCode",{parentName:"p"},"beforeEach")," hook. It also is the least efficient one in case the log in process has high latencies."),(0,n.kt)(s.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,n.kt)(r.Z,{value:"ts",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-ts"}),"import { test } from '@playwright/test';\n\ntest.beforeEach(async ({ page }) => {\n  // Runs before each test and signs in each page.\n  await page.goto('https://github.com/login');\n  await page.click('text=Login');\n  await page.fill('input[name=\"login\"]', 'username');\n  await page.fill('input[name=\"password\"]', 'password');\n  await page.click('text=Submit');\n});\n\ntest('first', async ({ page }) => {\n  // page is signed in.\n});\n\ntest('second', async ({ page }) => {\n  // page is signed in.\n});\n"))),(0,n.kt)(r.Z,{value:"js",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-js"}),"const { test } = require('@playwright/test');\n\ntest.beforeEach(async ({ page }) => {\n  // Runs before each test and signs in each page.\n  await page.goto('https://github.com/login');\n  await page.click('text=Login');\n  await page.fill('input[name=\"login\"]', 'username');\n  await page.fill('input[name=\"password\"]', 'password');\n  await page.click('text=Submit');\n});\n\ntest('first', async ({ page }) => {\n  // page is signed in.\n});\n\ntest('second', async ({ page }) => {\n  // page is signed in.\n});\n")))),(0,n.kt)("p",null,"Redoing login for every test can slow down test execution. To mitigate that, reuse existing authentication state instead."),(0,n.kt)("h2",d({},{id:"reuse-signed-in-state"}),"Reuse signed in state"),(0,n.kt)("p",null,"Playwright provides a way to reuse the signed-in state in the tests. That way you can log in only once and then skip the log in step for all of the tests."),(0,n.kt)("p",null,"Create a new global setup script:"),(0,n.kt)(s.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,n.kt)(r.Z,{value:"ts",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-ts"}),"// global-setup.ts\nimport { chromium, FullConfig } from '@playwright/test';\n\nasync function globalSetup(config: FullConfig) {\n  const browser = await chromium.launch();\n  const page = await browser.newPage();\n  await page.goto('https://github.com/login');\n  await page.fill('input[name=\"user\"]', 'user');\n  await page.fill('input[name=\"password\"]', 'password');\n  await page.click('text=Sign in');\n  // Save signed-in state to 'storageState.json'.\n  await page.context().storageState({ path: 'storageState.json' });\n  await browser.close();\n}\n\nexport default globalSetup;\n"))),(0,n.kt)(r.Z,{value:"js",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-js"}),"// global-setup.js\nconst { chromium } = require('@playwright/test');\n\nmodule.exports = async config => {\n  const browser = await chromium.launch();\n  const page = await browser.newPage();\n  await page.goto('https://github.com/login');\n  await page.fill('input[name=\"user\"]', 'user');\n  await page.fill('input[name=\"password\"]', 'password');\n  await page.click('text=Sign in');\n  // Save signed-in state to 'storageState.json'.\n  await page.context().storageState({ path: 'storageState.json' });\n  await browser.close();\n};\n")))),(0,n.kt)("p",null,"Register global setup script in the Playwright configuration file:"),(0,n.kt)(s.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,n.kt)(r.Z,{value:"ts",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-ts"}),"// playwright.config.ts\nimport { PlaywrightTestConfig } from '@playwright/test';\n\nconst config: PlaywrightTestConfig = {\n  globalSetup: require.resolve('./global-setup'),\n  use: {\n    // Tell all tests to load signed-in state from 'storageState.json'.\n    storageState: 'storageState.json'\n  }\n};\nexport default config;\n"))),(0,n.kt)(r.Z,{value:"js",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-js"}),"// playwright.config.js\n// @ts-check\n/** @type {import('@playwright/test').PlaywrightTestConfig} */\nconst config = {\n  globalSetup: require.resolve('./global-setup'),\n  use: {\n    // Tell all tests to load signed-in state from 'storageState.json'.\n    storageState: 'storageState.json'\n  }\n};\nmodule.exports = config;\n")))),(0,n.kt)("p",null,"Tests start already authenticated because we specify ",(0,n.kt)("inlineCode",{parentName:"p"},"storageState")," that was populated by global setup."),(0,n.kt)(s.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,n.kt)(r.Z,{value:"ts",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-ts"}),"import { test } from '@playwright/test';\n\ntest('test', async ({ page }) => {\n  // page is signed in.\n});\n"))),(0,n.kt)(r.Z,{value:"js",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-js"}),"const { test } = require('@playwright/test');\n\ntest('test', async ({ page }) => {\n  // page is signed in.\n});\n")))),(0,n.kt)("div",d({},{className:"admonition admonition-note alert alert--secondary"}),(0,n.kt)("div",d({parentName:"div"},{className:"admonition-heading"}),(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",d({parentName:"h5"},{className:"admonition-icon"}),(0,n.kt)("svg",d({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),(0,n.kt)("path",d({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),(0,n.kt)("div",d({parentName:"div"},{className:"admonition-content"}),(0,n.kt)("p",{parentName:"div"},"If you can log in once and commit the ",(0,n.kt)("inlineCode",{parentName:"p"},"storageState.json")," into the repository, you won't need the global setup at all, just specify the ",(0,n.kt)("inlineCode",{parentName:"p"},"storageState.json")," in Playwright Config as above and it'll be picked up."))),(0,n.kt)("h3",d({},{id:"sign-in-via-api-request"}),"Sign in via API request"),(0,n.kt)("p",null,"If your web application supports signing in via API, you can use ",(0,n.kt)("a",d({parentName:"p"},{href:"/docs/1.20/api/class-apirequestcontext",title:"APIRequestContext"}),"APIRequestContext")," to simplify sign in flow. Global setup script from the example above would change like this:"),(0,n.kt)(s.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,n.kt)(r.Z,{value:"ts",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-ts"}),"// global-setup.ts\nimport { request } from '@playwright/test';\n\nasync function globalSetup() {\n  const requestContext = await request.newContext();\n  await requestContext.post('https://github.com/login', {\n    form: {\n      'user': 'user',\n      'password': 'password'\n    }\n  });\n  // Save signed-in state to 'storageState.json'.\n  await requestContext.storageState({ path: 'storageState.json' });\n  await requestContext.dispose();\n}\n\nexport default globalSetup;\n"))),(0,n.kt)(r.Z,{value:"js",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-js"}),"// global-setup.js\nconst { request } = require('@playwright/test');\n\nmodule.exports = async () => {\n  const requestContext = await request.newContext();\n  await requestContext.post('https://github.com/login', {\n    form: {\n      'user': 'user',\n      'password': 'password'\n    }\n  });\n  // Save signed-in state to 'storageState.json'.\n  await requestContext.storageState({ path: 'storageState.json' });\n  await requestContext.dispose();\n}\n")))),(0,n.kt)("h2",d({},{id:"multiple-signed-in-roles"}),"Multiple signed in roles"),(0,n.kt)("p",null,"Sometimes you have more than one signed-in user in your end to end tests. You can achieve that via logging in for these users multiple times in globalSetup and saving that state into different files."),(0,n.kt)(s.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,n.kt)(r.Z,{value:"ts",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-ts"}),"// global-setup.ts\nimport { chromium, FullConfig } from '@playwright/test';\n\nasync function globalSetup(config: FullConfig) {\n  const browser = await chromium.launch();\n  const adminPage = await browser.newPage();\n  // ... log in\n  await adminPage.context().storageState({ path: 'adminStorageState.json' });\n\n  const userPage = await browser.newPage();\n  // ... log in\n  await userPage.context().storageState({ path: 'userStorageState.json' });\n  await browser.close();\n}\n\nexport default globalSetup;\n"))),(0,n.kt)(r.Z,{value:"js",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-js"}),"// global-setup.js\nconst { chromium } = require('@playwright/test');\n\nmodule.exports = async config => {\n  const browser = await chromium.launch();\n  const adminPage = await browser.newPage();\n  // ... log in\n  await adminPage.context().storageState({ path: 'adminStorageState.json' });\n\n  const userPage = await browser.newPage();\n  // ... log in\n  await userPage.context().storageState({ path: 'userStorageState.json' });\n  await browser.close();\n};\n")))),(0,n.kt)("p",null,"After that you can specify the user to use for each test file or each test group:"),(0,n.kt)(s.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,n.kt)(r.Z,{value:"ts",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-ts"}),"import { test } from '@playwright/test';\n\ntest.use({ storageState: 'adminStorageState.json' });\n\ntest('admin test', async ({ page }) => {\n  // page is signed in as admin.\n});\n\ntest.describe(() => {\n  test.use({ storageState: 'userStorageState.json' });\n\n  test('user test', async ({ page }) => {\n    // page is signed in as a user.\n  });\n});\n"))),(0,n.kt)(r.Z,{value:"js",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-js"}),"const { test } = require('@playwright/test');\n\ntest.use({ storageState: 'adminStorageState.json' });\n\ntest('admin test', async ({ page }) => {\n  // page is signed in as amin.\n});\n\ntest.describe(() => {\n  test.use({ storageState: 'userStorageState.json' });\n\n  test('user test', async ({ page }) => {\n    // page is signed in as a user.\n  });\n});\n")))),(0,n.kt)("h2",d({},{id:"reuse-the-signed-in-page-in-multiple-tests"}),"Reuse the signed in page in multiple tests"),(0,n.kt)("p",null,"Although discouraged, sometimes it is necessary to sacrifice the isolation and run a number of tests in the same page. In that case, you can log into that page once in ",(0,n.kt)("inlineCode",{parentName:"p"},"beforeAll")," and then use that same page in all the tests. Note that you need to run these tests serially using ",(0,n.kt)("inlineCode",{parentName:"p"},"test.describe.serial")," in order to achieve that:"),(0,n.kt)(s.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,n.kt)(r.Z,{value:"ts",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-ts"}),"// example.spec.ts\n\nimport { test, Page } from '@playwright/test';\n\ntest.describe.configure({ mode: 'serial' });\n\nlet page: Page;\n\ntest.beforeAll(async ({ browser }) => {\n  // Create page once and sign in.\n  page = await browser.newPage();\n  await page.goto('https://github.com/login');\n  await page.fill('input[name=\"user\"]', 'user');\n  await page.fill('input[name=\"password\"]', 'password');\n  await page.click('text=Sign in');\n});\n\ntest.afterAll(async () => {\n  await page.close();\n});\n\ntest('first test', async () => {\n  // page is signed in.\n});\n\ntest('second test', async () => {\n  // page is signed in.\n});\n"))),(0,n.kt)(r.Z,{value:"js",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-js"}),"// example.spec.js\n// @ts-check\n\nconst { test } = require('@playwright/test');\n\ntest.describe.configure({ mode: 'serial' });\n\n/** @type {import('@playwright/test').Page} */\nlet page;\n\ntest.beforeAll(async ({ browser }) => {\n  // Create page yourself and sign in.\n  page = await browser.newPage();\n  await page.goto('https://github.com/login');\n  await page.fill('input[name=\"user\"]', 'user');\n  await page.fill('input[name=\"password\"]', 'password');\n  await page.click('text=Sign in');\n});\n\ntest.afterAll(async () => {\n  await page.close();\n});\n\ntest('first test', async () => {\n  // page is signed in.\n});\n\ntest('second test', async () => {\n  // page is signed in.\n});\n")))),(0,n.kt)("div",d({},{className:"admonition admonition-note alert alert--secondary"}),(0,n.kt)("div",d({parentName:"div"},{className:"admonition-heading"}),(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",d({parentName:"h5"},{className:"admonition-icon"}),(0,n.kt)("svg",d({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),(0,n.kt)("path",d({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),(0,n.kt)("div",d({parentName:"div"},{className:"admonition-content"}),(0,n.kt)("p",{parentName:"div"},"You can also use ",(0,n.kt)("inlineCode",{parentName:"p"},"storageState")," property when you are creating the ",(0,n.kt)("a",d({parentName:"p"},{href:"/docs/1.20/api/class-browser#browser-new-page"}),"browser.newPage([options])")," in order to pass it an existing logged in state."))))}y.isMDXComponent=!0}}]);