import { useEffect, useRef, useState } from "react";
import Layout from "@/components/misfit/Layout";
import Reveal from "@/components/misfit/Reveal";
import { site } from "@/content/site";

export default function Lookbook() {
  const lb = site.lookbook;
  const [progress, setProgress] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const h = window.innerHeight;
      const max = document.body.scrollHeight - h;
      setProgress(max > 0 ? window.scrollY / max : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Layout>
      <div className="fixed left-0 top-16 z-40 h-[2px] bg-foreground/10 w-full">
        <div className="h-full bg-foreground transition-[width] duration-100" style={{ width: `${progress * 100}%` }} />
      </div>

      <section ref={heroRef} className="relative h-[100svh] overflow-hidden">
        <img src={lb.hero.image} alt={lb.hero.imageAlt} width={1920} height={1080}
             className="h-[120%] w-full object-cover animate-scale-in"
             style={{ transform: `translateY(${progress * -80}px)` }} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/80" />
        <div className="absolute inset-x-0 bottom-0 mx-auto flex max-w-[1600px] flex-col px-5 pb-16 md:px-10 md:pb-24 text-bone">
          <span className="font-mono-ed text-[10px] uppercase tracking-[0.35em] text-bone/70 animate-fade-in">
            {lb.hero.eyebrow}
          </span>
          <h1 className="font-display mt-4 text-[20vw] leading-[0.82] uppercase md:text-[12vw] animate-slide-up">
            {lb.hero.title}
          </h1>
          <p className="mt-6 max-w-md text-bone/80 animate-fade-in" style={{ animationDelay: "300ms" }}>
            {lb.hero.copy}
          </p>
        </div>
        <div className="absolute right-5 bottom-8 font-mono-ed text-[10px] uppercase tracking-[0.4em] text-bone/60">
          {lb.hero.scroll}
        </div>
      </section>

      <section className="mx-auto max-w-[1600px] px-5 py-24 md:px-10 md:py-32">
        <Reveal className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5 md:col-start-2">
            <span className="font-mono-ed text-[10px] uppercase tracking-[0.35em] text-muted-foreground">{lb.note.eyebrow}</span>
            <p className="mt-6 text-xl md:text-2xl leading-snug text-balance">{lb.note.body}</p>
          </div>
          <div className="md:col-span-4 md:col-start-8 self-end font-mono-ed text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
            {lb.note.credits.map((c) => <p key={c}>{c}</p>)}
          </div>
        </Reveal>
      </section>

      {lb.looks.map((l, i) => (
        <section key={l.n} className={`relative ${i % 2 ? "bg-secondary" : "bg-background"}`}>
          <div className="mx-auto grid max-w-[1600px] gap-6 px-5 py-16 md:grid-cols-12 md:gap-10 md:px-10 md:py-24">
            <Reveal className={`md:col-span-7 ${i % 2 ? "md:col-start-6" : ""}`}>
              <div className="group relative aspect-[4/5] overflow-hidden bg-ink">
                <img src={l.img} alt={l.t} loading="lazy" width={1600} height={2000}
                     className="img-zoom h-full w-full object-cover" />
                <span className="absolute left-4 top-4 font-mono-ed text-[10px] uppercase tracking-[0.35em] text-bone/90 mix-blend-difference">
                  {l.n}
                </span>
              </div>
            </Reveal>
            <div className={`md:col-span-4 ${i % 2 ? "md:col-start-2 md:row-start-1" : "md:col-start-8"} flex flex-col justify-end`}>
              <div className="md:sticky md:top-32">
                <span className="font-mono-ed text-[10px] uppercase tracking-[0.35em] text-muted-foreground">
                  {l.n} — 0{i + 1} / 0{lb.looks.length}
                </span>
                <h2 className="font-display mt-3 text-[12vw] leading-[0.85] uppercase md:text-[4.5vw]">{l.t}</h2>
                <p className="mt-4 text-muted-foreground">{l.d}</p>
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="bg-ink text-bone">
        <div className="mx-auto max-w-[1600px] px-5 py-32 md:px-10 md:py-48">
          <Reveal>
            <p className="font-display text-[10vw] leading-[0.95] uppercase text-balance md:text-[5vw]">
              {lb.quote.line}
              <span className="text-bone/40">{lb.quote.lineMuted}</span>
            </p>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}
