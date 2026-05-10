import Layout from "@/components/misfit/Layout";
import Reveal from "@/components/misfit/Reveal";
import { ArrowUpRight } from "lucide-react";
import { site } from "@/content/site";

export default function Collections() {
  const c = site.collections;
  return (
    <Layout>
      <section className="mx-auto max-w-[1600px] px-5 pt-32 pb-12 md:px-10 md:pt-44">
        <span className="font-mono-ed text-[10px] uppercase tracking-[0.35em] text-muted-foreground">{c.eyebrow}</span>
        <h1 className="font-display mt-4 text-[18vw] leading-[0.85] uppercase md:text-[10vw]">
          {c.title}
        </h1>
      </section>

      <section className="mx-auto max-w-[1600px] px-5 pb-24 md:px-10 md:pb-32">
        <div className="space-y-32 md:space-y-48">
          {c.items.map((item, i) => (
            <Reveal key={item.id}>
              <div className={`grid items-center gap-8 md:grid-cols-12 md:gap-12 ${i % 2 ? "md:[direction:rtl]" : ""}`}>
                <div className="group relative md:col-span-7 [direction:ltr]">
                  <div className="aspect-[4/3] overflow-hidden bg-secondary">
                    <img src={item.img} alt={item.name} loading="lazy" width={1920} height={1080}
                         className="img-zoom h-full w-full object-cover" />
                  </div>
                  <span className="absolute -top-6 left-0 font-display text-[14vw] leading-none text-foreground/10 md:text-[8vw]">
                    {item.id}
                  </span>
                </div>
                <div className="md:col-span-5 [direction:ltr]">
                  <span className="font-mono-ed text-[10px] uppercase tracking-[0.35em] text-muted-foreground">
                    Chapter {item.id}
                  </span>
                  <h2 className="font-display mt-3 text-[12vw] leading-[0.85] uppercase md:text-[5vw]">
                    {item.name}
                  </h2>
                  <p className="mt-6 max-w-md text-muted-foreground">{item.desc}</p>
                  <a className="mt-8 inline-flex items-center gap-2 font-mono-ed text-[11px] uppercase tracking-[0.3em] hover:underline underline-offset-8">
                    {c.exploreLabel} <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </Layout>
  );
}
