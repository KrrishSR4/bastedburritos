import { ArrowRight, MessageCircle } from "lucide-react";

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24" style={{ backgroundColor: '#0f0a08' }}>
      <div className="mx-auto max-w-7xl px-6 w-full">
        <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6" style={{ background: 'linear-gradient(to right, #ff6b35, #dc2626)' }}>
          <span className="w-2 h-2 rounded-full" style={{ backgroundColor: '#84cc16' }} />
          <span className="font-condensed text-sm tracking-widest text-white">⭐ 5.0 RATED · RAIPUR</span>
        </div>

        <h1 className="font-display text-[2.75rem] sm:text-6xl lg:text-8xl leading-[0.95] tracking-tight" style={{ color: '#f5f5f4' }}>
          Best Burritos in <br />
          <span className="text-gradient-fire">Raipur</span>
          <span className="inline-block ml-2">🌯</span>
          <span className="inline-block ml-1">🔥</span>
        </h1>

        <p className="mt-6 text-lg sm:text-xl max-w-xl" style={{ color: '#a8a29e' }}>
          Fresh • Fast • Authentic Mexican Taste — hand-rolled, fire-basted, and served with soul at <span className="font-semibold" style={{ color: '#f5f5f4' }}>Basted Burritos</span>.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a href="#menu" className="inline-flex items-center gap-2 font-condensed text-lg tracking-wide px-7 py-4 rounded-2xl text-white" style={{ background: 'linear-gradient(to right, #ff6b35, #dc2626)' }}>
            View Menu <ArrowRight className="w-5 h-5" />
          </a>
          <a href="https://wa.me/918359055505?text=Hi!%20I%27d%20like%20to%20order%20from%20Basted%20Burritos" target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-2 font-condensed text-lg tracking-wide px-7 py-4 rounded-2xl border" style={{ backgroundColor: '#1c1917', color: '#f5f5f4', borderColor: '#44403c' }}>
            <MessageCircle className="w-5 h-5" /> Order on WhatsApp
          </a>
        </div>

        <div className="mt-12 flex items-center gap-8 text-sm" style={{ color: '#a8a29e' }}>
          <div><div className="font-display text-3xl" style={{ color: '#f5f5f4' }}>10K+</div>Happy Foodies</div>
          <div className="w-px h-10" style={{ backgroundColor: '#44403c' }} />
          <div><div className="font-display text-3xl" style={{ color: '#f5f5f4' }}>5.0★</div>Google Rating</div>
          <div className="w-px h-10" style={{ backgroundColor: '#44403c' }} />
          <div><div className="font-display text-3xl" style={{ color: '#f5f5f4' }}>25min</div>Avg. Delivery</div>
        </div>
      </div>
    </section>
  );
};
