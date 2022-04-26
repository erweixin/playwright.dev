"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[5964],{3905:function(e,a,t){t.d(a,{Zo:function(){return c},kt:function(){return h}});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=n.createContext({}),p=function(e){var a=n.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},c=function(e){var a=p(e.components);return n.createElement(i.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(t),h=r,m=u["".concat(i,".").concat(h)]||u[h]||d[h]||l;return t?n.createElement(m,s(s({ref:a},c),{},{components:t})):n.createElement(m,s({ref:a},c))}));function h(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=t.length,s=new Array(l);s[0]=u;var o={};for(var i in a)hasOwnProperty.call(a,i)&&(o[i]=a[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var p=2;p<l;p++)s[p]=t[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},73811:function(e,a,t){t.d(a,{Z:function(){return p}});var n=t(67294),r=Object.defineProperty,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,i=(e,a,t)=>a in e?r(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t;function p({children:e,hidden:a,className:t}){return n.createElement("div",((e,a)=>{for(var t in a||(a={}))s.call(a,t)&&i(e,t,a[t]);if(l)for(var t of l(a))o.call(a,t)&&i(e,t,a[t]);return e})({role:"tabpanel"},{hidden:a,className:t}),e)}},73824:function(e,a,t){t.d(a,{Z:function(){return g}});var n=t(67294),r=t(54939),l=t(39670),s=t(86010),o="tabItem_LplD",i=Object.defineProperty,p=Object.defineProperties,c=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,m=(e,a,t)=>a in e?i(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,y=(e,a)=>{for(var t in a||(a={}))u.call(a,t)&&m(e,t,a[t]);if(d)for(var t of d(a))h.call(a,t)&&m(e,t,a[t]);return e};function f(e){var a,t,r;const{lazy:i,block:d,defaultValue:u,values:h,groupId:m,className:f}=e,g=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=null!=h?h:g.map((({props:{value:e,label:a,attributes:t}})=>({value:e,label:a,attributes:t}))),b=(0,l.lx)(v,((e,a)=>e.value===a.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const k=null===u?u:null!=(r=null!=u?u:null==(a=g.find((e=>e.props.default)))?void 0:a.props.value)?r:null==(t=g[0])?void 0:t.props.value;if(null!==k&&!v.some((e=>e.value===k)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${k}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:w,setTabGroupChoices:N}=(0,l.UB)(),[_,j]=(0,n.useState)(k),O=[],{blockElementScrollPositionUntilNextRender:x}=(0,l.o5)();if(null!=m){const e=w[m];null!=e&&e!==_&&v.some((a=>a.value===e))&&j(e)}const E=e=>{const a=e.currentTarget,t=O.indexOf(a),n=v[t].value;n!==_&&(x(a),j(n),null!=m&&N(m,n))},T=e=>{let a=null;switch(e.key){case"ArrowRight":{const t=O.indexOf(e.currentTarget)+1;a=O[t]||O[0];break}case"ArrowLeft":{const t=O.indexOf(e.currentTarget)-1;a=O[t]||O[O.length-1];break}}null==a||a.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":d},f)},v.map((({value:e,label:a,attributes:t})=>{return n.createElement("li",(r=y({role:"tab",tabIndex:_===e?0:-1,"aria-selected":_===e,key:e,ref:e=>O.push(e),onKeyDown:T,onFocus:E,onClick:E},t),l={className:(0,s.Z)("tabs__item",o,null==t?void 0:t.className,{"tabs__item--active":_===e})},p(r,c(l))),null!=a?a:e);var r,l}))),i?(0,n.cloneElement)(g.filter((e=>e.props.value===_))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},g.map(((e,a)=>(0,n.cloneElement)(e,{key:a,hidden:e.props.value!==_})))))}function g(e){const a=(0,r.Z)();return n.createElement(f,y({key:String(a)},e))}},1812:function(e,a,t){t.r(a),t.d(a,{assets:function(){return g},contentTitle:function(){return y},default:function(){return k},frontMatter:function(){return m},metadata:function(){return f},toc:function(){return v}});var n=t(3905),r=t(73824),l=t(73811),s=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,u=(e,a,t)=>a in e?s(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,h=(e,a)=>{for(var t in a||(a={}))c.call(a,t)&&u(e,t,a[t]);if(p)for(var t of p(a))d.call(a,t)&&u(e,t,a[t]);return e};const m={id:"handles",title:"Handles"},y=void 0,f={unversionedId:"handles",id:"version-1.18/handles",title:"Handles",description:"Playwright can create handles to the page DOM elements or any other objects inside the page. These handles live in the Playwright process, whereas the actual objects live in the browser. There are two types of handles:",source:"@site/versioned_docs/version-1.18/handles.mdx",sourceDirName:".",slug:"/handles",permalink:"/python/docs/1.18/handles",tags:[],version:"1.18",frontMatter:{id:"handles",title:"Handles"},sidebar:"version-1.18/docs",previous:{title:"Frames",permalink:"/python/docs/1.18/frames"},next:{title:"Input",permalink:"/python/docs/1.18/input"}},g={},v=[{value:"API reference",id:"api-reference",level:3},{value:"Element Handles",id:"element-handles",level:2},{value:"Handles as parameters",id:"handles-as-parameters",level:2},{value:"Handle Lifecycle",id:"handle-lifecycle",level:2},{value:"API reference",id:"api-reference-1",level:3}],b={toc:v};function k(e){var a,t=e,{components:s}=t,u=((e,a)=>{var t={};for(var n in e)c.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&p)for(var n of p(e))a.indexOf(n)<0&&d.call(e,n)&&(t[n]=e[n]);return t})(t,["components"]);return(0,n.kt)("wrapper",(a=h(h({},b),u),o(a,i({components:s,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"Playwright can create handles to the page DOM elements or any other objects inside the page. These handles live in the Playwright process, whereas the actual objects live in the browser. There are two types of handles:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",h({parentName:"li"},{href:"/python/docs/1.18/api/class-jshandle",title:"JSHandle"}),"JSHandle")," to reference any JavaScript objects in the page"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",h({parentName:"li"},{href:"/python/docs/1.18/api/class-elementhandle",title:"ElementHandle"}),"ElementHandle")," to reference DOM elements in the page, it has extra methods that allow performing actions on the elements and asserting their properties.")),(0,n.kt)("p",null,"Since any DOM element in the page is also a JavaScript object, any ",(0,n.kt)("a",h({parentName:"p"},{href:"/python/docs/1.18/api/class-elementhandle",title:"ElementHandle"}),"ElementHandle")," is a ",(0,n.kt)("a",h({parentName:"p"},{href:"/python/docs/1.18/api/class-jshandle",title:"JSHandle"}),"JSHandle")," as well."),(0,n.kt)("p",null,"Handles are used to perform operations on those actual objects in the page. You can evaluate on a handle, get handle properties, pass handle as an evaluation parameter, serialize page object into JSON etc. See the ",(0,n.kt)("a",h({parentName:"p"},{href:"/python/docs/1.18/api/class-jshandle",title:"JSHandle"}),"JSHandle")," class API for these and methods."),(0,n.kt)("h3",h({},{id:"api-reference"}),"API reference"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",h({parentName:"li"},{href:"/python/docs/1.18/api/class-jshandle",title:"JSHandle"}),"JSHandle")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",h({parentName:"li"},{href:"/python/docs/1.18/api/class-elementhandle",title:"ElementHandle"}),"ElementHandle"))),(0,n.kt)("p",null,"Here is the easiest way to obtain a ",(0,n.kt)("a",h({parentName:"p"},{href:"/python/docs/1.18/api/class-jshandle",title:"JSHandle"}),"JSHandle"),"."),(0,n.kt)(r.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"sync",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",h({parentName:"pre"},{className:"language-py"}),"js_handle = page.evaluate_handle('window')\n#  Use jsHandle for evaluations.\n"))),(0,n.kt)(l.Z,{value:"async",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",h({parentName:"pre"},{className:"language-py"}),"js_handle = await page.evaluate_handle('window')\n#  Use jsHandle for evaluations.\n")))),(0,n.kt)("h2",h({},{id:"element-handles"}),"Element Handles"),(0,n.kt)("div",h({},{className:"admonition admonition-caution alert alert--warning"}),(0,n.kt)("div",h({parentName:"div"},{className:"admonition-heading"}),(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",h({parentName:"h5"},{className:"admonition-icon"}),(0,n.kt)("svg",h({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),(0,n.kt)("path",h({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"Discouraged")),(0,n.kt)("div",h({parentName:"div"},{className:"admonition-content"}),(0,n.kt)("p",{parentName:"div"},"The use of ",(0,n.kt)("a",h({parentName:"p"},{href:"/python/docs/1.18/api/class-elementhandle",title:"ElementHandle"}),"ElementHandle")," is discouraged, use ",(0,n.kt)("a",h({parentName:"p"},{href:"/python/docs/1.18/api/class-locator",title:"Locator"}),"Locator")," objects and web-first assertions instead."))),(0,n.kt)("p",null,"When ",(0,n.kt)("a",h({parentName:"p"},{href:"/python/docs/1.18/api/class-elementhandle",title:"ElementHandle"}),"ElementHandle")," is required, it is recommended to fetch it with the ",(0,n.kt)("a",h({parentName:"p"},{href:"/python/docs/1.18/api/class-page#page-wait-for-selector"}),"page.wait_for_selector(selector, **kwargs)")," or ",(0,n.kt)("a",h({parentName:"p"},{href:"/python/docs/1.18/api/class-frame#frame-wait-for-selector"}),"frame.wait_for_selector(selector, **kwargs)")," methods. These APIs wait for the element to be attached and visible."),(0,n.kt)(r.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"sync",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",h({parentName:"pre"},{className:"language-py"}),"# Get the element handle\nelement_handle = page.wait_for_selector('#box')\n\n# Assert bounding box for the element\nbounding_box = element_handle.bounding_box()\nassert bounding_box.width == 100\n\n# Assert attribute for the element\nclass_names = element_handle.get_attribute('class')\nassert 'highlighted' in class_names\n"))),(0,n.kt)(l.Z,{value:"async",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",h({parentName:"pre"},{className:"language-py"}),"# Get the element handle\nelement_handle = page.wait_for_selector('#box')\n\n# Assert bounding box for the element\nbounding_box = await element_handle.bounding_box()\nassert bounding_box.width == 100\n\n# Assert attribute for the element\nclass_names = await element_handle.get_attribute('class')\nassert 'highlighted' in class_names\n")))),(0,n.kt)("h2",h({},{id:"handles-as-parameters"}),"Handles as parameters"),(0,n.kt)("p",null,"Handles can be passed into the ",(0,n.kt)("a",h({parentName:"p"},{href:"/python/docs/1.18/api/class-page#page-evaluate"}),"page.evaluate(expression, **kwargs)")," and similar methods. The following snippet creates a new array in the page, initializes it with data and returns a handle to this array into Playwright. It then uses the handle in subsequent evaluations:"),(0,n.kt)(r.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"sync",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",h({parentName:"pre"},{className:"language-py"}),'# Create new array in page.\nmy_array_handle = page.evaluate_handle("""() => {\n  window.myArray = [1];\n  return myArray;\n}""")\n\n# Get current length of the array.\nlength = page.evaluate("a => a.length", my_array_handle)\n\n# Add one more element to the array using the handle\npage.evaluate("(arg) => arg.myArray.push(arg.newElement)", {\n  \'myArray\': my_array_handle,\n  \'newElement\': 2\n})\n\n# Release the object when it\'s no longer needed.\nmy_array_handle.dispose()\n'))),(0,n.kt)(l.Z,{value:"async",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",h({parentName:"pre"},{className:"language-py"}),'# Create new array in page.\nmy_array_handle = await page.evaluate_handle("""() => {\n  window.myArray = [1];\n  return myArray;\n}""")\n\n# Get current length of the array.\nlength = await page.evaluate("a => a.length", my_array_handle)\n\n# Add one more element to the array using the handle\nawait page.evaluate("(arg) => arg.myArray.push(arg.newElement)", {\n  \'myArray\': my_array_handle,\n  \'newElement\': 2\n})\n\n# Release the object when it\'s no longer needed.\nawait my_array_handle.dispose()\n')))),(0,n.kt)("h2",h({},{id:"handle-lifecycle"}),"Handle Lifecycle"),(0,n.kt)("p",null,"Handles can be acquired using the page methods such as ",(0,n.kt)("a",h({parentName:"p"},{href:"/python/docs/1.18/api/class-page#page-evaluate-handle"}),"page.evaluate_handle(expression, **kwargs)"),", ",(0,n.kt)("a",h({parentName:"p"},{href:"/python/docs/1.18/api/class-page#page-query-selector"}),"page.query_selector(selector, **kwargs)")," or ",(0,n.kt)("a",h({parentName:"p"},{href:"/python/docs/1.18/api/class-page#page-query-selector-all"}),"page.query_selector_all(selector)")," or their frame counterparts ",(0,n.kt)("a",h({parentName:"p"},{href:"/python/docs/1.18/api/class-frame#frame-evaluate-handle"}),"frame.evaluate_handle(expression, **kwargs)"),", ",(0,n.kt)("a",h({parentName:"p"},{href:"/python/docs/1.18/api/class-frame#frame-query-selector"}),"frame.query_selector(selector, **kwargs)")," or ",(0,n.kt)("a",h({parentName:"p"},{href:"/python/docs/1.18/api/class-frame#frame-query-selector-all"}),"frame.query_selector_all(selector)"),". Once created, handles will retain object from ",(0,n.kt)("a",h({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Memory_Management"}),"garbage collection")," unless page navigates or the handle is manually disposed via the ",(0,n.kt)("a",h({parentName:"p"},{href:"/python/docs/1.18/api/class-jshandle#js-handle-dispose"}),"js_handle.dispose()")," method."),(0,n.kt)("h3",h({},{id:"api-reference-1"}),"API reference"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",h({parentName:"li"},{href:"/python/docs/1.18/api/class-jshandle",title:"JSHandle"}),"JSHandle")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",h({parentName:"li"},{href:"/python/docs/1.18/api/class-elementhandle",title:"ElementHandle"}),"ElementHandle")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",h({parentName:"li"},{href:"/python/docs/1.18/api/class-elementhandle#element-handle-bounding-box"}),"element_handle.bounding_box()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",h({parentName:"li"},{href:"/python/docs/1.18/api/class-elementhandle#element-handle-get-attribute"}),"element_handle.get_attribute(name)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",h({parentName:"li"},{href:"/python/docs/1.18/api/class-elementhandle#element-handle-inner-text"}),"element_handle.inner_text()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",h({parentName:"li"},{href:"/python/docs/1.18/api/class-elementhandle#element-handle-inner-html"}),"element_handle.inner_html()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",h({parentName:"li"},{href:"/python/docs/1.18/api/class-elementhandle#element-handle-text-content"}),"element_handle.text_content()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",h({parentName:"li"},{href:"/python/docs/1.18/api/class-jshandle#js-handle-evaluate"}),"js_handle.evaluate(expression, **kwargs)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",h({parentName:"li"},{href:"/python/docs/1.18/api/class-page#page-evaluate-handle"}),"page.evaluate_handle(expression, **kwargs)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",h({parentName:"li"},{href:"/python/docs/1.18/api/class-page#page-query-selector"}),"page.query_selector(selector, **kwargs)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",h({parentName:"li"},{href:"/python/docs/1.18/api/class-page#page-query-selector-all"}),"page.query_selector_all(selector)"))))}k.isMDXComponent=!0}}]);