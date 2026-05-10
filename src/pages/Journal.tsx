import Layout from "@/components/misfit/Layout";
import Reveal from "@/components/misfit/Reveal";
import { site } from "@/content/site";

export default function Journal() {
  const j = site.journal;
  return (
    <Layout>
      <section className="mx-auto max-w-[1600px] px-5 pt-32 pb-12 md:px-10 md:pt-44">
        <span className="font-mono-ed text-[10px] uppercase tracking-[0.35em] text-muted-foreground">{j.eyebrow}</span>
        <h1 className="font-display mt-4 text-[18vw] leading-[0.85] uppercase md:text-[10vw]">{j.title}</h1>
        <p className="mt-8 max-w-xl text-muted-foreground">{j.intro}</p>
      </section>

      <section className="mx-auto max-w-[1600px] px-5 pb-24 md:px-10 md:pb-32">
        <Reveal>
          <span className="font-mono-ed text-[10px] uppercase tracking-[0.35em] text-muted-foreground">{j.drops.eyebrow}</span>
          <h2 className="font-display mt-3 text-[10vw] leading-[0.9] uppercase md:text-[4vw]">{j.drops.title}</h2>
        </Reveal>
        <div className="mt-12 border-t border-border">
          {j.drops.items.map((d, i) => (
            <Reveal key={d.code} delay={i * 60}>
              <div className="group grid grid-cols-12 items-baseline gap-4 border-b border-border py-6 transition-colors hover:bg-secondary/40 md:py-8">
                <span className="col-span-3 font-mono-ed text-[11px] uppercase tracking-[0.3em] text-muted-foreground md:col-span-2">{d.code}</span>
                <h3 className="col-span-9 font-display text-2xl uppercase leading-none md:col-span-4 md:text-4xl">{d.name}</h3>
                <p className="col-span-12 text-muted-foreground md:col-span-5 md:col-start-8">{d.note}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-ink text-bone">
        <div className="mx-auto max-w-[1600px] px-5 py-24 md:px-10 md:py-32">
          <Reveal>
            <span className="font-mono-ed text-[10px] uppercase tracking-[0.35em] text-bone/50">{j.campaigns.eyebrow}</span>
            <h2 className="font-display mt-3 text-[10vw] leading-[0.9] uppercase md:text-[4vw]">{j.campaigns.title}</h2>
          </Reveal>
          <div className="mt-14 grid gap-12 md:grid-cols-2 md:gap-16">
            {j.campaigns.items.map((c, i) => (
              <Reveal key={c.title} delay={i * 80}>
                <article className="group">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={c.img} alt={c.title} loading="lazy" className="img-zoom h-full w-full object-cover" />
                  </div>
                  <span className="mt-6 inline-block font-mono-ed text-[10px] uppercase tracking-[0.35em] text-bone/50">{c.tag}</span>
                  <h3 className="font-display mt-3 text-2xl uppercase md:text-3xl">{c.title}</h3>
                  <p className="mt-3 max-w-md text-bone/70">{c.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1600px] px-5 py-24 md:px-10 md:py-32">
        <Reveal>
          <span className="font-mono-ed text-[10px] uppercase tracking-[0.35em] text-muted-foreground">{j.slogans.eyebrow}</span>
        </Reveal>
        <ul className="mt-10 divide-y divide-border border-y border-border">
          {j.slogans.items.map((s, i) => (
            <Reveal key={s} delay={i * 50}>
              <li className="flex items-baseline justify-between gap-4 py-6 md:py-8">
                <span className="font-display text-[8vw] uppercase leading-none md:text-[3.6vw]">{s}</span>
                <span className="font-mono-ed text-[10px] uppercase tracking-[0.3em] text-muted-foreground">0{i + 1}</span>
              </li>
            </Reveal>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
