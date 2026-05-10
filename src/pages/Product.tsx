import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowUpRight, Minus, Plus } from "lucide-react";
import Layout from "@/components/misfit/Layout";
import ProductCard from "@/components/misfit/ProductCard";
import Reveal from "@/components/misfit/Reveal";
import { products } from "@/data/products";
import { site } from "@/content/site";

export default function Product() {
  const pc = site.product;
  const { id } = useParams();
  const product = useMemo(() => products.find((p) => p.id === id) ?? products[0], [id]);
  const related = products.filter((p) => p.id !== product.id).slice(0, 3);

  const [size, setSize] = useState<string | null>(null);
  const [open, setOpen] = useState<string | null>(pc.accordion[0]?.t ?? null);

  return (
    <Layout>
      <section className="mx-auto max-w-[1600px] px-5 pt-28 md:px-10 md:pt-36">
        <div className="grid gap-10 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-8">
            <div className="aspect-[4/5] overflow-hidden bg-secondary">
              <img src={product.image} alt={product.name} width={1600} height={2000}
                   className="h-full w-full object-cover animate-scale-in" />
            </div>
          </div>

          <aside className="md:col-span-4 md:sticky md:top-28 self-start space-y-8">
            <div>
              <span className="font-mono-ed text-[10px] uppercase tracking-[0.35em] text-muted-foreground">
                {product.collection ?? "Essentials"} · {site.brand.logo}
              </span>
              <h1 className="font-display mt-3 text-4xl uppercase leading-[0.95] md:text-5xl">{product.name}</h1>
              <p className="mt-4 font-mono-ed text-sm">{product.price}</p>
            </div>

            <p className="text-muted-foreground leading-relaxed">{pc.description}</p>

            <div>
              <div className="flex items-center justify-between">
                <span className="font-mono-ed text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Size</span>
                <button className="font-mono-ed text-[10px] uppercase tracking-[0.3em] underline-offset-4 hover:underline">{pc.sizeGuide}</button>
              </div>
              <div className="mt-3 grid grid-cols-5 gap-2">
                {pc.sizes.map((s) => (
                  <button key={s} onClick={() => setSize(s)}
                    className={`border py-3 font-mono-ed text-xs uppercase tracking-[0.2em] transition-colors ${
                      size === s ? "border-foreground bg-foreground text-background" : "border-border hover:border-foreground"
                    }`}>
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <button className="group inline-flex items-center justify-between bg-foreground px-6 py-4 font-mono-ed text-[11px] uppercase tracking-[0.3em] text-background transition-opacity hover:opacity-90">
                {pc.addToBag}
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
              <button className="border border-foreground px-6 py-4 font-mono-ed text-[11px] uppercase tracking-[0.3em] hover:bg-foreground hover:text-background transition-colors">
                {pc.wishlist}
              </button>
            </div>

            <div className="border-t border-border">
              {pc.accordion.map((a) => {
                const isOpen = open === a.t;
                return (
                  <div key={a.t} className="border-b border-border">
                    <button onClick={() => setOpen(isOpen ? null : a.t)}
                      className="flex w-full items-center justify-between py-4 font-mono-ed text-[11px] uppercase tracking-[0.3em]">
                      {a.t}
                      {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                    </button>
                    {isOpen && (
                      <p className="pb-5 pr-6 text-sm leading-relaxed text-muted-foreground animate-fade-in">{a.d}</p>
                    )}
                  </div>
                );
              })}
            </div>
          </aside>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1600px] gap-12 px-5 py-32 md:grid-cols-12 md:px-10">
        <Reveal className="md:col-span-5">
          <span className="font-mono-ed text-[10px] uppercase tracking-[0.35em] text-muted-foreground">{pc.styling.eyebrow}</span>
          <p className="font-display mt-6 text-3xl uppercase leading-tight md:text-5xl">{pc.styling.headline}</p>
        </Reveal>
        <Reveal delay={120} className="md:col-span-6 md:col-start-7 self-end space-y-6 text-muted-foreground">
          <p>{pc.styling.copy1}</p>
          <p>{pc.styling.copy2}</p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-[1600px] px-5 pb-32 md:px-10">
        <Reveal className="flex items-end justify-between">
          <div>
            <span className="font-mono-ed text-[10px] uppercase tracking-[0.35em] text-muted-foreground">{pc.related.eyebrow}</span>
            <h2 className="font-display mt-3 text-[10vw] leading-[0.9] uppercase md:text-[4vw]">{pc.related.title}</h2>
          </div>
          <Link to={pc.related.link.to} className="font-mono-ed text-[11px] uppercase tracking-[0.3em] underline-offset-8 hover:underline">
            {pc.related.link.label}
          </Link>
        </Reveal>
        <div className="mt-12 grid grid-cols-2 gap-x-4 gap-y-12 md:grid-cols-3 md:gap-x-6">
          {related.map((p, i) => (
            <Reveal key={p.id} delay={i * 80}>
              <ProductCard p={p} index={i} />
            </Reveal>
          ))}
        </div>
      </section>
    </Layout>
  );
}
