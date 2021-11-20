"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[43247],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),c=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,f=d["".concat(o,".").concat(m)]||d[m]||p[m]||i;return n?a.createElement(f,l(l({ref:t},u),{},{components:n})):a.createElement(f,l({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var c=2;c<i;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},58215:function(e,t,n){var a=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},55064:function(e,t,n){n.d(t,{Z:function(){return p}});var a=n(67294),r=n(79443);var i=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=n(86010),s="tabItem_1uMI",o="tabItemActive_2DSg";var c=37,u=39;var p=function(e){var t=e.lazy,n=e.block,r=e.defaultValue,p=e.values,d=e.groupId,m=e.className,f=i(),h=f.tabGroupChoices,k=f.setTabGroupChoices,v=(0,a.useState)(r),g=v[0],b=v[1],x=a.Children.toArray(e.children),N=[];if(null!=d){var y=h[d];null!=y&&y!==g&&p.some((function(e){return e.value===y}))&&b(y)}var w=function(e){var t=e.currentTarget,n=N.indexOf(t),a=p[n].value;b(a),null!=d&&(k(d,a),setTimeout((function(){var e,n,a,r,i,l,s,c;(e=t.getBoundingClientRect(),n=e.top,a=e.left,r=e.bottom,i=e.right,l=window,s=l.innerHeight,c=l.innerWidth,n>=0&&i<=c&&r<=s&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(o),setTimeout((function(){return t.classList.remove(o)}),2e3))}),150))},A=function(e){var t,n;switch(e.keyCode){case u:var a=N.indexOf(e.target)+1;n=N[a]||N[0];break;case c:var r=N.indexOf(e.target)-1;n=N[r]||N[N.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},m)},p.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:g===t?0:-1,"aria-selected":g===t,className:(0,l.Z)("tabs__item",s,{"tabs__item--active":g===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:A,onFocus:w,onClick:w},n)}))),t?(0,a.cloneElement)(x.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},x.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==g})}))))}},79443:function(e,t,n){var a=(0,n(67294).createContext)(void 0);t.Z=a},4099:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return o},toc:function(){return c},default:function(){return p}});var a=n(22122),r=n(19756),i=(n(67294),n(3905)),l=(n(55064),n(58215),{id:"assertions",title:"Assertions"}),s=void 0,o={unversionedId:"assertions",id:"assertions",isDocsHomePage:!1,title:"Assertions",description:"Playwright provides convenience APIs for common tasks, like reading the text content of an element. These APIs can be used in your test assertions.",source:"@site/docs/assertions.mdx",sourceDirName:".",slug:"/assertions",permalink:"/docs/next/assertions",version:"current",frontMatter:{id:"assertions",title:"Assertions"},sidebar:"docs",previous:{title:"Auto-waiting",permalink:"/docs/next/actionability"},next:{title:"Authentication",permalink:"/docs/next/auth"}},c=[{value:"Text content",id:"text-content",children:[{value:"API reference",id:"api-reference",children:[]}]},{value:"Inner text",id:"inner-text",children:[{value:"API reference",id:"api-reference-1",children:[]}]},{value:"Attribute value",id:"attribute-value",children:[]},{value:"Checkbox state",id:"checkbox-state",children:[{value:"API reference",id:"api-reference-2",children:[]}]},{value:"JS expression",id:"js-expression",children:[{value:"API reference",id:"api-reference-3",children:[]}]},{value:"Inner HTML",id:"inner-html",children:[{value:"API reference",id:"api-reference-4",children:[]}]},{value:"Visibility",id:"visibility",children:[{value:"API reference",id:"api-reference-5",children:[]}]},{value:"Enabled state",id:"enabled-state",children:[{value:"API reference",id:"api-reference-6",children:[]}]},{value:"Custom assertions",id:"custom-assertions",children:[]}],u={toc:c};function p(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Playwright provides convenience APIs for common tasks, like reading the text content of an element. These APIs can be used in your test assertions."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#text-content"},"Text content")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#inner-text"},"Inner text")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#attribute-value"},"Attribute value")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#checkbox-state"},"Checkbox state")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#js-expression"},"JS expression")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#inner-html"},"Inner HTML")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#visibility"},"Visibility")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#enabled-state"},"Enabled state")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#custom-assertions"},"Custom assertions"))),(0,i.kt)("h2",{id:"text-content"},"Text content"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const content = await page.textContent('nav:first-child');\nexpect(content).toBe('home');\n")),(0,i.kt)("h3",{id:"api-reference"},"API reference"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/class-page#page-text-content"},"page.textContent(selector[, options])")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/class-elementhandle#element-handle-text-content"},"elementHandle.textContent()"))),(0,i.kt)("h2",{id:"inner-text"},"Inner text"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const text = await page.innerText('.selected');\nexpect(text).toBe('value');\n")),(0,i.kt)("h3",{id:"api-reference-1"},"API reference"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/class-page#page-inner-text"},"page.innerText(selector[, options])")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/class-elementhandle#element-handle-inner-text"},"elementHandle.innerText()"))),(0,i.kt)("h2",{id:"attribute-value"},"Attribute value"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const alt = await page.getAttribute('input', 'alt');\nexpect(alt).toBe('Text');\n")),(0,i.kt)("h2",{id:"checkbox-state"},"Checkbox state"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const checked = await page.isChecked('input');\nexpect(checked).toBeTruthy();\n")),(0,i.kt)("h3",{id:"api-reference-2"},"API reference"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/class-page#page-is-checked"},"page.isChecked(selector[, options])")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/class-elementhandle#element-handle-is-checked"},"elementHandle.isChecked()"))),(0,i.kt)("h2",{id:"js-expression"},"JS expression"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const content = await page.locator('nav:first-child').textContent();\nexpect(content).toBe('home');\n")),(0,i.kt)("h3",{id:"api-reference-3"},"API reference"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/class-page#page-eval-on-selector"},"page.$eval(selector, pageFunction[, arg, options])")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/class-jshandle#js-handle-evaluate"},"jsHandle.evaluate(pageFunction[, arg])"))),(0,i.kt)("h2",{id:"inner-html"},"Inner HTML"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const html = await page.innerHTML('div.result');\nexpect(html).toBe('<p>Result</p>');\n")),(0,i.kt)("h3",{id:"api-reference-4"},"API reference"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/class-page#page-inner-html"},"page.innerHTML(selector[, options])")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/class-elementhandle#element-handle-inner-html"},"elementHandle.innerHTML()"))),(0,i.kt)("h2",{id:"visibility"},"Visibility"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const visible = await page.isVisible('input');\nexpect(visible).toBeTruthy();\n")),(0,i.kt)("h3",{id:"api-reference-5"},"API reference"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/class-page#page-is-visible"},"page.isVisible(selector[, options])")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/class-elementhandle#element-handle-is-visible"},"elementHandle.isVisible()"))),(0,i.kt)("h2",{id:"enabled-state"},"Enabled state"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const enabled = await page.isEnabled('input');\nexpect(enabled).toBeTruthy();\n")),(0,i.kt)("h3",{id:"api-reference-6"},"API reference"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/class-page#page-is-enabled"},"page.isEnabled(selector[, options])")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/class-elementhandle#element-handle-is-enabled"},"elementHandle.isEnabled()"))),(0,i.kt)("h2",{id:"custom-assertions"},"Custom assertions"),(0,i.kt)("p",null,"With Playwright, you can also write custom JavaScript to run in the context of the browser. This is useful in situations where you want to assert for values that are not covered by the convenience APIs above."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// Assert local storage value\nconst userId = page.evaluate(() => window.localStorage.getItem('userId'));\nexpect(userId).toBeTruthy();\n\n// Assert value for input element\nconst value = await page.locator('#search').inputValue();\nexpect(value === 'query').toBeTruthy();\n\n// Assert computed style\nconst fontSize = await page.locator('div').evaluate(el => window.getComputedStyle(el).fontSize);\nexpect(fontSize === '16px').toBeTruthy();\n\n// Assert list length\nconst length = await page.locator('li.selected').count();\nexpect(length === 3).toBeTruthy();\n")))}p.isMDXComponent=!0},86010:function(e,t,n){function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{Z:function(){return r}})}}]);