"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[72951],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,f=m["".concat(i,".").concat(d)]||m[d]||c[d]||s;return n?a.createElement(f,o(o({ref:t},u),{},{components:n})):a.createElement(f,o({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<s;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},73811:function(e,t,n){n.d(t,{Z:function(){return p}});var a=n(67294),r=Object.defineProperty,s=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,i=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;function p({children:e,hidden:t,className:n}){return a.createElement("div",((e,t)=>{for(var n in t||(t={}))o.call(t,n)&&i(e,n,t[n]);if(s)for(var n of s(t))l.call(t,n)&&i(e,n,t[n]);return e})({role:"tabpanel"},{hidden:t,className:n}),e)}},73824:function(e,t,n){n.d(t,{Z:function(){return b}});var a=n(67294),r=n(54939),s=n(39670),o=n(86010),l="tabItem_LplD",i=Object.defineProperty,p=Object.defineProperties,u=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,f=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,g=(e,t)=>{for(var n in t||(t={}))m.call(t,n)&&f(e,n,t[n]);if(c)for(var n of c(t))d.call(t,n)&&f(e,n,t[n]);return e};function h(e){var t,n,r;const{lazy:i,block:c,defaultValue:m,values:d,groupId:f,className:h}=e,b=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=null!=d?d:b.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),k=(0,s.lx)(v,((e,t)=>e.value===t.value));if(k.length>0)throw new Error(`Docusaurus error: Duplicate values "${k.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const w=null===m?m:null!=(r=null!=m?m:null==(t=b.find((e=>e.props.default)))?void 0:t.props.value)?r:null==(n=b[0])?void 0:n.props.value;if(null!==w&&!v.some((e=>e.value===w)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${w}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:j}=(0,s.UB)(),[x,T]=(0,a.useState)(w),N=[],{blockElementScrollPositionUntilNextRender:I}=(0,s.o5)();if(null!=f){const e=y[f];null!=e&&e!==x&&v.some((t=>t.value===e))&&T(e)}const S=e=>{const t=e.currentTarget,n=N.indexOf(t),a=v[n].value;a!==x&&(I(t),T(a),null!=f&&j(f,a))},C=e=>{let t=null;switch(e.key){case"ArrowRight":{const n=N.indexOf(e.currentTarget)+1;t=N[n]||N[0];break}case"ArrowLeft":{const n=N.indexOf(e.currentTarget)-1;t=N[n]||N[N.length-1];break}}null==t||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":c},h)},v.map((({value:e,label:t,attributes:n})=>{return a.createElement("li",(r=g({role:"tab",tabIndex:x===e?0:-1,"aria-selected":x===e,key:e,ref:e=>N.push(e),onKeyDown:C,onFocus:S,onClick:S},n),s={className:(0,o.Z)("tabs__item",l,null==n?void 0:n.className,{"tabs__item--active":x===e})},p(r,u(s))),null!=t?t:e);var r,s}))),i?(0,a.cloneElement)(b.filter((e=>e.props.value===x))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},b.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==x})))))}function b(e){const t=(0,r.Z)();return a.createElement(h,g({key:String(t)},e))}},26117:function(e,t,n){n.r(t),n.d(t,{assets:function(){return b},contentTitle:function(){return g},default:function(){return w},frontMatter:function(){return f},metadata:function(){return h},toc:function(){return v}});var a=n(3905),r=n(73824),s=n(73811),o=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))u.call(t,n)&&m(e,n,t[n]);if(p)for(var n of p(t))c.call(t,n)&&m(e,n,t[n]);return e};const f={id:"test-advanced",title:"Advanced: configuration"},g=void 0,h={unversionedId:"test-advanced",id:"version-1.20/test-advanced",title:"Advanced: configuration",description:"- Configuration object",source:"@site/versioned_docs/version-1.20/test-advanced.mdx",sourceDirName:".",slug:"/test-advanced",permalink:"/docs/1.20/test-advanced",tags:[],version:"1.20",frontMatter:{id:"test-advanced",title:"Advanced: configuration"},sidebar:"docs",previous:{title:"Visual comparisons",permalink:"/docs/1.20/test-snapshots"},next:{title:"Advanced: fixtures",permalink:"/docs/1.20/test-fixtures"}},b={},v=[{value:"Configuration object",id:"configuration-object",level:2},{value:"TestInfo object",id:"testinfo-object",level:2},{value:"Launching a development web server during the tests",id:"launching-a-development-web-server-during-the-tests",level:2},{value:"Global setup and teardown",id:"global-setup-and-teardown",level:2},{value:"Projects",id:"projects",level:2},{value:"Same tests, different configuration",id:"same-tests-different-configuration",level:3},{value:"Different tests, different configuration",id:"different-tests-different-configuration",level:3},{value:"Custom project parameters",id:"custom-project-parameters",level:3},{value:"WorkerInfo object",id:"workerinfo-object",level:2},{value:"Add custom matchers using expect.extend",id:"add-custom-matchers-using-expectextend",level:2}],k={toc:v};function w(e){var t,n=e,{components:o}=n,m=((e,t)=>{var n={};for(var a in e)u.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&p)for(var a of p(e))t.indexOf(a)<0&&c.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=d(d({},k),m),l(t,i({components:o,mdxType:"MDXLayout"}))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",d({parentName:"li"},{href:"#configuration-object"}),"Configuration object")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",d({parentName:"li"},{href:"#testinfo-object"}),"TestInfo object")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",d({parentName:"li"},{href:"#launching-a-development-web-server-during-the-tests"}),"Launching a development web server during the tests")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",d({parentName:"li"},{href:"#global-setup-and-teardown"}),"Global setup and teardown")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",d({parentName:"li"},{href:"#projects"}),"Projects")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",d({parentName:"li"},{href:"#workerinfo-object"}),"WorkerInfo object")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",d({parentName:"li"},{href:"#add-custom-matchers-using-expectextend"}),"Add custom matchers using expect.extend"))),(0,a.kt)("h2",d({},{id:"configuration-object"}),"Configuration object"),(0,a.kt)("p",null,"Configuration file exports a single ",(0,a.kt)("a",d({parentName:"p"},{href:"/docs/1.20/api/class-testconfig",title:"TestConfig"}),"TestConfig")," object. See ",(0,a.kt)("a",d({parentName:"p"},{href:"/docs/1.20/api/class-testconfig",title:"TestConfig"}),"TestConfig")," properties for available configuration options."),(0,a.kt)("p",null,"Note that each ",(0,a.kt)("a",d({parentName:"p"},{href:"#projects"}),"test project")," can provide its own ",(0,a.kt)("a",d({parentName:"p"},{href:"/docs/1.20/api/class-testproject",title:"TestProject"}),"options"),", for example two projects can run different tests by providing different ",(0,a.kt)("inlineCode",{parentName:"p"},"testDir"),"s."),(0,a.kt)("p",null,'Here is an example that defines a common timeout and two projects. The "Smoke" project runs a small subset of tests without retries, and "Default" project runs all other tests with retries.'),(0,a.kt)(r.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,a.kt)(s.Z,{value:"ts",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-ts"}),"// playwright.config.ts\nimport { PlaywrightTestConfig } from '@playwright/test';\nconst config: PlaywrightTestConfig = {\n  timeout: 60000, // Timeout is shared between all tests.\n  projects: [\n    {\n      name: 'Smoke',\n      testMatch: /.*smoke.spec.ts/,\n      retries: 0,\n    },\n    {\n      name: 'Default',\n      testIgnore: /.*smoke.spec.ts/,\n      retries: 2,\n    },\n  ],\n};\nexport default config;\n"))),(0,a.kt)(s.Z,{value:"js",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-js"}),"// playwright.config.js\n// @ts-check\n/** @type {import('@playwright/test').PlaywrightTestConfig} */\nconst config = {\n  timeout: 60000, // Timeout is shared between all tests.\n  projects: [\n    {\n      name: 'Smoke',\n      testMatch: /.*smoke.spec.ts/,\n      retries: 0,\n    },\n    {\n      name: 'Default',\n      testIgnore: /.*smoke.spec.ts/,\n      retries: 2,\n    },\n  ],\n};\nmodule.exports = config;\n")))),(0,a.kt)("h2",d({},{id:"testinfo-object"}),"TestInfo object"),(0,a.kt)("p",null,"Test functions, fixtures and hooks receive a ",(0,a.kt)("a",d({parentName:"p"},{href:"/docs/1.20/api/class-testinfo",title:"TestInfo"}),"TestInfo")," parameter that provides information about the currently running test as well as some useful utilities that include:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Information about the test, for example ",(0,a.kt)("inlineCode",{parentName:"li"},"title"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"config")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"project"),"."),(0,a.kt)("li",{parentName:"ul"},"Information about test execution, for example ",(0,a.kt)("inlineCode",{parentName:"li"},"expectedStatus")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"status"),"."),(0,a.kt)("li",{parentName:"ul"},"Test artifact utilities, for example ",(0,a.kt)("inlineCode",{parentName:"li"},"outputPath()")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"attach()"),".")),(0,a.kt)("p",null,"See ",(0,a.kt)("a",d({parentName:"p"},{href:"/docs/1.20/api/class-testinfo",title:"TestInfo"}),"TestInfo")," methods and properties for all available information and utilities."),(0,a.kt)("p",null,"Here is an example test that saves information to a file using ",(0,a.kt)("a",d({parentName:"p"},{href:"/docs/1.20/api/class-testinfo",title:"TestInfo"}),"TestInfo"),"."),(0,a.kt)(r.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,a.kt)(s.Z,{value:"ts",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-ts"}),"// example.spec.ts\nimport { test } from '@playwright/test';\n\ntest('my test needs a file', async ({ table }, testInfo) => {\n  // Do something with the table...\n  // ... and then save contents.\n  const filePath = testInfo.outputPath('table.dat');\n  await table.saveTo(filePath);\n});\n"))),(0,a.kt)(s.Z,{value:"js",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-js"}),"// example.spec.js\nconst { test } = require('@playwright/test');\n\ntest('my test needs a file', async ({ table }, testInfo) => {\n  // Do something with the table...\n  // ... and then save contents.\n  const filePath = testInfo.outputPath('table.dat');\n  await table.saveTo(filePath);\n});\n")))),(0,a.kt)("p",null,"Here is an example fixture that automatically saves debug logs when the test fails."),(0,a.kt)(r.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,a.kt)(s.Z,{value:"ts",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-ts"}),"// my-test.ts\nimport * as debug from 'debug';\nimport * as fs from 'fs';\nimport { test as base } from '@playwright/test';\n\n// Note how we mark the fixture as { auto: true }.\n// This way it is always instantiated, even if the test does not use it explicitly.\nexport const test = base.extend<{ saveLogs: void }>({\n  saveLogs: [ async ({}, use, testInfo) => {\n    const logs = [];\n    debug.log = (...args) => logs.push(args.map(String).join(''));\n    debug.enable('mycomponent');\n\n    await use();\n\n    if (testInfo.status !== testInfo.expectedStatus)\n      fs.writeFileSync(testInfo.outputPath('logs.txt'), logs.join('\\n'), 'utf8');\n  }, { auto: true } ]\n});\n"))),(0,a.kt)(s.Z,{value:"js",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-js"}),"// my-test.js\nconst debug = require('debug');\nconst fs = require('fs');\nconst base = require('@playwright/test');\n\n// Note how we mark the fixture as { auto: true }.\n// This way it is always instantiated, even if the test does not use it explicitly.\nexports.test = base.test.extend({\n  saveLogs: [ async ({}, use, testInfo) => {\n    const logs = [];\n    debug.log = (...args) => logs.push(args.map(String).join(''));\n    debug.enable('mycomponent');\n\n    await use();\n\n    if (testInfo.status !== testInfo.expectedStatus)\n      fs.writeFileSync(testInfo.outputPath('logs.txt'), logs.join('\\n'), 'utf8');\n  }, { auto: true } ]\n});\n")))),(0,a.kt)("h2",d({},{id:"launching-a-development-web-server-during-the-tests"}),"Launching a development web server during the tests"),(0,a.kt)("p",null,"To launch a server during the tests, use the ",(0,a.kt)("inlineCode",{parentName:"p"},"webServer")," option in the ",(0,a.kt)("a",d({parentName:"p"},{href:"#configuration-object"}),"configuration file"),"."),(0,a.kt)("p",null,"If ",(0,a.kt)("inlineCode",{parentName:"p"},"port")," is specified in the config, test runner will wait for ",(0,a.kt)("inlineCode",{parentName:"p"},"127.0.0.1:port")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"::1:port")," to be available before running the tests. If ",(0,a.kt)("inlineCode",{parentName:"p"},"url")," is specified in the config, test runner will wait for that ",(0,a.kt)("inlineCode",{parentName:"p"},"url")," to return 2xx response before running the tests."),(0,a.kt)("p",null,"For continuous integration, you may want to use the ",(0,a.kt)("inlineCode",{parentName:"p"},"reuseExistingServer: !process.env.CI")," option which does not use an existing server on the CI. To see the stdout, you can set the ",(0,a.kt)("inlineCode",{parentName:"p"},"DEBUG=pw:webserver")," environment variable."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"port")," (but not the ",(0,a.kt)("inlineCode",{parentName:"p"},"url"),") gets passed over to Playwright as a ",(0,a.kt)("a",d({parentName:"p"},{href:"/docs/1.20/api/class-testoptions#test-options-base-url"}),"testOptions.baseURL"),". For example port ",(0,a.kt)("inlineCode",{parentName:"p"},"8080")," produces ",(0,a.kt)("inlineCode",{parentName:"p"},"baseURL")," equal ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:8080"),"."),(0,a.kt)("div",d({},{className:"admonition admonition-note alert alert--secondary"}),(0,a.kt)("div",d({parentName:"div"},{className:"admonition-heading"}),(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",d({parentName:"h5"},{className:"admonition-icon"}),(0,a.kt)("svg",d({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),(0,a.kt)("path",d({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),(0,a.kt)("div",d({parentName:"div"},{className:"admonition-content"}),(0,a.kt)("p",{parentName:"div"},"It is also recommended to specify ",(0,a.kt)("a",d({parentName:"p"},{href:"/docs/1.20/api/class-testoptions#test-options-base-url"}),"testOptions.baseURL")," in the config, so that tests could use relative urls."))),(0,a.kt)(r.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,a.kt)(s.Z,{value:"ts",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-ts"}),"// playwright.config.ts\nimport { PlaywrightTestConfig } from '@playwright/test';\nconst config: PlaywrightTestConfig = {\n  webServer: {\n    command: 'npm run start',\n    port: 3000,\n    timeout: 120 * 1000,\n    reuseExistingServer: !process.env.CI,\n  },\n};\nexport default config;\n"))),(0,a.kt)(s.Z,{value:"js",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-js"}),"// playwright.config.js\n// @ts-check\n/** @type {import('@playwright/test').PlaywrightTestConfig} */\nconst config = {\n  webServer: {\n    command: 'npm run start',\n    port: 3000,\n    timeout: 120 * 1000,\n    reuseExistingServer: !process.env.CI,\n  },\n};\nmodule.exports = config;\n")))),(0,a.kt)("p",null,"Now you can use a relative path when navigating the page, or use ",(0,a.kt)("inlineCode",{parentName:"p"},"baseURL")," fixture:"),(0,a.kt)(r.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,a.kt)(s.Z,{value:"ts",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-ts"}),"// test.spec.ts\nimport { test } from '@playwright/test';\ntest('test', async ({ page, baseURL }) => {\n  // baseURL is taken directly from your web server,\n  // e.g. http://localhost:3000\n  await page.goto(baseURL + '/bar');\n  // Alternatively, just use relative path, because baseURL is already\n  // set for the default context and page.\n  // For example, this will result in http://localhost:3000/foo\n  await page.goto('/foo');\n});\n"))),(0,a.kt)(s.Z,{value:"js",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-js"}),"// test.spec.js\nconst { test } = require('@playwright/test');\ntest('test', async ({ page, baseURL }) => {\n  // baseURL is taken directly from your web server,\n  // e.g. http://localhost:3000\n  await page.goto(baseURL + '/bar');\n  // Alternatively, just use relative path, because baseURL is already\n  // set for the default context and page.\n  // For example, this will result in http://localhost:3000/foo\n  await page.goto('/foo');\n});\n")))),(0,a.kt)("h2",d({},{id:"global-setup-and-teardown"}),"Global setup and teardown"),(0,a.kt)("p",null,"To set something up once before running all tests, use ",(0,a.kt)("inlineCode",{parentName:"p"},"globalSetup")," option in the ",(0,a.kt)("a",d({parentName:"p"},{href:"#configuration-object"}),"configuration file"),". Global setup file must export a single function that takes a config object. This function will be run once before all the tests."),(0,a.kt)("p",null,"Similarly, use ",(0,a.kt)("inlineCode",{parentName:"p"},"globalTeardown")," to run something once after all the tests. Alternatively, let ",(0,a.kt)("inlineCode",{parentName:"p"},"globalSetup")," return a function that will be used as a global teardown. You can pass data such as port number, authentication tokens, etc. from your global setup to your tests using environment."),(0,a.kt)("p",null,"Here is a global setup example that authenticates once and reuses authentication state in tests. It uses ",(0,a.kt)("inlineCode",{parentName:"p"},"baseURL")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"storageState")," options from the configuration file."),(0,a.kt)(r.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,a.kt)(s.Z,{value:"ts",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-ts"}),"// global-setup.ts\nimport { chromium, FullConfig } from '@playwright/test';\n\nasync function globalSetup(config: FullConfig) {\n  const { baseURL, storageState } = config.projects[0].use;\n  const browser = await chromium.launch();\n  const page = await browser.newPage();\n  await page.goto(baseURL!);\n  await page.fill('input[name=\"user\"]', 'user');\n  await page.fill('input[name=\"password\"]', 'password');\n  await page.click('text=Sign in');\n  await page.context().storageState({ path: storageState as string });\n  await browser.close();\n}\n\nexport default globalSetup;\n"))),(0,a.kt)(s.Z,{value:"js",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-js"}),"// global-setup.js\nconst { chromium } = require('@playwright/test');\n\nmodule.exports = async config => {\n  const { baseURL, storageState } = config.projects[0].use;\n  const browser = await chromium.launch();\n  const page = await browser.newPage();\n  await page.goto(baseURL);\n  await page.fill('input[name=\"user\"]', 'user');\n  await page.fill('input[name=\"password\"]', 'password');\n  await page.click('text=Sign in');\n  await page.context().storageState({ path: storageState });\n  await browser.close();\n};\n")))),(0,a.kt)("p",null,"Specify ",(0,a.kt)("inlineCode",{parentName:"p"},"globalSetup"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"baseURL")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"storageState")," in the configuration file."),(0,a.kt)(r.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,a.kt)(s.Z,{value:"ts",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-ts"}),"// playwright.config.ts\nimport { PlaywrightTestConfig } from '@playwright/test';\n\nconst config: PlaywrightTestConfig = {\n  globalSetup: require.resolve('./global-setup'),\n  use: {\n    baseURL: 'http://localhost:3000/',\n    storageState: 'state.json',\n  },\n};\nexport default config;\n"))),(0,a.kt)(s.Z,{value:"js",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-js"}),"// playwright.config.js\n// @ts-check\n/** @type {import('@playwright/test').PlaywrightTestConfig} */\nconst config = {\n  globalSetup: require.resolve('./global-setup'),\n  use: {\n    baseURL: 'http://localhost:3000/',\n    storageState: 'state.json',\n  },\n};\nmodule.exports = config;\n")))),(0,a.kt)("p",null,"Tests start already authenticated because we specify ",(0,a.kt)("inlineCode",{parentName:"p"},"storageState")," that was populated by global setup."),(0,a.kt)(r.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,a.kt)(s.Z,{value:"ts",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-ts"}),"import { test } from '@playwright/test';\n\ntest('test', async ({ page }) => {\n  await page.goto('/');\n  // You are signed in!\n});\n"))),(0,a.kt)(s.Z,{value:"js",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-js"}),"const { test } = require('@playwright/test');\n\ntest('test', async ({ page }) => {\n  await page.goto('/');\n  // You are signed in!\n});\n")))),(0,a.kt)("h2",d({},{id:"projects"}),"Projects"),(0,a.kt)("p",null,"Playwright Test supports running multiple test projects at the same time. This is useful for running the same or different tests in multiple configurations."),(0,a.kt)("h3",d({},{id:"same-tests-different-configuration"}),"Same tests, different configuration"),(0,a.kt)("p",null,"Here is an example that runs the same tests in different browsers:"),(0,a.kt)(r.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,a.kt)(s.Z,{value:"ts",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-ts"}),"// playwright.config.ts\nimport { PlaywrightTestConfig, devices } from '@playwright/test';\n\nconst config: PlaywrightTestConfig = {\n  projects: [\n    {\n      name: 'chromium',\n      use: { ...devices['Desktop Chrome'] },\n    },\n    {\n      name: 'firefox',\n      use: { ...devices['Desktop Firefox'] },\n    },\n    {\n      name: 'webkit',\n      use: { ...devices['Desktop Safari'] },\n    },\n  ],\n};\nexport default config;\n"))),(0,a.kt)(s.Z,{value:"js",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-js"}),"// playwright.config.js\n// @ts-check\nconst { devices } = require('@playwright/test');\n\n/** @type {import('@playwright/test').PlaywrightTestConfig} */\nconst config = {\n  projects: [\n    {\n      name: 'chromium',\n      use: { ...devices['Desktop Chrome'] },\n    },\n    {\n      name: 'firefox',\n      use: { ...devices['Desktop Firefox'] },\n    },\n    {\n      name: 'webkit',\n      use: { ...devices['Desktop Safari'] },\n    },\n  ],\n};\n\nmodule.exports = config;\n")))),(0,a.kt)("p",null,"You can run all projects or just a single one:"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"# Run both projects - each test will be run three times\nnpx playwright test\n\n# Run a single project - each test will be run once\nnpx playwright test --project=chromium\n")),(0,a.kt)("h3",d({},{id:"different-tests-different-configuration"}),"Different tests, different configuration"),(0,a.kt)("p",null,"Each project can be configured separately, and run different set of tests with different options. You can use ",(0,a.kt)("a",d({parentName:"p"},{href:"/docs/1.20/api/class-testproject#test-project-test-dir"}),"testProject.testDir"),", ",(0,a.kt)("a",d({parentName:"p"},{href:"/docs/1.20/api/class-testproject#test-project-test-match"}),"testProject.testMatch")," and ",(0,a.kt)("a",d({parentName:"p"},{href:"/docs/1.20/api/class-testproject#test-project-test-ignore"}),"testProject.testIgnore")," to configure which tests should the project run."),(0,a.kt)("p",null,'Here is an example that runs projects with different tests and configurations. The "Smoke" project runs a small subset of tests without retries, and "Default" project runs all other tests with retries.'),(0,a.kt)(r.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,a.kt)(s.Z,{value:"ts",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-ts"}),"// playwright.config.ts\nimport { PlaywrightTestConfig } from '@playwright/test';\nconst config: PlaywrightTestConfig = {\n  timeout: 60000, // Timeout is shared between all tests.\n  projects: [\n    {\n      name: 'Smoke',\n      testMatch: /.*smoke.spec.ts/,\n      retries: 0,\n    },\n    {\n      name: 'Default',\n      testIgnore: /.*smoke.spec.ts/,\n      retries: 2,\n    },\n  ],\n};\nexport default config;\n"))),(0,a.kt)(s.Z,{value:"js",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-js"}),"// playwright.config.js\n// @ts-check\n/** @type {import('@playwright/test').PlaywrightTestConfig} */\nconst config = {\n  timeout: 60000, // Timeout is shared between all tests.\n  projects: [\n    {\n      name: 'Smoke',\n      testMatch: /.*smoke.spec.ts/,\n      retries: 0,\n    },\n    {\n      name: 'Default',\n      testIgnore: /.*smoke.spec.ts/,\n      retries: 2,\n    },\n  ],\n};\nmodule.exports = config;\n")))),(0,a.kt)("p",null,"You can run all projects or just a single one:"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"# Run both projects\nnpx playwright test\n\n# Run a single project\nnpx playwright test --project=Smoke\n")),(0,a.kt)("h3",d({},{id:"custom-project-parameters"}),"Custom project parameters"),(0,a.kt)("p",null,"Projects can be also used to parametrize tests with your custom configuration - take a look at ",(0,a.kt)("a",d({parentName:"p"},{href:"/docs/1.20/test-parameterize#parameterized-projects"}),"this separate guide"),"."),(0,a.kt)("h2",d({},{id:"workerinfo-object"}),"WorkerInfo object"),(0,a.kt)("p",null,"Depending on the configuration and failures, Playwright Test might use different number of worker processes to run all the tests. For example, Playwright Test will always start a new worker process after a failing test."),(0,a.kt)("p",null,"Worker-scoped fixtures receive a ",(0,a.kt)("a",d({parentName:"p"},{href:"/docs/1.20/api/class-workerinfo",title:"WorkerInfo"}),"WorkerInfo")," parameter that describes the current worker configuration. See ",(0,a.kt)("a",d({parentName:"p"},{href:"/docs/1.20/api/class-workerinfo",title:"WorkerInfo"}),"WorkerInfo")," properties for available worker information."),(0,a.kt)("p",null,"Consider an example where we run a new http server per worker process, and use ",(0,a.kt)("inlineCode",{parentName:"p"},"workerIndex")," to produce a unique port number:"),(0,a.kt)(r.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,a.kt)(s.Z,{value:"ts",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-ts"}),"// my-test.ts\nimport { test as base } from '@playwright/test';\nimport * as http from 'http';\n\n// Note how we mark the fixture as { scope: 'worker' }.\n// Also note that we pass empty {} first, since we do not declare any test fixtures.\nexport const test = base.extend<{}, { server: http.Server }>({\n  server: [ async ({}, use, workerInfo) => {\n    // Start the server.\n    const server = http.createServer();\n    server.listen(9000 + workerInfo.workerIndex);\n    await new Promise(ready => server.once('listening', ready));\n\n    // Use the server in the tests.\n    await use(server);\n\n    // Cleanup.\n    await new Promise(done => server.close(done));\n  }, { scope: 'worker' } ]\n});\n"))),(0,a.kt)(s.Z,{value:"js",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-js"}),"// my-test.js\nconst base = require('@playwright/test');\nconst http = require('http');\n\n// Note how we mark the fixture as { scope: 'worker' }.\n// Also note that we pass empty {} first, since we do not declare any test fixtures.\nexports.test = base.test.extend({\n  server: [ async ({}, use, workerInfo) => {\n    // Start the server.\n    const server = http.createServer();\n    server.listen(9000 + workerInfo.workerIndex);\n    await new Promise(ready => server.once('listening', ready));\n\n    // Use the server in the tests.\n    await use(server);\n\n    // Cleanup.\n    await new Promise(done => server.close(done));\n  }, { scope: 'worker' } ]\n});\n")))),(0,a.kt)("h2",d({},{id:"add-custom-matchers-using-expectextend"}),"Add custom matchers using expect.extend"),(0,a.kt)("p",null,"Playwright Test uses ",(0,a.kt)("a",d({parentName:"p"},{href:"https://jestjs.io/docs/expect"}),(0,a.kt)("inlineCode",{parentName:"a"},"expect")," library")," under the hood which has the functionality to extend it with ",(0,a.kt)("a",d({parentName:"p"},{href:"https://jestjs.io/docs/expect#expectextendmatchers"}),"custom matchers"),"."),(0,a.kt)("p",null,"In this example we add a custom ",(0,a.kt)("inlineCode",{parentName:"p"},"toBeWithinRange")," function in the configuration file."),(0,a.kt)(r.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,a.kt)(s.Z,{value:"ts",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-ts"}),"// playwright.config.ts\nimport { expect, PlaywrightTestConfig } from '@playwright/test';\n\nexpect.extend({\n  toBeWithinRange(received: number, floor: number, ceiling: number) {\n    const pass = received >= floor && received <= ceiling;\n    if (pass) {\n      return {\n        message: () => 'passed',\n        pass: true,\n      };\n    } else {\n      return {\n        message: () => 'failed',\n        pass: false,\n      };\n    }\n  },\n});\n\nconst config: PlaywrightTestConfig = {};\nexport default config;\n"))),(0,a.kt)(s.Z,{value:"js",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-js"}),"// playwright.config.js\nconst { expect } = require('@playwright/test');\n\nexpect.extend({\n  toBeWithinRange(received, floor, ceiling) {\n    const pass = received >= floor && received <= ceiling;\n    if (pass) {\n      return {\n        message: () => 'passed',\n        pass: true,\n      };\n    } else {\n      return {\n        message: () => 'failed',\n        pass: false,\n      };\n    }\n  },\n});\n\nmodule.exports = {};\n")))),(0,a.kt)("p",null,"Now we can use ",(0,a.kt)("inlineCode",{parentName:"p"},"toBeWithinRange")," in the test."),(0,a.kt)(r.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,a.kt)(s.Z,{value:"ts",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-ts"}),"// example.spec.ts\nimport { test, expect } from '@playwright/test';\n\ntest('numeric ranges', () => {\n  expect(100).toBeWithinRange(90, 110);\n  expect(101).not.toBeWithinRange(0, 100);\n});\n"))),(0,a.kt)(s.Z,{value:"js",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-js"}),"// example.spec.js\nconst { test, expect } = require('@playwright/test');\n\ntest('numeric ranges', () => {\n  expect(100).toBeWithinRange(90, 110);\n  expect(101).not.toBeWithinRange(0, 100);\n});\n")))),(0,a.kt)("p",null,"For TypeScript, also add the following to ",(0,a.kt)("inlineCode",{parentName:"p"},"global.d.ts"),". You don't need it for JavaScript."),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-js"}),"// global.d.ts\ndeclare global {\n namespace PlaywrightTest {\n    interface Matchers<R> {\n      toBeWithinRange(a: number, b: number): R;\n    }\n  }\n}\n")))}w.isMDXComponent=!0}}]);