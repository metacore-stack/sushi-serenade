'use client';

// react
import { useRef, useEffect, useCallback } from 'react';

const ScrollDown = () => {
  const ref = useRef<HTMLDivElement>(null);

  const handleScroll = useCallback(() => {
    if (!ref.current) return;

    if (document.documentElement.scrollTop > 0) {
      ref.current.classList.remove('opacity-50');
      ref.current.classList.add('opacity-0');
    } else {
      ref.current.classList.remove('opacity-0');
      ref.current.classList.add('opacity-50');
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);
  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="absolute bottom-8 left-8 hidden h-[48px] w-[32px] rounded-full border-2 border-white opacity-50 transition-all duration-500 md:block"
    >
      <div className="absolute left-1/2 top-[10%] aspect-square w-[8px] -translate-x-1/2 animate-scroll rounded-full bg-white"></div>
    </div>
  );
};

export default ScrollDown;
