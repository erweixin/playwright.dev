"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[8796],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return d}});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=n.createContext({}),o=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=o(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=o(a),d=l,k=m["".concat(s,".").concat(d)]||m[d]||u[d]||r;return a?n.createElement(k,i(i({ref:t},c),{},{components:a})):n.createElement(k,i({ref:t},c))}));function d(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:l,i[1]=p;for(var o=2;o<r;o++)i[o]=a[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},3811:function(e,t,a){a.d(t,{Z:function(){return o}});var n=a(7294),l=Object.defineProperty,r=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,s=(e,t,a)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;function o({children:e,hidden:t,className:a}){return n.createElement("div",((e,t)=>{for(var a in t||(t={}))i.call(t,a)&&s(e,a,t[a]);if(r)for(var a of r(t))p.call(t,a)&&s(e,a,t[a]);return e})({role:"tabpanel"},{hidden:t,className:a}),e)}},3824:function(e,t,a){a.d(t,{Z:function(){return y}});var n=a(7294),l=a(4939),r=a(5882),i=a(6010),p="tabItem_LplD",s=Object.defineProperty,o=Object.defineProperties,c=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,k=(e,t,a)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,h=(e,t)=>{for(var a in t||(t={}))m.call(t,a)&&k(e,a,t[a]);if(u)for(var a of u(t))d.call(t,a)&&k(e,a,t[a]);return e};function f(e){var t,a,l;const{lazy:s,block:u,defaultValue:m,values:d,groupId:k,className:f}=e,y=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=null!=d?d:y.map((({props:{value:e,label:t,attributes:a}})=>({value:e,label:t,attributes:a}))),b=(0,r.lx)(g,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===m?m:null!=(l=null!=m?m:null==(t=y.find((e=>e.props.default)))?void 0:t.props.value)?l:null==(a=y[0])?void 0:a.props.value;if(null!==v&&!g.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:N,setTabGroupChoices:w}=(0,r.UB)(),[x,T]=(0,n.useState)(v),_=[],{blockElementScrollPositionUntilNextRender:I}=(0,r.o5)();if(null!=k){const e=N[k];null!=e&&e!==x&&g.some((t=>t.value===e))&&T(e)}const C=e=>{const t=e.currentTarget,a=_.indexOf(t),n=g[a].value;n!==x&&(I(t),T(n),null!=k&&w(k,n))},O=e=>{let t=null;switch(e.key){case"ArrowRight":{const a=_.indexOf(e.currentTarget)+1;t=_[a]||_[0];break}case"ArrowLeft":{const a=_.indexOf(e.currentTarget)-1;t=_[a]||_[_.length-1];break}}null==t||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":u},f)},g.map((({value:e,label:t,attributes:a})=>{return n.createElement("li",(l=h({role:"tab",tabIndex:x===e?0:-1,"aria-selected":x===e,key:e,ref:e=>_.push(e),onKeyDown:O,onFocus:C,onClick:C},a),r={className:(0,i.Z)("tabs__item",p,null==a?void 0:a.className,{"tabs__item--active":x===e})},o(l,c(r))),null!=t?t:e);var l,r}))),s?(0,n.cloneElement)(y.filter((e=>e.props.value===x))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},y.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==x})))))}function y(e){const t=(0,l.Z)();return n.createElement(f,h({key:String(t)},e))}},2445:function(e,t,a){a.r(t),a.d(t,{assets:function(){return y},contentTitle:function(){return h},default:function(){return v},frontMatter:function(){return k},metadata:function(){return f},toc:function(){return g}});var n=a(3905),l=a(3824),r=a(3811),i=Object.defineProperty,p=Object.defineProperties,s=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,m=(e,t,a)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,d=(e,t)=>{for(var a in t||(t={}))c.call(t,a)&&m(e,a,t[a]);if(o)for(var a of o(t))u.call(t,a)&&m(e,a,t[a]);return e};const k={id:"input",title:"Input"},h=void 0,f={unversionedId:"input",id:"input",title:"Input",description:"- Text input",source:"@site/docs/input.mdx",sourceDirName:".",slug:"/input",permalink:"/python/docs/next/input",tags:[],version:"current",frontMatter:{id:"input",title:"Input"},sidebar:"docs",previous:{title:"Handles",permalink:"/python/docs/next/handles"},next:{title:"Locators",permalink:"/python/docs/next/locators"}},y={},g=[{value:"Text input",id:"text-input",level:2},{value:"API reference",id:"api-reference",level:3},{value:"Checkboxes and radio buttons",id:"checkboxes-and-radio-buttons",level:2},{value:"API reference",id:"api-reference-1",level:3},{value:"Select options",id:"select-options",level:2},{value:"API reference",id:"api-reference-2",level:3},{value:"Mouse click",id:"mouse-click",level:2},{value:"Forcing the click",id:"forcing-the-click",level:4},{value:"Programmatic click",id:"programmatic-click",level:4},{value:"API reference",id:"api-reference-3",level:3},{value:"Type characters",id:"type-characters",level:2},{value:"API reference",id:"api-reference-4",level:3},{value:"Keys and shortcuts",id:"keys-and-shortcuts",level:2},{value:"API reference",id:"api-reference-5",level:3},{value:"Upload files",id:"upload-files",level:2},{value:"API reference",id:"api-reference-6",level:3},{value:"Focus element",id:"focus-element",level:2},{value:"API reference",id:"api-reference-7",level:3}],b={toc:g};function v(e){var t,a=e,{components:i}=a,m=((e,t)=>{var a={};for(var n in e)c.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&o)for(var n of o(e))t.indexOf(n)<0&&u.call(e,n)&&(a[n]=e[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(t=d(d({},b),m),p(t,s({components:i,mdxType:"MDXLayout"}))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"#text-input"}),"Text input")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"#checkboxes-and-radio-buttons"}),"Checkboxes and radio buttons")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"#select-options"}),"Select options")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"#mouse-click"}),"Mouse click")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"#type-characters"}),"Type characters")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"#keys-and-shortcuts"}),"Keys and shortcuts")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"#upload-files"}),"Upload files")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"#focus-element"}),"Focus element"))),(0,n.kt)("h2",d({},{id:"text-input"}),"Text input"),(0,n.kt)("p",null,"This is the easiest way to fill out the form fields. It focuses the element and triggers an ",(0,n.kt)("inlineCode",{parentName:"p"},"input")," event with the entered text. It works for ",(0,n.kt)("inlineCode",{parentName:"p"},"<input>"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"<textarea>"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"[contenteditable]")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"<label>")," associated with an input or textarea."),(0,n.kt)(l.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,n.kt)(r.Z,{value:"sync",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-py"}),"# Text input\npage.fill('#name', 'Peter')\n\n# Date input\npage.fill('#date', '2020-02-02')\n\n# Time input\npage.fill('#time', '13:15')\n\n# Local datetime input\npage.fill('#local', '2020-03-02T05:15')\n\n# Input through label\npage.fill('text=First Name', 'Peter')\n"))),(0,n.kt)(r.Z,{value:"async",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-py"}),"# Text input\nawait page.fill('#name', 'Peter')\n\n# Date input\nawait page.fill('#date', '2020-02-02')\n\n# Time input\nawait page.fill('#time', '13:15')\n\n# Local datetime input\nawait page.fill('#local', '2020-03-02T05:15')\n\n# Input through label\nawait page.fill('text=First Name', 'Peter')\n")))),(0,n.kt)("h3",d({},{id:"api-reference"}),"API reference"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"/python/docs/next/api/class-page#page-fill"}),"page.fill(selector, value, **kwargs)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"/python/docs/next/api/class-frame#frame-fill"}),"frame.fill(selector, value, **kwargs)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"/python/docs/next/api/class-elementhandle#element-handle-fill"}),"element_handle.fill(value, **kwargs)"))),(0,n.kt)("br",null),(0,n.kt)("h2",d({},{id:"checkboxes-and-radio-buttons"}),"Checkboxes and radio buttons"),(0,n.kt)("p",null,"This is the easiest way to check and uncheck a checkbox or a radio button. This method can be used with ",(0,n.kt)("inlineCode",{parentName:"p"},"input[type=checkbox]"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"input[type=radio]"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"[role=checkbox]")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"label")," associated with checkbox or radio button."),(0,n.kt)(l.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,n.kt)(r.Z,{value:"sync",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-py"}),"# Check the checkbox\npage.check('#agree')\n\n# Assert the checked state\nassert page.is_checked('#agree') is True\n\n# Uncheck by input <label>.\npage.uncheck('#subscribe-label')\n\n# Select the radio button\npage.check('text=XL')\n"))),(0,n.kt)(r.Z,{value:"async",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-py"}),"# Check the checkbox\nawait page.check('#agree')\n\n# Assert the checked state\nassert await page.is_checked('#agree') is True\n\n# Uncheck by input <label>.\nawait page.uncheck('#subscribe-label')\n\n# Select the radio button\nawait page.check('text=XL')\n")))),(0,n.kt)("h3",d({},{id:"api-reference-1"}),"API reference"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"/python/docs/next/api/class-page#page-check"}),"page.check(selector, **kwargs)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"/python/docs/next/api/class-page#page-is-checked"}),"page.is_checked(selector, **kwargs)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"/python/docs/next/api/class-page#page-uncheck"}),"page.uncheck(selector, **kwargs)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"/python/docs/next/api/class-elementhandle#element-handle-check"}),"element_handle.check(**kwargs)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"/python/docs/next/api/class-elementhandle#element-handle-is-checked"}),"element_handle.is_checked()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"/python/docs/next/api/class-elementhandle#element-handle-uncheck"}),"element_handle.uncheck(**kwargs)"))),(0,n.kt)("br",null),(0,n.kt)("h2",d({},{id:"select-options"}),"Select options"),(0,n.kt)("p",null,"Selects one or multiple options in the ",(0,n.kt)("inlineCode",{parentName:"p"},"<select>")," element. You can specify option ",(0,n.kt)("inlineCode",{parentName:"p"},"value"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"label")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"elementHandle")," to select. Multiple options can be selected."),(0,n.kt)(l.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,n.kt)(r.Z,{value:"sync",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-py"}),"# Single selection matching the value\npage.select_option('select#colors', 'blue')\n\n# Single selection matching the label\npage.select_option('select#colors', label='Blue')\n\n# Multiple selected items\npage.select_option('select#colors', ['red', 'green', 'blue'])\n\n# Select the option via element handle\noption = page.query_selector('#best-option')\npage.select_option('select#colors', option)\n"))),(0,n.kt)(r.Z,{value:"async",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-py"}),"# Single selection matching the value\nawait page.select_option('select#colors', 'blue')\n\n# Single selection matching the label\nawait page.select_option('select#colors', label='Blue')\n\n# Multiple selected items\nawait page.select_option('select#colors', ['red', 'green', 'blue'])\n\n# Select the option via element handle\noption = await page.query_selector('#best-option')\nawait page.select_option('select#colors', option)\n")))),(0,n.kt)("h3",d({},{id:"api-reference-2"}),"API reference"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"/python/docs/next/api/class-page#page-select-option"}),"page.select_option(selector, **kwargs)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"/python/docs/next/api/class-frame#frame-select-option"}),"frame.select_option(selector, **kwargs)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"/python/docs/next/api/class-elementhandle#element-handle-select-option"}),"element_handle.select_option(**kwargs)"))),(0,n.kt)("br",null),(0,n.kt)("h2",d({},{id:"mouse-click"}),"Mouse click"),(0,n.kt)("p",null,"Performs a simple human click."),(0,n.kt)(l.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,n.kt)(r.Z,{value:"sync",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-py"}),"# Generic click\npage.click('button#submit')\n\n# Double click\npage.dblclick('#item')\n\n# Right click\npage.click('#item', button='right')\n\n# Shift + click\npage.click('#item', modifiers=['Shift'])\n\n# Hover over element\npage.hover('#item')\n\n# Click the top left corner\npage.click('#item', position={ 'x': 0, 'y': 0})\n"))),(0,n.kt)(r.Z,{value:"async",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-py"}),"# Generic click\nawait page.click('button#submit')\n\n# Double click\nawait page.dblclick('#item')\n\n# Right click\nawait page.click('#item', button='right')\n\n# Shift + click\nawait page.click('#item', modifiers=['Shift'])\n\n# Hover over element\nawait page.hover('#item')\n\n# Click the top left corner\nawait page.click('#item', position={ 'x': 0, 'y': 0})\n")))),(0,n.kt)("p",null,"Under the hood, this and other pointer-related methods:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"wait for element with given selector to be in DOM"),(0,n.kt)("li",{parentName:"ul"},"wait for it to become displayed, i.e. not empty, no ",(0,n.kt)("inlineCode",{parentName:"li"},"display:none"),", no ",(0,n.kt)("inlineCode",{parentName:"li"},"visibility:hidden")),(0,n.kt)("li",{parentName:"ul"},"wait for it to stop moving, for example, until css transition finishes"),(0,n.kt)("li",{parentName:"ul"},"scroll the element into view"),(0,n.kt)("li",{parentName:"ul"},"wait for it to receive pointer events at the action point, for example, waits until element becomes non-obscured by other elements"),(0,n.kt)("li",{parentName:"ul"},"retry if the element is detached during any of the above checks")),(0,n.kt)("h4",d({},{id:"forcing-the-click"}),"Forcing the click"),(0,n.kt)("p",null,"Sometimes, apps use non-trivial logic where hovering the element overlays it with another element that intercepts the click. This behavior is indistinguishable from a bug where element gets covered and the click is dispatched elsewhere. If you know this is taking place, you can bypass the ",(0,n.kt)("a",d({parentName:"p"},{href:"/python/docs/next/actionability"}),"actionability")," checks and force the click:"),(0,n.kt)(l.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,n.kt)(r.Z,{value:"sync",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-py"}),"page.click('button#submit', force=True)\n"))),(0,n.kt)(r.Z,{value:"async",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-py"}),"await page.click('button#submit', force=True)\n")))),(0,n.kt)("h4",d({},{id:"programmatic-click"}),"Programmatic click"),(0,n.kt)("p",null,"If you are not interested in testing your app under the real conditions and want to simulate the click by any means possible, you can trigger the ",(0,n.kt)("a",d({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/click"}),(0,n.kt)("inlineCode",{parentName:"a"},"HTMLElement.click()"))," behavior via simply dispatching a click event on the element:"),(0,n.kt)(l.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,n.kt)(r.Z,{value:"sync",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-py"}),"page.dispatch_event('button#submit', 'click')\n"))),(0,n.kt)(r.Z,{value:"async",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-py"}),"await page.dispatch_event('button#submit', 'click')\n")))),(0,n.kt)("h3",d({},{id:"api-reference-3"}),"API reference"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"/python/docs/next/api/class-page#page-click"}),"page.click(selector, **kwargs)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"/python/docs/next/api/class-frame#frame-click"}),"frame.click(selector, **kwargs)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"/python/docs/next/api/class-elementhandle#element-handle-click"}),"element_handle.click(**kwargs)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"/python/docs/next/api/class-page#page-dblclick"}),"page.dblclick(selector, **kwargs)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"/python/docs/next/api/class-frame#frame-dblclick"}),"frame.dblclick(selector, **kwargs)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"/python/docs/next/api/class-elementhandle#element-handle-dblclick"}),"element_handle.dblclick(**kwargs)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"/python/docs/next/api/class-page#page-hover"}),"page.hover(selector, **kwargs)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"/python/docs/next/api/class-frame#frame-hover"}),"frame.hover(selector, **kwargs)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"/python/docs/next/api/class-elementhandle#element-handle-hover"}),"element_handle.hover(**kwargs)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"/python/docs/next/api/class-page#page-dispatch-event"}),"page.dispatch_event(selector, type, **kwargs)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"/python/docs/next/api/class-frame#frame-dispatch-event"}),"frame.dispatch_event(selector, type, **kwargs)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"/python/docs/next/api/class-elementhandle#element-handle-dispatch-event"}),"element_handle.dispatch_event(type, **kwargs)"))),(0,n.kt)("br",null),(0,n.kt)("h2",d({},{id:"type-characters"}),"Type characters"),(0,n.kt)("p",null,"Type into the field character by character, as if it was a user with a real keyboard."),(0,n.kt)(l.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,n.kt)(r.Z,{value:"sync",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-py"}),"# Type character by character\npage.type('#area', 'Hello World!')\n"))),(0,n.kt)(r.Z,{value:"async",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-py"}),"# Type character by character\nawait page.type('#area', 'Hello World!')\n")))),(0,n.kt)("p",null,"This method will emit all the necessary keyboard events, with all the ",(0,n.kt)("inlineCode",{parentName:"p"},"keydown"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"keyup"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"keypress")," events in place. You can even specify the optional ",(0,n.kt)("inlineCode",{parentName:"p"},"delay")," between the key presses to simulate real user behavior."),(0,n.kt)("div",d({},{className:"admonition admonition-note alert alert--secondary"}),(0,n.kt)("div",d({parentName:"div"},{className:"admonition-heading"}),(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",d({parentName:"h5"},{className:"admonition-icon"}),(0,n.kt)("svg",d({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),(0,n.kt)("path",d({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),(0,n.kt)("div",d({parentName:"div"},{className:"admonition-content"}),(0,n.kt)("p",{parentName:"div"},"Most of the time, ",(0,n.kt)("a",d({parentName:"p"},{href:"/python/docs/next/api/class-page#page-fill"}),"page.fill(selector, value, **kwargs)")," will just work. You only need to type characters if there is special keyboard handling on the page."))),(0,n.kt)("h3",d({},{id:"api-reference-4"}),"API reference"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"/python/docs/next/api/class-page#page-type"}),"page.type(selector, text, **kwargs)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"/python/docs/next/api/class-frame#frame-type"}),"frame.type(selector, text, **kwargs)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"/python/docs/next/api/class-elementhandle#element-handle-type"}),"element_handle.type(text, **kwargs)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"/python/docs/next/api/class-keyboard#keyboard-type"}),"keyboard.type(text, **kwargs)"))),(0,n.kt)("br",null),(0,n.kt)("h2",d({},{id:"keys-and-shortcuts"}),"Keys and shortcuts"),(0,n.kt)(l.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,n.kt)(r.Z,{value:"sync",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-py"}),"# Hit Enter\npage.press('#submit', 'Enter')\n\n# Dispatch Control+Right\npage.press('#name', 'Control+ArrowRight')\n\n# Press $ sign on keyboard\npage.press('#value', '$')\n"))),(0,n.kt)(r.Z,{value:"async",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-py"}),"# Hit Enter\nawait page.press('#submit', 'Enter')\n\n# Dispatch Control+Right\nawait page.press('#name', 'Control+ArrowRight')\n\n# Press $ sign on keyboard\nawait page.press('#value', '$')\n")))),(0,n.kt)("p",null,"This method focuses the selected element and produces a single keystroke. It accepts the logical key names that are emitted in the ",(0,n.kt)("a",d({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key"}),"keyboardEvent.key")," property of the keyboard events:"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{}),"Backquote, Minus, Equal, Backslash, Backspace, Tab, Delete, Escape,\nArrowDown, End, Enter, Home, Insert, PageDown, PageUp, ArrowRight,\nArrowUp, F1 - F12, Digit0 - Digit9, KeyA - KeyZ, etc.\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"You can alternatively specify a single character you'd like to produce such as ",(0,n.kt)("inlineCode",{parentName:"li"},'"a"')," or ",(0,n.kt)("inlineCode",{parentName:"li"},'"#"'),"."),(0,n.kt)("li",{parentName:"ul"},"Following modification shortcuts are also supported: ",(0,n.kt)("inlineCode",{parentName:"li"},"Shift, Control, Alt, Meta"),".")),(0,n.kt)("p",null,"Simple version produces a single character. This character is case-sensitive, so ",(0,n.kt)("inlineCode",{parentName:"p"},'"a"')," and ",(0,n.kt)("inlineCode",{parentName:"p"},'"A"')," will produce different results."),(0,n.kt)(l.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,n.kt)(r.Z,{value:"sync",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-py"}),"# <input id=name>\npage.press('#name', 'Shift+A')\n\n# <input id=name>\npage.press('#name', 'Shift+ArrowLeft')\n"))),(0,n.kt)(r.Z,{value:"async",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-py"}),"# <input id=name>\nawait page.press('#name', 'Shift+A')\n\n# <input id=name>\nawait page.press('#name', 'Shift+ArrowLeft')\n")))),(0,n.kt)("p",null,"Shortcuts such as ",(0,n.kt)("inlineCode",{parentName:"p"},'"Control+o"')," or ",(0,n.kt)("inlineCode",{parentName:"p"},'"Control+Shift+T"')," are supported as well. When specified with the modifier, modifier is pressed and being held while the subsequent key is being pressed."),(0,n.kt)("p",null,"Note that you still need to specify the capital ",(0,n.kt)("inlineCode",{parentName:"p"},"A")," in ",(0,n.kt)("inlineCode",{parentName:"p"},"Shift-A")," to produce the capital character. ",(0,n.kt)("inlineCode",{parentName:"p"},"Shift-a")," produces a lower-case one as if you had the ",(0,n.kt)("inlineCode",{parentName:"p"},"CapsLock")," toggled."),(0,n.kt)("h3",d({},{id:"api-reference-5"}),"API reference"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"/python/docs/next/api/class-page#page-press"}),"page.press(selector, key, **kwargs)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"/python/docs/next/api/class-frame#frame-press"}),"frame.press(selector, key, **kwargs)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"/python/docs/next/api/class-elementhandle#element-handle-press"}),"element_handle.press(key, **kwargs)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"/python/docs/next/api/class-keyboard#keyboard-press"}),"keyboard.press(key, **kwargs)"))),(0,n.kt)("br",null),(0,n.kt)("h2",d({},{id:"upload-files"}),"Upload files"),(0,n.kt)("p",null,"You can select input files for upload using the ",(0,n.kt)("a",d({parentName:"p"},{href:"/python/docs/next/api/class-page#page-set-input-files"}),"page.set_input_files(selector, files, **kwargs)")," method. It expects first argument to point to an ",(0,n.kt)("a",d({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input"}),"input element")," with the type ",(0,n.kt)("inlineCode",{parentName:"p"},'"file"'),". Multiple files can be passed in the array. If some of the file paths are relative, they are resolved relative to the current working directory. Empty array clears the selected files."),(0,n.kt)(l.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,n.kt)(r.Z,{value:"sync",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-py"}),'# Select one file\npage.set_input_files(\'input#upload\', \'myfile.pdf\')\n\n# Select multiple files\npage.set_input_files(\'input#upload\', [\'file1.txt\', \'file2.txt\'])\n\n# Remove all the selected files\npage.set_input_files(\'input#upload\', [])\n\n# Upload buffer from memory\npage.set_input_files(\n    "input#upload",\n    files=[\n        {"name": "test.txt", "mimeType": "text/plain", "buffer": b"this is a test"}\n    ],\n)\n'))),(0,n.kt)(r.Z,{value:"async",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-py"}),'# Select one file\nawait page.set_input_files(\'input#upload\', \'myfile.pdf\')\n\n# Select multiple files\nawait page.set_input_files(\'input#upload\', [\'file1.txt\', \'file2.txt\'])\n\n# Remove all the selected files\nawait page.set_input_files(\'input#upload\', [])\n\n# Upload buffer from memory\nawait page.set_input_files(\n    "input#upload",\n    files=[\n        {"name": "test.txt", "mimeType": "text/plain", "buffer": b"this is a test"}\n    ],\n)\n')))),(0,n.kt)("p",null,"If you don't have input element in hand (it is created dynamically), you can handle the ",(0,n.kt)("a",d({parentName:"p"},{href:"/python/docs/next/api/class-page#page-event-file-chooser"}),'page.on("filechooser")')," event or use a corresponding waiting method upon your action:"),(0,n.kt)(l.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,n.kt)(r.Z,{value:"sync",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-py"}),'with page.expect_file_chooser() as fc_info:\n    page.click("upload")\nfile_chooser = fc_info.value\nfile_chooser.set_files("myfile.pdf")\n'))),(0,n.kt)(r.Z,{value:"async",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-py"}),'async with page.expect_file_chooser() as fc_info:\n    await page.click("upload")\nfile_chooser = await fc_info.value\nawait file_chooser.set_files("myfile.pdf")\n')))),(0,n.kt)("h3",d({},{id:"api-reference-6"}),"API reference"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"/python/docs/next/api/class-filechooser",title:"FileChooser"}),"FileChooser")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"/python/docs/next/api/class-page#page-set-input-files"}),"page.set_input_files(selector, files, **kwargs)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"/python/docs/next/api/class-frame#frame-set-input-files"}),"frame.set_input_files(selector, files, **kwargs)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"/python/docs/next/api/class-elementhandle#element-handle-set-input-files"}),"element_handle.set_input_files(files, **kwargs)"))),(0,n.kt)("br",null),(0,n.kt)("h2",d({},{id:"focus-element"}),"Focus element"),(0,n.kt)("p",null,"For the dynamic pages that handle focus events, you can focus the given element."),(0,n.kt)(l.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,n.kt)(r.Z,{value:"sync",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-py"}),"page.focus('input#name')\n"))),(0,n.kt)(r.Z,{value:"async",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-py"}),"await page.focus('input#name')\n")))),(0,n.kt)("h3",d({},{id:"api-reference-7"}),"API reference"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"/python/docs/next/api/class-page#page-focus"}),"page.focus(selector, **kwargs)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"/python/docs/next/api/class-frame#frame-focus"}),"frame.focus(selector, **kwargs)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"/python/docs/next/api/class-elementhandle#element-handle-focus"}),"element_handle.focus()"))),(0,n.kt)("br",null))}v.isMDXComponent=!0}}]);