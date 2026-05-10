import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Layout from "@/components/misfit/Layout";
import Marquee from "@/components/misfit/Marquee";
import ProductCard from "@/components/misfit/ProductCard";
import Reveal from "@/components/misfit/Reveal";
import { products } from "@/data/products";
import { site } from "@/content/site";

const Home = () => {
  const h = site.home;
  return (
    <Layout>
      {/* HERO */}
      <section className="relative h-[100svh] w-full overflow-hidden">
        <div className="absolute inset-0 grain">
          <img src={h.hero.image} alt={h.hero.imageAlt} width={1920} height={1080}
               className="h-full w-full object-cover animate-scale-in" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black/70" />
        </div>

        <div className="relative z-10 mx-auto flex h-full max-w-[1600px] flex-col justify-end px-5 pb-16 md:px-10 md:pb-24 text-bone">
          <div className="flex items-center gap-3 animate-fade-in">
            <span className="h-px w-10 bg-bone/60" />
            <span className="font-mono-ed text-[10px] uppercase tracking-[0.35em] text-bone/80">
              {h.hero.eyebrow}
            </span>
          </div>
          <h1 className="font-display mt-6 max-w-[12ch] text-[16vw] leading-[0.82] uppercase text-balance md:text-[9vw] animate-slide-up">
            {h.hero.headline} <em className="not-italic text-bone/60">{h.hero.headlineEm}</em>
          </h1>
          <div className="mt-10 grid gap-8 md:grid-cols-12 md:items-end">
            <p className="md:col-span-5 max-w-md text-base leading-relaxed text-bone/80 animate-fade-in" style={{ animationDelay: "300ms" }}>
              {h.hero.subheadline}
            </p>
            <div className="md:col-span-7 flex flex-wrap items-center gap-3 md:justify-end animate-fade-in" style={{ animationDelay: "500ms" }}>
              <Link to={h.hero.ctaPrimary.to} className="group inline-flex items-center gap-3 bg-bone px-7 py-4 font-mono-ed text-[11px] uppercase tracking-[0.3em] text-ink transition-colors hover:bg-bone/90">
                {h.hero.ctaPrimary.label}
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link to={h.hero.ctaSecondary.to} className="inline-flex items-center gap-3 border border-bone/40 bg-transparent px-7 py-4 font-mono-ed text-[11px] uppercase tracking-[0.3em] text-bone backdrop-blur-md transition-colors hover:bg-bone/10">
                {h.hero.ctaSecondary.label}
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute right-5 top-1/2 z-10 hidden -translate-y-1/2 rotate-90 origin-center md:block">
          <span className="font-mono-ed text-[10px] uppercase tracking-[0.4em] text-bone/60">
            {h.hero.sideLabel}
          </span>
        </div>
      </section>

      <Marquee items={h.marquee} />

      {/* FEATURED */}
      <section className="mx-auto max-w-[1600px] px-5 py-24 md:px-10 md:py-32">
        <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="font-mono-ed text-[10px] uppercase tracking-[0.35em] text-muted-foreground">
              {h.featured.eyebrow}
            </span>
            <h2 className="font-display mt-3 text-[12vw] leading-[0.85] uppercase md:text-[5vw]">
              {h.featured.title}
            </h2>
          </div>
          <Link to={h.featured.link.to} className="font-mono-ed text-[11px] uppercase tracking-[0.3em] underline-offset-8 hover:underline">
            {h.featured.link.label}
          </Link>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-x-4 gap-y-12 md:grid-cols-4 md:gap-x-6">
          {products.slice(0, 4).map((p, i) => (
            <Reveal key={p.id} delay={i * 80}>
              <ProductCard p={p} index={i} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="relative overflow-hidden bg-ink text-bone">
        <div className="mx-auto grid max-w-[1600px] gap-12 px-5 py-28 md:grid-cols-12 md:px-10 md:py-40">
          <div className="md:col-span-4">
            <span className="font-mono-ed text-[10px] uppercase tracking-[0.35em] text-bone/50">
              {h.philosophy.eyebrow}
            </span>
            <p className="font-display mt-6 text-2xl leading-tight">{h.philosophy.symbol}</p>
          </div>
          <Reveal className="md:col-span-8">
            <p className="font-display text-[8vw] leading-[0.95] uppercase text-balance md:text-[3.4vw]">
              {h.philosophy.line1}
              <span className="text-bone/40">{h.philosophy.line1Muted}</span>
              <br />{h.philosophy.line2}
              <span className="text-bone/40">{h.philosophy.line2Muted}</span>
            </p>
          </Reveal>
        </div>
      </section>

      {/* EDITORIAL SPLIT */}
      <section className="mx-auto max-w-[1600px] px-5 py-24 md:px-10 md:py-32">
        <Reveal>
          <span className="font-mono-ed text-[10px] uppercase tracking-[0.35em] text-muted-foreground">
            {h.capsule.eyebrow}
          </span>
          <h2 className="font-display mt-3 text-[12vw] leading-[0.85] uppercase md:text-[6vw]">
            {h.capsule.title}
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-12">
          <Reveal className="md:col-span-7">
            <div className="group relative aspect-[4/3] overflow-hidden bg-secondary">
              <img src={h.capsule.image} alt={h.capsule.imageAlt} loading="lazy" width={1920} height={1080}
                   className="img-zoom h-full w-full object-cover" />
            </div>
          </Reveal>
          <Reveal delay={100} className="md:col-span-5 flex flex-col justify-between gap-6">
            <div className="group relative aspect-[3/4] overflow-hidden bg-secondary">
              <img src={h.capsule.portrait} alt={h.capsule.portraitAlt} loading="lazy" width={1024} height={1280}
                   className="img-zoom h-full w-full object-cover" />
            </div>
            <p className="max-w-md text-muted-foreground">{h.capsule.copy}</p>
          </Reveal>
        </div>
      </section>

      {/* PRODUCTS LOWER */}
      <section className="mx-auto max-w-[1600px] px-5 pb-24 md:px-10 md:pb-32">
        <div className="grid grid-cols-2 gap-x-4 gap-y-12 md:grid-cols-3 md:gap-x-6">
          {products.slice(2, 5).map((p, i) => (
            <Reveal key={p.id} delay={i * 80}>
              <ProductCard p={p} index={i + 4} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* LOOKBOOK TEASER */}
      <section className="relative">
        <div className="grid md:grid-cols-2">
          <div className="group relative aspect-[3/4] overflow-hidden md:aspect-auto md:min-h-[80vh]">
            <img src={h.lookbookTeaser.image} alt={h.lookbookTeaser.imageAlt} loading="lazy" width={1024} height={1280}
                 className="img-zoom h-full w-full object-cover" />
          </div>
          <div className="flex flex-col justify-center bg-bone px-6 py-20 md:px-16">
            <span className="font-mono-ed text-[10px] uppercase tracking-[0.35em] text-muted-foreground">{h.lookbookTeaser.eyebrow}</span>
            <h2 className="font-display mt-4 text-[14vw] leading-[0.85] uppercase md:text-[5.5vw]">
              {h.lookbookTeaser.title}
            </h2>
            <p className="mt-6 max-w-md text-muted-foreground">{h.lookbookTeaser.copy}</p>
            <Link to={h.lookbookTeaser.cta.to}
                  className="mt-10 inline-flex w-fit items-center gap-3 border border-foreground px-7 py-4 font-mono-ed text-[11px] uppercase tracking-[0.3em] transition-colors hover:bg-foreground hover:text-background">
              {h.lookbookTeaser.cta.label}
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* PORTRAIT BAND */}
      <section className="mx-auto grid max-w-[1600px] gap-10 px-5 py-24 md:grid-cols-12 md:px-10 md:py-32">
        <Reveal className="md:col-span-5">
          <div className="aspect-[3/4] overflow-hidden">
            <img src={h.portrait.image} alt={h.portrait.imageAlt} loading="lazy" width={1024} height={1280}
                 className="h-full w-full object-cover" />
          </div>
        </Reveal>
        <Reveal delay={120} className="md:col-span-7 flex flex-col justify-end">
          <span className="font-mono-ed text-[10px] uppercase tracking-[0.35em] text-muted-foreground">
            {h.portrait.eyebrow}
          </span>
          <p className="font-display mt-6 text-[8vw] leading-[0.95] uppercase md:text-[3.4vw]">
            {h.portrait.quote}
            <span className="text-muted-foreground">{h.portrait.quoteMuted}</span>
          </p>
        </Reveal>
      </section>

      {/* NEWSLETTER */}
      <section className="bg-secondary">
        <div className="mx-auto max-w-[1600px] px-5 py-24 md:px-10 md:py-32">
          <Reveal>
            <span className="font-mono-ed text-[10px] uppercase tracking-[0.35em] text-muted-foreground">
              {h.newsletter.eyebrow}
            </span>
            <h2 className="font-display mt-3 max-w-[18ch] text-[10vw] leading-[0.9] uppercase text-balance md:text-[5vw]">
              {h.newsletter.title}
            </h2>
          </Reveal>
          <form onSubmit={(e) => e.preventDefault()}
                className="mt-12 flex max-w-2xl flex-col gap-4 border-b border-foreground pb-4 md:flex-row md:items-center">
            <input type="email" required placeholder={h.newsletter.placeholder}
                   className="flex-1 bg-transparent py-3 font-mono-ed text-sm uppercase tracking-[0.15em] outline-none placeholder:text-muted-foreground" />
            <button className="font-mono-ed text-[11px] uppercase tracking-[0.3em] hover:underline underline-offset-8">
              {h.newsletter.button}
            </button>
          </form>
          <p className="mt-6 max-w-md font-mono-ed text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
            {h.newsletter.note}
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
