"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[73597],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),g=c(n),d=r,m=g["".concat(s,".").concat(d)]||g[d]||u[d]||o;return n?a.createElement(m,i(i({ref:t},p),{},{components:n})):a.createElement(m,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},73811:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(67294),r=Object.defineProperty,o=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;function c({children:e,hidden:t,className:n}){return a.createElement("div",((e,t)=>{for(var n in t||(t={}))i.call(t,n)&&s(e,n,t[n]);if(o)for(var n of o(t))l.call(t,n)&&s(e,n,t[n]);return e})({role:"tabpanel"},{hidden:t,className:n}),e)}},73824:function(e,t,n){n.d(t,{Z:function(){return f}});var a=n(67294),r=n(54939),o=n(39670),i=n(86010),l="tabItem_LplD",s=Object.defineProperty,c=Object.defineProperties,p=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,y=(e,t)=>{for(var n in t||(t={}))g.call(t,n)&&m(e,n,t[n]);if(u)for(var n of u(t))d.call(t,n)&&m(e,n,t[n]);return e};function v(e){var t,n,r;const{lazy:s,block:u,defaultValue:g,values:d,groupId:m,className:v}=e,f=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=null!=d?d:f.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),b=(0,o.lx)(h,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const w=null===g?g:null!=(r=null!=g?g:null==(t=f.find((e=>e.props.default)))?void 0:t.props.value)?r:null==(n=f[0])?void 0:n.props.value;if(null!==w&&!h.some((e=>e.value===w)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${w}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:O}=(0,o.UB)(),[x,P]=(0,a.useState)(w),j=[],{blockElementScrollPositionUntilNextRender:D}=(0,o.o5)();if(null!=m){const e=k[m];null!=e&&e!==x&&h.some((t=>t.value===e))&&P(e)}const T=e=>{const t=e.currentTarget,n=j.indexOf(t),a=h[n].value;a!==x&&(D(t),P(a),null!=m&&O(m,a))},C=e=>{let t=null;switch(e.key){case"ArrowRight":{const n=j.indexOf(e.currentTarget)+1;t=j[n]||j[0];break}case"ArrowLeft":{const n=j.indexOf(e.currentTarget)-1;t=j[n]||j[j.length-1];break}}null==t||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":u},v)},h.map((({value:e,label:t,attributes:n})=>{return a.createElement("li",(r=y({role:"tab",tabIndex:x===e?0:-1,"aria-selected":x===e,key:e,ref:e=>j.push(e),onKeyDown:C,onFocus:T,onClick:T},n),o={className:(0,i.Z)("tabs__item",l,null==n?void 0:n.className,{"tabs__item--active":x===e})},c(r,p(o))),null!=t?t:e);var r,o}))),s?(0,a.cloneElement)(f.filter((e=>e.props.value===x))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},f.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==x})))))}function f(e){const t=(0,r.Z)();return a.createElement(v,y({key:String(t)},e))}},15180:function(e,t,n){n.r(t),n.d(t,{assets:function(){return f},contentTitle:function(){return y},default:function(){return w},frontMatter:function(){return m},metadata:function(){return v},toc:function(){return h}});var a=n(3905),r=n(73824),o=n(73811),i=Object.defineProperty,l=Object.defineProperties,s=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,g=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&g(e,n,t[n]);if(c)for(var n of c(t))u.call(t,n)&&g(e,n,t[n]);return e};const m={id:"test-pom",title:"Page Object Model"},y=void 0,v={unversionedId:"test-pom",id:"version-1.19/test-pom",title:"Page Object Model",description:"Page Object Model is a common pattern that introduces abstractions over web app pages to simplify interactions with them in multiple tests. It is best explained by an example.",source:"@site/versioned_docs/version-1.19/test-pom.mdx",sourceDirName:".",slug:"/test-pom",permalink:"/docs/1.19/test-pom",tags:[],version:"1.19",frontMatter:{id:"test-pom",title:"Page Object Model"},sidebar:"version-1.19/docs",previous:{title:"Configuration",permalink:"/docs/1.19/test-configuration"},next:{title:"Parallelism and sharding",permalink:"/docs/1.19/test-parallel"}},f={},h=[],b={toc:h};function w(e){var t,n=e,{components:i}=n,g=((e,t)=>{var n={};for(var a in e)p.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&c)for(var a of c(e))t.indexOf(a)<0&&u.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=d(d({},b),g),l(t,s({components:i,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"Page Object Model is a common pattern that introduces abstractions over web app pages to simplify interactions with them in multiple tests. It is best explained by an example."),(0,a.kt)("p",null,"We will create a ",(0,a.kt)("inlineCode",{parentName:"p"},"PlaywrightDevPage")," helper class to encapsulate common operations on the ",(0,a.kt)("inlineCode",{parentName:"p"},"playwright.dev")," page. Internally, it will use the ",(0,a.kt)("inlineCode",{parentName:"p"},"page")," object."),(0,a.kt)(r.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"ts",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-ts"}),"// playwright-dev-page.ts\nimport { expect, Locator, Page } from '@playwright/test';\n\nexport class PlaywrightDevPage {\n  readonly page: Page;\n  readonly getStartedLink: Locator;\n  readonly coreConceptsLink: Locator;\n  readonly tocList: Locator;\n\n  constructor(page: Page) {\n    this.page = page;\n    this.getStartedLink = page.locator('text=Get started');\n    this.coreConceptsLink = page.locator('text=Core concepts');\n    this.tocList = page.locator('article ul > li > a');\n  }\n\n  async goto() {\n    await this.page.goto('https://playwright.dev');\n  }\n\n  async getStarted() {\n    await this.getStartedLink.first().click();\n    await expect(this.coreConceptsLink).toBeVisible();\n  }\n\n  async coreConcepts() {\n    await this.getStarted();\n    await this.page.click('text=Guides');\n    await this.coreConceptsLink.click();\n    await expect(this.page.locator('h1').locator(\"text=Core concepts\")).toBeVisible();\n  }\n}\n"))),(0,a.kt)(o.Z,{value:"js",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-js"}),"// playwright-dev-page.js\nconst { expect } = require('@playwright/test');\n\nexports.PlaywrightDevPage = class PlaywrightDevPage {\n\n  /**\n   * @param {import('@playwright/test').Page} page\n   */\n  constructor(page) {\n    this.page = page;\n    this.getStartedLink = page.locator('text=Get started');\n    this.coreConceptsLink = page.locator('text=Core concepts');\n    this.tocList = page.locator('article ul > li > a');\n  }\n\n  async goto() {\n    await this.page.goto('https://playwright.dev');\n  }\n\n  async getStarted() {\n    await this.getStartedLink.first().click();\n    await expect(this.coreConceptsLink).toBeVisible();\n  }\n\n  async coreConcepts() {\n    await this.getStarted();\n    await this.page.click('text=Guides');\n    await this.coreConceptsLink.click();\n    await expect(this.page.locator('h1').locator(\"text=Core concepts\")).toBeVisible();\n  }\n}\n")))),(0,a.kt)("p",null,"Now we can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"PlaywrightDevPage")," class in our tests."),(0,a.kt)(r.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"ts",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-ts"}),"// example.spec.ts\nimport { test, expect } from '@playwright/test';\nimport { PlaywrightDevPage } from './playwright-dev-page';\n\ntest('Get Started table of contents', async ({ page }) => {\n  const playwrightDev = new PlaywrightDevPage(page);\n  await playwrightDev.goto();\n  await playwrightDev.getStarted();\n  await expect(playwrightDev.tocList).toHaveText([\n    'Installation',\n    'First test',\n    'Writing assertions',\n    'Using test fixtures',\n    'Using test hooks',\n    'Learning the command line',\n    'Creating a configuration file',\n    'Release notes',\n  ]);\n});\n\ntest('Core Concepts table of contents', async ({ page }) => {\n  const playwrightDev = new PlaywrightDevPage(page);\n  await playwrightDev.goto();\n  await playwrightDev.coreConcepts();\n  await expect(playwrightDev.tocList.first()).toHaveText('Browser');\n});\n"))),(0,a.kt)(o.Z,{value:"js",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-js"}),"// example.spec.js\nconst { test, expect } = require('@playwright/test');\nconst { PlaywrightDevPage } = require('./playwright-dev-page');\n\ntest('Get Started table of contents', async ({ page }) => {\n  const playwrightDev = new PlaywrightDevPage(page);\n  await playwrightDev.goto();\n  await playwrightDev.getStarted();\n  await expect(playwrightDev.tocList).toHaveText([\n    'Installation',\n    'First test',\n    'Writing assertions',\n    'Using test fixtures',\n    'Using test hooks',\n    'Learning the command line',\n    'Creating a configuration file',\n    'Release notes',\n  ]);\n});\n\ntest('Core Concepts table of contents', async ({ page }) => {\n  const playwrightDev = new PlaywrightDevPage(page);\n  await playwrightDev.goto();\n  await playwrightDev.coreConcepts();\n  await expect(playwrightDev.tocList.first()).toHaveText('Browser');\n});\n")))))}w.isMDXComponent=!0}}]);