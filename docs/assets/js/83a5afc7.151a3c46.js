"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[480],{30876:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(2784);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,f=d["".concat(i,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,l[1]=c;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},25609:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var r=n(7896),o=(n(2784),n(30876));const a={id:"tree-select",title:"tree-select",sidebar_label:"tree-select",slug:"tree-select"},l=void 0,c={unversionedId:"antd-components/tree-select",id:"antd-components/tree-select",title:"tree-select",description:"\u7b80\u4ecb",source:"@site/docs/antd-components/tree-select.mdx",sourceDirName:"antd-components",slug:"/antd-components/tree-select",permalink:"/docs/antd-components/tree-select",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/antd-components/tree-select.mdx",tags:[],version:"current",frontMatter:{id:"tree-select",title:"tree-select",sidebar_label:"tree-select",slug:"tree-select"},sidebar:"mainSidebar",previous:{title:"transfer",permalink:"/docs/antd-components/transfer"},next:{title:"tree",permalink:"/docs/antd-components/tree"}},i={},s=[{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",level:3},{value:"\u9884\u89c8",id:"\u9884\u89c8",level:3}],p={toc:s};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"\u7b80\u4ecb"},"\u7b80\u4ecb"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u4e00\u4e2a\u5e38\u89c1\u7684 filter \u591a\u9009\u903b\u8f91\uff0c\u672c\u8d28\u4e0a\u662f\u53e6\u4e00\u4e2a checkbox-group"),(0,o.kt)("li",{parentName:"ul"},"\u6dfb\u52a0 ",(0,o.kt)("inlineCode",{parentName:"li"},"items/template")," \u63a5\u53e3"),(0,o.kt)("li",{parentName:"ul"},"\u7edf\u4e00\u6240\u6709\u7684 ",(0,o.kt)("inlineCode",{parentName:"li"},"onChagne")," \u4e8b\u4ef6")),(0,o.kt)("h3",{id:"\u9884\u89c8"},"\u9884\u89c8"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<AcTreeSelect\n  style={{ width: '100%' }}\n  defaultValue={['0-0-1-0']}\n  items={data.items4}\n  onChange={(e) => {\n    console.log('e: ', e.target.value);\n  }}\n/>\n")))}u.isMDXComponent=!0}}]);