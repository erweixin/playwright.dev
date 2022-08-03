"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[9315],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=l(a),m=r,g=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return a?n.createElement(g,s(s({ref:t},u),{},{components:a})):n.createElement(g,s({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var l=2;l<o;l++)s[l]=a[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},780:function(e,t,a){a.r(t),a.d(t,{assets:function(){return h},contentTitle:function(){return m},default:function(){return y},frontMatter:function(){return d},metadata:function(){return g},toc:function(){return w}});var n=a(3905),r=Object.defineProperty,o=Object.defineProperties,s=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,u=(e,t,a)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,p=(e,t)=>{for(var a in t||(t={}))c.call(t,a)&&u(e,a,t[a]);if(i)for(var a of i(t))l.call(t,a)&&u(e,a,t[a]);return e};const d={id:"codegen",title:"Test Generator"},m=void 0,g={unversionedId:"codegen",id:"codegen",title:"Test Generator",description:"Playwright comes with the ability to generate tests out of the box and is a great way to quickly get started with testing. It will open two windows, a browser window where you interact with the website you wish to test and the Playwright Inspector window where you can record your tests, copy the tests, clear your tests as well as change the language of your tests.",source:"@site/docs/codegen.mdx",sourceDirName:".",slug:"/codegen",permalink:"/java/docs/next/codegen",draft:!1,tags:[],version:"current",frontMatter:{id:"codegen",title:"Test Generator"},sidebar:"docs",previous:{title:"Getting started",permalink:"/java/docs/next/intro"},next:{title:"Trace Viewer",permalink:"/java/docs/next/trace-viewer"}},h={},w=[{value:"Preserve authenticated state",id:"preserve-authenticated-state",level:2},{value:"Record using custom setup",id:"record-using-custom-setup",level:2},{value:"Emulate devices",id:"emulate-devices",level:2},{value:"Emulate color scheme and viewport size",id:"emulate-color-scheme-and-viewport-size",level:2},{value:"Emulate geolocation, language and timezone",id:"emulate-geolocation-language-and-timezone",level:2}],f={toc:w};function y(e){var t,a=e,{components:r}=a,u=((e,t)=>{var a={};for(var n in e)c.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&l.call(e,n)&&(a[n]=e[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(t=p(p({},f),u),o(t,s({components:r,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"Playwright comes with the ability to generate tests out of the box and is a great way to quickly get started with testing. It will open two windows, a browser window where you interact with the website you wish to test and the Playwright Inspector window where you can record your tests, copy the tests, clear your tests as well as change the language of your tests."),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-bash"}),'mvn exec:java -e -Dexec.mainClass=com.microsoft.playwright.CLI -Dexec.args="codegen playwright.dev"\n')),(0,n.kt)("p",null,"Run ",(0,n.kt)("inlineCode",{parentName:"p"},"codegen")," and perform actions in the browser. Playwright will generate the code for the user interactions. ",(0,n.kt)("inlineCode",{parentName:"p"},"codegen")," will attempt to generate resilient text-based selectors."),(0,n.kt)("img",{width:"1183",alt:"Screenshot 2022-07-30 at 00 19 06",src:"https://user-images.githubusercontent.com/13063165/181852815-971c10da-0b55-4e54-8a73-77e1e825193c.png"}),(0,n.kt)("h2",p({},{id:"preserve-authenticated-state"}),"Preserve authenticated state"),(0,n.kt)("p",null,"Run ",(0,n.kt)("inlineCode",{parentName:"p"},"codegen")," with ",(0,n.kt)("inlineCode",{parentName:"p"},"--save-storage")," to save ",(0,n.kt)("a",p({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies"}),"cookies")," and ",(0,n.kt)("a",p({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage"}),"localStorage")," at the end of the session. This is useful to separately record authentication step and reuse it later in the tests."),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-bash"}),'mvn exec:java -e -Dexec.mainClass=com.microsoft.playwright.CLI -Dexec.args="codegen  --save-storage=auth.json"\n# Perform authentication and exit.\n# auth.json will contain the storage state.\n')),(0,n.kt)("p",null,"Run with ",(0,n.kt)("inlineCode",{parentName:"p"},"--load-storage")," to consume previously loaded storage. This way, all ",(0,n.kt)("a",p({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies"}),"cookies")," and ",(0,n.kt)("a",p({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage"}),"localStorage")," will be restored, bringing most web apps to the authenticated state."),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-bash"}),'mvn exec:java -e -Dexec.mainClass=com.microsoft.playwright.CLI -Dexec.args="open --load-storage=auth.json my.web.app"\nmvn exec:java -e -Dexec.mainClass=com.microsoft.playwright.CLI -Dexec.args="codegen --load-storage=auth.json my.web.app"\n# Perform authentication and exit.\n# auth.json will contain the storage state.\n')),(0,n.kt)("h2",p({},{id:"record-using-custom-setup"}),"Record using custom setup"),(0,n.kt)("p",null,"If you would like to use codegen in some non-standard setup (for example, use ",(0,n.kt)("a",p({parentName:"p"},{href:"/java/docs/next/api/class-browsercontext#browser-context-route"}),"BrowserContext.route(url, handler[, options])"),"), it is possible to call ",(0,n.kt)("a",p({parentName:"p"},{href:"/java/docs/next/api/class-page#page-pause"}),"Page.pause()")," that will open a separate window with codegen controls."),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-java"}),'import com.microsoft.playwright.*;\n\npublic class Example {\n  public static void main(String[] args) {\n    try (Playwright playwright = Playwright.create()) {\n      BrowserType chromium = playwright.chromium();\n      // Make sure to run headed.\n      Browser browser = chromium.launch(new BrowserType.LaunchOptions().setHeadless(false));\n      // Setup context however you like.\n      BrowserContext context = browser.newContext(/* pass any options */);\n      context.route("**/*", route -> route.resume());\n      // Pause the page, and start recording manually.\n      Page page = context.newPage();\n      page.pause();\n    }\n  }\n}\n')),(0,n.kt)("h2",p({},{id:"emulate-devices"}),"Emulate devices"),(0,n.kt)("p",null,"You can record scripts and tests while emulating a device."),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-bash"}),"# Emulate iPhone 11.\nmvn exec:java -e -Dexec.mainClass=com.microsoft.playwright.CLI -Dexec.args='codegen --device=\"iPhone 11\" wikipedia.org'\n")),(0,n.kt)("h2",p({},{id:"emulate-color-scheme-and-viewport-size"}),"Emulate color scheme and viewport size"),(0,n.kt)("p",null,"You can also record scripts and tests while emulating various browser properties."),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-bash"}),'# Emulate screen size and color scheme.\nmvn exec:java -e -Dexec.mainClass=com.microsoft.playwright.CLI -Dexec.args="codegen --viewport-size=800,600 --color-scheme=dark twitter.com"\n')),(0,n.kt)("h2",p({},{id:"emulate-geolocation-language-and-timezone"}),"Emulate geolocation, language and timezone"),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-bash"}),'# Emulate timezone, language & location\n# Once page opens, click the "my location" button to see geolocation in action\nmvn exec:java -e -Dexec.mainClass=com.microsoft.playwright.CLI -Dexec.args=\'codegen --timezone="Europe/Rome" --geolocation="41.890221,12.492348" --lang="it-IT" maps.google.com\'\n')))}y.isMDXComponent=!0}}]);