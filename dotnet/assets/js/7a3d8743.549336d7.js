"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[440],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return d}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),p=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=p(a),d=n,b=h["".concat(i,".").concat(d)]||h[d]||c[d]||l;return a?r.createElement(b,o(o({ref:t},u),{},{components:a})):r.createElement(b,o({ref:t},u))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=h;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var p=2;p<l;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},73811:function(e,t,a){a.d(t,{Z:function(){return p}});var r=a(67294),n=Object.defineProperty,l=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,i=(e,t,a)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;function p({children:e,hidden:t,className:a}){return r.createElement("div",((e,t)=>{for(var a in t||(t={}))o.call(t,a)&&i(e,a,t[a]);if(l)for(var a of l(t))s.call(t,a)&&i(e,a,t[a]);return e})({role:"tabpanel"},{hidden:t,className:a}),e)}},73824:function(e,t,a){a.d(t,{Z:function(){return g}});var r=a(67294),n=a(54939),l=a(39670),o=a(86010),s="tabItem_LplD",i=Object.defineProperty,p=Object.defineProperties,u=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,b=(e,t,a)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,m=(e,t)=>{for(var a in t||(t={}))h.call(t,a)&&b(e,a,t[a]);if(c)for(var a of c(t))d.call(t,a)&&b(e,a,t[a]);return e};function w(e){var t,a,n;const{lazy:i,block:c,defaultValue:h,values:d,groupId:b,className:w}=e,g=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=null!=d?d:g.map((({props:{value:e,label:t,attributes:a}})=>({value:e,label:t,attributes:a}))),v=(0,l.lx)(f,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const k=null===h?h:null!=(n=null!=h?h:null==(t=g.find((e=>e.props.default)))?void 0:t.props.value)?n:null==(a=g[0])?void 0:a.props.value;if(null!==k&&!f.some((e=>e.value===k)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${k}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:N}=(0,l.UB)(),[O,T]=(0,r.useState)(k),P=[],{blockElementScrollPositionUntilNextRender:I}=(0,l.o5)();if(null!=b){const e=y[b];null!=e&&e!==O&&f.some((t=>t.value===e))&&T(e)}const S=e=>{const t=e.currentTarget,a=P.indexOf(t),r=f[a].value;r!==O&&(I(t),T(r),null!=b&&N(b,r))},D=e=>{let t=null;switch(e.key){case"ArrowRight":{const a=P.indexOf(e.currentTarget)+1;t=P[a]||P[0];break}case"ArrowLeft":{const a=P.indexOf(e.currentTarget)-1;t=P[a]||P[P.length-1];break}}null==t||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":c},w)},f.map((({value:e,label:t,attributes:a})=>{return r.createElement("li",(n=m({role:"tab",tabIndex:O===e?0:-1,"aria-selected":O===e,key:e,ref:e=>P.push(e),onKeyDown:D,onFocus:S,onClick:S},a),l={className:(0,o.Z)("tabs__item",s,null==a?void 0:a.className,{"tabs__item--active":O===e})},p(n,u(l))),null!=t?t:e);var n,l}))),i?(0,r.cloneElement)(g.filter((e=>e.props.value===O))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},g.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}function g(e){const t=(0,n.Z)();return r.createElement(w,m({key:String(t)},e))}},5642:function(e,t,a){a.r(t),a.d(t,{assets:function(){return g},contentTitle:function(){return m},default:function(){return k},frontMatter:function(){return b},metadata:function(){return w},toc:function(){return f}});var r=a(3905),n=a(73824),l=a(73811),o=Object.defineProperty,s=Object.defineProperties,i=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,h=(e,t,a)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,d=(e,t)=>{for(var a in t||(t={}))u.call(t,a)&&h(e,a,t[a]);if(p)for(var a of p(t))c.call(t,a)&&h(e,a,t[a]);return e};const b={id:"browsers",title:"Browsers"},m=void 0,w={unversionedId:"browsers",id:"version-1.19/browsers",title:"Browsers",description:"Each version of Playwright needs specific versions of browser binaries to operate. Depending on the language you use, Playwright will either download these browsers at package install time for you, or you will need to use Playwright CLI to install these browsers.",source:"@site/versioned_docs/version-1.19/browsers.mdx",sourceDirName:".",slug:"/browsers",permalink:"/dotnet/docs/1.19/browsers",tags:[],version:"1.19",frontMatter:{id:"browsers",title:"Browsers"},sidebar:"version-1.19/docs",previous:{title:"Authentication",permalink:"/dotnet/docs/1.19/auth"},next:{title:"Browser Contexts",permalink:"/dotnet/docs/1.19/browser-contexts"}},g={},f=[{value:"Chromium",id:"chromium",level:2},{value:"Firefox",id:"firefox",level:2},{value:"WebKit",id:"webkit",level:2},{value:"Google Chrome &amp; Microsoft Edge",id:"google-chrome--microsoft-edge",level:2},{value:"When to use Google Chrome &amp; Microsoft Edge and when not to?",id:"when-to-use-google-chrome--microsoft-edge-and-when-not-to",level:3},{value:"Installing browsers",id:"installing-browsers",level:2},{value:"Prerequisites for .NET",id:"prerequisites-for-net",level:3},{value:"Managing browser binaries",id:"managing-browser-binaries",level:2},{value:"Install behind a firewall or a proxy",id:"install-behind-a-firewall-or-a-proxy",level:2},{value:"Download from artifact repository",id:"download-from-artifact-repository",level:2},{value:"Skip browser downloads",id:"skip-browser-downloads",level:2},{value:"Stale browser removal",id:"stale-browser-removal",level:2}],v={toc:f};function k(e){var t,a=e,{components:o}=a,h=((e,t)=>{var a={};for(var r in e)u.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&p)for(var r of p(e))t.indexOf(r)<0&&c.call(e,r)&&(a[r]=e[r]);return a})(a,["components"]);return(0,r.kt)("wrapper",(t=d(d({},v),h),s(t,i({components:o,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"Each version of Playwright needs specific versions of browser binaries to operate. Depending on the language you use, Playwright will either download these browsers at package install time for you, or you will need to use ",(0,r.kt)("a",d({parentName:"p"},{href:"/dotnet/docs/1.19/cli"}),"Playwright CLI")," to install these browsers."),(0,r.kt)("p",null,"With every release, Playwright updates the versions of the browsers it supports, so that the latest Playwright would support the latest browsers at any moment. It means that every time you update playwright, you might need to re-run the ",(0,r.kt)("inlineCode",{parentName:"p"},"install")," CLI command."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",d({parentName:"li"},{href:"#chromium"}),"Chromium")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",d({parentName:"li"},{href:"#firefox"}),"Firefox")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",d({parentName:"li"},{href:"#webkit"}),"WebKit")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",d({parentName:"li"},{href:"#google-chrome--microsoft-edge"}),"Google Chrome & Microsoft Edge")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",d({parentName:"li"},{href:"#installing-browsers"}),"Installing browsers")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",d({parentName:"li"},{href:"#managing-browser-binaries"}),"Managing browser binaries")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",d({parentName:"li"},{href:"#install-behind-a-firewall-or-a-proxy"}),"Install behind a firewall or a proxy")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",d({parentName:"li"},{href:"#download-from-artifact-repository"}),"Download from artifact repository")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",d({parentName:"li"},{href:"#skip-browser-downloads"}),"Skip browser downloads")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",d({parentName:"li"},{href:"#stale-browser-removal"}),"Stale browser removal"))),(0,r.kt)("h2",d({},{id:"chromium"}),"Chromium"),(0,r.kt)("p",null,"For Google Chrome, Microsoft Edge and other Chromium-based browsers, by default, Playwright uses open source Chromium builds. Since Chromium project is ahead of the branded browsers, when the world is on Google Chrome N, Playwright already supports Chromium N+1 that will be released in Google Chrome and Microsoft Edge in a few weeks."),(0,r.kt)("p",null,"There is also a way to opt into using Google Chrome's or Microsoft Edge's branded builds for testing. For details on when to opt into stable channels, refer to the ",(0,r.kt)("a",d({parentName:"p"},{href:"#google-chrome--microsoft-edge"}),"Google Chrome & Microsoft Edge")," section below."),(0,r.kt)("h2",d({},{id:"firefox"}),"Firefox"),(0,r.kt)("p",null,"Playwright's Firefox version matches the recent ",(0,r.kt)("a",d({parentName:"p"},{href:"https://www.mozilla.org/en-US/firefox/new/"}),"Firefox Stable")," build."),(0,r.kt)("h2",d({},{id:"webkit"}),"WebKit"),(0,r.kt)("p",null,"Playwright's WebKit version matches the recent WebKit trunk build, before it is used in Apple Safari and other WebKit-based browsers. This gives a lot of lead time to react on the potential browser update issues."),(0,r.kt)("h2",d({},{id:"google-chrome--microsoft-edge"}),"Google Chrome & Microsoft Edge"),(0,r.kt)("p",null,"While Playwright can download and use the recent Chromium build, it can operate against the stock Google Chrome and Microsoft Edge browsers available on the machine. In particular, current Playwright version will support Stable and Beta channels of these browsers. Here is how you can opt into using the stock browser:"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-csharp"}),'using Microsoft.Playwright;\nusing System.Threading.Tasks;\n\nclass Program\n{\n    public static async Task Main()\n    {\n        using var playwright = await Playwright.CreateAsync();\n        var chromium = playwright.Chromium;\n        // Can be "msedge", "chrome-beta", "msedge-beta", "msedge-dev", etc.\n        var browser = await chromium.LaunchAsync(new BrowserTypeLaunchOptions { Channel = "chrome" });\n    }\n}\n')),(0,r.kt)("h3",d({},{id:"when-to-use-google-chrome--microsoft-edge-and-when-not-to"}),"When to use Google Chrome & Microsoft Edge and when not to?"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Defaults")),(0,r.kt)("p",null,"Using default Playwright configuration with the latest Chromium is a good idea most of the time. Since Playwright is ahead of Stable channels for the browsers, it gives peace of mind that the upcoming Google Chrome or Microsoft Edge releases won't break your site. You catch breakage early and have a lot of time to fix it before the official Chrome update."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Regression testing")),(0,r.kt)("p",null,"Having said that, testing policies often require regression testing to be performed against the current publicly available browsers. In this case, you can opt into one of the stable channels, ",(0,r.kt)("inlineCode",{parentName:"p"},'"chrome"')," or ",(0,r.kt)("inlineCode",{parentName:"p"},'"msedge"'),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Media codecs")),(0,r.kt)("p",null,"Another reason for testing using official binaries is to test functionality related to media codecs. Chromium does not have all the codecs that Google Chrome or Microsoft Edge are bundling due to various licensing considerations and agreements. If your site relies on this kind of codecs (which is rarely the case), you also want to use official channel."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Enterprise policy")),(0,r.kt)("p",null,"Google Chrome and Microsoft Edge respect enterprise policies, which include limitations to the capabilities, network proxy, mandatory extensions that stand in the way of testing. So if you are a part of the organization that uses such policies, it is the easiest to use bundled Chromium for your local testing, you can still opt into stable channels on the bots that are typically free of such restrictions."),(0,r.kt)("h2",d({},{id:"installing-browsers"}),"Installing browsers"),(0,r.kt)("h3",d({},{id:"prerequisites-for-net"}),"Prerequisites for .NET"),(0,r.kt)("p",null,"To invoke Playwright CLI commands, you need to invoke a PowerShell script:"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"pwsh bin\\Debug\\netX\\playwright.ps1 --help\n")),(0,r.kt)("p",null,"Playwright can install supported browsers by means of the CLI tool."),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"# Running without arguments will install all browsers\npwsh bin\\Debug\\netX\\playwright.ps1 install\n")),(0,r.kt)("p",null,"You can also install specific browsers by providing an argument:"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"# Install WebKit\npwsh bin\\Debug\\netX\\playwright.ps1 install webkit\n")),(0,r.kt)("p",null,"See all supported browsers:"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"pwsh bin\\Debug\\netX\\playwright.ps1 install --help\n")),(0,r.kt)("h2",d({},{id:"managing-browser-binaries"}),"Managing browser binaries"),(0,r.kt)("p",null,"Playwright downloads Chromium, WebKit and Firefox browsers into the OS-specific cache folders:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"%USERPROFILE%\\AppData\\Local\\ms-playwright")," on Windows"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"~/Library/Caches/ms-playwright")," on MacOS"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"~/.cache/ms-playwright")," on Linux")),(0,r.kt)("p",null,"These browsers will take a few hundred megabytes of disk space when installed:"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"du -hs ~/Library/Caches/ms-playwright/*\n281M  chromium-XXXXXX\n187M  firefox-XXXX\n180M  webkit-XXXX\n")),(0,r.kt)("p",null,"You can override default behavior using environment variables. When installing Playwright, ask it to download browsers into a specific location:"),(0,r.kt)(n.Z,{groupId:"bash-flavor",defaultValue:"bash",values:[{label:"Bash",value:"bash"},{label:"PowerShell",value:"powershell"},{label:"Batch",value:"batch"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"bash",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"PLAYWRIGHT_BROWSERS_PATH=$HOME/pw-browsers \npwsh bin\\Debug\\netX\\playwright.ps1 install\n"))),(0,r.kt)(l.Z,{value:"powershell",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-powershell"}),'$env:PLAYWRIGHT_BROWSERS_PATH="$env:USERPROFILE\\pw-browsers"\npwsh bin\\Debug\\netX\\playwright.ps1 install\n'))),(0,r.kt)(l.Z,{value:"batch",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-batch"}),"set PLAYWRIGHT_BROWSERS_PATH=%USERPROFILE%\\pw-browsers\npwsh bin\\Debug\\netX\\playwright.ps1 install\n")))),(0,r.kt)("p",null,"When running Playwright scripts, ask it to search for browsers in a shared location."),(0,r.kt)(n.Z,{groupId:"bash-flavor",defaultValue:"bash",values:[{label:"Bash",value:"bash"},{label:"PowerShell",value:"powershell"},{label:"Batch",value:"batch"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"bash",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"PLAYWRIGHT_BROWSERS_PATH=$HOME/pw-browsers dotnet test\n"))),(0,r.kt)(l.Z,{value:"powershell",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-powershell"}),'$env:PLAYWRIGHT_BROWSERS_PATH="$env:USERPROFILE\\pw-browsers"\ndotnet test\n'))),(0,r.kt)(l.Z,{value:"batch",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-batch"}),"set PLAYWRIGHT_BROWSERS_PATH=%USERPROFILE%\\pw-browsers\ndotnet test\n")))),(0,r.kt)("p",null,"Playwright keeps track of packages that need those browsers and will garbage collect them as you update Playwright to the newer versions."),(0,r.kt)("div",d({},{className:"admonition admonition-note alert alert--secondary"}),(0,r.kt)("div",d({parentName:"div"},{className:"admonition-heading"}),(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",d({parentName:"h5"},{className:"admonition-icon"}),(0,r.kt)("svg",d({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),(0,r.kt)("path",d({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),(0,r.kt)("div",d({parentName:"div"},{className:"admonition-content"}),(0,r.kt)("p",{parentName:"div"},"Developers can opt-in in this mode via exporting ",(0,r.kt)("inlineCode",{parentName:"p"},"PLAYWRIGHT_BROWSERS_PATH=$HOME/pw-browsers")," in their ",(0,r.kt)("inlineCode",{parentName:"p"},".bashrc"),"."))),(0,r.kt)("h2",d({},{id:"install-behind-a-firewall-or-a-proxy"}),"Install behind a firewall or a proxy"),(0,r.kt)("p",null,"By default, Playwright downloads browsers from Microsoft CDN."),(0,r.kt)("p",null,"Sometimes companies maintain an internal proxy that blocks direct access to the public resources. In this case, Playwright can be configured to download browsers via a proxy server."),(0,r.kt)(n.Z,{groupId:"bash-flavor",defaultValue:"bash",values:[{label:"Bash",value:"bash"},{label:"PowerShell",value:"powershell"},{label:"Batch",value:"batch"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"bash",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"HTTPS_PROXY=https://192.0.2.1 pwsh bin\\Debug\\netX\\playwright.ps1 install\n"))),(0,r.kt)(l.Z,{value:"powershell",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-powershell"}),'$env:HTTPS_PROXY="https://192.0.2.1"\npwsh bin\\Debug\\netX\\playwright.ps1 install\n'))),(0,r.kt)(l.Z,{value:"batch",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-batch"}),"set HTTPS_PROXY=https://192.0.2.1\npwsh bin\\Debug\\netX\\playwright.ps1 install\n")))),(0,r.kt)("h2",d({},{id:"download-from-artifact-repository"}),"Download from artifact repository"),(0,r.kt)("p",null,"By default, Playwright downloads browsers from Microsoft CDN."),(0,r.kt)("p",null,"Sometimes companies maintain an internal artifact repository to host browser binaries. In this case, Playwright can be configured to download from a custom location using the ",(0,r.kt)("inlineCode",{parentName:"p"},"PLAYWRIGHT_DOWNLOAD_HOST")," env variable."),(0,r.kt)(n.Z,{groupId:"bash-flavor",defaultValue:"bash",values:[{label:"Bash",value:"bash"},{label:"PowerShell",value:"powershell"},{label:"Batch",value:"batch"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"bash",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"PLAYWRIGHT_DOWNLOAD_HOST=192.0.2.1 pwsh bin\\Debug\\netX\\playwright.ps1 install\n"))),(0,r.kt)(l.Z,{value:"powershell",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-powershell"}),'$env:PLAYWRIGHT_DOWNLOAD_HOST="192.0.2.1"\npwsh bin\\Debug\\netX\\playwright.ps1 install\n'))),(0,r.kt)(l.Z,{value:"batch",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-batch"}),"set PLAYWRIGHT_DOWNLOAD_HOST=192.0.2.1\npwsh bin\\Debug\\netX\\playwright.ps1 install\n")))),(0,r.kt)("p",null,"It is also possible to use a per-browser download hosts using ",(0,r.kt)("inlineCode",{parentName:"p"},"PLAYWRIGHT_CHROMIUM_DOWNLOAD_HOST"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"PLAYWRIGHT_FIREFOX_DOWNLOAD_HOST")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"PLAYWRIGHT_WEBKIT_DOWNLOAD_HOST")," env variables that take precedence over ",(0,r.kt)("inlineCode",{parentName:"p"},"PLAYWRIGHT_DOWNLOAD_HOST"),"."),(0,r.kt)(n.Z,{groupId:"bash-flavor",defaultValue:"bash",values:[{label:"Bash",value:"bash"},{label:"PowerShell",value:"powershell"},{label:"Batch",value:"batch"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"bash",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"PLAYWRIGHT_FIREFOX_DOWNLOAD_HOST=203.0.113.3 PLAYWRIGHT_DOWNLOAD_HOST=192.0.2.1 pwsh bin\\Debug\\netX\\playwright.ps1 install\n"))),(0,r.kt)(l.Z,{value:"powershell",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-powershell"}),'$env:PLAYWRIGHT_DOWNLOAD_HOST="192.0.2.1"\n$env:PLAYWRIGHT_FIREFOX_DOWNLOAD_HOST="203.0.113.3"\npwsh bin\\Debug\\netX\\playwright.ps1 install\n'))),(0,r.kt)(l.Z,{value:"batch",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-batch"}),"set PLAYWRIGHT_FIREFOX_DOWNLOAD_HOST=203.0.113.3\nset PLAYWRIGHT_DOWNLOAD_HOST=192.0.2.1\npwsh bin\\Debug\\netX\\playwright.ps1 install\n")))),(0,r.kt)("h2",d({},{id:"skip-browser-downloads"}),"Skip browser downloads"),(0,r.kt)("p",null,"In certain cases, it is desired to avoid browser downloads altogether because browser binaries are managed separately."),(0,r.kt)("p",null,"This can be done by setting ",(0,r.kt)("inlineCode",{parentName:"p"},"PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD")," variable before installation."),(0,r.kt)(n.Z,{groupId:"bash-flavor",defaultValue:"bash",values:[{label:"Bash",value:"bash"},{label:"PowerShell",value:"powershell"},{label:"Batch",value:"batch"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"bash",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD=1 pwsh bin\\Debug\\netX\\playwright.ps1 install\n"))),(0,r.kt)(l.Z,{value:"powershell",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-powershell"}),"$env:PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD=1\npwsh bin\\Debug\\netX\\playwright.ps1 install\n"))),(0,r.kt)(l.Z,{value:"batch",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-batch"}),"set PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD=1\npwsh bin\\Debug\\netX\\playwright.ps1 install\n")))),(0,r.kt)("h2",d({},{id:"stale-browser-removal"}),"Stale browser removal"),(0,r.kt)("p",null,"Playwright keeps track of the clients that use its browsers. When there are no more clients that require particular version of the browser, that version is deleted from the system. That way you can safely use Playwright instances of different versions and at the same time, you don't waste disk space for the browsers that are no longer in use."),(0,r.kt)("p",null,"To opt-out from the unused browser removal, you can set the ",(0,r.kt)("inlineCode",{parentName:"p"},"PLAYWRIGHT_SKIP_BROWSER_GC=1")," environment variable."))}k.isMDXComponent=!0}}]);