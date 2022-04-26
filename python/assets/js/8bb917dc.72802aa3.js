"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[9486],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(n),f=o,d=m["".concat(s,".").concat(f)]||m[f]||p[f]||a;return n?r.createElement(d,l(l({ref:t},u),{},{components:n})):r.createElement(d,l({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},73811:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(67294),o=Object.defineProperty,a=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;function c({children:e,hidden:t,className:n}){return r.createElement("div",((e,t)=>{for(var n in t||(t={}))l.call(t,n)&&s(e,n,t[n]);if(a)for(var n of a(t))i.call(t,n)&&s(e,n,t[n]);return e})({role:"tabpanel"},{hidden:t,className:n}),e)}},73824:function(e,t,n){n.d(t,{Z:function(){return y}});var r=n(67294),o=n(54939),a=n(39670),l=n(86010),i="tabItem_LplD",s=Object.defineProperty,c=Object.defineProperties,u=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,b=(e,t)=>{for(var n in t||(t={}))m.call(t,n)&&d(e,n,t[n]);if(p)for(var n of p(t))f.call(t,n)&&d(e,n,t[n]);return e};function g(e){var t,n,o;const{lazy:s,block:p,defaultValue:m,values:f,groupId:d,className:g}=e,y=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=null!=f?f:y.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),h=(0,a.lx)(v,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const w=null===m?m:null!=(o=null!=m?m:null==(t=y.find((e=>e.props.default)))?void 0:t.props.value)?o:null==(n=y[0])?void 0:n.props.value;if(null!==w&&!v.some((e=>e.value===w)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${w}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:O}=(0,a.UB)(),[N,x]=(0,r.useState)(w),j=[],{blockElementScrollPositionUntilNextRender:E}=(0,a.o5)();if(null!=d){const e=k[d];null!=e&&e!==N&&v.some((t=>t.value===e))&&x(e)}const C=e=>{const t=e.currentTarget,n=j.indexOf(t),r=v[n].value;r!==N&&(E(t),x(r),null!=d&&O(d,r))},P=e=>{let t=null;switch(e.key){case"ArrowRight":{const n=j.indexOf(e.currentTarget)+1;t=j[n]||j[0];break}case"ArrowLeft":{const n=j.indexOf(e.currentTarget)-1;t=j[n]||j[j.length-1];break}}null==t||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":p},g)},v.map((({value:e,label:t,attributes:n})=>{return r.createElement("li",(o=b({role:"tab",tabIndex:N===e?0:-1,"aria-selected":N===e,key:e,ref:e=>j.push(e),onKeyDown:P,onFocus:C,onClick:C},n),a={className:(0,l.Z)("tabs__item",i,null==n?void 0:n.className,{"tabs__item--active":N===e})},c(o,u(a))),null!=t?t:e);var o,a}))),s?(0,r.cloneElement)(y.filter((e=>e.props.value===N))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},y.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function y(e){const t=(0,o.Z)();return r.createElement(g,b({key:String(t)},e))}},78898:function(e,t,n){n.r(t),n.d(t,{assets:function(){return y},contentTitle:function(){return b},default:function(){return w},frontMatter:function(){return d},metadata:function(){return g},toc:function(){return v}});var r=n(3905),o=n(73824),a=n(73811),l=Object.defineProperty,i=Object.defineProperties,s=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,f=(e,t)=>{for(var n in t||(t={}))u.call(t,n)&&m(e,n,t[n]);if(c)for(var n of c(t))p.call(t,n)&&m(e,n,t[n]);return e};const d={id:"extensibility",title:"Extensibility"},b=void 0,g={unversionedId:"extensibility",id:"version-1.18/extensibility",title:"Extensibility",description:"- Custom selector engines",source:"@site/versioned_docs/version-1.18/extensibility.mdx",sourceDirName:".",slug:"/extensibility",permalink:"/python/docs/1.18/extensibility",tags:[],version:"1.18",frontMatter:{id:"extensibility",title:"Extensibility"},sidebar:"version-1.18/docs",previous:{title:"Events",permalink:"/python/docs/1.18/events"},next:{title:"Frames",permalink:"/python/docs/1.18/frames"}},y={},v=[{value:"Custom selector engines",id:"custom-selector-engines",level:2}],h={toc:v};function w(e){var t,n=e,{components:l}=n,m=((e,t)=>{var n={};for(var r in e)u.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&c)for(var r of c(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=f(f({},h),m),i(t,s({components:l,mdxType:"MDXLayout"}))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",f({parentName:"li"},{href:"#custom-selector-engines"}),"Custom selector engines"))),(0,r.kt)("h2",f({},{id:"custom-selector-engines"}),"Custom selector engines"),(0,r.kt)("p",null,"Playwright supports custom selector engines, registered with ",(0,r.kt)("a",f({parentName:"p"},{href:"/python/docs/1.18/api/class-selectors#selectors-register"}),"selectors.register(name, **kwargs)"),"."),(0,r.kt)("p",null,"Selector engine should have the following properties:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"create")," function to create a relative selector from ",(0,r.kt)("inlineCode",{parentName:"li"},"root")," (root is either a ",(0,r.kt)("inlineCode",{parentName:"li"},"Document"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"ShadowRoot")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"Element"),") to a ",(0,r.kt)("inlineCode",{parentName:"li"},"target")," element."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"query")," function to query first element matching ",(0,r.kt)("inlineCode",{parentName:"li"},"selector")," relative to the ",(0,r.kt)("inlineCode",{parentName:"li"},"root"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"queryAll")," function to query all elements matching ",(0,r.kt)("inlineCode",{parentName:"li"},"selector")," relative to the ",(0,r.kt)("inlineCode",{parentName:"li"},"root"),".")),(0,r.kt)("p",null,"By default the engine is run directly in the frame's JavaScript context and, for example, can call an application-defined function. To isolate the engine from any JavaScript in the frame, but leave access to the DOM, register the engine with ",(0,r.kt)("inlineCode",{parentName:"p"},"{contentScript: true}")," option. Content script engine is safer because it is protected from any tampering with the global objects, for example altering ",(0,r.kt)("inlineCode",{parentName:"p"},"Node.prototype")," methods. All built-in selector engines run as content scripts. Note that running as a content script is not guaranteed when the engine is used together with other custom engines."),(0,r.kt)("p",null,"An example of registering selector engine that queries elements based on a tag name:"),(0,r.kt)(o.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,r.kt)(a.Z,{value:"sync",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",f({parentName:"pre"},{className:"language-py"}),'tag_selector = """\n    // Must evaluate to a selector engine instance.\n    {\n      // Returns the first element matching given selector in the root\'s subtree.\n      query(root, selector) {\n        return root.querySelector(selector);\n      },\n\n      // Returns all elements matching given selector in the root\'s subtree.\n      queryAll(root, selector) {\n        return Array.from(root.querySelectorAll(selector));\n      }\n    }"""\n\n# register the engine. selectors will be prefixed with "tag=".\nplaywright.selectors.register("tag", tag_selector)\n\n# now we can use "tag=" selectors.\nbutton = page.locator("tag=button")\nbutton.click()\n\n# we can combine it with other selector engines using `>>` combinator.\npage.click("tag=div >> span >> "click me"")\n\n# we can use it in any methods supporting selectors.\nbutton_count = page.locator("tag=button").count()\n'))),(0,r.kt)(a.Z,{value:"async",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",f({parentName:"pre"},{className:"language-py"}),'tag_selector = """\n    // Must evaluate to a selector engine instance.\n    {\n      // Returns the first element matching given selector in the root\'s subtree.\n      query(root, selector) {\n        return root.querySelector(selector);\n      },\n\n      // Returns all elements matching given selector in the root\'s subtree.\n      queryAll(root, selector) {\n        return Array.from(root.querySelectorAll(selector));\n      }\n    }"""\n\n# register the engine. selectors will be prefixed with "tag=".\nawait playwright.selectors.register("tag", tag_selector)\n\n# now we can use "tag=" selectors.\nbutton = page.locator("tag=button")\nawait button.click()\n\n# we can combine it with other selector engines using `>>` combinator.\nawait page.click("tag=div >> span >> "click me"")\n\n# we can use it in any methods supporting selectors.\nbutton_count = await page.locator("tag=button").count()\n')))))}w.isMDXComponent=!0}}]);