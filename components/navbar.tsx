import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Product", href: "#product" },
  { label: "Workflows", href: "#workflows" },
  { label: "Pricing", href: "#pricing" },
  { label: "Changelog", href: "#changelog" },
];

export function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/6 bg-background/70 backdrop-blur-md">
      <div className="container flex h-14 items-center justify-between">
        <div className="flex items-center gap-8">
          <a href="#" className="flex items-center gap-2">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <rect width="20" height="20" rx="5" className="fill-white" />
              <path d="M10 4L10 16M4 10L16 10" stroke="#09090B" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
            <span className="text-[15px] font-semibold tracking-tight">Arc</span>
          </a>
          <nav className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[13px] text-foreground-muted transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" className="hidden sm:inline-flex">
            Log in
          </Button>
          <Button variant="default" size="sm">
            Start building
          </Button>
        </div>
      </div>
    </header>
  );
}
