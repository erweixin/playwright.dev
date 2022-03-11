"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[8724],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return w}});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var i=n.createContext({}),s=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,l=e.originalType,i=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),p=s(a),w=o,h=p["".concat(i,".").concat(w)]||p[w]||u[w]||l;return a?n.createElement(h,r(r({ref:t},c),{},{components:a})):n.createElement(h,r({ref:t},c))}));function w(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=a.length,r=new Array(l);r[0]=p;var d={};for(var i in t)hasOwnProperty.call(t,i)&&(d[i]=t[i]);d.originalType=e,d.mdxType="string"==typeof e?e:o,r[1]=d;for(var s=2;s<l;s++)r[s]=a[s];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},2361:function(e,t,a){a.r(t),a.d(t,{assets:function(){return f},contentTitle:function(){return w},default:function(){return g},frontMatter:function(){return p},metadata:function(){return h},toc:function(){return m}});var n=a(3905),o=Object.defineProperty,l=Object.defineProperties,r=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,t,a)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,u=(e,t)=>{for(var a in t||(t={}))i.call(t,a)&&c(e,a,t[a]);if(d)for(var a of d(t))s.call(t,a)&&c(e,a,t[a]);return e};const p={id:"class-download",title:"Download"},w=void 0,h={unversionedId:"api/class-download",id:"version-1.19/api/class-download",title:"Download",description:"Download] objects are dispatched by page via the [event Page.Download event.",source:"@site/versioned_docs/version-1.19/api/class-download.mdx",sourceDirName:"api",slug:"/api/class-download",permalink:"/dotnet/docs/api/class-download",tags:[],version:"1.19",frontMatter:{id:"class-download",title:"Download"},sidebar:"version-1.19/api",previous:{title:"Dialog",permalink:"/dotnet/docs/api/class-dialog"},next:{title:"ElementHandle",permalink:"/dotnet/docs/api/class-elementhandle"}},f={},m=[{value:"Download.CancelAsync()",id:"download-cancel",level:2},{value:"Download.CreateReadStreamAsync()",id:"download-create-read-stream",level:2},{value:"Download.DeleteAsync()",id:"download-delete",level:2},{value:"Download.FailureAsync()",id:"download-failure",level:2},{value:"Download.Page",id:"download-page",level:2},{value:"Download.PathAsync()",id:"download-path",level:2},{value:"Download.SaveAsAsync(path)",id:"download-save-as",level:2},{value:"Download.SuggestedFilename",id:"download-suggested-filename",level:2},{value:"Download.Url",id:"download-url",level:2}],k={toc:m};function g(e){var t,a=e,{components:o}=a,c=((e,t)=>{var a={};for(var n in e)i.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&d)for(var n of d(e))t.indexOf(n)<0&&s.call(e,n)&&(a[n]=e[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(t=u(u({},k),c),l(t,r({components:o,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,(0,n.kt)("a",u({parentName:"p"},{href:"/dotnet/docs/api/class-download",title:"Download"}),"Download")," objects are dispatched by page via the ",(0,n.kt)("a",u({parentName:"p"},{href:"/dotnet/docs/api/class-page#page-event-download"}),"event Page.Download")," event."),(0,n.kt)("p",null,"All the downloaded files belonging to the browser context are deleted when the browser context is closed."),(0,n.kt)("p",null,"Download event is emitted once the download starts. Download path becomes available once download completes:"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-csharp"}),'var download = await page.RunAndWaitForDownloadAsync(async () =>\n{\n    await page.ClickAsync("#downloadButton");\n});\nConsole.WriteLine(await download.PathAsync());\n')),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"/dotnet/docs/api/class-download#download-cancel"}),"Download.CancelAsync()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"/dotnet/docs/api/class-download#download-create-read-stream"}),"Download.CreateReadStreamAsync()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"/dotnet/docs/api/class-download#download-delete"}),"Download.DeleteAsync()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"/dotnet/docs/api/class-download#download-failure"}),"Download.FailureAsync()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"/dotnet/docs/api/class-download#download-page"}),"Download.Page")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"/dotnet/docs/api/class-download#download-path"}),"Download.PathAsync()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"/dotnet/docs/api/class-download#download-save-as"}),"Download.SaveAsAsync(path)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"/dotnet/docs/api/class-download#download-suggested-filename"}),"Download.SuggestedFilename")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"/dotnet/docs/api/class-download#download-url"}),"Download.Url"))),(0,n.kt)("h2",u({},{id:"download-cancel"}),"Download.CancelAsync()"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"download-cancel-return"})," ","<",(0,n.kt)("a",u({parentName:"li"},{href:"https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/void",title:"void"}),"void"),">",(0,n.kt)("a",{href:"#download-cancel-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"Cancels a download. Will not fail if the download is already finished or canceled. Upon successful cancellations, ",(0,n.kt)("inlineCode",{parentName:"p"},"download.failure()")," would resolve to ",(0,n.kt)("inlineCode",{parentName:"p"},"'canceled'"),"."),(0,n.kt)("h2",u({},{id:"download-create-read-stream"}),"Download.CreateReadStreamAsync()"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"download-create-read-stream-return"})," ","<","[Stream]","?",">",(0,n.kt)("a",{href:"#download-create-read-stream-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"Returns readable stream for current download or ",(0,n.kt)("inlineCode",{parentName:"p"},"null")," if download failed."),(0,n.kt)("h2",u({},{id:"download-delete"}),"Download.DeleteAsync()"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"download-delete-return"})," ","<",(0,n.kt)("a",u({parentName:"li"},{href:"https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/void",title:"void"}),"void"),">",(0,n.kt)("a",{href:"#download-delete-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"Deletes the downloaded file. Will wait for the download to finish if necessary."),(0,n.kt)("h2",u({},{id:"download-failure"}),"Download.FailureAsync()"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"download-failure-return"})," ","<",(0,n.kt)("a",u({parentName:"li"},{href:"https://docs.microsoft.com/en-us/dotnet/api/system.string",title:"string"}),"string"),"?",">",(0,n.kt)("a",{href:"#download-failure-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"Returns download error if any. Will wait for the download to finish if necessary."),(0,n.kt)("h2",u({},{id:"download-page"}),"Download.Page"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"download-page-return"})," ","<",(0,n.kt)("a",u({parentName:"li"},{href:"/dotnet/docs/api/class-page",title:"Page"}),"Page"),">",(0,n.kt)("a",{href:"#download-page-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"Get the page that the download belongs to."),(0,n.kt)("h2",u({},{id:"download-path"}),"Download.PathAsync()"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"download-path-return"})," ","<",(0,n.kt)("a",u({parentName:"li"},{href:"https://docs.microsoft.com/en-us/dotnet/api/system.string",title:"string"}),"string"),"?",">",(0,n.kt)("a",{href:"#download-path-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"Returns path to the downloaded file in case of successful download. The method will wait for the download to finish if necessary. The method throws when connected remotely."),(0,n.kt)("p",null,"Note that the download's file name is a random GUID, use ",(0,n.kt)("a",u({parentName:"p"},{href:"/dotnet/docs/api/class-download#download-suggested-filename"}),"Download.SuggestedFilename")," to get suggested file name."),(0,n.kt)("h2",u({},{id:"download-save-as"}),"Download.SaveAsAsync(path)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"path"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"download-save-as-option-path"})," ","<",(0,n.kt)("a",u({parentName:"li"},{href:"https://docs.microsoft.com/en-us/dotnet/api/system.string",title:"string"}),"string"),">"," Path where the download should be copied.",(0,n.kt)("a",{href:"#download-save-as-option-path",class:"list-anchor"},"#")),(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"download-save-as-return"})," ","<",(0,n.kt)("a",u({parentName:"li"},{href:"https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/void",title:"void"}),"void"),">",(0,n.kt)("a",{href:"#download-save-as-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"Copy the download to a user-specified path. It is safe to call this method while the download is still in progress. Will wait for the download to finish if necessary."),(0,n.kt)("h2",u({},{id:"download-suggested-filename"}),"Download.SuggestedFilename"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"download-suggested-filename-return"})," ","<",(0,n.kt)("a",u({parentName:"li"},{href:"https://docs.microsoft.com/en-us/dotnet/api/system.string",title:"string"}),"string"),">",(0,n.kt)("a",{href:"#download-suggested-filename-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"Returns suggested filename for this download. It is typically computed by the browser from the ",(0,n.kt)("a",u({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Disposition"}),(0,n.kt)("inlineCode",{parentName:"a"},"Content-Disposition"))," response header or the ",(0,n.kt)("inlineCode",{parentName:"p"},"download")," attribute. See the spec on ",(0,n.kt)("a",u({parentName:"p"},{href:"https://html.spec.whatwg.org/#downloading-resources"}),"whatwg"),". Different browsers can use different logic for computing it."),(0,n.kt)("h2",u({},{id:"download-url"}),"Download.Url"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"download-url-return"})," ","<",(0,n.kt)("a",u({parentName:"li"},{href:"https://docs.microsoft.com/en-us/dotnet/api/system.string",title:"string"}),"string"),">",(0,n.kt)("a",{href:"#download-url-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"Returns downloaded url."))}g.isMDXComponent=!0}}]);