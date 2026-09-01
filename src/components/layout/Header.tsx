import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { publicUrl } from '@/utils/publicUrl';

const navigationItems = [
  { label: 'Solutions', href: '#solutions', hasDropdown: true },
  { label: 'Products', href: '#our-products' },
  { label: 'About Us', href: '#about' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const updateHeader = () => setIsScrolled(window.scrollY > 16);

    updateHeader();
    window.addEventListener('scroll', updateHeader, { passive: true });
    return () => window.removeEventListener('scroll', updateHeader);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-500 ease-out ${
        isScrolled
          ? 'h-[74px] border-white/45 bg-white/60 shadow-[0_12px_40px_rgba(42,12,78,0.10),inset_0_-1px_0_rgba(255,255,255,0.5)] backdrop-blur-2xl'
          : 'h-[90px] border-transparent bg-white'
      }`}
    >
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 bg-gradient-to-r from-white/35 via-primary/[0.04] to-white/35 transition-opacity duration-500 ${
          isScrolled ? 'opacity-100' : 'opacity-0'
        }`}
      />
      <div className="relative z-10 mx-auto flex h-full w-full items-center justify-between px-6 sm:px-8 xl:px-[77px]">
        <a aria-label="Bytebox Labs home" href="#top" className="shrink-0">
          <img
            alt="Bytebox Labs"
            className="h-auto w-[130px] sm:w-[154px]"
            src={publicUrl('/images/logo_bbx3.png')}
          />
        </a>

        <nav aria-label="Main navigation" className="mr-auto ml-[70px] hidden items-center gap-[42px] md:flex">
          {navigationItems.map((item) => (
            <a
              className="flex items-center gap-1.5 text-[14px] font-medium text-black transition-colors hover:text-primary"
              href={item.href}
              key={item.label}
            >
              {item.label}
              {item.hasDropdown ? (
                <svg aria-hidden="true" className="mt-0.5 h-3 w-3" fill="none" viewBox="0 0 12 12">
                  <path d="m3.5 4.75 2.5 2.5 2.5-2.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              ) : null}
            </a>
          ))}
        </nav>

        <a
          className="hidden whitespace-nowrap rounded-full bg-primary px-5 py-3 text-[14px] font-medium text-white transition-transform hover:-translate-y-0.5 hover:bg-[#5f12ba] sm:px-[27px] md:inline-flex"
          href="#contact"
        >
          Hubungi Kami
        </a>

        <button
          aria-controls="mobile-navigation"
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi'}
          className="grid h-11 w-11 place-items-center rounded-full bg-primary text-white transition-transform active:scale-95 md:hidden"
          onClick={() => setIsMenuOpen((currentState) => !currentState)}
          type="button"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <div
        className={`absolute inset-x-3 top-[calc(100%+8px)] z-40 overflow-hidden rounded-[24px] border border-white/55 bg-white/75 shadow-[0_20px_60px_rgba(42,12,78,0.18)] backdrop-blur-2xl transition-all duration-300 ease-out md:hidden ${
          isMenuOpen
            ? 'visible translate-y-0 opacity-100'
            : 'invisible -translate-y-3 pointer-events-none opacity-0'
        }`}
        id="mobile-navigation"
      >
        <nav aria-label="Mobile navigation" className="flex flex-col p-3">
          {navigationItems.map((item) => (
            <a
              className="flex items-center justify-between rounded-2xl px-4 py-3.5 text-[15px] font-medium text-black transition-colors hover:bg-primary/10 hover:text-primary"
              href={item.href}
              key={item.label}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
              {item.hasDropdown ? (
                <svg aria-hidden="true" className="h-3.5 w-3.5" fill="none" viewBox="0 0 12 12">
                  <path d="m3.5 4.75 2.5 2.5 2.5-2.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              ) : null}
            </a>
          ))}
          <a
            className="mt-2 rounded-full bg-primary px-5 py-3.5 text-center text-[15px] font-medium text-white"
            href="#contact"
            onClick={() => setIsMenuOpen(false)}
          >
            Hubungi Kami
          </a>
        </nav>
      </div>
    </header>
  );
}
