import{O as y}from"./Orchestrator-BSVAa56Z.js";import{s as L}from"./sourceComponentSet-BwtW6Pjq.js";import{d as h}from"./index-BU7te62H.js";import"./jsx-runtime-Kowmy4gq.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Dk74W0Oi.js";import"./extends-BDbCiz7i.js";import"./InputNumber-DTS_ig2t.js";import"./Input-DUEB4Qh4.js";import"./client-CITu49fz.js";import"./getErrorStates-C-Ngk_mI.js";import"./dsfr-hpCGclXG.js";import"./index-BtM5VmRH.js";import"./i18n-DsReUj07.js";import"./useAnalyticsId-CxjkFw7q.js";import"./themeStringToVariable-C4gw7PrO.js";import"./Button-mu8h6bgA.js";import"./link-CfIrXuWu.js";import"./CheckboxGroup-R3rw_rHr.js";import"./Fieldset-BbuXaxOW.js";import"./Dropdown-DlldrqGp.js";import"./Input-CDXXa9SI.js";import"./Radio-DemWtLtZ.js";const g="1",D=[{page:"1",componentType:"Input",bindingDependencies:["NAME"],label:{value:`"What's your name?"`,type:"VTL|MD"},description:'"No more than 30 characters"',conditionFilter:{value:"true",type:"VTL"},maxLength:30,id:"name",response:{name:"NAME"},declarations:[{declarationType:"HELP",id:"jruq5os5-kfdsfdsqhuxnyt",label:{type:"VTL|MD",value:'"HELP detachable"'},position:"DETACHABLE"},{declarationType:"HELP",id:"jruq5os5-kqhuxnyt",label:{type:"VTL|MD",value:'"help before"'},position:"BEFORE_QUESTION_TEXT"},{declarationType:"INSTRUCTION",id:"jruq5os5-kwghhgfhgf1n9c",label:{type:"VTL|MD",value:'"Instruction detachable"'},position:"DETACHABLE"},{declarationType:"HELP",id:"jruq5os5-kwgsssh1n9c",label:{type:"VTL|MD",value:'"Instruction before"'},position:"BEFORE_QUESTION_TEXT"}]}],b=[{variableType:"COLLECTED",name:"NAME",componentRef:"name",values:{PREVIOUS:null,COLLECTED:null,FORCED:null,EDITED:null,INPUTED:null}}],v={maxPage:g,components:D,variables:b},I="1",C=[{page:"1",componentType:"Input",bindingDependencies:["NAME"],label:{value:'"Input label"',type:"VTL|MD"},description:{value:'"test"',type:"VTL|MD"},conditionFilter:{value:"true",type:"VTL"},maxLength:30,id:"name",response:{name:"NAME"},declarations:[{declarationType:"HELP",id:"jruq5os5-kfdsfdsqhuxnyt",label:{type:"VTL|MD",value:'"declaration HELP detachable label"'},position:"DETACHABLE"},{declarationType:"HELP",id:"jruq5os5-kqhuxnyt",label:{type:"VTL|MD",value:'"declaration help before label"'},position:"BEFORE_QUESTION_TEXT"},{declarationType:"INSTRUCTION",id:"jruq5os5-kwghhgfhgf1n9c",label:{type:"VTL|MD",value:'"declaration Instruction detachable label"'},position:"DETACHABLE"},{declarationType:"HELP",id:"jruq5os5-kwgsssh1n9c",label:{type:"VTL|MD",value:'"declaration Instruction before label"'},position:"BEFORE_QUESTION_TEXT"}]}],f=[{variableType:"COLLECTED",name:"NAME",componentRef:"name",values:{PREVIOUS:null,COLLECTED:null,FORCED:null,EDITED:null,INPUTED:null}}],O={maxPage:I,components:C,variables:f},M="2",V=[{page:"1",componentType:"Input",bindingDependencies:["NAME"],label:{value:`"What's your name?"`,type:"VTL|MD"},description:'"No more than 10 characters"',conditionFilter:{value:"true",type:"VTL"},controls:[{id:"age-controls",criticality:"ERROR",typeOfControl:"FORMAT",control:{value:'not(nvl(NAME, "") = "")',type:"VTL"},errorMessage:{value:'"Your name cannot be empty."',type:"VTL"}}],maxLength:10,id:"name",response:{name:"NAME"},questionInformation:{value:'"Question Information"',type:"VTL"},questionContext:{value:'"Question Context"',type:"VTL"}},{id:"seq",componentType:"Sequence",label:{value:'"Bye!"',type:"VTL|MD"},conditionFilter:{value:"true",type:"VTL"},page:"2",questionInformation:{value:'"Question Information"',type:"VTL|MD"},questionContext:{value:'"Question Context"',type:"VTL|MD"}}],S=[{variableType:"COLLECTED",name:"NAME",componentRef:"name",values:{PREVIOUS:null,COLLECTED:null,FORCED:null,EDITED:null,INPUTED:null}}],N={maxPage:M,components:V,variables:S},oe={title:"Orchestrated Components/Input",component:y,argTypes:h,parameters:{docs:{description:{story:"This component should be used when you want the user to enter a string. You can add a maxLength property if you want to restrict the number of characters the user can enter."}}}},e={args:{source:v}},o={args:{source:O}},t={parameters:{docs:{description:{story:"Click next to make the error appear."}}},args:{source:N}},n={parameters:{docs:{description:{story:"You can use an Input in a ComponentSet component"}}},args:{source:L}};var a,r,s;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    source: source
  }
}`,...(s=(r=e.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};var p,i,l;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    source: sourceSkeleton
  }
}`,...(l=(i=o.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var c,u,m;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(m=(u=t.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var d,E,T;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "You can use an Input in a ComponentSet component"
      }
    }
  },
  args: {
    source: sourceInComponentSet
  }
}`,...(T=(E=n.parameters)==null?void 0:E.docs)==null?void 0:T.source}}};const te=["Default","Skeleton","WithError","InComponentSet"];export{e as Default,n as InComponentSet,o as Skeleton,t as WithError,te as __namedExportsOrder,oe as default};
