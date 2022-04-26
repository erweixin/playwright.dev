"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[5909],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},23528:function(e,t,n){n.r(t),n.d(t,{assets:function(){return b},contentTitle:function(){return m},default:function(){return h},frontMatter:function(){return d},metadata:function(){return f},toc:function(){return y}});var r=n(3905),o=Object.defineProperty,i=Object.defineProperties,a=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t)=>{for(var n in t||(t={}))u.call(t,n)&&c(e,n,t[n]);if(l)for(var n of l(t))s.call(t,n)&&c(e,n,t[n]);return e};const d={id:"selenium-grid",title:"Selenium Grid"},m=void 0,f={unversionedId:"selenium-grid",id:"selenium-grid",title:"Selenium Grid",description:"Selenium 4",source:"@site/docs/selenium-grid.mdx",sourceDirName:".",slug:"/selenium-grid",permalink:"/dotnet/docs/next/selenium-grid",tags:[],version:"current",frontMatter:{id:"selenium-grid",title:"Selenium Grid"},sidebar:"docs",previous:{title:"Continuous Integration",permalink:"/dotnet/docs/next/ci"},next:{title:"Supported languages",permalink:"/dotnet/docs/next/languages"}},b={},y=[{value:"Selenium 4",id:"selenium-4",level:2},{value:"Selenium 3",id:"selenium-3",level:2}],g={toc:y};function h(e){var t,n=e,{components:o}=n,c=((e,t)=>{var n={};for(var r in e)u.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&s.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=p(p({},g),c),i(t,a({components:o,mdxType:"MDXLayout"}))),(0,r.kt)("h2",p({},{id:"selenium-4"}),"Selenium 4"),(0,r.kt)("p",null,"Playwright can connect to ",(0,r.kt)("a",p({parentName:"p"},{href:"https://www.selenium.dev/documentation/grid/"}),"Selenium Grid Hub")," that runs Selenium 4 to launch ",(0,r.kt)("strong",{parentName:"p"},"Chrome")," or ",(0,r.kt)("strong",{parentName:"p"},"Microsoft Edge")," browser, instead of running browser on the local machine. To enable this mode, set ",(0,r.kt)("inlineCode",{parentName:"p"},"SELENIUM_REMOTE_URL")," environment variable pointing to your Selenium Grid Hub."),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-bash"}),"SELENIUM_REMOTE_URL=http://internal.grid:4444/wd/hub dotnet test\n")),(0,r.kt)("p",null,"You don't have to change your code, just use ",(0,r.kt)("a",p({parentName:"p"},{href:"/dotnet/docs/next/api/class-browsertype#browser-type-launch"}),"BrowserType.LaunchAsync(options)")," as usual."),(0,r.kt)("p",null,"When using Selenium Grid Hub, you can ",(0,r.kt)("a",p({parentName:"p"},{href:"/dotnet/docs/next/browsers#skip-browser-downloads"}),"skip browser downloads"),"."),(0,r.kt)("p",null,"If your grid requires additional capabilities to be set (for example, you use an external service), you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"SELENIUM_REMOTE_CAPABILITIES")," environment variable to provide JSON-serialized capabilities."),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-bash"}),"SELENIUM_REMOTE_URL=http://internal.grid:4444/wd/hub SELENIUM_REMOTE_CAPABILITIES=\"{'mygrid:options':{os:'windows',username:'John',password:'secure'}}\" dotnet test\n")),(0,r.kt)("h2",p({},{id:"selenium-3"}),"Selenium 3"),(0,r.kt)("p",null,"Internally, Playwright connects to the browser using ",(0,r.kt)("a",p({parentName:"p"},{href:"https://chromedevtools.github.io/devtools-protocol/"}),"Chrome DevTools Protocol")," websocket. Selenium 4 hub exposes this capability, while Selenium 3 does not."),(0,r.kt)("p",null,"This means that Selenium 3 is supported in a best-effort manner, where Playwright tries to connect to the grid node directly. Grid nodes must be directly accessible from the machine that runs Playwright."))}h.isMDXComponent=!0}}]);