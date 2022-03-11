"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[3505],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return d}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),p=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(a),d=r,v=m["".concat(i,".").concat(d)]||m[d]||u[d]||s;return a?n.createElement(v,l(l({ref:t},c),{},{components:a})):n.createElement(v,l({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,l=new Array(s);l[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<s;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},73811:function(e,t,a){a.d(t,{Z:function(){return p}});var n=a(67294),r=Object.defineProperty,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,i=(e,t,a)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;function p({children:e,hidden:t,className:a}){return n.createElement("div",((e,t)=>{for(var a in t||(t={}))l.call(t,a)&&i(e,a,t[a]);if(s)for(var a of s(t))o.call(t,a)&&i(e,a,t[a]);return e})({role:"tabpanel"},{hidden:t,className:a}),e)}},73824:function(e,t,a){a.d(t,{Z:function(){return h}});var n=a(67294),r=a(54939),s=a(5882),l=a(86010),o="tabItem_LplD",i=Object.defineProperty,p=Object.defineProperties,c=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,v=(e,t,a)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,f=(e,t)=>{for(var a in t||(t={}))m.call(t,a)&&v(e,a,t[a]);if(u)for(var a of u(t))d.call(t,a)&&v(e,a,t[a]);return e};function g(e){var t,a,r;const{lazy:i,block:u,defaultValue:m,values:d,groupId:v,className:g}=e,h=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=null!=d?d:h.map((({props:{value:e,label:t,attributes:a}})=>({value:e,label:t,attributes:a}))),y=(0,s.lx)(b,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const k=null===m?m:null!=(r=null!=m?m:null==(t=h.find((e=>e.props.default)))?void 0:t.props.value)?r:null==(a=h[0])?void 0:a.props.value;if(null!==k&&!b.some((e=>e.value===k)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${k}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:w,setTabGroupChoices:T}=(0,s.UB)(),[x,N]=(0,n.useState)(k),j=[],{blockElementScrollPositionUntilNextRender:O}=(0,s.o5)();if(null!=v){const e=w[v];null!=e&&e!==x&&b.some((t=>t.value===e))&&N(e)}const S=e=>{const t=e.currentTarget,a=j.indexOf(t),n=b[a].value;n!==x&&(O(t),N(n),null!=v&&T(v,n))},P=e=>{let t=null;switch(e.key){case"ArrowRight":{const a=j.indexOf(e.currentTarget)+1;t=j[a]||j[0];break}case"ArrowLeft":{const a=j.indexOf(e.currentTarget)-1;t=j[a]||j[j.length-1];break}}null==t||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":u},g)},b.map((({value:e,label:t,attributes:a})=>{return n.createElement("li",(r=f({role:"tab",tabIndex:x===e?0:-1,"aria-selected":x===e,key:e,ref:e=>j.push(e),onKeyDown:P,onFocus:S,onClick:S},a),s={className:(0,l.Z)("tabs__item",o,null==a?void 0:a.className,{"tabs__item--active":x===e})},p(r,c(s))),null!=t?t:e);var r,s}))),i?(0,n.cloneElement)(h.filter((e=>e.props.value===x))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},h.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==x})))))}function h(e){const t=(0,r.Z)();return n.createElement(g,f({key:String(t)},e))}},81603:function(e,t,a){a.r(t),a.d(t,{assets:function(){return h},contentTitle:function(){return f},default:function(){return k},frontMatter:function(){return v},metadata:function(){return g},toc:function(){return b}});var n=a(3905),r=a(73824),s=a(73811),l=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,m=(e,t,a)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,d=(e,t)=>{for(var a in t||(t={}))c.call(t,a)&&m(e,a,t[a]);if(p)for(var a of p(t))u.call(t,a)&&m(e,a,t[a]);return e};const v={id:"test-parameterize",title:"Parametrize tests"},f=void 0,g={unversionedId:"test-parameterize",id:"test-parameterize",title:"Parametrize tests",description:"You can either parametrize tests on a test level or on a project level.",source:"@site/docs/test-parameterize.mdx",sourceDirName:".",slug:"/test-parameterize",permalink:"/docs/next/test-parameterize",tags:[],version:"current",frontMatter:{id:"test-parameterize",title:"Parametrize tests"},sidebar:"docs",previous:{title:"Parallelism and sharding",permalink:"/docs/next/test-parallel"},next:{title:"Reporters",permalink:"/docs/next/test-reporters"}},h={},b=[{value:"Parameterized Tests",id:"parameterized-tests",level:2},{value:"Parameterized Projects",id:"parameterized-projects",level:2},{value:"Passing Environment Variables",id:"passing-environment-variables",level:2},{value:".env files",id:"env-files",level:3},{value:"Create tests via a CSV file",id:"create-tests-via-a-csv-file",level:2}],y={toc:b};function k(e){var t,a=e,{components:l}=a,m=((e,t)=>{var a={};for(var n in e)c.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&p)for(var n of p(e))t.indexOf(n)<0&&u.call(e,n)&&(a[n]=e[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(t=d(d({},y),m),o(t,i({components:l,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"You can either parametrize tests on a test level or on a project level."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"#parameterized-tests"}),"Parameterized Tests")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"#parameterized-projects"}),"Parameterized Projects")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"#passing-environment-variables"}),"Passing Environment Variables")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"#create-tests-via-a-csv-file"}),"Create tests via a CSV file"))),(0,n.kt)("h2",d({},{id:"parameterized-tests"}),"Parameterized Tests"),(0,n.kt)(r.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,n.kt)(s.Z,{value:"ts",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-ts"}),"// example.spec.ts\nconst people = ['Alice', 'Bob'];\nfor (const name of people) {\n  test(`testing with ${name}`, async () => {\n    // ...\n  });\n  // You can also do it with test.describe() or with multiple tests as long the test name is unique.\n}\n"))),(0,n.kt)(s.Z,{value:"js",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-js"}),"// example.spec.js\nconst people = ['Alice', 'Bob'];\nfor (const name of people) {\n  test(`testing with ${name}`, async () => {\n    // ...\n  });\n  // You can also do it with test.describe() or with multiple tests as long the test name is unique.\n}\n")))),(0,n.kt)("h2",d({},{id:"parameterized-projects"}),"Parameterized Projects"),(0,n.kt)("p",null,"Playwright Test supports running multiple test projects at the same time. In the following example, we'll run two projects with different options."),(0,n.kt)("p",null,"We declare the option ",(0,n.kt)("inlineCode",{parentName:"p"},"person")," and set the value in the config. The first project runs with the value ",(0,n.kt)("inlineCode",{parentName:"p"},"Alice")," and the second with the value ",(0,n.kt)("inlineCode",{parentName:"p"},"Bob"),"."),(0,n.kt)(r.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,n.kt)(s.Z,{value:"ts",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-ts"}),"// my-test.ts\nimport { test as base } from '@playwright/test';\n\nexport type TestOptions = {\n  person: string;\n};\n\nexport const test = base.extend<TestOptions>({\n  // Define an option and provide a default value.\n  // We can later override it in the config.\n  person: ['John', { option: true }],\n});\n"))),(0,n.kt)(s.Z,{value:"js",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-js"}),"// my-test.js\nconst base = require('@playwright/test');\n\nexports.test = base.test.extend({\n  // Define an option and provide a default value.\n  // We can later override it in the config.\n  person: ['John', { option: true }],\n});\n")))),(0,n.kt)("p",null,"We can use this option in the test, similarly to ",(0,n.kt)("a",d({parentName:"p"},{href:"/docs/next/test-fixtures"}),"fixtures"),"."),(0,n.kt)(r.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,n.kt)(s.Z,{value:"ts",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-ts"}),"// example.spec.ts\nimport { test } from './my-test';\n\ntest('test 1', async ({ page, person }) => {\n  await page.goto(`/index.html`);\n  await expect(page.locator('#node')).toContainText(person);\n  // ...\n});\n"))),(0,n.kt)(s.Z,{value:"js",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-js"}),"// example.spec.js\nconst { test } = require('./my-test');\n\ntest('test 1', async ({ page, person }) => {\n  await page.goto(`/index.html`);\n  await expect(page.locator('#node')).toContainText(person);\n  // ...\n});\n")))),(0,n.kt)("p",null,"Now, we can run tests in multiple configurations by using projects."),(0,n.kt)(r.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,n.kt)(s.Z,{value:"ts",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-ts"}),"// playwright.config.ts\nimport { PlaywrightTestConfig } from '@playwright/test';\nimport { TestOptions } from './my-test';\n\nconst config: PlaywrightTestConfig<TestOptions> = {\n  projects: [\n    {\n      name: 'alice',\n      use: { person: 'Alice' },\n    },\n    {\n      name: 'bob',\n      use: { person: 'Bob' },\n    },\n  ]\n};\nexport default config;\n"))),(0,n.kt)(s.Z,{value:"js",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-js"}),"// playwright.config.js\n// @ts-check\n\n/** @type {import('@playwright/test').PlaywrightTestConfig<{ person: string }>} */\nconst config = {\n  projects: [\n    {\n      name: 'alice',\n      use: { person: 'Alice' },\n    },\n    {\n      name: 'bob',\n      use: { person: 'Bob' },\n    },\n  ]\n};\n\nmodule.exports = config;\n")))),(0,n.kt)("p",null,"We can also use the option in a fixture. Learn more about ",(0,n.kt)("a",d({parentName:"p"},{href:"/docs/next/test-fixtures"}),"fixtures"),"."),(0,n.kt)(r.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,n.kt)(s.Z,{value:"ts",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-ts"}),"// my-test.ts\nimport { test as base } from '@playwright/test';\n\nexport type TestOptions = {\n  person: string;\n};\n\nexport const test = base.test.extend<TestOptions>({\n  // Define an option and provide a default value.\n  // We can later override it in the config.\n  person: ['John', { option: true }],\n\n  // Override default \"page\" fixture.\n  page: async ({ page, person }, use) => {\n    await page.goto('/chat');\n    // We use \"person\" parameter as a \"name\" for the chat room.\n    await page.locator('#name').fill(person);\n    await page.click('text=Enter chat room');\n    // Each test will get a \"page\" that already has the person name.\n    await use(page);\n  },\n});\n"))),(0,n.kt)(s.Z,{value:"js",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-js"}),"// my-test.js\nconst base = require('@playwright/test');\n\nexports.test = base.test.extend({\n  // Define an option and provide a default value.\n  // We can later override it in the config.\n  person: ['John', { option: true }],\n\n  // Override default \"page\" fixture.\n  page: async ({ page, person }, use) => {\n    await page.goto('/chat');\n    // We use \"person\" parameter as a \"name\" for the chat room.\n    await page.locator('#name').fill(person);\n    await page.click('text=Enter chat room');\n    // Each test will get a \"page\" that already has the person name.\n    await use(page);\n  },\n});\n")))),(0,n.kt)("div",d({},{className:"admonition admonition-note alert alert--secondary"}),(0,n.kt)("div",d({parentName:"div"},{className:"admonition-heading"}),(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",d({parentName:"h5"},{className:"admonition-icon"}),(0,n.kt)("svg",d({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),(0,n.kt)("path",d({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),(0,n.kt)("div",d({parentName:"div"},{className:"admonition-content"}),(0,n.kt)("p",{parentName:"div"},"Parametrized projects behavior has changed in version 1.18. ",(0,n.kt)("a",d({parentName:"p"},{href:"./release-notes#breaking-change-custom-config-options"}),"Learn more"),"."))),(0,n.kt)("h2",d({},{id:"passing-environment-variables"}),"Passing Environment Variables"),(0,n.kt)("p",null,"You can use environment variables to configure tests from the command line."),(0,n.kt)("p",null,"For example, consider the following test file that needs a username and a password. It is usually a good idea not to store your secrets in the source code, so we'll need a way to pass secrets from outside."),(0,n.kt)(r.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,n.kt)(s.Z,{value:"ts",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-ts"}),"// example.spec.ts\ntest(`example test`, async ({ page }) => {\n  // ...\n  await page.locator('#username').fill(process.env.USERNAME);\n  await page.locator('#password').fill(process.env.PASSWORD);\n});\n"))),(0,n.kt)(s.Z,{value:"js",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-js"}),"// example.spec.js\ntest(`example test`, async ({ page }) => {\n  // ...\n  await page.locator('#username').fill(process.env.USERNAME);\n  await page.locator('#password').fill(process.env.PASSWORD);\n});\n")))),(0,n.kt)("p",null,"You can run this test with your secrect username and password set in the command line."),(0,n.kt)(r.Z,{groupId:"bash-flavor",defaultValue:"bash",values:[{label:"Bash",value:"bash"},{label:"PowerShell",value:"powershell"},{label:"Batch",value:"batch"}],mdxType:"Tabs"},(0,n.kt)(s.Z,{value:"bash",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"USERNAME=me PASSWORD=secret npx playwright test\n"))),(0,n.kt)(s.Z,{value:"powershell",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-powershell"}),"$env:USERNAME=me\n$env:PASSWORD=secret\nnpx playwright test\n"))),(0,n.kt)(s.Z,{value:"batch",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-batch"}),"set USERNAME=me\nset PASSWORD=secret\nnpx playwright test\n")))),(0,n.kt)("p",null,"Similarly, configuration file can also read environment variables passed throught the command line."),(0,n.kt)(r.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,n.kt)(s.Z,{value:"ts",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-ts"}),"// playwright.config.ts\nimport { PlaywrightTestConfig } from '@playwright/test';\n\nconst config: PlaywrightTestConfig = {\n  use: {\n    baseURL: process.env.STAGING === '1' ? 'http://staging.example.test/' : 'http://example.test/',\n  }\n};\nexport default config;\n"))),(0,n.kt)(s.Z,{value:"js",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-js"}),"// playwright.config.js\n// @ts-check\n\n/** @type {import('@playwright/test').PlaywrightTestConfig} */\nconst config = {\n  use: {\n    baseURL: process.env.STAGING === '1' ? 'http://staging.example.test/' : 'http://example.test/',\n  }\n};\n\nmodule.exports = config;\n")))),(0,n.kt)("p",null,"Now, you can run tests against a staging or a production environment:"),(0,n.kt)(r.Z,{groupId:"bash-flavor",defaultValue:"bash",values:[{label:"Bash",value:"bash"},{label:"PowerShell",value:"powershell"},{label:"Batch",value:"batch"}],mdxType:"Tabs"},(0,n.kt)(s.Z,{value:"bash",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"STAGING=1 npx playwright test\n"))),(0,n.kt)(s.Z,{value:"powershell",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-powershell"}),"$env:STAGING=1\nnpx playwright test\n"))),(0,n.kt)(s.Z,{value:"batch",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-batch"}),"set STAGING=1\nnpx playwright test\n")))),(0,n.kt)("h3",d({},{id:"env-files"}),".env files"),(0,n.kt)("p",null,"To make environment variables easier to manage, consider something like ",(0,n.kt)("inlineCode",{parentName:"p"},".env")," files. Here is an example that uses ",(0,n.kt)("a",d({parentName:"p"},{href:"https://www.npmjs.com/package/dotenv"}),(0,n.kt)("inlineCode",{parentName:"a"},"dotenv"))," package to read environment variables directly in the configuration file."),(0,n.kt)(r.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,n.kt)(s.Z,{value:"ts",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-ts"}),"// playwright.config.ts\nimport { PlaywrightTestConfig } from '@playwright/test';\nimport dotenv from 'dotenv';\nimport path from 'path';\n\n// Read from default \".env\" file.\ndotenv.config();\n\n// Alternatively, read from \"../my.env\" file.\ndotenv.config({ path: path.resolve(__dirname, '..', 'my.env') });\n\nconst config: PlaywrightTestConfig = {\n  use: {\n    baseURL: process.env.STAGING === '1' ? 'http://staging.example.test/' : 'http://example.test/',\n  }\n};\nexport default config;\n"))),(0,n.kt)(s.Z,{value:"js",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-js"}),"// playwright.config.js\n// @ts-check\n\n// Read from default \".env\" file.\nrequire('dotenv').config();\n\n// Alternatively, read from \"../my.env\" file.\nrequire('dotenv').config({ path: path.resolve(__dirname, '..', 'my.env') });\n\n/** @type {import('@playwright/test').PlaywrightTestConfig} */\nconst config = {\n  use: {\n    baseURL: process.env.STAGING === '1' ? 'http://staging.example.test/' : 'http://example.test/',\n  }\n};\n\nmodule.exports = config;\n")))),(0,n.kt)("p",null,"Now, you can just edit ",(0,n.kt)("inlineCode",{parentName:"p"},".env")," file to set any variables you'd like."),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"# .env file\nSTAGING=0\nUSERNAME=me\nPASSWORD=secret\n")),(0,n.kt)("p",null,"Run tests as usual, your environment variables should be picked up."),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"npx playwright test\n")),(0,n.kt)("h2",d({},{id:"create-tests-via-a-csv-file"}),"Create tests via a CSV file"),(0,n.kt)("p",null,"The Playwright test-runner runs in Node.js, this means you can directly read files from the file system and parse them with your preferred CSV library."),(0,n.kt)("p",null,"See for example this CSV file, in our example ",(0,n.kt)("inlineCode",{parentName:"p"},"input.csv"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-txt"}),'"test_case","some_value","some_other_value"\n"value 1","value 11","foobar1"\n"value 2","value 22","foobar21"\n"value 3","value 33","foobar321"\n"value 4","value 44","foobar4321"\n')),(0,n.kt)("p",null,"Based on this we'll generate some tests by using the ",(0,n.kt)("a",d({parentName:"p"},{href:"https://www.npmjs.com/package/csv-parse"}),"csv-parse")," library from NPM:"),(0,n.kt)(r.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,n.kt)(s.Z,{value:"ts",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-ts"}),"// foo.spec.ts\nimport fs from 'fs';\nimport path from 'path';\nimport { test } from '@playwright/test';\nimport { parse } from 'csv-parse/sync';\n\nconst records = parse(fs.readFileSync(path.join(__dirname, 'input.csv')), {\n  columns: true,\n  skip_empty_lines: true\n});\n\nfor (const record of records) {\n  test(`fooo: ${record.test_case}`, async ({ page }) => {\n    console.log(record.test_case, record.some_value, record.some_other_value);\n  });\n}\n"))),(0,n.kt)(s.Z,{value:"js",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-js"}),"// foo.spec.js\nconst fs = require('fs');\nconst path = require('path');\nconst { test } = require('@playwright/test');\nconst { parse } = require('csv-parse/sync');\n\nconst records = parse(fs.readFileSync(path.join(__dirname, 'input.csv')), {\n  columns: true,\n  skip_empty_lines: true\n});\n\nfor (const record of records) {\n  test(`fooo: ${record.test_case}`, async ({ page }) => {\n    console.log(record.test_case, record.some_value, record.some_other_value);\n  });\n}\n")))))}k.isMDXComponent=!0}}]);