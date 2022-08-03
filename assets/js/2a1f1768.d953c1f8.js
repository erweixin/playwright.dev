"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[5651],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return g}});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var i=n.createContext({}),p=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(a),g=l,m=d["".concat(i,".").concat(g)]||d[g]||u[g]||r;return a?n.createElement(m,o(o({ref:t},c),{},{components:a})):n.createElement(m,o({ref:t},c))}));function g(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,o=new Array(r);o[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:l,o[1]=s;for(var p=2;p<r;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},1570:function(e,t,a){a.r(t),a.d(t,{assets:function(){return h},contentTitle:function(){return g},default:function(){return y},frontMatter:function(){return d},metadata:function(){return m},toc:function(){return k}});var n=a(3905),l=Object.defineProperty,r=Object.defineProperties,o=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,t,a)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,u=(e,t)=>{for(var a in t||(t={}))i.call(t,a)&&c(e,a,t[a]);if(s)for(var a of s(t))p.call(t,a)&&c(e,a,t[a]);return e};const d={id:"cli",title:"Command line tools"},g=void 0,m={unversionedId:"cli",id:"version-stable/cli",title:"Command line tools",description:"Playwright comes with the command line tools.",source:"@site/versioned_docs/version-stable/cli.mdx",sourceDirName:".",slug:"/cli",permalink:"/docs/cli",draft:!1,tags:[],version:"stable",frontMatter:{id:"cli",title:"Command line tools"},sidebar:"docs",previous:{title:"Chrome Extensions",permalink:"/docs/chrome-extensions"},next:{title:"Dialogs",permalink:"/docs/dialogs"}},h={},k=[{value:"Usage",id:"usage",level:2},{value:"Install browsers",id:"install-browsers",level:2},{value:"Install system dependencies",id:"install-system-dependencies",level:2},{value:"Generate code",id:"generate-code",level:2},{value:"Preserve authenticated state",id:"preserve-authenticated-state",level:3},{value:"Codegen with custom setup",id:"codegen-with-custom-setup",level:3},{value:"Open pages",id:"open-pages",level:2},{value:"Emulate devices",id:"emulate-devices",level:3},{value:"Emulate color scheme and viewport size",id:"emulate-color-scheme-and-viewport-size",level:3},{value:"Emulate geolocation, language and timezone",id:"emulate-geolocation-language-and-timezone",level:3},{value:"Inspect selectors",id:"inspect-selectors",level:2},{value:"playwright.$(selector)",id:"playwrightselector",level:4},{value:"playwright.$$(selector)",id:"playwrightselector-1",level:4},{value:"playwright.inspect(selector)",id:"playwrightinspectselector",level:4},{value:"playwright.locator(selector)",id:"playwrightlocatorselector",level:4},{value:"playwright.selector(element)",id:"playwrightselectorelement",level:4},{value:"Take screenshot",id:"take-screenshot",level:2},{value:"Generate PDF",id:"generate-pdf",level:2}],w={toc:k};function y(e){var t,a=e,{components:l}=a,c=((e,t)=>{var a={};for(var n in e)i.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&s)for(var n of s(e))t.indexOf(n)<0&&p.call(e,n)&&(a[n]=e[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(t=u(u({},w),c),r(t,o({components:l,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"Playwright comes with the command line tools."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"#usage"}),"Usage")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"#install-browsers"}),"Install browsers")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"#install-system-dependencies"}),"Install system dependencies")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"#generate-code"}),"Generate code")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"#open-pages"}),"Open pages")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"#inspect-selectors"}),"Inspect selectors")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"#take-screenshot"}),"Take screenshot")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"#generate-pdf"}),"Generate PDF"))),(0,n.kt)("h2",u({},{id:"usage"}),"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"npx playwright --help\n")),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-json"}),'# Running from `package.json` script\n{\n  "scripts": {\n    "help": "playwright --help"\n  }\n}\n')),(0,n.kt)("h2",u({},{id:"install-browsers"}),"Install browsers"),(0,n.kt)("p",null,"Playwright can install supported browsers."),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"# Running without arguments will install default browsers\nnpx playwright install\n")),(0,n.kt)("p",null,"You can also install specific browsers by providing an argument:"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"# Install WebKit\nnpx playwright install webkit\n")),(0,n.kt)("p",null,"See all supported browsers:"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"npx playwright install --help\n")),(0,n.kt)("h2",u({},{id:"install-system-dependencies"}),"Install system dependencies"),(0,n.kt)("p",null,"System dependencies can get installed automatically. This is useful for CI environments."),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"# See command help\nnpx playwright install-deps\n")),(0,n.kt)("p",null,"You can also install the dependencies for a single browser only by passing it as an argument:"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"npx playwright install-deps chromium\n")),(0,n.kt)("p",null,"It's also possible to combine ",(0,n.kt)("inlineCode",{parentName:"p"},"install-deps")," with ",(0,n.kt)("inlineCode",{parentName:"p"},"install")," and install by that the browsers and OS dependencies with a single command. This would do both for Chromium, but you can also leave it out."),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"npx playwright install --with-deps chromium\n")),(0,n.kt)("h2",u({},{id:"generate-code"}),"Generate code"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"npx playwright codegen wikipedia.org\n")),(0,n.kt)("p",null,"Run ",(0,n.kt)("inlineCode",{parentName:"p"},"codegen")," and perform actions in the browser. Playwright CLI will generate JavaScript code for the user interactions. ",(0,n.kt)("inlineCode",{parentName:"p"},"codegen")," will attempt to generate resilient text-based selectors."),(0,n.kt)("img",{src:"https://user-images.githubusercontent.com/284612/92536033-7e7ebe00-f1ed-11ea-9e1a-7cbd912e3391.gif"}),(0,n.kt)("h3",u({},{id:"preserve-authenticated-state"}),"Preserve authenticated state"),(0,n.kt)("p",null,"Run ",(0,n.kt)("inlineCode",{parentName:"p"},"codegen")," with ",(0,n.kt)("inlineCode",{parentName:"p"},"--save-storage")," to save ",(0,n.kt)("a",u({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies"}),"cookies")," and ",(0,n.kt)("a",u({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage"}),"localStorage")," at the end. This is useful to separately record authentication step and reuse it later."),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"npx playwright codegen --save-storage=auth.json\n# Perform authentication and exit.\n# auth.json will contain the storage state.\n")),(0,n.kt)("p",null,"Run with ",(0,n.kt)("inlineCode",{parentName:"p"},"--load-storage")," to consume previously loaded storage. This way, all ",(0,n.kt)("a",u({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies"}),"cookies")," and ",(0,n.kt)("a",u({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage"}),"localStorage")," will be restored, bringing most web apps to the authenticated state."),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"npx playwright open --load-storage=auth.json my.web.app\nnpx playwright codegen --load-storage=auth.json my.web.app\n# Perform actions in authenticated state.\n")),(0,n.kt)("h3",u({},{id:"codegen-with-custom-setup"}),"Codegen with custom setup"),(0,n.kt)("p",null,"If you would like to use codegen in some non-standard setup (for example, use ",(0,n.kt)("a",u({parentName:"p"},{href:"/docs/api/class-browsercontext#browser-context-route"}),"browserContext.route(url, handler[, options])"),"), it is possible to call ",(0,n.kt)("a",u({parentName:"p"},{href:"/docs/api/class-page#page-pause"}),"page.pause()")," that will open a separate window with codegen controls."),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-js"}),"const { chromium } = require('playwright');\n\n(async () => {\n  // Make sure to run headed.\n  const browser = await chromium.launch({ headless: false });\n\n  // Setup context however you like.\n  const context = await browser.newContext({ /* pass any options */ });\n  await context.route('**/*', route => route.continue());\n\n  // Pause the page, and start recording manually.\n  const page = await context.newPage();\n  await page.pause();\n})();\n")),(0,n.kt)("h2",u({},{id:"open-pages"}),"Open pages"),(0,n.kt)("p",null,"With ",(0,n.kt)("inlineCode",{parentName:"p"},"open"),", you can use Playwright bundled browsers to browse web pages. Playwright provides cross-platform WebKit builds that can be used to reproduce Safari rendering across Windows, Linux and macOS."),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"# Open page in Chromium\nnpx playwright open example.com\n")),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"# Open page in WebKit\nnpx playwright wk example.com\n")),(0,n.kt)("h3",u({},{id:"emulate-devices"}),"Emulate devices"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"open")," can emulate mobile and tablet devices from the ",(0,n.kt)("a",u({parentName:"p"},{href:"https://playwright.dev/docs/api/class-playwright#playwrightdevices"}),(0,n.kt)("inlineCode",{parentName:"a"},"playwright.devices"))," list."),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-bash"}),'# Emulate iPhone 11.\nnpx playwright open --device="iPhone 11" wikipedia.org\n')),(0,n.kt)("h3",u({},{id:"emulate-color-scheme-and-viewport-size"}),"Emulate color scheme and viewport size"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"# Emulate screen size and color scheme.\nnpx playwright open --viewport-size=800,600 --color-scheme=dark twitter.com\n")),(0,n.kt)("h3",u({},{id:"emulate-geolocation-language-and-timezone"}),"Emulate geolocation, language and timezone"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-bash"}),'# Emulate timezone, language & location\n# Once page opens, click the "my location" button to see geolocation in action\nnpx playwright open --timezone="Europe/Rome" --geolocation="41.890221,12.492348" --lang="it-IT" maps.google.com\n')),(0,n.kt)("h2",u({},{id:"inspect-selectors"}),"Inspect selectors"),(0,n.kt)("p",null,"During ",(0,n.kt)("inlineCode",{parentName:"p"},"open")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"codegen"),", you can use following API inside the developer tools console of any browser."),(0,n.kt)("img",{src:"https://user-images.githubusercontent.com/284612/92536317-37dd9380-f1ee-11ea-875d-daf1b206dd56.png"}),(0,n.kt)("h4",u({},{id:"playwrightselector"}),"playwright.$(selector)"),(0,n.kt)("p",null,"Query Playwright selector, using the actual Playwright query engine, for example:"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-js"}),"> playwright.$('.auth-form >> text=Log in');\n\n<button>Log in</button>\n")),(0,n.kt)("h4",u({},{id:"playwrightselector-1"}),"playwright.$$(selector)"),(0,n.kt)("p",null,"Same as ",(0,n.kt)("inlineCode",{parentName:"p"},"playwright.$"),", but returns all matching elements."),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-js"}),"> playwright.$$('li >> text=John')\n\n> [<li>, <li>, <li>, <li>]\n")),(0,n.kt)("h4",u({},{id:"playwrightinspectselector"}),"playwright.inspect(selector)"),(0,n.kt)("p",null,"Reveal element in the Elements panel (if DevTools of the respective browser supports it)."),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-js"}),"> playwright.inspect('text=Log in')\n")),(0,n.kt)("h4",u({},{id:"playwrightlocatorselector"}),"playwright.locator(selector)"),(0,n.kt)("p",null,"Query Playwright element using the actual Playwright query engine, for example:"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-js"}),"> playwright.locator('.auth-form', { hasText: 'Log in' });\n\n> Locator ()\n>   - element: button\n>   - elements: [button]\n")),(0,n.kt)("h4",u({},{id:"playwrightselectorelement"}),"playwright.selector(element)"),(0,n.kt)("p",null,"Generates selector for the given element."),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-js"}),'> playwright.selector($0)\n\n"div[id="glow-ingress-block"] >> text=/.*Hello.*/"\n')),(0,n.kt)("h2",u({},{id:"take-screenshot"}),"Take screenshot"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"# See command help\nnpx playwright screenshot --help\n")),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"# Wait 3 seconds before capturing a screenshot after page loads ('load' event fires)\nnpx playwright screenshot \\\n    --device=\"iPhone 11\" \\\n    --color-scheme=dark \\\n    --wait-for-timeout=3000 \\\n    twitter.com twitter-iphone.png\n")),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"# Capture a full page screenshot\nnpx playwright screenshot --full-page en.wikipedia.org wiki-full.png\n")),(0,n.kt)("h2",u({},{id:"generate-pdf"}),"Generate PDF"),(0,n.kt)("p",null,"PDF generation only works in Headless Chromium."),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"# See command help\nnpx playwright pdf https://en.wikipedia.org/wiki/PDF wiki.pdf\n")))}y.isMDXComponent=!0}}]);