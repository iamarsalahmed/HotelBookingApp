"use client"

import { useLayoutEffect } from 'react';

const useLockBody = () => {
  useLayoutEffect((): (() => void) => {
    const originalStyle: string = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, []);
};

export default useLockBody;