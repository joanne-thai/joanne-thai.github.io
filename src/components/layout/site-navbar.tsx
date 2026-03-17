import { Menu } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "About", to: "/#about" },
  { label: "Projects", to: "/#projects" },
  { label: "Skills", to: "/#skills" },
  { label: "Contact", to: "/#contact" },
];

export function SiteNavbar({ name }: { name: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-zinc-200/80 bg-white/92 backdrop-blur-sm">
      <div className="page-shell">
        <div className="flex items-center justify-between py-4">
          <Link to="/" className="text-sm font-semibold uppercase tracking-[0.18em] text-zinc-900">
            {name}
          </Link>

          <nav className="hidden items-center gap-2 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className="rounded-full px-4 py-2 text-sm font-medium text-zinc-600 transition hover:bg-emerald-50 hover:text-emerald-700"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <button
            type="button"
            onClick={() => setIsOpen((value) => !value)}
            className="inline-flex rounded-full border border-zinc-200 p-2 text-zinc-600 transition hover:bg-emerald-50 hover:text-emerald-700 md:hidden"
            aria-label="Toggle navigation"
          >
            <Menu className="size-5" />
          </button>
        </div>

        <div
          className={cn(
            "grid overflow-hidden transition-[grid-template-rows] duration-200 md:hidden",
            isOpen ? "grid-rows-[1fr] pb-4" : "grid-rows-[0fr]",
          )}
        >
          <div className="min-h-0">
            <div className="flex flex-col gap-2 rounded-[24px] border border-zinc-200 bg-white p-3 shadow-soft">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.to}
                  onClick={() => setIsOpen(false)}
                  className="rounded-2xl px-4 py-3 text-sm font-medium text-zinc-600 transition hover:bg-emerald-50 hover:text-emerald-700"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
