"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[7481],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return h}});var i=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function n(e,t){if(null==e)return{};var r,i,a=function(e,t){if(null==e)return{};var r,i,a={},l=Object.keys(e);for(i=0;i<l.length;i++)r=l[i],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)r=l[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=i.createContext({}),c=function(e){var t=i.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=n(e,["components","mdxType","originalType","parentName"]),u=c(r),h=a,d=u["".concat(s,".").concat(h)]||u[h]||f[h]||l;return r?i.createElement(d,o(o({ref:t},p),{},{components:r})):i.createElement(d,o({ref:t},p))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=u;var n={};for(var s in t)hasOwnProperty.call(t,s)&&(n[s]=t[s]);n.originalType=e,n.mdxType="string"==typeof e?e:a,o[1]=n;for(var c=2;c<l;c++)o[c]=r[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,r)}u.displayName="MDXCreateElement"},4906:function(e,t,r){r.r(t),r.d(t,{assets:function(){return m},contentTitle:function(){return h},default:function(){return g},frontMatter:function(){return u},metadata:function(){return d},toc:function(){return k}});var i=r(3905),a=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,n=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,f=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&p(e,r,t[r]);if(n)for(var r of n(t))c.call(t,r)&&p(e,r,t[r]);return e};const u={id:"class-filechooser",title:"FileChooser"},h=void 0,d={unversionedId:"api/class-filechooser",id:"api/class-filechooser",title:"FileChooser",description:"FileChooser] objects are dispatched by the page in the [page.on('filechooser') event.",source:"@site/docs/api/class-filechooser.mdx",sourceDirName:"api",slug:"/api/class-filechooser",permalink:"/docs/next/api/class-filechooser",draft:!1,tags:[],version:"current",frontMatter:{id:"class-filechooser",title:"FileChooser"},sidebar:"api",previous:{title:"ElementHandle",permalink:"/docs/next/api/class-elementhandle"},next:{title:"Frame",permalink:"/docs/next/api/class-frame"}},m={},k=[{value:"fileChooser.element()",id:"file-chooser-element",level:2},{value:"fileChooser.isMultiple()",id:"file-chooser-is-multiple",level:2},{value:"fileChooser.page()",id:"file-chooser-page",level:2},{value:"fileChooser.setFiles(files, options)",id:"file-chooser-set-files",level:2}],b={toc:k};function g(e){var t,r=e,{components:a}=r,p=((e,t)=>{var r={};for(var i in e)s.call(e,i)&&t.indexOf(i)<0&&(r[i]=e[i]);if(null!=e&&n)for(var i of n(e))t.indexOf(i)<0&&c.call(e,i)&&(r[i]=e[i]);return r})(r,["components"]);return(0,i.kt)("wrapper",(t=f(f({},b),p),l(t,o({components:a,mdxType:"MDXLayout"}))),(0,i.kt)("p",null,(0,i.kt)("a",f({parentName:"p"},{href:"/docs/next/api/class-filechooser",title:"FileChooser"}),"FileChooser")," objects are dispatched by the page in the ",(0,i.kt)("a",f({parentName:"p"},{href:"/docs/next/api/class-page#page-event-file-chooser"}),"page.on('filechooser')")," event."),(0,i.kt)("pre",null,(0,i.kt)("code",f({parentName:"pre"},{className:"language-js"}),"// Note that Promise.all prevents a race condition\n// between clicking and waiting for the file chooser.\nconst [fileChooser] = await Promise.all([\n  // It is important to call waitForEvent before click to set up waiting.\n  page.waitForEvent('filechooser'),\n  // Opens the file chooser.\n  page.locator('text=Upload').click(),\n]);\nawait fileChooser.setFiles('myfile.pdf');\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",f({parentName:"li"},{href:"/docs/next/api/class-filechooser#file-chooser-element"}),"fileChooser.element()")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",f({parentName:"li"},{href:"/docs/next/api/class-filechooser#file-chooser-is-multiple"}),"fileChooser.isMultiple()")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",f({parentName:"li"},{href:"/docs/next/api/class-filechooser#file-chooser-page"}),"fileChooser.page()")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",f({parentName:"li"},{href:"/docs/next/api/class-filechooser#file-chooser-set-files"}),"fileChooser.setFiles(files[, options])"))),(0,i.kt)("h2",f({},{id:"file-chooser-element"}),"fileChooser.element()"),(0,i.kt)("font",{size:"2",style:{position:"relative",top:"-20px"}},"Added in: v1.8"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"returns:",(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"file-chooser-element-return"})," ","<",(0,i.kt)("a",f({parentName:"li"},{href:"/docs/next/api/class-elementhandle",title:"ElementHandle"}),"ElementHandle"),">",(0,i.kt)("a",{href:"#file-chooser-element-return",class:"list-anchor"},"#"))),(0,i.kt)("p",null,"Returns input element associated with this file chooser."),(0,i.kt)("h2",f({},{id:"file-chooser-is-multiple"}),"fileChooser.isMultiple()"),(0,i.kt)("font",{size:"2",style:{position:"relative",top:"-20px"}},"Added in: v1.8"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"returns:",(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"file-chooser-is-multiple-return"})," ","<",(0,i.kt)("a",f({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type",title:"Boolean"}),"boolean"),">",(0,i.kt)("a",{href:"#file-chooser-is-multiple-return",class:"list-anchor"},"#"))),(0,i.kt)("p",null,"Returns whether this file chooser accepts multiple files."),(0,i.kt)("h2",f({},{id:"file-chooser-page"}),"fileChooser.page()"),(0,i.kt)("font",{size:"2",style:{position:"relative",top:"-20px"}},"Added in: v1.8"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"returns:",(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"file-chooser-page-return"})," ","<",(0,i.kt)("a",f({parentName:"li"},{href:"/docs/next/api/class-page",title:"Page"}),"Page"),">",(0,i.kt)("a",{href:"#file-chooser-page-return",class:"list-anchor"},"#"))),(0,i.kt)("p",null,"Returns page this file chooser belongs to."),(0,i.kt)("h2",f({},{id:"file-chooser-set-files"}),"fileChooser.setFiles(files","[, options]",")"),(0,i.kt)("font",{size:"2",style:{position:"relative",top:"-20px"}},"Added in: v1.8"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"files"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"file-chooser-set-files-option-files"})," ","<",(0,i.kt)("a",f({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),"|",(0,i.kt)("a",f({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",title:"Array"}),"Array"),"<",(0,i.kt)("a",f({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),">|",(0,i.kt)("a",f({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"}),"Object"),"|",(0,i.kt)("a",f({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",title:"Array"}),"Array"),"<",(0,i.kt)("a",f({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"}),"Object"),">",">",(0,i.kt)("a",{href:"#file-chooser-set-files-option-files",class:"list-anchor"},"#"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"name")," ","<",(0,i.kt)("a",f({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),">"," File name"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"mimeType")," ","<",(0,i.kt)("a",f({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),">"," File type"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"buffer")," ","<",(0,i.kt)("a",f({parentName:"li"},{href:"https://nodejs.org/api/buffer.html#buffer_class_buffer",title:"Buffer"}),"Buffer"),">"," File content"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"options?")," ","<",(0,i.kt)("a",f({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"}),"Object"),">",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"noWaitAfter?"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"file-chooser-set-files-option-no-wait-after"})," ","<",(0,i.kt)("a",f({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type",title:"Boolean"}),"boolean"),">"," Actions that initiate navigations are waiting for these navigations to happen and for pages to start loading. You can opt out of waiting via setting this flag. You would only need this option in the exceptional cases such as navigating to inaccessible pages. Defaults to ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),".",(0,i.kt)("a",{href:"#file-chooser-set-files-option-no-wait-after",class:"list-anchor"},"#")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"timeout?"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"file-chooser-set-files-option-timeout"})," ","<",(0,i.kt)("a",f({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"}),"number"),">"," Maximum time in milliseconds, defaults to 30 seconds, pass ",(0,i.kt)("inlineCode",{parentName:"li"},"0")," to disable timeout. The default value can be changed by using the ",(0,i.kt)("a",f({parentName:"li"},{href:"/docs/next/api/class-browsercontext#browser-context-set-default-timeout"}),"browserContext.setDefaultTimeout(timeout)")," or ",(0,i.kt)("a",f({parentName:"li"},{href:"/docs/next/api/class-page#page-set-default-timeout"}),"page.setDefaultTimeout(timeout)")," methods.",(0,i.kt)("a",{href:"#file-chooser-set-files-option-timeout",class:"list-anchor"},"#")))),(0,i.kt)("li",{parentName:"ul"},"returns:",(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"file-chooser-set-files-return"})," ","<",(0,i.kt)("a",f({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),"<",(0,i.kt)("a",f({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"}),"void"),">",">",(0,i.kt)("a",{href:"#file-chooser-set-files-return",class:"list-anchor"},"#"))),(0,i.kt)("p",null,"Sets the value of the file input this chooser is associated with. If some of the ",(0,i.kt)("inlineCode",{parentName:"p"},"filePaths")," are relative paths, then they are resolved relative to the current working directory. For empty array, clears the selected files."))}g.isMDXComponent=!0}}]);