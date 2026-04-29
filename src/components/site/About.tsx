import { motion } from "framer-motion";
import { UtensilsCrossed, Car, Bike } from "lucide-react";

const features = [
  { icon: UtensilsCrossed, title: "Dine In", desc: "Cozy Mexican vibes, sizzling plates served fresh at your table." },
  { icon: Car, title: "Drive Through", desc: "Grab your favorites without ever leaving your car." },
  { icon: Bike, title: "No-Contact Delivery", desc: "Hot, sealed, and rushed straight from our kitchen to your door." },
];

export const About = () => {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <div className="font-condensed text-flame tracking-widest mb-3">— OUR STORY</div>
            <h2 className="font-display text-4xl sm:text-6xl leading-[1] mb-6">
              Mexico in <br /><span className="text-gradient-fire">every bite.</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Born from a love of Mexican street food, <span className="text-foreground font-semibold">Basted Burritos</span> brings the bold, smoky, soul-warming flavors of Oaxaca and Mexico City right to the heart of Raipur.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Every tortilla is hand-pressed. Every salsa, slow-simmered. Every burrito, basted to golden perfection. No shortcuts. Just real food, real fast.
            </p>
          </motion.div>

          <div className="grid gap-5">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                whileHover={{ x: 8 }}
                className="glass rounded-2xl p-6 flex gap-5 items-start group cursor-default"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-flame to-chili flex items-center justify-center shrink-0 group-hover:rotate-6 transition-transform">
                  <f.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-display text-2xl mb-1">{f.title}</h3>
                  <p className="text-muted-foreground">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
