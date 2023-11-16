// next-intl
import { useTranslations, useLocale } from 'next-intl';

// clsx
import clsx from 'clsx';

const Title = () => {
  const t = useTranslations('Header');
  const locale = useLocale();
  return (
    <div className="pointer-events-none absolute left-[5%] top-1/2 z-[1] flex -translate-y-1/2 select-none flex-col gap-1 text-white drop-shadow-md md:left-[10%] md:top-[40%] md:gap-4">
      <h1
        className={clsx(
          'rounded-[32px] bg-[linear-gradient(to_right,rgba(0,0,0,0.5),transparent)] px-6 py-2 leading-[1] first-letter:text-[1.4em] first-letter:text-accent md:px-10 md:py-4',
          locale === 'ja'
            ? 'text-[clamp(2rem,1rem_+_5vw,6rem)]'
            : 'text-[clamp(1.5rem,1rem_+_4vw,5.25rem)]',
        )}
      >
        {t('title')}
      </h1>
      <p
        className={clsx(
          ' ml-[30%] whitespace-nowrap rounded-[32px] bg-[linear-gradient(to_right,rgba(0,0,0,0.5),transparent)] px-4 py-1 md:px-8 md:py-2',
          locale === 'ja'
            ? 'text-[clamp(1rem,0.5rem_+_3vw,3.5rem)]'
            : 'text-[clamp(1rem,0.5rem_+_2vw,3rem)]',
        )}
      >
        {t('subTitle')}
      </p>
    </div>
  );
};

export default Title;
