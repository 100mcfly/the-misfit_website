import { Link } from "react-router-dom";

export type Product = {
  id: string;
  name: string;
  price: string;
  image: string;
  alt?: string;
  collection?: string;
};

export default function ProductCard({ p, index = 0 }: { p: Product; index?: number }) {
  return (
    <Link to={`/product/${p.id}`} className="group block">
      <div className="relative aspect-[4/5] overflow-hidden bg-secondary">
        <img
          src={p.image}
          alt={p.alt || p.name}
          loading="lazy"
          width={1024}
          height={1280}
          className="img-zoom h-full w-full object-cover"
        />
        <div className="absolute inset-x-3 bottom-3 flex items-center justify-between opacity-0 translate-y-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
          <span className="glass-chrome px-3 py-2 font-mono-ed text-[10px] uppercase tracking-[0.25em]">
            Quick view
          </span>
          <span className="glass-chrome px-3 py-2 font-mono-ed text-[10px] uppercase tracking-[0.25em]">
            Add +
          </span>
        </div>
        <span className="absolute top-3 left-3 font-mono-ed text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          0{index + 1}
        </span>
      </div>
      <div className="mt-4 flex items-start justify-between gap-4">
        <div>
          <p className="font-mono-ed text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            {p.collection || "Essentials"}
          </p>
          <h3 className="mt-1 text-sm md:text-base">{p.name}</h3>
        </div>
        <span className="font-mono-ed text-sm">{p.price}</span>
      </div>
    </Link>
  );
}
