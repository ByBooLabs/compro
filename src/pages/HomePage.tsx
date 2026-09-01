import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { BeforeAfter } from '@/components/sections/BeforeAfter/BeforeAfter';
import { Faq } from '@/components/sections/Faq/Faq';
import { Hero } from '@/components/sections/Hero/Hero';
import { HowWeWork } from '@/components/sections/HowWeWork/HowWeWork';
import { Products } from '@/components/sections/Products/Products';
import { Solutions } from '@/components/sections/Solutions/Solutions';
import { BackToTopButton } from '@/components/ui/BackToTopButton';

export function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <BeforeAfter />
      <Solutions />
      <HowWeWork />
      <Products />
      <Faq />
      <Footer />
      <BackToTopButton />
    </>
  );
}
