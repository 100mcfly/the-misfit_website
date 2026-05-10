export default function Marquee({ items }: { items: string[] }) {
  const row = [...items, ...items];
  return (
    <div className="overflow-hidden border-y border-border py-5">
      <div className="marquee whitespace-nowrap">
        {row.map((t, i) => (
          <span
            key={i}
            className="mx-8 inline-flex items-center gap-8 font-mono-ed text-[11px] uppercase tracking-[0.35em] text-muted-foreground"
          >
            {t} <span className="text-foreground"></span>
          </span>
        ))}
      </div>
    </div>
  );
}
