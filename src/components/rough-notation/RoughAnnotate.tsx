'use client';

import React, { JSX, useEffect, useMemo, useRef } from 'react';
import { annotate } from 'rough-notation';

interface RoughAnnotateProps {
  children: React.ReactNode;
  type: 'underline' | 'box' | 'circle' | 'highlight' | 'strike-through' | 'crossed-off' | 'bracket';
  color?: string;
  strokeWidth?: number;
  padding?: number | [number, number] | [number, number, number, number];
  animationDuration?: number;
  multiline?: boolean;
  iterations?: number;
  brackets?: 'left' | 'right' | 'top' | 'bottom' | Array<'left' | 'right' | 'top' | 'bottom'>;
  rtl?: boolean;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  showWhenVisible?: boolean;
  rootMargin?: string;
  threshold?: number;
  delay?: number;
}

export function RoughAnnotate({
  children,
  type,
  color,
  strokeWidth,
  padding,
  animationDuration = 800,
  multiline = true,
  iterations,
  brackets,
  rtl,
  className,
  as = 'span',
  showWhenVisible = true,
  rootMargin = '0px 0px -10% 0px',
  threshold = 0.1,
  delay = 0,
}: RoughAnnotateProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Tag = as as any;
  const elementRef = useRef<HTMLElement | null>(null);
  const options = useMemo(
    function createOptions() {
      return {
        type,
        color,
        strokeWidth,
        padding,
        animationDuration,
        multiline,
        iterations,
        brackets,
        rtl,
      } as const;
    },
    [type, color, strokeWidth, padding, animationDuration, multiline, iterations, brackets, rtl]
  );

  useEffect(
    function setupAnnotation() {
      if (!elementRef.current) return;
      const annotation = annotate(elementRef.current, options);

      const showAnnotation = () => {
        if (delay > 0) {
          return setTimeout(() => {
            annotation.show();
          }, delay);
        }
        annotation.show();
        return null;
      };

      if (!showWhenVisible) {
        const timeoutId = showAnnotation();
        return function cleanup() {
          if (timeoutId) clearTimeout(timeoutId);
        };
      }

      let timeoutId: ReturnType<typeof setTimeout> | null = null;
      const observer = new IntersectionObserver(
        entries => {
          const entry = entries[0];
          if (entry && entry.isIntersecting) {
            timeoutId = showAnnotation();
            observer.disconnect();
          }
        },
        { root: null, rootMargin, threshold }
      );
      observer.observe(elementRef.current);

      return function cleanup() {
        observer.disconnect();
        if (timeoutId) clearTimeout(timeoutId);
      };
    },
    [options, showWhenVisible, rootMargin, threshold, delay]
  );

  return (
    <Tag ref={elementRef} className={className}>
      {children}
    </Tag>
  );
}

export default RoughAnnotate;
