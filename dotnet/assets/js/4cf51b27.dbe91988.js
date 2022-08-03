"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[9875],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),u=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,g=d["".concat(o,".").concat(m)]||d[m]||p[m]||l;return n?a.createElement(g,s(s({ref:t},c),{},{components:n})):a.createElement(g,s({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,s=new Array(l);s[0]=d;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var u=2;u<l;u++)s[u]=n[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4455:function(e,t,n){n.d(t,{Z:function(){return p}});var a=n(7294),r=n(6010),l="tabItem_Ymn6",s=Object.defineProperty,i=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;function p({children:e,hidden:t,className:n}){return a.createElement("div",((e,t)=>{for(var n in t||(t={}))o.call(t,n)&&c(e,n,t[n]);if(i)for(var n of i(t))u.call(t,n)&&c(e,n,t[n]);return e})({role:"tabpanel",className:(0,r.Z)(l,n)},{hidden:t}),e)}},5332:function(e,t,n){n.d(t,{Z:function(){return w}});var a=n(7294),r=n(6010),l=n(4939),s=n(2174),i=n(2107),o=n(8757),u="tabList__CuJ",c="tabItem_LNqP",p=Object.defineProperty,d=Object.defineProperties,m=Object.getOwnPropertyDescriptors,g=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,f=(e,t,n)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,y=(e,t)=>{for(var n in t||(t={}))b.call(t,n)&&f(e,n,t[n]);if(g)for(var n of g(t))h.call(t,n)&&f(e,n,t[n]);return e};function v(e){var t,n;const{lazy:l,block:p,defaultValue:g,values:b,groupId:h,className:f}=e,v=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),w=null!=b?b:v.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),k=(0,s.l)(w,((e,t)=>e.value===t.value));if(k.length>0)throw new Error(`Docusaurus error: Duplicate values "${k.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const T=null===g?g:null!=(n=null!=g?g:null==(t=v.find((e=>e.props.default)))?void 0:t.props.value)?n:v[0].props.value;if(null!==T&&!w.some((e=>e.value===T)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${T}" but none of its children has the corresponding value. Available values are: ${w.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:N,setTabGroupChoices:x}=(0,i.U)(),[P,O]=(0,a.useState)(T),E=[],{blockElementScrollPositionUntilNextRender:S}=(0,o.o5)();if(null!=h){const e=N[h];null!=e&&e!==P&&w.some((t=>t.value===e))&&O(e)}const j=e=>{const t=e.currentTarget,n=E.indexOf(t),a=w[n].value;a!==P&&(S(t),O(a),null!=h&&x(h,String(a)))},C=e=>{var t,n;let a=null;switch(e.key){case"ArrowRight":{const n=E.indexOf(e.currentTarget)+1;a=null!=(t=E[n])?t:E[0];break}case"ArrowLeft":{const t=E.indexOf(e.currentTarget)-1;a=null!=(n=E[t])?n:E[E.length-1];break}}null==a||a.focus()};return a.createElement("div",{className:(0,r.Z)("tabs-container",u)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":p},f)},w.map((({value:e,label:t,attributes:n})=>{return a.createElement("li",(l=y({role:"tab",tabIndex:P===e?0:-1,"aria-selected":P===e,key:e,ref:e=>E.push(e),onKeyDown:C,onFocus:j,onClick:j},n),s={className:(0,r.Z)("tabs__item",c,null==n?void 0:n.className,{"tabs__item--active":P===e})},d(l,m(s))),null!=t?t:e);var l,s}))),l?(0,a.cloneElement)(v.filter((e=>e.props.value===P))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==P})))))}function w(e){const t=(0,l.Z)();return a.createElement(v,y({key:String(t)},e))}},6590:function(e,t,n){n.r(t),n.d(t,{assets:function(){return f},contentTitle:function(){return b},default:function(){return w},frontMatter:function(){return g},metadata:function(){return h},toc:function(){return y}});var a=n(3905),r=n(5332),l=n(4455),s=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&d(e,n,t[n]);if(u)for(var n of u(t))p.call(t,n)&&d(e,n,t[n]);return e};const g={id:"intro",title:"Installation"},b=void 0,h={unversionedId:"intro",id:"version-stable/intro",title:"Installation",description:"Playwright was created specifically to accommodate the needs of end-to-end testing. Playwright supports all modern rendering engines including Chromium, WebKit, and Firefox. Test on Windows, Linux, and macOS, locally or on CI, headless or headed with native mobile emulation.",source:"@site/versioned_docs/version-stable/intro.mdx",sourceDirName:".",slug:"/intro",permalink:"/dotnet/docs/intro",draft:!1,tags:[],version:"stable",frontMatter:{id:"intro",title:"Installation"},sidebar:"docs",next:{title:"Writing Tests",permalink:"/dotnet/docs/writing-tests"}},f={},y=[{value:"Add Example Tests",id:"add-example-tests",level:2},{value:"Running the Example Tests",id:"running-the-example-tests",level:2},{value:"What&#39;s next",id:"whats-next",level:2}],v={toc:y};function w(e){var t,n=e,{components:s}=n,d=((e,t)=>{var n={};for(var a in e)c.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&u)for(var a of u(e))t.indexOf(a)<0&&p.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=m(m({},v),d),i(t,o({components:s,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"Playwright was created specifically to accommodate the needs of end-to-end testing. Playwright supports all modern rendering engines including Chromium, WebKit, and Firefox. Test on Windows, Linux, and macOS, locally or on CI, headless or headed with native mobile emulation."),(0,a.kt)("p",null,"You can choose to use ",(0,a.kt)("a",m({parentName:"p"},{href:"/dotnet/docs/test-runners#nunit"}),"NUnit base classes")," or ",(0,a.kt)("a",m({parentName:"p"},{href:"/dotnet/docs/test-runners#nunit"}),"MSTest base classes")," that Playwright provides to write end-to-end tests. These classes support running tests on multiple browser engines, parallelizing tests, adjusting launch/context options and getting a ",(0,a.kt)("a",m({parentName:"p"},{href:"/dotnet/docs/api/class-page",title:"Page"}),"Page"),"/",(0,a.kt)("a",m({parentName:"p"},{href:"/dotnet/docs/api/class-browsercontext",title:"BrowserContext"}),"BrowserContext")," instance per test out of the box. Alternatively you can use the ",(0,a.kt)("a",m({parentName:"p"},{href:"/dotnet/docs/library"}),"library")," to manually write the testing infrastructure."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Start by creating a new project with ",(0,a.kt)("inlineCode",{parentName:"li"},"dotnet new"),". This will create the ",(0,a.kt)("inlineCode",{parentName:"li"},"PlaywrightTests")," directory which includes a ",(0,a.kt)("inlineCode",{parentName:"li"},"UnitTest1.cs")," file:")),(0,a.kt)(r.Z,{defaultValue:"nunit",values:[{label:"NUnit",value:"nunit"},{label:"MSTest",value:"mstest"}],mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"nunit",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"dotnet new nunit -n PlaywrightTests\ncd PlaywrightTests\n"))),(0,a.kt)(l.Z,{value:"mstest",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"dotnet new mstest -n PlaywrightTests\ncd PlaywrightTests\n")))),(0,a.kt)("ol",m({},{start:2}),(0,a.kt)("li",{parentName:"ol"},"Install the necessary Playwright dependencies:")),(0,a.kt)(r.Z,{defaultValue:"nunit",values:[{label:"NUnit",value:"nunit"},{label:"MSTest",value:"mstest"}],mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"nunit",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"dotnet add package Microsoft.Playwright.NUnit\n"))),(0,a.kt)(l.Z,{value:"mstest",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"dotnet add package Microsoft.Playwright.MSTest\n")))),(0,a.kt)("ol",m({},{start:3}),(0,a.kt)("li",{parentName:"ol"},"Build the project so the ",(0,a.kt)("inlineCode",{parentName:"li"},"playwright.ps1")," is available inside the ",(0,a.kt)("inlineCode",{parentName:"li"},"bin")," directory:")),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"dotnet build\n")),(0,a.kt)("ol",m({},{start:4}),(0,a.kt)("li",{parentName:"ol"},"Install required browsers by replacing ",(0,a.kt)("inlineCode",{parentName:"li"},"netX")," with the actual output folder name, e.g. ",(0,a.kt)("inlineCode",{parentName:"li"},"net6.0"),":")),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"pwsh bin\\Debug\\netX\\playwright.ps1 install\n")),(0,a.kt)("h2",m({},{id:"add-example-tests"}),"Add Example Tests"),(0,a.kt)("p",null,"Edit the ",(0,a.kt)("inlineCode",{parentName:"p"},"UnitTest1.cs")," file with the code below to create an example end-to-end test:"),(0,a.kt)(r.Z,{defaultValue:"nunit",values:[{label:"NUnit",value:"nunit"},{label:"MSTest",value:"mstest"}],mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"nunit",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-csharp"}),'using System.Text.RegularExpressions;\nusing System.Threading.Tasks;\nusing Microsoft.Playwright.NUnit;\nusing NUnit.Framework;\n\nnamespace PlaywrightTests;\n\n[Parallelizable(ParallelScope.Self)]\npublic class Tests : PageTest\n{\n    [Test]\n    async public Task HomepageHasPlaywrightInTitleAndGetStartedLinkLinkingtoTheIntroPage()\n    {\n        await Page.GotoAsync("https://playwright.dev");\n\n        // Expect a title "to contain" a substring.\n        await Expect(Page).ToHaveTitleAsync(new Regex("Playwright"));\n\n        // create a locator\n        var getStarted = Page.Locator("text=Get Started");\n\n        // Expect an attribute "to be strictly equal" to the value.\n        await Expect(getStarted).ToHaveAttributeAsync("href", "/docs/intro");\n\n        // Click the get started link.\n        await getStarted.ClickAsync();\n\n        // Expects the URL to contain intro.\n        await Expect(Page).ToHaveURLAsync(new Regex(".*intro"));\n    }\n}\n'))),(0,a.kt)(l.Z,{value:"mstest",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-csharp"}),'using System.Text.RegularExpressions;\nusing Microsoft.Playwright.MSTest;\n\nnamespace PlaywrightTests;\n\npublic class UnitTest1 : PageTest\n{\n    [TestMethod]\n    async public Task HomepageHasPlaywrightInTitleAndGetStartedLinkLinkingtoTheIntroPage()\n    {\n        await Page.GotoAsync("https://playwright.dev");\n\n        // Expect a title "to contain" a substring.\n        await Expect(Page).ToHaveTitleAsync(new Regex("Playwright"));\n\n        // create a locator\n        var getStarted = Page.Locator("text=Get Started");\n\n        // Expect an attribute "to be strictly equal" to the value.\n        await Expect(getStarted).ToHaveAttributeAsync("href", "/docs/intro");\n\n        // Click the get started link.\n        await getStarted.ClickAsync();\n\n        // Expects the URL to contain intro.\n        await Expect(Page).ToHaveURLAsync(new Regex(".*intro"));\n    }\n}\n')))),(0,a.kt)("h2",m({},{id:"running-the-example-tests"}),"Running the Example Tests"),(0,a.kt)("p",null,"By default tests will be run on Chromium. This can be configured via the ",(0,a.kt)("inlineCode",{parentName:"p"},"BROWSER")," environment variable, or by adjusting the ",(0,a.kt)("a",m({parentName:"p"},{href:"/dotnet/docs/test-runners"}),"launch configuration options"),". Tests are run in headless mode meaning no browser will open up when running the tests. Results of the tests and test logs will be shown in the terminal."),(0,a.kt)(r.Z,{defaultValue:"nunit",values:[{label:"NUnit",value:"nunit"},{label:"MSTest",value:"mstest"}],mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"nunit",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"dotnet test -- NUnit.NumberOfTestWorkers=5\n"))),(0,a.kt)(l.Z,{value:"mstest",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"dotnet test -- MSTest.Parallelize.Workers=5\n")))),(0,a.kt)("p",null,"See our doc on ",(0,a.kt)("a",m({parentName:"p"},{href:"/dotnet/docs/test-runners"}),"Test Runners")," to learn more about running tests in headed mode, running multiple tests, running specific configurations etc."),(0,a.kt)("h2",m({},{id:"whats-next"}),"What's next"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"/dotnet/docs/writing-tests"}),"Write tests using web first assertions, page fixtures and locators")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"/dotnet/docs/running-tests"}),"Run single tests, multiple tests, headed mode")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"/dotnet/docs/test-runners"}),"Learn more about the NUnit and MSTest base classes")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"/dotnet/docs/debug"}),"Debug tests with the Playwright Debugger")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"/dotnet/docs/codegen"}),"Generate tests with Codegen")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"/dotnet/docs/trace-viewer"}),"See a trace of your tests")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"/dotnet/docs/library"}),"Using Playwright as library"))))}w.isMDXComponent=!0}}]);