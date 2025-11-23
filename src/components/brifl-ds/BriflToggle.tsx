'use client';

import React, { useState } from 'react';

export interface BriflToggleProps {
  checked?: boolean;
  defaultChecked?: boolean;
  primaryColor?: string;
  onChange?: (checked: boolean) => void;
  className?: string;
  'aria-label'?: string;
  disabled?: boolean;
}

function BriflToggle({
  checked: controlledChecked,
  defaultChecked = false,
  primaryColor = '#1F4FDE',
  onChange,
  className = '',
  'aria-label': ariaLabel,
  disabled = false,
}: BriflToggleProps) {
  // Internal state for uncontrolled mode
  const [internalChecked, setInternalChecked] = useState(defaultChecked);

  // Determine if component is controlled
  const isControlled = controlledChecked !== undefined;
  const checked = isControlled ? controlledChecked : internalChecked;

  const handleClick = () => {
    if (disabled) return;

    const newChecked = !checked;

    if (!isControlled) {
      setInternalChecked(newChecked);
    }

    onChange?.(newChecked);
  };

  // Checkmark icon for "on" state
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

  // X icon for "off" state
  const CloseIcon = () => (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute inset-0 m-auto"
    >
      <path
        d="M2 2L10 10M10 2L2 10"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const trackColor = checked ? primaryColor : '#AAAAAA';

  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={ariaLabel || 'Toggle switch'}
      onClick={handleClick}
      disabled={disabled}
      className={`relative h-6 w-12 rounded-[36px] transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 ${
        disabled ? 'opacity-50 cursor-not-allowed' : ''
      } ${className}`}
      style={{
        backgroundColor: trackColor,
      }}
    >
      {/* Thumb (white circle) */}
      <div
        className="absolute top-[8.33%] bottom-[8.33%] w-[20px] h-[20px] bg-white rounded-full transition-all duration-200"
        style={{
          left: checked ? '54.17%' : '4.17%',
        }}
      />

      {/* Icon - Checkmark when on */}
      {checked && (
        <div className="absolute bottom-1/4 left-[14.58%] right-[60.42%] top-1/4">
          <CheckmarkIcon />
        </div>
      )}

      {/* Icon - X when off */}
      {!checked && (
        <div className="absolute bottom-1/4 left-[60.42%] right-[14.58%] top-1/4">
          <CloseIcon />
        </div>
      )}
    </button>
  );
}

export default BriflToggle;
