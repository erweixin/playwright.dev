"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[2268],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(h,s(s({ref:t},u),{},{components:n})):a.createElement(h,s({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4455:function(e,t,n){n.d(t,{Z:function(){return p}});var a=n(7294),r=n(6010),o="tabItem_Ymn6",s=Object.defineProperty,i=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;function p({children:e,hidden:t,className:n}){return a.createElement("div",((e,t)=>{for(var n in t||(t={}))l.call(t,n)&&u(e,n,t[n]);if(i)for(var n of i(t))c.call(t,n)&&u(e,n,t[n]);return e})({role:"tabpanel",className:(0,r.Z)(o,n)},{hidden:t}),e)}},5332:function(e,t,n){n.d(t,{Z:function(){return v}});var a=n(7294),r=n(6010),o=n(4939),s=n(2174),i=n(2107),l=n(8757),c="tabList__CuJ",u="tabItem_LNqP",p=Object.defineProperty,d=Object.defineProperties,m=Object.getOwnPropertyDescriptors,h=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,y=(e,t,n)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,b=(e,t)=>{for(var n in t||(t={}))g.call(t,n)&&y(e,n,t[n]);if(h)for(var n of h(t))f.call(t,n)&&y(e,n,t[n]);return e};function w(e){var t,n;const{lazy:o,block:p,defaultValue:h,values:g,groupId:f,className:y}=e,w=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=null!=g?g:w.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),k=(0,s.l)(v,((e,t)=>e.value===t.value));if(k.length>0)throw new Error(`Docusaurus error: Duplicate values "${k.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const x=null===h?h:null!=(n=null!=h?h:null==(t=w.find((e=>e.props.default)))?void 0:t.props.value)?n:w[0].props.value;if(null!==x&&!v.some((e=>e.value===x)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${x}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:N,setTabGroupChoices:_}=(0,i.U)(),[O,T]=(0,a.useState)(x),S=[],{blockElementScrollPositionUntilNextRender:P}=(0,l.o5)();if(null!=f){const e=N[f];null!=e&&e!==O&&v.some((t=>t.value===e))&&T(e)}const I=e=>{const t=e.currentTarget,n=S.indexOf(t),a=v[n].value;a!==O&&(P(t),T(a),null!=f&&_(f,String(a)))},E=e=>{var t,n;let a=null;switch(e.key){case"ArrowRight":{const n=S.indexOf(e.currentTarget)+1;a=null!=(t=S[n])?t:S[0];break}case"ArrowLeft":{const t=S.indexOf(e.currentTarget)-1;a=null!=(n=S[t])?n:S[S.length-1];break}}null==a||a.focus()};return a.createElement("div",{className:(0,r.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":p},y)},v.map((({value:e,label:t,attributes:n})=>{return a.createElement("li",(o=b({role:"tab",tabIndex:O===e?0:-1,"aria-selected":O===e,key:e,ref:e=>S.push(e),onKeyDown:E,onFocus:I,onClick:I},n),s={className:(0,r.Z)("tabs__item",u,null==n?void 0:n.className,{"tabs__item--active":O===e})},d(o,m(s))),null!=t?t:e);var o,s}))),o?(0,a.cloneElement)(w.filter((e=>e.props.value===O))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},w.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}function v(e){const t=(0,o.Z)();return a.createElement(w,b({key:String(t)},e))}},3721:function(e,t,n){n.r(t),n.d(t,{assets:function(){return y},contentTitle:function(){return g},default:function(){return v},frontMatter:function(){return h},metadata:function(){return f},toc:function(){return b}});var a=n(3905),r=n(5332),o=n(4455),s=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))u.call(t,n)&&d(e,n,t[n]);if(c)for(var n of c(t))p.call(t,n)&&d(e,n,t[n]);return e};const h={id:"auth",title:"Authentication"},g=void 0,f={unversionedId:"auth",id:"auth",title:"Authentication",description:"Playwright can be used to automate scenarios that require authentication.",source:"@site/docs/auth.mdx",sourceDirName:".",slug:"/auth",permalink:"/python/docs/next/auth",draft:!1,tags:[],version:"current",frontMatter:{id:"auth",title:"Authentication"},sidebar:"docs",previous:{title:"Assertions",permalink:"/python/docs/next/test-assertions"},next:{title:"Browsers",permalink:"/python/docs/next/browsers"}},y={},b=[{value:"Automate logging in",id:"automate-logging-in",level:2},{value:"Reuse authentication state",id:"reuse-authentication-state",level:2},{value:"Code generation",id:"code-generation",level:3},{value:"API reference",id:"api-reference",level:3},{value:"Session storage",id:"session-storage",level:2},{value:"API reference",id:"api-reference-1",level:3},{value:"Multi-factor authentication",id:"multi-factor-authentication",level:2},{value:"Persistent authentication",id:"persistent-authentication",level:3},{value:"Lifecycle",id:"lifecycle",level:3},{value:"API reference",id:"api-reference-2",level:3}],w={toc:b};function v(e){var t,n=e,{components:s}=n,d=((e,t)=>{var n={};for(var a in e)u.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&c)for(var a of c(e))t.indexOf(a)<0&&p.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=m(m({},w),d),i(t,l({components:s,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"Playwright can be used to automate scenarios that require authentication."),(0,a.kt)("p",null,"Tests written with Playwright execute in isolated clean-slate environments called ",(0,a.kt)("a",m({parentName:"p"},{href:"/python/docs/next/browser-contexts"}),"browser contexts"),". This isolation model improves reproducibility and prevents cascading test failures. New browser contexts can load existing authentication state. This eliminates the need to login in every context and speeds up test execution."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Note: This guide covers cookie/token-based authentication (logging in via the app UI). For ",(0,a.kt)("a",m({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication"}),"HTTP authentication")," use ",(0,a.kt)("a",m({parentName:"p"},{href:"/python/docs/next/api/class-browser#browser-new-context"}),"browser.new_context(**kwargs)"),".")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"#automate-logging-in"}),"Automate logging in")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"#reuse-authentication-state"}),"Reuse authentication state")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"#session-storage"}),"Session storage")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"#multi-factor-authentication"}),"Multi-factor authentication"))),(0,a.kt)("h2",m({},{id:"automate-logging-in"}),"Automate logging in"),(0,a.kt)("p",null,"The Playwright API can automate interaction with a login form. See ",(0,a.kt)("a",m({parentName:"p"},{href:"/python/docs/next/input"}),"Input guide")," for more details."),(0,a.kt)("p",null,"The following example automates login on GitHub. Once these steps are executed, the browser context will be authenticated."),(0,a.kt)(r.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"sync",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-py"}),"page = context.new_page()\npage.goto('https://github.com/login')\n\n# Interact with login form\npage.locator('text=Login').click()\npage.locator('input[name=\"login\"]').fill(USERNAME)\npage.locator('input[name=\"password\"]').fill(PASSWORD)\npage.locator('text=Submit').click()\n# Verify app is logged in\n"))),(0,a.kt)(o.Z,{value:"async",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-py"}),"page = await context.new_page()\nawait page.goto('https://github.com/login')\n\n# Interact with login form\nawait page.locator('text=Login').click()\nawait page.locator('input[name=\"login\"]').fill(USERNAME)\nawait page.locator('input[name=\"password\"]').fill(PASSWORD)\nawait page.locator('text=Submit').click()\n# Verify app is logged in\n")))),(0,a.kt)("p",null,"These steps can be executed for every browser context. However, redoing login for every test can slow down test execution. To prevent that, we will reuse existing authentication state in new browser contexts."),(0,a.kt)("h2",m({},{id:"reuse-authentication-state"}),"Reuse authentication state"),(0,a.kt)("p",null,"Web apps use cookie-based or token-based authentication, where authenticated state is stored as ",(0,a.kt)("a",m({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies"}),"cookies")," or in ",(0,a.kt)("a",m({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Storage"}),"local storage"),". Playwright provides ",(0,a.kt)("a",m({parentName:"p"},{href:"/python/docs/next/api/class-browsercontext#browser-context-storage-state"}),"browser_context.storage_state(**kwargs)")," method that can be used to retrieve storage state from authenticated contexts and then create new contexts with prepopulated state."),(0,a.kt)("p",null,"Cookies and local storage state can be used across different browsers. They depend on your application's authentication model: some apps might require both cookies and local storage."),(0,a.kt)("p",null,"The following code snippet retrieves state from an authenticated context and creates a new context with that state."),(0,a.kt)(r.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"sync",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-py"}),'# Save storage state into the file.\nstorage = context.storage_state(path="state.json")\n\n# Create a new context with the saved storage state.\ncontext = browser.new_context(storage_state="state.json")\n'))),(0,a.kt)(o.Z,{value:"async",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-py"}),'# Save storage state into the file.\nstorage = await context.storage_state(path="state.json")\n\n# Create a new context with the saved storage state.\ncontext = await browser.new_context(storage_state="state.json")\n')))),(0,a.kt)("h3",m({},{id:"code-generation"}),"Code generation"),(0,a.kt)("p",null,"Logging in via the UI and then reusing authentication state can be combined to implement ",(0,a.kt)("strong",{parentName:"p"},"login once and run multiple scenarios"),". The lifecycle looks like:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Run tests (for example, with ",(0,a.kt)("inlineCode",{parentName:"li"},"pytest"),"). 2. Login via UI and retrieve authentication state. 3. In each test, load authentication state using ",(0,a.kt)("inlineCode",{parentName:"li"},"autouse=True")," fixture with ",(0,a.kt)("inlineCode",{parentName:"li"},"scope=function"),".")),(0,a.kt)("p",null,"This approach will also ",(0,a.kt)("strong",{parentName:"p"},"work in CI environments"),", since it does not rely on any external state."),(0,a.kt)("h3",m({},{id:"api-reference"}),"API reference"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"/python/docs/next/api/class-browsercontext#browser-context-storage-state"}),"browser_context.storage_state(**kwargs)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"/python/docs/next/api/class-browser#browser-new-context"}),"browser.new_context(**kwargs)"))),(0,a.kt)("h2",m({},{id:"session-storage"}),"Session storage"),(0,a.kt)("p",null,"Rarely, ",(0,a.kt)("a",m({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage"}),"session storage")," is used for storing information associated with the logged-in state. Session storage is specific to a particular domain and is not persisted across page loads. Playwright does not provide API to persist session storage, but the following snippet can be used to save/load session storage."),(0,a.kt)(r.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"sync",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-py"}),'import os\n# Get session storage and store as env variable\nsession_storage = page.evaluate("() => JSON.stringify(sessionStorage)")\nos.environ["SESSION_STORAGE"] = session_storage\n\n# Set session storage in a new context\nsession_storage = os.environ["SESSION_STORAGE"]\ncontext.add_init_script("""(storage => {\n  if (window.location.hostname === \'example.com\') {\n    const entries = JSON.parse(storage)\n    for (const [key, value] of Object.entries(entries)) {\n      window.sessionStorage.setItem(key, key)\n    }\n  }\n})(\'""" + session_storage + "\')")\n'))),(0,a.kt)(o.Z,{value:"async",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-py"}),'import os\n# Get session storage and store as env variable\nsession_storage = await page.evaluate("() => JSON.stringify(sessionStorage)")\nos.environ["SESSION_STORAGE"] = session_storage\n\n# Set session storage in a new context\nsession_storage = os.environ["SESSION_STORAGE"]\nawait context.add_init_script("""(storage => {\n  if (window.location.hostname === \'example.com\') {\n    const entries = JSON.parse(storage)\n    for (const [key, value] of Object.entries(entries)) {\n      window.sessionStorage.setItem(key, key)\n    }\n  }\n})(\'""" + session_storage + "\')")\n')))),(0,a.kt)("h3",m({},{id:"api-reference-1"}),"API reference"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"/python/docs/next/api/class-browsercontext#browser-context-storage-state"}),"browser_context.storage_state(**kwargs)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"/python/docs/next/api/class-browser#browser-new-context"}),"browser.new_context(**kwargs)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"/python/docs/next/api/class-page#page-evaluate"}),"page.evaluate(expression, **kwargs)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"/python/docs/next/api/class-browsercontext#browser-context-add-init-script"}),"browser_context.add_init_script(**kwargs)"))),(0,a.kt)("h2",m({},{id:"multi-factor-authentication"}),"Multi-factor authentication"),(0,a.kt)("p",null,"Accounts with multi-factor authentication (MFA) cannot be fully automated, and need manual intervention. Persistent authentication can be used to partially automate MFA scenarios."),(0,a.kt)("h3",m({},{id:"persistent-authentication"}),"Persistent authentication"),(0,a.kt)("p",null,"Note that persistent authentication is not suited for CI environments since it relies on a disk location. User data directories are specific to browser types and cannot be shared across browser types."),(0,a.kt)("p",null,"User data directories can be used with the ",(0,a.kt)("a",m({parentName:"p"},{href:"/python/docs/next/api/class-browsertype#browser-type-launch-persistent-context"}),"browser_type.launch_persistent_context(user_data_dir, **kwargs)")," API."),(0,a.kt)(r.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"sync",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-py"}),"from playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    user_data_dir = '/path/to/directory'\n    browser = p.chromium.launch_persistent_context(user_data_dir, headless=False)\n    # Execute login steps manually in the browser window\n"))),(0,a.kt)(o.Z,{value:"async",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-py"}),"import asyncio\nfrom playwright.async_api import async_playwright\n\nasync def main():\n    async with async_playwright() as p:\n        user_data_dir = '/path/to/directory'\n        browser = await p.chromium.launch_persistent_context(user_data_dir, headless=False)\n        # Execute login steps manually in the browser window\n\nasyncio.run(main())\n")))),(0,a.kt)("h3",m({},{id:"lifecycle"}),"Lifecycle"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Create a user data directory on disk."),(0,a.kt)("li",{parentName:"ol"},"Launch a persistent context with the user data directory and login the MFA account."),(0,a.kt)("li",{parentName:"ol"},"Reuse user data directory to run automation scenarios.")),(0,a.kt)("h3",m({},{id:"api-reference-2"}),"API reference"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"/python/docs/next/api/class-browsercontext",title:"BrowserContext"}),"BrowserContext")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"/python/docs/next/api/class-browsertype#browser-type-launch-persistent-context"}),"browser_type.launch_persistent_context(user_data_dir, **kwargs)"))))}v.isMDXComponent=!0}}]);