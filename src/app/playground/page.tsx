'use client';
import React, { useState } from 'react';
import TopDivider from '@/components/TopDivider';
import Menu from '@/components/Menu';
import Button from '@/components/Button';
import CachedRoundedIcon from '@mui/icons-material/CachedRounded';
import Footer from '@/components/Footer';
import Input from '@/components/Input';

{
  /* Playground dependencies start*/
}
/// import any components you plan to use in the playground here

{
  /* Playground dependencies end */
}

// Interactive example component
function InputExample() {
  const [value, setValue] = useState('');
  const [state, setState] = useState<
    'idle' | 'hover' | 'focus' | 'active' | 'loading' | 'disabled' | 'success' | 'error'
  >('idle');

  const handleFocus = () => {
    setState('focus');
  };

  const handleBlur = () => {
    if (value) {
      setState('success');
    } else {
      setState('idle');
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <Input
        value={value}
        state={state}
        placeholder="Type something..."
        onChange={newValue => setValue(newValue)}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      <div className="flex gap-2 flex-wrap">
        <button
          onClick={() => setState('idle')}
          className="px-3 py-1 text-sm bg-stone-200 text-stone-800 rounded hover:bg-stone-300"
        >
          Reset
        </button>
        <button
          onClick={() => setState('loading')}
          className="px-3 py-1 text-sm bg-amber-100 text-stone-800 rounded hover:bg-amber-200"
        >
          Show Loading
        </button>
        <button
          onClick={() => setState('error')}
          className="px-3 py-1 text-sm bg-red-100 text-stone-800 rounded hover:bg-red-200"
        >
          Show Error
        </button>
      </div>
    </div>
  );
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
        <div className="Playground__Nav flex flex-col md:flex-row w-full h-auto items-center justify-center bg-amber-200 border-b p-4 border-stone-900">
          <div className="text-md">Input Component States</div>
        </div>

        {/* Content Start */}
        <div className="flex flex-col gap-8 p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-semibold text-stone-800">Input States</h3>

              <div className="flex flex-col gap-3">
                <div>
                  <label className="text-sm text-stone-600 mb-1 block">Idle</label>
                  <Input state="idle" placeholder="Username" />
                </div>

                <div>
                  <label className="text-sm text-stone-600 mb-1 block">Hover</label>
                  <Input state="hover" placeholder="Username" />
                </div>

                <div>
                  <label className="text-sm text-stone-600 mb-1 block">Focus</label>
                  <Input state="focus" placeholder="Username" />
                </div>

                <div>
                  <label className="text-sm text-stone-600 mb-1 block">Active</label>
                  <Input state="active" placeholder="Username" />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-semibold text-stone-800">Status States</h3>

              <div className="flex flex-col gap-3">
                <div>
                  <label className="text-sm text-stone-600 mb-1 block">Loading</label>
                  <Input state="loading" placeholder="Username" />
                </div>

                <div>
                  <label className="text-sm text-stone-600 mb-1 block">Success</label>
                  <Input state="success" placeholder="Username" />
                </div>

                <div>
                  <label className="text-sm text-stone-600 mb-1 block">Error</label>
                  <Input state="error" placeholder="Username" />
                </div>

                <div>
                  <label className="text-sm text-stone-600 mb-1 block">Disabled</label>
                  <Input state="disabled" placeholder="Username" />
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Example */}
          <div className="flex flex-col gap-4 border-t border-stone-800 pt-8">
            <h3 className="text-lg font-semibold text-stone-800">Interactive Example</h3>
            <div className="w-full md:w-96">
              <InputExample />
            </div>
          </div>
        </div>
        {/* Content End */}
      </div>
      <Footer />
    </div>
  );
}
