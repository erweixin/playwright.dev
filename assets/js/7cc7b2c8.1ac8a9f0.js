"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[2651],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return d}});var i=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,i,o=function(e,t){if(null==e)return{};var a,i,o={},n=Object.keys(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=i.createContext({}),c=function(e){var t=i.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),m=c(a),d=o,k=m["".concat(s,".").concat(d)]||m[d]||u[d]||n;return a?i.createElement(k,l(l({ref:t},p),{},{components:a})):i.createElement(k,l({ref:t},p))}));function d(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,l=new Array(n);l[0]=m;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:o,l[1]=r;for(var c=2;c<n;c++)l[c]=a[c];return i.createElement.apply(null,l)}return i.createElement.apply(null,a)}m.displayName="MDXCreateElement"},96045:function(e,t,a){a.r(t),a.d(t,{assets:function(){return h},contentTitle:function(){return d},default:function(){return v},frontMatter:function(){return m},metadata:function(){return k},toc:function(){return b}});var i=a(3905),o=Object.defineProperty,n=Object.defineProperties,l=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,t,a)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,u=(e,t)=>{for(var a in t||(t={}))s.call(t,a)&&p(e,a,t[a]);if(r)for(var a of r(t))c.call(t,a)&&p(e,a,t[a]);return e};const m={id:"class-mouse",title:"Mouse"},d=void 0,k={unversionedId:"api/class-mouse",id:"api/class-mouse",title:"Mouse",description:"The Mouse class operates in main-frame CSS pixels relative to the top-left corner of the viewport.",source:"@site/docs/api/class-mouse.mdx",sourceDirName:"api",slug:"/api/class-mouse",permalink:"/docs/next/api/class-mouse",tags:[],version:"current",frontMatter:{id:"class-mouse",title:"Mouse"},sidebar:"api",previous:{title:"Logger",permalink:"/docs/next/api/class-logger"},next:{title:"Page",permalink:"/docs/next/api/class-page"}},h={},b=[{value:"mouse.click(x, y, options)",id:"mouse-click",level:2},{value:"mouse.dblclick(x, y, options)",id:"mouse-dblclick",level:2},{value:"mouse.down(options)",id:"mouse-down",level:2},{value:"mouse.move(x, y, options)",id:"mouse-move",level:2},{value:"mouse.up(options)",id:"mouse-up",level:2},{value:"mouse.wheel(deltaX, deltaY)",id:"mouse-wheel",level:2}],f={toc:b};function v(e){var t,a=e,{components:o}=a,p=((e,t)=>{var a={};for(var i in e)s.call(e,i)&&t.indexOf(i)<0&&(a[i]=e[i]);if(null!=e&&r)for(var i of r(e))t.indexOf(i)<0&&c.call(e,i)&&(a[i]=e[i]);return a})(a,["components"]);return(0,i.kt)("wrapper",(t=u(u({},f),p),n(t,l({components:o,mdxType:"MDXLayout"}))),(0,i.kt)("p",null,"The Mouse class operates in main-frame CSS pixels relative to the top-left corner of the viewport."),(0,i.kt)("p",null,"Every ",(0,i.kt)("inlineCode",{parentName:"p"},"page")," object has its own Mouse, accessible with ",(0,i.kt)("a",u({parentName:"p"},{href:"/docs/next/api/class-page#page-mouse"}),"page.mouse"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",u({parentName:"pre"},{className:"language-js"}),"// Using \u2018page.mouse\u2019 to trace a 100x100 square.\nawait page.mouse.move(0, 0);\nawait page.mouse.down();\nawait page.mouse.move(0, 100);\nawait page.mouse.move(100, 100);\nawait page.mouse.move(100, 0);\nawait page.mouse.move(0, 0);\nawait page.mouse.up();\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",u({parentName:"li"},{href:"/docs/next/api/class-mouse#mouse-click"}),"mouse.click(x, y[, options])")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",u({parentName:"li"},{href:"/docs/next/api/class-mouse#mouse-dblclick"}),"mouse.dblclick(x, y[, options])")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",u({parentName:"li"},{href:"/docs/next/api/class-mouse#mouse-down"}),"mouse.down([options])")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",u({parentName:"li"},{href:"/docs/next/api/class-mouse#mouse-move"}),"mouse.move(x, y[, options])")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",u({parentName:"li"},{href:"/docs/next/api/class-mouse#mouse-up"}),"mouse.up([options])")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",u({parentName:"li"},{href:"/docs/next/api/class-mouse#mouse-wheel"}),"mouse.wheel(deltaX, deltaY)"))),(0,i.kt)("h2",u({},{id:"mouse-click"}),"mouse.click(x, y","[, options]",")"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"x"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-click-option-x"})," ","<",(0,i.kt)("a",u({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"}),"number"),">",(0,i.kt)("a",{href:"#mouse-click-option-x",class:"list-anchor"},"#")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"y"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-click-option-y"})," ","<",(0,i.kt)("a",u({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"}),"number"),">",(0,i.kt)("a",{href:"#mouse-click-option-y",class:"list-anchor"},"#")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"options")," ","<",(0,i.kt)("a",u({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"}),"Object"),">",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"button"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-click-option-button"})," ","<",'"left"|"right"|"middle"',">"," Defaults to ",(0,i.kt)("inlineCode",{parentName:"li"},"left"),".",(0,i.kt)("a",{href:"#mouse-click-option-button",class:"list-anchor"},"#")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"clickCount"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-click-option-click-count"})," ","<",(0,i.kt)("a",u({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"}),"number"),">"," defaults to 1. See ",(0,i.kt)("a",u({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/UIEvent/detail",title:"UIEvent.detail"}),"UIEvent.detail"),".",(0,i.kt)("a",{href:"#mouse-click-option-click-count",class:"list-anchor"},"#")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"delay"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-click-option-delay"})," ","<",(0,i.kt)("a",u({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"}),"number"),">"," Time to wait between ",(0,i.kt)("inlineCode",{parentName:"li"},"mousedown")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"mouseup")," in milliseconds. Defaults to 0.",(0,i.kt)("a",{href:"#mouse-click-option-delay",class:"list-anchor"},"#")))),(0,i.kt)("li",{parentName:"ul"},"returns:",(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-click-return"})," ","<",(0,i.kt)("a",u({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),"<",(0,i.kt)("a",u({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"}),"void"),">",">",(0,i.kt)("a",{href:"#mouse-click-return",class:"list-anchor"},"#"))),(0,i.kt)("p",null,"Shortcut for ",(0,i.kt)("a",u({parentName:"p"},{href:"/docs/next/api/class-mouse#mouse-move"}),"mouse.move(x, y[, options])"),", ",(0,i.kt)("a",u({parentName:"p"},{href:"/docs/next/api/class-mouse#mouse-down"}),"mouse.down([options])"),", ",(0,i.kt)("a",u({parentName:"p"},{href:"/docs/next/api/class-mouse#mouse-up"}),"mouse.up([options])"),"."),(0,i.kt)("h2",u({},{id:"mouse-dblclick"}),"mouse.dblclick(x, y","[, options]",")"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"x"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-dblclick-option-x"})," ","<",(0,i.kt)("a",u({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"}),"number"),">",(0,i.kt)("a",{href:"#mouse-dblclick-option-x",class:"list-anchor"},"#")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"y"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-dblclick-option-y"})," ","<",(0,i.kt)("a",u({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"}),"number"),">",(0,i.kt)("a",{href:"#mouse-dblclick-option-y",class:"list-anchor"},"#")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"options")," ","<",(0,i.kt)("a",u({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"}),"Object"),">",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"button"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-dblclick-option-button"})," ","<",'"left"|"right"|"middle"',">"," Defaults to ",(0,i.kt)("inlineCode",{parentName:"li"},"left"),".",(0,i.kt)("a",{href:"#mouse-dblclick-option-button",class:"list-anchor"},"#")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"delay"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-dblclick-option-delay"})," ","<",(0,i.kt)("a",u({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"}),"number"),">"," Time to wait between ",(0,i.kt)("inlineCode",{parentName:"li"},"mousedown")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"mouseup")," in milliseconds. Defaults to 0.",(0,i.kt)("a",{href:"#mouse-dblclick-option-delay",class:"list-anchor"},"#")))),(0,i.kt)("li",{parentName:"ul"},"returns:",(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-dblclick-return"})," ","<",(0,i.kt)("a",u({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),"<",(0,i.kt)("a",u({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"}),"void"),">",">",(0,i.kt)("a",{href:"#mouse-dblclick-return",class:"list-anchor"},"#"))),(0,i.kt)("p",null,"Shortcut for ",(0,i.kt)("a",u({parentName:"p"},{href:"/docs/next/api/class-mouse#mouse-move"}),"mouse.move(x, y[, options])"),", ",(0,i.kt)("a",u({parentName:"p"},{href:"/docs/next/api/class-mouse#mouse-down"}),"mouse.down([options])"),", ",(0,i.kt)("a",u({parentName:"p"},{href:"/docs/next/api/class-mouse#mouse-up"}),"mouse.up([options])"),", ",(0,i.kt)("a",u({parentName:"p"},{href:"/docs/next/api/class-mouse#mouse-down"}),"mouse.down([options])")," and ",(0,i.kt)("a",u({parentName:"p"},{href:"/docs/next/api/class-mouse#mouse-up"}),"mouse.up([options])"),"."),(0,i.kt)("h2",u({},{id:"mouse-down"}),"mouse.down(","[options]",")"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"options")," ","<",(0,i.kt)("a",u({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"}),"Object"),">",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"button"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-down-option-button"})," ","<",'"left"|"right"|"middle"',">"," Defaults to ",(0,i.kt)("inlineCode",{parentName:"li"},"left"),".",(0,i.kt)("a",{href:"#mouse-down-option-button",class:"list-anchor"},"#")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"clickCount"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-down-option-click-count"})," ","<",(0,i.kt)("a",u({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"}),"number"),">"," defaults to 1. See ",(0,i.kt)("a",u({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/UIEvent/detail",title:"UIEvent.detail"}),"UIEvent.detail"),".",(0,i.kt)("a",{href:"#mouse-down-option-click-count",class:"list-anchor"},"#")))),(0,i.kt)("li",{parentName:"ul"},"returns:",(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-down-return"})," ","<",(0,i.kt)("a",u({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),"<",(0,i.kt)("a",u({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"}),"void"),">",">",(0,i.kt)("a",{href:"#mouse-down-return",class:"list-anchor"},"#"))),(0,i.kt)("p",null,"Dispatches a ",(0,i.kt)("inlineCode",{parentName:"p"},"mousedown")," event."),(0,i.kt)("h2",u({},{id:"mouse-move"}),"mouse.move(x, y","[, options]",")"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"x"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-move-option-x"})," ","<",(0,i.kt)("a",u({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"}),"number"),">",(0,i.kt)("a",{href:"#mouse-move-option-x",class:"list-anchor"},"#")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"y"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-move-option-y"})," ","<",(0,i.kt)("a",u({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"}),"number"),">",(0,i.kt)("a",{href:"#mouse-move-option-y",class:"list-anchor"},"#")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"options")," ","<",(0,i.kt)("a",u({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"}),"Object"),">",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"steps"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-move-option-steps"})," ","<",(0,i.kt)("a",u({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"}),"number"),">"," defaults to 1. Sends intermediate ",(0,i.kt)("inlineCode",{parentName:"li"},"mousemove")," events.",(0,i.kt)("a",{href:"#mouse-move-option-steps",class:"list-anchor"},"#")))),(0,i.kt)("li",{parentName:"ul"},"returns:",(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-move-return"})," ","<",(0,i.kt)("a",u({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),"<",(0,i.kt)("a",u({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"}),"void"),">",">",(0,i.kt)("a",{href:"#mouse-move-return",class:"list-anchor"},"#"))),(0,i.kt)("p",null,"Dispatches a ",(0,i.kt)("inlineCode",{parentName:"p"},"mousemove")," event."),(0,i.kt)("h2",u({},{id:"mouse-up"}),"mouse.up(","[options]",")"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"options")," ","<",(0,i.kt)("a",u({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"}),"Object"),">",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"button"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-up-option-button"})," ","<",'"left"|"right"|"middle"',">"," Defaults to ",(0,i.kt)("inlineCode",{parentName:"li"},"left"),".",(0,i.kt)("a",{href:"#mouse-up-option-button",class:"list-anchor"},"#")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"clickCount"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-up-option-click-count"})," ","<",(0,i.kt)("a",u({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"}),"number"),">"," defaults to 1. See ",(0,i.kt)("a",u({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/UIEvent/detail",title:"UIEvent.detail"}),"UIEvent.detail"),".",(0,i.kt)("a",{href:"#mouse-up-option-click-count",class:"list-anchor"},"#")))),(0,i.kt)("li",{parentName:"ul"},"returns:",(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-up-return"})," ","<",(0,i.kt)("a",u({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),"<",(0,i.kt)("a",u({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"}),"void"),">",">",(0,i.kt)("a",{href:"#mouse-up-return",class:"list-anchor"},"#"))),(0,i.kt)("p",null,"Dispatches a ",(0,i.kt)("inlineCode",{parentName:"p"},"mouseup")," event."),(0,i.kt)("h2",u({},{id:"mouse-wheel"}),"mouse.wheel(deltaX, deltaY)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"deltaX"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-wheel-option-delta-x"})," ","<",(0,i.kt)("a",u({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"}),"number"),">"," Pixels to scroll horizontally.",(0,i.kt)("a",{href:"#mouse-wheel-option-delta-x",class:"list-anchor"},"#")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"deltaY"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-wheel-option-delta-y"})," ","<",(0,i.kt)("a",u({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"}),"number"),">"," Pixels to scroll vertically.",(0,i.kt)("a",{href:"#mouse-wheel-option-delta-y",class:"list-anchor"},"#")),(0,i.kt)("li",{parentName:"ul"},"returns:",(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-wheel-return"})," ","<",(0,i.kt)("a",u({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),"<",(0,i.kt)("a",u({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"}),"void"),">",">",(0,i.kt)("a",{href:"#mouse-wheel-return",class:"list-anchor"},"#"))),(0,i.kt)("p",null,"Dispatches a ",(0,i.kt)("inlineCode",{parentName:"p"},"wheel")," event."),(0,i.kt)("div",u({},{className:"admonition admonition-note alert alert--secondary"}),(0,i.kt)("div",u({parentName:"div"},{className:"admonition-heading"}),(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",u({parentName:"h5"},{className:"admonition-icon"}),(0,i.kt)("svg",u({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),(0,i.kt)("path",u({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),(0,i.kt)("div",u({parentName:"div"},{className:"admonition-content"}),(0,i.kt)("p",{parentName:"div"},"Wheel events may cause scrolling if they are not handled, and this method does not wait for the scrolling to finish before returning."))))}v.isMDXComponent=!0}}]);