import { motion } from "framer-motion";
import { ScrollReveal } from "./ui/ScrollReveal";

const storyImages = [
  "WhatsApp Image 2026-04-22 at 1.52.03 AM.jpeg",
  "WhatsApp Image 2026-04-22 at 1.52.04 AM.jpeg",
  "WhatsApp Image 2026-04-22 at 1.52.05 AM.jpeg",
  "WhatsApp Image 2026-04-22 at 1.52.06 AM (1).jpeg",
  "WhatsApp Image 2026-04-22 at 1.52.06 AM.jpeg",
  "WhatsApp Image 2026-04-22 at 1.52.09 AM (1).jpeg",
  "WhatsApp Image 2026-04-22 at 1.52.09 AM (2).jpeg",
  "WhatsApp Image 2026-04-22 at 1.52.09 AM (3).jpeg",
  "WhatsApp Image 2026-04-22 at 1.52.09 AM.jpeg",
  "WhatsApp Image 2026-04-22 at 1.52.10 AM (1).jpeg",
  "WhatsApp Image 2026-04-22 at 1.52.10 AM (2).jpeg",
  "WhatsApp Image 2026-04-22 at 1.52.10 AM (3).jpeg",
  "WhatsApp Image 2026-04-22 at 1.52.10 AM.jpeg",
  "WhatsApp Image 2026-04-22 at 1.52.11 AM (1).jpeg",
  "WhatsApp Image 2026-04-22 at 1.52.11 AM (2).jpeg",
  "WhatsApp Image 2026-04-22 at 1.52.11 AM (3).jpeg",
  "WhatsApp Image 2026-04-22 at 1.52.11 AM.jpeg",
  "WhatsApp Image 2026-04-22 at 1.52.12 AM (1).jpeg",
  "WhatsApp Image 2026-04-22 at 1.52.12 AM (2).jpeg",
  "WhatsApp Image 2026-04-22 at 1.52.12 AM.jpeg",
  "WhatsApp Image 2026-04-22 at 1.52.13 AM (1).jpeg",
  "WhatsApp Image 2026-04-22 at 1.52.13 AM (2).jpeg",
  "WhatsApp Image 2026-04-22 at 1.52.13 AM (3).jpeg",
  "WhatsApp Image 2026-04-22 at 1.52.13 AM.jpeg",
  "WhatsApp Image 2026-04-22 at 1.52.14 AM (1).jpeg",
  "WhatsApp Image 2026-04-22 at 1.52.14 AM (2).jpeg",
  "WhatsApp Image 2026-04-22 at 1.52.14 AM (3).jpeg",
  "WhatsApp Image 2026-04-22 at 1.52.14 AM.jpeg",
  "WhatsApp Image 2026-04-22 at 1.52.15 AM (1).jpeg",
  "WhatsApp Image 2026-04-22 at 1.52.15 AM (2).jpeg",
  "WhatsApp Image 2026-04-22 at 1.52.15 AM (3).jpeg",
  "WhatsApp Image 2026-04-22 at 1.52.15 AM.jpeg",
  "WhatsApp Image 2026-04-22 at 1.52.16 AM (1).jpeg",
  "WhatsApp Image 2026-04-22 at 1.52.16 AM (2).jpeg",
  "WhatsApp Image 2026-04-22 at 1.52.16 AM.jpeg",
  "WhatsApp Image 2026-04-22 at 1.52.17 AM (1).jpeg",
  "WhatsApp Image 2026-04-22 at 1.52.17 AM (2).jpeg",
  "WhatsApp Image 2026-04-22 at 1.52.17 AM (3).jpeg",
  "WhatsApp Image 2026-04-22 at 1.52.17 AM.jpeg",
  "WhatsApp Image 2026-04-22 at 1.52.18 AM (1).jpeg",
  "WhatsApp Image 2026-04-22 at 1.52.18 AM (2).jpeg",
  "WhatsApp Image 2026-04-22 at 1.52.18 AM.jpeg",
  "WhatsApp Image 2026-04-22 at 1.52.19 AM (1).jpeg",
  "WhatsApp Image 2026-04-22 at 1.52.19 AM (2).jpeg",
  "WhatsApp Image 2026-04-22 at 1.52.19 AM.jpeg",
  "WhatsApp Image 2026-04-22 at 1.52.20 AM (1).jpeg",
  "WhatsApp Image 2026-04-22 at 1.52.20 AM (2).jpeg",
  "WhatsApp Image 2026-04-22 at 1.52.20 AM.jpeg",
];

const StoryMarquee = () => {
  // Split images into 3 rows
  const row1 = storyImages.slice(0, 16);
  const row2 = storyImages.slice(16, 32);
  const row3 = storyImages.slice(32, 48);

  const MarqueeRow = ({ images, reverse = false, speed = "60s" }: { images: string[], reverse?: boolean, speed?: string }) => (
    <div className="flex overflow-hidden select-none gap-6 py-3">
      <div 
        className={`flex min-w-full shrink-0 gap-6 ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}
        style={{ animationDuration: speed }}
      >
        {images.map((img, i) => (
          <div 
            key={i} 
            className="w-64 h-80 flex-shrink-0 rounded-2xl overflow-hidden shadow-lg border border-white/10 group relative"
          >
            <img 
              src={`/img/stories/${img}`} 
              alt="Travel Story" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
          </div>
        ))}
        {/* Duplicate for seamless loop */}
        {images.map((img, i) => (
          <div 
            key={`dup-${i}`} 
            className="w-64 h-80 flex-shrink-0 rounded-2xl overflow-hidden shadow-lg border border-white/10 group relative"
          >
            <img 
              src={`/img/stories/${img}`} 
              alt="Travel Story" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="relative py-12 bg-white overflow-hidden">
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />
      
      <div className="pause-marquee space-y-4">
        <MarqueeRow images={row1} speed="80s" />
        <MarqueeRow images={row2} reverse speed="70s" />
        <MarqueeRow images={row3} speed="90s" />
      </div>
    </div>
  );
};

export default StoryMarquee;
