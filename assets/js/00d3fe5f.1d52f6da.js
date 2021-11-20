"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[68372],{3905:function(t,e,r){r.d(e,{Zo:function(){return c},kt:function(){return f}});var a=r(67294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function s(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?s(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},s=Object.keys(t);for(a=0;a<s.length;a++)r=s[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(a=0;a<s.length;a++)r=s[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var o=a.createContext({}),p=function(t){var e=a.useContext(o),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},c=function(t){var e=p(t.components);return a.createElement(o.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,s=t.originalType,o=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),d=p(r),f=n,m=d["".concat(o,".").concat(f)]||d[f]||u[f]||s;return r?a.createElement(m,i(i({ref:e},c),{},{components:r})):a.createElement(m,i({ref:e},c))}));function f(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var s=r.length,i=new Array(s);i[0]=d;var l={};for(var o in e)hasOwnProperty.call(e,o)&&(l[o]=e[o]);l.originalType=t,l.mdxType="string"==typeof t?t:n,i[1]=l;for(var p=2;p<s;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},58215:function(t,e,r){var a=r(67294);e.Z=function(t){var e=t.children,r=t.hidden,n=t.className;return a.createElement("div",{role:"tabpanel",hidden:r,className:n},e)}},55064:function(t,e,r){r.d(e,{Z:function(){return u}});var a=r(67294),n=r(79443);var s=function(){var t=(0,a.useContext)(n.Z);if(null==t)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return t},i=r(86010),l="tabItem_1uMI",o="tabItemActive_2DSg";var p=37,c=39;var u=function(t){var e=t.lazy,r=t.block,n=t.defaultValue,u=t.values,d=t.groupId,f=t.className,m=s(),h=m.tabGroupChoices,k=m.setTabGroupChoices,v=(0,a.useState)(n),y=v[0],b=v[1],g=a.Children.toArray(t.children),S=[];if(null!=d){var N=h[d];null!=N&&N!==y&&u.some((function(t){return t.value===N}))&&b(N)}var O=function(t){var e=t.currentTarget,r=S.indexOf(e),a=u[r].value;b(a),null!=d&&(k(d,a),setTimeout((function(){var t,r,a,n,s,i,l,p;(t=e.getBoundingClientRect(),r=t.top,a=t.left,n=t.bottom,s=t.right,i=window,l=i.innerHeight,p=i.innerWidth,r>=0&&s<=p&&n<=l&&a>=0)||(e.scrollIntoView({block:"center",behavior:"smooth"}),e.classList.add(o),setTimeout((function(){return e.classList.remove(o)}),2e3))}),150))},w=function(t){var e,r;switch(t.keyCode){case c:var a=S.indexOf(t.target)+1;r=S[a]||S[0];break;case p:var n=S.indexOf(t.target)-1;r=S[n]||S[S.length-1]}null==(e=r)||e.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":r},f)},u.map((function(t){var e=t.value,r=t.label;return a.createElement("li",{role:"tab",tabIndex:y===e?0:-1,"aria-selected":y===e,className:(0,i.Z)("tabs__item",l,{"tabs__item--active":y===e}),key:e,ref:function(t){return S.push(t)},onKeyDown:w,onFocus:O,onClick:O},r)}))),e?(0,a.cloneElement)(g.filter((function(t){return t.props.value===y}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},g.map((function(t,e){return(0,a.cloneElement)(t,{key:e,hidden:t.props.value!==y})}))))}},79443:function(t,e,r){var a=(0,r(67294).createContext)(void 0);e.Z=a},8092:function(t,e,r){r.r(e),r.d(e,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return o},toc:function(){return p},default:function(){return u}});var a=r(22122),n=r(19756),s=(r(67294),r(3905)),i=(r(55064),r(58215),{id:"class-teststep",title:"TestStep"}),l=void 0,o={unversionedId:"api/class-teststep",id:"version-1.17/api/class-teststep",isDocsHomePage:!1,title:"TestStep",description:"Represents a step in the [TestRun].",source:"@site/versioned_docs/version-1.17/api/class-teststep.mdx",sourceDirName:"api",slug:"/api/class-teststep",permalink:"/docs/api/class-teststep",version:"1.17",frontMatter:{id:"class-teststep",title:"TestStep"},sidebar:"version-1.17/api",previous:{title:"TestResult",permalink:"/docs/api/class-testresult"},next:{title:"Android",permalink:"/docs/api/class-android"}},p=[{value:"testStep.titlePath()",id:"test-step-title-path",children:[]},{value:"testStep.category",id:"test-step-category",children:[]},{value:"testStep.duration",id:"test-step-duration",children:[]},{value:"testStep.error",id:"test-step-error",children:[]},{value:"testStep.location",id:"test-step-location",children:[]},{value:"testStep.parent",id:"test-step-parent",children:[]},{value:"testStep.startTime",id:"test-step-start-time",children:[]},{value:"testStep.steps",id:"test-step-steps",children:[]},{value:"testStep.title",id:"test-step-title",children:[]}],c={toc:p};function u(t){var e=t.components,r=(0,n.Z)(t,["components"]);return(0,s.kt)("wrapper",(0,a.Z)({},c,r,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Represents a step in the ","[TestRun]","."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/api/class-teststep#test-step-title-path"},"testStep.titlePath()")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/api/class-teststep#test-step-category"},"testStep.category")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/api/class-teststep#test-step-duration"},"testStep.duration")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/api/class-teststep#test-step-error"},"testStep.error")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/api/class-teststep#test-step-location"},"testStep.location")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/api/class-teststep#test-step-parent"},"testStep.parent")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/api/class-teststep#test-step-start-time"},"testStep.startTime")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/api/class-teststep#test-step-steps"},"testStep.steps")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/api/class-teststep#test-step-title"},"testStep.title"))),(0,s.kt)("h2",{id:"test-step-title-path"},"testStep.titlePath()"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"test-step-title-path-return"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",title:"Array"},"Array"),"<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">",">",(0,s.kt)("a",{href:"#test-step-title-path-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"Returns a list of step titles from the root step down to this step."),(0,s.kt)("h2",{id:"test-step-category"},"testStep.category"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"type: ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">")),(0,s.kt)("p",null,"Step category to differentiate steps with different origin and verbosity. Built-in categories are:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"hook")," for fixtures and hooks initialization and teardown"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"expect")," for expect calls"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"pw:api")," for Playwright API calls."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"test.step")," for test.step API calls.")),(0,s.kt)("h2",{id:"test-step-duration"},"testStep.duration"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"type: ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"},"number"),">")),(0,s.kt)("p",null,"Running time in milliseconds."),(0,s.kt)("h2",{id:"test-step-error"},"testStep.error"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"type: ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),"|",(0,s.kt)("a",{parentName:"li",href:"/docs/api/class-testerror",title:"TestError"},"TestError"),">")),(0,s.kt)("p",null,"An error thrown during the step execution, if any."),(0,s.kt)("h2",{id:"test-step-location"},"testStep.location"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"type: ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),"|",(0,s.kt)("a",{parentName:"li",href:"/docs/api/class-location",title:"Location"},"Location"),">")),(0,s.kt)("p",null,"Location in the source where the step is defined."),(0,s.kt)("h2",{id:"test-step-parent"},"testStep.parent"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"type: ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),"|",(0,s.kt)("a",{parentName:"li",href:"/docs/api/class-teststep",title:"TestStep"},"TestStep"),">")),(0,s.kt)("p",null,"Parent step, if any."),(0,s.kt)("h2",{id:"test-step-start-time"},"testStep.startTime"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"type: ","<","[Date]",">")),(0,s.kt)("p",null,"Start time of this particular test step."),(0,s.kt)("h2",{id:"test-step-steps"},"testStep.steps"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"type: ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",title:"Array"},"Array"),"<",(0,s.kt)("a",{parentName:"li",href:"/docs/api/class-teststep",title:"TestStep"},"TestStep"),">",">")),(0,s.kt)("p",null,"List of steps inside this step."),(0,s.kt)("h2",{id:"test-step-title"},"testStep.title"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"type: ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">")),(0,s.kt)("p",null,"User-friendly test step title."))}u.isMDXComponent=!0},86010:function(t,e,r){function a(t){var e,r,n="";if("string"==typeof t||"number"==typeof t)n+=t;else if("object"==typeof t)if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(r=a(t[e]))&&(n&&(n+=" "),n+=r);else for(e in t)t[e]&&(n&&(n+=" "),n+=e);return n}function n(){for(var t,e,r=0,n="";r<arguments.length;)(t=arguments[r++])&&(e=a(t))&&(n&&(n+=" "),n+=e);return n}r.d(e,{Z:function(){return n}})}}]);