import{j as e}from"./jsx-runtime-DeMZEkK6.js";import{L as V}from"./link-ltmzRAlH.js";import{c as w}from"./createSvgIcon-Bb5bdX4L.js";import"./iframe-fGtxDn4l.js";import"./use-merged-ref-DPGjOAYH.js";const E=w(e.jsx("path",{d:"M6 6v2h8.59L5 17.59 6.41 19 16 9.41V18h2V6z"})),p={primary:"font-black",secondary:"font-normal"},M=t=>t&&/^https?:\/\//.test(t),N=({label:t,to:l="/",className:c,style:i="secondary"})=>{const m=e.jsxs(e.Fragment,{children:[t,e.jsx("span",{className:"ml-1 icon-hidden",children:e.jsx(E,{fontSize:"small"})})]});return M(l)?e.jsx("a",{href:l,target:"_blank",rel:"noopener noreferrer",className:`flex items-center text-stone-900 hover:text-blue-900 font-sans text-lg gap-1 ${p[i]} ${c}`,children:m}):e.jsx(V,{href:l,className:`flex items-center text-stone-900 hover:text-blue-900 font-sans text-lg gap-1 ${p[i]} ${c}`,children:m})};N.__docgenInfo={description:"",methods:[],displayName:"TextLink",props:{label:{required:!0,tsType:{name:"string"},description:""},to:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"/"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"union",raw:'"primary" | "secondary"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'}]},description:"",defaultValue:{value:'"secondary"',computed:!1}}}};const z={title:"Components/Text Link",component:N,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{style:{control:"select",options:["primary","secondary"],description:"The visual style of the link"},label:{control:"text",description:"The text content of the link"},to:{control:"text",description:"The URL or path the link points to"},className:{control:"text",description:"Additional CSS classes to apply to the link"}}},r={args:{label:"Read More",style:"primary",to:"/about"}},s={args:{label:"Learn More",style:"secondary",to:"/features"}},a={args:{label:"Visit Documentation",style:"primary",to:"https://docs.example.com"}},o={args:{label:"Custom Styled Link",style:"secondary",to:"/custom",className:"text-purple-600 hover:text-purple-800"}},n={args:{label:"This is a very long link text that demonstrates how the component handles longer content",style:"primary",to:"/long-text"}};var d,u,y;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    label: 'Read More',
    style: 'primary',
    to: '/about'
  }
}`,...(y=(u=r.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};var x,h,g;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    label: 'Learn More',
    style: 'secondary',
    to: '/features'
  }
}`,...(g=(h=s.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var f,b,k;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    label: 'Visit Documentation',
    style: 'primary',
    to: 'https://docs.example.com'
  }
}`,...(k=(b=a.parameters)==null?void 0:b.docs)==null?void 0:k.source}}};var L,T,v;o.parameters={...o.parameters,docs:{...(L=o.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    label: 'Custom Styled Link',
    style: 'secondary',
    to: '/custom',
    className: 'text-purple-600 hover:text-purple-800'
  }
}`,...(v=(T=o.parameters)==null?void 0:T.docs)==null?void 0:v.source}}};var S,C,j;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    label: 'This is a very long link text that demonstrates how the component handles longer content',
    style: 'primary',
    to: '/long-text'
  }
}`,...(j=(C=n.parameters)==null?void 0:C.docs)==null?void 0:j.source}}};const A=["Primary","Secondary","ExternalLink","WithCustomClass","LongText"];export{a as ExternalLink,n as LongText,r as Primary,s as Secondary,o as WithCustomClass,A as __namedExportsOrder,z as default};
