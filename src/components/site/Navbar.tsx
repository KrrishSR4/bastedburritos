import { Flame, Menu, X } from "lucide-react";
import { useEffect, useState, useCallback } from "react";
import { cn } from "@/lib/utils";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  // Scrolled state (passive listener for perf)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Active section via IntersectionObserver (cheap, no scroll handler)
  useEffect(() => {
    const ids = links.map((l) => l.href.slice(1));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);
    if (!sections.length) return;

    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5, 1] }
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const handleNav = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    const id = href.slice(1);
    const el = document.getElementById(id);
    if (el) {
      e.preventDefault();
      setOpen(false);
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      history.replaceState(null, "", href);
    }
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-[padding] duration-300",
        scrolled ? "py-2" : "py-4"
      )}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6">
        <div
          className={cn(
            "glass rounded-2xl px-4 sm:px-5 flex items-center justify-between transition-all duration-300",
            scrolled ? "py-2 shadow-card" : "py-3"
          )}
        >
          <a
            href="#home"
            onClick={(e) => handleNav(e, "#home")}
            className="flex items-center gap-2 group shrink-0"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-flame to-chili flex items-center justify-center glow-primary">
              <Flame className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-display text-lg tracking-tight">
              Basted<span className="text-flame">.</span>
            </span>
          </a>

          <ul className="hidden md:flex items-center gap-1 font-condensed text-base">
            {links.map((l) => {
              const id = l.href.slice(1);
              const isActive = active === id;
              return (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={(e) => handleNav(e, l.href)}
                    className={cn(
                      "relative px-3 py-1.5 rounded-lg transition-colors duration-200",
                      isActive ? "text-flame" : "text-foreground/80 hover:text-flame"
                    )}
                  >
                    {l.label}
                    <span
                      className={cn(
                        "absolute left-3 right-3 -bottom-0.5 h-0.5 rounded-full bg-gradient-to-r from-flame to-chili origin-left transition-transform duration-300",
                        isActive ? "scale-x-100" : "scale-x-0"
                      )}
                    />
                  </a>
                </li>
              );
            })}
          </ul>

          <a
            href="https://wa.me/918359055505"
            target="_blank"
            rel="noreferrer"
            className="hidden md:inline-flex items-center gap-2 bg-neon text-accent-foreground font-condensed text-base px-5 py-2 rounded-xl hover:scale-105 transition-transform"
          >
            Order Now
          </a>

          <button
            onClick={() => setOpen((o) => !o)}
            className="md:hidden text-foreground p-2 -mr-2 rounded-lg active:bg-muted/40 transition-colors"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu — CSS-only animation (no framer overhead) */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-out",
            open ? "max-h-[80vh] opacity-100 mt-2" : "max-h-0 opacity-0"
          )}
        >
          <div className="glass rounded-2xl p-4 flex flex-col gap-1 font-condensed text-lg">
            {links.map((l) => {
              const id = l.href.slice(1);
              const isActive = active === id;
              return (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={(e) => handleNav(e, l.href)}
                  className={cn(
                    "px-4 py-3 rounded-xl transition-colors",
                    isActive ? "bg-flame/15 text-flame" : "hover:bg-muted/40"
                  )}
                >
                  {l.label}
                </a>
              );
            })}
            <a
              href="https://wa.me/918359055505"
              target="_blank"
              rel="noreferrer"
              className="mt-2 bg-neon text-accent-foreground px-5 py-3 rounded-xl text-center"
            >
              Order on WhatsApp
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};
