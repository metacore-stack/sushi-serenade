// next
import Image from 'next/image';

// next-intl
import { useTranslations } from 'next-intl';

const MenuHeader = ({
  dataId,
  headerImage,
}: {
  dataId: string;
  headerImage: string;
}) => {
  const t = useTranslations('Menu');
  return (
    <div className="relative flex h-[150px] items-center justify-center overflow-hidden rounded-[32px] text-[clamp(54px,40px_+_3vw,80px)] md:h-[240px]">
      <Image
        src={headerImage}
        alt={t(`${dataId}Title`)}
        fill
        sizes="(max-width: 480px) 100vw,(max-width: 768px) 50vw, 20vw"
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/40" />
      <h3 className="relative">{t(`${dataId}Title`)}</h3>
    </div>
  );
};

export default MenuHeader;
