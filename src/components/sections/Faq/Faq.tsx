import { useState, type ReactNode } from 'react';
import { Minus, Plus } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: ReactNode;
}

const faqItems: FaqItem[] = [
  {
    question: 'Apa saja layanan yang ditawarkan ByteBox Labs?',
    answer: (
      <>
        Kami menyediakan solusi teknologi untuk kebutuhan bisnis, mulai dari{' '}
        <strong>Odoo ERP, Custom Web Apps, Custom Mobile Apps, hingga IoT Solutions</strong>. Kami juga mengembangkan produk digital kami sendiri untuk menjawab kebutuhan nyata di berbagai industri.
      </>
    ),
  },
  {
    question: 'Apakah solusi yang dibuat bisa disesuaikan dengan kebutuhan bisnis kami?',
    answer: 'Ya. Untuk solusi custom, kami merancang sistem berdasarkan proses, kebutuhan, dan workflow bisnis Anda. Kami tidak menggunakan pendekatan one-size-fits-all.',
  },
  {
    question: 'Apakah bisa membantu jika kami belum tahu solusi yang dibutuhkan?',
    answer: (
      <>
        Tentu. Anda tidak harus sudah memiliki spesifikasi teknis. Kami dapat membantu{' '}
        <strong>mengidentifikasi masalah, memetakan proses bisnis, dan menentukan solusi teknologi</strong> yang paling sesuai.
      </>
    ),
  },
  {
    question: 'Apakah ByteBox Labs bisa mengintegrasikan sistem yang sudah kami gunakan?',
    answer: 'Ya. Kami dapat membantu mengintegrasikan aplikasi, ERP, database, API, perangkat, maupun sistem pihak ketiga agar data dan proses dapat berjalan lebih terhubung.',
  },
  {
    question: 'Berapa lama waktu pengerjaan sebuah project?',
    answer: 'Setiap project memiliki timeline yang berbeda tergantung pada kompleksitas, scope, jumlah modul, integrasi, dan kebutuhan bisnis. Setelah tahap discovery dan requirement analysis, kami akan memberikan estimasi timeline yang lebih terukur.',
  },
  {
    question: 'Apakah setelah project selesai kami mendapatkan support?',
    answer: (
      <>
        Ya. Kami menyediakan{' '}
        <strong>maintenance, bug fixing, monitoring, technical support, dan continuous improvement</strong> sesuai dengan kebutuhan dan kesepakatan project.
      </>
    ),
  },
  {
    question: 'Apakah source code akan diberikan kepada client?',
    answer: 'Untuk project custom, kepemilikan dan akses source code dapat disesuaikan dengan kesepakatan dan scope kerja yang telah ditentukan sejak awal.',
  },
  {
    question: 'Bagaimana cara memulai project bersama ByteBox Labs?',
    answer: (
      <>
        Cukup ceritakan <strong>masalah atau kebutuhan bisnis Anda</strong> kepada kami. Tim kami akan membantu memahami kebutuhan tersebut dan menentukan langkah terbaik untuk memulainya.
      </>
    ),
  },
];

function FaqRow({
  item,
  index,
  isOpen,
  onToggle,
}: {
  item: FaqItem;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const answerId = `faq-answer-${index}`;

  return (
    <div className="mb-2.5">
      <button
        aria-controls={answerId}
        aria-expanded={isOpen}
        className="inline-flex max-w-full items-center justify-between gap-5 rounded-[14px] bg-[#f3f3f3] px-4 py-2.5 text-left text-[15px] leading-[1.3] font-medium text-black transition-colors hover:bg-[#ebebeb]"
        onClick={onToggle}
        type="button"
      >
        <span>{item.question}</span>
        {isOpen ? (
          <Minus aria-hidden="true" className="h-4 w-4 shrink-0" strokeWidth={1.6} />
        ) : (
          <Plus aria-hidden="true" className="h-4 w-4 shrink-0" strokeWidth={1.6} />
        )}
      </button>

      <div
        className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
        id={answerId}
      >
        <div className="overflow-hidden">
          <p className="mt-1 ml-6 w-fit max-w-[calc(100%-24px)] rounded-[17px] bg-primary px-4 py-3 text-[14px] leading-[1.45] text-white sm:ml-16 sm:max-w-[calc(100%-64px)] [&_strong]:font-semibold [&_strong]:text-white">
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export function Faq() {
  const [openItems, setOpenItems] = useState<Set<number>>(() => new Set([0]));

  const toggleItem = (index: number) => {
    setOpenItems((currentItems) => {
      const nextItems = new Set(currentItems);
      if (nextItems.has(index)) {
        nextItems.delete(index);
      } else {
        nextItems.add(index);
      }
      return nextItems;
    });
  };

  return (
    <section id="faqs" className="bg-white py-16 sm:py-20">
      <div className="grid gap-14 px-6 sm:px-8 lg:grid-cols-[0.46fr_0.54fr] lg:gap-20 xl:px-[77px]">
        <div className="relative pt-8">
          <p
            aria-hidden="true"
            className="absolute top-[-8px] -left-4 font-display text-[58px] leading-none font-medium tracking-[-0.05em] text-transparent [-webkit-text-stroke:2px_#ffe19a] sm:text-[68px]"
          >
            FAQs
          </p>
          <h2 className="relative font-display text-[27px] leading-[1.25] font-medium tracking-[-0.025em] text-black sm:text-[30px]">
            Masih ada pertanyaan?
            <br /> Kami siap membantu
          </h2>
          <p className="mt-6 max-w-[500px] text-[16px] leading-[1.4] text-[#666] sm:text-[17px]">
            Temukan jawaban atas pertanyaan umum seputar layanan, proses pengembangan, dan solusi teknologi ByteBox Labs sebelum memulai project bersama kami.
          </p>
        </div>

        <div>
          {faqItems.map((item, index) => (
            <FaqRow
              index={index}
              isOpen={openItems.has(index)}
              item={item}
              key={item.question}
              onToggle={() => toggleItem(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
