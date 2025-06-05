import{j as e}from"./jsx-runtime-BI5MxDfm.js";import{L as ne}from"./link-Cx5nZCsA.js";import{A as oe}from"./Add-knGuaqIq.js";import{c as U}from"./createSvgIcon-DkyYD0zk.js";import"./iframe-B_NqXYdT.js";import"./use-merged-ref-DlaISMlf.js";const ie={primary:"h-auto bg-stone-800 text-neutral-50 hover:bg-stone-900 rounded-md justify-center items-center gap-1 inline-flex",secondary:"h-auto bg-transparent rounded-md border-2 border-stone-900 hover:bg-amber-100 justify-center items-center gap-1 inline-flex",tertiary:"h-auto bg-transparent rounded-md hover:bg-amber-100 justify-center items-center gap-1 inline-flex"},le={small:"px-2 py-2 text-sm",medium:"px-3 py-3 text-md",large:"px-6 py-3 text-lg"},me=a=>a&&/^https?:\/\//.test(a),X=({label:a,type:Y="primary",size:Z="medium",startIcon:h,endIcon:f,isDisabled:y=!1,isLoading:r=!1,fullWidth:$=!1,onClick:ee,to:t,className:ae="",target:re,ariaLabel:te})=>{const se=()=>["inline-flex items-center justify-center rounded",$?"w-full":"w-auto",ie[Y],le[Z],y?"opacity-50 cursor-not-allowed":"",r?"cursor-wait":"","font-sans",ae].filter(Boolean).join(" "),b=()=>e.jsxs(e.Fragment,{children:[h&&e.jsx("span",{className:"mr-2","aria-hidden":"true",children:h}),r?e.jsx("span",{children:"Loading..."}):e.jsx("span",{children:a}),f&&e.jsx("span",{className:"ml-2","aria-hidden":"true",children:f})]}),g={className:se(),onClick:ee,"aria-disabled":y||r,"aria-label":te||a,"aria-busy":r};return t&&me(t)?e.jsx("a",{href:t,target:re||"_blank",rel:"noopener noreferrer",...g,children:b()}):t?e.jsx(ne,{href:t,...g,children:b()}):e.jsx("button",{type:"button",disabled:y||r,...g,children:b()})};X.__docgenInfo={description:"",methods:[],displayName:"Button",props:{label:{required:!0,tsType:{name:"string"},description:""},type:{required:!1,tsType:{name:"union",raw:'"primary" | "secondary" | "tertiary"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"tertiary"'}]},description:"",defaultValue:{value:'"primary"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},startIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},endIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},isDisabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isLoading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},fullWidth:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},to:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},target:{required:!1,tsType:{name:"union",raw:'"_blank" | "_self" | "_parent" | "_top"',elements:[{name:"literal",value:'"_blank"'},{name:"literal",value:'"_self"'},{name:"literal",value:'"_parent"'},{name:"literal",value:'"_top"'}]},description:""},ariaLabel:{required:!1,tsType:{name:"string"},description:""}}};const ce=U(e.jsx("path",{d:"m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"})),de=U(e.jsx("path",{d:"M5 20h14v-2H5zM19 9h-4V3H9v6H5l7 7z"})),Ie={title:"Components/Button",component:X,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{onClick:{action:"This button was clicked"},type:{control:"select",options:["primary","secondary","tertiary"],description:"The visual style of the button"},size:{control:"select",options:["small","medium","large"],description:"The size of the button"},label:{control:"text",description:"The text content of the button"},isDisabled:{control:"boolean",description:"Whether the button is disabled"},isLoading:{control:"boolean",description:"Whether the button is in a loading state"},fullWidth:{control:"boolean",description:"Whether the button should take up the full width of its container"},startIcon:{control:"object",description:"Icon to display at the start of the button"},endIcon:{control:"object",description:"Icon to display at the end of the button"}}},s={args:{label:"I am a primary button",type:"primary",size:"medium"}},n={args:{label:"I am a secondary button",type:"secondary",size:"medium"}},o={args:{label:"I am a tertiary button",type:"tertiary",size:"medium"}},i={args:{label:"I am a primary button with a start icon",type:"primary",size:"medium",startIcon:e.jsx(oe,{})}},l={args:{label:"I am a primary button with an end icon",type:"primary",size:"medium",endIcon:e.jsx(ce,{})}},m={args:{label:"I am a primary button in a loading state",type:"primary",size:"medium",isLoading:!0}},c={args:{label:"I am a primary button that is disabled",type:"primary",size:"medium",isDisabled:!0}},d={args:{label:"I am a secondary button that is full width",type:"secondary",size:"large",fullWidth:!0,startIcon:e.jsx(de,{})}},u={args:{label:"I am a tertiary button that is small",type:"tertiary",size:"small"}},p={args:{label:"I am a primary button that is large",type:"primary",size:"large"}};var I,x,z;s.parameters={...s.parameters,docs:{...(I=s.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    label: 'I am a primary button',
    type: 'primary',
    size: 'medium'
  }
}`,...(z=(x=s.parameters)==null?void 0:x.docs)==null?void 0:z.source}}};var v,w,j;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    label: 'I am a secondary button',
    type: 'secondary',
    size: 'medium'
  }
}`,...(j=(w=n.parameters)==null?void 0:w.docs)==null?void 0:j.source}}};var T,S,q;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    label: 'I am a tertiary button',
    type: 'tertiary',
    size: 'medium'
  }
}`,...(q=(S=o.parameters)==null?void 0:S.docs)==null?void 0:q.source}}};var W,_,L;i.parameters={...i.parameters,docs:{...(W=i.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    label: 'I am a primary button with a start icon',
    type: 'primary',
    size: 'medium',
    startIcon: <AddIcon />
  }
}`,...(L=(_=i.parameters)==null?void 0:_.docs)==null?void 0:L.source}}};var N,R,k;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    label: 'I am a primary button with an end icon',
    type: 'primary',
    size: 'medium',
    endIcon: <ArrowForwardIcon />
  }
}`,...(k=(R=l.parameters)==null?void 0:R.docs)==null?void 0:k.source}}};var C,V,D;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    label: 'I am a primary button in a loading state',
    type: 'primary',
    size: 'medium',
    isLoading: true
  }
}`,...(D=(V=m.parameters)==null?void 0:V.docs)==null?void 0:D.source}}};var A,E,F;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    label: 'I am a primary button that is disabled',
    type: 'primary',
    size: 'medium',
    isDisabled: true
  }
}`,...(F=(E=c.parameters)==null?void 0:E.docs)==null?void 0:F.source}}};var B,H,P;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    label: 'I am a secondary button that is full width',
    type: 'secondary',
    size: 'large',
    fullWidth: true,
    startIcon: <DownloadIcon />
  }
}`,...(P=(H=d.parameters)==null?void 0:H.docs)==null?void 0:P.source}}};var M,O,G;u.parameters={...u.parameters,docs:{...(M=u.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    label: 'I am a tertiary button that is small',
    type: 'tertiary',
    size: 'small'
  }
}`,...(G=(O=u.parameters)==null?void 0:O.docs)==null?void 0:G.source}}};var J,K,Q;p.parameters={...p.parameters,docs:{...(J=p.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    label: 'I am a primary button that is large',
    type: 'primary',
    size: 'large'
  }
}`,...(Q=(K=p.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};const xe=["Primary","Secondary","Tertiary","WithStartIcon","WithEndIcon","Loading","Disabled","FullWidth","Small","Large"];export{c as Disabled,d as FullWidth,p as Large,m as Loading,s as Primary,n as Secondary,u as Small,o as Tertiary,l as WithEndIcon,i as WithStartIcon,xe as __namedExportsOrder,Ie as default};
