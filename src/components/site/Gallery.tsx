import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/menu-tacos.jpg";
import g6 from "@/assets/menu-burrito.jpg";

const images = [g1, g2, g3, g4, g5, g6];

export const Gallery = () => {
  const [open, setOpen] = useState<string | null>(null);
  return (
    <section id="gallery" className="py-24 sm:py-32 relative">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-14">
          <div className="font-condensed text-flame tracking-widest mb-3">— THE GALLERY</div>
          <h2 className="font-display text-4xl sm:text-6xl">Feast your <span className="text-gradient-fire">eyes.</span></h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
          {images.map((src, i) => (
            <motion.button
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.5 }}
              onClick={() => setOpen(src)}
              className={`relative overflow-hidden rounded-2xl group ${i === 0 ? "row-span-2 col-span-2 md:col-span-1 md:row-span-2" : ""}`}
            >
              <img src={src} alt={`Gallery ${i+1}`} loading="lazy" width={800} height={800}
                className="w-full h-full object-cover aspect-square group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <span className="font-condensed text-flame text-lg">View →</span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}
            className="fixed inset-0 z-[100] bg-background/90 backdrop-blur-md flex items-center justify-center p-6"
          >
            <button className="absolute top-6 right-6 glass rounded-full p-3" aria-label="Close">
              <X />
            </button>
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              src={open} alt="Preview"
              className="max-w-full max-h-[85vh] rounded-2xl glow-primary"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
