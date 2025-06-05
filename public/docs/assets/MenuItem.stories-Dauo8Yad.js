import{j as t}from"./jsx-runtime-BI5MxDfm.js";import{M as O}from"./MenuItem-BFcgXwiI.js";import{H as m}from"./Home-DpS2lSp-.js";import{W as A}from"./Work-DitsQPHY.js";import{S as D,C as R}from"./Code-Cs4rPy6M.js";import"./iframe-B_NqXYdT.js";import"./link-Cx5nZCsA.js";import"./use-merged-ref-DlaISMlf.js";import"./createSvgIcon-DkyYD0zk.js";const P={title:"Components/Menu Item",component:O,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{title:{control:"text",description:"The text content of the menu item"},svg:{control:"object",description:"Optional icon to display in the menu item"},className:{control:"text",description:"Additional CSS classes to apply to the menu item container"},to:{control:"text",description:"Optional URL to navigate to when clicked"},titleClassName:{control:"text",description:"Additional CSS classes to apply to the title text"}}},e={args:{title:"Home",to:"/"}},o={args:{title:"Home",svg:t.jsx(m,{sx:{fontSize:40}}),to:"/"}},s={args:{title:"Work",svg:t.jsx(A,{sx:{fontSize:40}}),to:"/work"}},r={args:{title:"Education",svg:t.jsx(D,{sx:{fontSize:40}}),to:"/education"}},n={args:{title:"Code",svg:t.jsx(R,{sx:{fontSize:40}}),to:"/code"}},a={args:{title:"Custom Styled",svg:t.jsx(m,{sx:{fontSize:40}}),to:"/custom",className:"bg-blue-100 hover:bg-blue-200",titleClassName:"text-blue-900"}},c={args:{title:"Static Item",svg:t.jsx(m,{sx:{fontSize:40}})}},i={args:{title:"Compact Item",svg:t.jsx(m,{sx:{fontSize:40}}),to:"/compact",className:"flex-1 !min-h-0 !p-6 h-full"}};var l,p,u;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    title: 'Home',
    to: '/'
  }
}`,...(u=(p=e.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var d,g,x;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    title: 'Home',
    svg: <HomeIcon sx={{
      fontSize: 40
    }} />,
    to: '/'
  }
}`,...(x=(g=o.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var S,f,I;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    title: 'Work',
    svg: <WorkIcon sx={{
      fontSize: 40
    }} />,
    to: '/work'
  }
}`,...(I=(f=s.parameters)==null?void 0:f.docs)==null?void 0:I.source}}};var C,h,v;r.parameters={...r.parameters,docs:{...(C=r.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    title: 'Education',
    svg: <SchoolIcon sx={{
      fontSize: 40
    }} />,
    to: '/education'
  }
}`,...(v=(h=r.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var z,W,b;n.parameters={...n.parameters,docs:{...(z=n.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    title: 'Code',
    svg: <CodeIcon sx={{
      fontSize: 40
    }} />,
    to: '/code'
  }
}`,...(b=(W=n.parameters)==null?void 0:W.docs)==null?void 0:b.source}}};var k,j,H;a.parameters={...a.parameters,docs:{...(k=a.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    title: 'Custom Styled',
    svg: <HomeIcon sx={{
      fontSize: 40
    }} />,
    to: '/custom',
    className: 'bg-blue-100 hover:bg-blue-200',
    titleClassName: 'text-blue-900'
  }
}`,...(H=(j=a.parameters)==null?void 0:j.docs)==null?void 0:H.source}}};var N,y,E;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    title: 'Static Item',
    svg: <HomeIcon sx={{
      fontSize: 40
    }} />
  }
}`,...(E=(y=c.parameters)==null?void 0:y.docs)==null?void 0:E.source}}};var w,L,M;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    title: 'Compact Item',
    svg: <HomeIcon sx={{
      fontSize: 40
    }} />,
    to: '/compact',
    className: 'flex-1 !min-h-0 !p-6 h-full'
  }
}`,...(M=(L=i.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};const Q=["Default","WithIcon","WorkItem","EducationItem","CodeItem","WithCustomClass","WithoutLink","Compact"];export{n as CodeItem,i as Compact,e as Default,r as EducationItem,a as WithCustomClass,o as WithIcon,c as WithoutLink,s as WorkItem,Q as __namedExportsOrder,P as default};
