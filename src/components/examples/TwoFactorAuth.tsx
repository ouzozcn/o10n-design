'use client';

import React, { useState, useRef, useEffect, KeyboardEvent } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import Image from 'next/image';
import { Loader2Icon } from 'lucide-react';
import { cn } from '@/lib/utils';

const VERIFY_DELAY_MS = 1600;

interface TwoFactorAuthProps {
  /** Primary CTA after successful verification (defaults to case studies index). */
  caseStudyHref?: string;
  caseStudyLabel?: string;
}

export default function TwoFactorAuth({
  caseStudyHref = '/case-study/jotform-2fa',
  caseStudyLabel = 'Read the Jotform 2FA',
}: TwoFactorAuthProps) {
  const [otp, setOtp] = useState<string[]>(['', '', '', '', '', '']);
  const [verificationStatus, setVerificationStatus] = useState<'idle' | 'verifying' | 'verified'>(
    'idle'
  );
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const verifyTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (verifyTimeoutRef.current) clearTimeout(verifyTimeoutRef.current);
    };
  }, []);

  const handleChange = (index: number, value: string) => {
    // Only allow single digit
    if (value.length > 1) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: KeyboardEvent<HTMLInputElement>) => {
    // Handle backspace
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').slice(0, 6);
    const newOtp = [...otp];

    for (let i = 0; i < pastedData.length && i < 6; i++) {
      if (/^\d$/.test(pastedData[i])) {
        newOtp[i] = pastedData[i];
      }
    }

    setOtp(newOtp);
    const nextEmptyIndex = newOtp.findIndex(val => val === '');
    const focusIndex = nextEmptyIndex === -1 ? 5 : nextEmptyIndex;
    inputRefs.current[focusIndex]?.focus();
  };

  const handleReset = () => {
    if (verifyTimeoutRef.current) {
      clearTimeout(verifyTimeoutRef.current);
      verifyTimeoutRef.current = null;
    }
    setOtp(['', '', '', '', '', '']);
    setVerificationStatus('idle');
    setTimeout(() => {
      inputRefs.current[0]?.focus();
    }, 0);
  };

  const handleSubmit = () => {
    if (verificationStatus !== 'idle') return;

    const code = otp.join('');
    if (code.length !== 6) return;

    setVerificationStatus('verifying');
    if (verifyTimeoutRef.current) clearTimeout(verifyTimeoutRef.current);
    verifyTimeoutRef.current = setTimeout(() => {
      setVerificationStatus('verified');
      verifyTimeoutRef.current = null;
    }, VERIFY_DELAY_MS);
  };

  return (
    <div className="w-full flex flex-col border border-stone-900  rounded-lg lg:max-w-[600px] bg-white">
      {/* Icon Section */}
      <div className="flex items-center border-b border-stone-900 p-4">
        {/* Title Section */}

        <Image
          src="/img/twofa/Jotform_Logo.svg"
          alt="Jotform Logo"
          width={1}
          height={24}
          className="block max-w-none object-contain mx-auto w-auto h-auto"
        />
      </div>

      {/* Content Section */}
      <div
        className={cn('p-6 flex flex-col gap-4', verificationStatus !== 'idle' && 'min-h-[280px]')}
        aria-busy={verificationStatus === 'verifying'}
      >
        {verificationStatus === 'verifying' && (
          <div
            className="flex flex-1 flex-col items-center justify-center gap-4 py-8 text-center"
            role="status"
            aria-live="polite"
          >
            <Loader2Icon className="size-10 text-stone-700 animate-spin" aria-hidden />
            <p className="text-stone-900 text-base font-sans">Verifying your code…</p>
            <p className="text-stone-600 text-sm font-sans max-w-xs">
              This is a demo—any 6-digit code completes successfully.
            </p>
          </div>
        )}

        {verificationStatus === 'verified' && (
          <div
            className="flex flex-1 flex-col items-center justify-center gap-5 py-6 text-center"
            role="status"
            aria-live="polite"
          >
            <div
              className="flex size-14 items-center justify-center rounded-full bg-green-600 text-white shadow-sm"
              aria-hidden
            >
              <CheckRoundedIcon className="!size-8" />
            </div>
            <div className="space-y-2">
              <p className="text-stone-900 text-lg font-sans font-medium">
                Verification successful
              </p>
              <p className="text-stone-600 text-sm font-sans max-w-sm">
                In the real product, users land back in their workflow. Here you can continue to the
                case study for how this flow was designed and shipped.
              </p>
            </div>
            <div className="flex w-full max-w-sm flex-col gap-3 sm:flex-row sm:items-stretch">
              <Button
                variant="default"
                size="lg"
                className="w-full min-h-10 shrink-0 sm:flex-1"
                asChild
              >
                <Link href={caseStudyHref}>
                  {caseStudyLabel}
                  <ArrowForwardRoundedIcon className="!size-5 shrink-0" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="w-full min-h-10 shrink-0 sm:flex-1"
                onClick={handleReset}
              >
                Try again
              </Button>
            </div>
          </div>
        )}

        {verificationStatus === 'idle' && (
          <>
            <div className="text-stone-900 text-base text-center font-sans">
              Write a random 6-digit code to simulate a 2FA verification
            </div>

            <div className="flex gap-2 justify-center">
              {otp.map((digit, index) => (
                <div key={index} className="relative w-12 h-14">
                  <input
                    ref={el => {
                      inputRefs.current[index] = el;
                    }}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    value={digit}
                    onChange={e => handleChange(index, e.target.value.replace(/\D/g, ''))}
                    onKeyDown={e => handleKeyDown(index, e)}
                    onFocus={() => setFocusedIndex(index)}
                    onBlur={() => setFocusedIndex(null)}
                    onPaste={index === 0 ? handlePaste : undefined}
                    className="w-full h-full text-center text-2xl font-sans border border-stone-800 rounded-md focus:border-blue-400 focus:ring-2 focus:ring-blue-600 focus:bg-amber-200 hover:bg-amber-200 transition-colors duration-300 text-stone-900 bg-transparent"
                  />
                  {!digit && focusedIndex !== index && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12.0003 4C12.5526 4 13.0003 4.44772 13.0003 5V10.2677L17.562 7.63403C18.0403 7.35789 18.6519 7.52177 18.928 8.00006C19.2042 8.47835 19.0403 9.08994 18.562 9.36608L13.9998 12.0001L18.562 14.634C19.0403 14.9102 19.2042 15.5218 18.928 16.0001C18.6519 16.4784 18.0403 16.6422 17.562 16.3661L13.0003 13.7324V19C13.0003 19.5523 12.5526 20 12.0003 20C11.448 20 11.0003 19.5523 11.0003 19V13.7318L6.43767 16.3661C5.95937 16.6422 5.34778 16.4784 5.07164 16.0001C4.7955 15.5218 4.95937 14.9102 5.43767 14.634L9.99985 12.0001L5.43767 9.36608C4.95937 9.08994 4.7955 8.47835 5.07164 8.00006C5.34778 7.52176 5.95938 7.35789 6.43767 7.63403L11.0003 10.2683V5C11.0003 4.44772 11.448 4 12.0003 4Z"
                          fill="#A8A29E"
                        />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="flex justify-center">
              <Button
                variant="default"
                size="lg"
                onClick={handleSubmit}
                disabled={otp.join('').length !== 6}
              >
                Verify
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
