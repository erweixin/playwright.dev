"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[1279],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return k}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),s=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},o={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),m=s(a),k=r,N=m["".concat(c,".").concat(k)]||m[k]||o[k]||i;return a?n.createElement(N,l(l({ref:t},d),{},{components:a})):n.createElement(N,l({ref:t},d))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=m;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:r,l[1]=p;for(var s=2;s<i;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},61724:function(e,t,a){a.r(t),a.d(t,{assets:function(){return g},contentTitle:function(){return k},default:function(){return b},frontMatter:function(){return m},metadata:function(){return N},toc:function(){return h}});var n=a(3905),r=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,d=(e,t,a)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,o=(e,t)=>{for(var a in t||(t={}))c.call(t,a)&&d(e,a,t[a]);if(p)for(var a of p(t))s.call(t,a)&&d(e,a,t[a]);return e};const m={id:"actionability",title:"Auto-waiting"},k=void 0,N={unversionedId:"actionability",id:"actionability",title:"Auto-waiting",description:"Playwright performs a range of actionability checks on the elements before making actions to ensure these actions behave as expected. It auto-waits for all the relevant checks to pass and only then performs the requested action. If the required checks do not pass within the given timeout, action fails with the TimeoutError.",source:"@site/docs/actionability.mdx",sourceDirName:".",slug:"/actionability",permalink:"/docs/next/actionability",tags:[],version:"current",frontMatter:{id:"actionability",title:"Auto-waiting"},sidebar:"docs",previous:{title:"Library",permalink:"/docs/next/library"},next:{title:"Authentication",permalink:"/docs/next/auth"}},g={},h=[{value:"Forcing actions",id:"forcing-actions",level:2},{value:"Assertions",id:"assertions",level:2},{value:"Attached",id:"attached",level:2},{value:"Visible",id:"visible",level:2},{value:"Stable",id:"stable",level:2},{value:"Enabled",id:"enabled",level:2},{value:"Editable",id:"editable",level:2},{value:"Receives Events",id:"receives-events",level:2}],u={toc:h};function b(e){var t,a=e,{components:r}=a,d=((e,t)=>{var a={};for(var n in e)c.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&p)for(var n of p(e))t.indexOf(n)<0&&s.call(e,n)&&(a[n]=e[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(t=o(o({},u),d),i(t,l({components:r,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"Playwright performs a range of actionability checks on the elements before making actions to ensure these actions behave as expected. It auto-waits for all the relevant checks to pass and only then performs the requested action. If the required checks do not pass within the given ",(0,n.kt)("inlineCode",{parentName:"p"},"timeout"),", action fails with the ",(0,n.kt)("inlineCode",{parentName:"p"},"TimeoutError"),"."),(0,n.kt)("p",null,"For example, for ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/next/api/class-page#page-click"}),"page.click(selector[, options])"),", Playwright will ensure that:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"element is ",(0,n.kt)("a",o({parentName:"li"},{href:"#attached",title:"Attached"}),"Attached")," to the DOM"),(0,n.kt)("li",{parentName:"ul"},"element is ",(0,n.kt)("a",o({parentName:"li"},{href:"#visible",title:"Visible"}),"Visible")),(0,n.kt)("li",{parentName:"ul"},"element is ",(0,n.kt)("a",o({parentName:"li"},{href:"#stable",title:"Stable"}),"Stable"),", as in not animating or completed animation"),(0,n.kt)("li",{parentName:"ul"},"element ",(0,n.kt)("a",o({parentName:"li"},{href:"#receives-events",title:"Receives Events"}),"Receives Events"),", as in not obscured by other elements"),(0,n.kt)("li",{parentName:"ul"},"element is ",(0,n.kt)("a",o({parentName:"li"},{href:"#enabled",title:"Enabled"}),"Enabled"))),(0,n.kt)("p",null,"Here is the complete list of actionability checks performed for each action:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",o({parentName:"tr"},{align:"left"}),"Action"),(0,n.kt)("th",o({parentName:"tr"},{align:"center"}),(0,n.kt)("a",o({parentName:"th"},{href:"#attached",title:"Attached"}),"Attached")),(0,n.kt)("th",o({parentName:"tr"},{align:"center"}),(0,n.kt)("a",o({parentName:"th"},{href:"#visible",title:"Visible"}),"Visible")),(0,n.kt)("th",o({parentName:"tr"},{align:"center"}),(0,n.kt)("a",o({parentName:"th"},{href:"#stable",title:"Stable"}),"Stable")),(0,n.kt)("th",o({parentName:"tr"},{align:"center"}),(0,n.kt)("a",o({parentName:"th"},{href:"#receives-events",title:"Receives Events"}),"Receives Events")),(0,n.kt)("th",o({parentName:"tr"},{align:"center"}),(0,n.kt)("a",o({parentName:"th"},{href:"#enabled",title:"Enabled"}),"Enabled")),(0,n.kt)("th",o({parentName:"tr"},{align:"center"}),(0,n.kt)("a",o({parentName:"th"},{href:"#editable",title:"Editable"}),"Editable")))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:"left"}),"check"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"Yes"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"Yes"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"Yes"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"Yes"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"Yes"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"-")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:"left"}),"click"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"Yes"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"Yes"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"Yes"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"Yes"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"Yes"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"-")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:"left"}),"dblclick"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"Yes"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"Yes"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"Yes"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"Yes"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"Yes"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"-")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:"left"}),"setChecked"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"Yes"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"Yes"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"Yes"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"Yes"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"Yes"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"-")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:"left"}),"tap"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"Yes"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"Yes"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"Yes"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"Yes"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"Yes"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"-")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:"left"}),"uncheck"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"Yes"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"Yes"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"Yes"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"Yes"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"Yes"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"-")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:"left"}),"hover"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"Yes"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"Yes"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"Yes"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"Yes"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"-"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"-")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:"left"}),"scrollIntoViewIfNeeded"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"Yes"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"Yes"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"Yes"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"-"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"-"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"-")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:"left"}),"screenshot"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"Yes"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"Yes"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"Yes"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"-"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"-"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"-")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:"left"}),"fill"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"Yes"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"Yes"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"-"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"-"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"Yes"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"Yes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:"left"}),"selectText"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"Yes"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"Yes"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"-"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"-"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"-"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"-")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:"left"}),"dispatchEvent"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"Yes"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"-"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"-"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"-"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"-"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"-")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:"left"}),"focus"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"Yes"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"-"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"-"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"-"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"-"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"-")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:"left"}),"getAttribute"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"Yes"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"-"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"-"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"-"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"-"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"-")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:"left"}),"innerText"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"Yes"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"-"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"-"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"-"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"-"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"-")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:"left"}),"innerHTML"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"Yes"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"-"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"-"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"-"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"-"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"-")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:"left"}),"press"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"Yes"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"-"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"-"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"-"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"-"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"-")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:"left"}),"setInputFiles"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"Yes"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"-"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"-"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"-"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"-"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"-")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:"left"}),"selectOption"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"Yes"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"-"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"-"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"-"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"-"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"-")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:"left"}),"textContent"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"Yes"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"-"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"-"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"-"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"-"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"-")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:"left"}),"type"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"Yes"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"-"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"-"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"-"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"-"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"-")))),(0,n.kt)("br",null),(0,n.kt)("h2",o({},{id:"forcing-actions"}),"Forcing actions"),(0,n.kt)("p",null,"Some actions like ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/next/api/class-page#page-click"}),"page.click(selector[, options])")," support ",(0,n.kt)("inlineCode",{parentName:"p"},"force")," option that disables non-essential actionability checks, for example passing truthy ",(0,n.kt)("inlineCode",{parentName:"p"},"force")," to ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/next/api/class-page#page-click"}),"page.click(selector[, options])")," method will not check that the target element actually receives click events."),(0,n.kt)("h2",o({},{id:"assertions"}),"Assertions"),(0,n.kt)("p",null,"You can check the actionability state of the element using one of the following methods as well. This is typically not necessary, but it helps writing assertive tests that ensure that after certain actions, elements reach actionable state:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",o({parentName:"li"},{href:"/docs/next/api/class-elementhandle#element-handle-is-checked"}),"elementHandle.isChecked()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",o({parentName:"li"},{href:"/docs/next/api/class-elementhandle#element-handle-is-disabled"}),"elementHandle.isDisabled()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",o({parentName:"li"},{href:"/docs/next/api/class-elementhandle#element-handle-is-editable"}),"elementHandle.isEditable()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",o({parentName:"li"},{href:"/docs/next/api/class-elementhandle#element-handle-is-enabled"}),"elementHandle.isEnabled()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",o({parentName:"li"},{href:"/docs/next/api/class-elementhandle#element-handle-is-hidden"}),"elementHandle.isHidden()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",o({parentName:"li"},{href:"/docs/next/api/class-elementhandle#element-handle-is-visible"}),"elementHandle.isVisible()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",o({parentName:"li"},{href:"/docs/next/api/class-page#page-is-checked"}),"page.isChecked(selector[, options])")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",o({parentName:"li"},{href:"/docs/next/api/class-page#page-is-disabled"}),"page.isDisabled(selector[, options])")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",o({parentName:"li"},{href:"/docs/next/api/class-page#page-is-editable"}),"page.isEditable(selector[, options])")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",o({parentName:"li"},{href:"/docs/next/api/class-page#page-is-enabled"}),"page.isEnabled(selector[, options])")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",o({parentName:"li"},{href:"/docs/next/api/class-page#page-is-hidden"}),"page.isHidden(selector[, options])")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",o({parentName:"li"},{href:"/docs/next/api/class-page#page-is-visible"}),"page.isVisible(selector[, options])"))),(0,n.kt)("br",null),(0,n.kt)("h2",o({},{id:"attached"}),"Attached"),(0,n.kt)("p",null,"Element is considered attached when it is ",(0,n.kt)("a",o({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Node/isConnected"}),"connected")," to a Document or a ShadowRoot."),(0,n.kt)("h2",o({},{id:"visible"}),"Visible"),(0,n.kt)("p",null,"Element is considered visible when it has non-empty bounding box and does not have ",(0,n.kt)("inlineCode",{parentName:"p"},"visibility:hidden")," computed style. Note that elements of zero size or with ",(0,n.kt)("inlineCode",{parentName:"p"},"display:none")," are not considered visible."),(0,n.kt)("h2",o({},{id:"stable"}),"Stable"),(0,n.kt)("p",null,"Element is considered stable when it has maintained the same bounding box for at least two consecutive animation frames."),(0,n.kt)("h2",o({},{id:"enabled"}),"Enabled"),(0,n.kt)("p",null,"Element is considered enabled when it is not a ",(0,n.kt)("inlineCode",{parentName:"p"},"<button>"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"<select>"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"<input>")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"<textarea>")," with a ",(0,n.kt)("inlineCode",{parentName:"p"},"disabled")," property set."),(0,n.kt)("h2",o({},{id:"editable"}),"Editable"),(0,n.kt)("p",null,"Element is considered editable when it is ",(0,n.kt)("a",o({parentName:"p"},{href:"#enabled",title:"Enabled"}),"enabled")," and does not have ",(0,n.kt)("inlineCode",{parentName:"p"},"readonly")," property set."),(0,n.kt)("h2",o({},{id:"receives-events"}),"Receives Events"),(0,n.kt)("p",null,"Element is considered receiving pointer events when it is the hit target of the pointer event at the action point. For example, when clicking at the point ",(0,n.kt)("inlineCode",{parentName:"p"},"(10;10)"),", Playwright checks whether some other element (usually an overlay) will instead capture the click at ",(0,n.kt)("inlineCode",{parentName:"p"},"(10;10)"),"."),(0,n.kt)("p",null,"For example, consider a scenario where Playwright will click ",(0,n.kt)("inlineCode",{parentName:"p"},"Sign Up")," button regardless of when the ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/next/api/class-page#page-click"}),"page.click(selector[, options])")," call was made:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"page is checking that user name is unique and ",(0,n.kt)("inlineCode",{parentName:"li"},"Sign Up")," button is disabled;"),(0,n.kt)("li",{parentName:"ul"},"after checking with the server, the disabled ",(0,n.kt)("inlineCode",{parentName:"li"},"Sign Up")," button is replaced with another one that is now enabled.")))}b.isMDXComponent=!0}}]);