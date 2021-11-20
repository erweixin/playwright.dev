"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[2359],{3905:function(e,t,a){a.d(t,{Zo:function(){return o},kt:function(){return d}});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},o=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),m=c(a),d=l,h=m["".concat(s,".").concat(d)]||m[d]||u[d]||r;return a?n.createElement(h,i(i({ref:t},o),{},{components:a})):n.createElement(h,i({ref:t},o))}));function d(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:l,i[1]=p;for(var c=2;c<r;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},8215:function(e,t,a){var n=a(7294);t.Z=function(e){var t=e.children,a=e.hidden,l=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:l},t)}},5064:function(e,t,a){a.d(t,{Z:function(){return u}});var n=a(7294),l=a(9443);var r=function(){var e=(0,n.useContext)(l.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=a(6010),p="tabItem_1uMI",s="tabItemActive_2DSg";var c=37,o=39;var u=function(e){var t=e.lazy,a=e.block,l=e.defaultValue,u=e.values,m=e.groupId,d=e.className,h=r(),k=h.tabGroupChoices,f=h.setTabGroupChoices,y=(0,n.useState)(l),g=y[0],v=y[1],b=n.Children.toArray(e.children),N=[];if(null!=m){var w=k[m];null!=w&&w!==g&&u.some((function(e){return e.value===w}))&&v(w)}var T=function(e){var t=e.currentTarget,a=N.indexOf(t),n=u[a].value;v(n),null!=m&&(f(m,n),setTimeout((function(){var e,a,n,l,r,i,p,c;(e=t.getBoundingClientRect(),a=e.top,n=e.left,l=e.bottom,r=e.right,i=window,p=i.innerHeight,c=i.innerWidth,a>=0&&r<=c&&l<=p&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},x=function(e){var t,a;switch(e.keyCode){case o:var n=N.indexOf(e.target)+1;a=N[n]||N[0];break;case c:var l=N.indexOf(e.target)-1;a=N[l]||N[N.length-1]}null==(t=a)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":a},d)},u.map((function(e){var t=e.value,a=e.label;return n.createElement("li",{role:"tab",tabIndex:g===t?0:-1,"aria-selected":g===t,className:(0,i.Z)("tabs__item",p,{"tabs__item--active":g===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:x,onFocus:T,onClick:T},a)}))),t?(0,n.cloneElement)(b.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},b.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==g})}))))}},9443:function(e,t,a){var n=(0,a(7294).createContext)(void 0);t.Z=n},2069:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return o},toc:function(){return u},default:function(){return d}});var n=a(2122),l=a(9756),r=(a(7294),a(3905)),i=a(5064),p=a(8215),s={id:"input",title:"Input"},c=void 0,o={unversionedId:"input",id:"version-1.17/input",isDocsHomePage:!1,title:"Input",description:"- Text input",source:"@site/versioned_docs/version-1.17/input.mdx",sourceDirName:".",slug:"/input",permalink:"/python/docs/input",version:"1.17",frontMatter:{id:"input",title:"Input"},sidebar:"version-1.17/docs",previous:{title:"Handles",permalink:"/python/docs/handles"},next:{title:"Navigations",permalink:"/python/docs/navigations"}},u=[{value:"Text input",id:"text-input",children:[{value:"API reference",id:"api-reference",children:[]}]},{value:"Checkboxes and radio buttons",id:"checkboxes-and-radio-buttons",children:[{value:"API reference",id:"api-reference-1",children:[]}]},{value:"Select options",id:"select-options",children:[{value:"API reference",id:"api-reference-2",children:[]}]},{value:"Mouse click",id:"mouse-click",children:[{value:"API reference",id:"api-reference-3",children:[]}]},{value:"Type characters",id:"type-characters",children:[{value:"API reference",id:"api-reference-4",children:[]}]},{value:"Keys and shortcuts",id:"keys-and-shortcuts",children:[{value:"API reference",id:"api-reference-5",children:[]}]},{value:"Upload files",id:"upload-files",children:[{value:"API reference",id:"api-reference-6",children:[]}]},{value:"Focus element",id:"focus-element",children:[{value:"API reference",id:"api-reference-7",children:[]}]}],m={toc:u};function d(e){var t=e.components,a=(0,l.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#text-input"},"Text input")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#checkboxes-and-radio-buttons"},"Checkboxes and radio buttons")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#select-options"},"Select options")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#mouse-click"},"Mouse click")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#type-characters"},"Type characters")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#keys-and-shortcuts"},"Keys and shortcuts")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#upload-files"},"Upload files")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#focus-element"},"Focus element"))),(0,r.kt)("h2",{id:"text-input"},"Text input"),(0,r.kt)("p",null,"This is the easiest way to fill out the form fields. It focuses the element and triggers an ",(0,r.kt)("inlineCode",{parentName:"p"},"input")," event with the entered text. It works for ",(0,r.kt)("inlineCode",{parentName:"p"},"<input>"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"<textarea>"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"[contenteditable]")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"<label>")," associated with an input or textarea."),(0,r.kt)(i.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,r.kt)(p.Z,{value:"sync",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"# Text input\npage.fill('#name', 'Peter')\n\n# Date input\npage.fill('#date', '2020-02-02')\n\n# Time input\npage.fill('#time', '13:15')\n\n# Local datetime input\npage.fill('#local', '2020-03-02T05:15')\n\n# Input through label\npage.fill('text=First Name', 'Peter')\n"))),(0,r.kt)(p.Z,{value:"async",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"# Text input\nawait page.fill('#name', 'Peter')\n\n# Date input\nawait page.fill('#date', '2020-02-02')\n\n# Time input\nawait page.fill('#time', '13:15')\n\n# Local datetime input\nawait page.fill('#local', '2020-03-02T05:15')\n\n# Input through label\nawait page.fill('text=First Name', 'Peter')\n")))),(0,r.kt)("h3",{id:"api-reference"},"API reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/python/docs/api/class-page#page-fill"},"page.fill(selector, value, **kwargs)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/python/docs/api/class-frame#frame-fill"},"frame.fill(selector, value, **kwargs)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/python/docs/api/class-elementhandle#element-handle-fill"},"element_handle.fill(value, **kwargs)"))),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"checkboxes-and-radio-buttons"},"Checkboxes and radio buttons"),(0,r.kt)("p",null,"This is the easiest way to check and uncheck a checkbox or a radio button. This method can be used with ",(0,r.kt)("inlineCode",{parentName:"p"},"input[type=checkbox]"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"input[type=radio]"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"[role=checkbox]")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"label")," associated with checkbox or radio button."),(0,r.kt)(i.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,r.kt)(p.Z,{value:"sync",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"# Check the checkbox\npage.check('#agree')\n\n# Assert the checked state\nassert page.is_checked('#agree') is True\n\n# Uncheck by input <label>.\npage.uncheck('#subscribe-label')\n\n# Select the radio button\npage.check('text=XL')\n"))),(0,r.kt)(p.Z,{value:"async",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"# Check the checkbox\nawait page.check('#agree')\n\n# Assert the checked state\nassert await page.is_checked('#agree') is True\n\n# Uncheck by input <label>.\nawait page.uncheck('#subscribe-label')\n\n# Select the radio button\nawait page.check('text=XL')\n")))),(0,r.kt)("h3",{id:"api-reference-1"},"API reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/python/docs/api/class-page#page-check"},"page.check(selector, **kwargs)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/python/docs/api/class-page#page-is-checked"},"page.is_checked(selector, **kwargs)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/python/docs/api/class-page#page-uncheck"},"page.uncheck(selector, **kwargs)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/python/docs/api/class-elementhandle#element-handle-check"},"element_handle.check(**kwargs)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/python/docs/api/class-elementhandle#element-handle-is-checked"},"element_handle.is_checked()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/python/docs/api/class-elementhandle#element-handle-uncheck"},"element_handle.uncheck(**kwargs)"))),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"select-options"},"Select options"),(0,r.kt)("p",null,"Selects one or multiple options in the ",(0,r.kt)("inlineCode",{parentName:"p"},"<select>")," element. You can specify option ",(0,r.kt)("inlineCode",{parentName:"p"},"value"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"label")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"elementHandle")," to select. Multiple options can be selected."),(0,r.kt)(i.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,r.kt)(p.Z,{value:"sync",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"# Single selection matching the value\npage.select_option('select#colors', 'blue')\n\n# Single selection matching the label\npage.select_option('select#colors', label='Blue')\n\n# Multiple selected items\npage.select_option('select#colors', ['red', 'green', 'blue'])\n\n# Select the option via element handle\noption = page.query_selector('#best-option')\npage.select_option('select#colors', option)\n"))),(0,r.kt)(p.Z,{value:"async",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"# Single selection matching the value\nawait page.select_option('select#colors', 'blue')\n\n# Single selection matching the label\nawait page.select_option('select#colors', label='Blue')\n\n# Multiple selected items\nawait page.select_option('select#colors', ['red', 'green', 'blue'])\n\n# Select the option via element handle\noption = await page.query_selector('#best-option')\nawait page.select_option('select#colors', option)\n")))),(0,r.kt)("h3",{id:"api-reference-2"},"API reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/python/docs/api/class-page#page-select-option"},"page.select_option(selector, **kwargs)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/python/docs/api/class-frame#frame-select-option"},"frame.select_option(selector, **kwargs)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/python/docs/api/class-elementhandle#element-handle-select-option"},"element_handle.select_option(**kwargs)"))),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"mouse-click"},"Mouse click"),(0,r.kt)("p",null,"Performs a simple human click."),(0,r.kt)(i.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,r.kt)(p.Z,{value:"sync",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"# Generic click\npage.click('button#submit')\n\n# Double click\npage.dblclick('#item')\n\n# Right click\npage.click('#item', button='right')\n\n# Shift + click\npage.click('#item', modifiers=['Shift'])\n\n# Hover over element\npage.hover('#item')\n\n# Click the top left corner\npage.click('#item', position={ 'x': 0, 'y': 0})\n"))),(0,r.kt)(p.Z,{value:"async",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"# Generic click\nawait page.click('button#submit')\n\n# Double click\nawait page.dblclick('#item')\n\n# Right click\nawait page.click('#item', button='right')\n\n# Shift + click\nawait page.click('#item', modifiers=['Shift'])\n\n# Hover over element\nawait page.hover('#item')\n\n# Click the top left corner\nawait page.click('#item', position={ 'x': 0, 'y': 0})\n")))),(0,r.kt)("p",null,"Under the hood, this and other pointer-related methods:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"wait for element with given selector to be in DOM"),(0,r.kt)("li",{parentName:"ul"},"wait for it to become displayed, i.e. not empty, no ",(0,r.kt)("inlineCode",{parentName:"li"},"display:none"),", no ",(0,r.kt)("inlineCode",{parentName:"li"},"visibility:hidden")),(0,r.kt)("li",{parentName:"ul"},"wait for it to stop moving, for example, until css transition finishes"),(0,r.kt)("li",{parentName:"ul"},"scroll the element into view"),(0,r.kt)("li",{parentName:"ul"},"wait for it to receive pointer events at the action point, for example, waits until element becomes non-obscured by other elements"),(0,r.kt)("li",{parentName:"ul"},"retry if the element is detached during any of the above checks")),(0,r.kt)("h4",{id:"forcing-the-click"},"Forcing the click"),(0,r.kt)("p",null,"Sometimes, apps use non-trivial logic where hovering the element overlays it with another element that intercepts the click. This behavior is indistinguishable from a bug where element gets covered and the click is dispatched elsewhere. If you know this is taking place, you can bypass the ",(0,r.kt)("a",{parentName:"p",href:"/python/docs/actionability"},"actionability")," checks and force the click:"),(0,r.kt)(i.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,r.kt)(p.Z,{value:"sync",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"page.click('button#submit', force=True)\n"))),(0,r.kt)(p.Z,{value:"async",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"await page.click('button#submit', force=True)\n")))),(0,r.kt)("h4",{id:"programmatic-click"},"Programmatic click"),(0,r.kt)("p",null,"If you are not interested in testing your app under the real conditions and want to simulate the click by any means possible, you can trigger the ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/click"},(0,r.kt)("inlineCode",{parentName:"a"},"HTMLElement.click()"))," behavior via simply dispatching a click event on the element:"),(0,r.kt)(i.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,r.kt)(p.Z,{value:"sync",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"page.dispatch_event('button#submit', 'click')\n"))),(0,r.kt)(p.Z,{value:"async",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"await page.dispatch_event('button#submit', 'click')\n")))),(0,r.kt)("h3",{id:"api-reference-3"},"API reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/python/docs/api/class-page#page-click"},"page.click(selector, **kwargs)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/python/docs/api/class-frame#frame-click"},"frame.click(selector, **kwargs)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/python/docs/api/class-elementhandle#element-handle-click"},"element_handle.click(**kwargs)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/python/docs/api/class-page#page-dblclick"},"page.dblclick(selector, **kwargs)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/python/docs/api/class-frame#frame-dblclick"},"frame.dblclick(selector, **kwargs)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/python/docs/api/class-elementhandle#element-handle-dblclick"},"element_handle.dblclick(**kwargs)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/python/docs/api/class-page#page-hover"},"page.hover(selector, **kwargs)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/python/docs/api/class-frame#frame-hover"},"frame.hover(selector, **kwargs)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/python/docs/api/class-elementhandle#element-handle-hover"},"element_handle.hover(**kwargs)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/python/docs/api/class-page#page-dispatch-event"},"page.dispatch_event(selector, type, **kwargs)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/python/docs/api/class-frame#frame-dispatch-event"},"frame.dispatch_event(selector, type, **kwargs)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/python/docs/api/class-elementhandle#element-handle-dispatch-event"},"element_handle.dispatch_event(type, **kwargs)"))),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"type-characters"},"Type characters"),(0,r.kt)("p",null,"Type into the field character by character, as if it was a user with a real keyboard."),(0,r.kt)(i.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,r.kt)(p.Z,{value:"sync",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"# Type character by character\npage.type('#area', 'Hello World!')\n"))),(0,r.kt)(p.Z,{value:"async",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"# Type character by character\nawait page.type('#area', 'Hello World!')\n")))),(0,r.kt)("p",null,"This method will emit all the necessary keyboard events, with all the ",(0,r.kt)("inlineCode",{parentName:"p"},"keydown"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"keyup"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"keypress")," events in place. You can even specify the optional ",(0,r.kt)("inlineCode",{parentName:"p"},"delay")," between the key presses to simulate real user behavior."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Most of the time, ",(0,r.kt)("a",{parentName:"p",href:"/python/docs/api/class-page#page-fill"},"page.fill(selector, value, **kwargs)")," will just work. You only need to type characters if there is special keyboard handling on the page."))),(0,r.kt)("h3",{id:"api-reference-4"},"API reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/python/docs/api/class-page#page-type"},"page.type(selector, text, **kwargs)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/python/docs/api/class-frame#frame-type"},"frame.type(selector, text, **kwargs)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/python/docs/api/class-elementhandle#element-handle-type"},"element_handle.type(text, **kwargs)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/python/docs/api/class-keyboard#keyboard-type"},"keyboard.type(text, **kwargs)"))),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"keys-and-shortcuts"},"Keys and shortcuts"),(0,r.kt)(i.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,r.kt)(p.Z,{value:"sync",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"# Hit Enter\npage.press('#submit', 'Enter')\n\n# Dispatch Control+Right\npage.press('#name', 'Control+ArrowRight')\n\n# Press $ sign on keyboard\npage.press('#value', '$')\n"))),(0,r.kt)(p.Z,{value:"async",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"# Hit Enter\nawait page.press('#submit', 'Enter')\n\n# Dispatch Control+Right\nawait page.press('#name', 'Control+ArrowRight')\n\n# Press $ sign on keyboard\nawait page.press('#value', '$')\n")))),(0,r.kt)("p",null,"This method focuses the selected element and produces a single keystroke. It accepts the logical key names that are emitted in the ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key"},"keyboardEvent.key")," property of the keyboard events:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Backquote, Minus, Equal, Backslash, Backspace, Tab, Delete, Escape,\nArrowDown, End, Enter, Home, Insert, PageDown, PageUp, ArrowRight,\nArrowUp, F1 - F12, Digit0 - Digit9, KeyA - KeyZ, etc.\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You can alternatively specify a single character you'd like to produce such as ",(0,r.kt)("inlineCode",{parentName:"li"},'"a"')," or ",(0,r.kt)("inlineCode",{parentName:"li"},'"#"'),"."),(0,r.kt)("li",{parentName:"ul"},"Following modification shortcuts are also supported: ",(0,r.kt)("inlineCode",{parentName:"li"},"Shift, Control, Alt, Meta"),".")),(0,r.kt)("p",null,"Simple version produces a single character. This character is case-sensitive, so ",(0,r.kt)("inlineCode",{parentName:"p"},'"a"')," and ",(0,r.kt)("inlineCode",{parentName:"p"},'"A"')," will produce different results."),(0,r.kt)(i.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,r.kt)(p.Z,{value:"sync",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"# <input id=name>\npage.press('#name', 'Shift+A')\n\n# <input id=name>\npage.press('#name', 'Shift+ArrowLeft')\n"))),(0,r.kt)(p.Z,{value:"async",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"# <input id=name>\nawait page.press('#name', 'Shift+A')\n\n# <input id=name>\nawait page.press('#name', 'Shift+ArrowLeft')\n")))),(0,r.kt)("p",null,"Shortcuts such as ",(0,r.kt)("inlineCode",{parentName:"p"},'"Control+o"')," or ",(0,r.kt)("inlineCode",{parentName:"p"},'"Control+Shift+T"')," are supported as well. When specified with the modifier, modifier is pressed and being held while the subsequent key is being pressed."),(0,r.kt)("p",null,"Note that you still need to specify the capital ",(0,r.kt)("inlineCode",{parentName:"p"},"A")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"Shift-A")," to produce the capital character. ",(0,r.kt)("inlineCode",{parentName:"p"},"Shift-a")," produces a lower-case one as if you had the ",(0,r.kt)("inlineCode",{parentName:"p"},"CapsLock")," toggled."),(0,r.kt)("h3",{id:"api-reference-5"},"API reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/python/docs/api/class-page#page-press"},"page.press(selector, key, **kwargs)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/python/docs/api/class-frame#frame-press"},"frame.press(selector, key, **kwargs)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/python/docs/api/class-elementhandle#element-handle-press"},"element_handle.press(key, **kwargs)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/python/docs/api/class-keyboard#keyboard-press"},"keyboard.press(key, **kwargs)"))),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"upload-files"},"Upload files"),(0,r.kt)("p",null,"You can select input files for upload using the ",(0,r.kt)("a",{parentName:"p",href:"/python/docs/api/class-page#page-set-input-files"},"page.set_input_files(selector, files, **kwargs)")," method. It expects first argument to point to an ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input"},"input element")," with the type ",(0,r.kt)("inlineCode",{parentName:"p"},'"file"'),". Multiple files can be passed in the array. If some of the file paths are relative, they are resolved relative to the current working directory. Empty array clears the selected files."),(0,r.kt)(i.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,r.kt)(p.Z,{value:"sync",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},'# Select one file\npage.set_input_files(\'input#upload\', \'myfile.pdf\')\n\n# Select multiple files\npage.set_input_files(\'input#upload\', [\'file1.txt\', \'file2.txt\'])\n\n# Remove all the selected files\npage.set_input_files(\'input#upload\', [])\n\n# Upload buffer from memory\npage.set_input_files(\n    "input#upload",\n    files=[\n        {"name": "test.txt", "mimeType": "text/plain", "buffer": b"this is a test"}\n    ],\n)\n'))),(0,r.kt)(p.Z,{value:"async",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},'# Select one file\nawait page.set_input_files(\'input#upload\', \'myfile.pdf\')\n\n# Select multiple files\nawait page.set_input_files(\'input#upload\', [\'file1.txt\', \'file2.txt\'])\n\n# Remove all the selected files\nawait page.set_input_files(\'input#upload\', [])\n\n# Upload buffer from memory\nawait page.set_input_files(\n    "input#upload",\n    files=[\n        {"name": "test.txt", "mimeType": "text/plain", "buffer": b"this is a test"}\n    ],\n)\n')))),(0,r.kt)("p",null,"If you don't have input element in hand (it is created dynamically), you can handle the ",(0,r.kt)("a",{parentName:"p",href:"/python/docs/api/class-page#page-event-file-chooser"},'page.on("filechooser")')," event or use a corresponding waiting method upon your action:"),(0,r.kt)(i.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,r.kt)(p.Z,{value:"sync",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},'with page.expect_file_chooser() as fc_info:\n    page.click("upload")\nfile_chooser = fc_info.value\nfile_chooser.set_files("myfile.pdf")\n'))),(0,r.kt)(p.Z,{value:"async",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},'async with page.expect_file_chooser() as fc_info:\n    await page.click("upload")\nfile_chooser = await fc_info.value\nawait file_chooser.set_files("myfile.pdf")\n')))),(0,r.kt)("h3",{id:"api-reference-6"},"API reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/python/docs/api/class-filechooser",title:"FileChooser"},"FileChooser")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/python/docs/api/class-page#page-set-input-files"},"page.set_input_files(selector, files, **kwargs)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/python/docs/api/class-frame#frame-set-input-files"},"frame.set_input_files(selector, files, **kwargs)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/python/docs/api/class-elementhandle#element-handle-set-input-files"},"element_handle.set_input_files(files, **kwargs)"))),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"focus-element"},"Focus element"),(0,r.kt)("p",null,"For the dynamic pages that handle focus events, you can focus the given element."),(0,r.kt)(i.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,r.kt)(p.Z,{value:"sync",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"page.focus('input#name')\n"))),(0,r.kt)(p.Z,{value:"async",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"await page.focus('input#name')\n")))),(0,r.kt)("h3",{id:"api-reference-7"},"API reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/python/docs/api/class-page#page-focus"},"page.focus(selector, **kwargs)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/python/docs/api/class-frame#frame-focus"},"frame.focus(selector, **kwargs)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/python/docs/api/class-elementhandle#element-handle-focus"},"element_handle.focus()"))),(0,r.kt)("br",null))}d.isMDXComponent=!0},6010:function(e,t,a){function n(e){var t,a,l="";if("string"==typeof e||"number"==typeof e)l+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(l&&(l+=" "),l+=a);else for(t in e)e[t]&&(l&&(l+=" "),l+=t);return l}function l(){for(var e,t,a=0,l="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(l&&(l+=" "),l+=t);return l}a.d(t,{Z:function(){return l}})}}]);