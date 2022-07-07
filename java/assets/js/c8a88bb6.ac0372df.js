"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[6704],{3905:function(e,a,t){t.d(a,{Zo:function(){return c},kt:function(){return h}});var s=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function n(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);a&&(s=s.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,s)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?n(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,s,r=function(e,a){if(null==e)return{};var t,s,r={},n=Object.keys(e);for(s=0;s<n.length;s++)t=n[s],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(s=0;s<n.length;s++)t=n[s],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=s.createContext({}),p=function(e){var a=s.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},c=function(e){var a=p(e.components);return s.createElement(o.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return s.createElement(s.Fragment,{},a)}},u=s.forwardRef((function(e,a){var t=e.components,r=e.mdxType,n=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(t),h=r,m=u["".concat(o,".").concat(h)]||u[h]||d[h]||n;return t?s.createElement(m,l(l({ref:a},c),{},{components:t})):s.createElement(m,l({ref:a},c))}));function h(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var n=t.length,l=new Array(n);l[0]=u;var i={};for(var o in a)hasOwnProperty.call(a,o)&&(i[o]=a[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var p=2;p<n;p++)l[p]=t[p];return s.createElement.apply(null,l)}return s.createElement.apply(null,t)}u.displayName="MDXCreateElement"},6073:function(e,a,t){t.r(a),t.d(a,{assets:function(){return k},contentTitle:function(){return h},default:function(){return N},frontMatter:function(){return u},metadata:function(){return m},toc:function(){return f}});var s=t(3905),r=Object.defineProperty,n=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,a,t)=>a in e?r(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,d=(e,a)=>{for(var t in a||(a={}))o.call(a,t)&&c(e,t,a[t]);if(i)for(var t of i(a))p.call(a,t)&&c(e,t,a[t]);return e};const u={id:"class-response",title:"Response"},h=void 0,m={unversionedId:"api/class-response",id:"version-stable/api/class-response",title:"Response",description:"[Response] class represents responses which are received by page.",source:"@site/versioned_docs/version-stable/api/class-response.mdx",sourceDirName:"api",slug:"/api/class-response",permalink:"/java/docs/api/class-response",tags:[],version:"stable",frontMatter:{id:"class-response",title:"Response"},sidebar:"api",previous:{title:"Request",permalink:"/java/docs/api/class-request"},next:{title:"Route",permalink:"/java/docs/api/class-route"}},k={},f=[{value:"Response.allHeaders()",id:"response-all-headers",level:2},{value:"Response.body()",id:"response-body",level:2},{value:"Response.finished()",id:"response-finished",level:2},{value:"Response.frame()",id:"response-frame",level:2},{value:"Response.fromServiceWorker()",id:"response-from-service-worker",level:2},{value:"Response.headerValue(name)",id:"response-header-value",level:2},{value:"Response.headerValues(name)",id:"response-header-values",level:2},{value:"Response.headers()",id:"response-headers",level:2},{value:"Response.headersArray()",id:"response-headers-array",level:2},{value:"Response.ok()",id:"response-ok",level:2},{value:"Response.request()",id:"response-request",level:2},{value:"Response.securityDetails()",id:"response-security-details",level:2},{value:"Response.serverAddr()",id:"response-server-addr",level:2},{value:"Response.status()",id:"response-status",level:2},{value:"Response.statusText()",id:"response-status-text",level:2},{value:"Response.text()",id:"response-text",level:2},{value:"Response.url()",id:"response-url",level:2}],v={toc:f};function N(e){var a,t=e,{components:r}=t,c=((e,a)=>{var t={};for(var s in e)o.call(e,s)&&a.indexOf(s)<0&&(t[s]=e[s]);if(null!=e&&i)for(var s of i(e))a.indexOf(s)<0&&p.call(e,s)&&(t[s]=e[s]);return t})(t,["components"]);return(0,s.kt)("wrapper",(a=d(d({},v),c),n(a,l({components:r,mdxType:"MDXLayout"}))),(0,s.kt)("p",null,(0,s.kt)("a",d({parentName:"p"},{href:"/java/docs/api/class-response",title:"Response"}),"Response")," class represents responses which are received by page."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",d({parentName:"li"},{href:"/java/docs/api/class-response#response-all-headers"}),"Response.allHeaders()")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",d({parentName:"li"},{href:"/java/docs/api/class-response#response-body"}),"Response.body()")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",d({parentName:"li"},{href:"/java/docs/api/class-response#response-finished"}),"Response.finished()")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",d({parentName:"li"},{href:"/java/docs/api/class-response#response-frame"}),"Response.frame()")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",d({parentName:"li"},{href:"/java/docs/api/class-response#response-from-service-worker"}),"Response.fromServiceWorker()")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",d({parentName:"li"},{href:"/java/docs/api/class-response#response-headers"}),"Response.headers()")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",d({parentName:"li"},{href:"/java/docs/api/class-response#response-headers-array"}),"Response.headersArray()")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",d({parentName:"li"},{href:"/java/docs/api/class-response#response-header-value"}),"Response.headerValue(name)")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",d({parentName:"li"},{href:"/java/docs/api/class-response#response-header-values"}),"Response.headerValues(name)")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",d({parentName:"li"},{href:"/java/docs/api/class-response#response-ok"}),"Response.ok()")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",d({parentName:"li"},{href:"/java/docs/api/class-response#response-request"}),"Response.request()")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",d({parentName:"li"},{href:"/java/docs/api/class-response#response-security-details"}),"Response.securityDetails()")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",d({parentName:"li"},{href:"/java/docs/api/class-response#response-server-addr"}),"Response.serverAddr()")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",d({parentName:"li"},{href:"/java/docs/api/class-response#response-status"}),"Response.status()")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",d({parentName:"li"},{href:"/java/docs/api/class-response#response-status-text"}),"Response.statusText()")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",d({parentName:"li"},{href:"/java/docs/api/class-response#response-text"}),"Response.text()")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",d({parentName:"li"},{href:"/java/docs/api/class-response#response-url"}),"Response.url()"))),(0,s.kt)("h2",d({},{id:"response-all-headers"}),"Response.allHeaders()"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"response-all-headers-return"})," ","<",(0,s.kt)("a",d({parentName:"li"},{href:"https://docs.oracle.com/javase/8/docs/api/java/util/Map.html",title:"Map"}),"Map"),"<",(0,s.kt)("a",d({parentName:"li"},{href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"}),"String"),", ",(0,s.kt)("a",d({parentName:"li"},{href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"}),"String"),">",">",(0,s.kt)("a",{href:"#response-all-headers-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"An object with all the response HTTP headers associated with this response."),(0,s.kt)("h2",d({},{id:"response-body"}),"Response.body()"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"response-body-return"})," ","<",(0,s.kt)("a",d({parentName:"li"},{href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",title:"byte[]"}),"byte","[","]"),">",(0,s.kt)("a",{href:"#response-body-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"Returns the buffer with response body."),(0,s.kt)("h2",d({},{id:"response-finished"}),"Response.finished()"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"response-finished-return"})," ","<",(0,s.kt)("a",d({parentName:"li"},{href:"https://docs.oracle.com/javase/specs/jls/se8/html/jls-3.html#jls-3.10.7",title:"null"}),"null"),"|",(0,s.kt)("a",d({parentName:"li"},{href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"}),"String"),">",(0,s.kt)("a",{href:"#response-finished-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"Waits for this response to finish, returns always ",(0,s.kt)("inlineCode",{parentName:"p"},"null"),"."),(0,s.kt)("h2",d({},{id:"response-frame"}),"Response.frame()"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"response-frame-return"})," ","<",(0,s.kt)("a",d({parentName:"li"},{href:"/java/docs/api/class-frame",title:"Frame"}),"Frame"),">",(0,s.kt)("a",{href:"#response-frame-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"Returns the ",(0,s.kt)("a",d({parentName:"p"},{href:"/java/docs/api/class-frame",title:"Frame"}),"Frame")," that initiated this response."),(0,s.kt)("h2",d({},{id:"response-from-service-worker"}),"Response.fromServiceWorker()"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"response-from-service-worker-return"})," ","<",(0,s.kt)("a",d({parentName:"li"},{href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",title:"boolean"}),"boolean"),">",(0,s.kt)("a",{href:"#response-from-service-worker-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"Indicates whether this Response was fullfilled by a Service Worker's Fetch Handler (i.e. via ",(0,s.kt)("a",d({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/FetchEvent/respondWith"}),"FetchEvent.respondWith"),")."),(0,s.kt)("h2",d({},{id:"response-header-value"}),"Response.headerValue(name)"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"name"),(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"response-header-value-option-name"})," ","<",(0,s.kt)("a",d({parentName:"li"},{href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"}),"String"),">"," Name of the header.",(0,s.kt)("a",{href:"#response-header-value-option-name",class:"list-anchor"},"#")),(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"response-header-value-return"})," ","<",(0,s.kt)("a",d({parentName:"li"},{href:"https://docs.oracle.com/javase/specs/jls/se8/html/jls-3.html#jls-3.10.7",title:"null"}),"null"),"|",(0,s.kt)("a",d({parentName:"li"},{href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"}),"String"),">",(0,s.kt)("a",{href:"#response-header-value-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"Returns the value of the header matching the name. The name is case insensitive. If multiple headers have the same name (except ",(0,s.kt)("inlineCode",{parentName:"p"},"set-cookie"),"), they are returned as a list separated by ",(0,s.kt)("inlineCode",{parentName:"p"},", "),". For ",(0,s.kt)("inlineCode",{parentName:"p"},"set-cookie"),", the ",(0,s.kt)("inlineCode",{parentName:"p"},"\\n")," separator is used. If no headers are found, ",(0,s.kt)("inlineCode",{parentName:"p"},"null")," is returned."),(0,s.kt)("h2",d({},{id:"response-header-values"}),"Response.headerValues(name)"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"name"),(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"response-header-values-option-name"})," ","<",(0,s.kt)("a",d({parentName:"li"},{href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"}),"String"),">"," Name of the header.",(0,s.kt)("a",{href:"#response-header-values-option-name",class:"list-anchor"},"#")),(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"response-header-values-return"})," ","<",(0,s.kt)("a",d({parentName:"li"},{href:"https://docs.oracle.com/javase/8/docs/api/java/util/List.html",title:"List"}),"List"),"<",(0,s.kt)("a",d({parentName:"li"},{href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"}),"String"),">",">",(0,s.kt)("a",{href:"#response-header-values-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"Returns all values of the headers matching the name, for example ",(0,s.kt)("inlineCode",{parentName:"p"},"set-cookie"),". The name is case insensitive."),(0,s.kt)("h2",d({},{id:"response-headers"}),"Response.headers()"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"response-headers-return"})," ","<",(0,s.kt)("a",d({parentName:"li"},{href:"https://docs.oracle.com/javase/8/docs/api/java/util/Map.html",title:"Map"}),"Map"),"<",(0,s.kt)("a",d({parentName:"li"},{href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"}),"String"),", ",(0,s.kt)("a",d({parentName:"li"},{href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"}),"String"),">",">",(0,s.kt)("a",{href:"#response-headers-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"An object with the response HTTP headers. The header names are lower-cased. Note that this method does not return security-related headers, including cookie-related ones. You can use ",(0,s.kt)("a",d({parentName:"p"},{href:"/java/docs/api/class-response#response-all-headers"}),"Response.allHeaders()")," for complete list of headers that include ",(0,s.kt)("inlineCode",{parentName:"p"},"cookie")," information."),(0,s.kt)("h2",d({},{id:"response-headers-array"}),"Response.headersArray()"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"response-headers-array-return"})," ","<",(0,s.kt)("a",d({parentName:"li"},{href:"https://docs.oracle.com/javase/8/docs/api/java/util/List.html",title:"List"}),"List"),"<",(0,s.kt)("inlineCode",{parentName:"li"},"HttpHeader"),">",">",(0,s.kt)("a",{href:"#response-headers-array-return",class:"list-anchor"},"#"),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"name")," ","<",(0,s.kt)("a",d({parentName:"li"},{href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"}),"String"),">"," Name of the header."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"value")," ","<",(0,s.kt)("a",d({parentName:"li"},{href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"}),"String"),">"," Value of the header.")))),(0,s.kt)("p",null,"An array with all the request HTTP headers associated with this response. Unlike ",(0,s.kt)("a",d({parentName:"p"},{href:"/java/docs/api/class-response#response-all-headers"}),"Response.allHeaders()"),", header names are NOT lower-cased. Headers with multiple entries, such as ",(0,s.kt)("inlineCode",{parentName:"p"},"Set-Cookie"),", appear in the array multiple times."),(0,s.kt)("h2",d({},{id:"response-ok"}),"Response.ok()"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"response-ok-return"})," ","<",(0,s.kt)("a",d({parentName:"li"},{href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",title:"boolean"}),"boolean"),">",(0,s.kt)("a",{href:"#response-ok-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"Contains a boolean stating whether the response was successful (status in the range 200-299) or not."),(0,s.kt)("h2",d({},{id:"response-request"}),"Response.request()"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"response-request-return"})," ","<",(0,s.kt)("a",d({parentName:"li"},{href:"/java/docs/api/class-request",title:"Request"}),"Request"),">",(0,s.kt)("a",{href:"#response-request-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"Returns the matching ",(0,s.kt)("a",d({parentName:"p"},{href:"/java/docs/api/class-request",title:"Request"}),"Request")," object."),(0,s.kt)("h2",d({},{id:"response-security-details"}),"Response.securityDetails()"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"response-security-details-return"})," ","<",(0,s.kt)("a",d({parentName:"li"},{href:"https://docs.oracle.com/javase/specs/jls/se8/html/jls-3.html#jls-3.10.7",title:"null"}),"null"),"|SecurityDetails",">",(0,s.kt)("a",{href:"#response-security-details-return",class:"list-anchor"},"#"),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"issuer")," ","<",(0,s.kt)("a",d({parentName:"li"},{href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"}),"String"),">"," Common Name component of the Issuer field. from the certificate. This should only be used for informational purposes. Optional."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"protocol")," ","<",(0,s.kt)("a",d({parentName:"li"},{href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"}),"String"),">"," The specific TLS protocol used. (e.g. ",(0,s.kt)("inlineCode",{parentName:"li"},"TLS 1.3"),"). Optional."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"subjectName")," ","<",(0,s.kt)("a",d({parentName:"li"},{href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"}),"String"),">"," Common Name component of the Subject field from the certificate. This should only be used for informational purposes. Optional."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"validFrom")," ","<",(0,s.kt)("a",d({parentName:"li"},{href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",title:"double"}),"double"),">"," Unix timestamp (in seconds) specifying when this cert becomes valid. Optional."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"validTo")," ","<",(0,s.kt)("a",d({parentName:"li"},{href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",title:"double"}),"double"),">"," Unix timestamp (in seconds) specifying when this cert becomes invalid. Optional.")))),(0,s.kt)("p",null,"Returns SSL and other security information."),(0,s.kt)("h2",d({},{id:"response-server-addr"}),"Response.serverAddr()"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"response-server-addr-return"})," ","<",(0,s.kt)("a",d({parentName:"li"},{href:"https://docs.oracle.com/javase/specs/jls/se8/html/jls-3.html#jls-3.10.7",title:"null"}),"null"),"|ServerAddr",">",(0,s.kt)("a",{href:"#response-server-addr-return",class:"list-anchor"},"#"),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"ipAddress")," ","<",(0,s.kt)("a",d({parentName:"li"},{href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"}),"String"),">"," IPv4 or IPV6 address of the server."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"port")," ","<",(0,s.kt)("a",d({parentName:"li"},{href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",title:"int"}),"int"),">")))),(0,s.kt)("p",null,"Returns the IP address and port of the server."),(0,s.kt)("h2",d({},{id:"response-status"}),"Response.status()"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"response-status-return"})," ","<",(0,s.kt)("a",d({parentName:"li"},{href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",title:"int"}),"int"),">",(0,s.kt)("a",{href:"#response-status-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"Contains the status code of the response (e.g., 200 for a success)."),(0,s.kt)("h2",d({},{id:"response-status-text"}),"Response.statusText()"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"response-status-text-return"})," ","<",(0,s.kt)("a",d({parentName:"li"},{href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"}),"String"),">",(0,s.kt)("a",{href:"#response-status-text-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,'Contains the status text of the response (e.g. usually an "OK" for a success).'),(0,s.kt)("h2",d({},{id:"response-text"}),"Response.text()"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"response-text-return"})," ","<",(0,s.kt)("a",d({parentName:"li"},{href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"}),"String"),">",(0,s.kt)("a",{href:"#response-text-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"Returns the text representation of response body."),(0,s.kt)("h2",d({},{id:"response-url"}),"Response.url()"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"response-url-return"})," ","<",(0,s.kt)("a",d({parentName:"li"},{href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"}),"String"),">",(0,s.kt)("a",{href:"#response-url-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"Contains the URL of the response."))}N.isMDXComponent=!0}}]);