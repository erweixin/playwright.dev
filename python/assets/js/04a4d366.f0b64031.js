"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[9761],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return f}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),i=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=i(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=i(a),f=n,d=m["".concat(c,".").concat(f)]||m[f]||u[f]||o;return a?r.createElement(d,l(l({ref:t},p),{},{components:a})):r.createElement(d,l({ref:t},p))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,l[1]=s;for(var i=2;i<o;i++)l[i]=a[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},4455:function(e,t,a){a.d(t,{Z:function(){return u}});var r=a(7294),n=a(6010),o="tabItem_Ymn6",l=Object.defineProperty,s=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,p=(e,t,a)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;function u({children:e,hidden:t,className:a}){return r.createElement("div",((e,t)=>{for(var a in t||(t={}))c.call(t,a)&&p(e,a,t[a]);if(s)for(var a of s(t))i.call(t,a)&&p(e,a,t[a]);return e})({role:"tabpanel",className:(0,n.Z)(o,a)},{hidden:t}),e)}},5332:function(e,t,a){a.d(t,{Z:function(){return O}});var r=a(7294),n=a(6010),o=a(4939),l=a(2174),s=a(2107),c=a(8757),i="tabList__CuJ",p="tabItem_LNqP",u=Object.defineProperty,m=Object.defineProperties,f=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable,g=(e,t,a)=>t in e?u(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,h=(e,t)=>{for(var a in t||(t={}))b.call(t,a)&&g(e,a,t[a]);if(d)for(var a of d(t))y.call(t,a)&&g(e,a,t[a]);return e};function v(e){var t,a;const{lazy:o,block:u,defaultValue:d,values:b,groupId:y,className:g}=e,v=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),O=null!=b?b:v.map((({props:{value:e,label:t,attributes:a}})=>({value:e,label:t,attributes:a}))),k=(0,l.l)(O,((e,t)=>e.value===t.value));if(k.length>0)throw new Error(`Docusaurus error: Duplicate values "${k.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const w=null===d?d:null!=(a=null!=d?d:null==(t=v.find((e=>e.props.default)))?void 0:t.props.value)?a:v[0].props.value;if(null!==w&&!O.some((e=>e.value===w)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${w}" but none of its children has the corresponding value. Available values are: ${O.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:P,setTabGroupChoices:j}=(0,s.U)(),[_,T]=(0,r.useState)(w),E=[],{blockElementScrollPositionUntilNextRender:N}=(0,c.o5)();if(null!=y){const e=P[y];null!=e&&e!==_&&O.some((t=>t.value===e))&&T(e)}const x=e=>{const t=e.currentTarget,a=E.indexOf(t),r=O[a].value;r!==_&&(N(t),T(r),null!=y&&j(y,String(r)))},I=e=>{var t,a;let r=null;switch(e.key){case"ArrowRight":{const a=E.indexOf(e.currentTarget)+1;r=null!=(t=E[a])?t:E[0];break}case"ArrowLeft":{const t=E.indexOf(e.currentTarget)-1;r=null!=(a=E[t])?a:E[E.length-1];break}}null==r||r.focus()};return r.createElement("div",{className:(0,n.Z)("tabs-container",i)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.Z)("tabs",{"tabs--block":u},g)},O.map((({value:e,label:t,attributes:a})=>{return r.createElement("li",(o=h({role:"tab",tabIndex:_===e?0:-1,"aria-selected":_===e,key:e,ref:e=>E.push(e),onKeyDown:I,onFocus:x,onClick:x},a),l={className:(0,n.Z)("tabs__item",p,null==a?void 0:a.className,{"tabs__item--active":_===e})},m(o,f(l))),null!=t?t:e);var o,l}))),o?(0,r.cloneElement)(v.filter((e=>e.props.value===_))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==_})))))}function O(e){const t=(0,o.Z)();return r.createElement(v,h({key:String(t)},e))}},802:function(e,t,a){a.r(t),a.d(t,{assets:function(){return g},contentTitle:function(){return b},default:function(){return O},frontMatter:function(){return d},metadata:function(){return y},toc:function(){return h}});var r=a(3905),n=a(5332),o=a(4455),l=Object.defineProperty,s=Object.defineProperties,c=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,m=(e,t,a)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,f=(e,t)=>{for(var a in t||(t={}))p.call(t,a)&&m(e,a,t[a]);if(i)for(var a of i(t))u.call(t,a)&&m(e,a,t[a]);return e};const d={id:"pom",title:"Page Object Models"},b=void 0,y={unversionedId:"pom",id:"version-stable/pom",title:"Page Object Models",description:"Large test suites can be structured to optimize ease of authoring and maintenance. Page object models are one such approach to structure your test suite.",source:"@site/versioned_docs/version-stable/pom.mdx",sourceDirName:".",slug:"/pom",permalink:"/python/docs/pom",draft:!1,tags:[],version:"stable",frontMatter:{id:"pom",title:"Page Object Models"},sidebar:"docs",previous:{title:"Pages",permalink:"/python/docs/pages"},next:{title:"Screenshots",permalink:"/python/docs/screenshots"}},g={},h=[{value:"Introduction",id:"introduction",level:2},{value:"Implementation",id:"implementation",level:2},{value:"API reference",id:"api-reference",level:3}],v={toc:h};function O(e){var t,a=e,{components:l}=a,m=((e,t)=>{var a={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&i)for(var r of i(e))t.indexOf(r)<0&&u.call(e,r)&&(a[r]=e[r]);return a})(a,["components"]);return(0,r.kt)("wrapper",(t=f(f({},v),m),s(t,c({components:l,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"Large test suites can be structured to optimize ease of authoring and maintenance. Page object models are one such approach to structure your test suite."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",f({parentName:"li"},{href:"#introduction"}),"Introduction")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",f({parentName:"li"},{href:"#implementation"}),"Implementation"))),(0,r.kt)("h2",f({},{id:"introduction"}),"Introduction"),(0,r.kt)("p",null,"A page object represents a part of your web application. An e-commerce web application might have a home page, a listings page and a checkout page. Each of them can be represented by page object models."),(0,r.kt)("p",null,"Page objects ",(0,r.kt)("strong",{parentName:"p"},"simplify authoring"),". They create a higher-level API which suits your application."),(0,r.kt)("p",null,"Page objects ",(0,r.kt)("strong",{parentName:"p"},"simplify maintenance"),". They capture element selectors in one place and create reusable code to avoid repetition."),(0,r.kt)("h2",f({},{id:"implementation"}),"Implementation"),(0,r.kt)("p",null,"Page object models wrap over a Playwright ",(0,r.kt)("a",f({parentName:"p"},{href:"/python/docs/api/class-page",title:"Page"}),"Page"),"."),(0,r.kt)(n.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"sync",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",f({parentName:"pre"},{className:"language-py"}),'# models/search.py\nclass SearchPage:\n    def __init__(self, page):\n        self.page = page\n        self.search_term_input = page.locator(\'[aria-label="Enter your search term"]\')\n\n    def navigate(self):\n        self.page.goto("https://bing.com")\n\n    def search(self, text):\n        self.search_term_input.fill(text)\n        self.search_term_input.press("Enter")\n'))),(0,r.kt)(o.Z,{value:"async",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",f({parentName:"pre"},{className:"language-py"}),'# models/search.py\nclass SearchPage:\n    def __init__(self, page):\n        self.page = page\n        self.search_term_input = page.locator(\'[aria-label="Enter your search term"]\')\n\n    async def navigate(self):\n        await self.page.goto("https://bing.com")\n\n    async def search(self, text):\n        await self.search_term_input.fill(text)\n        await self.search_term_input.press("Enter")\n')))),(0,r.kt)("p",null,"Page objects can then be used inside a test."),(0,r.kt)(n.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"sync",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",f({parentName:"pre"},{className:"language-py"}),'# test_search.py\nfrom models.search import SearchPage\n\n# in the test\npage = browser.new_page()\nsearch_page = SearchPage(page)\nsearch_page.navigate()\nsearch_page.search("search query")\n'))),(0,r.kt)(o.Z,{value:"async",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",f({parentName:"pre"},{className:"language-py"}),'# test_search.py\nfrom models.search import SearchPage\n\n# in the test\npage = await browser.new_page()\nsearch_page = SearchPage(page)\nawait search_page.navigate()\nawait search_page.search("search query")\n')))),(0,r.kt)("h3",f({},{id:"api-reference"}),"API reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",f({parentName:"li"},{href:"/python/docs/api/class-page",title:"Page"}),"Page"))))}O.isMDXComponent=!0}}]);