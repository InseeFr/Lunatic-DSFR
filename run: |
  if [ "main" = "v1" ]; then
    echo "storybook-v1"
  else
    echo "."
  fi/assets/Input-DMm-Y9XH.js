import{r as x,R as l}from"./index-CBqU2yxZ.js";import{s as R}from"./index-dZF2CjUm.js";import{a as f,c as p,f as i}from"./client-D2oCQSOe.js";var S=function(t,o){var a={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&o.indexOf(e)<0&&(a[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,e=Object.getOwnPropertySymbols(t);r<e.length;r++)o.indexOf(e[r])<0&&Object.prototype.propertyIsEnumerable.call(t,e[r])&&(a[e[r]]=t[e[r]]);return a};const h=x.memo(x.forwardRef((t,o)=>{var a;const{className:e,id:r,label:N,hintText:b,hideLabel:E,disabled:y=!1,iconId:O,classes:c={},style:T,state:d="default",stateRelatedMessage:w,textArea:m=!1,nativeTextAreaProps:A,nativeInputProps:s}=t,P=S(t,["className","id","label","hintText","hideLabel","disabled","iconId","classes","style","state","stateRelatedMessage","textArea","nativeTextAreaProps","nativeInputProps"]),g=(a=m?A:s)!==null&&a!==void 0?a:{},_=m?"textarea":"input";f.assert();const v=function(){var n;const j=x.useId();return(n=g.id)!==null&&n!==void 0?n:`input-${j}`}(),I=`${v}-desc-error`;return l.createElement("div",Object.assign({className:p(i.cx((s==null?void 0:s.type)==="file"?"fr-upload-group":"fr-input-group",y&&"fr-input-group--disabled",(()=>{switch(d){case"error":return"fr-input-group--error";case"success":return"fr-input-group--valid";case"default":return}f.assert(!1)})()),c.root,e),style:T,ref:o,id:r},P),l.createElement("label",{className:p(i.cx("fr-label",E&&"fr-sr-only"),c.label),htmlFor:v},N,b!==void 0&&l.createElement("span",{className:"fr-hint-text"},b)),(()=>{var u;const n=l.createElement(_,Object.assign({},g,{className:p(i.cx("fr-input",(()=>{switch(d){case"error":return"fr-input--error";case"success":return"fr-input--valid";case"default":return}f.assert(!1)})()),c.nativeInputOrTextArea),disabled:y||void 0,"aria-describedby":I,type:m?void 0:(u=s==null?void 0:s.type)!==null&&u!==void 0?u:"text",id:v}));return O===void 0?n:l.createElement("div",{className:i.cx("fr-input-wrap",O)},n)})(),d!=="default"&&l.createElement("p",{id:I,className:p(i.cx((()=>{switch(d){case"error":return"fr-error-text";case"success":return"fr-valid-text"}f.assert(!1)})()),c.message)},w))}));h.displayName=R({Input:h});export{h as I};
