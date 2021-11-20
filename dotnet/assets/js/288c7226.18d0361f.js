"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[1894],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(h,s(s({ref:t},c),{},{components:n})):r.createElement(h,s({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var u=2;u<i;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8215:function(e,t,n){var r=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},5064:function(e,t,n){n.d(t,{Z:function(){return p}});var r=n(7294),a=n(9443);var i=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},s=n(6010),o="tabItem_1uMI",l="tabItemActive_2DSg";var u=37,c=39;var p=function(e){var t=e.lazy,n=e.block,a=e.defaultValue,p=e.values,d=e.groupId,m=e.className,h=i(),g=h.tabGroupChoices,f=h.setTabGroupChoices,k=(0,r.useState)(a),y=k[0],b=k[1],w=r.Children.toArray(e.children),N=[];if(null!=d){var v=g[d];null!=v&&v!==y&&p.some((function(e){return e.value===v}))&&b(v)}var x=function(e){var t=e.currentTarget,n=N.indexOf(t),r=p[n].value;b(r),null!=d&&(f(d,r),setTimeout((function(){var e,n,r,a,i,s,o,u;(e=t.getBoundingClientRect(),n=e.top,r=e.left,a=e.bottom,i=e.right,s=window,o=s.innerHeight,u=s.innerWidth,n>=0&&i<=u&&a<=o&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((function(){return t.classList.remove(l)}),2e3))}),150))},T=function(e){var t,n;switch(e.keyCode){case c:var r=N.indexOf(e.target)+1;n=N[r]||N[0];break;case u:var a=N.indexOf(e.target)-1;n=N[a]||N[N.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":n},m)},p.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,className:(0,s.Z)("tabs__item",o,{"tabs__item--active":y===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:T,onFocus:x,onClick:x},n)}))),t?(0,r.cloneElement)(w.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},w.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==y})}))))}},9443:function(e,t,n){var r=(0,n(7294).createContext)(void 0);t.Z=r},4116:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return o},metadata:function(){return l},toc:function(){return u},default:function(){return p}});var r=n(2122),a=n(9756),i=(n(7294),n(3905)),s=(n(5064),n(8215),{id:"test-runners",title:"Test Runners"}),o=void 0,l={unversionedId:"test-runners",id:"version-1.16/test-runners",isDocsHomePage:!1,title:"Test Runners",description:"While Playwright for .NET isn't tied to a particular test runner or testing framework, in our experience it works best with the built-in .NET test runner, and using NUnit as the test framework. NUnit is also what we use internally for our tests.",source:"@site/versioned_docs/version-1.16/test-runners.mdx",sourceDirName:".",slug:"/test-runners",permalink:"/dotnet/docs/1.16/test-runners",version:"1.16",frontMatter:{id:"test-runners",title:"Test Runners"},sidebar:"version-1.16/docs",previous:{title:"Release notes",permalink:"/dotnet/docs/1.16/release-notes"},next:{title:"Auto-waiting",permalink:"/dotnet/docs/1.16/actionability"}},u=[{value:"Creating an NUnit project",id:"creating-an-nunit-project",children:[]},{value:"Running NUnit tests in Parallel",id:"running-nunit-tests-in-parallel",children:[]},{value:"Using Verbose API Logs with NUnit",id:"using-verbose-api-logs-with-nunit",children:[]},{value:"Using the .runsettings file",id:"using-the-runsettings-file",children:[]},{value:"Base NUnit classes for Playwright",id:"base-nunit-classes-for-playwright",children:[]},{value:"xUnit support",id:"xunit-support",children:[]}],c={toc:u};function p(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"While Playwright for .NET isn't tied to a particular test runner or testing framework, in our experience it works best with the built-in .NET test runner, and using NUnit as the test framework. NUnit is also what we use internally for ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/microsoft/playwright-dotnet/tree/main/src/Playwright.Tests"},"our tests"),"."),(0,i.kt)("p",null,"Playwright and Browser instances can be reused between tests for better performance. We recommend running each test case in a new BrowserContext, this way browser state will be isolated between the tests."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#creating-an-nunit-project"},"Creating an NUnit project")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#running-nunit-tests-in-parallel"},"Running NUnit tests in Parallel")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#using-verbose-api-logs-with-nunit"},"Using Verbose API Logs with NUnit")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#using-the-runsettings-file"},"Using the .runsettings file")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#base-nunit-classes-for-playwright"},"Base NUnit classes for Playwright")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#xunit-support"},"xUnit support"))),(0,i.kt)("h2",{id:"creating-an-nunit-project"},"Creating an NUnit project"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# Create a new project\ndotnet new nunit -n PlaywrightTests\ncd PlaywrightTests\n# Add the required reference\ndotnet add package Microsoft.Playwright.NUnit\ndotnet build\n# Install the required pre-requisites\nplaywright install\n")),(0,i.kt)("p",null,"Create a PageTests.cs file."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'using System;\nusing System.Threading.Tasks;\nusing Microsoft.Playwright.NUnit;\nusing NUnit.Framework;\n\nnamespace PlaywrightTests\n{\n    [Parallelizable(ParallelScope.Self)]\n    public class MyTest : PageTest\n    {\n        [Test]\n        public async Task ShouldAdd()\n        {\n            int result = await Page.EvaluateAsync<int>("() => 7 + 3");\n            Assert.AreEqual(10, result);\n        }\n\n        [Test]\n        public async Task ShouldMultiply()\n        {\n            int result = await Page.EvaluateAsync<int>("() => 7 * 3");\n            Assert.AreEqual(21, result);\n        }\n    }\n}\n')),(0,i.kt)("p",null,"Run your tests against Chromium"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"dotnet test\n")),(0,i.kt)("p",null,"Run your tests against WebKit"),(0,i.kt)("p",null,"Windows"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"set BROWSER=webkit\ndotnet test\n")),(0,i.kt)("p",null,"Linux & Mac"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"BROWSER=webkit dotnet test\n")),(0,i.kt)("p",null,"Run your tests with GUI"),(0,i.kt)("p",null,"Window"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"set HEADED=1\ndotnet test\n")),(0,i.kt)("p",null,"Linux & Mac"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"HEADED=1 dotnet test\n")),(0,i.kt)("p",null,"You can also choose specifically which tests to run, using the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/dotnet/core/testing/selective-unit-tests?pivots=nunit"},"filtering capabilities"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'dotnet test --filter "Name~ShouldAdd"\n')),(0,i.kt)("h2",{id:"running-nunit-tests-in-parallel"},"Running NUnit tests in Parallel"),(0,i.kt)("p",null,"By default NUnit will run all test files in parallel, while running tests inside each file sequentially. It will create as many processes as there are cores on the host system. You can adjust this behavior using the NUnit.NumberOfTestWorkers parameter."),(0,i.kt)("p",null,"For CPU-bound tests, we recommend using as many workers as there are cores on your system, divided by 2. For IO-bound tests you can use as many workers as you have cores."),(0,i.kt)("h2",{id:"using-verbose-api-logs-with-nunit"},"Using Verbose API Logs with NUnit"),(0,i.kt)("p",null,"When you have enabled the ",(0,i.kt)("a",{parentName:"p",href:"/dotnet/docs/1.16/debug#verbose-api-logs"},"verbose API log"),", via the ",(0,i.kt)("inlineCode",{parentName:"p"},"DEBUG")," environment variable, you will see the messages in the standard error stream. In NUnit, within Visual Studio, that will be the ",(0,i.kt)("inlineCode",{parentName:"p"},"Tests")," pane of the ",(0,i.kt)("inlineCode",{parentName:"p"},"Output")," window. It will also be displayed in the ",(0,i.kt)("inlineCode",{parentName:"p"},"Test Log")," for each test."),(0,i.kt)("h2",{id:"using-the-runsettings-file"},"Using the .runsettings file"),(0,i.kt)("p",null,"When running tests from Visual Studio, you can take advantage of the ",(0,i.kt)("inlineCode",{parentName:"p"},".runsettings")," file."),(0,i.kt)("p",null,"For example, to specify the amount of workers (",(0,i.kt)("inlineCode",{parentName:"p"},"NUnit.NumberOfTestWorkers"),"), you can use the following snippet:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="utf-8"?>\n<RunSettings>\n  <NUnit>\n    <NumberOfTestWorkers>24</NumberOfTestWorkers>\n  </NUnit>\n</RunSettings>\n')),(0,i.kt)("p",null,"If you want to enable debugging, you can set the ",(0,i.kt)("inlineCode",{parentName:"p"},"DEBUG")," variable to ",(0,i.kt)("inlineCode",{parentName:"p"},"pw:api")," as documented, by doing:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="utf-8"?>\n<RunSettings>\n  <RunConfiguration>\n    <EnvironmentVariables>\n      <DEBUG>pw:api</DEBUG>\n    </EnvironmentVariables>\n  </RunConfiguration>\n</RunSettings>\n')),(0,i.kt)("h2",{id:"base-nunit-classes-for-playwright"},"Base NUnit classes for Playwright"),(0,i.kt)("p",null,"There are few base classes available to you in Microsoft.Playwright.NUnit namespace:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Test"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"PageTest"),(0,i.kt)("td",{parentName:"tr",align:null},"Each test gets a fresh copy of a web ",(0,i.kt)("a",{parentName:"td",href:"/dotnet/docs/1.16/api/class-page",title:"Page"},"Page")," created in its own unique ",(0,i.kt)("a",{parentName:"td",href:"/dotnet/docs/1.16/api/class-browsercontext",title:"BrowserContext"},"BrowserContext"),". Extending this class is the simplest way of writing a fully-functional Playwright test.",(0,i.kt)("br",null),(0,i.kt)("br",null),"Note: You can override the ",(0,i.kt)("inlineCode",{parentName:"td"},"ContextOptions")," method in each test file to control context options, the ones typically passed into the ",(0,i.kt)("a",{parentName:"td",href:"/dotnet/docs/1.16/api/class-browser#browser-new-context"},"Browser.NewContextAsync(options)")," method. That way you can specify all kinds of emulation options for your test file individually.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ContextTest"),(0,i.kt)("td",{parentName:"tr",align:null},"Each test will get a fresh copy of a ",(0,i.kt)("a",{parentName:"td",href:"/dotnet/docs/1.16/api/class-browsercontext",title:"BrowserContext"},"BrowserContext"),". You can create as many pages in this context as you'd like. Using this test is the easiest way to test multi-page scenarios where you need more than one tab.",(0,i.kt)("br",null),(0,i.kt)("br",null),"Note: You can override the ",(0,i.kt)("inlineCode",{parentName:"td"},"ContextOptions")," method in each test file to control context options, the ones typically passed into the ",(0,i.kt)("a",{parentName:"td",href:"/dotnet/docs/1.16/api/class-browser#browser-new-context"},"Browser.NewContextAsync(options)")," method. That way you can specify all kinds of emulation options for your test file individually.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"BrowserTest"),(0,i.kt)("td",{parentName:"tr",align:null},"Each test will get a browser and can create as many contexts as it likes. Each test is responsible for cleaning up all the contexts it created.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"PlaywrightTest"),(0,i.kt)("td",{parentName:"tr",align:null},"This gives each test a Playwright object so that the test could start and stop as many browsers as it likes.")))),(0,i.kt)("h2",{id:"xunit-support"},"xUnit support"),(0,i.kt)("p",null,"While using xUnit is also supported, we do not support running parallel tests. This is a well known problem/design limitation outlined by the maintainers across ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/xunit/xunit/issues/2003"},"several")," ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/xunit/xunit/issues/2111#issuecomment-650004247"},"issues"),"."))}p.isMDXComponent=!0},6010:function(e,t,n){function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:function(){return a}})}}]);