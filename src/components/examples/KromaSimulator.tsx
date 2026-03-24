'use client';

import React, { useState } from 'react';
import HomeIcon from '@mui/icons-material/Home';
import PrintIcon from '@mui/icons-material/Print';
import SearchIcon from '@mui/icons-material/Search';
import Image from 'next/image';
import IconButton from '@/components/IconButton';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
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

const SLIDER_OPTIONS: ColorBlindnessType[] = [null, ...colorBlindnessTypes];

export default function KromaSimulator() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedType = SLIDER_OPTIONS[selectedIndex];
  const selectedFilter = selectedType ? colorBlindnessFilters[selectedType] : null;

  const goPrev = () => {
    setSelectedIndex(prev => (prev - 1 + SLIDER_OPTIONS.length) % SLIDER_OPTIONS.length);
  };
  const goNext = () => {
    setSelectedIndex(prev => (prev + 1) % SLIDER_OPTIONS.length);
  };
  const currentLabel = selectedIndex === 0 ? 'Normal' : (selectedFilter?.name ?? 'Normal');

  const iconFilterStyle: React.CSSProperties = selectedFilter
    ? { filter: selectedFilter.filter }
    : {};

  return (
    <div className="border border-stone-900 rounded-lg overflow-hidden lg:max-w-[600px] bg-white">
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

      <div className="flex flex-col lg:w-[600px] h-auto gap-0 items-center  rounded-lg ">
        {/* Title Section */}
        <div className=" flex flex-col gap-0 items-center justify-center p-7 shrink-0 w-full">
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
        <div className=" border-y border-stone-900 flex flex-wrap p-4 lg:p-6 gap-4 lg:gap-10  h-auto items-center justify-center relative shrink-0 w-full">
          <div
            className="flex h-16 items-center justify-center relative shrink-0 w-16"
            style={iconFilterStyle}
          >
            <HomeIcon sx={{ fontSize: 48, color: '#EF4444' }} aria-hidden="true" />
          </div>
          <div
            className="flex h-16 items-center justify-center relative shrink-0 w-16"
            style={iconFilterStyle}
          >
            <PrintIcon sx={{ fontSize: 48, color: '#65A30D' }} aria-hidden="true" />
          </div>
          <div
            className="flex h-16 items-center justify-center relative shrink-0 w-16"
            style={iconFilterStyle}
          >
            <SearchIcon sx={{ fontSize: 48, color: '#2563EB' }} aria-hidden="true" />
          </div>
        </div>

        {/* CTA Section */}
        <div className=" flex gap-2 items-center justify-center pt-4 px-1 relative shrink-0 w-full">
          <div className="flex flex-col font-sans font-normal justify-center  text-base text-stone-900 text-center ">
            <p className="leading-normal">
              Select a type to see how color blindness affects the color perception
            </p>
          </div>
        </div>

        {/* Control */}
        <div
          className="Control flex gap-2 items-center justify-center p-4 relative shrink-0 w-full"
          role="group"
          aria-label="Color blindness type"
        >
          <IconButton
            type="tertiary"
            size="small"
            icon={<ArrowBackIosNewRoundedIcon />}
            onClick={goPrev}
            className="shrink-0"
          />
          <div className="ColorBlindnessTitle min-w-[140px] text-center md:text-xl font-medium font-sans text-base text-stone-900">
            {currentLabel}
          </div>
          <IconButton
            type="tertiary"
            size="small"
            icon={<ArrowForwardIosRoundedIcon />}
            onClick={goNext}
            className="shrink-0"
          />
        </div>
      </div>
    </div>
  );
}
