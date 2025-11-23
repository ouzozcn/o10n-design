'use client';

import React, { useState } from 'react';

export interface BriflRadioProps {
  state?: 'default' | 'hover' | 'selected';
  checked?: boolean;
  defaultChecked?: boolean;
  primaryColor?: string;
  onChange?: (checked: boolean) => void;
  className?: string;
  name?: string;
  value?: string;
  'aria-label'?: string;
}

function BriflRadio({
  state,
  checked: controlledChecked,
  defaultChecked = false,
  primaryColor = '#1F4FDE',
  onChange,
  className = '',
  name,
  value,
  'aria-label': ariaLabel,
}: BriflRadioProps) {
  // Internal state for uncontrolled mode
  const [internalChecked, setInternalChecked] = useState(defaultChecked);

  // Determine if component is controlled
  const isControlled = controlledChecked !== undefined;
  const checked = isControlled ? controlledChecked : internalChecked;

  // Determine visual state: use explicit state prop if provided, otherwise derive from checked
  const [isHovered, setIsHovered] = useState(false);
  const visualState = state || (checked ? 'selected' : isHovered ? 'hover' : 'default');

  const handleClick = () => {
    const newChecked = !checked;

    if (!isControlled) {
      setInternalChecked(newChecked);
    }

    onChange?.(newChecked);
  };

  const getStyles = () => {
    switch (visualState) {
      case 'selected':
        return {
          backgroundColor: primaryColor,
          borderColor: primaryColor,
          borderWidth: '1px',
        };
      case 'hover':
        return {
          backgroundColor: 'white',
          borderColor: primaryColor,
          borderWidth: '1px',
        };
      default:
        return {
          backgroundColor: 'white',
          borderColor: '#E4E4E4',
          borderWidth: '1px',
        };
    }
  };

  const styles = getStyles();

  return (
    <button
      type="button"
      role="radio"
      aria-checked={checked}
      aria-label={ariaLabel || 'Radio button'}
      name={name}
      value={value}
      onClick={handleClick}
      onMouseEnter={() => !state && setIsHovered(true)}
      onMouseLeave={() => !state && setIsHovered(false)}
      className={`relative w-6 h-6 rounded-full border border-solid transition-colors duration-200 cursor-pointer ${className}`}
      style={styles}
    >
      {visualState === 'selected' && (
        <div
          className="absolute inset-[29.17%] rounded-full bg-white"
          style={{ backgroundColor: 'white' }}
        />
      )}
    </button>
  );
}

export default BriflRadio;
