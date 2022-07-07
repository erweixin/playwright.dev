"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[7587],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},w=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),w=l(r),f=o,m=w["".concat(c,".").concat(f)]||w[f]||p[f]||a;return r?n.createElement(m,s(s({ref:t},u),{},{components:r})):n.createElement(m,s({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=w;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}w.displayName="MDXCreateElement"},115:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return f},default:function(){return h},frontMatter:function(){return w},metadata:function(){return m},toc:function(){return x}});var n=r(3905),o=Object.defineProperty,a=Object.defineProperties,s=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,p=(e,t)=>{for(var r in t||(t={}))c.call(t,r)&&u(e,r,t[r]);if(i)for(var r of i(t))l.call(t,r)&&u(e,r,t[r]);return e};const w={id:"browser-contexts",title:"Browser Contexts"},f=void 0,m={unversionedId:"browser-contexts",id:"browser-contexts",title:"Browser Contexts",description:"- Browser context",source:"@site/docs/browser-contexts.mdx",sourceDirName:".",slug:"/browser-contexts",permalink:"/docs/next/browser-contexts",tags:[],version:"current",frontMatter:{id:"browser-contexts",title:"Browser Contexts"},sidebar:"docs",previous:{title:"Browsers",permalink:"/docs/next/browsers"},next:{title:"Chrome Extensions",permalink:"/docs/next/chrome-extensions"}},d={},x=[{value:"Browser context",id:"browser-context",level:2},{value:"Multiple contexts",id:"multiple-contexts",level:2},{value:"API reference",id:"api-reference",level:3}],b={toc:x};function h(e){var t,r=e,{components:o}=r,u=((e,t)=>{var r={};for(var n in e)c.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&l.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=p(p({},b),u),a(t,s({components:o,mdxType:"MDXLayout"}))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",p({parentName:"li"},{href:"#browser-context"}),"Browser context")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",p({parentName:"li"},{href:"#multiple-contexts"}),"Multiple contexts"))),(0,n.kt)("h2",p({},{id:"browser-context"}),"Browser context"),(0,n.kt)("p",null,"A ",(0,n.kt)("a",p({parentName:"p"},{href:"/docs/next/api/class-browsercontext",title:"BrowserContext"}),"BrowserContext")," is an isolated incognito-alike session within a browser instance. Browser contexts are fast and cheap to create. We recommend running each test scenario in its own new Browser context, so that the browser state is isolated between the tests. If you are using ",(0,n.kt)("a",p({parentName:"p"},{href:"/docs/next/intro"}),"Playwright Test"),", this happens out of the box for each test. Otherwise, you can create browser contexts manually:"),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-js"}),"const browser = await chromium.launch();\nconst context = await browser.newContext();\nconst page = await context.newPage();\n")),(0,n.kt)("p",null,"Browser contexts can also be used to emulate multi-page scenarios involving mobile devices, permissions, locale and color scheme."),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-js"}),"const { devices } = require('playwright');\nconst iPhone = devices['iPhone 11 Pro'];\n\nconst context = await browser.newContext({\n  ...iPhone,\n  permissions: ['geolocation'],\n  geolocation: { latitude: 52.52, longitude: 13.39},\n  colorScheme: 'dark',\n  locale: 'de-DE'\n});\nconst page = await context.newPage();\n")),(0,n.kt)("h2",p({},{id:"multiple-contexts"}),"Multiple contexts"),(0,n.kt)("p",null,(0,n.kt)("a",p({parentName:"p"},{href:"/docs/next/browser-contexts"}),"Browser contexts")," are isolated environments on a single browser instance. Playwright can create multiple browser contexts within a single scenario. This is useful when you want to test for multi-user functionality, like chat."),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-js"}),"const { chromium } = require('playwright');\n\n// Create a Chromium browser instance\nconst browser = await chromium.launch();\n\n// Create two isolated browser contexts\nconst userContext = await browser.newContext();\nconst adminContext = await browser.newContext();\n\n// Create pages and interact with contexts independently\n")),(0,n.kt)("h3",p({},{id:"api-reference"}),"API reference"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",p({parentName:"li"},{href:"/docs/next/api/class-browsercontext",title:"BrowserContext"}),"BrowserContext")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",p({parentName:"li"},{href:"/docs/next/api/class-browser#browser-new-context"}),"browser.newContext([options])")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",p({parentName:"li"},{href:"/docs/next/api/class-browsercontext#browser-context-add-cookies"}),"browserContext.addCookies(cookies)"))))}h.isMDXComponent=!0}}]);