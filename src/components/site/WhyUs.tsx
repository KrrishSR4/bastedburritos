import { motion } from "framer-motion";
import { Leaf, Timer, Award, Heart } from "lucide-react";
import { useLiteMotion } from "@/hooks/use-lite-motion";

const points = [
  { icon: Leaf, title: "Fresh Ingredients", desc: "Sourced daily from local farms — never frozen." },
  { icon: Timer, title: "Lightning Fast", desc: "Avg. 25-min delivery, hot & sealed." },
  { icon: Award, title: "Authentic Recipes", desc: "Traditional flavors. Modern technique." },
  { icon: Heart, title: "Made with Love", desc: "Hand-rolled, basted, and packed by humans who care." },
];

export const WhyUs = () => {
  const lite = useLiteMotion();
  return (
  <section className="py-24 sm:py-32 relative">
    <div className="mx-auto max-w-7xl px-6">
      <div className="text-center mb-14">
        <div className="font-condensed text-flame tracking-widest mb-3">— WHY US</div>
        <h2 className="font-display text-4xl sm:text-6xl">Reasons to <span className="text-gradient-fire">love us.</span></h2>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {points.map((p, i) => (
          <motion.div
            key={p.title}
            initial={lite ? false : { opacity: 0, y: 30 }}
            whileInView={lite ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: lite ? 0 : i * 0.08, duration: 0.45 }}
            className="glass rounded-2xl p-7 text-center group hover:-translate-y-1.5 transition-transform"
          >
            <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-sun to-flame flex items-center justify-center mb-5 group-hover:rotate-12 group-hover:scale-110 transition-all">
              <p.icon className="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 className="font-display text-xl mb-2">{p.title}</h3>
            <p className="text-muted-foreground text-sm">{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
  );
};
