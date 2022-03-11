"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[9045],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(h,s(s({ref:t},p),{},{components:n})):r.createElement(h,s({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var c=2;c<i;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7614:function(e,t,n){n.r(t),n.d(t,{assets:function(){return g},contentTitle:function(){return m},default:function(){return w},frontMatter:function(){return d},metadata:function(){return h},toc:function(){return f}});var r=n(3905),a=Object.defineProperty,i=Object.defineProperties,s=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))l.call(t,n)&&p(e,n,t[n]);if(o)for(var n of o(t))c.call(t,n)&&p(e,n,t[n]);return e};const d={id:"intro",title:"Getting started"},m=void 0,h={unversionedId:"intro",id:"version-1.18/intro",title:"Getting started",description:"- First project",source:"@site/versioned_docs/version-1.18/intro.mdx",sourceDirName:".",slug:"/intro",permalink:"/dotnet/docs/1.18/intro",tags:[],version:"1.18",frontMatter:{id:"intro",title:"Getting started"},sidebar:"version-1.18/docs",next:{title:"Inspector",permalink:"/dotnet/docs/1.18/inspector"}},g={},f=[{value:"First project",id:"first-project",level:2},{value:"First test",id:"first-test",level:2},{value:"Record scripts",id:"record-scripts",level:2},{value:"System requirements",id:"system-requirements",level:2},{value:"Windows",id:"windows",level:3},{value:"macOS",id:"macos",level:3},{value:"Linux",id:"linux",level:3}],y={toc:f};function w(e){var t,n=e,{components:a}=n,p=((e,t)=>{var n={};for(var r in e)l.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&o)for(var r of o(e))t.indexOf(r)<0&&c.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=u(u({},y),p),i(t,s({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"#first-project"}),"First project")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"#first-test"}),"First test")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"#record-scripts"}),"Record scripts")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"#system-requirements"}),"System requirements")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"/dotnet/docs/1.18/release-notes"}),"Release notes"))),(0,r.kt)("h2",u({},{id:"first-project"}),"First project"),(0,r.kt)("p",null,"Create a console project and add the Playwright dependency."),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"# Create project\ndotnet new console -n PlaywrightDemo\ncd PlaywrightDemo\n\n# Add project dependency\ndotnet add package Microsoft.Playwright\n# Build the project\ndotnet build\n# Install required browsers\npwsh bin\\Debug\\netX\\playwright.ps1 install\n")),(0,r.kt)("p",null,"Create a ",(0,r.kt)("inlineCode",{parentName:"p"},"Program.cs")," that will navigate to ",(0,r.kt)("inlineCode",{parentName:"p"},"https://playwright.dev/dotnet")," and take a screenshot in Chromium."),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-csharp"}),'using Microsoft.Playwright;\nusing System.Threading.Tasks;\n\nclass Program\n{\n    public static async Task Main()\n    {\n        using var playwright = await Playwright.CreateAsync();\n        await using var browser = await playwright.Chromium.LaunchAsync();\n        var page = await browser.NewPageAsync();\n        await page.GotoAsync("https://playwright.dev/dotnet");\n        await page.ScreenshotAsync(new PageScreenshotOptions { Path = "screenshot.png" });\n    }\n}\n')),(0,r.kt)("p",null,"Now run it."),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"dotnet run\n")),(0,r.kt)("p",null,"By default, Playwright runs the browsers in headless mode. To see the browser UI, pass the ",(0,r.kt)("inlineCode",{parentName:"p"},"Headless = false")," flag while launching the browser. You can also use ",(0,r.kt)("inlineCode",{parentName:"p"},"slowMo")," to slow down execution. Learn more in the debugging tools ",(0,r.kt)("a",u({parentName:"p"},{href:"/dotnet/docs/1.18/debug"}),"section"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-csharp"}),"await playwright.Firefox.LaunchAsync(new BrowserTypeLaunchOptions \n{ \n    Headless = false, \n    SlowMo = 50, \n});\n")),(0,r.kt)("h2",u({},{id:"first-test"}),"First test"),(0,r.kt)("p",null,"You can choose to use NUnit test fixtures that come bundled with Playwright. These fixtures support running tests on multiple browser engines in parallel, out of the box. Learn more about ",(0,r.kt)("a",u({parentName:"p"},{href:"/dotnet/docs/1.18/test-runners"}),"Playwright with NUnit"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"# Create new project.\ndotnet new nunit -n PlaywrightTests\ncd PlaywrightTests\n")),(0,r.kt)("p",null,"Install dependencies, build project and download necessary browsers. This is only done once per project."),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"# Add project dependency\ndotnet add package Microsoft.Playwright.NUnit\n# Build the project\ndotnet build\n# Install required browsers\npwsh bin\\Debug\\netX\\playwright.ps1 install\n")),(0,r.kt)("p",null,"Edit UnitTest1.cs file."),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-csharp"}),'using System.Threading.Tasks;\nusing Microsoft.Playwright.NUnit;\nusing NUnit.Framework;\n\nnamespace PlaywrightTests\n{\n    [Parallelizable(ParallelScope.Self)]\n    public class Tests : PageTest\n    {\n        [Test]\n        public async Task ShouldAdd()\n        {\n            int result = await Page.EvaluateAsync<int>("() => 7 + 3");\n            Assert.AreEqual(10, result);\n        }\n\n        [Test]\n        public async Task ShouldMultiply()\n        {\n            int result = await Page.EvaluateAsync<int>("() => 7 * 3");\n            Assert.AreEqual(21, result);\n        }\n    }\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"dotnet test -- NUnit.NumberOfTestWorkers=5\n")),(0,r.kt)("h2",u({},{id:"record-scripts"}),"Record scripts"),(0,r.kt)("p",null,(0,r.kt)("a",u({parentName:"p"},{href:"/dotnet/docs/1.18/cli"}),"Command line tools")," can be used to record user interactions and generate C# code."),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"pwsh bin\\Debug\\netX\\playwright.ps1 codegen\n")),(0,r.kt)("h2",u({},{id:"system-requirements"}),"System requirements"),(0,r.kt)("p",null,"The browser binaries for Chromium, Firefox and WebKit work across the 3 platforms (Windows, macOS, Linux):"),(0,r.kt)("h3",u({},{id:"windows"}),"Windows"),(0,r.kt)("p",null,"Works with Windows and Windows Subsystem for Linux (WSL)."),(0,r.kt)("h3",u({},{id:"macos"}),"macOS"),(0,r.kt)("p",null,"Requires 10.14 (Mojave) or above."),(0,r.kt)("h3",u({},{id:"linux"}),"Linux"),(0,r.kt)("p",null,"Depending on your Linux distribution, you might need to install additional dependencies to run the browsers."),(0,r.kt)("div",u({},{className:"admonition admonition-note alert alert--secondary"}),(0,r.kt)("div",u({parentName:"div"},{className:"admonition-heading"}),(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",u({parentName:"h5"},{className:"admonition-icon"}),(0,r.kt)("svg",u({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),(0,r.kt)("path",u({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),(0,r.kt)("div",u({parentName:"div"},{className:"admonition-content"}),(0,r.kt)("p",{parentName:"div"},"Only Ubuntu 18.04 and Ubuntu 20.04 are officially supported."))),(0,r.kt)("p",null,"See also in the ",(0,r.kt)("a",u({parentName:"p"},{href:"/dotnet/docs/1.18/cli#install-system-dependencies"}),"Command line tools")," which has a command to install all necessary dependencies automatically for Ubuntu LTS releases."))}w.isMDXComponent=!0}}]);