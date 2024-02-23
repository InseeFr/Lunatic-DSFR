import{O as E}from"./Orchestrator-K3TdHXhC.js";import{s as v}from"./source-componentset-BoYv8Vm7.js";import{d as y}from"./dsfr-BqGaM3Aq.js";import"./jsx-runtime-Kowmy4gq.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Dk74W0Oi.js";import"./i18n-CBtZ6Qo0.js";import"./index-CAmJLBaW.js";import"./InputNumber-Dxj0GBtI.js";import"./Input-C9dXSV5z.js";import"./symToStr-B1SJCDhJ.js";import"./getErrorStates-C-Ngk_mI.js";import"./index-BtM5VmRH.js";import"./useAnalyticsId-CxjkFw7q.js";import"./extends-CCbyfPlC.js";import"./Button-DmdRMydj.js";import"./link-CBxWA4Rh.js";import"./CheckboxGroup-C5njMFKl.js";import"./Fieldset-r1EXLwzM.js";import"./Dropdown-Oh--umW9.js";import"./Input-DxJigrav.js";import"./Radio-DCx0FNOn.js";import"./themeStringToVariable-CtV1vixM.js";const b=[{id:"radiototo",bindingDependencies:["Q1"],componentType:"Radio",mandatory:!1,label:{value:'"Does Spongebob live in a pineapple under the sea?"',type:"VTL|MD"},description:{value:'"Spongebob works for Mr. Krabs"',type:"VTL|MD"},conditionFilter:{value:"true",type:"VTL"},controls:[{id:"radio",typeOfControl:"CONSISTENCY",criticality:"WARN",control:{value:'not(Q1= "2")',type:"VTL"},errorMessage:{value:'"What else would Spongebob live in?"',type:"VTL|MD"},bindingDependencies:["Q1"]}],options:[{value:"1",description:{value:'"Spongebob lives in a pineapple"',type:"VTL|MD"},label:{value:'"Yes"',type:"VTL|MD"}},{value:"2",description:{value:'"Spongebob does not live in a pineapple"',type:"VTL|MD"},label:{value:'"No"',type:"VTL|MD"}}],response:{name:"Q1"}}],L=[{variableType:"COLLECTED",name:"Q2",componentRef:"radio",values:{PREVIOUS:null,COLLECTED:null,FORCED:null,EDITED:null,INPUTED:null}},{variableType:"COLLECTED",name:"Q1",componentRef:"radio",values:{PREVIOUS:null,COLLECTED:null,FORCED:null,EDITED:null,INPUTED:null}}],C={components:b,variables:L},g="2",S=[{page:"1",id:"radiototo",bindingDependencies:["Q1"],componentType:"Radio",mandatory:!1,label:{value:'"Does Spongebob live in a pineapple under the sea?"',type:"VTL|MD"},description:{value:'"Spongebob works for Mr. Krabs"',type:"VTL|MD"},conditionFilter:{value:"true",type:"VTL"},controls:[{id:"radio",typeOfControl:"CONSISTENCY",criticality:"WARN",control:{value:'not(Q1= "2")',type:"VTL"},errorMessage:{value:'"What else would Spongebob live in?"',type:"VTL|MD"},bindingDependencies:["Q1"]}],options:[{value:"1",description:{value:'"Spongebob lives in a pineapple"',type:"VTL|MD"},label:{value:'"Yes"',type:"VTL|MD"}},{value:"2",description:{value:'"Spongebob does not live in a pineapple"',type:"VTL|MD"},label:{value:'"No"',type:"VTL|MD"}}],response:{name:"Q1"}},{page:"2",id:"sequence",componentType:"Sequence",mandatory:!1,label:{value:'"Bye"',type:"VTL|MD"}}],O=[{variableType:"COLLECTED",name:"Q2",componentRef:"radio",values:{PREVIOUS:null,COLLECTED:null,FORCED:null,EDITED:null,INPUTED:null}},{variableType:"COLLECTED",name:"Q1",componentRef:"radio",values:{PREVIOUS:null,COLLECTED:null,FORCED:null,EDITED:null,INPUTED:null}}],V={maxPage:g,components:S,variables:O},R=[{id:"radiototo",bindingDependencies:["Q1"],componentType:"Radio",mandatory:!1,label:{value:'"Radio label"',type:"VTL|MD"},description:{value:'"Radio description (non mandatory)"',type:"VTL|MD"},conditionFilter:{value:"true",type:"VTL"},controls:[{id:"radio",typeOfControl:"CONSISTENCY",criticality:"WARN",control:{value:'not(Q1= "2")',type:"VTL"},errorMessage:{value:'"What else would Spongebob live in?"',type:"VTL|MD"},bindingDependencies:["Q1"]}],options:[{value:"1",description:{value:'"Radio option1 description (non mandatory)"',type:"VTL|MD"},label:{value:'"Radio option1 label"',type:"VTL|MD"}},{value:"2",description:{value:'"Radio option2 description (non mandatory)"',type:"VTL|MD"},label:{value:'"Radio option2 label"',type:"VTL|MD"}}],response:{name:"Q1"}}],M=[{variableType:"COLLECTED",name:"Q2",componentRef:"radio",values:{PREVIOUS:null,COLLECTED:null,FORCED:null,EDITED:null,INPUTED:null}},{variableType:"COLLECTED",name:"Q1",componentRef:"radio",values:{PREVIOUS:null,COLLECTED:null,FORCED:null,EDITED:null,INPUTED:null}}],I={components:R,variables:M},Z={title:"Orchestrated Components/Radio",component:E,argTypes:y,parameters:{docs:{description:{story:"This component should be used if you want the user to select only one option in a list of options."}}}},e={args:{source:C}},o={parameters:{docs:{description:{story:"Click next to make the error appear."}}},args:{source:V}},n={parameters:{docs:{description:{story:"This component can be used in a ComponentSet"}}},args:{source:v}},a={args:{source:I}};var t,r,l;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    source: source
  }
}`,...(l=(r=e.parameters)==null?void 0:r.docs)==null?void 0:l.source}}};var s,i,p;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Click next to make the error appear."
      }
    }
  },
  args: {
    source: sourceWithError
  }
}`,...(p=(i=o.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var c,u,d;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "This component can be used in a ComponentSet"
      }
    }
  },
  args: {
    source: sourceInComponentSet
  }
}`,...(d=(u=n.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var m,T,D;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    source: sourceSkeleton
  }
}`,...(D=(T=a.parameters)==null?void 0:T.docs)==null?void 0:D.source}}};const ee=["Default","WithError","InComponentSet","Skeleton"];export{e as Default,n as InComponentSet,a as Skeleton,o as WithError,ee as __namedExportsOrder,Z as default};
