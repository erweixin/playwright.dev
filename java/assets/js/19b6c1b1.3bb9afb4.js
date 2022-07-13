"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[7007],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return d}});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(t),d=i,h=m["".concat(l,".").concat(d)]||m[d]||u[d]||r;return t?a.createElement(h,o(o({ref:n},p),{},{components:t})):a.createElement(h,o({ref:n},p))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<r;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5033:function(e,n,t){t.r(n),t.d(n,{assets:function(){return g},contentTitle:function(){return d},default:function(){return f},frontMatter:function(){return m},metadata:function(){return h},toc:function(){return k}});var a=t(3905),i=Object.defineProperty,r=Object.defineProperties,o=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,n,t)=>n in e?i(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,u=(e,n)=>{for(var t in n||(n={}))l.call(n,t)&&p(e,t,n[t]);if(s)for(var t of s(n))c.call(n,t)&&p(e,t,n[t]);return e};const m={id:"ci",title:"Continuous Integration"},d=void 0,h={unversionedId:"ci",id:"ci",title:"Continuous Integration",description:"Playwright tests can be executed in CI environments. We have created sample configurations for common CI providers.",source:"@site/docs/ci.mdx",sourceDirName:".",slug:"/ci",permalink:"/java/docs/next/ci",tags:[],version:"current",frontMatter:{id:"ci",title:"Continuous Integration"},sidebar:"docs",previous:{title:"Docker",permalink:"/java/docs/next/docker"},next:{title:"Selenium Grid",permalink:"/java/docs/next/selenium-grid"}},g={},k=[{value:"Introduction",id:"introduction",level:2},{value:"CI configurations",id:"ci-configurations",level:2},{value:"GitHub Actions",id:"github-actions",level:3},{value:"GitHub Actions on deployment",id:"github-actions-on-deployment",level:3},{value:"Docker",id:"docker",level:3},{value:"GitHub Actions (via containers)",id:"github-actions-via-containers",level:3},{value:"Azure Pipelines",id:"azure-pipelines",level:3},{value:"CircleCI",id:"circleci",level:3},{value:"Jenkins",id:"jenkins",level:3},{value:"Bitbucket Pipelines",id:"bitbucket-pipelines",level:3},{value:"GitLab CI",id:"gitlab-ci",level:3},{value:"Caching browsers",id:"caching-browsers",level:2},{value:"Exception: <code>node_modules</code> are cached (Node-specific)",id:"exception-node_modules-are-cached-node-specific",level:4},{value:"Directories to cache",id:"directories-to-cache",level:4},{value:"Debugging browser launches",id:"debugging-browser-launches",level:2},{value:"Running headed",id:"running-headed",level:2}],b={toc:k};function f(e){var n,t=e,{components:i}=t,p=((e,n)=>{var t={};for(var a in e)l.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&s)for(var a of s(e))n.indexOf(a)<0&&c.call(e,a)&&(t[a]=e[a]);return t})(t,["components"]);return(0,a.kt)("wrapper",(n=u(u({},b),p),r(n,o({components:i,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"Playwright tests can be executed in CI environments. We have created sample configurations for common CI providers."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"#introduction"}),"Introduction")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"#ci-configurations"}),"CI configurations")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"#caching-browsers"}),"Caching browsers")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"#debugging-browser-launches"}),"Debugging browser launches")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"#running-headed"}),"Running headed"))),(0,a.kt)("h2",u({},{id:"introduction"}),"Introduction"),(0,a.kt)("p",null,"3 steps to get your tests running on CI:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Ensure CI agent can run browsers"),": Use ",(0,a.kt)("a",u({parentName:"p"},{href:"/java/docs/next/docker"}),"our Docker image")," in Linux agents or install your dependencies using the ",(0,a.kt)("a",u({parentName:"p"},{href:"/java/docs/next/cli#install-system-dependencies"}),"CLI"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Install Playwright"),":"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",u({parentName:"pre"},{className:"language-bash"}),'mvn exec:java -e -Dexec.mainClass=com.microsoft.playwright.CLI -Dexec.args="install --with-deps"\n'))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Run your tests"),":"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"mvn test\n")))),(0,a.kt)("h2",u({},{id:"ci-configurations"}),"CI configurations"),(0,a.kt)("p",null,"The ",(0,a.kt)("a",u({parentName:"p"},{href:"/java/docs/next/cli#install-system-dependencies"}),"Command line tools")," can be used to install all operating system dependencies on GitHub Actions."),(0,a.kt)("h3",u({},{id:"github-actions"}),"GitHub Actions"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-yml"}),"steps:\n  - uses: actions/checkout@v3\n  - uses: actions/setup-java@v3\n    with:\n      distribution: 'temurin'\n      java-version: '17'\n  - name: Build & Install\n    run: mvn -B install -D skipTests --no-transfer-progress\n  - name: Install Playwright\n    run: mvn exec:java -e -Dexec.mainClass=com.microsoft.playwright.CLI -Dexec.args=\"install --with-deps\"\n  - name: Run tests\n    run: mvn test\n")),(0,a.kt)("p",null,"We run ",(0,a.kt)("a",u({parentName:"p"},{href:"https://github.com/microsoft/playwright/blob/main/.github/workflows/tests_secondary.yml"}),"our tests")," on GitHub Actions, across a matrix of 3 platforms (Windows, Linux, macOS) and 3 browsers (Chromium, Firefox, WebKit)."),(0,a.kt)("h3",u({},{id:"github-actions-on-deployment"}),"GitHub Actions on deployment"),(0,a.kt)("p",null,"This will start the tests after a ",(0,a.kt)("a",u({parentName:"p"},{href:"https://developer.github.com/v3/repos/deployments/"}),"GitHub Deployment")," went into the ",(0,a.kt)("inlineCode",{parentName:"p"},"success")," state. Services like Vercel use this pattern so you can run your end-to-end tests on their deployed environment."),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-yml"}),"name: Playwright Tests\non:\n  deployment_status:\njobs:\n  test:\n    timeout-minutes: 60\n    runs-on: ubuntu-latest\n    if: github.event.deployment_status.state == 'success'\n    steps:\n    - uses: actions/checkout@v3\n    - uses: actions/setup-node@v2\n      with:\n        node-version: '14.x'\n    - name: Install dependencies\n      run: npm ci\n    - name: Install Playwright\n      run: npx playwright install --with-deps\n    - name: Run Playwright tests\n      run: npm run test:e2e\n      env:\n        # This might depend on your test-runner/language binding\n        PLAYWRIGHT_TEST_BASE_URL: ${{ github.event.deployment_status.target_url }}\n")),(0,a.kt)("h3",u({},{id:"docker"}),"Docker"),(0,a.kt)("p",null,"We have a ",(0,a.kt)("a",u({parentName:"p"},{href:"/java/docs/next/docker"}),"pre-built Docker image")," which can either be used directly, or as a reference to update your existing Docker definitions."),(0,a.kt)("p",null,"Suggested configuration"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Using ",(0,a.kt)("inlineCode",{parentName:"li"},"--ipc=host")," is also recommended when using Chromium\u2014without it Chromium can run out of memory and crash. Learn more about this option in ",(0,a.kt)("a",u({parentName:"li"},{href:"https://docs.docker.com/engine/reference/run/#ipc-settings---ipc"}),"Docker docs"),"."),(0,a.kt)("li",{parentName:"ol"},"Seeing other weird errors when launching Chromium? Try running your container with ",(0,a.kt)("inlineCode",{parentName:"li"},"docker run --cap-add=SYS_ADMIN")," when developing locally."),(0,a.kt)("li",{parentName:"ol"},"Using ",(0,a.kt)("inlineCode",{parentName:"li"},"--init")," Docker flag or ",(0,a.kt)("a",u({parentName:"li"},{href:"https://github.com/Yelp/dumb-init"}),"dumb-init")," is recommended to avoid special treatment for processes with PID=1. This is a common reason for zombie processes.")),(0,a.kt)("h3",u({},{id:"github-actions-via-containers"}),"GitHub Actions (via containers)"),(0,a.kt)("p",null,"GitHub Actions support ",(0,a.kt)("a",u({parentName:"p"},{href:"https://docs.github.com/en/actions/using-jobs/running-jobs-in-a-container"}),"running jobs in a container")," by using the ",(0,a.kt)("a",u({parentName:"p"},{href:"https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idcontainer"}),(0,a.kt)("inlineCode",{parentName:"a"},"jobs.<job_id>.container"))," option."),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-yml"}),"steps:\n  playwright:\n    name: 'Playwright Tests'\n    runs-on: ubuntu-latest\n    container:\n      image: mcr.microsoft.com/playwright:v1.24.0-focal\n    steps:\n      - uses: actions/checkout@v3\n      - uses: actions/setup-java@v3\n        with:\n          distribution: 'temurin'\n          java-version: '17'\n      - name: Build & Install\n        run: mvn -B install -D skipTests --no-transfer-progress\n      - name: Install Playwright\n        run: mvn exec:java -e -Dexec.mainClass=com.microsoft.playwright.CLI -Dexec.args=\"install --with-deps\"\n      - name: Run tests\n        run: mvn test\n")),(0,a.kt)("h3",u({},{id:"azure-pipelines"}),"Azure Pipelines"),(0,a.kt)("p",null,"For Windows or macOS agents, no additional configuration required, just install Playwright and run your tests."),(0,a.kt)("p",null,"For Linux agents, you can use ",(0,a.kt)("a",u({parentName:"p"},{href:"/java/docs/next/docker"}),"our Docker container")," with Azure Pipelines support ",(0,a.kt)("a",u({parentName:"p"},{href:"https://docs.microsoft.com/en-us/azure/devops/pipelines/process/container-phases?view=azure-devops"}),"running containerized jobs"),". Alternatively, you can use ",(0,a.kt)("a",u({parentName:"p"},{href:"/java/docs/next/cli#install-system-dependencies"}),"Command line tools")," to install all necessary dependencies."),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-yml"}),"pool:\n  vmImage: 'ubuntu-20.04'\n\ncontainer: mcr.microsoft.com/playwright:v1.24.0-focal\n\nsteps:\n...\n")),(0,a.kt)("h3",u({},{id:"circleci"}),"CircleCI"),(0,a.kt)("p",null,"Running Playwright on CircleCI requires the following steps:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Use the pre-built ",(0,a.kt)("a",u({parentName:"p"},{href:"/java/docs/next/docker"}),"Docker image")," in your config like so:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",u({parentName:"pre"},{className:"language-yml"}),"docker:\n  - image: mcr.microsoft.com/playwright:v1.24.0-focal\nenvironment:\n  NODE_ENV: development # Needed if playwright is in `devDependencies`\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"If you\u2019re using Playwright through Jest, then you may encounter an error spawning child processes:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",u({parentName:"pre"},{}),"[00:00.0]  jest args: --e2e --spec --max-workers=36\nError: spawn ENOMEM\n   at ChildProcess.spawn (internal/child_process.js:394:11)\n")),(0,a.kt)("p",{parentName:"li"},"This is likely caused by Jest autodetecting the number of processes on the entire machine (",(0,a.kt)("inlineCode",{parentName:"p"},"36"),") rather than the number allowed to your container (",(0,a.kt)("inlineCode",{parentName:"p"},"2"),"). To fix this, set ",(0,a.kt)("inlineCode",{parentName:"p"},"jest --maxWorkers=2")," in your test command."))),(0,a.kt)("h3",u({},{id:"jenkins"}),"Jenkins"),(0,a.kt)("p",null,"Jenkins supports Docker agents for pipelines. Use the ",(0,a.kt)("a",u({parentName:"p"},{href:"/java/docs/next/docker"}),"Playwright Docker image")," to run tests on Jenkins."),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-groovy"}),"pipeline {\n   agent { docker { image 'mcr.microsoft.com/playwright:v1.24.0-focal' } }\n   stages {\n      stage('e2e-tests') {\n         steps {\n            // Depends on your language / test framework\n            sh 'npm install'\n            sh 'npm run test'\n         }\n      }\n   }\n}\n")),(0,a.kt)("h3",u({},{id:"bitbucket-pipelines"}),"Bitbucket Pipelines"),(0,a.kt)("p",null,"Bitbucket Pipelines can use public ",(0,a.kt)("a",u({parentName:"p"},{href:"https://confluence.atlassian.com/bitbucket/use-docker-images-as-build-environments-792298897.html"}),"Docker images as build environments"),". To run Playwright tests on Bitbucket, use our public Docker image (",(0,a.kt)("a",u({parentName:"p"},{href:"/java/docs/next/docker"}),"see Dockerfile"),")."),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-yml"}),"image: mcr.microsoft.com/playwright:v1.24.0-focal\n")),(0,a.kt)("h3",u({},{id:"gitlab-ci"}),"GitLab CI"),(0,a.kt)("p",null,"To run Playwright tests on GitLab, use our public Docker image (",(0,a.kt)("a",u({parentName:"p"},{href:"/java/docs/next/docker"}),"see Dockerfile"),")."),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-yml"}),"stages:\n  - test\n\ntests:\n  stage: test\n  image: mcr.microsoft.com/playwright:v1.24.0-focal\n  script:\n  ...\n")),(0,a.kt)("h2",u({},{id:"caching-browsers"}),"Caching browsers"),(0,a.kt)("p",null,"By default, Playwright downloads browser binaries when the Playwright NPM package is installed. The NPM packages have a ",(0,a.kt)("inlineCode",{parentName:"p"},"postinstall")," hook that downloads the browser binaries. This behavior can be ",(0,a.kt)("a",u({parentName:"p"},{href:"/java/docs/next/browsers#managing-browser-binaries"}),"customized with environment variables"),"."),(0,a.kt)("p",null,"Caching browsers on CI is ",(0,a.kt)("strong",{parentName:"p"},"strictly optional"),": The ",(0,a.kt)("inlineCode",{parentName:"p"},"postinstall")," hooks should execute and download the browser binaries on every run."),(0,a.kt)("h4",u({},{id:"exception-node_modules-are-cached-node-specific"}),"Exception: ",(0,a.kt)("inlineCode",{parentName:"h4"},"node_modules")," are cached (Node-specific)"),(0,a.kt)("p",null,"Most CI providers cache the ",(0,a.kt)("a",u({parentName:"p"},{href:"https://docs.npmjs.com/cli-commands/cache.html"}),"npm-cache")," directory (located at ",(0,a.kt)("inlineCode",{parentName:"p"},"$HOME/.npm"),"). If your CI pipelines caches the ",(0,a.kt)("inlineCode",{parentName:"p"},"node_modules")," directory and you run ",(0,a.kt)("inlineCode",{parentName:"p"},"npm install")," (instead of ",(0,a.kt)("inlineCode",{parentName:"p"},"npm ci"),"), the default configuration"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"will not work"),". This is because the ",(0,a.kt)("inlineCode",{parentName:"p"},"npm install")," step will find the Playwright NPM package on disk and not execute the ",(0,a.kt)("inlineCode",{parentName:"p"},"postinstall")," step."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Travis CI automatically caches ",(0,a.kt)("inlineCode",{parentName:"p"},"node_modules")," if your repo does not have a ",(0,a.kt)("inlineCode",{parentName:"p"},"package-lock.json")," file.")),(0,a.kt)("p",null,"This behavior can be fixed with one of the following approaches:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Move to caching ",(0,a.kt)("inlineCode",{parentName:"li"},"$HOME/.npm")," or the npm-cache directory. (This is the default behavior in most CI providers.)"),(0,a.kt)("li",{parentName:"ol"},"Set ",(0,a.kt)("inlineCode",{parentName:"li"},"PLAYWRIGHT_BROWSERS_PATH=0")," as the environment variable before running ",(0,a.kt)("inlineCode",{parentName:"li"},"npm install"),". This will download the browser binaries in the ",(0,a.kt)("inlineCode",{parentName:"li"},"node_modules")," directory and cache them with the package code. See ",(0,a.kt)("a",u({parentName:"li"},{href:"/java/docs/next/browsers#managing-browser-binaries"}),"managing browser binaries"),"."),(0,a.kt)("li",{parentName:"ol"},"Use ",(0,a.kt)("inlineCode",{parentName:"li"},"npm ci")," (instead of ",(0,a.kt)("inlineCode",{parentName:"li"},"npm install"),") which forces a clean install: by removing the existing ",(0,a.kt)("inlineCode",{parentName:"li"},"node_modules")," directory. See ",(0,a.kt)("a",u({parentName:"li"},{href:"https://docs.npmjs.com/cli/ci.html"}),"npm docs"),"."),(0,a.kt)("li",{parentName:"ol"},"Cache the browser binaries, with the steps below.")),(0,a.kt)("h4",u({},{id:"directories-to-cache"}),"Directories to cache"),(0,a.kt)("p",null,"With the default behavior, Playwright downloads the browser binaries in the following directories:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"%USERPROFILE%\\AppData\\Local\\ms-playwright")," on Windows"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"~/Library/Caches/ms-playwright")," on MacOS"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"~/.cache/ms-playwright")," on Linux")),(0,a.kt)("p",null,"To cache the browser downloads between CI runs, cache this location in your CI configuration, against a hash of the Playwright version."),(0,a.kt)("h2",u({},{id:"debugging-browser-launches"}),"Debugging browser launches"),(0,a.kt)("p",null,"Playwright supports the ",(0,a.kt)("inlineCode",{parentName:"p"},"DEBUG")," environment variable to output debug logs during execution. Setting it to ",(0,a.kt)("inlineCode",{parentName:"p"},"pw:browser*")," is helpful while debugging ",(0,a.kt)("inlineCode",{parentName:"p"},"Error: Failed to launch browser")," errors."),(0,a.kt)("h2",u({},{id:"running-headed"}),"Running headed"),(0,a.kt)("p",null,"By default, Playwright launches browsers in headless mode. This can be changed by passing a flag when the browser is launched."),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-java"}),"// Works across chromium, firefox and webkit\nimport com.microsoft.playwright.*;\n\npublic class Example {\n  public static void main(String[] args) {\n    try (Playwright playwright = Playwright.create()) {\n      BrowserType chromium = playwright.chromium();\n      Browser browser = chromium.launch(new BrowserType.LaunchOptions().setHeadless(false));\n    }\n  }\n}\n")),(0,a.kt)("p",null,"On Linux agents, headed execution requires ",(0,a.kt)("a",u({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Xvfb"}),"Xvfb")," to be installed. Our ",(0,a.kt)("a",u({parentName:"p"},{href:"/java/docs/next/docker"}),"Docker image")," and GitHub Action have Xvfb pre-installed. To run browsers in headed mode with Xvfb, add ",(0,a.kt)("inlineCode",{parentName:"p"},"xvfb-run")," before the Node.js command."))}f.isMDXComponent=!0}}]);