"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[969],{30876:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var a=n(2784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=u(n),d=r,b=m["".concat(i,".").concat(d)]||m[d]||p[d]||o;return n?a.createElement(b,l(l({ref:t},s),{},{components:n})):a.createElement(b,l({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var u=2;u<o;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},49434:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(2784),r=n(6277);const o="tabItem_OMyP";function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:n},t)}},26075:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(7896),r=n(2784),o=n(6277),l=n(89741),c=n(42244),i=n(78963),u=n(24126);const s="tabList_M0Dn",p="tabItem_ysIP";function m(e){var t;const{lazy:n,block:l,defaultValue:m,values:d,groupId:b,className:v}=e,f=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=d??f.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),k=(0,c.l)(h,((e,t)=>e.value===t.value));if(k.length>0)throw new Error(`Docusaurus error: Duplicate values "${k.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===m?m:m??(null==(t=f.find((e=>e.props.default)))?void 0:t.props.value)??f[0].props.value;if(null!==g&&!h.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:x}=(0,i.U)(),[w,O]=(0,r.useState)(g),N=[],{blockElementScrollPositionUntilNextRender:T}=(0,u.o5)();if(null!=b){const e=y[b];null!=e&&e!==w&&h.some((t=>t.value===e))&&O(e)}const E=e=>{const t=e.currentTarget,n=N.indexOf(t),a=h[n].value;a!==w&&(T(t),O(a),null!=b&&x(b,String(a)))},j=e=>{var t;let n=null;switch(e.key){case"Enter":E(e);break;case"ArrowRight":{const t=N.indexOf(e.currentTarget)+1;n=N[t]??N[0];break}case"ArrowLeft":{const t=N.indexOf(e.currentTarget)-1;n=N[t]??N[N.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",s)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":l},v)},h.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>N.push(e),onKeyDown:j,onClick:E},l,{className:(0,o.Z)("tabs__item",p,null==l?void 0:l.className,{"tabs__item--active":w===t})}),n??t)}))),n?(0,r.cloneElement)(f.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function d(e){const t=(0,l.Z)();return r.createElement(m,(0,a.Z)({key:String(t)},e))}},44578:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>c,metadata:()=>u,toc:()=>p});var a=n(7896),r=(n(2784),n(30876)),o=n(26075),l=n(49434);const c={id:"checkbox-group",title:"checkbox-group",sidebar_label:"checkbox-group",slug:"checkbox-group"},i=void 0,u={unversionedId:"antd-components/checkbox-group",id:"antd-components/checkbox-group",title:"checkbox-group",description:"installation",source:"@site/docs/antd-components/checkbox-group.mdx",sourceDirName:"antd-components",slug:"/antd-components/checkbox-group",permalink:"/docs/antd-components/checkbox-group",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/antd-components/checkbox-group.mdx",tags:[],version:"current",frontMatter:{id:"checkbox-group",title:"checkbox-group",sidebar_label:"checkbox-group",slug:"checkbox-group"},sidebar:"mainSidebar",previous:{title:"checkable-tag",permalink:"/docs/antd-components/checkable-tag"},next:{title:"checkbox",permalink:"/docs/antd-components/checkbox"}},s={},p=[{value:"installation",id:"installation",level:3},{value:"usage",id:"usage",level:3},{value:"preview",id:"preview",level:3}],m={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"installation"},"installation"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u76f4\u63a5\u7528 ",(0,r.kt)("inlineCode",{parentName:"li"},"npm")," \u6216\u8005 ",(0,r.kt)("inlineCode",{parentName:"li"},"yarn")," \u5b89\u88c5\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u6dfb\u52a0 ",(0,r.kt)("inlineCode",{parentName:"li"},"items/template")," \u901a\u7528\u5c5e\u6027"),(0,r.kt)("li",{parentName:"ul"},"\u7edf\u4e00 ",(0,r.kt)("inlineCode",{parentName:"li"},"event")," \u4e3a ",(0,r.kt)("inlineCode",{parentName:"li"},"e.target.value")," \u53d6\u503c")),(0,r.kt)(o.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @jswork/antd-components\n"))),(0,r.kt)(l.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @jswork/antd-components\n")))),(0,r.kt)("h3",{id:"usage"},"usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { AcCheckboxGroup } from '@jswork/antd-components';\n")),(0,r.kt)("h3",{id:"preview"},"preview"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<AcCheckboxGroup\n    items={[\n        { value: 'a', label: 'A' },\n        { value: 'b', label: 'B' },\n        { value: 'c', label: 'C' },\n        { value: 'd', label: 'D' }\n    ]}\n/>\n")))}d.isMDXComponent=!0}}]);