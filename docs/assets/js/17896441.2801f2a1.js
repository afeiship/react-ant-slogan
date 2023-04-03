"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[918],{34427:(e,t,n)=>{n.d(t,{Z:()=>g});var a=n(7896),l=n(67294),r=n(6277),o=n(90737),s=n(26559),i=n(25775),c=n(63095),u=n(9489),d=n(30756);function m(e){return l.createElement("svg",(0,a.Z)({viewBox:"0 0 24 24"},e),l.createElement("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"}))}const p="breadcrumbHomeIcon_YNFT";function b(){const e=(0,d.Z)("/");return l.createElement("li",{className:"breadcrumbs__item"},l.createElement(c.Z,{"aria-label":(0,u.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e},l.createElement(m,{className:p})))}const v="breadcrumbsContainer_Z_bl";function f(e){let{children:t,href:n,isLast:a}=e;const r="breadcrumbs__link";return a?l.createElement("span",{className:r,itemProp:"name"},t):n?l.createElement(c.Z,{className:r,href:n,itemProp:"item"},l.createElement("span",{itemProp:"name"},t)):l.createElement("span",{className:r},t)}function h(e){let{children:t,active:n,index:o,addMicrodata:s}=e;return l.createElement("li",(0,a.Z)({},s&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,r.Z)("breadcrumbs__item",{"breadcrumbs__item--active":n})}),t,l.createElement("meta",{itemProp:"position",content:String(o+1)}))}function g(){const e=(0,s.s1)(),t=(0,i.Ns)();return e?l.createElement("nav",{className:(0,r.Z)(o.k.docs.docBreadcrumbs,v),"aria-label":(0,u.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"})},l.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&l.createElement(b,null),e.map(((t,n)=>{const a=n===e.length-1;return l.createElement(h,{key:n,active:a,index:n,addMicrodata:!!t.href},l.createElement(f,{href:t.href,isLast:a},t.label))})))):null}},44226:(e,t,n)=>{n.r(t),n.d(t,{default:()=>ae});var a=n(67294),l=n(97967),r=n(75321);const o=a.createContext(null);function s(e){let{children:t,content:n}=e;const l=function(e){return(0,a.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(n);return a.createElement(o.Provider,{value:l},t)}function i(){const e=(0,a.useContext)(o);if(null===e)throw new r.i6("DocProvider");return e}function c(){const{metadata:e,frontMatter:t,assets:n}=i();return a.createElement(l.d,{title:e.title,description:e.description,keywords:t.keywords,image:n.image??t.image})}var u=n(6277),d=n(23293),m=n(40143);function p(){const{metadata:e}=i();return a.createElement(m.Z,{previous:e.previous,next:e.next})}var b=n(44610),v=n(27890),f=n(90737),h=n(9489);function g(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:n}=e;return a.createElement(h.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:a.createElement("b",null,a.createElement("time",{dateTime:new Date(1e3*t).toISOString()},n))}}," on {date}")}function E(e){let{lastUpdatedBy:t}=e;return a.createElement(h.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:a.createElement("b",null,t)}}," by {user}")}function y(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:n,lastUpdatedBy:l}=e;return a.createElement("span",{className:f.k.common.lastUpdated},a.createElement(h.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&n?a.createElement(g,{lastUpdatedAt:t,formattedLastUpdatedAt:n}):"",byUser:l?a.createElement(E,{lastUpdatedBy:l}):""}},"Last updated{atDate}{byUser}"),!1)}var Z=n(7896);const k="iconEdit_Z9Sw";function O(e){let{className:t,...n}=e;return a.createElement("svg",(0,Z.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,u.Z)(k,t),"aria-hidden":"true"},n),a.createElement("g",null,a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function _(e){let{editUrl:t}=e;return a.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:f.k.common.editThisPage},a.createElement(O,null),a.createElement(h.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}var w=n(63095);const N="tag_zVej",L="tagRegular_sFm0",T="tagWithCount_h2kH";function x(e){let{permalink:t,label:n,count:l}=e;return a.createElement(w.Z,{href:t,className:(0,u.Z)(N,l?T:L)},n,l&&a.createElement("span",null,l))}const C="tags_jXut",P="tag_QGVx";function j(e){let{tags:t}=e;return a.createElement(a.Fragment,null,a.createElement("b",null,a.createElement(h.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),a.createElement("ul",{className:(0,u.Z)(C,"padding--none","margin-left--sm")},t.map((e=>{let{label:t,permalink:n}=e;return a.createElement("li",{key:n,className:P},a.createElement(x,{label:t,permalink:n}))}))))}const U="lastUpdated_vwxv";function A(e){return a.createElement("div",{className:(0,u.Z)(f.k.docs.docFooterTagsRow,"row margin-bottom--sm")},a.createElement("div",{className:"col"},a.createElement(j,e)))}function S(e){let{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:l,formattedLastUpdatedAt:r}=e;return a.createElement("div",{className:(0,u.Z)(f.k.docs.docFooterEditMetaRow,"row")},a.createElement("div",{className:"col"},t&&a.createElement(_,{editUrl:t})),a.createElement("div",{className:(0,u.Z)("col",U)},(n||l)&&a.createElement(y,{lastUpdatedAt:n,formattedLastUpdatedAt:r,lastUpdatedBy:l})))}function B(){const{metadata:e}=i(),{editUrl:t,lastUpdatedAt:n,formattedLastUpdatedAt:l,lastUpdatedBy:r,tags:o}=e,s=o.length>0,c=!!(t||n||r);return s||c?a.createElement("footer",{className:(0,u.Z)(f.k.docs.docFooter,"docusaurus-mt-lg")},s&&a.createElement(A,{tags:o}),c&&a.createElement(S,{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:r,formattedLastUpdatedAt:l})):null}var V=n(63151),I=n(77633);const M="tocCollapsibleButton_TO0P",F="tocCollapsibleButtonExpanded_MG3E";function R(e){let{collapsed:t,...n}=e;return a.createElement("button",(0,Z.Z)({type:"button"},n,{className:(0,u.Z)("clean-btn",M,!t&&F,n.className)}),a.createElement(h.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page"))}const H="tocCollapsible_ETCw",D="tocCollapsibleContent_vkbj",z="tocCollapsibleExpanded_sAul";function q(e){let{toc:t,className:n,minHeadingLevel:l,maxHeadingLevel:r}=e;const{collapsed:o,toggleCollapsed:s}=(0,V.u)({initialState:!0});return a.createElement("div",{className:(0,u.Z)(H,!o&&z,n)},a.createElement(R,{collapsed:o,onClick:s}),a.createElement(V.z,{lazy:!0,className:D,collapsed:o},a.createElement(I.Z,{toc:t,minHeadingLevel:l,maxHeadingLevel:r})))}const G="tocMobile_ITEo";function K(){const{toc:e,frontMatter:t}=i();return a.createElement(q,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,u.Z)(f.k.docs.docTocMobile,G)})}var W=n(11471);function J(){const{toc:e,frontMatter:t}=i();return a.createElement(W.Z,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:f.k.docs.docTocDesktop})}var Q=n(76799),X=n(65044);function Y(e){let{children:t}=e;const n=function(){const{metadata:e,frontMatter:t,contentTitle:n}=i();return t.hide_title||void 0!==n?null:e.title}();return a.createElement("div",{className:(0,u.Z)(f.k.docs.docMarkdown,"markdown")},n&&a.createElement("header",null,a.createElement(Q.Z,{as:"h1"},n)),a.createElement(X.Z,null,t))}var $=n(34427);const ee="docItemContainer_Djhp",te="docItemCol_VOVn";function ne(e){let{children:t}=e;const n=function(){const{frontMatter:e,toc:t}=i(),n=(0,d.i)(),l=e.hide_table_of_contents,r=!l&&t.length>0;return{hidden:l,mobile:r?a.createElement(K,null):void 0,desktop:!r||"desktop"!==n&&"ssr"!==n?void 0:a.createElement(J,null)}}();return a.createElement("div",{className:"row"},a.createElement("div",{className:(0,u.Z)("col",!n.hidden&&te)},a.createElement(b.Z,null),a.createElement("div",{className:ee},a.createElement("article",null,a.createElement($.Z,null),a.createElement(v.Z,null),n.mobile,a.createElement(Y,null,t),a.createElement(B,null)),a.createElement(p,null))),n.desktop&&a.createElement("div",{className:"col col--3"},n.desktop))}function ae(e){const t=`docs-doc-id-${e.content.metadata.unversionedId}`,n=e.content;return a.createElement(s,{content:e.content},a.createElement(l.FG,{className:t},a.createElement(c,null),a.createElement(ne,null,a.createElement(n,null))))}},40143:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(7896),l=n(67294),r=n(9489),o=n(6277),s=n(63095);function i(e){const{permalink:t,title:n,subLabel:a,isNext:r}=e;return l.createElement(s.Z,{className:(0,o.Z)("pagination-nav__link",r?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},a&&l.createElement("div",{className:"pagination-nav__sublabel"},a),l.createElement("div",{className:"pagination-nav__label"},n))}function c(e){const{previous:t,next:n}=e;return l.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,r.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},t&&l.createElement(i,(0,a.Z)({},t,{subLabel:l.createElement(r.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")})),n&&l.createElement(i,(0,a.Z)({},n,{subLabel:l.createElement(r.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"),isNext:!0})))}},27890:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),l=n(6277),r=n(9489),o=n(90737),s=n(68173);function i(e){let{className:t}=e;const n=(0,s.E)();return n.badge?a.createElement("span",{className:(0,l.Z)(t,o.k.docs.docVersionBadge,"badge badge--secondary")},a.createElement(r.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label}},"Version: {versionLabel}")):null}},44610:(e,t,n)=>{n.d(t,{Z:()=>f});var a=n(67294),l=n(6277),r=n(41106),o=n(63095),s=n(9489),i=n(49551),c=n(90737),u=n(66109),d=n(68173);const m={unreleased:function(e){let{siteTitle:t,versionMetadata:n}=e;return a.createElement(s.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){let{siteTitle:t,versionMetadata:n}=e;return a.createElement(s.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function p(e){const t=m[e.versionMetadata.banner];return a.createElement(t,e)}function b(e){let{versionLabel:t,to:n,onClick:l}=e;return a.createElement(s.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:a.createElement("b",null,a.createElement(o.Z,{to:n,onClick:l},a.createElement(s.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function v(e){let{className:t,versionMetadata:n}=e;const{siteConfig:{title:o}}=(0,r.Z)(),{pluginId:s}=(0,i.gA)({failfast:!0}),{savePreferredVersionName:d}=(0,u.J)(s),{latestDocSuggestion:m,latestVersionSuggestion:v}=(0,i.Jo)(s),f=m??(h=v).docs.find((e=>e.id===h.mainDocId));var h;return a.createElement("div",{className:(0,l.Z)(t,c.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},a.createElement("div",null,a.createElement(p,{siteTitle:o,versionMetadata:n})),a.createElement("div",{className:"margin-top--md"},a.createElement(b,{versionLabel:v.label,to:f.path,onClick:()=>d(v.name)})))}function f(e){let{className:t}=e;const n=(0,d.E)();return n.banner?a.createElement(v,{className:t,versionMetadata:n}):null}},48313:(e,t,n)=>{n.d(t,{Z:()=>ve});var a={};n.r(a),n.d(a,{breadcrumbDefault:()=>c,checkboxKv:()=>E,checkboxRaw:()=>L,kv:()=>g,radioKv:()=>Z,radioRaw:()=>x,raw:()=>N,selectKv:()=>y,selectRaw:()=>T,transferLabel:()=>j,treeKv:()=>k,treeSelectKv:()=>O});var l={};n.r(l),n.d(l,{items1:()=>M,items2:()=>F,items3:()=>R,items4:()=>H,items_pics:()=>D,pipes1:()=>z});var r={};n.r(r),n.d(r,{AcBreadcrumb:()=>pe});var o=n(67294),s=n(92713),i=n(2784),c=function(e){var t=e.item,n=e.index,a=e.items,l=(null==a?void 0:a.length)-1===n?i.createElement("span",null,t.label):i.createElement("a",{href:t.value},t.label);return i.createElement(s.Z.Item,{key:n},l)},u=n(94912),d=n(72407),m=n(75113),p=n(71533),b=n(9975),v=function(){return v=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var l in t=arguments[n])Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l]);return e},v.apply(this,arguments)},f=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(a=Object.getOwnPropertySymbols(e);l<a.length;l++)t.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(n[a[l]]=e[a[l]])}return n},h={value:"value",label:"label"},g=function(e,t){var n=e.item,a=e.index,l=v(v({},h),t),r=l.component,o=l.value,s=l.label,c=f(l,["component","value","label"]),u=n[o],d=n[s];return i.createElement(r,v({key:a,value:u},c),d)},E=function(e){return g(e,{component:u.Z})},y=function(e){return g(e,{component:d.Z.Option})},Z=function(e,t){var n=t||{},a=n.isButton,l=f(n,["isButton"]),r=a?m.ZP.Button:m.ZP;return g(e,v({component:r},a?l:{}))},k=function(e,t){var n=e.item,a=n.value,l=n.label,r=f(n,["value","label"]);return i.createElement(p.Z.TreeNode,v({key:a,title:l},r),t())},O=function(e,t){var n=e.item,a=n.value,l=n.label;return i.createElement(b.Z.TreeNode,{key:a,value:a,title:l,children:t()})},_=function(){return _=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var l in t=arguments[n])Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l]);return e},_.apply(this,arguments)},w=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(a=Object.getOwnPropertySymbols(e);l<a.length;l++)t.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(n[a[l]]=e[a[l]])}return n},N=function(e,t){var n=e.item,a=e.index,l=t.component,r=w(t,["component"]);return i.createElement(l,_({key:a,value:n},r),n)},L=function(e){return N(e,{component:u.Z})},T=function(e){return N(e,{component:d.Z.Option})},x=function(e,t){var n=t||{},a=n.isButton,l=w(n,["isButton"]),r=a?m.ZP.Button:m.ZP;return N(e,_({component:r},a?l:{}))},C=function(){return C=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var l in t=arguments[n])Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l]);return e},C.apply(this,arguments)},P={label:"label"},j=function(e,t){var n=e.item,a=C(C({},P),t);return n[null==a?void 0:a.label]},U=n(96137),A=n(82098),S=n(3306),B=n(3086),V=n(54692),I=n(94187);const M=[{value:"v1",label:"l1"},{value:"v2",label:"l2"},{value:"v3",label:"l3"}],F=[{value:"v1",label:"content1",key:"k1",chosen:!1},{value:"v2",label:"content2",key:"k2",chosen:!0},{value:"v3",label:"content3",key:"k3",chosen:!1},{value:"v4",label:"content4",key:"k4",chosen:!1},{value:"v5",label:"content5",key:"k5",chosen:!1},{value:"v6",label:"content6",key:"k6",chosen:!1},{value:"v7",label:"content7",key:"k7",chosen:!1}],R=[{value:"s1",label:"Status1"},{value:"s2",label:"Status2"},{value:"s3",label:"Status3"}],H=[{label:"0-0",value:"0-0",children:[{label:"0-0-0",value:"0-0-0",children:[{label:"0-0-0-0",value:"0-0-0-0"},{label:"0-0-0-1",value:"0-0-0-1"},{label:"0-0-0-2",value:"0-0-0-2"}]},{label:"0-0-1",value:"0-0-1",children:[{label:"0-0-1-0",value:"0-0-1-0"},{label:"0-0-1-1",value:"0-0-1-1"},{label:"0-0-1-2",value:"0-0-1-2"}]},{label:"0-0-2",value:"0-0-2"}]},{label:"0-1",value:"0-1",children:[{label:"0-1-0-0",value:"0-1-0-0"},{label:"0-1-0-1",value:"0-1-0-1"},{label:"0-1-0-2",value:"0-1-0-2"}]},{label:"0-2",value:"0-2"}],D=[{uid:1,url:"https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",status:"done"},{uid:2,url:"https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",status:"done"}],z=[e=>{const{form:t,meta:n}=e,a=t.getFieldValue("show-hobby"),l=e.find("hobbies");return a?l||n.fields.push({key:"hobbies",widget:"checkbox-group",label:"Hobbies",options:["football","basketball","swimming"]}):n.fields=e.where((e=>"hobbies"!==e.key)),e}];var q=n(74641),G=n(62220),K=n(72779),W=n.n(K),J=n(87627),Q=n.n(J),X=n(26074),Y=n.n(X),$=n(85410),ee=n(62285),te=n.n(ee),ne=function(e,t){return ne=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},ne(e,t)},ae=function(){return ae=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var l in t=arguments[n])Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l]);return e},ae.apply(this,arguments)},le=function(e,t){var n=t.fields;return e?(t.fields=n.map((function(t){var n=te().get(e,"fields.".concat(t.key));n&&(t=te().mix(null,n,t));var a=te().get(e,"widgets.".concat(t.widget));return a&&(t=te().mix(null,a,t)),t})),t):t},re=function(e){return{find:function(t){return"string"==typeof t?(n=t,e.fields.find((function(e){return e.key===n}))):(a=t,e.fields.find(a));var n,a},where:function(t){return"string"==typeof t?(n=t,e.fields.filter((function(e){return e.key===n}))):(a=t,e.fields.filter(a));var n,a}}},oe=function(e){Object.keys(e).forEach((function(t){var n=e[t],a=n.formSchema;if(a){var l=a.split("-")[0],r=a.replace(l+"-",l+":");$.Z.defineWidget(r,n)}}))},se=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.formRef=i.createRef(),t.state={loading:!1,meta:le(t.props.presets,t.props.meta)},t.handleValuesChange=function(e,n){var a=t.props,l=a.pipes;if((0,a.onChange)({target:{value:[e,n]}}),null==l?void 0:l.length){var r=t.formRef.current,o=t.state.meta,s=re(o),i=ae(ae({},s),{meta:o,form:r});Y().apply(void 0,l)(i).then((function(e){t.setState({meta:e.meta})}))}},t.handleFinish=function(e){(0,t.props.onFinish)({target:{value:e}})},t}return function(e,t){function n(){this.constructor=e}ne(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}(t,e),t.prototype.componentDidMount=function(){var e=this,t=this.props.onInit,n=this.state.meta,a=this.formRef.current;t({target:{value:a}}),this.setState({loading:!0}),function(e,t){var n=e.initialValues,a=Array.isArray(n);return new Promise((function(e){if(a){var l=n[0],r=n[1]||te().stubValue;l.then((function(n){t.setFieldsValue(r(n)),e()}))}else t.setFieldsValue(n),e()}))}(n,a).then((function(){e.setState({loading:!1})}))},t.prototype.render=function(){var e=this.props,t=e.className;e.presets,e.meta,e.pipes;var n=e.caption,a=e.children;e.onInit,e.onValuesChange,e.onChange,e.onFinish;var l=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(a=Object.getOwnPropertySymbols(e);l<a.length;l++)t.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(n[a[l]]=e[a[l]])}return n}(e,["className","presets","meta","pipes","caption","children","onInit","onValuesChange","onChange","onFinish"]),r=this.state,o=r.loading,s=r.meta;return i.createElement(q.Z,ae({ref:this.formRef,className:W()(t,"antd-form-builder"),onValuesChange:this.handleValuesChange,onFinish:this.handleFinish},l),i.createElement(G.Z,{spinning:o},n,i.createElement($.Z,{meta:s,form:this.formRef.current}),a))},t.displayName="antd-form-builder",t.defaultProps={onInit:Q(),onChange:Q(),onFinish:Q(),pipes:[]},t}(i.Component),ie=n(74290),ce=n(85416),ue=n.n(ce),de=function(e,t){return de=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},de(e,t)},me=function(){return me=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var l in t=arguments[n])Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l]);return e},me.apply(this,arguments)},pe=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}de(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}(t,e),t.prototype.render=function(){var e=this.props,t=e.className;e.value;var n=e.items,a=e.template;e.onChange;var l=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(a=Object.getOwnPropertySymbols(e);l<a.length;l++)t.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(n[a[l]]=e[a[l]])}return n}(e,["className","value","items","template","onChange"]);return i.createElement(ie.Z,me({className:W()(t,"ac-breadcrumb")},l),i.createElement(ue(),{items:n,template:a}))},t.displayName="ac-breadcrumb",t.defaultProps={onChange:Q(),template:c},t}(i.Component);const be={React:o,...o,...r,tpls:a,data:l,FormBuilder:se,installWidgets:oe,Select:U.Z,Checkbox:A.Z,Row:S.Z,Col:B.Z,Button:V.ZP,Space:I.Z};oe(r);const ve=be}}]);