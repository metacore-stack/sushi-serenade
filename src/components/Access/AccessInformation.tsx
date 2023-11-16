// next-intl
import { useTranslations } from 'next-intl';

// phone number
import phone from '@/data/phone.json';

const AccessInformation = () => {
  const t = useTranslations('Access');
  return (
    <div className="mx-auto flex h-[400px] w-[500px] items-center justify-center rounded-[32px] border-[1px] border-borderGray bg-black/40 p-[16px] md:px-[32px] lg:h-auto">
      <div className="flex flex-col items-start justify-center gap-1 [&>h3:not(:first-child)]:mt-2 [&>h3]:text-[clamp(28px,16px_+_1.5vw,40px)] [&>h3]:text-accent [&>p]:ml-6 [&>p]:text-[clamp(20px,4px_+_2vw,28px)]">
        <h3>{t('addressTitle')}</h3>
        <p>{t('addressText')}</p>
        <h3>{t('accessTitle')}</h3>
        <p>{t('accessText')}</p>
        <h3> {t('enquiryTitle')}</h3>
        <p>{phone.phoneNumber}</p>
      </div>
    </div>
  );
};

export default AccessInformation;
