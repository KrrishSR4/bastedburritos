import { motion } from "framer-motion";
import { MapPin, Phone, Clock } from "lucide-react";

export const Contact = () => (
  <section id="contact" className="py-24 sm:py-32 relative">
    <div className="mx-auto max-w-7xl px-6">
      <div className="text-center mb-14">
        <div className="font-condensed text-flame tracking-widest mb-3">— FIND US</div>
        <h2 className="font-display text-4xl sm:text-6xl">Come say <span className="text-gradient-fire">hola.</span></h2>
      </div>

      <div className="grid lg:grid-cols-5 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-2 glass rounded-3xl p-8 flex flex-col gap-6"
        >
          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-xl bg-flame/20 flex items-center justify-center shrink-0">
              <MapPin className="w-6 h-6 text-flame" />
            </div>
            <div>
              <h3 className="font-display text-xl mb-1">Address</h3>
              <p className="text-muted-foreground">Kamal Vihar Rd, Civil Lines,<br />Raipur, Chhattisgarh</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-xl bg-neon/20 flex items-center justify-center shrink-0">
              <Phone className="w-6 h-6 text-neon" />
            </div>
            <div>
              <h3 className="font-display text-xl mb-1">Call Us</h3>
              <a href="tel:08359055505" className="text-muted-foreground hover:text-foreground">083590 55505</a>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-xl bg-sun/20 flex items-center justify-center shrink-0">
              <Clock className="w-6 h-6 text-sun" />
            </div>
            <div>
              <h3 className="font-display text-xl mb-1">Hours</h3>
              <p className="text-muted-foreground">Mon – Sun · 11:00 AM – 11:00 PM</p>
            </div>
          </div>
          <a href="https://wa.me/918359055505" target="_blank" rel="noreferrer"
            className="mt-2 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-flame to-chili text-primary-foreground font-condensed text-lg px-6 py-4 rounded-2xl glow-primary hover:scale-[1.02] transition-transform">
            Order on WhatsApp
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-3 rounded-3xl overflow-hidden glass min-h-[400px]"
        >
          <iframe
            title="Basted Burritos location"
            src="https://www.google.com/maps?q=Kamal+Vihar+Rd,+Civil+Lines,+Raipur&output=embed"
            className="w-full h-full min-h-[400px] grayscale-[20%] contrast-110"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </div>
    </div>
  </section>
);
