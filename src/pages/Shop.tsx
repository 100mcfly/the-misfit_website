import Layout from "@/components/misfit/Layout";
import ProductCard from "@/components/misfit/ProductCard";
import Reveal from "@/components/misfit/Reveal";
import { products } from "@/data/products";
import { site } from "@/content/site";

export default function Shop() {
  const s = site.shop;
  return (
    <Layout>
      <section className="mx-auto max-w-[1600px] px-5 pt-32 pb-12 md:px-10 md:pt-44">
        <span className="font-mono-ed text-[10px] uppercase tracking-[0.35em] text-muted-foreground">
          {s.eyebrow}
        </span>
        <h1 className="font-display mt-4 text-[18vw] leading-[0.85] uppercase md:text-[10vw]">
          {s.title}
        </h1>
      </section>

      <section className="sticky top-16 z-30 border-y border-border bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1600px] gap-2 overflow-x-auto px-5 py-4 md:px-10">
          {s.filters.map((f) => (
            <button key={f}
              className="whitespace-nowrap border border-border px-4 py-2 font-mono-ed text-[10px] uppercase tracking-[0.25em] transition-colors hover:bg-foreground hover:text-background">
              {f}
            </button>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1600px] px-5 py-16 md:px-10 md:py-24">
        <div className="grid grid-cols-2 gap-x-4 gap-y-14 md:grid-cols-3 md:gap-x-6 lg:grid-cols-4">
          {[...products, ...products].map((p, i) => (
            <Reveal key={i} delay={(i % 4) * 80}>
              <ProductCard p={p} index={i} />
            </Reveal>
          ))}
        </div>
      </section>
    </Layout>
  );
}
