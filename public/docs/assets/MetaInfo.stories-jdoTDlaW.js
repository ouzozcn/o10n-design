import{j as n}from"./jsx-runtime-BI5MxDfm.js";import"./iframe-B_NqXYdT.js";const I=({title:i,firstMeta:O,secondMeta:b,thirdMeta:q,fourthMeta:D,fifthMeta:E})=>{const L=[O,b,q,D,E].filter(Boolean);return n.jsxs("div",{className:"flex flex-col gap-1 justify-start items-center md:items-start",children:[i&&n.jsx("div",{className:"text-stone-600 text-base font-bold font-sans",children:i}),L.map((N,F)=>n.jsx("div",{className:"text-stone-900 text-base font-normal font-sans",children:N},F))]})};I.__docgenInfo={description:"",methods:[],displayName:"MetaInfo",props:{title:{required:!1,tsType:{name:"string"},description:""},firstMeta:{required:!1,tsType:{name:"string"},description:""},secondMeta:{required:!1,tsType:{name:"string"},description:""},thirdMeta:{required:!1,tsType:{name:"string"},description:""},fourthMeta:{required:!1,tsType:{name:"string"},description:""},fifthMeta:{required:!1,tsType:{name:"string"},description:""}}};const A={title:"Components/Meta Info",component:I,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{title:{control:"text",description:"The title displayed above the meta information"},firstMeta:{control:"text",description:"First meta information"},secondMeta:{control:"text",description:"Second meta information"},thirdMeta:{control:"text",description:"Third meta information"},fourthMeta:{control:"text",description:"Fourth meta information"},fifthMeta:{control:"text",description:"Fifth meta information"}}},e={args:{title:"Project Details",firstMeta:"Type: Web App",secondMeta:"Status: In Progress",thirdMeta:"Team: 5 people",fourthMeta:"Launched: 2024",fifthMeta:"Stack: React, Node.js"}},t={args:{title:"Meta Only"}},a={args:{firstMeta:"Single meta field"}},r={args:{title:"Quick Facts",firstMeta:"Design System",secondMeta:"2024",thirdMeta:"Remote"}},s={args:{}},o={args:{title:"Long Meta Example",firstMeta:"This is a very long meta information field to demonstrate how the component handles overflow and wrapping in the layout.",secondMeta:"Another long meta field with even more details and explanations for the user to read."}};var c,d,m;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    title: 'Project Details',
    firstMeta: 'Type: Web App',
    secondMeta: 'Status: In Progress',
    thirdMeta: 'Team: 5 people',
    fourthMeta: 'Launched: 2024',
    fifthMeta: 'Stack: React, Node.js'
  }
}`,...(m=(d=e.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var l,p,f;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    title: 'Meta Only'
  }
}`,...(f=(p=t.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};var h,u,g;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    firstMeta: 'Single meta field'
  }
}`,...(g=(u=a.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var M,x,y;r.parameters={...r.parameters,docs:{...(M=r.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    title: 'Quick Facts',
    firstMeta: 'Design System',
    secondMeta: '2024',
    thirdMeta: 'Remote'
  }
}`,...(y=(x=r.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var T,S,j;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {}
}`,...(j=(S=s.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};var v,w,W;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    title: 'Long Meta Example',
    firstMeta: 'This is a very long meta information field to demonstrate how the component handles overflow and wrapping in the layout.',
    secondMeta: 'Another long meta field with even more details and explanations for the user to read.'
  }
}`,...(W=(w=o.parameters)==null?void 0:w.docs)==null?void 0:W.source}}};const P=["Default","WithTitleOnly","WithOneMeta","WithThreeMetas","Empty","LongText"];export{e as Default,s as Empty,o as LongText,a as WithOneMeta,r as WithThreeMetas,t as WithTitleOnly,P as __namedExportsOrder,A as default};
