// next
import Image from 'next/image';

// next-intl
import { useTranslations } from 'next-intl';

//components
import Slider from './Slider';
import Title from './Title';
import NavMenu from './NavMenu/NavMenu';
import ScrollDown from './ScrollDown';

const Header = () => {
  const t = useTranslations('Header');
  return (
    <header id="home" className="relative">
      <Slider />
      <Image
        src="/images/logo.png"
        alt={t('logo')}
        sizes="(max-width: 768px) 76px, 240px"
        width="240"
        height="240"
        priority
        className="pointer-events-none absolute bottom-4 right-4 z-[1] aspect-square w-[76px] select-none md:bottom-6 md:right-6 md:w-[240px]"
      />
      <Title />
      <ScrollDown />
      <NavMenu />
    </header>
  );
};

export default Header;
