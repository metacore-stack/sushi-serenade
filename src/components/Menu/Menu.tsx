// next
import Image from 'next/image';

// next-intl
import { useTranslations } from 'next-intl';

// components
import MenuList from './MenuList';

// settings
import { menuItemCount } from '@/settings/menu';

// menu data
import menu from '@/data/menu.json';

const Menu = () => {
  const t = useTranslations('Menu');
  return (
    <section
      id="menu"
      className="relative overflow-auto pb-[48px] pt-[24px] md:pb-[96px] md:pt-[48px]"
    >
      <h2 className="sr-only">{t('menu')}</h2>
      <Image
        src="/images/menu/bg.jpg"
        alt="Background"
        aria-hidden="true"
        fill
        sizes="100vw"
        className="object-cover opacity-30"
      />
      <div className="absolute inset-0 bg-black/20" />
      <div>
        <Image
          src="/images/menu/menu.png"
          alt={t('menu')}
          aria-hidden="true"
          width="400"
          height="126"
          sizes="(max-width: 480px) 180px, (max-width: 1024px) 250px, 350px"
          className="relative mb-[24px] ml-[24px] w-[180px] md:mb-[48px] md:ml-[48px] md:w-[250px] lg:w-[350px]"
        />
      </div>
      <div className="relative mx-auto flex max-w-[95%] flex-col items-center justify-evenly gap-x-[16px] gap-y-[32px] text-[clamp(18px,4px_+_1.75vw,20px)] md:flex-row md:items-start lg:max-w-full xl:w-[1296px]">
        {menu.map((menuItem, i) => (
          <MenuList
            key={i}
            dataId={menuItem.id}
            itemCount={menuItemCount}
            headerImage={menuItem.image}
          />
        ))}
      </div>
    </section>
  );
};

export default Menu;
