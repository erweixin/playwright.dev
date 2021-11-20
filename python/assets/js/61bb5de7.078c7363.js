"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[9744],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return g}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),p=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),h=p(a),g=n,d=h["".concat(l,".").concat(g)]||h[g]||u[g]||s;return a?r.createElement(d,o(o({ref:t},c),{},{components:a})):r.createElement(d,o({ref:t},c))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,o=new Array(s);o[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var p=2;p<s;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},8215:function(e,t,a){var r=a(7294);t.Z=function(e){var t=e.children,a=e.hidden,n=e.className;return r.createElement("div",{role:"tabpanel",hidden:a,className:n},t)}},5064:function(e,t,a){a.d(t,{Z:function(){return u}});var r=a(7294),n=a(9443);var s=function(){var e=(0,r.useContext)(n.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},o=a(6010),i="tabItem_1uMI",l="tabItemActive_2DSg";var p=37,c=39;var u=function(e){var t=e.lazy,a=e.block,n=e.defaultValue,u=e.values,h=e.groupId,g=e.className,d=s(),m=d.tabGroupChoices,f=d.setTabGroupChoices,k=(0,r.useState)(n),v=k[0],y=k[1],_=r.Children.toArray(e.children),b=[];if(null!=h){var N=m[h];null!=N&&N!==v&&u.some((function(e){return e.value===N}))&&y(N)}var x=function(e){var t=e.currentTarget,a=b.indexOf(t),r=u[a].value;y(r),null!=h&&(f(h,r),setTimeout((function(){var e,a,r,n,s,o,i,p;(e=t.getBoundingClientRect(),a=e.top,r=e.left,n=e.bottom,s=e.right,o=window,i=o.innerHeight,p=o.innerWidth,a>=0&&s<=p&&n<=i&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((function(){return t.classList.remove(l)}),2e3))}),150))},w=function(e){var t,a;switch(e.keyCode){case c:var r=b.indexOf(e.target)+1;a=b[r]||b[0];break;case p:var n=b.indexOf(e.target)-1;a=b[n]||b[b.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},g)},u.map((function(e){var t=e.value,a=e.label;return r.createElement("li",{role:"tab",tabIndex:v===t?0:-1,"aria-selected":v===t,className:(0,o.Z)("tabs__item",i,{"tabs__item--active":v===t}),key:t,ref:function(e){return b.push(e)},onKeyDown:w,onFocus:x,onClick:x},a)}))),t?(0,r.cloneElement)(_.filter((function(e){return e.props.value===v}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},_.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==v})}))))}},9443:function(e,t,a){var r=(0,a(7294).createContext)(void 0);t.Z=r},8068:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return i},metadata:function(){return l},toc:function(){return p},default:function(){return u}});var r=a(2122),n=a(9756),s=(a(7294),a(3905)),o=(a(5064),a(8215),{id:"class-pageassertions",title:"PageAssertions"}),i=void 0,l={unversionedId:"api/class-pageassertions",id:"version-1.17/api/class-pageassertions",isDocsHomePage:!1,title:"PageAssertions",description:"The PageAssertions] class provides assertion methods that can be used to make assertions about the [Page] state in the tests. A new instance of [LocatorAssertions] is created by calling [playwright_assertions.expect(page):",source:"@site/versioned_docs/version-1.17/api/class-pageassertions.mdx",sourceDirName:"api",slug:"/api/class-pageassertions",permalink:"/python/docs/api/class-pageassertions",version:"1.17",frontMatter:{id:"class-pageassertions",title:"PageAssertions"}},p=[{value:"page_assertions.not_to_have_title(title_or_reg_exp, **kwargs)",id:"page-assertions-not-to-have-title",children:[]},{value:"page_assertions.not_to_have_url(url_or_reg_exp, **kwargs)",id:"page-assertions-not-to-have-url",children:[]},{value:"page_assertions.to_have_title(title_or_reg_exp, **kwargs)",id:"page-assertions-to-have-title",children:[]},{value:"page_assertions.to_have_url(url_or_reg_exp, **kwargs)",id:"page-assertions-to-have-url",children:[]}],c={toc:p};function u(e){var t=e.components,a=(0,n.Z)(e,["components"]);return(0,s.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"The ",(0,s.kt)("a",{parentName:"p",href:"/python/docs/api/class-pageassertions",title:"PageAssertions"},"PageAssertions")," class provides assertion methods that can be used to make assertions about the ",(0,s.kt)("a",{parentName:"p",href:"/python/docs/api/class-page",title:"Page"},"Page")," state in the tests. A new instance of ",(0,s.kt)("a",{parentName:"p",href:"/python/docs/api/class-locatorassertions",title:"LocatorAssertions"},"LocatorAssertions")," is created by calling ",(0,s.kt)("a",{parentName:"p",href:"/python/docs/api/class-playwrightassertions#playwright-assertions-assert-that-page"},"playwright_assertions.expect(page)"),":"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/python/docs/api/class-pageassertions#page-assertions-not-to-have-title"},"page_assertions.not_to_have_title(title_or_reg_exp, **kwargs)")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/python/docs/api/class-pageassertions#page-assertions-not-to-have-url"},"page_assertions.not_to_have_url(url_or_reg_exp, **kwargs)")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/python/docs/api/class-pageassertions#page-assertions-to-have-title"},"page_assertions.to_have_title(title_or_reg_exp, **kwargs)")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/python/docs/api/class-pageassertions#page-assertions-to-have-url"},"page_assertions.to_have_url(url_or_reg_exp, **kwargs)"))),(0,s.kt)("h2",{id:"page-assertions-not-to-have-title"},"page_assertions.not_to_have_title(title_or_reg_exp, **kwargs)"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"title_or_reg_exp"),(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"page-assertions-not-to-have-title-option-title-or-reg-exp"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),"|",(0,s.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/re.html",title:"Pattern"},"Pattern"),">"," Expected title or RegExp.",(0,s.kt)("a",{href:"#page-assertions-not-to-have-title-option-title-or-reg-exp",class:"list-anchor"},"#")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"timeout"),(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"page-assertions-not-to-have-title-option-timeout"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"float"},"float"),">"," Time to retry the assertion for.",(0,s.kt)("a",{href:"#page-assertions-not-to-have-title-option-timeout",class:"list-anchor"},"#")),(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"page-assertions-not-to-have-title-return"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/constants.html#None",title:"None"},"NoneType"),">",(0,s.kt)("a",{href:"#page-assertions-not-to-have-title-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"The opposite of ",(0,s.kt)("a",{parentName:"p",href:"/python/docs/api/class-pageassertions#page-assertions-to-have-title"},"page_assertions.to_have_title(title_or_reg_exp, **kwargs)"),"."),(0,s.kt)("h2",{id:"page-assertions-not-to-have-url"},"page_assertions.not_to_have_url(url_or_reg_exp, **kwargs)"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"url_or_reg_exp"),(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"page-assertions-not-to-have-url-option-url-or-reg-exp"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),"|",(0,s.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/re.html",title:"Pattern"},"Pattern"),">"," Expected substring or RegExp.",(0,s.kt)("a",{href:"#page-assertions-not-to-have-url-option-url-or-reg-exp",class:"list-anchor"},"#")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"timeout"),(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"page-assertions-not-to-have-url-option-timeout"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"float"},"float"),">"," Time to retry the assertion for.",(0,s.kt)("a",{href:"#page-assertions-not-to-have-url-option-timeout",class:"list-anchor"},"#")),(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"page-assertions-not-to-have-url-return"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/constants.html#None",title:"None"},"NoneType"),">",(0,s.kt)("a",{href:"#page-assertions-not-to-have-url-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"The opposite of ",(0,s.kt)("a",{parentName:"p",href:"/python/docs/api/class-pageassertions#page-assertions-to-have-url"},"page_assertions.to_have_url(url_or_reg_exp, **kwargs)"),"."),(0,s.kt)("h2",{id:"page-assertions-to-have-title"},"page_assertions.to_have_title(title_or_reg_exp, **kwargs)"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"title_or_reg_exp"),(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"page-assertions-to-have-title-option-title-or-reg-exp"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),"|",(0,s.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/re.html",title:"Pattern"},"Pattern"),">"," Expected title or RegExp.",(0,s.kt)("a",{href:"#page-assertions-to-have-title-option-title-or-reg-exp",class:"list-anchor"},"#")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"timeout"),(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"page-assertions-to-have-title-option-timeout"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"float"},"float"),">"," Time to retry the assertion for.",(0,s.kt)("a",{href:"#page-assertions-to-have-title-option-timeout",class:"list-anchor"},"#")),(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"page-assertions-to-have-title-return"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/constants.html#None",title:"None"},"NoneType"),">",(0,s.kt)("a",{href:"#page-assertions-to-have-title-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"Ensures the page has the given title."),(0,s.kt)("h2",{id:"page-assertions-to-have-url"},"page_assertions.to_have_url(url_or_reg_exp, **kwargs)"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"url_or_reg_exp"),(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"page-assertions-to-have-url-option-url-or-reg-exp"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),"|",(0,s.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/re.html",title:"Pattern"},"Pattern"),">"," Expected substring or RegExp.",(0,s.kt)("a",{href:"#page-assertions-to-have-url-option-url-or-reg-exp",class:"list-anchor"},"#")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"timeout"),(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"page-assertions-to-have-url-option-timeout"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"float"},"float"),">"," Time to retry the assertion for.",(0,s.kt)("a",{href:"#page-assertions-to-have-url-option-timeout",class:"list-anchor"},"#")),(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"page-assertions-to-have-url-return"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/constants.html#None",title:"None"},"NoneType"),">",(0,s.kt)("a",{href:"#page-assertions-to-have-url-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"Ensures the page is navigated to the given URL."))}u.isMDXComponent=!0},6010:function(e,t,a){function r(e){var t,a,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=r(e[t]))&&(n&&(n+=" "),n+=a);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function n(){for(var e,t,a=0,n="";a<arguments.length;)(e=arguments[a++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}a.d(t,{Z:function(){return n}})}}]);