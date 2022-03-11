"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[7547],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),c=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,f=d["".concat(o,".").concat(m)]||d[m]||u[m]||l;return n?a.createElement(f,i(i({ref:t},p),{},{components:n})):a.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<l;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},74211:function(e,t,n){n.r(t),n.d(t,{assets:function(){return h},contentTitle:function(){return m},default:function(){return g},frontMatter:function(){return d},metadata:function(){return f},toc:function(){return k}});var a=n(3905),r=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))o.call(t,n)&&p(e,n,t[n]);if(s)for(var n of s(t))c.call(t,n)&&p(e,n,t[n]);return e};const d={id:"assertions",title:"Assertions"},m=void 0,f={unversionedId:"assertions",id:"version-1.19/assertions",title:"Assertions",description:"Playwright provides convenience APIs for common tasks, like reading the text content of an element. These APIs can be used in your test assertions.",source:"@site/versioned_docs/version-1.19/assertions.mdx",sourceDirName:".",slug:"/assertions",permalink:"/docs/assertions",tags:[],version:"1.19",frontMatter:{id:"assertions",title:"Assertions"},sidebar:"version-1.19/docs",previous:{title:"Auto-waiting",permalink:"/docs/actionability"},next:{title:"Authentication",permalink:"/docs/auth"}},h={},k=[{value:"Text content",id:"text-content",level:2},{value:"API reference",id:"api-reference",level:3},{value:"Inner text",id:"inner-text",level:2},{value:"API reference",id:"api-reference-1",level:3},{value:"Attribute value",id:"attribute-value",level:2},{value:"Checkbox state",id:"checkbox-state",level:2},{value:"API reference",id:"api-reference-2",level:3},{value:"JS expression",id:"js-expression",level:2},{value:"API reference",id:"api-reference-3",level:3},{value:"Inner HTML",id:"inner-html",level:2},{value:"API reference",id:"api-reference-4",level:3},{value:"Visibility",id:"visibility",level:2},{value:"API reference",id:"api-reference-5",level:3},{value:"Enabled state",id:"enabled-state",level:2},{value:"API reference",id:"api-reference-6",level:3},{value:"Custom assertions",id:"custom-assertions",level:2}],v={toc:k};function g(e){var t,n=e,{components:r}=n,p=((e,t)=>{var n={};for(var a in e)o.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&s)for(var a of s(e))t.indexOf(a)<0&&c.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=u(u({},v),p),l(t,i({components:r,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"Playwright provides convenience APIs for common tasks, like reading the text content of an element. These APIs can be used in your test assertions."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"#text-content"}),"Text content")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"#inner-text"}),"Inner text")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"#attribute-value"}),"Attribute value")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"#checkbox-state"}),"Checkbox state")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"#js-expression"}),"JS expression")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"#inner-html"}),"Inner HTML")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"#visibility"}),"Visibility")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"#enabled-state"}),"Enabled state")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"#custom-assertions"}),"Custom assertions"))),(0,a.kt)("h2",u({},{id:"text-content"}),"Text content"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-js"}),"const content = await page.textContent('nav:first-child');\nexpect(content).toBe('home');\n")),(0,a.kt)("h3",u({},{id:"api-reference"}),"API reference"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"/docs/api/class-page#page-text-content"}),"page.textContent(selector[, options])")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"/docs/api/class-elementhandle#element-handle-text-content"}),"elementHandle.textContent()"))),(0,a.kt)("h2",u({},{id:"inner-text"}),"Inner text"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-js"}),"const text = await page.innerText('.selected');\nexpect(text).toBe('value');\n")),(0,a.kt)("h3",u({},{id:"api-reference-1"}),"API reference"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"/docs/api/class-page#page-inner-text"}),"page.innerText(selector[, options])")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"/docs/api/class-elementhandle#element-handle-inner-text"}),"elementHandle.innerText()"))),(0,a.kt)("h2",u({},{id:"attribute-value"}),"Attribute value"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-js"}),"const alt = await page.getAttribute('input', 'alt');\nexpect(alt).toBe('Text');\n")),(0,a.kt)("h2",u({},{id:"checkbox-state"}),"Checkbox state"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-js"}),"const checked = await page.isChecked('input');\nexpect(checked).toBeTruthy();\n")),(0,a.kt)("h3",u({},{id:"api-reference-2"}),"API reference"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"/docs/api/class-page#page-is-checked"}),"page.isChecked(selector[, options])")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"/docs/api/class-elementhandle#element-handle-is-checked"}),"elementHandle.isChecked()"))),(0,a.kt)("h2",u({},{id:"js-expression"}),"JS expression"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-js"}),"const content = await page.locator('nav:first-child').textContent();\nexpect(content).toBe('home');\n")),(0,a.kt)("h3",u({},{id:"api-reference-3"}),"API reference"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"/docs/api/class-page#page-eval-on-selector"}),"page.$eval(selector, pageFunction[, arg, options])")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"/docs/api/class-jshandle#js-handle-evaluate"}),"jsHandle.evaluate(pageFunction[, arg])"))),(0,a.kt)("h2",u({},{id:"inner-html"}),"Inner HTML"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-js"}),"const html = await page.innerHTML('div.result');\nexpect(html).toBe('<p>Result</p>');\n")),(0,a.kt)("h3",u({},{id:"api-reference-4"}),"API reference"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"/docs/api/class-page#page-inner-html"}),"page.innerHTML(selector[, options])")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"/docs/api/class-elementhandle#element-handle-inner-html"}),"elementHandle.innerHTML()"))),(0,a.kt)("h2",u({},{id:"visibility"}),"Visibility"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-js"}),"const visible = await page.isVisible('input');\nexpect(visible).toBeTruthy();\n")),(0,a.kt)("h3",u({},{id:"api-reference-5"}),"API reference"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"/docs/api/class-page#page-is-visible"}),"page.isVisible(selector[, options])")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"/docs/api/class-elementhandle#element-handle-is-visible"}),"elementHandle.isVisible()"))),(0,a.kt)("h2",u({},{id:"enabled-state"}),"Enabled state"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-js"}),"const enabled = await page.isEnabled('input');\nexpect(enabled).toBeTruthy();\n")),(0,a.kt)("h3",u({},{id:"api-reference-6"}),"API reference"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"/docs/api/class-page#page-is-enabled"}),"page.isEnabled(selector[, options])")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"/docs/api/class-elementhandle#element-handle-is-enabled"}),"elementHandle.isEnabled()"))),(0,a.kt)("h2",u({},{id:"custom-assertions"}),"Custom assertions"),(0,a.kt)("p",null,"With Playwright, you can also write custom JavaScript to run in the context of the browser. This is useful in situations where you want to assert for values that are not covered by the convenience APIs above."),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-js"}),"// Assert local storage value\nconst userId = page.evaluate(() => window.localStorage.getItem('userId'));\nexpect(userId).toBeTruthy();\n\n// Assert value for input element\nconst value = await page.locator('#search').inputValue();\nexpect(value === 'query').toBeTruthy();\n\n// Assert computed style\nconst fontSize = await page.locator('div').evaluate(el => window.getComputedStyle(el).fontSize);\nexpect(fontSize === '16px').toBeTruthy();\n\n// Assert list length\nconst length = await page.locator('li.selected').count();\nexpect(length === 3).toBeTruthy();\n")))}g.isMDXComponent=!0}}]);