"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[6904],{3905:function(e,r,t){t.d(r,{Zo:function(){return s},kt:function(){return m}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),p=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},s=function(e){var r=p(e.components);return n.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=p(t),m=o,y=f["".concat(l,".").concat(m)]||f[m]||u[m]||a;return t?n.createElement(y,i(i({ref:r},s),{},{components:t})):n.createElement(y,i({ref:r},s))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=f;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},1025:function(e,r,t){t.r(r),t.d(r,{assets:function(){return d},contentTitle:function(){return m},default:function(){return b},frontMatter:function(){return f},metadata:function(){return y},toc:function(){return v}});var n=t(3905),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,s=(e,r,t)=>r in e?o(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,u=(e,r)=>{for(var t in r||(r={}))l.call(r,t)&&s(e,t,r[t]);if(c)for(var t of c(r))p.call(r,t)&&s(e,t,r[t]);return e};const f={id:"class-timeouterror",title:"TimeoutError"},m=void 0,y={unversionedId:"api/class-timeouterror",id:"version-1.19/api/class-timeouterror",title:"TimeoutError",description:"* extends: [PlaywrightException]",source:"@site/versioned_docs/version-1.19/api/class-timeouterror.mdx",sourceDirName:"api",slug:"/api/class-timeouterror",permalink:"/java/docs/api/class-timeouterror",tags:[],version:"1.19",frontMatter:{id:"class-timeouterror",title:"TimeoutError"},sidebar:"version-1.19/api",previous:{title:"Selectors",permalink:"/java/docs/api/class-selectors"},next:{title:"Touchscreen",permalink:"/java/docs/api/class-touchscreen"}},d={},v=[],g={toc:v};function b(e){var r,t=e,{components:o}=t,s=((e,r)=>{var t={};for(var n in e)l.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&c)for(var n of c(e))r.indexOf(n)<0&&p.call(e,n)&&(t[n]=e[n]);return t})(t,["components"]);return(0,n.kt)("wrapper",(r=u(u({},g),s),a(r,i({components:o,mdxType:"MDXLayout"}))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"extends: ",(0,n.kt)("a",u({parentName:"li"},{href:"/java/docs/api/class-playwrightexception",title:"PlaywrightException"}),"PlaywrightException"))),(0,n.kt)("p",null,"TimeoutError is emitted whenever certain operations are terminated due to timeout, e.g. ",(0,n.kt)("a",u({parentName:"p"},{href:"/java/docs/api/class-locator#locator-wait-for"}),"Locator.waitFor([options])")," or ",(0,n.kt)("a",u({parentName:"p"},{href:"/java/docs/api/class-browsertype#browser-type-launch"}),"BrowserType.launch([options])"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-java"}),'package org.example;\n\nimport com.microsoft.playwright.*;\n\npublic class TimeoutErrorExample {\n  public static void main(String[] args) {\n    try (Playwright playwright = Playwright.create()) {\n      Browser browser = playwright.firefox().launch();\n      BrowserContext context = browser.newContext();\n      Page page = context.newPage();\n      try {\n        page.click("text=Example", new Page.ClickOptions().setTimeout(100));\n      } catch (TimeoutError e) {\n        System.out.println("Timeout!");\n      }\n    }\n  }\n}\n')))}b.isMDXComponent=!0}}]);