"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[7061],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(a),m=r,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return a?n.createElement(h,l(l({ref:t},c),{},{components:a})):n.createElement(h,l({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},73811:function(e,t,a){a.d(t,{Z:function(){return p}});var n=a(67294),r=Object.defineProperty,o=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,s=(e,t,a)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;function p({children:e,hidden:t,className:a}){return n.createElement("div",((e,t)=>{for(var a in t||(t={}))l.call(t,a)&&s(e,a,t[a]);if(o)for(var a of o(t))i.call(t,a)&&s(e,a,t[a]);return e})({role:"tabpanel"},{hidden:t,className:a}),e)}},73824:function(e,t,a){a.d(t,{Z:function(){return w}});var n=a(67294),r=a(54939),o=a(39670),l=a(86010),i="tabItem_LplD",s=Object.defineProperty,p=Object.defineProperties,c=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,h=(e,t,a)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,y=(e,t)=>{for(var a in t||(t={}))d.call(t,a)&&h(e,a,t[a]);if(u)for(var a of u(t))m.call(t,a)&&h(e,a,t[a]);return e};function g(e){var t,a,r;const{lazy:s,block:u,defaultValue:d,values:m,groupId:h,className:g}=e,w=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=null!=m?m:w.map((({props:{value:e,label:t,attributes:a}})=>({value:e,label:t,attributes:a}))),b=(0,o.lx)(f,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===d?d:null!=(r=null!=d?d:null==(t=w.find((e=>e.props.default)))?void 0:t.props.value)?r:null==(a=w[0])?void 0:a.props.value;if(null!==v&&!f.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:N}=(0,o.UB)(),[P,O]=(0,n.useState)(v),x=[],{blockElementScrollPositionUntilNextRender:T}=(0,o.o5)();if(null!=h){const e=k[h];null!=e&&e!==P&&f.some((t=>t.value===e))&&O(e)}const _=e=>{const t=e.currentTarget,a=x.indexOf(t),n=f[a].value;n!==P&&(T(t),O(n),null!=h&&N(h,n))},E=e=>{let t=null;switch(e.key){case"ArrowRight":{const a=x.indexOf(e.currentTarget)+1;t=x[a]||x[0];break}case"ArrowLeft":{const a=x.indexOf(e.currentTarget)-1;t=x[a]||x[x.length-1];break}}null==t||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":u},g)},f.map((({value:e,label:t,attributes:a})=>{return n.createElement("li",(r=y({role:"tab",tabIndex:P===e?0:-1,"aria-selected":P===e,key:e,ref:e=>x.push(e),onKeyDown:E,onFocus:_,onClick:_},a),o={className:(0,l.Z)("tabs__item",i,null==a?void 0:a.className,{"tabs__item--active":P===e})},p(r,c(o))),null!=t?t:e);var r,o}))),s?(0,n.cloneElement)(w.filter((e=>e.props.value===P))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},w.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==P})))))}function w(e){const t=(0,r.Z)();return n.createElement(g,y({key:String(t)},e))}},90726:function(e,t,a){a.r(t),a.d(t,{assets:function(){return w},contentTitle:function(){return y},default:function(){return v},frontMatter:function(){return h},metadata:function(){return g},toc:function(){return f}});var n=a(3905),r=a(73824),o=a(73811),l=Object.defineProperty,i=Object.defineProperties,s=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,d=(e,t,a)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,m=(e,t)=>{for(var a in t||(t={}))c.call(t,a)&&d(e,a,t[a]);if(p)for(var a of p(t))u.call(t,a)&&d(e,a,t[a]);return e};const h={id:"intro",title:"Getting started"},y=void 0,g={unversionedId:"intro",id:"version-1.20/intro",title:"Getting started",description:"- Installation",source:"@site/versioned_docs/version-1.20/intro.mdx",sourceDirName:".",slug:"/intro",permalink:"/python/docs/1.20/intro",tags:[],version:"1.20",frontMatter:{id:"intro",title:"Getting started"},sidebar:"docs",next:{title:"Inspector",permalink:"/python/docs/1.20/inspector"}},w={},f=[{value:"Installation",id:"installation",level:2},{value:"Pip",id:"pip",level:3},{value:"Conda",id:"conda",level:3},{value:"Usage",id:"usage",level:2},{value:"First script",id:"first-script",level:2},{value:"Record scripts",id:"record-scripts",level:2},{value:"With Pytest",id:"with-pytest",level:2},{value:"Interactive mode (REPL)",id:"interactive-mode-repl",level:2},{value:"Pyinstaller",id:"pyinstaller",level:2},{value:"Known issues",id:"known-issues",level:2},{value:"<code>time.sleep()</code> leads to outdated state",id:"timesleep-leads-to-outdated-state",level:3},{value:"incompatible with <code>SelectorEventLoop</code> of <code>asyncio</code> on Windows",id:"incompatible-with-selectoreventloop-of-asyncio-on-windows",level:3},{value:"Threading",id:"threading",level:3},{value:"System requirements",id:"system-requirements",level:2},{value:"Windows",id:"windows",level:3},{value:"macOS",id:"macos",level:3},{value:"Linux",id:"linux",level:3}],b={toc:f};function v(e){var t,a=e,{components:l}=a,d=((e,t)=>{var a={};for(var n in e)c.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&p)for(var n of p(e))t.indexOf(n)<0&&u.call(e,n)&&(a[n]=e[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(t=m(m({},b),d),i(t,s({components:l,mdxType:"MDXLayout"}))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"#installation"}),"Installation")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"#usage"}),"Usage")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"#first-script"}),"First script")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"#record-scripts"}),"Record scripts")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"#with-pytest"}),"With Pytest")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"#interactive-mode-repl"}),"Interactive mode (REPL)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"#pyinstaller"}),"Pyinstaller")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"#known-issues"}),"Known issues")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"#system-requirements"}),"System requirements")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"/python/docs/1.20/release-notes"}),"Release notes"))),(0,n.kt)("h2",m({},{id:"installation"}),"Installation"),(0,n.kt)("p",null,"See ",(0,n.kt)("a",m({parentName:"p"},{href:"#system-requirements"}),"system requirements"),"."),(0,n.kt)("h3",m({},{id:"pip"}),"Pip"),(0,n.kt)("p",null,(0,n.kt)("a",m({parentName:"p"},{href:"https://pypi.python.org/pypi/playwright/"}),(0,n.kt)("img",m({parentName:"a"},{src:"https://badge.fury.io/py/playwright.svg",alt:"PyPI version"})))),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"pip install --upgrade pip\npip install playwright\nplaywright install\n")),(0,n.kt)("h3",m({},{id:"conda"}),"Conda"),(0,n.kt)("p",null,(0,n.kt)("a",m({parentName:"p"},{href:"https://anaconda.org/Microsoft/playwright"}),(0,n.kt)("img",m({parentName:"a"},{src:"https://img.shields.io/conda/v/microsoft/playwright",alt:"Anaconda version"})))),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"conda config --add channels conda-forge\nconda config --add channels microsoft\nconda install playwright\nplaywright install\n")),(0,n.kt)("p",null,"These commands download the Playwright package and install browser binaries for Chromium, Firefox and WebKit. To modify this behavior see ",(0,n.kt)("a",m({parentName:"p"},{href:"/python/docs/1.20/browsers#installing-browsers"}),"installation parameters"),"."),(0,n.kt)("h2",m({},{id:"usage"}),"Usage"),(0,n.kt)("p",null,"Once installed, you can ",(0,n.kt)("inlineCode",{parentName:"p"},"import")," Playwright in a Python script, and launch any of the 3 browsers (",(0,n.kt)("inlineCode",{parentName:"p"},"chromium"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"firefox")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"webkit"),")."),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-py"}),'from playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.goto("http://playwright.dev")\n    print(page.title())\n    browser.close()\n')),(0,n.kt)("p",null,"Playwright supports two variations of the API: synchronous and asynchronous. If your modern project uses ",(0,n.kt)("a",m({parentName:"p"},{href:"https://docs.python.org/3/library/asyncio.html"}),"asyncio"),", you should use async API:"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-py"}),'import asyncio\nfrom playwright.async_api import async_playwright\n\nasync def main():\n    async with async_playwright() as p:\n        browser = await p.chromium.launch()\n        page = await browser.new_page()\n        await page.goto("http://playwright.dev")\n        print(await page.title())\n        await browser.close()\n\nasyncio.run(main())\n')),(0,n.kt)("h2",m({},{id:"first-script"}),"First script"),(0,n.kt)("p",null,"In our first script, we will navigate to ",(0,n.kt)("inlineCode",{parentName:"p"},"whatsmyuseragent.org")," and take a screenshot in WebKit."),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-py"}),'from playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.webkit.launch()\n    page = browser.new_page()\n    page.goto("http://whatsmyuseragent.org/")\n    page.screenshot(path="example.png")\n    browser.close()\n')),(0,n.kt)("p",null,"By default, Playwright runs the browsers in headless mode. To see the browser UI, pass the ",(0,n.kt)("inlineCode",{parentName:"p"},"headless=False")," flag while launching the browser. You can also use ",(0,n.kt)("inlineCode",{parentName:"p"},"slow_mo")," to slow down execution. Learn more in the debugging tools ",(0,n.kt)("a",m({parentName:"p"},{href:"/python/docs/1.20/debug"}),"section"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-py"}),"firefox.launch(headless=False, slow_mo=50)\n")),(0,n.kt)("h2",m({},{id:"record-scripts"}),"Record scripts"),(0,n.kt)("p",null,(0,n.kt)("a",m({parentName:"p"},{href:"/python/docs/1.20/cli"}),"Command line tools")," can be used to record user interactions and generate Python code."),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"playwright codegen wikipedia.org\n")),(0,n.kt)("h2",m({},{id:"with-pytest"}),"With Pytest"),(0,n.kt)("p",null,"See ",(0,n.kt)("a",m({parentName:"p"},{href:"/python/docs/1.20/test-runners"}),"here")," for Pytest instructions and examples."),(0,n.kt)("h2",m({},{id:"interactive-mode-repl"}),"Interactive mode (REPL)"),(0,n.kt)("p",null,"Blocking REPL, as in CLI via Python directly:"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"python\n")),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-py"}),'>>> from playwright.sync_api import sync_playwright\n>>> playwright = sync_playwright().start()\n# Use playwright.chromium, playwright.firefox or playwright.webkit\n# Pass headless=False to launch() to see the browser UI\n>>> browser = playwright.chromium.launch()\n>>> page = browser.new_page()\n>>> page.goto("http://whatsmyuseragent.org/")\n>>> page.screenshot(path="example.png")\n>>> browser.close()\n>>> playwright.stop()\n')),(0,n.kt)("p",null,"Async REPL such as ",(0,n.kt)("inlineCode",{parentName:"p"},"asyncio")," REPL:"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"python -m asyncio\n")),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-py"}),'>>> from playwright.async_api import async_playwright\n>>> playwright = await async_playwright().start()\n>>> browser = await playwright.chromium.launch()\n>>> page = await browser.new_page()\n>>> await page.goto("http://whatsmyuseragent.org/")\n>>> await page.screenshot(path="example.png")\n>>> await browser.close()\n>>> await playwright.stop()\n')),(0,n.kt)("h2",m({},{id:"pyinstaller"}),"Pyinstaller"),(0,n.kt)("p",null,"You can use Playwright with ",(0,n.kt)("a",m({parentName:"p"},{href:"https://www.pyinstaller.org/"}),"Pyinstaller")," to create standalone executables."),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-py"}),'# main.py\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.goto("http://whatsmyuseragent.org/")\n    page.screenshot(path="example.png")\n    browser.close()\n')),(0,n.kt)("p",null,"If you want to bundle browsers with the executables:"),(0,n.kt)(r.Z,{groupId:"bash-flavor",defaultValue:"bash",values:[{label:"Bash",value:"bash"},{label:"PowerShell",value:"powershell"},{label:"Batch",value:"batch"}],mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"bash",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"PLAYWRIGHT_BROWSERS_PATH=0 playwright install chromium\npyinstaller -F main.py\n"))),(0,n.kt)(o.Z,{value:"powershell",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-powershell"}),'$env:PLAYWRIGHT_BROWSERS_PATH="0"\nplaywright install chromium\npyinstaller -F main.py\n'))),(0,n.kt)(o.Z,{value:"batch",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-batch"}),"set PLAYWRIGHT_BROWSERS_PATH=0\nplaywright install chromium\npyinstaller -F main.py\n")))),(0,n.kt)("div",m({},{className:"admonition admonition-note alert alert--secondary"}),(0,n.kt)("div",m({parentName:"div"},{className:"admonition-heading"}),(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",m({parentName:"h5"},{className:"admonition-icon"}),(0,n.kt)("svg",m({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),(0,n.kt)("path",m({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),(0,n.kt)("div",m({parentName:"div"},{className:"admonition-content"}),(0,n.kt)("p",{parentName:"div"},"Bundling the browsers with the executables will generate bigger binaries. It is recommended to only bundle the browsers you use."))),(0,n.kt)("h2",m({},{id:"known-issues"}),"Known issues"),(0,n.kt)("h3",m({},{id:"timesleep-leads-to-outdated-state"}),(0,n.kt)("inlineCode",{parentName:"h3"},"time.sleep()")," leads to outdated state"),(0,n.kt)("p",null,"You should use ",(0,n.kt)("inlineCode",{parentName:"p"},"page.wait_for_timeout(5000)")," instead of ",(0,n.kt)("inlineCode",{parentName:"p"},"time.sleep(5)")," and it is better to not wait for a timeout at all, but sometimes it is useful for debugging. In these cases, use our wait method instead of the ",(0,n.kt)("inlineCode",{parentName:"p"},"time")," module. This is because we internally rely on asynchronous operations and when using ",(0,n.kt)("inlineCode",{parentName:"p"},"time.sleep(5)")," they can't get processed correctly."),(0,n.kt)("h3",m({},{id:"incompatible-with-selectoreventloop-of-asyncio-on-windows"}),"incompatible with ",(0,n.kt)("inlineCode",{parentName:"h3"},"SelectorEventLoop")," of ",(0,n.kt)("inlineCode",{parentName:"h3"},"asyncio")," on Windows"),(0,n.kt)("p",null,"Playwright runs the driver in a subprocess, so it requires ",(0,n.kt)("inlineCode",{parentName:"p"},"ProactorEventLoop")," of ",(0,n.kt)("inlineCode",{parentName:"p"},"asyncio")," on Windows because ",(0,n.kt)("inlineCode",{parentName:"p"},"SelectorEventLoop")," does not supports async subprocesses."),(0,n.kt)("p",null,"On Windows Python 3.7, Playwright sets the default event loop to ",(0,n.kt)("inlineCode",{parentName:"p"},"ProactorEventLoop")," as it is default on Python 3.8+."),(0,n.kt)("h3",m({},{id:"threading"}),"Threading"),(0,n.kt)("p",null,"Playwright's API is not thread-safe. If you are using Playwright in a multi-threaded environment, you should create a playwright instance per thread. See ",(0,n.kt)("a",m({parentName:"p"},{href:"https://github.com/microsoft/playwright-python/issues/623"}),"threading issue")," for more details."),(0,n.kt)("h2",m({},{id:"system-requirements"}),"System requirements"),(0,n.kt)("p",null,"Playwright requires Python 3.7 or above. The browser binaries for Chromium, Firefox and WebKit work across the 3 platforms (Windows, macOS, Linux):"),(0,n.kt)("h3",m({},{id:"windows"}),"Windows"),(0,n.kt)("p",null,"Works with Windows and Windows Subsystem for Linux (WSL)."),(0,n.kt)("h3",m({},{id:"macos"}),"macOS"),(0,n.kt)("p",null,"Requires 10.14 (Mojave) or above."),(0,n.kt)("h3",m({},{id:"linux"}),"Linux"),(0,n.kt)("p",null,"Depending on your Linux distribution, you might need to install additional dependencies to run the browsers."),(0,n.kt)("div",m({},{className:"admonition admonition-note alert alert--secondary"}),(0,n.kt)("div",m({parentName:"div"},{className:"admonition-heading"}),(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",m({parentName:"h5"},{className:"admonition-icon"}),(0,n.kt)("svg",m({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),(0,n.kt)("path",m({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),(0,n.kt)("div",m({parentName:"div"},{className:"admonition-content"}),(0,n.kt)("p",{parentName:"div"},"Only Ubuntu 18.04 and Ubuntu 20.04 are officially supported."))),(0,n.kt)("p",null,"See also in the ",(0,n.kt)("a",m({parentName:"p"},{href:"/python/docs/1.20/cli#install-system-dependencies"}),"Command line tools")," which has a command to install all necessary dependencies automatically for Ubuntu LTS releases."))}v.isMDXComponent=!0}}]);