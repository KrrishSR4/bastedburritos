import { useState } from "react";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/menu-tacos.jpg";
import g6 from "@/assets/menu-burrito.jpg";

const images = [g1, g2, g3, g4, g5, g6];

export const Gallery = () => {
  return (
    <section id="gallery" className="py-24 sm:py-32 relative bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-14">
          <div className="font-condensed text-flame tracking-widest mb-3">— THE GALLERY</div>
          <h2 className="font-display text-4xl sm:text-6xl text-foreground">Feast your <span className="text-gradient-fire">eyes.</span></h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
          {images.map((src, i) => (
            <div
              key={i}
              className={`relative overflow-hidden rounded-2xl bg-card border border-border ${i === 0 ? "row-span-2 col-span-2 md:col-span-1 md:row-span-2" : ""}`}
            >
              <img src={src} alt={`Gallery ${i + 1}`} loading="lazy" width={800} height={800}
                className="w-full h-full object-cover aspect-square" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
