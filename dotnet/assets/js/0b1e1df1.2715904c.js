"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[8201],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return d}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var c=a.createContext({}),l=function(t){var e=a.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},p=function(t){var e=l(t.components);return a.createElement(c.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},h=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,c=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),h=l(n),d=r,g=h["".concat(c,".").concat(d)]||h[d]||u[d]||i;return n?a.createElement(g,o(o({ref:e},p),{},{components:n})):a.createElement(g,o({ref:e},p))}));function d(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,o=new Array(i);o[0]=h;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=t,s.mdxType="string"==typeof t?t:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},9635:function(t,e,n){n.r(e),n.d(e,{assets:function(){return k},contentTitle:function(){return d},default:function(){return y},frontMatter:function(){return h},metadata:function(){return g},toc:function(){return m}});var a=n(3905),r=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,p=(t,e,n)=>e in t?r(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,u=(t,e)=>{for(var n in e||(e={}))c.call(e,n)&&p(t,n,e[n]);if(s)for(var n of s(e))l.call(e,n)&&p(t,n,e[n]);return t};const h={id:"class-tracing",title:"Tracing"},d=void 0,g={unversionedId:"api/class-tracing",id:"version-1.18/api/class-tracing",title:"Tracing",description:"API for collecting and saving Playwright traces. Playwright traces can be opened in Trace Viewer after Playwright script runs.",source:"@site/versioned_docs/version-1.18/api/class-tracing.mdx",sourceDirName:"api",slug:"/api/class-tracing",permalink:"/dotnet/docs/1.18/api/class-tracing",tags:[],version:"1.18",frontMatter:{id:"class-tracing",title:"Tracing"},sidebar:"version-1.18/api",previous:{title:"Touchscreen",permalink:"/dotnet/docs/1.18/api/class-touchscreen"},next:{title:"Video",permalink:"/dotnet/docs/1.18/api/class-video"}},k={},m=[{value:"Tracing.StartAsync(options)",id:"tracing-start",level:2},{value:"Tracing.StartChunkAsync(options)",id:"tracing-start-chunk",level:2},{value:"Tracing.StopAsync(options)",id:"tracing-stop",level:2},{value:"Tracing.StopChunkAsync(options)",id:"tracing-stop-chunk",level:2}],f={toc:m};function y(t){var e,n=t,{components:r}=n,p=((t,e)=>{var n={};for(var a in t)c.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(null!=t&&s)for(var a of s(t))e.indexOf(a)<0&&l.call(t,a)&&(n[a]=t[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(e=u(u({},f),p),i(e,o({components:r,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"API for collecting and saving Playwright traces. Playwright traces can be opened in ",(0,a.kt)("a",u({parentName:"p"},{href:"/dotnet/docs/1.18/trace-viewer"}),"Trace Viewer")," after Playwright script runs."),(0,a.kt)("p",null,"Start recording a trace before performing actions. At the end, stop tracing and save it to a file."),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-csharp"}),'await using var browser = playwright.Chromium.LaunchAsync();\nawait using var context = await browser.NewContextAsync();\nawait context.Tracing.StartAsync(new TracingStartOptions\n{\n  Screenshots: true,\n  Snapshots: true\n});\nvar page = context.NewPageAsync();\nawait page.GotoAsync("https://playwright.dev");\nawait context.Tracing.StopAsync(new TracingStopOptions\n{\n  Path: "trace.zip"\n});\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"/dotnet/docs/1.18/api/class-tracing#tracing-start"}),"Tracing.StartAsync(options)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"/dotnet/docs/1.18/api/class-tracing#tracing-start-chunk"}),"Tracing.StartChunkAsync(options)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"/dotnet/docs/1.18/api/class-tracing#tracing-stop"}),"Tracing.StopAsync(options)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"/dotnet/docs/1.18/api/class-tracing#tracing-stop-chunk"}),"Tracing.StopChunkAsync(options)"))),(0,a.kt)("h2",u({},{id:"tracing-start"}),"Tracing.StartAsync(options)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"options")," ","<",(0,a.kt)("inlineCode",{parentName:"li"},"TracingStartOptions?"),">",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Name"),(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"tracing-start-option-name"})," ","<",(0,a.kt)("a",u({parentName:"li"},{href:"https://docs.microsoft.com/en-us/dotnet/api/system.string",title:"string"}),"string"),"?",">"," If specified, the trace is going to be saved into the file with the given name inside the ",(0,a.kt)("inlineCode",{parentName:"li"},"tracesDir")," folder specified in ",(0,a.kt)("a",u({parentName:"li"},{href:"/dotnet/docs/1.18/api/class-browsertype#browser-type-launch"}),"BrowserType.LaunchAsync(options)"),".",(0,a.kt)("a",{href:"#tracing-start-option-name",class:"list-anchor"},"#")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Screenshots"),(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"tracing-start-option-screenshots"})," ","<",(0,a.kt)("a",u({parentName:"li"},{href:"https://docs.microsoft.com/en-us/dotnet/api/system.boolean",title:"bool"}),"bool"),"?",">"," Whether to capture screenshots during tracing. Screenshots are used to build a timeline preview.",(0,a.kt)("a",{href:"#tracing-start-option-screenshots",class:"list-anchor"},"#")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Snapshots"),(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"tracing-start-option-snapshots"})," ","<",(0,a.kt)("a",u({parentName:"li"},{href:"https://docs.microsoft.com/en-us/dotnet/api/system.boolean",title:"bool"}),"bool"),"?",">"," Whether to capture DOM snapshot on every action.",(0,a.kt)("a",{href:"#tracing-start-option-snapshots",class:"list-anchor"},"#")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Sources"),(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"tracing-start-option-sources"})," ","<",(0,a.kt)("a",u({parentName:"li"},{href:"https://docs.microsoft.com/en-us/dotnet/api/system.boolean",title:"bool"}),"bool"),"?",">"," Whether to include source files for trace actions.",(0,a.kt)("a",{href:"#tracing-start-option-sources",class:"list-anchor"},"#")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Title"),(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"tracing-start-option-title"})," ","<",(0,a.kt)("a",u({parentName:"li"},{href:"https://docs.microsoft.com/en-us/dotnet/api/system.string",title:"string"}),"string"),"?",">"," Trace name to be shown in the Trace Viewer.",(0,a.kt)("a",{href:"#tracing-start-option-title",class:"list-anchor"},"#")))),(0,a.kt)("li",{parentName:"ul"},"returns:",(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"tracing-start-return"})," ","<",(0,a.kt)("a",u({parentName:"li"},{href:"https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/void",title:"void"}),"void"),">",(0,a.kt)("a",{href:"#tracing-start-return",class:"list-anchor"},"#"))),(0,a.kt)("p",null,"Start tracing."),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-csharp"}),'await using var browser = playwright.Chromium.LaunchAsync();\nawait using var context = await browser.NewContextAsync();\nawait context.Tracing.StartAsync(new TracingStartOptions\n{\n  Screenshots: true,\n  Snapshots: true\n});\nvar page = context.NewPageAsync();\nawait page.GotoAsync("https://playwright.dev");\nawait context.Tracing.StopAsync(new TracingStopOptions\n{\n  Path: "trace.zip"\n});\n')),(0,a.kt)("h2",u({},{id:"tracing-start-chunk"}),"Tracing.StartChunkAsync(options)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"options")," ","<",(0,a.kt)("inlineCode",{parentName:"li"},"TracingStartChunkOptions?"),">",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Title"),(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"tracing-start-chunk-option-title"})," ","<",(0,a.kt)("a",u({parentName:"li"},{href:"https://docs.microsoft.com/en-us/dotnet/api/system.string",title:"string"}),"string"),"?",">"," Trace name to be shown in the Trace Viewer.",(0,a.kt)("a",{href:"#tracing-start-chunk-option-title",class:"list-anchor"},"#")))),(0,a.kt)("li",{parentName:"ul"},"returns:",(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"tracing-start-chunk-return"})," ","<",(0,a.kt)("a",u({parentName:"li"},{href:"https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/void",title:"void"}),"void"),">",(0,a.kt)("a",{href:"#tracing-start-chunk-return",class:"list-anchor"},"#"))),(0,a.kt)("p",null,"Start a new trace chunk. If you'd like to record multiple traces on the same ",(0,a.kt)("a",u({parentName:"p"},{href:"/dotnet/docs/1.18/api/class-browsercontext",title:"BrowserContext"}),"BrowserContext"),", use ",(0,a.kt)("a",u({parentName:"p"},{href:"/dotnet/docs/1.18/api/class-tracing#tracing-start"}),"Tracing.StartAsync(options)")," once, and then create multiple trace chunks with ",(0,a.kt)("a",u({parentName:"p"},{href:"/dotnet/docs/1.18/api/class-tracing#tracing-start-chunk"}),"Tracing.StartChunkAsync(options)")," and ",(0,a.kt)("a",u({parentName:"p"},{href:"/dotnet/docs/1.18/api/class-tracing#tracing-stop-chunk"}),"Tracing.StopChunkAsync(options)"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-csharp"}),'await using var browser = playwright.Chromium.LaunchAsync();\nawait using var context = await browser.NewContextAsync();\nawait context.Tracing.StartAsync(new TracingStartOptions\n{\n  Screenshots: true,\n  Snapshots: true\n});\nvar page = context.NewPageAsync();\nawait page.GotoAsync("https://playwright.dev");\n\nawait context.Tracing.StartChunkAsync();\nawait page.ClickAsync("text=Get Started");\n// Everything between StartChunkAsync and StopChunkAsync will be recorded in the trace.\nawait context.Tracing.StopChunkAsync(new TracingStopChunkOptions\n{\n  Path: "trace1.zip"\n});\n\nawait context.Tracing.StartChunkAsync();\nawait page.GotoAsync("http://example.com");\n// Save a second trace file with different actions.\nawait context.Tracing.StopChunkAsync(new TracingStopChunkOptions\n{\n  Path: "trace2.zip"\n});\n')),(0,a.kt)("h2",u({},{id:"tracing-stop"}),"Tracing.StopAsync(options)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"options")," ","<",(0,a.kt)("inlineCode",{parentName:"li"},"TracingStopOptions?"),">",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Path"),(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"tracing-stop-option-path"})," ","<",(0,a.kt)("a",u({parentName:"li"},{href:"https://docs.microsoft.com/en-us/dotnet/api/system.string",title:"string"}),"string"),"?",">"," Export trace into the file with the given path.",(0,a.kt)("a",{href:"#tracing-stop-option-path",class:"list-anchor"},"#")))),(0,a.kt)("li",{parentName:"ul"},"returns:",(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"tracing-stop-return"})," ","<",(0,a.kt)("a",u({parentName:"li"},{href:"https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/void",title:"void"}),"void"),">",(0,a.kt)("a",{href:"#tracing-stop-return",class:"list-anchor"},"#"))),(0,a.kt)("p",null,"Stop tracing."),(0,a.kt)("h2",u({},{id:"tracing-stop-chunk"}),"Tracing.StopChunkAsync(options)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"options")," ","<",(0,a.kt)("inlineCode",{parentName:"li"},"TracingStopChunkOptions?"),">",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Path"),(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"tracing-stop-chunk-option-path"})," ","<",(0,a.kt)("a",u({parentName:"li"},{href:"https://docs.microsoft.com/en-us/dotnet/api/system.string",title:"string"}),"string"),"?",">"," Export trace collected since the last ",(0,a.kt)("a",u({parentName:"li"},{href:"/dotnet/docs/1.18/api/class-tracing#tracing-start-chunk"}),"Tracing.StartChunkAsync(options)")," call into the file with the given path.",(0,a.kt)("a",{href:"#tracing-stop-chunk-option-path",class:"list-anchor"},"#")))),(0,a.kt)("li",{parentName:"ul"},"returns:",(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"tracing-stop-chunk-return"})," ","<",(0,a.kt)("a",u({parentName:"li"},{href:"https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/void",title:"void"}),"void"),">",(0,a.kt)("a",{href:"#tracing-stop-chunk-return",class:"list-anchor"},"#"))),(0,a.kt)("p",null,"Stop the trace chunk. See ",(0,a.kt)("a",u({parentName:"p"},{href:"/dotnet/docs/1.18/api/class-tracing#tracing-start-chunk"}),"Tracing.StartChunkAsync(options)")," for more details about multiple trace chunks."))}y.isMDXComponent=!0}}]);