import{O as s}from"./Orchestrator-HhnjqYb9.js";import"./___vite-browser-external_commonjs-proxy-CbhpTJ3e.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-B8XB3FuZ.js";import"./i18n-Dz2osCXP.js";import"./inheritsLoose-au4_wMgD.js";const E={componentType:"Questionnaire",variables:[{variableType:"COLLECTED",values:{COLLECTED:null,EDITED:null,FORCED:null,INPUTTED:null,PREVIOUS:null},name:"TABLEAUCLA11"},{variableType:"COLLECTED",values:{COLLECTED:null,EDITED:null,FORCED:null,INPUTTED:null,PREVIOUS:null},name:"TABLEAUCLA21"},{variableType:"COLLECTED",values:{COLLECTED:null,EDITED:null,FORCED:null,INPUTTED:null,PREVIOUS:null},name:"TABLEAUCLA31"},{variableType:"COLLECTED",values:{COLLECTED:null,EDITED:null,FORCED:null,INPUTTED:null,PREVIOUS:null},name:"TABLEAUCLA12"},{variableType:"COLLECTED",values:{COLLECTED:null,EDITED:null,FORCED:null,INPUTTED:null,PREVIOUS:null},name:"TABLEAUCLA22"},{variableType:"COLLECTED",values:{COLLECTED:null,EDITED:null,FORCED:null,INPUTTED:null,PREVIOUS:null},name:"TABLEAUCLA32"},{variableType:"COLLECTED",values:{COLLECTED:null,EDITED:null,FORCED:null,INPUTTED:null,PREVIOUS:null},name:"TABLEAUCLA13"},{variableType:"COLLECTED",values:{COLLECTED:null,EDITED:null,FORCED:null,INPUTTED:null,PREVIOUS:null},name:"TABLEAUCLA23"},{variableType:"COLLECTED",values:{COLLECTED:null,EDITED:null,FORCED:null,INPUTTED:null,PREVIOUS:null},name:"TABLEAUCLA33"},{variableType:"CALCULATED",expression:{type:"VTL",value:"true"},name:"FILTER_RESULT_LIBELLEDUT"},{variableType:"CALCULATED",expression:{type:"VTL",value:"true"},name:"FILTER_RESULT_TABLEAUCLA"}],components:[{componentType:"Table",controls:[{criticality:"INFO",errorMessage:{type:"VTL|MD",value:'"GLOBAL: La valeur de TABLEAUCLA33 doit être comprise entre 0 et 10."'},typeOfControl:"FORMAT",control:{type:"VTL",value:"not(not(isnull(TABLEAUCLA33)) and (0>TABLEAUCLA33 or 10<TABLEAUCLA33))"},id:"luwhnbxk-RDOP-luwhcilc-format-borne-inf-sup"},{criticality:"INFO",errorMessage:{type:"VTL|MD",value:'"Le nombre doit comporter au maximum 0 chiffre(s) après la virgule."'},typeOfControl:"FORMAT",control:{type:"VTL",value:"not(not(isnull(TABLEAUCLA33))  and round(TABLEAUCLA33,0)<>TABLEAUCLA33)"},id:"luwhnbxk-RDOP-luwhcilc-format-decimal"},{criticality:"INFO",errorMessage:{type:"VTL|MD",value:'" La valeur doit être comprise entre 0 et 10."'},typeOfControl:"FORMAT",control:{type:"VTL",value:"not(not(isnull(TABLEAUCLA23)) and (0>TABLEAUCLA23 or 10<TABLEAUCLA23))"},id:"luwhnbxk-RDOP-luwh4tva-format-borne-inf-sup"},{criticality:"INFO",errorMessage:{type:"VTL|MD",value:'"Le nombre doit comporter au maximum 0 chiffre(s) après la virgule."'},typeOfControl:"FORMAT",control:{type:"VTL",value:"not(not(isnull(TABLEAUCLA23))  and round(TABLEAUCLA23,0)<>TABLEAUCLA23)"},id:"luwhnbxk-RDOP-luwh4tva-format-decimal"},{criticality:"INFO",errorMessage:{type:"VTL|MD",value:'" La valeur doit être comprise entre 0 et 10."'},typeOfControl:"FORMAT",control:{type:"VTL",value:"not(not(isnull(TABLEAUCLA13)) and (0>TABLEAUCLA13 or 10<TABLEAUCLA13))"},id:"luwhnbxk-RDOP-luwh7btb-format-borne-inf-sup"},{criticality:"INFO",errorMessage:{type:"VTL|MD",value:'"Le nombre doit comporter au maximum 0 chiffre(s) après la virgule."'},typeOfControl:"FORMAT",control:{type:"VTL",value:"not(not(isnull(TABLEAUCLA13))  and round(TABLEAUCLA13,0)<>TABLEAUCLA13)"},id:"luwhnbxk-RDOP-luwh7btb-format-decimal"}],positioning:"HORIZONTAL",header:[{label:{type:"VTL|MD",value:""}},{label:{type:"VTL|MD",value:'"Domaines"'}},{label:{type:"VTL|MD",value:'"Activité"'}},{label:{type:"VTL|MD",value:`"Chiffre d'affaire"`}}],conditionFilter:{type:"VTL",value:"true"},id:"luwhnbxk",page:"1",label:{type:"VTL|MD",value:'"Tableau classique"'},body:[[{label:{type:"VTL|MD",value:'"Libelle 1"'}},{componentType:"Input",response:{name:"TABLEAUCLA11"},id:"luwhnbxk-RDOP-luwhcrpg",maxLength:249,controls:[{criticality:"ERROR",errorMessage:{type:"VTL",value:'"Le domaine ne doit pas être vide"'},typeOfControl:"",control:{type:"VTL",value:"not(isnull(TABLEAUCLA11))"}}]},{componentType:"Input",response:{name:"TABLEAUCLA12"},id:"luwhnbxk-RDOP-luwhnkls",maxLength:249},{componentType:"InputNumber",unit:"€",min:0,max:9999,response:{name:"TABLEAUCLA13"},decimals:0,id:"luwhnbxk-RDOP-luwh7btb",controls:[{criticality:"INFO",errorMessage:{type:"VTL|MD",value:'"INPUTNUMBER: La valeur de TABLEAUCLA33 doit être comprise entre 0 et 10."'},typeOfControl:"FORMAT",control:{type:"VTL",value:"not(not(isnull(TABLEAUCLA33)) and (0>TABLEAUCLA33 or 10<TABLEAUCLA33))"},id:"luwhnbxk-RDOP-luwhcilc-format-borne-inf-sup"}]}],[{label:{type:"VTL|MD",value:'"Libelle 2"'},value:"2"},{componentType:"Input",response:{name:"TABLEAUCLA21"},id:"luwhnbxk-RDOP-luwhmbp1",maxLength:249},{componentType:"Input",response:{name:"TABLEAUCLA22"},id:"luwhnbxk-RDOP-luwhlejc",maxLength:249},{componentType:"InputNumber",unit:"€",min:0,max:9999,response:{name:"TABLEAUCLA23"},decimals:0,id:"luwhnbxk-RDOP-luwh4tva"}],[{label:{type:"VTL|MD",value:'"Libelle 3"'},value:"3"},{componentType:"Input",response:{name:"TABLEAUCLA31"},id:"luwhnbxk-RDOP-luwhalhn",maxLength:249},{componentType:"Input",response:{name:"TABLEAUCLA32"},id:"luwhnbxk-RDOP-luwhd3mk",maxLength:249},{componentType:"InputNumber",unit:"€",min:0,max:9999,response:{name:"TABLEAUCLA33"},decimals:0,id:"luwhnbxk-RDOP-luwhcilc"}]],mandatory:!1},{id:"seq",componentType:"Sequence",label:{value:'"Bye!"',type:"VTL|MD"},conditionFilter:{value:"true",type:"VTL"},page:"2"}],pagination:"question",lunaticModelVersion:"3.5.1",modele:"TESTDYLAN",enoCoreVersion:"3.18.5",generatingDate:"12-04-2024 10:52:10",resizing:{},id:"luv7k9hw2",label:{type:"VTL|MD",value:"Test Dylan"},maxPage:"2"},A={componentType:"Questionnaire",variables:[{variableType:"COLLECTED",values:{COLLECTED:[null,null],EDITED:[],FORCED:[],INPUTTED:[],PREVIOUS:[]},name:"DOMAINES"},{variableType:"COLLECTED",values:{COLLECTED:[null,null],EDITED:[],FORCED:[],INPUTTED:[],PREVIOUS:[]},name:"ACTIVITES"},{variableType:"COLLECTED",values:{COLLECTED:[null,null],EDITED:[],FORCED:[],INPUTTED:[],PREVIOUS:[]},name:"CA"},{variableType:"CALCULATED",expression:{type:"VTL",value:"count(DOMAINES)"},name:"NB_DOMAINES"},{variableType:"CALCULATED",expression:{type:"VTL",value:"count(ACTIVITES)"},name:"NB_ACTIVITES"}],components:[{componentType:"RosterForLoop",components:[{componentType:"Input",response:{name:"DOMAINES"},id:"luwgwkow-RDOP-luwhao3o",maxLength:249,page:"1",label:{type:"VTL",value:""},controls:[{criticality:"ERROR",errorMessage:{type:"VTL",value:'"Le domaine ne doit pas être vide"'},typeOfControl:"",control:{type:"VTL",value:"not(isnull(DOMAINES))"}}]},{componentType:"Input",response:{name:"ACTIVITES"},id:"luwgwkow-RDOP-luwhb9vm",maxLength:249,page:"1",label:{type:"VTL",value:""},controls:[{criticality:"ERROR",errorMessage:{type:"VTL",value:`"L'activité ne doit pas être vide"`},typeOfControl:"",control:{type:"VTL",value:"not(isnull(ACTIVITES))"}}]},{componentType:"InputNumber",unit:"€",min:0,max:999999,response:{name:"CA"},decimals:0,id:"luwgwkow-RDOP-luwh6zes",page:"1",label:{type:"VTL",value:""}}],controls:[{type:"ROW",criticality:"ERROR",errorMessage:{type:"VTL|MD",value:'"Row level : CA > 10"'},typeOfControl:"FORMAT",control:{type:"VTL",value:"CA > 10"},id:"luwgwkow-RDOP-luwh6zes-format-borne-inf-sup"},{criticality:"ERROR",errorMessage:{type:"VTL|MD",value:'"Global level : Vous devez entrer 3 Domaines minimum"'},typeOfControl:"FORMAT",control:{type:"VTL",value:"NB_DOMAINES >= 3"},id:"kfxmjupm-CI-1"},{criticality:"ERROR",errorMessage:{type:"VTL|MD",value:'"Global level : Vous devez entrer 3 Activité minimum"'},typeOfControl:"FORMAT",control:{type:"VTL",value:"NB_ACTIVITES >= 3"},id:"kfxmjupm-CI-2"}],positioning:"HORIZONTAL",header:[{label:{type:"VTL|MD",value:'"Domaines"'}},{label:{type:"VTL|MD",value:'"Activité"'}},{label:{type:"VTL|MD",value:`"Chiffre d'affaire"`}}],conditionFilter:{type:"VTL",value:"true"},id:"luwgwkow",page:"1",label:{type:"VTL|MD",value:'"Tableau dynamic"'},lines:{min:{type:"VTL",value:"2"},max:{type:"VTL",value:"10"}},mandatory:!1},{id:"seq",componentType:"Sequence",label:{value:'"Bye!"',type:"VTL|MD"},conditionFilter:{value:"true",type:"VTL"},page:"2"}],pagination:"question",lunaticModelVersion:"3.5.1",modele:"TESTDYLAN",enoCoreVersion:"3.18.5",generatingDate:"12-04-2024 10:52:10",resizing:{},id:"luv7k9hw2",label:{type:"VTL|MD",value:"Test Dylan"},maxPage:"2"},m={cleaning:{},maxPage:"1",variables:[{variableType:"COLLECTED",values:{COLLECTED:null,EDITED:null,FORCED:null,INPUTTED:null,PREVIOUS:null},name:"TABLEAUCLA11"},{variableType:"COLLECTED",values:{COLLECTED:null,EDITED:null,FORCED:null,INPUTTED:null,PREVIOUS:null},name:"TABLEAUCLA21"},{variableType:"COLLECTED",values:{COLLECTED:null,EDITED:null,FORCED:null,INPUTTED:null,PREVIOUS:null},name:"TABLEAUCLA31"},{variableType:"COLLECTED",values:{COLLECTED:null,EDITED:null,FORCED:null,INPUTTED:null,PREVIOUS:null},name:"TABLEAUCLA12"},{variableType:"COLLECTED",values:{COLLECTED:null,EDITED:null,FORCED:null,INPUTTED:null,PREVIOUS:null},name:"TABLEAUCLA22"},{variableType:"COLLECTED",values:{COLLECTED:null,EDITED:null,FORCED:null,INPUTTED:null,PREVIOUS:null},name:"TABLEAUCLA32"},{variableType:"COLLECTED",values:{COLLECTED:null,EDITED:null,FORCED:null,INPUTTED:null,PREVIOUS:null},name:"TABLEAUCLA13"},{variableType:"COLLECTED",values:{COLLECTED:null,EDITED:null,FORCED:null,INPUTTED:null,PREVIOUS:null},name:"TABLEAUCLA23"},{variableType:"COLLECTED",values:{COLLECTED:null,EDITED:null,FORCED:null,INPUTTED:null,PREVIOUS:null},name:"TABLEAUCLA33"},{variableType:"CALCULATED",expression:{type:"VTL",value:"true"},name:"FILTER_RESULT_LIBELLEDUT"},{variableType:"CALCULATED",expression:{type:"VTL",value:"true"},name:"FILTER_RESULT_TABLEAUCLA"}],components:[{componentType:"Question",id:"idQuestion",page:"1",label:{type:"VTL|MD",value:'"Label de la Question"'},description:{type:"VTL|MD",value:'"Description de la question"'},declarations:[{declarationType:"HELP",id:"idQuestion-help1",label:{type:"VTL|MD",value:'"Label de la déclaration en position : `BEFORE_QUESTION_TEXT`"'},position:"BEFORE_QUESTION_TEXT"},{declarationType:"HELP",id:"idQuestion-help3",label:{type:"VTL|MD",value:'"Label de la déclaration en position  en position : `AFTER_QUESTION_TEXT`"'},position:"AFTER_QUESTION_TEXT"}],components:[{componentType:"Table",controls:[{criticality:"INFO",errorMessage:{type:"VTL|MD",value:'" La valeur doit être comprise entre 0 et 9999."'},typeOfControl:"FORMAT",control:{type:"VTL",value:"not(not(isnull(TABLEAUCLA33)) and (0>TABLEAUCLA33 or 9999<TABLEAUCLA33))"},id:"luwhnbxk-RDOP-luwhcilc-format-borne-inf-sup"},{criticality:"INFO",errorMessage:{type:"VTL|MD",value:'"Le nombre doit comporter au maximum 0 chiffre(s) après la virgule."'},typeOfControl:"FORMAT",control:{type:"VTL",value:"not(not(isnull(TABLEAUCLA33))  and round(TABLEAUCLA33,0)<>TABLEAUCLA33)"},id:"luwhnbxk-RDOP-luwhcilc-format-decimal"},{criticality:"INFO",errorMessage:{type:"VTL|MD",value:'" La valeur doit être comprise entre 0 et 9999."'},typeOfControl:"FORMAT",control:{type:"VTL",value:"not(not(isnull(TABLEAUCLA23)) and (0>TABLEAUCLA23 or 9999<TABLEAUCLA23))"},id:"luwhnbxk-RDOP-luwh4tva-format-borne-inf-sup"},{criticality:"INFO",errorMessage:{type:"VTL|MD",value:'"Le nombre doit comporter au maximum 0 chiffre(s) après la virgule."'},typeOfControl:"FORMAT",control:{type:"VTL",value:"not(not(isnull(TABLEAUCLA23))  and round(TABLEAUCLA23,0)<>TABLEAUCLA23)"},id:"luwhnbxk-RDOP-luwh4tva-format-decimal"},{criticality:"INFO",errorMessage:{type:"VTL|MD",value:'" La valeur doit être comprise entre 0 et 9999."'},typeOfControl:"FORMAT",control:{type:"VTL",value:"not(not(isnull(TABLEAUCLA13)) and (0>TABLEAUCLA13 or 9999<TABLEAUCLA13))"},id:"luwhnbxk-RDOP-luwh7btb-format-borne-inf-sup"},{criticality:"INFO",errorMessage:{type:"VTL|MD",value:'"Le nombre doit comporter au maximum 0 chiffre(s) après la virgule."'},typeOfControl:"FORMAT",control:{type:"VTL",value:"not(not(isnull(TABLEAUCLA13))  and round(TABLEAUCLA13,0)<>TABLEAUCLA13)"},id:"luwhnbxk-RDOP-luwh7btb-format-decimal"}],positioning:"HORIZONTAL",hierarchy:{sequence:{id:"luwgeoe5",page:"1",label:{type:"VTL|MD",value:'"I - " || "Sequence"'}}},header:[{label:{type:"VTL|MD",value:""}},{label:{type:"VTL|MD",value:'"Domaines"'}},{label:{type:"VTL|MD",value:'"Activité"'}},{label:{type:"VTL|MD",value:`"Chiffre d'affaire"`}}],conditionFilter:{type:"VTL",value:"true"},id:"luwhnbxk",page:"1",label:{type:"VTL|MD",value:'"Label du composant Table"'},body:[[{label:{type:"VTL|MD",value:'"Libelle 1"'}},{componentType:"Input",response:{name:"TABLEAUCLA11"},id:"luwhnbxk-RDOP-luwhcrpg",maxLength:249},{componentType:"Input",response:{name:"TABLEAUCLA12"},id:"luwhnbxk-RDOP-luwhnkls",maxLength:249},{componentType:"InputNumber",unit:"€",min:0,max:9999,response:{name:"TABLEAUCLA13"},decimals:0,id:"luwhnbxk-RDOP-luwh7btb"}],[{label:{type:"VTL|MD",value:'"Libelle 2"'},value:"2"},{componentType:"Input",response:{name:"TABLEAUCLA21"},id:"luwhnbxk-RDOP-luwhmbp1",maxLength:249},{componentType:"Input",response:{name:"TABLEAUCLA22"},id:"luwhnbxk-RDOP-luwhlejc",maxLength:249},{componentType:"InputNumber",unit:"€",min:0,max:9999,response:{name:"TABLEAUCLA23"},decimals:0,id:"luwhnbxk-RDOP-luwh4tva"}],[{label:{type:"VTL|MD",value:'"Libelle 3"'},value:"3"},{componentType:"Input",response:{name:"TABLEAUCLA31"},id:"luwhnbxk-RDOP-luwhalhn",maxLength:249},{componentType:"Input",response:{name:"TABLEAUCLA32"},id:"luwhnbxk-RDOP-luwhd3mk",maxLength:249},{componentType:"InputNumber",unit:"€",min:0,max:9999,response:{name:"TABLEAUCLA33"},decimals:0,id:"luwhnbxk-RDOP-luwhcilc"}]],mandatory:!1}]}],pagination:"question",resizing:{},label:{type:"VTL|MD",value:"Test-Dylan"},lunaticModelVersion:"2.5.0",modele:"TESTDYLAN",enoCoreVersion:"2.7.1",generatingDate:"06-03-2024 12:46:44",missing:!1,id:"lsvuvtbg"},b={title:"Components/Table",component:s,parameters:{docs:{description:{component:"The Table presents information in a structured format of rows and columns. The data is displayed in a user-friendly, quick-to-scan and interactive way, enabling users to efficiently identify patterns, edit data, and gather insights."}}}},e={args:{source:E}},l={args:{source:A}},n={args:{source:m}};var a,t,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    source
  }
} satisfies Story`,...(o=(t=e.parameters)==null?void 0:t.docs)==null?void 0:o.source}}};var u,r,i;l.parameters={...l.parameters,docs:{...(u=l.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    source: rosterSource
  }
} satisfies Story`,...(i=(r=l.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};var T,L,p;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    source: questionSource
  }
} satisfies Story`,...(p=(L=n.parameters)==null?void 0:L.docs)==null?void 0:p.source}}};const U=["Default","Roster","Question"];export{e as Default,n as Question,l as Roster,U as __namedExportsOrder,b as default};
