// next
import Image from 'next/image';

// next-intl
import { useTranslations } from 'next-intl';

// components
import Reveal from '../common/Reveal';

const Preparation = () => {
  const t = useTranslations('Preparation');
  return (
    <section className="relative h-[240px] w-full overflow-hidden md:h-screen">
      <Image
        src="/images/preparation/bg.jpg"
        alt="Background"
        aria-hidden="true"
        width="10"
        height="10"
        sizes="115vw"
        className="absolute right-0 w-auto min-w-[115vw] max-w-none md:min-h-full"
      />
      <Reveal className="absolute right-[5%] top-1/2 max-w-[40%] -translate-y-1/2 rounded-[32px] bg-black/10 p-2 md:p-[48px]">
        <p className="text-[clamp(18px,4px_+_3vw,50px)] drop-shadow-md">
          {t('preparation')}
        </p>
      </Reveal>
    </section>
  );
};

export default Preparation;
