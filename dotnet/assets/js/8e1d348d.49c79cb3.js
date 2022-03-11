"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[1279],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return k}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},o={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),m=s(n),k=r,N=m["".concat(p,".").concat(k)]||m[k]||o[k]||i;return n?a.createElement(N,l(l({ref:t},d),{},{components:n})):a.createElement(N,l({ref:t},d))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6676:function(e,t,n){n.r(t),n.d(t,{assets:function(){return g},contentTitle:function(){return k},default:function(){return b},frontMatter:function(){return m},metadata:function(){return N},toc:function(){return h}});var a=n(3905),r=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,o=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&d(e,n,t[n]);if(c)for(var n of c(t))s.call(t,n)&&d(e,n,t[n]);return e};const m={id:"actionability",title:"Auto-waiting"},k=void 0,N={unversionedId:"actionability",id:"actionability",title:"Auto-waiting",description:"Playwright performs a range of actionability checks on the elements before making actions to ensure these actions behave as expected. It auto-waits for all the relevant checks to pass and only then performs the requested action. If the required checks do not pass within the given timeout, action fails with the TimeoutError.",source:"@site/docs/actionability.mdx",sourceDirName:".",slug:"/actionability",permalink:"/dotnet/docs/next/actionability",tags:[],version:"current",frontMatter:{id:"actionability",title:"Auto-waiting"},sidebar:"docs",previous:{title:"Test Runners",permalink:"/dotnet/docs/next/test-runners"},next:{title:"Authentication",permalink:"/dotnet/docs/next/auth"}},g={},h=[{value:"Forcing actions",id:"forcing-actions",level:2},{value:"Assertions",id:"assertions",level:2},{value:"Attached",id:"attached",level:2},{value:"Visible",id:"visible",level:2},{value:"Stable",id:"stable",level:2},{value:"Enabled",id:"enabled",level:2},{value:"Editable",id:"editable",level:2},{value:"Receives Events",id:"receives-events",level:2}],u={toc:h};function b(e){var t,n=e,{components:r}=n,d=((e,t)=>{var n={};for(var a in e)p.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&c)for(var a of c(e))t.indexOf(a)<0&&s.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=o(o({},u),d),i(t,l({components:r,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"Playwright performs a range of actionability checks on the elements before making actions to ensure these actions behave as expected. It auto-waits for all the relevant checks to pass and only then performs the requested action. If the required checks do not pass within the given ",(0,a.kt)("inlineCode",{parentName:"p"},"timeout"),", action fails with the ",(0,a.kt)("inlineCode",{parentName:"p"},"TimeoutError"),"."),(0,a.kt)("p",null,"For example, for ",(0,a.kt)("a",o({parentName:"p"},{href:"/dotnet/docs/next/api/class-page#page-click"}),"Page.ClickAsync(selector, options)"),", Playwright will ensure that:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"element is ",(0,a.kt)("a",o({parentName:"li"},{href:"#attached",title:"Attached"}),"Attached")," to the DOM"),(0,a.kt)("li",{parentName:"ul"},"element is ",(0,a.kt)("a",o({parentName:"li"},{href:"#visible",title:"Visible"}),"Visible")),(0,a.kt)("li",{parentName:"ul"},"element is ",(0,a.kt)("a",o({parentName:"li"},{href:"#stable",title:"Stable"}),"Stable"),", as in not animating or completed animation"),(0,a.kt)("li",{parentName:"ul"},"element ",(0,a.kt)("a",o({parentName:"li"},{href:"#receives-events",title:"Receives Events"}),"Receives Events"),", as in not obscured by other elements"),(0,a.kt)("li",{parentName:"ul"},"element is ",(0,a.kt)("a",o({parentName:"li"},{href:"#enabled",title:"Enabled"}),"Enabled"))),(0,a.kt)("p",null,"Here is the complete list of actionability checks performed for each action:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",o({parentName:"tr"},{align:"left"}),"Action"),(0,a.kt)("th",o({parentName:"tr"},{align:"center"}),(0,a.kt)("a",o({parentName:"th"},{href:"#attached",title:"Attached"}),"Attached")),(0,a.kt)("th",o({parentName:"tr"},{align:"center"}),(0,a.kt)("a",o({parentName:"th"},{href:"#visible",title:"Visible"}),"Visible")),(0,a.kt)("th",o({parentName:"tr"},{align:"center"}),(0,a.kt)("a",o({parentName:"th"},{href:"#stable",title:"Stable"}),"Stable")),(0,a.kt)("th",o({parentName:"tr"},{align:"center"}),(0,a.kt)("a",o({parentName:"th"},{href:"#receives-events",title:"Receives Events"}),"Receives Events")),(0,a.kt)("th",o({parentName:"tr"},{align:"center"}),(0,a.kt)("a",o({parentName:"th"},{href:"#enabled",title:"Enabled"}),"Enabled")),(0,a.kt)("th",o({parentName:"tr"},{align:"center"}),(0,a.kt)("a",o({parentName:"th"},{href:"#editable",title:"Editable"}),"Editable")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:"left"}),"check"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"Yes"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"Yes"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"Yes"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"Yes"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"Yes"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:"left"}),"click"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"Yes"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"Yes"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"Yes"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"Yes"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"Yes"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:"left"}),"dblclick"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"Yes"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"Yes"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"Yes"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"Yes"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"Yes"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:"left"}),"setChecked"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"Yes"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"Yes"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"Yes"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"Yes"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"Yes"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:"left"}),"tap"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"Yes"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"Yes"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"Yes"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"Yes"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"Yes"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:"left"}),"uncheck"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"Yes"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"Yes"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"Yes"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"Yes"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"Yes"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:"left"}),"hover"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"Yes"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"Yes"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"Yes"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"Yes"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"-"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:"left"}),"scrollIntoViewIfNeeded"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"Yes"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"Yes"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"Yes"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"-"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"-"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:"left"}),"screenshot"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"Yes"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"Yes"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"Yes"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"-"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"-"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:"left"}),"fill"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"Yes"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"Yes"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"-"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"-"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"Yes"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"Yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:"left"}),"selectText"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"Yes"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"Yes"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"-"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"-"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"-"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:"left"}),"dispatchEvent"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"Yes"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"-"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"-"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"-"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"-"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:"left"}),"focus"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"Yes"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"-"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"-"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"-"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"-"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:"left"}),"getAttribute"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"Yes"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"-"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"-"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"-"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"-"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:"left"}),"innerText"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"Yes"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"-"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"-"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"-"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"-"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:"left"}),"innerHTML"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"Yes"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"-"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"-"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"-"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"-"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:"left"}),"press"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"Yes"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"-"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"-"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"-"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"-"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:"left"}),"setInputFiles"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"Yes"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"-"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"-"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"-"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"-"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:"left"}),"selectOption"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"Yes"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"-"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"-"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"-"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"-"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:"left"}),"textContent"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"Yes"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"-"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"-"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"-"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"-"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:"left"}),"type"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"Yes"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"-"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"-"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"-"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"-"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"-")))),(0,a.kt)("br",null),(0,a.kt)("h2",o({},{id:"forcing-actions"}),"Forcing actions"),(0,a.kt)("p",null,"Some actions like ",(0,a.kt)("a",o({parentName:"p"},{href:"/dotnet/docs/next/api/class-page#page-click"}),"Page.ClickAsync(selector, options)")," support ",(0,a.kt)("inlineCode",{parentName:"p"},"force")," option that disables non-essential actionability checks, for example passing truthy ",(0,a.kt)("inlineCode",{parentName:"p"},"force")," to ",(0,a.kt)("a",o({parentName:"p"},{href:"/dotnet/docs/next/api/class-page#page-click"}),"Page.ClickAsync(selector, options)")," method will not check that the target element actually receives click events."),(0,a.kt)("h2",o({},{id:"assertions"}),"Assertions"),(0,a.kt)("p",null,"You can check the actionability state of the element using one of the following methods as well. This is typically not necessary, but it helps writing assertive tests that ensure that after certain actions, elements reach actionable state:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",o({parentName:"li"},{href:"/dotnet/docs/next/api/class-elementhandle#element-handle-is-checked"}),"ElementHandle.IsCheckedAsync()")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",o({parentName:"li"},{href:"/dotnet/docs/next/api/class-elementhandle#element-handle-is-disabled"}),"ElementHandle.IsDisabledAsync()")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",o({parentName:"li"},{href:"/dotnet/docs/next/api/class-elementhandle#element-handle-is-editable"}),"ElementHandle.IsEditableAsync()")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",o({parentName:"li"},{href:"/dotnet/docs/next/api/class-elementhandle#element-handle-is-enabled"}),"ElementHandle.IsEnabledAsync()")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",o({parentName:"li"},{href:"/dotnet/docs/next/api/class-elementhandle#element-handle-is-hidden"}),"ElementHandle.IsHiddenAsync()")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",o({parentName:"li"},{href:"/dotnet/docs/next/api/class-elementhandle#element-handle-is-visible"}),"ElementHandle.IsVisibleAsync()")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",o({parentName:"li"},{href:"/dotnet/docs/next/api/class-page#page-is-checked"}),"Page.IsCheckedAsync(selector, options)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",o({parentName:"li"},{href:"/dotnet/docs/next/api/class-page#page-is-disabled"}),"Page.IsDisabledAsync(selector, options)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",o({parentName:"li"},{href:"/dotnet/docs/next/api/class-page#page-is-editable"}),"Page.IsEditableAsync(selector, options)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",o({parentName:"li"},{href:"/dotnet/docs/next/api/class-page#page-is-enabled"}),"Page.IsEnabledAsync(selector, options)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",o({parentName:"li"},{href:"/dotnet/docs/next/api/class-page#page-is-hidden"}),"Page.IsHiddenAsync(selector, options)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",o({parentName:"li"},{href:"/dotnet/docs/next/api/class-page#page-is-visible"}),"Page.IsVisibleAsync(selector, options)"))),(0,a.kt)("br",null),(0,a.kt)("h2",o({},{id:"attached"}),"Attached"),(0,a.kt)("p",null,"Element is considered attached when it is ",(0,a.kt)("a",o({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Node/isConnected"}),"connected")," to a Document or a ShadowRoot."),(0,a.kt)("h2",o({},{id:"visible"}),"Visible"),(0,a.kt)("p",null,"Element is considered visible when it has non-empty bounding box and does not have ",(0,a.kt)("inlineCode",{parentName:"p"},"visibility:hidden")," computed style. Note that elements of zero size or with ",(0,a.kt)("inlineCode",{parentName:"p"},"display:none")," are not considered visible."),(0,a.kt)("h2",o({},{id:"stable"}),"Stable"),(0,a.kt)("p",null,"Element is considered stable when it has maintained the same bounding box for at least two consecutive animation frames."),(0,a.kt)("h2",o({},{id:"enabled"}),"Enabled"),(0,a.kt)("p",null,"Element is considered enabled when it is not a ",(0,a.kt)("inlineCode",{parentName:"p"},"<button>"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"<select>"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"<input>")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"<textarea>")," with a ",(0,a.kt)("inlineCode",{parentName:"p"},"disabled")," property set."),(0,a.kt)("h2",o({},{id:"editable"}),"Editable"),(0,a.kt)("p",null,"Element is considered editable when it is ",(0,a.kt)("a",o({parentName:"p"},{href:"#enabled",title:"Enabled"}),"enabled")," and does not have ",(0,a.kt)("inlineCode",{parentName:"p"},"readonly")," property set."),(0,a.kt)("h2",o({},{id:"receives-events"}),"Receives Events"),(0,a.kt)("p",null,"Element is considered receiving pointer events when it is the hit target of the pointer event at the action point. For example, when clicking at the point ",(0,a.kt)("inlineCode",{parentName:"p"},"(10;10)"),", Playwright checks whether some other element (usually an overlay) will instead capture the click at ",(0,a.kt)("inlineCode",{parentName:"p"},"(10;10)"),"."),(0,a.kt)("p",null,"For example, consider a scenario where Playwright will click ",(0,a.kt)("inlineCode",{parentName:"p"},"Sign Up")," button regardless of when the ",(0,a.kt)("a",o({parentName:"p"},{href:"/dotnet/docs/next/api/class-page#page-click"}),"Page.ClickAsync(selector, options)")," call was made:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"page is checking that user name is unique and ",(0,a.kt)("inlineCode",{parentName:"li"},"Sign Up")," button is disabled;"),(0,a.kt)("li",{parentName:"ul"},"after checking with the server, the disabled ",(0,a.kt)("inlineCode",{parentName:"li"},"Sign Up")," button is replaced with another one that is now enabled.")))}b.isMDXComponent=!0}}]);