import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ShoppingBag, Menu, X } from "lucide-react";
import { site } from "@/content/site";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ${
        scrolled ? "glass-chrome" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[1600px] items-center justify-between px-5 md:px-10">
        <Link to="/" className="flex items-center gap-3" aria-label={site.brand.name}>
          <span className="font-display text-3xl leading-none">{site.brand.logo}</span>
          <span className="font-mono-ed text-[10px] uppercase tracking-[0.3em] text-muted-foreground hidden sm:block">
            {site.brand.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {site.nav.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `font-mono-ed text-[11px] uppercase tracking-[0.25em] transition-colors hover:text-foreground ${
                  isActive ? "text-foreground" : "text-muted-foreground"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button className="hidden font-mono-ed text-[11px] uppercase tracking-[0.25em] text-muted-foreground hover:text-foreground md:inline">
            Search
          </button>
          <button aria-label="Cart" className="relative flex h-9 w-9 items-center justify-center transition-transform hover:scale-110">
            <ShoppingBag className="h-4 w-4" strokeWidth={1.4} />
            <span className="absolute -top-0.5 -right-0.5 font-mono-ed text-[9px]">0</span>
          </button>
          <button className="md:hidden" aria-label="Menu" onClick={() => setOpen((v) => !v)}>
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <nav className="flex flex-col px-5 py-6">
            {site.nav.map((l) => (
              <NavLink key={l.to} to={l.to} onClick={() => setOpen(false)} className="py-3 font-display text-3xl uppercase">
                {l.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
