"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[760],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),h=c(r),m=a,d=h["".concat(s,".").concat(m)]||h[m]||p[m]||o;return r?n.createElement(d,l(l({ref:t},u),{},{components:r})):n.createElement(d,l({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},4455:function(e,t,r){r.d(t,{Z:function(){return p}});var n=r(7294),a=r(6010),o="tabItem_Ymn6",l=Object.defineProperty,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;function p({children:e,hidden:t,className:r}){return n.createElement("div",((e,t)=>{for(var r in t||(t={}))s.call(t,r)&&u(e,r,t[r]);if(i)for(var r of i(t))c.call(t,r)&&u(e,r,t[r]);return e})({role:"tabpanel",className:(0,a.Z)(o,r)},{hidden:t}),e)}},5332:function(e,t,r){r.d(t,{Z:function(){return w}});var n=r(7294),a=r(6010),o=r(4939),l=r(2174),i=r(2107),s=r(8757),c="tabList__CuJ",u="tabItem_LNqP",p=Object.defineProperty,h=Object.defineProperties,m=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,y=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,g=(e,t,r)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,b=(e,t)=>{for(var r in t||(t={}))y.call(t,r)&&g(e,r,t[r]);if(d)for(var r of d(t))f.call(t,r)&&g(e,r,t[r]);return e};function v(e){var t,r;const{lazy:o,block:p,defaultValue:d,values:y,groupId:f,className:g}=e,v=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),w=null!=y?y:v.map((({props:{value:e,label:t,attributes:r}})=>({value:e,label:t,attributes:r}))),k=(0,l.l)(w,((e,t)=>e.value===t.value));if(k.length>0)throw new Error(`Docusaurus error: Duplicate values "${k.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const O=null===d?d:null!=(r=null!=d?d:null==(t=v.find((e=>e.props.default)))?void 0:t.props.value)?r:v[0].props.value;if(null!==O&&!w.some((e=>e.value===O)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${O}" but none of its children has the corresponding value. Available values are: ${w.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:N,setTabGroupChoices:x}=(0,i.U)(),[j,P]=(0,n.useState)(O),_=[],{blockElementScrollPositionUntilNextRender:C}=(0,s.o5)();if(null!=f){const e=N[f];null!=e&&e!==j&&w.some((t=>t.value===e))&&P(e)}const T=e=>{const t=e.currentTarget,r=_.indexOf(t),n=w[r].value;n!==j&&(C(t),P(n),null!=f&&x(f,String(n)))},E=e=>{var t,r;let n=null;switch(e.key){case"ArrowRight":{const r=_.indexOf(e.currentTarget)+1;n=null!=(t=_[r])?t:_[0];break}case"ArrowLeft":{const t=_.indexOf(e.currentTarget)-1;n=null!=(r=_[t])?r:_[_.length-1];break}}null==n||n.focus()};return n.createElement("div",{className:(0,a.Z)("tabs-container",c)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":p},g)},w.map((({value:e,label:t,attributes:r})=>{return n.createElement("li",(o=b({role:"tab",tabIndex:j===e?0:-1,"aria-selected":j===e,key:e,ref:e=>_.push(e),onKeyDown:E,onFocus:T,onClick:T},r),l={className:(0,a.Z)("tabs__item",u,null==r?void 0:r.className,{"tabs__item--active":j===e})},h(o,m(l))),null!=t?t:e);var o,l}))),o?(0,n.cloneElement)(v.filter((e=>e.props.value===j))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==j})))))}function w(e){const t=(0,o.Z)();return n.createElement(v,b({key:String(t)},e))}},7219:function(e,t,r){r.r(t),r.d(t,{assets:function(){return g},contentTitle:function(){return y},default:function(){return w},frontMatter:function(){return d},metadata:function(){return f},toc:function(){return b}});var n=r(3905),a=r(5332),o=r(4455),l=Object.defineProperty,i=Object.defineProperties,s=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,h=(e,t,r)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,m=(e,t)=>{for(var r in t||(t={}))u.call(t,r)&&h(e,r,t[r]);if(c)for(var r of c(t))p.call(t,r)&&h(e,r,t[r]);return e};const d={id:"class-selectors",title:"Selectors"},y=void 0,f={unversionedId:"api/class-selectors",id:"api/class-selectors",title:"Selectors",description:"Selectors can be used to install custom selector engines. See Working with selectors for more information.",source:"@site/docs/api/class-selectors.mdx",sourceDirName:"api",slug:"/api/class-selectors",permalink:"/python/docs/next/api/class-selectors",draft:!1,tags:[],version:"current",frontMatter:{id:"class-selectors",title:"Selectors"},sidebar:"api",previous:{title:"Route",permalink:"/python/docs/next/api/class-route"},next:{title:"TimeoutError",permalink:"/python/docs/next/api/class-timeouterror"}},g={},b=[{value:"selectors.register(name, **kwargs)",id:"selectors-register",level:2}],v={toc:b};function w(e){var t,r=e,{components:l}=r,h=((e,t)=>{var r={};for(var n in e)u.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&c)for(var n of c(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=m(m({},v),h),i(t,s({components:l,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"Selectors can be used to install custom selector engines. See ",(0,n.kt)("a",m({parentName:"p"},{href:"/python/docs/next/selectors"}),"Working with selectors")," for more information."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"/python/docs/next/api/class-selectors#selectors-register"}),"selectors.register(name, **kwargs)"))),(0,n.kt)("h2",m({},{id:"selectors-register"}),"selectors.register(name, **kwargs)"),(0,n.kt)("font",{size:"2",style:{position:"relative",top:"-20px"}},"Added in: v1.8"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"name"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"selectors-register-option-name"})," ","<",(0,n.kt)("a",m({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"}),"str"),">"," Name that is used in selectors as a prefix, e.g. ",(0,n.kt)("inlineCode",{parentName:"li"},"{name: 'foo'}")," enables ",(0,n.kt)("inlineCode",{parentName:"li"},"foo=myselectorbody")," selectors. May only contain ",(0,n.kt)("inlineCode",{parentName:"li"},"[a-zA-Z0-9_]")," characters.",(0,n.kt)("a",{href:"#selectors-register-option-name",class:"list-anchor"},"#")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"content_script"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"selectors-register-option-content-script"})," ","<",(0,n.kt)("a",m({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html",title:"bool"}),"bool"),">"," Whether to run this selector engine in isolated JavaScript environment. This environment has access to the same DOM, but not any JavaScript objects from the frame's scripts. Defaults to ",(0,n.kt)("inlineCode",{parentName:"li"},"false"),". Note that running as a content script is not guaranteed when this engine is used together with other registered engines.",(0,n.kt)("a",{href:"#selectors-register-option-content-script",class:"list-anchor"},"#")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"path"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"selectors-register-option-path"})," ","<",(0,n.kt)("a",m({parentName:"li"},{href:"https://docs.python.org/3/library/typing.html#typing.Union",title:"Union"}),"Union"),"[",(0,n.kt)("a",m({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"}),"str"),", ",(0,n.kt)("a",m({parentName:"li"},{href:"https://realpython.com/python-pathlib/",title:"pathlib.Path"}),"pathlib.Path"),"]",">"," Path to the JavaScript file. If ",(0,n.kt)("inlineCode",{parentName:"li"},"path")," is a relative path, then it is resolved relative to the current working directory.",(0,n.kt)("a",{href:"#selectors-register-option-path",class:"list-anchor"},"#")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"script"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"selectors-register-option-script"})," ","<",(0,n.kt)("a",m({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"}),"str"),">"," Raw script content.",(0,n.kt)("a",{href:"#selectors-register-option-script",class:"list-anchor"},"#")),(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"selectors-register-return"})," ","<",(0,n.kt)("a",m({parentName:"li"},{href:"https://docs.python.org/3/library/constants.html#None",title:"None"}),"NoneType"),">",(0,n.kt)("a",{href:"#selectors-register-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"An example of registering selector engine that queries elements based on a tag name:"),(0,n.kt)(a.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"sync",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-py"}),'from playwright.sync_api import sync_playwright\n\ndef run(playwright):\n    tag_selector = """\n      {\n          // Returns the first element matching given selector in the root\'s subtree.\n          query(root, selector) {\n              return root.querySelector(selector);\n          },\n          // Returns all elements matching given selector in the root\'s subtree.\n          queryAll(root, selector) {\n              return Array.from(root.querySelectorAll(selector));\n          }\n      }"""\n\n    # Register the engine. Selectors will be prefixed with "tag=".\n    playwright.selectors.register("tag", tag_selector)\n    browser = playwright.chromium.launch()\n    page = browser.new_page()\n    page.set_content(\'<div><button>Click me</button></div>\')\n\n    # Use the selector prefixed with its name.\n    button = page.locator(\'tag=button\')\n    # Combine it with other selector engines.\n    page.locator(\'tag=div >> text="Click me"\').click()\n    # Can use it in any methods supporting selectors.\n    button_count = page.locator(\'tag=button\').count()\n    print(button_count)\n    browser.close()\n\nwith sync_playwright() as playwright:\n    run(playwright)\n'))),(0,n.kt)(o.Z,{value:"async",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-py"}),'import asyncio\nfrom playwright.async_api import async_playwright\n\nasync def run(playwright):\n    tag_selector = """\n      {\n          // Returns the first element matching given selector in the root\'s subtree.\n          query(root, selector) {\n              return root.querySelector(selector);\n          },\n          // Returns all elements matching given selector in the root\'s subtree.\n          queryAll(root, selector) {\n              return Array.from(root.querySelectorAll(selector));\n          }\n      }"""\n\n    # Register the engine. Selectors will be prefixed with "tag=".\n    await playwright.selectors.register("tag", tag_selector)\n    browser = await playwright.chromium.launch()\n    page = await browser.new_page()\n    await page.set_content(\'<div><button>Click me</button></div>\')\n\n    # Use the selector prefixed with its name.\n    button = await page.query_selector(\'tag=button\')\n    # Combine it with other selector engines.\n    await page.locator(\'tag=div >> text="Click me"\').click()\n    # Can use it in any methods supporting selectors.\n    button_count = await page.locator(\'tag=button\').count()\n    print(button_count)\n    await browser.close()\n\nasync def main():\n    async with async_playwright() as playwright:\n        await run(playwright)\n\nasyncio.run(main())\n')))))}w.isMDXComponent=!0}}]);