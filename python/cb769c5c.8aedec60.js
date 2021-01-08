(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{131:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(3),o=n(7),i=(n(0),n(147)),r={id:"auth",title:"Authentication"},s={unversionedId:"auth",id:"auth",isDocsHomePage:!1,title:"Authentication",description:"Playwright can be used to automate scenarios that require authentication.",source:"@site/docs/auth.md",slug:"/auth",permalink:"/python/docs/auth",version:"current",sidebar:"docs",previous:{title:"Multi-page scenarios",permalink:"/python/docs/multi-pages"},next:{title:"Page Object Models",permalink:"/python/docs/pom"}},c=[{value:"Automate logging in",id:"automate-logging-in",children:[]},{value:"Reuse authentication state",id:"reuse-authentication-state",children:[{value:"Cookies",id:"cookies",children:[]},{value:"Local storage",id:"local-storage",children:[]},{value:"Session storage",id:"session-storage",children:[]},{value:"Lifecycle",id:"lifecycle",children:[]},{value:"Example",id:"example",children:[]},{value:"API reference",id:"api-reference",children:[]}]},{value:"Multi-factor authentication",id:"multi-factor-authentication",children:[{value:"Persistent authentication",id:"persistent-authentication",children:[]},{value:"Lifecycle",id:"lifecycle-1",children:[]},{value:"API reference",id:"api-reference-1",children:[]}]}],l={toc:c};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Playwright can be used to automate scenarios that require authentication."),Object(i.b)("p",null,"Tests written with Playwright execute in isolated clean-slate environments called ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/python/docs/core-concepts#browser-contexts"}),"browser contexts"),". This isolation model improves reproducibility and prevents cascading test failures. New browser contexts can load existing authentication state. This eliminates the need to login in every context and speeds up test execution."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Note: This guide covers cookie/token-based authentication (logging in via the app UI). For ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication"}),"HTTP authentication")," use ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/python/docs/api/class-browser#browsernewcontextoptions"}),"browser.new_context(**options)"),".")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#automate-logging-in"}),"Automate logging in")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#reuse-authentication-state"}),"Reuse authentication state")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#multi-factor-authentication"}),"Multi-factor authentication"))),Object(i.b)("h2",{id:"automate-logging-in"},"Automate logging in"),Object(i.b)("p",null,"The Playwright API can automate interaction with a login form. See ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/python/docs/input"}),"Input guide")," for more details."),Object(i.b)("p",null,"The following example automates login on GitHub. Once these steps are executed, the browser context will be authenticated."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"# async\n\npage = await context.new_page()\nawait page.goto('https://github.com/login')\n\n# Interact with login form\nawait page.click('text=Login')\nawait page.fill('input[name=\"login\"]', USERNAME)\nawait page.fill('input[name=\"password\"]', PASSWORD)\nawait page.click('text=Submit')\n# Verify app is logged in\n")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"# sync\n\npage = context.new_page()\npage.goto('https://github.com/login')\n\n# Interact with login form\npage.click('text=Login')\npage.fill('input[name=\"login\"]', USERNAME)\npage.fill('input[name=\"password\"]', PASSWORD)\npage.click('text=Submit')\n# Verify app is logged in\n")),Object(i.b)("p",null,"These steps can be executed for every browser context. However, redoing login for every test can slow down test execution. To prevent that, we will reuse existing authentication state in new browser contexts."),Object(i.b)("h2",{id:"reuse-authentication-state"},"Reuse authentication state"),Object(i.b)("p",null,"Web apps use cookie-based or token-based authentication, where authenticated state is stored as ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies"}),"cookies")," or in ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Storage"}),"local storage"),". The Playwright API can be used to retrieve this state from authenticated contexts and then load it into new contexts."),Object(i.b)("p",null,"Cookies and local storage state can be used across different browsers. They depend on your application's authentication model: some apps might require both cookies and local storage."),Object(i.b)("p",null,"The following code snippets retrieve state from an authenticated page/context and load them into a new context."),Object(i.b)("h3",{id:"cookies"},"Cookies"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),'# async\n\nimport json\nimport os\n# Get cookies and store as an env variable\ncookies = await context.cookies()\nos.environ["COOKIES"] = json.dumps(cookies)\n\n# Set cookies in a new context\ndeserialized_cookies = json.loads(os.environ["COOKIES"])\nawait context.add_cookies(deserialized_cookies)\n')),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),'# sync\n\nimport json\nimport os\n# Get cookies and store as an env variable\ncookies = context.cookies()\nos.environ["COOKIES"] = json.dumps(cookies)\n\n# Set cookies in a new context\ndeserialized_cookies = json.loads(os.environ["COOKIES"])\ncontext.add_cookies(deserialized_cookies)\n')),Object(i.b)("h3",{id:"local-storage"},"Local storage"),Object(i.b)("p",null,"Local storage (",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage"}),Object(i.b)("inlineCode",{parentName:"a"},"window.localStorage")),") is specific to a particular domain."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),'# async\n\nimport os\nimport json\n# Get local storage and store as env variable\nlocal_storage = await page.evaluate("() => JSON.stringify(window.localStorage))\nos.environ["LOCAL_STORAGE"] = local_storage\n\n# Set local storage in a new context\nlocal_storage = os.environ["LOCAL_STORAGE"]\nawait context.add_init_script("""storage => {\n  if (window.location.hostname == \'example.com\') {\n    entries = JSON.parse(storage)\n    Object.keys(entries).forEach(key => {\n      window.localStorage.setItem(key, entries[key])\n    })\n  }\n}""", local_storage)\n')),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),'# sync\n\nimport os\nimport json\n# Get local storage and store as env variable\nlocal_storage = page.evaluate("() => JSON.stringify(window.localStorage)")\nos.environ["LOCAL_STORAGE"] = local_storage\n\n# Set local storage in a new context\nlocal_storage = os.environ["LOCAL_STORAGE"]\ncontext.add_init_script("""storage => {\n  if (window.location.hostname == \'example.com\') {\n    entries = JSON.parse(storage)\n    Object.keys(entries).forEach(key => {\n      window.localStorage.setItem(key, entries[key])\n    })\n  }\n}""", local_storage)\n')),Object(i.b)("h3",{id:"session-storage"},"Session storage"),Object(i.b)("p",null,"Session storage (",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage"}),Object(i.b)("inlineCode",{parentName:"a"},"window.sessionStorage")),") is specific to a particular domain."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),'# async\n\nimport os\n# Get session storage and store as env variable\nsession_storage = await page.evaluate("() => JSON.stringify(sessionStorage)")\nos.environ["SESSION_STORAGE"] = session_storage\n\n# Set session storage in a new context\nsession_storage = os.environ["SESSION_STORAGE"]\nawait context.add_init_script(storage => {\n  if (window.location.hostname == \'example.com\') {\n    entries = JSON.parse(storage)\n    Object.keys(entries).forEach(key => {\n      window.sessionStorage.setItem(key, entries[key])\n    })\n  }\n}, session_storage)\n')),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),'# sync\n\nimport os\n# Get session storage and store as env variable\nsession_storage = page.evaluate("() => JSON.stringify(sessionStorage)")\nos.environ["SESSION_STORAGE"] = session_storage\n\n# Set session storage in a new context\nsession_storage = os.environ["SESSION_STORAGE"]\ncontext.add_init_script(storage => {\n  if (window.location.hostname == \'example.com\') {\n    entries = JSON.parse(storage)\n    Object.keys(entries).forEach(key => {\n      window.sessionStorage.setItem(key, entries[key])\n    })\n  }\n}, session_storage)\n')),Object(i.b)("h3",{id:"lifecycle"},"Lifecycle"),Object(i.b)("p",null,"Logging in via the UI and then reusing authentication state can be combined to implement ",Object(i.b)("strong",{parentName:"p"},"login once and run multiple scenarios"),". The lifecycle looks like:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Run tests (for example, with ",Object(i.b)("inlineCode",{parentName:"li"},"npm run test"),")."),Object(i.b)("li",{parentName:"ol"},"Login via UI and retrieve authentication state.",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"In Jest, this can be executed in ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://jestjs.io/docs/en/configuration#globalsetup-string"}),Object(i.b)("inlineCode",{parentName:"a"},"globalSetup")),"."))),Object(i.b)("li",{parentName:"ol"},"In each test, load authentication state in ",Object(i.b)("inlineCode",{parentName:"li"},"beforeEach")," or ",Object(i.b)("inlineCode",{parentName:"li"},"beforeAll")," step.")),Object(i.b)("p",null,"This approach will also ",Object(i.b)("strong",{parentName:"p"},"work in CI environments"),", since it does not rely on any external state."),Object(i.b)("h3",{id:"example"},"Example"),Object(i.b)("p",null,Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/microsoft/playwright/blob/master/docs/examples/authentication.js"}),"This example script")," logs in on GitHub.com with Chromium, and then reuses the logged in cookie state in WebKit."),Object(i.b)("h3",{id:"api-reference"},"API reference"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/python/docs/api/class-browsercontext",title:"BrowserContext"}),"BrowserContext")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/python/docs/api/class-browsercontext#browsercontextcookiesoptions"}),"browser_context.cookies(**options)")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/python/docs/api/class-browsercontext#browsercontextaddcookiescookies"}),"browser_context.add_cookies(cookies)")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/python/docs/api/class-page#pageevaluatepagefunction-options"}),"page.evaluate(page_function, **options)")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/python/docs/api/class-browsercontext#browsercontextaddinitscriptoptions"}),"browser_context.add_init_script(**options)"))),Object(i.b)("h2",{id:"multi-factor-authentication"},"Multi-factor authentication"),Object(i.b)("p",null,"Accounts with multi-factor authentication (MFA) cannot be fully automated, and need manual intervention. Persistent authentication can be used to partially automate MFA scenarios."),Object(i.b)("h3",{id:"persistent-authentication"},"Persistent authentication"),Object(i.b)("p",null,"Web browsers use a directory on disk to store user history, cookies, IndexedDB and other local state. This disk location is called the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://chromium.googlesource.com/chromium/src/+/master/docs/user_data_dir.md"}),"User data directory"),"."),Object(i.b)("p",null,"Note that persistent authentication is not suited for CI environments since it relies on a disk location. User data directories are specific to browser types and cannot be shared across browser types."),Object(i.b)("p",null,"User data directories can be used with the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/python/docs/api/class-browsertype#browsertypelaunchpersistentcontextuserdatadir-options"}),"browser_type.launch_persistent_context(user_data_dir, **options)")," API."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"# async\n\nimport asyncio\nfrom playwright import async_playwright\n\nasync def main():\n    async with async_playwright() as p:\n        user_data_dir = '/path/to/directory'\n        browser = await p.chromium.launch_persistent_context(userDataDir, headless=False)\n        # Execute login steps manually in the browser window\n\nasyncio.get_event_loop().run_until_complete(main())\n")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"# sync\n\nfrom playwright import sync_playwright\n\nwith sync_playwright() as p:\n    user_data_dir = '/path/to/directory'\n    browser = p.chromium.launch_persistent_context(user_data_dir, headless=False)\n    # Execute login steps manually in the browser window\n")),Object(i.b)("h3",{id:"lifecycle-1"},"Lifecycle"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Create a user data directory on disk 2. Launch a persistent context with the user data directory and login the MFA account. 3. Reuse user data directory to run automation scenarios.")),Object(i.b)("h3",{id:"api-reference-1"},"API reference"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/python/docs/api/class-browsercontext",title:"BrowserContext"}),"BrowserContext")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/python/docs/api/class-browsertype#browsertypelaunchpersistentcontextuserdatadir-options"}),"browser_type.launch_persistent_context(user_data_dir, **options)"))))}p.isMDXComponent=!0},147:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return h}));var a=n(0),o=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},b=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=p(n),d=a,h=b["".concat(r,".").concat(d)]||b[d]||u[d]||i;return n?o.a.createElement(h,s(s({ref:t},l),{},{components:n})):o.a.createElement(h,s({ref:t},l))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var l=2;l<i;l++)r[l]=n[l];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);