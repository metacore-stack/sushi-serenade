// next-intl
import { useLocale } from 'next-intl';
import Link from 'next-intl/link';

// clsx
import clsx from 'clsx';

// hover style
import { navHover } from '@/styles/navHover';

const LanguageSelect = () => {
  const locale = useLocale();
  return (
    <div className="flex flex-grow text-lg [&_a]:transition-all [&_a]:duration-200 [&_a]:will-change-transform hover:[&_a]:scale-110 hover:[&_a]:text-accent">
      <Link
        href="/"
        locale="en"
        className={
          locale === 'en' ? 'scale-110 font-bold text-accent' : navHover
        }
      >
        English
      </Link>
      &nbsp;&nbsp;/&nbsp;&nbsp;
      <Link
        href="/"
        locale="ja"
        className={
          locale === 'ja' ? 'scale-110 font-bold text-accent' : navHover
        }
      >
        日本語
      </Link>
    </div>
  );
};

export default LanguageSelect;
