"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[4321],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return h}});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(a),h=l,m=u["".concat(o,".").concat(h)]||u[h]||c[h]||r;return a?n.createElement(m,i(i({ref:t},d),{},{components:a})):n.createElement(m,i({ref:t},d))}));function h(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=u;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:l,i[1]=s;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},3529:function(e,t,a){a.r(t),a.d(t,{assets:function(){return v},contentTitle:function(){return h},default:function(){return g},frontMatter:function(){return u},metadata:function(){return m},toc:function(){return k}});var n=a(3905),l=Object.defineProperty,r=Object.defineProperties,i=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,d=(e,t,a)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,c=(e,t)=>{for(var a in t||(t={}))o.call(t,a)&&d(e,a,t[a]);if(s)for(var a of s(t))p.call(t,a)&&d(e,a,t[a]);return e};const u={id:"class-jshandle",title:"JSHandle"},h=void 0,m={unversionedId:"api/class-jshandle",id:"api/class-jshandle",title:"JSHandle",description:"JSHandle represents an in-page JavaScript object. JSHandles can be created with the page.evaluateHandle(pageFunction[, arg]) method.",source:"@site/docs/api/class-jshandle.mdx",sourceDirName:"api",slug:"/api/class-jshandle",permalink:"/docs/next/api/class-jshandle",tags:[],version:"current",frontMatter:{id:"class-jshandle",title:"JSHandle"},sidebar:"api",previous:{title:"FrameLocator",permalink:"/docs/next/api/class-framelocator"},next:{title:"Keyboard",permalink:"/docs/next/api/class-keyboard"}},v={},k=[{value:"jsHandle.asElement()",id:"js-handle-as-element",level:2},{value:"jsHandle.dispose()",id:"js-handle-dispose",level:2},{value:"jsHandle.evaluate(pageFunction, arg)",id:"js-handle-evaluate",level:2},{value:"jsHandle.evaluateHandle(pageFunction, arg)",id:"js-handle-evaluate-handle",level:2},{value:"jsHandle.getProperties()",id:"js-handle-get-properties",level:2},{value:"jsHandle.getProperty(propertyName)",id:"js-handle-get-property",level:2},{value:"jsHandle.jsonValue()",id:"js-handle-json-value",level:2}],f={toc:k};function g(e){var t,a=e,{components:l}=a,d=((e,t)=>{var a={};for(var n in e)o.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&s)for(var n of s(e))t.indexOf(n)<0&&p.call(e,n)&&(a[n]=e[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(t=c(c({},f),d),r(t,i({components:l,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"JSHandle represents an in-page JavaScript object. JSHandles can be created with the ",(0,n.kt)("a",c({parentName:"p"},{href:"/docs/next/api/class-page#page-evaluate-handle"}),"page.evaluateHandle(pageFunction[, arg])")," method."),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-js"}),"const windowHandle = await page.evaluateHandle(() => window);\n// ...\n")),(0,n.kt)("p",null,"JSHandle prevents the referenced JavaScript object being garbage collected unless the handle is exposed with ",(0,n.kt)("a",c({parentName:"p"},{href:"/docs/next/api/class-jshandle#js-handle-dispose"}),"jsHandle.dispose()"),". JSHandles are auto-disposed when their origin frame gets navigated or the parent context gets destroyed."),(0,n.kt)("p",null,"JSHandle instances can be used as an argument in ",(0,n.kt)("a",c({parentName:"p"},{href:"/docs/next/api/class-page#page-eval-on-selector"}),"page.$eval(selector, pageFunction[, arg, options])"),", ",(0,n.kt)("a",c({parentName:"p"},{href:"/docs/next/api/class-page#page-evaluate"}),"page.evaluate(pageFunction[, arg])")," and ",(0,n.kt)("a",c({parentName:"p"},{href:"/docs/next/api/class-page#page-evaluate-handle"}),"page.evaluateHandle(pageFunction[, arg])")," methods."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"/docs/next/api/class-jshandle#js-handle-as-element"}),"jsHandle.asElement()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"/docs/next/api/class-jshandle#js-handle-dispose"}),"jsHandle.dispose()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"/docs/next/api/class-jshandle#js-handle-evaluate"}),"jsHandle.evaluate(pageFunction[, arg])")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"/docs/next/api/class-jshandle#js-handle-evaluate-handle"}),"jsHandle.evaluateHandle(pageFunction[, arg])")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"/docs/next/api/class-jshandle#js-handle-get-properties"}),"jsHandle.getProperties()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"/docs/next/api/class-jshandle#js-handle-get-property"}),"jsHandle.getProperty(propertyName)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"/docs/next/api/class-jshandle#js-handle-json-value"}),"jsHandle.jsonValue()"))),(0,n.kt)("h2",c({},{id:"js-handle-as-element"}),"jsHandle.asElement()"),(0,n.kt)("font",{size:"2",style:{position:"relative",top:"-20px"}},"Added in: v1.8"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"js-handle-as-element-return"})," ","<",(0,n.kt)("a",c({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null",title:"null"}),"null"),"|",(0,n.kt)("a",c({parentName:"li"},{href:"/docs/next/api/class-elementhandle",title:"ElementHandle"}),"ElementHandle"),">",(0,n.kt)("a",{href:"#js-handle-as-element-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"Returns either ",(0,n.kt)("inlineCode",{parentName:"p"},"null")," or the object handle itself, if the object handle is an instance of ",(0,n.kt)("a",c({parentName:"p"},{href:"/docs/next/api/class-elementhandle",title:"ElementHandle"}),"ElementHandle"),"."),(0,n.kt)("h2",c({},{id:"js-handle-dispose"}),"jsHandle.dispose()"),(0,n.kt)("font",{size:"2",style:{position:"relative",top:"-20px"}},"Added in: v1.8"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"js-handle-dispose-return"})," ","<",(0,n.kt)("a",c({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),"<",(0,n.kt)("a",c({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"}),"void"),">",">",(0,n.kt)("a",{href:"#js-handle-dispose-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"jsHandle.dispose")," method stops referencing the element handle."),(0,n.kt)("h2",c({},{id:"js-handle-evaluate"}),"jsHandle.evaluate(pageFunction","[, arg]",")"),(0,n.kt)("font",{size:"2",style:{position:"relative",top:"-20px"}},"Added in: v1.8"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"pageFunction"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"js-handle-evaluate-option-expression"})," ","<",(0,n.kt)("a",c({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function",title:"Function"}),"function"),"|",(0,n.kt)("a",c({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),">"," Function to be evaluated in the page context.",(0,n.kt)("a",{href:"#js-handle-evaluate-option-expression",class:"list-anchor"},"#")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"arg?"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"js-handle-evaluate-option-arg"})," ","<",(0,n.kt)("a",c({parentName:"li"},{href:"/docs/next/evaluating#evaluation-argument",title:"EvaluationArgument"}),"EvaluationArgument"),">"," Optional argument to pass to ",(0,n.kt)("inlineCode",{parentName:"li"},"pageFunction"),".",(0,n.kt)("a",{href:"#js-handle-evaluate-option-arg",class:"list-anchor"},"#")),(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"js-handle-evaluate-return"})," ","<",(0,n.kt)("a",c({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),"<",(0,n.kt)("a",c({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#Description",title:"Serializable"}),"Serializable"),">",">",(0,n.kt)("a",{href:"#js-handle-evaluate-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"Returns the return value of ",(0,n.kt)("inlineCode",{parentName:"p"},"pageFunction"),"."),(0,n.kt)("p",null,"This method passes this handle as the first argument to ",(0,n.kt)("inlineCode",{parentName:"p"},"pageFunction"),"."),(0,n.kt)("p",null,"If ",(0,n.kt)("inlineCode",{parentName:"p"},"pageFunction")," returns a ",(0,n.kt)("a",c({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),", then ",(0,n.kt)("inlineCode",{parentName:"p"},"handle.evaluate")," would wait for the promise to resolve and return its value."),(0,n.kt)("p",null,"Examples:"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-js"}),"const tweetHandle = await page.$('.tweet .retweets');\nexpect(await tweetHandle.evaluate(node => node.innerText)).toBe('10 retweets');\n")),(0,n.kt)("h2",c({},{id:"js-handle-evaluate-handle"}),"jsHandle.evaluateHandle(pageFunction","[, arg]",")"),(0,n.kt)("font",{size:"2",style:{position:"relative",top:"-20px"}},"Added in: v1.8"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"pageFunction"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"js-handle-evaluate-handle-option-expression"})," ","<",(0,n.kt)("a",c({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function",title:"Function"}),"function"),"|",(0,n.kt)("a",c({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),">"," Function to be evaluated in the page context.",(0,n.kt)("a",{href:"#js-handle-evaluate-handle-option-expression",class:"list-anchor"},"#")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"arg?"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"js-handle-evaluate-handle-option-arg"})," ","<",(0,n.kt)("a",c({parentName:"li"},{href:"/docs/next/evaluating#evaluation-argument",title:"EvaluationArgument"}),"EvaluationArgument"),">"," Optional argument to pass to ",(0,n.kt)("inlineCode",{parentName:"li"},"pageFunction"),".",(0,n.kt)("a",{href:"#js-handle-evaluate-handle-option-arg",class:"list-anchor"},"#")),(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"js-handle-evaluate-handle-return"})," ","<",(0,n.kt)("a",c({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),"<",(0,n.kt)("a",c({parentName:"li"},{href:"/docs/next/api/class-jshandle",title:"JSHandle"}),"JSHandle"),">",">",(0,n.kt)("a",{href:"#js-handle-evaluate-handle-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"Returns the return value of ",(0,n.kt)("inlineCode",{parentName:"p"},"pageFunction")," as a ",(0,n.kt)("a",c({parentName:"p"},{href:"/docs/next/api/class-jshandle",title:"JSHandle"}),"JSHandle"),"."),(0,n.kt)("p",null,"This method passes this handle as the first argument to ",(0,n.kt)("inlineCode",{parentName:"p"},"pageFunction"),"."),(0,n.kt)("p",null,"The only difference between ",(0,n.kt)("inlineCode",{parentName:"p"},"jsHandle.evaluate")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"jsHandle.evaluateHandle")," is that ",(0,n.kt)("inlineCode",{parentName:"p"},"jsHandle.evaluateHandle")," returns ",(0,n.kt)("a",c({parentName:"p"},{href:"/docs/next/api/class-jshandle",title:"JSHandle"}),"JSHandle"),"."),(0,n.kt)("p",null,"If the function passed to the ",(0,n.kt)("inlineCode",{parentName:"p"},"jsHandle.evaluateHandle")," returns a ",(0,n.kt)("a",c({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),", then ",(0,n.kt)("inlineCode",{parentName:"p"},"jsHandle.evaluateHandle")," would wait for the promise to resolve and return its value."),(0,n.kt)("p",null,"See ",(0,n.kt)("a",c({parentName:"p"},{href:"/docs/next/api/class-page#page-evaluate-handle"}),"page.evaluateHandle(pageFunction[, arg])")," for more details."),(0,n.kt)("h2",c({},{id:"js-handle-get-properties"}),"jsHandle.getProperties()"),(0,n.kt)("font",{size:"2",style:{position:"relative",top:"-20px"}},"Added in: v1.8"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"js-handle-get-properties-return"})," ","<",(0,n.kt)("a",c({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),"<",(0,n.kt)("a",c({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map",title:"Map"}),"Map"),"<",(0,n.kt)("a",c({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),", ",(0,n.kt)("a",c({parentName:"li"},{href:"/docs/next/api/class-jshandle",title:"JSHandle"}),"JSHandle"),">>",">",(0,n.kt)("a",{href:"#js-handle-get-properties-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"The method returns a map with ",(0,n.kt)("strong",{parentName:"p"},"own property names")," as keys and JSHandle instances for the property values."),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-js"}),"const handle = await page.evaluateHandle(() => ({window, document}));\nconst properties = await handle.getProperties();\nconst windowHandle = properties.get('window');\nconst documentHandle = properties.get('document');\nawait handle.dispose();\n")),(0,n.kt)("h2",c({},{id:"js-handle-get-property"}),"jsHandle.getProperty(propertyName)"),(0,n.kt)("font",{size:"2",style:{position:"relative",top:"-20px"}},"Added in: v1.8"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"propertyName"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"js-handle-get-property-option-property-name"})," ","<",(0,n.kt)("a",c({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),">"," property to get",(0,n.kt)("a",{href:"#js-handle-get-property-option-property-name",class:"list-anchor"},"#")),(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"js-handle-get-property-return"})," ","<",(0,n.kt)("a",c({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),"<",(0,n.kt)("a",c({parentName:"li"},{href:"/docs/next/api/class-jshandle",title:"JSHandle"}),"JSHandle"),">",">",(0,n.kt)("a",{href:"#js-handle-get-property-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"Fetches a single property from the referenced object."),(0,n.kt)("h2",c({},{id:"js-handle-json-value"}),"jsHandle.jsonValue()"),(0,n.kt)("font",{size:"2",style:{position:"relative",top:"-20px"}},"Added in: v1.8"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"js-handle-json-value-return"})," ","<",(0,n.kt)("a",c({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),"<",(0,n.kt)("a",c({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#Description",title:"Serializable"}),"Serializable"),">",">",(0,n.kt)("a",{href:"#js-handle-json-value-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"Returns a JSON representation of the object. If the object has a ",(0,n.kt)("inlineCode",{parentName:"p"},"toJSON")," function, it ",(0,n.kt)("strong",{parentName:"p"},"will not be called"),"."),(0,n.kt)("div",c({},{className:"admonition admonition-note alert alert--secondary"}),(0,n.kt)("div",c({parentName:"div"},{className:"admonition-heading"}),(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",c({parentName:"h5"},{className:"admonition-icon"}),(0,n.kt)("svg",c({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),(0,n.kt)("path",c({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),(0,n.kt)("div",c({parentName:"div"},{className:"admonition-content"}),(0,n.kt)("p",{parentName:"div"},"The method will return an empty JSON object if the referenced object is not stringifiable. It will throw an error if the object has circular references."))))}g.isMDXComponent=!0}}]);