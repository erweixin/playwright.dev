(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[8610],{3146:function(e,t,n){"use strict";n.d(t,{Z:function(){return h}});var r=n(7294),u=n(6010),a=n(3905),s=n(4973),l=n(6742),o=n(3541),i=n(1217),c="blogPostTitle_GeHD",d="blogPostDate_fNvV",m=n(6700);var h=function(e){var t,n,h=(t=(0,m.c2)().selectMessage,function(e){var n=Math.ceil(e);return t(n,(0,s.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:n}))}),p=e.children,f=e.frontMatter,g=e.metadata,v=e.truncated,D=e.isBlogPostPage,F=void 0!==D&&D,E=g.date,k=g.formattedDate,A=g.permalink,C=g.tags,_=g.readingTime,b=f.author,x=f.title,w=f.image,y=f.keywords,N=f.author_url||f.authorURL,Z=f.author_title||f.authorTitle,I=f.author_image_url||f.authorImageURL;return r.createElement(r.Fragment,null,r.createElement(i.Z,{keywords:y,image:w}),r.createElement("article",{className:F?void 0:"margin-bottom--xl"},(n=F?"h1":"h2",r.createElement("header",null,r.createElement(n,{className:(0,u.Z)("margin-bottom--sm",c)},F?x:r.createElement(l.Z,{to:A},x)),r.createElement("div",{className:"margin-vert--md"},r.createElement("time",{dateTime:E,className:d},k,_&&r.createElement(r.Fragment,null," \xb7 ",h(_)))),r.createElement("div",{className:"avatar margin-vert--md"},I&&r.createElement(l.Z,{className:"avatar__photo-link avatar__photo",href:N},r.createElement("img",{src:I,alt:b})),r.createElement("div",{className:"avatar__intro"},b&&r.createElement(r.Fragment,null,r.createElement("h4",{className:"avatar__name"},r.createElement(l.Z,{href:N},b)),r.createElement("small",{className:"avatar__subtitle"},Z)))))),r.createElement("div",{className:"markdown"},r.createElement(a.Zo,{components:o.Z},p)),(C.length>0||v)&&r.createElement("footer",{className:"row margin-vert--lg"},C.length>0&&r.createElement("div",{className:"col"},r.createElement("strong",null,r.createElement(s.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),C.map((function(e){var t=e.label,n=e.permalink;return r.createElement(l.Z,{key:n,className:"margin-horiz--sm",to:n},t)}))),v&&r.createElement("div",{className:"col text--right"},r.createElement(l.Z,{to:g.permalink,"aria-label":"Read more about "+x},r.createElement("strong",null,r.createElement(s.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More")))))))}},5601:function(e,t,n){"use strict";n.d(t,{Z:function(){return m}});var r=n(7294),u=n(6010),a=n(6742),s="sidebar_2ahu",l="sidebarItemTitle_2hhb",o="sidebarItemList_2xAf",i="sidebarItem_2UVv",c="sidebarItemLink_1RT6",d="sidebarItemLinkActive_12pM";function m(e){var t=e.sidebar;return 0===t.items.length?null:r.createElement("div",{className:(0,u.Z)(s,"thin-scrollbar")},r.createElement("h3",{className:l},t.title),r.createElement("ul",{className:o},t.items.map((function(e){return r.createElement("li",{key:e.permalink,className:i},r.createElement(a.Z,{isNavLink:!0,to:e.permalink,className:c,activeClassName:d},e.title))}))))}},9404:function(e,t,n){"use strict";n.r(t);var r=n(7294),u=n(4543),a=n(3146),s=n(6742),l=n(5601),o=n(4973),i=n(6700);function c(e){var t,n=e.tagName,u=e.count,a=(t=(0,i.c2)().selectMessage,function(e){return t(e,(0,o.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:e}))});return r.createElement(o.Z,{id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",values:{nPosts:a(u),tagName:n}},'{nPosts} tagged with "{tagName}"')}t.default=function(e){var t=e.metadata,n=e.items,d=e.sidebar,m=t.allTagsPath,h=t.name,p=t.count;return r.createElement(u.Z,{title:'Posts tagged "'+h+'"',description:'Blog | Tagged "'+h+'"',wrapperClassName:i.kM.wrapper.blogPages,pageClassName:i.kM.page.blogTagsPostPage,searchMetadatas:{tag:"blog_tags_posts"}},r.createElement("div",{className:"container margin-vert--lg"},r.createElement("div",{className:"row"},r.createElement("div",{className:"col col--3"},r.createElement(l.Z,{sidebar:d})),r.createElement("main",{className:"col col--7"},r.createElement("h1",null,r.createElement(c,{count:p,tagName:h})),r.createElement(s.Z,{href:m},r.createElement(o.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags")),r.createElement("div",{className:"margin-vert--xl"},n.map((function(e){var t=e.content;return r.createElement(a.Z,{key:t.metadata.permalink,frontMatter:t.frontMatter,metadata:t.metadata,truncated:!0},r.createElement(t,null))})))))))}},4535:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(7294),u=n(8695),a="loadingRing_3atr";function s(e){var t=e.className;return r.createElement("div",{className:(0,u.Z)(a,t)},r.createElement("div",null),r.createElement("div",null),r.createElement("div",null),r.createElement("div",null))}},3551:function(e,t,n){"use strict";n.d(t,{w:function(){return c}});var r=n(8173),u=n(2137),a=n(7757),s=n.n(a),l=n(5850),o=n.n(l),i=n(8141);function c(e){return d.apply(this,arguments)}function d(){return(d=(0,u.Z)(s().mark((function e(t){var n,u,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,fetch(t+"search-index.json?_="+i.rx);case 3:return e.next=5,e.sent.json();case 5:return n=e.sent,u=n.map((function(e,t){var n=e.documents,r=e.index;return{type:t,documents:n,index:o().Index.load(r)}})),a=n.reduce((function(e,t){for(var n,u=(0,r.Z)(t.index.invertedIndex);!(n=u()).done;){var a=n.value;/(?:[\u3400-\u4DBF\u4E00-\u9FFC\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD869[\uDC00-\uDEDD\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD884[\uDC00-\uDF4A])/.test(a[0][0])&&e.add(a[0])}return e}),new Set),e.abrupt("return",{wrappedIndexes:u,zhDictionary:Array.from(a)});case 9:return e.abrupt("return",{wrappedIndexes:[],zhDictionary:[]});case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},3636:function(e,t,n){"use strict";n.d(t,{Z:function(){return V}});var r=n(8141),u=n(8173),a=n(2137),s=n(7757),l=n.n(s),o=n(7294),i=n(8695),c=n(2263),d=n(412),m=n(5977),h=n(3551),p=n(8938),f=n(6092),g=n(5401),v=n(5579),D="searchBar_2moK",F="dropdownMenu_17SC",E="suggestion_1kAZ",k="cursor_6rPN",A="hitTree_2sUa",C="hitIcon_3jP2",_="hitPath_3Lax",b="noResultsIcon_1rmk",x="hitFooter_1JML",w="hitWrapper_4Hzp",y="hitTitle_2AMl",N="hitAction_2kg3",Z="noResults_1vI5",I="searchBarContainer_2P1H",z="searchBarLoadingRing_1FtX",T="searchIndexLoading_1eRR",L="input_1tay",M="hint_1WuO",B="suggestions_1cWc",P="dataset_3Xc2",R="empty_2isC";function S(e){var t=e.document,n=e.type,r=e.page,u=e.metadata,a=e.tokens,s=e.isInterOfTree,l=e.isLastOfTree,o=0===n,i=1===n,c=[];s?c.push('<svg viewBox="0 0 24 54"><g stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path d="M8 6v42M20 27H8.3"></path></g></svg>'):l&&c.push('<svg viewBox="0 0 24 54"><g stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path d="M8 6v21M20 27H8.3"></path></g></svg>');var d=c.map((function(e){return'<span class="'+A+'">'+e+"</span>"})),m='<span class="'+C+'">'+(o?'<svg width="20" height="20" viewBox="0 0 20 20"><path d="M17 6v12c0 .52-.2 1-1 1H4c-.7 0-1-.33-1-1V2c0-.55.42-1 1-1h8l5 5zM14 8h-3.13c-.51 0-.87-.34-.87-.87V4" stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linejoin="round"></path></svg>':i?'<svg width="20" height="20" viewBox="0 0 20 20"><path d="M13 13h4-4V8H7v5h6v4-4H7V8H3h4V3v5h6V3v5h4-4v5zm-6 0v4-4H3h4z" stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>':'<svg width="20" height="20" viewBox="0 0 20 20"><path d="M17 5H3h14zm0 5H3h14zm0 5H3h14z" stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linejoin="round"></path></svg>')+"</span>",h=['<span class="'+y+'">'+(0,g.o)(t.t,(0,v.m)(u,"t"),a)+"</span>"];return o||h.push('<span class="'+_+'">'+(0,f.C)(r.t||(t.u.startsWith("/docs/api-reference/")?"API Reference":""),a)+"</span>"),[].concat(d,[m,'<span class="'+w+'">'],h,["</span>",'<span class="'+N+'"><svg width="20" height="20" viewBox="0 0 20 20"><g stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path d="M18 3v4c0 2-2 4-4 4H2"></path><path d="M8 17l-6-6 6-6"></path></g></svg></span>']).join("")}function j(){return'<span class="'+Z+'"><span class="'+b+'"><svg width="40" height="40" viewBox="0 0 20 20" fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M15.5 4.8c2 3 1.7 7-1 9.7h0l4.3 4.3-4.3-4.3a7.8 7.8 0 01-9.8 1m-2.2-2.2A7.8 7.8 0 0113.2 2.4M2 18L18 2"></path></svg></span><span>'+r.Iz.no_results+"</span></span>"}var H=n(4535);function U(){return W.apply(this,arguments)}function W(){return(W=(0,a.Z)(l().mark((function e(){var t,r;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([n.e(6756),n.e(213)]).then(n.t.bind(n,4485,23));case 2:return t=e.sent,(r=t.default).noConflict?r.noConflict():t.noConflict&&t.noConflict(),e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var O="_highlight";var V=function(e){var t,n=e.handleSearchBarToggle,s=(0,c.default)().siteConfig.baseUrl,f=(0,m.k6)(),g=(0,m.TH)(),v=(0,o.useRef)(null),A=(0,o.useRef)("empty"),C=(0,o.useRef)(!1),_=(0,o.useState)(!1),b=_[0],w=_[1],y=(0,o.useState)(!1),N=y[0],Z=y[1],W=(0,o.useCallback)((0,a.Z)(l().mark((function e(){var t,n,a,o,i,c,d;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("empty"===A.current){e.next=2;break}return e.abrupt("return");case 2:return A.current="loading",w(!0),e.next=6,Promise.all([(0,h.w)(s),U()]);case 6:t=e.sent,n=t[0],a=n.wrappedIndexes,o=n.zhDictionary,i=t[1],c=i(v.current,{hint:!1,autoselect:!0,cssClasses:{root:D,noPrefix:!0,dropdownMenu:F,input:L,hint:M,suggestions:B,suggestion:E,cursor:k,dataset:P,empty:R}},[{source:(0,p.v)(a,o,r.qo),templates:{suggestion:S,empty:j,footer:function(e){var t=e.query;if(!e.isEmpty){var n=document.createElement("a"),u=s+"search?q="+encodeURIComponent(t);n.href=u,n.textContent=r.Iz.see_all_results,n.addEventListener("click",(function(e){e.ctrlKey||e.metaKey||(e.preventDefault(),c.autocomplete.close(),f.push(u))}));var a=document.createElement("div");return a.className=x,a.appendChild(n),a}}}}]).on("autocomplete:selected",(function(e,t){var n=t.document,a=n.u,s=n.h,l=t.tokens,o=a;if(r.vc&&l.length>0){for(var i,c=new URLSearchParams,d=(0,u.Z)(l);!(i=d()).done;){var m=i.value;c.append(O,m)}o+="?"+c.toString()}s&&(o+=s),f.push(o)})),A.current="done",w(!1),C.current&&((d=v.current).value&&c.autocomplete.open(),d.focus());case 15:case"end":return e.stop()}}),e)}))),[s,f]);(0,o.useEffect)((function(){if(r.vc){var e=d.Z.canUseDOM?new URLSearchParams(g.search).getAll(O):[];if(0!==e.length){var t=document.querySelector("article");if(t){var n=new r.vc(t);n.unmark(),n.mark(e)}}}}),[g.search]);var V=(0,o.useCallback)((function(){C.current=!0,W(),null==n||n(!0)}),[n,W]),Q=(0,o.useCallback)((function(){null==n||n(!1)}),[n]),X=(0,o.useCallback)((function(){W()}),[W]),q=(0,o.useCallback)((function(e){e.target.value&&Z(!0)}),[]);return o.createElement("div",{className:(0,i.Z)("navbar__search",I,(t={},t[T]=b&&N,t))},o.createElement("input",{placeholder:r.Iz.search_placeholder,"aria-label":"Search",className:"navbar__search-input",onMouseEnter:X,onFocus:V,onBlur:Q,onChange:q,ref:v}),o.createElement(H.Z,{className:z}))}},8938:function(e,t,n){"use strict";n.d(t,{v:function(){return c}});var r=n(8173),u=n(5850),a=n.n(u);function s(e,t){var n=[];return function e(u,a){if(0!==u.length){var s=u[0];if(/(?:[\u3400-\u4DBF\u4E00-\u9FFC\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD869[\uDC00-\uDEDD\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD884[\uDC00-\uDF4A])/.test(s))for(var l,o=function(e,t){var n=[];return function e(u,a){for(var s,l=0,o=!1,i=(0,r.Z)(t);!(s=i()).done;){var c=s.value;if(u.substr(0,c.length)===c){var d={missed:a.missed,term:a.term.concat({value:c})};u.length>c.length?e(u.substr(c.length),d):n.push(d),o=!0}else for(var m=c.length-1;m>l;m-=1){var h=c.substr(0,m);if(u.substr(0,m)===h){l=m;var p={missed:a.missed,term:a.term.concat({value:h,trailing:!0})};u.length>m?e(u.substr(m),p):n.push(p),o=!0;break}}}o||(u.length>0?e(u.substr(1),{missed:a.missed+1,term:a.term}):a.term.length>0&&n.push(a))}(e,{missed:0,term:[]}),n.sort((function(e,t){var n=e.missed>0?1:0,r=t.missed>0?1:0;return n!==r?n-r:e.term.length-t.term.length})).map((function(e){return e.term}))}(s,t),i=(0,r.Z)(o);!(l=i()).done;){var c=l.value,d=a.concat.apply(a,c);e(u.slice(1),d)}else{var m=a.concat({value:s});e(u.slice(1),m)}}else n.push(a)}(e,[]),n}var l=n(8141);function o(e){return i(e).concat(i(e.filter((function(e){var t=e[e.length-1];return!t.trailing&&t.maybeTyping})),!0))}function i(e,t){return e.map((function(e){return{tokens:e.map((function(e){return e.value})),term:e.map((function(e){return{value:e.value,presence:a().Query.presence.REQUIRED,wildcard:(t?e.trailing||e.maybeTyping:e.trailing)?a().Query.wildcard.TRAILING:a().Query.wildcard.NONE}}))}}))}function c(e,t,n){return function(u,i){var c=function(e,t){if(1===t.length&&["ja","jp","th"].includes(t[0]))return a()[t[0]].tokenizer(e).map((function(e){return e.toString()}));var n=/[^-\s]+/g;return t.includes("zh")&&(n=/[0-9A-Z_a-z]+|(?:[\u3400-\u4DBF\u4E00-\u9FFC\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD869[\uDC00-\uDEDD\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD884[\uDC00-\uDF4A])+/g),e.toLowerCase().match(n)||[]}(u,l.dK);if(0!==c.length){var d=function(e,t){var n=s(e,t);if(0===n.length)return[{tokens:e,term:e.map((function(e){return{value:e,presence:a().Query.presence.REQUIRED,wildcard:a().Query.wildcard.LEADING|a().Query.wildcard.TRAILING}}))}];for(var u,i=(0,r.Z)(n);!(u=i()).done;){var c=u.value;c[c.length-1].maybeTyping=!0}for(var d,m,h=[],p=(0,r.Z)(l.dK);!(d=p()).done;){var f=d.value;if("en"===f)l._k||h.unshift(a().stopWordFilter);else{var g=a()[f];g.stopWordFilter&&h.unshift(g.stopWordFilter)}}if(h.length>0){var v=function(e){return h.reduce((function(e,t){return e.filter((function(e){return t(e.value)}))}),e)};m=[];for(var D,F=[],E=(0,r.Z)(n);!(D=E()).done;){var k=D.value,A=v(k);m.push(A),A.length<k.length&&A.length>0&&F.push(A)}n.push.apply(n,F)}else m=n.slice();for(var C,_=[],b=(0,r.Z)(m);!(C=b()).done;){var x=C.value;if(x.length>2)for(var w=x.length-1;w>=0;w-=1)_.push(x.slice(0,w).concat(x.slice(w+1)))}return o(n).concat(o(_))}(c,t),m=[],h=function(){for(var t,u=p.value,a=u.term,s=u.tokens,l=function(){var u=t.value,l=u.documents,o=u.index,i=u.type;if(m.push.apply(m,o.query((function(e){for(var t,n=(0,r.Z)(a);!(t=n()).done;){var u=t.value;e.term(u.value,{wildcard:u.wildcard,presence:u.presence})}})).slice(0,n).filter((function(e){return!m.some((function(t){return t.document.i.toString()===e.ref}))})).slice(0,n-m.length).map((function(t){var n=l.find((function(e){return e.i.toString()===t.ref}));return{document:n,type:i,page:0!==i&&e[0].documents.find((function(e){return e.i===n.p})),metadata:t.matchData.metadata,tokens:s,score:t.score}}))),m.length>=n)return{v:"break|search"}},o=(0,r.Z)(e);!(t=o()).done;){var i=l();if("object"==typeof i)return i.v}};e:for(var p,f=(0,r.Z)(d);!(p=f()).done;){if("break|search"===h())break e}!function(e){e.forEach((function(e,t){e.index=t})),e.sort((function(t,n){var r=t.type>0&&t.page?e.findIndex((function(e){return e.document===t.page})):t.index,u=n.type>0&&n.page?e.findIndex((function(e){return e.document===n.page})):n.index;return-1===r&&(r=t.index),-1===u&&(u=n.index),r===u?0===t.type?-1:0===n.type?1:t.index-n.index:r-u}))}(m),function(e){e.forEach((function(t,n){n>0&&t.page&&e.some((function(e){return e.document===t.page}))&&(n<e.length-1&&e[n+1].page===t.page?t.isInterOfTree=!0:t.isLastOfTree=!0)}))}(m),i(m)}else i([])}}},8740:function(e,t,n){"use strict";function r(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}n.d(t,{X:function(){return r}})},5579:function(e,t,n){"use strict";function r(e,t){for(var n=[],r=0,u=Object.values(e);r<u.length;r++){var a=u[r];a[t]&&n.push.apply(n,a[t].position)}return n.sort((function(e,t){return e[0]-t[0]||t[1]-e[1]}))}n.d(t,{m:function(){return r}})},6092:function(e,t,n){"use strict";n.d(t,{C:function(){return a}});var r=n(8173),u=n(8740);function a(e,t,n){for(var s,l=[],o=(0,r.Z)(t);!(s=o()).done;){var i=s.value,c=e.toLowerCase().indexOf(i);if(c>=0){c>0&&l.push(a(e.substr(0,c),t)),l.push("<mark>"+(0,u.X)(e.substr(c,i.length))+"</mark>");var d=c+i.length;d<e.length&&l.push(a(e.substr(d),t));break}}return 0===l.length?n?"<mark>"+(0,u.X)(e)+"</mark>":(0,u.X)(e):l.join("")}},5401:function(e,t,n){"use strict";n.d(t,{o:function(){return o}});var r=n(8740),u=n(6092),a=/[0-9A-Z_a-z]+|(?:[\u3400-\u4DBF\u4E00-\u9FFC\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD869[\uDC00-\uDEDD\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD884[\uDC00-\uDF4A])/;function s(e){for(var t=[],n=0,r=e;r.length>0;){var u=r.match(a);if(!u){t.push(r);break}u.index>0&&t.push(r.substr(0,u.index)),t.push(u[0]),n+=u.index+u[0].length,r=e.substr(n)}return t}var l=n(8141);function o(e,t,n,r){void 0===r&&(r=l.Hk);for(var u={chunkIndex:-1},a=i(e,t,n,0,0,u),s=a.slice(0,u.chunkIndex),o=a[u.chunkIndex],c=[o.html],d=a.slice(u.chunkIndex+1),m=o.textLength,h=0,p=0,f=!1,g=!1;m<r;)if((h<=p||0===d.length)&&s.length>0){var v=s.pop();m+v.textLength<=r?(c.unshift(v.html),h+=v.textLength,m+=v.textLength):(f=!0,s.length=0)}else{if(!(d.length>0))break;var D=d.shift();m+D.textLength<=r?(c.push(D.html),p+=D.textLength,m+=D.textLength):(g=!0,d.length=0)}return(f||s.length>0)&&c.unshift("\u2026"),(g||d.length>0)&&c.push("\u2026"),c.join("")}function i(e,t,n,a,l,o){var c=[],d=t[a],m=d[0],h=d[1];if(m<l)(a+=1)<t.length&&c.push.apply(c,i(e,t,n,a,l));else{m>l&&c.push.apply(c,s(e.substring(l,m)).map((function(e){return{html:(0,r.X)(e),textLength:e.length}}))),o&&(o.chunkIndex=c.length),c.push({html:(0,u.C)(e.substr(m,h),n,!0),textLength:h});var p=m+h;(a+=1)<t.length?c.push.apply(c,i(e,t,n,a,p)):p<e.length&&c.push.apply(c,s(e.substr(p)).map((function(e){return{html:(0,r.X)(e),textLength:e.length}})))}return c}},8141:function(e,t,n){"use strict";n.d(t,{vc:function(){return l},rx:function(){return o},dK:function(){return a},_k:function(){return s},Hk:function(){return c},qo:function(){return i},Iz:function(){return d}});var r=n(5850),u=n.n(r);n(8465)(u()),n(4376).w(u()),n(3609)(u());var a=["en","zh"],s=!1,l=null,o="4fc3c962",i=10,c=50,d={search_placeholder:"Search",see_all_results:"See all results",no_results:"No results.",search_results_for:'Search results for "{{ keyword }}"',search_the_documentation:"Search the documentation",count_documents_found_plural:"{{ count }} documents found",count_documents_found:"{{ count }} document found",no_documents_were_found:"No documents were found"}},4376:function(e,t,n){"use strict";function r(e){var t=new RegExp("^[^"+e+"]+","u"),n=new RegExp("[^"+e+"]+$","u");return function(e){return e.update((function(e){return e.replace(t,"").replace(n,"")}))}}function u(e,t){e.trimmerSupport.generateTrimmer=r,e.zh=function(){this.pipeline.reset(),this.pipeline.add(e.zh.trimmer,e.zh.stopWordFilter),t&&(this.tokenizer=t)},t&&(e.zh.tokenizer=t),e.zh.wordCharacters="\\u3400-\\u4DBF\\u4E00-\\u9FFC\\uFA0E\\uFA0F\\uFA11\\uFA13\\uFA14\\uFA1F\\uFA21\\uFA23\\uFA24\\uFA27-\\uFA29\\u{20000}-\\u{2A6DD}\\u{2A700}-\\u{2B734}\\u{2B740}-\\u{2B81D}\\u{2B820}-\\u{2CEA1}\\u{2CEB0}-\\u{2EBE0}\\u{30000}-\\u{3134A}",e.zh.trimmer=e.trimmerSupport.generateTrimmer(e.zh.wordCharacters),e.Pipeline.registerFunction(e.zh.trimmer,"trimmer-zh"),e.zh.stopWordFilter=e.generateStopWordFilter("\u7684 \u4e00 \u4e0d \u5728 \u4eba \u6709 \u662f \u4e3a \u4ee5 \u4e8e \u4e0a \u4ed6 \u800c \u540e \u4e4b \u6765 \u53ca \u4e86 \u56e0 \u4e0b \u53ef \u5230 \u7531 \u8fd9 \u4e0e \u4e5f \u6b64 \u4f46 \u5e76 \u4e2a \u5176 \u5df2 \u65e0 \u5c0f \u6211 \u4eec \u8d77 \u6700 \u518d \u4eca \u53bb \u597d \u53ea \u53c8 \u6216 \u5f88 \u4ea6 \u67d0 \u628a \u90a3 \u4f60 \u4e43 \u5b83 \u5427 \u88ab \u6bd4 \u522b \u8d81 \u5f53 \u4ece \u5230 \u5f97 \u6253 \u51e1 \u513f \u5c14 \u8be5 \u5404 \u7ed9 \u8ddf \u548c \u4f55 \u8fd8 \u5373 \u51e0 \u65e2 \u770b \u636e \u8ddd \u9760 \u5566 \u4e86 \u53e6 \u4e48 \u6bcf \u4eec \u561b \u62ff \u54ea \u90a3 \u60a8 \u51ed \u4e14 \u5374 \u8ba9 \u4ecd \u5565 \u5982 \u82e5 \u4f7f \u8c01 \u867d \u968f \u540c \u6240 \u5979 \u54c7 \u55e1 \u5f80 \u54ea \u4e9b \u5411 \u6cbf \u54df \u7528 \u4e8e \u54b1 \u5219 \u600e \u66fe \u81f3 \u81f4 \u7740 \u8bf8 \u81ea".split(" ")),e.Pipeline.registerFunction(e.zh.stopWordFilter,"stopWordFilter-zh")}n.d(t,{w:function(){return u}})}}]);