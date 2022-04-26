"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[35266],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return m}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),p=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=p(a),m=n,d=h["".concat(i,".").concat(m)]||h[m]||c[m]||l;return a?r.createElement(d,o(o({ref:t},u),{},{components:a})):r.createElement(d,o({ref:t},u))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=h;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var p=2;p<l;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},73811:function(e,t,a){a.d(t,{Z:function(){return p}});var r=a(67294),n=Object.defineProperty,l=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,i=(e,t,a)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;function p({children:e,hidden:t,className:a}){return r.createElement("div",((e,t)=>{for(var a in t||(t={}))o.call(t,a)&&i(e,a,t[a]);if(l)for(var a of l(t))s.call(t,a)&&i(e,a,t[a]);return e})({role:"tabpanel"},{hidden:t,className:a}),e)}},73824:function(e,t,a){a.d(t,{Z:function(){return w}});var r=a(67294),n=a(54939),l=a(39670),o=a(86010),s="tabItem_LplD",i=Object.defineProperty,p=Object.defineProperties,u=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,d=(e,t,a)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,b=(e,t)=>{for(var a in t||(t={}))h.call(t,a)&&d(e,a,t[a]);if(c)for(var a of c(t))m.call(t,a)&&d(e,a,t[a]);return e};function g(e){var t,a,n;const{lazy:i,block:c,defaultValue:h,values:m,groupId:d,className:g}=e,w=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=null!=m?m:w.map((({props:{value:e,label:t,attributes:a}})=>({value:e,label:t,attributes:a}))),y=(0,l.lx)(f,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===h?h:null!=(n=null!=h?h:null==(t=w.find((e=>e.props.default)))?void 0:t.props.value)?n:null==(a=w[0])?void 0:a.props.value;if(null!==v&&!f.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:T}=(0,l.UB)(),[O,P]=(0,r.useState)(v),N=[],{blockElementScrollPositionUntilNextRender:I}=(0,l.o5)();if(null!=d){const e=k[d];null!=e&&e!==O&&f.some((t=>t.value===e))&&P(e)}const x=e=>{const t=e.currentTarget,a=N.indexOf(t),r=f[a].value;r!==O&&(I(t),P(r),null!=d&&T(d,r))},_=e=>{let t=null;switch(e.key){case"ArrowRight":{const a=N.indexOf(e.currentTarget)+1;t=N[a]||N[0];break}case"ArrowLeft":{const a=N.indexOf(e.currentTarget)-1;t=N[a]||N[N.length-1];break}}null==t||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":c},g)},f.map((({value:e,label:t,attributes:a})=>{return r.createElement("li",(n=b({role:"tab",tabIndex:O===e?0:-1,"aria-selected":O===e,key:e,ref:e=>N.push(e),onKeyDown:_,onFocus:x,onClick:x},a),l={className:(0,o.Z)("tabs__item",s,null==a?void 0:a.className,{"tabs__item--active":O===e})},p(n,u(l))),null!=t?t:e);var n,l}))),i?(0,r.cloneElement)(w.filter((e=>e.props.value===O))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},w.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}function w(e){const t=(0,n.Z)();return r.createElement(g,b({key:String(t)},e))}},74778:function(e,t,a){a.r(t),a.d(t,{assets:function(){return w},contentTitle:function(){return b},default:function(){return v},frontMatter:function(){return d},metadata:function(){return g},toc:function(){return f}});var r=a(3905),n=a(73824),l=a(73811),o=Object.defineProperty,s=Object.defineProperties,i=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,h=(e,t,a)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,m=(e,t)=>{for(var a in t||(t={}))u.call(t,a)&&h(e,a,t[a]);if(p)for(var a of p(t))c.call(t,a)&&h(e,a,t[a]);return e};const d={id:"browsers",title:"Browsers"},b=void 0,g={unversionedId:"browsers",id:"browsers",title:"Browsers",description:"Each version of Playwright needs specific versions of browser binaries to operate. Depending on the language you use, Playwright will either download these browsers at package install time for you, or you will need to use Playwright CLI to install these browsers.",source:"@site/docs/browsers.mdx",sourceDirName:".",slug:"/browsers",permalink:"/docs/next/browsers",tags:[],version:"current",frontMatter:{id:"browsers",title:"Browsers"},sidebar:"docs",previous:{title:"Authentication",permalink:"/docs/next/auth"},next:{title:"Browser Contexts",permalink:"/docs/next/browser-contexts"}},w={},f=[{value:"Chromium",id:"chromium",level:2},{value:"Firefox",id:"firefox",level:2},{value:"WebKit",id:"webkit",level:2},{value:"Google Chrome &amp; Microsoft Edge",id:"google-chrome--microsoft-edge",level:2},{value:"When to use Google Chrome &amp; Microsoft Edge and when not to?",id:"when-to-use-google-chrome--microsoft-edge-and-when-not-to",level:3},{value:"Installing browsers",id:"installing-browsers",level:2},{value:"Managing browser binaries",id:"managing-browser-binaries",level:2},{value:"Managing browser binaries",id:"managing-browser-binaries-1",level:3},{value:"Install behind a firewall or a proxy",id:"install-behind-a-firewall-or-a-proxy",level:2},{value:"Download from artifact repository",id:"download-from-artifact-repository",level:2},{value:"Skip browser downloads",id:"skip-browser-downloads",level:2},{value:"Stale browser removal",id:"stale-browser-removal",level:2}],y={toc:f};function v(e){var t,a=e,{components:o}=a,h=((e,t)=>{var a={};for(var r in e)u.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&p)for(var r of p(e))t.indexOf(r)<0&&c.call(e,r)&&(a[r]=e[r]);return a})(a,["components"]);return(0,r.kt)("wrapper",(t=m(m({},y),h),s(t,i({components:o,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"Each version of Playwright needs specific versions of browser binaries to operate. Depending on the language you use, Playwright will either download these browsers at package install time for you, or you will need to use ",(0,r.kt)("a",m({parentName:"p"},{href:"/docs/next/cli"}),"Playwright CLI")," to install these browsers."),(0,r.kt)("p",null,"With every release, Playwright updates the versions of the browsers it supports, so that the latest Playwright would support the latest browsers at any moment. It means that every time you update playwright, you might need to re-run the ",(0,r.kt)("inlineCode",{parentName:"p"},"install")," CLI command."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"#chromium"}),"Chromium")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"#firefox"}),"Firefox")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"#webkit"}),"WebKit")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"#google-chrome--microsoft-edge"}),"Google Chrome & Microsoft Edge")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"#installing-browsers"}),"Installing browsers")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"#managing-browser-binaries"}),"Managing browser binaries")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"#install-behind-a-firewall-or-a-proxy"}),"Install behind a firewall or a proxy")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"#download-from-artifact-repository"}),"Download from artifact repository")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"#skip-browser-downloads"}),"Skip browser downloads")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"#stale-browser-removal"}),"Stale browser removal"))),(0,r.kt)("h2",m({},{id:"chromium"}),"Chromium"),(0,r.kt)("p",null,"For Google Chrome, Microsoft Edge and other Chromium-based browsers, by default, Playwright uses open source Chromium builds. Since Chromium project is ahead of the branded browsers, when the world is on Google Chrome N, Playwright already supports Chromium N+1 that will be released in Google Chrome and Microsoft Edge in a few weeks."),(0,r.kt)("p",null,"There is also a way to opt into using Google Chrome's or Microsoft Edge's branded builds for testing. For details on when to opt into stable channels, refer to the ",(0,r.kt)("a",m({parentName:"p"},{href:"#google-chrome--microsoft-edge"}),"Google Chrome & Microsoft Edge")," section below."),(0,r.kt)("h2",m({},{id:"firefox"}),"Firefox"),(0,r.kt)("p",null,"Playwright's Firefox version matches the recent ",(0,r.kt)("a",m({parentName:"p"},{href:"https://www.mozilla.org/en-US/firefox/new/"}),"Firefox Stable")," build."),(0,r.kt)("h2",m({},{id:"webkit"}),"WebKit"),(0,r.kt)("p",null,"Playwright's WebKit version matches the recent WebKit trunk build, before it is used in Apple Safari and other WebKit-based browsers. This gives a lot of lead time to react on the potential browser update issues."),(0,r.kt)("h2",m({},{id:"google-chrome--microsoft-edge"}),"Google Chrome & Microsoft Edge"),(0,r.kt)("p",null,"While Playwright can download and use the recent Chromium build, it can operate against the stock Google Chrome and Microsoft Edge browsers available on the machine. In particular, current Playwright version will support Stable and Beta channels of these browsers. Here is how you can opt into using the stock browser:"),(0,r.kt)(n.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"},{label:"Library",value:"library"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"ts",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-ts"}),"import { PlaywrightTestConfig } from '@playwright/test';\nconst config: PlaywrightTestConfig = {\n  use: {\n    channel: 'chrome',\n  },\n};\nexport default config;\n"))),(0,r.kt)(l.Z,{value:"js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-js"}),"// @ts-check\n\n/** @type {import('@playwright/test').PlaywrightTestConfig} */\nconst config = {\n  use: {\n    channel: 'chrome',\n  },\n};\n\nmodule.exports = config;\n"))),(0,r.kt)(l.Z,{value:"library",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-library"}),"const { chromium } = require('playwright');\nconst browser = await chromium.launch({\n  channel: 'chrome' // or 'msedge', 'chrome-beta', 'msedge-beta', 'msedge-dev', etc.\n});\n")))),(0,r.kt)("h3",m({},{id:"when-to-use-google-chrome--microsoft-edge-and-when-not-to"}),"When to use Google Chrome & Microsoft Edge and when not to?"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Defaults")),(0,r.kt)("p",null,"Using default Playwright configuration with the latest Chromium is a good idea most of the time. Since Playwright is ahead of Stable channels for the browsers, it gives peace of mind that the upcoming Google Chrome or Microsoft Edge releases won't break your site. You catch breakage early and have a lot of time to fix it before the official Chrome update."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Regression testing")),(0,r.kt)("p",null,"Having said that, testing policies often require regression testing to be performed against the current publicly available browsers. In this case, you can opt into one of the stable channels, ",(0,r.kt)("inlineCode",{parentName:"p"},'"chrome"')," or ",(0,r.kt)("inlineCode",{parentName:"p"},'"msedge"'),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Media codecs")),(0,r.kt)("p",null,"Another reason for testing using official binaries is to test functionality related to media codecs. Chromium does not have all the codecs that Google Chrome or Microsoft Edge are bundling due to various licensing considerations and agreements. If your site relies on this kind of codecs (which is rarely the case), you also want to use official channel."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Enterprise policy")),(0,r.kt)("p",null,"Google Chrome and Microsoft Edge respect enterprise policies, which include limitations to the capabilities, network proxy, mandatory extensions that stand in the way of testing. So if you are a part of the organization that uses such policies, it is the easiest to use bundled Chromium for your local testing, you can still opt into stable channels on the bots that are typically free of such restrictions."),(0,r.kt)("h2",m({},{id:"installing-browsers"}),"Installing browsers"),(0,r.kt)("h2",m({},{id:"managing-browser-binaries"}),"Managing browser binaries"),(0,r.kt)("p",null,"Playwright downloads Chromium, WebKit and Firefox browsers into the OS-specific cache folders:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"%USERPROFILE%\\AppData\\Local\\ms-playwright")," on Windows"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"~/Library/Caches/ms-playwright")," on MacOS"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"~/.cache/ms-playwright")," on Linux")),(0,r.kt)("p",null,"These browsers will take a few hundred megabytes of disk space when installed:"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"du -hs ~/Library/Caches/ms-playwright/*\n281M  chromium-XXXXXX\n187M  firefox-XXXX\n180M  webkit-XXXX\n")),(0,r.kt)("p",null,"You can override default behavior using environment variables. When installing Playwright, ask it to download browsers into a specific location:"),(0,r.kt)(n.Z,{groupId:"bash-flavor",defaultValue:"bash",values:[{label:"Bash",value:"bash"},{label:"PowerShell",value:"powershell"},{label:"Batch",value:"batch"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"bash",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"PLAYWRIGHT_BROWSERS_PATH=$HOME/pw-browsers npx playwright install\n"))),(0,r.kt)(l.Z,{value:"powershell",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-powershell"}),'$env:PLAYWRIGHT_BROWSERS_PATH="$env:USERPROFILE\\pw-browsers"\nnpx playwright install\n'))),(0,r.kt)(l.Z,{value:"batch",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-batch"}),"set PLAYWRIGHT_BROWSERS_PATH=%USERPROFILE%\\pw-browsers\nnpx playwright install\n")))),(0,r.kt)("p",null,"When running Playwright scripts, ask it to search for browsers in a shared location."),(0,r.kt)(n.Z,{groupId:"bash-flavor",defaultValue:"bash",values:[{label:"Bash",value:"bash"},{label:"PowerShell",value:"powershell"},{label:"Batch",value:"batch"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"bash",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"PLAYWRIGHT_BROWSERS_PATH=$HOME/pw-browsers npx playwright test\n"))),(0,r.kt)(l.Z,{value:"powershell",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-powershell"}),'$env:PLAYWRIGHT_BROWSERS_PATH="$env:USERPROFILE\\pw-browsers"\nnpx playwright test\n'))),(0,r.kt)(l.Z,{value:"batch",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-batch"}),"set PLAYWRIGHT_BROWSERS_PATH=%USERPROFILE%\\pw-browsers\nnpx playwright test\n")))),(0,r.kt)("p",null,"Playwright keeps track of packages that need those browsers and will garbage collect them as you update Playwright to the newer versions."),(0,r.kt)("div",m({},{className:"admonition admonition-note alert alert--secondary"}),(0,r.kt)("div",m({parentName:"div"},{className:"admonition-heading"}),(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",m({parentName:"h5"},{className:"admonition-icon"}),(0,r.kt)("svg",m({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),(0,r.kt)("path",m({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),(0,r.kt)("div",m({parentName:"div"},{className:"admonition-content"}),(0,r.kt)("p",{parentName:"div"},"Developers can opt-in in this mode via exporting ",(0,r.kt)("inlineCode",{parentName:"p"},"PLAYWRIGHT_BROWSERS_PATH=$HOME/pw-browsers")," in their ",(0,r.kt)("inlineCode",{parentName:"p"},".bashrc"),"."))),(0,r.kt)("h3",m({},{id:"managing-browser-binaries-1"}),"Managing browser binaries"),(0,r.kt)("p",null,"You can opt into the hermetic install and place binaries in the local folder:"),(0,r.kt)(n.Z,{groupId:"bash-flavor",defaultValue:"bash",values:[{label:"Bash",value:"bash"},{label:"PowerShell",value:"powershell"},{label:"Batch",value:"batch"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"bash",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"# Places binaries to node_modules/@playwright/test\nPLAYWRIGHT_BROWSERS_PATH=0 npx playwright install\n"))),(0,r.kt)(l.Z,{value:"powershell",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-powershell"}),"# Places binaries to node_modules\\@playwright\\test\n$env:PLAYWRIGHT_BROWSERS_PATH=0\nnpx playwright install\n"))),(0,r.kt)(l.Z,{value:"batch",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-batch"}),"# Places binaries to node_modules\\@playwright\\test\nset PLAYWRIGHT_BROWSERS_PATH=0\nnpx playwright install\n")))),(0,r.kt)("h2",m({},{id:"install-behind-a-firewall-or-a-proxy"}),"Install behind a firewall or a proxy"),(0,r.kt)("p",null,"By default, Playwright downloads browsers from Microsoft CDN."),(0,r.kt)("p",null,"Sometimes companies maintain an internal proxy that blocks direct access to the public resources. In this case, Playwright can be configured to download browsers via a proxy server."),(0,r.kt)(n.Z,{groupId:"bash-flavor",defaultValue:"bash",values:[{label:"Bash",value:"bash"},{label:"PowerShell",value:"powershell"},{label:"Batch",value:"batch"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"bash",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"# For Playwright Test\nHTTPS_PROXY=https://192.0.2.1 npx playwright install\n\n# For Playwright Library\nHTTPS_PROXY=https://192.0.2.1 npm install playwright\n"))),(0,r.kt)(l.Z,{value:"powershell",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-powershell"}),'# For Playwright Test\n$env:HTTPS_PROXY="https://192.0.2.1"\nnpx playwright install\n\n# For Playwright Library\n$env:HTTPS_PROXY="https://192.0.2.1"\nnpm install playwright\n'))),(0,r.kt)(l.Z,{value:"batch",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-batch"}),"# For Playwright Test\nset HTTPS_PROXY=https://192.0.2.1\nnpx playwright install\n\n# For Playwright Library\nset HTTPS_PROXY=https://192.0.2.1\nnpm install playwright\n")))),(0,r.kt)("h2",m({},{id:"download-from-artifact-repository"}),"Download from artifact repository"),(0,r.kt)("p",null,"By default, Playwright downloads browsers from Microsoft CDN."),(0,r.kt)("p",null,"Sometimes companies maintain an internal artifact repository to host browser binaries. In this case, Playwright can be configured to download from a custom location using the ",(0,r.kt)("inlineCode",{parentName:"p"},"PLAYWRIGHT_DOWNLOAD_HOST")," env variable."),(0,r.kt)(n.Z,{groupId:"bash-flavor",defaultValue:"bash",values:[{label:"Bash",value:"bash"},{label:"PowerShell",value:"powershell"},{label:"Batch",value:"batch"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"bash",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"# For Playwright Test\nPLAYWRIGHT_DOWNLOAD_HOST=192.0.2.1 npx playwright install\n\n# For Playwright Library\nPLAYWRIGHT_DOWNLOAD_HOST=192.0.2.1 npm install playwright\n"))),(0,r.kt)(l.Z,{value:"powershell",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-powershell"}),'# For Playwright Test\n$env:PLAYWRIGHT_DOWNLOAD_HOST="192.0.2.1"\nnpx playwright install\n\n# For Playwright Library\n$env:PLAYWRIGHT_DOWNLOAD_HOST="192.0.2.1"\nnpm install playwright\n'))),(0,r.kt)(l.Z,{value:"batch",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-batch"}),"# For Playwright Test\nset PLAYWRIGHT_DOWNLOAD_HOST=192.0.2.1\nnpx playwright install\n\n# For Playwright Library\nset PLAYWRIGHT_DOWNLOAD_HOST=192.0.2.1\nnpm install playwright\n")))),(0,r.kt)("p",null,"It is also possible to use a per-browser download hosts using ",(0,r.kt)("inlineCode",{parentName:"p"},"PLAYWRIGHT_CHROMIUM_DOWNLOAD_HOST"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"PLAYWRIGHT_FIREFOX_DOWNLOAD_HOST")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"PLAYWRIGHT_WEBKIT_DOWNLOAD_HOST")," env variables that take precedence over ",(0,r.kt)("inlineCode",{parentName:"p"},"PLAYWRIGHT_DOWNLOAD_HOST"),"."),(0,r.kt)(n.Z,{groupId:"bash-flavor",defaultValue:"bash",values:[{label:"Bash",value:"bash"},{label:"PowerShell",value:"powershell"},{label:"Batch",value:"batch"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"bash",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"# For Playwright Test\nPLAYWRIGHT_FIREFOX_DOWNLOAD_HOST=203.0.113.3 PLAYWRIGHT_DOWNLOAD_HOST=192.0.2.1 npx playwright install\n\n# For Playwright Library\nPLAYWRIGHT_FIREFOX_DOWNLOAD_HOST=203.0.113.3 PLAYWRIGHT_DOWNLOAD_HOST=192.0.2.1 npm install playwright\n"))),(0,r.kt)(l.Z,{value:"powershell",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-powershell"}),'# For Playwright Test\n$env:PLAYWRIGHT_FIREFOX_DOWNLOAD_HOST="203.0.113.3"\n$env:PLAYWRIGHT_DOWNLOAD_HOST="192.0.2.1"\nnpx playwright install\n\n# For Playwright Library\n$env:PLAYWRIGHT_FIREFOX_DOWNLOAD_HOST="203.0.113.3"\n$env:PLAYWRIGHT_DOWNLOAD_HOST="192.0.2.1"\nnpm install playwright\n'))),(0,r.kt)(l.Z,{value:"batch",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-batch"}),"# For Playwright Test\nset PLAYWRIGHT_FIREFOX_DOWNLOAD_HOST=203.0.113.3\nset PLAYWRIGHT_DOWNLOAD_HOST=192.0.2.1\nnpx playwright install\n\n# For Playwright Library\nset PLAYWRIGHT_FIREFOX_DOWNLOAD_HOST=203.0.113.3\nset PLAYWRIGHT_DOWNLOAD_HOST=192.0.2.1\nnpm install playwright\n")))),(0,r.kt)("h2",m({},{id:"skip-browser-downloads"}),"Skip browser downloads"),(0,r.kt)("p",null,"In certain cases, it is desired to avoid browser downloads altogether because browser binaries are managed separately."),(0,r.kt)("p",null,"This can be done by setting ",(0,r.kt)("inlineCode",{parentName:"p"},"PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD")," variable before installation."),(0,r.kt)("h2",m({},{id:"stale-browser-removal"}),"Stale browser removal"),(0,r.kt)("p",null,"Playwright keeps track of the clients that use its browsers. When there are no more clients that require particular version of the browser, that version is deleted from the system. That way you can safely use Playwright instances of different versions and at the same time, you don't waste disk space for the browsers that are no longer in use."),(0,r.kt)("p",null,"To opt-out from the unused browser removal, you can set the ",(0,r.kt)("inlineCode",{parentName:"p"},"PLAYWRIGHT_SKIP_BROWSER_GC=1")," environment variable."))}v.isMDXComponent=!0}}]);