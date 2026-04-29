import { useState } from "react";
import burritoImg from "@/assets/menu-burrito.jpg";
import tacosImg from "@/assets/menu-tacos.jpg";
import comboImg from "@/assets/menu-combo.jpg";
import drinksImg from "@/assets/menu-drinks.jpg";

type Item = { name: string; desc: string; price: string; img: string; tag?: string };
const data: Record<string, Item[]> = {
  Burritos: [
    { name: "El Jefe Burrito", desc: "Slow-cooked beef, jalapeños, queso, smoky chipotle.", price: "₹249", img: burritoImg, tag: "🔥 Bestseller" },
    { name: "Pollo Verde", desc: "Charred chicken, salsa verde, beans, sour cream.", price: "₹229", img: burritoImg },
    { name: "Veggie Fiesta", desc: "Grilled peppers, corn, beans, guac, rice.", price: "₹199", img: burritoImg, tag: "🥑 Veg" },
  ],
  Tacos: [
    { name: "Tacos Al Pastor", desc: "Pineapple-marinated pork, cilantro, onion.", price: "₹179", img: tacosImg },
    { name: "Baja Fish Tacos", desc: "Crispy fish, slaw, chipotle aioli, lime.", price: "₹209", img: tacosImg, tag: "🌊 New" },
    { name: "Carne Asada", desc: "Grilled steak, pico de gallo, queso fresco.", price: "₹229", img: tacosImg },
  ],
  Combos: [
    { name: "Loaded Nacho Plate", desc: "Nachos, queso, beans, jalapeños, sour cream.", price: "₹279", img: comboImg, tag: "🔥 Sharer" },
    { name: "Quesadilla Combo", desc: "Cheese quesadilla + chips + drink.", price: "₹259", img: comboImg },
    { name: "Family Fiesta Box", desc: "4 tacos + 2 burritos + nachos + 2 drinks.", price: "₹899", img: comboImg, tag: "👨‍👩‍👧 4 ppl" },
  ],
  Beverages: [
    { name: "Horchata", desc: "Sweet rice & cinnamon, ice-cold.", price: "₹99", img: drinksImg },
    { name: "Agua Fresca", desc: "Hibiscus & lime refresher.", price: "₹109", img: drinksImg },
    { name: "Mexican Cola", desc: "Cane-sugar classic in a glass bottle.", price: "₹89", img: drinksImg },
  ],
};

const categories = Object.keys(data);

export const Menu = () => {
  const [active, setActive] = useState(categories[0]);
  return (
    <section id="menu" className="py-24 sm:py-32 relative bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-14">
          <div className="font-condensed text-flame tracking-widest mb-3">— THE MENU</div>
          <h2 className="font-display text-4xl sm:text-6xl text-foreground">Pick your <span className="text-gradient-fire">poison.</span></h2>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`font-condensed tracking-wider text-lg px-6 py-2.5 rounded-full transition-all ${active === c ? "text-primary-foreground bg-gradient-to-r from-flame to-chili" : "text-foreground/70 hover:text-foreground bg-card border border-border"
                }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data[active].map((item) => (
            <div
              key={item.name}
              className="bg-card rounded-3xl overflow-hidden border border-border"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={item.img} alt={item.name} loading="lazy" width={800} height={600}
                  className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                {item.tag && (
                  <div className="absolute top-3 left-3 bg-card rounded-full px-3 py-1 text-xs font-condensed tracking-wider border border-border">
                    {item.tag}
                  </div>
                )}
                <div className="absolute top-3 right-3 bg-neon text-accent-foreground font-display text-lg px-3 py-1 rounded-full">
                  {item.price}
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-display text-xl mb-1 text-foreground">{item.name}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
                <a href="https://wa.me/918359055505" target="_blank" rel="noreferrer"
                  className="mt-4 inline-flex items-center gap-1 font-condensed text-flame">
                  Order Now →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
