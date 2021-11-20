"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[332],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return f}});var i=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,i,r=function(e,t){if(null==e)return{};var a,i,r={},n=Object.keys(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=i.createContext({}),c=function(e){var t=i.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),h=c(a),f=r,d=h["".concat(s,".").concat(f)]||h[f]||p[f]||n;return a?i.createElement(d,l(l({ref:t},u),{},{components:a})):i.createElement(d,l({ref:t},u))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,l=new Array(n);l[0]=h;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var c=2;c<n;c++)l[c]=a[c];return i.createElement.apply(null,l)}return i.createElement.apply(null,a)}h.displayName="MDXCreateElement"},8215:function(e,t,a){var i=a(7294);t.Z=function(e){var t=e.children,a=e.hidden,r=e.className;return i.createElement("div",{role:"tabpanel",hidden:a,className:r},t)}},5064:function(e,t,a){a.d(t,{Z:function(){return p}});var i=a(7294),r=a(9443);var n=function(){var e=(0,i.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=a(6010),o="tabItem_1uMI",s="tabItemActive_2DSg";var c=37,u=39;var p=function(e){var t=e.lazy,a=e.block,r=e.defaultValue,p=e.values,h=e.groupId,f=e.className,d=n(),m=d.tabGroupChoices,v=d.setTabGroupChoices,k=(0,i.useState)(r),g=k[0],b=k[1],y=i.Children.toArray(e.children),N=[];if(null!=h){var C=m[h];null!=C&&C!==g&&p.some((function(e){return e.value===C}))&&b(C)}var j=function(e){var t=e.currentTarget,a=N.indexOf(t),i=p[a].value;b(i),null!=h&&(v(h,i),setTimeout((function(){var e,a,i,r,n,l,o,c;(e=t.getBoundingClientRect(),a=e.top,i=e.left,r=e.bottom,n=e.right,l=window,o=l.innerHeight,c=l.innerWidth,a>=0&&n<=c&&r<=o&&i>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},w=function(e){var t,a;switch(e.keyCode){case u:var i=N.indexOf(e.target)+1;a=N[i]||N[0];break;case c:var r=N.indexOf(e.target)-1;a=N[r]||N[N.length-1]}null==(t=a)||t.focus()};return i.createElement("div",{className:"tabs-container"},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},f)},p.map((function(e){var t=e.value,a=e.label;return i.createElement("li",{role:"tab",tabIndex:g===t?0:-1,"aria-selected":g===t,className:(0,l.Z)("tabs__item",o,{"tabs__item--active":g===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:w,onFocus:j,onClick:j},a)}))),t?(0,i.cloneElement)(y.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):i.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==g})}))))}},9443:function(e,t,a){var i=(0,a(7294).createContext)(void 0);t.Z=i},3872:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return o},metadata:function(){return s},toc:function(){return c},default:function(){return p}});var i=a(2122),r=a(9756),n=(a(7294),a(3905)),l=(a(5064),a(8215),{id:"class-filechooser",title:"FileChooser"}),o=void 0,s={unversionedId:"api/class-filechooser",id:"version-1.17/api/class-filechooser",isDocsHomePage:!1,title:"FileChooser",description:"FileChooser] objects are dispatched by the page in the [Page.onFileChooser(handler) event.",source:"@site/versioned_docs/version-1.17/api/class-filechooser.mdx",sourceDirName:"api",slug:"/api/class-filechooser",permalink:"/java/docs/api/class-filechooser",version:"1.17",frontMatter:{id:"class-filechooser",title:"FileChooser"},sidebar:"version-1.17/api",previous:{title:"ElementHandle",permalink:"/java/docs/api/class-elementhandle"},next:{title:"Frame",permalink:"/java/docs/api/class-frame"}},c=[{value:"FileChooser.element()",id:"file-chooser-element",children:[]},{value:"FileChooser.isMultiple()",id:"file-chooser-is-multiple",children:[]},{value:"FileChooser.page()",id:"file-chooser-page",children:[]},{value:"FileChooser.setFiles(files, options)",id:"file-chooser-set-files",children:[]}],u={toc:c};function p(e){var t=e.components,a=(0,r.Z)(e,["components"]);return(0,n.kt)("wrapper",(0,i.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/java/docs/api/class-filechooser",title:"FileChooser"},"FileChooser")," objects are dispatched by the page in the ",(0,n.kt)("a",{parentName:"p",href:"/java/docs/api/class-page#page-event-file-chooser"},"Page.onFileChooser(handler)")," event."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'FileChooser fileChooser = page.waitForFileChooser(() -> page.click("upload"));\nfileChooser.setFiles(Paths.get("myfile.pdf"));\n')),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/java/docs/api/class-filechooser#file-chooser-element"},"FileChooser.element()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/java/docs/api/class-filechooser#file-chooser-is-multiple"},"FileChooser.isMultiple()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/java/docs/api/class-filechooser#file-chooser-page"},"FileChooser.page()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/java/docs/api/class-filechooser#file-chooser-set-files"},"FileChooser.setFiles(files[, options])"))),(0,n.kt)("h2",{id:"file-chooser-element"},"FileChooser.element()"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"file-chooser-element-return"})," ","<",(0,n.kt)("a",{parentName:"li",href:"/java/docs/api/class-elementhandle",title:"ElementHandle"},"ElementHandle"),">",(0,n.kt)("a",{href:"#file-chooser-element-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"Returns input element associated with this file chooser."),(0,n.kt)("h2",{id:"file-chooser-is-multiple"},"FileChooser.isMultiple()"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"file-chooser-is-multiple-return"})," ","<",(0,n.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",title:"boolean"},"boolean"),">",(0,n.kt)("a",{href:"#file-chooser-is-multiple-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"Returns whether this file chooser accepts multiple files."),(0,n.kt)("h2",{id:"file-chooser-page"},"FileChooser.page()"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"file-chooser-page-return"})," ","<",(0,n.kt)("a",{parentName:"li",href:"/java/docs/api/class-page",title:"Page"},"Page"),">",(0,n.kt)("a",{href:"#file-chooser-page-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"Returns page this file chooser belongs to."),(0,n.kt)("h2",{id:"file-chooser-set-files"},"FileChooser.setFiles(files","[, options]",")"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"files"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"file-chooser-set-files-option-files"})," ","<",(0,n.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/nio/file/Path.html",title:"Path"},"Path"),"|",(0,n.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/nio/file/Path.html",title:"Path"},"Path"),"[","]","|",(0,n.kt)("inlineCode",{parentName:"li"},"FilePayload"),"|",(0,n.kt)("inlineCode",{parentName:"li"},"FilePayload"),"[","]",">",(0,n.kt)("a",{href:"#file-chooser-set-files-option-files",class:"list-anchor"},"#"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"setName")," ","<",(0,n.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"},"String"),">"," File name"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"setMimeType")," ","<",(0,n.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"},"String"),">"," File type"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"setBuffer")," ","<",(0,n.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",title:"byte[]"},"byte","[","]"),">"," File content"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"options")," ","<",(0,n.kt)("inlineCode",{parentName:"li"},"FileChooser.SetFilesOptions"),">",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"setNoWaitAfter"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"file-chooser-set-files-option-no-wait-after"})," ","<",(0,n.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",title:"boolean"},"boolean"),">"," Actions that initiate navigations are waiting for these navigations to happen and for pages to start loading. You can opt out of waiting via setting this flag. You would only need this option in the exceptional cases such as navigating to inaccessible pages. Defaults to ",(0,n.kt)("inlineCode",{parentName:"li"},"false"),".",(0,n.kt)("a",{href:"#file-chooser-set-files-option-no-wait-after",class:"list-anchor"},"#")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"setTimeout"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"file-chooser-set-files-option-timeout"})," ","<",(0,n.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",title:"double"},"double"),">"," Maximum time in milliseconds, defaults to 30 seconds, pass ",(0,n.kt)("inlineCode",{parentName:"li"},"0")," to disable timeout. The default value can be changed by using the ",(0,n.kt)("a",{parentName:"li",href:"/java/docs/api/class-browsercontext#browser-context-set-default-timeout"},"BrowserContext.setDefaultTimeout(timeout)")," or ",(0,n.kt)("a",{parentName:"li",href:"/java/docs/api/class-page#page-set-default-timeout"},"Page.setDefaultTimeout(timeout)")," methods.",(0,n.kt)("a",{href:"#file-chooser-set-files-option-timeout",class:"list-anchor"},"#")))),(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"file-chooser-set-files-return"})," ","<",(0,n.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/tutorial/java/javaOO/methods.html",title:"void"},"void"),">",(0,n.kt)("a",{href:"#file-chooser-set-files-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"Sets the value of the file input this chooser is associated with. If some of the ",(0,n.kt)("inlineCode",{parentName:"p"},"filePaths")," are relative paths, then they are resolved relative to the the current working directory. For empty array, clears the selected files."))}p.isMDXComponent=!0},6010:function(e,t,a){function i(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=i(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=i(e))&&(r&&(r+=" "),r+=t);return r}a.d(t,{Z:function(){return r}})}}]);