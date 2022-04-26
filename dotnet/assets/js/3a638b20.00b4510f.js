"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[3378],{3905:function(e,t,i){i.d(t,{Zo:function(){return p},kt:function(){return h}});var o=i(67294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function n(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,o)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?n(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,o,r=function(e,t){if(null==e)return{};var i,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)i=n[o],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)i=n[o],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var i=e.components,r=e.mdxType,n=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=c(i),h=r,m=f["".concat(s,".").concat(h)]||f[h]||u[h]||n;return i?o.createElement(m,a(a({ref:t},p),{},{components:i})):o.createElement(m,a({ref:t},p))}));function h(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=i.length,a=new Array(n);a[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var c=2;c<n;c++)a[c]=i[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,i)}f.displayName="MDXCreateElement"},25118:function(e,t,i){i.r(t),i.d(t,{assets:function(){return d},contentTitle:function(){return h},default:function(){return y},frontMatter:function(){return f},metadata:function(){return m},toc:function(){return k}});var o=i(3905),r=Object.defineProperty,n=Object.defineProperties,a=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,t,i)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,u=(e,t)=>{for(var i in t||(t={}))s.call(t,i)&&p(e,i,t[i]);if(l)for(var i of l(t))c.call(t,i)&&p(e,i,t[i]);return e};const f={id:"class-filechooser",title:"FileChooser"},h=void 0,m={unversionedId:"api/class-filechooser",id:"version-1.20/api/class-filechooser",title:"FileChooser",description:"FileChooser] objects are dispatched by the page in the [event Page.FileChooser event.",source:"@site/versioned_docs/version-1.20/api/class-filechooser.mdx",sourceDirName:"api",slug:"/api/class-filechooser",permalink:"/dotnet/docs/1.20/api/class-filechooser",tags:[],version:"1.20",frontMatter:{id:"class-filechooser",title:"FileChooser"},sidebar:"api",previous:{title:"ElementHandle",permalink:"/dotnet/docs/1.20/api/class-elementhandle"},next:{title:"Frame",permalink:"/dotnet/docs/1.20/api/class-frame"}},d={},k=[{value:"FileChooser.Element",id:"file-chooser-element",level:2},{value:"FileChooser.IsMultiple",id:"file-chooser-is-multiple",level:2},{value:"FileChooser.Page",id:"file-chooser-page",level:2},{value:"FileChooser.SetFilesAsync(files, options)",id:"file-chooser-set-files",level:2}],g={toc:k};function y(e){var t,i=e,{components:r}=i,p=((e,t)=>{var i={};for(var o in e)s.call(e,o)&&t.indexOf(o)<0&&(i[o]=e[o]);if(null!=e&&l)for(var o of l(e))t.indexOf(o)<0&&c.call(e,o)&&(i[o]=e[o]);return i})(i,["components"]);return(0,o.kt)("wrapper",(t=u(u({},g),p),n(t,a({components:r,mdxType:"MDXLayout"}))),(0,o.kt)("p",null,(0,o.kt)("a",u({parentName:"p"},{href:"/dotnet/docs/1.20/api/class-filechooser",title:"FileChooser"}),"FileChooser")," objects are dispatched by the page in the ",(0,o.kt)("a",u({parentName:"p"},{href:"/dotnet/docs/1.20/api/class-page#page-event-file-chooser"}),"event Page.FileChooser")," event."),(0,o.kt)("pre",null,(0,o.kt)("code",u({parentName:"pre"},{className:"language-csharp"}),'var fileChooser = await page.RunAndWaitForFileChooserAsync(async () =>\n{\n    await page.ClickAsync("upload");\n});\nawait fileChooser.SetFilesAsync("temp.txt");\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",u({parentName:"li"},{href:"/dotnet/docs/1.20/api/class-filechooser#file-chooser-element"}),"FileChooser.Element")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",u({parentName:"li"},{href:"/dotnet/docs/1.20/api/class-filechooser#file-chooser-is-multiple"}),"FileChooser.IsMultiple")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",u({parentName:"li"},{href:"/dotnet/docs/1.20/api/class-filechooser#file-chooser-page"}),"FileChooser.Page")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",u({parentName:"li"},{href:"/dotnet/docs/1.20/api/class-filechooser#file-chooser-set-files"}),"FileChooser.SetFilesAsync(files, options)"))),(0,o.kt)("h2",u({},{id:"file-chooser-element"}),"FileChooser.Element"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"returns:",(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"file-chooser-element-return"})," ","<",(0,o.kt)("a",u({parentName:"li"},{href:"/dotnet/docs/1.20/api/class-elementhandle",title:"ElementHandle"}),"ElementHandle"),">",(0,o.kt)("a",{href:"#file-chooser-element-return",class:"list-anchor"},"#"))),(0,o.kt)("p",null,"Returns input element associated with this file chooser."),(0,o.kt)("h2",u({},{id:"file-chooser-is-multiple"}),"FileChooser.IsMultiple"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"returns:",(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"file-chooser-is-multiple-return"})," ","<",(0,o.kt)("a",u({parentName:"li"},{href:"https://docs.microsoft.com/en-us/dotnet/api/system.boolean",title:"bool"}),"bool"),">",(0,o.kt)("a",{href:"#file-chooser-is-multiple-return",class:"list-anchor"},"#"))),(0,o.kt)("p",null,"Returns whether this file chooser accepts multiple files."),(0,o.kt)("h2",u({},{id:"file-chooser-page"}),"FileChooser.Page"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"returns:",(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"file-chooser-page-return"})," ","<",(0,o.kt)("a",u({parentName:"li"},{href:"/dotnet/docs/1.20/api/class-page",title:"Page"}),"Page"),">",(0,o.kt)("a",{href:"#file-chooser-page-return",class:"list-anchor"},"#"))),(0,o.kt)("p",null,"Returns page this file chooser belongs to."),(0,o.kt)("h2",u({},{id:"file-chooser-set-files"}),"FileChooser.SetFilesAsync(files, options)"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"files"),(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"file-chooser-set-files-option-files"})," ","<",(0,o.kt)("a",u({parentName:"li"},{href:"https://docs.microsoft.com/en-us/dotnet/api/system.string",title:"string"}),"string"),"|",(0,o.kt)("a",u({parentName:"li"},{href:"https://docs.microsoft.com/en-us/dotnet/api/system.collections.ienumerable",title:"IEnumerable"}),"IEnumerable"),"<",(0,o.kt)("a",u({parentName:"li"},{href:"https://docs.microsoft.com/en-us/dotnet/api/system.string",title:"string"}),"string"),">|",(0,o.kt)("inlineCode",{parentName:"li"},"FilePayload"),"|",(0,o.kt)("a",u({parentName:"li"},{href:"https://docs.microsoft.com/en-us/dotnet/api/system.collections.ienumerable",title:"IEnumerable"}),"IEnumerable"),"<",(0,o.kt)("inlineCode",{parentName:"li"},"FilePayload"),">",">",(0,o.kt)("a",{href:"#file-chooser-set-files-option-files",class:"list-anchor"},"#"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Name")," ","<",(0,o.kt)("a",u({parentName:"li"},{href:"https://docs.microsoft.com/en-us/dotnet/api/system.string",title:"string"}),"string"),">"," File name"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"MimeType")," ","<",(0,o.kt)("a",u({parentName:"li"},{href:"https://docs.microsoft.com/en-us/dotnet/api/system.string",title:"string"}),"string"),">"," File type"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Buffer")," ","<",(0,o.kt)("a",u({parentName:"li"},{href:"https://docs.microsoft.com/en-us/dotnet/api/system.byte",title:"byte"}),"byte"),"[","]",">"," File content"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"options")," ","<",(0,o.kt)("inlineCode",{parentName:"li"},"FileChooserSetFilesOptions?"),">",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"NoWaitAfter"),(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"file-chooser-set-files-option-no-wait-after"})," ","<",(0,o.kt)("a",u({parentName:"li"},{href:"https://docs.microsoft.com/en-us/dotnet/api/system.boolean",title:"bool"}),"bool"),"?",">"," Actions that initiate navigations are waiting for these navigations to happen and for pages to start loading. You can opt out of waiting via setting this flag. You would only need this option in the exceptional cases such as navigating to inaccessible pages. Defaults to ",(0,o.kt)("inlineCode",{parentName:"li"},"false"),".",(0,o.kt)("a",{href:"#file-chooser-set-files-option-no-wait-after",class:"list-anchor"},"#")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Timeout"),(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"file-chooser-set-files-option-timeout"})," ","<",(0,o.kt)("a",u({parentName:"li"},{href:"https://docs.microsoft.com/en-us/dotnet/api/system.double",title:"double"}),"double"),"?",">"," Maximum time in milliseconds, defaults to 30 seconds, pass ",(0,o.kt)("inlineCode",{parentName:"li"},"0")," to disable timeout. The default value can be changed by using the ",(0,o.kt)("a",u({parentName:"li"},{href:"/dotnet/docs/1.20/api/class-browsercontext#browser-context-set-default-timeout"}),"BrowserContext.SetDefaultTimeout(timeout)")," or ",(0,o.kt)("a",u({parentName:"li"},{href:"/dotnet/docs/1.20/api/class-page#page-set-default-timeout"}),"Page.SetDefaultTimeout(timeout)")," methods.",(0,o.kt)("a",{href:"#file-chooser-set-files-option-timeout",class:"list-anchor"},"#")))),(0,o.kt)("li",{parentName:"ul"},"returns:",(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"file-chooser-set-files-return"})," ","<",(0,o.kt)("a",u({parentName:"li"},{href:"https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/void",title:"void"}),"void"),">",(0,o.kt)("a",{href:"#file-chooser-set-files-return",class:"list-anchor"},"#"))),(0,o.kt)("p",null,"Sets the value of the file input this chooser is associated with. If some of the ",(0,o.kt)("inlineCode",{parentName:"p"},"filePaths")," are relative paths, then they are resolved relative to the the current working directory. For empty array, clears the selected files."))}y.isMDXComponent=!0}}]);