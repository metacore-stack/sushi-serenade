// next
import Image from 'next/image';

// next-intl
import { useTranslations } from 'next-intl';

// components
import Reveal from '@/components/common/Reveal';

// testimonials data
import testimonials from '@/data/testimonials.json';

const Testimonials = () => {
  const t = useTranslations('Testimonials');
  return (
    <section className="mx-auto flex max-w-[95%] flex-col items-center justify-evenly gap-[48px] py-[48px] md:flex-row md:gap-[16px] xl:justify-center xl:gap-[48px]">
      <h2 className="sr-only">{t('title')}</h2>
      {testimonials.map((testimonial, i) => (
        <Reveal
          key={i}
          effect={i === 0 ? 'fadeRTL' : i === 1 ? 'fadeIn' : 'fadeLTR'}
          delay={i === 1 ? 0 : 0.5}
        >
          <article className="mt-[-76px] flex max-w-full flex-col items-center justify-center md:max-w-[400px]">
            <div className="relative translate-y-1/2 rounded-full border-[1px] border-borderGray">
              <Image src={testimonial.image} alt="" width="150" height="150" />
            </div>
            <div className="flex flex-col items-center justify-center gap-[28px] rounded-[32px] border-[1px] border-borderGray bg-bgDarkGray px-[42px] pb-[54px] pt-[96px]">
              <div className="flex flex-col items-center justify-center gap-[3px]">
                <h3 className="text-[20px]">{t(`${testimonial.id}Name`)}</h3>
                <Image
                  src="/images/testimonials/stars.png"
                  width="146"
                  height="25"
                  aria-hidden="true"
                  alt="rating"
                  className="pointer-events-none select-none"
                />
              </div>
              <p className="text-center text-[clamp(16px,4px_+_2vw,18px)] leading-[1.65]">
                {t(`${testimonial.id}Testimonial`)}
              </p>
            </div>
          </article>
        </Reveal>
      ))}
    </section>
  );
};

export default Testimonials;
