"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[898],{30876:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(2784);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,g=d["".concat(l,".").concat(m)]||d[m]||s[m]||o;return r?n.createElement(g,i(i({ref:t},u),{},{components:r})):n.createElement(g,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},79986:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var n=r(7896),a=(r(2784),r(30876));const o={id:"range-picker",title:"range-picker",sidebar_label:"range-picker",slug:"range-picker"},i=void 0,c={unversionedId:"antd-components/range-picker",id:"antd-components/range-picker",title:"range-picker",description:"\u7b80\u4ecb",source:"@site/docs/antd-components/range-picker.mdx",sourceDirName:"antd-components",slug:"/antd-components/range-picker",permalink:"/docs/antd-components/range-picker",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/antd-components/range-picker.mdx",tags:[],version:"current",frontMatter:{id:"range-picker",title:"range-picker",sidebar_label:"range-picker",slug:"range-picker"},sidebar:"mainSidebar",previous:{title:"radio-group",permalink:"/docs/antd-components/radio-group"},next:{title:"rate",permalink:"/docs/antd-components/rate"}},l={},p=[{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",level:3},{value:"\u9884\u89c8",id:"\u9884\u89c8",level:3}],u={toc:p};function s(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"\u7b80\u4ecb"},"\u7b80\u4ecb"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4e00\u4e2a\u5e38\u89c1\u7684 filter \u591a\u9009\u903b\u8f91\uff0c\u672c\u8d28\u4e0a\u662f\u53e6\u4e00\u4e2a checkbox-group"),(0,a.kt)("li",{parentName:"ul"},"\u6dfb\u52a0 ",(0,a.kt)("inlineCode",{parentName:"li"},"items/template")," \u63a5\u53e3"),(0,a.kt)("li",{parentName:"ul"},"\u7edf\u4e00\u6240\u6709\u7684 ",(0,a.kt)("inlineCode",{parentName:"li"},"onChagne")," \u4e8b\u4ef6")),(0,a.kt)("h3",{id:"\u9884\u89c8"},"\u9884\u89c8"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<AcRangePicker\n  onChange={(e) => {\n    console.log('range evt: ', e.target.value);\n  }}\n/>\n")))}s.isMDXComponent=!0}}]);