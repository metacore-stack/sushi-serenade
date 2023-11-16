// next-intl
import { useTranslations } from 'next-intl';

const InternetReservationButton = () => {
  const t = useTranslations('Reservation');
  return (
    <a
      href="#0"
      className="flex items-center justify-center gap-1 rounded-[32px] bg-accent px-[32px] py-[10px] text-[clamp(24px,2px_+_3vw,42px)] transition-all duration-300 hover:bg-white hover:text-black md:gap-2 [&>div:first-child]:bg-[url('/images/header/reservation-icon.png')] [&>div:first-child]:hover:bg-[url('/images/header/reservation-icon-black.png')]"
    >
      {t('buttonText')}
    </a>
  );
};

export default InternetReservationButton;
