// next font
import { BIZ_UDMincho, Bitter } from 'next/font/google';

export const bizudMincho = BIZ_UDMincho({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--bizudMincho',
});

export const bitter = Bitter({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--bitter',
});
