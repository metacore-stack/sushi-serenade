// next
import Image from 'next/image';

// next-intl
import { useTranslations } from 'next-intl';

// components
import Reveal from '@/components/common/Reveal';

const Atmosphere = () => {
  const t = useTranslations('Atmosphere');
  return (
    <section
      id="atmosphere"
      className="flex items-center justify-center bg-bgDarkGray"
    >
      <div className="flex max-w-[1440px] flex-col items-center justify-evenly gap-[48px] py-[48px] md:flex-row md:gap-[16px] md:px-[32px] xl:justify-center xl:gap-[82px]">
        <Reveal effect="scaleUpS">
          <Image
            src="/images/atmosphere/atmosphere.png"
            alt={t('title')}
            width="754"
            height="737"
            sizes="(max-width: 480px) 100vw, 50vw"
            className="mx-auto w-[754px] max-w-[90%] md:max-w-[100%]"
          />
        </Reveal>
        <Reveal className="max-w-[80%] md:max-w-[460px]" threshold={0.1}>
          <div className="flex flex-col items-center justify-center gap-[32px]">
            <h2 className="text-[clamp(40px,20px_+_3vw,60px)] text-accent">
              {t('title')}
            </h2>
            <p className="text-center text-[clamp(24px,4px_+_2vw,28px)] leading-[1.65]">
              {t('description')}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Atmosphere;
