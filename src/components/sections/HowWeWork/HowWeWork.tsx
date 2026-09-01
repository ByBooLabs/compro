import { publicUrl } from '@/utils/publicUrl';

interface WorkStep {
  number: string;
  name: string;
  tagline: string;
  description: string;
  points: string[];
}

const workSteps: WorkStep[] = [
  {
    number: "01",
    name: "Discover",
    tagline: "Understand the Business",
    description:
      "Kami memulai dengan memahami bisnis, proses kerja, kebutuhan pengguna, serta tantangan yang sedang dihadapi.",
    points: ["Business Analysis", "Requirement Gathering", "Process Mapping"],
  },
  {
    number: "02",
    name: "Define",
    tagline: "Shape the Right Solution",
    description:
      "Kebutuhan bisnis diterjemahkan menjadi solusi teknologi yang jelas, terukur, dan sesuai dengan prioritas bisnis.",
    points: ["Solution Design", "System Architecture", "Technology Selection"],
  },
  {
    number: "03",
    name: "Build",
    tagline: "Turn Ideas Into Reality",
    description:
      "Tim kami membangun solusi dengan pendekatan engineering yang terstruktur, scalable, dan mengikuti kebutuhan yang telah disepakati.",
    points: [
      "UI/UX & Development",
      "System Integration",
      "Testing & Quality Assurance",
    ],
  },
  {
    number: "04",
    name: "Deploy",
    tagline: "Launch With Confidence",
    description:
      "Solusi dipersiapkan dan diterapkan ke environment yang sesuai agar dapat digunakan secara aman dan optimal.",
    points: ["Deployment", "Data Migration", "System Configuration"],
  },
  {
    number: "05",
    name: "Evolve",
    tagline: "Keep Your Business Moving",
    description:
      "Pengembangan tidak berhenti setelah sistem berjalan. Kami membantu melakukan monitoring, improvement, dan pengembangan lanjutan sesuai kebutuhan bisnis.",
    points: [
      "Support & Maintenance",
      "Performance Monitoring",
      "Continuous Improvement",
    ],
  },
];

const desktopOffsets = [
  "lg:translate-y-0",
  "lg:translate-y-[clamp(58px,5.13vw,98px)]",
  "lg:translate-y-[clamp(116px,10.26vw,196px)]",
  "lg:translate-y-[clamp(174px,15.39vw,294px)]",
  "lg:translate-y-[clamp(232px,20.52vw,392px)]",
];

function WorkStepCard({ step, index }: { step: WorkStep; index: number }) {
  const isLast = index === workSteps.length - 1;

  return (
    <article
      className={`relative border-l-2 border-white/50 pl-5 lg:border-0 lg:pl-0 ${desktopOffsets[index]}`}
    >
      <div className="flex items-end gap-2 lg:block">
        <span className="font-display text-[44px] leading-[0.85] font-bold text-primary lg:text-[clamp(48px,4.25vw,82px)]">
          {step.number}
        </span>
        <h3 className="font-display text-[28px] leading-none font-semibold text-white lg:mt-1 lg:text-[clamp(30px,2.65vw,51px)]">
          {step.name}
        </h3>
      </div>

      <div
        aria-hidden="true"
        className="absolute top-[clamp(78px,6.9vw,132px)] hidden h-[clamp(3px,0.27vw,5px)] w-[calc(100%+clamp(20px,1.77vw,34px))] rounded-full bg-white lg:block"
      >
        {!isLast ? (
          <>
            <span className="absolute top-1/2 right-[-1px] h-[clamp(13px,1.15vw,22px)] w-[clamp(13px,1.15vw,22px)] -translate-y-1/2 rounded-full border-2 border-[#c9a8ff] bg-primary" />
          </>
        ) : null}
      </div>

      <div className="mt-5 lg:mt-[clamp(34px,3vw,58px)]">
        <h4 className="text-[14px] leading-tight font-medium text-white lg:text-[clamp(15px,1.33vw,26px)]">
          {step.tagline}
        </h4>
        <p className="mt-2 text-[12px] leading-[1.35] text-white/90 lg:mt-[clamp(8px,0.7vw,13px)] lg:text-[clamp(10px,0.88vw,17px)]">
          {step.description}
        </p>
        <ul className="mt-2 space-y-0.5 text-[12px] leading-[1.25] text-white/90 lg:mt-[clamp(8px,0.7vw,13px)] lg:text-[clamp(10px,0.88vw,17px)]">
          {step.points.map((point) => (
            <li key={point}>→ {point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export function HowWeWork() {
  return (
    <section
      aria-labelledby="how-we-work-title"
      className="relative min-h-[980px] overflow-hidden bg-cover bg-center bg-no-repeat text-white lg:aspect-[1.84] lg:min-h-0"
      style={{ backgroundImage: `url('${publicUrl('/images/brainstorming.jfif')}')` }}
    >
      <div className="absolute inset-0 bg-black/65" />

      <div className="relative z-10 mx-auto h-full w-full px-6 py-14 sm:px-8 lg:px-[77px] lg:py-0">
        <header className="lg:absolute lg:top-[7%] lg:right-[6.5%] lg:w-[57%] lg:text-right mt-5">
          <p
            aria-hidden="true"
            className="font-display text-[55px] leading-none font-medium tracking-[-0.05em] text-transparent [-webkit-text-stroke:2px_rgba(255,195,0,0.28)] sm:text-[70px] lg:absolute lg:top-[clamp(-40px,-2.12vw,-24px)] lg:right-0 lg:text-[clamp(72px,6.4vw,122px)]"
          >
            How We Work
          </p>
          <h2
            id="how-we-work-title"
            className="relative mt-[-8px] font-display text-[27px] leading-[1.25] font-medium text-orange sm:text-[30px] lg:mt-10 lg:pr-1 lg:text-[clamp(24px,2.2vw,42px)]"
          >
            Turning Business Challenges
            <br /> to Digital Solutions
          </h2>
          <p className="mt-8 text-[15px] leading-[1.35] text-white sm:text-[17px] lg:mt-[clamp(24px,2.12vw,40px)] lg:ml-auto lg:max-w-[42vw] lg:text-[clamp(15px,1.33vw,25px)]">
            Kami mengembangkan solusi teknologi melalui proses yang terstruktur.
            Mulai dari memahami bisnis hingga memastikan solusi berjalan dan
            terus berkembang.
          </p>
        </header>

        <div className="mt-14 grid gap-9 lg:absolute lg:top-[10%] lg:left-[12%] lg:mt-0 lg:w-[76%] lg:grid-cols-5 lg:gap-[clamp(20px,1.77vw,34px)]">
          {workSteps.map((step, index) => (
            <WorkStepCard index={index} key={step.number} step={step} />
          ))}
        </div>
      </div>
    </section>
  );
}
