"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[131],{29059:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=r(7896),a=(r(67294),r(3905));const o={id:"upload-picture-card",title:"upload-picture-card",sidebar_label:"upload-picture-card",slug:"upload-picture-card"},c=void 0,i={unversionedId:"antd-components/upload-picture-card",id:"antd-components/upload-picture-card",title:"upload-picture-card",description:"\u7b80\u4ecb",source:"@site/docs/antd-components/upload-picture-card.mdx",sourceDirName:"antd-components",slug:"/antd-components/upload-picture-card",permalink:"/antd-react-packages/docs/antd-components/upload-picture-card",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/antd-components/upload-picture-card.mdx",tags:[],version:"current",frontMatter:{id:"upload-picture-card",title:"upload-picture-card",sidebar_label:"upload-picture-card",slug:"upload-picture-card"},sidebar:"tutorialSidebar",previous:{title:"upload-dragger",permalink:"/antd-react-packages/docs/antd-components/upload-dragger"},next:{title:"upload-picture",permalink:"/antd-react-packages/docs/antd-components/upload-picture"}},l={},p=[{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",level:3},{value:"\u9884\u89c8",id:"\u9884\u89c8",level:3}],u={toc:p};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"\u7b80\u4ecb"},"\u7b80\u4ecb"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4e00\u4e2a\u5e38\u89c1\u7684 filter \u591a\u9009\u903b\u8f91\uff0c\u672c\u8d28\u4e0a\u662f\u53e6\u4e00\u4e2a checkbox-group"),(0,a.kt)("li",{parentName:"ul"},"\u6dfb\u52a0 ",(0,a.kt)("inlineCode",{parentName:"li"},"items/template")," \u63a5\u53e3"),(0,a.kt)("li",{parentName:"ul"},"\u7edf\u4e00\u6240\u6709\u7684 ",(0,a.kt)("inlineCode",{parentName:"li"},"onChagne")," \u4e8b\u4ef6"),(0,a.kt)("li",{parentName:"ul"},"\u6dfb\u52a0\u4e86 ",(0,a.kt)("inlineCode",{parentName:"li"},"viewerjs")," \u7684\u9884\u89c8\u884c\u4e3a"),(0,a.kt)("li",{parentName:"ul"},"\u6dfb\u52a0\u4e86 ",(0,a.kt)("inlineCode",{parentName:"li"},"sortablejs")," \u7684\u62d6\u62fd\u6392\u5e8f\u529f\u80fd")),(0,a.kt)("h3",{id:"\u9884\u89c8"},"\u9884\u89c8"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<AcUploadPictureCard\n  value={data.items_pics}\n  action="http://localhost:3200/weibo_api/interface/pic_upload.php"\n  name="pic1"\n  onChange={(e) => {\n    console.log(\'ac upload:\', e.target.value);\n  }}\n/>\n')))}d.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=p(r),m=a,f=s["".concat(l,".").concat(m)]||s[m]||d[m]||o;return r?n.createElement(f,c(c({ref:t},u),{},{components:r})):n.createElement(f,c({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=s;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var p=2;p<o;p++)c[p]=r[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"}}]);