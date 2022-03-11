"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[890],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return h}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),p=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(r),h=n,m=c["".concat(o,".").concat(h)]||c[h]||d[h]||s;return r?a.createElement(m,l(l({ref:t},u),{},{components:r})):a.createElement(m,l({ref:t},u))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,l=new Array(s);l[0]=c;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var p=2;p<s;p++)l[p]=r[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},3811:function(e,t,r){r.d(t,{Z:function(){return p}});var a=r(7294),n=Object.defineProperty,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,o=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;function p({children:e,hidden:t,className:r}){return a.createElement("div",((e,t)=>{for(var r in t||(t={}))l.call(t,r)&&o(e,r,t[r]);if(s)for(var r of s(t))i.call(t,r)&&o(e,r,t[r]);return e})({role:"tabpanel"},{hidden:t,className:r}),e)}},3824:function(e,t,r){r.d(t,{Z:function(){return k}});var a=r(7294),n=r(4939),s=r(5882),l=r(6010),i="tabItem_LplD",o=Object.defineProperty,p=Object.defineProperties,u=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,m=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,f=(e,t)=>{for(var r in t||(t={}))c.call(t,r)&&m(e,r,t[r]);if(d)for(var r of d(t))h.call(t,r)&&m(e,r,t[r]);return e};function y(e){var t,r,n;const{lazy:o,block:d,defaultValue:c,values:h,groupId:m,className:y}=e,k=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),q=null!=h?h:k.map((({props:{value:e,label:t,attributes:r}})=>({value:e,label:t,attributes:r}))),N=(0,s.lx)(q,((e,t)=>e.value===t.value));if(N.length>0)throw new Error(`Docusaurus error: Duplicate values "${N.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const b=null===c?c:null!=(n=null!=c?c:null==(t=k.find((e=>e.props.default)))?void 0:t.props.value)?n:null==(r=k[0])?void 0:r.props.value;if(null!==b&&!q.some((e=>e.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${q.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:g}=(0,s.UB)(),[x,w]=(0,a.useState)(b),T=[],{blockElementScrollPositionUntilNextRender:C}=(0,s.o5)();if(null!=m){const e=v[m];null!=e&&e!==x&&q.some((t=>t.value===e))&&w(e)}const O=e=>{const t=e.currentTarget,r=T.indexOf(t),a=q[r].value;a!==x&&(C(t),w(a),null!=m&&g(m,a))},_=e=>{let t=null;switch(e.key){case"ArrowRight":{const r=T.indexOf(e.currentTarget)+1;t=T[r]||T[0];break}case"ArrowLeft":{const r=T.indexOf(e.currentTarget)-1;t=T[r]||T[T.length-1];break}}null==t||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":d},y)},q.map((({value:e,label:t,attributes:r})=>{return a.createElement("li",(n=f({role:"tab",tabIndex:x===e?0:-1,"aria-selected":x===e,key:e,ref:e=>T.push(e),onKeyDown:_,onFocus:O,onClick:O},r),s={className:(0,l.Z)("tabs__item",i,null==r?void 0:r.className,{"tabs__item--active":x===e})},p(n,u(s))),null!=t?t:e);var n,s}))),o?(0,a.cloneElement)(k.filter((e=>e.props.value===x))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},k.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==x})))))}function k(e){const t=(0,n.Z)();return a.createElement(y,f({key:String(t)},e))}},8372:function(e,t,r){r.r(t),r.d(t,{assets:function(){return k},contentTitle:function(){return f},default:function(){return b},frontMatter:function(){return m},metadata:function(){return y},toc:function(){return q}});var a=r(3905),n=r(3824),s=r(3811),l=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,h=(e,t)=>{for(var r in t||(t={}))u.call(t,r)&&c(e,r,t[r]);if(p)for(var r of p(t))d.call(t,r)&&c(e,r,t[r]);return e};const m={id:"class-request",title:"Request"},f=void 0,y={unversionedId:"api/class-request",id:"api/class-request",title:"Request",description:"Whenever the page sends a request for a network resource the following sequence of events are emitted by [Page]:",source:"@site/docs/api/class-request.mdx",sourceDirName:"api",slug:"/api/class-request",permalink:"/python/docs/next/api/class-request",tags:[],version:"current",frontMatter:{id:"class-request",title:"Request"},sidebar:"api",previous:{title:"Page",permalink:"/python/docs/next/api/class-page"},next:{title:"Response",permalink:"/python/docs/next/api/class-response"}},k={},q=[{value:"request.all_headers()",id:"request-all-headers",level:2},{value:"request.failure",id:"request-failure",level:2},{value:"request.frame",id:"request-frame",level:2},{value:"request.header_value(name)",id:"request-header-value",level:2},{value:"request.headers",id:"request-headers",level:2},{value:"request.headers_array()",id:"request-headers-array",level:2},{value:"request.is_navigation_request()",id:"request-is-navigation-request",level:2},{value:"request.method",id:"request-method",level:2},{value:"request.post_data",id:"request-post-data",level:2},{value:"request.post_data_buffer",id:"request-post-data-buffer",level:2},{value:"request.post_data_json",id:"request-post-data-json",level:2},{value:"request.redirected_from",id:"request-redirected-from",level:2},{value:"request.redirected_to",id:"request-redirected-to",level:2},{value:"request.resource_type",id:"request-resource-type",level:2},{value:"request.response()",id:"request-response",level:2},{value:"request.sizes()",id:"request-sizes",level:2},{value:"request.timing",id:"request-timing",level:2},{value:"request.url",id:"request-url",level:2}],N={toc:q};function b(e){var t,r=e,{components:l}=r,c=((e,t)=>{var r={};for(var a in e)u.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&p)for(var a of p(e))t.indexOf(a)<0&&d.call(e,a)&&(r[a]=e[a]);return r})(r,["components"]);return(0,a.kt)("wrapper",(t=h(h({},N),c),i(t,o({components:l,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"Whenever the page sends a request for a network resource the following sequence of events are emitted by ",(0,a.kt)("a",h({parentName:"p"},{href:"/python/docs/next/api/class-page",title:"Page"}),"Page"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",h({parentName:"li"},{href:"/python/docs/next/api/class-page#page-event-request"}),'page.on("request")')," emitted when the request is issued by the page."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",h({parentName:"li"},{href:"/python/docs/next/api/class-page#page-event-response"}),'page.on("response")')," emitted when/if the response status and headers are received for the request."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",h({parentName:"li"},{href:"/python/docs/next/api/class-page#page-event-request-finished"}),'page.on("requestfinished")')," emitted when the response body is downloaded and the request is complete.")),(0,a.kt)("p",null,"If request fails at some point, then instead of ",(0,a.kt)("inlineCode",{parentName:"p"},"'requestfinished'")," event (and possibly instead of 'response' event), the  ",(0,a.kt)("a",h({parentName:"p"},{href:"/python/docs/next/api/class-page#page-event-request-failed"}),'page.on("requestfailed")')," event is emitted."),(0,a.kt)("div",h({},{className:"admonition admonition-note alert alert--secondary"}),(0,a.kt)("div",h({parentName:"div"},{className:"admonition-heading"}),(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",h({parentName:"h5"},{className:"admonition-icon"}),(0,a.kt)("svg",h({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),(0,a.kt)("path",h({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),(0,a.kt)("div",h({parentName:"div"},{className:"admonition-content"}),(0,a.kt)("p",{parentName:"div"},"HTTP Error responses, such as 404 or 503, are still successful responses from HTTP standpoint, so request will complete with ",(0,a.kt)("inlineCode",{parentName:"p"},"'requestfinished'")," event."))),(0,a.kt)("p",null,"If request gets a 'redirect' response, the request is successfully finished with the 'requestfinished' event, and a new request is  issued to a redirected url."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",h({parentName:"li"},{href:"/python/docs/next/api/class-request#request-all-headers"}),"request.all_headers()")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",h({parentName:"li"},{href:"/python/docs/next/api/class-request#request-failure"}),"request.failure")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",h({parentName:"li"},{href:"/python/docs/next/api/class-request#request-frame"}),"request.frame")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",h({parentName:"li"},{href:"/python/docs/next/api/class-request#request-header-value"}),"request.header_value(name)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",h({parentName:"li"},{href:"/python/docs/next/api/class-request#request-headers"}),"request.headers")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",h({parentName:"li"},{href:"/python/docs/next/api/class-request#request-headers-array"}),"request.headers_array()")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",h({parentName:"li"},{href:"/python/docs/next/api/class-request#request-is-navigation-request"}),"request.is_navigation_request()")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",h({parentName:"li"},{href:"/python/docs/next/api/class-request#request-method"}),"request.method")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",h({parentName:"li"},{href:"/python/docs/next/api/class-request#request-post-data"}),"request.post_data")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",h({parentName:"li"},{href:"/python/docs/next/api/class-request#request-post-data-buffer"}),"request.post_data_buffer")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",h({parentName:"li"},{href:"/python/docs/next/api/class-request#request-post-data-json"}),"request.post_data_json")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",h({parentName:"li"},{href:"/python/docs/next/api/class-request#request-redirected-from"}),"request.redirected_from")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",h({parentName:"li"},{href:"/python/docs/next/api/class-request#request-redirected-to"}),"request.redirected_to")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",h({parentName:"li"},{href:"/python/docs/next/api/class-request#request-resource-type"}),"request.resource_type")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",h({parentName:"li"},{href:"/python/docs/next/api/class-request#request-response"}),"request.response()")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",h({parentName:"li"},{href:"/python/docs/next/api/class-request#request-sizes"}),"request.sizes()")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",h({parentName:"li"},{href:"/python/docs/next/api/class-request#request-timing"}),"request.timing")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",h({parentName:"li"},{href:"/python/docs/next/api/class-request#request-url"}),"request.url"))),(0,a.kt)("h2",h({},{id:"request-all-headers"}),"request.all_headers()"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"returns:",(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"request-all-headers-return"})," ","<",(0,a.kt)("a",h({parentName:"li"},{href:"https://docs.python.org/3/library/typing.html#typing.Dict",title:"Dict"}),"Dict"),"[",(0,a.kt)("a",h({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"}),"str"),", ",(0,a.kt)("a",h({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"}),"str"),"]",">",(0,a.kt)("a",{href:"#request-all-headers-return",class:"list-anchor"},"#"))),(0,a.kt)("p",null,"An object with all the request HTTP headers associated with this request. The header names are lower-cased."),(0,a.kt)("h2",h({},{id:"request-failure"}),"request.failure"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"returns:",(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"request-failure-return"})," ","<",(0,a.kt)("a",h({parentName:"li"},{href:"https://docs.python.org/3/library/constants.html#None",title:"None"}),"NoneType"),"|",(0,a.kt)("a",h({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"}),"str"),">",(0,a.kt)("a",{href:"#request-failure-return",class:"list-anchor"},"#"))),(0,a.kt)("p",null,"The method returns ",(0,a.kt)("inlineCode",{parentName:"p"},"null")," unless this request has failed, as reported by ",(0,a.kt)("inlineCode",{parentName:"p"},"requestfailed")," event."),(0,a.kt)("p",null,"Example of logging of all the failed requests:"),(0,a.kt)("pre",null,(0,a.kt)("code",h({parentName:"pre"},{className:"language-py"}),'page.on("requestfailed", lambda request: print(request.url + " " + request.failure))\n')),(0,a.kt)("h2",h({},{id:"request-frame"}),"request.frame"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"returns:",(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"request-frame-return"})," ","<",(0,a.kt)("a",h({parentName:"li"},{href:"/python/docs/next/api/class-frame",title:"Frame"}),"Frame"),">",(0,a.kt)("a",{href:"#request-frame-return",class:"list-anchor"},"#"))),(0,a.kt)("p",null,"Returns the ",(0,a.kt)("a",h({parentName:"p"},{href:"/python/docs/next/api/class-frame",title:"Frame"}),"Frame")," that initiated this request."),(0,a.kt)("h2",h({},{id:"request-header-value"}),"request.header_value(name)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"name"),(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"request-header-value-option-name"})," ","<",(0,a.kt)("a",h({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"}),"str"),">"," Name of the header.",(0,a.kt)("a",{href:"#request-header-value-option-name",class:"list-anchor"},"#")),(0,a.kt)("li",{parentName:"ul"},"returns:",(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"request-header-value-return"})," ","<",(0,a.kt)("a",h({parentName:"li"},{href:"https://docs.python.org/3/library/constants.html#None",title:"None"}),"NoneType"),"|",(0,a.kt)("a",h({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"}),"str"),">",(0,a.kt)("a",{href:"#request-header-value-return",class:"list-anchor"},"#"))),(0,a.kt)("p",null,"Returns the value of the header matching the name. The name is case insensitive."),(0,a.kt)("h2",h({},{id:"request-headers"}),"request.headers"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"returns:",(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"request-headers-return"})," ","<",(0,a.kt)("a",h({parentName:"li"},{href:"https://docs.python.org/3/library/typing.html#typing.Dict",title:"Dict"}),"Dict"),"[",(0,a.kt)("a",h({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"}),"str"),", ",(0,a.kt)("a",h({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"}),"str"),"]",">",(0,a.kt)("a",{href:"#request-headers-return",class:"list-anchor"},"#"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"DEPRECATED")," Incomplete list of headers as seen by the rendering engine. Use ",(0,a.kt)("a",h({parentName:"p"},{href:"/python/docs/next/api/class-request#request-all-headers"}),"request.all_headers()")," instead."),(0,a.kt)("h2",h({},{id:"request-headers-array"}),"request.headers_array()"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"returns:",(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"request-headers-array-return"})," ","<",(0,a.kt)("a",h({parentName:"li"},{href:"https://docs.python.org/3/library/typing.html#typing.List",title:"List"}),"List"),"[",(0,a.kt)("a",h({parentName:"li"},{href:"https://docs.python.org/3/library/typing.html#typing.Dict",title:"Dict"}),"Dict"),"]",">",(0,a.kt)("a",{href:"#request-headers-array-return",class:"list-anchor"},"#"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"name")," ","<",(0,a.kt)("a",h({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"}),"str"),">"," Name of the header."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"value")," ","<",(0,a.kt)("a",h({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"}),"str"),">"," Value of the header.")))),(0,a.kt)("p",null,"An array with all the request HTTP headers associated with this request. Unlike ",(0,a.kt)("a",h({parentName:"p"},{href:"/python/docs/next/api/class-request#request-all-headers"}),"request.all_headers()"),", header names are NOT lower-cased. Headers with multiple entries, such as ",(0,a.kt)("inlineCode",{parentName:"p"},"Set-Cookie"),", appear in the array multiple times."),(0,a.kt)("h2",h({},{id:"request-is-navigation-request"}),"request.is_navigation_request()"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"returns:",(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"request-is-navigation-request-return"})," ","<",(0,a.kt)("a",h({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html",title:"bool"}),"bool"),">",(0,a.kt)("a",{href:"#request-is-navigation-request-return",class:"list-anchor"},"#"))),(0,a.kt)("p",null,"Whether this request is driving frame's navigation."),(0,a.kt)("h2",h({},{id:"request-method"}),"request.method"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"returns:",(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"request-method-return"})," ","<",(0,a.kt)("a",h({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"}),"str"),">",(0,a.kt)("a",{href:"#request-method-return",class:"list-anchor"},"#"))),(0,a.kt)("p",null,"Request's method (GET, POST, etc.)"),(0,a.kt)("h2",h({},{id:"request-post-data"}),"request.post_data"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"returns:",(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"request-post-data-return"})," ","<",(0,a.kt)("a",h({parentName:"li"},{href:"https://docs.python.org/3/library/constants.html#None",title:"None"}),"NoneType"),"|",(0,a.kt)("a",h({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"}),"str"),">",(0,a.kt)("a",{href:"#request-post-data-return",class:"list-anchor"},"#"))),(0,a.kt)("p",null,"Request's post body, if any."),(0,a.kt)("h2",h({},{id:"request-post-data-buffer"}),"request.post_data_buffer"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"returns:",(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"request-post-data-buffer-return"})," ","<",(0,a.kt)("a",h({parentName:"li"},{href:"https://docs.python.org/3/library/constants.html#None",title:"None"}),"NoneType"),"|",(0,a.kt)("a",h({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#bytes",title:"bytes"}),"bytes"),">",(0,a.kt)("a",{href:"#request-post-data-buffer-return",class:"list-anchor"},"#"))),(0,a.kt)("p",null,"Request's post body in a binary form, if any."),(0,a.kt)("h2",h({},{id:"request-post-data-json"}),"request.post_data_json"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"returns:",(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"request-post-data-json-return"})," ","<",(0,a.kt)("a",h({parentName:"li"},{href:"https://docs.python.org/3/library/constants.html#None",title:"None"}),"NoneType"),"|",(0,a.kt)("a",h({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#Description",title:"Serializable"}),"Serializable"),">",(0,a.kt)("a",{href:"#request-post-data-json-return",class:"list-anchor"},"#"))),(0,a.kt)("p",null,"Returns parsed request's body for ",(0,a.kt)("inlineCode",{parentName:"p"},"form-urlencoded")," and JSON as a fallback if any."),(0,a.kt)("p",null,"When the response is ",(0,a.kt)("inlineCode",{parentName:"p"},"application/x-www-form-urlencoded")," then a key/value object of the values will be returned. Otherwise it will be parsed as JSON."),(0,a.kt)("h2",h({},{id:"request-redirected-from"}),"request.redirected_from"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"returns:",(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"request-redirected-from-return"})," ","<",(0,a.kt)("a",h({parentName:"li"},{href:"https://docs.python.org/3/library/constants.html#None",title:"None"}),"NoneType"),"|",(0,a.kt)("a",h({parentName:"li"},{href:"/python/docs/next/api/class-request",title:"Request"}),"Request"),">",(0,a.kt)("a",{href:"#request-redirected-from-return",class:"list-anchor"},"#"))),(0,a.kt)("p",null,"Request that was redirected by the server to this one, if any."),(0,a.kt)("p",null,"When the server responds with a redirect, Playwright creates a new ",(0,a.kt)("a",h({parentName:"p"},{href:"/python/docs/next/api/class-request",title:"Request"}),"Request")," object. The two requests are connected by ",(0,a.kt)("inlineCode",{parentName:"p"},"redirectedFrom()")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"redirectedTo()")," methods. When multiple server redirects has happened, it is possible to construct the whole redirect chain by repeatedly calling ",(0,a.kt)("inlineCode",{parentName:"p"},"redirectedFrom()"),"."),(0,a.kt)("p",null,"For example, if the website ",(0,a.kt)("inlineCode",{parentName:"p"},"http://example.com")," redirects to ",(0,a.kt)("inlineCode",{parentName:"p"},"https://example.com"),":"),(0,a.kt)(n.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,a.kt)(s.Z,{value:"sync",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",h({parentName:"pre"},{className:"language-py"}),'response = page.goto("http://example.com")\nprint(response.request.redirected_from.url) # "http://example.com"\n'))),(0,a.kt)(s.Z,{value:"async",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",h({parentName:"pre"},{className:"language-py"}),'response = await page.goto("http://example.com")\nprint(response.request.redirected_from.url) # "http://example.com"\n')))),(0,a.kt)("p",null,"If the website ",(0,a.kt)("inlineCode",{parentName:"p"},"https://google.com")," has no redirects:"),(0,a.kt)(n.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,a.kt)(s.Z,{value:"sync",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",h({parentName:"pre"},{className:"language-py"}),'response = page.goto("https://google.com")\nprint(response.request.redirected_from) # None\n'))),(0,a.kt)(s.Z,{value:"async",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",h({parentName:"pre"},{className:"language-py"}),'response = await page.goto("https://google.com")\nprint(response.request.redirected_from) # None\n')))),(0,a.kt)("h2",h({},{id:"request-redirected-to"}),"request.redirected_to"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"returns:",(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"request-redirected-to-return"})," ","<",(0,a.kt)("a",h({parentName:"li"},{href:"https://docs.python.org/3/library/constants.html#None",title:"None"}),"NoneType"),"|",(0,a.kt)("a",h({parentName:"li"},{href:"/python/docs/next/api/class-request",title:"Request"}),"Request"),">",(0,a.kt)("a",{href:"#request-redirected-to-return",class:"list-anchor"},"#"))),(0,a.kt)("p",null,"New request issued by the browser if the server responded with redirect."),(0,a.kt)("p",null,"This method is the opposite of ",(0,a.kt)("a",h({parentName:"p"},{href:"/python/docs/next/api/class-request#request-redirected-from"}),"request.redirected_from"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",h({parentName:"pre"},{className:"language-py"}),"assert request.redirected_from.redirected_to == request\n")),(0,a.kt)("h2",h({},{id:"request-resource-type"}),"request.resource_type"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"returns:",(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"request-resource-type-return"})," ","<",(0,a.kt)("a",h({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"}),"str"),">",(0,a.kt)("a",{href:"#request-resource-type-return",class:"list-anchor"},"#"))),(0,a.kt)("p",null,"Contains the request's resource type as it was perceived by the rendering engine. ResourceType will be one of the following: ",(0,a.kt)("inlineCode",{parentName:"p"},"document"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"stylesheet"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"image"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"media"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"font"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"script"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"texttrack"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"xhr"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"fetch"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"eventsource"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"websocket"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"manifest"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"other"),"."),(0,a.kt)("h2",h({},{id:"request-response"}),"request.response()"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"returns:",(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"request-response-return"})," ","<",(0,a.kt)("a",h({parentName:"li"},{href:"https://docs.python.org/3/library/constants.html#None",title:"None"}),"NoneType"),"|",(0,a.kt)("a",h({parentName:"li"},{href:"/python/docs/next/api/class-response",title:"Response"}),"Response"),">",(0,a.kt)("a",{href:"#request-response-return",class:"list-anchor"},"#"))),(0,a.kt)("p",null,"Returns the matching ",(0,a.kt)("a",h({parentName:"p"},{href:"/python/docs/next/api/class-response",title:"Response"}),"Response")," object, or ",(0,a.kt)("inlineCode",{parentName:"p"},"null")," if the response was not received due to error."),(0,a.kt)("h2",h({},{id:"request-sizes"}),"request.sizes()"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"returns:",(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"request-sizes-return"})," ","<",(0,a.kt)("a",h({parentName:"li"},{href:"https://docs.python.org/3/library/typing.html#typing.Dict",title:"Dict"}),"Dict"),">",(0,a.kt)("a",{href:"#request-sizes-return",class:"list-anchor"},"#"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"requestBodySize")," ","<",(0,a.kt)("a",h({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"int"}),"int"),">"," Size of the request body (POST data payload) in bytes. Set to 0 if there was no body."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"requestHeadersSize")," ","<",(0,a.kt)("a",h({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"int"}),"int"),">"," Total number of bytes from the start of the HTTP request message until (and including) the double CRLF before the body."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"responseBodySize")," ","<",(0,a.kt)("a",h({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"int"}),"int"),">"," Size of the received response body (encoded) in bytes."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"responseHeadersSize")," ","<",(0,a.kt)("a",h({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"int"}),"int"),">"," Total number of bytes from the start of the HTTP response message until (and including) the double CRLF before the body.")))),(0,a.kt)("p",null,"Returns resource size information for given request."),(0,a.kt)("h2",h({},{id:"request-timing"}),"request.timing"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"returns:",(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"request-timing-return"})," ","<",(0,a.kt)("a",h({parentName:"li"},{href:"https://docs.python.org/3/library/typing.html#typing.Dict",title:"Dict"}),"Dict"),">",(0,a.kt)("a",{href:"#request-timing-return",class:"list-anchor"},"#"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"startTime")," ","<",(0,a.kt)("a",h({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"float"}),"float"),">"," Request start time in milliseconds elapsed since January 1, 1970 00:00:00 UTC"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"domainLookupStart")," ","<",(0,a.kt)("a",h({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"float"}),"float"),">"," Time immediately before the browser starts the domain name lookup for the resource. The value is given in milliseconds relative to ",(0,a.kt)("inlineCode",{parentName:"li"},"startTime"),", -1 if not available."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"domainLookupEnd")," ","<",(0,a.kt)("a",h({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"float"}),"float"),">"," Time immediately after the browser starts the domain name lookup for the resource. The value is given in milliseconds relative to ",(0,a.kt)("inlineCode",{parentName:"li"},"startTime"),", -1 if not available."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"connectStart")," ","<",(0,a.kt)("a",h({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"float"}),"float"),">"," Time immediately before the user agent starts establishing the connection to the server to retrieve the resource. The value is given in milliseconds relative to ",(0,a.kt)("inlineCode",{parentName:"li"},"startTime"),", -1 if not available."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"secureConnectionStart")," ","<",(0,a.kt)("a",h({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"float"}),"float"),">"," Time immediately before the browser starts the handshake process to secure the current connection. The value is given in milliseconds relative to ",(0,a.kt)("inlineCode",{parentName:"li"},"startTime"),", -1 if not available."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"connectEnd")," ","<",(0,a.kt)("a",h({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"float"}),"float"),">"," Time immediately before the user agent starts establishing the connection to the server to retrieve the resource. The value is given in milliseconds relative to ",(0,a.kt)("inlineCode",{parentName:"li"},"startTime"),", -1 if not available."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"requestStart")," ","<",(0,a.kt)("a",h({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"float"}),"float"),">"," Time immediately before the browser starts requesting the resource from the server, cache, or local resource. The value is given in milliseconds relative to ",(0,a.kt)("inlineCode",{parentName:"li"},"startTime"),", -1 if not available."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"responseStart")," ","<",(0,a.kt)("a",h({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"float"}),"float"),">"," Time immediately after the browser starts requesting the resource from the server, cache, or local resource. The value is given in milliseconds relative to ",(0,a.kt)("inlineCode",{parentName:"li"},"startTime"),", -1 if not available."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"responseEnd")," ","<",(0,a.kt)("a",h({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"float"}),"float"),">"," Time immediately after the browser receives the last byte of the resource or immediately before the transport connection is closed, whichever comes first. The value is given in milliseconds relative to ",(0,a.kt)("inlineCode",{parentName:"li"},"startTime"),", -1 if not available.")))),(0,a.kt)("p",null,"Returns resource timing information for given request. Most of the timing values become available upon the response, ",(0,a.kt)("inlineCode",{parentName:"p"},"responseEnd")," becomes available when request finishes. Find more information at ",(0,a.kt)("a",h({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/PerformanceResourceTiming"}),"Resource Timing API"),"."),(0,a.kt)(n.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,a.kt)(s.Z,{value:"sync",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",h({parentName:"pre"},{className:"language-py"}),'with page.expect_event("requestfinished") as request_info:\n    page.goto("http://example.com")\nrequest = request_info.value\nprint(request.timing)\n'))),(0,a.kt)(s.Z,{value:"async",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",h({parentName:"pre"},{className:"language-py"}),'async with page.expect_event("requestfinished") as request_info:\n    await page.goto("http://example.com")\nrequest = await request_info.value\nprint(request.timing)\n')))),(0,a.kt)("h2",h({},{id:"request-url"}),"request.url"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"returns:",(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"request-url-return"})," ","<",(0,a.kt)("a",h({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"}),"str"),">",(0,a.kt)("a",{href:"#request-url-return",class:"list-anchor"},"#"))),(0,a.kt)("p",null,"URL of the request."))}b.isMDXComponent=!0}}]);