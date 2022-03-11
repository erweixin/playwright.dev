"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[2050],{3905:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return u}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),f=l(r),u=a,d=f["".concat(s,".").concat(u)]||f[u]||p[u]||o;return r?n.createElement(d,i(i({ref:t},m),{},{components:r})):n.createElement(d,i({ref:t},m))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},6041:function(e,t,r){r.r(t),r.d(t,{assets:function(){return y},contentTitle:function(){return u},default:function(){return b},frontMatter:function(){return f},metadata:function(){return d},toc:function(){return v}});var n=r(3905),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,m=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,p=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&m(e,r,t[r]);if(c)for(var r of c(t))l.call(t,r)&&m(e,r,t[r]);return e};const f={id:"frames",title:"Frames"},u=void 0,d={unversionedId:"frames",id:"version-1.18/frames",title:"Frames",description:"- Frames",source:"@site/versioned_docs/version-1.18/frames.mdx",sourceDirName:".",slug:"/frames",permalink:"/dotnet/docs/1.18/frames",tags:[],version:"1.18",frontMatter:{id:"frames",title:"Frames"},sidebar:"version-1.18/docs",previous:{title:"Extensibility",permalink:"/dotnet/docs/1.18/extensibility"},next:{title:"Handles",permalink:"/dotnet/docs/1.18/handles"}},y={},v=[{value:"Frames",id:"frames",level:2},{value:"Frame objects",id:"frame-objects",level:2}],g={toc:v};function b(e){var t,r=e,{components:a}=r,m=((e,t)=>{var r={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&c)for(var n of c(e))t.indexOf(n)<0&&l.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=p(p({},g),m),o(t,i({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",p({parentName:"li"},{href:"#frames"}),"Frames")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",p({parentName:"li"},{href:"#frame-objects"}),"Frame objects"))),(0,n.kt)("h2",p({},{id:"frames"}),"Frames"),(0,n.kt)("p",null,"A ",(0,n.kt)("a",p({parentName:"p"},{href:"/dotnet/docs/1.18/api/class-page",title:"Page"}),"Page")," can have one or more ",(0,n.kt)("a",p({parentName:"p"},{href:"/dotnet/docs/1.18/api/class-frame",title:"Frame"}),"Frame")," objects attached to it. Each page has a main frame and page-level interactions (like ",(0,n.kt)("inlineCode",{parentName:"p"},"click"),") are assumed to operate in the main frame."),(0,n.kt)("p",null,"A page can have additional frames attached with the ",(0,n.kt)("inlineCode",{parentName:"p"},"iframe")," HTML tag. These frames can be accessed for interactions inside the frame."),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-csharp"}),'// Locate element inside frame\nvar username = await page.FrameLocator(".frame-class").Locator("#username-input");\nawait username.FillAsync("John");\n')),(0,n.kt)("h2",p({},{id:"frame-objects"}),"Frame objects"),(0,n.kt)("p",null,"One can access frame objects using the ",(0,n.kt)("a",p({parentName:"p"},{href:"/dotnet/docs/1.18/api/class-page#page-frame"}),"Page.Frame(name)")," API:"),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-csharp"}),'// Create a page.\nvar page = await context.NewPageAsync();\n\n// Get frame using the frame\'s name attribute\nvar frame = page.Frame("frame-login");\n\n// Get frame using frame\'s URL\nvar frame = page.FrameByUrl("*domain.");\n\n// Get frame using any other selector\nvar frameElementHandle = await page.EvaluateAsync("window.frames[1]");\nvar frame = await frameElementHandle.ContentFrameAsync();\n\n// Interact with the frame\nawait frame.FillAsync("#username-input", "John");\n')))}b.isMDXComponent=!0}}]);