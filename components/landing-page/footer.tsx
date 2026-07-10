import Link from "next/link";

const columns = [
  {
    title: "Product",
    links: ["Features", "Pricing", "Integrations", "Changelog"],
  },
  {
    title: "Resources",
    links: ["Documentation", "API", "Guides", "Status"],
  },
  {
    title: "Company",
    links: ["About", "Blog", "Careers", "Contact"],
  },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/6 py-28">
      {/* Huge background word */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-center overflow-hidden">
        <span className="translate-y-1/3 select-none text-[180px] font-semibold tracking-[-0.08em] text-white/2 md:text-[280px]">
          ARC
        </span>
      </div>

      <div className="container relative">
        {/* Top */}
        <div className="grid gap-20 lg:grid-cols-[1.3fr_2fr]">
          {/* Left */}
          <div>
            <h2 className="text-3xl font-semibold tracking-tight">Arc</h2>

            <p className="mt-6 max-w-sm text-base leading-7 text-white/50">
              One workspace for planning, tracking and shipping software. Built
              for engineering teams that value speed, focus and thoughtful
              workflows.
            </p>

            <p className="mt-10 text-sm text-white/35">
              Built for modern engineering teams.
            </p>
          </div>

          {/* Right */}
          <div className="grid grid-cols-2 gap-12 sm:grid-cols-3">
            {columns.map((column) => (
              <div key={column.title}>
                <h3 className="text-xs font-medium uppercase tracking-[0.28em] text-white/35">
                  {column.title}
                </h3>

                <div className="mt-6 space-y-3">
                  {column.links.map((link) => (
                    <Link
                      key={link}
                      href="#"
                      className="block text-sm text-white/50 transition-colors duration-300 hover:text-white"
                    >
                      {link}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="my-14 h-px bg-white/6" />

        {/* Bottom */}
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3 text-sm text-white/35">
            <div className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </div>

            <span>All systems operational</span>
          </div>

          <div className="text-sm text-white/35">
            © {new Date().getFullYear()} Arc. Crafted with care for builders.
          </div>

          <div className="flex gap-8 text-sm">
            {["Privacy", "Terms", "Security", "GitHub"].map((item) => (
              <Link
                key={item}
                href="#"
                className="text-white/35 transition-colors hover:text-white"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
