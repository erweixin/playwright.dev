"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[2229],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var r=o.createContext({}),u=function(e){var t=o.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(r.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,r=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=i,k=d["".concat(r,".").concat(m)]||d[m]||p[m]||a;return n?o.createElement(k,l(l({ref:t},c),{},{components:n})):o.createElement(k,l({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=d;var s={};for(var r in t)hasOwnProperty.call(t,r)&&(s[r]=t[r]);s.originalType=e,s.mdxType="string"==typeof e?e:i,l[1]=s;for(var u=2;u<a;u++)l[u]=n[u];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6720:function(e,t,n){n.r(t),n.d(t,{assets:function(){return h},contentTitle:function(){return m},default:function(){return b},frontMatter:function(){return d},metadata:function(){return k},toc:function(){return f}});var o=n(3905),i=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t)=>{for(var n in t||(t={}))r.call(t,n)&&c(e,n,t[n]);if(s)for(var n of s(t))u.call(t,n)&&c(e,n,t[n]);return e};const d={id:"class-mouse",title:"Mouse"},m=void 0,k={unversionedId:"api/class-mouse",id:"version-stable/api/class-mouse",title:"Mouse",description:"The Mouse class operates in main-frame CSS pixels relative to the top-left corner of the viewport.",source:"@site/versioned_docs/version-stable/api/class-mouse.mdx",sourceDirName:"api",slug:"/api/class-mouse",permalink:"/dotnet/docs/api/class-mouse",draft:!1,tags:[],version:"stable",frontMatter:{id:"class-mouse",title:"Mouse"},sidebar:"api",previous:{title:"Locator",permalink:"/dotnet/docs/api/class-locator"},next:{title:"Page",permalink:"/dotnet/docs/api/class-page"}},h={},f=[{value:"Mouse.ClickAsync(x, y, options)",id:"mouse-click",level:2},{value:"Mouse.DblClickAsync(x, y, options)",id:"mouse-dblclick",level:2},{value:"Mouse.DownAsync(options)",id:"mouse-down",level:2},{value:"Mouse.MoveAsync(x, y, options)",id:"mouse-move",level:2},{value:"Mouse.UpAsync(options)",id:"mouse-up",level:2},{value:"Mouse.WheelAsync(deltaX, deltaY)",id:"mouse-wheel",level:2}],y={toc:f};function b(e){var t,n=e,{components:i}=n,c=((e,t)=>{var n={};for(var o in e)r.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&s)for(var o of s(e))t.indexOf(o)<0&&u.call(e,o)&&(n[o]=e[o]);return n})(n,["components"]);return(0,o.kt)("wrapper",(t=p(p({},y),c),a(t,l({components:i,mdxType:"MDXLayout"}))),(0,o.kt)("p",null,"The Mouse class operates in main-frame CSS pixels relative to the top-left corner of the viewport."),(0,o.kt)("p",null,"Every ",(0,o.kt)("inlineCode",{parentName:"p"},"page")," object has its own Mouse, accessible with ",(0,o.kt)("a",p({parentName:"p"},{href:"/dotnet/docs/api/class-page#page-mouse"}),"Page.Mouse"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",p({parentName:"pre"},{className:"language-csharp"}),"await Page.Mouse.MoveAsync(0, 0);\nawait Page.Mouse.DownAsync();\nawait Page.Mouse.MoveAsync(0, 100);\nawait Page.Mouse.MoveAsync(100, 100);\nawait Page.Mouse.MoveAsync(100, 0);\nawait Page.Mouse.MoveAsync(0, 0);\nawait Page.Mouse.UpAsync();\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",p({parentName:"li"},{href:"/dotnet/docs/api/class-mouse#mouse-click"}),"Mouse.ClickAsync(x, y, options)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",p({parentName:"li"},{href:"/dotnet/docs/api/class-mouse#mouse-dblclick"}),"Mouse.DblClickAsync(x, y, options)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",p({parentName:"li"},{href:"/dotnet/docs/api/class-mouse#mouse-down"}),"Mouse.DownAsync(options)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",p({parentName:"li"},{href:"/dotnet/docs/api/class-mouse#mouse-move"}),"Mouse.MoveAsync(x, y, options)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",p({parentName:"li"},{href:"/dotnet/docs/api/class-mouse#mouse-up"}),"Mouse.UpAsync(options)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",p({parentName:"li"},{href:"/dotnet/docs/api/class-mouse#mouse-wheel"}),"Mouse.WheelAsync(deltaX, deltaY)"))),(0,o.kt)("h2",p({},{id:"mouse-click"}),"Mouse.ClickAsync(x, y, options)"),(0,o.kt)("font",{size:"2",style:{position:"relative",top:"-20px"}},"Added in: v1.8"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"x"),(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-click-option-x"})," ","<",(0,o.kt)("a",p({parentName:"li"},{href:"https://docs.microsoft.com/en-us/dotnet/api/system.double",title:"double"}),"double"),">",(0,o.kt)("a",{href:"#mouse-click-option-x",class:"list-anchor"},"#")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"y"),(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-click-option-y"})," ","<",(0,o.kt)("a",p({parentName:"li"},{href:"https://docs.microsoft.com/en-us/dotnet/api/system.double",title:"double"}),"double"),">",(0,o.kt)("a",{href:"#mouse-click-option-y",class:"list-anchor"},"#")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"options")," ","<",(0,o.kt)("inlineCode",{parentName:"li"},"MouseClickOptions?"),">",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Button"),(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-click-option-button"})," ","<",(0,o.kt)("inlineCode",{parentName:"li"},"enum MouseButton { Left, Right, Middle }?"),">"," Defaults to ",(0,o.kt)("inlineCode",{parentName:"li"},"left"),".",(0,o.kt)("a",{href:"#mouse-click-option-button",class:"list-anchor"},"#")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ClickCount"),(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-click-option-click-count"})," ","<",(0,o.kt)("a",p({parentName:"li"},{href:"https://docs.microsoft.com/en-us/dotnet/api/system.int32",title:"int"}),"int"),"?",">"," defaults to 1. See ",(0,o.kt)("a",p({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/UIEvent/detail",title:"UIEvent.detail"}),"UIEvent.detail"),".",(0,o.kt)("a",{href:"#mouse-click-option-click-count",class:"list-anchor"},"#")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Delay"),(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-click-option-delay"})," ","<",(0,o.kt)("a",p({parentName:"li"},{href:"https://docs.microsoft.com/en-us/dotnet/api/system.double",title:"double"}),"double"),"?",">"," Time to wait between ",(0,o.kt)("inlineCode",{parentName:"li"},"mousedown")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"mouseup")," in milliseconds. Defaults to 0.",(0,o.kt)("a",{href:"#mouse-click-option-delay",class:"list-anchor"},"#")))),(0,o.kt)("li",{parentName:"ul"},"returns:",(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-click-return"})," ","<",(0,o.kt)("a",p({parentName:"li"},{href:"https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/void",title:"void"}),"void"),">",(0,o.kt)("a",{href:"#mouse-click-return",class:"list-anchor"},"#"))),(0,o.kt)("p",null,"Shortcut for ",(0,o.kt)("a",p({parentName:"p"},{href:"/dotnet/docs/api/class-mouse#mouse-move"}),"Mouse.MoveAsync(x, y, options)"),", ",(0,o.kt)("a",p({parentName:"p"},{href:"/dotnet/docs/api/class-mouse#mouse-down"}),"Mouse.DownAsync(options)"),", ",(0,o.kt)("a",p({parentName:"p"},{href:"/dotnet/docs/api/class-mouse#mouse-up"}),"Mouse.UpAsync(options)"),"."),(0,o.kt)("h2",p({},{id:"mouse-dblclick"}),"Mouse.DblClickAsync(x, y, options)"),(0,o.kt)("font",{size:"2",style:{position:"relative",top:"-20px"}},"Added in: v1.8"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"x"),(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-dblclick-option-x"})," ","<",(0,o.kt)("a",p({parentName:"li"},{href:"https://docs.microsoft.com/en-us/dotnet/api/system.double",title:"double"}),"double"),">",(0,o.kt)("a",{href:"#mouse-dblclick-option-x",class:"list-anchor"},"#")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"y"),(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-dblclick-option-y"})," ","<",(0,o.kt)("a",p({parentName:"li"},{href:"https://docs.microsoft.com/en-us/dotnet/api/system.double",title:"double"}),"double"),">",(0,o.kt)("a",{href:"#mouse-dblclick-option-y",class:"list-anchor"},"#")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"options")," ","<",(0,o.kt)("inlineCode",{parentName:"li"},"MouseDblClickOptions?"),">",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Button"),(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-dblclick-option-button"})," ","<",(0,o.kt)("inlineCode",{parentName:"li"},"enum MouseButton { Left, Right, Middle }?"),">"," Defaults to ",(0,o.kt)("inlineCode",{parentName:"li"},"left"),".",(0,o.kt)("a",{href:"#mouse-dblclick-option-button",class:"list-anchor"},"#")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Delay"),(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-dblclick-option-delay"})," ","<",(0,o.kt)("a",p({parentName:"li"},{href:"https://docs.microsoft.com/en-us/dotnet/api/system.double",title:"double"}),"double"),"?",">"," Time to wait between ",(0,o.kt)("inlineCode",{parentName:"li"},"mousedown")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"mouseup")," in milliseconds. Defaults to 0.",(0,o.kt)("a",{href:"#mouse-dblclick-option-delay",class:"list-anchor"},"#")))),(0,o.kt)("li",{parentName:"ul"},"returns:",(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-dblclick-return"})," ","<",(0,o.kt)("a",p({parentName:"li"},{href:"https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/void",title:"void"}),"void"),">",(0,o.kt)("a",{href:"#mouse-dblclick-return",class:"list-anchor"},"#"))),(0,o.kt)("p",null,"Shortcut for ",(0,o.kt)("a",p({parentName:"p"},{href:"/dotnet/docs/api/class-mouse#mouse-move"}),"Mouse.MoveAsync(x, y, options)"),", ",(0,o.kt)("a",p({parentName:"p"},{href:"/dotnet/docs/api/class-mouse#mouse-down"}),"Mouse.DownAsync(options)"),", ",(0,o.kt)("a",p({parentName:"p"},{href:"/dotnet/docs/api/class-mouse#mouse-up"}),"Mouse.UpAsync(options)"),", ",(0,o.kt)("a",p({parentName:"p"},{href:"/dotnet/docs/api/class-mouse#mouse-down"}),"Mouse.DownAsync(options)")," and ",(0,o.kt)("a",p({parentName:"p"},{href:"/dotnet/docs/api/class-mouse#mouse-up"}),"Mouse.UpAsync(options)"),"."),(0,o.kt)("h2",p({},{id:"mouse-down"}),"Mouse.DownAsync(options)"),(0,o.kt)("font",{size:"2",style:{position:"relative",top:"-20px"}},"Added in: v1.8"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"options")," ","<",(0,o.kt)("inlineCode",{parentName:"li"},"MouseDownOptions?"),">",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Button"),(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-down-option-button"})," ","<",(0,o.kt)("inlineCode",{parentName:"li"},"enum MouseButton { Left, Right, Middle }?"),">"," Defaults to ",(0,o.kt)("inlineCode",{parentName:"li"},"left"),".",(0,o.kt)("a",{href:"#mouse-down-option-button",class:"list-anchor"},"#")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ClickCount"),(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-down-option-click-count"})," ","<",(0,o.kt)("a",p({parentName:"li"},{href:"https://docs.microsoft.com/en-us/dotnet/api/system.int32",title:"int"}),"int"),"?",">"," defaults to 1. See ",(0,o.kt)("a",p({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/UIEvent/detail",title:"UIEvent.detail"}),"UIEvent.detail"),".",(0,o.kt)("a",{href:"#mouse-down-option-click-count",class:"list-anchor"},"#")))),(0,o.kt)("li",{parentName:"ul"},"returns:",(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-down-return"})," ","<",(0,o.kt)("a",p({parentName:"li"},{href:"https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/void",title:"void"}),"void"),">",(0,o.kt)("a",{href:"#mouse-down-return",class:"list-anchor"},"#"))),(0,o.kt)("p",null,"Dispatches a ",(0,o.kt)("inlineCode",{parentName:"p"},"mousedown")," event."),(0,o.kt)("h2",p({},{id:"mouse-move"}),"Mouse.MoveAsync(x, y, options)"),(0,o.kt)("font",{size:"2",style:{position:"relative",top:"-20px"}},"Added in: v1.8"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"x"),(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-move-option-x"})," ","<",(0,o.kt)("a",p({parentName:"li"},{href:"https://docs.microsoft.com/en-us/dotnet/api/system.double",title:"double"}),"double"),">",(0,o.kt)("a",{href:"#mouse-move-option-x",class:"list-anchor"},"#")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"y"),(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-move-option-y"})," ","<",(0,o.kt)("a",p({parentName:"li"},{href:"https://docs.microsoft.com/en-us/dotnet/api/system.double",title:"double"}),"double"),">",(0,o.kt)("a",{href:"#mouse-move-option-y",class:"list-anchor"},"#")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"options")," ","<",(0,o.kt)("inlineCode",{parentName:"li"},"MouseMoveOptions?"),">",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Steps"),(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-move-option-steps"})," ","<",(0,o.kt)("a",p({parentName:"li"},{href:"https://docs.microsoft.com/en-us/dotnet/api/system.int32",title:"int"}),"int"),"?",">"," Defaults to 1. Sends intermediate ",(0,o.kt)("inlineCode",{parentName:"li"},"mousemove")," events.",(0,o.kt)("a",{href:"#mouse-move-option-steps",class:"list-anchor"},"#")))),(0,o.kt)("li",{parentName:"ul"},"returns:",(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-move-return"})," ","<",(0,o.kt)("a",p({parentName:"li"},{href:"https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/void",title:"void"}),"void"),">",(0,o.kt)("a",{href:"#mouse-move-return",class:"list-anchor"},"#"))),(0,o.kt)("p",null,"Dispatches a ",(0,o.kt)("inlineCode",{parentName:"p"},"mousemove")," event."),(0,o.kt)("h2",p({},{id:"mouse-up"}),"Mouse.UpAsync(options)"),(0,o.kt)("font",{size:"2",style:{position:"relative",top:"-20px"}},"Added in: v1.8"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"options")," ","<",(0,o.kt)("inlineCode",{parentName:"li"},"MouseUpOptions?"),">",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Button"),(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-up-option-button"})," ","<",(0,o.kt)("inlineCode",{parentName:"li"},"enum MouseButton { Left, Right, Middle }?"),">"," Defaults to ",(0,o.kt)("inlineCode",{parentName:"li"},"left"),".",(0,o.kt)("a",{href:"#mouse-up-option-button",class:"list-anchor"},"#")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ClickCount"),(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-up-option-click-count"})," ","<",(0,o.kt)("a",p({parentName:"li"},{href:"https://docs.microsoft.com/en-us/dotnet/api/system.int32",title:"int"}),"int"),"?",">"," defaults to 1. See ",(0,o.kt)("a",p({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/UIEvent/detail",title:"UIEvent.detail"}),"UIEvent.detail"),".",(0,o.kt)("a",{href:"#mouse-up-option-click-count",class:"list-anchor"},"#")))),(0,o.kt)("li",{parentName:"ul"},"returns:",(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-up-return"})," ","<",(0,o.kt)("a",p({parentName:"li"},{href:"https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/void",title:"void"}),"void"),">",(0,o.kt)("a",{href:"#mouse-up-return",class:"list-anchor"},"#"))),(0,o.kt)("p",null,"Dispatches a ",(0,o.kt)("inlineCode",{parentName:"p"},"mouseup")," event."),(0,o.kt)("h2",p({},{id:"mouse-wheel"}),"Mouse.WheelAsync(deltaX, deltaY)"),(0,o.kt)("font",{size:"2",style:{position:"relative",top:"-20px"}},"Added in: v1.15"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"deltaX"),(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-wheel-option-delta-x"})," ","<",(0,o.kt)("a",p({parentName:"li"},{href:"https://docs.microsoft.com/en-us/dotnet/api/system.double",title:"double"}),"double"),">"," Pixels to scroll horizontally.",(0,o.kt)("a",{href:"#mouse-wheel-option-delta-x",class:"list-anchor"},"#")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"deltaY"),(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-wheel-option-delta-y"})," ","<",(0,o.kt)("a",p({parentName:"li"},{href:"https://docs.microsoft.com/en-us/dotnet/api/system.double",title:"double"}),"double"),">"," Pixels to scroll vertically.",(0,o.kt)("a",{href:"#mouse-wheel-option-delta-y",class:"list-anchor"},"#")),(0,o.kt)("li",{parentName:"ul"},"returns:",(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-wheel-return"})," ","<",(0,o.kt)("a",p({parentName:"li"},{href:"https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/void",title:"void"}),"void"),">",(0,o.kt)("a",{href:"#mouse-wheel-return",class:"list-anchor"},"#"))),(0,o.kt)("p",null,"Dispatches a ",(0,o.kt)("inlineCode",{parentName:"p"},"wheel")," event."),(0,o.kt)("admonition",p({},{type:"note"}),(0,o.kt)("p",{parentName:"admonition"},"Wheel events may cause scrolling if they are not handled, and this method does not wait for the scrolling to finish before returning.")))}b.isMDXComponent=!0}}]);