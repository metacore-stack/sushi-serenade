// next-intl
import { useTranslations } from 'next-intl';

// clsx
import clsx from 'clsx';

// components
import ReservationButton from './ReservationButton';

// hover style
import { navHover } from '@/styles/navHover';

// menu items data
import menu from '@/data/navigation-menu.json';

const DesktopMenu = () => {
  const t = useTranslations('NavMenu');
  return (
    <nav className="hidden md:block">
      <h2 className="sr-only">{t('navigationMenu')}</h2>
      <ul className="flex gap-4">
        {menu.map((item, i) => (
          <li key={i} className="flex items-center justify-center gap-4">
            <a
              href={`#${item}`}
              className={clsx(
                'relative transition-all duration-300 will-change-transform hover:scale-110 hover:text-accent',
                navHover,
              )}
            >
              {t(item)}
            </a>
            <div className="aspect-square w-2 select-none rounded-full bg-accent" />
          </li>
        ))}
        <li>
          <ReservationButton />
        </li>
      </ul>
    </nav>
  );
};

export default DesktopMenu;
