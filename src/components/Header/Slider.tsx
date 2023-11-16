// next
import Image from 'next/image';

// react
import { useRef, useEffect } from 'react';

// next-intl
import { useTranslations } from 'next-intl';

// swiper
import { Swiper, SwiperSlide, SwiperClass } from 'swiper/react';
import {
  Navigation,
  Pagination,
  A11y,
  Autoplay,
  EffectFade,
} from 'swiper/modules';

// swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

// settings
import { numberOfSlides } from '@/settings/slider';

const Slider = () => {
  const t = useTranslations('Header');
  const slideRefs = useRef<HTMLImageElement[]>([]);

  useEffect(() => {
    slideRefs.current[0].classList.add('animate-zoom');
  }, []);
  return (
    <Swiper
      modules={[Navigation, Pagination, A11y, Autoplay, EffectFade]}
      autoplay={{ delay: 3000 }}
      slidesPerView={1}
      navigation
      loop
      effect="fade"
      speed={1500}
      pagination={{
        clickable: true,
        bulletClass:
          'w-2 aspect-square rounded-full bg-white/40 inline-block mx-4 md:mx-2 md:my-1 hover:bg-white/70 hover:scale-150 transition-all duration-200',
        bulletActiveClass: '!bg-accent !opacity-100 scale-150',
      }}
      onSlideChangeTransitionEnd={(s) => {
        // 's.previousIndex' was buggy so I'm just removing the animation
        // on the left and right slide manually
        const leftIndex =
          s.realIndex - 1 < 0 ? numberOfSlides - 1 : s.realIndex - 1;
        const rightIndex =
          s.realIndex + 1 > numberOfSlides - 1 ? 0 : s.realIndex + 1;
        slideRefs.current[leftIndex].classList.remove('animate-zoom');
        slideRefs.current[rightIndex].classList.remove('animate-zoom');
      }}
      onSlideChangeTransitionStart={(s) => {
        slideRefs.current[s.realIndex].classList.add('animate-zoom');
      }}
      className="absolute inset-0 !z-0 h-[240px] w-full md:h-screen [&_.swiper-button-next]:mx-4 [&_.swiper-button-next]:hidden [&_.swiper-button-next]:text-accent/50 [&_.swiper-button-next]:transition-all [&_.swiper-button-next]:duration-300 hover:[&_.swiper-button-next]:scale-125 hover:[&_.swiper-button-next]:text-accent md:[&_.swiper-button-next]:flex [&_.swiper-button-prev]:mx-4 [&_.swiper-button-prev]:hidden [&_.swiper-button-prev]:text-accent/50 [&_.swiper-button-prev]:transition-all [&_.swiper-button-prev]:duration-300 hover:[&_.swiper-button-prev]:scale-125 hover:[&_.swiper-button-prev]:text-accent md:[&_.swiper-button-prev]:flex"
    >
      {[...Array(numberOfSlides)].map((_, i) => (
        <SwiperSlide key={i} id={`slide-${i}`}>
          <Image
            ref={(ref) => {
              if (ref) slideRefs.current[i] = ref;
            }}
            src={`/images/header/${String(i + 1).padStart(2, '0')}.jpg`}
            fill
            alt={`${t('sushiImage')} ${i + 1}`}
            sizes="100vw"
            priority={i === 0}
            className="object-cover will-change-transform"
            loading={i === 0 ? 'eager' : 'lazy'}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
