"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[2633],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return h}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),i=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=i(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=i(a),h=r,d=m["".concat(p,".").concat(h)]||m[h]||u[h]||s;return a?n.createElement(d,o(o({ref:t},c),{},{components:a})):n.createElement(d,o({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,o=new Array(s);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var i=2;i<s;i++)o[i]=a[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},4455:function(e,t,a){a.d(t,{Z:function(){return u}});var n=a(7294),r=a(6010),s="tabItem_Ymn6",o=Object.defineProperty,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,c=(e,t,a)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;function u({children:e,hidden:t,className:a}){return n.createElement("div",((e,t)=>{for(var a in t||(t={}))p.call(t,a)&&c(e,a,t[a]);if(l)for(var a of l(t))i.call(t,a)&&c(e,a,t[a]);return e})({role:"tabpanel",className:(0,r.Z)(s,a)},{hidden:t}),e)}},5332:function(e,t,a){a.d(t,{Z:function(){return w}});var n=a(7294),r=a(6010),s=a(4939),o=a(2174),l=a(2107),p=a(8757),i="tabList__CuJ",c="tabItem_LNqP",u=Object.defineProperty,m=Object.defineProperties,h=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,y=(e,t,a)=>t in e?u(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,v=(e,t)=>{for(var a in t||(t={}))f.call(t,a)&&y(e,a,t[a]);if(d)for(var a of d(t))g.call(t,a)&&y(e,a,t[a]);return e};function b(e){var t,a;const{lazy:s,block:u,defaultValue:d,values:f,groupId:g,className:y}=e,b=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),w=null!=f?f:b.map((({props:{value:e,label:t,attributes:a}})=>({value:e,label:t,attributes:a}))),k=(0,o.l)(w,((e,t)=>e.value===t.value));if(k.length>0)throw new Error(`Docusaurus error: Duplicate values "${k.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const x=null===d?d:null!=(a=null!=d?d:null==(t=b.find((e=>e.props.default)))?void 0:t.props.value)?a:b[0].props.value;if(null!==x&&!w.some((e=>e.value===x)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${x}" but none of its children has the corresponding value. Available values are: ${w.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:N,setTabGroupChoices:j}=(0,l.U)(),[T,O]=(0,n.useState)(x),S=[],{blockElementScrollPositionUntilNextRender:P}=(0,p.o5)();if(null!=g){const e=N[g];null!=e&&e!==T&&w.some((t=>t.value===e))&&O(e)}const I=e=>{const t=e.currentTarget,a=S.indexOf(t),n=w[a].value;n!==T&&(P(t),O(n),null!=g&&j(g,String(n)))},C=e=>{var t,a;let n=null;switch(e.key){case"ArrowRight":{const a=S.indexOf(e.currentTarget)+1;n=null!=(t=S[a])?t:S[0];break}case"ArrowLeft":{const t=S.indexOf(e.currentTarget)-1;n=null!=(a=S[t])?a:S[S.length-1];break}}null==n||n.focus()};return n.createElement("div",{className:(0,r.Z)("tabs-container",i)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":u},y)},w.map((({value:e,label:t,attributes:a})=>{return n.createElement("li",(s=v({role:"tab",tabIndex:T===e?0:-1,"aria-selected":T===e,key:e,ref:e=>S.push(e),onKeyDown:C,onFocus:I,onClick:I},a),o={className:(0,r.Z)("tabs__item",c,null==a?void 0:a.className,{"tabs__item--active":T===e})},m(s,h(o))),null!=t?t:e);var s,o}))),s?(0,n.cloneElement)(b.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==T})))))}function w(e){const t=(0,s.Z)();return n.createElement(b,v({key:String(t)},e))}},6142:function(e,t,a){a.r(t),a.d(t,{assets:function(){return y},contentTitle:function(){return f},default:function(){return w},frontMatter:function(){return d},metadata:function(){return g},toc:function(){return v}});var n=a(3905),r=a(5332),s=a(4455),o=Object.defineProperty,l=Object.defineProperties,p=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,m=(e,t,a)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,h=(e,t)=>{for(var a in t||(t={}))c.call(t,a)&&m(e,a,t[a]);if(i)for(var a of i(t))u.call(t,a)&&m(e,a,t[a]);return e};const d={id:"test-snapshots",title:"Visual comparisons"},f=void 0,g={unversionedId:"test-snapshots",id:"version-stable/test-snapshots",title:"Visual comparisons",description:"Playwright Test includes the ability to produce and visually compare screenshots using await expect(page).toHaveScreenshot(). On first execution, Playwright test will generate reference screenshots. Subsequent runs will compare against the reference.",source:"@site/versioned_docs/version-stable/test-snapshots.mdx",sourceDirName:".",slug:"/test-snapshots",permalink:"/docs/test-snapshots",draft:!1,tags:[],version:"stable",frontMatter:{id:"test-snapshots",title:"Visual comparisons"},sidebar:"docs",previous:{title:"Timeouts",permalink:"/docs/test-timeouts"},next:{title:"Advanced: configuration",permalink:"/docs/test-advanced"}},y={},v=[],b={toc:v};function w(e){var t,a=e,{components:o}=a,m=((e,t)=>{var a={};for(var n in e)c.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&u.call(e,n)&&(a[n]=e[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(t=h(h({},b),m),l(t,p({components:o,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"Playwright Test includes the ability to produce and visually compare screenshots using ",(0,n.kt)("inlineCode",{parentName:"p"},"await expect(page).toHaveScreenshot()"),". On first execution, Playwright test will generate reference screenshots. Subsequent runs will compare against the reference."),(0,n.kt)(r.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,n.kt)(s.Z,{value:"ts",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",h({parentName:"pre"},{className:"language-js"}),"// example.spec.ts\nimport { test, expect } from '@playwright/test';\n\ntest('example test', async ({ page }) => {\n  await page.goto('https://playwright.dev');\n  await expect(page).toHaveScreenshot();\n});\n"))),(0,n.kt)(s.Z,{value:"js",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",h({parentName:"pre"},{className:"language-js"}),"// example.spec.js\nconst { test, expect } = require('@playwright/test');\n\ntest('example test', async ({ page }) => {\n  await page.goto('https://playwright.dev');\n  await expect(page).toHaveScreenshot();\n});\n")))),(0,n.kt)("p",null,"When you run above for the first time, test runner will say:"),(0,n.kt)("pre",null,(0,n.kt)("code",h({parentName:"pre"},{}),"Error: example.spec.ts-snapshots/example-test-1-chromium-darwin.png is missing in snapshots, writing actual.\n")),(0,n.kt)("p",null,"That's because there was no golden file yet. This method took a bunch of screenshots until two consecutive screenshots matched, and saved the last screenshot to file system. It is now ready to be added to the repository."),(0,n.kt)("p",null,"The name of the folder with the golden expectations starts with the name of your test file:"),(0,n.kt)("pre",null,(0,n.kt)("code",h({parentName:"pre"},{className:"language-bash"}),"drwxr-xr-x  5 user  group  160 Jun  4 11:46 .\ndrwxr-xr-x  6 user  group  192 Jun  4 11:45 ..\n-rw-r--r--  1 user  group  231 Jun  4 11:16 example.spec.ts\ndrwxr-xr-x  3 user  group   96 Jun  4 11:46 example.spec.ts-snapshots\n")),(0,n.kt)("p",null,"The snapshot name ",(0,n.kt)("inlineCode",{parentName:"p"},"example-test-1-chromium-darwin.png")," consists of a few parts:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"example-test-1.png")," - an auto-generated name of the snapshot. Alternatively you can specify snapshot name as the first argument of the ",(0,n.kt)("inlineCode",{parentName:"p"},"toHaveScreenshot()")," method:"),(0,n.kt)(r.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,n.kt)(s.Z,{value:"ts",mdxType:"TabItem"},(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",h({parentName:"pre"},{className:"language-js"}),"await expect(page).toHaveScreenshot('landing.png');\n"))),(0,n.kt)(s.Z,{value:"js",mdxType:"TabItem"},(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",h({parentName:"pre"},{className:"language-js"}),"await expect(page).toHaveScreenshot('landing.png');\n"))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"chromium-darwin")," - the browser name and the platform. Screenshots differ between browsers and platforms due to different rendering, fonts and more, so you will need different snapshots for them. If you use multiple projects in your ",(0,n.kt)("a",h({parentName:"p"},{href:"/docs/test-configuration"}),"configuration file"),", project name will be used instead of ",(0,n.kt)("inlineCode",{parentName:"p"},"chromium"),"."))),(0,n.kt)("p",null,"If you are not on the same operating system as your CI system, you can use Docker to generate/update the screenshots:"),(0,n.kt)("pre",null,(0,n.kt)("code",h({parentName:"pre"},{className:"language-bash"}),"docker run --rm --network host -v $(pwd):/work/ -w /work/ -it mcr.microsoft.com/playwright:v1.24.2-focal /bin/bash\nnpm install\nnpx playwright test --update-snapshots\n")),(0,n.kt)("p",null,"Sometimes you need to update the reference screenshot, for example when the page has changed. Do this with the  ",(0,n.kt)("inlineCode",{parentName:"p"},"--update-snapshots")," flag."),(0,n.kt)("pre",null,(0,n.kt)("code",h({parentName:"pre"},{className:"language-bash"}),"npx playwright test --update-snapshots\n")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Note that ",(0,n.kt)("inlineCode",{parentName:"p"},"snapshotName")," also accepts an array of path segments to the snapshot file such as ",(0,n.kt)("inlineCode",{parentName:"p"},"expect().toHaveScreenshot(['relative', 'path', 'to', 'snapshot.png'])"),".\nHowever, this path must stay within the snapshots directory for each test file (i.e. ",(0,n.kt)("inlineCode",{parentName:"p"},"a.spec.js-snapshots"),"), otherwise it will throw.")),(0,n.kt)("p",null,"Playwright Test uses the ",(0,n.kt)("a",h({parentName:"p"},{href:"https://github.com/mapbox/pixelmatch"}),"pixelmatch")," library. You can ",(0,n.kt)("a",h({parentName:"p"},{href:"./test-assertions#page-assertions-to-have-screenshot-2"}),"pass various options")," to modify its behavior:"),(0,n.kt)(r.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,n.kt)(s.Z,{value:"ts",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",h({parentName:"pre"},{className:"language-js"}),"// example.spec.ts\nimport { test, expect } from '@playwright/test';\n\ntest('example test', async ({ page }) => {\n  await page.goto('https://playwright.dev');\n  await expect(page).toHaveScreenshot({ maxDiffPixels: 100 });\n});\n"))),(0,n.kt)(s.Z,{value:"js",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",h({parentName:"pre"},{className:"language-js"}),"// example.spec.js\nconst { test, expect } = require('@playwright/test');\n\ntest('example test', async ({ page }) => {\n  await page.goto('https://playwright.dev');\n  await expect(page).toHaveScreenshot({ maxDiffPixels: 100 });\n});\n")))),(0,n.kt)("p",null,"If you'd like to share the default value among all the tests in the project, you can specify it in the playwright config, either globally or per project:"),(0,n.kt)(r.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,n.kt)(s.Z,{value:"ts",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",h({parentName:"pre"},{className:"language-js"}),"import type { PlaywrightTestConfig } from '@playwright/test';\nconst config: PlaywrightTestConfig = {\n  expect: {\n    toHaveScreenshot: { maxDiffPixels: 100 },\n  },\n};\nexport default config;\n"))),(0,n.kt)(s.Z,{value:"js",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",h({parentName:"pre"},{className:"language-js"}),"module.exports = {\n  expect: {\n    toHaveScreenshot: { maxDiffPixels: 100 },\n  },\n};\n")))),(0,n.kt)("p",null,"Apart from screenshots, you can use ",(0,n.kt)("inlineCode",{parentName:"p"},"expect(value).toMatchSnapshot(snapshotName)")," to compare text or arbitrary binary data. Playwright Test auto-detects the content type and uses the appropriate comparison algorithm."),(0,n.kt)("p",null,"Here we compare text content against the reference."),(0,n.kt)(r.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,n.kt)(s.Z,{value:"ts",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",h({parentName:"pre"},{className:"language-js"}),"// example.spec.ts\nimport { test, expect } from '@playwright/test';\n\ntest('example test', async ({ page }) => {\n  await page.goto('https://playwright.dev');\n  expect(await page.textContent('.hero__title')).toMatchSnapshot('hero.txt');\n});\n"))),(0,n.kt)(s.Z,{value:"js",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",h({parentName:"pre"},{className:"language-js"}),"// example.spec.js\nconst { test, expect } = require('@playwright/test');\n\ntest('example test', async ({ page }) => {\n  await page.goto('https://playwright.dev');\n  expect(await page.textContent('.hero__title')).toMatchSnapshot('hero.txt');\n});\n")))),(0,n.kt)("p",null,"Snapshots are stored next to the test file, in a separate directory. For example, ",(0,n.kt)("inlineCode",{parentName:"p"},"my.spec.ts")," file will produce and store snapshots in the ",(0,n.kt)("inlineCode",{parentName:"p"},"my.spec.ts-snapshots")," directory. You should commit this directory to your version control (e.g. ",(0,n.kt)("inlineCode",{parentName:"p"},"git"),"), and review any changes to it."))}w.isMDXComponent=!0}}]);