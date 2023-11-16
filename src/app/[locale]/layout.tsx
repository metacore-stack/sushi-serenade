// next
import type { Metadata } from 'next';

// next-intl
import { NextIntlClientProvider } from 'next-intl';

// tailwind styles
import '@/styles/globals.css';

// fonts
import { sawarabiMincho } from '@/ui/fonts';

export const metadata: Metadata = {
  title: 'Sushi Doshira by Rashid Shamloo',
  description: 'Japanese Sushi Restaurant Website by Rashid Shamloo',
  keywords: [
    'sushi',
    'restaurant',
    'japanese',
    'japanese restaurant',
    'sushi restaurant',
    'rashid shamloo',
  ],
  icons: { icon: '/images/favicon.png' },
  metadataBase: new URL('https://sushi-restaurant.rashidshamloo.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'ja_JP',
    url: '/',
    title: 'Sushi Doshira by Rashid Shamloo',
    siteName: 'Sushi Doshira by Rashid Shamloo',
    description: 'Japanese Sushi Restaurant Website by Rashid Shamloo',
    images: {
      url: '/images/screenshots/home.webp',
      alt: 'Sushi Doshira by Rashid Shamloo',
      width: 1200,
      height: 654,
      type: 'image/webp',
      secureUrl: '/images/screenshots/home.webp',
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sushi Doshira by Rashid Shamloo',
    description: 'Japanese Sushi Restaurant Website by Rashid Shamloo',
    images: '/images/screenshots/home.webp',
    creator: '@rashidshamloo',
    site: '@rashidshamloo',
  },
};

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'ja' }];
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  let messages;
  try {
    messages = (await import(`@/messages/${locale}.json`)).default;
  } catch (error) {
    // notFound();
  }
  return (
    <html lang={locale} className="scroll-smooth">
      <body className="bg-bgGray text-white">
        {/* className={sawarabiMincho.className} */}
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
