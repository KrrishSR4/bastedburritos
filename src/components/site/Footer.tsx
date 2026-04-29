import { Flame, Instagram, Facebook, Twitter, Youtube } from "lucide-react";

export const Footer = () => (
  <footer className="border-t border-border py-12 mt-16">
    <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-3 gap-10 items-start">
      <div>
        <div className="flex items-center gap-2 mb-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-flame to-chili flex items-center justify-center">
            <Flame className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="font-display text-lg">Basted<span className="text-flame">.</span></span>
        </div>
        <p className="text-muted-foreground text-sm max-w-xs">
          Real Mexican street food. Hand-rolled, fire-basted, served with soul — straight from our kitchen in Raipur.
        </p>
      </div>
      <div>
        <h4 className="font-condensed tracking-widest text-flame mb-3">EXPLORE</h4>
        <ul className="space-y-2 text-sm text-muted-foreground">
          {["Menu", "Gallery", "Reviews", "Contact"].map((l) => (
            <li key={l}><a href={`#${l.toLowerCase()}`} className="hover:text-foreground">{l}</a></li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="font-condensed tracking-widest text-flame mb-3">FOLLOW THE FLAVOR</h4>
        <div className="flex gap-3">
          {[Instagram, Facebook, Twitter, Youtube].map((Icon, i) => (
            <a key={i} href="#" className="glass w-10 h-10 rounded-xl flex items-center justify-center hover:bg-flame hover:text-primary-foreground transition-colors">
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>
    </div>
    <div className="mx-auto max-w-7xl px-6 mt-10 pt-6 border-t border-border flex flex-col sm:flex-row justify-between gap-3 text-sm text-muted-foreground">
      <p>© {new Date().getFullYear()} Basted Burritos. All rights reserved.</p>
      <p>Made with 🌶️ in Raipur</p>
    </div>
  </footer>
);
