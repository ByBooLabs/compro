import { publicUrl } from '@/utils/publicUrl';

export function Hero() {
  return (
    <main id="top" className="px-3 pb-6 sm:px-6 sm:pb-10">
      <section
        aria-labelledby="hero-title"
        className="relative mx-auto flex min-h-[620px] w-full items-center overflow-hidden rounded-[30px] bg-[#f5f5f7] bg-cover bg-center bg-no-repeat sm:h-[clamp(680px,83.5svh,820px)] sm:min-h-0"
        style={{ backgroundImage: `url('${publicUrl('/images/hero_animation-gif.gif')}')` }}
      >
        <div className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-black/55 via-black/35 to-transparent backdrop-blur-[6px] sm:w-[min(894px,75%)] xl:w-[min(894px,60%)]" />

        <div className="relative z-10 w-full px-6 sm:px-[54px]">
          <div className="max-w-[800px] text-white lg:translate-y-[72px]">
            <p className="hero-badge relative mb-4 inline-flex items-center gap-2.5 overflow-hidden rounded-full bg-black/85 px-4 py-2 text-[15px] leading-none font-semibold text-orange shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_8px_24px_rgba(0,0,0,0.22)] backdrop-blur-md">
              <span
                aria-hidden="true"
                className="h-2 w-2 rounded-full bg-orange shadow-[0_0_12px_rgba(255,195,0,0.9)]"
              />
              Build Smarter Business Solutions
            </p>

            <h1
              id="hero-title"
              className="font-display text-[38px] leading-[1.18] font-bold tracking-[-0.025em] text-white sm:text-[40px]"
            >
              Transformasikan Proses Bisnis Anda
              <br className="hidden sm:block" /> dengan Teknologi yang Tepat
              Guna
            </h1>

            <p className="mt-8 max-w-[585px] text-[18px] leading-[1.42] font-medium text-white/90 sm:text-[20px]">
              Dari memahami masalah hingga membangun sistem yang terintegrasi,
              kami membantu bisnis memanfaatkan teknologi untuk bekerja lebih
              cerdas, efisien, dan scalable.
            </p>

            <a
              className="mt-16 inline-flex h-[54px] items-center rounded-full bg-primary pl-8 text-[17px] font-medium text-white transition-transform hover:-translate-y-0.5 hover:bg-[#5f12ba] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
              href="#solutions"
            >
              Lihat solusi kami
              <span
                aria-hidden="true"
                className="ml-5 mr-[3px] grid h-[48px] w-[48px] place-items-center rounded-full bg-white text-primary"
              >
                <svg className="h-7 w-7" fill="none" viewBox="0 0 28 28">
                  <path
                    d="M7 21 21 7M10 7h11v11"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.4"
                  />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
