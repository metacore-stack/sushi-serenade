// next
import Image from 'next/image';

// next-intl
import { useTranslations } from 'next-intl';

// components
import AccessInformation from './AccessInformation';
import Reveal from '@/components/common/Reveal';

const Access = () => {
  const t = useTranslations('Access');
  return (
    <section
      id="access"
      className="relative flex items-center justify-center py-[64px] md:py-[128px]"
    >
      <h2 className="sr-only">{t('title')}</h2>
      <Image
        src="/images/access/bg.jpg"
        alt="Background"
        aria-hidden="true"
        fill
        sizes="100vw"
        className="object-cover opacity-30"
      />
      <div className="relative mx-auto flex w-[1296px] max-w-[95%] flex-col items-center justify-evenly gap-x-[16px] gap-y-[32px] text-[clamp(18px,4px_+_1vw,20px)] md:gap-y-[48px] lg:flex-row lg:items-stretch">
        <Reveal effect="fadeRTL" className="flex max-w-full">
          <AccessInformation />
        </Reveal>
        <Reveal effect="fadeLTR">
          <Image
            src="/images/access/map.png"
            alt="Map"
            width="500"
            height="400"
            aria-hidden="true"
            sizes="500px"
            className="rounded-[32px] border-[1px] border-borderGray"
          />
        </Reveal>
      </div>
    </section>
  );
};

export default Access;
