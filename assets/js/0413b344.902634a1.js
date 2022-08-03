"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[7098],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var a=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(n),h=s,g=d["".concat(l,".").concat(h)]||d[h]||c[h]||o;return n?a.createElement(g,r(r({ref:t},p),{},{components:n})):a.createElement(g,r({ref:t},p))}));function h(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=n.length,r=new Array(o);r[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:s,r[1]=i;for(var u=2;u<o;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4455:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(7294),s=n(6010),o="tabItem_Ymn6",r=Object.defineProperty,i=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;function c({children:e,hidden:t,className:n}){return a.createElement("div",((e,t)=>{for(var n in t||(t={}))l.call(t,n)&&p(e,n,t[n]);if(i)for(var n of i(t))u.call(t,n)&&p(e,n,t[n]);return e})({role:"tabpanel",className:(0,s.Z)(o,n)},{hidden:t}),e)}},5332:function(e,t,n){n.d(t,{Z:function(){return v}});var a=n(7294),s=n(6010),o=n(4939),r=n(2174),i=n(2107),l=n(8757),u="tabList__CuJ",p="tabItem_LNqP",c=Object.defineProperty,d=Object.defineProperties,h=Object.getOwnPropertyDescriptors,g=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable,f=(e,t,n)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,b=(e,t)=>{for(var n in t||(t={}))m.call(t,n)&&f(e,n,t[n]);if(g)for(var n of g(t))w.call(t,n)&&f(e,n,t[n]);return e};function k(e){var t,n;const{lazy:o,block:c,defaultValue:g,values:m,groupId:w,className:f}=e,k=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=null!=m?m:k.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),x=(0,r.l)(v,((e,t)=>e.value===t.value));if(x.length>0)throw new Error(`Docusaurus error: Duplicate values "${x.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===g?g:null!=(n=null!=g?g:null==(t=k.find((e=>e.props.default)))?void 0:t.props.value)?n:k[0].props.value;if(null!==y&&!v.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:q,setTabGroupChoices:P}=(0,i.U)(),[C,A]=(0,a.useState)(y),N=[],{blockElementScrollPositionUntilNextRender:I}=(0,l.o5)();if(null!=w){const e=q[w];null!=e&&e!==C&&v.some((t=>t.value===e))&&A(e)}const T=e=>{const t=e.currentTarget,n=N.indexOf(t),a=v[n].value;a!==C&&(I(t),A(a),null!=w&&P(w,String(a)))},E=e=>{var t,n;let a=null;switch(e.key){case"ArrowRight":{const n=N.indexOf(e.currentTarget)+1;a=null!=(t=N[n])?t:N[0];break}case"ArrowLeft":{const t=N.indexOf(e.currentTarget)-1;a=null!=(n=N[t])?n:N[N.length-1];break}}null==a||a.focus()};return a.createElement("div",{className:(0,s.Z)("tabs-container",u)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":c},f)},v.map((({value:e,label:t,attributes:n})=>{return a.createElement("li",(o=b({role:"tab",tabIndex:C===e?0:-1,"aria-selected":C===e,key:e,ref:e=>N.push(e),onKeyDown:E,onFocus:T,onClick:T},n),r={className:(0,s.Z)("tabs__item",p,null==n?void 0:n.className,{"tabs__item--active":C===e})},d(o,h(r))),null!=t?t:e);var o,r}))),o?(0,a.cloneElement)(k.filter((e=>e.props.value===C))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==C})))))}function v(e){const t=(0,o.Z)();return a.createElement(k,b({key:String(t)},e))}},5215:function(e,t,n){n.r(t),n.d(t,{assets:function(){return f},contentTitle:function(){return m},default:function(){return v},frontMatter:function(){return g},metadata:function(){return w},toc:function(){return b}});var a=n(3905),s=n(5332),o=n(4455),r=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,h=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&d(e,n,t[n]);if(u)for(var n of u(t))c.call(t,n)&&d(e,n,t[n]);return e};const g={id:"test-api-testing",title:"API testing"},m=void 0,w={unversionedId:"test-api-testing",id:"version-stable/test-api-testing",title:"API testing",description:"Playwright can be used to get access to the REST API of your application.",source:"@site/versioned_docs/version-stable/test-api-testing.mdx",sourceDirName:".",slug:"/test-api-testing",permalink:"/docs/test-api-testing",draft:!1,tags:[],version:"stable",frontMatter:{id:"test-api-testing",title:"API testing"},sidebar:"docs",previous:{title:"Annotations",permalink:"/docs/test-annotations"},next:{title:"Assertions",permalink:"/docs/test-assertions"}},f={},b=[{value:"Writing API Test",id:"writing-api-test",level:2},{value:"Configuration",id:"configuration",level:3},{value:"Writing tests",id:"writing-tests",level:3},{value:"Setup and teardown",id:"setup-and-teardown",level:3},{value:"Using request context",id:"using-request-context",level:2},{value:"Sending API requests from UI tests",id:"sending-api-requests-from-ui-tests",level:2},{value:"Establishing preconditions",id:"establishing-preconditions",level:3},{value:"Validating postconditions",id:"validating-postconditions",level:3},{value:"Reusing authentication state",id:"reusing-authentication-state",level:2},{value:"Context request vs global request",id:"context-request-vs-global-request",level:2}],k={toc:b};function v(e){var t,n=e,{components:r}=n,d=((e,t)=>{var n={};for(var a in e)p.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&u)for(var a of u(e))t.indexOf(a)<0&&c.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=h(h({},k),d),i(t,l({components:r,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"Playwright can be used to get access to the ",(0,a.kt)("a",h({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Representational_state_transfer"}),"REST")," API of your application."),(0,a.kt)("p",null,"Sometimes you may want to send requests to the server directly from Node.js without loading a page and running js code in it. A few examples where it may come in handy:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Test your server API."),(0,a.kt)("li",{parentName:"ul"},"Prepare server side state before visiting the web application in a test."),(0,a.kt)("li",{parentName:"ul"},"Validate server side post-conditions after running some actions in the browser.")),(0,a.kt)("p",null,"All of that could be achieved via ",(0,a.kt)("a",h({parentName:"p"},{href:"/docs/api/class-apirequestcontext",title:"APIRequestContext"}),"APIRequestContext")," methods."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",h({parentName:"li"},{href:"#writing-api-test"}),"Writing API Test"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",h({parentName:"li"},{href:"#configuration"}),"Configuration")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",h({parentName:"li"},{href:"#writing-tests"}),"Writing tests")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",h({parentName:"li"},{href:"#setup-and-teardown"}),"Setup and teardown")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",h({parentName:"li"},{href:"#using-request-context"}),"Using request context")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",h({parentName:"li"},{href:"#sending-api-requests-from-ui-tests"}),"Sending API requests from UI tests"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",h({parentName:"li"},{href:"#establishing-preconditions"}),"Establishing preconditions")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",h({parentName:"li"},{href:"#validating-postconditions"}),"Validating postconditions")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",h({parentName:"li"},{href:"#reusing-authentication-state"}),"Reusing authentication state")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",h({parentName:"li"},{href:"#context-request-vs-global-request"}),"Context request vs global request"))),(0,a.kt)("h2",h({},{id:"writing-api-test"}),"Writing API Test"),(0,a.kt)("p",null,(0,a.kt)("a",h({parentName:"p"},{href:"/docs/api/class-apirequestcontext",title:"APIRequestContext"}),"APIRequestContext")," can send all kinds of HTTP(S) requests over network."),(0,a.kt)("p",null,"The following example demonstrates how to use Playwright to test issues creation via ",(0,a.kt)("a",h({parentName:"p"},{href:"https://docs.github.com/en/rest"}),"GitHub API"),". The test suite will do the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Create a new repository before running tests."),(0,a.kt)("li",{parentName:"ul"},"Create a few issues and validate server state."),(0,a.kt)("li",{parentName:"ul"},"Delete the repository after running tests.")),(0,a.kt)("h3",h({},{id:"configuration"}),"Configuration"),(0,a.kt)("p",null,"GitHub API requires authorization, so we'll configure the token once for all tests. While at it, we'll also set the ",(0,a.kt)("inlineCode",{parentName:"p"},"baseURL")," to simplify the tests. You can either put them in the configuration file, or in the test file with ",(0,a.kt)("inlineCode",{parentName:"p"},"test.use()"),"."),(0,a.kt)(s.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"ts",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",h({parentName:"pre"},{className:"language-js"}),"// playwright.config.ts\nimport type { PlaywrightTestConfig } from '@playwright/test';\n\nconst config: PlaywrightTestConfig = {\n  use: {\n    // All requests we send go to this API endpoint.\n    baseURL: 'https://api.github.com',\n    extraHTTPHeaders: {\n      // We set this header per GitHub guidelines.\n      'Accept': 'application/vnd.github.v3+json',\n      // Add authorization token to all requests.\n      // Assuming personal access token available in the environment.\n      'Authorization': `token ${process.env.API_TOKEN}`,\n    },\n  }\n};\nexport default config;\n"))),(0,a.kt)(o.Z,{value:"js",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",h({parentName:"pre"},{className:"language-js"}),"// playwright.config.js\n// @ts-check\n/** @type {import('@playwright/test').PlaywrightTestConfig} */\nconst config = {\n  use: {\n    // All requests we send go to this API endpoint.\n    baseURL: 'https://api.github.com',\n    extraHTTPHeaders: {\n      // We set this header per GitHub guidelines.\n      'Accept': 'application/vnd.github.v3+json',\n      // Add authorization token to all requests.\n      // Assuming personal access token available in the environment.\n      'Authorization': `token ${process.env.API_TOKEN}`,\n    },\n  }\n};\nmodule.exports = config;\n")))),(0,a.kt)("h3",h({},{id:"writing-tests"}),"Writing tests"),(0,a.kt)("p",null,"Playwright Test comes with the built-in ",(0,a.kt)("inlineCode",{parentName:"p"},"request")," fixture that respects configuration options like ",(0,a.kt)("inlineCode",{parentName:"p"},"baseURL")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"extraHTTPHeaders")," we specified and is ready to send some requests."),(0,a.kt)("p",null,"Now we can add a few tests that will create new issues in the repository."),(0,a.kt)("pre",null,(0,a.kt)("code",h({parentName:"pre"},{className:"language-js"}),"const REPO = 'test-repo-1';\nconst USER = 'github-username';\n\ntest('should create a bug report', async ({ request }) => {\n  const newIssue = await request.post(`/repos/${USER}/${REPO}/issues`, {\n    data: {\n      title: '[Bug] report 1',\n      body: 'Bug description',\n    }\n  });\n  expect(newIssue.ok()).toBeTruthy();\n\n  const issues = await request.get(`/repos/${USER}/${REPO}/issues`);\n  expect(issues.ok()).toBeTruthy();\n  expect(await issues.json()).toContainEqual(expect.objectContaining({\n    title: '[Bug] report 1',\n    body: 'Bug description'\n  }));\n});\n\ntest('should create a feature request', async ({ request }) => {\n  const newIssue = await request.post(`/repos/${USER}/${REPO}/issues`, {\n    data: {\n      title: '[Feature] request 1',\n      body: 'Feature description',\n    }\n  });\n  expect(newIssue.ok()).toBeTruthy();\n\n  const issues = await request.get(`/repos/${USER}/${REPO}/issues`);\n  expect(issues.ok()).toBeTruthy();\n  expect(await issues.json()).toContainEqual(expect.objectContaining({\n    title: '[Feature] request 1',\n    body: 'Feature description'\n  }));\n});\n")),(0,a.kt)("h3",h({},{id:"setup-and-teardown"}),"Setup and teardown"),(0,a.kt)("p",null,"These tests assume that repository exists. You probably want to create a new one before running tests and delete it afterwards. Use ",(0,a.kt)("inlineCode",{parentName:"p"},"beforeAll")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"afterAll")," hooks for that."),(0,a.kt)("pre",null,(0,a.kt)("code",h({parentName:"pre"},{className:"language-js"}),"test.beforeAll(async ({ request }) => {\n  // Create a new repository\n  const response = await request.post('/user/repos', {\n    data: {\n      name: REPO\n    }\n  });\n  expect(response.ok()).toBeTruthy();\n});\n\ntest.afterAll(async ({ request }) => {\n  // Delete the repository\n  const response = await request.delete(`/repos/${USER}/${REPO}`);\n  expect(response.ok()).toBeTruthy();\n});\n")),(0,a.kt)("h2",h({},{id:"using-request-context"}),"Using request context"),(0,a.kt)("p",null,"Behind the scenes, ",(0,a.kt)("a",h({parentName:"p"},{href:"./api/class-fixtures#fixtures-request"}),(0,a.kt)("inlineCode",{parentName:"a"},"request")," fixture")," will actually call ",(0,a.kt)("a",h({parentName:"p"},{href:"/docs/api/class-apirequest#api-request-new-context"}),"apiRequest.newContext([options])"),". You can always do that manually if you'd like more control. Below is a standalone script that does the same as ",(0,a.kt)("inlineCode",{parentName:"p"},"beforeAll")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"afterAll")," from above."),(0,a.kt)("pre",null,(0,a.kt)("code",h({parentName:"pre"},{className:"language-js"}),"const { request } = require('@playwright/test');\nconst REPO = 'test-repo-1';\nconst USER = 'github-username';\n\n(async () => {\n  // Create a context that will issue http requests.\n  const context = await request.newContext({\n    baseURL: 'https://api.github.com',\n  });\n\n  // Create a repository.\n  await context.post('/user/repos', {\n    headers: {\n      'Accept': 'application/vnd.github.v3+json',\n      // Add GitHub personal access token.\n      'Authorization': `token ${process.env.API_TOKEN}`,\n    },\n    data: {\n      name: REPO\n    }\n  });\n\n  // Delete a repository.\n  await context.delete(`/repos/${USER}/${REPO}`, {\n    headers: {\n      'Accept': 'application/vnd.github.v3+json',\n      // Add GitHub personal access token.\n      'Authorization': `token ${process.env.API_TOKEN}`,\n    }\n  });\n})()\n")),(0,a.kt)("h2",h({},{id:"sending-api-requests-from-ui-tests"}),"Sending API requests from UI tests"),(0,a.kt)("p",null,"While running tests inside browsers you may want to make calls to the HTTP API of your application. It may be helpful if you need to prepare server state before running a test or to check some postconditions on the server after performing some actions in the browser. All of that could be achieved via ",(0,a.kt)("a",h({parentName:"p"},{href:"/docs/api/class-apirequestcontext",title:"APIRequestContext"}),"APIRequestContext")," methods."),(0,a.kt)("h3",h({},{id:"establishing-preconditions"}),"Establishing preconditions"),(0,a.kt)("p",null,"The following test creates a new issue via API and then navigates to the list of all issues in the project to check that it appears at the top of the list."),(0,a.kt)(s.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"ts",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",h({parentName:"pre"},{className:"language-js"}),"import { test, expect } from '@playwright/test';\n\nconst REPO = 'test-repo-1';\nconst USER = 'github-username';\n\n// Request context is reused by all tests in the file.\nlet apiContext;\n\ntest.beforeAll(async ({ playwright }) => {\n  apiContext = await playwright.request.newContext({\n    // All requests we send go to this API endpoint.\n    baseURL: 'https://api.github.com',\n    extraHTTPHeaders: {\n      // We set this header per GitHub guidelines.\n      'Accept': 'application/vnd.github.v3+json',\n      // Add authorization token to all requests.\n      // Assuming personal access token available in the environment.\n      'Authorization': `token ${process.env.API_TOKEN}`,\n    },\n  });\n})\n\ntest.afterAll(async ({ }) => {\n  // Dispose all responses.\n  await apiContext.dispose();\n});\n\ntest('last created issue should be first in the list', async ({ page }) => {\n  const newIssue = await apiContext.post(`/repos/${USER}/${REPO}/issues`, {\n    data: {\n      title: '[Feature] request 1',\n    }\n  });\n  expect(newIssue.ok()).toBeTruthy();\n\n  await page.goto(`https://github.com/${USER}/${REPO}/issues`);\n  const firstIssue = page.locator(`a[data-hovercard-type='issue']`).first();\n  await expect(firstIssue).toHaveText('[Feature] request 1');\n});\n"))),(0,a.kt)(o.Z,{value:"js",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",h({parentName:"pre"},{className:"language-js"}),"// @ts-check\nconst { test, expect } = require('@playwright/test');\n\nconst REPO = 'test-repo-1';\nconst USER = 'github-username';\n\n// Request context is reused by all tests in the file.\nlet apiContext;\n\ntest.beforeAll(async ({ playwright }) => {\n  apiContext = await playwright.request.newContext({\n    // All requests we send go to this API endpoint.\n    baseURL: 'https://api.github.com',\n    extraHTTPHeaders: {\n      // We set this header per GitHub guidelines.\n      'Accept': 'application/vnd.github.v3+json',\n      // Add authorization token to all requests.\n      // Assuming personal access token available in the environment.\n      'Authorization': `token ${process.env.API_TOKEN}`,\n    },\n  });\n})\n\ntest.afterAll(async ({ }) => {\n  // Dispose all responses.\n  await apiContext.dispose();\n});\n\ntest('last created issue should be first in the list', async ({ page }) => {\n  const newIssue = await apiContext.post(`/repos/${USER}/${REPO}/issues`, {\n    data: {\n      title: '[Feature] request 1',\n    }\n  });\n  expect(newIssue.ok()).toBeTruthy();\n\n  await page.goto(`https://github.com/${USER}/${REPO}/issues`);\n  const firstIssue = page.locator(`a[data-hovercard-type='issue']`).first();\n  await expect(firstIssue).toHaveText('[Feature] request 1');\n});\n")))),(0,a.kt)("h3",h({},{id:"validating-postconditions"}),"Validating postconditions"),(0,a.kt)("p",null,"The following test creates a new issue via user interface in the browser and then uses checks if it was created via API:"),(0,a.kt)(s.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"ts",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",h({parentName:"pre"},{className:"language-js"}),"import { test, expect } from '@playwright/test';\n\nconst REPO = 'test-repo-1';\nconst USER = 'github-username';\n\n// Request context is reused by all tests in the file.\nlet apiContext;\n\ntest.beforeAll(async ({ playwright }) => {\n  apiContext = await playwright.request.newContext({\n    // All requests we send go to this API endpoint.\n    baseURL: 'https://api.github.com',\n    extraHTTPHeaders: {\n      // We set this header per GitHub guidelines.\n      'Accept': 'application/vnd.github.v3+json',\n      // Add authorization token to all requests.\n      // Assuming personal access token available in the environment.\n      'Authorization': `token ${process.env.API_TOKEN}`,\n    },\n  });\n})\n\ntest.afterAll(async ({ }) => {\n  // Dispose all responses.\n  await apiContext.dispose();\n});\n\ntest('last created issue should be on the server', async ({ page, request }) => {\n  await page.goto(`https://github.com/${USER}/${REPO}/issues`);\n  await page.locator('text=New Issue').click();\n  await page.locator('[aria-label=\"Title\"]').fill('Bug report 1');\n  await page.locator('[aria-label=\"Comment body\"]').fill('Bug description');\n  await page.locator('text=Submit new issue').click();\n  const issueId = page.url().substr(page.url().lastIndexOf('/'));\n\n  const newIssue = await request.get(`https://api.github.com/repos/${USER}/${REPO}/issues/${issueId}`);\n  expect(newIssue.ok()).toBeTruthy();\n  expect(newIssue).toEqual(expect.objectContaining({\n    title: 'Bug report 1'\n  }));\n});\n"))),(0,a.kt)(o.Z,{value:"js",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",h({parentName:"pre"},{className:"language-js"}),"// @ts-check\nconst { test, expect } = require('@playwright/test');\n\nconst REPO = 'test-repo-1';\nconst USER = 'github-username';\n\n// Request context is reused by all tests in the file.\nlet apiContext;\n\ntest.beforeAll(async ({ playwright }) => {\n  apiContext = await playwright.request.newContext({\n    // All requests we send go to this API endpoint.\n    baseURL: 'https://api.github.com',\n    extraHTTPHeaders: {\n      // We set this header per GitHub guidelines.\n      'Accept': 'application/vnd.github.v3+json',\n      // Add authorization token to all requests.\n      // Assuming personal access token available in the environment.\n      'Authorization': `token ${process.env.API_TOKEN}`,\n    },\n  });\n})\n\ntest.afterAll(async ({ }) => {\n  // Dispose all responses.\n  await apiContext.dispose();\n});\n\ntest('last created issue should be on the server', async ({ page, request }) => {\n  await page.goto(`https://github.com/${USER}/${REPO}/issues`);\n  await page.locator('text=New Issue').click();\n  await page.locator('[aria-label=\"Title\"]').fill('Bug report 1');\n  await page.locator('[aria-label=\"Comment body\"]').fill('Bug description');\n  await page.locator('text=Submit new issue').click();\n  const issueId = page.url().substr(page.url().lastIndexOf('/'));\n\n  const newIssue = await request.get(`https://api.github.com/repos/${USER}/${REPO}/issues/${issueId}`);\n  expect(newIssue.ok()).toBeTruthy();\n  expect(newIssue).toEqual(expect.objectContaining({\n    title: 'Bug report 1'\n  }));\n});\n")))),(0,a.kt)("h2",h({},{id:"reusing-authentication-state"}),"Reusing authentication state"),(0,a.kt)("p",null,"Web apps use cookie-based or token-based authentication, where authenticated state is stored as ",(0,a.kt)("a",h({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies"}),"cookies"),". Playwright provides ",(0,a.kt)("a",h({parentName:"p"},{href:"/docs/api/class-apirequestcontext#api-request-context-storage-state"}),"apiRequestContext.storageState([options])")," method that can be used to retrieve storage state from an authenticated context and then create new contexts with that state."),(0,a.kt)("p",null,"Storage state is interchangeable between ",(0,a.kt)("a",h({parentName:"p"},{href:"/docs/api/class-browsercontext",title:"BrowserContext"}),"BrowserContext")," and ",(0,a.kt)("a",h({parentName:"p"},{href:"/docs/api/class-apirequestcontext",title:"APIRequestContext"}),"APIRequestContext"),". You can use it to log in via API calls and then create a new context with cookies already there. The following code snippet retrieves state from an authenticated ",(0,a.kt)("a",h({parentName:"p"},{href:"/docs/api/class-apirequestcontext",title:"APIRequestContext"}),"APIRequestContext")," and creates a new ",(0,a.kt)("a",h({parentName:"p"},{href:"/docs/api/class-browsercontext",title:"BrowserContext"}),"BrowserContext")," with that state."),(0,a.kt)("pre",null,(0,a.kt)("code",h({parentName:"pre"},{className:"language-js"}),"const requestContext = await request.newContext({\n  httpCredentials: {\n    username: 'user',\n    password: 'passwd'\n  }\n});\nawait requestContext.get(`https://api.example.com/login`);\n// Save storage state into the file.\nawait requestContext.storageState({ path: 'state.json' });\n\n// Create a new context with the saved storage state.\nconst context = await browser.newContext({ storageState: 'state.json' });\n")),(0,a.kt)("h2",h({},{id:"context-request-vs-global-request"}),"Context request vs global request"),(0,a.kt)("p",null,"There are two types of ",(0,a.kt)("a",h({parentName:"p"},{href:"/docs/api/class-apirequestcontext",title:"APIRequestContext"}),"APIRequestContext"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"associated with a ",(0,a.kt)("a",h({parentName:"li"},{href:"/docs/api/class-browsercontext",title:"BrowserContext"}),"BrowserContext")),(0,a.kt)("li",{parentName:"ul"},"isolated instance, created via ",(0,a.kt)("a",h({parentName:"li"},{href:"/docs/api/class-apirequest#api-request-new-context"}),"apiRequest.newContext([options])"))),(0,a.kt)("p",null,"The main difference is that ",(0,a.kt)("a",h({parentName:"p"},{href:"/docs/api/class-apirequestcontext",title:"APIRequestContext"}),"APIRequestContext")," accessible via ",(0,a.kt)("a",h({parentName:"p"},{href:"/docs/api/class-browsercontext#browser-context-request"}),"browserContext.request")," and ",(0,a.kt)("a",h({parentName:"p"},{href:"/docs/api/class-page#page-request"}),"page.request")," will populate request's ",(0,a.kt)("inlineCode",{parentName:"p"},"Cookie")," header from the browser context and will automatically update browser cookies if ",(0,a.kt)("a",h({parentName:"p"},{href:"/docs/api/class-apiresponse",title:"APIResponse"}),"APIResponse")," has ",(0,a.kt)("inlineCode",{parentName:"p"},"Set-Cookie")," header:"),(0,a.kt)("pre",null,(0,a.kt)("code",h({parentName:"pre"},{className:"language-js"}),"test('context request will share cookie storage with its browser context', async ({ page, context }) => {\n  await context.route('https://www.github.com/', async (route) => {\n    // Send an API request that shares cookie storage with the browser context.\n    const response = await context.request.fetch(route.request());\n    const responseHeaders = response.headers();\n\n    // The response will have 'Set-Cookie' header.\n    const responseCookies = new Map(responseHeaders['set-cookie'].split('\\n').map(c => c.split(';', 2)[0].split('=')));\n    // The response will have 3 cookies in 'Set-Cookie' header.\n    expect(responseCookies.size).toBe(3);\n    const contextCookies = await context.cookies();\n    // The browser context will already contain all the cookies from the API response.\n    expect(new Map(contextCookies.map(({name, value}) => [name, value]))).toEqual(responseCookies);\n\n    route.fulfill({\n      response,\n      headers: {...responseHeaders, foo: 'bar'},\n    });\n  });\n  await page.goto('https://www.github.com/');\n});\n")),(0,a.kt)("p",null,"If you don't want ",(0,a.kt)("a",h({parentName:"p"},{href:"/docs/api/class-apirequestcontext",title:"APIRequestContext"}),"APIRequestContext")," to use and update cookies from the browser context, you can manually create a new instance of ",(0,a.kt)("a",h({parentName:"p"},{href:"/docs/api/class-apirequestcontext",title:"APIRequestContext"}),"APIRequestContext")," which will have its own isolated cookies:"),(0,a.kt)("pre",null,(0,a.kt)("code",h({parentName:"pre"},{className:"language-js"}),"test('global context request has isolated cookie storage', async ({ page, context, browser, playwright }) => {\n  // Create a new instance of APIRequestContext with isolated cookie storage.\n  const request = await playwright.request.newContext();\n  await context.route('https://www.github.com/', async (route) => {\n    const response = await request.fetch(route.request());\n    const responseHeaders = response.headers();\n\n    const responseCookies = new Map(responseHeaders['set-cookie'].split('\\n').map(c => c.split(';', 2)[0].split('=')));\n    // The response will have 3 cookies in 'Set-Cookie' header.\n    expect(responseCookies.size).toBe(3);\n    const contextCookies = await context.cookies();\n    // The browser context will not have any cookies from the isolated API request.\n    expect(contextCookies.length).toBe(0);\n\n    // Manually export cookie storage.\n    const storageState = await request.storageState();\n    // Create a new context and initialize it with the cookies from the global request.\n    const browserContext2 = await browser.newContext({ storageState });\n    const contextCookies2 = await browserContext2.cookies();\n    // The new browser context will already contain all the cookies from the API response.\n    expect(new Map(contextCookies2.map(({name, value}) => [name, value]))).toEqual(responseCookies);\n\n    route.fulfill({\n      response,\n      headers: {...responseHeaders, foo: 'bar'},\n    });\n  });\n  await page.goto('https://www.github.com/');\n  await request.dispose();\n});\n")))}v.isMDXComponent=!0}}]);