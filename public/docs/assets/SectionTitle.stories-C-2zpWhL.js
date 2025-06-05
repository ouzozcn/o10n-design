import{j as e}from"./jsx-runtime-BI5MxDfm.js";import{c as q}from"./createSvgIcon-DkyYD0zk.js";import{W as D}from"./Work-DitsQPHY.js";import{S as F,C as O}from"./Code-Cs4rPy6M.js";import"./iframe-B_NqXYdT.js";const v=({title:R,startIcon:i,className:w=""})=>{const _=["flex w-full h-20 bg-teal-100","border-t border-b border-stone-900","justify-center items-center gap-2","transition-all duration-300",w].filter(Boolean).join(" ");return e.jsxs("header",{className:_,children:[i&&e.jsx("div",{className:"text-center text-stone-800 text-2xl font-sans font-medium","aria-hidden":"true",children:i}),e.jsx("h2",{className:"text-center text-stone-800 text-2xl font-sans font-medium",children:R})]})};v.__docgenInfo={description:"",methods:[],displayName:"SectionTitle",props:{title:{required:!0,tsType:{name:"string"},description:""},startIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}}}};const L=q(e.jsx("path",{d:"M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"})),H={title:"Components/Section Title",component:v,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{title:{control:"text",description:"The text content of the section title"},startIcon:{control:"object",description:"Optional icon to display at the start of the title"},className:{control:"text",description:"Additional CSS classes to apply to the section title container"}}},t={args:{title:"Section Title"}},o={args:{title:"Featured Section",startIcon:e.jsx(L,{sx:{fontSize:32}})}},s={args:{title:"Work Experience",startIcon:e.jsx(D,{sx:{fontSize:32}})}},n={args:{title:"Education",startIcon:e.jsx(F,{sx:{fontSize:32}})}},r={args:{title:"Code Examples",startIcon:e.jsx(O,{sx:{fontSize:32}})}},a={args:{title:"Custom Styled Section",startIcon:e.jsx(L,{sx:{fontSize:32}}),className:"bg-blue-100"}},c={args:{title:"This is a very long section title that demonstrates how the component handles longer content"}};var l,d,m;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    title: 'Section Title'
  }
}`,...(m=(d=t.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var p,u,S;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    title: 'Featured Section',
    startIcon: <StarIcon sx={{
      fontSize: 32
    }} />
  }
}`,...(S=(u=o.parameters)==null?void 0:u.docs)==null?void 0:S.source}}};var x,g,f;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    title: 'Work Experience',
    startIcon: <WorkIcon sx={{
      fontSize: 32
    }} />
  }
}`,...(f=(g=s.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var h,I,C;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    title: 'Education',
    startIcon: <SchoolIcon sx={{
      fontSize: 32
    }} />
  }
}`,...(C=(I=n.parameters)==null?void 0:I.docs)==null?void 0:C.source}}};var j,T,y;r.parameters={...r.parameters,docs:{...(j=r.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    title: 'Code Examples',
    startIcon: <CodeIcon sx={{
      fontSize: 32
    }} />
  }
}`,...(y=(T=r.parameters)==null?void 0:T.docs)==null?void 0:y.source}}};var z,W,b;a.parameters={...a.parameters,docs:{...(z=a.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    title: 'Custom Styled Section',
    startIcon: <StarIcon sx={{
      fontSize: 32
    }} />,
    className: 'bg-blue-100'
  }
}`,...(b=(W=a.parameters)==null?void 0:W.docs)==null?void 0:b.source}}};var E,N,k;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    title: 'This is a very long section title that demonstrates how the component handles longer content'
  }
}`,...(k=(N=c.parameters)==null?void 0:N.docs)==null?void 0:k.source}}};const J=["Default","WithIcon","WorkSection","EducationSection","CodeSection","WithCustomClass","LongTitle"];export{r as CodeSection,t as Default,n as EducationSection,c as LongTitle,a as WithCustomClass,o as WithIcon,s as WorkSection,J as __namedExportsOrder,H as default};
