// next-intl
import { useTranslations } from 'next-intl';

// clsx
import clsx from 'clsx';

const ReservationButton = ({ className }: { className?: string }) => {
  const t = useTranslations('NavMenu');
  return (
    <a
      href="#reservation"
      className={clsx(
        "flex items-center justify-center gap-1 rounded-[32px] bg-accent px-4 py-[3px] transition-all duration-300 hover:bg-white hover:text-black md:gap-2 md:px-6 [&>div:first-child]:bg-[url('/images/header/reservation-icon.png')] [&>div:first-child]:hover:bg-[url('/images/header/reservation-icon-black.png')]",
        className,
      )}
    >
      <div
        className="ml-[2px] aspect-square w-[18px] bg-[length:18px] bg-no-repeat transition-all duration-300 md:ml-1 md:w-[24px] md:bg-[length:24px]"
        aria-hidden="true"
      ></div>
      {t('reservation')}
    </a>
  );
};

export default ReservationButton;
