// next
import Image from 'next/image';

// next-intl
import { useTranslations } from 'next-intl';

// clsx
import clsx from 'clsx';

// components
import Reveal from '@/components/common/Reveal';

// sushi types data
import sushiTypes from '@/data/sushi-types.json';

const SushiTypes = () => {
  const t = useTranslations('SushiTypes');
  return (
    <section className="flex flex-col items-center justify-center gap-[24px] py-[24px] md:gap-[48px] md:py-[48px]">
      <h2 className="sr-only">{t('title')}</h2>
      {sushiTypes.map((item, i) => (
        <article
          className={clsx(
            'flex w-[1296px] max-w-[95%] flex-col gap-[24px] md:max-w-[calc(100%_-_96px)] md:gap-[48px]',
            i % 2 ? 'md:flex-row' : 'md:flex-row-reverse',
          )}
          key={i}
        >
          <Reveal>
            <div className="relative aspect-square h-[140px] w-full flex-shrink-0 overflow-hidden rounded-[32px] border-[1px] border-borderGray md:h-auto md:w-[200px] xl:w-[280px]">
              <Image
                src={item.image}
                alt={t(`${item.title}Title`)}
                fill
                sizes="(max-width: 480px) 100vw, (max-width: 768px) 200px, 280px"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal
            delay={0.25}
            effect={i % 2 ? 'fadeLTR' : 'fadeRTL'}
            className="flex"
          >
            <div className="flex flex-col items-center justify-center gap-[10px] rounded-[32px] border-[1px] border-borderGray bg-bgDarkGray p-[42px] md:items-start md:px-[32px] md:py-[16px] lg:px-[64px]">
              <h3 className="text-[clamp(28px,10px_+_2vw,40px)] text-accent">
                {t(`${item.title}Title`)}
              </h3>
              <p className="text-center text-[clamp(18px,8px_+_1vw,26px)] md:text-left">
                {t(`${item.title}Description`)}
              </p>
            </div>
          </Reveal>
        </article>
      ))}
    </section>
  );
};

export default SushiTypes;
