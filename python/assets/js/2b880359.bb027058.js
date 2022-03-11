"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[7481],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var a=r(7294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,l=function(e,t){if(null==e)return{};var r,a,l={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,l=e.mdxType,n=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),h=c(r),f=l,m=h["".concat(s,".").concat(f)]||h[f]||u[f]||n;return r?a.createElement(m,i(i({ref:t},p),{},{components:r})):a.createElement(m,i({ref:t},p))}));function f(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var n=r.length,i=new Array(n);i[0]=h;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var c=2;c<n;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},3811:function(e,t,r){r.d(t,{Z:function(){return c}});var a=r(7294),l=Object.defineProperty,n=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,s=(e,t,r)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;function c({children:e,hidden:t,className:r}){return a.createElement("div",((e,t)=>{for(var r in t||(t={}))i.call(t,r)&&s(e,r,t[r]);if(n)for(var r of n(t))o.call(t,r)&&s(e,r,t[r]);return e})({role:"tabpanel"},{hidden:t,className:r}),e)}},3824:function(e,t,r){r.d(t,{Z:function(){return b}});var a=r(7294),l=r(4939),n=r(5882),i=r(6010),o="tabItem_LplD",s=Object.defineProperty,c=Object.defineProperties,p=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,m=(e,t,r)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,d=(e,t)=>{for(var r in t||(t={}))h.call(t,r)&&m(e,r,t[r]);if(u)for(var r of u(t))f.call(t,r)&&m(e,r,t[r]);return e};function y(e){var t,r,l;const{lazy:s,block:u,defaultValue:h,values:f,groupId:m,className:y}=e,b=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=null!=f?f:b.map((({props:{value:e,label:t,attributes:r}})=>({value:e,label:t,attributes:r}))),g=(0,n.lx)(k,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===h?h:null!=(l=null!=h?h:null==(t=b.find((e=>e.props.default)))?void 0:t.props.value)?l:null==(r=b[0])?void 0:r.props.value;if(null!==v&&!k.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:N,setTabGroupChoices:w}=(0,n.UB)(),[O,x]=(0,a.useState)(v),_=[],{blockElementScrollPositionUntilNextRender:j}=(0,n.o5)();if(null!=m){const e=N[m];null!=e&&e!==O&&k.some((t=>t.value===e))&&x(e)}const P=e=>{const t=e.currentTarget,r=_.indexOf(t),a=k[r].value;a!==O&&(j(t),x(a),null!=m&&w(m,a))},E=e=>{let t=null;switch(e.key){case"ArrowRight":{const r=_.indexOf(e.currentTarget)+1;t=_[r]||_[0];break}case"ArrowLeft":{const r=_.indexOf(e.currentTarget)-1;t=_[r]||_[_.length-1];break}}null==t||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":u},y)},k.map((({value:e,label:t,attributes:r})=>{return a.createElement("li",(l=d({role:"tab",tabIndex:O===e?0:-1,"aria-selected":O===e,key:e,ref:e=>_.push(e),onKeyDown:E,onFocus:P,onClick:P},r),n={className:(0,i.Z)("tabs__item",o,null==r?void 0:r.className,{"tabs__item--active":O===e})},c(l,p(n))),null!=t?t:e);var l,n}))),s?(0,a.cloneElement)(b.filter((e=>e.props.value===O))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},b.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}function b(e){const t=(0,l.Z)();return a.createElement(y,d({key:String(t)},e))}},4906:function(e,t,r){r.r(t),r.d(t,{assets:function(){return b},contentTitle:function(){return d},default:function(){return v},frontMatter:function(){return m},metadata:function(){return y},toc:function(){return k}});var a=r(3905),l=r(3824),n=r(3811),i=Object.defineProperty,o=Object.defineProperties,s=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,h=(e,t,r)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,f=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&h(e,r,t[r]);if(c)for(var r of c(t))u.call(t,r)&&h(e,r,t[r]);return e};const m={id:"class-filechooser",title:"FileChooser"},d=void 0,y={unversionedId:"api/class-filechooser",id:"api/class-filechooser",title:"FileChooser",description:'FileChooser] objects are dispatched by the page in the [page.on("filechooser") event.',source:"@site/docs/api/class-filechooser.mdx",sourceDirName:"api",slug:"/api/class-filechooser",permalink:"/python/docs/next/api/class-filechooser",tags:[],version:"current",frontMatter:{id:"class-filechooser",title:"FileChooser"},sidebar:"api",previous:{title:"Error",permalink:"/python/docs/next/api/class-error"},next:{title:"Frame",permalink:"/python/docs/next/api/class-frame"}},b={},k=[{value:"file_chooser.element",id:"file-chooser-element",level:2},{value:"file_chooser.is_multiple()",id:"file-chooser-is-multiple",level:2},{value:"file_chooser.page",id:"file-chooser-page",level:2},{value:"file_chooser.set_files(files, **kwargs)",id:"file-chooser-set-files",level:2}],g={toc:k};function v(e){var t,r=e,{components:i}=r,h=((e,t)=>{var r={};for(var a in e)p.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&c)for(var a of c(e))t.indexOf(a)<0&&u.call(e,a)&&(r[a]=e[a]);return r})(r,["components"]);return(0,a.kt)("wrapper",(t=f(f({},g),h),o(t,s({components:i,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,(0,a.kt)("a",f({parentName:"p"},{href:"/python/docs/next/api/class-filechooser",title:"FileChooser"}),"FileChooser")," objects are dispatched by the page in the ",(0,a.kt)("a",f({parentName:"p"},{href:"/python/docs/next/api/class-page#page-event-file-chooser"}),'page.on("filechooser")')," event."),(0,a.kt)(l.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,a.kt)(n.Z,{value:"sync",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",f({parentName:"pre"},{className:"language-py"}),'with page.expect_file_chooser() as fc_info:\n    page.click("upload")\nfile_chooser = fc_info.value\nfile_chooser.set_files("myfile.pdf")\n'))),(0,a.kt)(n.Z,{value:"async",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",f({parentName:"pre"},{className:"language-py"}),'async with page.expect_file_chooser() as fc_info:\n    await page.click("upload")\nfile_chooser = await fc_info.value\nawait file_chooser.set_files("myfile.pdf")\n')))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",f({parentName:"li"},{href:"/python/docs/next/api/class-filechooser#file-chooser-element"}),"file_chooser.element")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",f({parentName:"li"},{href:"/python/docs/next/api/class-filechooser#file-chooser-is-multiple"}),"file_chooser.is_multiple()")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",f({parentName:"li"},{href:"/python/docs/next/api/class-filechooser#file-chooser-page"}),"file_chooser.page")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",f({parentName:"li"},{href:"/python/docs/next/api/class-filechooser#file-chooser-set-files"}),"file_chooser.set_files(files, **kwargs)"))),(0,a.kt)("h2",f({},{id:"file-chooser-element"}),"file_chooser.element"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"returns:",(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"file-chooser-element-return"})," ","<",(0,a.kt)("a",f({parentName:"li"},{href:"/python/docs/next/api/class-elementhandle",title:"ElementHandle"}),"ElementHandle"),">",(0,a.kt)("a",{href:"#file-chooser-element-return",class:"list-anchor"},"#"))),(0,a.kt)("p",null,"Returns input element associated with this file chooser."),(0,a.kt)("h2",f({},{id:"file-chooser-is-multiple"}),"file_chooser.is_multiple()"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"returns:",(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"file-chooser-is-multiple-return"})," ","<",(0,a.kt)("a",f({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html",title:"bool"}),"bool"),">",(0,a.kt)("a",{href:"#file-chooser-is-multiple-return",class:"list-anchor"},"#"))),(0,a.kt)("p",null,"Returns whether this file chooser accepts multiple files."),(0,a.kt)("h2",f({},{id:"file-chooser-page"}),"file_chooser.page"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"returns:",(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"file-chooser-page-return"})," ","<",(0,a.kt)("a",f({parentName:"li"},{href:"/python/docs/next/api/class-page",title:"Page"}),"Page"),">",(0,a.kt)("a",{href:"#file-chooser-page-return",class:"list-anchor"},"#"))),(0,a.kt)("p",null,"Returns page this file chooser belongs to."),(0,a.kt)("h2",f({},{id:"file-chooser-set-files"}),"file_chooser.set_files(files, **kwargs)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"files"),(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"file-chooser-set-files-option-files"})," ","<",(0,a.kt)("a",f({parentName:"li"},{href:"https://docs.python.org/3/library/typing.html#typing.Union",title:"Union"}),"Union"),"[",(0,a.kt)("a",f({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"}),"str"),", ",(0,a.kt)("a",f({parentName:"li"},{href:"https://realpython.com/python-pathlib/",title:"pathlib.Path"}),"pathlib.Path"),"]","|",(0,a.kt)("a",f({parentName:"li"},{href:"https://docs.python.org/3/library/typing.html#typing.List",title:"List"}),"List"),"[",(0,a.kt)("a",f({parentName:"li"},{href:"https://docs.python.org/3/library/typing.html#typing.Union",title:"Union"}),"Union"),"[",(0,a.kt)("a",f({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"}),"str"),", ",(0,a.kt)("a",f({parentName:"li"},{href:"https://realpython.com/python-pathlib/",title:"pathlib.Path"}),"pathlib.Path"),"]","]","|",(0,a.kt)("a",f({parentName:"li"},{href:"https://docs.python.org/3/library/typing.html#typing.Dict",title:"Dict"}),"Dict"),"|",(0,a.kt)("a",f({parentName:"li"},{href:"https://docs.python.org/3/library/typing.html#typing.List",title:"List"}),"List"),"[",(0,a.kt)("a",f({parentName:"li"},{href:"https://docs.python.org/3/library/typing.html#typing.Dict",title:"Dict"}),"Dict"),"]",">",(0,a.kt)("a",{href:"#file-chooser-set-files-option-files",class:"list-anchor"},"#"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"name")," ","<",(0,a.kt)("a",f({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"}),"str"),">"," File name"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"mimeType")," ","<",(0,a.kt)("a",f({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"}),"str"),">"," File type"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"buffer")," ","<",(0,a.kt)("a",f({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#bytes",title:"bytes"}),"bytes"),">"," File content"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"no_wait_after"),(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"file-chooser-set-files-option-no-wait-after"})," ","<",(0,a.kt)("a",f({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html",title:"bool"}),"bool"),">"," Actions that initiate navigations are waiting for these navigations to happen and for pages to start loading. You can opt out of waiting via setting this flag. You would only need this option in the exceptional cases such as navigating to inaccessible pages. Defaults to ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),".",(0,a.kt)("a",{href:"#file-chooser-set-files-option-no-wait-after",class:"list-anchor"},"#")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"timeout"),(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"file-chooser-set-files-option-timeout"})," ","<",(0,a.kt)("a",f({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"float"}),"float"),">"," Maximum time in milliseconds, defaults to 30 seconds, pass ",(0,a.kt)("inlineCode",{parentName:"li"},"0")," to disable timeout. The default value can be changed by using the ",(0,a.kt)("a",f({parentName:"li"},{href:"/python/docs/next/api/class-browsercontext#browser-context-set-default-timeout"}),"browser_context.set_default_timeout(timeout)")," or ",(0,a.kt)("a",f({parentName:"li"},{href:"/python/docs/next/api/class-page#page-set-default-timeout"}),"page.set_default_timeout(timeout)")," methods.",(0,a.kt)("a",{href:"#file-chooser-set-files-option-timeout",class:"list-anchor"},"#")),(0,a.kt)("li",{parentName:"ul"},"returns:",(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"file-chooser-set-files-return"})," ","<",(0,a.kt)("a",f({parentName:"li"},{href:"https://docs.python.org/3/library/constants.html#None",title:"None"}),"NoneType"),">",(0,a.kt)("a",{href:"#file-chooser-set-files-return",class:"list-anchor"},"#"))),(0,a.kt)("p",null,"Sets the value of the file input this chooser is associated with. If some of the ",(0,a.kt)("inlineCode",{parentName:"p"},"filePaths")," are relative paths, then they are resolved relative to the the current working directory. For empty array, clears the selected files."))}v.isMDXComponent=!0}}]);