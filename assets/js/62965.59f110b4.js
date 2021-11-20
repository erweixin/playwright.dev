"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[62965],{48219:function(e,n,t){var r=t(22122),u=t(19756),a=t(67294),o=t(86010),i=t(36742),s=t(44996),l=t(5977),c=t(39306),h=t(18617),d=t(13919),f="dropdown__link--active";function p(e){var n=e.activeBasePath,t=e.activeBaseRegex,o=e.to,c=e.href,p=e.label,m=e.activeClassName,v=void 0===m?"navbar__link--active":m,D=e.prependBaseUrlToHref,F=e["data-language-prefix"],g=(0,u.Z)(e,["activeBasePath","activeBaseRegex","to","href","label","activeClassName","prependBaseUrlToHref","data-language-prefix"]),C=(0,s.Z)(o),A=(0,s.Z)(n),E=(0,s.Z)(c,{forcePrependBaseUrl:!0}),_=p&&c&&!(0,d.Z)(c),k=v===f,w=(0,l.TH)();if(F){c="pathname://"+F+w.pathname.replace(/^(\/(java|dotnet|python))?\/(.*)/,"$3")+w.hash,g.autoAddBaseUrl=!1,g.target="_self";var x=["java","dotnet","python"].some((function(e){return w.pathname.startsWith("/"+e)}));(w.pathname.startsWith(F)&&x&&F.length>1||1===F.length&&!x)&&(g.className+=" "+v)}return a.createElement(i.Z,(0,r.Z)({},c?{href:D?E:c}:Object.assign({isNavLink:!0,activeClassName:v,to:C},n||t?{isActive:function(e,n){return t?new RegExp(t).test(n.pathname):n.pathname.startsWith(A)}}:null),g),_?a.createElement("span",null,p,a.createElement(h.Z,k&&{width:12,height:12})):p)}function m(e){var n,t=e.items,i=e.position,s=e.className,l=(0,u.Z)(e,["items","position","className"]),c=(0,a.useRef)(null),h=(0,a.useRef)(null),d=(0,a.useState)(!1),m=d[0],v=d[1];(0,a.useEffect)((function(){var e=function(e){c.current&&!c.current.contains(e.target)&&v(!1)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),function(){document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}}),[c]);var D=function(e,n){return void 0===n&&(n=!1),(0,o.Z)({"navbar__item navbar__link":!n,dropdown__link:n},e)};return t?a.createElement("div",{ref:c,className:(0,o.Z)("navbar__item","dropdown","dropdown--hoverable",{"dropdown--left":"left"===i,"dropdown--right":"right"===i,"dropdown--show":m})},a.createElement(p,(0,r.Z)({className:D(s)},l,{onClick:l.to?void 0:function(e){return e.preventDefault()},onKeyDown:function(e){"Enter"===e.key&&(e.preventDefault(),v(!m))}}),null!=(n=l.children)?n:l.label),a.createElement("ul",{ref:h,className:"dropdown__menu"},t.map((function(e,n){var o=e.className,i=(0,u.Z)(e,["className"]);return a.createElement("li",{key:n},a.createElement(p,(0,r.Z)({onKeyDown:function(e){if(n===t.length-1&&"Tab"===e.key){e.preventDefault(),v(!1);var r=c.current.nextElementSibling;r&&r.focus()}},activeClassName:f,className:D(o,!0)},i)))})))):a.createElement(p,(0,r.Z)({className:D(s)},l))}function v(e){var n,t,i,s=e.items,h=e.className,d=(e.position,(0,u.Z)(e,["items","className","position"])),f=(0,a.useRef)(null),m=(0,l.TH)().pathname,v=(0,a.useState)((function(){var e;return null==(e=!(null!=s&&s.some((function(e){return(0,c.Mg)(e.to,m)}))))||e})),D=v[0],F=v[1],g=function(e,n){return void 0===n&&(n=!1),(0,o.Z)("menu__link",{"menu__link--sublist":n},e)};if(!s)return a.createElement("li",{className:"menu__list-item"},a.createElement(p,(0,r.Z)({className:g(h)},d)));var C=null!=(n=f.current)&&n.scrollHeight?(null==(t=f.current)?void 0:t.scrollHeight)+"px":void 0;return a.createElement("li",{className:(0,o.Z)("menu__list-item",{"menu__list-item--collapsed":D})},a.createElement(p,(0,r.Z)({role:"button",className:g(h,!0)},d,{onClick:function(e){e.preventDefault(),F((function(e){return!e}))}}),null!=(i=d.children)?i:d.label),a.createElement("ul",{className:"menu__list",ref:f,style:{height:D?void 0:C}},s.map((function(e,n){var t=e.className,o=(0,u.Z)(e,["className"]);return a.createElement("li",{className:"menu__list-item",key:n},a.createElement(p,(0,r.Z)({activeClassName:"menu__link--active",className:g(t)},o,{onClick:d.onClick})))}))))}n.Z=function(e){var n=e.mobile,t=void 0!==n&&n,r=(0,u.Z)(e,["mobile"]),o=t?v:m;return a.createElement(o,r)}},84204:function(e,n,t){t.r(n);var r=t(67294),u=t(28258),a=t(52263);n.default=function(){var e=(0,a.Z)().siteConfig.customFields.languageName;return r.createElement(u.Z,{title:"Page Not Found"},r.createElement("main",{className:"container margin-vert--xl"},r.createElement("div",{className:"row"},r.createElement("div",{className:"col col--6 col--offset-3"},r.createElement("h1",{className:"hero__title"},"This page is not available for ",e,"."),r.createElement("p",null,"We could not find what you were looking for.")))))}},14535:function(e,n,t){t.d(n,{Z:function(){return o}});var r=t(67294),u=t(78695),a="loadingRing_3atr";function o(e){var n=e.className;return r.createElement("div",{className:(0,u.Z)(a,n)},r.createElement("div",null),r.createElement("div",null),r.createElement("div",null),r.createElement("div",null))}},3551:function(e,n,t){t.d(n,{w:function(){return c}});var r=t(38173),u=t(92137),a=t(87757),o=t.n(a),i=t(35850),s=t.n(i),l=t(8141);function c(e){return h.apply(this,arguments)}function h(){return(h=(0,u.Z)(o().mark((function e(n){var t,u,a;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,fetch(n+"search-index.json?_="+l.rx);case 3:return e.next=5,e.sent.json();case 5:return t=e.sent,u=t.map((function(e,n){var t=e.documents,r=e.index;return{type:n,documents:t,index:s().Index.load(r)}})),a=t.reduce((function(e,n){for(var t,u=(0,r.Z)(n.index.invertedIndex);!(t=u()).done;){var a=t.value;/(?:[\u3400-\u4DBF\u4E00-\u9FFC\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD869[\uDC00-\uDEDD\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD884[\uDC00-\uDF4A])/.test(a[0][0])&&e.add(a[0])}return e}),new Set),e.abrupt("return",{wrappedIndexes:u,zhDictionary:Array.from(a)});case 9:return e.abrupt("return",{wrappedIndexes:[],zhDictionary:[]});case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},83636:function(e,n,t){t.d(n,{Z:function(){return K}});var r=t(8141),u=t(38173),a=t(92137),o=t(87757),i=t.n(o),s=t(67294),l=t(78695),c=t(52263),h=t(10412),d=t(5977),f=t(3551),p=t(88938),m=t(86092),v=t(55401),D=t(85579),F="searchBar_2moK",g="dropdownMenu_17SC",C="suggestion_1kAZ",A="cursor_6rPN",E="hitTree_2sUa",_="hitIcon_3jP2",k="hitPath_3Lax",w="noResultsIcon_1rmk",x="hitFooter_1JML",y="hitWrapper_4Hzp",b="hitTitle_2AMl",Z="hitAction_2kg3",N="noResults_1vI5",B="searchBarContainer_2P1H",z="searchBarLoadingRing_1FtX",I="searchIndexLoading_1eRR",L="input_1tay",R="hint_1WuO",S="suggestions_1cWc",H="dataset_3Xc2",T="empty_2isC";function j(e){var n=e.document,t=e.type,r=e.page,u=e.metadata,a=e.tokens,o=e.isInterOfTree,i=e.isLastOfTree,s=0===t,l=1===t,c=[];o?c.push('<svg viewBox="0 0 24 54"><g stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path d="M8 6v42M20 27H8.3"></path></g></svg>'):i&&c.push('<svg viewBox="0 0 24 54"><g stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path d="M8 6v21M20 27H8.3"></path></g></svg>');var h=c.map((function(e){return'<span class="'+E+'">'+e+"</span>"})),d='<span class="'+_+'">'+(s?'<svg width="20" height="20" viewBox="0 0 20 20"><path d="M17 6v12c0 .52-.2 1-1 1H4c-.7 0-1-.33-1-1V2c0-.55.42-1 1-1h8l5 5zM14 8h-3.13c-.51 0-.87-.34-.87-.87V4" stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linejoin="round"></path></svg>':l?'<svg width="20" height="20" viewBox="0 0 20 20"><path d="M13 13h4-4V8H7v5h6v4-4H7V8H3h4V3v5h6V3v5h4-4v5zm-6 0v4-4H3h4z" stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>':'<svg width="20" height="20" viewBox="0 0 20 20"><path d="M17 5H3h14zm0 5H3h14zm0 5H3h14z" stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linejoin="round"></path></svg>')+"</span>",f=['<span class="'+b+'">'+(0,v.o)(n.t,(0,D.m)(u,"t"),a)+"</span>"];return s||f.push('<span class="'+k+'">'+(0,m.C)(r.t||(n.u.startsWith("/docs/api-reference/")?"API Reference":""),a)+"</span>"),[].concat(h,[d,'<span class="'+y+'">'],f,["</span>",'<span class="'+Z+'"><svg width="20" height="20" viewBox="0 0 20 20"><g stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path d="M18 3v4c0 2-2 4-4 4H2"></path><path d="M8 17l-6-6 6-6"></path></g></svg></span>']).join("")}function M(){return'<span class="'+N+'"><span class="'+w+'"><svg width="40" height="40" viewBox="0 0 20 20" fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M15.5 4.8c2 3 1.7 7-1 9.7h0l4.3 4.3-4.3-4.3a7.8 7.8 0 01-9.8 1m-2.2-2.2A7.8 7.8 0 0113.2 2.4M2 18L18 2"></path></svg></span><span>'+r.Iz.no_results+"</span></span>"}var P=t(14535);function W(){return U.apply(this,arguments)}function U(){return(U=(0,a.Z)(i().mark((function e(){var n,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([t.e(24485),t.e(90213)]).then(t.t.bind(t,24485,23));case 2:return n=e.sent,(r=n.default).noConflict?r.noConflict():n.noConflict&&n.noConflict(),e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var O="_highlight";var K=function(e){var n,t=e.handleSearchBarToggle,o=(0,c.Z)().siteConfig.baseUrl,m=(0,d.k6)(),v=(0,d.TH)(),D=(0,s.useRef)(null),E=(0,s.useRef)("empty"),_=(0,s.useRef)(!1),k=(0,s.useState)(!1),w=k[0],y=k[1],b=(0,s.useState)(!1),Z=b[0],N=b[1],U=(0,s.useCallback)((0,a.Z)(i().mark((function e(){var n,t,a,s,l,c,h;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("empty"===E.current){e.next=2;break}return e.abrupt("return");case 2:return E.current="loading",y(!0),e.next=6,Promise.all([(0,f.w)(o),W()]);case 6:n=e.sent,t=n[0],a=t.wrappedIndexes,s=t.zhDictionary,l=n[1],c=l(D.current,{hint:!1,autoselect:!0,cssClasses:{root:F,noPrefix:!0,dropdownMenu:g,input:L,hint:R,suggestions:S,suggestion:C,cursor:A,dataset:H,empty:T}},[{source:(0,p.v)(a,s,r.qo),templates:{suggestion:j,empty:M,footer:function(e){var n=e.query;if(!e.isEmpty){var t=document.createElement("a"),u=o+"search?q="+encodeURIComponent(n);t.href=u,t.textContent=r.Iz.see_all_results,t.addEventListener("click",(function(e){e.ctrlKey||e.metaKey||(e.preventDefault(),c.autocomplete.close(),m.push(u))}));var a=document.createElement("div");return a.className=x,a.appendChild(t),a}}}}]).on("autocomplete:selected",(function(e,n){var t=n.document,a=t.u,o=t.h,i=n.tokens,s=a;if(r.vc&&i.length>0){for(var l,c=new URLSearchParams,h=(0,u.Z)(i);!(l=h()).done;){var d=l.value;c.append(O,d)}s+="?"+c.toString()}o&&(s+=o),m.push(s)})),E.current="done",y(!1),_.current&&((h=D.current).value&&c.autocomplete.open(),h.focus());case 15:case"end":return e.stop()}}),e)}))),[o,m]);(0,s.useEffect)((function(){if(r.vc){var e=h.Z.canUseDOM?new URLSearchParams(v.search).getAll(O):[];0!==e.length&&setTimeout((function(){var n=document.querySelector("article");if(n){var t=new r.vc(n);t.unmark(),t.mark(e)}}))}}),[v.search]);var K=(0,s.useCallback)((function(){_.current=!0,U(),null==t||t(!0)}),[t,U]),Q=(0,s.useCallback)((function(){null==t||t(!1)}),[t]),X=(0,s.useCallback)((function(){U()}),[U]),q=(0,s.useCallback)((function(e){e.target.value&&N(!0)}),[]);return s.createElement("div",{className:(0,l.Z)("navbar__search",B,(n={},n[I]=w&&Z,n))},s.createElement("input",{placeholder:r.Iz.search_placeholder,"aria-label":"Search",className:"navbar__search-input",onMouseEnter:X,onFocus:K,onBlur:Q,onChange:q,ref:D}),s.createElement(P.Z,{className:z}))}},88938:function(e,n,t){t.d(n,{v:function(){return c}});var r=t(38173),u=t(35850),a=t.n(u);function o(e,n){var t=[];return function e(u,a){if(0!==u.length){var o=u[0];if(/(?:[\u3400-\u4DBF\u4E00-\u9FFC\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD869[\uDC00-\uDEDD\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD884[\uDC00-\uDF4A])/.test(o))for(var i,s=function(e,n){var t=[];return function e(u,a){for(var o,i=0,s=!1,l=(0,r.Z)(n);!(o=l()).done;){var c=o.value;if(u.substr(0,c.length)===c){var h={missed:a.missed,term:a.term.concat({value:c})};u.length>c.length?e(u.substr(c.length),h):t.push(h),s=!0}else for(var d=c.length-1;d>i;d-=1){var f=c.substr(0,d);if(u.substr(0,d)===f){i=d;var p={missed:a.missed,term:a.term.concat({value:f,trailing:!0})};u.length>d?e(u.substr(d),p):t.push(p),s=!0;break}}}s||(u.length>0?e(u.substr(1),{missed:a.missed+1,term:a.term}):a.term.length>0&&t.push(a))}(e,{missed:0,term:[]}),t.sort((function(e,n){var t=e.missed>0?1:0,r=n.missed>0?1:0;return t!==r?t-r:e.term.length-n.term.length})).map((function(e){return e.term}))}(o,n),l=(0,r.Z)(s);!(i=l()).done;){var c=i.value,h=a.concat.apply(a,c);e(u.slice(1),h)}else{var d=a.concat({value:o});e(u.slice(1),d)}}else t.push(a)}(e,[]),t}var i=t(8141);function s(e){return l(e).concat(l(e.filter((function(e){var n=e[e.length-1];return!n.trailing&&n.maybeTyping})),!0))}function l(e,n){return e.map((function(e){return{tokens:e.map((function(e){return e.value})),term:e.map((function(e){return{value:e.value,presence:a().Query.presence.REQUIRED,wildcard:(n?e.trailing||e.maybeTyping:e.trailing)?a().Query.wildcard.TRAILING:a().Query.wildcard.NONE}}))}}))}function c(e,n,t){return function(u,l){var c=function(e,n){if(1===n.length&&["ja","jp","th"].includes(n[0]))return a()[n[0]].tokenizer(e).map((function(e){return e.toString()}));var t=/[^-\s]+/g;return n.includes("zh")&&(t=/[0-9A-Z_a-z]+|(?:[\u3400-\u4DBF\u4E00-\u9FFC\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD869[\uDC00-\uDEDD\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD884[\uDC00-\uDF4A])+/g),e.toLowerCase().match(t)||[]}(u,i.dK);if(0!==c.length){var h=function(e,n){var t=o(e,n);if(0===t.length)return[{tokens:e,term:e.map((function(e){return{value:e,presence:a().Query.presence.REQUIRED,wildcard:a().Query.wildcard.LEADING|a().Query.wildcard.TRAILING}}))}];for(var u,l=(0,r.Z)(t);!(u=l()).done;){var c=u.value;c[c.length-1].maybeTyping=!0}for(var h,d,f=[],p=(0,r.Z)(i.dK);!(h=p()).done;){var m=h.value;if("en"===m)i._k||f.unshift(a().stopWordFilter);else{var v=a()[m];v.stopWordFilter&&f.unshift(v.stopWordFilter)}}if(f.length>0){var D=function(e){return f.reduce((function(e,n){return e.filter((function(e){return n(e.value)}))}),e)};d=[];for(var F,g=[],C=(0,r.Z)(t);!(F=C()).done;){var A=F.value,E=D(A);d.push(E),E.length<A.length&&E.length>0&&g.push(E)}t.push.apply(t,g)}else d=t.slice();for(var _,k=[],w=(0,r.Z)(d);!(_=w()).done;){var x=_.value;if(x.length>2)for(var y=x.length-1;y>=0;y-=1)k.push(x.slice(0,y).concat(x.slice(y+1)))}return s(t).concat(s(k))}(c,n),d=[],f=function(){for(var n,u=p.value,a=u.term,o=u.tokens,i=function(){var u=n.value,i=u.documents,s=u.index,l=u.type;if(d.push.apply(d,s.query((function(e){for(var n,t=(0,r.Z)(a);!(n=t()).done;){var u=n.value;e.term(u.value,{wildcard:u.wildcard,presence:u.presence})}})).slice(0,t).filter((function(e){return!d.some((function(n){return n.document.i.toString()===e.ref}))})).slice(0,t-d.length).map((function(n){var t=i.find((function(e){return e.i.toString()===n.ref}));return{document:t,type:l,page:0!==l&&e[0].documents.find((function(e){return e.i===t.p})),metadata:n.matchData.metadata,tokens:o,score:n.score}}))),d.length>=t)return{v:"break|search"}},s=(0,r.Z)(e);!(n=s()).done;){var l=i();if("object"==typeof l)return l.v}};e:for(var p,m=(0,r.Z)(h);!(p=m()).done;){if("break|search"===f())break e}!function(e){e.forEach((function(e,n){e.index=n})),e.sort((function(n,t){var r=n.type>0&&n.page?e.findIndex((function(e){return e.document===n.page})):n.index,u=t.type>0&&t.page?e.findIndex((function(e){return e.document===t.page})):t.index;return-1===r&&(r=n.index),-1===u&&(u=t.index),r===u?0===n.type?-1:0===t.type?1:n.index-t.index:r-u}))}(d),function(e){e.forEach((function(n,t){t>0&&n.page&&e.some((function(e){return e.document===n.page}))&&(t<e.length-1&&e[t+1].page===n.page?n.isInterOfTree=!0:n.isLastOfTree=!0)}))}(d),l(d)}else l([])}}},98740:function(e,n,t){function r(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}t.d(n,{X:function(){return r}})},85579:function(e,n,t){function r(e,n){for(var t=[],r=0,u=Object.values(e);r<u.length;r++){var a=u[r];a[n]&&t.push.apply(t,a[n].position)}return t.sort((function(e,n){return e[0]-n[0]||n[1]-e[1]}))}t.d(n,{m:function(){return r}})},86092:function(e,n,t){t.d(n,{C:function(){return a}});var r=t(38173),u=t(98740);function a(e,n,t){for(var o,i=[],s=(0,r.Z)(n);!(o=s()).done;){var l=o.value,c=e.toLowerCase().indexOf(l);if(c>=0){c>0&&i.push(a(e.substr(0,c),n)),i.push("<mark>"+(0,u.X)(e.substr(c,l.length))+"</mark>");var h=c+l.length;h<e.length&&i.push(a(e.substr(h),n));break}}return 0===i.length?t?"<mark>"+(0,u.X)(e)+"</mark>":(0,u.X)(e):i.join("")}},55401:function(e,n,t){t.d(n,{o:function(){return s}});var r=t(98740),u=t(86092),a=/[0-9A-Z_a-z]+|(?:[\u3400-\u4DBF\u4E00-\u9FFC\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD869[\uDC00-\uDEDD\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD884[\uDC00-\uDF4A])/;function o(e){for(var n=[],t=0,r=e;r.length>0;){var u=r.match(a);if(!u){n.push(r);break}u.index>0&&n.push(r.substr(0,u.index)),n.push(u[0]),t+=u.index+u[0].length,r=e.substr(t)}return n}var i=t(8141);function s(e,n,t,r){void 0===r&&(r=i.Hk);for(var u={chunkIndex:-1},a=l(e,n,t,0,0,u),o=a.slice(0,u.chunkIndex),s=a[u.chunkIndex],c=[s.html],h=a.slice(u.chunkIndex+1),d=s.textLength,f=0,p=0,m=!1,v=!1;d<r;)if((f<=p||0===h.length)&&o.length>0){var D=o.pop();d+D.textLength<=r?(c.unshift(D.html),f+=D.textLength,d+=D.textLength):(m=!0,o.length=0)}else{if(!(h.length>0))break;var F=h.shift();d+F.textLength<=r?(c.push(F.html),p+=F.textLength,d+=F.textLength):(v=!0,h.length=0)}return(m||o.length>0)&&c.unshift("\u2026"),(v||h.length>0)&&c.push("\u2026"),c.join("")}function l(e,n,t,a,i,s){var c=[],h=n[a],d=h[0],f=h[1];if(d<i)(a+=1)<n.length&&c.push.apply(c,l(e,n,t,a,i));else{d>i&&c.push.apply(c,o(e.substring(i,d)).map((function(e){return{html:(0,r.X)(e),textLength:e.length}}))),s&&(s.chunkIndex=c.length),c.push({html:(0,u.C)(e.substr(d,f),t,!0),textLength:f});var p=d+f;(a+=1)<n.length?c.push.apply(c,l(e,n,t,a,p)):p<e.length&&c.push.apply(c,o(e.substr(p)).map((function(e){return{html:(0,r.X)(e),textLength:e.length}})))}return c}},8141:function(e,n,t){t.d(n,{vc:function(){return i},rx:function(){return s},dK:function(){return a},_k:function(){return o},Hk:function(){return c},qo:function(){return l},Iz:function(){return h}});var r=t(35850),u=t.n(r);t(88465)(u()),t(64376).w(u()),t(93609)(u());var a=["en","zh"],o=!1,i=null,s="c48cae8b",l=8,c=50,h={search_placeholder:"Search",see_all_results:"See all results",no_results:"No results.",search_results_for:'Search results for "{{ keyword }}"',search_the_documentation:"Search the documentation",count_documents_found_plural:"{{ count }} documents found",count_documents_found:"{{ count }} document found",no_documents_were_found:"No documents were found"}},64376:function(e,n,t){function r(e){var n=new RegExp("^[^"+e+"]+","u"),t=new RegExp("[^"+e+"]+$","u");return function(e){return e.update((function(e){return e.replace(n,"").replace(t,"")}))}}function u(e,n){e.trimmerSupport.generateTrimmer=r,e.zh=function(){this.pipeline.reset(),this.pipeline.add(e.zh.trimmer,e.zh.stopWordFilter),n&&(this.tokenizer=n)},n&&(e.zh.tokenizer=n),e.zh.wordCharacters="\\u3400-\\u4DBF\\u4E00-\\u9FFC\\uFA0E\\uFA0F\\uFA11\\uFA13\\uFA14\\uFA1F\\uFA21\\uFA23\\uFA24\\uFA27-\\uFA29\\u{20000}-\\u{2A6DD}\\u{2A700}-\\u{2B734}\\u{2B740}-\\u{2B81D}\\u{2B820}-\\u{2CEA1}\\u{2CEB0}-\\u{2EBE0}\\u{30000}-\\u{3134A}",e.zh.trimmer=e.trimmerSupport.generateTrimmer(e.zh.wordCharacters),e.Pipeline.registerFunction(e.zh.trimmer,"trimmer-zh"),e.zh.stopWordFilter=e.generateStopWordFilter("\u7684 \u4e00 \u4e0d \u5728 \u4eba \u6709 \u662f \u4e3a \u4ee5 \u4e8e \u4e0a \u4ed6 \u800c \u540e \u4e4b \u6765 \u53ca \u4e86 \u56e0 \u4e0b \u53ef \u5230 \u7531 \u8fd9 \u4e0e \u4e5f \u6b64 \u4f46 \u5e76 \u4e2a \u5176 \u5df2 \u65e0 \u5c0f \u6211 \u4eec \u8d77 \u6700 \u518d \u4eca \u53bb \u597d \u53ea \u53c8 \u6216 \u5f88 \u4ea6 \u67d0 \u628a \u90a3 \u4f60 \u4e43 \u5b83 \u5427 \u88ab \u6bd4 \u522b \u8d81 \u5f53 \u4ece \u5230 \u5f97 \u6253 \u51e1 \u513f \u5c14 \u8be5 \u5404 \u7ed9 \u8ddf \u548c \u4f55 \u8fd8 \u5373 \u51e0 \u65e2 \u770b \u636e \u8ddd \u9760 \u5566 \u4e86 \u53e6 \u4e48 \u6bcf \u4eec \u561b \u62ff \u54ea \u90a3 \u60a8 \u51ed \u4e14 \u5374 \u8ba9 \u4ecd \u5565 \u5982 \u82e5 \u4f7f \u8c01 \u867d \u968f \u540c \u6240 \u5979 \u54c7 \u55e1 \u5f80 \u54ea \u4e9b \u5411 \u6cbf \u54df \u7528 \u4e8e \u54b1 \u5219 \u600e \u66fe \u81f3 \u81f4 \u7740 \u8bf8 \u81ea".split(" ")),e.Pipeline.registerFunction(e.zh.stopWordFilter,"stopWordFilter-zh")}t.d(n,{w:function(){return u}})}}]);