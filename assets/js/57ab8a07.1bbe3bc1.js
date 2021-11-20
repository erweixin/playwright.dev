"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[90478],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return d}});var n=a(67294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),g=p(a),d=s,m=g["".concat(l,".").concat(d)]||g[d]||c[d]||i;return a?n.createElement(m,r(r({ref:t},u),{},{components:a})):n.createElement(m,r({ref:t},u))}));function d(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=a.length,r=new Array(i);r[0]=g;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:s,r[1]=o;for(var p=2;p<i;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},58215:function(e,t,a){var n=a(67294);t.Z=function(e){var t=e.children,a=e.hidden,s=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:s},t)}},55064:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(67294),s=a(79443);var i=function(){var e=(0,n.useContext)(s.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},r=a(86010),o="tabItem_1uMI",l="tabItemActive_2DSg";var p=37,u=39;var c=function(e){var t=e.lazy,a=e.block,s=e.defaultValue,c=e.values,g=e.groupId,d=e.className,m=i(),h=m.tabGroupChoices,f=m.setTabGroupChoices,w=(0,n.useState)(s),v=w[0],b=w[1],y=n.Children.toArray(e.children),k=[];if(null!=g){var x=h[g];null!=x&&x!==v&&c.some((function(e){return e.value===x}))&&b(x)}var S=function(e){var t=e.currentTarget,a=k.indexOf(t),n=c[a].value;b(n),null!=g&&(f(g,n),setTimeout((function(){var e,a,n,s,i,r,o,p;(e=t.getBoundingClientRect(),a=e.top,n=e.left,s=e.bottom,i=e.right,r=window,o=r.innerHeight,p=r.innerWidth,a>=0&&i<=p&&s<=o&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((function(){return t.classList.remove(l)}),2e3))}),150))},N=function(e){var t,a;switch(e.keyCode){case u:var n=k.indexOf(e.target)+1;a=k[n]||k[0];break;case p:var s=k.indexOf(e.target)-1;a=k[s]||k[k.length-1]}null==(t=a)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},d)},c.map((function(e){var t=e.value,a=e.label;return n.createElement("li",{role:"tab",tabIndex:v===t?0:-1,"aria-selected":v===t,className:(0,r.Z)("tabs__item",o,{"tabs__item--active":v===t}),key:t,ref:function(e){return k.push(e)},onKeyDown:N,onFocus:S,onClick:S},a)}))),t?(0,n.cloneElement)(y.filter((function(e){return e.props.value===v}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==v})}))))}},79443:function(e,t,a){var n=(0,a(67294).createContext)(void 0);t.Z=n},65103:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var n=a(22122),s=a(19756),i=(a(67294),a(3905)),r=a(55064),o=a(58215),l={id:"test-auth",title:"Authentication"},p=void 0,u={unversionedId:"test-auth",id:"version-1.16/test-auth",isDocsHomePage:!1,title:"Authentication",description:"Tests written with Playwright execute in isolated clean-slate environments called browser contexts. Each test gets a brand new page created in a brand new context. This isolation model improves reproducibility and prevents cascading test failures.",source:"@site/versioned_docs/version-1.16/test-auth.mdx",sourceDirName:".",slug:"/test-auth",permalink:"/docs/1.16/test-auth",version:"1.16",frontMatter:{id:"test-auth",title:"Authentication"},sidebar:"version-1.16/docs",previous:{title:"Assertions",permalink:"/docs/1.16/test-assertions"},next:{title:"Command line",permalink:"/docs/1.16/test-cli"}},c=[{value:"Sign in with beforeEach",id:"sign-in-with-beforeeach",children:[]},{value:"Reuse signed in state",id:"reuse-signed-in-state",children:[{value:"Sign in via API request",id:"sign-in-via-api-request",children:[]}]},{value:"Multiple signed in roles",id:"multiple-signed-in-roles",children:[]},{value:"Reuse the signed in page in multiple tests",id:"reuse-the-signed-in-page-in-multiple-tests",children:[]}],g={toc:c};function d(e){var t=e.components,a=(0,s.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Tests written with Playwright execute in isolated clean-slate environments called ",(0,i.kt)("a",{parentName:"p",href:"/docs/1.16/core-concepts#browser-contexts"},"browser contexts"),". Each test gets a brand new page created in a brand new context. This isolation model improves reproducibility and prevents cascading test failures."),(0,i.kt)("p",null,"Below are the typical strategies for implementing the signed-in scenarios."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#sign-in-with-beforeeach"},"Sign in with beforeEach")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#reuse-signed-in-state"},"Reuse signed in state")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#multiple-signed-in-roles"},"Multiple signed in roles")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#reuse-the-signed-in-page-in-multiple-tests"},"Reuse the signed in page in multiple tests"))),(0,i.kt)("h2",{id:"sign-in-with-beforeeach"},"Sign in with beforeEach"),(0,i.kt)("p",null,"This is the simplest way where each test signs in inside the ",(0,i.kt)("inlineCode",{parentName:"p"},"beforeEach")," hook. It also is the least efficient one in case the log in process has high latencies."),(0,i.kt)(r.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"ts",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { test } from '@playwright/test';\n\ntest.beforeEach(async ({ page }) => {\n  // Runs before each test and signs in each page.\n  await page.goto('https://github.com/login');\n  await page.click('text=Login');\n  await page.fill('input[name=\"login\"]', 'username');\n  await page.fill('input[name=\"password\"]', 'password');\n  await page.click('text=Submit');\n});\n\ntest('first', async ({ page }) => {\n  // page is signed in.\n});\n\ntest('second', async ({ page }) => {\n  // page is signed in.\n});\n"))),(0,i.kt)(o.Z,{value:"js",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const { test } = require('@playwright/test');\n\ntest.beforeEach(async ({ page }) => {\n  // Runs before each test and signs in each page.\n  await page.goto('https://github.com/login');\n  await page.click('text=Login');\n  await page.fill('input[name=\"login\"]', 'username');\n  await page.fill('input[name=\"password\"]', 'password');\n  await page.click('text=Submit');\n});\n\ntest('first', async ({ page }) => {\n  // page is signed in.\n});\n\ntest('second', async ({ page }) => {\n  // page is signed in.\n});\n")))),(0,i.kt)("p",null,"Redoing login for every test can slow down test execution. To mitigate that, reuse existing authentication state instead."),(0,i.kt)("h2",{id:"reuse-signed-in-state"},"Reuse signed in state"),(0,i.kt)("p",null,"Playwright provides a way to reuse the signed-in state in the tests. That way you can log in only once and then skip the log in step for all of the tests."),(0,i.kt)("p",null,"Create a new global setup script:"),(0,i.kt)(r.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"ts",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"// global-setup.ts\nimport { chromium, FullConfig } from '@playwright/test';\n\nasync function globalSetup(config: FullConfig) {\n  const browser = await chromium.launch();\n  const page = await browser.newPage();\n  await page.goto('https://github.com/login');\n  await page.fill('input[name=\"user\"]', 'user');\n  await page.fill('input[name=\"password\"]', 'password');\n  await page.click('text=Sign in');\n  // Save signed-in state to 'storageState.json'.\n  await page.context().storageState({ path: 'storageState.json' });\n  await browser.close();\n}\n\nexport default globalSetup;\n"))),(0,i.kt)(o.Z,{value:"js",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// global-setup.js\nconst { chromium } = require('@playwright/test');\n\nmodule.exports = async config => {\n  const browser = await chromium.launch();\n  const page = await browser.newPage();\n  await page.goto('https://github.com/login');\n  await page.fill('input[name=\"user\"]', 'user');\n  await page.fill('input[name=\"password\"]', 'password');\n  await page.click('text=Sign in');\n  // Save signed-in state to 'storageState.json'.\n  await page.context().storageState({ path: 'storageState.json' });\n  await browser.close();\n};\n")))),(0,i.kt)("p",null,"Register global setup script in the Playwright configuration file:"),(0,i.kt)(r.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"ts",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"// playwright.config.ts\nimport { PlaywrightTestConfig } from '@playwright/test';\n\nconst config: PlaywrightTestConfig = {\n  globalSetup: require.resolve('./global-setup'),\n  use: {\n    // Tell all tests to load signed-in state from 'storageState.json'.\n    storageState: 'storageState.json'\n  }\n};\nexport default config;\n"))),(0,i.kt)(o.Z,{value:"js",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// playwright.config.js\n// @ts-check\n/** @type {import('@playwright/test').PlaywrightTestConfig} */\nconst config = {\n  globalSetup: require.resolve('./global-setup'),\n  use: {\n    // Tell all tests to load signed-in state from 'storageState.json'.\n    storageState: 'storageState.json'\n  }\n};\nmodule.exports = config;\n")))),(0,i.kt)("p",null,"Tests start already authenticated because we specify ",(0,i.kt)("inlineCode",{parentName:"p"},"storageState")," that was populated by global setup."),(0,i.kt)(r.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"ts",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { test } from '@playwright/test';\n\ntest('test', async ({ page }) => {\n  // page is signed in.\n});\n"))),(0,i.kt)(o.Z,{value:"js",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const { test } = require('@playwright/test');\n\ntest('test', async ({ page }) => {\n  // page is signed in.\n});\n")))),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If you can log in once and commit the ",(0,i.kt)("inlineCode",{parentName:"p"},"storageState.json")," into the repository, you won't need the global setup at all, just specify the ",(0,i.kt)("inlineCode",{parentName:"p"},"storageState.json")," in Playwright Config as above and it'll be picked up."))),(0,i.kt)("h3",{id:"sign-in-via-api-request"},"Sign in via API request"),(0,i.kt)("p",null,"If your web application supports signing in via API, you can use ",(0,i.kt)("a",{parentName:"p",href:"/docs/1.16/api/class-apirequestcontext",title:"APIRequestContext"},"APIRequestContext")," to simplify sign in flow. Global setup script from the example above would change like this:"),(0,i.kt)(r.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"ts",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"// global-setup.ts\nimport { request } from '@playwright/test';\n\nasync function globalSetup() {\n  const requestContext = await request.newContext();\n  await requestContext.post('https://github.com/login', {\n    form: {\n      'user': 'user',\n      'password': 'password'\n    }\n  });\n  // Save signed-in state to 'storageState.json'.\n  await requestContext.storageState({ path: 'storageState.json' });\n  await requestContext.dispose();\n}\n\nexport default globalSetup;\n"))),(0,i.kt)(o.Z,{value:"js",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// global-setup.js\nconst { request } = require('@playwright/test');\n\nmodule.exports = async () => {\n  const requestContext = await request.newContext();\n  await requestContext.post('https://github.com/login', {\n    form: {\n      'user': 'user',\n      'password': 'password'\n    }\n  });\n  // Save signed-in state to 'storageState.json'.\n  await requestContext.storageState({ path: 'storageState.json' });\n  await requestContext.dispose();\n}\n\nexport default globalSetup;\n")))),(0,i.kt)("h2",{id:"multiple-signed-in-roles"},"Multiple signed in roles"),(0,i.kt)("p",null,"Sometimes you have more than one signed-in user in your end to end tests. You can achieve that via logging in for these users multiple times in globalSetup and saving that state into different files."),(0,i.kt)(r.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"ts",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"// global-setup.ts\nimport { chromium, FullConfig } from '@playwright/test';\n\nasync function globalSetup(config: FullConfig) {\n  const browser = await chromium.launch();\n  const adminPage = await browser.newPage();\n  // ... log in\n  await adminPage.context().storageState({ path: 'adminStorageState.json' });\n\n  const userPage = await browser.newPage();\n  // ... log in\n  await userPage.context().storageState({ path: 'userStorageState.json' });\n  await browser.close();\n}\n\nexport default globalSetup;\n"))),(0,i.kt)(o.Z,{value:"js",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// global-setup.js\nconst { chromium } = require('@playwright/test');\n\nmodule.exports = async config => {\n  const browser = await chromium.launch();\n  const adminPage = await browser.newPage();\n  // ... log in\n  await adminPage.context().storageState({ path: 'adminStorageState.json' });\n\n  const userPage = await browser.newPage();\n  // ... log in\n  await userPage.context().storageState({ path: 'userStorageState.json' });\n  await browser.close();\n};\n")))),(0,i.kt)("p",null,"After that you can specify the user to use for each test file or each test group:"),(0,i.kt)(r.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"ts",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { test } from '@playwright/test';\n\ntest.use({ storageState: 'adminStorageState.json' });\n\ntest('admin test', async ({ page }) => {\n  // page is signed in as admin.\n});\n\ntest.describe(() => {\n  test.use({ storageState: 'userStorageState.json' });\n\n  test('user test', async ({ page }) => {\n    // page is signed in as a user.\n  });\n});\n"))),(0,i.kt)(o.Z,{value:"js",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const { test } = require('@playwright/test');\n\ntest.use({ storageState: 'adminStorageState.json' });\n\ntest('admin test', async ({ page }) => {\n  // page is signed in as amin.\n});\n\ntest.describe(() => {\n  test.use({ storageState: 'userStorageState.json' });\n\n  test('user test', async ({ page }) => {\n    // page is signed in as a user.\n  });\n});\n")))),(0,i.kt)("h2",{id:"reuse-the-signed-in-page-in-multiple-tests"},"Reuse the signed in page in multiple tests"),(0,i.kt)("p",null,"Although discouraged, sometimes it is necessary to sacrifice the isolation and run a number of tests in the same page. In that case, you can log into that page once in ",(0,i.kt)("inlineCode",{parentName:"p"},"beforeAll")," and then use that same page in all the tests. Note that you need to run these tests serially using ",(0,i.kt)("inlineCode",{parentName:"p"},"test.describe.serial")," in order to achieve that:"),(0,i.kt)(r.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"ts",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"// example.spec.ts\n\nimport { test, Page } from '@playwright/test';\n\ntest.describe.serial('use the same page', () => {\n  let page: Page;\n\n  test.beforeAll(async ({ browser }) => {\n    // Create page once and sign in.\n    page = await browser.newPage();\n    await page.goto('https://github.com/login');\n    await page.fill('input[name=\"user\"]', 'user');\n    await page.fill('input[name=\"password\"]', 'password');\n    await page.click('text=Sign in');\n  });\n\n  test.afterAll(async () => {\n    await page.close();\n  });\n\n  test('first test', async () => {\n    // page is signed in.\n  });\n\n  test('second test', async () => {\n    // page is signed in.\n  });\n});\n"))),(0,i.kt)(o.Z,{value:"js",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// example.spec.js\n// @ts-check\n\nconst { test } = require('@playwright/test');\n\ntest.describe.serial('use the same page', () => {\n  /** @type {import('@playwright/test').Page} */\n  let page;\n\n  test.beforeAll(async ({ browser }) => {\n    // Create page yourself and sign in.\n    page = await browser.newPage();\n    await page.goto('https://github.com/login');\n    await page.fill('input[name=\"user\"]', 'user');\n    await page.fill('input[name=\"password\"]', 'password');\n    await page.click('text=Sign in');\n  });\n\n  test.afterAll(async () => {\n    await page.close();\n  });\n\n  test('first test', async () => {\n    // page is signed in.\n  });\n\n  test('second test', async () => {\n    // page is signed in.\n  });\n});\n")))),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"You can also use ",(0,i.kt)("inlineCode",{parentName:"p"},"storageState")," property when you are creating the ",(0,i.kt)("a",{parentName:"p",href:"/docs/1.16/api/class-browser#browser-new-page"},"browser.newPage([options])")," in order to pass it an existing logged in state."))))}d.isMDXComponent=!0},86010:function(e,t,a){function n(e){var t,a,s="";if("string"==typeof e||"number"==typeof e)s+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(s&&(s+=" "),s+=a);else for(t in e)e[t]&&(s&&(s+=" "),s+=t);return s}function s(){for(var e,t,a=0,s="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(s&&(s+=" "),s+=t);return s}a.d(t,{Z:function(){return s}})}}]);