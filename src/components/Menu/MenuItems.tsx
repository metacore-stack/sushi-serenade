// next-intl
import { useTranslations, useLocale } from 'next-intl';

// utility
import { addComma } from '@/utility/utility';

const MenuItems = ({
  dataId,
  itemCount,
}: {
  dataId: string;
  itemCount: number;
}) => {
  const t = useTranslations('Menu');
  const locale = useLocale();
  return (
    <div className="relative flex flex-col gap-[20px] rounded-[32px] border-[1px]  border-borderGray bg-black/40 p-[32px]">
      {[...Array(itemCount)].map((_, i) => (
        <div key={i} className="flex items-center justify-between">
          <p className="flex-shrink-0">{t(`${dataId}Items.${i + 1}.title`)}</p>
          <div className="mx-4 mt-[2px] h-[1px] w-full bg-white"></div>
          <p>
            {t('currency')}
            {locale === 'ja'
              ? addComma(t(`${dataId}Items.${i + 1}.price`))
              : t(`mainDishesItems.${i + 1}.price`)}
          </p>
        </div>
      ))}
    </div>
  );
};

export default MenuItems;
