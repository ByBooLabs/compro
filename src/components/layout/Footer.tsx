import { publicUrl } from '@/utils/publicUrl';

function CtaPattern() {
  return (
    <svg aria-hidden="true" className="absolute inset-y-0 right-0 h-full w-[36%] min-w-[280px]" viewBox="0 0 360 235">
      <g fill="none" stroke="rgba(255,255,255,0.22)" strokeWidth="1">
        <rect height="74" width="74" x="42" y="0" />
        <rect height="74" width="74" x="116" y="0" />
        <rect height="74" width="74" x="190" y="37" />
        <rect height="74" width="74" x="79" y="74" />
        <rect height="74" width="74" x="153" y="74" />
        <rect height="74" width="74" x="227" y="74" />
        <rect height="74" width="74" x="190" y="148" />
        <rect height="74" width="74" x="264" y="148" />
      </g>
      <rect fill="rgba(185,104,255,0.88)" height="37" width="37" x="5" y="37" />
      <rect fill="rgba(185,104,255,0.9)" height="74" width="74" x="116" y="0" />
      <rect fill="rgba(185,104,255,0.82)" height="37" width="37" x="153" y="74" />
      <rect fill="rgba(185,104,255,0.88)" height="37" width="37" x="227" y="51" />
      <rect fill="rgba(185,104,255,0.9)" height="37" width="37" x="203" y="161" />
    </svg>
  );
}

function FooterPattern() {
  return (
    <svg aria-hidden="true" className="absolute right-0 bottom-0 h-[190px] w-[210px]" viewBox="0 0 210 190">
      <g fill="none" stroke="rgba(113,27,204,0.72)" strokeWidth="1">
        <rect height="54" width="54" x="48" y="72" />
        <rect height="54" width="54" x="102" y="18" />
        <rect height="54" width="54" x="156" y="18" />
        <rect height="54" width="54" x="75" y="126" />
        <rect height="54" width="54" x="129" y="126" />
      </g>
      <rect fill="#711bcc" height="27" width="27" x="129" y="72" />
      <rect fill="#711bcc" height="27" width="27" x="156" y="126" />
      <rect fill="#711bcc" height="27" width="27" x="183" y="0" />
    </svg>
  );
}

const serviceLinks = ['Bytebox Labs', 'Bytebox Partners'];
const solutionLinks = ['Odoo ERP', 'Web Application', 'Mobile Application', 'IoT Systems'];

export function Footer() {
  return (
    <footer id="contact" className="bg-white pt-3">
      <div className="px-6 pb-11 sm:px-8 sm:pb-12">
        <section className="relative isolate mx-auto min-h-[235px] overflow-hidden rounded-[20px] bg-gradient-to-r from-[#a95af2] via-[#9237e8] to-primary px-7 py-10 sm:px-10 lg:px-10">
          <CtaPattern />
          <div className="relative z-10 max-w-[570px]">
            <h2 className="font-display text-[27px] leading-[1.18] font-semibold text-orange sm:text-[29px]">
              Siap Membawa Bisnis Anda
              <br /> ke Level Berikutnya?
            </h2>
            <p className="mt-4 text-[16px] leading-[1.35] text-white sm:text-[17px]">
              Bangun sistem digital yang lebih terintegrasi, efisien, dan siap berkembang bersama ByteBox Labs.
            </p>
            <a
              className="mt-7 inline-flex h-11 items-center rounded-full bg-white px-6 text-[15px] font-medium text-black transition-transform hover:-translate-y-0.5"
              href="mailto:hello@byteboxlabs.com"
            >
              Hubungi kami
            </a>
          </div>
        </section>
      </div>

      <div className="relative overflow-hidden bg-black px-6 py-10 text-white sm:px-8 xl:px-[48px]">
        <FooterPattern />
        <div className="relative z-10 grid gap-10 lg:grid-cols-[1.5fr_0.55fr_0.6fr_0.7fr] lg:gap-16">
          <div>
            <img alt="Bytebox Labs" className="w-[132px]" src={publicUrl('/images/logo_bbx_white.png')} />
            <p className="mt-4 max-w-[410px] text-[14px] leading-[1.5] text-white/85">
              Partner teknologi terpercaya untuk membantu bisnis membangun solusi digital yang relevan, terintegrasi, dan siap menghadapi kebutuhan industri saat ini.
            </p>
          </div>

          <nav aria-label="Layanan footer">
            <h3 className="text-[14px] font-medium text-primary">Layanan</h3>
            <ul className="mt-4 space-y-1.5 text-[14px] text-white/85">
              {serviceLinks.map((link) => (
                <li key={link}>
                  <a className="transition-colors hover:text-primary" href="#top">{link}</a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Solusi footer">
            <h3 className="text-[14px] font-medium text-primary">Solutions</h3>
            <ul className="mt-4 space-y-1.5 text-[14px] text-white/85">
              {solutionLinks.map((link) => (
                <li key={link}>
                  <a className="transition-colors hover:text-primary" href="#products">{link}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="text-[14px] font-medium text-primary">Contact Us</h3>
            <a className="mt-4 block text-[14px] text-white/85 transition-colors hover:text-primary" href="mailto:hello@byteboxlabs.com">
              Email: hello@byteboxlabs.com
            </a>
          </div>
        </div>

        <div className="relative z-10 mt-11 max-w-[820px] border-t border-white/70 pt-4 text-[12px] text-white/75">
          © 2026 Bytebox Labs. All Rights Reserved &amp; Owned by Bytebox Labs
        </div>
      </div>
    </footer>
  );
}
