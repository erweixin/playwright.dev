"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[92505],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),g=p(r),m=a,d=g["".concat(i,".").concat(m)]||g[m]||c[m]||l;return r?n.createElement(d,o(o({ref:t},u),{},{components:r})):n.createElement(d,o({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=g;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<l;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},58215:function(e,t,r){var n=r(67294);t.Z=function(e){var t=e.children,r=e.hidden,a=e.className;return n.createElement("div",{role:"tabpanel",hidden:r,className:a},t)}},55064:function(e,t,r){r.d(t,{Z:function(){return c}});var n=r(67294),a=r(79443);var l=function(){var e=(0,n.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},o=r(86010),s="tabItem_1uMI",i="tabItemActive_2DSg";var p=37,u=39;var c=function(e){var t=e.lazy,r=e.block,a=e.defaultValue,c=e.values,g=e.groupId,m=e.className,d=l(),h=d.tabGroupChoices,f=d.setTabGroupChoices,y=(0,n.useState)(a),k=y[0],v=y[1],T=n.Children.toArray(e.children),b=[];if(null!=g){var w=h[g];null!=w&&w!==k&&c.some((function(e){return e.value===w}))&&v(w)}var N=function(e){var t=e.currentTarget,r=b.indexOf(t),n=c[r].value;v(n),null!=g&&(f(g,n),setTimeout((function(){var e,r,n,a,l,o,s,p;(e=t.getBoundingClientRect(),r=e.top,n=e.left,a=e.bottom,l=e.right,o=window,s=o.innerHeight,p=o.innerWidth,r>=0&&l<=p&&a<=s&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(i),setTimeout((function(){return t.classList.remove(i)}),2e3))}),150))},x=function(e){var t,r;switch(e.keyCode){case u:var n=b.indexOf(e.target)+1;r=b[n]||b[0];break;case p:var a=b.indexOf(e.target)-1;r=b[a]||b[b.length-1]}null==(t=r)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},m)},c.map((function(e){var t=e.value,r=e.label;return n.createElement("li",{role:"tab",tabIndex:k===t?0:-1,"aria-selected":k===t,className:(0,o.Z)("tabs__item",s,{"tabs__item--active":k===t}),key:t,ref:function(e){return b.push(e)},onKeyDown:x,onFocus:N,onClick:N},r)}))),t?(0,n.cloneElement)(T.filter((function(e){return e.props.value===k}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},T.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==k})}))))}},79443:function(e,t,r){var n=(0,r(67294).createContext)(void 0);t.Z=n},95525:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return c},default:function(){return m}});var n=r(22122),a=r(19756),l=(r(67294),r(3905)),o=r(55064),s=r(58215),i={id:"test-reporters",title:"Reporters"},p=void 0,u={unversionedId:"test-reporters",id:"test-reporters",isDocsHomePage:!1,title:"Reporters",description:"- Using reporters",source:"@site/docs/test-reporters.mdx",sourceDirName:".",slug:"/test-reporters",permalink:"/docs/next/test-reporters",version:"current",frontMatter:{id:"test-reporters",title:"Reporters"},sidebar:"docs",previous:{title:"Parameterize tests",permalink:"/docs/next/test-parameterize"},next:{title:"Test retry",permalink:"/docs/next/test-retries"}},c=[{value:"Using reporters",id:"using-reporters",children:[{value:"Multiple reporters",id:"multiple-reporters",children:[]},{value:"Reporters on CI",id:"reporters-on-ci",children:[]}]},{value:"Built-in reporters",id:"built-in-reporters",children:[{value:"List reporter",id:"list-reporter",children:[]},{value:"Line reporter",id:"line-reporter",children:[]},{value:"Dot reporter",id:"dot-reporter",children:[]},{value:"HTML reporter",id:"html-reporter",children:[]},{value:"JSON reporter",id:"json-reporter",children:[]},{value:"JUnit reporter",id:"junit-reporter",children:[]},{value:"GitHub Actions annotations",id:"github-actions-annotations",children:[]}]},{value:"Custom reporters",id:"custom-reporters",children:[]},{value:"Third party showcase",id:"third-party-showcase",children:[]}],g={toc:c};function m(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,n.Z)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#using-reporters"},"Using reporters")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#built-in-reporters"},"Built-in reporters")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#custom-reporters"},"Custom reporters")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#third-party-showcase"},"Third party showcase"))),(0,l.kt)("h2",{id:"using-reporters"},"Using reporters"),(0,l.kt)("p",null,"Playwright Test comes with a few built-in reporters for different needs and ability to provide custom reporters. The easiest way to try out built-in reporters is to pass ",(0,l.kt)("inlineCode",{parentName:"p"},"--reporter")," ",(0,l.kt)("a",{parentName:"p",href:"/docs/next/test-cli"},"command line option"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npx playwright test --reporter=line\n")),(0,l.kt)("p",null,"For more control, you can specify reporters programmatically in the ",(0,l.kt)("a",{parentName:"p",href:"/docs/next/test-configuration"},"configuration file"),"."),(0,l.kt)(o.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"ts",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"// playwright.config.ts\nimport { PlaywrightTestConfig } from '@playwright/test';\n\nconst config: PlaywrightTestConfig = {\n  reporter: 'line',\n};\nexport default config;\n"))),(0,l.kt)(s.Z,{value:"js",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// playwright.config.js\n// @ts-check\n\n/** @type {import('@playwright/test').PlaywrightTestConfig} */\nconst config = {\n  reporter: 'line',\n};\n\nmodule.exports = config;\n")))),(0,l.kt)("h3",{id:"multiple-reporters"},"Multiple reporters"),(0,l.kt)("p",null,"You can use multiple reporters at the same time. For example  you can use",(0,l.kt)("inlineCode",{parentName:"p"},"'list'")," for nice terminal output and ",(0,l.kt)("inlineCode",{parentName:"p"},"'json'")," to get a comprehensive json file with the test results."),(0,l.kt)(o.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"ts",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"// playwright.config.ts\nimport { PlaywrightTestConfig } from '@playwright/test';\n\nconst config: PlaywrightTestConfig = {\n  reporter: [\n    ['list'],\n    ['json', {  outputFile: 'test-results.json' }]\n  ],\n};\nexport default config;\n"))),(0,l.kt)(s.Z,{value:"js",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// playwright.config.js\n// @ts-check\n\n/** @type {import('@playwright/test').PlaywrightTestConfig} */\nconst config = {\n  reporter: [\n    ['list'],\n    ['json', {  outputFile: 'test-results.json' }]\n  ],\n};\n\nmodule.exports = config;\n")))),(0,l.kt)("h3",{id:"reporters-on-ci"},"Reporters on CI"),(0,l.kt)("p",null,"You can use different reporters locally and on CI. For example, using concise ",(0,l.kt)("inlineCode",{parentName:"p"},"'dot'")," reporter avoids too much output. This is the default on CI."),(0,l.kt)(o.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"ts",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"// playwright.config.ts\nimport { PlaywrightTestConfig } from '@playwright/test';\n\nconst config: PlaywrightTestConfig = {\n  // Concise 'dot' for CI, default 'list' when running locally\n  reporter: process.env.CI ? 'dot' : 'list',\n};\nexport default config;\n"))),(0,l.kt)(s.Z,{value:"js",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// playwright.config.js\n// @ts-check\n\n/** @type {import('@playwright/test').PlaywrightTestConfig} */\nconst config = {\n  // Concise 'dot' for CI, default 'list' when running locally\n  reporter: process.env.CI ? 'dot' : 'list',\n};\n\nmodule.exports = config;\n")))),(0,l.kt)("h2",{id:"built-in-reporters"},"Built-in reporters"),(0,l.kt)("p",null,"All built-in reporters show detailed information about failures, and mostly differ in verbosity for successful runs."),(0,l.kt)("h3",{id:"list-reporter"},"List reporter"),(0,l.kt)("p",null,"List reporter is default (except on CI where the ",(0,l.kt)("inlineCode",{parentName:"p"},"dot")," reporter is default). It prints a line for each test being run."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npx playwright test --reporter=list\n")),(0,l.kt)(o.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"ts",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"// playwright.config.ts\nimport { PlaywrightTestConfig } from '@playwright/test';\n\nconst config: PlaywrightTestConfig = {\n  reporter: 'list',\n};\nexport default config;\n"))),(0,l.kt)(s.Z,{value:"js",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// playwright.config.js\n// @ts-check\n\n/** @type {import('@playwright/test').PlaywrightTestConfig} */\nconst config = {\n  reporter: 'list',\n};\n\nmodule.exports = config;\n")))),(0,l.kt)("p",null,"Here is an example output in the middle of a test run. Failures will be listed at the end."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npx playwright test --reporter=list\nRunning 124 tests using 6 workers\n\n  \u2713 should access error in env (438ms)\n  \u2713 handle long test names (515ms)\n  x 1) render expected (691ms)\n  \u2713 should timeout (932ms)\n    should repeat each:\n  \u2713 should respect enclosing .gitignore (569ms)\n    should teardown env after timeout:\n    should respect excluded tests:\n  \u2713 should handle env beforeEach error (638ms)\n    should respect enclosing .gitignore:\n")),(0,l.kt)("h3",{id:"line-reporter"},"Line reporter"),(0,l.kt)("p",null,"Line reporter is more concise than the list reporter. It uses a single line to report last finished test, and prints failures when they occur. Line reporter is useful for large test suites where it shows the progress but does not spam the output by listing all the tests."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npx playwright test --reporter=line\n")),(0,l.kt)(o.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"ts",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"// playwright.config.ts\nimport { PlaywrightTestConfig } from '@playwright/test';\n\nconst config: PlaywrightTestConfig = {\n  reporter: 'line',\n};\nexport default config;\n"))),(0,l.kt)(s.Z,{value:"js",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// playwright.config.js\n// @ts-check\n\n/** @type {import('@playwright/test').PlaywrightTestConfig} */\nconst config = {\n  reporter: 'line',\n};\n\nmodule.exports = config;\n")))),(0,l.kt)("p",null,"Here is an example output in the middle of a test run. Failures are reported inline."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npx playwright test --reporter=line\nRunning 124 tests using 6 workers\n  1) dot-reporter.spec.ts:20:1 \u203a render expected ===================================================\n\n    Error: expect(received).toBe(expected) // Object.is equality\n\n    Expected: 1\n    Received: 0\n\n[23/124] gitignore.spec.ts - should respect nested .gitignore\n")),(0,l.kt)("h3",{id:"dot-reporter"},"Dot reporter"),(0,l.kt)("p",null,"Dot reporter is very concise - it only produces a single character per successful test run. It is the default on CI and useful where you don't want a lot of output."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npx playwright test --reporter=dot\n")),(0,l.kt)(o.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"ts",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"// playwright.config.ts\nimport { PlaywrightTestConfig } from '@playwright/test';\n\nconst config: PlaywrightTestConfig = {\n  reporter: 'dot',\n};\nexport default config;\n"))),(0,l.kt)(s.Z,{value:"js",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// playwright.config.js\n// @ts-check\n\n/** @type {import('@playwright/test').PlaywrightTestConfig} */\nconst config = {\n  reporter: 'dot',\n};\n\nmodule.exports = config;\n")))),(0,l.kt)("p",null,"Here is an example output in the middle of a test run. Failures will be listed at the end."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npx playwright test --reporter=dot\nRunning 124 tests using 6 workers\n\xb7\xb7\xb7\xb7\xb7\xb7F\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\n")),(0,l.kt)("h3",{id:"html-reporter"},"HTML reporter"),(0,l.kt)("p",null,"HTML reporter produces a self-contained folder that contains report for the test run that can be served as a web page."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npx playwright test --reporter=html\n")),(0,l.kt)("p",null,"By default, HTML report is opened automatically if some of the tests failed. You can control this behavior via the ",(0,l.kt)("inlineCode",{parentName:"p"},"open")," property in the Playwright config. The possible values for that property are ",(0,l.kt)("inlineCode",{parentName:"p"},"always"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"never")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"on-failure")," (default)."),(0,l.kt)(o.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"ts",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"// playwright.config.ts\nimport { PlaywrightTestConfig } from '@playwright/test';\n\nconst config: PlaywrightTestConfig = {\n  reporter: [ ['html', { open: 'never' }] ],\n};\nexport default config;\n"))),(0,l.kt)(s.Z,{value:"js",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// playwright.config.js\n// @ts-check\n\n/** @type {import('@playwright/test').PlaywrightTestConfig} */\nconst config = {\n  reporter: [ ['html', { open: 'never' }] ],\n};\n\nmodule.exports = config;\n")))),(0,l.kt)("p",null,"By default, report is written into the ",(0,l.kt)("inlineCode",{parentName:"p"},"playwright-report")," folder in the current working directory. One can override that location using the ",(0,l.kt)("inlineCode",{parentName:"p"},"PLAYWRIGHT_HTML_REPORT")," environment variable or a reporter configuration."),(0,l.kt)("p",null,"In configuration file, pass options directly:"),(0,l.kt)(o.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"ts",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"// playwright.config.ts\nimport { PlaywrightTestConfig } from '@playwright/test';\n\nconst config: PlaywrightTestConfig = {\n  reporter: [ ['html', { outputFolder: 'my-report' }] ],\n};\nexport default config;\n"))),(0,l.kt)(s.Z,{value:"js",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// playwright.config.js\n// @ts-check\n\n/** @type {import('@playwright/test').PlaywrightTestConfig} */\nconst config = {\n  reporter: [ ['html', { outputFolder: 'my-report' }] ],\n};\n\nmodule.exports = config;\n")))),(0,l.kt)("p",null,"A quick way of opening the last test run report is:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npx playwright show-report\n")),(0,l.kt)("p",null,"Or if there is a custom folder name:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npx playwright show-report my-report\n")),(0,l.kt)("h3",{id:"json-reporter"},"JSON reporter"),(0,l.kt)("p",null,"JSON reporter produces an object with all information about the test run."),(0,l.kt)("p",null,"Most likely you want to write the JSON to a file. When running with ",(0,l.kt)("inlineCode",{parentName:"p"},"--reporter=json"),", use ",(0,l.kt)("inlineCode",{parentName:"p"},"PLAYWRIGHT_JSON_OUTPUT_NAME")," environment variable:"),(0,l.kt)(o.Z,{groupId:"bash-flavor",defaultValue:"bash",values:[{label:"Bash",value:"bash"},{label:"PowerShell",value:"powershell"},{label:"Batch",value:"batch"}],mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"bash",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"PLAYWRIGHT_JSON_OUTPUT_NAME=results.json npx playwright test --reporter=json\n"))),(0,l.kt)(s.Z,{value:"powershell",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},'$env:PLAYWRIGHT_JSON_OUTPUT_NAME="results.json"\nnpx playwright test --reporter=json\n'))),(0,l.kt)(s.Z,{value:"batch",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-batch"},"set PLAYWRIGHT_JSON_OUTPUT_NAME=results.json\nnpx playwright test --reporter=json\n")))),(0,l.kt)("p",null,"In configuration file, pass options directly:"),(0,l.kt)(o.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"ts",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"// playwright.config.ts\nimport { PlaywrightTestConfig } from '@playwright/test';\n\nconst config: PlaywrightTestConfig = {\n  reporter: [ ['json', { outputFile: 'results.json' }] ],\n};\nexport default config;\n"))),(0,l.kt)(s.Z,{value:"js",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// playwright.config.js\n// @ts-check\n\n/** @type {import('@playwright/test').PlaywrightTestConfig} */\nconst config = {\n  reporter: [ ['json', { outputFile: 'results.json' }] ],\n};\n\nmodule.exports = config;\n")))),(0,l.kt)("h3",{id:"junit-reporter"},"JUnit reporter"),(0,l.kt)("p",null,"JUnit reporter produces a JUnit-style xml report."),(0,l.kt)("p",null,"Most likely you want to write the report to an xml file. When running with ",(0,l.kt)("inlineCode",{parentName:"p"},"--reporter=junit"),", use ",(0,l.kt)("inlineCode",{parentName:"p"},"PLAYWRIGHT_JUNIT_OUTPUT_NAME")," environment variable:"),(0,l.kt)(o.Z,{groupId:"bash-flavor",defaultValue:"bash",values:[{label:"Bash",value:"bash"},{label:"PowerShell",value:"powershell"},{label:"Batch",value:"batch"}],mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"bash",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"PLAYWRIGHT_JUNIT_OUTPUT_NAME=results.xml npx playwright test --reporter=junit\n"))),(0,l.kt)(s.Z,{value:"powershell",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},'$env:PLAYWRIGHT_JUNIT_OUTPUT_NAME="results.xml"\nnpx playwright test --reporter=junit\n'))),(0,l.kt)(s.Z,{value:"batch",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-batch"},"set PLAYWRIGHT_JUNIT_OUTPUT_NAME=results.xml\nnpx playwright test --reporter=junit\n")))),(0,l.kt)("p",null,"In configuration file, pass options directly:"),(0,l.kt)(o.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"ts",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"// playwright.config.ts\nimport { PlaywrightTestConfig } from '@playwright/test';\n\nconst config: PlaywrightTestConfig = {\n  reporter: [ ['junit', { outputFile: 'results.xml' }] ],\n};\nexport default config;\n"))),(0,l.kt)(s.Z,{value:"js",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// playwright.config.js\n// @ts-check\n\n/** @type {import('@playwright/test').PlaywrightTestConfig} */\nconst config = {\n  reporter: [ ['junit', { outputFile: 'results.xml' }] ],\n};\n\nmodule.exports = config;\n")))),(0,l.kt)("h3",{id:"github-actions-annotations"},"GitHub Actions annotations"),(0,l.kt)("p",null,"You can use the built in ",(0,l.kt)("inlineCode",{parentName:"p"},"github")," reporter to get automatic failure annotations when running in GitHub actions."),(0,l.kt)("p",null,"Note that all other reporters work on GitHub Actions as well, but do not provide annotations."),(0,l.kt)(o.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"ts",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"// playwright.config.ts\nimport { PlaywrightTestConfig } from '@playwright/test';\n\nconst config: PlaywrightTestConfig = {\n  // 'github' for GitHub Actions CI to generate annotations, plus a concise 'dot'\n  // default 'list' when running locally\n  reporter: process.env.CI ? 'github' : 'list',\n};\nexport default config;\n"))),(0,l.kt)(s.Z,{value:"js",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// playwright.config.js\n// @ts-check\n\n/** @type {import('@playwright/test').PlaywrightTestConfig} */\nconst config = {\n  // 'github' for GitHub Actions CI to generate annotations, plus a concise 'dot'\n  // default 'list' when running locally\n  reporter: process.env.CI ? 'github' : 'list',\n};\n\nmodule.exports = config;\n")))),(0,l.kt)("h2",{id:"custom-reporters"},"Custom reporters"),(0,l.kt)("p",null,"You can create a custom reporter by implementing a class with some of the reporter methods. Learn more about the ",(0,l.kt)("a",{parentName:"p",href:"/docs/next/api/class-reporter",title:"Reporter"},"Reporter")," API."),(0,l.kt)(o.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"ts",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"// playwright.config.ts\nimport { Reporter } from '@playwright/test/reporter';\n\nclass MyReporter implements Reporter {\n  onBegin(config, suite) {\n    console.log(`Starting the run with ${suite.allTests().length} tests`);\n  }\n\n  onTestBegin(test) {\n    console.log(`Starting test ${test.title}`);\n  }\n\n  onTestEnd(test, result) {\n    console.log(`Finished test ${test.title}: ${result.status}`);\n  }\n\n  onEnd(result) {\n    console.log(`Finished the run: ${result.status}`);\n  }\n}\nexport default MyReporter;\n"))),(0,l.kt)(s.Z,{value:"js",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// my-awesome-reporter.js\n// @ts-check\n\n/** @implements {import('@playwright/test/reporter').Reporter} */\nclass MyReporter {\n  onBegin(config, suite) {\n    console.log(`Starting the run with ${suite.allTests().length} tests`);\n  }\n\n  onTestBegin(test) {\n    console.log(`Starting test ${test.title}`);\n  }\n\n  onTestEnd(test, result) {\n    console.log(`Finished test ${test.title}: ${result.status}`);\n  }\n\n  onEnd(result) {\n    console.log(`Finished the run: ${result.status}`);\n  }\n}\n\nmodule.exports = MyReporter;\n")))),(0,l.kt)("p",null,"Now use this reporter with ",(0,l.kt)("a",{parentName:"p",href:"/docs/next/api/class-testconfig#test-config-reporter"},"testConfig.reporter"),"."),(0,l.kt)(o.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"ts",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"// playwright.config.ts\nimport { PlaywrightTestConfig } from '@playwright/test';\n\nconst config: PlaywrightTestConfig = {\n  reporter: './my-awesome-reporter.ts',\n};\nexport default config;\n"))),(0,l.kt)(s.Z,{value:"js",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// playwright.config.js\n// @ts-check\n\n/** @type {import('@playwright/test').PlaywrightTestConfig} */\nconst config = {\n  reporter: './my-awesome-reporter.js',\n};\n\nmodule.exports = config;\n")))),(0,l.kt)("h2",{id:"third-party-showcase"},"Third party showcase"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Allure reporter"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# Install\nnpm i -D allure-playwright\n\n# Run tests\nnpx playwright test --reporter=line,allure-playwright\n\n# Generate report\nallure generate ./allure-results --clean && allure open ./allure-report\n")))))}m.isMDXComponent=!0},86010:function(e,t,r){function n(e){var t,r,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(a&&(a+=" "),a+=r);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,r=0,a="";r<arguments.length;)(e=arguments[r++])&&(t=n(e))&&(a&&(a+=" "),a+=t);return a}r.d(t,{Z:function(){return a}})}}]);