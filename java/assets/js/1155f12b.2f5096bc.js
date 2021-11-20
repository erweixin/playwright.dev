"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[6071],{3905:function(t,e,a){a.d(e,{Zo:function(){return p},kt:function(){return d}});var r=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function s(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?s(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},s=Object.keys(t);for(r=0;r<s.length;r++)a=s[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(r=0;r<s.length;r++)a=s[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var l=r.createContext({}),c=function(t){var e=r.useContext(l),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},p=function(t){var e=c(t.components);return r.createElement(l.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},h=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,s=t.originalType,l=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),h=c(a),d=n,g=h["".concat(l,".").concat(d)]||h[d]||u[d]||s;return a?r.createElement(g,i(i({ref:e},p),{},{components:a})):r.createElement(g,i({ref:e},p))}));function d(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var s=a.length,i=new Array(s);i[0]=h;var o={};for(var l in e)hasOwnProperty.call(e,l)&&(o[l]=e[l]);o.originalType=t,o.mdxType="string"==typeof t?t:n,i[1]=o;for(var c=2;c<s;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},8215:function(t,e,a){var r=a(7294);e.Z=function(t){var e=t.children,a=t.hidden,n=t.className;return r.createElement("div",{role:"tabpanel",hidden:a,className:n},e)}},5064:function(t,e,a){a.d(e,{Z:function(){return u}});var r=a(7294),n=a(9443);var s=function(){var t=(0,r.useContext)(n.Z);if(null==t)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return t},i=a(6010),o="tabItem_1uMI",l="tabItemActive_2DSg";var c=37,p=39;var u=function(t){var e=t.lazy,a=t.block,n=t.defaultValue,u=t.values,h=t.groupId,d=t.className,g=s(),f=g.tabGroupChoices,m=g.setTabGroupChoices,v=(0,r.useState)(n),y=v[0],w=v[1],k=r.Children.toArray(t.children),b=[];if(null!=h){var N=f[h];null!=N&&N!==y&&u.some((function(t){return t.value===N}))&&w(N)}var P=function(t){var e=t.currentTarget,a=b.indexOf(e),r=u[a].value;w(r),null!=h&&(m(h,r),setTimeout((function(){var t,a,r,n,s,i,o,c;(t=e.getBoundingClientRect(),a=t.top,r=t.left,n=t.bottom,s=t.right,i=window,o=i.innerHeight,c=i.innerWidth,a>=0&&s<=c&&n<=o&&r>=0)||(e.scrollIntoView({block:"center",behavior:"smooth"}),e.classList.add(l),setTimeout((function(){return e.classList.remove(l)}),2e3))}),150))},j=function(t){var e,a;switch(t.keyCode){case p:var r=b.indexOf(t.target)+1;a=b[r]||b[0];break;case c:var n=b.indexOf(t.target)-1;a=b[n]||b[b.length-1]}null==(e=a)||e.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":a},d)},u.map((function(t){var e=t.value,a=t.label;return r.createElement("li",{role:"tab",tabIndex:y===e?0:-1,"aria-selected":y===e,className:(0,i.Z)("tabs__item",o,{"tabs__item--active":y===e}),key:e,ref:function(t){return b.push(t)},onKeyDown:j,onFocus:P,onClick:P},a)}))),e?(0,r.cloneElement)(k.filter((function(t){return t.props.value===y}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},k.map((function(t,e){return(0,r.cloneElement)(t,{key:e,hidden:t.props.value!==y})}))))}},9443:function(t,e,a){var r=(0,a(7294).createContext)(void 0);e.Z=r},9595:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return i},contentTitle:function(){return o},metadata:function(){return l},toc:function(){return c},default:function(){return u}});var r=a(2122),n=a(9756),s=(a(7294),a(3905)),i=(a(5064),a(8215),{id:"class-playwrightassertions",title:"PlaywrightAssertions"}),o=void 0,l={unversionedId:"api/class-playwrightassertions",id:"version-1.17/api/class-playwrightassertions",isDocsHomePage:!1,title:"PlaywrightAssertions",description:"The [PlaywrightAssertions] class provides convenience methods for creating assertions that will wait until the expected condition is met.",source:"@site/versioned_docs/version-1.17/api/class-playwrightassertions.mdx",sourceDirName:"api",slug:"/api/class-playwrightassertions",permalink:"/java/docs/api/class-playwrightassertions",version:"1.17",frontMatter:{id:"class-playwrightassertions",title:"PlaywrightAssertions"},sidebar:"version-1.17/api",previous:{title:"PageAssertions",permalink:"/java/docs/api/class-pageassertions"},next:{title:"PlaywrightException",permalink:"/java/docs/api/class-playwrightexception"}},c=[{value:"PlaywrightAssertions.assertThat(locator)",id:"playwright-assertions-assert-that-locator",children:[]},{value:"PlaywrightAssertions.assertThat(page)",id:"playwright-assertions-assert-that-page",children:[]}],p={toc:c};function u(t){var e=t.components,a=(0,n.Z)(t,["components"]);return(0,s.kt)("wrapper",(0,r.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"The ",(0,s.kt)("a",{parentName:"p",href:"/java/docs/api/class-playwrightassertions",title:"PlaywrightAssertions"},"PlaywrightAssertions")," class provides convenience methods for creating assertions that will wait until the expected condition is met."),(0,s.kt)("p",null,"Consider the following example:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},'...\nimport static com.microsoft.playwright.assertions.PlaywrightAssertions.assertThat;\n\npublic class TestExample {\n  ...\n  @Test\n  void statusBecomesSubmitted() {\n    ...\n    page.click("#submit-button");\n    assertThat(page.locator(".status")).hasText("Submitted");\n  }\n}\n')),(0,s.kt)("p",null,"Playwright will be re-testing the node with the selector ",(0,s.kt)("inlineCode",{parentName:"p"},".status")," until fetched Node has the ",(0,s.kt)("inlineCode",{parentName:"p"},'"Submitted"')," text. It will be re-fetching the node and checking it over and over, until the condition is met or until the timeout is reached. You can pass this timeout as an option."),(0,s.kt)("p",null,"By default, the timeout for assertions is set to 5 seconds."),(0,s.kt)("p",null,"To use Playwright assertions add the following dependency into the ",(0,s.kt)("inlineCode",{parentName:"p"},"pom.xml")," of your Maven project:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n  <groupId>com.microsoft.playwright</groupId>\n  <artifactId>assertions</artifactId>\n  <version>1.17.0</version>\n</dependency>\n")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/java/docs/api/class-playwrightassertions#playwright-assertions-assert-that-locator"},"PlaywrightAssertions.assertThat(locator)")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/java/docs/api/class-playwrightassertions#playwright-assertions-assert-that-page"},"PlaywrightAssertions.assertThat(page)"))),(0,s.kt)("h2",{id:"playwright-assertions-assert-that-locator"},"PlaywrightAssertions.assertThat(locator)"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"locator"),(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"playwright-assertions-assert-that-locator-option-locator"})," ","<",(0,s.kt)("a",{parentName:"li",href:"/java/docs/api/class-locator",title:"Locator"},"Locator"),">"," ",(0,s.kt)("a",{parentName:"li",href:"/java/docs/api/class-locator",title:"Locator"},"Locator")," object to use for assertions.",(0,s.kt)("a",{href:"#playwright-assertions-assert-that-locator-option-locator",class:"list-anchor"},"#")),(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"playwright-assertions-assert-that-locator-return"})," ","<",(0,s.kt)("a",{parentName:"li",href:"/java/docs/api/class-locatorassertions",title:"LocatorAssertions"},"LocatorAssertions"),">",(0,s.kt)("a",{href:"#playwright-assertions-assert-that-locator-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"Creates a ",(0,s.kt)("a",{parentName:"p",href:"/java/docs/api/class-locatorassertions",title:"LocatorAssertions"},"LocatorAssertions")," object for the given ",(0,s.kt)("a",{parentName:"p",href:"/java/docs/api/class-locator",title:"Locator"},"Locator"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},"PlaywrightAssertions.assertThat(locator).isVisible();\n")),(0,s.kt)("h2",{id:"playwright-assertions-assert-that-page"},"PlaywrightAssertions.assertThat(page)"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"page"),(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"playwright-assertions-assert-that-page-option-page"})," ","<",(0,s.kt)("a",{parentName:"li",href:"/java/docs/api/class-page",title:"Page"},"Page"),">"," ",(0,s.kt)("a",{parentName:"li",href:"/java/docs/api/class-page",title:"Page"},"Page")," object to use for assertions.",(0,s.kt)("a",{href:"#playwright-assertions-assert-that-page-option-page",class:"list-anchor"},"#")),(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"playwright-assertions-assert-that-page-return"})," ","<",(0,s.kt)("a",{parentName:"li",href:"/java/docs/api/class-pageassertions",title:"PageAssertions"},"PageAssertions"),">",(0,s.kt)("a",{href:"#playwright-assertions-assert-that-page-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"Creates a ",(0,s.kt)("a",{parentName:"p",href:"/java/docs/api/class-pageassertions",title:"PageAssertions"},"PageAssertions")," object for the given ",(0,s.kt)("a",{parentName:"p",href:"/java/docs/api/class-page",title:"Page"},"Page"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},'PlaywrightAssertions.assertThat(page).hasTitle("News");\n')))}u.isMDXComponent=!0},6010:function(t,e,a){function r(t){var e,a,n="";if("string"==typeof t||"number"==typeof t)n+=t;else if("object"==typeof t)if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(a=r(t[e]))&&(n&&(n+=" "),n+=a);else for(e in t)t[e]&&(n&&(n+=" "),n+=e);return n}function n(){for(var t,e,a=0,n="";a<arguments.length;)(t=arguments[a++])&&(e=r(t))&&(n&&(n+=" "),n+=e);return n}a.d(e,{Z:function(){return n}})}}]);