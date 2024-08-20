import{O as p}from"./Orchestrator-ConHuVnl.js";import"./index-9t-h-7t7.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-B8XB3FuZ.js";import"./i18n-B2NgqSMW.js";import"./inheritsLoose-Bp8pAaMb.js";const r={cleaning:{},components:[{page:"1",componentType:"Input",bindingDependencies:["NAME"],label:{value:`"What's your name?"`,type:"VTL|MD"},description:{value:'"No more than 30 characters"',type:"VTL|MD"},conditionFilter:{value:"true",type:"VTL"},maxLength:30,id:"name",response:{name:"NAME"}}],variables:[{variableType:"COLLECTED",name:"NAME",values:{PREVIOUS:null,COLLECTED:null,FORCED:null,EDITED:null,INPUTTED:null}}],pagination:"question",resizing:{},label:{type:"VTL|MD",value:"Test-Dylan"},lunaticModelVersion:"2.5.0",modele:"TESTDYLAN",enoCoreVersion:"2.7.1",generatingDate:"06-03-2024 12:46:44",missing:!1,id:"lsvuvtbg",maxPage:"1"},u={cleaning:{},maxPage:"3",variables:[{variableType:"COLLECTED",name:"NAME",values:{PREVIOUS:null,COLLECTED:null,FORCED:null,EDITED:null,INPUTTED:null}},{variableType:"COLLECTED",name:"FIRSTNAME",values:{PREVIOUS:null,COLLECTED:null,FORCED:null,EDITED:null,INPUTTED:null}},{variableType:"COLLECTED",name:"LASTNAME",values:{PREVIOUS:null,COLLECTED:null,FORCED:null,EDITED:null,INPUTTED:null}}],components:[{componentType:"Question",id:"idQuestion",page:"1",label:{type:"VTL|MD",value:'"Label de la Question"'},description:{type:"VTL|MD",value:'"Description de la question"'},declarations:[{declarationType:"HELP",id:"idQuestion-help1",label:{type:"VTL|MD",value:'"Label de la déclaration en position : `BEFORE_QUESTION_TEXT`"'},position:"BEFORE_QUESTION_TEXT"},{declarationType:"HELP",id:"idQuestion-help3",label:{type:"VTL|MD",value:'"Label de la déclaration en position  en position : `AFTER_QUESTION_TEXT`"'},position:"AFTER_QUESTION_TEXT"}],components:[{componentType:"Input",conditionFilter:{value:"true",type:"VTL"},maxLength:249,id:"name",response:{name:"NAME"}}]},{componentType:"Question",id:"idQuestion",page:"2",label:{type:"VTL|MD",value:'"Question avec 2 composants Input"'},description:{type:"VTL|MD",value:'"Description de la question"'},declarations:[{declarationType:"HELP",id:"idQuestion-help1",label:{type:"VTL|MD",value:'"Label de la déclaration en position : `BEFORE_QUESTION_TEXT`"'},position:"BEFORE_QUESTION_TEXT"},{declarationType:"HELP",id:"idQuestion-help3",label:{type:"VTL|MD",value:'"Label de la déclaration en position  en position : `AFTER_QUESTION_TEXT`"'},position:"AFTER_QUESTION_TEXT"}],components:[{componentType:"Input",label:{value:'"Label du composant Input 1"',type:"VTL|MD"},description:{value:'"Description du composant Input"',type:"VTL|MD"},conditionFilter:{value:"true",type:"VTL"},maxLength:249,id:"name",response:{name:"FIRSTNAME"}},{componentType:"Input",label:{value:'"Label du composant Input 2"',type:"VTL|MD"},description:{value:'"Description du composant Input"',type:"VTL|MD"},conditionFilter:{value:"true",type:"VTL"},maxLength:249,id:"name",response:{name:"LASTNAME"}}]},{id:"seq",componentType:"Sequence",label:{value:'"Bye!"',type:"VTL|MD"},conditionFilter:{value:"true",type:"VTL"},page:"3"}],pagination:"question",resizing:{},label:{type:"VTL|MD",value:"Test-Dylan"},lunaticModelVersion:"2.5.0",modele:"TESTDYLAN",enoCoreVersion:"2.7.1",generatingDate:"06-03-2024 12:46:44",id:"lsvuvtbg"},y={title:"Components/Input",component:p,parameters:{docs:{description:{component:"This component should be used when you want the user to enter a string. You can add a maxLength property if you want to restrict the number of characters the user can enter."}}}},e={args:{source:r}},n={args:{source:u}};var t,a,o;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    source: source
  }
} satisfies Story`,...(o=(a=e.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};var i,l,s;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    source: questionSource
  }
} satisfies Story`,...(s=(l=n.parameters)==null?void 0:l.docs)==null?void 0:s.source}}};const v=["Default","Question"];export{e as Default,n as Question,v as __namedExportsOrder,y as default};