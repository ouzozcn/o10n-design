'use client';

import React from 'react';
import CircleRoundedIcon from '@mui/icons-material/CircleRounded';
import { useControlledState } from '@/hooks/use-controlled-state';
import { cn } from '@/lib/utils';

export interface RadioButtonProps {
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  name?: string;
  value?: string;
  'aria-label'?: string;
  disabled?: boolean;
}

function RadioButton({
  checked: controlledChecked,
  defaultChecked = false,
  onChange,
  size = 'sm',
  className = '',
  name,
  value,
  'aria-label': ariaLabel,
  disabled = false,
}: RadioButtonProps) {
  const [checked, setChecked] = useControlledState({
    value: controlledChecked,
    defaultValue: defaultChecked,
    onChange: value => onChange?.(value),
  });

  const [isHovered, setIsHovered] = React.useState(false);

  const handleClick = () => {
    if (disabled) return;
    setChecked(!checked);
  };

  // Determine visual state
  const visualState = checked ? 'checked' : isHovered ? 'hover' : 'default';

  // Size configurations
  const sizeConfig = {
    sm: {
      iconSize: '12px',
      containerSize: 'calc(12px + 8px)', // icon + padding (4px * 2)
    },
    md: {
      iconSize: '16px',
      containerSize: 'calc(16px + 8px)',
    },
    lg: {
      iconSize: '24px',
      containerSize: 'calc(24px + 8px)',
    },
  };

  const config = sizeConfig[size];

  // Styles based on state
  const getStyles = () => {
    switch (visualState) {
      case 'checked':
        return {
          backgroundColor: '#fffbeb', // amber/50
          borderColor: '#1c1917', // stone/900
          borderWidth: '1px',
        };
      case 'hover':
        return {
          backgroundColor: '#fffbeb', // amber/50
          borderColor: '#a8a29e', // stone/400
          borderWidth: '1px',
        };
      default:
        return {
          backgroundColor: 'transparent',
          borderColor: '#a8a29e', // stone/400
          borderWidth: '1px',
        };
    }
  };

  const styles = getStyles();
  const iconColor = visualState === 'checked' ? '#1c1917' : '#a8a29e'; // dark for checked, gray for hover

  return (
    <button
      type="button"
      role="radio"
      aria-checked={checked}
      aria-label={ariaLabel || 'Radio button'}
      name={name}
      value={value}
      onClick={handleClick}
      disabled={disabled}
      onMouseEnter={() => !disabled && setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        'border border-solid box-border flex items-center justify-center p-1 rounded-full transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-200',
        disabled && 'opacity-50 cursor-not-allowed',
        className
      )}
      style={{
        width: config.containerSize,
        height: config.containerSize,
        ...styles,
      }}
    >
      <CircleRoundedIcon
        style={{
          width: config.iconSize,
          height: config.iconSize,
          color: iconColor,
          opacity: visualState === 'default' ? 0 : 1,
          transition: 'opacity 0.2s',
        }}
      />
    </button>
  );
}

export default RadioButton;
