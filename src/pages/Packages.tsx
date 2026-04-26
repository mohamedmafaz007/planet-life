import { useState, useEffect, useRef, useCallback } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  MapPin,
  Clock,
  ChevronLeft,
  ChevronRight,
  Search,
  ArrowRight,
} from "lucide-react";
import malaysiaImg from "@/assets/malaysia_main_new.jpg";
import thailandImg from "@/assets/thailand_new.jpg";
import baliImg from "@/assets/bali_main_new.jpg";
import vietnamImg from "@/assets/vietnam_new.jpg";
import dubaiImg from "@/assets/dubai_new.jpg";
import singaporeImg from "@/assets/singapore_main_new.jpg";
import meghalayaImg from "@/assets/meghalaya_new.jpg";
import maldivesImg from "@/assets/maldives_main_new.jpg";
import srilankaImg from "@/assets/srilanka_main.jpg";
import mal_adv_1 from "@/assets/mal_adv_1.jpg";
import mal_adv_2 from "@/assets/mal_adv_2.jpg";
import mal_adv_3 from "@/assets/mal_adv_3.jpg";
import mal_adv_4 from "@/assets/mal_adv_4.jpg";
import mal_adv_5 from "@/assets/mal_adv_5.jpg";
import thailand_adv_1 from "@/assets/thailand_adv_1.jpg";
import thailand_adv_2 from "@/assets/thailand_adv_2.jpg";
import thailand_adv_3 from "@/assets/thailand_adv_3.jpg";
import thailand_adv_4 from "@/assets/thailand_adv_4.jpg";
import thailand_adv_5 from "@/assets/thailand_adv_5.jpg";
import bali_adv_1 from "@/assets/bali_adv_1.jpg";
import bali_adv_2 from "@/assets/bali_adv_2.jpg";
import bali_adv_3 from "@/assets/bali_adv_3.jpg";
import bali_adv_4 from "@/assets/bali_adv_4.jpg";
import dubai_adv_1 from "@/assets/dubai_adv_1.jpg";
import dubai_adv_2 from "@/assets/dubai_adv_2.jpg";
import dubai_adv_3 from "@/assets/dubai_adv_3.jpg";
import dubai_adv_4 from "@/assets/dubai_adv_4.jpg";
import dubai_adv_5 from "@/assets/dubai_adv_5.jpg";
import mald_adv_1 from "@/assets/mald_adv_1.jpg";
import mald_adv_2 from "@/assets/mald_adv_2.jpg";
import mald_adv_3 from "@/assets/mald_adv_3.jpg";
import mald_adv_4 from "@/assets/mald_adv_4.jpg";
import sing_adv_1 from "@/assets/sing_adv_1.jpg";
import sing_adv_2 from "@/assets/sing_adv_2.jpg";
import sing_adv_3 from "@/assets/sing_adv_3.jpg";
import sing_adv_4 from "@/assets/sing_adv_4.jpg";
import sing_adv_5 from "@/assets/sing_adv_5.jpg";
import sl_adv_1 from "@/assets/sl_adv_1.jpg";
import sl_adv_2 from "@/assets/sl_adv_2.jpg";
import sl_adv_3 from "@/assets/sl_adv_3.jpg";
import sl_adv_4 from "@/assets/sl_adv_4.jpg";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { useAdmin } from "@/context/AdminContext";

const imageMap: Record<string, string> = {
  "malaysia_main_new.jpg": malaysiaImg,
  "thailand_new.jpg": thailandImg,
  "bali_main_new.jpg": baliImg,
  "vietnam_new.jpg": vietnamImg,
  "dubai_new.jpg": dubaiImg,
  "singapore_main_new.jpg": singaporeImg,
  "meghalaya_new.jpg": meghalayaImg,
  "maldives_main_new.jpg": maldivesImg,
  "srilanka_main.jpg": srilankaImg,
  "mal_adv_1.jpg": mal_adv_1,
  "mal_adv_2.jpg": mal_adv_2,
  "mal_adv_3.jpg": mal_adv_3,
  "mal_adv_4.jpg": mal_adv_4,
  "mal_adv_5.jpg": mal_adv_5,
  "thailand_adv_1.jpg": thailand_adv_1,
  "thailand_adv_2.jpg": thailand_adv_2,
  "thailand_adv_3.jpg": thailand_adv_3,
  "thailand_adv_4.jpg": thailand_adv_4,
  "thailand_adv_5.jpg": thailand_adv_5,
  "bali_adv_1.jpg": bali_adv_1,
  "bali_adv_2.jpg": bali_adv_2,
  "bali_adv_3.jpg": bali_adv_3,
  "bali_adv_4.jpg": bali_adv_4,
  "dubai_adv_1.jpg": dubai_adv_1,
  "dubai_adv_2.jpg": dubai_adv_2,
  "dubai_adv_3.jpg": dubai_adv_3,
  "dubai_adv_4.jpg": dubai_adv_4,
  "dubai_adv_5.jpg": dubai_adv_5,
  "mald_adv_1.jpg": mald_adv_1,
  "mald_adv_2.jpg": mald_adv_2,
  "mald_adv_3.jpg": mald_adv_3,
  "mald_adv_4.jpg": mald_adv_4,
  "sing_adv_1.jpg": sing_adv_1,
  "sing_adv_2.jpg": sing_adv_2,
  "sing_adv_3.jpg": sing_adv_3,
  "sing_adv_4.jpg": sing_adv_4,
  "sing_adv_5.jpg": sing_adv_5,
  "sl_adv_1.jpg": sl_adv_1,
  "sl_adv_2.jpg": sl_adv_2,
  "sl_adv_3.jpg": sl_adv_3,
  "sl_adv_4.jpg": sl_adv_4,
};

/* ─────────────────────────────────────────────
   MAIN PAGE
───────────────────────────────────────────── */
const Packages = () => {
  const { destinations, packagesContent } = useAdmin();
  const [searchParams] = useSearchParams();
  const destParam = searchParams.get("destination");
  const [selectedDestination, setSelectedDestination] = useState<string>("all");

  useEffect(() => {
    if (destParam) setSelectedDestination(destParam);
  }, [destParam]);

  const getImageSrc = (img: string) => imageMap[img] || img;

  const groupedPackages = destinations.reduce(
    (acc, dest) => {
      if (selectedDestination !== "all" && dest.id !== selectedDestination) return acc;
      if (dest.packages.length > 0) acc.push({ destination: dest, packages: dest.packages });
      return acc;
    },
    [] as { destination: (typeof destinations)[0]; packages: (typeof destinations)[0]["packages"] }[]
  );

  return (
    <div className="min-h-screen pt-20 bg-[#f7f7f7] overflow-x-hidden">

      {/* ── Hero ── */}
      <section className="bg-[#0f0f0f] text-white py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(220,38,38,0.15)_0%,_transparent_70%)]" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <ScrollReveal>
            <span className="text-red-500 font-black tracking-[0.4em] uppercase text-[10px] mb-4 block">
              Adventure Catalog
            </span>
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-heading font-black mb-6 uppercase tracking-tighter leading-[0.85]">
              {packagesContent.heroTitle}
            </h1>
            <p className="text-base md:text-xl text-white/50 max-w-2xl mx-auto font-medium leading-relaxed">
              {packagesContent.heroSubtitle}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Sticky Filter Bar ── */}
      <section className="sticky top-16 z-30 bg-white/95 backdrop-blur-xl border-b border-gray-100 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 py-3 overflow-x-auto no-scrollbar">
            <div className="flex items-center gap-2 bg-gray-50 rounded-xl px-3 py-2 border border-gray-100 flex-shrink-0 mr-1">
              <Search className="h-3.5 w-3.5 text-gray-400" />
              <span className="text-[11px] text-gray-400 font-medium whitespace-nowrap">Filter</span>
            </div>
            <button
              onClick={() => setSelectedDestination("all")}
              className={`flex-shrink-0 px-4 py-2 rounded-xl text-[11px] font-black uppercase tracking-widest transition-all duration-300 ${
                selectedDestination === "all"
                  ? "bg-red-600 text-white shadow-md"
                  : "bg-gray-50 text-gray-500 hover:bg-gray-100 border border-gray-100"
              }`}
            >
              All
            </button>
            {destinations.map((dest) => (
              <button
                key={dest.id}
                onClick={() => setSelectedDestination(dest.id)}
                className={`flex-shrink-0 px-4 py-2 rounded-xl text-[11px] font-black uppercase tracking-widest whitespace-nowrap transition-all duration-300 ${
                  selectedDestination === dest.id
                    ? "bg-red-600 text-white shadow-md"
                    : "bg-gray-50 text-gray-500 hover:bg-gray-100 border border-gray-100"
                }`}
              >
                {dest.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Package Sections ── */}
      <section className="py-12 md:py-20">
        {groupedPackages.length === 0 ? (
          <div className="container mx-auto px-4 text-center py-20">
            <p className="text-xl text-gray-400 mb-6">No packages found</p>
            <Button
              onClick={() => setSelectedDestination("all")}
              className="bg-red-600 hover:bg-black text-white rounded-full px-10 py-6 font-black uppercase tracking-widest"
            >
              Clear Filters
            </Button>
          </div>
        ) : (
          <div className="space-y-16 md:space-y-24">
            {groupedPackages.map((group, i) => (
              <ScrollReveal key={group.destination.id} delay={i * 0.05}>
                <DestinationSection group={group} getImageSrc={getImageSrc} />
              </ScrollReveal>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

/* ─────────────────────────────────────────────
   DESTINATION SECTION — card slider
───────────────────────────────────────────── */
const DestinationSection = ({
  group,
  getImageSrc,
}: {
  group: { destination: any; packages: any[] };
  getImageSrc: (img: string) => string;
}) => {
  const allCards = [
    { type: "intro" as const },
    ...group.packages.map((pkg) => ({ type: "pkg" as const, pkg })),
  ];

  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);

  /* ── scroll the track to a given card index ── */
  const goTo = useCallback(
    (target: number) => {
      const clamped = Math.max(0, Math.min(target, allCards.length - 1));
      const track = trackRef.current;
      if (!track) return;
      
      const cards = Array.from(track.children) as HTMLElement[];
      if (!cards[clamped]) return;

      const targetCard = cards[clamped];
      const scrollLeft = targetCard.offsetLeft - 16; // 16px is the track's left padding
      
      track.scrollTo({ left: scrollLeft, behavior: "smooth" });
      setIdx(clamped);
    },
    [allCards.length]
  );

  /* ── auto-advance every 4 s ── */
  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => {
      setIdx((prev) => {
        const next = prev >= allCards.length - 1 ? 0 : prev + 1;
        goTo(next);
        return next;
      });
    }, 4000);
    return () => clearInterval(t);
  }, [paused, allCards.length, goTo]);

  /* ── keep idx in sync when user swipes manually ── */
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const onScroll = () => {
      const cards = Array.from(track.children) as HTMLElement[];
      const scrollPos = track.scrollLeft + track.offsetWidth / 2;
      
      let currentIdx = 0;
      for (let k = 0; k < cards.length; k++) {
        const cardLeft = cards[k].offsetLeft;
        const cardRight = cardLeft + cards[k].offsetWidth;
        if (scrollPos >= cardLeft && scrollPos <= cardRight) {
          currentIdx = k;
          break;
        }
      }
      setIdx(currentIdx);
    };
    track.addEventListener("scroll", onScroll, { passive: true });
    return () => track.removeEventListener("scroll", onScroll);
  }, []);

  const canPrev = idx > 0;
  const canNext = idx < allCards.length - 1;

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onTouchStart={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchEnd={() => setPaused(false)}
    >
      {/* ── Section title — More compact on mobile ── */}
      <div className="container mx-auto px-4 mb-4 md:mb-8">
        <div className="flex items-center gap-2 md:gap-3">
          <div className="w-1 h-8 md:h-14 bg-red-600 rounded-full flex-shrink-0" />
          <div>
            <h2 className="text-xl sm:text-2xl md:text-5xl font-heading font-black uppercase tracking-tighter text-black leading-none">
              {group.destination.name}
            </h2>
            <p className="text-red-600 font-black uppercase tracking-[0.2em] text-[8px] md:text-[10px] mt-1">
              {group.packages.length} {group.packages.length === 1 ? "Package" : "Packages"}
            </p>
          </div>
        </div>
      </div>

      {/* ── Slider wrapper ── */}
      <div className="relative group/slider">

        {/* Navigation Arrows — Grouped on the right inside the track area */}
        <div className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-3">
          <button
            onClick={() => goTo(idx - 1)}
            aria-label="Previous"
            className={`
              w-10 h-10 md:w-14 md:h-14 rounded-2xl
              flex items-center justify-center
              bg-white/90 backdrop-blur-md shadow-2xl border-2
              transition-all duration-300
              ${canPrev
                ? "border-red-600 text-red-600 hover:bg-red-600 hover:text-white cursor-pointer hover:scale-110 active:scale-95"
                : "border-gray-200 text-gray-300 opacity-0 pointer-events-none"
              }
            `}
          >
            <ChevronLeft className="w-5 h-5 md:w-7 md:h-7" />
          </button>
          <button
            onClick={() => goTo(idx + 1)}
            aria-label="Next"
            className={`
              w-10 h-10 md:w-14 md:h-14 rounded-2xl
              flex items-center justify-center
              bg-white/90 backdrop-blur-md shadow-2xl border-2
              transition-all duration-300
              ${canNext
                ? "border-red-600 text-red-600 hover:bg-red-600 hover:text-white cursor-pointer hover:scale-110 active:scale-95"
                : "border-gray-200 text-gray-300 opacity-0 pointer-events-none"
              }
            `}
          >
            <ChevronRight className="w-5 h-5 md:w-7 md:h-7" />
          </button>
        </div>

        {/* Horizontal scrollable track */}
        <div
          ref={trackRef}
          className="flex gap-4 overflow-x-auto no-scrollbar snap-x snap-mandatory px-4 md:px-8 pb-6"
        >
          {allCards.map((item, i) =>
            item.type === "intro" ? (
              /* ── Destination intro card ── */
              <div
                key="intro"
                className="
                  snap-start flex-shrink-0
                  w-[calc(100vw-2rem)] sm:w-80 md:w-96
                  aspect-[4/5] sm:aspect-[3/4]
                  rounded-3xl overflow-hidden relative shadow-2xl
                  group/dest cursor-default
                "
              >
                <img
                  src={getImageSrc(group.destination.image)}
                  alt={group.destination.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover/dest:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                <div className="absolute inset-0 p-5 md:p-8 flex flex-col justify-between text-white z-10">
                  <div className="flex justify-between items-start">
                    <span className="bg-red-600 text-white px-3 py-1.5 rounded-lg text-[9px] font-black uppercase tracking-[0.2em]">
                      Official Guide
                    </span>
                    <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10">
                      <MapPin className="w-3.5 h-3.5 text-red-400" />
                      <span className="text-[10px] font-black uppercase tracking-wider">
                        {group.destination.country}
                      </span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-3xl md:text-5xl font-heading font-black uppercase tracking-tighter leading-[0.9] mb-3 drop-shadow-2xl">
                      {group.destination.name}
                    </h3>
                    <p className="text-sm text-white/90 line-clamp-3 leading-relaxed font-medium">
                      {group.destination.description}
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              /* ── Package card ── */
              <div
                key={item.pkg.id}
                className="
                  snap-start flex-shrink-0
                  w-[calc(100vw-2rem)] sm:w-80 md:w-96
                  aspect-[4/5] sm:aspect-[3/4]
                  rounded-3xl overflow-hidden relative shadow-2xl
                  group/card transition-all duration-500 hover:-translate-y-1
                "
              >
                <img
                  src={getImageSrc(item.pkg.image || group.destination.image)}
                  alt={item.pkg.duration}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                <div className="absolute inset-0 p-5 md:p-8 flex flex-col justify-between text-white z-10">
                  <div className="flex justify-between items-start">
                    <span className="bg-red-600 text-white px-3 py-1.5 rounded-lg text-[9px] font-black uppercase tracking-[0.2em] max-w-[65%] leading-tight shadow-lg">
                      {item.pkg.duration}
                    </span>
                    <div className="bg-white/10 backdrop-blur-md p-2.5 rounded-xl border border-white/15">
                      <Clock className="w-4 h-4 text-red-400" />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="h-px w-8 bg-red-500" />
                      <span className="text-[10px] font-black uppercase tracking-[0.3em] text-red-400">
                        Special Offer
                      </span>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-heading font-black uppercase tracking-tighter leading-tight mb-4 drop-shadow-2xl">
                      {item.pkg.nights}N / {item.pkg.days}D
                      <br />
                      <span className="text-white/80 font-medium text-base md:text-lg normal-case tracking-normal">
                        {group.destination.name} Adventure
                      </span>
                    </h3>

                    <div className="flex items-end justify-between pt-4 border-t border-white/10">
                      <div>
                        <p className="text-[9px] text-white/40 uppercase tracking-[0.3em] font-black mb-0.5">
                          Starting From
                        </p>
                        <p className="text-3xl md:text-4xl font-black tracking-tight">
                          ₹{item.pkg.price.toLocaleString()}
                        </p>
                      </div>
                      <Link
                        to={`/destination/${group.destination.id}?pkg=${item.pkg.id}`}
                        className="group/btn flex items-center gap-2 bg-white text-black hover:bg-red-600 hover:text-white rounded-2xl px-5 py-3 font-black uppercase tracking-widest text-[10px] transition-all duration-300 shadow-xl hover:scale-105"
                      >
                        View Tour
                        <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-0.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>

      {/* ── Dot indicators ── */}
      <div className="flex justify-center gap-2 mt-4">
        {allCards.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to card ${i + 1}`}
            className={`rounded-full transition-all duration-300 ${
              i === idx ? "bg-red-600 w-8 h-2" : "bg-gray-300 hover:bg-gray-400 w-2 h-2"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Packages;

