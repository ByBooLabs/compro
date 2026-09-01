import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Image as ImageIcon,
} from "lucide-react";

interface Product {
  id: number;
  name: string;
  image?: string;
}

const products: Product[] = [
  { id: 1, name: "Product One" },
  { id: 2, name: "Product Two" },
  { id: 3, name: "Product Three" },
  { id: 4, name: "Product Four" },
];

function ProductCard({ product }: { product: Product }) {
  return (
    <article
      aria-label={product.name}
      className="grid aspect-[0.89] w-[clamp(183px,20vw,280px)] shrink-0 place-items-center overflow-hidden rounded-[20px] bg-[#d9d9d9]"
    >
      {product.image ? (
        <img
          alt={product.name}
          className="h-full w-full object-cover"
          src={product.image}
        />
      ) : (
        <ImageIcon
          aria-hidden="true"
          className="h-12 w-12 text-[#ababab]"
          strokeWidth={1.4}
        />
      )}
    </article>
  );
}

export function Products() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollPrevious, setCanScrollPrevious] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const updateScrollState = () => {
      const maximumScroll = carousel.scrollWidth - carousel.clientWidth;
      setCanScrollPrevious(carousel.scrollLeft > 2);
      setCanScrollNext(carousel.scrollLeft < maximumScroll - 2);
    };

    updateScrollState();
    carousel.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);

    return () => {
      carousel.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, []);

  const scrollProducts = (direction: "previous" | "next") => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    carousel.scrollBy({
      behavior: "smooth",
      left: carousel.clientWidth * (direction === "next" ? 0.62 : -0.62),
    });
  };

  return (
    <section
      id="our-products"
      className="overflow-hidden bg-white py-14 sm:py-16"
    >
      <div className="grid gap-12 px-6 sm:px-8 lg:grid-cols-[30%_70%] lg:gap-0 xl:px-[54px]">
        <div className="relative z-10">
          <div className="relative pt-7">
            <p
              aria-hidden="true"
              className="absolute top-[-12px] -left-3 whitespace-nowrap font-display text-[58px] leading-none font-medium tracking-[-0.05em] text-transparent [-webkit-text-stroke:2px_#ffe19a] sm:text-[68px]"
            >
              Our Products
            </p>
            <h2 className="relative font-display text-[24px] leading-tight font-medium tracking-[-0.025em] text-black">
              Technology We Build
            </h2>
          </div>

          <p className="mt-5 max-w-[275px] text-[14px] leading-[1.35] text-[#5f5f5f]">
            Kami juga menciptakan produk digital berdasarkan kebutuhan nyata,
            untuk menghadirkan solusi yang relevan dan berdampak.
          </p>

          <div className="mt-5 flex items-center gap-2">
            <button
              aria-label="Produk sebelumnya"
              className={`grid h-10 w-10 place-items-center rounded-full border transition-colors ${
                canScrollPrevious
                  ? "border-primary bg-primary text-white hover:bg-[#5f12ba]"
                  : "cursor-default border-[#dedede] bg-white text-black"
              }`}
              disabled={!canScrollPrevious}
              onClick={() => scrollProducts("previous")}
              type="button"
            >
              <ChevronLeft className="h-6 w-6" strokeWidth={2} />
            </button>
            <button
              aria-label="Produk berikutnya"
              className={`grid h-10 w-10 place-items-center rounded-full border transition-colors ${
                canScrollNext
                  ? "border-primary bg-primary text-white hover:bg-[#5f12ba]"
                  : "cursor-default border-[#dedede] bg-white text-black"
              }`}
              disabled={!canScrollNext}
              onClick={() => scrollProducts("next")}
              type="button"
            >
              <ChevronRight className="h-6 w-6" strokeWidth={2} />
            </button>
          </div>
        </div>

        <div className="min-w-0">
          <div className="mb-4 flex justify-end pr-6 sm:pr-8 xl:pr-[23px]">
            <a
              className="inline-flex h-10 items-center gap-3 rounded-full border border-[#e3e3e3] bg-white pl-5 pr-1 text-[12px] font-medium text-black transition-colors hover:border-primary"
              href="#contact"
            >
              Lihat semua
              <span className="grid h-8 w-8 place-items-center rounded-full bg-primary text-white">
                <ArrowUpRight className="h-5 w-5" strokeWidth={2} />
              </span>
            </a>
          </div>

          <div
            className="flex snap-x snap-mandatory gap-5 overflow-x-auto pr-6 [scrollbar-width:none] sm:pr-8 [&::-webkit-scrollbar]:hidden"
            ref={carouselRef}
          >
            {products.map((product) => (
              <div className="snap-start" key={product.id}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
