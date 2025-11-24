'use client';
import Menu from '@/components/Menu';
import Button from '@/components/Button';
import CachedRoundedIcon from '@mui/icons-material/CachedRounded';
import Footer from '@/components/Footer';

/// Playground dependencies start

/// Import any components you plan to use in the playground here
import Checkbox from '@/components/Checkbox';
import RadioButton from '@/components/RadioButton';
import ToggleButton from '@/components/ToggleButton';
import ArticleOneSample from '@/components/examples/ArticleOneSample';
/// Playground dependencies end

export default function Playground() {
  return (
    <div className="w-[calc(100%-1rem)] md:w-[calc(100%-4rem)] mx-2 md:mx-8 border-collapse border border-stone-900 min-h-screen bg-theme-primary">
      <div className="flex flex-col w-full p-1 text-center text-sm md:text-base lg:text-lg border-b border-stone-900 min-h-8 lg:min-h-10 items-center justify-center">
        <h1>Oğuzhan Özcan - Product Designer & Design Engineer</h1>
      </div>
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
          <div className="text-md">Checkbox, RadioButton, ToggleButton</div>
        </div>

        {/* Content Start */}
        <div className="flex flex-row w-full items-center justify-center h-full gap-4 p-8 border-b border-stone-900">
          <div className="w-auto gap-12">
            <ArticleOneSample />
          </div>

          {/* Content End */}
        </div>
      </div>
      <Footer />
    </div>
  );
}
