import{j as e}from"./jsx-runtime-DeMZEkK6.js";import{n as U}from"./image-BviCvJ8K.js";import{T as W}from"./Tag-BImzlU51.js";import"./iframe-fGtxDn4l.js";import"./use-merged-ref-DPGjOAYH.js";const D=({title:P,children:I,hasBackgroundImage:i=!1,backgroundImageUrl:l,tags:k=[]})=>e.jsxs("div",{className:"relative w-full min-h-[400px] h-[400px] flex flex-col justify-end items-start gap-2",children:[i&&l&&e.jsx("div",{className:"absolute inset-0 z-0",children:e.jsx(U,{src:l,alt:"",fill:!0,className:"object-cover",priority:!0})}),!i&&e.jsx("div",{className:"absolute inset-0 bg-red-200"}),e.jsxs("div",{className:"relative z-10 w-full",children:[e.jsx("div",{className:"bg-amber-50 w-full",children:I}),e.jsxs("div",{className:"h-[147px] p-8 flex flex-col justify-start items-start gap-2",children:[e.jsx("h2",{className:"w-full text-wrap text-stone-900 text-[32px] font-sans font-normal",children:P}),e.jsx("div",{className:"flex flex-wrap justify-start items-center gap-4",children:k.map((R,S)=>e.jsx(W,{...R},S))})]})]})]});D.__docgenInfo={description:"",methods:[],displayName:"Hauscard",props:{title:{required:!0,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},hasBackgroundImage:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},backgroundImageUrl:{required:!1,tsType:{name:"string"},description:""},tags:{required:!1,tsType:{name:"Array",elements:[{name:"TagProps"}],raw:"TagProps[]"},description:"",defaultValue:{value:"[]",computed:!1}}}};const L={title:"Components/Hauscard",component:D,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{title:{control:"text",description:"The title of the card"},hasBackgroundImage:{control:"boolean",description:"Whether to show a background image"},backgroundImageUrl:{control:"text",description:"URL of the background image"},tags:{control:"object",description:"Array of tags to display"},children:{control:"object",description:"Content to display in the card"}}},t={args:{title:"Project Title",tags:[{label:"Design",type:"lime",size:"medium"},{label:"Development",type:"amber",size:"medium"}]}},a={args:{title:"Featured Project",hasBackgroundImage:!0,backgroundImageUrl:"https://picsum.photos/800/400",tags:[{label:"Featured",type:"red",size:"medium"},{label:"New",type:"teal",size:"medium"}]}},s={args:{title:"Simple Project"}},r={args:{title:"Complex Project",tags:[{label:"Design",type:"lime",size:"medium"},{label:"Development",type:"amber",size:"medium"},{label:"Research",type:"teal",size:"medium"},{label:"UX",type:"purple",size:"medium"},{label:"UI",type:"lime",size:"medium"}]}},n={args:{title:"This is a very long project title that demonstrates how the component handles",tags:[{label:"Design",type:"lime",size:"medium"}]}},o={args:{title:"Custom Content Project",tags:[{label:"Custom",type:"amber",size:"medium"}]}};var m,c,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    title: 'Project Title',
    tags: [{
      label: 'Design',
      type: 'lime',
      size: 'medium'
    }, {
      label: 'Development',
      type: 'amber',
      size: 'medium'
    }]
  }
}`,...(p=(c=t.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var d,u,g;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    title: 'Featured Project',
    hasBackgroundImage: true,
    backgroundImageUrl: 'https://picsum.photos/800/400',
    tags: [{
      label: 'Featured',
      type: 'red',
      size: 'medium'
    }, {
      label: 'New',
      type: 'teal',
      size: 'medium'
    }]
  }
}`,...(g=(u=a.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var h,b,y;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    title: 'Simple Project'
  }
}`,...(y=(b=s.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var f,x,j;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    title: 'Complex Project',
    tags: [{
      label: 'Design',
      type: 'lime',
      size: 'medium'
    }, {
      label: 'Development',
      type: 'amber',
      size: 'medium'
    }, {
      label: 'Research',
      type: 'teal',
      size: 'medium'
    }, {
      label: 'UX',
      type: 'purple',
      size: 'medium'
    }, {
      label: 'UI',
      type: 'lime',
      size: 'medium'
    }]
  }
}`,...(j=(x=r.parameters)==null?void 0:x.docs)==null?void 0:j.source}}};var z,T,v;n.parameters={...n.parameters,docs:{...(z=n.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    title: 'This is a very long project title that demonstrates how the component handles',
    tags: [{
      label: 'Design',
      type: 'lime',
      size: 'medium'
    }]
  }
}`,...(v=(T=n.parameters)==null?void 0:T.docs)==null?void 0:v.source}}};var C,N,w;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    title: 'Custom Content Project',
    tags: [{
      label: 'Custom',
      type: 'amber',
      size: 'medium'
    }]
  }
}`,...(w=(N=o.parameters)==null?void 0:N.docs)==null?void 0:w.source}}};const A=["Default","WithBackgroundImage","WithoutTags","WithManyTags","LongTitle","CustomContent"];export{o as CustomContent,t as Default,n as LongTitle,a as WithBackgroundImage,r as WithManyTags,s as WithoutTags,A as __namedExportsOrder,L as default};
