import { MapPin, Phone, Clock } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-24 sm:py-32 relative bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-14">
          <div className="font-condensed text-flame tracking-widest mb-3">— FIND US</div>
          <h2 className="font-display text-4xl sm:text-6xl text-foreground">Come say <span className="text-gradient-fire">hola.</span></h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-6">
          <div className="lg:col-span-2 bg-card rounded-3xl p-8 flex flex-col gap-6 border border-border">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-flame/20 flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-flame" />
              </div>
              <div>
                <h3 className="font-display text-xl mb-1 text-foreground">Address</h3>
                <p className="text-muted-foreground">Kamal Vihar Rd, Civil Lines,<br />Raipur, Chhattisgarh</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-neon/20 flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6 text-neon" />
              </div>
              <div>
                <h3 className="font-display text-xl mb-1 text-foreground">Call Us</h3>
                <a href="tel:08359055505" className="text-muted-foreground hover:text-foreground">083590 55505</a>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-sun/20 flex items-center justify-center shrink-0">
                <Clock className="w-6 h-6 text-sun" />
              </div>
              <div>
                <h3 className="font-display text-xl mb-1 text-foreground">Hours</h3>
                <p className="text-muted-foreground">Mon – Sun · 11:00 AM – 11:00 PM</p>
              </div>
            </div>
            <a href="https://wa.me/918359055505" target="_blank" rel="noreferrer"
              className="mt-2 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-flame to-chili text-primary-foreground font-condensed text-lg px-6 py-4 rounded-2xl">
              Order on WhatsApp
            </a>
          </div>

          <div className="lg:col-span-3 rounded-3xl overflow-hidden bg-card border border-border min-h-[400px]">
            <iframe
              title="Basted Burritos location"
              src="https://www.google.com/maps?q=Kamal+Vihar+Rd,+Civil+Lines,+Raipur&output=embed"
              className="w-full h-full min-h-[400px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
