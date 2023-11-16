'use client';

// react
import { forwardRef } from 'react';

// media query
import { isMobile } from 'react-device-detect';

// framer motion
import { m, MotionProps, LazyMotion, domAnimation } from 'framer-motion';

// variants
import { variants } from '@/settings/variants';

// types
interface RevealProps extends React.HTMLAttributes<HTMLElement> {
  effect?: keyof typeof variants;
  duration?: number;
  delay?: number;
  threshold?: number;
  once?: boolean;
  ease?: string;
  component?: string;
}
const Reveal = forwardRef<HTMLElement, RevealProps & MotionProps>(
  (
    {
      effect = 'fadeIn',
      duration = 0.5,
      delay = 0,
      threshold = 0.5,
      once = true,
      ease = 'easeOut',
      component = 'div',
      children,
      className,
      ...props
    },
    ref,
  ) => {
    const MotionElement = m<RevealProps>(component);
    return (
      <LazyMotion features={domAnimation}>
        <MotionElement
          variants={variants[effect]}
          initial="initial"
          whileInView="animate"
          exit="exit"
          viewport={{ amount: threshold, once }}
          transition={{
            duration,
            delay: isMobile ? 0 : delay,
            ease,
          }}
          className={'will-change-transform ' + className}
          {...props}
          ref={ref}
        >
          {children}
        </MotionElement>
      </LazyMotion>
    );
  },
);

Reveal.displayName = 'Transition';

export default Reveal;
