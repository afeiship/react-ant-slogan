"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[734],{30876:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var a=r(2784);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=a.createContext({}),s=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,u=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=s(r),m=n,b=p["".concat(u,".").concat(m)]||p[m]||c[m]||l;return r?a.createElement(b,o(o({ref:t},d),{},{components:r})):a.createElement(b,o({ref:t},d))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=p;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var s=2;s<l;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},49434:(e,t,r)=>{r.d(t,{Z:()=>o});var a=r(2784),n=r(6277);const l="tabItem_OMyP";function o(e){let{children:t,hidden:r,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(l,o),hidden:r},t)}},26075:(e,t,r)=>{r.d(t,{Z:()=>m});var a=r(7896),n=r(2784),l=r(6277),o=r(89741),i=r(42244),u=r(78963),s=r(24126);const d="tabList_M0Dn",c="tabItem_ysIP";function p(e){var t;const{lazy:r,block:o,defaultValue:p,values:m,groupId:b,className:f}=e,v=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=m??v.map((e=>{let{props:{value:t,label:r,attributes:a}}=e;return{value:t,label:r,attributes:a}})),h=(0,i.l)(k,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===p?p:p??(null==(t=v.find((e=>e.props.default)))?void 0:t.props.value)??v[0].props.value;if(null!==g&&!k.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:N}=(0,u.U)(),[w,O]=(0,n.useState)(g),T=[],{blockElementScrollPositionUntilNextRender:E}=(0,s.o5)();if(null!=b){const e=y[b];null!=e&&e!==w&&k.some((t=>t.value===e))&&O(e)}const j=e=>{const t=e.currentTarget,r=T.indexOf(t),a=k[r].value;a!==w&&(E(t),O(a),null!=b&&N(b,String(a)))},x=e=>{var t;let r=null;switch(e.key){case"Enter":j(e);break;case"ArrowRight":{const t=T.indexOf(e.currentTarget)+1;r=T[t]??T[0];break}case"ArrowLeft":{const t=T.indexOf(e.currentTarget)-1;r=T[t]??T[T.length-1];break}}null==(t=r)||t.focus()};return n.createElement("div",{className:(0,l.Z)("tabs-container",d)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":o},f)},k.map((e=>{let{value:t,label:r,attributes:o}=e;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>T.push(e),onKeyDown:x,onClick:j},o,{className:(0,l.Z)("tabs__item",c,null==o?void 0:o.className,{"tabs__item--active":w===t})}),r??t)}))),r?(0,n.cloneElement)(v.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function m(e){const t=(0,o.Z)();return n.createElement(p,(0,a.Z)({key:String(t)},e))}},38152:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=r(7896),n=(r(2784),r(30876)),l=r(26075),o=r(49434);const i={id:"01-get-started",title:"get-started",sidebar_label:"get-started",slug:"."},u=void 0,s={unversionedId:"antd-form-builder/01-get-started",id:"antd-form-builder/01-get-started",title:"get-started",description:"\u7b80\u4ecb",source:"@site/docs/antd-form-builder/01-get-started.mdx",sourceDirName:"antd-form-builder",slug:"/antd-form-builder/",permalink:"/docs/antd-form-builder/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/antd-form-builder/01-get-started.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"01-get-started",title:"get-started",sidebar_label:"get-started",slug:"."},sidebar:"mainSidebar",previous:{title:"upload-picture-card",permalink:"/docs/antd-components/upload-picture-card"},next:{title:"simple",permalink:"/docs/antd-form-builder/simple"}},d={},c=[{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",level:3},{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:3},{value:"\u4f7f\u7528",id:"\u4f7f\u7528",level:3},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:3}],p={toc:c};function m(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h3",{id:"\u7b80\u4ecb"},"\u7b80\u4ecb"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u4e3b\u8981\u662f\u63d0\u4f9b\u4e86\u4e00\u5957\u57fa\u4e8e ",(0,n.kt)("inlineCode",{parentName:"p"},"antd")," \u5b9e\u73b0\u7684 ",(0,n.kt)("inlineCode",{parentName:"p"},"form-schema"),"\uff0c\u7528\u4e8e\u65b9\u4fbf\u7684\u751f\u6210\u8868\u5355\uff0c\u652f\u6301 ",(0,n.kt)("inlineCode",{parentName:"p"},"antd")," \u7684\u6240\u6709\u7ec4\u4ef6\uff0c\u540c\u65f6\u652f\u6301\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u3002")),(0,n.kt)("h3",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u76f4\u63a5\u7528 ",(0,n.kt)("inlineCode",{parentName:"li"},"npm")," \u6216\u8005 ",(0,n.kt)("inlineCode",{parentName:"li"},"yarn")," \u5b89\u88c5\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u76ee\u524d\u517c\u5bb9 ",(0,n.kt)("inlineCode",{parentName:"li"},"antd4/antd5"),"\uff0c\u4f46\u957f\u671f\u7ef4\u62a4\u7684\u662f ",(0,n.kt)("inlineCode",{parentName:"li"},"antd5")),(0,n.kt)("li",{parentName:"ul"},"\u5e76\u975e\u5b8c\u5168\u81ea\u4e3b\u5f00\u53d1\uff0c\u57fa\u4e8e ",(0,n.kt)("inlineCode",{parentName:"li"},"rekit/antd-form-builder")," \u4e8c\u6b21\u5f00\u53d1")),(0,n.kt)(l.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @jswork/antd-form-builder\n"))),(0,n.kt)(o.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @jswork/antd-form-builder\n")))),(0,n.kt)("h3",{id:"\u4f7f\u7528"},"\u4f7f\u7528"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"// \u5f15\u5165JS\nimport FormBuilder from '@jswork/antd-form-builder';\n")),(0,n.kt)("h3",{id:"\u53c2\u8003"},"\u53c2\u8003"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://rekit.github.io/antd-form-builder/"},"https://rekit.github.io/antd-form-builder/")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/afeiship/antd-react-packages"},"https://github.com/afeiship/antd-react-packages"))))}m.isMDXComponent=!0}}]);