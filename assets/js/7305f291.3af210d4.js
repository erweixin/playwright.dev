"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[4680],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return h}});var o=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function n(e,t){if(null==e)return{};var a,o,r=function(e,t){if(null==e)return{};var a,o,r={},s=Object.keys(e);for(o=0;o<s.length;o++)a=s[o],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)a=s[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=o.createContext({}),c=function(e){var t=o.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=c(e.components);return o.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,p=n(e,["components","mdxType","originalType","parentName"]),u=c(a),h=r,k=u["".concat(i,".").concat(h)]||u[h]||d[h]||s;return a?o.createElement(k,l(l({ref:t},p),{},{components:a})):o.createElement(k,l({ref:t},p))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,l=new Array(s);l[0]=u;var n={};for(var i in t)hasOwnProperty.call(t,i)&&(n[i]=t[i]);n.originalType=e,n.mdxType="string"==typeof e?e:r,l[1]=n;for(var c=2;c<s;c++)l[c]=a[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,a)}u.displayName="MDXCreateElement"},97240:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return h},default:function(){return f},frontMatter:function(){return u},metadata:function(){return k},toc:function(){return v}});var o=a(3905),r=Object.defineProperty,s=Object.defineProperties,l=Object.getOwnPropertyDescriptors,n=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,t,a)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,d=(e,t)=>{for(var a in t||(t={}))i.call(t,a)&&p(e,a,t[a]);if(n)for(var a of n(t))c.call(t,a)&&p(e,a,t[a]);return e};const u={id:"class-locatorassertions",title:"LocatorAssertions"},h=void 0,k={unversionedId:"api/class-locatorassertions",id:"version-1.19/api/class-locatorassertions",title:"LocatorAssertions",description:"The LocatorAssertions] class provides assertion methods that can be used to make assertions about the [Locator] state in the tests. A new instance of [LocatorAssertions] is created by calling [playwrightAssertions.expect(locator):",source:"@site/versioned_docs/version-1.19/api/class-locatorassertions.mdx",sourceDirName:"api",slug:"/api/class-locatorassertions",permalink:"/docs/api/class-locatorassertions",tags:[],version:"1.19",frontMatter:{id:"class-locatorassertions",title:"LocatorAssertions"},sidebar:"version-1.19/api",previous:{title:"Locator",permalink:"/docs/api/class-locator"},next:{title:"Logger",permalink:"/docs/api/class-logger"}},m={},v=[{value:"locatorAssertions.not()",id:"locator-assertions-not",level:2},{value:"locatorAssertions.toBeChecked(options)",id:"locator-assertions-to-be-checked",level:2},{value:"locatorAssertions.toBeDisabled()",id:"locator-assertions-to-be-disabled",level:2},{value:"locatorAssertions.toBeEditable()",id:"locator-assertions-to-be-editable",level:2},{value:"locatorAssertions.toBeEmpty()",id:"locator-assertions-to-be-empty",level:2},{value:"locatorAssertions.toBeEnabled()",id:"locator-assertions-to-be-enabled",level:2},{value:"locatorAssertions.toBeFocused()",id:"locator-assertions-to-be-focused",level:2},{value:"locatorAssertions.toBeHidden()",id:"locator-assertions-to-be-hidden",level:2},{value:"locatorAssertions.toBeVisible()",id:"locator-assertions-to-be-visible",level:2},{value:"locatorAssertions.toContainText(expected, options)",id:"locator-assertions-to-contain-text",level:2},{value:"locatorAssertions.toHaveAttribute(name, value)",id:"locator-assertions-to-have-attribute",level:2},{value:"locatorAssertions.toHaveClass(expected)",id:"locator-assertions-to-have-class",level:2},{value:"locatorAssertions.toHaveCount(count)",id:"locator-assertions-to-have-count",level:2},{value:"locatorAssertions.toHaveCSS(name, value)",id:"locator-assertions-to-have-css",level:2},{value:"locatorAssertions.toHaveId(id)",id:"locator-assertions-to-have-id",level:2},{value:"locatorAssertions.toHaveJSProperty(name, value)",id:"locator-assertions-to-have-js-property",level:2},{value:"locatorAssertions.toHaveText(expected, options)",id:"locator-assertions-to-have-text",level:2},{value:"locatorAssertions.toHaveValue(value)",id:"locator-assertions-to-have-value",level:2}],b={toc:v};function f(e){var t,a=e,{components:r}=a,p=((e,t)=>{var a={};for(var o in e)i.call(e,o)&&t.indexOf(o)<0&&(a[o]=e[o]);if(null!=e&&n)for(var o of n(e))t.indexOf(o)<0&&c.call(e,o)&&(a[o]=e[o]);return a})(a,["components"]);return(0,o.kt)("wrapper",(t=d(d({},b),p),s(t,l({components:r,mdxType:"MDXLayout"}))),(0,o.kt)("p",null,"The ",(0,o.kt)("a",d({parentName:"p"},{href:"/docs/api/class-locatorassertions",title:"LocatorAssertions"}),"LocatorAssertions")," class provides assertion methods that can be used to make assertions about the ",(0,o.kt)("a",d({parentName:"p"},{href:"/docs/api/class-locator",title:"Locator"}),"Locator")," state in the tests. A new instance of ",(0,o.kt)("a",d({parentName:"p"},{href:"/docs/api/class-locatorassertions",title:"LocatorAssertions"}),"LocatorAssertions")," is created by calling ",(0,o.kt)("a",d({parentName:"p"},{href:"/docs/api/class-playwrightassertions#playwright-assertions-expect-locator"}),"playwrightAssertions.expect(locator)"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",d({parentName:"pre"},{className:"language-js"}),"import { test, expect } from '@playwright/test';\n\ntest('status becomes submitted', async ({ page }) => {\n  // ...\n  await page.click('#submit-button');\n  await expect(page.locator('.status')).toHaveText('Submitted');\n});\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",d({parentName:"li"},{href:"/docs/api/class-locatorassertions#locator-assertions-not"}),"locatorAssertions.not()")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",d({parentName:"li"},{href:"/docs/api/class-locatorassertions#locator-assertions-to-be-checked"}),"locatorAssertions.toBeChecked([options])")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",d({parentName:"li"},{href:"/docs/api/class-locatorassertions#locator-assertions-to-be-disabled"}),"locatorAssertions.toBeDisabled()")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",d({parentName:"li"},{href:"/docs/api/class-locatorassertions#locator-assertions-to-be-editable"}),"locatorAssertions.toBeEditable()")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",d({parentName:"li"},{href:"/docs/api/class-locatorassertions#locator-assertions-to-be-empty"}),"locatorAssertions.toBeEmpty()")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",d({parentName:"li"},{href:"/docs/api/class-locatorassertions#locator-assertions-to-be-enabled"}),"locatorAssertions.toBeEnabled()")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",d({parentName:"li"},{href:"/docs/api/class-locatorassertions#locator-assertions-to-be-focused"}),"locatorAssertions.toBeFocused()")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",d({parentName:"li"},{href:"/docs/api/class-locatorassertions#locator-assertions-to-be-hidden"}),"locatorAssertions.toBeHidden()")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",d({parentName:"li"},{href:"/docs/api/class-locatorassertions#locator-assertions-to-be-visible"}),"locatorAssertions.toBeVisible()")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",d({parentName:"li"},{href:"/docs/api/class-locatorassertions#locator-assertions-to-contain-text"}),"locatorAssertions.toContainText(expected[, options])")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",d({parentName:"li"},{href:"/docs/api/class-locatorassertions#locator-assertions-to-have-attribute"}),"locatorAssertions.toHaveAttribute(name, value)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",d({parentName:"li"},{href:"/docs/api/class-locatorassertions#locator-assertions-to-have-class"}),"locatorAssertions.toHaveClass(expected)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",d({parentName:"li"},{href:"/docs/api/class-locatorassertions#locator-assertions-to-have-count"}),"locatorAssertions.toHaveCount(count)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",d({parentName:"li"},{href:"/docs/api/class-locatorassertions#locator-assertions-to-have-css"}),"locatorAssertions.toHaveCSS(name, value)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",d({parentName:"li"},{href:"/docs/api/class-locatorassertions#locator-assertions-to-have-id"}),"locatorAssertions.toHaveId(id)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",d({parentName:"li"},{href:"/docs/api/class-locatorassertions#locator-assertions-to-have-js-property"}),"locatorAssertions.toHaveJSProperty(name, value)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",d({parentName:"li"},{href:"/docs/api/class-locatorassertions#locator-assertions-to-have-text"}),"locatorAssertions.toHaveText(expected[, options])")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",d({parentName:"li"},{href:"/docs/api/class-locatorassertions#locator-assertions-to-have-value"}),"locatorAssertions.toHaveValue(value)"))),(0,o.kt)("h2",d({},{id:"locator-assertions-not"}),"locatorAssertions.not()"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"returns:",(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"locator-assertions-not-return"})," ","<",(0,o.kt)("a",d({parentName:"li"},{href:"/docs/api/class-locatorassertions",title:"LocatorAssertions"}),"LocatorAssertions"),">",(0,o.kt)("a",{href:"#locator-assertions-not-return",class:"list-anchor"},"#"))),(0,o.kt)("p",null,"Makes the assertion check for the opposite condition. For example, this code tests that the Locator doesn't contain text ",(0,o.kt)("inlineCode",{parentName:"p"},'"error"'),":"),(0,o.kt)("pre",null,(0,o.kt)("code",d({parentName:"pre"},{className:"language-js"}),"await expect(locator).not.toContainText('error');\n")),(0,o.kt)("h2",d({},{id:"locator-assertions-to-be-checked"}),"locatorAssertions.toBeChecked(","[options]",")"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"options")," ","<",(0,o.kt)("a",d({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"}),"Object"),">",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"checked"),(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"locator-assertions-to-be-checked-option-checked"})," ","<",(0,o.kt)("a",d({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type",title:"Boolean"}),"boolean"),">",(0,o.kt)("a",{href:"#locator-assertions-to-be-checked-option-checked",class:"list-anchor"},"#")))),(0,o.kt)("li",{parentName:"ul"},"returns:",(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"locator-assertions-to-be-checked-return"})," ","<",(0,o.kt)("a",d({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"}),"void"),">",(0,o.kt)("a",{href:"#locator-assertions-to-be-checked-return",class:"list-anchor"},"#"))),(0,o.kt)("p",null,"Ensures the ",(0,o.kt)("a",d({parentName:"p"},{href:"/docs/api/class-locator",title:"Locator"}),"Locator")," points to a checked input."),(0,o.kt)("pre",null,(0,o.kt)("code",d({parentName:"pre"},{className:"language-js"}),"const locator = page.locator('.subscribe');\nawait expect(locator).toBeChecked();\n")),(0,o.kt)("h2",d({},{id:"locator-assertions-to-be-disabled"}),"locatorAssertions.toBeDisabled()"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"returns:",(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"locator-assertions-to-be-disabled-return"})," ","<",(0,o.kt)("a",d({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"}),"void"),">",(0,o.kt)("a",{href:"#locator-assertions-to-be-disabled-return",class:"list-anchor"},"#"))),(0,o.kt)("p",null,"Ensures the ",(0,o.kt)("a",d({parentName:"p"},{href:"/docs/api/class-locator",title:"Locator"}),"Locator")," points to a disabled element."),(0,o.kt)("pre",null,(0,o.kt)("code",d({parentName:"pre"},{className:"language-js"}),"const locator = page.locator('button.submit');\nawait expect(locator).toBeDisabled();\n")),(0,o.kt)("h2",d({},{id:"locator-assertions-to-be-editable"}),"locatorAssertions.toBeEditable()"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"returns:",(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"locator-assertions-to-be-editable-return"})," ","<",(0,o.kt)("a",d({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"}),"void"),">",(0,o.kt)("a",{href:"#locator-assertions-to-be-editable-return",class:"list-anchor"},"#"))),(0,o.kt)("p",null,"Ensures the ",(0,o.kt)("a",d({parentName:"p"},{href:"/docs/api/class-locator",title:"Locator"}),"Locator")," points to an editable element."),(0,o.kt)("pre",null,(0,o.kt)("code",d({parentName:"pre"},{className:"language-js"}),"const locator = page.locator('input');\nawait expect(locator).toBeEditable();\n")),(0,o.kt)("h2",d({},{id:"locator-assertions-to-be-empty"}),"locatorAssertions.toBeEmpty()"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"returns:",(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"locator-assertions-to-be-empty-return"})," ","<",(0,o.kt)("a",d({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"}),"void"),">",(0,o.kt)("a",{href:"#locator-assertions-to-be-empty-return",class:"list-anchor"},"#"))),(0,o.kt)("p",null,"Ensures the ",(0,o.kt)("a",d({parentName:"p"},{href:"/docs/api/class-locator",title:"Locator"}),"Locator")," points to an empty editable element or to a DOM node that has no text."),(0,o.kt)("pre",null,(0,o.kt)("code",d({parentName:"pre"},{className:"language-js"}),"const locator = page.locator('div.warning');\nawait expect(locator).toBeEmpty();\n")),(0,o.kt)("h2",d({},{id:"locator-assertions-to-be-enabled"}),"locatorAssertions.toBeEnabled()"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"returns:",(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"locator-assertions-to-be-enabled-return"})," ","<",(0,o.kt)("a",d({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"}),"void"),">",(0,o.kt)("a",{href:"#locator-assertions-to-be-enabled-return",class:"list-anchor"},"#"))),(0,o.kt)("p",null,"Ensures the ",(0,o.kt)("a",d({parentName:"p"},{href:"/docs/api/class-locator",title:"Locator"}),"Locator")," points to an enabled element."),(0,o.kt)("pre",null,(0,o.kt)("code",d({parentName:"pre"},{className:"language-js"}),"const locator = page.locator('button.submit');\nawait expect(locator).toBeEnabled();\n")),(0,o.kt)("h2",d({},{id:"locator-assertions-to-be-focused"}),"locatorAssertions.toBeFocused()"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"returns:",(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"locator-assertions-to-be-focused-return"})," ","<",(0,o.kt)("a",d({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"}),"void"),">",(0,o.kt)("a",{href:"#locator-assertions-to-be-focused-return",class:"list-anchor"},"#"))),(0,o.kt)("p",null,"Ensures the ",(0,o.kt)("a",d({parentName:"p"},{href:"/docs/api/class-locator",title:"Locator"}),"Locator")," points to a focused DOM node."),(0,o.kt)("pre",null,(0,o.kt)("code",d({parentName:"pre"},{className:"language-js"}),"const locator = page.locator('input');\nawait expect(locator).toBeFocused();\n")),(0,o.kt)("h2",d({},{id:"locator-assertions-to-be-hidden"}),"locatorAssertions.toBeHidden()"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"returns:",(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"locator-assertions-to-be-hidden-return"})," ","<",(0,o.kt)("a",d({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"}),"void"),">",(0,o.kt)("a",{href:"#locator-assertions-to-be-hidden-return",class:"list-anchor"},"#"))),(0,o.kt)("p",null,"Ensures the ",(0,o.kt)("a",d({parentName:"p"},{href:"/docs/api/class-locator",title:"Locator"}),"Locator")," points to a hidden DOM node, which is the opposite of ",(0,o.kt)("a",d({parentName:"p"},{href:"/docs/actionability#visible"}),"visible"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",d({parentName:"pre"},{className:"language-js"}),"const locator = page.locator('.my-element');\nawait expect(locator).toBeHidden();\n")),(0,o.kt)("h2",d({},{id:"locator-assertions-to-be-visible"}),"locatorAssertions.toBeVisible()"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"returns:",(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"locator-assertions-to-be-visible-return"})," ","<",(0,o.kt)("a",d({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"}),"void"),">",(0,o.kt)("a",{href:"#locator-assertions-to-be-visible-return",class:"list-anchor"},"#"))),(0,o.kt)("p",null,"Ensures the ",(0,o.kt)("a",d({parentName:"p"},{href:"/docs/api/class-locator",title:"Locator"}),"Locator")," points to a ",(0,o.kt)("a",d({parentName:"p"},{href:"/docs/actionability#visible"}),"visible")," DOM node."),(0,o.kt)("pre",null,(0,o.kt)("code",d({parentName:"pre"},{className:"language-js"}),"const locator = page.locator('.my-element');\nawait expect(locator).toBeVisible();\n")),(0,o.kt)("h2",d({},{id:"locator-assertions-to-contain-text"}),"locatorAssertions.toContainText(expected","[, options]",")"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"expected"),(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"locator-assertions-to-contain-text-option-expected"})," ","<",(0,o.kt)("a",d({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),"|",(0,o.kt)("a",d({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp",title:"RegExp"}),"RegExp"),"|",(0,o.kt)("a",d({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",title:"Array"}),"Array"),"<",(0,o.kt)("a",d({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),"|",(0,o.kt)("a",d({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp",title:"RegExp"}),"RegExp"),">",">"," Expected substring or RegExp or a list of those.",(0,o.kt)("a",{href:"#locator-assertions-to-contain-text-option-expected",class:"list-anchor"},"#")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"options")," ","<",(0,o.kt)("a",d({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"}),"Object"),">",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"useInnerText"),(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"locator-assertions-to-contain-text-option-use-inner-text"})," ","<",(0,o.kt)("a",d({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type",title:"Boolean"}),"boolean"),">"," Whether to use ",(0,o.kt)("inlineCode",{parentName:"li"},"element.innerText")," instead of ",(0,o.kt)("inlineCode",{parentName:"li"},"element.textContent")," when retrieving DOM node text.",(0,o.kt)("a",{href:"#locator-assertions-to-contain-text-option-use-inner-text",class:"list-anchor"},"#")))),(0,o.kt)("li",{parentName:"ul"},"returns:",(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"locator-assertions-to-contain-text-return"})," ","<",(0,o.kt)("a",d({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"}),"void"),">",(0,o.kt)("a",{href:"#locator-assertions-to-contain-text-return",class:"list-anchor"},"#"))),(0,o.kt)("p",null,"Ensures the ",(0,o.kt)("a",d({parentName:"p"},{href:"/docs/api/class-locator",title:"Locator"}),"Locator")," points to an element that contains the given text. You can use regular expressions for the value as well."),(0,o.kt)("pre",null,(0,o.kt)("code",d({parentName:"pre"},{className:"language-js"}),"const locator = page.locator('.title');\nawait expect(locator).toContainText('substring');\nawait expect(locator).toContainText(/\\d messages/);\n")),(0,o.kt)("p",null,"Note that if array is passed as an expected value, entire lists of elements can be asserted:"),(0,o.kt)("pre",null,(0,o.kt)("code",d({parentName:"pre"},{className:"language-js"}),"const locator = page.locator('list > .list-item');\nawait expect(locator).toContainText(['Text 1', 'Text 4', 'Text 5']);\n")),(0,o.kt)("h2",d({},{id:"locator-assertions-to-have-attribute"}),"locatorAssertions.toHaveAttribute(name, value)"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"name"),(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"locator-assertions-to-have-attribute-option-name"})," ","<",(0,o.kt)("a",d({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),">"," Attribute name.",(0,o.kt)("a",{href:"#locator-assertions-to-have-attribute-option-name",class:"list-anchor"},"#")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"value"),(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"locator-assertions-to-have-attribute-option-value"})," ","<",(0,o.kt)("a",d({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),"|",(0,o.kt)("a",d({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp",title:"RegExp"}),"RegExp"),">"," Expected attribute value.",(0,o.kt)("a",{href:"#locator-assertions-to-have-attribute-option-value",class:"list-anchor"},"#")),(0,o.kt)("li",{parentName:"ul"},"returns:",(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"locator-assertions-to-have-attribute-return"})," ","<",(0,o.kt)("a",d({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"}),"void"),">",(0,o.kt)("a",{href:"#locator-assertions-to-have-attribute-return",class:"list-anchor"},"#"))),(0,o.kt)("p",null,"Ensures the ",(0,o.kt)("a",d({parentName:"p"},{href:"/docs/api/class-locator",title:"Locator"}),"Locator")," points to an element with given attribute."),(0,o.kt)("pre",null,(0,o.kt)("code",d({parentName:"pre"},{className:"language-js"}),"const locator = page.locator('input');\nawait expect(locator).toHaveAttribute('type', 'text');\n")),(0,o.kt)("h2",d({},{id:"locator-assertions-to-have-class"}),"locatorAssertions.toHaveClass(expected)"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"expected"),(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"locator-assertions-to-have-class-option-expected"})," ","<",(0,o.kt)("a",d({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),"|",(0,o.kt)("a",d({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp",title:"RegExp"}),"RegExp"),"|",(0,o.kt)("a",d({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",title:"Array"}),"Array"),"<",(0,o.kt)("a",d({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),"|",(0,o.kt)("a",d({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp",title:"RegExp"}),"RegExp"),">",">"," Expected class or RegExp or a list of those.",(0,o.kt)("a",{href:"#locator-assertions-to-have-class-option-expected",class:"list-anchor"},"#")),(0,o.kt)("li",{parentName:"ul"},"returns:",(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"locator-assertions-to-have-class-return"})," ","<",(0,o.kt)("a",d({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"}),"void"),">",(0,o.kt)("a",{href:"#locator-assertions-to-have-class-return",class:"list-anchor"},"#"))),(0,o.kt)("p",null,"Ensures the ",(0,o.kt)("a",d({parentName:"p"},{href:"/docs/api/class-locator",title:"Locator"}),"Locator")," points to an element with given CSS class."),(0,o.kt)("pre",null,(0,o.kt)("code",d({parentName:"pre"},{className:"language-js"}),"const locator = page.locator('#component');\nawait expect(locator).toHaveClass(/selected/);\n")),(0,o.kt)("p",null,"Note that if array is passed as an expected value, entire lists of elements can be asserted:"),(0,o.kt)("pre",null,(0,o.kt)("code",d({parentName:"pre"},{className:"language-js"}),"const locator = page.locator('list > .component');\nawait expect(locator).toHaveClass(['component', 'component selected', 'component']);\n")),(0,o.kt)("h2",d({},{id:"locator-assertions-to-have-count"}),"locatorAssertions.toHaveCount(count)"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"count"),(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"locator-assertions-to-have-count-option-count"})," ","<",(0,o.kt)("a",d({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"}),"number"),">"," Expected count.",(0,o.kt)("a",{href:"#locator-assertions-to-have-count-option-count",class:"list-anchor"},"#")),(0,o.kt)("li",{parentName:"ul"},"returns:",(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"locator-assertions-to-have-count-return"})," ","<",(0,o.kt)("a",d({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"}),"void"),">",(0,o.kt)("a",{href:"#locator-assertions-to-have-count-return",class:"list-anchor"},"#"))),(0,o.kt)("p",null,"Ensures the ",(0,o.kt)("a",d({parentName:"p"},{href:"/docs/api/class-locator",title:"Locator"}),"Locator")," resolves to an exact number of DOM nodes."),(0,o.kt)("pre",null,(0,o.kt)("code",d({parentName:"pre"},{className:"language-js"}),"const list = page.locator('list > .component');\nawait expect(list).toHaveCount(3);\n")),(0,o.kt)("h2",d({},{id:"locator-assertions-to-have-css"}),"locatorAssertions.toHaveCSS(name, value)"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"name"),(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"locator-assertions-to-have-css-option-name"})," ","<",(0,o.kt)("a",d({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),">"," CSS property name.",(0,o.kt)("a",{href:"#locator-assertions-to-have-css-option-name",class:"list-anchor"},"#")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"value"),(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"locator-assertions-to-have-css-option-value"})," ","<",(0,o.kt)("a",d({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),"|",(0,o.kt)("a",d({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp",title:"RegExp"}),"RegExp"),">"," CSS property value.",(0,o.kt)("a",{href:"#locator-assertions-to-have-css-option-value",class:"list-anchor"},"#")),(0,o.kt)("li",{parentName:"ul"},"returns:",(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"locator-assertions-to-have-css-return"})," ","<",(0,o.kt)("a",d({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"}),"void"),">",(0,o.kt)("a",{href:"#locator-assertions-to-have-css-return",class:"list-anchor"},"#"))),(0,o.kt)("p",null,"Ensures the ",(0,o.kt)("a",d({parentName:"p"},{href:"/docs/api/class-locator",title:"Locator"}),"Locator")," resolves to an element with the given computed CSS style."),(0,o.kt)("pre",null,(0,o.kt)("code",d({parentName:"pre"},{className:"language-js"}),"const locator = page.locator('button');\nawait expect(locator).toHaveCSS('display', 'flex');\n")),(0,o.kt)("h2",d({},{id:"locator-assertions-to-have-id"}),"locatorAssertions.toHaveId(id)"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"id"),(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"locator-assertions-to-have-id-option-id"})," ","<",(0,o.kt)("a",d({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),"|",(0,o.kt)("a",d({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp",title:"RegExp"}),"RegExp"),">"," Element id.",(0,o.kt)("a",{href:"#locator-assertions-to-have-id-option-id",class:"list-anchor"},"#")),(0,o.kt)("li",{parentName:"ul"},"returns:",(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"locator-assertions-to-have-id-return"})," ","<",(0,o.kt)("a",d({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"}),"void"),">",(0,o.kt)("a",{href:"#locator-assertions-to-have-id-return",class:"list-anchor"},"#"))),(0,o.kt)("p",null,"Ensures the ",(0,o.kt)("a",d({parentName:"p"},{href:"/docs/api/class-locator",title:"Locator"}),"Locator")," points to an element with the given DOM Node ID."),(0,o.kt)("pre",null,(0,o.kt)("code",d({parentName:"pre"},{className:"language-js"}),"const locator = page.locator('input');\nawait expect(locator).toHaveId('lastname');\n")),(0,o.kt)("h2",d({},{id:"locator-assertions-to-have-js-property"}),"locatorAssertions.toHaveJSProperty(name, value)"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"name"),(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"locator-assertions-to-have-js-property-option-name"})," ","<",(0,o.kt)("a",d({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),">"," Property name.",(0,o.kt)("a",{href:"#locator-assertions-to-have-js-property-option-name",class:"list-anchor"},"#")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"value"),(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"locator-assertions-to-have-js-property-option-value"})," ","<",(0,o.kt)("a",d({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#Description",title:"Serializable"}),"Serializable"),">"," Property value.",(0,o.kt)("a",{href:"#locator-assertions-to-have-js-property-option-value",class:"list-anchor"},"#")),(0,o.kt)("li",{parentName:"ul"},"returns:",(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"locator-assertions-to-have-js-property-return"})," ","<",(0,o.kt)("a",d({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"}),"void"),">",(0,o.kt)("a",{href:"#locator-assertions-to-have-js-property-return",class:"list-anchor"},"#"))),(0,o.kt)("p",null,"Ensures the ",(0,o.kt)("a",d({parentName:"p"},{href:"/docs/api/class-locator",title:"Locator"}),"Locator")," points to an element with given JavaScript property. Note that this property can be of a primitive type as well as a plain serializable JavaScript object."),(0,o.kt)("pre",null,(0,o.kt)("code",d({parentName:"pre"},{className:"language-js"}),"const locator = page.locator('.component');\nawait expect(locator).toHaveJSProperty('loaded', true);\n")),(0,o.kt)("h2",d({},{id:"locator-assertions-to-have-text"}),"locatorAssertions.toHaveText(expected","[, options]",")"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"expected"),(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"locator-assertions-to-have-text-option-expected"})," ","<",(0,o.kt)("a",d({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),"|",(0,o.kt)("a",d({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp",title:"RegExp"}),"RegExp"),"|",(0,o.kt)("a",d({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",title:"Array"}),"Array"),"<",(0,o.kt)("a",d({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),"|",(0,o.kt)("a",d({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp",title:"RegExp"}),"RegExp"),">",">"," Expected substring or RegExp or a list of those.",(0,o.kt)("a",{href:"#locator-assertions-to-have-text-option-expected",class:"list-anchor"},"#")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"options")," ","<",(0,o.kt)("a",d({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"}),"Object"),">",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"useInnerText"),(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"locator-assertions-to-have-text-option-use-inner-text"})," ","<",(0,o.kt)("a",d({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type",title:"Boolean"}),"boolean"),">"," Whether to use ",(0,o.kt)("inlineCode",{parentName:"li"},"element.innerText")," instead of ",(0,o.kt)("inlineCode",{parentName:"li"},"element.textContent")," when retrieving DOM node text.",(0,o.kt)("a",{href:"#locator-assertions-to-have-text-option-use-inner-text",class:"list-anchor"},"#")))),(0,o.kt)("li",{parentName:"ul"},"returns:",(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"locator-assertions-to-have-text-return"})," ","<",(0,o.kt)("a",d({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"}),"void"),">",(0,o.kt)("a",{href:"#locator-assertions-to-have-text-return",class:"list-anchor"},"#"))),(0,o.kt)("p",null,"Ensures the ",(0,o.kt)("a",d({parentName:"p"},{href:"/docs/api/class-locator",title:"Locator"}),"Locator")," points to an element with the given text. You can use regular expressions for the value as well."),(0,o.kt)("pre",null,(0,o.kt)("code",d({parentName:"pre"},{className:"language-js"}),"const locator = page.locator('.title');\nawait expect(locator).toHaveText(/Welcome, Test User/);\nawait expect(locator).toHaveText(/Welcome, .*/);\n")),(0,o.kt)("p",null,"Note that if array is passed as an expected value, entire lists of elements can be asserted:"),(0,o.kt)("pre",null,(0,o.kt)("code",d({parentName:"pre"},{className:"language-js"}),"const locator = page.locator('list > .component');\nawait expect(locator).toHaveText(['Text 1', 'Text 2', 'Text 3']);\n")),(0,o.kt)("h2",d({},{id:"locator-assertions-to-have-value"}),"locatorAssertions.toHaveValue(value)"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"value"),(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"locator-assertions-to-have-value-option-value"})," ","<",(0,o.kt)("a",d({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),"|",(0,o.kt)("a",d({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp",title:"RegExp"}),"RegExp"),">"," Expected value.",(0,o.kt)("a",{href:"#locator-assertions-to-have-value-option-value",class:"list-anchor"},"#")),(0,o.kt)("li",{parentName:"ul"},"returns:",(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"locator-assertions-to-have-value-return"})," ","<",(0,o.kt)("a",d({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"}),"void"),">",(0,o.kt)("a",{href:"#locator-assertions-to-have-value-return",class:"list-anchor"},"#"))),(0,o.kt)("p",null,"Ensures the ",(0,o.kt)("a",d({parentName:"p"},{href:"/docs/api/class-locator",title:"Locator"}),"Locator")," points to an element with the given input value. You can use regular expressions for the value as well."),(0,o.kt)("pre",null,(0,o.kt)("code",d({parentName:"pre"},{className:"language-js"}),"const locator = page.locator('input[type=number]');\nawait expect(locator).toHaveValue(/[0-9]/);\n")))}f.isMDXComponent=!0}}]);