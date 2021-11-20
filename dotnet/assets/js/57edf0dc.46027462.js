"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[9618],{3905:function(e,a,t){t.d(a,{Zo:function(){return p},kt:function(){return u}});var n=t(7294);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function r(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,i=function(e,a){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=n.createContext({}),c=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):r(r({},a),e)),t},p=function(e){var a=c(e.components);return n.createElement(s.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},g=n.forwardRef((function(e,a){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),g=c(t),u=i,m=g["".concat(s,".").concat(u)]||g[u]||d[u]||o;return t?n.createElement(m,r(r({ref:a},p),{},{components:t})):n.createElement(m,r({ref:a},p))}));function u(e,a){var t=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var o=t.length,r=new Array(o);r[0]=g;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var c=2;c<o;c++)r[c]=t[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},8215:function(e,a,t){var n=t(7294);a.Z=function(e){var a=e.children,t=e.hidden,i=e.className;return n.createElement("div",{role:"tabpanel",hidden:t,className:i},a)}},5064:function(e,a,t){t.d(a,{Z:function(){return d}});var n=t(7294),i=t(9443);var o=function(){var e=(0,n.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},r=t(6010),l="tabItem_1uMI",s="tabItemActive_2DSg";var c=37,p=39;var d=function(e){var a=e.lazy,t=e.block,i=e.defaultValue,d=e.values,g=e.groupId,u=e.className,m=o(),f=m.tabGroupChoices,k=m.setTabGroupChoices,h=(0,n.useState)(i),v=h[0],w=h[1],y=n.Children.toArray(e.children),N=[];if(null!=g){var b=f[g];null!=b&&b!==v&&d.some((function(e){return e.value===b}))&&w(b)}var A=function(e){var a=e.currentTarget,t=N.indexOf(a),n=d[t].value;w(n),null!=g&&(k(g,n),setTimeout((function(){var e,t,n,i,o,r,l,c;(e=a.getBoundingClientRect(),t=e.top,n=e.left,i=e.bottom,o=e.right,r=window,l=r.innerHeight,c=r.innerWidth,t>=0&&o<=c&&i<=l&&n>=0)||(a.scrollIntoView({block:"center",behavior:"smooth"}),a.classList.add(s),setTimeout((function(){return a.classList.remove(s)}),2e3))}),150))},P=function(e){var a,t;switch(e.keyCode){case p:var n=N.indexOf(e.target)+1;t=N[n]||N[0];break;case c:var i=N.indexOf(e.target)-1;t=N[i]||N[N.length-1]}null==(a=t)||a.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},u)},d.map((function(e){var a=e.value,t=e.label;return n.createElement("li",{role:"tab",tabIndex:v===a?0:-1,"aria-selected":v===a,className:(0,r.Z)("tabs__item",l,{"tabs__item--active":v===a}),key:a,ref:function(e){return N.push(e)},onKeyDown:P,onFocus:A,onClick:A},t)}))),a?(0,n.cloneElement)(y.filter((function(e){return e.props.value===v}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},y.map((function(e,a){return(0,n.cloneElement)(e,{key:a,hidden:e.props.value!==v})}))))}},9443:function(e,a,t){var n=(0,t(7294).createContext)(void 0);a.Z=n},4853:function(e,a,t){t.r(a),t.d(a,{frontMatter:function(){return r},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return c},default:function(){return d}});var n=t(2122),i=t(9756),o=(t(7294),t(3905)),r=(t(5064),t(8215),{id:"navigations",title:"Navigations"}),l=void 0,s={unversionedId:"navigations",id:"version-1.16/navigations",isDocsHomePage:!1,title:"Navigations",description:"Playwright can navigate to URLs and handle navigations caused by page interactions. This guide covers common scenarios to wait for page navigations and loading to complete.",source:"@site/versioned_docs/version-1.16/navigations.mdx",sourceDirName:".",slug:"/navigations",permalink:"/dotnet/docs/1.16/navigations",version:"1.16",frontMatter:{id:"navigations",title:"Navigations"},sidebar:"version-1.16/docs",previous:{title:"Multi-page scenarios",permalink:"/dotnet/docs/1.16/multi-pages"},next:{title:"Network",permalink:"/dotnet/docs/1.16/network"}},c=[{value:"Navigation lifecycle",id:"navigation-lifecycle",children:[]},{value:"Scenarios initiated by browser UI",id:"scenarios-initiated-by-browser-ui",children:[{value:"Auto-wait",id:"auto-wait",children:[]},{value:"Custom wait",id:"custom-wait",children:[]},{value:"Wait for element",id:"wait-for-element",children:[]},{value:"API reference",id:"api-reference",children:[]}]},{value:"Scenarios initiated by page interaction",id:"scenarios-initiated-by-page-interaction",children:[{value:"Auto-wait",id:"auto-wait-1",children:[]},{value:"Custom wait",id:"custom-wait-1",children:[]},{value:"Wait for element",id:"wait-for-element-1",children:[]},{value:"Asynchronous navigation",id:"asynchronous-navigation",children:[]},{value:"Multiple navigations",id:"multiple-navigations",children:[]},{value:"Loading a popup",id:"loading-a-popup",children:[]},{value:"API reference",id:"api-reference-1",children:[]}]},{value:"Advanced patterns",id:"advanced-patterns",children:[{value:"API reference",id:"api-reference-2",children:[]}]}],p={toc:c};function d(e){var a=e.components,t=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Playwright can navigate to URLs and handle navigations caused by page interactions. This guide covers common scenarios to wait for page navigations and loading to complete."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#navigation-lifecycle"},"Navigation lifecycle")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#scenarios-initiated-by-browser-ui"},"Scenarios initiated by browser UI")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#scenarios-initiated-by-page-interaction"},"Scenarios initiated by page interaction")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#advanced-patterns"},"Advanced patterns"))),(0,o.kt)("h2",{id:"navigation-lifecycle"},"Navigation lifecycle"),(0,o.kt)("p",null,"Playwright splits the process of showing a new document in a page into ",(0,o.kt)("strong",{parentName:"p"},"navigation")," and ",(0,o.kt)("strong",{parentName:"p"},"loading"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Navigations")," can be initiated by changing the page URL or by interacting with the page (e.g., clicking a link). Navigation ends when response headers have been parsed and session history is updated. The navigation intent may be canceled, for example, on hitting an unresolved DNS address or transformed into a file download. Only after the navigation succeeds, page starts ",(0,o.kt)("strong",{parentName:"p"},"loading")," the document."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Loading")," covers getting the remaining response body over the network, parsing, executing the scripts and firing load events:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/dotnet/docs/1.16/api/class-page#page-url"},"Page.Url")," is set to the new url"),(0,o.kt)("li",{parentName:"ul"},"document content is loaded over network and parsed"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/dotnet/docs/1.16/api/class-page#page-event-dom-content-loaded"},"event Page.DOMContentLoaded")," event is fired"),(0,o.kt)("li",{parentName:"ul"},"page executes some scripts and loads resources like stylesheets and images"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/dotnet/docs/1.16/api/class-page#page-event-load"},"event Page.Load")," event is fired"),(0,o.kt)("li",{parentName:"ul"},"page executes dynamically loaded scripts"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"networkidle")," is fired when no new network requests are made for 500 ms")),(0,o.kt)("h2",{id:"scenarios-initiated-by-browser-ui"},"Scenarios initiated by browser UI"),(0,o.kt)("p",null,"Navigations can be initiated by changing the URL bar, reloading the page or going back or forward in session history."),(0,o.kt)("h3",{id:"auto-wait"},"Auto-wait"),(0,o.kt)("p",null,"Navigating to a URL auto-waits for the page to fire the ",(0,o.kt)("inlineCode",{parentName:"p"},"load")," event. If the page does a client-side redirect before ",(0,o.kt)("inlineCode",{parentName:"p"},"load"),", ",(0,o.kt)("a",{parentName:"p",href:"/dotnet/docs/1.16/api/class-page#page-goto"},"Page.GotoAsync(url, options)")," will auto-wait for the redirected page to fire the ",(0,o.kt)("inlineCode",{parentName:"p"},"load")," event."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'// Navigate the page\nawait page.GotoAsync("https://example.com");\n')),(0,o.kt)("h3",{id:"custom-wait"},"Custom wait"),(0,o.kt)("p",null,"Override the default behavior to wait until a specific event, like ",(0,o.kt)("inlineCode",{parentName:"p"},"networkidle"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'// Navigate and wait until network is idle\nawait page.GotoAsync("https://example.com", new PageGotoOptions { WaitUntil = WaitUntilState.NetworkIdle });\n')),(0,o.kt)("h3",{id:"wait-for-element"},"Wait for element"),(0,o.kt)("p",null,"In lazy-loaded pages, it can be useful to wait until an element is visible with ",(0,o.kt)("a",{parentName:"p",href:"/dotnet/docs/1.16/api/class-page#page-wait-for-selector"},"Page.WaitForSelectorAsync(selector, options)"),". Alternatively, page interactions like ",(0,o.kt)("a",{parentName:"p",href:"/dotnet/docs/1.16/api/class-page#page-click"},"Page.ClickAsync(selector, options)")," auto-wait for elements."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'// Navigate and wait for element\nawait page.GotoAsync("https://example.com");\nawait page.WaitForSelectorAsync("text=Example Domain");\n\n// Navigate and click element\n// Click will auto-wait for the element\nawait page.GotoAsync("https://example.com");\nawait page.ClickAsync("text=Example Domain");\n')),(0,o.kt)("h3",{id:"api-reference"},"API reference"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/dotnet/docs/1.16/api/class-page#page-goto"},"Page.GotoAsync(url, options)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/dotnet/docs/1.16/api/class-page#page-reload"},"Page.ReloadAsync(options)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/dotnet/docs/1.16/api/class-page#page-go-back"},"Page.GoBackAsync(options)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/dotnet/docs/1.16/api/class-page#page-go-forward"},"Page.GoForwardAsync(options)"))),(0,o.kt)("h2",{id:"scenarios-initiated-by-page-interaction"},"Scenarios initiated by page interaction"),(0,o.kt)("p",null,"In the scenarios below, ",(0,o.kt)("a",{parentName:"p",href:"/dotnet/docs/1.16/api/class-page#page-click"},"Page.ClickAsync(selector, options)")," initiates a navigation and then waits for the navigation to complete."),(0,o.kt)("h3",{id:"auto-wait-1"},"Auto-wait"),(0,o.kt)("p",null,"By default, ",(0,o.kt)("a",{parentName:"p",href:"/dotnet/docs/1.16/api/class-page#page-click"},"Page.ClickAsync(selector, options)")," will wait for the navigation step to complete. This can be combined with a page interaction on the navigated page which would auto-wait for an element."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'// Click will auto-wait for navigation to complete\nawait page.ClickAsync("text=Login");\n\n// Fill will auto-wait for element on navigated page\nawait page.FillAsync("#username", "John Doe");\n')),(0,o.kt)("h3",{id:"custom-wait-1"},"Custom wait"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"page.click")," can be combined with ",(0,o.kt)("a",{parentName:"p",href:"/dotnet/docs/1.16/api/class-page#page-wait-for-load-state"},"Page.WaitForLoadStateAsync(state, options)")," to wait for a loading event."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'await page.ClickAsync("button"); // Click triggers navigation\nawait page.WaitForLoadStateAsync(LoadState.NetworkIdle); // This resolves after "networkidle"\n')),(0,o.kt)("h3",{id:"wait-for-element-1"},"Wait for element"),(0,o.kt)("p",null,"In lazy-loaded pages, it can be useful to wait until an element is visible with ",(0,o.kt)("a",{parentName:"p",href:"/dotnet/docs/1.16/api/class-page#page-wait-for-selector"},"Page.WaitForSelectorAsync(selector, options)"),". Alternatively, page interactions like ",(0,o.kt)("a",{parentName:"p",href:"/dotnet/docs/1.16/api/class-page#page-click"},"Page.ClickAsync(selector, options)")," auto-wait for elements."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'// Click will auto-wait for the element and trigger navigation\nawait page.ClickAsync("text=Login");\n// Wait for the element\nawait page.WaitForSelectorAsync("#username");\n\n// Click triggers navigation\nawait page.ClickAsync("text=Login");\n// Fill will auto-wait for element\nawait page.FillAsync("#username", "John Doe");\n')),(0,o.kt)("h3",{id:"asynchronous-navigation"},"Asynchronous navigation"),(0,o.kt)("p",null,"Clicking an element could trigger asynchronous processing before initiating the navigation. In these cases, it is recommended to explicitly call ",(0,o.kt)("a",{parentName:"p",href:"/dotnet/docs/1.16/api/class-page#page-wait-for-navigation"},"Page.RunAndWaitForNavigationAsync(action, options)"),". For example:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Navigation is triggered from a ",(0,o.kt)("inlineCode",{parentName:"li"},"setTimeout")),(0,o.kt)("li",{parentName:"ul"},"Page waits for network requests before navigation")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'// Using waitForNavigation with a callback prevents a race condition\n// between clicking and waiting for a navigation.\nawait page.RunAndWaitForNavigationAsync(async () =>\n{\n    // Triggers a navigation after a timeout\n    await page.ClickAsync("div.delayed-navigation");\n});\n')),(0,o.kt)("h3",{id:"multiple-navigations"},"Multiple navigations"),(0,o.kt)("p",null,"Clicking an element could trigger multiple navigations. In these cases, it is recommended to explicitly ",(0,o.kt)("a",{parentName:"p",href:"/dotnet/docs/1.16/api/class-page#page-wait-for-navigation"},"Page.RunAndWaitForNavigationAsync(action, options)")," to a specific url. For example:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Client-side redirects issued after the ",(0,o.kt)("inlineCode",{parentName:"li"},"load")," event"),(0,o.kt)("li",{parentName:"ul"},"Multiple pushes to history state")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'// Running action in the callback of waitForNavigation prevents a race\n// condition between clicking and waiting for a navigation.\nawait page.RunAndWaitForNavigationAsync(async () =>\n{\n    // Triggers a navigation with a script redirect.\n    await page.ClickAsync("a");\n}, new PageWaitForNavigationOptions\n{\n    UrlString = "**/login"\n});\n')),(0,o.kt)("h3",{id:"loading-a-popup"},"Loading a popup"),(0,o.kt)("p",null,"When popup is opened, explicitly calling ",(0,o.kt)("a",{parentName:"p",href:"/dotnet/docs/1.16/api/class-page#page-wait-for-load-state"},"Page.WaitForLoadStateAsync(state, options)")," ensures that popup is loaded to the desired state."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},"var popup = await page.RunAndWaitForPopupAsync(async () =>\n{\n    await page.ClickAsync(\"a[target='_blank']\"); // Opens popup\n});\npopup.WaitForLoadStateAsync(LoadState.Load);\n")),(0,o.kt)("h3",{id:"api-reference-1"},"API reference"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/dotnet/docs/1.16/api/class-page#page-click"},"Page.ClickAsync(selector, options)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/dotnet/docs/1.16/api/class-page#page-wait-for-load-state"},"Page.WaitForLoadStateAsync(state, options)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/dotnet/docs/1.16/api/class-page#page-wait-for-selector"},"Page.WaitForSelectorAsync(selector, options)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/dotnet/docs/1.16/api/class-page#page-wait-for-navigation"},"Page.RunAndWaitForNavigationAsync(action, options)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/dotnet/docs/1.16/api/class-page#page-wait-for-function"},"Page.WaitForFunctionAsync(expression, arg, options)"))),(0,o.kt)("h2",{id:"advanced-patterns"},"Advanced patterns"),(0,o.kt)("p",null,"For pages that have complicated loading patterns, ",(0,o.kt)("a",{parentName:"p",href:"/dotnet/docs/1.16/api/class-page#page-wait-for-function"},"Page.WaitForFunctionAsync(expression, arg, options)")," is a powerful and extensible approach to define a custom wait criteria."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'await page.GotoAsync("http://example.com");\nawait page.WaitForFunctionAsync("() => window.amILoadedYet()");\n// Ready to take a screenshot, according to the page itself.\nawait page.ScreenshotAsync();\n')),(0,o.kt)("h3",{id:"api-reference-2"},"API reference"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/dotnet/docs/1.16/api/class-page#page-wait-for-function"},"Page.WaitForFunctionAsync(expression, arg, options)"))))}d.isMDXComponent=!0},6010:function(e,a,t){function n(e){var a,t,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(a=0;a<e.length;a++)e[a]&&(t=n(e[a]))&&(i&&(i+=" "),i+=t);else for(a in e)e[a]&&(i&&(i+=" "),i+=a);return i}function i(){for(var e,a,t=0,i="";t<arguments.length;)(e=arguments[t++])&&(a=n(e))&&(i&&(i+=" "),i+=a);return i}t.d(a,{Z:function(){return i}})}}]);