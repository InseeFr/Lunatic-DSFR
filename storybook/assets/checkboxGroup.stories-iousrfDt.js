import{d as p}from"./dsfr-Bc9829BW.js";import{C as u}from"./CheckboxGroup-CU14LCSF.js";import"./index-CAmJLBaW.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./jsx-runtime-Kowmy4gq.js";import"./getErrorStates-C-Ngk_mI.js";import"./symToStr-B1SJCDhJ.js";import"./Fieldset-r1EXLwzM.js";import"./useAnalyticsId-CxjkFw7q.js";const x={title:"Components/Checkbox",component:u,argTypes:p},e={args:{id:"ErrorMessage",disabled:!1,label:"Which of these cities are in France?",description:"If you select a city that is not in France, an error will appear!",options:[{label:"Paris",description:"Paris is the capital city!",checked:!1,name:"Paris",onClick:()=>{console.log("hi")}},{label:"Bordeaux",description:"Bordeaux is where you can find great wine!",checked:!1,name:"Bordeaux",onClick:()=>{console.log("hi")}},{label:"Geneva",description:"There is great Swiss chocolate in Geneva",checked:!0,name:"Geneva",onClick:()=>{console.log("hi")}}],errors:[{id:"ErrorMessage",criticality:"WARN",typeOfControl:"CONSISTENCY",formula:"OPT3 = false",labelFormula:"Take another guess",errorMessage:"Take another guess"}]}},n={args:{id:"SuccessMessage",disabled:!1,label:"Which of these cities are in France?",description:"If you select a city that is not in France, an error will appear!",options:[{label:"Paris",description:"Paris is the capital city!",checked:!0,name:"Paris",onClick:()=>{console.log("hi")}},{label:"Bordeaux",description:"Bordeaux is where you can find great wine!",checked:!0,name:"Bordeaux",onClick:()=>{console.log("hi")}},{label:"Geneva",description:"There is great Swiss chocolate in Geneva",checked:!1,name:"Geneva",onClick:()=>{console.log("hi")}}],errors:[{id:"SuccessMessage",criticality:"INFO",typeOfControl:"CONSISTENCY",formula:'(nvl(NB,"") = 5)',labelFormula:"Great work!",errorMessage:"Great work!"}]}},a={args:{id:"DisabledMessage",disabled:!0,label:"Which of these cities are in France?",description:"If you select a city that is not in France, an error will appear!",errors:[],options:[{label:"Paris",description:"Paris is the capital city!",checked:!0,name:"Paris",onClick:()=>{console.log("hi")}},{label:"Bordeaux",description:"Bordeaux is where you can find great wine!",checked:!1,name:"Bordeaux",onClick:()=>{console.log("hi")}},{label:"Geneva",description:"There is great Swiss chocolate in Geneva",checked:!1,name:"Geneva",onClick:()=>{console.log("hi")}}]}};var r,i,o;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    id: "ErrorMessage",
    disabled: false,
    label: "Which of these cities are in France?",
    description: "If you select a city that is not in France, an error will appear!",
    options: [{
      label: "Paris",
      description: "Paris is the capital city!",
      checked: false,
      name: "Paris",
      onClick: () => {
        console.log("hi");
      }
    }, {
      label: "Bordeaux",
      description: "Bordeaux is where you can find great wine!",
      checked: false,
      name: "Bordeaux",
      onClick: () => {
        console.log("hi");
      }
    }, {
      label: "Geneva",
      description: "There is great Swiss chocolate in Geneva",
      checked: true,
      name: "Geneva",
      onClick: () => {
        console.log("hi");
      }
    }],
    errors: [{
      id: "ErrorMessage",
      criticality: "WARN",
      typeOfControl: "CONSISTENCY",
      formula: "OPT3 = false",
      labelFormula: "Take another guess",
      errorMessage: "Take another guess"
    }]
  }
}`,...(o=(i=e.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};var s,c,l;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    id: "SuccessMessage",
    disabled: false,
    label: "Which of these cities are in France?",
    description: "If you select a city that is not in France, an error will appear!",
    options: [{
      label: "Paris",
      description: "Paris is the capital city!",
      checked: true,
      name: "Paris",
      onClick: () => {
        console.log("hi");
      }
    }, {
      label: "Bordeaux",
      description: "Bordeaux is where you can find great wine!",
      checked: true,
      name: "Bordeaux",
      onClick: () => {
        console.log("hi");
      }
    }, {
      label: "Geneva",
      description: "There is great Swiss chocolate in Geneva",
      checked: false,
      name: "Geneva",
      onClick: () => {
        console.log("hi");
      }
    }],
    errors: [{
      id: "SuccessMessage",
      criticality: "INFO",
      typeOfControl: "CONSISTENCY",
      formula: '(nvl(NB,"") = 5)',
      labelFormula: "Great work!",
      errorMessage: "Great work!"
    }]
  }
}`,...(l=(c=n.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var t,d,h;a.parameters={...a.parameters,docs:{...(t=a.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    id: "DisabledMessage",
    disabled: true,
    label: "Which of these cities are in France?",
    description: "If you select a city that is not in France, an error will appear!",
    errors: [],
    options: [{
      label: "Paris",
      description: "Paris is the capital city!",
      checked: true,
      name: "Paris",
      onClick: () => {
        console.log("hi");
      }
    }, {
      label: "Bordeaux",
      description: "Bordeaux is where you can find great wine!",
      checked: false,
      name: "Bordeaux",
      onClick: () => {
        console.log("hi");
      }
    }, {
      label: "Geneva",
      description: "There is great Swiss chocolate in Geneva",
      checked: false,
      name: "Geneva",
      onClick: () => {
        console.log("hi");
      }
    }]
  }
}`,...(h=(d=a.parameters)==null?void 0:d.docs)==null?void 0:h.source}}};const v=["Error","Success","Disabled"];export{a as Disabled,e as Error,n as Success,v as __namedExportsOrder,x as default};
