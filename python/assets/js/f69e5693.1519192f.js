"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[2155],{3905:function(e,a,t){t.d(a,{Zo:function(){return d},kt:function(){return h}});var n=t(7294);function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){l(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,l=function(e,a){if(null==e)return{};var t,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var i=n.createContext({}),p=function(e){var a=n.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},d=function(e){var a=p(e.components);return n.createElement(i.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},c=n.forwardRef((function(e,a){var t=e.components,l=e.mdxType,r=e.originalType,i=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=p(t),h=l,m=c["".concat(i,".").concat(h)]||c[h]||u[h]||r;return t?n.createElement(m,s(s({ref:a},d),{},{components:t})):n.createElement(m,s({ref:a},d))}));function h(e,a){var t=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var r=t.length,s=new Array(r);s[0]=c;var o={};for(var i in a)hasOwnProperty.call(a,i)&&(o[i]=a[i]);o.originalType=e,o.mdxType="string"==typeof e?e:l,s[1]=o;for(var p=2;p<r;p++)s[p]=t[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},3811:function(e,a,t){t.d(a,{Z:function(){return p}});var n=t(7294),l=Object.defineProperty,r=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,i=(e,a,t)=>a in e?l(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t;function p({children:e,hidden:a,className:t}){return n.createElement("div",((e,a)=>{for(var t in a||(a={}))s.call(a,t)&&i(e,t,a[t]);if(r)for(var t of r(a))o.call(a,t)&&i(e,t,a[t]);return e})({role:"tabpanel"},{hidden:a,className:t}),e)}},3824:function(e,a,t){t.d(a,{Z:function(){return f}});var n=t(7294),l=t(4939),r=t(9670),s=t(6010),o="tabItem_LplD",i=Object.defineProperty,p=Object.defineProperties,d=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,m=(e,a,t)=>a in e?i(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,v=(e,a)=>{for(var t in a||(a={}))c.call(a,t)&&m(e,t,a[t]);if(u)for(var t of u(a))h.call(a,t)&&m(e,t,a[t]);return e};function k(e){var a,t,l;const{lazy:i,block:u,defaultValue:c,values:h,groupId:m,className:k}=e,f=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),y=null!=h?h:f.map((({props:{value:e,label:a,attributes:t}})=>({value:e,label:a,attributes:t}))),b=(0,r.lx)(y,((e,a)=>e.value===a.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===c?c:null!=(l=null!=c?c:null==(a=f.find((e=>e.props.default)))?void 0:a.props.value)?l:null==(t=f[0])?void 0:t.props.value;if(null!==g&&!y.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${y.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:j,setTabGroupChoices:N}=(0,r.UB)(),[w,x]=(0,n.useState)(g),_=[],{blockElementScrollPositionUntilNextRender:O}=(0,r.o5)();if(null!=m){const e=j[m];null!=e&&e!==w&&y.some((a=>a.value===e))&&x(e)}const S=e=>{const a=e.currentTarget,t=_.indexOf(a),n=y[t].value;n!==w&&(O(a),x(n),null!=m&&N(m,n))},T=e=>{let a=null;switch(e.key){case"ArrowRight":{const t=_.indexOf(e.currentTarget)+1;a=_[t]||_[0];break}case"ArrowLeft":{const t=_.indexOf(e.currentTarget)-1;a=_[t]||_[_.length-1];break}}null==a||a.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":u},k)},y.map((({value:e,label:a,attributes:t})=>{return n.createElement("li",(l=v({role:"tab",tabIndex:w===e?0:-1,"aria-selected":w===e,key:e,ref:e=>_.push(e),onKeyDown:T,onFocus:S,onClick:S},t),r={className:(0,s.Z)("tabs__item",o,null==t?void 0:t.className,{"tabs__item--active":w===e})},p(l,d(r))),null!=a?a:e);var l,r}))),i?(0,n.cloneElement)(f.filter((e=>e.props.value===w))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},f.map(((e,a)=>(0,n.cloneElement)(e,{key:a,hidden:e.props.value!==w})))))}function f(e){const a=(0,l.Z)();return n.createElement(k,v({key:String(a)},e))}},5812:function(e,a,t){t.r(a),t.d(a,{assets:function(){return f},contentTitle:function(){return v},default:function(){return g},frontMatter:function(){return m},metadata:function(){return k},toc:function(){return y}});var n=t(3905),l=t(3824),r=t(3811),s=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,c=(e,a,t)=>a in e?s(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,h=(e,a)=>{for(var t in a||(a={}))d.call(a,t)&&c(e,t,a[t]);if(p)for(var t of p(a))u.call(a,t)&&c(e,t,a[t]);return e};const m={id:"class-jshandle",title:"JSHandle"},v=void 0,k={unversionedId:"api/class-jshandle",id:"version-stable/api/class-jshandle",title:"JSHandle",description:"JSHandle represents an in-page JavaScript object. JSHandles can be created with the page.evaluate_handle(expression, kwargs) method.",source:"@site/versioned_docs/version-stable/api/class-jshandle.mdx",sourceDirName:"api",slug:"/api/class-jshandle",permalink:"/python/docs/api/class-jshandle",tags:[],version:"stable",frontMatter:{id:"class-jshandle",title:"JSHandle"},sidebar:"api",previous:{title:"FrameLocator",permalink:"/python/docs/api/class-framelocator"},next:{title:"Keyboard",permalink:"/python/docs/api/class-keyboard"}},f={},y=[{value:"js_handle.as_element()",id:"js-handle-as-element",level:2},{value:"js_handle.dispose()",id:"js-handle-dispose",level:2},{value:"js_handle.evaluate(expression, **kwargs)",id:"js-handle-evaluate",level:2},{value:"js_handle.evaluate_handle(expression, **kwargs)",id:"js-handle-evaluate-handle",level:2},{value:"js_handle.get_properties()",id:"js-handle-get-properties",level:2},{value:"js_handle.get_property(property_name)",id:"js-handle-get-property",level:2},{value:"js_handle.json_value()",id:"js-handle-json-value",level:2}],b={toc:y};function g(e){var a,t=e,{components:s}=t,c=((e,a)=>{var t={};for(var n in e)d.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&p)for(var n of p(e))a.indexOf(n)<0&&u.call(e,n)&&(t[n]=e[n]);return t})(t,["components"]);return(0,n.kt)("wrapper",(a=h(h({},b),c),o(a,i({components:s,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"JSHandle represents an in-page JavaScript object. JSHandles can be created with the ",(0,n.kt)("a",h({parentName:"p"},{href:"/python/docs/api/class-page#page-evaluate-handle"}),"page.evaluate_handle(expression, **kwargs)")," method."),(0,n.kt)(l.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,n.kt)(r.Z,{value:"sync",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",h({parentName:"pre"},{className:"language-py"}),'window_handle = page.evaluate_handle("window")\n# ...\n'))),(0,n.kt)(r.Z,{value:"async",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",h({parentName:"pre"},{className:"language-py"}),'window_handle = await page.evaluate_handle("window")\n# ...\n')))),(0,n.kt)("p",null,"JSHandle prevents the referenced JavaScript object being garbage collected unless the handle is exposed with ",(0,n.kt)("a",h({parentName:"p"},{href:"/python/docs/api/class-jshandle#js-handle-dispose"}),"js_handle.dispose()"),". JSHandles are auto-disposed when their origin frame gets navigated or the parent context gets destroyed."),(0,n.kt)("p",null,"JSHandle instances can be used as an argument in ",(0,n.kt)("a",h({parentName:"p"},{href:"/python/docs/api/class-page#page-eval-on-selector"}),"page.eval_on_selector(selector, expression, **kwargs)"),", ",(0,n.kt)("a",h({parentName:"p"},{href:"/python/docs/api/class-page#page-evaluate"}),"page.evaluate(expression, **kwargs)")," and ",(0,n.kt)("a",h({parentName:"p"},{href:"/python/docs/api/class-page#page-evaluate-handle"}),"page.evaluate_handle(expression, **kwargs)")," methods."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",h({parentName:"li"},{href:"/python/docs/api/class-jshandle#js-handle-as-element"}),"js_handle.as_element()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",h({parentName:"li"},{href:"/python/docs/api/class-jshandle#js-handle-dispose"}),"js_handle.dispose()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",h({parentName:"li"},{href:"/python/docs/api/class-jshandle#js-handle-evaluate"}),"js_handle.evaluate(expression, **kwargs)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",h({parentName:"li"},{href:"/python/docs/api/class-jshandle#js-handle-evaluate-handle"}),"js_handle.evaluate_handle(expression, **kwargs)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",h({parentName:"li"},{href:"/python/docs/api/class-jshandle#js-handle-get-properties"}),"js_handle.get_properties()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",h({parentName:"li"},{href:"/python/docs/api/class-jshandle#js-handle-get-property"}),"js_handle.get_property(property_name)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",h({parentName:"li"},{href:"/python/docs/api/class-jshandle#js-handle-json-value"}),"js_handle.json_value()"))),(0,n.kt)("h2",h({},{id:"js-handle-as-element"}),"js_handle.as_element()"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"js-handle-as-element-return"})," ","<",(0,n.kt)("a",h({parentName:"li"},{href:"https://docs.python.org/3/library/constants.html#None",title:"None"}),"NoneType"),"|",(0,n.kt)("a",h({parentName:"li"},{href:"/python/docs/api/class-elementhandle",title:"ElementHandle"}),"ElementHandle"),">",(0,n.kt)("a",{href:"#js-handle-as-element-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"Returns either ",(0,n.kt)("inlineCode",{parentName:"p"},"null")," or the object handle itself, if the object handle is an instance of ",(0,n.kt)("a",h({parentName:"p"},{href:"/python/docs/api/class-elementhandle",title:"ElementHandle"}),"ElementHandle"),"."),(0,n.kt)("h2",h({},{id:"js-handle-dispose"}),"js_handle.dispose()"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"js-handle-dispose-return"})," ","<",(0,n.kt)("a",h({parentName:"li"},{href:"https://docs.python.org/3/library/constants.html#None",title:"None"}),"NoneType"),">",(0,n.kt)("a",{href:"#js-handle-dispose-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"jsHandle.dispose")," method stops referencing the element handle."),(0,n.kt)("h2",h({},{id:"js-handle-evaluate"}),"js_handle.evaluate(expression, **kwargs)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"expression"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"js-handle-evaluate-option-expression"})," ","<",(0,n.kt)("a",h({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"}),"str"),">"," JavaScript expression to be evaluated in the browser context. If it looks like a function declaration, it is interpreted as a function. Otherwise, evaluated as an expression.",(0,n.kt)("a",{href:"#js-handle-evaluate-option-expression",class:"list-anchor"},"#")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"arg"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"js-handle-evaluate-option-arg"})," ","<",(0,n.kt)("a",h({parentName:"li"},{href:"/python/docs/evaluating#evaluation-argument",title:"EvaluationArgument"}),"EvaluationArgument"),">"," Optional argument to pass to ",(0,n.kt)("inlineCode",{parentName:"li"},"expression"),".",(0,n.kt)("a",{href:"#js-handle-evaluate-option-arg",class:"list-anchor"},"#")),(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"js-handle-evaluate-return"})," ","<",(0,n.kt)("a",h({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#Description",title:"Serializable"}),"Serializable"),">",(0,n.kt)("a",{href:"#js-handle-evaluate-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"Returns the return value of ",(0,n.kt)("inlineCode",{parentName:"p"},"expression"),"."),(0,n.kt)("p",null,"This method passes this handle as the first argument to ",(0,n.kt)("inlineCode",{parentName:"p"},"expression"),"."),(0,n.kt)("p",null,"If ",(0,n.kt)("inlineCode",{parentName:"p"},"expression")," returns a ",(0,n.kt)("a",h({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),", then ",(0,n.kt)("inlineCode",{parentName:"p"},"handle.evaluate")," would wait for the promise to resolve and return its value."),(0,n.kt)("p",null,"Examples:"),(0,n.kt)(l.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,n.kt)(r.Z,{value:"sync",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",h({parentName:"pre"},{className:"language-py"}),'tweet_handle = page.query_selector(".tweet .retweets")\nassert tweet_handle.evaluate("node => node.innerText") == "10 retweets"\n'))),(0,n.kt)(r.Z,{value:"async",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",h({parentName:"pre"},{className:"language-py"}),'tweet_handle = await page.query_selector(".tweet .retweets")\nassert await tweet_handle.evaluate("node => node.innerText") == "10 retweets"\n')))),(0,n.kt)("h2",h({},{id:"js-handle-evaluate-handle"}),"js_handle.evaluate_handle(expression, **kwargs)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"expression"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"js-handle-evaluate-handle-option-expression"})," ","<",(0,n.kt)("a",h({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"}),"str"),">"," JavaScript expression to be evaluated in the browser context. If it looks like a function declaration, it is interpreted as a function. Otherwise, evaluated as an expression.",(0,n.kt)("a",{href:"#js-handle-evaluate-handle-option-expression",class:"list-anchor"},"#")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"arg"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"js-handle-evaluate-handle-option-arg"})," ","<",(0,n.kt)("a",h({parentName:"li"},{href:"/python/docs/evaluating#evaluation-argument",title:"EvaluationArgument"}),"EvaluationArgument"),">"," Optional argument to pass to ",(0,n.kt)("inlineCode",{parentName:"li"},"expression"),".",(0,n.kt)("a",{href:"#js-handle-evaluate-handle-option-arg",class:"list-anchor"},"#")),(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"js-handle-evaluate-handle-return"})," ","<",(0,n.kt)("a",h({parentName:"li"},{href:"/python/docs/api/class-jshandle",title:"JSHandle"}),"JSHandle"),">",(0,n.kt)("a",{href:"#js-handle-evaluate-handle-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"Returns the return value of ",(0,n.kt)("inlineCode",{parentName:"p"},"expression")," as a ",(0,n.kt)("a",h({parentName:"p"},{href:"/python/docs/api/class-jshandle",title:"JSHandle"}),"JSHandle"),"."),(0,n.kt)("p",null,"This method passes this handle as the first argument to ",(0,n.kt)("inlineCode",{parentName:"p"},"expression"),"."),(0,n.kt)("p",null,"The only difference between ",(0,n.kt)("inlineCode",{parentName:"p"},"jsHandle.evaluate")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"jsHandle.evaluateHandle")," is that ",(0,n.kt)("inlineCode",{parentName:"p"},"jsHandle.evaluateHandle")," returns ",(0,n.kt)("a",h({parentName:"p"},{href:"/python/docs/api/class-jshandle",title:"JSHandle"}),"JSHandle"),"."),(0,n.kt)("p",null,"If the function passed to the ",(0,n.kt)("inlineCode",{parentName:"p"},"jsHandle.evaluateHandle")," returns a ",(0,n.kt)("a",h({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),", then ",(0,n.kt)("inlineCode",{parentName:"p"},"jsHandle.evaluateHandle")," would wait for the promise to resolve and return its value."),(0,n.kt)("p",null,"See ",(0,n.kt)("a",h({parentName:"p"},{href:"/python/docs/api/class-page#page-evaluate-handle"}),"page.evaluate_handle(expression, **kwargs)")," for more details."),(0,n.kt)("h2",h({},{id:"js-handle-get-properties"}),"js_handle.get_properties()"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"js-handle-get-properties-return"})," ","<","[Map]","[",(0,n.kt)("a",h({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"}),"str"),", ",(0,n.kt)("a",h({parentName:"li"},{href:"/python/docs/api/class-jshandle",title:"JSHandle"}),"JSHandle"),"]",">",(0,n.kt)("a",{href:"#js-handle-get-properties-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"The method returns a map with ",(0,n.kt)("strong",{parentName:"p"},"own property names")," as keys and JSHandle instances for the property values."),(0,n.kt)(l.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,n.kt)(r.Z,{value:"sync",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",h({parentName:"pre"},{className:"language-py"}),'handle = page.evaluate_handle("{window, document}")\nproperties = handle.get_properties()\nwindow_handle = properties.get("window")\ndocument_handle = properties.get("document")\nhandle.dispose()\n'))),(0,n.kt)(r.Z,{value:"async",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",h({parentName:"pre"},{className:"language-py"}),'handle = await page.evaluate_handle("{window, document}")\nproperties = await handle.get_properties()\nwindow_handle = properties.get("window")\ndocument_handle = properties.get("document")\nawait handle.dispose()\n')))),(0,n.kt)("h2",h({},{id:"js-handle-get-property"}),"js_handle.get_property(property_name)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"property_name"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"js-handle-get-property-option-property-name"})," ","<",(0,n.kt)("a",h({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"}),"str"),">"," property to get",(0,n.kt)("a",{href:"#js-handle-get-property-option-property-name",class:"list-anchor"},"#")),(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"js-handle-get-property-return"})," ","<",(0,n.kt)("a",h({parentName:"li"},{href:"/python/docs/api/class-jshandle",title:"JSHandle"}),"JSHandle"),">",(0,n.kt)("a",{href:"#js-handle-get-property-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"Fetches a single property from the referenced object."),(0,n.kt)("h2",h({},{id:"js-handle-json-value"}),"js_handle.json_value()"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"js-handle-json-value-return"})," ","<",(0,n.kt)("a",h({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#Description",title:"Serializable"}),"Serializable"),">",(0,n.kt)("a",{href:"#js-handle-json-value-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"Returns a JSON representation of the object. If the object has a ",(0,n.kt)("inlineCode",{parentName:"p"},"toJSON")," function, it ",(0,n.kt)("strong",{parentName:"p"},"will not be called"),"."),(0,n.kt)("div",h({},{className:"admonition admonition-note alert alert--secondary"}),(0,n.kt)("div",h({parentName:"div"},{className:"admonition-heading"}),(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",h({parentName:"h5"},{className:"admonition-icon"}),(0,n.kt)("svg",h({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),(0,n.kt)("path",h({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),(0,n.kt)("div",h({parentName:"div"},{className:"admonition-content"}),(0,n.kt)("p",{parentName:"div"},"The method will return an empty JSON object if the referenced object is not stringifiable. It will throw an error if the object has circular references."))))}g.isMDXComponent=!0}}]);