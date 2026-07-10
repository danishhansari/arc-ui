const companies = ["Vantage", "Northwind", "Fluent", "Marrow", "Talon", "Ridgeline"];

export function LogoStrip() {
  return (
    <section className="border-y border-white/6 py-10">
      <div className="container">
        <p className="mb-6 text-center text-[12px] uppercase tracking-[0.14em] text-foreground-subtle">
          Trusted by product teams at
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4 opacity-60 grayscale">
          {companies.map((name) => (
            <span
              key={name}
              className="text-[16px] font-semibold tracking-tight text-foreground-muted"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
