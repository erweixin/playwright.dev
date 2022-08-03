"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[5095],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,b=d["".concat(i,".").concat(m)]||d[m]||u[m]||s;return n?a.createElement(b,o(o({ref:t},p),{},{components:n})):a.createElement(b,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<s;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4455:function(e,t,n){n.d(t,{Z:function(){return u}});var a=n(7294),r=n(6010),s="tabItem_Ymn6",o=Object.defineProperty,l=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;function u({children:e,hidden:t,className:n}){return a.createElement("div",((e,t)=>{for(var n in t||(t={}))i.call(t,n)&&p(e,n,t[n]);if(l)for(var n of l(t))c.call(t,n)&&p(e,n,t[n]);return e})({role:"tabpanel",className:(0,r.Z)(s,n)},{hidden:t}),e)}},5332:function(e,t,n){n.d(t,{Z:function(){return g}});var a=n(7294),r=n(6010),s=n(4939),o=n(2174),l=n(2107),i=n(8757),c="tabList__CuJ",p="tabItem_LNqP",u=Object.defineProperty,d=Object.defineProperties,m=Object.getOwnPropertyDescriptors,b=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,y=(e,t,n)=>t in e?u(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,v=(e,t)=>{for(var n in t||(t={}))h.call(t,n)&&y(e,n,t[n]);if(b)for(var n of b(t))f.call(t,n)&&y(e,n,t[n]);return e};function k(e){var t,n;const{lazy:s,block:u,defaultValue:b,values:h,groupId:f,className:y}=e,k=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=null!=h?h:k.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),w=(0,o.l)(g,((e,t)=>e.value===t.value));if(w.length>0)throw new Error(`Docusaurus error: Duplicate values "${w.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const O=null===b?b:null!=(n=null!=b?b:null==(t=k.find((e=>e.props.default)))?void 0:t.props.value)?n:k[0].props.value;if(null!==O&&!g.some((e=>e.value===O)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${O}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:N,setTabGroupChoices:P}=(0,l.U)(),[E,j]=(0,a.useState)(O),D=[],{blockElementScrollPositionUntilNextRender:x}=(0,i.o5)();if(null!=f){const e=N[f];null!=e&&e!==E&&g.some((t=>t.value===e))&&j(e)}const T=e=>{const t=e.currentTarget,n=D.indexOf(t),a=g[n].value;a!==E&&(x(t),j(a),null!=f&&P(f,String(a)))},C=e=>{var t,n;let a=null;switch(e.key){case"ArrowRight":{const n=D.indexOf(e.currentTarget)+1;a=null!=(t=D[n])?t:D[0];break}case"ArrowLeft":{const t=D.indexOf(e.currentTarget)-1;a=null!=(n=D[t])?n:D[D.length-1];break}}null==a||a.focus()};return a.createElement("div",{className:(0,r.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":u},y)},g.map((({value:e,label:t,attributes:n})=>{return a.createElement("li",(s=v({role:"tab",tabIndex:E===e?0:-1,"aria-selected":E===e,key:e,ref:e=>D.push(e),onKeyDown:C,onFocus:T,onClick:T},n),o={className:(0,r.Z)("tabs__item",p,null==n?void 0:n.className,{"tabs__item--active":E===e})},d(s,m(o))),null!=t?t:e);var s,o}))),s?(0,a.cloneElement)(k.filter((e=>e.props.value===E))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==E})))))}function g(e){const t=(0,s.Z)();return a.createElement(k,v({key:String(t)},e))}},7476:function(e,t,n){n.r(t),n.d(t,{assets:function(){return y},contentTitle:function(){return h},default:function(){return g},frontMatter:function(){return b},metadata:function(){return f},toc:function(){return v}});var a=n(3905),r=n(5332),s=n(4455),o=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&d(e,n,t[n]);if(c)for(var n of c(t))u.call(t,n)&&d(e,n,t[n]);return e};const b={id:"class-cdpsession",title:"CDPSession"},h=void 0,f={unversionedId:"api/class-cdpsession",id:"version-stable/api/class-cdpsession",title:"CDPSession",description:"* extends: [EventEmitter]",source:"@site/versioned_docs/version-stable/api/class-cdpsession.mdx",sourceDirName:"api",slug:"/api/class-cdpsession",permalink:"/python/docs/api/class-cdpsession",draft:!1,tags:[],version:"stable",frontMatter:{id:"class-cdpsession",title:"CDPSession"},sidebar:"api",previous:{title:"BrowserType",permalink:"/python/docs/api/class-browsertype"},next:{title:"ConsoleMessage",permalink:"/python/docs/api/class-consolemessage"}},y={},v=[{value:"cdp_session.detach()",id:"cdp-session-detach",level:2},{value:"cdp_session.send(method, **kwargs)",id:"cdp-session-send",level:2}],k={toc:v};function g(e){var t,n=e,{components:o}=n,d=((e,t)=>{var n={};for(var a in e)p.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&c)for(var a of c(e))t.indexOf(a)<0&&u.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=m(m({},k),d),l(t,i({components:o,mdxType:"MDXLayout"}))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"extends: ",(0,a.kt)("a",m({parentName:"li"},{href:"https://pyee.readthedocs.io/en/latest/#pyee.BaseEventEmitter",title:"EventEmitter"}),"EventEmitter"))),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"CDPSession")," instances are used to talk raw Chrome Devtools Protocol:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"protocol methods can be called with ",(0,a.kt)("inlineCode",{parentName:"li"},"session.send")," method."),(0,a.kt)("li",{parentName:"ul"},"protocol events can be subscribed to with ",(0,a.kt)("inlineCode",{parentName:"li"},"session.on")," method.")),(0,a.kt)("p",null,"Useful links:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Documentation on DevTools Protocol can be found here: ",(0,a.kt)("a",m({parentName:"li"},{href:"https://chromedevtools.github.io/devtools-protocol/"}),"DevTools Protocol Viewer"),"."),(0,a.kt)("li",{parentName:"ul"},"Getting Started with DevTools Protocol: ",(0,a.kt)("a",m({parentName:"li"},{href:"https://github.com/aslushnikov/getting-started-with-cdp/blob/master/README.md"}),"https://github.com/aslushnikov/getting-started-with-cdp/blob/master/README.md"))),(0,a.kt)(r.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,a.kt)(s.Z,{value:"sync",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-py"}),'client = page.context.new_cdp_session(page)\nclient.send("Animation.enable")\nclient.on("Animation.animationCreated", lambda: print("animation created!"))\nresponse = client.send("Animation.getPlaybackRate")\nprint("playback rate is " + str(response["playbackRate"]))\nclient.send("Animation.setPlaybackRate", {\n    playbackRate: response["playbackRate"] / 2\n})\n'))),(0,a.kt)(s.Z,{value:"async",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-py"}),'client = await page.context.new_cdp_session(page)\nawait client.send("Animation.enable")\nclient.on("Animation.animationCreated", lambda: print("animation created!"))\nresponse = await client.send("Animation.getPlaybackRate")\nprint("playback rate is " + str(response["playbackRate"]))\nawait client.send("Animation.setPlaybackRate", {\n    playbackRate: response["playbackRate"] / 2\n})\n')))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"/python/docs/api/class-cdpsession#cdp-session-detach"}),"cdp_session.detach()")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"/python/docs/api/class-cdpsession#cdp-session-send"}),"cdp_session.send(method, **kwargs)"))),(0,a.kt)("h2",m({},{id:"cdp-session-detach"}),"cdp_session.detach()"),(0,a.kt)("font",{size:"2",style:{position:"relative",top:"-20px"}},"Added in: v1.8"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"returns:",(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"cdp-session-detach-return"})," ","<",(0,a.kt)("a",m({parentName:"li"},{href:"https://docs.python.org/3/library/constants.html#None",title:"None"}),"NoneType"),">",(0,a.kt)("a",{href:"#cdp-session-detach-return",class:"list-anchor"},"#"))),(0,a.kt)("p",null,"Detaches the CDPSession from the target. Once detached, the CDPSession object won't emit any events and can't be used to send messages."),(0,a.kt)("h2",m({},{id:"cdp-session-send"}),"cdp_session.send(method, **kwargs)"),(0,a.kt)("font",{size:"2",style:{position:"relative",top:"-20px"}},"Added in: v1.8"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"method"),(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"cdp-session-send-option-method"})," ","<",(0,a.kt)("a",m({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"}),"str"),">"," Protocol method name.",(0,a.kt)("a",{href:"#cdp-session-send-option-method",class:"list-anchor"},"#")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"params"),(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"cdp-session-send-option-params"})," ","<",(0,a.kt)("a",m({parentName:"li"},{href:"https://docs.python.org/3/library/typing.html#typing.Dict",title:"Dict"}),"Dict"),">"," Optional method parameters.",(0,a.kt)("a",{href:"#cdp-session-send-option-params",class:"list-anchor"},"#")),(0,a.kt)("li",{parentName:"ul"},"returns:",(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"cdp-session-send-return"})," ","<",(0,a.kt)("a",m({parentName:"li"},{href:"https://docs.python.org/3/library/typing.html#typing.Dict",title:"Dict"}),"Dict"),">",(0,a.kt)("a",{href:"#cdp-session-send-return",class:"list-anchor"},"#"))))}g.isMDXComponent=!0}}]);