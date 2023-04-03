"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[583],{43421:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(7896),a=(n(67294),n(3905));const o={id:"03-presets",title:"presets",sidebar_label:"presets",slug:"presets"},l=void 0,s={unversionedId:"antd-form-builder/03-presets",id:"antd-form-builder/03-presets",title:"presets",description:"\u529f\u80fd",source:"@site/docs/antd-form-builder/03-presets.mdx",sourceDirName:"antd-form-builder",slug:"/antd-form-builder/presets",permalink:"/antd-react-packages/docs/antd-form-builder/presets",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/antd-form-builder/03-presets.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"03-presets",title:"presets",sidebar_label:"presets",slug:"presets"},sidebar:"tutorialSidebar",previous:{title:"simple",permalink:"/antd-react-packages/docs/antd-form-builder/simple"},next:{title:"fetch-init",permalink:"/antd-react-packages/docs/antd-form-builder/fetch-init"}},i={},p=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:3},{value:"\u9884\u89c8",id:"\u9884\u89c8",level:3}],u={toc:p};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"\u529f\u80fd"},"\u529f\u80fd"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u57fa\u4e8e\u4e4b\u524d\u7684\u5b9e\u73b0\uff0c\u6dfb\u52a0\u4e86\u9884\u8bbe\u529f\u80fd"),(0,a.kt)("li",{parentName:"ul"},"\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"li"},"presets")," \u6dfb\u52a0 field \u76f8\u5173\u5b57\u6bb5\u7684\u9884\u8bbe\u503c\uff0c\u5982 ",(0,a.kt)("inlineCode",{parentName:"li"},"label"),"\u3001",(0,a.kt)("inlineCode",{parentName:"li"},"placeholder"),"\u3001",(0,a.kt)("inlineCode",{parentName:"li"},"help"),"\u3001",(0,a.kt)("inlineCode",{parentName:"li"},"rules")," \u7b49")),(0,a.kt)("h3",{id:"\u9884\u89c8"},"\u9884\u89c8"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"fields \u7684 presets \u9884\u8bbe\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<FormBuilder\n  presets={{\n    fields: {\n      username: { label: 'User Name', widget: 'input', required: true },\n      password: { label: 'Password', widget: 'password', required: true },\n    },\n  }}\n  meta={{\n    initialValues: {\n      username: 'aric',\n      password: '123123',\n    },\n    fields: [\n      { key: 'username' },\n      { key: 'password' },\n      { key: 'show-hobby', widget: 'checkbox', label: 'Show Hobby' },\n    ],\n  }}\n  onFinish={(e) => {\n    console.log('evt1: ', e.target.value);\n  }}>\n  <Row>\n    <Col span={8}></Col>\n    <Col span={16}>\n      <Button htmlType=\"submit\">Submit</Button>\n    </Col>\n  </Row>\n</FormBuilder>\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"widgets \u7684 presets \u9884\u8bbe\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<FormBuilder\n  presets={{\n    widgets: {\n      'checkbox-group': {\n        label: 'Show Hobby',\n        widgetProps: {\n          options: [\n            { label: 'Football', value: 'football' },\n            { label: 'Basketball', value: 'basketball' },\n          ],\n        },\n      },\n      'password': { label: 'Password', widget: 'password', required: true },\n    },\n  }}\n  meta={{\n    initialValues: {\n      username: 'aric',\n      password: '123123',\n    },\n    fields: [\n      { key: 'username', label: 'Username' },\n      { key: 'password', widget: 'password' },\n      { key: 'show-hobby', widget: 'checkbox-group' },\n    ],\n  }}\n  onFinish={(e) => {\n    console.log('evt2: ', e.target.value);\n  }}>\n  <Row>\n    <Col span={8}></Col>\n    <Col span={16}>\n      <Button htmlType=\"submit\">Submit</Button>\n    </Col>\n  </Row>\n</FormBuilder>\n")))}d.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,b=c["".concat(i,".").concat(m)]||c[m]||d[m]||o;return n?r.createElement(b,l(l({ref:t},u),{},{components:n})):r.createElement(b,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=c;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"}}]);