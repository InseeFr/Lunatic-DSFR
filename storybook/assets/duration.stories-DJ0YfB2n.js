import{O as T}from"./Orchestrator-DSdYxyXe.js";import"./index-9t-h-7t7.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-B8XB3FuZ.js";import"./i18n-B2NgqSMW.js";import"./inheritsLoose-Bp8pAaMb.js";const d={cleaning:{},components:[{id:"kxi788",componentType:"Duration",mandatory:!1,format:"PnYnM",page:"1",label:{value:'"➡ 1. " || "Duration (format: PnYnM) "',type:"VTL|MD"},description:{value:'"Description"',type:"VTL|MD"},conditionFilter:{value:"true",type:"VTL"},response:{name:"DUREE"}}],variables:[{variableType:"COLLECTED",name:"DUREE",values:{COLLECTED:null}}],pagination:"question",resizing:{},label:{type:"VTL|MD",value:"Test-Dylan"},lunaticModelVersion:"2.5.0",modele:"TESTDYLAN",enoCoreVersion:"2.7.1",generatingDate:"06-03-2024 12:46:44",missing:!1,id:"lsvuvtbg",maxPage:"1"},m={cleaning:{},components:[{id:"kxi788",componentType:"Duration",mandatory:!1,format:"PTnHnM",page:"1",label:{value:'"➡ 1. " || "Duration (format: PTnHnM) "',type:"VTL|MD"},description:{value:'"Description"',type:"VTL|MD"},conditionFilter:{value:"true",type:"VTL"},response:{name:"DUREE"}}],variables:[{variableType:"COLLECTED",name:"DUREE",values:{COLLECTED:"PT12H50M"}}],pagination:"question",resizing:{},label:{type:"VTL|MD",value:"Test-Dylan"},lunaticModelVersion:"2.5.0",modele:"TESTDYLAN",enoCoreVersion:"2.7.1",generatingDate:"06-03-2024 12:46:44",missing:!1,id:"lsvuvtbg",maxPage:"1"},E={cleaning:{},maxPage:"2",variables:[{variableType:"COLLECTED",name:"DUREE",values:{COLLECTED:null}},{variableType:"COLLECTED",name:"DUREE1",values:{COLLECTED:null}},{variableType:"COLLECTED",name:"DUREE2",values:{COLLECTED:null}}],components:[{componentType:"Question",id:"idQuestion",page:"1",label:{type:"VTL|MD",value:'"Label de la Question"'},description:{type:"VTL|MD",value:'"Description de la question"'},declarations:[{declarationType:"HELP",id:"idQuestion-help1",label:{type:"VTL|MD",value:'"Label de la déclaration en position : `BEFORE_QUESTION_TEXT`"'},position:"BEFORE_QUESTION_TEXT"},{declarationType:"HELP",id:"idQuestion-help3",label:{type:"VTL|MD",value:'"Label de la déclaration en position  en position : `AFTER_QUESTION_TEXT`"'},position:"AFTER_QUESTION_TEXT"}],components:[{id:"kxi788",componentType:"Duration",mandatory:!1,format:"PnYnM",conditionFilter:{value:"true",type:"VTL"},response:{name:"DUREE"}}]},{componentType:"Question",id:"idQuestion2",page:"2",label:{type:"VTL|MD",value:'"Question avec deux composants Duration"'},description:{type:"VTL|MD",value:'"Description de la question"'},declarations:[{declarationType:"HELP",id:"idQuestion-help1",label:{type:"VTL|MD",value:'"Label de la déclaration en position : `BEFORE_QUESTION_TEXT`"'},position:"BEFORE_QUESTION_TEXT"},{declarationType:"HELP",id:"idQuestion-help3",label:{type:"VTL|MD",value:'"Label de la déclaration en position  en position : `AFTER_QUESTION_TEXT`"'},position:"AFTER_QUESTION_TEXT"}],components:[{id:"duration1",componentType:"Duration",mandatory:!1,format:"PnYnM",label:{value:'"Label du composant Duration 1"',type:"VTL|MD"},description:{value:'"Description du composant Duration"',type:"VTL|MD"},conditionFilter:{value:"true",type:"VTL"},response:{name:"DUREE1"}},{id:"duration2",componentType:"Duration",mandatory:!1,format:"PnYnM",label:{value:'"Label du composant Duration 2"',type:"VTL|MD"},description:{value:'"Description du composant Duration"',type:"VTL|MD"},conditionFilter:{value:"true",type:"VTL"},response:{name:"DUREE2"}}]}],pagination:"question",resizing:{},label:{type:"VTL|MD",value:"Test-Dylan"},lunaticModelVersion:"2.5.0",modele:"TESTDYLAN",enoCoreVersion:"2.7.1",generatingDate:"06-03-2024 12:46:44",id:"lsvuvtbg"},V={title:"Components/Duration",component:T,parameters:{docs:{description:{component:"This component should be used when you want the user to enter a duration. We support duration in Year and month or Hours and minutes"}}}},e={args:{source:d}},o={args:{source:m}},a={args:{source:E}};var n,t,i;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    source: dateSource
  }
} satisfies Story`,...(i=(t=e.parameters)==null?void 0:t.docs)==null?void 0:i.source}}};var r,s,l;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    source: timeSource
  }
} satisfies Story`,...(l=(s=o.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};var p,u,c;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    source: questionSource
  }
} satisfies Story`,...(c=(u=a.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};const O=["DateStory","TimeStory","Question"];export{e as DateStory,a as Question,o as TimeStory,O as __namedExportsOrder,V as default};
