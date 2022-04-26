"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[8550],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return g}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),f=l(r),g=o,m=f["".concat(c,".").concat(g)]||f[g]||p[g]||i;return r?n.createElement(m,a(a({ref:t},s),{},{components:r})):n.createElement(m,a({ref:t},s))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:o,a[1]=u;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},38415:function(e,t,r){r.r(t),r.d(t,{assets:function(){return h},contentTitle:function(){return g},default:function(){return d},frontMatter:function(){return f},metadata:function(){return m},toc:function(){return y}});var n=r(3905),o=Object.defineProperty,i=Object.defineProperties,a=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,s=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,p=(e,t)=>{for(var r in t||(t={}))c.call(t,r)&&s(e,r,t[r]);if(u)for(var r of u(t))l.call(t,r)&&s(e,r,t[r]);return e};const f={slug:"heisenbug-introducing-playwright-test-runner",title:"Heisenbug 2021: Introducing Playwright test runner",author:"Andrey Lushnikov",author_title:"Playwright team",author_url:"https://twitter.com/aslushnikov",author_image_url:"https://avatars.githubusercontent.com/u/746130?v=4",tags:["conference"]},g=void 0,m={permalink:"/dotnet/blog/heisenbug-introducing-playwright-test-runner",editUrl:"https://github.com/microsoft/playwright.dev/edit/master/blog/2021-10-19-heisenbug-introducing-playwright-test-runner.md",source:"@site/blog/2021-10-19-heisenbug-introducing-playwright-test-runner.md",title:"Heisenbug 2021: Introducing Playwright test runner",description:"",date:"2021-10-19T00:00:00.000Z",formattedDate:"October 19, 2021",tags:[{label:"conference",permalink:"/dotnet/blog/tags/conference"}],readingTime:.075,truncated:!1,authors:[{name:"Andrey Lushnikov",title:"Playwright team",url:"https://twitter.com/aslushnikov",imageURL:"https://avatars.githubusercontent.com/u/746130?v=4"}],frontMatter:{slug:"heisenbug-introducing-playwright-test-runner",title:"Heisenbug 2021: Introducing Playwright test runner",author:"Andrey Lushnikov",author_title:"Playwright team",author_url:"https://twitter.com/aslushnikov",author_image_url:"https://avatars.githubusercontent.com/u/746130?v=4",tags:["conference"]},prevItem:{title:"What's new in Playwright v1.16",permalink:"/dotnet/blog/whats-new-in-playwright-1-16"},nextItem:{title:"Four Futuristic Features",permalink:"/dotnet/blog/applitools-four-futuristic-features"}},h={authorsImageUrls:[void 0]},y=[],b={toc:y};function d(e){var t,r=e,{components:o}=r,s=((e,t)=>{var r={};for(var n in e)c.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&u)for(var n of u(e))t.indexOf(n)<0&&l.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=p(p({},b),s),i(t,a({components:o,mdxType:"MDXLayout"}))),(0,n.kt)("div",{className:"embed-youtube"},(0,n.kt)("iframe",{src:"https://www.youtube-nocookie.com/embed/JjhY2aFBTTk",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",width:"750",height:"563",allowFullScreen:!0})))}d.isMDXComponent=!0}}]);