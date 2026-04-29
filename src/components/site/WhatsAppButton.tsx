import { MessageCircle } from "lucide-react";
import { useLiteMotion } from "@/hooks/use-lite-motion";

export const WhatsAppButton = () => {
  const lite = useLiteMotion();
  return (
    <a
      href="https://wa.me/918359055505?text=Hi!%20I%27d%20like%20to%20order%20from%20Basted%20Burritos"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 group animate-fade-in"
      aria-label="Order on WhatsApp"
    >
      <div className={`relative rounded-full ${lite ? "" : "animate-pulse-glow"}`}>
        {!lite && <div className="absolute inset-0 rounded-full bg-neon/40 animate-ping" />}
        <div className="relative bg-neon text-accent-foreground rounded-full p-4 flex items-center gap-2 hover:pr-6 transition-all">
          <MessageCircle className="w-7 h-7" />
          <span className="font-condensed tracking-wider text-base whitespace-nowrap max-w-0 group-hover:max-w-xs overflow-hidden transition-all">
            Order on WhatsApp
          </span>
        </div>
      </div>
    </a>
  );
};
