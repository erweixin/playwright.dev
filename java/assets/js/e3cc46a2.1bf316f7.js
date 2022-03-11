"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[1123],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return h}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),p=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(a),h=n,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||s;return a?r.createElement(m,o(o({ref:t},c),{},{components:a})):r.createElement(m,o({ref:t},c))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,o=new Array(s);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var p=2;p<s;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},2598:function(e,t,a){a.r(t),a.d(t,{assets:function(){return k},contentTitle:function(){return h},default:function(){return q},frontMatter:function(){return d},metadata:function(){return m},toc:function(){return x}});var r=a(3905),n=Object.defineProperty,s=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,t,a)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,u=(e,t)=>{for(var a in t||(t={}))l.call(t,a)&&c(e,a,t[a]);if(i)for(var a of i(t))p.call(t,a)&&c(e,a,t[a]);return e};const d={id:"class-apirequestcontext",title:"APIRequestContext"},h=void 0,m={unversionedId:"api/class-apirequestcontext",id:"api/class-apirequestcontext",title:"APIRequestContext",description:"This API is used for the Web API testing. You can use it to trigger API endpoints, configure micro-services, prepare environment or the service to your e2e test. When used on [Page] or a [BrowserContext], this API will automatically use the cookies from the corresponding [BrowserContext]. This means that if you log in using this API, your e2e test will be logged in and vice versa.",source:"@site/docs/api/class-apirequestcontext.mdx",sourceDirName:"api",slug:"/api/class-apirequestcontext",permalink:"/java/docs/next/api/class-apirequestcontext",tags:[],version:"current",frontMatter:{id:"class-apirequestcontext",title:"APIRequestContext"},sidebar:"api",previous:{title:"APIRequest",permalink:"/java/docs/next/api/class-apirequest"},next:{title:"APIResponse",permalink:"/java/docs/next/api/class-apiresponse"}},k={},x=[{value:"APIRequestContext.delete(url, options)",id:"api-request-context-delete",level:2},{value:"APIRequestContext.dispose()",id:"api-request-context-dispose",level:2},{value:"APIRequestContext.fetch(urlOrRequest, options)",id:"api-request-context-fetch",level:2},{value:"APIRequestContext.get(url, options)",id:"api-request-context-get",level:2},{value:"APIRequestContext.head(url, options)",id:"api-request-context-head",level:2},{value:"APIRequestContext.patch(url, options)",id:"api-request-context-patch",level:2},{value:"APIRequestContext.post(url, options)",id:"api-request-context-post",level:2},{value:"APIRequestContext.put(url, options)",id:"api-request-context-put",level:2},{value:"APIRequestContext.storageState(options)",id:"api-request-context-storage-state",level:2}],f={toc:x};function q(e){var t,a=e,{components:n}=a,c=((e,t)=>{var a={};for(var r in e)l.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&i)for(var r of i(e))t.indexOf(r)<0&&p.call(e,r)&&(a[r]=e[r]);return a})(a,["components"]);return(0,r.kt)("wrapper",(t=u(u({},f),c),s(t,o({components:n,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"This API is used for the Web API testing. You can use it to trigger API endpoints, configure micro-services, prepare environment or the service to your e2e test. When used on ",(0,r.kt)("a",u({parentName:"p"},{href:"/java/docs/next/api/class-page",title:"Page"}),"Page")," or a ",(0,r.kt)("a",u({parentName:"p"},{href:"/java/docs/next/api/class-browsercontext",title:"BrowserContext"}),"BrowserContext"),", this API will automatically use the cookies from the corresponding ",(0,r.kt)("a",u({parentName:"p"},{href:"/java/docs/next/api/class-browsercontext",title:"BrowserContext"}),"BrowserContext"),". This means that if you log in using this API, your e2e test will be logged in and vice versa."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"/java/docs/next/api/class-apirequestcontext#api-request-context-delete"}),"APIRequestContext.delete(url[, options])")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"/java/docs/next/api/class-apirequestcontext#api-request-context-dispose"}),"APIRequestContext.dispose()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"/java/docs/next/api/class-apirequestcontext#api-request-context-fetch"}),"APIRequestContext.fetch(urlOrRequest[, options])")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"/java/docs/next/api/class-apirequestcontext#api-request-context-get"}),"APIRequestContext.get(url[, options])")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"/java/docs/next/api/class-apirequestcontext#api-request-context-head"}),"APIRequestContext.head(url[, options])")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"/java/docs/next/api/class-apirequestcontext#api-request-context-patch"}),"APIRequestContext.patch(url[, options])")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"/java/docs/next/api/class-apirequestcontext#api-request-context-post"}),"APIRequestContext.post(url[, options])")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"/java/docs/next/api/class-apirequestcontext#api-request-context-put"}),"APIRequestContext.put(url[, options])")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"/java/docs/next/api/class-apirequestcontext#api-request-context-storage-state"}),"APIRequestContext.storageState([options])"))),(0,r.kt)("h2",u({},{id:"api-request-context-delete"}),"APIRequestContext.delete(url","[, options]",")"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"url"),(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"api-request-context-delete-option-url"})," ","<",(0,r.kt)("a",u({parentName:"li"},{href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"}),"String"),">"," Target URL.",(0,r.kt)("a",{href:"#api-request-context-delete-option-url",class:"list-anchor"},"#")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"options"),(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"api-request-context-delete-option-params"})," ","<",(0,r.kt)("a",u({parentName:"li"},{href:"/java/docs/next/api/class-requestoptions",title:"RequestOptions"}),"RequestOptions"),">"," Optional request parameters.",(0,r.kt)("a",{href:"#api-request-context-delete-option-params",class:"list-anchor"},"#")),(0,r.kt)("li",{parentName:"ul"},"returns:",(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"api-request-context-delete-return"})," ","<",(0,r.kt)("a",u({parentName:"li"},{href:"/java/docs/next/api/class-apiresponse",title:"APIResponse"}),"APIResponse"),">",(0,r.kt)("a",{href:"#api-request-context-delete-return",class:"list-anchor"},"#"))),(0,r.kt)("p",null,"Sends HTTP(S) ",(0,r.kt)("a",u({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/DELETE"}),"DELETE")," request and returns its response. The method will populate request cookies from the context and update context cookies from the response. The method will automatically follow redirects."),(0,r.kt)("h2",u({},{id:"api-request-context-dispose"}),"APIRequestContext.dispose()"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"returns:",(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"api-request-context-dispose-return"})," ","<",(0,r.kt)("a",u({parentName:"li"},{href:"https://docs.oracle.com/javase/tutorial/java/javaOO/methods.html",title:"void"}),"void"),">",(0,r.kt)("a",{href:"#api-request-context-dispose-return",class:"list-anchor"},"#"))),(0,r.kt)("p",null,"All responses returned by ",(0,r.kt)("a",u({parentName:"p"},{href:"/java/docs/next/api/class-apirequestcontext#api-request-context-get"}),"APIRequestContext.get(url[, options])")," and similar methods are stored in the memory, so that you can later call ",(0,r.kt)("a",u({parentName:"p"},{href:"/java/docs/next/api/class-apiresponse#api-response-body"}),"APIResponse.body()"),". This method discards all stored responses, and makes ",(0,r.kt)("a",u({parentName:"p"},{href:"/java/docs/next/api/class-apiresponse#api-response-body"}),"APIResponse.body()"),' throw "Response disposed" error.'),(0,r.kt)("h2",u({},{id:"api-request-context-fetch"}),"APIRequestContext.fetch(urlOrRequest","[, options]",")"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"urlOrRequest"),(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"api-request-context-fetch-option-url-or-request"})," ","<",(0,r.kt)("a",u({parentName:"li"},{href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"}),"String"),"|",(0,r.kt)("a",u({parentName:"li"},{href:"/java/docs/next/api/class-request",title:"Request"}),"Request"),">"," Target URL or Request to get all parameters from.",(0,r.kt)("a",{href:"#api-request-context-fetch-option-url-or-request",class:"list-anchor"},"#")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"options"),(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"api-request-context-fetch-option-params"})," ","<",(0,r.kt)("a",u({parentName:"li"},{href:"/java/docs/next/api/class-requestoptions",title:"RequestOptions"}),"RequestOptions"),">"," Optional request parameters.",(0,r.kt)("a",{href:"#api-request-context-fetch-option-params",class:"list-anchor"},"#")),(0,r.kt)("li",{parentName:"ul"},"returns:",(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"api-request-context-fetch-return"})," ","<",(0,r.kt)("a",u({parentName:"li"},{href:"/java/docs/next/api/class-apiresponse",title:"APIResponse"}),"APIResponse"),">",(0,r.kt)("a",{href:"#api-request-context-fetch-return",class:"list-anchor"},"#"))),(0,r.kt)("p",null,"Sends HTTP(S) request and returns its response. The method will populate request cookies from the context and update context cookies from the response. The method will automatically follow redirects."),(0,r.kt)("h2",u({},{id:"api-request-context-get"}),"APIRequestContext.get(url","[, options]",")"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"url"),(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"api-request-context-get-option-url"})," ","<",(0,r.kt)("a",u({parentName:"li"},{href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"}),"String"),">"," Target URL.",(0,r.kt)("a",{href:"#api-request-context-get-option-url",class:"list-anchor"},"#")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"options"),(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"api-request-context-get-option-params"})," ","<",(0,r.kt)("a",u({parentName:"li"},{href:"/java/docs/next/api/class-requestoptions",title:"RequestOptions"}),"RequestOptions"),">"," Optional request parameters.",(0,r.kt)("a",{href:"#api-request-context-get-option-params",class:"list-anchor"},"#")),(0,r.kt)("li",{parentName:"ul"},"returns:",(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"api-request-context-get-return"})," ","<",(0,r.kt)("a",u({parentName:"li"},{href:"/java/docs/next/api/class-apiresponse",title:"APIResponse"}),"APIResponse"),">",(0,r.kt)("a",{href:"#api-request-context-get-return",class:"list-anchor"},"#"))),(0,r.kt)("p",null,"Sends HTTP(S) ",(0,r.kt)("a",u({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/GET"}),"GET")," request and returns its response. The method will populate request cookies from the context and update context cookies from the response. The method will automatically follow redirects."),(0,r.kt)("h2",u({},{id:"api-request-context-head"}),"APIRequestContext.head(url","[, options]",")"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"url"),(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"api-request-context-head-option-url"})," ","<",(0,r.kt)("a",u({parentName:"li"},{href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"}),"String"),">"," Target URL.",(0,r.kt)("a",{href:"#api-request-context-head-option-url",class:"list-anchor"},"#")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"options"),(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"api-request-context-head-option-params"})," ","<",(0,r.kt)("a",u({parentName:"li"},{href:"/java/docs/next/api/class-requestoptions",title:"RequestOptions"}),"RequestOptions"),">"," Optional request parameters.",(0,r.kt)("a",{href:"#api-request-context-head-option-params",class:"list-anchor"},"#")),(0,r.kt)("li",{parentName:"ul"},"returns:",(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"api-request-context-head-return"})," ","<",(0,r.kt)("a",u({parentName:"li"},{href:"/java/docs/next/api/class-apiresponse",title:"APIResponse"}),"APIResponse"),">",(0,r.kt)("a",{href:"#api-request-context-head-return",class:"list-anchor"},"#"))),(0,r.kt)("p",null,"Sends HTTP(S) ",(0,r.kt)("a",u({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/HEAD"}),"HEAD")," request and returns its response. The method will populate request cookies from the context and update context cookies from the response. The method will automatically follow redirects."),(0,r.kt)("h2",u({},{id:"api-request-context-patch"}),"APIRequestContext.patch(url","[, options]",")"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"url"),(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"api-request-context-patch-option-url"})," ","<",(0,r.kt)("a",u({parentName:"li"},{href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"}),"String"),">"," Target URL.",(0,r.kt)("a",{href:"#api-request-context-patch-option-url",class:"list-anchor"},"#")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"options"),(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"api-request-context-patch-option-params"})," ","<",(0,r.kt)("a",u({parentName:"li"},{href:"/java/docs/next/api/class-requestoptions",title:"RequestOptions"}),"RequestOptions"),">"," Optional request parameters.",(0,r.kt)("a",{href:"#api-request-context-patch-option-params",class:"list-anchor"},"#")),(0,r.kt)("li",{parentName:"ul"},"returns:",(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"api-request-context-patch-return"})," ","<",(0,r.kt)("a",u({parentName:"li"},{href:"/java/docs/next/api/class-apiresponse",title:"APIResponse"}),"APIResponse"),">",(0,r.kt)("a",{href:"#api-request-context-patch-return",class:"list-anchor"},"#"))),(0,r.kt)("p",null,"Sends HTTP(S) ",(0,r.kt)("a",u({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/PATCH"}),"PATCH")," request and returns its response. The method will populate request cookies from the context and update context cookies from the response. The method will automatically follow redirects."),(0,r.kt)("h2",u({},{id:"api-request-context-post"}),"APIRequestContext.post(url","[, options]",")"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"url"),(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"api-request-context-post-option-url"})," ","<",(0,r.kt)("a",u({parentName:"li"},{href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"}),"String"),">"," Target URL.",(0,r.kt)("a",{href:"#api-request-context-post-option-url",class:"list-anchor"},"#")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"options"),(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"api-request-context-post-option-params"})," ","<",(0,r.kt)("a",u({parentName:"li"},{href:"/java/docs/next/api/class-requestoptions",title:"RequestOptions"}),"RequestOptions"),">"," Optional request parameters.",(0,r.kt)("a",{href:"#api-request-context-post-option-params",class:"list-anchor"},"#")),(0,r.kt)("li",{parentName:"ul"},"returns:",(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"api-request-context-post-return"})," ","<",(0,r.kt)("a",u({parentName:"li"},{href:"/java/docs/next/api/class-apiresponse",title:"APIResponse"}),"APIResponse"),">",(0,r.kt)("a",{href:"#api-request-context-post-return",class:"list-anchor"},"#"))),(0,r.kt)("p",null,"Sends HTTP(S) ",(0,r.kt)("a",u({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/POST"}),"POST")," request and returns its response. The method will populate request cookies from the context and update context cookies from the response. The method will automatically follow redirects."),(0,r.kt)("h2",u({},{id:"api-request-context-put"}),"APIRequestContext.put(url","[, options]",")"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"url"),(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"api-request-context-put-option-url"})," ","<",(0,r.kt)("a",u({parentName:"li"},{href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"}),"String"),">"," Target URL.",(0,r.kt)("a",{href:"#api-request-context-put-option-url",class:"list-anchor"},"#")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"options"),(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"api-request-context-put-option-params"})," ","<",(0,r.kt)("a",u({parentName:"li"},{href:"/java/docs/next/api/class-requestoptions",title:"RequestOptions"}),"RequestOptions"),">"," Optional request parameters.",(0,r.kt)("a",{href:"#api-request-context-put-option-params",class:"list-anchor"},"#")),(0,r.kt)("li",{parentName:"ul"},"returns:",(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"api-request-context-put-return"})," ","<",(0,r.kt)("a",u({parentName:"li"},{href:"/java/docs/next/api/class-apiresponse",title:"APIResponse"}),"APIResponse"),">",(0,r.kt)("a",{href:"#api-request-context-put-return",class:"list-anchor"},"#"))),(0,r.kt)("p",null,"Sends HTTP(S) ",(0,r.kt)("a",u({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/PUT"}),"PUT")," request and returns its response. The method will populate request cookies from the context and update context cookies from the response. The method will automatically follow redirects."),(0,r.kt)("h2",u({},{id:"api-request-context-storage-state"}),"APIRequestContext.storageState(","[options]",")"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"options")," ","<",(0,r.kt)("inlineCode",{parentName:"li"},"ApiRequestContext.StorageStateOptions"),">",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"setPath"),(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"api-request-context-storage-state-option-path"})," ","<",(0,r.kt)("a",u({parentName:"li"},{href:"https://docs.oracle.com/javase/8/docs/api/java/nio/file/Path.html",title:"Path"}),"Path"),">"," The file path to save the storage state to. If ",(0,r.kt)("inlineCode",{parentName:"li"},"path")," is a relative path, then it is resolved relative to current working directory. If no path is provided, storage state is still returned, but won't be saved to the disk.",(0,r.kt)("a",{href:"#api-request-context-storage-state-option-path",class:"list-anchor"},"#")))),(0,r.kt)("li",{parentName:"ul"},"returns:",(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"api-request-context-storage-state-return"})," ","<",(0,r.kt)("a",u({parentName:"li"},{href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"}),"String"),">",(0,r.kt)("a",{href:"#api-request-context-storage-state-return",class:"list-anchor"},"#"))),(0,r.kt)("p",null,"Returns storage state for this request context, contains current cookies and local storage snapshot if it was passed to the constructor."))}q.isMDXComponent=!0}}]);