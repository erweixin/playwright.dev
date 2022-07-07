"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[9992],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return g}});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(a),g=i,m=u["".concat(s,".").concat(g)]||u[g]||d[g]||r;return a?n.createElement(m,l(l({ref:t},p),{},{components:a})):n.createElement(m,l({ref:t},p))}));function g(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var c=2;c<r;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},7681:function(e,t,a){a.r(t),a.d(t,{assets:function(){return f},contentTitle:function(){return g},default:function(){return v},frontMatter:function(){return u},metadata:function(){return m},toc:function(){return h}});var n=a(3905),i=Object.defineProperty,r=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,t,a)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,d=(e,t)=>{for(var a in t||(t={}))s.call(t,a)&&p(e,a,t[a]);if(o)for(var a of o(t))c.call(t,a)&&p(e,a,t[a]);return e};const u={id:"class-dialog",title:"Dialog"},g=void 0,m={unversionedId:"api/class-dialog",id:"version-stable/api/class-dialog",title:"Dialog",description:"Dialog] objects are dispatched by page via the [event Page.Dialog event.",source:"@site/versioned_docs/version-stable/api/class-dialog.mdx",sourceDirName:"api",slug:"/api/class-dialog",permalink:"/dotnet/docs/api/class-dialog",tags:[],version:"stable",frontMatter:{id:"class-dialog",title:"Dialog"},sidebar:"api",previous:{title:"ConsoleMessage",permalink:"/dotnet/docs/api/class-consolemessage"},next:{title:"Download",permalink:"/dotnet/docs/api/class-download"}},f={},h=[{value:"Dialog.AcceptAsync(promptText)",id:"dialog-accept",level:2},{value:"Dialog.DefaultValue",id:"dialog-default-value",level:2},{value:"Dialog.DismissAsync()",id:"dialog-dismiss",level:2},{value:"Dialog.Message",id:"dialog-message",level:2},{value:"Dialog.Type",id:"dialog-type",level:2}],k={toc:h};function v(e){var t,a=e,{components:i}=a,p=((e,t)=>{var a={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&o)for(var n of o(e))t.indexOf(n)<0&&c.call(e,n)&&(a[n]=e[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(t=d(d({},k),p),r(t,l({components:i,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,(0,n.kt)("a",d({parentName:"p"},{href:"/dotnet/docs/api/class-dialog",title:"Dialog"}),"Dialog")," objects are dispatched by page via the ",(0,n.kt)("a",d({parentName:"p"},{href:"/dotnet/docs/api/class-page#page-event-dialog"}),"event Page.Dialog")," event."),(0,n.kt)("p",null,"An example of using ",(0,n.kt)("inlineCode",{parentName:"p"},"Dialog")," class:"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-csharp"}),"using Microsoft.Playwright;\nusing System.Threading.Tasks;\n\nclass DialogExample\n{\n    public static async Task Run()\n    {\n        using var playwright = await Playwright.CreateAsync();\n        await using var browser = await playwright.Chromium.LaunchAsync();\n        var page = await browser.NewPageAsync();\n\n        page.Dialog += async (_, dialog) =>\n        {\n            System.Console.WriteLine(dialog.Message);\n            await dialog.DismissAsync();\n        };\n\n        await page.EvaluateAsync(\"alert('1');\");\n    }\n}\n")),(0,n.kt)("div",d({},{className:"admonition admonition-note alert alert--secondary"}),(0,n.kt)("div",d({parentName:"div"},{className:"admonition-heading"}),(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",d({parentName:"h5"},{className:"admonition-icon"}),(0,n.kt)("svg",d({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),(0,n.kt)("path",d({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),(0,n.kt)("div",d({parentName:"div"},{className:"admonition-content"}),(0,n.kt)("p",{parentName:"div"},"Dialogs are dismissed automatically, unless there is a ",(0,n.kt)("a",d({parentName:"p"},{href:"/dotnet/docs/api/class-page#page-event-dialog"}),"event Page.Dialog")," listener. When listener is present, it ",(0,n.kt)("strong",{parentName:"p"},"must")," either ",(0,n.kt)("a",d({parentName:"p"},{href:"/dotnet/docs/api/class-dialog#dialog-accept"}),"Dialog.AcceptAsync(promptText)")," or ",(0,n.kt)("a",d({parentName:"p"},{href:"/dotnet/docs/api/class-dialog#dialog-dismiss"}),"Dialog.DismissAsync()")," the dialog - otherwise the page will ",(0,n.kt)("a",d({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop#never_blocking"}),"freeze")," waiting for the dialog, and actions like click will never finish."))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"/dotnet/docs/api/class-dialog#dialog-accept"}),"Dialog.AcceptAsync(promptText)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"/dotnet/docs/api/class-dialog#dialog-default-value"}),"Dialog.DefaultValue")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"/dotnet/docs/api/class-dialog#dialog-dismiss"}),"Dialog.DismissAsync()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"/dotnet/docs/api/class-dialog#dialog-message"}),"Dialog.Message")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"/dotnet/docs/api/class-dialog#dialog-type"}),"Dialog.Type"))),(0,n.kt)("h2",d({},{id:"dialog-accept"}),"Dialog.AcceptAsync(promptText)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"promptText"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"dialog-accept-option-prompt-text"})," ","<",(0,n.kt)("a",d({parentName:"li"},{href:"https://docs.microsoft.com/en-us/dotnet/api/system.string",title:"string"}),"string"),"?",">"," A text to enter in prompt. Does not cause any effects if the dialog's ",(0,n.kt)("inlineCode",{parentName:"li"},"type")," is not prompt. Optional.",(0,n.kt)("a",{href:"#dialog-accept-option-prompt-text",class:"list-anchor"},"#")),(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"dialog-accept-return"})," ","<",(0,n.kt)("a",d({parentName:"li"},{href:"https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/void",title:"void"}),"void"),">",(0,n.kt)("a",{href:"#dialog-accept-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"Returns when the dialog has been accepted."),(0,n.kt)("h2",d({},{id:"dialog-default-value"}),"Dialog.DefaultValue"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"dialog-default-value-return"})," ","<",(0,n.kt)("a",d({parentName:"li"},{href:"https://docs.microsoft.com/en-us/dotnet/api/system.string",title:"string"}),"string"),">",(0,n.kt)("a",{href:"#dialog-default-value-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"If dialog is prompt, returns default prompt value. Otherwise, returns empty string."),(0,n.kt)("h2",d({},{id:"dialog-dismiss"}),"Dialog.DismissAsync()"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"dialog-dismiss-return"})," ","<",(0,n.kt)("a",d({parentName:"li"},{href:"https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/void",title:"void"}),"void"),">",(0,n.kt)("a",{href:"#dialog-dismiss-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"Returns when the dialog has been dismissed."),(0,n.kt)("h2",d({},{id:"dialog-message"}),"Dialog.Message"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"dialog-message-return"})," ","<",(0,n.kt)("a",d({parentName:"li"},{href:"https://docs.microsoft.com/en-us/dotnet/api/system.string",title:"string"}),"string"),">",(0,n.kt)("a",{href:"#dialog-message-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"A message displayed in the dialog."),(0,n.kt)("h2",d({},{id:"dialog-type"}),"Dialog.Type"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"dialog-type-return"})," ","<",(0,n.kt)("a",d({parentName:"li"},{href:"https://docs.microsoft.com/en-us/dotnet/api/system.string",title:"string"}),"string"),">",(0,n.kt)("a",{href:"#dialog-type-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"Returns dialog's type, can be one of ",(0,n.kt)("inlineCode",{parentName:"p"},"alert"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"beforeunload"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"confirm")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"prompt"),"."))}v.isMDXComponent=!0}}]);