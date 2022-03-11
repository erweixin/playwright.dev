"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[6187],{3905:function(e,r,t){t.d(r,{Zo:function(){return m},kt:function(){return u}});var a=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=a.createContext({}),s=function(e){var r=a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},m=function(e){var r=s(e.components);return a.createElement(l.Provider,{value:r},e.children)},f={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},p=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),p=s(t),u=n,d=p["".concat(l,".").concat(u)]||p[u]||f[u]||o;return t?a.createElement(d,i(i({ref:r},m),{},{components:t})):a.createElement(d,i({ref:r},m))}));function u(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=p;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<o;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},3353:function(e,r,t){t.r(r),t.d(r,{assets:function(){return v},contentTitle:function(){return u},default:function(){return g},frontMatter:function(){return p},metadata:function(){return d},toc:function(){return b}});var a=t(3905),n=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,m=(e,r,t)=>r in e?n(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,f=(e,r)=>{for(var t in r||(r={}))l.call(r,t)&&m(e,t,r[t]);if(c)for(var t of c(r))s.call(r,t)&&m(e,t,r[t]);return e};const p={id:"frames",title:"Frames"},u=void 0,d={unversionedId:"frames",id:"version-1.19/frames",title:"Frames",description:"- Frames",source:"@site/versioned_docs/version-1.19/frames.mdx",sourceDirName:".",slug:"/frames",permalink:"/java/docs/frames",tags:[],version:"1.19",frontMatter:{id:"frames",title:"Frames"},sidebar:"version-1.19/docs",previous:{title:"Extensibility",permalink:"/java/docs/extensibility"},next:{title:"Handles",permalink:"/java/docs/handles"}},v={},b=[{value:"Frames",id:"frames",level:2},{value:"Frame objects",id:"frame-objects",level:2}],y={toc:b};function g(e){var r,t=e,{components:n}=t,m=((e,r)=>{var t={};for(var a in e)l.call(e,a)&&r.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&c)for(var a of c(e))r.indexOf(a)<0&&s.call(e,a)&&(t[a]=e[a]);return t})(t,["components"]);return(0,a.kt)("wrapper",(r=f(f({},y),m),o(r,i({components:n,mdxType:"MDXLayout"}))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",f({parentName:"li"},{href:"#frames"}),"Frames")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",f({parentName:"li"},{href:"#frame-objects"}),"Frame objects"))),(0,a.kt)("h2",f({},{id:"frames"}),"Frames"),(0,a.kt)("p",null,"A ",(0,a.kt)("a",f({parentName:"p"},{href:"/java/docs/api/class-page",title:"Page"}),"Page")," can have one or more ",(0,a.kt)("a",f({parentName:"p"},{href:"/java/docs/api/class-frame",title:"Frame"}),"Frame")," objects attached to it. Each page has a main frame and page-level interactions (like ",(0,a.kt)("inlineCode",{parentName:"p"},"click"),") are assumed to operate in the main frame."),(0,a.kt)("p",null,"A page can have additional frames attached with the ",(0,a.kt)("inlineCode",{parentName:"p"},"iframe")," HTML tag. These frames can be accessed for interactions inside the frame."),(0,a.kt)("pre",null,(0,a.kt)("code",f({parentName:"pre"},{className:"language-java"}),'// Locate element inside frame\nLocator username = page.frameLocator(".frame-class").locator("#username-input");\nusername.fill("John");\n')),(0,a.kt)("h2",f({},{id:"frame-objects"}),"Frame objects"),(0,a.kt)("p",null,"One can access frame objects using the ",(0,a.kt)("a",f({parentName:"p"},{href:"/java/docs/api/class-page#page-frame"}),"Page.frame(name)")," API:"),(0,a.kt)("pre",null,(0,a.kt)("code",f({parentName:"pre"},{className:"language-java"}),'// Get frame using the frame"s name attribute\nFrame frame = page.frame("frame-login");\n\n// Get frame using frame"s URL\nFrame frame = page.frameByUrl(Pattern.compile(".*domain.*"));\n\n// Interact with the frame\nframe.fill("#username-input", "John");\n')))}g.isMDXComponent=!0}}]);