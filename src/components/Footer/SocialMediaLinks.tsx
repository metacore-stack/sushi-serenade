// next
import Link from 'next/link';

// components
import SocialMediaIcon from './SocialMediaIcon';

// social media data
import socialMedia from '@/data/social-media.json';

const SocialMediaLinks = () => {
  return (
    <div className="flex items-center justify-center gap-[16px] lg:gap-[20px] xl:gap-[32px]">
      {socialMedia.map((socialMedia, i) => (
        <Link
          href={socialMedia.link}
          target="_blank"
          key={i}
          title={socialMedia.id}
          className="flex aspect-square w-[54px] items-center justify-center rounded-full border-[1px] border-borderGray bg-accent text-[36px] transition-all duration-300 hover:bg-white hover:text-black"
        >
          <SocialMediaIcon id={socialMedia.id} />
        </Link>
      ))}
    </div>
  );
};

export default SocialMediaLinks;
