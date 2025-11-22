'use client';

import React, { useState } from 'react';
import Button from '@/components/Button';
import Image from 'next/image';

type TypefaceStyle = 'sans-serif' | 'serif' | 'slab-serif' | 'handwriting' | null;

interface TypefaceOption {
  id: TypefaceStyle;
  name: string;
  fontFamily: string;
}

const typefaceOptions: TypefaceOption[] = [
  {
    id: 'sans-serif',
    name: 'Sans-Serif',
    fontFamily: 'Arial, sans-serif',
  },
  {
    id: 'serif',
    name: 'Serif',
    fontFamily: '"Times New Roman", serif',
  },
  {
    id: 'slab-serif',
    name: 'Slab-Serif',
    fontFamily: '"Courier Prime", "Courier New", monospace',
  },
  {
    id: 'handwriting',
    name: 'Handwriting',
    fontFamily: '"Comic Neue", "Comic Sans MS", cursive',
  },
];

const typefaceMessages: Record<Exclude<TypefaceStyle, null>, string> = {
  'sans-serif': 'Clean and minimal, just like your browser history.',
  serif: 'Classic choice! You probably read actual books.',
  'slab-serif': 'Bold and chunky, like your favorite retro video game.',
  handwriting: 'Playful and fun! Your inner child approves.',
};

function getTypefaceMessage(typeface: TypefaceStyle): string {
  return typeface ? typefaceMessages[typeface] : 'It is a good choice';
}

export default function BriflSample() {
  const [selectedTypeface, setSelectedTypeface] = useState<TypefaceStyle>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleTypefaceSelect = (typefaceId: TypefaceStyle) => {
    setSelectedTypeface(selectedTypeface === typefaceId ? null : typefaceId);
  };

  const handleSubmit = () => {
    if (isSubmitted) {
      // Reset the component
      setIsSubmitted(false);
      setSelectedTypeface(null);
    } else if (selectedTypeface) {
      setIsSubmitted(true);
    }
  };

  return (
    <div className="border border-stone-900 rounded-lg flex flex-col w-full lg:min-w-[500px] lg:min-h-[300px] h-full">
      {/* Title Section */}
      <div className="flex flex-col gap-3 items-center justify-center px-7 py-5 w-full">
        <Image src="/img/brifl/brifl-logo.svg" alt="Brifl Logo" width={82} height={1} />
      </div>

      {/* Content Section */}
      <div className="border-t border-stone-900 flex flex-col gap-5 items-center justify-center p-5 w-full h-full">
        {!isSubmitted && (
          <div className="flex flex-col font-sans font-medium justify-center text-base text-stone-900 text-center">
            <p className="leading-normal">What is your preferred typeface style?</p>
          </div>
        )}
        {/* Typeface Options or Success Message */}
        <div className="flex gap-4 items-center justify-center ">
          {isSubmitted ? (
            <div className="flex flex-col font-sans font-medium justify-center text-base text-stone-900 text-center ">
              <p className="leading-normal">{getTypefaceMessage(selectedTypeface)}</p>
            </div>
          ) : (
            typefaceOptions.map(option => {
              const isSelected = selectedTypeface === option.id;
              return (
                <button
                  key={option.id}
                  type="button"
                  onClick={() => handleTypefaceSelect(option.id)}
                  className={`flex items-center justify-center shrink-0 w-16 h-16 border rounded transition-colors ${
                    isSelected
                      ? 'border-blue-500 bg-amber-100 border-2'
                      : 'border-stone-700 bg-transparent hover:bg-amber-50'
                  }`}
                  aria-label={`Select ${option.name} typeface`}
                  aria-pressed={isSelected}
                >
                  <span
                    className="text-[36px] text-stone-900 text-center leading-none"
                    style={{ fontFamily: option.fontFamily }}
                  >
                    Aa
                  </span>
                </button>
              );
            })
          )}
        </div>

        {/* Submit Button */}
        <div className="flex items-center justify-center w-auto min-w-72 ">
          <Button
            label={isSubmitted ? 'Submit Again' : 'Submit'}
            type="primary"
            size="small"
            onClick={handleSubmit}
            isDisabled={!isSubmitted && !selectedTypeface}
            fullWidth
            ariaLabel={
              isSubmitted ? 'Restart typeface selection' : 'Submit selected typeface preference'
            }
          />
        </div>
      </div>
    </div>
  );
}
