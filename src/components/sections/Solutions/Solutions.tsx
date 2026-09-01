import { publicUrl } from '@/utils/publicUrl';

interface Solution {
  title: string;
  description: string;
  image: string;
  imagePosition?: string;
}

const solutions: Solution[] = [
  {
    title: "Odoo ERP",
    description:
      "Transformasi dan integrasi proses bisnis dalam satu sistem ERP.",
    image: publicUrl('/images/erp.jfif'),
    imagePosition: "center",
  },
  {
    title: "Web Application",
    description:
      "Solusi web yang dibangun khusus mengikuti kebutuhan dan workflow bisnis.",
    image: publicUrl('/images/web_apps.jpg'),
    imagePosition: "center top",
  },
  {
    title: "Mobile Application",
    description:
      "Aplikasi mobile yang terintegrasi, intuitif, dan dirancang untuk kebutuhan pengguna.",
    image: publicUrl('/images/mobile_apps.jpg'),
    imagePosition: "center",
  },
  {
    title: "IoT System",
    description:
      "Menghubungkan perangkat dan data untuk monitoring, otomatisasi, dan insight real-time.",
    image: publicUrl('/images/iot.jfif'),
    imagePosition: "center",
  },
];

function ArrowIcon() {
  return (
    <svg aria-hidden="true" className="h-7 w-7" fill="none" viewBox="0 0 28 28">
      <path
        d="M7 21 21 7M10 7h11v11"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.2"
      />
    </svg>
  );
}

function SolutionCard({ solution }: { solution: Solution }) {
  return (
    <article className="group relative aspect-[15/17] w-full">
      <div className="h-full overflow-hidden rounded-[22px] bg-[#dce4e8]">
        <img
          alt={solution.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          src={solution.image}
          style={{ objectPosition: solution.imagePosition }}
        />
        <div className="absolute inset-x-1 bottom-1 h-[33%] min-h-[92px] max-h-[104px] rounded-[18px] bg-white/70 px-3 py-2.5 text-black backdrop-blur-[3px]">
          <h3 className="text-[14px] leading-none font-semibold text-primary">
            {solution.title}
          </h3>
          <p
            className={`mt-1.5 text-[14px] leading-[1.3] ${solution.title === "Odoo ERP" ? "pr-16" : ""}`}
          >
            {solution.description}
          </p>
          {solution.title === "Odoo ERP" ? (
            <img
              alt="Odoo"
              className="absolute right-0 bottom-0 h-auto w-[90px] object-contain"
              src={publicUrl('/images/odoo_logo.svg')}
            />
          ) : null}
        </div>
      </div>

      <a
        aria-label={`Pelajari ${solution.title}`}
        className="absolute -top-px -right-px grid h-[58px] w-[58px] place-items-center rounded-[21px] bg-orange text-white transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange"
        href="#contact"
      >
        <ArrowIcon />
      </a>
    </article>
  );
}

export function Solutions() {
  return (
    <section id="products" className="bg-white py-14 sm:py-16 lg:py-36">
      <div className="mx-auto w-full px-6 sm:px-8 xl:px-[77px]">
        <div className="relative grid gap-7 lg:grid-cols-[0.72fr_1.28fr] lg:items-end lg:gap-12">
          <div className="relative pt-8">
            <p
              aria-hidden="true"
              className="absolute top-[-18px] -left-4 whitespace-nowrap font-display text-[58px] leading-none font-medium tracking-[-0.05em] text-transparent [-webkit-text-stroke:2px_#ffe19a] sm:text-[72px] lg:text-[clamp(72px,6.4vw,122px)]"
            >
              Our Solutions
            </p>
            <h2 className="relative font-display text-[24px] leading-[1.3] font-medium tracking-[-0.025em] text-black sm:text-[26px] lg:text-[clamp(24px,2.2vw,42px)]">
              Technology Built Around
              <br /> Your Business
            </h2>
          </div>

          <p className="text-[17px] leading-[1.38] text-[#5f5f5f] sm:text-[18px] lg:text-[clamp(15px,1.33vw,25px)] z-10">
            Kami menggabungkan pemahaman proses bisnis dengan keahlian teknologi
            untuk membangun solusi yang tepat, terintegrasi, dan siap
            berkembang. Dari ERP hingga IoT, setiap solusi kami dirancang untuk
            menyelesaikan kebutuhan nyata bisnis
          </p>
        </div>

        <div className="mt-20 grid gap-7 sm:grid-cols-2 lg:grid-cols-4 lg:gap-[26px]">
          {solutions.map((solution) => (
            <SolutionCard key={solution.title} solution={solution} />
          ))}
        </div>
      </div>
    </section>
  );
}
