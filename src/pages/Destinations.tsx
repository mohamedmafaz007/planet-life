import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useAdmin } from "@/context/AdminContext";
import { ArrowRight, MapPin } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { getImageSrc } from "@/data/imageMap";

const Destinations = () => {
  const { destinations } = useAdmin();


  return (
    <div className="min-h-screen bg-background/50">
      {/* Hero */}
      <section className="bg-[#121212] text-white pt-24 mobile:pt-28 md:pt-32 pb-12 mobile:pb-16 md:pb-24 relative overflow-hidden shadow-2xl">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent"></div>
        <div className="container mx-auto px-3 mobile:px-4 text-center relative z-10 font-heading">
          <ScrollReveal width="100%">
            <span className="text-primary font-bold tracking-[0.2em] mobile:tracking-[0.4em] uppercase text-[10px] mobile:text-xs mb-3 mobile:mb-4 block">World Exploration</span>
            <h1 className="text-2xl xs:text-3xl mobile:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 mobile:mb-6 uppercase tracking-tighter text-white">
              Explore Our Destinations
            </h1>
            <p className="text-sm mobile:text-base sm:text-lg md:text-xl text-white/60 max-w-2xl mx-auto font-medium leading-relaxed">
              From tropical paradises to cultural wonders, discover your next adventure with us.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-8 mobile:py-12 md:py-16">
        <div className="container mx-auto px-3 mobile:px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mobile:gap-6 md:gap-8">
            {destinations.map((destination) => (
              <Card
                key={destination.id}
                className="group overflow-hidden hover:shadow-2xl transition-all duration-300 border-none shadow-md bg-white rounded-2xl"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={getImageSrc(destination.image)}
                    alt={destination.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />

                  <div className="absolute top-4 right-4 z-20">
                    <span className="bg-primary text-white px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-xl font-heading">
                      {destination.packages.length} Packages
                    </span>
                  </div>

                  <div className="absolute bottom-4 mobile:bottom-6 left-4 mobile:left-6 text-white z-20">
                    <div className="flex items-center text-white/80 mb-1 mobile:mb-2 font-heading">
                       <MapPin className="h-3 w-3 mobile:h-4 mobile:w-4 mr-1 mobile:mr-2 text-primary" />
                      <span className="text-[10px] mobile:text-xs font-bold uppercase tracking-widest">{destination.country}</span>
                    </div>
                    <h3 className="text-xl mobile:text-2xl md:text-3xl font-heading font-bold text-white uppercase tracking-tight">
                      {destination.name}
                    </h3>
                  </div>
                </div>

                <CardContent className="p-4 mobile:p-6 md:p-8">
                  <p className="text-muted-foreground mb-8 line-clamp-2 text-sm leading-relaxed font-sans font-medium">
                    {destination.description}
                  </p>

                  <div className="flex items-center justify-between pt-6 border-t border-border">
                    <div>
                      <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold mb-1 font-heading">Starting from</p>
                      <p className="text-2xl mobile:text-3xl font-bold text-foreground font-heading">
                        ₹{destination.packages.length > 0 
                          ? Math.min(...destination.packages.map(p => p.price)).toLocaleString() 
                          : "0"}
                      </p>
                    </div>
                    <Button asChild className="bg-foreground hover:bg-primary text-background hover:text-white rounded-full px-4 mobile:px-6 md:px-8 py-4 mobile:py-5 md:py-6 font-bold uppercase tracking-wider md:tracking-widest text-[9px] mobile:text-[10px] transition-all shadow-lg hover:scale-105 font-heading">
                      <Link to={`/destination/${destination.id}`}>
                        View Details
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Destinations;
