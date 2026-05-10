import Layout from "@/components/misfit/Layout";
import Reveal from "@/components/misfit/Reveal";
import { useState } from "react";
import { site } from "@/content/site";

export default function Contact() {
  const c = site.contact;
  const [sent, setSent] = useState(false);
  return (
    <Layout>
      <section className="mx-auto max-w-[1600px] px-5 pt-32 pb-12 md:px-10 md:pt-44">
        <span className="font-mono-ed text-[10px] uppercase tracking-[0.35em] text-muted-foreground">{c.eyebrow}</span>
        <h1 className="font-display mt-4 text-[18vw] leading-[0.85] uppercase md:text-[10vw]">{c.title}</h1>
      </section>

      <section className="mx-auto grid max-w-[1600px] gap-12 px-5 pb-24 md:grid-cols-12 md:px-10 md:pb-32">
        <Reveal className="md:col-span-5 space-y-10">
          {c.blocks.map((b) => (
            <div key={b.label}>
              <h3 className="font-mono-ed text-[10px] uppercase tracking-[0.3em] text-muted-foreground">{b.label}</h3>
              <p className="mt-3 text-lg whitespace-pre-line">{b.body}</p>
            </div>
          ))}
          <div>
            <h3 className="font-mono-ed text-[10px] uppercase tracking-[0.3em] text-muted-foreground">{c.social.label}</h3>
            <ul className="mt-3 space-y-2 text-lg">
              {c.social.items.map((s) => (
                <li key={s.label}><a href={s.href} className="hover:underline underline-offset-8">{s.label}</a></li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={120} className="md:col-span-6 md:col-start-7">
          <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="space-y-8">
            {c.form.fields.map((f) => (
              <div key={f.id} className="border-b border-border pb-2">
                <label htmlFor={f.id} className="font-mono-ed text-[10px] uppercase tracking-[0.3em] text-muted-foreground">{f.label}</label>
                <input id={f.id} type={f.type} required className="mt-2 w-full bg-transparent py-2 text-lg outline-none" />
              </div>
            ))}
            <div className="border-b border-border pb-2">
              <label htmlFor="message" className="font-mono-ed text-[10px] uppercase tracking-[0.3em] text-muted-foreground">{c.form.messageLabel}</label>
              <textarea id="message" rows={5} required className="mt-2 w-full resize-none bg-transparent py-2 text-lg outline-none" />
            </div>
            <button type="submit"
              className="inline-flex items-center gap-3 bg-foreground px-8 py-4 font-mono-ed text-[11px] uppercase tracking-[0.3em] text-background transition-opacity hover:opacity-90">
              {sent ? c.form.submitted : c.form.submit}
            </button>
          </form>
        </Reveal>
      </section>
    </Layout>
  );
}
