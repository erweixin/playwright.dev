"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[1313],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return c}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),y=s(a),c=r,u=y["".concat(p,".").concat(c)]||y[c]||k[c]||o;return a?n.createElement(u,l(l({ref:t},d),{},{components:a})):n.createElement(u,l({ref:t},d))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=y;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}y.displayName="MDXCreateElement"},4455:function(e,t,a){a.d(t,{Z:function(){return k}});var n=a(7294),r=a(6010),o="tabItem_Ymn6",l=Object.defineProperty,i=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,d=(e,t,a)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;function k({children:e,hidden:t,className:a}){return n.createElement("div",((e,t)=>{for(var a in t||(t={}))p.call(t,a)&&d(e,a,t[a]);if(i)for(var a of i(t))s.call(t,a)&&d(e,a,t[a]);return e})({role:"tabpanel",className:(0,r.Z)(o,a)},{hidden:t}),e)}},5332:function(e,t,a){a.d(t,{Z:function(){return g}});var n=a(7294),r=a(6010),o=a(4939),l=a(2174),i=a(2107),p=a(8757),s="tabList__CuJ",d="tabItem_LNqP",k=Object.defineProperty,y=Object.defineProperties,c=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable,h=(e,t,a)=>t in e?k(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,f=(e,t)=>{for(var a in t||(t={}))m.call(t,a)&&h(e,a,t[a]);if(u)for(var a of u(t))b.call(t,a)&&h(e,a,t[a]);return e};function N(e){var t,a;const{lazy:o,block:k,defaultValue:u,values:m,groupId:b,className:h}=e,N=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=null!=m?m:N.map((({props:{value:e,label:t,attributes:a}})=>({value:e,label:t,attributes:a}))),v=(0,l.l)(g,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const w=null===u?u:null!=(a=null!=u?u:null==(t=N.find((e=>e.props.default)))?void 0:t.props.value)?a:N[0].props.value;if(null!==w&&!g.some((e=>e.value===w)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${w}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:C,setTabGroupChoices:x}=(0,i.U)(),[T,O]=(0,n.useState)(w),A=[],{blockElementScrollPositionUntilNextRender:S}=(0,p.o5)();if(null!=b){const e=C[b];null!=e&&e!==T&&g.some((t=>t.value===e))&&O(e)}const E=e=>{const t=e.currentTarget,a=A.indexOf(t),n=g[a].value;n!==T&&(S(t),O(n),null!=b&&x(b,String(n)))},I=e=>{var t,a;let n=null;switch(e.key){case"ArrowRight":{const a=A.indexOf(e.currentTarget)+1;n=null!=(t=A[a])?t:A[0];break}case"ArrowLeft":{const t=A.indexOf(e.currentTarget)-1;n=null!=(a=A[t])?a:A[A.length-1];break}}null==n||n.focus()};return n.createElement("div",{className:(0,r.Z)("tabs-container",s)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":k},h)},g.map((({value:e,label:t,attributes:a})=>{return n.createElement("li",(o=f({role:"tab",tabIndex:T===e?0:-1,"aria-selected":T===e,key:e,ref:e=>A.push(e),onKeyDown:I,onFocus:E,onClick:E},a),l={className:(0,r.Z)("tabs__item",d,null==a?void 0:a.className,{"tabs__item--active":T===e})},y(o,c(l))),null!=t?t:e);var o,l}))),o?(0,n.cloneElement)(N.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},N.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==T})))))}function g(e){const t=(0,o.Z)();return n.createElement(N,f({key:String(t)},e))}},51:function(e,t,a){a.r(t),a.d(t,{assets:function(){return h},contentTitle:function(){return m},default:function(){return g},frontMatter:function(){return u},metadata:function(){return b},toc:function(){return f}});var n=a(3905),r=a(5332),o=a(4455),l=Object.defineProperty,i=Object.defineProperties,p=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable,y=(e,t,a)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,c=(e,t)=>{for(var a in t||(t={}))d.call(t,a)&&y(e,a,t[a]);if(s)for(var a of s(t))k.call(t,a)&&y(e,a,t[a]);return e};const u={id:"class-keyboard",title:"Keyboard"},m=void 0,b={unversionedId:"api/class-keyboard",id:"version-stable/api/class-keyboard",title:"Keyboard",description:"Keyboard provides an api for managing a virtual keyboard. The high level api is keyboard.type(text, kwargs), which takes raw characters and generates proper keydown, keypress/input, and keyup events on your page.",source:"@site/versioned_docs/version-stable/api/class-keyboard.mdx",sourceDirName:"api",slug:"/api/class-keyboard",permalink:"/python/docs/api/class-keyboard",draft:!1,tags:[],version:"stable",frontMatter:{id:"class-keyboard",title:"Keyboard"},sidebar:"api",previous:{title:"JSHandle",permalink:"/python/docs/api/class-jshandle"},next:{title:"Locator",permalink:"/python/docs/api/class-locator"}},h={},f=[{value:"keyboard.down(key)",id:"keyboard-down",level:2},{value:"keyboard.insert_text(text)",id:"keyboard-insert-text",level:2},{value:"keyboard.press(key, **kwargs)",id:"keyboard-press",level:2},{value:"keyboard.type(text, **kwargs)",id:"keyboard-type",level:2},{value:"keyboard.up(key)",id:"keyboard-up",level:2}],N={toc:f};function g(e){var t,a=e,{components:l}=a,y=((e,t)=>{var a={};for(var n in e)d.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&s)for(var n of s(e))t.indexOf(n)<0&&k.call(e,n)&&(a[n]=e[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(t=c(c({},N),y),i(t,p({components:l,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"Keyboard provides an api for managing a virtual keyboard. The high level api is ",(0,n.kt)("a",c({parentName:"p"},{href:"/python/docs/api/class-keyboard#keyboard-type"}),"keyboard.type(text, **kwargs)"),", which takes raw characters and generates proper keydown, keypress/input, and keyup events on your page."),(0,n.kt)("p",null,"For finer control, you can use ",(0,n.kt)("a",c({parentName:"p"},{href:"/python/docs/api/class-keyboard#keyboard-down"}),"keyboard.down(key)"),", ",(0,n.kt)("a",c({parentName:"p"},{href:"/python/docs/api/class-keyboard#keyboard-up"}),"keyboard.up(key)"),", and ",(0,n.kt)("a",c({parentName:"p"},{href:"/python/docs/api/class-keyboard#keyboard-insert-text"}),"keyboard.insert_text(text)")," to manually fire events as if they were generated from a real keyboard."),(0,n.kt)("p",null,"An example of holding down ",(0,n.kt)("inlineCode",{parentName:"p"},"Shift")," in order to select and delete some text:"),(0,n.kt)(r.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"sync",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-py"}),'page.keyboard.type("Hello World!")\npage.keyboard.press("ArrowLeft")\npage.keyboard.down("Shift")\nfor i in range(6):\n    page.keyboard.press("ArrowLeft")\npage.keyboard.up("Shift")\npage.keyboard.press("Backspace")\n# result text will end up saying "Hello!"\n'))),(0,n.kt)(o.Z,{value:"async",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-py"}),'await page.keyboard.type("Hello World!")\nawait page.keyboard.press("ArrowLeft")\nawait page.keyboard.down("Shift")\nfor i in range(6):\n    await page.keyboard.press("ArrowLeft")\nawait page.keyboard.up("Shift")\nawait page.keyboard.press("Backspace")\n# result text will end up saying "Hello!"\n')))),(0,n.kt)("p",null,"An example of pressing uppercase ",(0,n.kt)("inlineCode",{parentName:"p"},"A")),(0,n.kt)(r.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"sync",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-py"}),'page.keyboard.press("Shift+KeyA")\n# or\npage.keyboard.press("Shift+A")\n'))),(0,n.kt)(o.Z,{value:"async",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-py"}),'await page.keyboard.press("Shift+KeyA")\n# or\nawait page.keyboard.press("Shift+A")\n')))),(0,n.kt)("p",null,"An example to trigger select-all with the keyboard"),(0,n.kt)(r.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"sync",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-py"}),'# on windows and linux\npage.keyboard.press("Control+A")\n# on mac_os\npage.keyboard.press("Meta+A")\n'))),(0,n.kt)(o.Z,{value:"async",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-py"}),'# on windows and linux\nawait page.keyboard.press("Control+A")\n# on mac_os\nawait page.keyboard.press("Meta+A")\n')))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"/python/docs/api/class-keyboard#keyboard-down"}),"keyboard.down(key)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"/python/docs/api/class-keyboard#keyboard-insert-text"}),"keyboard.insert_text(text)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"/python/docs/api/class-keyboard#keyboard-press"}),"keyboard.press(key, **kwargs)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"/python/docs/api/class-keyboard#keyboard-type"}),"keyboard.type(text, **kwargs)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"/python/docs/api/class-keyboard#keyboard-up"}),"keyboard.up(key)"))),(0,n.kt)("h2",c({},{id:"keyboard-down"}),"keyboard.down(key)"),(0,n.kt)("font",{size:"2",style:{position:"relative",top:"-20px"}},"Added in: v1.8"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"key"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"keyboard-down-option-key"})," ","<",(0,n.kt)("a",c({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"}),"str"),">"," Name of the key to press or a character to generate, such as ",(0,n.kt)("inlineCode",{parentName:"li"},"ArrowLeft")," or ",(0,n.kt)("inlineCode",{parentName:"li"},"a"),".",(0,n.kt)("a",{href:"#keyboard-down-option-key",class:"list-anchor"},"#")),(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"keyboard-down-return"})," ","<",(0,n.kt)("a",c({parentName:"li"},{href:"https://docs.python.org/3/library/constants.html#None",title:"None"}),"NoneType"),">",(0,n.kt)("a",{href:"#keyboard-down-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"Dispatches a ",(0,n.kt)("inlineCode",{parentName:"p"},"keydown")," event."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"key")," can specify the intended ",(0,n.kt)("a",c({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key"}),"keyboardEvent.key")," value or a single character to generate the text for. A superset of the ",(0,n.kt)("inlineCode",{parentName:"p"},"key")," values can be found ",(0,n.kt)("a",c({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values"}),"here"),". Examples of the keys are:"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"F1")," - ",(0,n.kt)("inlineCode",{parentName:"p"},"F12"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Digit0"),"- ",(0,n.kt)("inlineCode",{parentName:"p"},"Digit9"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"KeyA"),"- ",(0,n.kt)("inlineCode",{parentName:"p"},"KeyZ"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Backquote"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Minus"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Equal"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Backslash"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Backspace"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Tab"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Delete"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Escape"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"ArrowDown"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"End"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Enter"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Home"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Insert"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"PageDown"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"PageUp"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"ArrowRight"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"ArrowUp"),", etc."),(0,n.kt)("p",null,"Following modification shortcuts are also supported: ",(0,n.kt)("inlineCode",{parentName:"p"},"Shift"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Control"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Alt"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Meta"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"ShiftLeft"),"."),(0,n.kt)("p",null,"Holding down ",(0,n.kt)("inlineCode",{parentName:"p"},"Shift")," will type the text that corresponds to the ",(0,n.kt)("inlineCode",{parentName:"p"},"key")," in the upper case."),(0,n.kt)("p",null,"If ",(0,n.kt)("inlineCode",{parentName:"p"},"key")," is a single character, it is case-sensitive, so the values ",(0,n.kt)("inlineCode",{parentName:"p"},"a")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"A")," will generate different respective texts."),(0,n.kt)("p",null,"If ",(0,n.kt)("inlineCode",{parentName:"p"},"key")," is a modifier key, ",(0,n.kt)("inlineCode",{parentName:"p"},"Shift"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Meta"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Control"),", or ",(0,n.kt)("inlineCode",{parentName:"p"},"Alt"),", subsequent key presses will be sent with that modifier active. To release the modifier key, use ",(0,n.kt)("a",c({parentName:"p"},{href:"/python/docs/api/class-keyboard#keyboard-up"}),"keyboard.up(key)"),"."),(0,n.kt)("p",null,"After the key is pressed once, subsequent calls to ",(0,n.kt)("a",c({parentName:"p"},{href:"/python/docs/api/class-keyboard#keyboard-down"}),"keyboard.down(key)")," will have ",(0,n.kt)("a",c({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/repeat"}),"repeat")," set to true. To release the key, use ",(0,n.kt)("a",c({parentName:"p"},{href:"/python/docs/api/class-keyboard#keyboard-up"}),"keyboard.up(key)"),"."),(0,n.kt)("admonition",c({},{type:"note"}),(0,n.kt)("p",{parentName:"admonition"},"Modifier keys DO influence ",(0,n.kt)("inlineCode",{parentName:"p"},"keyboard.down"),". Holding down ",(0,n.kt)("inlineCode",{parentName:"p"},"Shift")," will type the text in upper case.")),(0,n.kt)("h2",c({},{id:"keyboard-insert-text"}),"keyboard.insert_text(text)"),(0,n.kt)("font",{size:"2",style:{position:"relative",top:"-20px"}},"Added in: v1.8"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"text"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"keyboard-insert-text-option-text"})," ","<",(0,n.kt)("a",c({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"}),"str"),">"," Sets input to the specified text value.",(0,n.kt)("a",{href:"#keyboard-insert-text-option-text",class:"list-anchor"},"#")),(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"keyboard-insert-text-return"})," ","<",(0,n.kt)("a",c({parentName:"li"},{href:"https://docs.python.org/3/library/constants.html#None",title:"None"}),"NoneType"),">",(0,n.kt)("a",{href:"#keyboard-insert-text-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"Dispatches only ",(0,n.kt)("inlineCode",{parentName:"p"},"input")," event, does not emit the ",(0,n.kt)("inlineCode",{parentName:"p"},"keydown"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"keyup")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"keypress")," events."),(0,n.kt)(r.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"sync",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-py"}),'page.keyboard.insert_text("\u55e8")\n'))),(0,n.kt)(o.Z,{value:"async",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-py"}),'await page.keyboard.insert_text("\u55e8")\n')))),(0,n.kt)("admonition",c({},{type:"note"}),(0,n.kt)("p",{parentName:"admonition"},"Modifier keys DO NOT effect ",(0,n.kt)("inlineCode",{parentName:"p"},"keyboard.insertText"),". Holding down ",(0,n.kt)("inlineCode",{parentName:"p"},"Shift")," will not type the text in upper case.")),(0,n.kt)("h2",c({},{id:"keyboard-press"}),"keyboard.press(key, **kwargs)"),(0,n.kt)("font",{size:"2",style:{position:"relative",top:"-20px"}},"Added in: v1.8"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"key"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"keyboard-press-option-key"})," ","<",(0,n.kt)("a",c({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"}),"str"),">"," Name of the key to press or a character to generate, such as ",(0,n.kt)("inlineCode",{parentName:"li"},"ArrowLeft")," or ",(0,n.kt)("inlineCode",{parentName:"li"},"a"),".",(0,n.kt)("a",{href:"#keyboard-press-option-key",class:"list-anchor"},"#")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"delay"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"keyboard-press-option-delay"})," ","<",(0,n.kt)("a",c({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"float"}),"float"),">"," Time to wait between ",(0,n.kt)("inlineCode",{parentName:"li"},"keydown")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"keyup")," in milliseconds. Defaults to 0.",(0,n.kt)("a",{href:"#keyboard-press-option-delay",class:"list-anchor"},"#")),(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"keyboard-press-return"})," ","<",(0,n.kt)("a",c({parentName:"li"},{href:"https://docs.python.org/3/library/constants.html#None",title:"None"}),"NoneType"),">",(0,n.kt)("a",{href:"#keyboard-press-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"key")," can specify the intended ",(0,n.kt)("a",c({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key"}),"keyboardEvent.key")," value or a single character to generate the text for. A superset of the ",(0,n.kt)("inlineCode",{parentName:"p"},"key")," values can be found ",(0,n.kt)("a",c({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values"}),"here"),". Examples of the keys are:"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"F1")," - ",(0,n.kt)("inlineCode",{parentName:"p"},"F12"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Digit0"),"- ",(0,n.kt)("inlineCode",{parentName:"p"},"Digit9"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"KeyA"),"- ",(0,n.kt)("inlineCode",{parentName:"p"},"KeyZ"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Backquote"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Minus"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Equal"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Backslash"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Backspace"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Tab"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Delete"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Escape"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"ArrowDown"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"End"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Enter"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Home"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Insert"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"PageDown"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"PageUp"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"ArrowRight"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"ArrowUp"),", etc."),(0,n.kt)("p",null,"Following modification shortcuts are also supported: ",(0,n.kt)("inlineCode",{parentName:"p"},"Shift"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Control"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Alt"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Meta"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"ShiftLeft"),"."),(0,n.kt)("p",null,"Holding down ",(0,n.kt)("inlineCode",{parentName:"p"},"Shift")," will type the text that corresponds to the ",(0,n.kt)("inlineCode",{parentName:"p"},"key")," in the upper case."),(0,n.kt)("p",null,"If ",(0,n.kt)("inlineCode",{parentName:"p"},"key")," is a single character, it is case-sensitive, so the values ",(0,n.kt)("inlineCode",{parentName:"p"},"a")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"A")," will generate different respective texts."),(0,n.kt)("p",null,"Shortcuts such as ",(0,n.kt)("inlineCode",{parentName:"p"},'key: "Control+o"')," or ",(0,n.kt)("inlineCode",{parentName:"p"},'key: "Control+Shift+T"')," are supported as well. When specified with the modifier, modifier is pressed and being held while the subsequent key is being pressed."),(0,n.kt)(r.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"sync",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-py"}),'page = browser.new_page()\npage.goto("https://keycode.info")\npage.keyboard.press("a")\npage.screenshot(path="a.png")\npage.keyboard.press("ArrowLeft")\npage.screenshot(path="arrow_left.png")\npage.keyboard.press("Shift+O")\npage.screenshot(path="o.png")\nbrowser.close()\n'))),(0,n.kt)(o.Z,{value:"async",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-py"}),'page = await browser.new_page()\nawait page.goto("https://keycode.info")\nawait page.keyboard.press("a")\nawait page.screenshot(path="a.png")\nawait page.keyboard.press("ArrowLeft")\nawait page.screenshot(path="arrow_left.png")\nawait page.keyboard.press("Shift+O")\nawait page.screenshot(path="o.png")\nawait browser.close()\n')))),(0,n.kt)("p",null,"Shortcut for ",(0,n.kt)("a",c({parentName:"p"},{href:"/python/docs/api/class-keyboard#keyboard-down"}),"keyboard.down(key)")," and ",(0,n.kt)("a",c({parentName:"p"},{href:"/python/docs/api/class-keyboard#keyboard-up"}),"keyboard.up(key)"),"."),(0,n.kt)("h2",c({},{id:"keyboard-type"}),"keyboard.type(text, **kwargs)"),(0,n.kt)("font",{size:"2",style:{position:"relative",top:"-20px"}},"Added in: v1.8"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"text"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"keyboard-type-option-text"})," ","<",(0,n.kt)("a",c({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"}),"str"),">"," A text to type into a focused element.",(0,n.kt)("a",{href:"#keyboard-type-option-text",class:"list-anchor"},"#")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"delay"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"keyboard-type-option-delay"})," ","<",(0,n.kt)("a",c({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"float"}),"float"),">"," Time to wait between key presses in milliseconds. Defaults to 0.",(0,n.kt)("a",{href:"#keyboard-type-option-delay",class:"list-anchor"},"#")),(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"keyboard-type-return"})," ","<",(0,n.kt)("a",c({parentName:"li"},{href:"https://docs.python.org/3/library/constants.html#None",title:"None"}),"NoneType"),">",(0,n.kt)("a",{href:"#keyboard-type-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"Sends a ",(0,n.kt)("inlineCode",{parentName:"p"},"keydown"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"keypress"),"/",(0,n.kt)("inlineCode",{parentName:"p"},"input"),", and ",(0,n.kt)("inlineCode",{parentName:"p"},"keyup")," event for each character in the text."),(0,n.kt)("p",null,"To press a special key, like ",(0,n.kt)("inlineCode",{parentName:"p"},"Control")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"ArrowDown"),", use ",(0,n.kt)("a",c({parentName:"p"},{href:"/python/docs/api/class-keyboard#keyboard-press"}),"keyboard.press(key, **kwargs)"),"."),(0,n.kt)(r.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"sync",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-py"}),'page.keyboard.type("Hello") # types instantly\npage.keyboard.type("World", delay=100) # types slower, like a user\n'))),(0,n.kt)(o.Z,{value:"async",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-py"}),'await page.keyboard.type("Hello") # types instantly\nawait page.keyboard.type("World", delay=100) # types slower, like a user\n')))),(0,n.kt)("admonition",c({},{type:"note"}),(0,n.kt)("p",{parentName:"admonition"},"Modifier keys DO NOT effect ",(0,n.kt)("inlineCode",{parentName:"p"},"keyboard.type"),". Holding down ",(0,n.kt)("inlineCode",{parentName:"p"},"Shift")," will not type the text in upper case.")),(0,n.kt)("admonition",c({},{type:"note"}),(0,n.kt)("p",{parentName:"admonition"},"For characters that are not on a US keyboard, only an ",(0,n.kt)("inlineCode",{parentName:"p"},"input")," event will be sent.")),(0,n.kt)("h2",c({},{id:"keyboard-up"}),"keyboard.up(key)"),(0,n.kt)("font",{size:"2",style:{position:"relative",top:"-20px"}},"Added in: v1.8"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"key"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"keyboard-up-option-key"})," ","<",(0,n.kt)("a",c({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"}),"str"),">"," Name of the key to press or a character to generate, such as ",(0,n.kt)("inlineCode",{parentName:"li"},"ArrowLeft")," or ",(0,n.kt)("inlineCode",{parentName:"li"},"a"),".",(0,n.kt)("a",{href:"#keyboard-up-option-key",class:"list-anchor"},"#")),(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"keyboard-up-return"})," ","<",(0,n.kt)("a",c({parentName:"li"},{href:"https://docs.python.org/3/library/constants.html#None",title:"None"}),"NoneType"),">",(0,n.kt)("a",{href:"#keyboard-up-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"Dispatches a ",(0,n.kt)("inlineCode",{parentName:"p"},"keyup")," event."))}g.isMDXComponent=!0}}]);