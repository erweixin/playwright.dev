"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[528],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return h}});var s=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,s)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,s,r=function(e,t){if(null==e)return{};var a,s,r={},n=Object.keys(e);for(s=0;s<n.length;s++)a=n[s],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(s=0;s<n.length;s++)a=n[s],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=s.createContext({}),p=function(e){var t=s.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=p(e.components);return s.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},d=s.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(a),h=r,m=d["".concat(o,".").concat(h)]||d[h]||u[h]||n;return a?s.createElement(m,l(l({ref:t},c),{},{components:a})):s.createElement(m,l({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,l=new Array(n);l[0]=d;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var p=2;p<n;p++)l[p]=a[p];return s.createElement.apply(null,l)}return s.createElement.apply(null,a)}d.displayName="MDXCreateElement"},8215:function(e,t,a){var s=a(7294);t.Z=function(e){var t=e.children,a=e.hidden,r=e.className;return s.createElement("div",{role:"tabpanel",hidden:a,className:r},t)}},5064:function(e,t,a){a.d(t,{Z:function(){return u}});var s=a(7294),r=a(9443);var n=function(){var e=(0,s.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=a(6010),i="tabItem_1uMI",o="tabItemActive_2DSg";var p=37,c=39;var u=function(e){var t=e.lazy,a=e.block,r=e.defaultValue,u=e.values,d=e.groupId,h=e.className,m=n(),k=m.tabGroupChoices,f=m.setTabGroupChoices,v=(0,s.useState)(r),N=v[0],g=v[1],j=s.Children.toArray(e.children),b=[];if(null!=d){var y=k[d];null!=y&&y!==N&&u.some((function(e){return e.value===y}))&&g(y)}var R=function(e){var t=e.currentTarget,a=b.indexOf(t),s=u[a].value;g(s),null!=d&&(f(d,s),setTimeout((function(){var e,a,s,r,n,l,i,p;(e=t.getBoundingClientRect(),a=e.top,s=e.left,r=e.bottom,n=e.right,l=window,i=l.innerHeight,p=l.innerWidth,a>=0&&n<=p&&r<=i&&s>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(o),setTimeout((function(){return t.classList.remove(o)}),2e3))}),150))},S=function(e){var t,a;switch(e.keyCode){case c:var s=b.indexOf(e.target)+1;a=b[s]||b[0];break;case p:var r=b.indexOf(e.target)-1;a=b[r]||b[b.length-1]}null==(t=a)||t.focus()};return s.createElement("div",{className:"tabs-container"},s.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},h)},u.map((function(e){var t=e.value,a=e.label;return s.createElement("li",{role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,className:(0,l.Z)("tabs__item",i,{"tabs__item--active":N===t}),key:t,ref:function(e){return b.push(e)},onKeyDown:S,onFocus:R,onClick:R},a)}))),t?(0,s.cloneElement)(j.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):s.createElement("div",{className:"margin-vert--md"},j.map((function(e,t){return(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==N})}))))}},9443:function(e,t,a){var s=(0,a(7294).createContext)(void 0);t.Z=s},7514:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return i},metadata:function(){return o},toc:function(){return p},default:function(){return u}});var s=a(2122),r=a(9756),n=(a(7294),a(3905)),l=(a(5064),a(8215),{id:"class-response",title:"Response"}),i=void 0,o={unversionedId:"api/class-response",id:"version-1.16/api/class-response",isDocsHomePage:!1,title:"Response",description:"[Response] class represents responses which are received by page.",source:"@site/versioned_docs/version-1.16/api/class-response.mdx",sourceDirName:"api",slug:"/api/class-response",permalink:"/java/docs/1.16/api/class-response",version:"1.16",frontMatter:{id:"class-response",title:"Response"},sidebar:"version-1.16/api",previous:{title:"Request",permalink:"/java/docs/1.16/api/class-request"},next:{title:"Route",permalink:"/java/docs/1.16/api/class-route"}},p=[{value:"Response.allHeaders()",id:"response-all-headers",children:[]},{value:"Response.body()",id:"response-body",children:[]},{value:"Response.finished()",id:"response-finished",children:[]},{value:"Response.frame()",id:"response-frame",children:[]},{value:"Response.headerValue(name)",id:"response-header-value",children:[]},{value:"Response.headerValues(name)",id:"response-header-values",children:[]},{value:"Response.headers()",id:"response-headers",children:[]},{value:"Response.headersArray()",id:"response-headers-array",children:[]},{value:"Response.ok()",id:"response-ok",children:[]},{value:"Response.request()",id:"response-request",children:[]},{value:"Response.securityDetails()",id:"response-security-details",children:[]},{value:"Response.serverAddr()",id:"response-server-addr",children:[]},{value:"Response.status()",id:"response-status",children:[]},{value:"Response.statusText()",id:"response-status-text",children:[]},{value:"Response.text()",id:"response-text",children:[]},{value:"Response.url()",id:"response-url",children:[]}],c={toc:p};function u(e){var t=e.components,a=(0,r.Z)(e,["components"]);return(0,n.kt)("wrapper",(0,s.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/java/docs/1.16/api/class-response",title:"Response"},"Response")," class represents responses which are received by page."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/java/docs/1.16/api/class-response#response-all-headers"},"Response.allHeaders()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/java/docs/1.16/api/class-response#response-body"},"Response.body()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/java/docs/1.16/api/class-response#response-finished"},"Response.finished()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/java/docs/1.16/api/class-response#response-frame"},"Response.frame()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/java/docs/1.16/api/class-response#response-headers"},"Response.headers()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/java/docs/1.16/api/class-response#response-headers-array"},"Response.headersArray()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/java/docs/1.16/api/class-response#response-header-value"},"Response.headerValue(name)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/java/docs/1.16/api/class-response#response-header-values"},"Response.headerValues(name)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/java/docs/1.16/api/class-response#response-ok"},"Response.ok()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/java/docs/1.16/api/class-response#response-request"},"Response.request()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/java/docs/1.16/api/class-response#response-security-details"},"Response.securityDetails()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/java/docs/1.16/api/class-response#response-server-addr"},"Response.serverAddr()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/java/docs/1.16/api/class-response#response-status"},"Response.status()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/java/docs/1.16/api/class-response#response-status-text"},"Response.statusText()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/java/docs/1.16/api/class-response#response-text"},"Response.text()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/java/docs/1.16/api/class-response#response-url"},"Response.url()"))),(0,n.kt)("h2",{id:"response-all-headers"},"Response.allHeaders()"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"response-all-headers-return"})," ","<",(0,n.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/util/Map.html",title:"Map"},"Map"),"<",(0,n.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"},"String"),", ",(0,n.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"},"String"),">",">",(0,n.kt)("a",{href:"#response-all-headers-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"An object with all the response HTTP headers associated with this response."),(0,n.kt)("h2",{id:"response-body"},"Response.body()"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"response-body-return"})," ","<",(0,n.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",title:"byte[]"},"byte","[","]"),">",(0,n.kt)("a",{href:"#response-body-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"Returns the buffer with response body."),(0,n.kt)("h2",{id:"response-finished"},"Response.finished()"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"response-finished-return"})," ","<",(0,n.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/specs/jls/se8/html/jls-3.html#jls-3.10.7",title:"null"},"null"),"|",(0,n.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"},"String"),">",(0,n.kt)("a",{href:"#response-finished-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"Waits for this response to finish, returns always ",(0,n.kt)("inlineCode",{parentName:"p"},"null"),"."),(0,n.kt)("h2",{id:"response-frame"},"Response.frame()"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"response-frame-return"})," ","<",(0,n.kt)("a",{parentName:"li",href:"/java/docs/1.16/api/class-frame",title:"Frame"},"Frame"),">",(0,n.kt)("a",{href:"#response-frame-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"Returns the ",(0,n.kt)("a",{parentName:"p",href:"/java/docs/1.16/api/class-frame",title:"Frame"},"Frame")," that initiated this response."),(0,n.kt)("h2",{id:"response-header-value"},"Response.headerValue(name)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"name"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"response-header-value-option-name"})," ","<",(0,n.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"},"String"),">"," Name of the header.",(0,n.kt)("a",{href:"#response-header-value-option-name",class:"list-anchor"},"#")),(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"response-header-value-return"})," ","<",(0,n.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/specs/jls/se8/html/jls-3.html#jls-3.10.7",title:"null"},"null"),"|",(0,n.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"},"String"),">",(0,n.kt)("a",{href:"#response-header-value-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"Returns the value of the header matching the name. The name is case insensitive. If multiple headers have the same name (except ",(0,n.kt)("inlineCode",{parentName:"p"},"set-cookie"),"), they are returned as a list separated by ",(0,n.kt)("inlineCode",{parentName:"p"},", "),". For ",(0,n.kt)("inlineCode",{parentName:"p"},"set-cookie"),", the ",(0,n.kt)("inlineCode",{parentName:"p"},"\\n")," separator is used. If no headers are found, ",(0,n.kt)("inlineCode",{parentName:"p"},"null")," is returned."),(0,n.kt)("h2",{id:"response-header-values"},"Response.headerValues(name)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"name"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"response-header-values-option-name"})," ","<",(0,n.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"},"String"),">"," Name of the header.",(0,n.kt)("a",{href:"#response-header-values-option-name",class:"list-anchor"},"#")),(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"response-header-values-return"})," ","<",(0,n.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/util/List.html",title:"List"},"List"),"<",(0,n.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"},"String"),">",">",(0,n.kt)("a",{href:"#response-header-values-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"Returns all values of the headers matching the name, for example ",(0,n.kt)("inlineCode",{parentName:"p"},"set-cookie"),". The name is case insensitive."),(0,n.kt)("h2",{id:"response-headers"},"Response.headers()"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"response-headers-return"})," ","<",(0,n.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/util/Map.html",title:"Map"},"Map"),"<",(0,n.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"},"String"),", ",(0,n.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"},"String"),">",">",(0,n.kt)("a",{href:"#response-headers-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"DEPRECATED")," Incomplete list of headers as seen by the rendering engine. Use ",(0,n.kt)("a",{parentName:"p",href:"/java/docs/1.16/api/class-response#response-all-headers"},"Response.allHeaders()")," instead."),(0,n.kt)("h2",{id:"response-headers-array"},"Response.headersArray()"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"response-headers-array-return"})," ","<",(0,n.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/util/List.html",title:"List"},"List"),"<",(0,n.kt)("inlineCode",{parentName:"li"},"HttpHeader"),">",">",(0,n.kt)("a",{href:"#response-headers-array-return",class:"list-anchor"},"#"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"name")," ","<",(0,n.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"},"String"),">"," Name of the header."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"value")," ","<",(0,n.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"},"String"),">"," Value of the header.")))),(0,n.kt)("p",null,"An array with all the request HTTP headers associated with this response. Unlike ",(0,n.kt)("a",{parentName:"p",href:"/java/docs/1.16/api/class-response#response-all-headers"},"Response.allHeaders()"),", header names are NOT lower-cased. Headers with multiple entries, such as ",(0,n.kt)("inlineCode",{parentName:"p"},"Set-Cookie"),", appear in the array multiple times."),(0,n.kt)("h2",{id:"response-ok"},"Response.ok()"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"response-ok-return"})," ","<",(0,n.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",title:"boolean"},"boolean"),">",(0,n.kt)("a",{href:"#response-ok-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"Contains a boolean stating whether the response was successful (status in the range 200-299) or not."),(0,n.kt)("h2",{id:"response-request"},"Response.request()"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"response-request-return"})," ","<",(0,n.kt)("a",{parentName:"li",href:"/java/docs/1.16/api/class-request",title:"Request"},"Request"),">",(0,n.kt)("a",{href:"#response-request-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"Returns the matching ",(0,n.kt)("a",{parentName:"p",href:"/java/docs/1.16/api/class-request",title:"Request"},"Request")," object."),(0,n.kt)("h2",{id:"response-security-details"},"Response.securityDetails()"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"response-security-details-return"})," ","<",(0,n.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/specs/jls/se8/html/jls-3.html#jls-3.10.7",title:"null"},"null"),"|SecurityDetails",">",(0,n.kt)("a",{href:"#response-security-details-return",class:"list-anchor"},"#"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"issuer")," ","<",(0,n.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"},"String"),">"," Common Name component of the Issuer field. from the certificate. This should only be used for informational purposes. Optional."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"protocol")," ","<",(0,n.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"},"String"),">"," The specific TLS protocol used. (e.g. ",(0,n.kt)("inlineCode",{parentName:"li"},"TLS 1.3"),"). Optional."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"subjectName")," ","<",(0,n.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"},"String"),">"," Common Name component of the Subject field from the certificate. This should only be used for informational purposes. Optional."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"validFrom")," ","<",(0,n.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",title:"double"},"double"),">"," Unix timestamp (in seconds) specifying when this cert becomes valid. Optional."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"validTo")," ","<",(0,n.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",title:"double"},"double"),">"," Unix timestamp (in seconds) specifying when this cert becomes invalid. Optional.")))),(0,n.kt)("p",null,"Returns SSL and other security information."),(0,n.kt)("h2",{id:"response-server-addr"},"Response.serverAddr()"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"response-server-addr-return"})," ","<",(0,n.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/specs/jls/se8/html/jls-3.html#jls-3.10.7",title:"null"},"null"),"|ServerAddr",">",(0,n.kt)("a",{href:"#response-server-addr-return",class:"list-anchor"},"#"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"ipAddress")," ","<",(0,n.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"},"String"),">"," IPv4 or IPV6 address of the server."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"port")," ","<",(0,n.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",title:"int"},"int"),">")))),(0,n.kt)("p",null,"Returns the IP address and port of the server."),(0,n.kt)("h2",{id:"response-status"},"Response.status()"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"response-status-return"})," ","<",(0,n.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",title:"int"},"int"),">",(0,n.kt)("a",{href:"#response-status-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"Contains the status code of the response (e.g., 200 for a success)."),(0,n.kt)("h2",{id:"response-status-text"},"Response.statusText()"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"response-status-text-return"})," ","<",(0,n.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"},"String"),">",(0,n.kt)("a",{href:"#response-status-text-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,'Contains the status text of the response (e.g. usually an "OK" for a success).'),(0,n.kt)("h2",{id:"response-text"},"Response.text()"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"response-text-return"})," ","<",(0,n.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"},"String"),">",(0,n.kt)("a",{href:"#response-text-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"Returns the text representation of response body."),(0,n.kt)("h2",{id:"response-url"},"Response.url()"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"response-url-return"})," ","<",(0,n.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"},"String"),">",(0,n.kt)("a",{href:"#response-url-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"Contains the URL of the response."))}u.isMDXComponent=!0},6010:function(e,t,a){function s(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=s(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=s(e))&&(r&&(r+=" "),r+=t);return r}a.d(t,{Z:function(){return r}})}}]);