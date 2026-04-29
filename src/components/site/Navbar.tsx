import { motion } from "framer-motion";
import { Flame, Menu, X } from "lucide-react";
import { useState } from "react";

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
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <nav className="mx-auto max-w-7xl px-6 py-4">
        <div className="glass rounded-2xl px-5 py-3 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-flame to-chili flex items-center justify-center glow-primary">
              <Flame className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-display text-lg tracking-tight">
              Basted<span className="text-flame">.</span>
            </span>
          </a>
          <ul className="hidden md:flex items-center gap-7 font-condensed text-base">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-foreground/80 hover:text-flame transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="https://wa.me/918359055505"
            target="_blank" rel="noreferrer"
            className="hidden md:inline-flex items-center gap-2 bg-neon text-accent-foreground font-condensed text-base px-5 py-2 rounded-xl hover:scale-105 transition-transform"
          >
            Order Now
          </a>
          <button onClick={() => setOpen(!open)} className="md:hidden text-foreground" aria-label="Menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
        {open && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
            className="md:hidden glass rounded-2xl mt-2 p-5 flex flex-col gap-4 font-condensed text-lg">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="hover:text-flame">{l.label}</a>
            ))}
            <a href="https://wa.me/918359055505" className="bg-neon text-accent-foreground px-5 py-2 rounded-xl text-center">Order on WhatsApp</a>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
};
