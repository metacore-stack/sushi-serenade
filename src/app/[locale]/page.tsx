'use client';

// next
import dynamic from 'next/dynamic';

// loading component
import Loading from '@/components/common/Loading';
const loading = () => <Loading />;

// components / sections
import Header from '@/components/Header/Header';
const ScrollToTop = dynamic(() => import('@/components/common/ScrollToTop'));
const SushiTypes = dynamic(() => import('@/components/SushiTypes/SushiTypes'), {
  loading,
});
const Preparation = dynamic(
  () => import('@/components/Preparation/Preparation'),
  {
    loading,
  },
);
const Menu = dynamic(() => import('@/components/Menu/Menu'), {
  loading,
});
const Testimonials = dynamic(
  () => import('@/components/Testimonials/Testimonials'),
  {
    loading,
  },
);
const Atmosphere = dynamic(() => import('@/components/Atmosphere/Atmosphere'), {
  loading,
});
const Reservation = dynamic(
  () => import('@/components/Reservation/Reservation'),
  {
    loading,
  },
);
const Access = dynamic(() => import('@/components/Access/Access'), {
  loading,
});
const Footer = dynamic(() => import('@/components/Footer/Footer'), {
  loading,
});

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <SushiTypes />
        <Preparation />
        <Menu />
        <Testimonials />
        <Atmosphere />
        <Reservation />
        <Access />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
