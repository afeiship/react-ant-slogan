"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[930],{30876:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(2784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=s(n),m=a,d=f["".concat(c,".").concat(m)]||f[m]||u[m]||o;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},10023:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(7896),a=(n(2784),n(30876));const o={id:"transfer",title:"transfer",sidebar_label:"transfer",slug:"transfer"},i=void 0,l={unversionedId:"antd-components/transfer",id:"antd-components/transfer",title:"transfer",description:"\u7b80\u4ecb",source:"@site/docs/antd-components/transfer.mdx",sourceDirName:"antd-components",slug:"/antd-components/transfer",permalink:"/docs/antd-components/transfer",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/antd-components/transfer.mdx",tags:[],version:"current",frontMatter:{id:"transfer",title:"transfer",sidebar_label:"transfer",slug:"transfer"},sidebar:"mainSidebar",previous:{title:"time-picker",permalink:"/docs/antd-components/time-picker"},next:{title:"tree-select",permalink:"/docs/antd-components/tree-select"}},c={},s=[{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",level:3},{value:"\u9884\u89c8",id:"\u9884\u89c8",level:3}],p={toc:s};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"\u7b80\u4ecb"},"\u7b80\u4ecb"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4e00\u4e2a\u5e38\u89c1\u7684 filter \u591a\u9009\u903b\u8f91\uff0c\u672c\u8d28\u4e0a\u662f\u53e6\u4e00\u4e2a checkbox-group"),(0,a.kt)("li",{parentName:"ul"},"\u6dfb\u52a0 ",(0,a.kt)("inlineCode",{parentName:"li"},"items/template")," \u63a5\u53e3"),(0,a.kt)("li",{parentName:"ul"},"\u7edf\u4e00\u6240\u6709\u7684 ",(0,a.kt)("inlineCode",{parentName:"li"},"onChagne")," \u4e8b\u4ef6")),(0,a.kt)("h3",{id:"\u9884\u89c8"},"\u9884\u89c8"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<AcTransfer\n  items={data.items2}\n  oneWay={false}\n  titles={['Left', 'Right']}\n  onChange={(e) => {\n    console.log('transfer evt: ', e.target.value);\n  }}\n/>\n")))}u.isMDXComponent=!0}}]);