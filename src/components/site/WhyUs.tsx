import { Leaf, Timer, Award, Heart } from "lucide-react";

const points = [
  { icon: Leaf, title: "Fresh Ingredients", desc: "Sourced daily from local farms — never frozen." },
  { icon: Timer, title: "Lightning Fast", desc: "Avg. 25-min delivery, hot & sealed." },
  { icon: Award, title: "Authentic Recipes", desc: "Traditional flavors. Modern technique." },
  { icon: Heart, title: "Made with Love", desc: "Hand-rolled, basted, and packed by humans who care." },
];

export const WhyUs = () => {
  return (
    <section className="py-24 sm:py-32 relative bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-14">
          <div className="font-condensed text-flame tracking-widest mb-3">— WHY US</div>
          <h2 className="font-display text-4xl sm:text-6xl text-foreground">Reasons to <span className="text-gradient-fire">love us.</span></h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {points.map((p, i) => (
            <div
              key={p.title}
              className="bg-card rounded-2xl p-7 text-center border border-border"
            >
              <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-sun to-flame flex items-center justify-center mb-5">
                <p.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl mb-2 text-foreground">{p.title}</h3>
              <p className="text-muted-foreground text-sm">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
