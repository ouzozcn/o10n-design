import React from 'react';
import PersonIcon from '@mui/icons-material/Person';
import CheckIcon from '@mui/icons-material/Check';
import ErrorIcon from '@mui/icons-material/Error';
export type InputState =
  | 'idle'
  | 'hover'
  | 'focus'
  | 'active'
  | 'loading'
  | 'disabled'
  | 'success'
  | 'error';

export interface InputProps {
  className?: string;
  value?: string;
  placeholder?: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  state?: InputState;
  onChange?: (value: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  maxLength?: number;
}

function Input({
  className = '',
  value,
  placeholder = 'Type a placeholder...',
  startIcon,
  endIcon,
  state = 'idle',
  onChange,
  onFocus,
  onBlur,
  maxLength,
}: InputProps) {
  const getBorderColor = () => {
    switch (state) {
      case 'error':
        return 'border-red-900';
      case 'success':
        return 'border-lime-900';
      case 'disabled':
        return 'border-stone-400';
      default:
        return 'border-stone-800';
    }
  };

  const getBackgroundColor = () => {
    switch (state) {
      case 'active':
        return 'bg-amber-100';
      case 'success':
        return 'bg-lime-100';
      case 'error':
        return 'bg-red-100';
      case 'focus':
        return 'bg-amber-200';
      default:
        return '';
    }
  };

  const getTextColor = () => {
    switch (state) {
      case 'disabled':
        return 'text-stone-400';
      default:
        return 'text-stone-800';
    }
  };

  // Default user icon SVG
  const defaultStartIcon = <PersonIcon />;

  // Default loading spinner icon
  const defaultLoadingIcon = (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="animate-spin"
    >
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="32"
        strokeDashoffset="32"
      >
        <animate
          attributeName="stroke-dasharray"
          dur="2s"
          values="0 31.416;15.708 15.708;0 31.416;0 31.416"
          repeatCount="indefinite"
        />
        <animate
          attributeName="stroke-dashoffset"
          dur="2s"
          values="0;-15.708;-31.416;-31.416"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
  );

  // Default success checkmark icon
  const defaultSuccessIcon = <CheckIcon />;

  // Default error icon
  const defaultErrorIcon = <ErrorIcon />;

  const renderEndIcon = () => {
    if (state === 'loading') {
      return endIcon || defaultLoadingIcon;
    }
    if (state === 'success') {
      return endIcon || defaultSuccessIcon;
    }
    if (state === 'error') {
      return endIcon || defaultErrorIcon;
    }
    return endIcon || null;
  };

  return (
    <div className={`relative w-full ${className}`}>
      <div
        className={`
          flex items-center relative w-full rounded box-border hover:bg-amber-200 transition duration-300 ease-in-out
          ${getBorderColor()} border-2
          ${getBackgroundColor()}
          ${state === 'disabled' ? 'cursor-not-allowed' : ''}
          ${state === 'focus' ? 'border-amber-900 ring-2 ring-amber-400' : ''}
        `}
      >
        {/* Start Icon */}
        <div
          className={` flex items-center justify-center p-3 pr-1 flex-shrink-0 ${
            state === 'disabled' ? 'border-stone-400' : 'border-stone-800'
          }`}
        >
          <div className={`${state === 'disabled' ? 'text-stone-400' : 'text-stone-800'} mr-1`}>
            {startIcon || defaultStartIcon}
          </div>
        </div>

        {/* Input Field */}
        <div className="flex-1 flex items-center">
          <input
            type="text"
            value={value}
            placeholder={placeholder}
            disabled={state === 'disabled'}
            onChange={e => onChange?.(e.target.value)}
            onFocus={onFocus}
            onBlur={onBlur}
            maxLength={maxLength}
            className={`
              w-full p-3 bg-transparent 
              ${getTextColor()}
              placeholder:${getTextColor()}
            `}
            style={{
              border: 'none',
              outline: 'none',
              boxShadow: 'none',
            }}
          />
        </div>

        {/* End Icon */}
        {renderEndIcon() && (
          <div className="flex items-center justify-center p-3 pl-1 flex-shrink-0">
            <div className={`${getTextColor()} ml-1`}>{renderEndIcon()}</div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Input;
