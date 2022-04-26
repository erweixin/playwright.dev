"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[5266],{3905:function(e,a,t){t.d(a,{Zo:function(){return u},kt:function(){return d}});var r=t(67294);function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function n(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?n(Object(t),!0).forEach((function(a){l(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,r,l=function(e,a){if(null==e)return{};var t,r,l={},n=Object.keys(e);for(r=0;r<n.length;r++)t=n[r],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)t=n[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var s=r.createContext({}),p=function(e){var a=r.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},u=function(e){var a=p(e.components);return r.createElement(s.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},h=r.forwardRef((function(e,a){var t=e.components,l=e.mdxType,n=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),h=p(t),d=l,m=h["".concat(s,".").concat(d)]||h[d]||c[d]||n;return t?r.createElement(m,o(o({ref:a},u),{},{components:t})):r.createElement(m,o({ref:a},u))}));function d(e,a){var t=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var n=t.length,o=new Array(n);o[0]=h;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var p=2;p<n;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}h.displayName="MDXCreateElement"},73811:function(e,a,t){t.d(a,{Z:function(){return p}});var r=t(67294),l=Object.defineProperty,n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,s=(e,a,t)=>a in e?l(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t;function p({children:e,hidden:a,className:t}){return r.createElement("div",((e,a)=>{for(var t in a||(a={}))o.call(a,t)&&s(e,t,a[t]);if(n)for(var t of n(a))i.call(a,t)&&s(e,t,a[t]);return e})({role:"tabpanel"},{hidden:a,className:t}),e)}},73824:function(e,a,t){t.d(a,{Z:function(){return g}});var r=t(67294),l=t(54939),n=t(39670),o=t(86010),i="tabItem_LplD",s=Object.defineProperty,p=Object.defineProperties,u=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,m=(e,a,t)=>a in e?s(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,b=(e,a)=>{for(var t in a||(a={}))h.call(a,t)&&m(e,t,a[t]);if(c)for(var t of c(a))d.call(a,t)&&m(e,t,a[t]);return e};function w(e){var a,t,l;const{lazy:s,block:c,defaultValue:h,values:d,groupId:m,className:w}=e,g=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=null!=d?d:g.map((({props:{value:e,label:a,attributes:t}})=>({value:e,label:a,attributes:t}))),y=(0,n.lx)(f,((e,a)=>e.value===a.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===h?h:null!=(l=null!=h?h:null==(a=g.find((e=>e.props.default)))?void 0:a.props.value)?l:null==(t=g[0])?void 0:t.props.value;if(null!==v&&!f.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:N}=(0,n.UB)(),[O,T]=(0,r.useState)(v),P=[],{blockElementScrollPositionUntilNextRender:I}=(0,n.o5)();if(null!=m){const e=k[m];null!=e&&e!==O&&f.some((a=>a.value===e))&&T(e)}const S=e=>{const a=e.currentTarget,t=P.indexOf(a),r=f[t].value;r!==O&&(I(a),T(r),null!=m&&N(m,r))},x=e=>{let a=null;switch(e.key){case"ArrowRight":{const t=P.indexOf(e.currentTarget)+1;a=P[t]||P[0];break}case"ArrowLeft":{const t=P.indexOf(e.currentTarget)-1;a=P[t]||P[P.length-1];break}}null==a||a.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":c},w)},f.map((({value:e,label:a,attributes:t})=>{return r.createElement("li",(l=b({role:"tab",tabIndex:O===e?0:-1,"aria-selected":O===e,key:e,ref:e=>P.push(e),onKeyDown:x,onFocus:S,onClick:S},t),n={className:(0,o.Z)("tabs__item",i,null==t?void 0:t.className,{"tabs__item--active":O===e})},p(l,u(n))),null!=a?a:e);var l,n}))),s?(0,r.cloneElement)(g.filter((e=>e.props.value===O))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},g.map(((e,a)=>(0,r.cloneElement)(e,{key:a,hidden:e.props.value!==O})))))}function g(e){const a=(0,l.Z)();return r.createElement(w,b({key:String(a)},e))}},74778:function(e,a,t){t.r(a),t.d(a,{assets:function(){return g},contentTitle:function(){return b},default:function(){return v},frontMatter:function(){return m},metadata:function(){return w},toc:function(){return f}});var r=t(3905),l=t(73824),n=t(73811),o=Object.defineProperty,i=Object.defineProperties,s=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,h=(e,a,t)=>a in e?o(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,d=(e,a)=>{for(var t in a||(a={}))u.call(a,t)&&h(e,t,a[t]);if(p)for(var t of p(a))c.call(a,t)&&h(e,t,a[t]);return e};const m={id:"browsers",title:"Browsers"},b=void 0,w={unversionedId:"browsers",id:"browsers",title:"Browsers",description:"Each version of Playwright needs specific versions of browser binaries to operate. Depending on the language you use, Playwright will either download these browsers at package install time for you, or you will need to use Playwright CLI to install these browsers.",source:"@site/docs/browsers.mdx",sourceDirName:".",slug:"/browsers",permalink:"/python/docs/next/browsers",tags:[],version:"current",frontMatter:{id:"browsers",title:"Browsers"},sidebar:"docs",previous:{title:"Authentication",permalink:"/python/docs/next/auth"},next:{title:"Browser Contexts",permalink:"/python/docs/next/browser-contexts"}},g={},f=[{value:"Chromium",id:"chromium",level:2},{value:"Firefox",id:"firefox",level:2},{value:"WebKit",id:"webkit",level:2},{value:"Google Chrome &amp; Microsoft Edge",id:"google-chrome--microsoft-edge",level:2},{value:"When to use Google Chrome &amp; Microsoft Edge and when not to?",id:"when-to-use-google-chrome--microsoft-edge-and-when-not-to",level:3},{value:"Installing browsers",id:"installing-browsers",level:2},{value:"Managing browser binaries",id:"managing-browser-binaries",level:2},{value:"Install behind a firewall or a proxy",id:"install-behind-a-firewall-or-a-proxy",level:2},{value:"Download from artifact repository",id:"download-from-artifact-repository",level:2},{value:"Skip browser downloads",id:"skip-browser-downloads",level:2},{value:"Download single browser binary",id:"download-single-browser-binary",level:2},{value:"Stale browser removal",id:"stale-browser-removal",level:2}],y={toc:f};function v(e){var a,t=e,{components:o}=t,h=((e,a)=>{var t={};for(var r in e)u.call(e,r)&&a.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&p)for(var r of p(e))a.indexOf(r)<0&&c.call(e,r)&&(t[r]=e[r]);return t})(t,["components"]);return(0,r.kt)("wrapper",(a=d(d({},y),h),i(a,s({components:o,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"Each version of Playwright needs specific versions of browser binaries to operate. Depending on the language you use, Playwright will either download these browsers at package install time for you, or you will need to use ",(0,r.kt)("a",d({parentName:"p"},{href:"/python/docs/next/cli"}),"Playwright CLI")," to install these browsers."),(0,r.kt)("p",null,"With every release, Playwright updates the versions of the browsers it supports, so that the latest Playwright would support the latest browsers at any moment. It means that every time you update playwright, you might need to re-run the ",(0,r.kt)("inlineCode",{parentName:"p"},"install")," CLI command."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",d({parentName:"li"},{href:"#chromium"}),"Chromium")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",d({parentName:"li"},{href:"#firefox"}),"Firefox")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",d({parentName:"li"},{href:"#webkit"}),"WebKit")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",d({parentName:"li"},{href:"#google-chrome--microsoft-edge"}),"Google Chrome & Microsoft Edge")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",d({parentName:"li"},{href:"#installing-browsers"}),"Installing browsers")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",d({parentName:"li"},{href:"#managing-browser-binaries"}),"Managing browser binaries")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",d({parentName:"li"},{href:"#install-behind-a-firewall-or-a-proxy"}),"Install behind a firewall or a proxy")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",d({parentName:"li"},{href:"#download-from-artifact-repository"}),"Download from artifact repository")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",d({parentName:"li"},{href:"#skip-browser-downloads"}),"Skip browser downloads")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",d({parentName:"li"},{href:"#download-single-browser-binary"}),"Download single browser binary")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",d({parentName:"li"},{href:"#stale-browser-removal"}),"Stale browser removal"))),(0,r.kt)("h2",d({},{id:"chromium"}),"Chromium"),(0,r.kt)("p",null,"For Google Chrome, Microsoft Edge and other Chromium-based browsers, by default, Playwright uses open source Chromium builds. Since Chromium project is ahead of the branded browsers, when the world is on Google Chrome N, Playwright already supports Chromium N+1 that will be released in Google Chrome and Microsoft Edge in a few weeks."),(0,r.kt)("p",null,"There is also a way to opt into using Google Chrome's or Microsoft Edge's branded builds for testing. For details on when to opt into stable channels, refer to the ",(0,r.kt)("a",d({parentName:"p"},{href:"#google-chrome--microsoft-edge"}),"Google Chrome & Microsoft Edge")," section below."),(0,r.kt)("h2",d({},{id:"firefox"}),"Firefox"),(0,r.kt)("p",null,"Playwright's Firefox version matches the recent ",(0,r.kt)("a",d({parentName:"p"},{href:"https://www.mozilla.org/en-US/firefox/new/"}),"Firefox Stable")," build."),(0,r.kt)("h2",d({},{id:"webkit"}),"WebKit"),(0,r.kt)("p",null,"Playwright's WebKit version matches the recent WebKit trunk build, before it is used in Apple Safari and other WebKit-based browsers. This gives a lot of lead time to react on the potential browser update issues."),(0,r.kt)("h2",d({},{id:"google-chrome--microsoft-edge"}),"Google Chrome & Microsoft Edge"),(0,r.kt)("p",null,"While Playwright can download and use the recent Chromium build, it can operate against the stock Google Chrome and Microsoft Edge browsers available on the machine. In particular, current Playwright version will support Stable and Beta channels of these browsers. Here is how you can opt into using the stock browser:"),(0,r.kt)(l.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,r.kt)(n.Z,{value:"sync",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-py"}),'# Can be "msedge", "chrome-beta", "msedge-beta", "msedge-dev", etc.\nbrowser = playwright.chromium.launch(channel="chrome")\n'))),(0,r.kt)(n.Z,{value:"async",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-py"}),'# Can be "msedge", "chrome-beta", "msedge-beta", "msedge-dev", etc.\nbrowser = await playwright.chromium.launch(channel="chrome")\n')))),(0,r.kt)("h3",d({},{id:"when-to-use-google-chrome--microsoft-edge-and-when-not-to"}),"When to use Google Chrome & Microsoft Edge and when not to?"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Defaults")),(0,r.kt)("p",null,"Using default Playwright configuration with the latest Chromium is a good idea most of the time. Since Playwright is ahead of Stable channels for the browsers, it gives peace of mind that the upcoming Google Chrome or Microsoft Edge releases won't break your site. You catch breakage early and have a lot of time to fix it before the official Chrome update."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Regression testing")),(0,r.kt)("p",null,"Having said that, testing policies often require regression testing to be performed against the current publicly available browsers. In this case, you can opt into one of the stable channels, ",(0,r.kt)("inlineCode",{parentName:"p"},'"chrome"')," or ",(0,r.kt)("inlineCode",{parentName:"p"},'"msedge"'),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Media codecs")),(0,r.kt)("p",null,"Another reason for testing using official binaries is to test functionality related to media codecs. Chromium does not have all the codecs that Google Chrome or Microsoft Edge are bundling due to various licensing considerations and agreements. If your site relies on this kind of codecs (which is rarely the case), you also want to use official channel."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Enterprise policy")),(0,r.kt)("p",null,"Google Chrome and Microsoft Edge respect enterprise policies, which include limitations to the capabilities, network proxy, mandatory extensions that stand in the way of testing. So if you are a part of the organization that uses such policies, it is the easiest to use bundled Chromium for your local testing, you can still opt into stable channels on the bots that are typically free of such restrictions."),(0,r.kt)("h2",d({},{id:"installing-browsers"}),"Installing browsers"),(0,r.kt)("h2",d({},{id:"managing-browser-binaries"}),"Managing browser binaries"),(0,r.kt)("p",null,"Playwright downloads Chromium, WebKit and Firefox browsers into the OS-specific cache folders:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"%USERPROFILE%\\AppData\\Local\\ms-playwright")," on Windows"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"~/Library/Caches/ms-playwright")," on MacOS"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"~/.cache/ms-playwright")," on Linux")),(0,r.kt)("p",null,"These browsers will take a few hundred megabytes of disk space when installed:"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"du -hs ~/Library/Caches/ms-playwright/*\n281M  chromium-XXXXXX\n187M  firefox-XXXX\n180M  webkit-XXXX\n")),(0,r.kt)("p",null,"You can override default behavior using environment variables. When installing Playwright, ask it to download browsers into a specific location:"),(0,r.kt)(l.Z,{groupId:"bash-flavor",defaultValue:"bash",values:[{label:"Bash",value:"bash"},{label:"PowerShell",value:"powershell"},{label:"Batch",value:"batch"}],mdxType:"Tabs"},(0,r.kt)(n.Z,{value:"bash",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"pip install playwright\nPLAYWRIGHT_BROWSERS_PATH=$HOME/pw-browsers python -m playwright install\n"))),(0,r.kt)(n.Z,{value:"powershell",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-powershell"}),'$env:PLAYWRIGHT_BROWSERS_PATH="$env:USERPROFILE\\pw-browsers"\npip install playwright\nplaywright install\n'))),(0,r.kt)(n.Z,{value:"batch",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-batch"}),"set PLAYWRIGHT_BROWSERS_PATH=%USERPROFILE%\\pw-browsers\npip install playwright\nplaywright install\n")))),(0,r.kt)("p",null,"When running Playwright scripts, ask it to search for browsers in a shared location."),(0,r.kt)(l.Z,{groupId:"bash-flavor",defaultValue:"bash",values:[{label:"Bash",value:"bash"},{label:"PowerShell",value:"powershell"},{label:"Batch",value:"batch"}],mdxType:"Tabs"},(0,r.kt)(n.Z,{value:"bash",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"# Linux/macOS\nPLAYWRIGHT_BROWSERS_PATH=$HOME/pw-browsers python playwright_script.py\n"))),(0,r.kt)(n.Z,{value:"powershell",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-powershell"}),'\n$env:PLAYWRIGHT_BROWSERS_PATH="$env:USERPROFILE\\pw-browsers"\npython playwright_script.py\n'))),(0,r.kt)(n.Z,{value:"batch",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-batch"}),"set PLAYWRIGHT_BROWSERS_PATH=%USERPROFILE%\\pw-browsers\npython playwright_script.py\n")))),(0,r.kt)("p",null,"Playwright keeps track of packages that need those browsers and will garbage collect them as you update Playwright to the newer versions."),(0,r.kt)("div",d({},{className:"admonition admonition-note alert alert--secondary"}),(0,r.kt)("div",d({parentName:"div"},{className:"admonition-heading"}),(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",d({parentName:"h5"},{className:"admonition-icon"}),(0,r.kt)("svg",d({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),(0,r.kt)("path",d({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),(0,r.kt)("div",d({parentName:"div"},{className:"admonition-content"}),(0,r.kt)("p",{parentName:"div"},"Developers can opt-in in this mode via exporting ",(0,r.kt)("inlineCode",{parentName:"p"},"PLAYWRIGHT_BROWSERS_PATH=$HOME/pw-browsers")," in their ",(0,r.kt)("inlineCode",{parentName:"p"},".bashrc"),"."))),(0,r.kt)("h2",d({},{id:"install-behind-a-firewall-or-a-proxy"}),"Install behind a firewall or a proxy"),(0,r.kt)("p",null,"By default, Playwright downloads browsers from Microsoft CDN."),(0,r.kt)("p",null,"Sometimes companies maintain an internal proxy that blocks direct access to the public resources. In this case, Playwright can be configured to download browsers via a proxy server."),(0,r.kt)(l.Z,{groupId:"bash-flavor",defaultValue:"bash",values:[{label:"Bash",value:"bash"},{label:"PowerShell",value:"powershell"},{label:"Batch",value:"batch"}],mdxType:"Tabs"},(0,r.kt)(n.Z,{value:"bash",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"pip install playwright\nHTTPS_PROXY=https://192.0.2.1 playwright install\n"))),(0,r.kt)(n.Z,{value:"powershell",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-powershell"}),'$env:HTTPS_PROXY="https://192.0.2.1"\npip install playwright\nplaywright install\n'))),(0,r.kt)(n.Z,{value:"batch",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-batch"}),"set HTTPS_PROXY=https://192.0.2.1\npip install playwright\nplaywright install\n")))),(0,r.kt)("h2",d({},{id:"download-from-artifact-repository"}),"Download from artifact repository"),(0,r.kt)("p",null,"By default, Playwright downloads browsers from Microsoft CDN."),(0,r.kt)("p",null,"Sometimes companies maintain an internal artifact repository to host browser binaries. In this case, Playwright can be configured to download from a custom location using the ",(0,r.kt)("inlineCode",{parentName:"p"},"PLAYWRIGHT_DOWNLOAD_HOST")," env variable."),(0,r.kt)(l.Z,{groupId:"bash-flavor",defaultValue:"bash",values:[{label:"Bash",value:"bash"},{label:"PowerShell",value:"powershell"},{label:"Batch",value:"batch"}],mdxType:"Tabs"},(0,r.kt)(n.Z,{value:"bash",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"pip install playwright\nPLAYWRIGHT_DOWNLOAD_HOST=192.0.2.1 playwright install\n"))),(0,r.kt)(n.Z,{value:"powershell",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-powershell"}),'$env:PLAYWRIGHT_DOWNLOAD_HOST="192.0.2.1"\npip install playwright\nplaywright install\n'))),(0,r.kt)(n.Z,{value:"batch",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-batch"}),"set PLAYWRIGHT_DOWNLOAD_HOST=192.0.2.1\npip install playwright\nplaywright install\n")))),(0,r.kt)("p",null,"It is also possible to use a per-browser download hosts using ",(0,r.kt)("inlineCode",{parentName:"p"},"PLAYWRIGHT_CHROMIUM_DOWNLOAD_HOST"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"PLAYWRIGHT_FIREFOX_DOWNLOAD_HOST")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"PLAYWRIGHT_WEBKIT_DOWNLOAD_HOST")," env variables that take precedence over ",(0,r.kt)("inlineCode",{parentName:"p"},"PLAYWRIGHT_DOWNLOAD_HOST"),"."),(0,r.kt)(l.Z,{groupId:"bash-flavor",defaultValue:"bash",values:[{label:"Bash",value:"bash"},{label:"PowerShell",value:"powershell"},{label:"Batch",value:"batch"}],mdxType:"Tabs"},(0,r.kt)(n.Z,{value:"bash",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"pip install playwright\nPLAYWRIGHT_FIREFOX_DOWNLOAD_HOST=203.0.113.3 PLAYWRIGHT_DOWNLOAD_HOST=192.0.2.1 playwright install\n"))),(0,r.kt)(n.Z,{value:"powershell",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-powershell"}),'$env:PLAYWRIGHT_FIREFOX_DOWNLOAD_HOST="203.0.113.3"\n$env:PLAYWRIGHT_DOWNLOAD_HOST="192.0.2.1"\npip install playwright\nplaywright install\n'))),(0,r.kt)(n.Z,{value:"batch",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-batch"}),"set PLAYWRIGHT_FIREFOX_DOWNLOAD_HOST=203.0.113.3\nset PLAYWRIGHT_DOWNLOAD_HOST=192.0.2.1\npip install playwright\nplaywright install\n")))),(0,r.kt)("h2",d({},{id:"skip-browser-downloads"}),"Skip browser downloads"),(0,r.kt)("p",null,"In certain cases, it is desired to avoid browser downloads altogether because browser binaries are managed separately."),(0,r.kt)("p",null,"This can be done by setting ",(0,r.kt)("inlineCode",{parentName:"p"},"PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD")," variable before installation."),(0,r.kt)(l.Z,{groupId:"bash-flavor",defaultValue:"bash",values:[{label:"Bash",value:"bash"},{label:"PowerShell",value:"powershell"},{label:"Batch",value:"batch"}],mdxType:"Tabs"},(0,r.kt)(n.Z,{value:"bash",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"pip install playwright\nPLAYWRIGHT_SKIP_BROWSER_DOWNLOAD=1 python -m playwright install\n"))),(0,r.kt)(n.Z,{value:"powershell",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-powershell"}),"$env:PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD=1\npip install playwright\nplaywright install\n"))),(0,r.kt)(n.Z,{value:"batch",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-batch"}),"set PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD=1\npip install playwright\nplaywright install\n")))),(0,r.kt)("h2",d({},{id:"download-single-browser-binary"}),"Download single browser binary"),(0,r.kt)("p",null,"Playwright downloads Chromium, Firefox and WebKit browsers by default. To install a specific browser, pass it as an argument during installation."),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"pip install playwright\nplaywright install firefox\n")),(0,r.kt)("h2",d({},{id:"stale-browser-removal"}),"Stale browser removal"),(0,r.kt)("p",null,"Playwright keeps track of the clients that use its browsers. When there are no more clients that require particular version of the browser, that version is deleted from the system. That way you can safely use Playwright instances of different versions and at the same time, you don't waste disk space for the browsers that are no longer in use."),(0,r.kt)("p",null,"To opt-out from the unused browser removal, you can set the ",(0,r.kt)("inlineCode",{parentName:"p"},"PLAYWRIGHT_SKIP_BROWSER_GC=1")," environment variable."))}v.isMDXComponent=!0}}]);