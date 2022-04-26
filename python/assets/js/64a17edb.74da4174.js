"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[6276],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return d}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(t),d=r,h=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return t?a.createElement(h,o(o({ref:n},c),{},{components:t})):a.createElement(h,o({ref:n},c))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},73811:function(e,n,t){t.d(n,{Z:function(){return p}});var a=t(67294),r=Object.defineProperty,i=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,s=(e,n,t)=>n in e?r(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;function p({children:e,hidden:n,className:t}){return a.createElement("div",((e,n)=>{for(var t in n||(n={}))o.call(n,t)&&s(e,t,n[t]);if(i)for(var t of i(n))l.call(n,t)&&s(e,t,n[t]);return e})({role:"tabpanel"},{hidden:n,className:t}),e)}},73824:function(e,n,t){t.d(n,{Z:function(){return b}});var a=t(67294),r=t(54939),i=t(39670),o=t(86010),l="tabItem_LplD",s=Object.defineProperty,p=Object.defineProperties,c=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,h=(e,n,t)=>n in e?s(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,g=(e,n)=>{for(var t in n||(n={}))m.call(n,t)&&h(e,t,n[t]);if(u)for(var t of u(n))d.call(n,t)&&h(e,t,n[t]);return e};function k(e){var n,t,r;const{lazy:s,block:u,defaultValue:m,values:d,groupId:h,className:k}=e,b=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),y=null!=d?d:b.map((({props:{value:e,label:n,attributes:t}})=>({value:e,label:n,attributes:t}))),f=(0,i.lx)(y,((e,n)=>e.value===n.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===m?m:null!=(r=null!=m?m:null==(n=b.find((e=>e.props.default)))?void 0:n.props.value)?r:null==(t=b[0])?void 0:t.props.value;if(null!==v&&!y.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${y.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:w,setTabGroupChoices:N}=(0,i.UB)(),[C,x]=(0,a.useState)(v),T=[],{blockElementScrollPositionUntilNextRender:O}=(0,i.o5)();if(null!=h){const e=w[h];null!=e&&e!==C&&y.some((n=>n.value===e))&&x(e)}const I=e=>{const n=e.currentTarget,t=T.indexOf(n),a=y[t].value;a!==C&&(O(n),x(a),null!=h&&N(h,a))},P=e=>{let n=null;switch(e.key){case"ArrowRight":{const t=T.indexOf(e.currentTarget)+1;n=T[t]||T[0];break}case"ArrowLeft":{const t=T.indexOf(e.currentTarget)-1;n=T[t]||T[T.length-1];break}}null==n||n.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":u},k)},y.map((({value:e,label:n,attributes:t})=>{return a.createElement("li",(r=g({role:"tab",tabIndex:C===e?0:-1,"aria-selected":C===e,key:e,ref:e=>T.push(e),onKeyDown:P,onFocus:I,onClick:I},t),i={className:(0,o.Z)("tabs__item",l,null==t?void 0:t.className,{"tabs__item--active":C===e})},p(r,c(i))),null!=n?n:e);var r,i}))),s?(0,a.cloneElement)(b.filter((e=>e.props.value===C))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},b.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==C})))))}function b(e){const n=(0,r.Z)();return a.createElement(k,g({key:String(n)},e))}},83126:function(e,n,t){t.r(n),t.d(n,{assets:function(){return b},contentTitle:function(){return g},default:function(){return v},frontMatter:function(){return h},metadata:function(){return k},toc:function(){return y}});var a=t(3905),r=t(73824),i=t(73811),o=Object.defineProperty,l=Object.defineProperties,s=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,m=(e,n,t)=>n in e?o(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,d=(e,n)=>{for(var t in n||(n={}))c.call(n,t)&&m(e,t,n[t]);if(p)for(var t of p(n))u.call(n,t)&&m(e,t,n[t]);return e};const h={id:"ci",title:"Continuous Integration"},g=void 0,k={unversionedId:"ci",id:"version-1.18/ci",title:"Continuous Integration",description:"Playwright tests can be executed in CI environments. We have created sample configurations for common CI providers.",source:"@site/versioned_docs/version-1.18/ci.mdx",sourceDirName:".",slug:"/ci",permalink:"/python/docs/1.18/ci",tags:[],version:"1.18",frontMatter:{id:"ci",title:"Continuous Integration"},sidebar:"version-1.18/docs",previous:{title:"Docker",permalink:"/python/docs/1.18/docker"},next:{title:"Selenium Grid",permalink:"/python/docs/1.18/selenium-grid"}},b={},y=[{value:"Introduction",id:"introduction",level:2},{value:"CI configurations",id:"ci-configurations",level:2},{value:"GitHub Actions",id:"github-actions",level:3},{value:"GitHub Actions on deployment",id:"github-actions-on-deployment",level:3},{value:"Docker",id:"docker",level:3},{value:"Azure Pipelines",id:"azure-pipelines",level:3},{value:"Travis CI",id:"travis-ci",level:3},{value:"CircleCI",id:"circleci",level:3},{value:"Jenkins",id:"jenkins",level:3},{value:"Bitbucket Pipelines",id:"bitbucket-pipelines",level:3},{value:"GitLab CI",id:"gitlab-ci",level:3},{value:"Caching browsers",id:"caching-browsers",level:2},{value:"Exception: <code>node_modules</code> are cached (Node-specific)",id:"exception-node_modules-are-cached-node-specific",level:4},{value:"Directories to cache",id:"directories-to-cache",level:4},{value:"Debugging browser launches",id:"debugging-browser-launches",level:2},{value:"Running headed",id:"running-headed",level:2}],f={toc:y};function v(e){var n,t=e,{components:o}=t,m=((e,n)=>{var t={};for(var a in e)c.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&p)for(var a of p(e))n.indexOf(a)<0&&u.call(e,a)&&(t[a]=e[a]);return t})(t,["components"]);return(0,a.kt)("wrapper",(n=d(d({},f),m),l(n,s({components:o,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"Playwright tests can be executed in CI environments. We have created sample configurations for common CI providers."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",d({parentName:"li"},{href:"#introduction"}),"Introduction")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",d({parentName:"li"},{href:"#ci-configurations"}),"CI configurations")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",d({parentName:"li"},{href:"#caching-browsers"}),"Caching browsers")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",d({parentName:"li"},{href:"#debugging-browser-launches"}),"Debugging browser launches")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",d({parentName:"li"},{href:"#running-headed"}),"Running headed"))),(0,a.kt)("h2",d({},{id:"introduction"}),"Introduction"),(0,a.kt)("p",null,"3 steps to get your tests running on CI:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Ensure CI agent can run browsers"),": Use ",(0,a.kt)("a",d({parentName:"p"},{href:"/python/docs/1.18/docker"}),"our Docker image")," in Linux agents or install your dependencies using the ",(0,a.kt)("a",d({parentName:"p"},{href:"/python/docs/1.18/cli#install-system-dependencies"}),"CLI"),". Windows and macOS agents do not require any additional dependencies.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Install Playwright"),":"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"pip install playwright\nplaywright install\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Run your tests"),":"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"pytest\n")))),(0,a.kt)("h2",d({},{id:"ci-configurations"}),"CI configurations"),(0,a.kt)("p",null,"The ",(0,a.kt)("a",d({parentName:"p"},{href:"/python/docs/1.18/cli#install-system-dependencies"}),"Command line tools")," can be used to install all operating system dependencies on GitHub Actions."),(0,a.kt)("h3",d({},{id:"github-actions"}),"GitHub Actions"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-yml"}),"steps:\n  - name: Set up Python\n    uses: actions/setup-python@v2\n    with:\n      python-version: 3.8\n  - name: Install dependencies\n    run: |\n      python -m pip install --upgrade pip\n      pip install playwright\n      pip install -e .\n  - name: Ensure browsers are installed\n    run: python -m playwright install\n  - name: Install operating system dependencies\n    run: python -m playwright install-deps\n  - name: Run your tests\n    run: pytest\n")),(0,a.kt)("p",null,"We run ",(0,a.kt)("a",d({parentName:"p"},{href:"https://github.com/microsoft/playwright/blob/main/.github/workflows/tests_secondary.yml"}),"our tests")," on GitHub Actions, across a matrix of 3 platforms (Windows, Linux, macOS) and 3 browsers (Chromium, Firefox, WebKit)."),(0,a.kt)("h3",d({},{id:"github-actions-on-deployment"}),"GitHub Actions on deployment"),(0,a.kt)("p",null,"This will start the tests after a ",(0,a.kt)("a",d({parentName:"p"},{href:"https://developer.github.com/v3/repos/deployments/"}),"GitHub Deployment")," went into the ",(0,a.kt)("inlineCode",{parentName:"p"},"success")," state. Services like Azure Static Web Apps, Netlify, Vercel, etc. use this pattern so you can run your end-to-end tests on their deployed enviornment."),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-yml"}),"name: Playwright Tests\non:\n  deployment_status:\njobs:\n  test:\n    timeout-minutes: 60\n    runs-on: ubuntu-latest\n    if: github.event.deployment_status.state == 'success'\n    steps:\n    - uses: actions/checkout@v2\n    - uses: actions/setup-node@v2\n      with:\n        node-version: '14.x'\n    - name: Install dependencies\n      run: npm ci\n    - name: Install Playwright\n      run: npx playwright install --with-deps\n    - name: Run Playwright tests\n      run: npm run test:e2e\n      env:\n        # This might depend on your test-runner/language binding\n        PLAYWRIGHT_TEST_BASE_URL: ${{ github.event.deployment_status.target_url }}\n")),(0,a.kt)("h3",d({},{id:"docker"}),"Docker"),(0,a.kt)("p",null,"We have a ",(0,a.kt)("a",d({parentName:"p"},{href:"/python/docs/1.18/docker"}),"pre-built Docker image")," which can either be used directly, or as a reference to update your existing Docker definitions."),(0,a.kt)("p",null,"Suggested configuration"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"By default, Docker runs a container with a ",(0,a.kt)("inlineCode",{parentName:"p"},"/dev/shm")," shared memory space 64MB. This is ",(0,a.kt)("a",d({parentName:"p"},{href:"https://github.com/c0b/chrome-in-docker/issues/1"}),"typically too small")," for Chromium and will cause Chromium to crash when rendering large pages. To fix, run the container with ",(0,a.kt)("inlineCode",{parentName:"p"},"docker run --shm-size=1gb")," to increase the size of ",(0,a.kt)("inlineCode",{parentName:"p"},"/dev/shm"),". Since Chromium 65, this is no longer necessary. Instead, launch the browser with the ",(0,a.kt)("inlineCode",{parentName:"p"},"--disable-dev-shm-usage")," flag:"),(0,a.kt)(r.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"sync",mdxType:"TabItem"},(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",d({parentName:"pre"},{className:"language-py"}),"browser = playwright.chromium.launch({\n   args=['--disable-dev-shm-usage']\n})\n"))),(0,a.kt)(i.Z,{value:"async",mdxType:"TabItem"},(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",d({parentName:"pre"},{className:"language-py"}),"browser = await playwright.chromium.launch(\n   args=['--disable-dev-shm-usage']\n)\n")))),(0,a.kt)("p",{parentName:"li"},"This will write shared memory files into ",(0,a.kt)("inlineCode",{parentName:"p"},"/tmp")," instead of ",(0,a.kt)("inlineCode",{parentName:"p"},"/dev/shm"),". See ",(0,a.kt)("a",d({parentName:"p"},{href:"https://bugs.chromium.org/p/chromium/issues/detail?id=736452"}),"crbug.com/736452")," for more details.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Using ",(0,a.kt)("inlineCode",{parentName:"p"},"--ipc=host")," is also recommended when using Chromium\u2014without it Chromium can run out of memory and crash. Learn more about this option in ",(0,a.kt)("a",d({parentName:"p"},{href:"https://docs.docker.com/engine/reference/run/#ipc-settings---ipc"}),"Docker docs"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Seeing other weird errors when launching Chromium? Try running your container with ",(0,a.kt)("inlineCode",{parentName:"p"},"docker run --cap-add=SYS_ADMIN")," when developing locally.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",d({parentName:"p"},{href:"https://github.com/Yelp/dumb-init"}),"dumb-init")," is worth checking out if you're experiencing a lot of zombies Chromium processes sticking around. There's special treatment for processes with PID=1, which makes it hard to terminate Chromium properly in some cases (e.g. in Docker)."))),(0,a.kt)("h3",d({},{id:"azure-pipelines"}),"Azure Pipelines"),(0,a.kt)("p",null,"For Windows or macOS agents, no additional configuration required, just install Playwright and run your tests."),(0,a.kt)("p",null,"For Linux agents, you can use ",(0,a.kt)("a",d({parentName:"p"},{href:"/python/docs/1.18/docker"}),"our Docker container")," with Azure Pipelines support for ",(0,a.kt)("a",d({parentName:"p"},{href:"https://docs.microsoft.com/en-us/azure/devops/pipelines/process/container-phases?view=azure-devops"}),"running containerized jobs"),". Alternatively, you can refer to the ",(0,a.kt)("a",d({parentName:"p"},{href:"/python/docs/1.18/docker"}),"Dockerfile")," to see additional dependencies that need to be installed on a Ubuntu agent."),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-yml"}),"pool:\n  vmImage: 'ubuntu-20.04'\n\ncontainer: mcr.microsoft.com/playwright:focal\n\nsteps:\n...\n")),(0,a.kt)("h3",d({},{id:"travis-ci"}),"Travis CI"),(0,a.kt)("p",null,"Suggested configuration"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",d({parentName:"li"},{href:"http://man7.org/linux/man-pages/man7/user_namespaces.7.html"}),"User namespace cloning")," should be enabled to support proper sandboxing"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",d({parentName:"li"},{href:"https://en.wikipedia.org/wiki/Xvfb"}),"xvfb")," should be launched in order to run Chromium in non-headless mode (e.g. to test Chrome Extensions)"),(0,a.kt)("li",{parentName:"ol"},"If your project does not have ",(0,a.kt)("inlineCode",{parentName:"li"},"package-lock.json"),", Travis would be auto-caching ",(0,a.kt)("inlineCode",{parentName:"li"},"node_modules")," directory. If you run ",(0,a.kt)("inlineCode",{parentName:"li"},"npm install")," (instead of ",(0,a.kt)("inlineCode",{parentName:"li"},"npm ci"),"), it is possible that the browser binaries are not downloaded. Fix this with ",(0,a.kt)("a",d({parentName:"li"},{href:"#exception-node_modules-are-cached"}),"these steps")," outlined below.")),(0,a.kt)("p",null,"To sum up, your ",(0,a.kt)("inlineCode",{parentName:"p"},".travis.yml")," might look like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-yml"}),'language: node_js\ndist: bionic\naddons:\n  apt:\n    packages:\n    # These are required to run webkit\n    - libwoff1\n    - libopus0\n    - libwebp6\n    - libwebpdemux2\n    - libenchant1c2a\n    - libgudev-1.0-0\n    - libsecret-1-0\n    - libhyphen0\n    - libgdk-pixbuf2.0-0\n    - libegl1\n    - libgles2\n    - libevent-2.1-6\n    - libnotify4\n    - libxslt1.1\n    - libvpx5\n    # gstreamer and plugins to support video playback in WebKit.\n    - gstreamer1.0-gl\n    - gstreamer1.0-plugins-base\n    - gstreamer1.0-plugins-good\n    - gstreamer1.0-plugins-bad\n    # This is required to run chromium\n    - libgbm1\n    # this is needed for running headed tests\n    - xvfb\n\n# allow headed tests\nbefore_install:\n  # Enable user namespace cloning\n  - "sysctl kernel.unprivileged_userns_clone=1"\n  # Launch XVFB\n  - "export DISPLAY=:99.0"\n  - "sh -e /etc/init.d/xvfb start"\n')),(0,a.kt)("h3",d({},{id:"circleci"}),"CircleCI"),(0,a.kt)("p",null,"Running Playwright on CircleCI requires the following steps:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Use the pre-built ",(0,a.kt)("a",d({parentName:"p"},{href:"/python/docs/1.18/docker"}),"Docker image")," in your config like so:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",d({parentName:"pre"},{className:"language-yml"}),"docker:\n  - image: mcr.microsoft.com/playwright:focal\nenvironment:\n  NODE_ENV: development # Needed if playwright is in `devDependencies`\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"If you\u2019re using Playwright through Jest, then you may encounter an error spawning child processes:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",d({parentName:"pre"},{}),"[00:00.0]  jest args: --e2e --spec --max-workers=36\nError: spawn ENOMEM\n   at ChildProcess.spawn (internal/child_process.js:394:11)\n")),(0,a.kt)("p",{parentName:"li"},"This is likely caused by Jest autodetecting the number of processes on the entire machine (",(0,a.kt)("inlineCode",{parentName:"p"},"36"),") rather than the number allowed to your container (",(0,a.kt)("inlineCode",{parentName:"p"},"2"),"). To fix this, set ",(0,a.kt)("inlineCode",{parentName:"p"},"jest --maxWorkers=2")," in your test command."))),(0,a.kt)("h3",d({},{id:"jenkins"}),"Jenkins"),(0,a.kt)("p",null,"Jenkins supports Docker agents for pipelines. Use the ",(0,a.kt)("a",d({parentName:"p"},{href:"/python/docs/1.18/docker"}),"Playwright Docker image")," to run tests on Jenkins."),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-groovy"}),"pipeline {\n   agent { docker { image 'mcr.microsoft.com/playwright:focal' } }\n   stages {\n      stage('e2e-tests') {\n         steps {\n            sh 'npm install'\n            sh 'npm run test'\n         }\n      }\n   }\n}\n")),(0,a.kt)("h3",d({},{id:"bitbucket-pipelines"}),"Bitbucket Pipelines"),(0,a.kt)("p",null,"Bitbucket Pipelines can use public ",(0,a.kt)("a",d({parentName:"p"},{href:"https://confluence.atlassian.com/bitbucket/use-docker-images-as-build-environments-792298897.html"}),"Docker images as build environments"),". To run Playwright tests on Bitbucket, use our public Docker image (",(0,a.kt)("a",d({parentName:"p"},{href:"/python/docs/1.18/docker"}),"see Dockerfile"),")."),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-yml"}),"image: mcr.microsoft.com/playwright:focal\n")),(0,a.kt)("p",null,"While the Docker image supports sandboxing for Chromium, it does not work in the Bitbucket Pipelines environment. To launch Chromium on Bitbucket Pipelines, use the ",(0,a.kt)("inlineCode",{parentName:"p"},"chromiumSandbox: false")," launch argument."),(0,a.kt)(r.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"sync",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-py"}),"browser = playwright.chromium.launch(chromium_sandbox=False)\n"))),(0,a.kt)(i.Z,{value:"async",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-py"}),"browser = await playwright.chromium.launch(chromium_sandbox=False)\n")))),(0,a.kt)("h3",d({},{id:"gitlab-ci"}),"GitLab CI"),(0,a.kt)("p",null,"To run Playwright tests on GitLab, use our public Docker image (",(0,a.kt)("a",d({parentName:"p"},{href:"/python/docs/1.18/docker"}),"see Dockerfile"),")."),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-yml"}),"stages:\n  - test\n\ntests:\n  stage: test\n  image: mcr.microsoft.com/playwright:focal\n  script:\n  ...\n")),(0,a.kt)("h2",d({},{id:"caching-browsers"}),"Caching browsers"),(0,a.kt)("p",null,"By default, Playwright downloads browser binaries when the Playwright NPM package is installed. The NPM packages have a ",(0,a.kt)("inlineCode",{parentName:"p"},"postinstall")," hook that downloads the browser binaries. This behavior can be ",(0,a.kt)("a",d({parentName:"p"},{href:"/python/docs/1.18/browsers#managing-browser-binaries"}),"customized with environment variables"),"."),(0,a.kt)("p",null,"Caching browsers on CI is ",(0,a.kt)("strong",{parentName:"p"},"strictly optional"),": The ",(0,a.kt)("inlineCode",{parentName:"p"},"postinstall")," hooks should execute and download the browser binaries on every run."),(0,a.kt)("h4",d({},{id:"exception-node_modules-are-cached-node-specific"}),"Exception: ",(0,a.kt)("inlineCode",{parentName:"h4"},"node_modules")," are cached (Node-specific)"),(0,a.kt)("p",null,"Most CI providers cache the ",(0,a.kt)("a",d({parentName:"p"},{href:"https://docs.npmjs.com/cli-commands/cache.html"}),"npm-cache")," directory (located at ",(0,a.kt)("inlineCode",{parentName:"p"},"$HOME/.npm"),"). If your CI pipelines caches the ",(0,a.kt)("inlineCode",{parentName:"p"},"node_modules")," directory and you run ",(0,a.kt)("inlineCode",{parentName:"p"},"npm install")," (instead of ",(0,a.kt)("inlineCode",{parentName:"p"},"npm ci"),"), the default configuration"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"will not work"),". This is because the ",(0,a.kt)("inlineCode",{parentName:"p"},"npm install")," step will find the Playwright NPM package on disk and not execute the ",(0,a.kt)("inlineCode",{parentName:"p"},"postinstall")," step."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Travis CI automatically caches ",(0,a.kt)("inlineCode",{parentName:"p"},"node_modules")," if your repo does not have a ",(0,a.kt)("inlineCode",{parentName:"p"},"package-lock.json")," file.")),(0,a.kt)("p",null,"This behavior can be fixed with one of the following approaches:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Move to caching ",(0,a.kt)("inlineCode",{parentName:"li"},"$HOME/.npm")," or the npm-cache directory. (This is the default behavior in most CI providers.)"),(0,a.kt)("li",{parentName:"ol"},"Set ",(0,a.kt)("inlineCode",{parentName:"li"},"PLAYWRIGHT_BROWSERS_PATH=0")," as the environment variable before running ",(0,a.kt)("inlineCode",{parentName:"li"},"npm install"),". This will download the browser binaries in the ",(0,a.kt)("inlineCode",{parentName:"li"},"node_modules")," directory and cache them with the package code. See ",(0,a.kt)("a",d({parentName:"li"},{href:"/python/docs/1.18/browsers#managing-browser-binaries"}),"managing browser binaries"),"."),(0,a.kt)("li",{parentName:"ol"},"Use ",(0,a.kt)("inlineCode",{parentName:"li"},"npm ci")," (instead of ",(0,a.kt)("inlineCode",{parentName:"li"},"npm install"),") which forces a clean install: by removing the existing ",(0,a.kt)("inlineCode",{parentName:"li"},"node_modules")," directory. See ",(0,a.kt)("a",d({parentName:"li"},{href:"https://docs.npmjs.com/cli/ci.html"}),"npm docs"),"."),(0,a.kt)("li",{parentName:"ol"},"Cache the browser binaries, with the steps below.")),(0,a.kt)("h4",d({},{id:"directories-to-cache"}),"Directories to cache"),(0,a.kt)("p",null,"With the default behavior, Playwright downloads the browser binaries in the following directories:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"%USERPROFILE%\\AppData\\Local\\ms-playwright")," on Windows"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"~/Library/Caches/ms-playwright")," on MacOS"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"~/.cache/ms-playwright")," on Linux")),(0,a.kt)("p",null,"To cache the browser downloads between CI runs, cache this location in your CI configuration, against a hash of the Playwright version."),(0,a.kt)("h2",d({},{id:"debugging-browser-launches"}),"Debugging browser launches"),(0,a.kt)("p",null,"Playwright supports the ",(0,a.kt)("inlineCode",{parentName:"p"},"DEBUG")," environment variable to output debug logs during execution. Setting it to ",(0,a.kt)("inlineCode",{parentName:"p"},"pw:browser*")," is helpful while debugging ",(0,a.kt)("inlineCode",{parentName:"p"},"Error: Failed to launch browser")," errors."),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"DEBUG=pw:browser* pytest\n")),(0,a.kt)("h2",d({},{id:"running-headed"}),"Running headed"),(0,a.kt)("p",null,"By default, Playwright launches browsers in headless mode. This can be changed by passing a flag when the browser is launched."),(0,a.kt)(r.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"sync",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-py"}),"from playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n   # Works across chromium, firefox and webkit\n   browser = p.chromium.launch(headless=False)\n"))),(0,a.kt)(i.Z,{value:"async",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-py"}),"import asyncio\nfrom playwright.async_api import async_playwright\n\nasync def main():\n    async with async_playwright() as p:\n         # Works across chromium, firefox and webkit\n         browser = await p.chromium.launch(headless=False)\n\nasyncio.run(main())\n")))),(0,a.kt)("p",null,"On Linux agents, headed execution requires ",(0,a.kt)("a",d({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Xvfb"}),"Xvfb")," to be installed. Our ",(0,a.kt)("a",d({parentName:"p"},{href:"/python/docs/1.18/docker"}),"Docker image")," and GitHub Action have Xvfb pre-installed. To run browsers in headed mode with Xvfb, add ",(0,a.kt)("inlineCode",{parentName:"p"},"xvfb-run")," before the Node.js command."),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"xvfb-run python test.py\n")))}v.isMDXComponent=!0}}]);