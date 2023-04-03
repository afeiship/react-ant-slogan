"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[337],{876:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(2784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,f=u["".concat(l,".").concat(m)]||u[m]||s[m]||o;return n?r.createElement(f,c(c({ref:t},d),{},{components:n})):r.createElement(f,c({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var p=2;p<o;p++)c[p]=n[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2167:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>s,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=n(7896),a=(n(2784),n(876));const o={id:"date-picker",title:"date-picker",sidebar_label:"date-picker",slug:"date-picker"},c=void 0,i={unversionedId:"antd-components/date-picker",id:"antd-components/date-picker",title:"date-picker",description:"\u7b80\u4ecb",source:"@site/docs/antd-components/date-picker.mdx",sourceDirName:"antd-components",slug:"/antd-components/date-picker",permalink:"/antd-react-packages/docs/antd-components/date-picker",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/antd-components/date-picker.mdx",tags:[],version:"current",frontMatter:{id:"date-picker",title:"date-picker",sidebar_label:"date-picker",slug:"date-picker"},sidebar:"tutorialSidebar",previous:{title:"checkbox",permalink:"/antd-react-packages/docs/antd-components/checkbox"},next:{title:"editable-tag-group",permalink:"/antd-react-packages/docs/antd-components/editable-tag-group"}},l={},p=[{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",level:3},{value:"\u9884\u89c8",id:"\u9884\u89c8",level:3}],d={toc:p};function s(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"\u7b80\u4ecb"},"\u7b80\u4ecb"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4e00\u4e2a\u5e38\u89c1\u7684 filter \u591a\u9009\u903b\u8f91\uff0c\u672c\u8d28\u4e0a\u662f\u53e6\u4e00\u4e2a checkbox-group"),(0,a.kt)("li",{parentName:"ul"},"\u6dfb\u52a0 ",(0,a.kt)("inlineCode",{parentName:"li"},"items/template")," \u63a5\u53e3"),(0,a.kt)("li",{parentName:"ul"},"\u7edf\u4e00\u6240\u6709\u7684 ",(0,a.kt)("inlineCode",{parentName:"li"},"onChagne")," \u4e8b\u4ef6")),(0,a.kt)("h3",{id:"\u9884\u89c8"},"\u9884\u89c8"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<Space>\n    <AcDatePicker\n      style={{ width: '100%' }}\n      showTime\n      defaultValue=\"2022-11-14 18:00:25\"\n      onChange={(e) => {\n        console.log('e: ', e.target.value);\n      }}\n    />\n    <AcDatePicker\n      style={{ width: '100%' }}\n      defaultValue=\"2022-12-15\"\n      format=\"YYYY-MM-DD\"\n      onChange={(e) => {\n        console.log('e: ', e.target.value);\n      }}\n    />\n</Space>\n")))}s.isMDXComponent=!0}}]);