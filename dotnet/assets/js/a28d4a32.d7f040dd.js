"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[7403],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return d}});var r=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,c=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),f=s(a),d=o,u=f["".concat(c,".").concat(d)]||f[d]||p[d]||n;return a?r.createElement(u,l(l({ref:t},m),{},{components:a})):r.createElement(u,l({ref:t},m))}));function d(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,l=new Array(n);l[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var s=2;s<n;s++)l[s]=a[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}f.displayName="MDXCreateElement"},31828:function(e,t,a){a.r(t),a.d(t,{assets:function(){return h},contentTitle:function(){return d},default:function(){return N},frontMatter:function(){return f},metadata:function(){return u},toc:function(){return k}});var r=a(3905),o=Object.defineProperty,n=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,m=(e,t,a)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,p=(e,t)=>{for(var a in t||(t={}))c.call(t,a)&&m(e,a,t[a]);if(i)for(var a of i(t))s.call(t,a)&&m(e,a,t[a]);return e};const f={id:"class-framelocator",title:"FrameLocator"},d=void 0,u={unversionedId:"api/class-framelocator",id:"version-1.21/api/class-framelocator",title:"FrameLocator",description:"FrameLocator represents a view to the iframe on the page. It captures the logic sufficient to retrieve the iframe and locate elements in that iframe. FrameLocator can be created with either Page.FrameLocator(selector) or Locator.FrameLocator(selector) method.",source:"@site/versioned_docs/version-1.21/api/class-framelocator.mdx",sourceDirName:"api",slug:"/api/class-framelocator",permalink:"/dotnet/docs/api/class-framelocator",tags:[],version:"1.21",frontMatter:{id:"class-framelocator",title:"FrameLocator"},sidebar:"api",previous:{title:"Frame",permalink:"/dotnet/docs/api/class-frame"},next:{title:"JSHandle",permalink:"/dotnet/docs/api/class-jshandle"}},h={},k=[{value:"FrameLocator.First",id:"frame-locator-first",level:2},{value:"FrameLocator.FrameLocator(selector)",id:"frame-locator-frame-locator",level:2},{value:"FrameLocator.Last",id:"frame-locator-last",level:2},{value:"FrameLocator.Locator(selector, options)",id:"frame-locator-locator",level:2},{value:"FrameLocator.Nth(index)",id:"frame-locator-nth",level:2}],g={toc:k};function N(e){var t,a=e,{components:o}=a,m=((e,t)=>{var a={};for(var r in e)c.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&i)for(var r of i(e))t.indexOf(r)<0&&s.call(e,r)&&(a[r]=e[r]);return a})(a,["components"]);return(0,r.kt)("wrapper",(t=p(p({},g),m),n(t,l({components:o,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"FrameLocator represents a view to the ",(0,r.kt)("inlineCode",{parentName:"p"},"iframe")," on the page. It captures the logic sufficient to retrieve the ",(0,r.kt)("inlineCode",{parentName:"p"},"iframe")," and locate elements in that iframe. FrameLocator can be created with either ",(0,r.kt)("a",p({parentName:"p"},{href:"/dotnet/docs/api/class-page#page-frame-locator"}),"Page.FrameLocator(selector)")," or ",(0,r.kt)("a",p({parentName:"p"},{href:"/dotnet/docs/api/class-locator#locator-frame-locator"}),"Locator.FrameLocator(selector)")," method."),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-csharp"}),'var locator = page.FrameLocator("#my-frame").Locator("text=Submit");\nawait locator.ClickAsync();\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Strictness")),(0,r.kt)("p",null,"Frame locators are strict. This means that all operations on frame locators will throw if more than one element matches given selector."),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-csharp"}),'// Throws if there are several frames in DOM:\nawait page.FrameLocator(".result-frame").Locator("button").ClickAsync();\n\n// Works because we explicitly tell locator to pick the first frame:\nawait page.FrameLocator(".result-frame").First.Locator("button").ClickAsync();\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Converting Locator to FrameLocator")),(0,r.kt)("p",null,"If you have a ",(0,r.kt)("a",p({parentName:"p"},{href:"/dotnet/docs/api/class-locator",title:"Locator"}),"Locator")," object pointing to an ",(0,r.kt)("inlineCode",{parentName:"p"},"iframe")," it can be converted to ",(0,r.kt)("a",p({parentName:"p"},{href:"/dotnet/docs/api/class-framelocator",title:"FrameLocator"}),"FrameLocator")," using ",(0,r.kt)("a",p({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/:scope"}),(0,r.kt)("inlineCode",{parentName:"a"},":scope"))," CSS selector:"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-csharp"}),'var frameLocator = locator.FrameLocator(":scope");\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",p({parentName:"li"},{href:"/dotnet/docs/api/class-framelocator#frame-locator-first"}),"FrameLocator.First")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",p({parentName:"li"},{href:"/dotnet/docs/api/class-framelocator#frame-locator-frame-locator"}),"FrameLocator.FrameLocator(selector)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",p({parentName:"li"},{href:"/dotnet/docs/api/class-framelocator#frame-locator-last"}),"FrameLocator.Last")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",p({parentName:"li"},{href:"/dotnet/docs/api/class-framelocator#frame-locator-locator"}),"FrameLocator.Locator(selector, options)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",p({parentName:"li"},{href:"/dotnet/docs/api/class-framelocator#frame-locator-nth"}),"FrameLocator.Nth(index)"))),(0,r.kt)("h2",p({},{id:"frame-locator-first"}),"FrameLocator.First"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"returns:",(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"frame-locator-first-return"})," ","<",(0,r.kt)("a",p({parentName:"li"},{href:"/dotnet/docs/api/class-framelocator",title:"FrameLocator"}),"FrameLocator"),">",(0,r.kt)("a",{href:"#frame-locator-first-return",class:"list-anchor"},"#"))),(0,r.kt)("p",null,"Returns locator to the first matching frame."),(0,r.kt)("h2",p({},{id:"frame-locator-frame-locator"}),"FrameLocator.FrameLocator(selector)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"selector"),(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"frame-locator-frame-locator-option-selector"})," ","<",(0,r.kt)("a",p({parentName:"li"},{href:"https://docs.microsoft.com/en-us/dotnet/api/system.string",title:"string"}),"string"),">"," A selector to use when resolving DOM element. See ",(0,r.kt)("a",p({parentName:"li"},{href:"/dotnet/docs/selectors"}),"working with selectors")," for more details.",(0,r.kt)("a",{href:"#frame-locator-frame-locator-option-selector",class:"list-anchor"},"#")),(0,r.kt)("li",{parentName:"ul"},"returns:",(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"frame-locator-frame-locator-return"})," ","<",(0,r.kt)("a",p({parentName:"li"},{href:"/dotnet/docs/api/class-framelocator",title:"FrameLocator"}),"FrameLocator"),">",(0,r.kt)("a",{href:"#frame-locator-frame-locator-return",class:"list-anchor"},"#"))),(0,r.kt)("p",null,"When working with iframes, you can create a frame locator that will enter the iframe and allow selecting elements in that iframe."),(0,r.kt)("h2",p({},{id:"frame-locator-last"}),"FrameLocator.Last"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"returns:",(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"frame-locator-last-return"})," ","<",(0,r.kt)("a",p({parentName:"li"},{href:"/dotnet/docs/api/class-framelocator",title:"FrameLocator"}),"FrameLocator"),">",(0,r.kt)("a",{href:"#frame-locator-last-return",class:"list-anchor"},"#"))),(0,r.kt)("p",null,"Returns locator to the last matching frame."),(0,r.kt)("h2",p({},{id:"frame-locator-locator"}),"FrameLocator.Locator(selector, options)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"selector"),(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"frame-locator-locator-option-selector"})," ","<",(0,r.kt)("a",p({parentName:"p"},{href:"https://docs.microsoft.com/en-us/dotnet/api/system.string",title:"string"}),"string"),">"," A selector to use when resolving DOM element. See ",(0,r.kt)("a",p({parentName:"p"},{href:"/dotnet/docs/selectors"}),"working with selectors")," for more details.",(0,r.kt)("a",{href:"#frame-locator-locator-option-selector",class:"list-anchor"},"#"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"options")," ","<",(0,r.kt)("inlineCode",{parentName:"p"},"FrameLocatorLocatorOptions?"),">"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"Has"),(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"frame-locator-locator-option-has"})," ","<",(0,r.kt)("a",p({parentName:"p"},{href:"/dotnet/docs/api/class-locator",title:"Locator"}),"Locator"),"?",">"," Matches elements containing an element that matches an inner locator. Inner locator is queried against the outer one. For example, ",(0,r.kt)("inlineCode",{parentName:"p"},"article")," that has ",(0,r.kt)("inlineCode",{parentName:"p"},"text=Playwright")," matches ",(0,r.kt)("inlineCode",{parentName:"p"},"<article><div>Playwright</div></article>"),".",(0,r.kt)("a",{href:"#frame-locator-locator-option-has",class:"list-anchor"},"#")),(0,r.kt)("p",{parentName:"li"},"Note that outer and inner locators must belong to the same frame. Inner locator must not contain ",(0,r.kt)("a",p({parentName:"p"},{href:"/dotnet/docs/api/class-framelocator",title:"FrameLocator"}),"FrameLocator"),"s.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"HasText"),(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"frame-locator-locator-option-has-text"})," ","<",(0,r.kt)("a",p({parentName:"p"},{href:"https://docs.microsoft.com/en-us/dotnet/api/system.string",title:"string"}),"string"),"?|",(0,r.kt)("a",p({parentName:"p"},{href:"https://docs.microsoft.com/en-us/dotnet/api/system.text.regularexpressions.regex",title:"Regex"}),"Regex"),"?",">"," Matches elements containing specified text somewhere inside, possibly in a child or a descendant element. When passed a ",(0,r.kt)("a",p({parentName:"p"},{href:"https://docs.microsoft.com/en-us/dotnet/api/system.string",title:"string"}),"string"),", matching is case-insensitive and searches for a substring. For example, ",(0,r.kt)("inlineCode",{parentName:"p"},'"Playwright"')," matches ",(0,r.kt)("inlineCode",{parentName:"p"},"<article><div>Playwright</div></article>"),".",(0,r.kt)("a",{href:"#frame-locator-locator-option-has-text",class:"list-anchor"},"#"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"returns:",(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"frame-locator-locator-return"})," ","<",(0,r.kt)("a",p({parentName:"p"},{href:"/dotnet/docs/api/class-locator",title:"Locator"}),"Locator"),">",(0,r.kt)("a",{href:"#frame-locator-locator-return",class:"list-anchor"},"#")))),(0,r.kt)("p",null,"The method finds an element matching the specified selector in the FrameLocator's subtree."),(0,r.kt)("h2",p({},{id:"frame-locator-nth"}),"FrameLocator.Nth(index)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"index"),(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"frame-locator-nth-option-index"})," ","<",(0,r.kt)("a",p({parentName:"li"},{href:"https://docs.microsoft.com/en-us/dotnet/api/system.int32",title:"int"}),"int"),">",(0,r.kt)("a",{href:"#frame-locator-nth-option-index",class:"list-anchor"},"#")),(0,r.kt)("li",{parentName:"ul"},"returns:",(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"frame-locator-nth-return"})," ","<",(0,r.kt)("a",p({parentName:"li"},{href:"/dotnet/docs/api/class-framelocator",title:"FrameLocator"}),"FrameLocator"),">",(0,r.kt)("a",{href:"#frame-locator-nth-return",class:"list-anchor"},"#"))),(0,r.kt)("p",null,"Returns locator to the n-th matching frame. It's zero based, ",(0,r.kt)("inlineCode",{parentName:"p"},"nth(0)")," selects the first frame."))}N.isMDXComponent=!0}}]);