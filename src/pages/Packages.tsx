import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Search, ArrowRight, Check } from "lucide-react";
import { getImageSrc } from "@/data/imageMap";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { useAdmin } from "@/context/AdminContext";

/* ─────────────────────────────────────────────
   MAIN PAGE
───────────────────────────────────────────── */
const Packages = () => {
  const { destinations, packagesContent } = useAdmin();
  const [searchParams] = useSearchParams();
  const destParam = searchParams.get("destination");
  const [selectedDestination, setSelectedDestination] = useState<string>("all");

  useEffect(() => {
    setSelectedDestination(destParam || "all");
    window.scrollTo(0, 0);
  }, [destParam]);


  const groupedPackages = destinations.reduce(
    (acc, dest) => {
      if (selectedDestination !== "all" && dest.id !== selectedDestination) return acc;
      if (dest.packages.length > 0) acc.push({ destination: dest, packages: dest.packages });
      return acc;
    },
    [] as { destination: (typeof destinations)[0]; packages: (typeof destinations)[0]["packages"] }[]
  );

  return (
    <div className="min-h-screen bg-[#f4f4f5] overflow-x-hidden pb-32" key={selectedDestination}>
      {/* ── Hero ── */}
      <section className="bg-[#0a0a0a] text-white pt-24 mobile:pt-28 md:pt-32 lg:pt-40 pb-12 mobile:pb-16 md:pb-24 lg:pb-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(220,38,38,0.2)_0%,_transparent_60%)]" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <ScrollReveal width="100%">
            <span className="text-red-500 font-black tracking-[0.4em] uppercase text-[10px] md:text-xs mb-6 block drop-shadow-lg">
              Curated Experiences
            </span>
            <h1 className="text-3xl xs:text-4xl mobile:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-black mb-4 mobile:mb-6 uppercase tracking-tighter leading-[0.85] text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400">
              {packagesContent.heroTitle}
            </h1>
            <p className="text-xs mobile:text-sm sm:text-base md:text-xl text-white/60 max-w-2xl mx-auto font-medium leading-relaxed">
              {packagesContent.heroSubtitle}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Floating Filter Pill ── */}
      <section className="sticky top-20 mobile:top-24 z-40 mx-auto px-3 mobile:px-4 my-4 mobile:my-6 md:my-8 lg:my-12 flex justify-center w-full">
        <ScrollReveal delay={0.2}>
          <div className="flex items-center gap-1.5 mobile:gap-2 p-1.5 mobile:p-2 bg-white/80 backdrop-blur-2xl border border-gray-200 shadow-2xl rounded-[1.5rem] mobile:rounded-[2rem] max-w-full lg:max-w-5xl mx-auto overflow-x-auto scrollbar-hide">
            <div className="hidden sm:flex items-center gap-2 bg-gray-100 rounded-full px-4 py-3 flex-shrink-0 mr-1">
              <Search className="h-4 w-4 text-gray-500" />
              <span className="text-[10px] text-gray-600 font-black uppercase tracking-widest">Filter</span>
            </div>
            <button
              onClick={() => setSelectedDestination("all")}
              className={`flex-shrink-0 px-3 mobile:px-4 sm:px-6 py-2 mobile:py-2.5 sm:py-3 rounded-full text-[9px] mobile:text-[10px] font-black uppercase tracking-wider sm:tracking-widest transition-all duration-300 ${
                selectedDestination === "all"
                  ? "bg-red-600 text-white shadow-lg shadow-red-600/30 scale-100"
                  : "bg-transparent text-gray-600 hover:bg-gray-100 scale-95 hover:scale-100"
              }`}
            >
              All
            </button>
            {destinations.map((dest) => (
              <button
                key={dest.id}
                onClick={() => setSelectedDestination(dest.id)}
                className={`flex-shrink-0 px-3 mobile:px-4 sm:px-6 py-2 mobile:py-2.5 sm:py-3 rounded-full text-[9px] mobile:text-[10px] font-black uppercase tracking-wider sm:tracking-widest whitespace-nowrap transition-all duration-300 ${
                  selectedDestination === dest.id
                    ? "bg-red-600 text-white shadow-lg shadow-red-600/30 scale-100"
                    : "bg-transparent text-gray-600 hover:bg-gray-100 scale-95 hover:scale-100"
                }`}
              >
                {dest.name}
              </button>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* ── Package Sections (Bento Grid) ── */}
      <section className="container mx-auto px-4">
        {groupedPackages.length === 0 ? (
          <div className="text-center py-32 bg-white rounded-[3rem] shadow-xl border border-gray-100">
            <p className="text-2xl text-gray-400 mb-8 font-heading font-bold uppercase">No packages found</p>
            <Button
              onClick={() => setSelectedDestination("all")}
              className="bg-red-600 hover:bg-black text-white rounded-full px-12 py-7 font-black uppercase tracking-widest text-sm shadow-xl transition-all hover:scale-105"
            >
              Clear Filters
            </Button>
          </div>
        ) : (
          <div className="space-y-24 md:space-y-32">
            {groupedPackages.map((group, i) => (
              <ScrollReveal key={group.destination.id} delay={i * 0.1} width="100%" overflow="visible">
                <DestinationBento group={group} getImageSrc={getImageSrc} />
              </ScrollReveal>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

/* ─────────────────────────────────────────────
   DESTINATION BENTO GRID
───────────────────────────────────────────── */
const DestinationBento = ({
  group,
  getImageSrc,
}: {
  group: { destination: any; packages: any[] };
  getImageSrc: (img: string) => string;
}) => {
  return (
    <div className="relative">
      {/* ── Section Title ── */}
      <div className="flex flex-col mobile:flex-row mobile:items-end justify-between gap-3 mobile:gap-4 mb-4 mobile:mb-6 md:mb-8 px-1 mobile:px-2">
        <div className="flex items-center gap-2 mobile:gap-3 md:gap-4">
          <div className="w-1 mobile:w-1.5 h-8 mobile:h-10 md:h-12 lg:h-16 bg-red-600 rounded-full flex-shrink-0" />
          <div>
            <h2 className="text-2xl xs:text-3xl mobile:text-4xl sm:text-5xl md:text-6xl font-heading font-black uppercase tracking-tighter text-black leading-none drop-shadow-sm">
              {group.destination.name}
            </h2>
            <p className="text-red-600 font-black uppercase tracking-[0.2em] mobile:tracking-[0.3em] text-[9px] mobile:text-[10px] md:text-xs mt-1 mobile:mt-2 flex items-center gap-1 mobile:gap-2">
              <MapPin className="w-3 h-3" /> {group.destination.country}
            </p>
          </div>
        </div>
        <div className="bg-white px-5 py-2.5 rounded-full shadow-sm border border-gray-100 w-fit">
           <span className="text-[10px] font-black uppercase tracking-widest text-gray-500">
             {group.packages.length} Exclusive {group.packages.length === 1 ? "Package" : "Packages"}
           </span>
        </div>
      </div>

      {/* ── Bento Grid ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 mobile:gap-4 md:gap-6 auto-rows-[280px] mobile:auto-rows-[320px] sm:auto-rows-[360px] md:auto-rows-[380px] lg:auto-rows-[420px]">
        
        {/* Intro Card */}
        <div className="col-span-1 sm:col-span-2 lg:col-span-2 xl:col-span-2 row-span-1 sm:row-span-2 rounded-[1.5rem] mobile:rounded-[2rem] md:rounded-[2.5rem] overflow-hidden relative shadow-2xl group/dest flex flex-col justify-end p-4 mobile:p-6 md:p-10">
          <img
            src={getImageSrc(group.destination.image)}
            alt={group.destination.name}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] group-hover/dest:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10" />
          
          <div className="relative z-10">
            <div className="bg-red-600 text-white px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] w-fit mb-4 shadow-xl">
              Official Guide
            </div>
            <h3 className="text-2xl mobile:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-black uppercase tracking-tighter leading-[0.9] mb-2 mobile:mb-3 md:mb-4 text-white drop-shadow-2xl">
              Discover <br className="hidden mobile:block" /> {group.destination.name}
            </h3>
            <p className="text-xs mobile:text-sm md:text-base text-white/80 line-clamp-2 mobile:line-clamp-3 md:line-clamp-4 leading-relaxed font-medium max-w-lg mb-3 mobile:mb-4 md:mb-6">
              {group.destination.description}
            </p>
            <Button asChild className="bg-white text-black hover:bg-red-600 hover:text-white rounded-full px-8 py-6 font-black uppercase tracking-widest text-[10px] transition-all shadow-xl hover:scale-105 border-0">
               <Link to={`/destination/${group.destination.id}`}>Explore Destination</Link>
            </Button>
          </div>
        </div>

        {/* Package Cards */}
        {group.packages.map((pkg: any) => {
          return (
            <div
              key={pkg.id}
              className="col-span-1 row-span-1 rounded-[1.5rem] mobile:rounded-[2rem] md:rounded-[2.5rem] overflow-hidden relative shadow-xl hover:shadow-2xl group/card transition-all duration-500 hover:-translate-y-2 bg-black flex flex-col"
            >
              <img
                src={getImageSrc(pkg.image || group.destination.image)}
                alt={pkg.duration}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] opacity-80 group-hover/card:opacity-60 group-hover/card:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent transition-opacity duration-500 group-hover/card:opacity-90" />
              
              <div className="absolute inset-0 p-4 mobile:p-5 sm:p-6 md:p-8 flex flex-col justify-between text-white z-10">
                <div className="flex justify-between items-start">
                  <span className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-3 py-1.5 rounded-xl text-[9px] font-black uppercase tracking-[0.2em] shadow-lg">
                    {pkg.duration}
                  </span>
                  <div className="bg-red-600 p-2.5 rounded-xl shadow-lg">
                    <Clock className="w-4 h-4 text-white" />
                  </div>
                </div>

                <div className="flex flex-col justify-end mt-auto">
                  <div className="flex items-center gap-3 mb-3 transform transition-transform duration-500 group-hover/card:-translate-y-2">
                    <div className="h-px w-6 bg-red-500" />
                    <span className="text-[9px] font-black uppercase tracking-[0.3em] text-red-400">
                      Premium
                    </span>
                  </div>

                  <h3 className="text-lg mobile:text-xl sm:text-2xl md:text-3xl font-heading font-black uppercase tracking-tighter leading-[1.1] mb-1 mobile:mb-2 drop-shadow-2xl transform transition-transform duration-500 group-hover/card:-translate-y-2">
                    <span className="text-red-600">{pkg.nights}N / {pkg.days}D</span>
                    <br />
                    <span className="text-white/70 text-sm mobile:text-base md:text-lg lg:text-xl tracking-tight">Package</span>
                  </h3>

                  {/* Hover Reveal Content */}
                  <div className="overflow-hidden h-0 opacity-0 group-hover/card:h-auto group-hover/card:opacity-100 transition-all duration-500 ease-in-out">
                     <div className="pt-2 pb-4 space-y-1.5">
                       {pkg.inclusions?.slice(0, 3).map((inc: string, i: number) => (
                         <p key={i} className="text-[10px] text-white/80 font-medium flex items-center gap-2 line-clamp-1">
                           <Check className="w-3 h-3 text-red-500 flex-shrink-0" /> {inc}
                         </p>
                       ))}
                     </div>
                  </div>

                  <div className="flex items-end justify-between pt-4 border-t border-white/20 transform transition-transform duration-500">
                    <div>
                      <p className="text-[8px] text-white/50 uppercase tracking-[0.3em] font-black mb-1">
                        Starting From
                      </p>
                      <p className="text-xl mobile:text-2xl md:text-3xl font-black tracking-tighter text-white">
                        ₹{pkg.price.toLocaleString()}
                      </p>
                    </div>
                    <Link
                      to={`/destination/${group.destination.id}?pkg=${pkg.id}`}
                      className="bg-white text-black hover:bg-red-600 hover:text-white rounded-xl mobile:rounded-2xl w-10 h-10 mobile:w-12 mobile:h-12 flex items-center justify-center transition-all duration-300 shadow-xl hover:scale-110 flex-shrink-0"
                    >
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Packages;
