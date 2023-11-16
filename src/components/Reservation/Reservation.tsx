// next-intl
import { useTranslations } from 'next-intl';

// components
import Reveal from '@/components/common/Reveal';
import InternetReservationButton from './InternetReservationButton';

// phone number
import phone from '@/data/phone.json';

const Reservation = () => {
  const t = useTranslations('Reservation');
  return (
    <section
      id="reservation"
      className="flex flex-col items-center justify-center gap-[48px] py-[48px] md:py-[96px]"
    >
      <h2 className="text-[clamp(40px,20px_+_3vw,60px)] text-accent">
        {t('title')}
      </h2>
      <Reveal
        effect="fadeBTTS"
        className="flex w-[1296px] max-w-[95%] flex-col items-center justify-center gap-x-[80px] gap-y-[48px] rounded-[32px] border-[1px] border-borderGray bg-bgDarkGray px-[16px] py-[48px] md:px-[48px] lg:flex-row lg:justify-evenly lg:gap-0 lg:py-[64px]"
      >
        <div className="flex flex-col items-start justify-center gap-2 leading-[1] md:gap-3 xl:gap-4">
          <p className="text-[clamp(24px,4px_+_3vw,28px)]">{t('phoneTitle')}</p>
          <p className="text-[clamp(42px,20px_+_3vw,60px)]">
            {phone.phoneNumber}
          </p>
        </div>
        <InternetReservationButton />
      </Reveal>
    </section>
  );
};

export default Reservation;
