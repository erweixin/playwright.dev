"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[93985],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),d=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=d(r),f=a,k=p["".concat(l,".").concat(f)]||p[f]||u[f]||o;return r?n.createElement(k,i(i({ref:t},s),{},{components:r})):n.createElement(k,i({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var d=2;d<o;d++)i[d]=r[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},58215:function(e,t,r){var n=r(67294);t.Z=function(e){var t=e.children,r=e.hidden,a=e.className;return n.createElement("div",{role:"tabpanel",hidden:r,className:a},t)}},55064:function(e,t,r){r.d(t,{Z:function(){return u}});var n=r(67294),a=r(79443);var o=function(){var e=(0,n.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=r(86010),c="tabItem_1uMI",l="tabItemActive_2DSg";var d=37,s=39;var u=function(e){var t=e.lazy,r=e.block,a=e.defaultValue,u=e.values,p=e.groupId,f=e.className,k=o(),m=k.tabGroupChoices,v=k.setTabGroupChoices,h=(0,n.useState)(a),b=h[0],y=h[1],w=n.Children.toArray(e.children),g=[];if(null!=p){var N=m[p];null!=N&&N!==b&&u.some((function(e){return e.value===N}))&&y(N)}var O=function(e){var t=e.currentTarget,r=g.indexOf(t),n=u[r].value;y(n),null!=p&&(v(p,n),setTimeout((function(){var e,r,n,a,o,i,c,d;(e=t.getBoundingClientRect(),r=e.top,n=e.left,a=e.bottom,o=e.right,i=window,c=i.innerHeight,d=i.innerWidth,r>=0&&o<=d&&a<=c&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((function(){return t.classList.remove(l)}),2e3))}),150))},S=function(e){var t,r;switch(e.keyCode){case s:var n=g.indexOf(e.target)+1;r=g[n]||g[0];break;case d:var a=g.indexOf(e.target)-1;r=g[a]||g[g.length-1]}null==(t=r)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":r},f)},u.map((function(e){var t=e.value,r=e.label;return n.createElement("li",{role:"tab",tabIndex:b===t?0:-1,"aria-selected":b===t,className:(0,i.Z)("tabs__item",c,{"tabs__item--active":b===t}),key:t,ref:function(e){return g.push(e)},onKeyDown:S,onFocus:O,onClick:O},r)}))),t?(0,n.cloneElement)(w.filter((function(e){return e.props.value===b}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},w.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==b})}))))}},79443:function(e,t,r){var n=(0,r(67294).createContext)(void 0);t.Z=n},1702:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return d},default:function(){return u}});var n=r(22122),a=r(19756),o=(r(67294),r(3905)),i=(r(55064),r(58215),{id:"class-androidsocket",title:"AndroidSocket"}),c=void 0,l={unversionedId:"api/class-androidsocket",id:"version-1.14/api/class-androidsocket",isDocsHomePage:!1,title:"AndroidSocket",description:"AndroidSocket] is a way to communicate with a process launched on the [AndroidDevice]. Use [androidDevice.open(command) to open a socket.",source:"@site/versioned_docs/version-1.14/api/class-androidsocket.mdx",sourceDirName:"api",slug:"/api/class-androidsocket",permalink:"/docs/1.14/api/class-androidsocket",version:"1.14",frontMatter:{id:"class-androidsocket",title:"AndroidSocket"},sidebar:"version-1.14/api",previous:{title:"AndroidInput",permalink:"/docs/1.14/api/class-androidinput"},next:{title:"AndroidWebView",permalink:"/docs/1.14/api/class-androidwebview"}},d=[{value:"androidSocket.on(&#39;close&#39;)",id:"android-socket-event-close",children:[]},{value:"androidSocket.on(&#39;data&#39;)",id:"android-socket-event-data",children:[]},{value:"androidSocket.close()",id:"android-socket-close",children:[]},{value:"androidSocket.write(data)",id:"android-socket-write",children:[]}],s={toc:d};function u(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/1.14/api/class-androidsocket",title:"AndroidSocket"},"AndroidSocket")," is a way to communicate with a process launched on the ",(0,o.kt)("a",{parentName:"p",href:"/docs/1.14/api/class-androiddevice",title:"AndroidDevice"},"AndroidDevice"),". Use ",(0,o.kt)("a",{parentName:"p",href:"/docs/1.14/api/class-androiddevice#android-device-open"},"androidDevice.open(command)")," to open a socket."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/1.14/api/class-androidsocket#android-socket-event-close"},"androidSocket.on('close')")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/1.14/api/class-androidsocket#android-socket-event-data"},"androidSocket.on('data')")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/1.14/api/class-androidsocket#android-socket-close"},"androidSocket.close()")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/1.14/api/class-androidsocket#android-socket-write"},"androidSocket.write(data)"))),(0,o.kt)("h2",{id:"android-socket-event-close"},"androidSocket.on('close')"),(0,o.kt)("p",null,"Emitted when the socket is closed."),(0,o.kt)("h2",{id:"android-socket-event-data"},"androidSocket.on('data')"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"type: ","<",(0,o.kt)("a",{parentName:"li",href:"https://nodejs.org/api/buffer.html#buffer_class_buffer",title:"Buffer"},"Buffer"),">")),(0,o.kt)("p",null,"Emitted when data is available to read from the socket."),(0,o.kt)("h2",{id:"android-socket-close"},"androidSocket.close()"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"returns:",(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"android-socket-close-return"})," ","<",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),"<",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),">",">",(0,o.kt)("a",{href:"#android-socket-close-return",class:"list-anchor"},"#"))),(0,o.kt)("p",null,"Closes the socket."),(0,o.kt)("h2",{id:"android-socket-write"},"androidSocket.write(data)"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"data"),(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"android-socket-write-option-data"})," ","<",(0,o.kt)("a",{parentName:"li",href:"https://nodejs.org/api/buffer.html#buffer_class_buffer",title:"Buffer"},"Buffer"),">"," Data to write.",(0,o.kt)("a",{href:"#android-socket-write-option-data",class:"list-anchor"},"#")),(0,o.kt)("li",{parentName:"ul"},"returns:",(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"android-socket-write-return"})," ","<",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),"<",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),">",">",(0,o.kt)("a",{href:"#android-socket-write-return",class:"list-anchor"},"#"))),(0,o.kt)("p",null,"Writes some ",(0,o.kt)("inlineCode",{parentName:"p"},"data")," to the socket."))}u.isMDXComponent=!0},86010:function(e,t,r){function n(e){var t,r,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(a&&(a+=" "),a+=r);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,r=0,a="";r<arguments.length;)(e=arguments[r++])&&(t=n(e))&&(a&&(a+=" "),a+=t);return a}r.d(t,{Z:function(){return a}})}}]);