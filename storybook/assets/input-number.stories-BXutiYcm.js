import{O as l}from"./Orchestrator-9j6SErs3.js";import{d as u}from"./default-arg-types-CM6soQMH.js";import"./jsx-runtime-Kowmy4gq.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Dk74W0Oi.js";import"./index-BtM5VmRH.js";import"./i18n-D6RdwvcH.js";import"./index-DaiJh4G2.js";import"./Button-BzBTFgS8.js";import"./link-BMUnPBL0.js";import"./useAnalyticsId-JAjRLEWs.js";import"./inheritsLoose-DhIfPilY.js";const p={cleaning:{},components:[{id:"kze792d8",componentType:"InputNumber",mandatory:!1,page:"1",min:0,max:10,decimals:2,label:{value:'"Your favourite number"',type:"VTL|MD"},description:{value:'"A number between 0 and 10 with 2 decimals maximum."',type:"VTL|MD"},conditionFilter:{value:"true",type:"VTL"},bindingDependencies:["NB"],response:{name:"NB"}}],variables:[{variableType:"COLLECTED",name:"NB",values:{PREVIOUS:null,COLLECTED:null,FORCED:null,EDITED:null,INPUTED:null}}],pagination:"question",resizing:{},label:{type:"VTL|MD",value:"Test-Dylan"},lunaticModelVersion:"2.5.0",modele:"TESTDYLAN",enoCoreVersion:"2.7.1",generatingDate:"06-03-2024 12:46:44",missing:!1,id:"lsvuvtbg",maxPage:"1"},m={cleaning:{},components:[{id:"kze792d8",componentType:"InputNumber",mandatory:!1,page:"1",unit:"€",min:0,max:1e6,decimals:0,label:{value:`"What's your ideal annual salary in euros?"`,type:"VTL|MD"},description:{value:'"A number in euro between 0 and 1000000."',type:"VTL|MD"},conditionFilter:{value:"true",type:"VTL"},controls:[{id:"kze792d8",typeOfControl:"CONSISTENCY",criticality:"WARN",control:{value:"NB = 5",type:"VTL"},errorMessage:{value:'"Maybe try 5"',type:"VTL|MD"},bindingDependencies:["NB"]}],bindingDependencies:["NB"],response:{name:"NB"}}],variables:[{variableType:"COLLECTED",name:"NB",values:{PREVIOUS:null,COLLECTED:null,FORCED:null,EDITED:null,INPUTED:null}}],pagination:"question",resizing:{},label:{type:"VTL|MD",value:"Test-Dylan"},lunaticModelVersion:"2.5.0",modele:"TESTDYLAN",enoCoreVersion:"2.7.1",generatingDate:"06-03-2024 12:46:44",missing:!1,id:"lsvuvtbg",maxPage:"1"},V={title:"Components/InputNumber",component:l,argTypes:u,parameters:{docs:{description:{story:"This component should be used when you want the user to enter a number. You can add a min and max property if you want to restrict the number the user can enter. You can also specify the number of decimals allowed."}}}},e={args:{source:p}},n={parameters:{docs:{description:{story:"You can specify a unit."}}},args:{source:m}};var a,r,t;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    source: source
  }
}`,...(t=(r=e.parameters)==null?void 0:r.docs)==null?void 0:t.source}}};var o,s,i;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(i=(s=n.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const h=["Default","WithUnit"];export{e as Default,n as WithUnit,h as __namedExportsOrder,V as default};
