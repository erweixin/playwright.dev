"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[6416],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return d}});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},p=Object.keys(e);for(n=0;n<p.length;n++)a=p[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)a=p[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var i=n.createContext({}),s=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,p=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),g=s(a),d=l,y=g["".concat(i,".").concat(d)]||g[d]||u[d]||p;return a?n.createElement(y,r(r({ref:t},c),{},{components:a})):n.createElement(y,r({ref:t},c))}));function d(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var p=a.length,r=new Array(p);r[0]=g;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:l,r[1]=o;for(var s=2;s<p;s++)r[s]=a[s];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},3811:function(e,t,a){a.d(t,{Z:function(){return s}});var n=a(7294),l=Object.defineProperty,p=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,i=(e,t,a)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;function s({children:e,hidden:t,className:a}){return n.createElement("div",((e,t)=>{for(var a in t||(t={}))r.call(t,a)&&i(e,a,t[a]);if(p)for(var a of p(t))o.call(t,a)&&i(e,a,t[a]);return e})({role:"tabpanel"},{hidden:t,className:a}),e)}},3824:function(e,t,a){a.d(t,{Z:function(){return b}});var n=a(7294),l=a(4939),p=a(9670),r=a(6010),o="tabItem_LplD",i=Object.defineProperty,s=Object.defineProperties,c=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,y=(e,t,a)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,m=(e,t)=>{for(var a in t||(t={}))g.call(t,a)&&y(e,a,t[a]);if(u)for(var a of u(t))d.call(t,a)&&y(e,a,t[a]);return e};function f(e){var t,a,l;const{lazy:i,block:u,defaultValue:g,values:d,groupId:y,className:f}=e,b=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=null!=d?d:b.map((({props:{value:e,label:t,attributes:a}})=>({value:e,label:t,attributes:a}))),w=(0,p.lx)(v,((e,t)=>e.value===t.value));if(w.length>0)throw new Error(`Docusaurus error: Duplicate values "${w.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const h=null===g?g:null!=(l=null!=g?g:null==(t=b.find((e=>e.props.default)))?void 0:t.props.value)?l:null==(a=b[0])?void 0:a.props.value;if(null!==h&&!v.some((e=>e.value===h)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${h}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:_}=(0,p.UB)(),[x,N]=(0,n.useState)(h),O=[],{blockElementScrollPositionUntilNextRender:T}=(0,p.o5)();if(null!=y){const e=k[y];null!=e&&e!==x&&v.some((t=>t.value===e))&&N(e)}const P=e=>{const t=e.currentTarget,a=O.indexOf(t),n=v[a].value;n!==x&&(T(t),N(n),null!=y&&_(y,n))},j=e=>{let t=null;switch(e.key){case"ArrowRight":{const a=O.indexOf(e.currentTarget)+1;t=O[a]||O[0];break}case"ArrowLeft":{const a=O.indexOf(e.currentTarget)-1;t=O[a]||O[O.length-1];break}}null==t||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":u},f)},v.map((({value:e,label:t,attributes:a})=>{return n.createElement("li",(l=m({role:"tab",tabIndex:x===e?0:-1,"aria-selected":x===e,key:e,ref:e=>O.push(e),onKeyDown:j,onFocus:P,onClick:P},a),p={className:(0,r.Z)("tabs__item",o,null==a?void 0:a.className,{"tabs__item--active":x===e})},s(l,c(p))),null!=t?t:e);var l,p}))),i?(0,n.cloneElement)(b.filter((e=>e.props.value===x))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},b.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==x})))))}function b(e){const t=(0,l.Z)();return n.createElement(f,m({key:String(t)},e))}},8878:function(e,t,a){a.r(t),a.d(t,{assets:function(){return b},contentTitle:function(){return m},default:function(){return h},frontMatter:function(){return y},metadata:function(){return f},toc:function(){return v}});var n=a(3905),l=a(3824),p=a(3811),r=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,g=(e,t,a)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,d=(e,t)=>{for(var a in t||(t={}))c.call(t,a)&&g(e,a,t[a]);if(s)for(var a of s(t))u.call(t,a)&&g(e,a,t[a]);return e};const y={id:"pages",title:"Pages"},m=void 0,f={unversionedId:"pages",id:"version-stable/pages",title:"Pages",description:"- Pages",source:"@site/versioned_docs/version-stable/pages.mdx",sourceDirName:".",slug:"/pages",permalink:"/python/docs/pages",tags:[],version:"stable",frontMatter:{id:"pages",title:"Pages"},sidebar:"docs",previous:{title:"Network",permalink:"/python/docs/network"},next:{title:"Page Object Models",permalink:"/python/docs/pom"}},b={},v=[{value:"Pages",id:"pages",level:2},{value:"Multiple pages",id:"multiple-pages",level:2},{value:"Handling new pages",id:"handling-new-pages",level:2},{value:"Handling popups",id:"handling-popups",level:2}],w={toc:v};function h(e){var t,a=e,{components:r}=a,g=((e,t)=>{var a={};for(var n in e)c.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&s)for(var n of s(e))t.indexOf(n)<0&&u.call(e,n)&&(a[n]=e[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(t=d(d({},w),g),o(t,i({components:r,mdxType:"MDXLayout"}))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"#pages"}),"Pages")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"#multiple-pages"}),"Multiple pages")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"#handling-new-pages"}),"Handling new pages")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"#handling-popups"}),"Handling popups"))),(0,n.kt)("h2",d({},{id:"pages"}),"Pages"),(0,n.kt)("p",null,"Each ",(0,n.kt)("a",d({parentName:"p"},{href:"/python/docs/api/class-browsercontext",title:"BrowserContext"}),"BrowserContext")," can have multiple pages. A ",(0,n.kt)("a",d({parentName:"p"},{href:"/python/docs/api/class-page",title:"Page"}),"Page")," refers to a single tab or a popup window within a browser context. It should be used to navigate to URLs and interact with the page content."),(0,n.kt)(l.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,n.kt)(p.Z,{value:"sync",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-py"}),"page = context.new_page()\n\n# Navigate explicitly, similar to entering a URL in the browser.\npage.goto('http://example.com')\n# Fill an input.\npage.locator('#search').fill('query')\n\n# Navigate implicitly by clicking a link.\npage.locator('#submit').click()\n# Expect a new url.\nprint(page.url)\n"))),(0,n.kt)(p.Z,{value:"async",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-py"}),"page = await context.new_page()\n\n# Navigate explicitly, similar to entering a URL in the browser.\nawait page.goto('http://example.com')\n# Fill an input.\nawait page.locator('#search').fill('query')\n\n# Navigate implicitly by clicking a link.\nawait page.locator('#submit').click()\n# Expect a new url.\nprint(page.url)\n")))),(0,n.kt)("h2",d({},{id:"multiple-pages"}),"Multiple pages"),(0,n.kt)("p",null,"Each browser context can host multiple pages (tabs)."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Each page behaves like a focused, active page. Bringing the page to front is not required."),(0,n.kt)("li",{parentName:"ul"},"Pages inside a context respect context-level emulation, like viewport sizes, custom network routes or browser locale.")),(0,n.kt)(l.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,n.kt)(p.Z,{value:"sync",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-py"}),"# create two pages\npage_one = context.new_page()\npage_two = context.new_page()\n\n# get pages of a browser context\nall_pages = context.pages\n"))),(0,n.kt)(p.Z,{value:"async",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-py"}),"# create two pages\npage_one = await context.new_page()\npage_two = await context.new_page()\n\n# get pages of a browser context\nall_pages = context.pages\n")))),(0,n.kt)("h2",d({},{id:"handling-new-pages"}),"Handling new pages"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"page")," event on browser contexts can be used to get new pages that are created in the context. This can be used to handle new pages opened by ",(0,n.kt)("inlineCode",{parentName:"p"},'target="_blank"')," links."),(0,n.kt)(l.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,n.kt)(p.Z,{value:"sync",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-py"}),"# Get page after a specific action (e.g. clicking a link)\nwith context.expect_page() as new_page_info:\n    page.click('a[target=\"_blank\"]') # Opens a new tab\nnew_page = new_page_info.value\n\nnew_page.wait_for_load_state()\nprint(new_page.title())\n"))),(0,n.kt)(p.Z,{value:"async",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-py"}),"# Get page after a specific action (e.g. clicking a link)\nasync with context.expect_page() as new_page_info:\n    await page.click('a[target=\"_blank\"]') # Opens a new tab\nnew_page = await new_page_info.value\n\nawait new_page.wait_for_load_state()\nprint(await new_page.title())\n")))),(0,n.kt)("p",null,"If the action that triggers the new page is unknown, the following pattern can be used."),(0,n.kt)(l.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,n.kt)(p.Z,{value:"sync",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-py"}),'# Get all new pages (including popups) in the context\ndef handle_page(page):\n    page.wait_for_load_state()\n    print(page.title())\n\ncontext.on("page", handle_page)\n'))),(0,n.kt)(p.Z,{value:"async",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-py"}),'# Get all new pages (including popups) in the context\nasync def handle_page(page):\n    await page.wait_for_load_state()\n    print(await page.title())\n\ncontext.on("page", handle_page)\n')))),(0,n.kt)("h2",d({},{id:"handling-popups"}),"Handling popups"),(0,n.kt)("p",null,"If the page opens a pop-up (e.g. pages opened by ",(0,n.kt)("inlineCode",{parentName:"p"},'target="_blank"')," links), you can get a reference to it by listening to the ",(0,n.kt)("inlineCode",{parentName:"p"},"popup")," event on the page."),(0,n.kt)("p",null,"This event is emitted in addition to the ",(0,n.kt)("inlineCode",{parentName:"p"},"browserContext.on('page')")," event, but only for popups relevant to this page."),(0,n.kt)(l.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,n.kt)(p.Z,{value:"sync",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-py"}),'# Get popup after a specific action (e.g., click)\nwith page.expect_popup() as popup_info:\n    page.click("#open")\npopup = popup_info.value\n\npopup.wait_for_load_state()\nprint(popup.title())\n'))),(0,n.kt)(p.Z,{value:"async",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-py"}),'# Get popup after a specific action (e.g., click)\nasync with page.expect_popup() as popup_info:\n    await page.click("#open")\npopup = await popup_info.value\n\nawait popup.wait_for_load_state()\nprint(await popup.title())\n')))),(0,n.kt)("p",null,"If the action that triggers the popup is unknown, the following pattern can be used."),(0,n.kt)(l.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,n.kt)(p.Z,{value:"sync",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-py"}),'# Get all popups when they open\ndef handle_popup(popup):\n    popup.wait_for_load_state()\n    print(popup.title())\n\npage.on("popup", handle_popup)\n'))),(0,n.kt)(p.Z,{value:"async",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-py"}),'# Get all popups when they open\nasync def handle_popup(popup):\n    await popup.wait_for_load_state()\n    print(await popup.title())\n\npage.on("popup", handle_popup)\n')))))}h.isMDXComponent=!0}}]);