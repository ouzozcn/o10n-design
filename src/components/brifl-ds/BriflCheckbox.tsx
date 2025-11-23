'use client';

import React, { useState } from 'react';

export interface BriflCheckboxProps {
  state?: 'default' | 'hover' | 'selected';
  checked?: boolean;
  defaultChecked?: boolean;
  primaryColor?: string;
  onChange?: (checked: boolean) => void;
  className?: string;
  'aria-label'?: string;
}

function BriflCheckbox({
  state,
  checked: controlledChecked,
  defaultChecked = false,
  primaryColor = '#1F4FDE',
  onChange,
  className = '',
  'aria-label': ariaLabel,
}: BriflCheckboxProps) {
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

  const CheckmarkIcon = () => (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute inset-0 m-auto"
    >
      <path
        d="M10 3L4.5 8.5L2 6"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

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
      role="checkbox"
      aria-checked={checked}
      aria-label={ariaLabel || 'Checkbox'}
      onClick={handleClick}
      onMouseEnter={() => !state && setIsHovered(true)}
      onMouseLeave={() => !state && setIsHovered(false)}
      className={`relative w-6 h-6 rounded-[6px] border border-solid transition-colors duration-200 cursor-pointer ${className}`}
      style={styles}
    >
      {visualState === 'selected' && <CheckmarkIcon />}
      {visualState === 'hover' && !checked && (
        <div className="absolute inset-[8.33%] opacity-50">
          <CheckmarkIcon />
        </div>
      )}
    </button>
  );
}

export default BriflCheckbox;
