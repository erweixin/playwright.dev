"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[6661],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},f=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=c(n),h=r,d=f["".concat(s,".").concat(h)]||f[h]||p[h]||o;return n?i.createElement(d,a(a({ref:t},u),{},{components:n})):i.createElement(d,a({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var c=2;c<o;c++)a[c]=n[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}f.displayName="MDXCreateElement"},8215:function(e,t,n){var i=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return i.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},5064:function(e,t,n){n.d(t,{Z:function(){return p}});var i=n(7294),r=n(9443);var o=function(){var e=(0,i.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},a=n(6010),l="tabItem_1uMI",s="tabItemActive_2DSg";var c=37,u=39;var p=function(e){var t=e.lazy,n=e.block,r=e.defaultValue,p=e.values,f=e.groupId,h=e.className,d=o(),m=d.tabGroupChoices,k=d.setTabGroupChoices,g=(0,i.useState)(r),v=g[0],b=g[1],y=i.Children.toArray(e.children),N=[];if(null!=f){var C=m[f];null!=C&&C!==v&&p.some((function(e){return e.value===C}))&&b(C)}var w=function(e){var t=e.currentTarget,n=N.indexOf(t),i=p[n].value;b(i),null!=f&&(k(f,i),setTimeout((function(){var e,n,i,r,o,a,l,c;(e=t.getBoundingClientRect(),n=e.top,i=e.left,r=e.bottom,o=e.right,a=window,l=a.innerHeight,c=a.innerWidth,n>=0&&o<=c&&r<=l&&i>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},F=function(e){var t,n;switch(e.keyCode){case u:var i=N.indexOf(e.target)+1;n=N[i]||N[0];break;case c:var r=N.indexOf(e.target)-1;n=N[r]||N[N.length-1]}null==(t=n)||t.focus()};return i.createElement("div",{className:"tabs-container"},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},h)},p.map((function(e){var t=e.value,n=e.label;return i.createElement("li",{role:"tab",tabIndex:v===t?0:-1,"aria-selected":v===t,className:(0,a.Z)("tabs__item",l,{"tabs__item--active":v===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:F,onFocus:w,onClick:w},n)}))),t?(0,i.cloneElement)(y.filter((function(e){return e.props.value===v}))[0],{className:"margin-vert--md"}):i.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==v})}))))}},9443:function(e,t,n){var i=(0,n(7294).createContext)(void 0);t.Z=i},1194:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return c},default:function(){return p}});var i=n(2122),r=n(9756),o=(n(7294),n(3905)),a=(n(5064),n(8215),{id:"class-filechooser",title:"FileChooser"}),l=void 0,s={unversionedId:"api/class-filechooser",id:"version-1.16/api/class-filechooser",isDocsHomePage:!1,title:"FileChooser",description:"FileChooser] objects are dispatched by the page in the [event Page.FileChooser event.",source:"@site/versioned_docs/version-1.16/api/class-filechooser.mdx",sourceDirName:"api",slug:"/api/class-filechooser",permalink:"/dotnet/docs/1.16/api/class-filechooser",version:"1.16",frontMatter:{id:"class-filechooser",title:"FileChooser"},sidebar:"version-1.16/api",previous:{title:"ElementHandle",permalink:"/dotnet/docs/1.16/api/class-elementhandle"},next:{title:"Frame",permalink:"/dotnet/docs/1.16/api/class-frame"}},c=[{value:"FileChooser.Element",id:"file-chooser-element",children:[]},{value:"FileChooser.IsMultiple",id:"file-chooser-is-multiple",children:[]},{value:"FileChooser.Page",id:"file-chooser-page",children:[]},{value:"FileChooser.SetFilesAsync(files, options)",id:"file-chooser-set-files",children:[]}],u={toc:c};function p(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/dotnet/docs/1.16/api/class-filechooser",title:"FileChooser"},"FileChooser")," objects are dispatched by the page in the ",(0,o.kt)("a",{parentName:"p",href:"/dotnet/docs/1.16/api/class-page#page-event-file-chooser"},"event Page.FileChooser")," event."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'var fileChooser = await page.RunAndWaitForFileChooserAsync(async () =>\n{\n    await page.ClickAsync("upload");\n});\nawait fileChooser.SetFilesAsync("temp.txt");\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/dotnet/docs/1.16/api/class-filechooser#file-chooser-element"},"FileChooser.Element")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/dotnet/docs/1.16/api/class-filechooser#file-chooser-is-multiple"},"FileChooser.IsMultiple")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/dotnet/docs/1.16/api/class-filechooser#file-chooser-page"},"FileChooser.Page")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/dotnet/docs/1.16/api/class-filechooser#file-chooser-set-files"},"FileChooser.SetFilesAsync(files, options)"))),(0,o.kt)("h2",{id:"file-chooser-element"},"FileChooser.Element"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"returns:",(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"file-chooser-element-return"})," ","<",(0,o.kt)("a",{parentName:"li",href:"/dotnet/docs/1.16/api/class-elementhandle",title:"ElementHandle"},"ElementHandle"),">",(0,o.kt)("a",{href:"#file-chooser-element-return",class:"list-anchor"},"#"))),(0,o.kt)("p",null,"Returns input element associated with this file chooser."),(0,o.kt)("h2",{id:"file-chooser-is-multiple"},"FileChooser.IsMultiple"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"returns:",(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"file-chooser-is-multiple-return"})," ","<",(0,o.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/dotnet/api/system.boolean",title:"bool"},"bool"),">",(0,o.kt)("a",{href:"#file-chooser-is-multiple-return",class:"list-anchor"},"#"))),(0,o.kt)("p",null,"Returns whether this file chooser accepts multiple files."),(0,o.kt)("h2",{id:"file-chooser-page"},"FileChooser.Page"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"returns:",(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"file-chooser-page-return"})," ","<",(0,o.kt)("a",{parentName:"li",href:"/dotnet/docs/1.16/api/class-page",title:"Page"},"Page"),">",(0,o.kt)("a",{href:"#file-chooser-page-return",class:"list-anchor"},"#"))),(0,o.kt)("p",null,"Returns page this file chooser belongs to."),(0,o.kt)("h2",{id:"file-chooser-set-files"},"FileChooser.SetFilesAsync(files, options)"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"files"),(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"file-chooser-set-files-option-files"})," ","<",(0,o.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/dotnet/api/system.string",title:"string"},"string"),"|",(0,o.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/dotnet/api/system.collections.ienumerable",title:"IEnumerable"},"IEnumerable"),"<",(0,o.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/dotnet/api/system.string",title:"string"},"string"),">|",(0,o.kt)("inlineCode",{parentName:"li"},"FilePayload"),"|",(0,o.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/dotnet/api/system.collections.ienumerable",title:"IEnumerable"},"IEnumerable"),"<",(0,o.kt)("inlineCode",{parentName:"li"},"FilePayload"),">",">",(0,o.kt)("a",{href:"#file-chooser-set-files-option-files",class:"list-anchor"},"#"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Name")," ","<",(0,o.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/dotnet/api/system.string",title:"string"},"string"),">"," File name"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"MimeType")," ","<",(0,o.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/dotnet/api/system.string",title:"string"},"string"),">"," File type"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Buffer")," ","<",(0,o.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/dotnet/api/system.byte",title:"byte"},"byte"),"[","]",">"," File content"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"options")," ","<",(0,o.kt)("inlineCode",{parentName:"li"},"FileChooserSetFilesOptions?"),">",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"NoWaitAfter"),(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"file-chooser-set-files-option-no-wait-after"})," ","<",(0,o.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/dotnet/api/system.boolean",title:"bool"},"bool"),"?",">"," Actions that initiate navigations are waiting for these navigations to happen and for pages to start loading. You can opt out of waiting via setting this flag. You would only need this option in the exceptional cases such as navigating to inaccessible pages. Defaults to ",(0,o.kt)("inlineCode",{parentName:"li"},"false"),".",(0,o.kt)("a",{href:"#file-chooser-set-files-option-no-wait-after",class:"list-anchor"},"#")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Timeout"),(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"file-chooser-set-files-option-timeout"})," ","<",(0,o.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/dotnet/api/system.double",title:"double"},"double"),"?",">"," Maximum time in milliseconds, defaults to 30 seconds, pass ",(0,o.kt)("inlineCode",{parentName:"li"},"0")," to disable timeout. The default value can be changed by using the ",(0,o.kt)("a",{parentName:"li",href:"/dotnet/docs/1.16/api/class-browsercontext#browser-context-set-default-timeout"},"BrowserContext.SetDefaultTimeout(timeout)")," or ",(0,o.kt)("a",{parentName:"li",href:"/dotnet/docs/1.16/api/class-page#page-set-default-timeout"},"Page.SetDefaultTimeout(timeout)")," methods.",(0,o.kt)("a",{href:"#file-chooser-set-files-option-timeout",class:"list-anchor"},"#")))),(0,o.kt)("li",{parentName:"ul"},"returns:",(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"file-chooser-set-files-return"})," ","<",(0,o.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/void",title:"void"},"void"),">",(0,o.kt)("a",{href:"#file-chooser-set-files-return",class:"list-anchor"},"#"))),(0,o.kt)("p",null,"Sets the value of the file input this chooser is associated with. If some of the ",(0,o.kt)("inlineCode",{parentName:"p"},"filePaths")," are relative paths, then they are resolved relative to the the current working directory. For empty array, clears the selected files."))}p.isMDXComponent=!0},6010:function(e,t,n){function i(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=i(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=i(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{Z:function(){return r}})}}]);