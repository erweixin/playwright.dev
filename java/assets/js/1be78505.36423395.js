(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[9514,1501],{3616:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return te}});var r=n(7294),u=n(3905),a=n(2263),o=n(6291),i=n(4543),s=n(2122),l=n(9756),c=n(6010),d=n(6700),p=n(944),h=n(1839),m=n(3783),f=n(7898),v=n(6742),g=n(3919),D=n(5537),F=function(e){return r.createElement("svg",(0,s.Z)({width:"20",height:"20",role:"img"},e),r.createElement("g",{fill:"#7a7a7a"},r.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),r.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))},b=n(4478),C=n(4973),E="sidebar_15mo",k="sidebarWithHideableNavbar_267A",A="sidebarHidden_2kNb",_="sidebarLogo_3h0W",x="menu_Bmed",y="menuLinkText_2aKo",w="menuWithAnnouncementBar_2WvA",Z="collapseSidebarButton_1CGd",I="collapseSidebarButtonIcon_3E-R",N="sidebarMenuIcon_fgN0",S="sidebarMenuCloseIcon_1lpH",B="menuLinkExternal_1OhN";var L=function e(t,n){return"link"===t.type?(0,d.Mg)(t.href,n):"category"===t.type&&t.items.some((function(t){return e(t,n)}))},R=(0,r.memo)((function(e){var t=e.items,n=(0,l.Z)(e,["items"]);return t.map((function(e,t){return r.createElement(z,(0,s.Z)({key:t,item:e},n))}))}));function z(e){switch(e.item.type){case"category":return r.createElement(M,e);case"link":default:return r.createElement(T,e)}}function M(e){var t,n,u,a=e.item,o=e.onItemClick,i=e.collapsible,d=e.activePath,p=(0,l.Z)(e,["item","onItemClick","collapsible","activePath"]),h=a.items,m=a.label,f=L(a,d),v=(n=f,u=(0,r.useRef)(n),(0,r.useEffect)((function(){u.current=n}),[n]),u.current),g=(0,r.useState)((function(){return!!i&&(!f&&a.collapsed)})),D=g[0],F=g[1],b=(0,r.useRef)(null),C=(0,r.useState)(void 0),E=C[0],k=C[1],A=function(e){var t;void 0===e&&(e=!0),k(e?(null==(t=b.current)?void 0:t.scrollHeight)+"px":void 0)};(0,r.useEffect)((function(){f&&!v&&D&&F(!1)}),[f,v,D]);var _=(0,r.useCallback)((function(e){e.preventDefault(),E||A(),setTimeout((function(){return F((function(e){return!e}))}),100)}),[E]);return 0===h.length?null:r.createElement("li",{className:(0,c.Z)("menu__list-item",{"menu__list-item--collapsed":D})},r.createElement("a",(0,s.Z)({className:(0,c.Z)("menu__link",(t={"menu__link--sublist":i,"menu__link--active":i&&f},t[y]=!i,t)),onClick:i?_:void 0,href:i?"#!":void 0},p),m),r.createElement("ul",{className:"menu__list",ref:b,style:{height:E},onTransitionEnd:function(){D||A(!1)}},r.createElement(R,{items:h,tabIndex:D?"-1":"0",onItemClick:o,collapsible:i,activePath:d})))}function T(e){var t,n=e.item,u=e.onItemClick,a=e.activePath,o=(e.collapsible,(0,l.Z)(e,["item","onItemClick","activePath","collapsible"])),i=n.href,d=n.label,p=L(n,a);return r.createElement("li",{className:"menu__list-item",key:d},r.createElement(v.Z,(0,s.Z)({className:(0,c.Z)("menu__link",(t={"menu__link--active":p},t[B]=!(0,g.Z)(i),t)),to:i},(0,g.Z)(i)&&{isNavLink:!0,exact:!0,onClick:u},o),d))}function H(e){var t=e.onClick;return r.createElement("button",{type:"button",title:(0,C.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,C.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,c.Z)("button button--secondary button--outline",Z),onClick:t},r.createElement(F,{className:I}))}function P(e){var t=e.responsiveSidebarOpened,n=e.onClick;return r.createElement("button",{"aria-label":t?(0,C.I)({id:"theme.docs.sidebar.responsiveCloseButtonLabel",message:"Close menu",description:"The ARIA label for close button of mobile doc sidebar"}):(0,C.I)({id:"theme.docs.sidebar.responsiveOpenButtonLabel",message:"Open menu",description:"The ARIA label for open button of mobile doc sidebar"}),"aria-haspopup":"true",className:"button button--secondary button--sm menu__button",type:"button",onClick:n},t?r.createElement("span",{className:(0,c.Z)(N,S)},"\xd7"):r.createElement(b.Z,{className:N,height:24,width:24}))}var W=function(e){var t,n,u=e.path,a=e.sidebar,o=e.sidebarCollapsible,i=void 0===o||o,s=e.onCollapse,l=e.isHidden,v=function(){var e=(0,p.Z)().isAnnouncementBarClosed,t=(0,r.useState)(!e),n=t[0],u=t[1];return(0,f.Z)((function(t){var n=t.scrollY;e||u(0===n)})),n}(),g=(0,d.LU)(),F=g.navbar.hideOnScroll,b=g.hideableSidebar,C=(0,p.Z)().isAnnouncementBarClosed,y=function(){var e=(0,r.useState)(!1),t=e[0],n=e[1];(0,h.Z)(t);var u=(0,m.Z)();return(0,r.useEffect)((function(){u===m.D.desktop&&n(!1)}),[u]),{showResponsiveSidebar:t,closeResponsiveSidebar:(0,r.useCallback)((function(e){e.target.blur(),n(!1)}),[n]),toggleResponsiveSidebar:(0,r.useCallback)((function(){n((function(e){return!e}))}),[n])}}(),Z=y.showResponsiveSidebar,I=y.closeResponsiveSidebar,N=y.toggleResponsiveSidebar;return r.createElement("div",{className:(0,c.Z)(E,(t={},t[k]=F,t[A]=l,t))},F&&r.createElement(D.Z,{tabIndex:-1,className:_}),r.createElement("div",{className:(0,c.Z)("menu","menu--responsive","thin-scrollbar",x,(n={"menu--show":Z},n[w]=!C&&v,n))},r.createElement(P,{responsiveSidebarOpened:Z,onClick:N}),r.createElement("ul",{className:"menu__list"},r.createElement(R,{items:a,onItemClick:I,collapsible:i,activePath:u}))),b&&r.createElement(H,{onClick:s}))},j=n(3541),O=n(4608),U=n(5977),K="docPage_31aa",Q="docMainContainer_3ufF",X="docMainContainerEnhanced_3NYZ",q="docSidebarContainer_3Kbt",V="docSidebarContainerHidden_3pA8",G="collapsedDocSidebar_2JMH",J="expandSidebarButtonIcon_1naQ",Y="docItemWrapperEnhanced_2vyJ",$="docItemWrapper_3FMP";function ee(e){var t,n,o,s,l,p=e.currentDocRoute,h=e.versionMetadata,m=e.children,f=(0,a.default)(),v=f.siteConfig,g=f.isClient,D=h.pluginId,b=h.permalinkToSidebar,E=h.docsSidebars,k=h.version,A=b[p.path],_=E[A],x=(0,r.useState)(!1),y=x[0],w=x[1],Z=(0,r.useState)(!1),I=Z[0],N=Z[1],S=(0,r.useCallback)((function(){I&&N(!1),w(!y)}),[I]);return r.createElement(i.Z,{key:g,wrapperClassName:d.kM.wrapper.docPages,pageClassName:d.kM.page.docPage,searchMetadatas:{version:k,tag:(0,d.os)(D,k)}},r.createElement("div",{className:K},_&&r.createElement("div",{className:(0,c.Z)(q,(t={},t[V]=y,t)),onTransitionEnd:function(e){e.currentTarget.classList.contains(q)&&y&&N(!0)},role:"complementary"},r.createElement(W,{key:A,sidebar:_,path:p.path,sidebarCollapsible:null==(n=null==(o=v.themeConfig)?void 0:o.sidebarCollapsible)||n,onCollapse:S,isHidden:I}),I&&r.createElement("div",{className:G,title:(0,C.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,C.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:S,onClick:S},r.createElement(F,{className:J}))),r.createElement("main",{className:(0,c.Z)(Q,(s={},s[X]=y||!_,s))},r.createElement("div",{className:(0,c.Z)("container padding-vert--lg",$,(l={},l[Y]=y,l))},r.createElement(u.Zo,{components:j.Z},m)))))}var te=function(e){var t=e.route.routes,n=e.versionMetadata,u=e.location,a=t.find((function(e){return(0,U.LX)(u.pathname,e)}));return a?r.createElement(ee,{currentDocRoute:a,versionMetadata:n},(0,o.Z)(t)):r.createElement(O.default,e)}},4608:function(e,t,n){"use strict";n.r(t);var r=n(7294),u=n(4543),a=n(4973);t.default=function(){return r.createElement(u.Z,{title:"Page Not Found"},r.createElement("main",{className:"container margin-vert--xl"},r.createElement("div",{className:"row"},r.createElement("div",{className:"col col--6 col--offset-3"},r.createElement("h1",{className:"hero__title"},r.createElement(a.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),r.createElement("p",null,r.createElement(a.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),r.createElement("p",null,r.createElement(a.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))}},4535:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(7294),u=n(8695),a="loadingRing_3atr";function o(e){var t=e.className;return r.createElement("div",{className:(0,u.Z)(a,t)},r.createElement("div",null),r.createElement("div",null),r.createElement("div",null),r.createElement("div",null))}},3551:function(e,t,n){"use strict";n.d(t,{w:function(){return c}});var r=n(8173),u=n(2137),a=n(7757),o=n.n(a),i=n(5850),s=n.n(i),l=n(8141);function c(e){return d.apply(this,arguments)}function d(){return(d=(0,u.Z)(o().mark((function e(t){var n,u,a;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,fetch(t+"search-index.json?_="+l.rx);case 3:return e.next=5,e.sent.json();case 5:return n=e.sent,u=n.map((function(e,t){var n=e.documents,r=e.index;return{type:t,documents:n,index:s().Index.load(r)}})),a=n.reduce((function(e,t){for(var n,u=(0,r.Z)(t.index.invertedIndex);!(n=u()).done;){var a=n.value;/(?:[\u3400-\u4DBF\u4E00-\u9FFC\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD869[\uDC00-\uDEDD\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD884[\uDC00-\uDF4A])/.test(a[0][0])&&e.add(a[0])}return e}),new Set),e.abrupt("return",{wrappedIndexes:u,zhDictionary:Array.from(a)});case 9:return e.abrupt("return",{wrappedIndexes:[],zhDictionary:[]});case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},3636:function(e,t,n){"use strict";n.d(t,{Z:function(){return K}});var r=n(8141),u=n(8173),a=n(2137),o=n(7757),i=n.n(o),s=n(7294),l=n(8695),c=n(2263),d=n(412),p=n(5977),h=n(3551),m=n(8938),f=n(6092),v=n(5401),g=n(5579),D="searchBar_2moK",F="dropdownMenu_17SC",b="suggestion_1kAZ",C="cursor_6rPN",E="hitTree_2sUa",k="hitIcon_3jP2",A="hitPath_3Lax",_="noResultsIcon_1rmk",x="hitFooter_1JML",y="hitWrapper_4Hzp",w="hitTitle_2AMl",Z="hitAction_2kg3",I="noResults_1vI5",N="searchBarContainer_2P1H",S="searchBarLoadingRing_1FtX",B="searchIndexLoading_1eRR",L="input_1tay",R="hint_1WuO",z="suggestions_1cWc",M="dataset_3Xc2",T="empty_2isC";function H(e){var t=e.document,n=e.type,r=e.page,u=e.metadata,a=e.tokens,o=e.isInterOfTree,i=e.isLastOfTree,s=0===n,l=1===n,c=[];o?c.push('<svg viewBox="0 0 24 54"><g stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path d="M8 6v42M20 27H8.3"></path></g></svg>'):i&&c.push('<svg viewBox="0 0 24 54"><g stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path d="M8 6v21M20 27H8.3"></path></g></svg>');var d=c.map((function(e){return'<span class="'+E+'">'+e+"</span>"})),p='<span class="'+k+'">'+(s?'<svg width="20" height="20" viewBox="0 0 20 20"><path d="M17 6v12c0 .52-.2 1-1 1H4c-.7 0-1-.33-1-1V2c0-.55.42-1 1-1h8l5 5zM14 8h-3.13c-.51 0-.87-.34-.87-.87V4" stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linejoin="round"></path></svg>':l?'<svg width="20" height="20" viewBox="0 0 20 20"><path d="M13 13h4-4V8H7v5h6v4-4H7V8H3h4V3v5h6V3v5h4-4v5zm-6 0v4-4H3h4z" stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>':'<svg width="20" height="20" viewBox="0 0 20 20"><path d="M17 5H3h14zm0 5H3h14zm0 5H3h14z" stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linejoin="round"></path></svg>')+"</span>",h=['<span class="'+w+'">'+(0,v.o)(t.t,(0,g.m)(u,"t"),a)+"</span>"];return s||h.push('<span class="'+A+'">'+(0,f.C)(r.t||(t.u.startsWith("/docs/api-reference/")?"API Reference":""),a)+"</span>"),[].concat(d,[p,'<span class="'+y+'">'],h,["</span>",'<span class="'+Z+'"><svg width="20" height="20" viewBox="0 0 20 20"><g stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path d="M18 3v4c0 2-2 4-4 4H2"></path><path d="M8 17l-6-6 6-6"></path></g></svg></span>']).join("")}function P(){return'<span class="'+I+'"><span class="'+_+'"><svg width="40" height="40" viewBox="0 0 20 20" fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M15.5 4.8c2 3 1.7 7-1 9.7h0l4.3 4.3-4.3-4.3a7.8 7.8 0 01-9.8 1m-2.2-2.2A7.8 7.8 0 0113.2 2.4M2 18L18 2"></path></svg></span><span>'+r.Iz.no_results+"</span></span>"}var W=n(4535);function j(){return O.apply(this,arguments)}function O(){return(O=(0,a.Z)(i().mark((function e(){var t,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([n.e(4485),n.e(213)]).then(n.t.bind(n,4485,23));case 2:return t=e.sent,(r=t.default).noConflict?r.noConflict():t.noConflict&&t.noConflict(),e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var U="_highlight";var K=function(e){var t,n=e.handleSearchBarToggle,o=(0,c.default)().siteConfig.baseUrl,f=(0,p.k6)(),v=(0,p.TH)(),g=(0,s.useRef)(null),E=(0,s.useRef)("empty"),k=(0,s.useRef)(!1),A=(0,s.useState)(!1),_=A[0],y=A[1],w=(0,s.useState)(!1),Z=w[0],I=w[1],O=(0,s.useCallback)((0,a.Z)(i().mark((function e(){var t,n,a,s,l,c,d;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("empty"===E.current){e.next=2;break}return e.abrupt("return");case 2:return E.current="loading",y(!0),e.next=6,Promise.all([(0,h.w)(o),j()]);case 6:t=e.sent,n=t[0],a=n.wrappedIndexes,s=n.zhDictionary,l=t[1],c=l(g.current,{hint:!1,autoselect:!0,cssClasses:{root:D,noPrefix:!0,dropdownMenu:F,input:L,hint:R,suggestions:z,suggestion:b,cursor:C,dataset:M,empty:T}},[{source:(0,m.v)(a,s,r.qo),templates:{suggestion:H,empty:P,footer:function(e){var t=e.query;if(!e.isEmpty){var n=document.createElement("a"),u=o+"search?q="+encodeURIComponent(t);n.href=u,n.textContent=r.Iz.see_all_results,n.addEventListener("click",(function(e){e.ctrlKey||e.metaKey||(e.preventDefault(),c.autocomplete.close(),f.push(u))}));var a=document.createElement("div");return a.className=x,a.appendChild(n),a}}}}]).on("autocomplete:selected",(function(e,t){var n=t.document,a=n.u,o=n.h,i=t.tokens,s=a;if(r.vc&&i.length>0){for(var l,c=new URLSearchParams,d=(0,u.Z)(i);!(l=d()).done;){var p=l.value;c.append(U,p)}s+="?"+c.toString()}o&&(s+=o),f.push(s)})),E.current="done",y(!1),k.current&&((d=g.current).value&&c.autocomplete.open(),d.focus());case 15:case"end":return e.stop()}}),e)}))),[o,f]);(0,s.useEffect)((function(){if(r.vc){var e=d.Z.canUseDOM?new URLSearchParams(v.search).getAll(U):[];if(0!==e.length){var t=document.querySelector("article");if(t){var n=new r.vc(t);n.unmark(),n.mark(e)}}}}),[v.search]);var K=(0,s.useCallback)((function(){k.current=!0,O(),null==n||n(!0)}),[n,O]),Q=(0,s.useCallback)((function(){null==n||n(!1)}),[n]),X=(0,s.useCallback)((function(){O()}),[O]),q=(0,s.useCallback)((function(e){e.target.value&&I(!0)}),[]);return s.createElement("div",{className:(0,l.Z)("navbar__search",N,(t={},t[B]=_&&Z,t))},s.createElement("input",{placeholder:r.Iz.search_placeholder,"aria-label":"Search",className:"navbar__search-input",onMouseEnter:X,onFocus:K,onBlur:Q,onChange:q,ref:g}),s.createElement(W.Z,{className:S}))}},8938:function(e,t,n){"use strict";n.d(t,{v:function(){return c}});var r=n(8173),u=n(5850),a=n.n(u);function o(e,t){var n=[];return function e(u,a){if(0!==u.length){var o=u[0];if(/(?:[\u3400-\u4DBF\u4E00-\u9FFC\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD869[\uDC00-\uDEDD\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD884[\uDC00-\uDF4A])/.test(o))for(var i,s=function(e,t){var n=[];return function e(u,a){for(var o,i=0,s=!1,l=(0,r.Z)(t);!(o=l()).done;){var c=o.value;if(u.substr(0,c.length)===c){var d={missed:a.missed,term:a.term.concat({value:c})};u.length>c.length?e(u.substr(c.length),d):n.push(d),s=!0}else for(var p=c.length-1;p>i;p-=1){var h=c.substr(0,p);if(u.substr(0,p)===h){i=p;var m={missed:a.missed,term:a.term.concat({value:h,trailing:!0})};u.length>p?e(u.substr(p),m):n.push(m),s=!0;break}}}s||(u.length>0?e(u.substr(1),{missed:a.missed+1,term:a.term}):a.term.length>0&&n.push(a))}(e,{missed:0,term:[]}),n.sort((function(e,t){var n=e.missed>0?1:0,r=t.missed>0?1:0;return n!==r?n-r:e.term.length-t.term.length})).map((function(e){return e.term}))}(o,t),l=(0,r.Z)(s);!(i=l()).done;){var c=i.value,d=a.concat.apply(a,c);e(u.slice(1),d)}else{var p=a.concat({value:o});e(u.slice(1),p)}}else n.push(a)}(e,[]),n}var i=n(8141);function s(e){return l(e).concat(l(e.filter((function(e){var t=e[e.length-1];return!t.trailing&&t.maybeTyping})),!0))}function l(e,t){return e.map((function(e){return{tokens:e.map((function(e){return e.value})),term:e.map((function(e){return{value:e.value,presence:a().Query.presence.REQUIRED,wildcard:(t?e.trailing||e.maybeTyping:e.trailing)?a().Query.wildcard.TRAILING:a().Query.wildcard.NONE}}))}}))}function c(e,t,n){return function(u,l){var c=function(e,t){if(1===t.length&&["ja","jp","th"].includes(t[0]))return a()[t[0]].tokenizer(e).map((function(e){return e.toString()}));var n=/[^-\s]+/g;return t.includes("zh")&&(n=/[0-9A-Z_a-z]+|(?:[\u3400-\u4DBF\u4E00-\u9FFC\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD869[\uDC00-\uDEDD\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD884[\uDC00-\uDF4A])+/g),e.toLowerCase().match(n)||[]}(u,i.dK);if(0!==c.length){var d=function(e,t){var n=o(e,t);if(0===n.length)return[{tokens:e,term:e.map((function(e){return{value:e,presence:a().Query.presence.REQUIRED,wildcard:a().Query.wildcard.LEADING|a().Query.wildcard.TRAILING}}))}];for(var u,l=(0,r.Z)(n);!(u=l()).done;){var c=u.value;c[c.length-1].maybeTyping=!0}for(var d,p,h=[],m=(0,r.Z)(i.dK);!(d=m()).done;){var f=d.value;if("en"===f)i._k||h.unshift(a().stopWordFilter);else{var v=a()[f];v.stopWordFilter&&h.unshift(v.stopWordFilter)}}if(h.length>0){var g=function(e){return h.reduce((function(e,t){return e.filter((function(e){return t(e.value)}))}),e)};p=[];for(var D,F=[],b=(0,r.Z)(n);!(D=b()).done;){var C=D.value,E=g(C);p.push(E),E.length<C.length&&E.length>0&&F.push(E)}n.push.apply(n,F)}else p=n.slice();for(var k,A=[],_=(0,r.Z)(p);!(k=_()).done;){var x=k.value;if(x.length>2)for(var y=x.length-1;y>=0;y-=1)A.push(x.slice(0,y).concat(x.slice(y+1)))}return s(n).concat(s(A))}(c,t),p=[],h=function(){for(var t,u=m.value,a=u.term,o=u.tokens,i=function(){var u=t.value,i=u.documents,s=u.index,l=u.type;if(p.push.apply(p,s.query((function(e){for(var t,n=(0,r.Z)(a);!(t=n()).done;){var u=t.value;e.term(u.value,{wildcard:u.wildcard,presence:u.presence})}})).slice(0,n).filter((function(e){return!p.some((function(t){return t.document.i.toString()===e.ref}))})).slice(0,n-p.length).map((function(t){var n=i.find((function(e){return e.i.toString()===t.ref}));return{document:n,type:l,page:0!==l&&e[0].documents.find((function(e){return e.i===n.p})),metadata:t.matchData.metadata,tokens:o,score:t.score}}))),p.length>=n)return{v:"break|search"}},s=(0,r.Z)(e);!(t=s()).done;){var l=i();if("object"==typeof l)return l.v}};e:for(var m,f=(0,r.Z)(d);!(m=f()).done;){if("break|search"===h())break e}!function(e){e.forEach((function(e,t){e.index=t})),e.sort((function(t,n){var r=t.type>0&&t.page?e.findIndex((function(e){return e.document===t.page})):t.index,u=n.type>0&&n.page?e.findIndex((function(e){return e.document===n.page})):n.index;return-1===r&&(r=t.index),-1===u&&(u=n.index),r===u?0===t.type?-1:0===n.type?1:t.index-n.index:r-u}))}(p),function(e){e.forEach((function(t,n){n>0&&t.page&&e.some((function(e){return e.document===t.page}))&&(n<e.length-1&&e[n+1].page===t.page?t.isInterOfTree=!0:t.isLastOfTree=!0)}))}(p),l(p)}else l([])}}},8740:function(e,t,n){"use strict";function r(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}n.d(t,{X:function(){return r}})},5579:function(e,t,n){"use strict";function r(e,t){for(var n=[],r=0,u=Object.values(e);r<u.length;r++){var a=u[r];a[t]&&n.push.apply(n,a[t].position)}return n.sort((function(e,t){return e[0]-t[0]||t[1]-e[1]}))}n.d(t,{m:function(){return r}})},6092:function(e,t,n){"use strict";n.d(t,{C:function(){return a}});var r=n(8173),u=n(8740);function a(e,t,n){for(var o,i=[],s=(0,r.Z)(t);!(o=s()).done;){var l=o.value,c=e.toLowerCase().indexOf(l);if(c>=0){c>0&&i.push(a(e.substr(0,c),t)),i.push("<mark>"+(0,u.X)(e.substr(c,l.length))+"</mark>");var d=c+l.length;d<e.length&&i.push(a(e.substr(d),t));break}}return 0===i.length?n?"<mark>"+(0,u.X)(e)+"</mark>":(0,u.X)(e):i.join("")}},5401:function(e,t,n){"use strict";n.d(t,{o:function(){return s}});var r=n(8740),u=n(6092),a=/[0-9A-Z_a-z]+|(?:[\u3400-\u4DBF\u4E00-\u9FFC\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD869[\uDC00-\uDEDD\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD884[\uDC00-\uDF4A])/;function o(e){for(var t=[],n=0,r=e;r.length>0;){var u=r.match(a);if(!u){t.push(r);break}u.index>0&&t.push(r.substr(0,u.index)),t.push(u[0]),n+=u.index+u[0].length,r=e.substr(n)}return t}var i=n(8141);function s(e,t,n,r){void 0===r&&(r=i.Hk);for(var u={chunkIndex:-1},a=l(e,t,n,0,0,u),o=a.slice(0,u.chunkIndex),s=a[u.chunkIndex],c=[s.html],d=a.slice(u.chunkIndex+1),p=s.textLength,h=0,m=0,f=!1,v=!1;p<r;)if((h<=m||0===d.length)&&o.length>0){var g=o.pop();p+g.textLength<=r?(c.unshift(g.html),h+=g.textLength,p+=g.textLength):(f=!0,o.length=0)}else{if(!(d.length>0))break;var D=d.shift();p+D.textLength<=r?(c.push(D.html),m+=D.textLength,p+=D.textLength):(v=!0,d.length=0)}return(f||o.length>0)&&c.unshift("\u2026"),(v||d.length>0)&&c.push("\u2026"),c.join("")}function l(e,t,n,a,i,s){var c=[],d=t[a],p=d[0],h=d[1];if(p<i)(a+=1)<t.length&&c.push.apply(c,l(e,t,n,a,i));else{p>i&&c.push.apply(c,o(e.substring(i,p)).map((function(e){return{html:(0,r.X)(e),textLength:e.length}}))),s&&(s.chunkIndex=c.length),c.push({html:(0,u.C)(e.substr(p,h),n,!0),textLength:h});var m=p+h;(a+=1)<t.length?c.push.apply(c,l(e,t,n,a,m)):m<e.length&&c.push.apply(c,o(e.substr(m)).map((function(e){return{html:(0,r.X)(e),textLength:e.length}})))}return c}},8141:function(e,t,n){"use strict";n.d(t,{vc:function(){return i},rx:function(){return s},dK:function(){return a},_k:function(){return o},Hk:function(){return c},qo:function(){return l},Iz:function(){return d}});var r=n(5850),u=n.n(r);n(8465)(u()),n(4376).w(u()),n(3609)(u());var a=["en","zh"],o=!1,i=null,s="4fc3c962",l=10,c=50,d={search_placeholder:"Search",see_all_results:"See all results",no_results:"No results.",search_results_for:'Search results for "{{ keyword }}"',search_the_documentation:"Search the documentation",count_documents_found_plural:"{{ count }} documents found",count_documents_found:"{{ count }} document found",no_documents_were_found:"No documents were found"}},4376:function(e,t,n){"use strict";function r(e){var t=new RegExp("^[^"+e+"]+","u"),n=new RegExp("[^"+e+"]+$","u");return function(e){return e.update((function(e){return e.replace(t,"").replace(n,"")}))}}function u(e,t){e.trimmerSupport.generateTrimmer=r,e.zh=function(){this.pipeline.reset(),this.pipeline.add(e.zh.trimmer,e.zh.stopWordFilter),t&&(this.tokenizer=t)},t&&(e.zh.tokenizer=t),e.zh.wordCharacters="\\u3400-\\u4DBF\\u4E00-\\u9FFC\\uFA0E\\uFA0F\\uFA11\\uFA13\\uFA14\\uFA1F\\uFA21\\uFA23\\uFA24\\uFA27-\\uFA29\\u{20000}-\\u{2A6DD}\\u{2A700}-\\u{2B734}\\u{2B740}-\\u{2B81D}\\u{2B820}-\\u{2CEA1}\\u{2CEB0}-\\u{2EBE0}\\u{30000}-\\u{3134A}",e.zh.trimmer=e.trimmerSupport.generateTrimmer(e.zh.wordCharacters),e.Pipeline.registerFunction(e.zh.trimmer,"trimmer-zh"),e.zh.stopWordFilter=e.generateStopWordFilter("\u7684 \u4e00 \u4e0d \u5728 \u4eba \u6709 \u662f \u4e3a \u4ee5 \u4e8e \u4e0a \u4ed6 \u800c \u540e \u4e4b \u6765 \u53ca \u4e86 \u56e0 \u4e0b \u53ef \u5230 \u7531 \u8fd9 \u4e0e \u4e5f \u6b64 \u4f46 \u5e76 \u4e2a \u5176 \u5df2 \u65e0 \u5c0f \u6211 \u4eec \u8d77 \u6700 \u518d \u4eca \u53bb \u597d \u53ea \u53c8 \u6216 \u5f88 \u4ea6 \u67d0 \u628a \u90a3 \u4f60 \u4e43 \u5b83 \u5427 \u88ab \u6bd4 \u522b \u8d81 \u5f53 \u4ece \u5230 \u5f97 \u6253 \u51e1 \u513f \u5c14 \u8be5 \u5404 \u7ed9 \u8ddf \u548c \u4f55 \u8fd8 \u5373 \u51e0 \u65e2 \u770b \u636e \u8ddd \u9760 \u5566 \u4e86 \u53e6 \u4e48 \u6bcf \u4eec \u561b \u62ff \u54ea \u90a3 \u60a8 \u51ed \u4e14 \u5374 \u8ba9 \u4ecd \u5565 \u5982 \u82e5 \u4f7f \u8c01 \u867d \u968f \u540c \u6240 \u5979 \u54c7 \u55e1 \u5f80 \u54ea \u4e9b \u5411 \u6cbf \u54df \u7528 \u4e8e \u54b1 \u5219 \u600e \u66fe \u81f3 \u81f4 \u7740 \u8bf8 \u81ea".split(" ")),e.Pipeline.registerFunction(e.zh.stopWordFilter,"stopWordFilter-zh")}n.d(t,{w:function(){return u}})}}]);