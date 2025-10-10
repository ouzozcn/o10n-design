'use client';
import React from 'react';
import TopDivider from '@/components/TopDivider';
import Menu from '@/components/Menu';
import Button from '@/components/Button';
import CachedRoundedIcon from '@mui/icons-material/CachedRounded';
import SwapContent from '@/components/SwapContent';
import Footer from '@/components/Footer';
import CodeRoundedIcon from '@mui/icons-material/CodeRounded';

{
  /* Component dependencies start*/
}
/// import any components you plan to use in the playground here
import {
  Code,
  CodeBlock,
  CodeHeader,
} from '@/components/animate-ui/components/animate/code';

{
  /* Component dependencies end */
}


export default function Playground() {
  return (
    <div className="w-[calc(100%-1rem)] md:w-[calc(100%-4rem)] mx-2 md:mx-8 border-collapse border border-stone-900 min-h-screen bg-theme-primary">
      <TopDivider />
      <div className="Header sticky top-0 flex flex-row p-4 w-full h-auto md:h-[88px] border-b border-stone-900 items-center justify-start gap-4 bg-amber-50 z-10">
        <Menu />
        <div className="HeaderTitle w-full flex flex-col md:flex-row place-content-between gap-4 items-start md:items-center">
          <h1 className="text-xl md:text-2xl font-sans text-stone-900">Playground</h1>

          <Button
            label="Hard Reload"
            type="secondary"
            size="medium"
            endIcon={<CachedRoundedIcon />}
            onClick={() => {
              if (typeof window !== 'undefined') {
                window.location.reload();
              }
            }}
          />
        </div>
      </div>
      <div className="Body__Playground flex flex-col md:flex-row w-full min-h-[400px] ">
        <div className="Playground__Nav flex flex-col w-1/4 h-dvh gap-3 bg-amber-200  border-r lg:p-8 border-stone-900">
          <div className="text-md ">Current Project</div>
          <div className="text-lg font-semibold">Project Name Goes Here</div>
          <div className="text-md mt-4 "> Start Date</div>
          <div className="text-lg font-semibold">Project Start Date Goes Here</div>
        </div>
        {/* Content Start*/}
        <div className="Playground__Content w-full min-h-[400px] p-4 md:p-24 items-center justify-center bg-stone-100">
          <Code code={`interface ButtonProps {
  label: string;
  size?: 'small' | 'medium' | 'large';
  type?: 'primary' | 'secondary' | 'tertiary';
  isLoading?: boolean;
  isDisabled?: boolean;
  endIcon?: React.ReactNode;
  startIcon?: React.ReactNode;
  onClick?: () => void;
}


// Usage

<Button 
  label="Click me" 
  type="primary" 
  size="medium"
  isDisabled={false}
  startIcon={<WestRoundedIcon />}
  onClick={() => { /* handle click */ }}
/>`}>
             <CodeHeader icon={CodeRoundedIcon} copyButton className='text-amber-50 h-16 px-6'>
        Button.tsx
      </CodeHeader>
            <CodeBlock lang="tsx" theme="dark" writing duration={5000} cursor={true}  />
          </Code>
          {/* End of playground content */}
        </div>
        {/* Content End*/}
      </div>
      <Footer/>
    </div>
  );
}
