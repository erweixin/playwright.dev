"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[3206],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,v=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return n?a.createElement(v,i(i({ref:t},p),{},{components:n})):a.createElement(v,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},73811:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(67294),r=Object.defineProperty,o=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;function c({children:e,hidden:t,className:n}){return a.createElement("div",((e,t)=>{for(var n in t||(t={}))i.call(t,n)&&s(e,n,t[n]);if(o)for(var n of o(t))l.call(t,n)&&s(e,n,t[n]);return e})({role:"tabpanel"},{hidden:t,className:n}),e)}},73824:function(e,t,n){n.d(t,{Z:function(){return h}});var a=n(67294),r=n(54939),o=n(39670),i=n(86010),l="tabItem_LplD",s=Object.defineProperty,c=Object.defineProperties,p=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,v=(e,t,n)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,f=(e,t)=>{for(var n in t||(t={}))m.call(t,n)&&v(e,n,t[n]);if(u)for(var n of u(t))d.call(t,n)&&v(e,n,t[n]);return e};function g(e){var t,n,r;const{lazy:s,block:u,defaultValue:m,values:d,groupId:v,className:g}=e,h=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=null!=d?d:h.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),y=(0,o.lx)(b,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const w=null===m?m:null!=(r=null!=m?m:null==(t=h.find((e=>e.props.default)))?void 0:t.props.value)?r:null==(n=h[0])?void 0:n.props.value;if(null!==w&&!b.some((e=>e.value===w)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${w}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:x}=(0,o.UB)(),[O,N]=(0,a.useState)(w),j=[],{blockElementScrollPositionUntilNextRender:P}=(0,o.o5)();if(null!=v){const e=k[v];null!=e&&e!==O&&b.some((t=>t.value===e))&&N(e)}const T=e=>{const t=e.currentTarget,n=j.indexOf(t),a=b[n].value;a!==O&&(P(t),N(a),null!=v&&x(v,a))},E=e=>{let t=null;switch(e.key){case"ArrowRight":{const n=j.indexOf(e.currentTarget)+1;t=j[n]||j[0];break}case"ArrowLeft":{const n=j.indexOf(e.currentTarget)-1;t=j[n]||j[j.length-1];break}}null==t||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":u},g)},b.map((({value:e,label:t,attributes:n})=>{return a.createElement("li",(r=f({role:"tab",tabIndex:O===e?0:-1,"aria-selected":O===e,key:e,ref:e=>j.push(e),onKeyDown:E,onFocus:T,onClick:T},n),o={className:(0,i.Z)("tabs__item",l,null==n?void 0:n.className,{"tabs__item--active":O===e})},c(r,p(o))),null!=t?t:e);var r,o}))),s?(0,a.cloneElement)(h.filter((e=>e.props.value===O))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},h.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}function h(e){const t=(0,r.Z)();return a.createElement(g,f({key:String(t)},e))}},86379:function(e,t,n){n.r(t),n.d(t,{assets:function(){return h},contentTitle:function(){return f},default:function(){return w},frontMatter:function(){return v},metadata:function(){return g},toc:function(){return b}});var a=n(3905),r=n(73824),o=n(73811),i=Object.defineProperty,l=Object.defineProperties,s=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&m(e,n,t[n]);if(c)for(var n of c(t))u.call(t,n)&&m(e,n,t[n]);return e};const v={id:"intro",title:"Getting started"},f=void 0,g={unversionedId:"intro",id:"intro",title:"Getting started",description:"- Installation",source:"@site/docs/intro.mdx",sourceDirName:".",slug:"/intro",permalink:"/java/docs/next/intro",tags:[],version:"current",frontMatter:{id:"intro",title:"Getting started"},sidebar:"docs",next:{title:"Inspector",permalink:"/java/docs/next/inspector"}},h={},b=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"First script",id:"first-script",level:2},{value:"Record scripts",id:"record-scripts",level:2},{value:"System requirements",id:"system-requirements",level:2},{value:"Windows",id:"windows",level:3},{value:"macOS",id:"macos",level:3},{value:"Linux",id:"linux",level:3}],y={toc:b};function w(e){var t,n=e,{components:i}=n,m=((e,t)=>{var n={};for(var a in e)p.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&c)for(var a of c(e))t.indexOf(a)<0&&u.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=d(d({},y),m),l(t,s({components:i,mdxType:"MDXLayout"}))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",d({parentName:"li"},{href:"#installation"}),"Installation")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",d({parentName:"li"},{href:"#usage"}),"Usage")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",d({parentName:"li"},{href:"#first-script"}),"First script")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",d({parentName:"li"},{href:"#record-scripts"}),"Record scripts")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",d({parentName:"li"},{href:"#system-requirements"}),"System requirements")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",d({parentName:"li"},{href:"/java/docs/next/release-notes"}),"Release notes"))),(0,a.kt)("h2",d({},{id:"installation"}),"Installation"),(0,a.kt)("p",null,"Playwright is distributed as a set of ",(0,a.kt)("a",d({parentName:"p"},{href:"https://maven.apache.org/what-is-maven.html"}),"Maven")," modules. The easiest way to use it is to add one dependency to your project's ",(0,a.kt)("inlineCode",{parentName:"p"},"pom.xml")," as described below. If you're not familiar with Maven please refer to its ",(0,a.kt)("a",d({parentName:"p"},{href:"https://maven.apache.org/guides/getting-started/maven-in-five-minutes.html"}),"documentation"),"."),(0,a.kt)("h2",d({},{id:"usage"}),"Usage"),(0,a.kt)(r.Z,{defaultValue:"java",values:[{label:"Example.java",value:"java"},{label:"pom.xml",value:"pom"}],mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"java",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-java"}),'package org.example;\n\nimport com.microsoft.playwright.*;\n\npublic class Example {\n  public static void main(String[] args) {\n    try (Playwright playwright = Playwright.create()) {\n      Browser browser = playwright.chromium().launch();\n      Page page = browser.newPage();\n      page.navigate("http://playwright.dev");\n      System.out.println(page.title());\n    }\n  }\n}\n'))),(0,a.kt)(o.Z,{value:"pom",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-xml"}),'<?xml version="1.0" encoding="UTF-8"?>\n<project xmlns="http://maven.apache.org/POM/4.0.0"\n         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">\n  <modelVersion>4.0.0</modelVersion>\n\n  <groupId>org.example</groupId>\n  <artifactId>examples</artifactId>\n  <version>0.1-SNAPSHOT</version>\n  <name>Playwright Client Examples</name>\n  <properties>\n    <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>\n  </properties>\n  <dependencies>\n    <dependency>\n      <groupId>com.microsoft.playwright</groupId>\n      <artifactId>playwright</artifactId>\n      <version>1.17.1</version>\n    </dependency>\n  </dependencies>\n  <build>\n    <plugins>\n      <plugin>\n        <groupId>org.apache.maven.plugins</groupId>\n        <artifactId>maven-compiler-plugin</artifactId>\n        <version>3.1</version>\n        <configuration>\n          <source>1.8</source>\n          <target>1.8</target>\n        </configuration>\n      </plugin>\n    </plugins>\n  </build>\n</project>\n')))),(0,a.kt)("p",null,"With the Example.java and pom.xml above, compile and execute your new program as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-bash"}),'mvn compile exec:java -Dexec.mainClass="org.example.Example"\n')),(0,a.kt)("p",null,"Running it downloads the Playwright package and installs browser binaries for Chromium, Firefox and WebKit. To modify this behavior see ",(0,a.kt)("a",d({parentName:"p"},{href:"/java/docs/next/browsers#installing-browsers"}),"installation parameters"),"."),(0,a.kt)("h2",d({},{id:"first-script"}),"First script"),(0,a.kt)("p",null,"In our first script, we will navigate to ",(0,a.kt)("inlineCode",{parentName:"p"},"whatsmyuseragent.org")," and take a screenshot in WebKit."),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-java"}),'import com.microsoft.playwright.*;\nimport java.nio.file.Paths;\n\npublic class WebKitScreenshot {\n  public static void main(String[] args) {\n    try (Playwright playwright = Playwright.create()) {\n      Browser browser = playwright.webkit().launch();\n      Page page = browser.newPage();\n      page.navigate("http://whatsmyuseragent.org/");\n      page.screenshot(new Page.ScreenshotOptions().setPath(Paths.get("example.png")));\n    }\n  }\n}\n')),(0,a.kt)("p",null,"By default, Playwright runs the browsers in headless mode. To see the browser UI, pass the ",(0,a.kt)("inlineCode",{parentName:"p"},"headless=false")," flag while launching the browser. You can also use ",(0,a.kt)("inlineCode",{parentName:"p"},"slowMo")," to slow down execution. Learn more in the debugging tools ",(0,a.kt)("a",d({parentName:"p"},{href:"/java/docs/next/debug"}),"section"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-java"}),"playwright.firefox().launch(new BrowserType.LaunchOptions().setHeadless(false).setSlowMo(50));\n")),(0,a.kt)("h2",d({},{id:"record-scripts"}),"Record scripts"),(0,a.kt)("p",null,(0,a.kt)("a",d({parentName:"p"},{href:"/java/docs/next/cli"}),"Command line tools")," can be used to record user interactions and generate Java code."),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-bash"}),'mvn exec:java -e -Dexec.mainClass=com.microsoft.playwright.CLI -Dexec.args="codegen wikipedia.org"\n')),(0,a.kt)("h2",d({},{id:"system-requirements"}),"System requirements"),(0,a.kt)("p",null,"Playwright requires ",(0,a.kt)("strong",{parentName:"p"},"Java 8")," or newer. The browser binaries for Chromium, Firefox and WebKit work across the 3 platforms (Windows, macOS, Linux):"),(0,a.kt)("h3",d({},{id:"windows"}),"Windows"),(0,a.kt)("p",null,"Works with Windows and Windows Subsystem for Linux (WSL)."),(0,a.kt)("h3",d({},{id:"macos"}),"macOS"),(0,a.kt)("p",null,"Requires 10.14 (Mojave) or above."),(0,a.kt)("h3",d({},{id:"linux"}),"Linux"),(0,a.kt)("p",null,"Depending on your Linux distribution, you might need to install additional dependencies to run the browsers."),(0,a.kt)("div",d({},{className:"admonition admonition-note alert alert--secondary"}),(0,a.kt)("div",d({parentName:"div"},{className:"admonition-heading"}),(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",d({parentName:"h5"},{className:"admonition-icon"}),(0,a.kt)("svg",d({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),(0,a.kt)("path",d({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),(0,a.kt)("div",d({parentName:"div"},{className:"admonition-content"}),(0,a.kt)("p",{parentName:"div"},"Only Ubuntu 18.04 and Ubuntu 20.04 are officially supported."))),(0,a.kt)("p",null,"See also in the ",(0,a.kt)("a",d({parentName:"p"},{href:"/java/docs/next/cli#install-system-dependencies"}),"Command line tools")," which has a command to install all necessary dependencies automatically for Ubuntu LTS releases."))}w.isMDXComponent=!0}}]);