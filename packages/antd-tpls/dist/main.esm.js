var x=Object.defineProperty;var m=Object.getOwnPropertySymbols;var h=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable;var f=(e,o,t)=>o in e?x(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,c=(e,o)=>{for(var t in o||(o={}))h.call(o,t)&&f(e,t,o[t]);if(m)for(var t of m(o))R.call(o,t)&&f(e,t,o[t]);return e};var n=(e,o)=>x(e,"name",{value:o,configurable:!0});var s=(e,o)=>{var t={};for(var r in e)h.call(e,r)&&o.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&m)for(var r of m(e))o.indexOf(r)<0&&R.call(e,r)&&(t[r]=e[r]);return t};import{Breadcrumb as C}from"antd";import b from"react";var y=n(({item:e,index:o,items:t})=>{let a=(t==null?void 0:t.length)-1===o?b.createElement("span",null,e.label):b.createElement("a",{href:e.value},e.label);return b.createElement(C.Item,{key:o},a)},"breadcrumbDefault");import v from"react";import{Checkbox as B,Select as S,Radio as k,Tree as T,TreeSelect as D}from"antd";var L={value:"value",label:"label"},u=n(({item:e,index:o},t)=>{let d=c(c({},L),t),{component:a,value:l,label:p}=d,P=s(d,["component","value","label"]),w=e[l],E=e[p];return v.createElement(a,c({key:o,value:w},P),E)},"kv"),N=n(e=>u(e,{component:B}),"checkboxKv"),O=n(e=>u(e,{component:S.Option}),"selectKv"),g=n((e,o)=>{let p=o||{},{isButton:t}=p,r=s(p,["isButton"]),a=t?k.Button:k;return u(e,c({component:a},t?r:{}))},"radioKv"),I=n(({item:e},o)=>{let l=e,{value:t,label:r}=l,a=s(l,["value","label"]);return v.createElement(T.TreeNode,c({key:t,title:r},a),o())},"treeKv"),j=n(({item:e},o)=>{let{value:t,label:r}=e;return v.createElement(D.TreeNode,{key:t,value:t,title:r,children:o()})},"treeSelectKv");import q from"react";import{Checkbox as z,Radio as K,Select as A}from"antd";var i=n(({item:e,index:o},t)=>{let l=t,{component:r}=l,a=s(l,["component"]);return q.createElement(r,c({key:o,value:e},a),e)},"raw"),F=n(e=>i(e,{component:z}),"checkboxRaw"),G=n(e=>i(e,{component:A.Option}),"selectRaw"),H=n((e,o)=>{let p=o||{},{isButton:t}=p,r=s(p,["isButton"]),a=t?K.Button:K;return i(e,c({component:a},t?r:{}))},"radioRaw");import"react";var J={label:"label"},M=n(({item:e},o)=>{let t=c(c({},J),o);return e[t==null?void 0:t.label]},"transferLabel");export{y as breadcrumbDefault,N as checkboxKv,F as checkboxRaw,u as kv,g as radioKv,H as radioRaw,i as raw,O as selectKv,G as selectRaw,M as transferLabel,I as treeKv,j as treeSelectKv};
//# sourceMappingURL=main.esm.js.map