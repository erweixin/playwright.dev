"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[7918],{118:function(e,t,a){a.r(t),a.d(t,{default:function(){return ge}});var n=a(7294),l=a(6010),r=a(3084),o=a(2750),i=Object.defineProperty,s=Object.defineProperties,c=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,b=(e,t,a)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,p=(e,t)=>{for(var a in t||(t={}))m.call(t,a)&&b(e,a,t[a]);if(d)for(var a of d(t))u.call(t,a)&&b(e,a,t[a]);return e},v=(e,t)=>s(e,c(t));function f(e){const{previous:t,next:a}=e;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,r.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},n.createElement("div",{className:"pagination-nav__item"},t&&n.createElement(o.Z,v(p({},t),{subLabel:n.createElement(r.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")}))),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},a&&n.createElement(o.Z,v(p({},a),{subLabel:n.createElement(r.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next")}))))}var g=a(1368),h=a(9130),E=a(8773),y=a(5882),O=Object.defineProperty,N=Object.getOwnPropertySymbols,_=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable,L=(e,t,a)=>t in e?O(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;const Z={unreleased:function({siteTitle:e,versionMetadata:t}){return n.createElement(r.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:e,versionLabel:n.createElement("b",null,t.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function({siteTitle:e,versionMetadata:t}){return n.createElement(r.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:e,versionLabel:n.createElement("b",null,t.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function w(e){const t=Z[e.versionMetadata.banner];return n.createElement(t,((e,t)=>{for(var a in t||(t={}))_.call(t,a)&&L(e,a,t[a]);if(N)for(var a of N(t))k.call(t,a)&&L(e,a,t[a]);return e})({},e))}function j({versionLabel:e,to:t,onClick:a}){return n.createElement(r.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:e,latestVersionLink:n.createElement("b",null,n.createElement(h.Z,{to:t,onClick:a},n.createElement(r.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function U({className:e,versionMetadata:t}){const{siteConfig:{title:a}}=(0,g.Z)(),{pluginId:r}=(0,E.gA)({failfast:!0}),{savePreferredVersionName:o}=(0,y.J)(r),{latestDocSuggestion:i,latestVersionSuggestion:s}=(0,E.Jo)(r),c=null!=i?i:(d=s).docs.find((e=>e.id===d.mainDocId));var d;return n.createElement("div",{className:(0,l.Z)(e,y.kM.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},n.createElement("div",null,n.createElement(w,{siteTitle:a,versionMetadata:t})),n.createElement("div",{className:"margin-top--md"},n.createElement(j,{versionLabel:s.label,to:c.path,onClick:()=>o(s.name)})))}function C({className:e}){const t=(0,y.E6)();return t.banner?n.createElement(U,{className:e,versionMetadata:t}):null}function T({className:e}){const t=(0,y.E6)();return t.badge?n.createElement("span",{className:(0,l.Z)(e,y.kM.docs.docVersionBadge,"badge badge--secondary")},n.createElement(r.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:t.label}},"Version: {versionLabel}")):null}var P=a(3730);function x({lastUpdatedAt:e,formattedLastUpdatedAt:t}){return n.createElement(r.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:n.createElement("b",null,n.createElement("time",{dateTime:new Date(1e3*e).toISOString()},t))}}," on {date}")}function M({lastUpdatedBy:e}){return n.createElement(r.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:n.createElement("b",null,e)}}," by {user}")}function A({lastUpdatedAt:e,formattedLastUpdatedAt:t,lastUpdatedBy:a}){return n.createElement("span",{className:y.kM.common.lastUpdated},n.createElement(r.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:e&&t?n.createElement(x,{lastUpdatedAt:e,formattedLastUpdatedAt:t}):"",byUser:a?n.createElement(M,{lastUpdatedBy:a}):""}},"Last updated{atDate}{byUser}"),!1)}var H=a(1662),I=a(8901),S="lastUpdated_foO9",D=Object.defineProperty,B=Object.getOwnPropertySymbols,V=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable,R=(e,t,a)=>t in e?D(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;function z(e){return n.createElement("div",{className:(0,l.Z)(y.kM.docs.docFooterTagsRow,"row margin-bottom--sm")},n.createElement("div",{className:"col"},n.createElement(I.Z,((e,t)=>{for(var a in t||(t={}))V.call(t,a)&&R(e,a,t[a]);if(B)for(var a of B(t))F.call(t,a)&&R(e,a,t[a]);return e})({},e))))}function q({editUrl:e,lastUpdatedAt:t,lastUpdatedBy:a,formattedLastUpdatedAt:r}){return n.createElement("div",{className:(0,l.Z)(y.kM.docs.docFooterEditMetaRow,"row")},n.createElement("div",{className:"col"},e&&n.createElement(H.Z,{editUrl:e})),n.createElement("div",{className:(0,l.Z)("col",S)},(t||a)&&n.createElement(A,{lastUpdatedAt:t,formattedLastUpdatedAt:r,lastUpdatedBy:a})))}function J(e){const{content:t}=e,{metadata:a}=t,{editUrl:r,lastUpdatedAt:o,formattedLastUpdatedAt:i,lastUpdatedBy:s,tags:c}=a,d=c.length>0,m=!!(r||o||s);return d||m?n.createElement("footer",{className:(0,l.Z)(y.kM.docs.docFooter,"docusaurus-mt-lg")},d&&n.createElement(z,{tags:c}),m&&n.createElement(q,{editUrl:r,lastUpdatedAt:o,lastUpdatedBy:s,formattedLastUpdatedAt:i})):null}var Q=a(9285),W="tocCollapsible_jdIR",X="tocCollapsibleButton_Fzxq",$="tocCollapsibleContent_MpvI",G="tocCollapsibleExpanded_laf4",K=a(6211);function Y({toc:e,className:t,minHeadingLevel:a,maxHeadingLevel:o}){const{collapsed:i,toggleCollapsed:s}=(0,y.uR)({initialState:!0});return n.createElement("div",{className:(0,l.Z)(W,{[G]:!i},t)},n.createElement("button",{type:"button",className:(0,l.Z)("clean-btn",X),onClick:s},n.createElement(r.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page")),n.createElement(y.zF,{lazy:!0,className:$,collapsed:i},n.createElement(K.Z,{toc:e,minHeadingLevel:a,maxHeadingLevel:o})))}var ee=a(4845),te="docItemContainer_vinB",ae="docItemCol_DM6M",ne="tocMobile_TmEX",le="breadcrumbsContainer_Xlws",re="breadcrumbsItemLink_e5ie",oe=a(5026);function ie({children:e,href:t}){const a=(0,l.Z)("breadcrumbs__link",re);return t?n.createElement(h.Z,{className:a,href:t},e):n.createElement("span",{className:a},e)}function se({children:e,active:t}){return n.createElement("li",{className:(0,l.Z)("breadcrumbs__item",{"breadcrumbs__item--active":t})},e)}function ce(){const e=(0,oe.Z)("/");return n.createElement(se,null,n.createElement(ie,{href:e},"\ud83c\udfe0"))}function de(){const e=(0,y.s1)(),t=(0,y.Ns)();return e?n.createElement("nav",{className:(0,l.Z)(y.kM.docs.docBreadcrumbs,le),"aria-label":"breadcrumbs"},n.createElement("ul",{className:"breadcrumbs"},t&&n.createElement(ce,null),e.map(((t,a)=>n.createElement(se,{key:a,active:a===e.length-1},n.createElement(ie,{href:t.href},t.label)))))):null}var me=Object.defineProperty,ue=Object.getOwnPropertySymbols,be=Object.prototype.hasOwnProperty,pe=Object.prototype.propertyIsEnumerable,ve=(e,t,a)=>t in e?me(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,fe=(e,t)=>{for(var a in t||(t={}))be.call(t,a)&&ve(e,a,t[a]);if(ue)for(var a of ue(t))pe.call(t,a)&&ve(e,a,t[a]);return e};function ge(e){var t;const{content:a}=e,{metadata:r,frontMatter:o,assets:i}=a,{keywords:s,hide_title:c,hide_table_of_contents:d,toc_min_heading_level:m,toc_max_heading_level:u}=o,{description:b,title:p}=r,v=null!=(t=i.image)?t:o.image,g=!c&&void 0===a.contentTitle,h=(0,y.iP)(),E=!d&&a.toc&&a.toc.length>0,O=E&&("desktop"===h||"ssr"===h);return n.createElement(n.Fragment,null,n.createElement(P.Z,fe({},{title:p,description:b,keywords:s,image:v})),n.createElement("div",{className:"row"},n.createElement("div",{className:(0,l.Z)("col",{[ae]:!d})},n.createElement(C,null),n.createElement("div",{className:te},n.createElement("article",null,n.createElement(de,null),n.createElement(T,null),E&&n.createElement(Y,{toc:a.toc,minHeadingLevel:m,maxHeadingLevel:u,className:(0,l.Z)(y.kM.docs.docTocMobile,ne)}),n.createElement("div",{className:(0,l.Z)(y.kM.docs.docMarkdown,"markdown")},g&&n.createElement("header",null,n.createElement(ee.Z,{as:"h1"},p)),n.createElement(a,null)),n.createElement(J,fe({},e))),n.createElement(f,{previous:r.previous,next:r.next}))),O&&n.createElement("div",{className:"col col--3"},n.createElement(Q.Z,{toc:a.toc,minHeadingLevel:m,maxHeadingLevel:u,className:y.kM.docs.docTocDesktop}))))}},1662:function(e,t,a){a.d(t,{Z:function(){return p}});var n=a(7294),l=a(3084),r=a(6010),o="iconEdit_dcUD",i=Object.defineProperty,s=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,m=(e,t,a)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;function u(e){var t=e,{className:a}=t,l=((e,t)=>{var a={};for(var n in e)c.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&s)for(var n of s(e))t.indexOf(n)<0&&d.call(e,n)&&(a[n]=e[n]);return a})(t,["className"]);return n.createElement("svg",((e,t)=>{for(var a in t||(t={}))c.call(t,a)&&m(e,a,t[a]);if(s)for(var a of s(t))d.call(t,a)&&m(e,a,t[a]);return e})({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,r.Z)(o,a),"aria-hidden":"true"},l),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}var b=a(5882);function p({editUrl:e}){return n.createElement("a",{href:e,target:"_blank",rel:"noreferrer noopener",className:b.kM.common.editThisPage},n.createElement(u,null),n.createElement(l.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},4845:function(e,t,a){a.d(t,{Z:function(){return y}});var n=a(7294),l=a(6010),r=a(3084),o=a(5882),i="anchorWithStickyNavbar_mojV",s="anchorWithHideOnScrollNavbar_R0VQ",c=Object.defineProperty,d=Object.defineProperties,m=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,v=(e,t,a)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,f=(e,t)=>{for(var a in t||(t={}))b.call(t,a)&&v(e,a,t[a]);if(u)for(var a of u(t))p.call(t,a)&&v(e,a,t[a]);return e},g=(e,t)=>d(e,m(t)),h=(e,t)=>{var a={};for(var n in e)b.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&u)for(var n of u(e))t.indexOf(n)<0&&p.call(e,n)&&(a[n]=e[n]);return a};function E(e){var t=e,{as:a,id:c}=t,d=h(t,["as","id"]);const{navbar:{hideOnScroll:m}}=(0,o.LU)();return c?n.createElement(a,g(f({},d),{className:(0,l.Z)("anchor",{[s]:m,[i]:!m}),id:c}),d.children,n.createElement("a",{className:"hash-link",href:`#${c}`,title:(0,r.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):n.createElement(a,f({},d))}function y(e){var t=e,{as:a}=t,l=h(t,["as"]);return"h1"===a?n.createElement("h1",g(f({},l),{id:void 0}),l.children):n.createElement(E,f({as:a},l))}},2750:function(e,t,a){a.d(t,{Z:function(){return r}});var n=a(7294),l=a(9130);function r(e){const{permalink:t,title:a,subLabel:r}=e;return n.createElement(l.Z,{className:"pagination-nav__link",to:t},r&&n.createElement("div",{className:"pagination-nav__sublabel"},r),n.createElement("div",{className:"pagination-nav__label"},a))}},9285:function(e,t,a){a.d(t,{Z:function(){return p}});var n=a(7294),l=a(6010),r=a(6211),o="tableOfContents_cNA8",i=Object.defineProperty,s=Object.defineProperties,c=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,b=(e,t,a)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;function p(e){var t,a=e,{className:i}=a,p=((e,t)=>{var a={};for(var n in e)m.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&d)for(var n of d(e))t.indexOf(n)<0&&u.call(e,n)&&(a[n]=e[n]);return a})(a,["className"]);return n.createElement("div",{className:(0,l.Z)(o,"thin-scrollbar",i)},n.createElement(r.Z,(t=((e,t)=>{for(var a in t||(t={}))m.call(t,a)&&b(e,a,t[a]);if(d)for(var a of d(t))u.call(t,a)&&b(e,a,t[a]);return e})({},p),s(t,c({linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))))}},6211:function(e,t,a){a.d(t,{Z:function(){return m}});var n=a(7294),l=a(5882),r=Object.defineProperty,o=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,t,a)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;function d({toc:e,className:t,linkClassName:a,isChild:l}){return e.length?n.createElement("ul",{className:l?void 0:t},e.map((e=>n.createElement("li",{key:e.id},n.createElement("a",{href:`#${e.id}`,className:null!=a?a:void 0,dangerouslySetInnerHTML:{__html:e.value}}),n.createElement(d,{isChild:!0,toc:e.children,className:t,linkClassName:a}))))):null}function m(e){var t=e,{toc:a,className:r="table-of-contents table-of-contents__left-border",linkClassName:m="table-of-contents__link",linkActiveClassName:u,minHeadingLevel:b,maxHeadingLevel:p}=t,v=((e,t)=>{var a={};for(var n in e)i.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&o)for(var n of o(e))t.indexOf(n)<0&&s.call(e,n)&&(a[n]=e[n]);return a})(t,["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"]);const f=(0,l.LU)(),g=null!=b?b:f.tableOfContents.minHeadingLevel,h=null!=p?p:f.tableOfContents.maxHeadingLevel,E=(0,l.b9)({toc:a,minHeadingLevel:g,maxHeadingLevel:h}),y=(0,n.useMemo)((()=>{if(m&&u)return{linkClassName:m,linkActiveClassName:u,minHeadingLevel:g,maxHeadingLevel:h}}),[m,u,g,h]);return(0,l.Si)(y),n.createElement(d,((e,t)=>{for(var a in t||(t={}))i.call(t,a)&&c(e,a,t[a]);if(o)for(var a of o(t))s.call(t,a)&&c(e,a,t[a]);return e})({toc:E,className:r,linkClassName:m},v))}},5818:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(7294),l=a(6010),r=a(9130),o="tag_hD8n",i="tagRegular_D6E_",s="tagWithCount_i0QQ";function c(e){const{permalink:t,name:a,count:c}=e;return n.createElement(r.Z,{href:t,className:(0,l.Z)(o,{[i]:!c,[s]:c})},a,c&&n.createElement("span",null,c))}},8901:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(7294),l=a(6010),r=a(3084),o=a(5818),i="tags_XVD_",s="tag_JSN8";function c({tags:e}){return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(r.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,l.Z)(i,"padding--none","margin-left--sm")},e.map((({label:e,permalink:t})=>n.createElement("li",{key:t,className:s},n.createElement(o.Z,{name:e,permalink:t}))))))}}}]);