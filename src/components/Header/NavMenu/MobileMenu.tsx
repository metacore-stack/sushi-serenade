// next-intl
import { useTranslations } from 'next-intl';

// framer-motion
import { m, LazyMotion, domAnimation } from 'framer-motion';

// components
import LanguageSelect from './LanguageSelect';

// clsx
import clsx from 'clsx';

// hover style
import { navHover } from '@/styles/navHover';

// menu items data
import menu from '@/data/navigation-menu.json';

const MobileMenu = ({
  setIsMobileMenuOpen,
}: {
  setIsMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const t = useTranslations('NavMenu');
  return (
    <LazyMotion features={domAnimation}>
      <m.div
        id="mobile-menu"
        className="absolute top-0 z-10 flex h-screen w-full items-start justify-center bg-black/80 pt-12 text-[clamp(1.25rem,2vw,1.5rem)] text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        <nav>
          <ul className="flex flex-col gap-4">
            {menu.map((item, i) => (
              <li
                key={i}
                className="flex flex-col items-center justify-center gap-4"
              >
                <a
                  href={`#${item}`}
                  className={clsx(
                    'relative transition-all duration-300 hover:text-accent',
                    navHover,
                  )}
                >
                  {t(item)}
                </a>
                <div className="aspect-square w-2 select-none rounded-full bg-accent" />
              </li>
            ))}
            <li>
              <LanguageSelect />
            </li>
          </ul>
        </nav>
      </m.div>
    </LazyMotion>
  );
};

export default MobileMenu;
