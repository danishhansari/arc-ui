const columns = [
  {
    title: "Product",
    links: ["Features", "Integrations", "Changelog", "Pricing"],
  },
  {
    title: "Resources",
    links: ["Docs", "API", "Guides", "Status"],
  },
  {
    title: "Company",
    links: ["About", "Careers", "Blog", "Contact"],
  },
];

export function Footer() {
  return (
    <footer className="py-16">
      <div className="container">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
          <div className="col-span-2">
            <div className="flex items-center gap-2">
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                <rect width="20" height="20" rx="5" className="fill-white" />
                <path d="M10 4L10 16M4 10L16 10" stroke="#09090B" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
              <span className="text-[14px] font-semibold">Arc</span>
            </div>
            <p className="mt-3 max-w-60 text-[13px] leading-relaxed text-foreground-subtle">
              The issue tracker for teams that would rather be building.
            </p>
          </div>
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-[12px] font-medium uppercase tracking-[0.08em] text-foreground-subtle">
                {col.title}
              </h4>
              <ul className="mt-3 space-y-2">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-[13px] text-foreground-muted transition-colors hover:text-foreground"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/6 pt-6 sm:flex-row">
          <p className="text-[12px] text-foreground-subtle">
            © {new Date().getFullYear()} Arc, Inc. All rights reserved.
          </p>
          <div className="flex gap-5 text-[12px] text-foreground-subtle">
            <a href="#" className="hover:text-foreground-muted">Privacy</a>
            <a href="#" className="hover:text-foreground-muted">Terms</a>
            <a href="#" className="hover:text-foreground-muted">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
