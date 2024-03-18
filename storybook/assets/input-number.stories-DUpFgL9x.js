import{O as l}from"./Orchestrator-BulEV6K8.js";import"./jsx-runtime-2xDJh5tt.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Dk74W0Oi.js";import"./index-BtM5VmRH.js";import"./i18n-Cg-UD1N1.js";import"./inheritsLoose-Cay3MKMD.js";const u={cleaning:{},components:[{id:"kze792d8",componentType:"InputNumber",mandatory:!1,page:"1",min:0,max:10,decimals:2,label:{value:'"Your favourite number"',type:"VTL|MD"},description:{value:'"A number between 0 and 10 with 2 decimals maximum."',type:"VTL|MD"},conditionFilter:{value:"true",type:"VTL"},bindingDependencies:["NB"],response:{name:"NB"}}],variables:[{variableType:"COLLECTED",name:"NB",values:{PREVIOUS:null,COLLECTED:null,FORCED:null,EDITED:null,INPUTED:null}}],pagination:"question",resizing:{},label:{type:"VTL|MD",value:"Test-Dylan"},lunaticModelVersion:"2.5.0",modele:"TESTDYLAN",enoCoreVersion:"2.7.1",generatingDate:"06-03-2024 12:46:44",missing:!1,id:"lsvuvtbg",maxPage:"1"},c={cleaning:{},components:[{id:"kze792d8",componentType:"InputNumber",mandatory:!1,page:"1",unit:"€",min:0,max:1e6,decimals:0,label:{value:`"What's your ideal annual salary in euros?"`,type:"VTL|MD"},description:{value:'"A number in euro between 0 and 1000000."',type:"VTL|MD"},conditionFilter:{value:"true",type:"VTL"},controls:[{id:"kze792d8",typeOfControl:"CONSISTENCY",criticality:"WARN",control:{value:"NB = 5",type:"VTL"},errorMessage:{value:'"Maybe try 5"',type:"VTL|MD"},bindingDependencies:["NB"]}],bindingDependencies:["NB"],response:{name:"NB"}}],variables:[{variableType:"COLLECTED",name:"NB",values:{PREVIOUS:null,COLLECTED:null,FORCED:null,EDITED:null,INPUTED:null}}],pagination:"question",resizing:{},label:{type:"VTL|MD",value:"Test-Dylan"},lunaticModelVersion:"2.5.0",modele:"TESTDYLAN",enoCoreVersion:"2.7.1",generatingDate:"06-03-2024 12:46:44",missing:!1,id:"lsvuvtbg",maxPage:"1"},E={title:"Components/InputNumber",component:l,parameters:{docs:{description:{story:"This component should be used when you want the user to enter a number. You can add a min and max property if you want to restrict the number the user can enter. You can also specify the number of decimals allowed."}}}},e={args:{source:u}},n={parameters:{docs:{description:{story:"You can specify a unit."}}},args:{source:c}};var a,t,r;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    source: source
  }
} satisfies Story`,...(r=(t=e.parameters)==null?void 0:t.docs)==null?void 0:r.source}}};var o,s,i;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
} satisfies Story`,...(i=(s=n.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const v=["Default","WithUnit"];export{e as Default,n as WithUnit,v as __namedExportsOrder,E as default};
