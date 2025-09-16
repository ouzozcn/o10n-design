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
}

export function RoughAnnotate({
  children,
  type,
  color,
  strokeWidth,
  padding,
  animationDuration = 800,
  multiline,
  iterations,
  brackets,
  rtl,
  className,
  as = 'span',
  showWhenVisible = true,
  rootMargin = '0px 0px -10% 0px',
  threshold = 0.1,
}: RoughAnnotateProps) {
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

      if (!showWhenVisible) {
        annotation.show();
        return;
      }

      const observer = new IntersectionObserver(
        entries => {
          const entry = entries[0];
          if (entry && entry.isIntersecting) {
            annotation.show();
            observer.disconnect();
          }
        },
        { root: null, rootMargin, threshold }
      );
      observer.observe(elementRef.current);

      return function cleanup() {
        observer.disconnect();
      };
    },
    [options, showWhenVisible, rootMargin, threshold]
  );

  return (
    <Tag ref={elementRef} className={className}>
      {children}
    </Tag>
  );
}

export default RoughAnnotate;
