"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[6897],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),f=l(r),m=a,b=f["".concat(s,".").concat(m)]||f[m]||u[m]||o;return r?n.createElement(b,c(c({ref:t},p),{},{components:r})):n.createElement(b,c({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var l=2;l<o;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},31553:function(e,t,r){r.r(t),r.d(t,{assets:function(){return k},contentTitle:function(){return m},default:function(){return w},frontMatter:function(){return f},metadata:function(){return b},toc:function(){return d}});var n=r(3905),a=Object.defineProperty,o=Object.defineProperties,c=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&p(e,r,t[r]);if(i)for(var r of i(t))l.call(t,r)&&p(e,r,t[r]);return e};const f={id:"class-websocketframe",title:"WebSocketFrame"},m=void 0,b={unversionedId:"api/class-websocketframe",id:"version-1.21/api/class-websocketframe",title:"WebSocketFrame",description:"The WebSocketFrame] class represents frames sent over [WebSocket] connections in the page. Frame payload is returned by either [WebSocketFrame.Text or WebSocketFrame.Binary method depending on the its type.",source:"@site/versioned_docs/version-1.21/api/class-websocketframe.mdx",sourceDirName:"api",slug:"/api/class-websocketframe",permalink:"/dotnet/docs/api/class-websocketframe",tags:[],version:"1.21",frontMatter:{id:"class-websocketframe",title:"WebSocketFrame"},sidebar:"api",previous:{title:"WebSocket",permalink:"/dotnet/docs/api/class-websocket"},next:{title:"Worker",permalink:"/dotnet/docs/api/class-worker"}},k={},d=[{value:"WebSocketFrame.Binary",id:"web-socket-frame-binary",level:2},{value:"WebSocketFrame.Text",id:"web-socket-frame-text",level:2}],y={toc:d};function w(e){var t,r=e,{components:a}=r,p=((e,t)=>{var r={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&l.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=u(u({},y),p),o(t,c({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"The ",(0,n.kt)("a",u({parentName:"p"},{href:"/dotnet/docs/api/class-websocketframe",title:"WebSocketFrame"}),"WebSocketFrame")," class represents frames sent over ",(0,n.kt)("a",u({parentName:"p"},{href:"/dotnet/docs/api/class-websocket",title:"WebSocket"}),"WebSocket")," connections in the page. Frame payload is returned by either ",(0,n.kt)("a",u({parentName:"p"},{href:"/dotnet/docs/api/class-websocketframe#web-socket-frame-text"}),"WebSocketFrame.Text")," or ",(0,n.kt)("a",u({parentName:"p"},{href:"/dotnet/docs/api/class-websocketframe#web-socket-frame-binary"}),"WebSocketFrame.Binary")," method depending on the its type."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"/dotnet/docs/api/class-websocketframe#web-socket-frame-binary"}),"WebSocketFrame.Binary")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"/dotnet/docs/api/class-websocketframe#web-socket-frame-text"}),"WebSocketFrame.Text"))),(0,n.kt)("h2",u({},{id:"web-socket-frame-binary"}),"WebSocketFrame.Binary"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"web-socket-frame-binary-return"})," ","<",(0,n.kt)("a",u({parentName:"li"},{href:"https://docs.microsoft.com/en-us/dotnet/api/system.byte",title:"byte"}),"byte"),"[","]","?",">",(0,n.kt)("a",{href:"#web-socket-frame-binary-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"Returns binary payload."),(0,n.kt)("h2",u({},{id:"web-socket-frame-text"}),"WebSocketFrame.Text"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"web-socket-frame-text-return"})," ","<",(0,n.kt)("a",u({parentName:"li"},{href:"https://docs.microsoft.com/en-us/dotnet/api/system.string",title:"string"}),"string"),"?",">",(0,n.kt)("a",{href:"#web-socket-frame-text-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"Returns text payload."))}w.isMDXComponent=!0}}]);