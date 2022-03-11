"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[8724],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return h}});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var i=n.createContext({}),s=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,o=e.originalType,i=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),u=s(a),h=l,f=u["".concat(i,".").concat(h)]||u[h]||c[h]||o;return a?n.createElement(f,r(r({ref:t},p),{},{components:a})):n.createElement(f,r({ref:t},p))}));function h(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=a.length,r=new Array(o);r[0]=u;var d={};for(var i in t)hasOwnProperty.call(t,i)&&(d[i]=t[i]);d.originalType=e,d.mdxType="string"==typeof e?e:l,r[1]=d;for(var s=2;s<o;s++)r[s]=a[s];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},3811:function(e,t,a){a.d(t,{Z:function(){return s}});var n=a(7294),l=Object.defineProperty,o=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,i=(e,t,a)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;function s({children:e,hidden:t,className:a}){return n.createElement("div",((e,t)=>{for(var a in t||(t={}))r.call(t,a)&&i(e,a,t[a]);if(o)for(var a of o(t))d.call(t,a)&&i(e,a,t[a]);return e})({role:"tabpanel"},{hidden:t,className:a}),e)}},3824:function(e,t,a){a.d(t,{Z:function(){return y}});var n=a(7294),l=a(4939),o=a(5882),r=a(6010),d="tabItem_LplD",i=Object.defineProperty,s=Object.defineProperties,p=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,f=(e,t,a)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,w=(e,t)=>{for(var a in t||(t={}))u.call(t,a)&&f(e,a,t[a]);if(c)for(var a of c(t))h.call(t,a)&&f(e,a,t[a]);return e};function m(e){var t,a,l;const{lazy:i,block:c,defaultValue:u,values:h,groupId:f,className:m}=e,y=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=null!=h?h:y.map((({props:{value:e,label:t,attributes:a}})=>({value:e,label:t,attributes:a}))),k=(0,o.lx)(b,((e,t)=>e.value===t.value));if(k.length>0)throw new Error(`Docusaurus error: Duplicate values "${k.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===u?u:null!=(l=null!=u?u:null==(t=y.find((e=>e.props.default)))?void 0:t.props.value)?l:null==(a=y[0])?void 0:a.props.value;if(null!==v&&!b.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:g,setTabGroupChoices:N}=(0,o.UB)(),[O,x]=(0,n.useState)(v),j=[],{blockElementScrollPositionUntilNextRender:P}=(0,o.o5)();if(null!=f){const e=g[f];null!=e&&e!==O&&b.some((t=>t.value===e))&&x(e)}const T=e=>{const t=e.currentTarget,a=j.indexOf(t),n=b[a].value;n!==O&&(P(t),x(n),null!=f&&N(f,n))},D=e=>{let t=null;switch(e.key){case"ArrowRight":{const a=j.indexOf(e.currentTarget)+1;t=j[a]||j[0];break}case"ArrowLeft":{const a=j.indexOf(e.currentTarget)-1;t=j[a]||j[j.length-1];break}}null==t||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":c},m)},b.map((({value:e,label:t,attributes:a})=>{return n.createElement("li",(l=w({role:"tab",tabIndex:O===e?0:-1,"aria-selected":O===e,key:e,ref:e=>j.push(e),onKeyDown:D,onFocus:T,onClick:T},a),o={className:(0,r.Z)("tabs__item",d,null==a?void 0:a.className,{"tabs__item--active":O===e})},s(l,p(o))),null!=t?t:e);var l,o}))),i?(0,n.cloneElement)(y.filter((e=>e.props.value===O))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},y.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}function y(e){const t=(0,l.Z)();return n.createElement(m,w({key:String(t)},e))}},2361:function(e,t,a){a.r(t),a.d(t,{assets:function(){return y},contentTitle:function(){return w},default:function(){return v},frontMatter:function(){return f},metadata:function(){return m},toc:function(){return b}});var n=a(3905),l=a(3824),o=a(3811),r=Object.defineProperty,d=Object.defineProperties,i=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,u=(e,t,a)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,h=(e,t)=>{for(var a in t||(t={}))p.call(t,a)&&u(e,a,t[a]);if(s)for(var a of s(t))c.call(t,a)&&u(e,a,t[a]);return e};const f={id:"class-download",title:"Download"},w=void 0,m={unversionedId:"api/class-download",id:"version-1.19/api/class-download",title:"Download",description:'Download] objects are dispatched by page via the [page.on("download") event.',source:"@site/versioned_docs/version-1.19/api/class-download.mdx",sourceDirName:"api",slug:"/api/class-download",permalink:"/python/docs/api/class-download",tags:[],version:"1.19",frontMatter:{id:"class-download",title:"Download"},sidebar:"version-1.19/api",previous:{title:"Dialog",permalink:"/python/docs/api/class-dialog"},next:{title:"ElementHandle",permalink:"/python/docs/api/class-elementhandle"}},y={},b=[{value:"download.cancel()",id:"download-cancel",level:2},{value:"download.delete()",id:"download-delete",level:2},{value:"download.failure()",id:"download-failure",level:2},{value:"download.page",id:"download-page",level:2},{value:"download.path()",id:"download-path",level:2},{value:"download.save_as(path)",id:"download-save-as",level:2},{value:"download.suggested_filename",id:"download-suggested-filename",level:2},{value:"download.url",id:"download-url",level:2}],k={toc:b};function v(e){var t,a=e,{components:r}=a,u=((e,t)=>{var a={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&s)for(var n of s(e))t.indexOf(n)<0&&c.call(e,n)&&(a[n]=e[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(t=h(h({},k),u),d(t,i({components:r,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,(0,n.kt)("a",h({parentName:"p"},{href:"/python/docs/api/class-download",title:"Download"}),"Download")," objects are dispatched by page via the ",(0,n.kt)("a",h({parentName:"p"},{href:"/python/docs/api/class-page#page-event-download"}),'page.on("download")')," event."),(0,n.kt)("p",null,"All the downloaded files belonging to the browser context are deleted when the browser context is closed."),(0,n.kt)("p",null,"Download event is emitted once the download starts. Download path becomes available once download completes:"),(0,n.kt)(l.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"sync",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",h({parentName:"pre"},{className:"language-py"}),'with page.expect_download() as download_info:\n    page.click("a")\ndownload = download_info.value\n# wait for download to complete\npath = download.path()\n'))),(0,n.kt)(o.Z,{value:"async",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",h({parentName:"pre"},{className:"language-py"}),'async with page.expect_download() as download_info:\n    await page.click("a")\ndownload = await download_info.value\n# waits for download to complete\npath = await download.path()\n')))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",h({parentName:"li"},{href:"/python/docs/api/class-download#download-cancel"}),"download.cancel()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",h({parentName:"li"},{href:"/python/docs/api/class-download#download-delete"}),"download.delete()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",h({parentName:"li"},{href:"/python/docs/api/class-download#download-failure"}),"download.failure()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",h({parentName:"li"},{href:"/python/docs/api/class-download#download-page"}),"download.page")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",h({parentName:"li"},{href:"/python/docs/api/class-download#download-path"}),"download.path()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",h({parentName:"li"},{href:"/python/docs/api/class-download#download-save-as"}),"download.save_as(path)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",h({parentName:"li"},{href:"/python/docs/api/class-download#download-suggested-filename"}),"download.suggested_filename")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",h({parentName:"li"},{href:"/python/docs/api/class-download#download-url"}),"download.url"))),(0,n.kt)("h2",h({},{id:"download-cancel"}),"download.cancel()"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"download-cancel-return"})," ","<",(0,n.kt)("a",h({parentName:"li"},{href:"https://docs.python.org/3/library/constants.html#None",title:"None"}),"NoneType"),">",(0,n.kt)("a",{href:"#download-cancel-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"Cancels a download. Will not fail if the download is already finished or canceled. Upon successful cancellations, ",(0,n.kt)("inlineCode",{parentName:"p"},"download.failure()")," would resolve to ",(0,n.kt)("inlineCode",{parentName:"p"},"'canceled'"),"."),(0,n.kt)("h2",h({},{id:"download-delete"}),"download.delete()"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"download-delete-return"})," ","<",(0,n.kt)("a",h({parentName:"li"},{href:"https://docs.python.org/3/library/constants.html#None",title:"None"}),"NoneType"),">",(0,n.kt)("a",{href:"#download-delete-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"Deletes the downloaded file. Will wait for the download to finish if necessary."),(0,n.kt)("h2",h({},{id:"download-failure"}),"download.failure()"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"download-failure-return"})," ","<",(0,n.kt)("a",h({parentName:"li"},{href:"https://docs.python.org/3/library/constants.html#None",title:"None"}),"NoneType"),"|",(0,n.kt)("a",h({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"}),"str"),">",(0,n.kt)("a",{href:"#download-failure-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"Returns download error if any. Will wait for the download to finish if necessary."),(0,n.kt)("h2",h({},{id:"download-page"}),"download.page"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"download-page-return"})," ","<",(0,n.kt)("a",h({parentName:"li"},{href:"/python/docs/api/class-page",title:"Page"}),"Page"),">",(0,n.kt)("a",{href:"#download-page-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"Get the page that the download belongs to."),(0,n.kt)("h2",h({},{id:"download-path"}),"download.path()"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"download-path-return"})," ","<",(0,n.kt)("a",h({parentName:"li"},{href:"https://docs.python.org/3/library/constants.html#None",title:"None"}),"NoneType"),"|",(0,n.kt)("a",h({parentName:"li"},{href:"https://realpython.com/python-pathlib/",title:"pathlib.Path"}),"pathlib.Path"),">",(0,n.kt)("a",{href:"#download-path-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"Returns path to the downloaded file in case of successful download. The method will wait for the download to finish if necessary. The method throws when connected remotely."),(0,n.kt)("p",null,"Note that the download's file name is a random GUID, use ",(0,n.kt)("a",h({parentName:"p"},{href:"/python/docs/api/class-download#download-suggested-filename"}),"download.suggested_filename")," to get suggested file name."),(0,n.kt)("h2",h({},{id:"download-save-as"}),"download.save_as(path)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"path"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"download-save-as-option-path"})," ","<",(0,n.kt)("a",h({parentName:"li"},{href:"https://docs.python.org/3/library/typing.html#typing.Union",title:"Union"}),"Union"),"[",(0,n.kt)("a",h({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"}),"str"),", ",(0,n.kt)("a",h({parentName:"li"},{href:"https://realpython.com/python-pathlib/",title:"pathlib.Path"}),"pathlib.Path"),"]",">"," Path where the download should be copied.",(0,n.kt)("a",{href:"#download-save-as-option-path",class:"list-anchor"},"#")),(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"download-save-as-return"})," ","<",(0,n.kt)("a",h({parentName:"li"},{href:"https://docs.python.org/3/library/constants.html#None",title:"None"}),"NoneType"),">",(0,n.kt)("a",{href:"#download-save-as-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"Copy the download to a user-specified path. It is safe to call this method while the download is still in progress. Will wait for the download to finish if necessary."),(0,n.kt)("h2",h({},{id:"download-suggested-filename"}),"download.suggested_filename"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"download-suggested-filename-return"})," ","<",(0,n.kt)("a",h({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"}),"str"),">",(0,n.kt)("a",{href:"#download-suggested-filename-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"Returns suggested filename for this download. It is typically computed by the browser from the ",(0,n.kt)("a",h({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Disposition"}),(0,n.kt)("inlineCode",{parentName:"a"},"Content-Disposition"))," response header or the ",(0,n.kt)("inlineCode",{parentName:"p"},"download")," attribute. See the spec on ",(0,n.kt)("a",h({parentName:"p"},{href:"https://html.spec.whatwg.org/#downloading-resources"}),"whatwg"),". Different browsers can use different logic for computing it."),(0,n.kt)("h2",h({},{id:"download-url"}),"download.url"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"download-url-return"})," ","<",(0,n.kt)("a",h({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"}),"str"),">",(0,n.kt)("a",{href:"#download-url-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"Returns downloaded url."))}v.isMDXComponent=!0}}]);