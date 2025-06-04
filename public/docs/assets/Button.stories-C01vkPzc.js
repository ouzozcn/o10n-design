import{j as e}from"./jsx-runtime-BiCwVeE0.js";import{L as ne}from"./link-B-qjWLD2.js";import{A as oe}from"./Add-_AK78MqI.js";import{c as K}from"./createSvgIcon-ButlJPGK.js";import"./iframe-BX1JO4Nd.js";import"./use-merged-ref-RnFNbQm_.js";const ie={primary:"h-auto bg-stone-800 text-neutral-50 hover:bg-stone-900 rounded-md justify-center items-center gap-1 inline-flex",secondary:"h-auto bg-transparent rounded-md border-2 border-stone-900 hover:bg-amber-100 justify-center items-center gap-1 inline-flex",tertiary:"h-auto bg-transparent rounded-md hover:bg-amber-100 justify-center items-center gap-1 inline-flex"},le={small:"px-2 py-2 text-sm",medium:"px-3 py-3 text-md",large:"px-6 py-3 text-lg"},ce=r=>r&&/^https?:\/\//.test(r),X=({label:r,type:Y="primary",size:Z="medium",startIcon:b,endIcon:h,isDisabled:y=!1,isLoading:a=!1,fullWidth:$=!1,onClick:ee,to:t,className:re="",target:ae,ariaLabel:te})=>{const se=()=>["inline-flex items-center justify-center rounded",$?"w-full":"w-auto",ie[Y],le[Z],y?"opacity-50 cursor-not-allowed":"",a?"cursor-wait":"","font-sans",re].filter(Boolean).join(" "),g=()=>e.jsxs(e.Fragment,{children:[b&&e.jsx("span",{className:"mr-2","aria-hidden":"true",children:b}),a?e.jsx("span",{children:"Loading..."}):e.jsx("span",{children:r}),h&&e.jsx("span",{className:"ml-2","aria-hidden":"true",children:h})]}),f={className:se(),onClick:ee,"aria-disabled":y||a,"aria-label":te||r,"aria-busy":a};return t&&ce(t)?e.jsx("a",{href:t,target:ae||"_blank",rel:"noopener noreferrer",...f,children:g()}):t?e.jsx(ne,{href:t,...f,children:g()}):e.jsx("button",{type:"button",disabled:y||a,...f,children:g()})};X.__docgenInfo={description:"",methods:[],displayName:"Button",props:{label:{required:!0,tsType:{name:"string"},description:""},type:{required:!1,tsType:{name:"union",raw:'"primary" | "secondary" | "tertiary"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"tertiary"'}]},description:"",defaultValue:{value:'"primary"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},startIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},endIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},isDisabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isLoading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},fullWidth:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},to:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},target:{required:!1,tsType:{name:"union",raw:'"_blank" | "_self" | "_parent" | "_top"',elements:[{name:"literal",value:'"_blank"'},{name:"literal",value:'"_self"'},{name:"literal",value:'"_parent"'},{name:"literal",value:'"_top"'}]},description:""},ariaLabel:{required:!1,tsType:{name:"string"},description:""}}};const de=K(e.jsx("path",{d:"m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"})),me=K(e.jsx("path",{d:"M5 20h14v-2H5zM19 9h-4V3H9v6H5l7 7z"})),xe={title:"Components/Button",component:X,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{onClick:{action:"This button was clicked"},type:{control:"select",options:["primary","secondary","tertiary"],description:"The visual style of the button"},size:{control:"select",options:["small","medium","large"],description:"The size of the button"},label:{control:"text",description:"The text content of the button"},isDisabled:{control:"boolean",description:"Whether the button is disabled"},isLoading:{control:"boolean",description:"Whether the button is in a loading state"},fullWidth:{control:"boolean",description:"Whether the button should take up the full width of its container"},startIcon:{control:"object",description:"Icon to display at the start of the button"},endIcon:{control:"object",description:"Icon to display at the end of the button"}}},s={args:{label:"Get Started",type:"primary",size:"medium"}},n={args:{label:"Learn More",type:"secondary",size:"medium"}},o={args:{label:"Cancel",type:"tertiary",size:"medium"}},i={args:{label:"Add New Item",type:"primary",size:"medium",startIcon:e.jsx(oe,{})}},l={args:{label:"Continue",type:"primary",size:"medium",endIcon:e.jsx(de,{})}},c={args:{label:"Processing",type:"primary",size:"medium",isLoading:!0}},d={args:{label:"Submit",type:"primary",size:"medium",isDisabled:!0}},m={args:{label:"Download Now",type:"secondary",size:"large",fullWidth:!0,startIcon:e.jsx(me,{})}},p={args:{label:"Quick Action",type:"tertiary",size:"small"}},u={args:{label:"Sign Up Now",type:"primary",size:"large"}};var x,z,v;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    label: 'Get Started',
    type: 'primary',
    size: 'medium'
  }
}`,...(v=(z=s.parameters)==null?void 0:z.docs)==null?void 0:v.source}}};var w,I,S;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    label: 'Learn More',
    type: 'secondary',
    size: 'medium'
  }
}`,...(S=(I=n.parameters)==null?void 0:I.docs)==null?void 0:S.source}}};var j,T,N;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    label: 'Cancel',
    type: 'tertiary',
    size: 'medium'
  }
}`,...(N=(T=o.parameters)==null?void 0:T.docs)==null?void 0:N.source}}};var q,W,_;i.parameters={...i.parameters,docs:{...(q=i.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    label: 'Add New Item',
    type: 'primary',
    size: 'medium',
    startIcon: <AddIcon />
  }
}`,...(_=(W=i.parameters)==null?void 0:W.docs)==null?void 0:_.source}}};var L,C,k;l.parameters={...l.parameters,docs:{...(L=l.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    label: 'Continue',
    type: 'primary',
    size: 'medium',
    endIcon: <ArrowForwardIcon />
  }
}`,...(k=(C=l.parameters)==null?void 0:C.docs)==null?void 0:k.source}}};var A,R,D;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    label: 'Processing',
    type: 'primary',
    size: 'medium',
    isLoading: true
  }
}`,...(D=(R=c.parameters)==null?void 0:R.docs)==null?void 0:D.source}}};var V,E,F;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    label: 'Submit',
    type: 'primary',
    size: 'medium',
    isDisabled: true
  }
}`,...(F=(E=d.parameters)==null?void 0:E.docs)==null?void 0:F.source}}};var P,B,H;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    label: 'Download Now',
    type: 'secondary',
    size: 'large',
    fullWidth: true,
    startIcon: <DownloadIcon />
  }
}`,...(H=(B=m.parameters)==null?void 0:B.docs)==null?void 0:H.source}}};var M,G,Q;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    label: 'Quick Action',
    type: 'tertiary',
    size: 'small'
  }
}`,...(Q=(G=p.parameters)==null?void 0:G.docs)==null?void 0:Q.source}}};var U,O,J;u.parameters={...u.parameters,docs:{...(U=u.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    label: 'Sign Up Now',
    type: 'primary',
    size: 'large'
  }
}`,...(J=(O=u.parameters)==null?void 0:O.docs)==null?void 0:J.source}}};const ze=["Primary","Secondary","Tertiary","WithStartIcon","WithEndIcon","Loading","Disabled","FullWidth","Small","Large"];export{d as Disabled,m as FullWidth,u as Large,c as Loading,s as Primary,n as Secondary,p as Small,o as Tertiary,l as WithEndIcon,i as WithStartIcon,ze as __namedExportsOrder,xe as default};
