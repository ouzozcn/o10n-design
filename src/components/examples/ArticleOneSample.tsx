'use client';

import React from 'react';
import Button from '@/components/Button';
import Input from '@/components/Input';
import RadioButton from '@/components/RadioButton';
import ToggleButton from '@/components/ToggleButton';
import WestRoundedIcon from '@mui/icons-material/WestRounded';
import EastRoundedIcon from '@mui/icons-material/EastRounded';
type ButtonType = 'primary' | 'secondary' | 'tertiary';
type ButtonSize = 'small' | 'medium' | 'large' | 'xlarge';
import { ToastContainer } from 'react-toastify';
import { showCustomToast } from '@/components/CustomToast';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
export default function ArticleOneSample() {
  const [label, setLabel] = React.useState('Type your label');
  const [type, setType] = React.useState<ButtonType>('primary');
  const [size, setSize] = React.useState<ButtonSize>('medium');
  const [hasStartIcon, setHasStartIcon] = React.useState(true);
  const [hasEndIcon, setHasEndIcon] = React.useState(true);
  const handleClickOne = () => {
    showCustomToast(
      'You can change the properties of the button and see the changes in the preview.'
    );
  };
  return (
    <div className="bg-white border  border-stone-900 rounded-lg w-full lg:max-w-[600px]">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        icon={false}
        closeButton={false}
      />
      <div className="flex flex-col">
        {/* Button Preview Section */}
        <div className="bg-amber-50 flex items-center justify-center px-7 py-6 w-full lg:h-[100px] rounded-t-lg">
          <Button
            label={label}
            type={type}
            size={size}
            startIcon={hasStartIcon ? <WestRoundedIcon /> : undefined}
            endIcon={hasEndIcon ? <EastRoundedIcon /> : undefined}
            onClick={handleClickOne}
          />
        </div>

        {/* Label Section */}
        <div className="border-t border-stone-900 flex flex-col gap-5 items-start justify-center px-5 py-4 w-full">
          <div className="flex gap-3 items-center w-full">
            <div className="font-mono font-semibold text-lg text-stone-900 whitespace-nowrap shrink-0">
              label:
            </div>
            <div className="flex-1 min-w-0">
              <Input
                value={label}
                onChange={setLabel}
                placeholder="Enter label..."
                state={label.length >= 24 ? 'error' : 'idle'}
                className="w-full"
                startIcon={<EditRoundedIcon />}
                maxLength={24}
              />
            </div>
          </div>
        </div>

        {/* Type Section */}
        <div className="border-t border-stone-900 flex flex-col gap-5 items-start justify-center px-5 py-4 w-full">
          <div className="flex gap-3 items-center">
            <div className="font-mono font-semibold text-lg text-stone-900 whitespace-nowrap shrink-0">
              type?:
            </div>
            <div
              className="flex flex-col md:flex-row gap-3 items-start"
              role="radiogroup"
              aria-label="Button type"
            >
              <div className="flex gap-2 items-center">
                <RadioButton
                  name="button-type"
                  value="primary"
                  checked={type === 'primary'}
                  onChange={checked => checked && setType('primary')}
                  size="md"
                  aria-label="Primary type"
                />
                <div className="font-mono font-medium text-lg text-stone-900 whitespace-nowrap">
                  Primary
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <RadioButton
                  name="button-type"
                  value="secondary"
                  checked={type === 'secondary'}
                  onChange={checked => checked && setType('secondary')}
                  size="md"
                  aria-label="Secondary type"
                />
                <div className="font-mono font-medium text-lg text-stone-900 whitespace-nowrap">
                  Secondary
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <RadioButton
                  name="button-type"
                  value="tertiary"
                  checked={type === 'tertiary'}
                  onChange={checked => checked && setType('tertiary')}
                  size="md"
                  aria-label="Tertiary type"
                />
                <div className="font-mono font-medium text-lg text-stone-900 whitespace-nowrap">
                  Tertiary
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Size Section */}
        <div className="border-t border-stone-900 flex flex-col gap-5 items-start justify-center px-5 py-4 w-full">
          <div className="flex gap-3 items-center">
            <div className="font-mono font-semibold text-lg text-stone-900 whitespace-nowrap shrink-0">
              size?:
            </div>
            <div
              className="flex flex-col md:flex-row gap-3 items-start"
              role="radiogroup"
              aria-label="Button size"
            >
              <div className="flex gap-2 items-center">
                <RadioButton
                  name="button-size"
                  value="small"
                  checked={size === 'small'}
                  onChange={checked => checked && setSize('small')}
                  size="md"
                  aria-label="Small size"
                />
                <div className="font-mono font-medium text-lg text-stone-900 whitespace-nowrap">
                  Small
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <RadioButton
                  name="button-size"
                  value="medium"
                  checked={size === 'medium'}
                  onChange={checked => checked && setSize('medium')}
                  size="md"
                  aria-label="Medium size"
                />
                <div className="font-mono font-medium text-lg text-stone-900 whitespace-nowrap">
                  Medium
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <RadioButton
                  name="button-size"
                  value="large"
                  checked={size === 'large'}
                  onChange={checked => checked && setSize('large')}
                  size="md"
                  aria-label="Large size"
                />
                <div className="font-mono font-medium text-lg text-stone-900 whitespace-nowrap">
                  Large
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* StartIcon Section */}
        <div className="border-t border-stone-900 flex flex-col gap-5 items-start justify-center px-5 py-4 w-full">
          <div className="flex gap-3 items-center">
            <div className="font-mono font-semibold text-lg text-stone-900 whitespace-nowrap shrink-0">
              startIcon?:
            </div>
            <div className="flex gap-3 items-center">
              <ToggleButton
                checked={hasStartIcon}
                onChange={setHasStartIcon}
                size="md"
                aria-label="Toggle start icon"
              />
            </div>
          </div>
        </div>

        {/* EndIcon Section */}
        <div className="border-t border-stone-900 flex flex-col gap-5 items-start justify-center px-5 py-4 w-full">
          <div className="flex gap-3 items-center">
            <div className="font-mono font-semibold text-lg text-stone-900 whitespace-nowrap shrink-0">
              endIcon?:
            </div>
            <div className="flex gap-3 items-center">
              <ToggleButton
                checked={hasEndIcon}
                onChange={setHasEndIcon}
                size="md"
                aria-label="Toggle end icon"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
