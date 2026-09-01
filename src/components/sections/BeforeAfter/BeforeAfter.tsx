import { publicUrl } from '@/utils/publicUrl';

interface TransformationCardProps {
  image: string;
  label: string;
  labelClassName: string;
  description: string;
}

function TransformationCard({
  image,
  label,
  labelClassName,
  description,
}: TransformationCardProps) {
  return (
    <article className="relative pt-14 lg:pt-0">
      <p
        aria-hidden="true"
        className={`pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 whitespace-nowrap font-display text-[58px] leading-none font-bold tracking-[-0.05em] lg:top-[-52px] lg:text-[64px] ${labelClassName}`}
      >
        {label}
      </p>

      <div className="relative h-[296px] overflow-hidden rounded-[24px] bg-[#d8d8d8] shadow-[0_12px_28px_rgba(47,15,89,0.18)]">
        <img
          alt={
            label === "BEFORE"
              ? "Proses kerja manual sebelum digitalisasi"
              : "Proses kerja terintegrasi setelah digitalisasi"
          }
          className="h-full w-full object-cover"
          src={image}
        />
        <div className="absolute inset-x-1 top-1 rounded-[20px] bg-black/55 px-5 py-5 text-[14px] leading-[1.3] text-white backdrop-blur-[5px] sm:px-6">
          {description}
        </div>
      </div>
    </article>
  );
}

function BrandCard() {
  return (
    <article className="relative flex h-[296px] items-center justify-center overflow-visible rounded-[24px] bg-white px-6 shadow-[0_12px_28px_rgba(47,15,89,0.14)]">
      <svg
        aria-hidden="true"
        className="absolute -top-4 right-1 h-16 w-16 text-orange"
        viewBox="0 0 80 80"
      >
        <path
          d="M40 0c3 21 16 34 40 40-24 5-37 18-40 40C36 58 23 45 0 40 23 34 36 21 40 0Z"
          fill="currentColor"
        />
      </svg>
      <svg
        aria-hidden="true"
        className="absolute top-10 right-12 h-6 w-6 text-orange"
        viewBox="0 0 32 32"
      >
        <path
          d="M16 0c1 9 7 15 16 16-9 2-15 7-16 16C14 23 9 18 0 16 9 14 14 9 16 0Z"
          fill="currentColor"
        />
      </svg>

      <div className="text-center">
        <img
          alt="Bytebox Labs"
          className="mx-auto w-[180px]"
          src={publicUrl('/images/logo_bbx3.png')}
        />
        <p className="mt-5 text-[14px] font-medium text-black">
          Mentransformasi bisnis anda..
        </p>
      </div>

      <svg
        aria-hidden="true"
        className="absolute bottom-4 left-5 h-7 w-7 text-orange"
        viewBox="0 0 32 32"
      >
        <path
          d="M16 0c1 9 7 15 16 16-9 2-15 7-16 16C14 23 9 18 0 16 9 14 14 9 16 0Z"
          fill="currentColor"
        />
      </svg>
      <svg
        aria-hidden="true"
        className="absolute bottom-2 left-3.5 h-3 w-3 text-orange"
        viewBox="0 0 20 20"
      >
        <path
          d="M10 0c1 6 4 9 10 10-6 1-9 4-10 10C9 14 6 11 0 10 6 9 9 6 10 0Z"
          fill="currentColor"
        />
      </svg>
    </article>
  );
}

export function BeforeAfter() {
  return (
    <section
      id="solutions"
      className="overflow-hidden bg-white pt-12 sm:pt-[52px]"
    >
      <div className="mx-auto max-w-[1000px] px-6 text-center">
        <img
          alt="Bytebox Labs"
          className="mx-auto w-[102px]"
          src={publicUrl('/images/logo_bbx3.png')}
        />
        <h2 className="mt-8 font-display text-[25px] leading-[1.28] font-medium tracking-[-0.02em] text-black sm:text-[28px]">
          Kami bukan sekedar membuat aplikasi. Kami memahami proses,
          <br className="hidden md:block" /> menemukan masalah, dan{" "}
          <mark className="bg-orange px-1 text-black">
            merancang solusi teknologi
          </mark>{" "}
          yang membantu
          <br className="hidden md:block" /> bisnis Anda bekerja lebih{" "}
          <span className="text-[#8b46e8]">efisien, terintegrasi,</span> dan{" "}
          <span className="text-[#8b46e8]">siap berkembang.</span>
        </h2>
      </div>

      <div className="mt-28 bg-primary pb-9 lg:mt-24">
        <div className="mx-auto grid max-w-[1200px] gap-6 px-6 lg:grid-cols-[1fr_0.66fr_1fr] lg:gap-5 lg:pt-6">
          <TransformationCard
            description="Data tersebar, pekerjaan berulang, dan proses bisnis masih banyak dilakukan secara manual."
            image={publicUrl('/images/before.jfif')}
            label="BEFORE"
            labelClassName="text-transparent [-webkit-text-stroke:2px_#dfc3ff]"
          />

          <BrandCard />

          <TransformationCard
            description="Proses terdigitalisasi, data terhubung, dan pekerjaan menjadi lebih cepat, efisien, dan terukur."
            image={publicUrl('/images/after.jfif')}
            label="AFTER"
            labelClassName="text-orange"
          />
        </div>
      </div>
    </section>
  );
}
