"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[2651],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return d}});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=u(a),d=o,h=m["".concat(s,".").concat(d)]||m[d]||p[d]||l;return a?n.createElement(h,r(r({ref:t},c),{},{components:a})):n.createElement(h,r({ref:t},c))}));function d(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=a.length,r=new Array(l);r[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,r[1]=i;for(var u=2;u<l;u++)r[u]=a[u];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},3811:function(e,t,a){a.d(t,{Z:function(){return u}});var n=a(7294),o=Object.defineProperty,l=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,s=(e,t,a)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;function u({children:e,hidden:t,className:a}){return n.createElement("div",((e,t)=>{for(var a in t||(t={}))r.call(t,a)&&s(e,a,t[a]);if(l)for(var a of l(t))i.call(t,a)&&s(e,a,t[a]);return e})({role:"tabpanel"},{hidden:t,className:a}),e)}},3824:function(e,t,a){a.d(t,{Z:function(){return y}});var n=a(7294),o=a(4939),l=a(5882),r=a(6010),i="tabItem_LplD",s=Object.defineProperty,u=Object.defineProperties,c=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,h=(e,t,a)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,k=(e,t)=>{for(var a in t||(t={}))m.call(t,a)&&h(e,a,t[a]);if(p)for(var a of p(t))d.call(t,a)&&h(e,a,t[a]);return e};function f(e){var t,a,o;const{lazy:s,block:p,defaultValue:m,values:d,groupId:h,className:f}=e,y=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=null!=d?d:y.map((({props:{value:e,label:t,attributes:a}})=>({value:e,label:t,attributes:a}))),v=(0,l.lx)(b,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const N=null===m?m:null!=(o=null!=m?m:null==(t=y.find((e=>e.props.default)))?void 0:t.props.value)?o:null==(a=y[0])?void 0:a.props.value;if(null!==N&&!b.some((e=>e.value===N)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${N}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:g,setTabGroupChoices:w}=(0,l.UB)(),[x,O]=(0,n.useState)(N),C=[],{blockElementScrollPositionUntilNextRender:E}=(0,l.o5)();if(null!=h){const e=g[h];null!=e&&e!==x&&b.some((t=>t.value===e))&&O(e)}const T=e=>{const t=e.currentTarget,a=C.indexOf(t),n=b[a].value;n!==x&&(E(t),O(n),null!=h&&w(h,n))},j=e=>{let t=null;switch(e.key){case"ArrowRight":{const a=C.indexOf(e.currentTarget)+1;t=C[a]||C[0];break}case"ArrowLeft":{const a=C.indexOf(e.currentTarget)-1;t=C[a]||C[C.length-1];break}}null==t||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":p},f)},b.map((({value:e,label:t,attributes:a})=>{return n.createElement("li",(o=k({role:"tab",tabIndex:x===e?0:-1,"aria-selected":x===e,key:e,ref:e=>C.push(e),onKeyDown:j,onFocus:T,onClick:T},a),l={className:(0,r.Z)("tabs__item",i,null==a?void 0:a.className,{"tabs__item--active":x===e})},u(o,c(l))),null!=t?t:e);var o,l}))),s?(0,n.cloneElement)(y.filter((e=>e.props.value===x))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},y.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==x})))))}function y(e){const t=(0,o.Z)();return n.createElement(f,k({key:String(t)},e))}},6045:function(e,t,a){a.r(t),a.d(t,{assets:function(){return y},contentTitle:function(){return k},default:function(){return N},frontMatter:function(){return h},metadata:function(){return f},toc:function(){return b}});var n=a(3905),o=a(3824),l=a(3811),r=Object.defineProperty,i=Object.defineProperties,s=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,m=(e,t,a)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,d=(e,t)=>{for(var a in t||(t={}))c.call(t,a)&&m(e,a,t[a]);if(u)for(var a of u(t))p.call(t,a)&&m(e,a,t[a]);return e};const h={id:"class-mouse",title:"Mouse"},k=void 0,f={unversionedId:"api/class-mouse",id:"api/class-mouse",title:"Mouse",description:"The Mouse class operates in main-frame CSS pixels relative to the top-left corner of the viewport.",source:"@site/docs/api/class-mouse.mdx",sourceDirName:"api",slug:"/api/class-mouse",permalink:"/python/docs/next/api/class-mouse",tags:[],version:"current",frontMatter:{id:"class-mouse",title:"Mouse"},sidebar:"api",previous:{title:"Locator",permalink:"/python/docs/next/api/class-locator"},next:{title:"Page",permalink:"/python/docs/next/api/class-page"}},y={},b=[{value:"mouse.click(x, y, **kwargs)",id:"mouse-click",level:2},{value:"mouse.dblclick(x, y, **kwargs)",id:"mouse-dblclick",level:2},{value:"mouse.down(**kwargs)",id:"mouse-down",level:2},{value:"mouse.move(x, y, **kwargs)",id:"mouse-move",level:2},{value:"mouse.up(**kwargs)",id:"mouse-up",level:2},{value:"mouse.wheel(delta_x, delta_y)",id:"mouse-wheel",level:2}],v={toc:b};function N(e){var t,a=e,{components:r}=a,m=((e,t)=>{var a={};for(var n in e)c.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&u)for(var n of u(e))t.indexOf(n)<0&&p.call(e,n)&&(a[n]=e[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(t=d(d({},v),m),i(t,s({components:r,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"The Mouse class operates in main-frame CSS pixels relative to the top-left corner of the viewport."),(0,n.kt)("p",null,"Every ",(0,n.kt)("inlineCode",{parentName:"p"},"page")," object has its own Mouse, accessible with ",(0,n.kt)("a",d({parentName:"p"},{href:"/python/docs/next/api/class-page#page-mouse"}),"page.mouse"),"."),(0,n.kt)(o.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"sync",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-py"}),"# using \u2018page.mouse\u2019 to trace a 100x100 square.\npage.mouse.move(0, 0)\npage.mouse.down()\npage.mouse.move(0, 100)\npage.mouse.move(100, 100)\npage.mouse.move(100, 0)\npage.mouse.move(0, 0)\npage.mouse.up()\n"))),(0,n.kt)(l.Z,{value:"async",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-py"}),"# using \u2018page.mouse\u2019 to trace a 100x100 square.\nawait page.mouse.move(0, 0)\nawait page.mouse.down()\nawait page.mouse.move(0, 100)\nawait page.mouse.move(100, 100)\nawait page.mouse.move(100, 0)\nawait page.mouse.move(0, 0)\nawait page.mouse.up()\n")))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"/python/docs/next/api/class-mouse#mouse-click"}),"mouse.click(x, y, **kwargs)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"/python/docs/next/api/class-mouse#mouse-dblclick"}),"mouse.dblclick(x, y, **kwargs)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"/python/docs/next/api/class-mouse#mouse-down"}),"mouse.down(**kwargs)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"/python/docs/next/api/class-mouse#mouse-move"}),"mouse.move(x, y, **kwargs)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"/python/docs/next/api/class-mouse#mouse-up"}),"mouse.up(**kwargs)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"/python/docs/next/api/class-mouse#mouse-wheel"}),"mouse.wheel(delta_x, delta_y)"))),(0,n.kt)("h2",d({},{id:"mouse-click"}),"mouse.click(x, y, **kwargs)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"x"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-click-option-x"})," ","<",(0,n.kt)("a",d({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"float"}),"float"),">",(0,n.kt)("a",{href:"#mouse-click-option-x",class:"list-anchor"},"#")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"y"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-click-option-y"})," ","<",(0,n.kt)("a",d({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"float"}),"float"),">",(0,n.kt)("a",{href:"#mouse-click-option-y",class:"list-anchor"},"#")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"button"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-click-option-button"})," ","<",'"left"|"right"|"middle"',">"," Defaults to ",(0,n.kt)("inlineCode",{parentName:"li"},"left"),".",(0,n.kt)("a",{href:"#mouse-click-option-button",class:"list-anchor"},"#")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"click_count"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-click-option-click-count"})," ","<",(0,n.kt)("a",d({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"int"}),"int"),">"," defaults to 1. See ",(0,n.kt)("a",d({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/UIEvent/detail",title:"UIEvent.detail"}),"UIEvent.detail"),".",(0,n.kt)("a",{href:"#mouse-click-option-click-count",class:"list-anchor"},"#")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"delay"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-click-option-delay"})," ","<",(0,n.kt)("a",d({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"float"}),"float"),">"," Time to wait between ",(0,n.kt)("inlineCode",{parentName:"li"},"mousedown")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"mouseup")," in milliseconds. Defaults to 0.",(0,n.kt)("a",{href:"#mouse-click-option-delay",class:"list-anchor"},"#")),(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-click-return"})," ","<",(0,n.kt)("a",d({parentName:"li"},{href:"https://docs.python.org/3/library/constants.html#None",title:"None"}),"NoneType"),">",(0,n.kt)("a",{href:"#mouse-click-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"Shortcut for ",(0,n.kt)("a",d({parentName:"p"},{href:"/python/docs/next/api/class-mouse#mouse-move"}),"mouse.move(x, y, **kwargs)"),", ",(0,n.kt)("a",d({parentName:"p"},{href:"/python/docs/next/api/class-mouse#mouse-down"}),"mouse.down(**kwargs)"),", ",(0,n.kt)("a",d({parentName:"p"},{href:"/python/docs/next/api/class-mouse#mouse-up"}),"mouse.up(**kwargs)"),"."),(0,n.kt)("h2",d({},{id:"mouse-dblclick"}),"mouse.dblclick(x, y, **kwargs)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"x"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-dblclick-option-x"})," ","<",(0,n.kt)("a",d({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"float"}),"float"),">",(0,n.kt)("a",{href:"#mouse-dblclick-option-x",class:"list-anchor"},"#")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"y"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-dblclick-option-y"})," ","<",(0,n.kt)("a",d({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"float"}),"float"),">",(0,n.kt)("a",{href:"#mouse-dblclick-option-y",class:"list-anchor"},"#")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"button"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-dblclick-option-button"})," ","<",'"left"|"right"|"middle"',">"," Defaults to ",(0,n.kt)("inlineCode",{parentName:"li"},"left"),".",(0,n.kt)("a",{href:"#mouse-dblclick-option-button",class:"list-anchor"},"#")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"delay"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-dblclick-option-delay"})," ","<",(0,n.kt)("a",d({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"float"}),"float"),">"," Time to wait between ",(0,n.kt)("inlineCode",{parentName:"li"},"mousedown")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"mouseup")," in milliseconds. Defaults to 0.",(0,n.kt)("a",{href:"#mouse-dblclick-option-delay",class:"list-anchor"},"#")),(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-dblclick-return"})," ","<",(0,n.kt)("a",d({parentName:"li"},{href:"https://docs.python.org/3/library/constants.html#None",title:"None"}),"NoneType"),">",(0,n.kt)("a",{href:"#mouse-dblclick-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"Shortcut for ",(0,n.kt)("a",d({parentName:"p"},{href:"/python/docs/next/api/class-mouse#mouse-move"}),"mouse.move(x, y, **kwargs)"),", ",(0,n.kt)("a",d({parentName:"p"},{href:"/python/docs/next/api/class-mouse#mouse-down"}),"mouse.down(**kwargs)"),", ",(0,n.kt)("a",d({parentName:"p"},{href:"/python/docs/next/api/class-mouse#mouse-up"}),"mouse.up(**kwargs)"),", ",(0,n.kt)("a",d({parentName:"p"},{href:"/python/docs/next/api/class-mouse#mouse-down"}),"mouse.down(**kwargs)")," and ",(0,n.kt)("a",d({parentName:"p"},{href:"/python/docs/next/api/class-mouse#mouse-up"}),"mouse.up(**kwargs)"),"."),(0,n.kt)("h2",d({},{id:"mouse-down"}),"mouse.down(**kwargs)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"button"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-down-option-button"})," ","<",'"left"|"right"|"middle"',">"," Defaults to ",(0,n.kt)("inlineCode",{parentName:"li"},"left"),".",(0,n.kt)("a",{href:"#mouse-down-option-button",class:"list-anchor"},"#")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"click_count"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-down-option-click-count"})," ","<",(0,n.kt)("a",d({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"int"}),"int"),">"," defaults to 1. See ",(0,n.kt)("a",d({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/UIEvent/detail",title:"UIEvent.detail"}),"UIEvent.detail"),".",(0,n.kt)("a",{href:"#mouse-down-option-click-count",class:"list-anchor"},"#")),(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-down-return"})," ","<",(0,n.kt)("a",d({parentName:"li"},{href:"https://docs.python.org/3/library/constants.html#None",title:"None"}),"NoneType"),">",(0,n.kt)("a",{href:"#mouse-down-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"Dispatches a ",(0,n.kt)("inlineCode",{parentName:"p"},"mousedown")," event."),(0,n.kt)("h2",d({},{id:"mouse-move"}),"mouse.move(x, y, **kwargs)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"x"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-move-option-x"})," ","<",(0,n.kt)("a",d({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"float"}),"float"),">",(0,n.kt)("a",{href:"#mouse-move-option-x",class:"list-anchor"},"#")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"y"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-move-option-y"})," ","<",(0,n.kt)("a",d({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"float"}),"float"),">",(0,n.kt)("a",{href:"#mouse-move-option-y",class:"list-anchor"},"#")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"steps"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-move-option-steps"})," ","<",(0,n.kt)("a",d({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"int"}),"int"),">"," defaults to 1. Sends intermediate ",(0,n.kt)("inlineCode",{parentName:"li"},"mousemove")," events.",(0,n.kt)("a",{href:"#mouse-move-option-steps",class:"list-anchor"},"#")),(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-move-return"})," ","<",(0,n.kt)("a",d({parentName:"li"},{href:"https://docs.python.org/3/library/constants.html#None",title:"None"}),"NoneType"),">",(0,n.kt)("a",{href:"#mouse-move-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"Dispatches a ",(0,n.kt)("inlineCode",{parentName:"p"},"mousemove")," event."),(0,n.kt)("h2",d({},{id:"mouse-up"}),"mouse.up(**kwargs)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"button"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-up-option-button"})," ","<",'"left"|"right"|"middle"',">"," Defaults to ",(0,n.kt)("inlineCode",{parentName:"li"},"left"),".",(0,n.kt)("a",{href:"#mouse-up-option-button",class:"list-anchor"},"#")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"click_count"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-up-option-click-count"})," ","<",(0,n.kt)("a",d({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"int"}),"int"),">"," defaults to 1. See ",(0,n.kt)("a",d({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/UIEvent/detail",title:"UIEvent.detail"}),"UIEvent.detail"),".",(0,n.kt)("a",{href:"#mouse-up-option-click-count",class:"list-anchor"},"#")),(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-up-return"})," ","<",(0,n.kt)("a",d({parentName:"li"},{href:"https://docs.python.org/3/library/constants.html#None",title:"None"}),"NoneType"),">",(0,n.kt)("a",{href:"#mouse-up-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"Dispatches a ",(0,n.kt)("inlineCode",{parentName:"p"},"mouseup")," event."),(0,n.kt)("h2",d({},{id:"mouse-wheel"}),"mouse.wheel(delta_x, delta_y)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"delta_x"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-wheel-option-delta-x"})," ","<",(0,n.kt)("a",d({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"float"}),"float"),">"," Pixels to scroll horizontally.",(0,n.kt)("a",{href:"#mouse-wheel-option-delta-x",class:"list-anchor"},"#")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"delta_y"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-wheel-option-delta-y"})," ","<",(0,n.kt)("a",d({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"float"}),"float"),">"," Pixels to scroll vertically.",(0,n.kt)("a",{href:"#mouse-wheel-option-delta-y",class:"list-anchor"},"#")),(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-wheel-return"})," ","<",(0,n.kt)("a",d({parentName:"li"},{href:"https://docs.python.org/3/library/constants.html#None",title:"None"}),"NoneType"),">",(0,n.kt)("a",{href:"#mouse-wheel-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"Dispatches a ",(0,n.kt)("inlineCode",{parentName:"p"},"wheel")," event."),(0,n.kt)("div",d({},{className:"admonition admonition-note alert alert--secondary"}),(0,n.kt)("div",d({parentName:"div"},{className:"admonition-heading"}),(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",d({parentName:"h5"},{className:"admonition-icon"}),(0,n.kt)("svg",d({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),(0,n.kt)("path",d({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),(0,n.kt)("div",d({parentName:"div"},{className:"admonition-content"}),(0,n.kt)("p",{parentName:"div"},"Wheel events may cause scrolling if they are not handled, and this method does not wait for the scrolling to finish before returning."))))}N.isMDXComponent=!0}}]);