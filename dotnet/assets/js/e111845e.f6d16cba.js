"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[6299],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,f=m["".concat(i,".").concat(d)]||m[d]||c[d]||l;return n?r.createElement(f,s(s({ref:t},p),{},{components:n})):r.createElement(f,s({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,s=new Array(l);s[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var u=2;u<l;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4455:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(7294),a=n(6010),l="tabItem_Ymn6",s=Object.defineProperty,o=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;function c({children:e,hidden:t,className:n}){return r.createElement("div",((e,t)=>{for(var n in t||(t={}))i.call(t,n)&&p(e,n,t[n]);if(o)for(var n of o(t))u.call(t,n)&&p(e,n,t[n]);return e})({role:"tabpanel",className:(0,a.Z)(l,n)},{hidden:t}),e)}},5332:function(e,t,n){n.d(t,{Z:function(){return k}});var r=n(7294),a=n(6010),l=n(4939),s=n(2174),o=n(2107),i=n(8757),u="tabList__CuJ",p="tabItem_LNqP",c=Object.defineProperty,m=Object.defineProperties,d=Object.getOwnPropertyDescriptors,f=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,h=(e,t,n)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,v=(e,t)=>{for(var n in t||(t={}))b.call(t,n)&&h(e,n,t[n]);if(f)for(var n of f(t))g.call(t,n)&&h(e,n,t[n]);return e};function y(e){var t,n;const{lazy:l,block:c,defaultValue:f,values:b,groupId:g,className:h}=e,y=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=null!=b?b:y.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),w=(0,s.l)(k,((e,t)=>e.value===t.value));if(w.length>0)throw new Error(`Docusaurus error: Duplicate values "${w.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const N=null===f?f:null!=(n=null!=f?f:null==(t=y.find((e=>e.props.default)))?void 0:t.props.value)?n:y[0].props.value;if(null!==N&&!k.some((e=>e.value===N)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${N}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:O,setTabGroupChoices:T}=(0,o.U)(),[j,P]=(0,r.useState)(N),E=[],{blockElementScrollPositionUntilNextRender:x}=(0,i.o5)();if(null!=g){const e=O[g];null!=e&&e!==j&&k.some((t=>t.value===e))&&P(e)}const R=e=>{const t=e.currentTarget,n=E.indexOf(t),r=k[n].value;r!==j&&(x(t),P(r),null!=g&&T(g,String(r)))},C=e=>{var t,n;let r=null;switch(e.key){case"ArrowRight":{const n=E.indexOf(e.currentTarget)+1;r=null!=(t=E[n])?t:E[0];break}case"ArrowLeft":{const t=E.indexOf(e.currentTarget)-1;r=null!=(n=E[t])?n:E[E.length-1];break}}null==r||r.focus()};return r.createElement("div",{className:(0,a.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":c},h)},k.map((({value:e,label:t,attributes:n})=>{return r.createElement("li",(l=v({role:"tab",tabIndex:j===e?0:-1,"aria-selected":j===e,key:e,ref:e=>E.push(e),onKeyDown:C,onFocus:R,onClick:R},n),s={className:(0,a.Z)("tabs__item",p,null==n?void 0:n.className,{"tabs__item--active":j===e})},m(l,d(s))),null!=t?t:e);var l,s}))),l?(0,r.cloneElement)(y.filter((e=>e.props.value===j))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},y.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==j})))))}function k(e){const t=(0,l.Z)();return r.createElement(y,v({key:String(t)},e))}},5929:function(e,t,n){n.r(t),n.d(t,{assets:function(){return h},contentTitle:function(){return b},default:function(){return k},frontMatter:function(){return f},metadata:function(){return g},toc:function(){return v}});var r=n(3905),a=n(5332),l=n(4455),s=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&m(e,n,t[n]);if(u)for(var n of u(t))c.call(t,n)&&m(e,n,t[n]);return e};const f={id:"running-tests",title:"Running Tests"},b=void 0,g={unversionedId:"running-tests",id:"version-stable/running-tests",title:"Running Tests",description:"You can run a single test, a set of tests or all tests. Tests can be run on different browsers. By default tests are run in a headless manner meaning no browser window will be opened while running the tests and results will be seen in the terminal. If you prefer you can run your tests in headed mode by using the headless test run parameter.",source:"@site/versioned_docs/version-stable/running-tests.mdx",sourceDirName:".",slug:"/running-tests",permalink:"/dotnet/docs/running-tests",draft:!1,tags:[],version:"stable",frontMatter:{id:"running-tests",title:"Running Tests"},sidebar:"docs",previous:{title:"Writing Tests",permalink:"/dotnet/docs/writing-tests"},next:{title:"Debugging Tests",permalink:"/dotnet/docs/debug"}},h={},v=[{value:"What&#39;s Next",id:"whats-next",level:2}],y={toc:v};function k(e){var t,n=e,{components:s}=n,m=((e,t)=>{var n={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&u)for(var r of u(e))t.indexOf(r)<0&&c.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=d(d({},y),m),o(t,i({components:s,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"You can run a single test, a set of tests or all tests. Tests can be run on different browsers. By default tests are run in a headless manner meaning no browser window will be opened while running the tests and results will be seen in the terminal. If you prefer you can run your tests in headed mode by using the ",(0,r.kt)("inlineCode",{parentName:"p"},"headless")," test run parameter."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Running all tests"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"dotnet test\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Running a single test file"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",d({parentName:"pre"},{className:"language-bash"}),'dotnet test --filter "MyClassName"\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Run a set of test files"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",d({parentName:"pre"},{className:"language-bash"}),'dotnet test --filter "MyClassName1|MyClassName2"\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Run the test with the title"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",d({parentName:"pre"},{className:"language-bash"}),'dotnet test --filter "Name~TestMethod1"\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Running Tests on specific browsers"),(0,r.kt)(a.Z,{groupId:"bash-flavor",defaultValue:"bash",values:[{label:"Bash",value:"bash"},{label:"PowerShell",value:"powershell"},{label:"Batch",value:"batch"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"bash",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"BROWSER=webkit dotnet test\n"))),(0,r.kt)(l.Z,{value:"powershell",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",d({parentName:"pre"},{className:"language-powershell"}),'$env:BROWSER="webkit"\ndotnet test\n'))),(0,r.kt)(l.Z,{value:"batch",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",d({parentName:"pre"},{className:"language-batch"}),"set BROWSER=webkit\ndotnet test\n"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Running Tests on multiple browsers"),(0,r.kt)("p",{parentName:"li"},"To run your test on multiple browsers or configurations you need to invoke the ",(0,r.kt)("inlineCode",{parentName:"p"},"dotnet test")," command multiple times. There you can then either specify the ",(0,r.kt)("inlineCode",{parentName:"p"},"BROWSER")," environment variable (like the previous) or pass the ",(0,r.kt)("inlineCode",{parentName:"p"},"browser")," via the runsettings file:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"dotnet test --settings:chromium.runsettings\ndotnet test --settings:firefox.runsettings\ndotnet test --settings:webkit.runsettings\n")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",d({parentName:"pre"},{className:"language-xml"}),'<?xml version="1.0" encoding="utf-8"?>\n<RunSettings>\n  <TestRunParameters>\n    <Parameter name="browser" value="chromium" />\n    <Parameter name="headless" value="false" />\n  </TestRunParameters>\n</RunSettings>\n')))),(0,r.kt)("p",null,"For more information see ",(0,r.kt)("a",d({parentName:"p"},{href:"https://docs.microsoft.com/en-us/dotnet/core/testing/selective-unit-tests?pivots=mstest"}),"selective unit tests")," in the Microsoft docs."),(0,r.kt)("h2",d({},{id:"whats-next"}),"What's Next"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",d({parentName:"li"},{href:"/dotnet/docs/debug"}),"Debug tests with the Playwright Debugger")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",d({parentName:"li"},{href:"/dotnet/docs/codegen"}),"Generate tests with Codegen")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",d({parentName:"li"},{href:"/dotnet/docs/trace-viewer"}),"See a trace of your tests"))))}k.isMDXComponent=!0}}]);