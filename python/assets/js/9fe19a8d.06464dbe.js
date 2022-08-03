"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[8027],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,h=m["".concat(s,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8352:function(e,t,n){n.r(t),n.d(t,{assets:function(){return g},contentTitle:function(){return d},default:function(){return b},frontMatter:function(){return m},metadata:function(){return h},toc:function(){return f}});var r=n(3905),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&u(e,n,t[n]);if(l)for(var n of l(t))c.call(t,n)&&u(e,n,t[n]);return e};const m={id:"docker",title:"Docker"},d=void 0,h={unversionedId:"docker",id:"version-stable/docker",title:"Docker",description:"[Dockerfile.focal] can be used to run Playwright scripts in Docker environment. These image includes all the dependencies needed to run browsers in a Docker container, and also include the browsers themselves.",source:"@site/versioned_docs/version-stable/docker.mdx",sourceDirName:".",slug:"/docker",permalink:"/python/docs/docker",draft:!1,tags:[],version:"stable",frontMatter:{id:"docker",title:"Docker"},sidebar:"docs",previous:{title:"Videos",permalink:"/python/docs/videos"},next:{title:"Continuous Integration",permalink:"/python/docs/ci"}},g={},f=[{value:"Usage",id:"usage",level:2},{value:"Pull the image",id:"pull-the-image",level:3},{value:"Run the image",id:"run-the-image",level:3},{value:"End-to-end tests",id:"end-to-end-tests",level:4},{value:"Crawling and scraping",id:"crawling-and-scraping",level:4},{value:"Using on CI",id:"using-on-ci",level:3},{value:"Image tags",id:"image-tags",level:2},{value:"Base images",id:"base-images",level:3},{value:"Alpine",id:"alpine",level:4}],k={toc:f};function b(e){var t,n=e,{components:a}=n,u=((e,t)=>{var n={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&c.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=p(p({},k),u),o(t,i({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,(0,r.kt)("a",p({parentName:"p"},{href:"https://github.com/microsoft/playwright-python/blob/main/utils/docker/Dockerfile.focal",title:"Dockerfile.focal"}),"Dockerfile.focal")," can be used to run Playwright scripts in Docker environment. These image includes all the dependencies needed to run browsers in a Docker container, and also include the browsers themselves."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",p({parentName:"li"},{href:"#usage"}),"Usage")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",p({parentName:"li"},{href:"#image-tags"}),"Image tags"))),(0,r.kt)("h2",p({},{id:"usage"}),"Usage"),(0,r.kt)("p",null,"This image is published on ",(0,r.kt)("a",p({parentName:"p"},{href:"https://hub.docker.com/_/microsoft-playwright-python",title:"Docker Hub"}),"Docker Hub"),"."),(0,r.kt)("h3",p({},{id:"pull-the-image"}),"Pull the image"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-bash"}),"docker pull mcr.microsoft.com/playwright/python:v1.24.2-focal\n")),(0,r.kt)("h3",p({},{id:"run-the-image"}),"Run the image"),(0,r.kt)("p",null,"By default, the Docker image will use the ",(0,r.kt)("inlineCode",{parentName:"p"},"root")," user to run the browsers. This will disable the Chromium sandbox which is not available with root. If you run trusted code (e.g. End-to-end tests) and want to avoid the hassle of managing separate user then the root user may be fine. For web scraping or crawling, we recommend to create a separate user inside the Docker container and use the seccomp profile."),(0,r.kt)("h4",p({},{id:"end-to-end-tests"}),"End-to-end tests"),(0,r.kt)("p",null,"On trusted websites, you can avoid creating a separate user and use root for it since you trust the code which will run on the browsers."),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-bash"}),"docker run -it --rm --ipc=host mcr.microsoft.com/playwright/python:v1.24.2-focal /bin/bash\n")),(0,r.kt)("h4",p({},{id:"crawling-and-scraping"}),"Crawling and scraping"),(0,r.kt)("p",null,"On untrusted websites, it's recommended to use a separate user for launching the browsers in combination with the seccomp profile. Inside the container or if you are using the Docker image as a base image you have to use ",(0,r.kt)("inlineCode",{parentName:"p"},"adduser")," for it."),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-bash"}),"docker run -it --rm --ipc=host --user pwuser --security-opt seccomp=seccomp_profile.json mcr.microsoft.com/playwright/python:v1.24.2-focal /bin/bash\n")),(0,r.kt)("p",null,(0,r.kt)("a",p({parentName:"p"},{href:"https://github.com/microsoft/playwright/blob/main/utils/docker/seccomp_profile.json"}),(0,r.kt)("inlineCode",{parentName:"a"},"seccomp_profile.json"))," is needed to run Chromium with sandbox. This is a ",(0,r.kt)("a",p({parentName:"p"},{href:"https://github.com/docker/engine/blob/d0d99b04cf6e00ed3fc27e81fc3d94e7eda70af3/profiles/seccomp/default.json"}),"default Docker seccomp profile")," with extra user namespace cloning permissions:"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-json"}),'[\n  {\n    "comment": "Allow create user namespaces",\n    "names": [\n      "clone",\n      "setns",\n      "unshare"\n    ],\n    "action": "SCMP_ACT_ALLOW",\n    "args": [],\n    "includes": {},\n    "excludes": {}\n  }\n]\n')),(0,r.kt)("admonition",p({},{type:"note"}),(0,r.kt)("p",{parentName:"admonition"},"Using ",(0,r.kt)("inlineCode",{parentName:"p"},"--ipc=host")," is recommended when using Chrome (",(0,r.kt)("a",p({parentName:"p"},{href:"https://docs.docker.com/engine/reference/run/#ipc-settings---ipc"}),"Docker docs"),"). Chrome can run out of memory without this flag.")),(0,r.kt)("h3",p({},{id:"using-on-ci"}),"Using on CI"),(0,r.kt)("p",null,"See our ",(0,r.kt)("a",p({parentName:"p"},{href:"/python/docs/ci"}),"Continuous Integration guides")," for sample configs."),(0,r.kt)("h2",p({},{id:"image-tags"}),"Image tags"),(0,r.kt)("p",null,"See ",(0,r.kt)("a",p({parentName:"p"},{href:"https://mcr.microsoft.com/en-us/product/playwright/python/about",title:"all available image tags"}),"all available image tags"),"."),(0,r.kt)("p",null,"Docker images are published automatically by GitHub Actions. We currently publish images with the following tags (",(0,r.kt)("inlineCode",{parentName:"p"},"v1.20.0")," in this case is an example:):"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},":next")," - tip-of-tree image version based on Ubuntu 20.04 LTS (Focal Fossa)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},":next-focal")," - tip-of-tree image version based on Ubuntu 20.04 LTS (Focal Fossa)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},":v1.20.0")," - Playwright v1.20.0 release docker image based on Ubuntu 20.04 LTS (Focal Fossa)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},":v1.20.0-focal")," - Playwright v1.20.0 release docker image based on Ubuntu 20.04 LTS (Focal Fossa)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},":sha-XXXXXXX")," - docker image for every commit that changed docker files or browsers, marked with a ",(0,r.kt)("a",p({parentName:"li"},{href:"https://git-scm.com/book/en/v2/Git-Tools-Revision-Selection#Short-SHA-1"}),"short sha")," (first 7 digits of the SHA commit).")),(0,r.kt)("admonition",p({},{type:"note"}),(0,r.kt)("p",{parentName:"admonition"},"It is recommended to always pin your Docker image to a specific version if possible. If the Playwright version in your Docker image does not match the version in your project/tests, Playwright will be unable to locate browser executables.")),(0,r.kt)("h3",p({},{id:"base-images"}),"Base images"),(0,r.kt)("p",null,"We currently publish images based on the following ",(0,r.kt)("a",p({parentName:"p"},{href:"https://hub.docker.com/_/ubuntu"}),"Ubuntu")," versions:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Ubuntu 20.04 LTS")," (Focal Fossa), image tags include ",(0,r.kt)("inlineCode",{parentName:"li"},"focal")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Ubuntu 18.04 LTS")," (Bionic Beaver), image tags include ",(0,r.kt)("inlineCode",{parentName:"li"},"bionic")," (not published for Java and .NET)")),(0,r.kt)("h4",p({},{id:"alpine"}),"Alpine"),(0,r.kt)("p",null,"Browser builds for Firefox and WebKit are built for the ",(0,r.kt)("a",p({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Glibc"}),"glibc")," library. Alpine Linux and other distributions that are based on the ",(0,r.kt)("a",p({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Musl"}),"musl")," standard library are not supported."))}b.isMDXComponent=!0}}]);