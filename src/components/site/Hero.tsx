import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import heroImg from "@/assets/hero-burrito.jpg";
import { useLiteMotion } from "@/hooks/use-lite-motion";

export const Hero = () => {
  const lite = useLiteMotion();
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden noise pt-24">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <img src={heroImg} alt="Sizzling burrito" width={1920} height={1080}
          fetchPriority="high" decoding="async"
          className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background/60" />
      </div>

      {/* Animated blobs (desktop only) */}
      {!lite && (
        <>
          <div className="hidden md:block absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-flame/30 blur-3xl -z-10 animate-float-slow" />
          <div className="hidden md:block absolute bottom-1/4 -right-32 w-[500px] h-[500px] rounded-full bg-chili/30 blur-3xl -z-10 animate-float-slow" style={{ animationDelay: "2s" }} />
        </>
      )}

      <div className="mx-auto max-w-7xl px-6 w-full grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7 z-10">
          <motion.div
            initial={lite ? false : { opacity: 0, y: 20 }}
            animate={lite ? undefined : { opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-neon animate-pulse" />
            <span className="font-condensed text-sm tracking-widest">⭐ 5.0 RATED · RAIPUR</span>
          </motion.div>

          <motion.h1
            initial={lite ? false : { opacity: 0, y: 30 }}
            animate={lite ? undefined : { opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="font-display text-[2.75rem] sm:text-6xl lg:text-8xl leading-[0.95] tracking-tight"
          >
            Best Burritos in <br />
            <span className="text-gradient-fire">Raipur</span>
            <span className={`inline-block ml-2 ${lite ? "" : "animate-float-slow"}`}>🌯</span>
            <span className={`inline-block ml-1 ${lite ? "" : "animate-float-slow"}`} style={{ animationDelay: "1s" }}>🔥</span>
          </motion.h1>

          <motion.p
            initial={lite ? false : { opacity: 0, y: 20 }}
            animate={lite ? undefined : { opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-xl"
          >
            Fresh • Fast • Authentic Mexican Taste — hand-rolled, fire-basted, and served with soul at <span className="text-foreground font-semibold">Basted Burritos</span>.
          </motion.p>

          <motion.div
            initial={lite ? false : { opacity: 0, y: 20 }}
            animate={lite ? undefined : { opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a href="#menu" className="group inline-flex items-center gap-2 bg-gradient-to-r from-flame to-chili text-primary-foreground font-condensed text-lg tracking-wide px-7 py-4 rounded-2xl glow-primary hover:scale-105 transition-transform">
              View Menu <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="https://wa.me/918359055505?text=Hi!%20I%27d%20like%20to%20order%20from%20Basted%20Burritos" target="_blank" rel="noreferrer"
              className="group inline-flex items-center gap-2 glass text-foreground font-condensed text-lg tracking-wide px-7 py-4 rounded-2xl hover:bg-neon hover:text-accent-foreground transition-all">
              <MessageCircle className="w-5 h-5" /> Order on WhatsApp
            </a>
          </motion.div>

          <div className="mt-12 flex items-center gap-8 text-sm text-muted-foreground animate-fade-in">
            <div><div className="font-display text-3xl text-foreground">10K+</div>Happy Foodies</div>
            <div className="w-px h-10 bg-border" />
            <div><div className="font-display text-3xl text-foreground">5.0★</div>Google Rating</div>
            <div className="w-px h-10 bg-border" />
            <div><div className="font-display text-3xl text-foreground">25min</div>Avg. Delivery</div>
          </div>
        </div>

        <motion.div
          initial={lite ? false : { opacity: 0, scale: 0.9, rotate: -6 }}
          animate={lite ? undefined : { opacity: 1, scale: 1, rotate: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="hidden lg:block lg:col-span-5 relative"
        >
          <div className={`relative ${lite ? "" : "animate-float-slow"}`}>
            <div className="absolute inset-0 bg-gradient-to-br from-flame/40 to-chili/40 blur-3xl" />
            <img src={heroImg} alt="Burrito" width={600} height={600} decoding="async"
              className="relative rounded-[2rem] object-cover aspect-square glow-primary" />
            <div className="absolute -bottom-4 -left-4 glass rounded-2xl px-4 py-3 font-condensed">
              <div className="text-2xl text-flame">🌶️ 100% Fresh</div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Marquee */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden border-y border-border bg-card/40 backdrop-blur-sm py-3">
        <div className="flex animate-marquee whitespace-nowrap font-condensed text-2xl text-flame">
          {Array.from({ length: 2 }).map((_, j) => (
            <div key={j} className="flex items-center gap-8 px-8">
              {["FRESH DAILY", "🌯", "HAND-ROLLED", "🔥", "AUTHENTIC RECIPES", "🌮", "FAST DELIVERY", "🌶️", "DINE IN · TAKEAWAY", "🥑"].map((t, i) => (
                <span key={i} className="px-4">{t}</span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
