import{j as t}from"./jsx-runtime-DeMZEkK6.js";import{c as B,g as F,a as G,u as H,s as J,b as K,d as m,e as Q,m as X}from"./createSvgIcon-Bb5bdX4L.js";import{r as Y}from"./iframe-fGtxDn4l.js";const Z=B(t.jsx("path",{d:"M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96"}));function ee(e){return typeof e.main=="string"}function oe(e,o=[]){if(!ee(e))return!1;for(const r of o)if(!e.hasOwnProperty(r)||typeof e[r]!="string")return!1;return!0}function re(e=[]){return([,o])=>o&&oe(o,e)}function te(e){return F("MuiIcon",e)}G("MuiIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);const se=e=>{const{color:o,fontSize:r,classes:n}=e,s={root:["root",o!=="inherit"&&`color${m(o)}`,`fontSize${m(r)}`]};return Q(s,te,n)},ne=J("span",{name:"MuiIcon",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:r}=e;return[o.root,r.color!=="inherit"&&o[`color${m(r.color)}`],o[`fontSize${m(r.fontSize)}`]]}})(X(({theme:e})=>({userSelect:"none",width:"1em",height:"1em",overflow:"hidden",display:"inline-block",textAlign:"center",flexShrink:0,variants:[{props:{fontSize:"inherit"},style:{fontSize:"inherit"}},{props:{fontSize:"small"},style:{fontSize:e.typography.pxToRem(20)}},{props:{fontSize:"medium"},style:{fontSize:e.typography.pxToRem(24)}},{props:{fontSize:"large"},style:{fontSize:e.typography.pxToRem(36)}},{props:{color:"action"},style:{color:(e.vars||e).palette.action.active}},{props:{color:"disabled"},style:{color:(e.vars||e).palette.action.disabled}},{props:{color:"inherit"},style:{color:void 0}},...Object.entries(e.palette).filter(re()).map(([o])=>({props:{color:o},style:{color:(e.vars||e).palette[o].main}}))]}))),V=Y.forwardRef(function(o,r){const n=H({props:o,name:"MuiIcon"}),{baseClassName:s="material-icons",className:f,color:h="inherit",component:g="span",fontSize:U="medium",...$}=n,b={...n,baseClassName:s,color:h,component:g,fontSize:U},_=se(b);return t.jsx(ne,{as:g,className:K(s,"notranslate",_.root,f),ownerState:b,"aria-hidden":!0,ref:r,...$})});V.muiName="Icon";const L=({order:e,label:o,isActive:r=!1,hasEndIcon:n=!1,endIcon:s="cloud",className:f=""})=>{const h=["h-24 px-6 py-8","justify-start items-center gap-1 inline-flex",r?"bg-stone-800 hover:bg-stone-700 text-white":"bg-amber-50 hover:bg-amber-100 text-stone-900","transition-colors duration-200",f].filter(Boolean).join(" ");return t.jsxs("div",{className:h,role:"button",tabIndex:0,"aria-current":r?"page":void 0,children:[t.jsx("div",{className:"w-10 h-9 text-xl font-sans font-medium leading-loose","aria-hidden":"true",children:e<10?`0${e}`:e}),t.jsx("div",{className:"text-2xl font-sans font-normal leading-loose tracking-wide",children:o}),n&&t.jsx("div",{className:"w-8 h-8 p-1 justify-center items-center flex","aria-hidden":"true",children:s==="cloud"?t.jsx(Z,{}):t.jsx(V,{children:s})})]})};L.__docgenInfo={description:"",methods:[],displayName:"WorkNavItem",props:{order:{required:!0,tsType:{name:"number"},description:""},label:{required:!0,tsType:{name:"string"},description:""},isActive:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},hasEndIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},endIcon:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"cloud"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}}}};const ie={title:"Components/Nav Bar Item",component:L,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{order:{control:"number",description:"The order number of the work item"},label:{control:"text",description:"The text label of the work item"},isActive:{control:"boolean",description:"Whether the work item is currently active"},hasEndIcon:{control:"boolean",description:"Whether to show an end icon"},endIcon:{control:"text",description:"The name of the Material-UI icon to display at the end"},className:{control:"text",description:"Additional CSS classes to apply to the work item container"}}},a={args:{order:1,label:"Project One"}},c={args:{order:2,label:"Active Project",isActive:!0}},l={args:{order:3,label:"Cloud Project",hasEndIcon:!0,endIcon:"cloud"}},i={args:{order:4,label:"Custom Icon Project",hasEndIcon:!0,endIcon:"✣"}},d={args:{order:10,label:"Tenth Project"}},p={args:{order:5,label:"Custom Styled Project",className:"border border-stone-900"}},u={args:{order:6,label:"This is a very long project name that demonstrates how the component handles longer content"}};var y,S,v;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    order: 1,
    label: 'Project One'
  }
}`,...(v=(S=a.parameters)==null?void 0:S.docs)==null?void 0:v.source}}};var I,x,C;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    order: 2,
    label: 'Active Project',
    isActive: true
  }
}`,...(C=(x=c.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};var j,z,P;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    order: 3,
    label: 'Cloud Project',
    hasEndIcon: true,
    endIcon: 'cloud'
  }
}`,...(P=(z=l.parameters)==null?void 0:z.docs)==null?void 0:P.source}}};var T,w,N;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    order: 4,
    label: 'Custom Icon Project',
    hasEndIcon: true,
    endIcon: '✣'
  }
}`,...(N=(w=i.parameters)==null?void 0:w.docs)==null?void 0:N.source}}};var k,A,E;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    order: 10,
    label: 'Tenth Project'
  }
}`,...(E=(A=d.parameters)==null?void 0:A.docs)==null?void 0:E.source}}};var W,D,M;p.parameters={...p.parameters,docs:{...(W=p.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    order: 5,
    label: 'Custom Styled Project',
    className: 'border border-stone-900'
  }
}`,...(M=(D=p.parameters)==null?void 0:D.docs)==null?void 0:M.source}}};var R,O,q;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    order: 6,
    label: 'This is a very long project name that demonstrates how the component handles longer content'
  }
}`,...(q=(O=u.parameters)==null?void 0:O.docs)==null?void 0:q.source}}};const de=["Default","Active","WithCloudIcon","WithCustomIcon","DoubleDigitOrder","WithCustomClass","LongLabel"];export{c as Active,a as Default,d as DoubleDigitOrder,u as LongLabel,l as WithCloudIcon,p as WithCustomClass,i as WithCustomIcon,de as __namedExportsOrder,ie as default};
