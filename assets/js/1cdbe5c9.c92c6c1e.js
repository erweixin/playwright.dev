"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[9223],{3905:function(e,r,t){t.d(r,{Zo:function(){return p},kt:function(){return d}});var s=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);r&&(s=s.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,s)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,s,n=function(e,r){if(null==e)return{};var t,s,n={},o=Object.keys(e);for(s=0;s<o.length;s++)t=o[s],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(s=0;s<o.length;s++)t=o[s],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var a=s.createContext({}),c=function(e){var r=s.useContext(a),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},p=function(e){var r=c(e.components);return s.createElement(a.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return s.createElement(s.Fragment,{},r)}},v=s.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,a=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),v=c(t),d=n,b=v["".concat(a,".").concat(d)]||v[d]||u[d]||o;return t?s.createElement(b,l(l({ref:r},p),{},{components:t})):s.createElement(b,l({ref:r},p))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,l=new Array(o);l[0]=v;var i={};for(var a in r)hasOwnProperty.call(r,a)&&(i[a]=r[a]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var c=2;c<o;c++)l[c]=t[c];return s.createElement.apply(null,l)}return s.createElement.apply(null,t)}v.displayName="MDXCreateElement"},2853:function(e,r,t){t.r(r),t.d(r,{assets:function(){return w},contentTitle:function(){return d},default:function(){return k},frontMatter:function(){return v},metadata:function(){return b},toc:function(){return f}});var s=t(3905),n=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,r,t)=>r in e?n(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,u=(e,r)=>{for(var t in r||(r={}))a.call(r,t)&&p(e,t,r[t]);if(i)for(var t of i(r))c.call(r,t)&&p(e,t,r[t]);return e};const v={id:"class-browserserver",title:"BrowserServer"},d=void 0,b={unversionedId:"api/class-browserserver",id:"api/class-browserserver",title:"BrowserServer",description:"- browserServer.on('close')",source:"@site/docs/api/class-browserserver.mdx",sourceDirName:"api",slug:"/api/class-browserserver",permalink:"/docs/next/api/class-browserserver",draft:!1,tags:[],version:"current",frontMatter:{id:"class-browserserver",title:"BrowserServer"},sidebar:"api",previous:{title:"BrowserContext",permalink:"/docs/next/api/class-browsercontext"},next:{title:"BrowserType",permalink:"/docs/next/api/class-browsertype"}},w={},f=[{value:"browserServer.on(&#39;close&#39;)",id:"browser-server-event-close",level:2},{value:"browserServer.close()",id:"browser-server-close",level:2},{value:"browserServer.kill()",id:"browser-server-kill",level:2},{value:"browserServer.process()",id:"browser-server-process",level:2},{value:"browserServer.wsEndpoint()",id:"browser-server-ws-endpoint",level:2}],m={toc:f};function k(e){var r,t=e,{components:n}=t,p=((e,r)=>{var t={};for(var s in e)a.call(e,s)&&r.indexOf(s)<0&&(t[s]=e[s]);if(null!=e&&i)for(var s of i(e))r.indexOf(s)<0&&c.call(e,s)&&(t[s]=e[s]);return t})(t,["components"]);return(0,s.kt)("wrapper",(r=u(u({},m),p),o(r,l({components:n,mdxType:"MDXLayout"}))),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",u({parentName:"li"},{href:"/docs/next/api/class-browserserver#browser-server-event-close"}),"browserServer.on('close')")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",u({parentName:"li"},{href:"/docs/next/api/class-browserserver#browser-server-close"}),"browserServer.close()")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",u({parentName:"li"},{href:"/docs/next/api/class-browserserver#browser-server-kill"}),"browserServer.kill()")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",u({parentName:"li"},{href:"/docs/next/api/class-browserserver#browser-server-process"}),"browserServer.process()")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",u({parentName:"li"},{href:"/docs/next/api/class-browserserver#browser-server-ws-endpoint"}),"browserServer.wsEndpoint()"))),(0,s.kt)("h2",u({},{id:"browser-server-event-close"}),"browserServer.on('close')"),(0,s.kt)("font",{size:"2",style:{position:"relative",top:"-20px"}},"Added in: v1.8"),(0,s.kt)("p",null,"Emitted when the browser server closes."),(0,s.kt)("h2",u({},{id:"browser-server-close"}),"browserServer.close()"),(0,s.kt)("font",{size:"2",style:{position:"relative",top:"-20px"}},"Added in: v1.8"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"browser-server-close-return"})," ","<",(0,s.kt)("a",u({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),"<",(0,s.kt)("a",u({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"}),"void"),">",">",(0,s.kt)("a",{href:"#browser-server-close-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"Closes the browser gracefully and makes sure the process is terminated."),(0,s.kt)("h2",u({},{id:"browser-server-kill"}),"browserServer.kill()"),(0,s.kt)("font",{size:"2",style:{position:"relative",top:"-20px"}},"Added in: v1.8"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"browser-server-kill-return"})," ","<",(0,s.kt)("a",u({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),"<",(0,s.kt)("a",u({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"}),"void"),">",">",(0,s.kt)("a",{href:"#browser-server-kill-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"Kills the browser process and waits for the process to exit."),(0,s.kt)("h2",u({},{id:"browser-server-process"}),"browserServer.process()"),(0,s.kt)("font",{size:"2",style:{position:"relative",top:"-20px"}},"Added in: v1.8"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"browser-server-process-return"})," ","<",(0,s.kt)("a",u({parentName:"li"},{href:"https://nodejs.org/api/child_process.html",title:"ChildProcess"}),"ChildProcess"),">",(0,s.kt)("a",{href:"#browser-server-process-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"Spawned browser application process."),(0,s.kt)("h2",u({},{id:"browser-server-ws-endpoint"}),"browserServer.wsEndpoint()"),(0,s.kt)("font",{size:"2",style:{position:"relative",top:"-20px"}},"Added in: v1.8"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"browser-server-ws-endpoint-return"})," ","<",(0,s.kt)("a",u({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),">",(0,s.kt)("a",{href:"#browser-server-ws-endpoint-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"Browser websocket url."),(0,s.kt)("p",null,"Browser websocket endpoint which can be used as an argument to ",(0,s.kt)("a",u({parentName:"p"},{href:"/docs/next/api/class-browsertype#browser-type-connect"}),"browserType.connect(wsEndpoint[, options])")," to establish connection to the browser."))}k.isMDXComponent=!0}}]);