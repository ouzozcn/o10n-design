'use client';

import React, { useState } from 'react';
import Button from '@/components/Button';
import HomeIcon from '@mui/icons-material/Home';
import PrintIcon from '@mui/icons-material/Print';
import SearchIcon from '@mui/icons-material/Search';
import Image from 'next/image';

type ColorBlindnessType =
  | 'protanomaly'
  | 'deuteranomaly'
  | 'protanopia'
  | 'tritanomaly'
  | 'deuteranopia'
  | 'tritanopia'
  | 'monochromacy'
  | 'achromatopsia'
  | null;

interface ColorBlindnessFilter {
  name: string;
  filter: string;
}

const colorBlindnessFilters: Record<string, ColorBlindnessFilter> = {
  protanomaly: {
    name: 'Protanomaly',
    filter: 'url(#protanomaly)',
  },
  deuteranomaly: {
    name: 'Deuteranomaly',
    filter: 'url(#deuteranomaly)',
  },
  protanopia: {
    name: 'Protanopia',
    filter: 'url(#protanopia)',
  },
  tritanomaly: {
    name: 'Tritanomaly',
    filter: 'url(#tritanomaly)',
  },
  deuteranopia: {
    name: 'Deuteranopia',
    filter: 'url(#deuteranopia)',
  },
  tritanopia: {
    name: 'Tritanopia',
    filter: 'url(#tritanopia)',
  },
  monochromacy: {
    name: 'Monochromacy',
    filter: 'grayscale(100%)',
  },
  achromatopsia: {
    name: 'Achromatopsia',
    filter: 'grayscale(100%) brightness(0.5)',
  },
};

// Order matches KromaClient.tsx cardContents array
const colorBlindnessTypes: ColorBlindnessType[] = [
  'protanomaly',
  'deuteranomaly',
  'protanopia',
  'tritanomaly',
  'deuteranopia',
  'tritanopia',
  'monochromacy',
  'achromatopsia',
];

export default function KromaSimulator() {
  const [selectedType, setSelectedType] = useState<ColorBlindnessType>(null);
  const selectedFilter = selectedType ? colorBlindnessFilters[selectedType] : null;

  const iconFilterStyle: React.CSSProperties = selectedFilter
    ? { filter: selectedFilter.filter }
    : {};

  return (
    <div className="border border-stone-900 rounded-lg overflow-hidden ">
      <svg width="0" height="0" className="absolute">
        <defs>
          {/* Protanomaly - Reduced red sensitivity */}
          <filter id="protanomaly" x="0" y="0" width="100%" height="100%">
            <feColorMatrix
              type="matrix"
              values="0.817 0.333 0.0 0 0
                      0.183 0.667 0.0 0 0
                      0.0   0.0   1.0 0 0
                      0     0     0   1 0"
            />
          </filter>

          {/* Deuteranomaly - Reduced green sensitivity */}
          <filter id="deuteranomaly" x="0" y="0" width="100%" height="100%">
            <feColorMatrix
              type="matrix"
              values="0.8   0.258 0.0 0 0
                      0.2   0.742 0.0 0 0
                      0.0   0.0   1.0 0 0
                      0     0     0   1 0"
            />
          </filter>

          {/* Protanopia - No red cones */}
          <filter id="protanopia" x="0" y="0" width="100%" height="100%">
            <feColorMatrix
              type="matrix"
              values="0.567 0.433 0.0 0 0
                      0.558 0.442 0.0 0 0
                      0.0   0.242 0.0 0 0
                      0     0     0   1 0"
            />
          </filter>

          {/* Tritanomaly - Reduced blue sensitivity */}
          <filter id="tritanomaly" x="0" y="0" width="100%" height="100%">
            <feColorMatrix
              type="matrix"
              values="0.967 0.033 0.0 0 0
                      0.0   0.733 0.0 0 0
                      0.033 0.233 1.0 0 0
                      0     0     0   1 0"
            />
          </filter>

          {/* Deuteranopia - No green cones */}
          <filter id="deuteranopia" x="0" y="0" width="100%" height="100%">
            <feColorMatrix
              type="matrix"
              values="0.625 0.375 0.0 0 0
                      0.7   0.3   0.0 0 0
                      0.0   0.3   0.0 0 0
                      0     0     0   1 0"
            />
          </filter>

          {/* Tritanopia - No blue cones */}
          <filter id="tritanopia" x="0" y="0" width="100%" height="100%">
            <feColorMatrix
              type="matrix"
              values="0.95 0.05  0.0 0 0
                      0.0  0.433 0.0 0 0
                      0.05 0.517 1.0 0 0
                      0    0     0   1 0"
            />
          </filter>
        </defs>
      </svg>

      <div className="flex flex-col h-auto gap-0 items-start  rounded-lg ">
        {/* Title Section */}
        <div className=" flex flex-col gap-0 items-start justify-center p-7 shrink-0 w-full">
          <div className=" relative shrink-0 ">
            <Image
              src="/img/kroma/KromaLogo.svg"
              alt="Kroma Logo"
              width={1}
              height={24}
              className="block max-w-none size-full object-contain"
            />
          </div>
        </div>

        {/* Icons Wrapper */}
        <div className=" border-y border-stone-900 flex flex-wrap p-4 lg:p-8 gap-8 md:gap-10 lg:gap-16 h-auto items-center justify-center relative shrink-0 w-full">
          <div
            className="flex h-[96px] items-center justify-center relative shrink-0 w-[96px]"
            style={iconFilterStyle}
          >
            <HomeIcon sx={{ fontSize: 64, color: '#EF4444' }} aria-hidden="true" />
          </div>
          <div
            className="flex h-[96px] items-center justify-center relative shrink-0 w-[96px]"
            style={iconFilterStyle}
          >
            <PrintIcon sx={{ fontSize: 64, color: '#65A30D' }} aria-hidden="true" />
          </div>
          <div
            className="flex h-[96px] items-center justify-center relative shrink-0 w-[96px]"
            style={iconFilterStyle}
          >
            <SearchIcon sx={{ fontSize: 64, color: '#2563EB' }} aria-hidden="true" />
          </div>
        </div>

        {/* CTA Section */}
        <div className=" flex gap-2 items-center justify-center pt-4 px-1 relative shrink-0 w-full">
          <div className="flex flex-col font-sans font-normal justify-center  text-base text-stone-900 text-center ">
            <p className="leading-normal">
              Select a type to observe the basic colors&apos; colorblindness effect.
            </p>
          </div>
        </div>

        {/* Buttons Wrapper */}
        <div className=" gap-2 grid grid-cols-2 md:grid-cols-4 grid-rows-2 h-auto p-4 relative shrink-0 w-full">
          {colorBlindnessTypes.map((type, index) => {
            if (!type) return null;
            const filter = colorBlindnessFilters[type];
            const isSelected = selectedType === type;

            return (
              <Button
                key={type}
                label={filter.name}
                type={isSelected ? 'primary' : 'secondary'}
                size="small"
                onClick={() => setSelectedType(isSelected ? null : type)}
                className="min-w-[58px]"
                ariaLabel={`Select ${filter.name} color blindness type`}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
