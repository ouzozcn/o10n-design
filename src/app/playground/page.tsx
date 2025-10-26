'use client';
import React from 'react';
import TopDivider from '@/components/TopDivider';
import Menu from '@/components/Menu';
import Button from '@/components/Button';
import CachedRoundedIcon from '@mui/icons-material/CachedRounded';
import Footer from '@/components/Footer';

{
  /* Playground dependencies start*/
}
/// import any components you plan to use in the playground here

{
  /* Playground dependencies end */
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
      <div className="Body__Playground flex flex-col  w-full h-dvh ">
        <div className="Playground__Nav flex flex-col md:flex-row w-full h-auto items-center justify-center   bg-amber-200  border-b p-4 border-stone-900 ">
          <div className="text-md ">Charts</div>
        </div>
        {/* Content Start*/}
        {/* Content Start*/}
        {/* Content Start*/}
        <div
          className="Hexagon__Container flex flex-col w-64 h-64 mx-auto my-8 bg-amber-300 hover:bg-amber-400 border-2 border-stone-900"
          style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
        >
          <div className="Hexagon__Icon flex justify-center items-center h-1/2">
            <CachedRoundedIcon className="text-4xl text-stone-900" />
          </div>
          <div className="Hexagon__Content flex justify-center items-center h-1/2">
            <p className="text-stone-900 font-medium">Label</p>
          </div>
        </div>
        {/* Content End*/}
        {/* Content End*/}
        {/* Content End*/}
      </div>
      <Footer />
    </div>
  );
}
