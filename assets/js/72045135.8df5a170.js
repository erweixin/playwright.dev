"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[760],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(r),d=a,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7219:function(e,t,r){r.r(t),r.d(t,{assets:function(){return g},contentTitle:function(){return d},default:function(){return v},frontMatter:function(){return m},metadata:function(){return f},toc:function(){return h}});var n=r(3905),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))l.call(t,r)&&p(e,r,t[r]);if(s)for(var r of s(t))c.call(t,r)&&p(e,r,t[r]);return e};const m={id:"class-selectors",title:"Selectors"},d=void 0,f={unversionedId:"api/class-selectors",id:"api/class-selectors",title:"Selectors",description:"Selectors can be used to install custom selector engines. See Working with selectors for more information.",source:"@site/docs/api/class-selectors.mdx",sourceDirName:"api",slug:"/api/class-selectors",permalink:"/docs/next/api/class-selectors",draft:!1,tags:[],version:"current",frontMatter:{id:"class-selectors",title:"Selectors"},sidebar:"api",previous:{title:"Route",permalink:"/docs/next/api/class-route"},next:{title:"Touchscreen",permalink:"/docs/next/api/class-touchscreen"}},g={},h=[{value:"selectors.register(name, script, options)",id:"selectors-register",level:2}],b={toc:h};function v(e){var t,r=e,{components:a}=r,p=((e,t)=>{var r={};for(var n in e)l.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&s)for(var n of s(e))t.indexOf(n)<0&&c.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=u(u({},b),p),o(t,i({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"Selectors can be used to install custom selector engines. See ",(0,n.kt)("a",u({parentName:"p"},{href:"/docs/next/selectors"}),"Working with selectors")," for more information."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"/docs/next/api/class-selectors#selectors-register"}),"selectors.register(name, script[, options])"))),(0,n.kt)("h2",u({},{id:"selectors-register"}),"selectors.register(name, script","[, options]",")"),(0,n.kt)("font",{size:"2",style:{position:"relative",top:"-20px"}},"Added in: v1.8"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"name"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"selectors-register-option-name"})," ","<",(0,n.kt)("a",u({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),">"," Name that is used in selectors as a prefix, e.g. ",(0,n.kt)("inlineCode",{parentName:"li"},"{name: 'foo'}")," enables ",(0,n.kt)("inlineCode",{parentName:"li"},"foo=myselectorbody")," selectors. May only contain ",(0,n.kt)("inlineCode",{parentName:"li"},"[a-zA-Z0-9_]")," characters.",(0,n.kt)("a",{href:"#selectors-register-option-name",class:"list-anchor"},"#")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"script"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"selectors-register-option-script"})," ","<",(0,n.kt)("a",u({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function",title:"Function"}),"function"),"|",(0,n.kt)("a",u({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),"|",(0,n.kt)("a",u({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"}),"Object"),">"," Script that evaluates to a selector engine instance.",(0,n.kt)("a",{href:"#selectors-register-option-script",class:"list-anchor"},"#"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"path?")," ","<",(0,n.kt)("a",u({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),">"," Path to the JavaScript file. If ",(0,n.kt)("inlineCode",{parentName:"li"},"path")," is a relative path, then it is resolved relative to the current working directory. Optional."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"content?")," ","<",(0,n.kt)("a",u({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),">"," Raw script content. Optional."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"options?")," ","<",(0,n.kt)("a",u({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"}),"Object"),">",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"contentScript?"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"selectors-register-option-content-script"})," ","<",(0,n.kt)("a",u({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type",title:"Boolean"}),"boolean"),">"," Whether to run this selector engine in isolated JavaScript environment. This environment has access to the same DOM, but not any JavaScript objects from the frame's scripts. Defaults to ",(0,n.kt)("inlineCode",{parentName:"li"},"false"),". Note that running as a content script is not guaranteed when this engine is used together with other registered engines.",(0,n.kt)("a",{href:"#selectors-register-option-content-script",class:"list-anchor"},"#")))),(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"selectors-register-return"})," ","<",(0,n.kt)("a",u({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),"<",(0,n.kt)("a",u({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"}),"void"),">",">",(0,n.kt)("a",{href:"#selectors-register-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"An example of registering selector engine that queries elements based on a tag name:"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-js"}),"const { selectors, firefox } = require('playwright');  // Or 'chromium' or 'webkit'.\n\n(async () => {\n  // Must be a function that evaluates to a selector engine instance.\n  const createTagNameEngine = () => ({\n    // Returns the first element matching given selector in the root's subtree.\n    query(root, selector) {\n      return root.querySelector(selector);\n    },\n\n    // Returns all elements matching given selector in the root's subtree.\n    queryAll(root, selector) {\n      return Array.from(root.querySelectorAll(selector));\n    }\n  });\n\n  // Register the engine. Selectors will be prefixed with \"tag=\".\n  await selectors.register('tag', createTagNameEngine);\n\n  const browser = await firefox.launch();\n  const page = await browser.newPage();\n  await page.setContent(`<div><button>Click me</button></div>`);\n\n  // Use the selector prefixed with its name.\n  const button = page.locator('tag=button');\n  // Combine it with other selector engines.\n  await page.locator('tag=div >> text=\"Click me\"').click();\n  // Can use it in any methods supporting selectors.\n  const buttonCount = await page.locator('tag=button').count();\n\n  await browser.close();\n})();\n")))}v.isMDXComponent=!0}}]);