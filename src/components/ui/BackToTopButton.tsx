import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

export function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => setIsVisible(window.scrollY > 480);

    updateVisibility();
    window.addEventListener('scroll', updateVisibility, { passive: true });
    return () => window.removeEventListener('scroll', updateVisibility);
  }, []);

  const scrollToTop = () => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
      top: 0,
    });
  };

  return (
    <button
      aria-label="Kembali ke atas"
      className={`fixed right-5 bottom-5 z-40 grid h-12 w-12 place-items-center rounded-full bg-orange text-white shadow-[0_12px_30px_rgba(255,195,0,0.34)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#eeb600] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange sm:right-7 sm:bottom-7 ${
        isVisible
          ? 'visible translate-y-0 scale-100 opacity-100'
          : 'invisible translate-y-4 scale-90 pointer-events-none opacity-0'
      }`}
      onClick={scrollToTop}
      type="button"
    >
      <ArrowUp aria-hidden="true" className="h-6 w-6" strokeWidth={2.4} />
    </button>
  );
}
