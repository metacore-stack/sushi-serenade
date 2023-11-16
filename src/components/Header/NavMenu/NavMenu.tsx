// react
import { useEffect, useState } from 'react';

// next-intl
import { useTranslations } from 'next-intl';

// framer-motion
import { AnimatePresence } from 'framer-motion';

// hamburger-react
import Hamburger from 'hamburger-react';

// components
import LanguageSelect from './LanguageSelect';
import MobileMenu from './MobileMenu';
import DesktopMenu from './DesktopMenu';
import ReservationButton from './ReservationButton';

const NavMenu = () => {
  const t = useTranslations('Header');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (isMobileMenuOpen) {
      window.scrollTo({ top: 0 });
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [isMobileMenuOpen]);
  return (
    <>
      <AnimatePresence>
        {isMobileMenuOpen && (
          <MobileMenu setIsMobileMenuOpen={setIsMobileMenuOpen} />
        )}
      </AnimatePresence>
      <div className="absolute top-0 flex min-h-[42px] w-full items-center justify-between bg-black/40 px-4 text-[clamp(1rem,2vw,1.5rem)] text-white md:min-h-[64px] md:justify-end md:px-8 2xl:px-12">
        <div className="z-10 md:hidden">
          <Hamburger
            onToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            toggled={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-expanded={isMobileMenuOpen}
            label={t('hamburgerMenu')}
          />
        </div>
        <ReservationButton className="md:hidden" />
        <div className="hidden flex-grow md:block">
          <LanguageSelect />
        </div>
        <DesktopMenu />
      </div>
    </>
  );
};

export default NavMenu;
