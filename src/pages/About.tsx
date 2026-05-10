import Layout from "@/components/misfit/Layout";
import Reveal from "@/components/misfit/Reveal";
import { site } from "@/content/site";

export default function About() {
  const a = site.about;
  return (
    <Layout>
      <section className="mx-auto max-w-[1600px] px-5 pt-32 pb-16 md:px-10 md:pt-44">
        <span className="font-mono-ed text-[10px] uppercase tracking-[0.35em] text-muted-foreground">{a.eyebrow}</span>
        <h1 className="font-display mt-4 max-w-[14ch] text-[14vw] leading-[0.85] uppercase text-balance md:text-[8vw]">
          {a.title}
        </h1>
      </section>

      <section className="mx-auto max-w-[1600px] px-5 pb-24 md:px-10 md:pb-32">
        <ol className="grid gap-px bg-border md:grid-cols-2">
          {a.manifesto.map((line, i) => (
            <Reveal key={i} delay={i * 60} className="bg-background">
              <li className="flex h-full flex-col justify-between gap-10 p-8 md:p-12">
                <span className="font-mono-ed text-[10px] uppercase tracking-[0.35em] text-muted-foreground">
                  0{i + 1} / 0{a.manifesto.length}
                </span>
                <p className="font-display text-2xl uppercase leading-[1.05] md:text-3xl">{line}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </section>

      <section className="mx-auto grid max-w-[1600px] gap-10 px-5 pb-24 md:grid-cols-12 md:px-10 md:pb-32">
        <Reveal className="md:col-span-5">
          <div className="aspect-[3/4] overflow-hidden bg-secondary">
            <img src={a.portrait} alt={a.portraitAlt} loading="lazy" width={1024} height={1280} className="h-full w-full object-cover" />
          </div>
        </Reveal>
        <Reveal delay={120} className="md:col-span-6 md:col-start-7 self-end space-y-8 text-lg leading-relaxed">
          {a.studio.map((p, i) => (
            <p key={i} className={i === 0 ? "" : "text-muted-foreground"}>{p}</p>
          ))}
        </Reveal>
      </section>

      <section className="bg-ink text-bone">
        <div className="mx-auto grid max-w-[1600px] gap-12 px-5 py-24 md:grid-cols-3 md:px-10 md:py-32">
          {a.values.map((v) => (
            <Reveal key={v.k}>
              <span className="font-mono-ed text-[10px] uppercase tracking-[0.35em] text-bone/50">{v.k}</span>
              <h3 className="font-display mt-3 text-4xl uppercase">{v.t}</h3>
              <p className="mt-4 text-bone/70">{v.d}</p>
            </Reveal>
          ))}
        </div>
        <div className="aspect-[16/7] overflow-hidden">
          <img src={a.valuesImage} alt={a.valuesImageAlt} loading="lazy" width={1920} height={840} className="h-full w-full object-cover" />
        </div>
      </section>
    </Layout>
  );
}
