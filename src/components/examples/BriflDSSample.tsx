'use client';

import React, { useState } from 'react';
import Circle from '@uiw/react-color-circle';
import BriflCheckbox from '@/components/brifl-ds/BriflCheckbox';
import BriflRadio from '@/components/brifl-ds/BriflRadio';
import BriflToggle from '@/components/brifl-ds/BriflToggle';

export default function BriflDSSample() {
  const [primaryColor, setPrimaryColor] = useState('#1F4FDE');
  const [checkboxChecked, setCheckboxChecked] = useState(true);
  const [radioChecked, setRadioChecked] = useState(true);
  const [toggleChecked, setToggleChecked] = useState(true);

  // Default color palette matching Figma design
  const colorPalette = [
    '#1F4FDE', // Primary blue
    '#EF4444', // Red
    '#84CC16', // Lime
    '#06B6D4', // Cyan
    '#8B5CF6', // Violet
    '#14B8A6', // Teal
    '#EC4899', // Pink
    '#F59E0B', // Amber
    '#F43F5E', // Rose
  ];

  return (
    <div className="border border-stone-800 rounded-lg w-full flex flex-col lg:max-w-[600px]">
      {/* Theme Switcher Section */}
      <div className="border-b border-stone-800 p-3 flex flex-col gap-3">
        <div className="text-xl font-medium text-stone-900 tracking-tight">brifl.Theme</div>
        <div className="flex items-center gap-2">
          <Circle
            colors={colorPalette}
            color={primaryColor}
            onChange={color => {
              setPrimaryColor(color.hex);
            }}
          />
        </div>
      </div>

      {/* Components Showcase Section */}
      <div className="flex flex-col md:flex-row items-center">
        {/* Checkbox Section */}
        <div className="p-3 flex flex-col gap-3 md:border-r border-stone-800 items-center md:items-start">
          <div className="text-xl font-medium text-stone-900 tracking-tight">brifl.Checkbox</div>
          <BriflCheckbox
            checked={checkboxChecked}
            onChange={setCheckboxChecked}
            primaryColor={primaryColor}
          />
        </div>

        {/* Radio Section */}
        <div className="p-3 flex flex-col gap-3 md:border-r border-stone-800 items-center md:items-start">
          <div className="text-xl font-medium text-stone-900 tracking-tight">brifl.Radio</div>
          <BriflRadio
            checked={radioChecked}
            onChange={setRadioChecked}
            primaryColor={primaryColor}
          />
        </div>

        {/* Toggle Section */}
        <div className="p-3 flex flex-col gap-3 items-center md:items-start">
          <div className="text-xl font-medium text-stone-900 tracking-tight">brifl.Toggle</div>
          <BriflToggle
            checked={toggleChecked}
            onChange={setToggleChecked}
            primaryColor={primaryColor}
          />
        </div>
      </div>
    </div>
  );
}
