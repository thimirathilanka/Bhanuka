export function PageHeader({
  eyebrow,
  title,
  lede,
}: {
  eyebrow: string;
  title: string;
  lede?: string;
}) {
  return (
    <header className="max-w-2xl">
      <p className="text-xs uppercase tracking-[0.22em] text-accent">{eyebrow}</p>
      <h1 className="mt-3 font-serif text-5xl leading-[1.05] sm:text-6xl">{title}</h1>
      {lede ? (
        <p className="mt-5 text-lg leading-relaxed text-muted">{lede}</p>
      ) : null}
    </header>
  );
}
