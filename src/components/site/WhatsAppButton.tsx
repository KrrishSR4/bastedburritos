import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export const WhatsAppButton = () => (
  <motion.a
    href="https://wa.me/918359055505?text=Hi!%20I%27d%20like%20to%20order%20from%20Basted%20Burritos"
    target="_blank" rel="noreferrer"
    initial={{ scale: 0, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ delay: 1.5, type: "spring", stiffness: 200 }}
    className="fixed bottom-6 right-6 z-50 group"
    aria-label="Order on WhatsApp"
  >
    <div className="relative animate-pulse-glow rounded-full">
      <div className="absolute inset-0 rounded-full bg-neon/40 animate-ping" />
      <div className="relative bg-neon text-accent-foreground rounded-full p-4 flex items-center gap-2 hover:pr-6 transition-all">
        <MessageCircle className="w-7 h-7" />
        <span className="font-condensed tracking-wider text-base whitespace-nowrap max-w-0 group-hover:max-w-xs overflow-hidden transition-all">
          Order on WhatsApp
        </span>
      </div>
    </div>
  </motion.a>
);
