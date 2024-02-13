import{O as C}from"./Orchestrator-32jYxLHu.js";import{d as L}from"./index-dZF2CjUm.js";import"./jsx-runtime-Kowmy4gq.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Dk74W0Oi.js";import"./extends-BDbCiz7i.js";import"./InputNumber-HC_3LB2G.js";import"./Input-DMm-Y9XH.js";import"./client-D2oCQSOe.js";import"./getErrorStates-C-Ngk_mI.js";import"./dsfr-Bu8y7YP_.js";import"./index-BtM5VmRH.js";import"./i18n-Bloz8h-o.js";import"./useAnalyticsId-CxjkFw7q.js";import"./themeStringToVariable-DxeQHwF1.js";import"./Button-BWmEEbm4.js";import"./link-BaYVyrkW.js";import"./CheckboxGroup-DfMm_vko.js";import"./Fieldset-CZ-Yy9h9.js";import"./Dropdown-LkUrKZDU.js";import"./Input-B0sWpcFi.js";import"./Radio-BPFyNsRy.js";const g=[{id:"kze792d8",componentType:"InputNumber",mandatory:!1,page:"1",min:0,max:10,decimals:2,label:{value:'"Your favourite number"',type:"VTL|MD"},description:'"A number between 0 and 10 with 2 decimals maximum."',conditionFilter:{value:"true",type:"VTL"},bindingDependencies:["NB"],response:{name:"NB"}}],I=[{variableType:"COLLECTED",name:"NB",values:{PREVIOUS:null,COLLECTED:null,FORCED:null,EDITED:null,INPUTED:null}}],N={components:g,variables:I},O="2",S=[{page:"1",min:0,max:130,componentType:"InputNumber",bindingDependencies:["AGE"],label:{value:`"What's your age?"`,type:"VTL|MD"},description:'"A number between 0 and 100."',conditionFilter:{value:"true",type:"VTL"},controls:[{id:"age-controls",criticality:"ERROR",typeOfControl:"FORMAT",control:{value:'not(nvl(AGE, "") = "")',type:"VTL"},errorMessage:{value:'"Your age cannot be empty."',type:"VTL"}}],id:"name",response:{name:"AGE"}},{id:"seq",componentType:"Sequence",label:{value:'"Bye!"',type:"VTL|MD"},conditionFilter:{value:"true",type:"VTL"},page:"2"}],h=[{variableType:"COLLECTED",name:"AGE",values:{PREVIOUS:null,COLLECTED:null,FORCED:null,EDITED:null,INPUTED:null}}],V={maxPage:O,components:S,variables:h},f=[{id:"kze792d8",componentType:"InputNumber",mandatory:!1,page:"1",min:0,max:10,decimals:2,label:{value:'"InputNumber label"',type:"VTL|MD"},description:'"InputNumber description (non mandatory)"',conditionFilter:{value:"true",type:"VTL"},bindingDependencies:["NB"],response:{name:"NB"}}],A=[{variableType:"COLLECTED",name:"NB",values:{PREVIOUS:null,COLLECTED:null,FORCED:null,EDITED:null,INPUTED:null}}],R={components:f,variables:A},U=[{id:"kze792d8",componentType:"InputNumber",mandatory:!1,page:"1",unit:"€",min:0,max:1e6,decimals:0,label:{value:`"What's your ideal annual salary in euros?"`,type:"VTL|MD"},description:'"A number in euro between 0 and 1000000."',conditionFilter:{value:"true",type:"VTL"},controls:[{id:"kze792d8",typeOfControl:"CONSISTENCY",criticality:"WARN",control:{value:"NB = 5",type:"VTL"},errorMessage:{value:'"Maybe try 5"',type:"VTL|MD"},bindingDependencies:["NB"]}],bindingDependencies:["NB"],response:{name:"NB"}}],x=[{variableType:"COLLECTED",name:"NB",values:{PREVIOUS:null,COLLECTED:null,FORCED:null,EDITED:null,INPUTED:null}}],B={components:U,variables:x},F=[{id:"lfwg2ny2",componentType:"ComponentSet",page:"1",conditionFilter:{value:"true",type:"VTL"},label:{value:'"What is your favourite number and your date of birth?"',type:"VTL"},components:[{id:"kze792d8",componentType:"InputNumber",mandatory:!1,min:0,max:10,decimals:2,label:{value:'"Your favourite number"',type:"VTL|MD"},description:'"A number between 0 and 10 with 2 decimals maximum."',conditionFilter:{value:"true",type:"VTL"},bindingDependencies:["NB"],response:{name:"NB"}},{id:"lfwiizq2-dob",componentType:"Datepicker",mandatory:!0,min:"1900-01-01",max:"format-date(current-date(),'[Y0001]-[M01]-[D01]')",label:{value:' "Date de naissance"',type:"VTL"},bindingDependencies:["DATENAISS"],dateFormat:"YYYY-MM-DD",response:{name:"DATENAISS"}}]}],Y=[{variableType:"COLLECTED",name:"NB",values:{PREVIOUS:null,COLLECTED:null,FORCED:null,EDITED:null,INPUTED:null}},{variableType:"COLLECTED",name:"DATENAISS",values:{PREVIOUS:null,COLLECTED:null,FORCED:null,EDITED:null,INPUTED:null}}],k={components:F,variables:Y},ie={title:"Orchestrated Components/InputNumber",component:C,argTypes:L,parameters:{docs:{description:{story:"This component should be used when you want the user to enter a number. You can add a min and max property if you want to restrict the number the user can enter. You can also specify the number of decimals allowed."}}}},e={args:{source:N}},n={args:{source:R}},r={parameters:{docs:{description:{story:"Click next to make the error appear."}}},args:{source:V}},o={parameters:{docs:{description:{story:"You can specify a unit."}}},args:{source:B}},t={parameters:{docs:{description:{story:"You can use an Input in a ComponentSet component"}}},args:{source:k}};var a,s,i;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    source: source
  }
}`,...(i=(s=e.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};var p,l,c;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    source: sourceSkeleton
  }
}`,...(c=(l=n.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var u,m,d;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(d=(m=r.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var y,E,T;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "You can specify a unit."
      }
    }
  },
  args: {
    source: sourceWithUnit
  }
}`,...(T=(E=o.parameters)==null?void 0:E.docs)==null?void 0:T.source}}};var D,b,v;t.parameters={...t.parameters,docs:{...(D=t.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(v=(b=t.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};const pe=["Default","Skeleton","WithError","WithUnit","InComponentSet"];export{e as Default,t as InComponentSet,n as Skeleton,r as WithError,o as WithUnit,pe as __namedExportsOrder,ie as default};
