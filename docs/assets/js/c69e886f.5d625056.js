"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[30],{48176:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var r=n(7896),a=(n(67294),n(3905));const l={id:"pre-select",title:"pre-select",sidebar_label:"pre-select",slug:"pre-select"},o=void 0,c={unversionedId:"antd-components/pre-select",id:"antd-components/pre-select",title:"pre-select",description:"\u7b80\u4ecb",source:"@site/docs/antd-components/pre-select.mdx",sourceDirName:"antd-components",slug:"/antd-components/pre-select",permalink:"/antd-react-packages/docs/antd-components/pre-select",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/antd-components/pre-select.mdx",tags:[],version:"current",frontMatter:{id:"pre-select",title:"pre-select",sidebar_label:"pre-select",slug:"pre-select"},sidebar:"tutorialSidebar",previous:{title:"input",permalink:"/antd-react-packages/docs/antd-components/input"},next:{title:"radio-group",permalink:"/antd-react-packages/docs/antd-components/radio-group"}},i={},p=[{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",level:3},{value:"\u9884\u89c8",id:"\u9884\u89c8",level:3}],s={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"\u7b80\u4ecb"},"\u7b80\u4ecb"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4e00\u4e2a\u5e38\u89c1\u7684 filter \u591a\u9009\u903b\u8f91\uff0c\u672c\u8d28\u4e0a\u662f\u53e6\u4e00\u4e2a checkbox-group"),(0,a.kt)("li",{parentName:"ul"},"\u6dfb\u52a0 ",(0,a.kt)("inlineCode",{parentName:"li"},"items/template")," \u63a5\u53e3"),(0,a.kt)("li",{parentName:"ul"},"\u7edf\u4e00\u6240\u6709\u7684 ",(0,a.kt)("inlineCode",{parentName:"li"},"onChagne")," \u4e8b\u4ef6")),(0,a.kt)("h3",{id:"\u9884\u89c8"},"\u9884\u89c8"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<Space direction=\"vertical\" style={{ display: 'flex' }}>\n  <AcPreSelect\n    items={[\n      { value: 'v1', label: 'l1' },\n      { value: 'v2', label: 'l2' },\n      { value: 'v3', label: 'l3' },\n    ]}\n    onChange={(e) => {\n      console.log('evt: ', e.target.value);\n    }}\n  />\n\n  <AcPreSelect\n    searchable\n    inputOptions={{ placeholder: 'search...' }}\n    items={[\n      { value: 'v1', label: 'l1' },\n      { value: 'v2', label: 'l2' },\n      { value: 'v3', label: 'l3' },\n    ]}\n    onChange={(e) => {\n      console.log('evt: ', e.target.value);\n    }}\n  />\n</Space>\n")))}u.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,f=d["".concat(i,".").concat(m)]||d[m]||u[m]||l;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);