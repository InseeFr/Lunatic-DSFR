import{O as y}from"./Orchestrator-CeryebEC.js";import{s as b}from"./sourceComponentSet-BwtW6Pjq.js";import{d as L}from"./index-dZF2CjUm.js";import"./jsx-runtime-Kowmy4gq.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Dk74W0Oi.js";import"./extends-BDbCiz7i.js";import"./InputNumber-HC_3LB2G.js";import"./Input-DMm-Y9XH.js";import"./client-D2oCQSOe.js";import"./getErrorStates-C-Ngk_mI.js";import"./dsfr-Bu8y7YP_.js";import"./index-BtM5VmRH.js";import"./i18n-Bloz8h-o.js";import"./useAnalyticsId-CxjkFw7q.js";import"./themeStringToVariable-DxeQHwF1.js";import"./Button-BWmEEbm4.js";import"./link-BaYVyrkW.js";import"./CheckboxGroup-DfMm_vko.js";import"./Fieldset-CZ-Yy9h9.js";import"./Dropdown-LkUrKZDU.js";import"./Input-B0sWpcFi.js";import"./Radio-BPFyNsRy.js";const E=[{id:"j4nw5cqz",componentType:"Dropdown",mandatory:!1,label:{value:'"In which state do The Simpsons reside?"',type:"VTL|MD"},description:'"The state is within the USA"',response:{name:"STATE"},controls:[{id:"j4nw5cqz",typeOfControl:"CONSISTENCY",criticality:"WARN",control:{value:'not(nvl(STATE,"") = "")',type:"VTL"},errorMessage:{value:'"Please choose a state!"',type:"VTL|MD"},bindingDependencies:["STATE"]}],options:[{value:"1",label:{value:'"Washington"',type:"VTL"}},{value:"2",label:{value:'"Kentucky"',type:"VTL"}},{value:"3",label:{value:'"Ohio"',type:"VTL"}},{value:"4",label:{value:'"Maine"',type:"VTL"}},{value:"5",label:{value:'"North Dakota"',type:"VTL"}},{value:"6",label:{value:'"Florida"',type:"VTL"}},{value:"7",label:{value:'"North Takoma"',type:"VTL"}},{value:"8",label:{value:'"California"',type:"VTL"}},{value:"9",label:{value:'"Texas"',type:"VTL"}},{value:"10",label:{value:'"Massachusetts"',type:"VTL"}},{value:"11",label:{value:'"Nevada"',type:"VTL"}},{value:"12",label:{value:'"Illinois"',type:"VTL"}},{value:"13",label:{value:'"Not in any state, you fool!"',type:"VTL"}}]}],V=[{variableType:"COLLECTED",name:"STATE",componentRef:"j4nw5cqz",values:{PREVIOUS:null,COLLECTED:null,FORCED:null,EDITED:null,INPUTED:null}}],D={components:E,variables:V},h=[{id:"j4nw5cqz",componentType:"Dropdown",mandatory:!1,label:{value:'"Dropdown label"',type:"VTL|MD"},description:'"Dropdown description (non mandatory)"',response:{name:"STATE"},controls:[{id:"j4nw5cqz",typeOfControl:"CONSISTENCY",criticality:"WARN",control:{value:'not(nvl(STATE,"") = "")',type:"VTL"},errorMessage:{value:'"Please choose a state!"',type:"VTL|MD"},bindingDependencies:["STATE"]}],options:[{value:"1",label:{value:'"Dropdown option label"',type:"VTL"}},{value:"2",label:{value:'"Dropdown option label"',type:"VTL"}},{value:"3",label:{value:'"Dropdown option label"',type:"VTL"}},{value:"4",label:{value:'"Dropdown option label"',type:"VTL"}},{value:"5",label:{value:'"Dropdown option label"',type:"VTL"}},{value:"6",label:{value:'"Dropdown option label"',type:"VTL"}}]}],S=[{variableType:"COLLECTED",name:"STATE",componentRef:"j4nw5cqz",values:{PREVIOUS:null,COLLECTED:null,FORCED:null,EDITED:null,INPUTED:null}}],C={components:h,variables:S},w="2",g=[{id:"j4nw5cqz",componentType:"Dropdown",page:"1",mandatory:!1,label:{value:'"In which state do The Simpsons reside?"',type:"VTL|MD"},description:'"The state is within the USA"',response:{name:"STATE"},controls:[{id:"j4nw5cqz",typeOfControl:"CONSISTENCY",criticality:"WARN",control:{value:'not(nvl(STATE,"") = "")',type:"VTL"},errorMessage:{value:'"Please choose a state!"',type:"VTL|MD"},bindingDependencies:["STATE"]}],options:[{value:"1",label:{value:'"Washington"',type:"VTL"}},{value:"2",label:{value:'"Kentucky"',type:"VTL"}},{value:"3",label:{value:'"Ohio"',type:"VTL"}},{value:"4",label:{value:'"Maine"',type:"VTL"}},{value:"5",label:{value:'"North Dakota"',type:"VTL"}},{value:"6",label:{value:'"Florida"',type:"VTL"}},{value:"7",label:{value:'"North Takoma"',type:"VTL"}},{value:"8",label:{value:'"California"',type:"VTL"}},{value:"9",label:{value:'"Texas"',type:"VTL"}},{value:"10",label:{value:'"Massachusetts"',type:"VTL"}},{value:"11",label:{value:'"Nevada"',type:"VTL"}},{value:"12",label:{value:'"Illinois"',type:"VTL"}},{value:"13",label:{value:'"Not in any state, you fool!"',type:"VTL"}}]},{id:"seq",componentType:"Sequence",label:{value:'"Bye!"',type:"VTL|MD"},conditionFilter:{value:"true",type:"VTL"},page:"2"}],O=[{variableType:"COLLECTED",name:"STATE",componentRef:"j4nw5cqz",values:{PREVIOUS:null,COLLECTED:null,FORCED:null,EDITED:null,INPUTED:null}}],f={maxPage:w,components:g,variables:O},Z={title:"Orchestrated Components/Dropdown",component:y,argTypes:L,parameters:{docs:{description:{story:"This component should be used when you want the user to select an option in a list of more than 3 options."}}}},e={args:{source:D}},a={parameters:{docs:{description:{story:"Click next to make the error appear"}}},args:{source:f}},o={parameters:{docs:{description:{story:"Click next to make the error appear"}}},args:{source:C}},t={parameters:{docs:{description:{story:"You can use a dropdown within a component set."}}},args:{source:b}};var l,n,r;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    source: source
  }
}`,...(r=(n=e.parameters)==null?void 0:n.docs)==null?void 0:r.source}}};var s,p,i;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Click next to make the error appear"
      }
    }
  },
  args: {
    source: sourceWithError
  }
}`,...(i=(p=a.parameters)==null?void 0:p.docs)==null?void 0:i.source}}};var u,c,T;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Click next to make the error appear"
      }
    }
  },
  args: {
    source: sourceSkeleton
  }
}`,...(T=(c=o.parameters)==null?void 0:c.docs)==null?void 0:T.source}}};var m,v,d;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "You can use a dropdown within a component set."
      }
    }
  },
  args: {
    source: sourceComponentSet
  }
}`,...(d=(v=t.parameters)==null?void 0:v.docs)==null?void 0:d.source}}};const ee=["Default","WithError","Skeleton","InComponentSet"];export{e as Default,t as InComponentSet,o as Skeleton,a as WithError,ee as __namedExportsOrder,Z as default};
