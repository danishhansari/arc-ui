import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { label: "Product", href: "#product" },
  { label: "Workflows", href: "#workflows" },
  { label: "Docs", href: "#" },
];

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/4 bg-background/70 backdrop-blur-xl">
      <div className="container">
        <div className="flex h-18 items-center justify-between">
          {/* Brand */}

          <a href="/" className="group flex items-center gap-3">
            <svg
              width="18"
              height="18"
              viewBox="0 0 20 20"
              fill="none"
              className="transition-transform duration-300 group-hover:rotate-6"
            >
              <rect width="20" height="20" rx="5" className="fill-white" />
              <path
                d="M10 4L10 16M4 10L16 10"
                stroke="#09090B"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>

            <span className="text-[15px] font-semibold tracking-tight">
              Arc
            </span>
          </a>

          {/* Navigation */}

          <nav className="hidden items-center gap-12 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="
                  text-[14px]
                  text-white/50
                  transition-colors
                  duration-300
                  hover:text-white
                "
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Actions */}

          <div className="flex items-center gap-3">
            <Link href={"/login"}>
              <Button
                size="sm"
                className="
                h-9
                rounded-xl
                px-4
                shadow-none
              "
              >
                Let's Start
                <ArrowRight className="ml-.5 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
