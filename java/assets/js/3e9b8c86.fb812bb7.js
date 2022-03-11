"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[4848],{3905:function(t,e,a){a.d(e,{Zo:function(){return m},kt:function(){return d}});var r=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},o=Object.keys(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var s=r.createContext({}),c=function(t){var e=r.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=c(t.components);return r.createElement(s.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,o=t.originalType,s=t.parentName,m=l(t,["components","mdxType","originalType","parentName"]),u=c(a),d=n,f=u["".concat(s,".").concat(d)]||u[d]||p[d]||o;return a?r.createElement(f,i(i({ref:e},m),{},{components:a})):r.createElement(f,i({ref:e},m))}));function d(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=a.length,i=new Array(o);i[0]=u;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:n,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},4937:function(t,e,a){a.r(e),a.d(e,{assets:function(){return h},contentTitle:function(){return d},default:function(){return y},frontMatter:function(){return u},metadata:function(){return f},toc:function(){return v}});var r=a(3905),n=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,m=(t,e,a)=>e in t?n(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,p=(t,e)=>{for(var a in e||(e={}))s.call(e,a)&&m(t,a,e[a]);if(l)for(var a of l(e))c.call(e,a)&&m(t,a,e[a]);return t};const u={id:"class-formdata",title:"FormData"},d=void 0,f={unversionedId:"api/class-formdata",id:"version-1.18/api/class-formdata",title:"FormData",description:"The [FormData] is used create form data that is sent via [APIRequestContext].",source:"@site/versioned_docs/version-1.18/api/class-formdata.mdx",sourceDirName:"api",slug:"/api/class-formdata",permalink:"/java/docs/1.18/api/class-formdata",tags:[],version:"1.18",frontMatter:{id:"class-formdata",title:"FormData"}},h={},v=[{value:"FormData.create()",id:"form-data-create",level:2},{value:"FormData.set(name, name)",id:"form-data-set",level:2}],k={toc:v};function y(t){var e,a=t,{components:n}=a,m=((t,e)=>{var a={};for(var r in t)s.call(t,r)&&e.indexOf(r)<0&&(a[r]=t[r]);if(null!=t&&l)for(var r of l(t))e.indexOf(r)<0&&c.call(t,r)&&(a[r]=t[r]);return a})(a,["components"]);return(0,r.kt)("wrapper",(e=p(p({},k),m),o(e,i({components:n,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"The ",(0,r.kt)("a",p({parentName:"p"},{href:"/java/docs/1.18/api/class-formdata",title:"FormData"}),"FormData")," is used create form data that is sent via ",(0,r.kt)("a",p({parentName:"p"},{href:"/java/docs/1.18/api/class-apirequestcontext",title:"APIRequestContext"}),"APIRequestContext"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-java"}),'import com.microsoft.playwright.options.FormData;\n...\nFormData form = FormData.create()\n    .set("firstName", "John")\n    .set("lastName", "Doe")\n    .set("age", 30);\npage.request().post("http://localhost/submit", RequestOptions.create().setForm(form));\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",p({parentName:"li"},{href:"/java/docs/1.18/api/class-formdata#form-data-create"}),"FormData.create()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",p({parentName:"li"},{href:"/java/docs/1.18/api/class-formdata#form-data-set"}),"FormData.set(name, name)"))),(0,r.kt)("h2",p({},{id:"form-data-create"}),"FormData.create()"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"returns:",(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"form-data-create-return"})," ","<",(0,r.kt)("a",p({parentName:"li"},{href:"/java/docs/1.18/api/class-formdata",title:"FormData"}),"FormData"),">",(0,r.kt)("a",{href:"#form-data-create-return",class:"list-anchor"},"#"))),(0,r.kt)("p",null,"Creates new instance of ",(0,r.kt)("a",p({parentName:"p"},{href:"/java/docs/1.18/api/class-formdata",title:"FormData"}),"FormData"),"."),(0,r.kt)("h2",p({},{id:"form-data-set"}),"FormData.set(name, name)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"name"),(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"form-data-set-option-name"})," ","<",(0,r.kt)("a",p({parentName:"li"},{href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"}),"String"),">"," Field name.",(0,r.kt)("a",{href:"#form-data-set-option-name",class:"list-anchor"},"#")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"name"),(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"form-data-set-option-value"})," ","<",(0,r.kt)("a",p({parentName:"li"},{href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"}),"String"),"|",(0,r.kt)("a",p({parentName:"li"},{href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",title:"boolean"}),"boolean"),"|",(0,r.kt)("a",p({parentName:"li"},{href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",title:"int"}),"int"),"|",(0,r.kt)("a",p({parentName:"li"},{href:"https://docs.oracle.com/javase/8/docs/api/java/nio/file/Path.html",title:"Path"}),"Path"),"|Name",">"," Field value.",(0,r.kt)("a",{href:"#form-data-set-option-value",class:"list-anchor"},"#"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"setName")," ","<",(0,r.kt)("a",p({parentName:"li"},{href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"}),"String"),">"," File name"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"setMimeType")," ","<",(0,r.kt)("a",p({parentName:"li"},{href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"}),"String"),">"," File type"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"setBuffer")," ","<",(0,r.kt)("a",p({parentName:"li"},{href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",title:"byte[]"}),"byte","[","]"),">"," File content"))),(0,r.kt)("li",{parentName:"ul"},"returns:",(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"form-data-set-return"})," ","<",(0,r.kt)("a",p({parentName:"li"},{href:"/java/docs/1.18/api/class-formdata",title:"FormData"}),"FormData"),">",(0,r.kt)("a",{href:"#form-data-set-return",class:"list-anchor"},"#"))),(0,r.kt)("p",null,"Sets a field on the form. File values can be passed either as ",(0,r.kt)("inlineCode",{parentName:"p"},"Path")," or as ",(0,r.kt)("inlineCode",{parentName:"p"},"FilePayload"),"."))}y.isMDXComponent=!0}}]);