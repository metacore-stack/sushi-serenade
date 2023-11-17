// components
import Reveal from '@/components/common/Reveal';
import MenuHeader from './MenuHeader';
import MenuItems from './MenuItems';

const MenuList = ({
  dataId,
  itemCount,
  headerImage,
}: {
  dataId: string;
  itemCount: number;
  headerImage: string;
}) => {
  return (
    <div className="flex w-full max-w-full flex-col gap-[32px] md:w-[400px] md:gap-[48px]">
      <Reveal effect="fadeBTTS">
        <MenuHeader dataId={dataId} headerImage={headerImage} />
      </Reveal>
      <Reveal effect="fadeBTTS" threshold={0.1}>
        <MenuItems dataId={dataId} itemCount={itemCount} />
      </Reveal>
    </div>
  );
};

export default MenuList;
