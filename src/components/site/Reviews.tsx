import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { useLiteMotion } from "@/hooks/use-lite-motion";

const reviews = [
  { name: "Aarav Sharma", text: "Best burritos in Raipur, hands down. The El Jefe is life-changing!", role: "Foodie" },
  { name: "Priya Verma", text: "Authentic flavors, fast delivery, friendly staff. We order weekly now.", role: "Regular" },
  { name: "Rohan Mehta", text: "The salsa verde is unreal. Feels like a trip to Mexico City.", role: "Travel blogger" },
  { name: "Sneha Kapoor", text: "Family Fiesta Box was a hit at our gathering. Worth every rupee.", role: "Mom of 2" },
  { name: "Vikram Iyer", text: "Crispy, fresh, hot — exactly what street food should taste like.", role: "Chef" },
];

export const Reviews = () => {
  const [i, setI] = useState(0);
  const lite = useLiteMotion();
  const next = () => setI((p) => (p + 1) % reviews.length);
  const prev = () => setI((p) => (p - 1 + reviews.length) % reviews.length);

  return (
    <section id="reviews" className="py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-flame/5 via-transparent to-chili/10" />
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center mb-14">
          <div className="font-condensed text-flame tracking-widest mb-3">— REVIEWS</div>
          <h2 className="font-display text-4xl sm:text-6xl">Loved by <span className="text-gradient-fire">thousands.</span></h2>
          <div className="flex justify-center gap-1 mt-4">
            {[...Array(5)].map((_, k) => (
              <Star key={k} className="w-6 h-6 fill-sun text-sun" />
            ))}
            <span className="ml-2 font-display text-xl">5.0</span>
          </div>
        </div>

        <div className="relative">
          <motion.div
            key={i}
            initial={lite ? { opacity: 0 } : { opacity: 0, x: 30 }}
            animate={lite ? { opacity: 1 } : { opacity: 1, x: 0 }}
            transition={{ duration: lite ? 0.2 : 0.4 }}
            className="glass rounded-3xl p-8 sm:p-12 text-center"
          >
            <div className="flex justify-center gap-1 mb-5">
              {[...Array(5)].map((_, k) => <Star key={k} className="w-5 h-5 fill-sun text-sun" />)}
            </div>
            <p className="font-display text-2xl sm:text-3xl leading-snug mb-6">"{reviews[i].text}"</p>
            <div className="font-condensed text-flame text-lg tracking-wider">{reviews[i].name}</div>
            <div className="text-sm text-muted-foreground">{reviews[i].role}</div>
          </motion.div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button onClick={prev} className="glass rounded-full p-3 hover:bg-flame hover:text-primary-foreground transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {reviews.map((_, k) => (
                <button key={k} onClick={() => setI(k)}
                  className={`h-2 rounded-full transition-all ${k === i ? "w-8 bg-flame" : "w-2 bg-muted"}`} />
              ))}
            </div>
            <button onClick={next} className="glass rounded-full p-3 hover:bg-flame hover:text-primary-foreground transition-colors">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
