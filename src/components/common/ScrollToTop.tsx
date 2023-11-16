// react
import { useCallback, useEffect, useRef } from 'react';

// next-intl
import { useTranslations } from 'next-intl';

// icon
import { FaArrowUp } from 'react-icons/fa6';

// types
interface ScrollToTopProps {
  triggerAt?: number;
}

const ScrollToTop = ({ triggerAt = 100 }: ScrollToTopProps) => {
  const t = useTranslations('Other');
  const ref = useRef<HTMLButtonElement>(null);
  const handleScroll = useCallback(() => {
    if (!ref.current || window.innerWidth < 1024) return;
    if (document.documentElement.scrollTop > triggerAt) {
      ref.current.classList.remove('opacity-0');
      ref.current.classList.remove('pointer-events-none');
      ref.current.classList.add('opacity-80');
    } else {
      ref.current.classList.remove('opacity-80');
      ref.current.classList.add('opacity-0');
      ref.current.classList.add('pointer-events-none');
    }
  }, [triggerAt]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <button
      ref={ref}
      aria-label={t('backToTop')}
      className="hover:brighness-110 fixed bottom-4 right-4 z-20 hidden aspect-square w-[48px] items-center justify-center rounded-full border-[1px] border-borderGray bg-bgDarkGray text-white opacity-0 transition-all duration-500 hover:bg-accent lg:flex xl:bottom-10 xl:right-10"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <FaArrowUp size={24} />
    </button>
  );
};

export default ScrollToTop;
