import { ArrowRight, MessageCircle } from "lucide-react";

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 w-full">
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-flame to-chili rounded-full px-4 py-1.5 mb-6">
          <span className="w-2 h-2 rounded-full bg-neon" />
          <span className="font-condensed text-sm tracking-widest text-primary-foreground">⭐ 5.0 RATED · RAIPUR</span>
        </div>

        <h1 className="font-display text-[2.75rem] sm:text-6xl lg:text-8xl leading-[0.95] tracking-tight text-foreground">
          Best Burritos in <br />
          <span className="text-gradient-fire">Raipur</span>
          <span className="inline-block ml-2">🌯</span>
          <span className="inline-block ml-1">🔥</span>
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-xl">
          Fresh • Fast • Authentic Mexican Taste — hand-rolled, fire-basted, and served with soul at <span className="text-foreground font-semibold">Basted Burritos</span>.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a href="#menu" className="inline-flex items-center gap-2 bg-gradient-to-r from-flame to-chili text-primary-foreground font-condensed text-lg tracking-wide px-7 py-4 rounded-2xl">
            View Menu <ArrowRight className="w-5 h-5" />
          </a>
          <a href="https://wa.me/918359055505?text=Hi!%20I%27d%20like%20to%20order%20from%20Basted%20Burritos" target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-2 bg-card text-foreground font-condensed text-lg tracking-wide px-7 py-4 rounded-2xl border border-border">
            <MessageCircle className="w-5 h-5" /> Order on WhatsApp
          </a>
        </div>

        <div className="mt-12 flex items-center gap-8 text-sm text-muted-foreground">
          <div><div className="font-display text-3xl text-foreground">10K+</div>Happy Foodies</div>
          <div className="w-px h-10 bg-border" />
          <div><div className="font-display text-3xl text-foreground">5.0★</div>Google Rating</div>
          <div className="w-px h-10 bg-border" />
          <div><div className="font-display text-3xl text-foreground">25min</div>Avg. Delivery</div>
        </div>
      </div>
    </section>
  );
};
