"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[7548],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return v}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),v=r,m=d["".concat(u,".").concat(v)]||d[v]||p[v]||o;return n?a.createElement(m,i(i({ref:t},c),{},{components:n})):a.createElement(m,i({ref:t},c))}));function v(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1522:function(e,t,n){n.r(t),n.d(t,{assets:function(){return f},contentTitle:function(){return v},default:function(){return y},frontMatter:function(){return d},metadata:function(){return m},toc:function(){return g}});var a=n(3905),r=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t)=>{for(var n in t||(t={}))u.call(t,n)&&c(e,n,t[n]);if(l)for(var n of l(t))s.call(t,n)&&c(e,n,t[n]);return e};const d={id:"evaluating",title:"Evaluating JavaScript"},v=void 0,m={unversionedId:"evaluating",id:"version-1.18/evaluating",title:"Evaluating JavaScript",description:"Playwright scripts run in your Playwright environment. Your page scripts run in the browser page environment. Those environments don't intersect, they are running in different virtual machines in different processes and even potentially on different computers.",source:"@site/versioned_docs/version-1.18/evaluating.mdx",sourceDirName:".",slug:"/evaluating",permalink:"/dotnet/docs/1.18/evaluating",tags:[],version:"1.18",frontMatter:{id:"evaluating",title:"Evaluating JavaScript"},sidebar:"version-1.18/docs",previous:{title:"Emulation",permalink:"/dotnet/docs/1.18/emulation"},next:{title:"Events",permalink:"/dotnet/docs/1.18/events"}},f={},g=[{value:"Evaluation Argument",id:"evaluation-argument",level:2}],b={toc:g};function y(e){var t,n=e,{components:r}=n,c=((e,t)=>{var n={};for(var a in e)u.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&l)for(var a of l(e))t.indexOf(a)<0&&s.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=p(p({},b),c),o(t,i({components:r,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"Playwright scripts run in your Playwright environment. Your page scripts run in the browser page environment. Those environments don't intersect, they are running in different virtual machines in different processes and even potentially on different computers."),(0,a.kt)("p",null,"The ",(0,a.kt)("a",p({parentName:"p"},{href:"/dotnet/docs/1.18/api/class-page#page-evaluate"}),"Page.EvaluateAsync(expression, arg)")," API can run a JavaScript function in the context of the web page and bring results back to the Playwright environment. Browser globals like ",(0,a.kt)("inlineCode",{parentName:"p"},"window")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"document")," can be used in ",(0,a.kt)("inlineCode",{parentName:"p"},"evaluate"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-csharp"}),'var href = await page.EvaluateAsync<string>("document.location.href");\n')),(0,a.kt)("p",null,"If the result is a Promise or if the function is asynchronous evaluate will automatically wait until it's resolved:"),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-csharp"}),'int status = await page.EvaluateAsync<int>(@"async () => {\n  const response = await fetch(location.href);\n  return response.status;\n}");\n')),(0,a.kt)("h2",p({},{id:"evaluation-argument"}),"Evaluation Argument"),(0,a.kt)("p",null,"Playwright evaluation methods like ",(0,a.kt)("a",p({parentName:"p"},{href:"/dotnet/docs/1.18/api/class-page#page-evaluate"}),"Page.EvaluateAsync(expression, arg)")," take a single optional argument. This argument can be a mix of ",(0,a.kt)("a",p({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#Description",title:"Serializable"}),"Serializable")," values and ",(0,a.kt)("a",p({parentName:"p"},{href:"/dotnet/docs/1.18/api/class-jshandle",title:"JSHandle"}),"JSHandle")," or ",(0,a.kt)("a",p({parentName:"p"},{href:"/dotnet/docs/1.18/api/class-elementhandle",title:"ElementHandle"}),"ElementHandle")," instances. Handles are automatically converted to the value they represent."),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-csharp"}),'// A primitive value.\nawait page.EvaluateAsync<int>("num => num", 42);\n\n// An array.\nawait page.EvaluateAsync<int[]>("array => array.length", new[] { 1, 2, 3 });\n\n// An object.\nawait page.EvaluateAsync<object>("object => object.foo", new { foo = "bar" });\n\n// A single handle.\nvar button = await page.EvaluateAsync("window.button");\nawait page.EvaluateAsync<IJSHandle>("button => button.textContent", button);\n\n// Alternative notation using elementHandle.EvaluateAsync.\nawait button.EvaluateAsync<string>("(button, from) => button.textContent.substring(from)", 5);\n\n// Object with multiple handles.\nvar button1 = await page.EvaluateAsync("window.button1");\nvar button2 = await page.EvaluateAsync("window.button2");\nawait page.EvaluateAsync("o => o.button1.textContent + o.button2.textContent", new { button1, button2 });\n\n// Object destructuring works. Note that property names must match\n// between the destructured object and the argument.\n// Also note the required parenthesis.\nawait page.EvaluateAsync("({ button1, button2 }) => button1.textContent + button2.textContent", new { button1, button2 });\n\n// Array works as well. Arbitrary names can be used for destructuring.\n// Note the required parenthesis.\nawait page.EvaluateAsync("([b1, b2]) => b1.textContent + b2.textContent", new[] { button1, button2 });\n\n// Any non-cyclic mix of serializables and handles works.\nawait page.EvaluateAsync("x => x.button1.textContent + x.list[0].textContent + String(x.foo)", new { button1, list = new[] { button2 }, foo = null as object });\n')),(0,a.kt)("p",null,"Right:"),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-csharp"}),'var data = new { text = "some data", value = 1};\n// Pass data as a parameter\nvar result = await page.EvaluateAsync("data => { window.myApp.use(data); }", data);\n')),(0,a.kt)("p",null,"Wrong:"),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-csharp"}),'var data = new { text = "some data", value = 1};\n// Pass data as a parameter\nvar result = await page.EvaluateAsync(@"data => {\n  // There is no |data| in the web page.\n  window.myApp.use(data); \n}");\n')))}y.isMDXComponent=!0}}]);