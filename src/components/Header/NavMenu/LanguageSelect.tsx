// next-intl
import { useLocale } from 'next-intl';
import Link from 'next-intl/link';

// fonts
import { bizudMincho, bitter } from '@/ui/fonts';

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
        className={clsx(
          `${bitter.variable} font-bitter`,
          locale === 'en' ? 'scale-110 font-bold text-accent' : navHover,
        )}
      >
        English
      </Link>
      <span className="mx-3">/</span>
      <Link
        href="/"
        locale="ja"
        className={clsx(
          `${bizudMincho.variable} font-bizudMincho`,
          locale === 'ja' ? 'scale-110 font-bold text-accent' : navHover,
        )}
      >
        日本語
      </Link>
    </div>
  );
};

export default LanguageSelect;
