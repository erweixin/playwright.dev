"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[2223],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return d}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(a),d=r,y=m["".concat(s,".").concat(d)]||m[d]||u[d]||l;return a?n.createElement(y,o(o({ref:t},p),{},{components:a})):n.createElement(y,o({ref:t},p))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var c=2;c<l;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},3811:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(7294),r=Object.defineProperty,l=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,s=(e,t,a)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;function c({children:e,hidden:t,className:a}){return n.createElement("div",((e,t)=>{for(var a in t||(t={}))o.call(t,a)&&s(e,a,t[a]);if(l)for(var a of l(t))i.call(t,a)&&s(e,a,t[a]);return e})({role:"tabpanel"},{hidden:t,className:a}),e)}},3824:function(e,t,a){a.d(t,{Z:function(){return w}});var n=a(7294),r=a(4939),l=a(9670),o=a(6010),i="tabItem_LplD",s=Object.defineProperty,c=Object.defineProperties,p=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,y=(e,t,a)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,g=(e,t)=>{for(var a in t||(t={}))m.call(t,a)&&y(e,a,t[a]);if(u)for(var a of u(t))d.call(t,a)&&y(e,a,t[a]);return e};function v(e){var t,a,r;const{lazy:s,block:u,defaultValue:m,values:d,groupId:y,className:v}=e,w=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=null!=d?d:w.map((({props:{value:e,label:t,attributes:a}})=>({value:e,label:t,attributes:a}))),b=(0,l.lx)(h,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===m?m:null!=(r=null!=m?m:null==(t=w.find((e=>e.props.default)))?void 0:t.props.value)?r:null==(a=w[0])?void 0:a.props.value;if(null!==f&&!h.some((e=>e.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:x}=(0,l.UB)(),[N,T]=(0,n.useState)(f),_=[],{blockElementScrollPositionUntilNextRender:I}=(0,l.o5)();if(null!=y){const e=k[y];null!=e&&e!==N&&h.some((t=>t.value===e))&&T(e)}const O=e=>{const t=e.currentTarget,a=_.indexOf(t),n=h[a].value;n!==N&&(I(t),T(n),null!=y&&x(y,n))},P=e=>{let t=null;switch(e.key){case"ArrowRight":{const a=_.indexOf(e.currentTarget)+1;t=_[a]||_[0];break}case"ArrowLeft":{const a=_.indexOf(e.currentTarget)-1;t=_[a]||_[_.length-1];break}}null==t||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":u},v)},h.map((({value:e,label:t,attributes:a})=>{return n.createElement("li",(r=g({role:"tab",tabIndex:N===e?0:-1,"aria-selected":N===e,key:e,ref:e=>_.push(e),onKeyDown:P,onFocus:O,onClick:O},a),l={className:(0,o.Z)("tabs__item",i,null==a?void 0:a.className,{"tabs__item--active":N===e})},c(r,p(l))),null!=t?t:e);var r,l}))),s?(0,n.cloneElement)(w.filter((e=>e.props.value===N))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},w.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function w(e){const t=(0,r.Z)();return n.createElement(v,g({key:String(t)},e))}},6715:function(e,t,a){a.r(t),a.d(t,{assets:function(){return w},contentTitle:function(){return g},default:function(){return f},frontMatter:function(){return y},metadata:function(){return v},toc:function(){return h}});var n=a(3905),r=a(3824),l=a(3811),o=Object.defineProperty,i=Object.defineProperties,s=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,m=(e,t,a)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,d=(e,t)=>{for(var a in t||(t={}))p.call(t,a)&&m(e,a,t[a]);if(c)for(var a of c(t))u.call(t,a)&&m(e,a,t[a]);return e};const y={id:"emulation",title:"Emulation"},g=void 0,v={unversionedId:"emulation",id:"version-stable/emulation",title:"Emulation",description:"Playwright allows overriding various parameters of the device where the browser is running:",source:"@site/versioned_docs/version-stable/emulation.mdx",sourceDirName:".",slug:"/emulation",permalink:"/python/docs/emulation",tags:[],version:"stable",frontMatter:{id:"emulation",title:"Emulation"},sidebar:"docs",previous:{title:"Downloads",permalink:"/python/docs/downloads"},next:{title:"Evaluating JavaScript",permalink:"/python/docs/evaluating"}},w={},h=[{value:"Devices",id:"devices",level:2},{value:"API reference",id:"api-reference",level:3},{value:"User agent",id:"user-agent",level:2},{value:"API reference",id:"api-reference-1",level:3},{value:"Viewport",id:"viewport",level:2},{value:"API reference",id:"api-reference-2",level:3},{value:"Locale &amp; timezone",id:"locale--timezone",level:2},{value:"API reference",id:"api-reference-3",level:3},{value:"Permissions",id:"permissions",level:2},{value:"API reference",id:"api-reference-4",level:3},{value:"Geolocation",id:"geolocation",level:2},{value:"API reference",id:"api-reference-5",level:3},{value:"Color scheme and media",id:"color-scheme-and-media",level:2},{value:"API reference",id:"api-reference-6",level:3}],b={toc:h};function f(e){var t,a=e,{components:o}=a,m=((e,t)=>{var a={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&c)for(var n of c(e))t.indexOf(n)<0&&u.call(e,n)&&(a[n]=e[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(t=d(d({},b),m),i(t,s({components:o,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"Playwright allows overriding various parameters of the device where the browser is running:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"viewport size, device scale factor, touch support"),(0,n.kt)("li",{parentName:"ul"},"locale, timezone"),(0,n.kt)("li",{parentName:"ul"},"color scheme"),(0,n.kt)("li",{parentName:"ul"},"geolocation")),(0,n.kt)("p",null,"Most of these parameters are configured during the browser context construction, but some of them such as viewport size can be changed for individual pages."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"#devices"}),"Devices")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"#user-agent"}),"User agent")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"#viewport"}),"Viewport")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"#locale--timezone"}),"Locale & timezone")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"#permissions"}),"Permissions")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"#geolocation"}),"Geolocation")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"#color-scheme-and-media"}),"Color scheme and media"))),(0,n.kt)("br",null),(0,n.kt)("h2",d({},{id:"devices"}),"Devices"),(0,n.kt)("p",null,"Playwright comes with a registry of device parameters for selected mobile devices. It can be used to simulate browser behavior on a mobile device:"),(0,n.kt)(r.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"sync",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-py"}),"from playwright.sync_api import sync_playwright\n\ndef run(playwright):\n    pixel_2 = playwright.devices['Pixel 2']\n    browser = playwright.webkit.launch(headless=False)\n    context = browser.new_context(\n        **pixel_2,\n    )\n\nwith sync_playwright() as playwright:\n    run(playwright)\n"))),(0,n.kt)(l.Z,{value:"async",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-py"}),"import asyncio\nfrom playwright.async_api import async_playwright\n\nasync def run(playwright):\n    pixel_2 = playwright.devices['Pixel 2']\n    browser = await playwright.webkit.launch(headless=False)\n    context = await browser.new_context(\n        **pixel_2,\n    )\n\nasync def main():\n    async with async_playwright() as playwright:\n        await run(playwright)\nasyncio.run(main())\n")))),(0,n.kt)("p",null,"All pages created in the context above will share the same device parameters."),(0,n.kt)("h3",d({},{id:"api-reference"}),"API reference"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"/python/docs/api/class-playwright#playwright-devices"}),"playwright.devices")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"/python/docs/api/class-browser#browser-new-context"}),"browser.new_context(**kwargs)"))),(0,n.kt)("br",null),(0,n.kt)("h2",d({},{id:"user-agent"}),"User agent"),(0,n.kt)("p",null,"All pages created in the context above will share the user agent specified:"),(0,n.kt)(r.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"sync",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-py"}),"context = browser.new_context(\n  user_agent='My user agent'\n)\n"))),(0,n.kt)(l.Z,{value:"async",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-py"}),"context = await browser.new_context(\n  user_agent='My user agent'\n)\n")))),(0,n.kt)("h3",d({},{id:"api-reference-1"}),"API reference"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"/python/docs/api/class-browser#browser-new-context"}),"browser.new_context(**kwargs)"))),(0,n.kt)("br",null),(0,n.kt)("h2",d({},{id:"viewport"}),"Viewport"),(0,n.kt)("p",null,"Create a context with custom viewport size:"),(0,n.kt)(r.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"sync",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-py"}),"# Create context with given viewport\ncontext = browser.new_context(\n  viewport={ 'width': 1280, 'height': 1024 }\n)\n\n# Resize viewport for individual page\nawait page.set_viewport_size({\"width\": 1600, \"height\": 1200})\n\n# Emulate high-DPI\ncontext = browser.new_context(\n  viewport={ 'width': 2560, 'height': 1440 },\n  device_scale_factor=2,\n"))),(0,n.kt)(l.Z,{value:"async",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-py"}),"# Create context with given viewport\ncontext = await browser.new_context(\n  viewport={ 'width': 1280, 'height': 1024 }\n)\n\n# Resize viewport for individual page\nawait page.set_viewport_size({\"width\": 1600, \"height\": 1200})\n\n# Emulate high-DPI\ncontext = await browser.new_context(\n  viewport={ 'width': 2560, 'height': 1440 },\n  device_scale_factor=2,\n)\n")))),(0,n.kt)("h3",d({},{id:"api-reference-2"}),"API reference"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"/python/docs/api/class-browser#browser-new-context"}),"browser.new_context(**kwargs)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"/python/docs/api/class-page#page-set-viewport-size"}),"page.set_viewport_size(viewport_size)"))),(0,n.kt)("br",null),(0,n.kt)("h2",d({},{id:"locale--timezone"}),"Locale & timezone"),(0,n.kt)(r.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"sync",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-py"}),"# Emulate locale and time\ncontext = browser.new_context(\n  locale='de-DE',\n  timezone_id='Europe/Berlin',\n)\n"))),(0,n.kt)(l.Z,{value:"async",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-py"}),"# Emulate locale and time\ncontext = await browser.new_context(\n  locale='de-DE',\n  timezone_id='Europe/Berlin',\n)\n")))),(0,n.kt)("h3",d({},{id:"api-reference-3"}),"API reference"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"/python/docs/api/class-browser#browser-new-context"}),"browser.new_context(**kwargs)"))),(0,n.kt)("br",null),(0,n.kt)("h2",d({},{id:"permissions"}),"Permissions"),(0,n.kt)("p",null,"Allow all pages in the context to show system notifications:"),(0,n.kt)(r.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"sync",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-py"}),"context = browser.new_context(\n  permissions=['notifications'],\n)\n"))),(0,n.kt)(l.Z,{value:"async",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-py"}),"context = await browser.new_context(\n  permissions=['notifications'],\n)\n")))),(0,n.kt)("p",null,"Grant all pages in the existing context access to current location:"),(0,n.kt)(r.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"sync",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-py"}),"context.grant_permissions(['geolocation'])\n"))),(0,n.kt)(l.Z,{value:"async",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-py"}),"await context.grant_permissions(['geolocation'])\n")))),(0,n.kt)("p",null,"Grant notifications access from a specific domain:"),(0,n.kt)(r.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"sync",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-py"}),"context.grant_permissions(['notifications'], origin='https://skype.com')\n"))),(0,n.kt)(l.Z,{value:"async",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-py"}),"await context.grant_permissions(['notifications'], origin='https://skype.com')\n")))),(0,n.kt)("p",null,"Revoke all permissions:"),(0,n.kt)(r.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"sync",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-py"}),"context.clear_permissions()\n"))),(0,n.kt)(l.Z,{value:"async",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-py"}),"await context.clear_permissions()\n")))),(0,n.kt)("h3",d({},{id:"api-reference-4"}),"API reference"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"/python/docs/api/class-browser#browser-new-context"}),"browser.new_context(**kwargs)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"/python/docs/api/class-browsercontext#browser-context-grant-permissions"}),"browser_context.grant_permissions(permissions, **kwargs)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"/python/docs/api/class-browsercontext#browser-context-clear-permissions"}),"browser_context.clear_permissions()"))),(0,n.kt)("br",null),(0,n.kt)("h2",d({},{id:"geolocation"}),"Geolocation"),(0,n.kt)("p",null,"Create a context with ",(0,n.kt)("inlineCode",{parentName:"p"},'"geolocation"')," permissions granted:"),(0,n.kt)(r.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"sync",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-py"}),'context = browser.new_context(\n  geolocation={"longitude": 48.858455, "latitude": 2.294474},\n  permissions=["geolocation"]\n)\n'))),(0,n.kt)(l.Z,{value:"async",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-py"}),'context = await browser.new_context(\n  geolocation={"longitude": 48.858455, "latitude": 2.294474},\n  permissions=["geolocation"]\n)\n')))),(0,n.kt)("p",null,"Change the location later:"),(0,n.kt)(r.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"sync",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-py"}),'context.set_geolocation({"longitude": 29.979097, "latitude": 31.134256})\n'))),(0,n.kt)(l.Z,{value:"async",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-py"}),'await context.set_geolocation({"longitude": 29.979097, "latitude": 31.134256})\n')))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Note")," you can only change geolocation for all pages in the context."),(0,n.kt)("h3",d({},{id:"api-reference-5"}),"API reference"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"/python/docs/api/class-browser#browser-new-context"}),"browser.new_context(**kwargs)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"/python/docs/api/class-browsercontext#browser-context-set-geolocation"}),"browser_context.set_geolocation(geolocation)"))),(0,n.kt)("br",null),(0,n.kt)("h2",d({},{id:"color-scheme-and-media"}),"Color scheme and media"),(0,n.kt)("p",null,"Create a context with dark or light mode. Pages created in this context will follow this color scheme preference."),(0,n.kt)(r.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"sync",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-py"}),"# Create context with dark mode\ncontext = browser.new_context(\n  color_scheme='dark' # or 'light'\n)\n\n# Create page with dark mode\npage = browser.new_page(\n  color_scheme='dark' # or 'light'\n)\n\n# Change color scheme for the page\npage.emulate_media(color_scheme='dark')\n\n# Change media for page\npage.emulate_media(media='print')\n"))),(0,n.kt)(l.Z,{value:"async",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-py"}),"# Create context with dark mode\ncontext = await browser.new_context(\n  color_scheme='dark' # or 'light'\n)\n\n# Create page with dark mode\npage = await browser.new_page(\n  color_scheme='dark' # or 'light'\n)\n\n# Change color scheme for the page\nawait page.emulate_media(color_scheme='dark')\n\n# Change media for page\nawait page.emulate_media(media='print')\n")))),(0,n.kt)("h3",d({},{id:"api-reference-6"}),"API reference"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"/python/docs/api/class-browser#browser-new-context"}),"browser.new_context(**kwargs)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"/python/docs/api/class-page#page-emulate-media"}),"page.emulate_media(**kwargs)"))))}f.isMDXComponent=!0}}]);