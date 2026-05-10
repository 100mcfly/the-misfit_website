import { Link } from "react-router-dom";
import { site } from "@/content/site";

export default function Footer() {
  const f = site.footer;
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-[1600px] px-5 py-16 md:px-10 md:py-24">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="font-display text-[14vw] leading-[0.85] md:text-[10vw]">{site.brand.logo}</div>
            <p className="mt-6 max-w-sm font-mono-ed text-xs uppercase tracking-[0.2em] text-muted-foreground">
              {f.blurb}
            </p>
          </div>
          {f.columns.map((col) => (
            <div key={col.title} className="md:col-span-2 last:md:col-span-3">
              <h4 className="font-mono-ed text-[10px] uppercase tracking-[0.3em] text-muted-foreground">{col.title}</h4>
              <ul className="mt-5 space-y-2 text-sm">
                {col.items.map((it) => (
                  <li key={it.label}><Link to={it.to}>{it.label}</Link></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-20 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 md:flex-row md:items-center">
          <p className="font-mono-ed text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            {f.rights(new Date().getFullYear())}
          </p>
          <p className="font-mono-ed text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            {f.note}
          </p>
        </div>
      </div>
    </footer>
  );
}
