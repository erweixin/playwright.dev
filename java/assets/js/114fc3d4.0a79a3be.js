"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[4613],{3905:function(e,a,t){t.d(a,{Zo:function(){return d},kt:function(){return m}});var n=t(7294);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,i=function(e,a){if(null==e)return{};var t,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=n.createContext({}),c=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},d=function(e){var a=c(e.components);return n.createElement(s.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=c(t),m=i,g=u["".concat(s,".").concat(m)]||u[m]||p[m]||r;return t?n.createElement(g,l(l({ref:a},d),{},{components:t})):n.createElement(g,l({ref:a},d))}));function m(e,a){var t=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var r=t.length,l=new Array(r);l[0]=u;var o={};for(var s in a)hasOwnProperty.call(a,s)&&(o[s]=a[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var c=2;c<r;c++)l[c]=t[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},8215:function(e,a,t){var n=t(7294);a.Z=function(e){var a=e.children,t=e.hidden,i=e.className;return n.createElement("div",{role:"tabpanel",hidden:t,className:i},a)}},5064:function(e,a,t){t.d(a,{Z:function(){return p}});var n=t(7294),i=t(9443);var r=function(){var e=(0,n.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=t(6010),o="tabItem_1uMI",s="tabItemActive_2DSg";var c=37,d=39;var p=function(e){var a=e.lazy,t=e.block,i=e.defaultValue,p=e.values,u=e.groupId,m=e.className,g=r(),h=g.tabGroupChoices,f=g.setTabGroupChoices,v=(0,n.useState)(i),k=v[0],y=v[1],b=n.Children.toArray(e.children),N=[];if(null!=u){var w=h[u];null!=w&&w!==k&&p.some((function(e){return e.value===w}))&&y(w)}var j=function(e){var a=e.currentTarget,t=N.indexOf(a),n=p[t].value;y(n),null!=u&&(f(u,n),setTimeout((function(){var e,t,n,i,r,l,o,c;(e=a.getBoundingClientRect(),t=e.top,n=e.left,i=e.bottom,r=e.right,l=window,o=l.innerHeight,c=l.innerWidth,t>=0&&r<=c&&i<=o&&n>=0)||(a.scrollIntoView({block:"center",behavior:"smooth"}),a.classList.add(s),setTimeout((function(){return a.classList.remove(s)}),2e3))}),150))},D=function(e){var a,t;switch(e.keyCode){case d:var n=N.indexOf(e.target)+1;t=N[n]||N[0];break;case c:var i=N.indexOf(e.target)-1;t=N[i]||N[N.length-1]}null==(a=t)||a.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":t},m)},p.map((function(e){var a=e.value,t=e.label;return n.createElement("li",{role:"tab",tabIndex:k===a?0:-1,"aria-selected":k===a,className:(0,l.Z)("tabs__item",o,{"tabs__item--active":k===a}),key:a,ref:function(e){return N.push(e)},onKeyDown:D,onFocus:j,onClick:j},t)}))),a?(0,n.cloneElement)(b.filter((function(e){return e.props.value===k}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},b.map((function(e,a){return(0,n.cloneElement)(e,{key:a,hidden:e.props.value!==k})}))))}},9443:function(e,a,t){var n=(0,t(7294).createContext)(void 0);a.Z=n},6018:function(e,a,t){t.r(a),t.d(a,{frontMatter:function(){return l},contentTitle:function(){return o},metadata:function(){return s},toc:function(){return c},default:function(){return p}});var n=t(2122),i=t(9756),r=(t(7294),t(3905)),l=(t(5064),t(8215),{id:"class-dialog",title:"Dialog"}),o=void 0,s={unversionedId:"api/class-dialog",id:"version-1.16/api/class-dialog",isDocsHomePage:!1,title:"Dialog",description:"Dialog] objects are dispatched by page via the [Page.onDialog(handler) event.",source:"@site/versioned_docs/version-1.16/api/class-dialog.mdx",sourceDirName:"api",slug:"/api/class-dialog",permalink:"/java/docs/1.16/api/class-dialog",version:"1.16",frontMatter:{id:"class-dialog",title:"Dialog"},sidebar:"version-1.16/api",previous:{title:"ConsoleMessage",permalink:"/java/docs/1.16/api/class-consolemessage"},next:{title:"Download",permalink:"/java/docs/1.16/api/class-download"}},c=[{value:"Dialog.accept(promptText)",id:"dialog-accept",children:[]},{value:"Dialog.defaultValue()",id:"dialog-default-value",children:[]},{value:"Dialog.dismiss()",id:"dialog-dismiss",children:[]},{value:"Dialog.message()",id:"dialog-message",children:[]},{value:"Dialog.type()",id:"dialog-type",children:[]}],d={toc:c};function p(e){var a=e.components,t=(0,i.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,n.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/java/docs/1.16/api/class-dialog",title:"Dialog"},"Dialog")," objects are dispatched by page via the ",(0,r.kt)("a",{parentName:"p",href:"/java/docs/1.16/api/class-page#page-event-dialog"},"Page.onDialog(handler)")," event."),(0,r.kt)("p",null,"An example of using ",(0,r.kt)("inlineCode",{parentName:"p"},"Dialog")," class:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"import com.microsoft.playwright.*;\n\npublic class Example {\n  public static void main(String[] args) {\n    try (Playwright playwright = Playwright.create()) {\n      BrowserType chromium = playwright.chromium();\n      Browser browser = chromium.launch();\n      Page page = browser.newPage();\n      page.onDialog(dialog -> {\n        System.out.println(dialog.message());\n        dialog.dismiss();\n      });\n      page.evaluate(\"alert('1')\");\n      browser.close();\n    }\n  }\n}\n")),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Dialogs are dismissed automatically, unless there is a ",(0,r.kt)("a",{parentName:"p",href:"/java/docs/1.16/api/class-page#page-event-dialog"},"Page.onDialog(handler)")," listener. When listener is present, it ",(0,r.kt)("strong",{parentName:"p"},"must")," either ",(0,r.kt)("a",{parentName:"p",href:"/java/docs/1.16/api/class-dialog#dialog-accept"},"Dialog.accept([promptText])")," or ",(0,r.kt)("a",{parentName:"p",href:"/java/docs/1.16/api/class-dialog#dialog-dismiss"},"Dialog.dismiss()")," the dialog - otherwise the page will ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop#never_blocking"},"freeze")," waiting for the dialog, and actions like click will never finish."))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/java/docs/1.16/api/class-dialog#dialog-accept"},"Dialog.accept([promptText])")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/java/docs/1.16/api/class-dialog#dialog-default-value"},"Dialog.defaultValue()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/java/docs/1.16/api/class-dialog#dialog-dismiss"},"Dialog.dismiss()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/java/docs/1.16/api/class-dialog#dialog-message"},"Dialog.message()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/java/docs/1.16/api/class-dialog#dialog-type"},"Dialog.type()"))),(0,r.kt)("h2",{id:"dialog-accept"},"Dialog.accept(","[promptText]",")"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"promptText"),(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"dialog-accept-option-prompt-text"})," ","<",(0,r.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"},"String"),">"," A text to enter in prompt. Does not cause any effects if the dialog's ",(0,r.kt)("inlineCode",{parentName:"li"},"type")," is not prompt. Optional.",(0,r.kt)("a",{href:"#dialog-accept-option-prompt-text",class:"list-anchor"},"#")),(0,r.kt)("li",{parentName:"ul"},"returns:",(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"dialog-accept-return"})," ","<",(0,r.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/tutorial/java/javaOO/methods.html",title:"void"},"void"),">",(0,r.kt)("a",{href:"#dialog-accept-return",class:"list-anchor"},"#"))),(0,r.kt)("p",null,"Returns when the dialog has been accepted."),(0,r.kt)("h2",{id:"dialog-default-value"},"Dialog.defaultValue()"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"returns:",(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"dialog-default-value-return"})," ","<",(0,r.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"},"String"),">",(0,r.kt)("a",{href:"#dialog-default-value-return",class:"list-anchor"},"#"))),(0,r.kt)("p",null,"If dialog is prompt, returns default prompt value. Otherwise, returns empty string."),(0,r.kt)("h2",{id:"dialog-dismiss"},"Dialog.dismiss()"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"returns:",(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"dialog-dismiss-return"})," ","<",(0,r.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/tutorial/java/javaOO/methods.html",title:"void"},"void"),">",(0,r.kt)("a",{href:"#dialog-dismiss-return",class:"list-anchor"},"#"))),(0,r.kt)("p",null,"Returns when the dialog has been dismissed."),(0,r.kt)("h2",{id:"dialog-message"},"Dialog.message()"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"returns:",(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"dialog-message-return"})," ","<",(0,r.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"},"String"),">",(0,r.kt)("a",{href:"#dialog-message-return",class:"list-anchor"},"#"))),(0,r.kt)("p",null,"A message displayed in the dialog."),(0,r.kt)("h2",{id:"dialog-type"},"Dialog.type()"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"returns:",(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"dialog-type-return"})," ","<",(0,r.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"},"String"),">",(0,r.kt)("a",{href:"#dialog-type-return",class:"list-anchor"},"#"))),(0,r.kt)("p",null,"Returns dialog's type, can be one of ",(0,r.kt)("inlineCode",{parentName:"p"},"alert"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"beforeunload"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"confirm")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"prompt"),"."))}p.isMDXComponent=!0},6010:function(e,a,t){function n(e){var a,t,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(a=0;a<e.length;a++)e[a]&&(t=n(e[a]))&&(i&&(i+=" "),i+=t);else for(a in e)e[a]&&(i&&(i+=" "),i+=a);return i}function i(){for(var e,a,t=0,i="";t<arguments.length;)(e=arguments[t++])&&(a=n(e))&&(i&&(i+=" "),i+=a);return i}t.d(a,{Z:function(){return i}})}}]);