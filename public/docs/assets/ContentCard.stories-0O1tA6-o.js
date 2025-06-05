import{j as e}from"./jsx-runtime-DeMZEkK6.js";import{c as s}from"./createSvgIcon-Bb5bdX4L.js";import"./iframe-fGtxDn4l.js";const w=s(e.jsx("path",{d:"M3 3h18v18H3z"})),N={lime:"bg-lime-100 hover:bg-lime-200",pink:"bg-pink-100 hover:bg-pink-200",amber:"bg-amber-100 hover:bg-amber-200",teal:"bg-teal-100 hover:bg-teal-200",emerald:"bg-emerald-100 hover:bg-emerald-200",red:"bg-red-100 hover:bg-red-200",cyan:"bg-cyan-100 hover:bg-cyan-200",orange:"bg-orange-100 hover:bg-orange-200"},S=({title:j,content:I,icon:z=e.jsx(w,{sx:{fontSize:32}}),className:T,color:k})=>e.jsxs("article",{className:`w-full flex flex-col border border-stone-900 ${N[k]} rounded-lg transition-colors duration-200 ${T}`,children:[e.jsxs("header",{className:"flex items-center border-b border-stone-900",children:[e.jsx("div",{className:"h-auto inline-flex self-stretch items-center justify-center p-4 border-r border-stone-900","aria-hidden":"true",children:z}),e.jsx("h2",{className:"p-4 text-stone-900 text-2xl font-sans font-medium",children:j})]}),e.jsx("div",{className:"p-6 text-stone-900 text-lg font-sans",children:I})]});S.__docgenInfo={description:"",methods:[],displayName:"ContentCard",props:{title:{required:!0,tsType:{name:"string"},description:""},content:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},color:{required:!0,tsType:{name:"union",raw:`| "lime"
| "pink"
| "amber"
| "teal"
| "emerald"
| "red"
| "cyan"
| "orange"`,elements:[{name:"literal",value:'"lime"'},{name:"literal",value:'"pink"'},{name:"literal",value:'"amber"'},{name:"literal",value:'"teal"'},{name:"literal",value:'"emerald"'},{name:"literal",value:'"red"'},{name:"literal",value:'"cyan"'},{name:"literal",value:'"orange"'}]},description:""},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:"<SquareIcon sx={{ fontSize: 32 }} />",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const q=s(e.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m1 15h-2v-6h2zm0-8h-2V7h2z"})),R=s(e.jsx("path",{d:"M9 21c0 .5.4 1 1 1h4c.6 0 1-.5 1-1v-1H9zm3-19C8.1 2 5 5.1 5 9c0 2.4 1.2 4.5 3 5.7V17c0 .5.4 1 1 1h6c.6 0 1-.5 1-1v-2.3c1.8-1.3 3-3.4 3-5.7 0-3.9-3.1-7-7-7"})),W=s(e.jsx("path",{d:"M1 21h22L12 2zm12-3h-2v-2h2zm0-4h-2v-4h2z"})),H={title:"Components/ContentCard",component:S,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{color:{control:"select",options:["lime","pink","amber","teal","emerald","red","cyan","orange"],description:"The color theme of the card"},title:{control:"text",description:"The title displayed in the card header"},content:{control:"text",description:"The main content of the card"},icon:{control:"object",description:"Optional icon to display in the header"},className:{control:"text",description:"Additional CSS classes to apply to the card"}}},t={args:{title:"Welcome to Our Platform",content:"This is a default content card with a clean, modern design. Perfect for displaying important information or announcements.",color:"lime"}},n={args:{title:"Did You Know?",content:"You can customize the icon of each card to better represent its content. This helps users quickly identify different types of information.",color:"amber",icon:e.jsx(R,{sx:{fontSize:32}})}},o={args:{title:"Important Notice",content:"Please make sure to save your work before leaving this page. Any unsaved changes will be lost.",color:"red",icon:e.jsx(W,{sx:{fontSize:32}})}},r={args:{title:"Quick Tips",content:"Hover over different elements to discover helpful tooltips and additional information.",color:"cyan",icon:e.jsx(q,{sx:{fontSize:32}})}},a={args:{title:"Task Completed",content:"Great job! Your changes have been successfully saved and are now live.",color:"emerald"}};var c,i,l;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    title: 'Welcome to Our Platform',
    content: 'This is a default content card with a clean, modern design. Perfect for displaying important information or announcements.',
    color: 'lime'
  }
}`,...(l=(i=t.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var d,m,p;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    title: 'Did You Know?',
    content: 'You can customize the icon of each card to better represent its content. This helps users quickly identify different types of information.',
    color: 'amber',
    icon: <LightbulbIcon sx={{
      fontSize: 32
    }} />
  }
}`,...(p=(m=n.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var u,h,f;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    title: 'Important Notice',
    content: 'Please make sure to save your work before leaving this page. Any unsaved changes will be lost.',
    color: 'red',
    icon: <WarningIcon sx={{
      fontSize: 32
    }} />
  }
}`,...(f=(h=o.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var g,b,v;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    title: 'Quick Tips',
    content: 'Hover over different elements to discover helpful tooltips and additional information.',
    color: 'cyan',
    icon: <InfoIcon sx={{
      fontSize: 32
    }} />
  }
}`,...(v=(b=r.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var x,y,C;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    title: 'Task Completed',
    content: 'Great job! Your changes have been successfully saved and are now live.',
    color: 'emerald'
  }
}`,...(C=(y=a.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};const M=["Default","WithCustomIcon","WarningCard","InfoCard","SuccessCard"];export{t as Default,r as InfoCard,a as SuccessCard,o as WarningCard,n as WithCustomIcon,M as __namedExportsOrder,H as default};
