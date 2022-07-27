"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[4763],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return g}});var l=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,l)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,l,n=function(e,t){if(null==e)return{};var r,l,n={},a=Object.keys(e);for(l=0;l<a.length;l++)r=a[l],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)r=a[l],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=l.createContext({}),c=function(e){var t=l.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return l.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},h=l.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),h=c(r),g=n,d=h["".concat(s,".").concat(g)]||h[g]||u[g]||a;return r?l.createElement(d,o(o({ref:t},p),{},{components:r})):l.createElement(d,o({ref:t},p))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var c=2;c<a;c++)o[c]=r[c];return l.createElement.apply(null,o)}return l.createElement.apply(null,r)}h.displayName="MDXCreateElement"},3811:function(e,t,r){r.d(t,{Z:function(){return c}});var l=r(7294),n=Object.defineProperty,a=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,s=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;function c({children:e,hidden:t,className:r}){return l.createElement("div",((e,t)=>{for(var r in t||(t={}))o.call(t,r)&&s(e,r,t[r]);if(a)for(var r of a(t))i.call(t,r)&&s(e,r,t[r]);return e})({role:"tabpanel"},{hidden:t,className:r}),e)}},3824:function(e,t,r){r.d(t,{Z:function(){return y}});var l=r(7294),n=r(4939),a=r(9670),o=r(6010),i="tabItem_LplD",s=Object.defineProperty,c=Object.defineProperties,p=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,d=(e,t,r)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,m=(e,t)=>{for(var r in t||(t={}))h.call(t,r)&&d(e,r,t[r]);if(u)for(var r of u(t))g.call(t,r)&&d(e,r,t[r]);return e};function b(e){var t,r,n;const{lazy:s,block:u,defaultValue:h,values:g,groupId:d,className:b}=e,y=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=null!=g?g:y.map((({props:{value:e,label:t,attributes:r}})=>({value:e,label:t,attributes:r}))),v=(0,a.lx)(f,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const w=null===h?h:null!=(n=null!=h?h:null==(t=y.find((e=>e.props.default)))?void 0:t.props.value)?n:null==(r=y[0])?void 0:r.props.value;if(null!==w&&!f.some((e=>e.value===w)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${w}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:O}=(0,a.UB)(),[N,x]=(0,l.useState)(w),P=[],{blockElementScrollPositionUntilNextRender:T}=(0,a.o5)();if(null!=d){const e=k[d];null!=e&&e!==N&&f.some((t=>t.value===e))&&x(e)}const j=e=>{const t=e.currentTarget,r=P.indexOf(t),l=f[r].value;l!==N&&(T(t),x(l),null!=d&&O(d,l))},D=e=>{let t=null;switch(e.key){case"ArrowRight":{const r=P.indexOf(e.currentTarget)+1;t=P[r]||P[0];break}case"ArrowLeft":{const r=P.indexOf(e.currentTarget)-1;t=P[r]||P[P.length-1];break}}null==t||t.focus()};return l.createElement("div",{className:"tabs-container"},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":u},b)},f.map((({value:e,label:t,attributes:r})=>{return l.createElement("li",(n=m({role:"tab",tabIndex:N===e?0:-1,"aria-selected":N===e,key:e,ref:e=>P.push(e),onKeyDown:D,onFocus:j,onClick:j},r),a={className:(0,o.Z)("tabs__item",i,null==r?void 0:r.className,{"tabs__item--active":N===e})},c(n,p(a))),null!=t?t:e);var n,a}))),s?(0,l.cloneElement)(y.filter((e=>e.props.value===N))[0],{className:"margin-vert--md"}):l.createElement("div",{className:"margin-vert--md"},y.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function y(e){const t=(0,n.Z)();return l.createElement(b,m({key:String(t)},e))}},8411:function(e,t,r){r.r(t),r.d(t,{assets:function(){return y},contentTitle:function(){return m},default:function(){return w},frontMatter:function(){return d},metadata:function(){return b},toc:function(){return f}});var l=r(3905),n=r(3824),a=r(3811),o=Object.defineProperty,i=Object.defineProperties,s=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,h=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,g=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&h(e,r,t[r]);if(c)for(var r of c(t))u.call(t,r)&&h(e,r,t[r]);return e};const d={id:"debug-selectors",title:"Debugging Selectors"},m=void 0,b={unversionedId:"debug-selectors",id:"debug-selectors",title:"Debugging Selectors",description:"Playwright will throw a timeout exception like locator.click",source:"@site/docs/debug-selectors.mdx",sourceDirName:".",slug:"/debug-selectors",permalink:"/python/docs/next/debug-selectors",tags:[],version:"current",frontMatter:{id:"debug-selectors",title:"Debugging Selectors"},sidebar:"docs",previous:{title:"Debugging Tests",permalink:"/python/docs/next/debug"},next:{title:"Dialogs",permalink:"/python/docs/next/dialogs"}},y={},f=[{value:"Using Playwright Inspector",id:"using-playwright-inspector",level:2},{value:"Using DevTools",id:"using-devtools",level:2},{value:"playwright.$(selector)",id:"playwrightselector",level:3},{value:"playwright.$$(selector)",id:"playwrightselector-1",level:3},{value:"playwright.inspect(selector)",id:"playwrightinspectselector",level:3},{value:"playwright.locator(selector)",id:"playwrightlocatorselector",level:3},{value:"playwright.highlight(selector)",id:"playwrighthighlightselector",level:3},{value:"playwright.clear()",id:"playwrightclear",level:3},{value:"playwright.selector(element)",id:"playwrightselectorelement",level:3},{value:"Verbose API logs",id:"verbose-api-logs",level:2}],v={toc:f};function w(e){var t,r=e,{components:o}=r,h=((e,t)=>{var r={};for(var l in e)p.call(e,l)&&t.indexOf(l)<0&&(r[l]=e[l]);if(null!=e&&c)for(var l of c(e))t.indexOf(l)<0&&u.call(e,l)&&(r[l]=e[l]);return r})(r,["components"]);return(0,l.kt)("wrapper",(t=g(g({},v),h),i(t,s({components:o,mdxType:"MDXLayout"}))),(0,l.kt)("p",null,"Playwright will throw a timeout exception like ",(0,l.kt)("inlineCode",{parentName:"p"},"locator.click: Timeout 30000ms exceeded")," when an element does not exist on the page. There are multiple ways of debugging selectors:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",g({parentName:"li"},{href:"#using-playwright-inspector"}),"Playwright Inspector")," to step over each Playwright API call to inspect the page."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",g({parentName:"li"},{href:"#using-devtools"}),"Browser DevTools")," to inspect selectors with the DevTools element panel."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",g({parentName:"li"},{href:"/python/docs/next/trace-viewer"}),"Trace Viewer")," to see what the page looked like during the test run."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",g({parentName:"li"},{href:"#verbose-api-logs"}),"Verbose API logs")," shows ",(0,l.kt)("a",g({parentName:"li"},{href:"/python/docs/next/actionability"}),"actionability checks")," when locating the element.")),(0,l.kt)("h2",g({},{id:"using-playwright-inspector"}),"Using Playwright Inspector"),(0,l.kt)("p",null,"Open the ",(0,l.kt)("a",g({parentName:"p"},{href:"/python/docs/next/debug"}),"Playwright Inspector")," and click the ",(0,l.kt)("inlineCode",{parentName:"p"},"Explore")," button to hover over elements in the screen and click them to automatically generate selectors for those elements. To verify where selector points, paste it into the inspector input field:"),(0,l.kt)("img",{width:"602",alt:"Selectors toolbar",src:"https://user-images.githubusercontent.com/883973/108614696-ad5eaa00-73b1-11eb-81f5-9eebe62543a2.png"}),(0,l.kt)("h2",g({},{id:"using-devtools"}),"Using DevTools"),(0,l.kt)("p",null,"You can also use the following API inside the Developer Tools Console of any browser."),(0,l.kt)("p",null,"When running in Debug Mode with ",(0,l.kt)("inlineCode",{parentName:"p"},"PWDEBUG=console"),", a ",(0,l.kt)("inlineCode",{parentName:"p"},"playwright")," object is available in Developer tools console."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Run with ",(0,l.kt)("inlineCode",{parentName:"li"},"PWDEBUG=console")),(0,l.kt)("li",{parentName:"ol"},"Setup a breakpoint to pause the execution"),(0,l.kt)("li",{parentName:"ol"},"Open the console panel in browser developer tools")),(0,l.kt)("img",{src:"https://user-images.githubusercontent.com/284612/92536317-37dd9380-f1ee-11ea-875d-daf1b206dd56.png"}),(0,l.kt)("h3",g({},{id:"playwrightselector"}),"playwright.$(selector)"),(0,l.kt)("p",null,"Query Playwright selector, using the actual Playwright query engine, for example:"),(0,l.kt)("pre",null,(0,l.kt)("code",g({parentName:"pre"},{className:"language-txt"}),"> playwright.$('.auth-form >> text=Log in');\n\n<button>Log in</button>\n")),(0,l.kt)("h3",g({},{id:"playwrightselector-1"}),"playwright.$$(selector)"),(0,l.kt)("p",null,"Same as ",(0,l.kt)("inlineCode",{parentName:"p"},"playwright.$"),", but returns all matching elements."),(0,l.kt)("pre",null,(0,l.kt)("code",g({parentName:"pre"},{className:"language-txt"}),"> playwright.$$('li >> text=John')\n\n> [<li>, <li>, <li>, <li>]\n")),(0,l.kt)("h3",g({},{id:"playwrightinspectselector"}),"playwright.inspect(selector)"),(0,l.kt)("p",null,"Reveal element in the Elements panel (if DevTools of the respective browser supports it)."),(0,l.kt)("pre",null,(0,l.kt)("code",g({parentName:"pre"},{className:"language-txt"}),"> playwright.inspect('text=Log in')\n")),(0,l.kt)("h3",g({},{id:"playwrightlocatorselector"}),"playwright.locator(selector)"),(0,l.kt)("p",null,"Query Playwright element using the actual Playwright query engine, for example:"),(0,l.kt)("pre",null,(0,l.kt)("code",g({parentName:"pre"},{className:"language-txt"}),"> playwright.locator('.auth-form', { hasText: 'Log in' });\n\n> Locator ()\n>   - element: button\n>   - elements: [button]\n")),(0,l.kt)("h3",g({},{id:"playwrighthighlightselector"}),"playwright.highlight(selector)"),(0,l.kt)("p",null,"Highlight the first occurrence of the locator:"),(0,l.kt)("pre",null,(0,l.kt)("code",g({parentName:"pre"},{className:"language-txt"}),"> playwright.hightlight('.auth-form');\n")),(0,l.kt)("h3",g({},{id:"playwrightclear"}),"playwright.clear()"),(0,l.kt)("pre",null,(0,l.kt)("code",g({parentName:"pre"},{className:"language-txt"}),"> playwright.clear()\n")),(0,l.kt)("p",null,"Clear existing highlights."),(0,l.kt)("h3",g({},{id:"playwrightselectorelement"}),"playwright.selector(element)"),(0,l.kt)("p",null,"Generates selector for the given element."),(0,l.kt)("pre",null,(0,l.kt)("code",g({parentName:"pre"},{className:"language-txt"}),'> playwright.selector($0)\n\n"div[id="glow-ingress-block"] >> text=/.*Hello.*/"\n')),(0,l.kt)("h2",g({},{id:"verbose-api-logs"}),"Verbose API logs"),(0,l.kt)("p",null,"Playwright supports verbose logging with the ",(0,l.kt)("inlineCode",{parentName:"p"},"DEBUG")," environment variable."),(0,l.kt)(n.Z,{groupId:"bash-flavor",defaultValue:"bash",values:[{label:"Bash",value:"bash"},{label:"PowerShell",value:"powershell"},{label:"Batch",value:"batch"}],mdxType:"Tabs"},(0,l.kt)(a.Z,{value:"bash",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",g({parentName:"pre"},{className:"language-bash"}),"DEBUG=pw:api pytest -s\n"))),(0,l.kt)(a.Z,{value:"powershell",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",g({parentName:"pre"},{className:"language-powershell"}),'$env:DEBUG="pw:api"\npytest -s\n'))),(0,l.kt)(a.Z,{value:"batch",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",g({parentName:"pre"},{className:"language-batch"}),"set DEBUG=pw:api\npytest -s\n")))))}w.isMDXComponent=!0}}]);