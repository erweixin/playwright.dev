(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[3089],{4428:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return m}});var r=n(7294),a=n(2263),u=n(4543),i=n(3146),s=n(6742),o=n(4973);var l=function(e){var t=e.metadata,n=t.previousPage,a=t.nextPage;return r.createElement("nav",{className:"pagination-nav","aria-label":(0,o.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},r.createElement("div",{className:"pagination-nav__item"},n&&r.createElement(s.Z,{className:"pagination-nav__link",to:n},r.createElement("div",{className:"pagination-nav__label"},"\xab"," ",r.createElement(o.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")))),r.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},a&&r.createElement(s.Z,{className:"pagination-nav__link",to:a},r.createElement("div",{className:"pagination-nav__label"},r.createElement(o.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries")," ","\xbb"))))},c=n(5601),d=n(6700);var m=function(e){var t=e.metadata,n=e.items,s=e.sidebar,o=(0,a.default)().siteConfig.title,m=t.blogDescription,p=t.blogTitle,h="/"===t.permalink?o:p;return r.createElement(u.Z,{title:h,description:m,wrapperClassName:d.kM.wrapper.blogPages,pageClassName:d.kM.page.blogListPage,searchMetadatas:{tag:"blog_posts_list"}},r.createElement("div",{className:"container margin-vert--lg"},r.createElement("div",{className:"row"},r.createElement("div",{className:"col col--3"},r.createElement(c.Z,{sidebar:s})),r.createElement("main",{className:"col col--7"},n.map((function(e){var t=e.content;return r.createElement(i.Z,{key:t.metadata.permalink,frontMatter:t.frontMatter,metadata:t.metadata,truncated:t.metadata.truncated},r.createElement(t,null))})),r.createElement(l,{metadata:t})))))}},3146:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var r=n(7294),a=n(6010),u=n(3905),i=n(4973),s=n(6742),o=n(3541),l=n(1217),c="blogPostTitle_GeHD",d="blogPostDate_fNvV",m=n(6700);var p=function(e){var t,n,p=(t=(0,m.c2)().selectMessage,function(e){var n=Math.ceil(e);return t(n,(0,i.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:n}))}),h=e.children,f=e.frontMatter,g=e.metadata,v=e.truncated,D=e.isBlogPostPage,F=void 0!==D&&D,E=g.date,_=g.formattedDate,A=g.permalink,k=g.tags,b=g.readingTime,C=f.author,x=f.title,w=f.image,y=f.keywords,N=f.author_url||f.authorURL,Z=f.author_title||f.authorTitle,I=f.author_image_url||f.authorImageURL;return r.createElement(r.Fragment,null,r.createElement(l.Z,{keywords:y,image:w}),r.createElement("article",{className:F?void 0:"margin-bottom--xl"},(n=F?"h1":"h2",r.createElement("header",null,r.createElement(n,{className:(0,a.Z)("margin-bottom--sm",c)},F?x:r.createElement(s.Z,{to:A},x)),r.createElement("div",{className:"margin-vert--md"},r.createElement("time",{dateTime:E,className:d},_,b&&r.createElement(r.Fragment,null," \xb7 ",p(b)))),r.createElement("div",{className:"avatar margin-vert--md"},I&&r.createElement(s.Z,{className:"avatar__photo-link avatar__photo",href:N},r.createElement("img",{src:I,alt:C})),r.createElement("div",{className:"avatar__intro"},C&&r.createElement(r.Fragment,null,r.createElement("h4",{className:"avatar__name"},r.createElement(s.Z,{href:N},C)),r.createElement("small",{className:"avatar__subtitle"},Z)))))),r.createElement("div",{className:"markdown"},r.createElement(u.Zo,{components:o.Z},h)),(k.length>0||v)&&r.createElement("footer",{className:"row margin-vert--lg"},k.length>0&&r.createElement("div",{className:"col"},r.createElement("strong",null,r.createElement(i.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),k.map((function(e){var t=e.label,n=e.permalink;return r.createElement(s.Z,{key:n,className:"margin-horiz--sm",to:n},t)}))),v&&r.createElement("div",{className:"col text--right"},r.createElement(s.Z,{to:g.permalink,"aria-label":"Read more about "+x},r.createElement("strong",null,r.createElement(i.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More")))))))}},5601:function(e,t,n){"use strict";n.d(t,{Z:function(){return m}});var r=n(7294),a=n(6010),u=n(6742),i="sidebar_2ahu",s="sidebarItemTitle_2hhb",o="sidebarItemList_2xAf",l="sidebarItem_2UVv",c="sidebarItemLink_1RT6",d="sidebarItemLinkActive_12pM";function m(e){var t=e.sidebar;return 0===t.items.length?null:r.createElement("div",{className:(0,a.Z)(i,"thin-scrollbar")},r.createElement("h3",{className:s},t.title),r.createElement("ul",{className:o},t.items.map((function(e){return r.createElement("li",{key:e.permalink,className:l},r.createElement(u.Z,{isNavLink:!0,to:e.permalink,className:c,activeClassName:d},e.title))}))))}},4535:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(7294),a=n(8695),u="loadingRing_3atr";function i(e){var t=e.className;return r.createElement("div",{className:(0,a.Z)(u,t)},r.createElement("div",null),r.createElement("div",null),r.createElement("div",null),r.createElement("div",null))}},3551:function(e,t,n){"use strict";n.d(t,{w:function(){return c}});var r=n(8173),a=n(2137),u=n(7757),i=n.n(u),s=n(5850),o=n.n(s),l=n(8141);function c(e){return d.apply(this,arguments)}function d(){return(d=(0,a.Z)(i().mark((function e(t){var n,a,u;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,fetch(t+"search-index.json?_="+l.rx);case 3:return e.next=5,e.sent.json();case 5:return n=e.sent,a=n.map((function(e,t){var n=e.documents,r=e.index;return{type:t,documents:n,index:o().Index.load(r)}})),u=n.reduce((function(e,t){for(var n,a=(0,r.Z)(t.index.invertedIndex);!(n=a()).done;){var u=n.value;/(?:[\u3400-\u4DBF\u4E00-\u9FFC\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD869[\uDC00-\uDEDD\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD884[\uDC00-\uDF4A])/.test(u[0][0])&&e.add(u[0])}return e}),new Set),e.abrupt("return",{wrappedIndexes:a,zhDictionary:Array.from(u)});case 9:return e.abrupt("return",{wrappedIndexes:[],zhDictionary:[]});case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},3636:function(e,t,n){"use strict";n.d(t,{Z:function(){return Q}});var r=n(8141),a=n(8173),u=n(2137),i=n(7757),s=n.n(i),o=n(7294),l=n(8695),c=n(2263),d=n(412),m=n(5977),p=n(3551),h=n(8938),f=n(6092),g=n(5401),v=n(5579),D="searchBar_2moK",F="dropdownMenu_17SC",E="suggestion_1kAZ",_="cursor_6rPN",A="hitTree_2sUa",k="hitIcon_3jP2",b="hitPath_3Lax",C="noResultsIcon_1rmk",x="hitFooter_1JML",w="hitWrapper_4Hzp",y="hitTitle_2AMl",N="hitAction_2kg3",Z="noResults_1vI5",I="searchBarContainer_2P1H",z="searchBarLoadingRing_1FtX",L="searchIndexLoading_1eRR",T="input_1tay",B="hint_1WuO",M="suggestions_1cWc",R="dataset_3Xc2",P="empty_2isC";function S(e){var t=e.document,n=e.type,r=e.page,a=e.metadata,u=e.tokens,i=e.isInterOfTree,s=e.isLastOfTree,o=0===n,l=1===n,c=[];i?c.push('<svg viewBox="0 0 24 54"><g stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path d="M8 6v42M20 27H8.3"></path></g></svg>'):s&&c.push('<svg viewBox="0 0 24 54"><g stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path d="M8 6v21M20 27H8.3"></path></g></svg>');var d=c.map((function(e){return'<span class="'+A+'">'+e+"</span>"})),m='<span class="'+k+'">'+(o?'<svg width="20" height="20" viewBox="0 0 20 20"><path d="M17 6v12c0 .52-.2 1-1 1H4c-.7 0-1-.33-1-1V2c0-.55.42-1 1-1h8l5 5zM14 8h-3.13c-.51 0-.87-.34-.87-.87V4" stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linejoin="round"></path></svg>':l?'<svg width="20" height="20" viewBox="0 0 20 20"><path d="M13 13h4-4V8H7v5h6v4-4H7V8H3h4V3v5h6V3v5h4-4v5zm-6 0v4-4H3h4z" stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>':'<svg width="20" height="20" viewBox="0 0 20 20"><path d="M17 5H3h14zm0 5H3h14zm0 5H3h14z" stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linejoin="round"></path></svg>')+"</span>",p=['<span class="'+y+'">'+(0,g.o)(t.t,(0,v.m)(a,"t"),u)+"</span>"];return o||p.push('<span class="'+b+'">'+(0,f.C)(r.t||(t.u.startsWith("/docs/api-reference/")?"API Reference":""),u)+"</span>"),[].concat(d,[m,'<span class="'+w+'">'],p,["</span>",'<span class="'+N+'"><svg width="20" height="20" viewBox="0 0 20 20"><g stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path d="M18 3v4c0 2-2 4-4 4H2"></path><path d="M8 17l-6-6 6-6"></path></g></svg></span>']).join("")}function j(){return'<span class="'+Z+'"><span class="'+C+'"><svg width="40" height="40" viewBox="0 0 20 20" fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M15.5 4.8c2 3 1.7 7-1 9.7h0l4.3 4.3-4.3-4.3a7.8 7.8 0 01-9.8 1m-2.2-2.2A7.8 7.8 0 0113.2 2.4M2 18L18 2"></path></svg></span><span>'+r.Iz.no_results+"</span></span>"}var H=n(4535);function U(){return W.apply(this,arguments)}function W(){return(W=(0,u.Z)(s().mark((function e(){var t,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([n.e(6756),n.e(213)]).then(n.t.bind(n,4485,23));case 2:return t=e.sent,(r=t.default).noConflict?r.noConflict():t.noConflict&&t.noConflict(),e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var O="_highlight";var Q=function(e){var t,n=e.handleSearchBarToggle,i=(0,c.default)().siteConfig.baseUrl,f=(0,m.k6)(),g=(0,m.TH)(),v=(0,o.useRef)(null),A=(0,o.useRef)("empty"),k=(0,o.useRef)(!1),b=(0,o.useState)(!1),C=b[0],w=b[1],y=(0,o.useState)(!1),N=y[0],Z=y[1],W=(0,o.useCallback)((0,u.Z)(s().mark((function e(){var t,n,u,o,l,c,d;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("empty"===A.current){e.next=2;break}return e.abrupt("return");case 2:return A.current="loading",w(!0),e.next=6,Promise.all([(0,p.w)(i),U()]);case 6:t=e.sent,n=t[0],u=n.wrappedIndexes,o=n.zhDictionary,l=t[1],c=l(v.current,{hint:!1,autoselect:!0,cssClasses:{root:D,noPrefix:!0,dropdownMenu:F,input:T,hint:B,suggestions:M,suggestion:E,cursor:_,dataset:R,empty:P}},[{source:(0,h.v)(u,o,r.qo),templates:{suggestion:S,empty:j,footer:function(e){var t=e.query;if(!e.isEmpty){var n=document.createElement("a"),a=i+"search?q="+encodeURIComponent(t);n.href=a,n.textContent=r.Iz.see_all_results,n.addEventListener("click",(function(e){e.ctrlKey||e.metaKey||(e.preventDefault(),c.autocomplete.close(),f.push(a))}));var u=document.createElement("div");return u.className=x,u.appendChild(n),u}}}}]).on("autocomplete:selected",(function(e,t){var n=t.document,u=n.u,i=n.h,s=t.tokens,o=u;if(r.vc&&s.length>0){for(var l,c=new URLSearchParams,d=(0,a.Z)(s);!(l=d()).done;){var m=l.value;c.append(O,m)}o+="?"+c.toString()}i&&(o+=i),f.push(o)})),A.current="done",w(!1),k.current&&((d=v.current).value&&c.autocomplete.open(),d.focus());case 15:case"end":return e.stop()}}),e)}))),[i,f]);(0,o.useEffect)((function(){if(r.vc){var e=d.Z.canUseDOM?new URLSearchParams(g.search).getAll(O):[];if(0!==e.length){var t=document.querySelector("article");if(t){var n=new r.vc(t);n.unmark(),n.mark(e)}}}}),[g.search]);var Q=(0,o.useCallback)((function(){k.current=!0,W(),null==n||n(!0)}),[n,W]),V=(0,o.useCallback)((function(){null==n||n(!1)}),[n]),X=(0,o.useCallback)((function(){W()}),[W]),q=(0,o.useCallback)((function(e){e.target.value&&Z(!0)}),[]);return o.createElement("div",{className:(0,l.Z)("navbar__search",I,(t={},t[L]=C&&N,t))},o.createElement("input",{placeholder:r.Iz.search_placeholder,"aria-label":"Search",className:"navbar__search-input",onMouseEnter:X,onFocus:Q,onBlur:V,onChange:q,ref:v}),o.createElement(H.Z,{className:z}))}},8938:function(e,t,n){"use strict";n.d(t,{v:function(){return c}});var r=n(8173),a=n(5850),u=n.n(a);function i(e,t){var n=[];return function e(a,u){if(0!==a.length){var i=a[0];if(/(?:[\u3400-\u4DBF\u4E00-\u9FFC\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD869[\uDC00-\uDEDD\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD884[\uDC00-\uDF4A])/.test(i))for(var s,o=function(e,t){var n=[];return function e(a,u){for(var i,s=0,o=!1,l=(0,r.Z)(t);!(i=l()).done;){var c=i.value;if(a.substr(0,c.length)===c){var d={missed:u.missed,term:u.term.concat({value:c})};a.length>c.length?e(a.substr(c.length),d):n.push(d),o=!0}else for(var m=c.length-1;m>s;m-=1){var p=c.substr(0,m);if(a.substr(0,m)===p){s=m;var h={missed:u.missed,term:u.term.concat({value:p,trailing:!0})};a.length>m?e(a.substr(m),h):n.push(h),o=!0;break}}}o||(a.length>0?e(a.substr(1),{missed:u.missed+1,term:u.term}):u.term.length>0&&n.push(u))}(e,{missed:0,term:[]}),n.sort((function(e,t){var n=e.missed>0?1:0,r=t.missed>0?1:0;return n!==r?n-r:e.term.length-t.term.length})).map((function(e){return e.term}))}(i,t),l=(0,r.Z)(o);!(s=l()).done;){var c=s.value,d=u.concat.apply(u,c);e(a.slice(1),d)}else{var m=u.concat({value:i});e(a.slice(1),m)}}else n.push(u)}(e,[]),n}var s=n(8141);function o(e){return l(e).concat(l(e.filter((function(e){var t=e[e.length-1];return!t.trailing&&t.maybeTyping})),!0))}function l(e,t){return e.map((function(e){return{tokens:e.map((function(e){return e.value})),term:e.map((function(e){return{value:e.value,presence:u().Query.presence.REQUIRED,wildcard:(t?e.trailing||e.maybeTyping:e.trailing)?u().Query.wildcard.TRAILING:u().Query.wildcard.NONE}}))}}))}function c(e,t,n){return function(a,l){var c=function(e,t){if(1===t.length&&["ja","jp","th"].includes(t[0]))return u()[t[0]].tokenizer(e).map((function(e){return e.toString()}));var n=/[^-\s]+/g;return t.includes("zh")&&(n=/[0-9A-Z_a-z]+|(?:[\u3400-\u4DBF\u4E00-\u9FFC\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD869[\uDC00-\uDEDD\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD884[\uDC00-\uDF4A])+/g),e.toLowerCase().match(n)||[]}(a,s.dK);if(0!==c.length){var d=function(e,t){var n=i(e,t);if(0===n.length)return[{tokens:e,term:e.map((function(e){return{value:e,presence:u().Query.presence.REQUIRED,wildcard:u().Query.wildcard.LEADING|u().Query.wildcard.TRAILING}}))}];for(var a,l=(0,r.Z)(n);!(a=l()).done;){var c=a.value;c[c.length-1].maybeTyping=!0}for(var d,m,p=[],h=(0,r.Z)(s.dK);!(d=h()).done;){var f=d.value;if("en"===f)s._k||p.unshift(u().stopWordFilter);else{var g=u()[f];g.stopWordFilter&&p.unshift(g.stopWordFilter)}}if(p.length>0){var v=function(e){return p.reduce((function(e,t){return e.filter((function(e){return t(e.value)}))}),e)};m=[];for(var D,F=[],E=(0,r.Z)(n);!(D=E()).done;){var _=D.value,A=v(_);m.push(A),A.length<_.length&&A.length>0&&F.push(A)}n.push.apply(n,F)}else m=n.slice();for(var k,b=[],C=(0,r.Z)(m);!(k=C()).done;){var x=k.value;if(x.length>2)for(var w=x.length-1;w>=0;w-=1)b.push(x.slice(0,w).concat(x.slice(w+1)))}return o(n).concat(o(b))}(c,t),m=[],p=function(){for(var t,a=h.value,u=a.term,i=a.tokens,s=function(){var a=t.value,s=a.documents,o=a.index,l=a.type;if(m.push.apply(m,o.query((function(e){for(var t,n=(0,r.Z)(u);!(t=n()).done;){var a=t.value;e.term(a.value,{wildcard:a.wildcard,presence:a.presence})}})).slice(0,n).filter((function(e){return!m.some((function(t){return t.document.i.toString()===e.ref}))})).slice(0,n-m.length).map((function(t){var n=s.find((function(e){return e.i.toString()===t.ref}));return{document:n,type:l,page:0!==l&&e[0].documents.find((function(e){return e.i===n.p})),metadata:t.matchData.metadata,tokens:i,score:t.score}}))),m.length>=n)return{v:"break|search"}},o=(0,r.Z)(e);!(t=o()).done;){var l=s();if("object"==typeof l)return l.v}};e:for(var h,f=(0,r.Z)(d);!(h=f()).done;){if("break|search"===p())break e}!function(e){e.forEach((function(e,t){e.index=t})),e.sort((function(t,n){var r=t.type>0&&t.page?e.findIndex((function(e){return e.document===t.page})):t.index,a=n.type>0&&n.page?e.findIndex((function(e){return e.document===n.page})):n.index;return-1===r&&(r=t.index),-1===a&&(a=n.index),r===a?0===t.type?-1:0===n.type?1:t.index-n.index:r-a}))}(m),function(e){e.forEach((function(t,n){n>0&&t.page&&e.some((function(e){return e.document===t.page}))&&(n<e.length-1&&e[n+1].page===t.page?t.isInterOfTree=!0:t.isLastOfTree=!0)}))}(m),l(m)}else l([])}}},8740:function(e,t,n){"use strict";function r(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}n.d(t,{X:function(){return r}})},5579:function(e,t,n){"use strict";function r(e,t){for(var n=[],r=0,a=Object.values(e);r<a.length;r++){var u=a[r];u[t]&&n.push.apply(n,u[t].position)}return n.sort((function(e,t){return e[0]-t[0]||t[1]-e[1]}))}n.d(t,{m:function(){return r}})},6092:function(e,t,n){"use strict";n.d(t,{C:function(){return u}});var r=n(8173),a=n(8740);function u(e,t,n){for(var i,s=[],o=(0,r.Z)(t);!(i=o()).done;){var l=i.value,c=e.toLowerCase().indexOf(l);if(c>=0){c>0&&s.push(u(e.substr(0,c),t)),s.push("<mark>"+(0,a.X)(e.substr(c,l.length))+"</mark>");var d=c+l.length;d<e.length&&s.push(u(e.substr(d),t));break}}return 0===s.length?n?"<mark>"+(0,a.X)(e)+"</mark>":(0,a.X)(e):s.join("")}},5401:function(e,t,n){"use strict";n.d(t,{o:function(){return o}});var r=n(8740),a=n(6092),u=/[0-9A-Z_a-z]+|(?:[\u3400-\u4DBF\u4E00-\u9FFC\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD869[\uDC00-\uDEDD\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD884[\uDC00-\uDF4A])/;function i(e){for(var t=[],n=0,r=e;r.length>0;){var a=r.match(u);if(!a){t.push(r);break}a.index>0&&t.push(r.substr(0,a.index)),t.push(a[0]),n+=a.index+a[0].length,r=e.substr(n)}return t}var s=n(8141);function o(e,t,n,r){void 0===r&&(r=s.Hk);for(var a={chunkIndex:-1},u=l(e,t,n,0,0,a),i=u.slice(0,a.chunkIndex),o=u[a.chunkIndex],c=[o.html],d=u.slice(a.chunkIndex+1),m=o.textLength,p=0,h=0,f=!1,g=!1;m<r;)if((p<=h||0===d.length)&&i.length>0){var v=i.pop();m+v.textLength<=r?(c.unshift(v.html),p+=v.textLength,m+=v.textLength):(f=!0,i.length=0)}else{if(!(d.length>0))break;var D=d.shift();m+D.textLength<=r?(c.push(D.html),h+=D.textLength,m+=D.textLength):(g=!0,d.length=0)}return(f||i.length>0)&&c.unshift("\u2026"),(g||d.length>0)&&c.push("\u2026"),c.join("")}function l(e,t,n,u,s,o){var c=[],d=t[u],m=d[0],p=d[1];if(m<s)(u+=1)<t.length&&c.push.apply(c,l(e,t,n,u,s));else{m>s&&c.push.apply(c,i(e.substring(s,m)).map((function(e){return{html:(0,r.X)(e),textLength:e.length}}))),o&&(o.chunkIndex=c.length),c.push({html:(0,a.C)(e.substr(m,p),n,!0),textLength:p});var h=m+p;(u+=1)<t.length?c.push.apply(c,l(e,t,n,u,h)):h<e.length&&c.push.apply(c,i(e.substr(h)).map((function(e){return{html:(0,r.X)(e),textLength:e.length}})))}return c}},8141:function(e,t,n){"use strict";n.d(t,{vc:function(){return s},rx:function(){return o},dK:function(){return u},_k:function(){return i},Hk:function(){return c},qo:function(){return l},Iz:function(){return d}});var r=n(5850),a=n.n(r);n(8465)(a()),n(4376).w(a()),n(3609)(a());var u=["en","zh"],i=!1,s=null,o="4fc3c962",l=10,c=50,d={search_placeholder:"Search",see_all_results:"See all results",no_results:"No results.",search_results_for:'Search results for "{{ keyword }}"',search_the_documentation:"Search the documentation",count_documents_found_plural:"{{ count }} documents found",count_documents_found:"{{ count }} document found",no_documents_were_found:"No documents were found"}},4376:function(e,t,n){"use strict";function r(e){var t=new RegExp("^[^"+e+"]+","u"),n=new RegExp("[^"+e+"]+$","u");return function(e){return e.update((function(e){return e.replace(t,"").replace(n,"")}))}}function a(e,t){e.trimmerSupport.generateTrimmer=r,e.zh=function(){this.pipeline.reset(),this.pipeline.add(e.zh.trimmer,e.zh.stopWordFilter),t&&(this.tokenizer=t)},t&&(e.zh.tokenizer=t),e.zh.wordCharacters="\\u3400-\\u4DBF\\u4E00-\\u9FFC\\uFA0E\\uFA0F\\uFA11\\uFA13\\uFA14\\uFA1F\\uFA21\\uFA23\\uFA24\\uFA27-\\uFA29\\u{20000}-\\u{2A6DD}\\u{2A700}-\\u{2B734}\\u{2B740}-\\u{2B81D}\\u{2B820}-\\u{2CEA1}\\u{2CEB0}-\\u{2EBE0}\\u{30000}-\\u{3134A}",e.zh.trimmer=e.trimmerSupport.generateTrimmer(e.zh.wordCharacters),e.Pipeline.registerFunction(e.zh.trimmer,"trimmer-zh"),e.zh.stopWordFilter=e.generateStopWordFilter("\u7684 \u4e00 \u4e0d \u5728 \u4eba \u6709 \u662f \u4e3a \u4ee5 \u4e8e \u4e0a \u4ed6 \u800c \u540e \u4e4b \u6765 \u53ca \u4e86 \u56e0 \u4e0b \u53ef \u5230 \u7531 \u8fd9 \u4e0e \u4e5f \u6b64 \u4f46 \u5e76 \u4e2a \u5176 \u5df2 \u65e0 \u5c0f \u6211 \u4eec \u8d77 \u6700 \u518d \u4eca \u53bb \u597d \u53ea \u53c8 \u6216 \u5f88 \u4ea6 \u67d0 \u628a \u90a3 \u4f60 \u4e43 \u5b83 \u5427 \u88ab \u6bd4 \u522b \u8d81 \u5f53 \u4ece \u5230 \u5f97 \u6253 \u51e1 \u513f \u5c14 \u8be5 \u5404 \u7ed9 \u8ddf \u548c \u4f55 \u8fd8 \u5373 \u51e0 \u65e2 \u770b \u636e \u8ddd \u9760 \u5566 \u4e86 \u53e6 \u4e48 \u6bcf \u4eec \u561b \u62ff \u54ea \u90a3 \u60a8 \u51ed \u4e14 \u5374 \u8ba9 \u4ecd \u5565 \u5982 \u82e5 \u4f7f \u8c01 \u867d \u968f \u540c \u6240 \u5979 \u54c7 \u55e1 \u5f80 \u54ea \u4e9b \u5411 \u6cbf \u54df \u7528 \u4e8e \u54b1 \u5219 \u600e \u66fe \u81f3 \u81f4 \u7740 \u8bf8 \u81ea".split(" ")),e.Pipeline.registerFunction(e.zh.stopWordFilter,"stopWordFilter-zh")}n.d(t,{w:function(){return a}})}}]);