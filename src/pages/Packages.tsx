import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, ArrowRight, MapPin, Clock } from "lucide-react";
import malaysiaImg from "@/assets/malaysia_new.jpg";
import thailandImg from "@/assets/thailand.jpg";
import baliImg from "@/assets/bali_new.jpg";
import vietnamImg from "@/assets/vietnam_new.jpg";
import dubaiImg from "@/assets/dubai.jpg";
import singaporeImg from "@/assets/singapore.jpg";
import meghalayaImg from "@/assets/meghalaya_new.jpg";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { useAdmin } from "@/context/AdminContext";

const imageMap: Record<string, string> = {
  "malaysia_new.jpg": malaysiaImg,
  "thailand.jpg": thailandImg,
  "bali_new.jpg": baliImg,
  "vietnam_new.jpg": vietnamImg,
  "dubai.jpg": dubaiImg,
  "singapore.jpg": singaporeImg,
  "meghalaya_new.jpg": meghalayaImg
};

const Packages = () => {
  const { destinations, packagesContent } = useAdmin();
  const [searchParams] = useSearchParams();
  const destParam = searchParams.get("destination");

  const [selectedDestination, setSelectedDestination] = useState<string>("all");

  useEffect(() => {
    if (destParam) {
      setSelectedDestination(destParam);
    }
  }, [destParam]);

  const getImageSrc = (img: string) => {
    return imageMap[img] || img;
  };

  // Flatten all packages
  const allPackages = destinations.flatMap((dest) =>
    dest.packages.map((pkg) => ({
      ...pkg,
      destination: dest,
    }))
  );

  // Filter packages
  const filteredPackages = allPackages.filter((pkg) => {
    const destinationMatch =
      selectedDestination === "all" || pkg.destination.id === selectedDestination;

    return destinationMatch;
  });

  return (
    <div className="min-h-screen pt-20 bg-background/50">
      {/* Hero */}
      <section className="bg-[#121212] text-white py-24 relative overflow-hidden shadow-2xl">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent"></div>
        <div className="container mx-auto px-4 text-center relative z-10 font-heading">
          <ScrollReveal>
             <span className="text-primary font-bold tracking-[0.4em] uppercase text-xs mb-4 block">Adventure Catalog</span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 uppercase tracking-tighter">
              {packagesContent.heroTitle}
            </h1>
            <p className="text-xl text-white/60 max-w-2xl mx-auto font-medium leading-relaxed">
              {packagesContent.heroSubtitle}
            </p>
          </ScrollReveal>
        </div>
      </section>



      {/* Packages Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="mb-6 text-gray-500 text-sm font-medium">
            Showing {filteredPackages.length} package{filteredPackages.length !== 1 ? 's' : ''}
          </div>

          {filteredPackages.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-xl shadow-sm border border-gray-100">
              <p className="text-xl text-gray-400 mb-4">
                No packages found matching your criteria
              </p>
              <Button
                variant="outline"
                onClick={() => {
                  setSelectedDestination("all");
                  setSelectedDuration("all");
                  setSelectedBudget("all");
                }}
                className="border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-white"
              >
                Clear Filters
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredPackages.map((pkg, index) => (
                <ScrollReveal key={`${pkg.destination.id}-${pkg.id}`} delay={index * 0.05}>
                  <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border-none shadow-md bg-white group rounded-2xl h-full flex flex-col md:flex-row">
                    <div className="md:w-2/5 h-64 md:h-auto relative overflow-hidden">
                      <img
                        src={getImageSrc(pkg.destination.image)}
                        alt={pkg.destination.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
                      <div className="absolute top-4 left-4">
                        <span className="bg-white/90 backdrop-blur-sm text-[#022c22] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
                          {pkg.destination.name}
                        </span>
                      </div>
                    </div>

                    <div className="md:w-3/5 p-6 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center text-[10px] text-muted-foreground mb-3 uppercase tracking-widest font-bold font-heading">
                          <Clock className="h-3 w-3 mr-2 text-primary" />
                          {pkg.nights} Nights / {pkg.days} Days
                        </div>
                        <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors uppercase font-heading tracking-tight leading-tight">
                          {pkg.duration}
                        </h3>

                        <div className="mb-4">
                          <div className="flex flex-wrap gap-2">
                            {pkg.inclusions.slice(0, 4).map((inclusion, index) => (
                              <span
                                key={index}
                                className="text-xs bg-gray-100 px-2 py-1 rounded-md text-gray-900 font-sans font-bold"
                              >
                                {inclusion}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-end justify-between pt-4 border-t border-gray-100 mt-2">
                        <div>
                          <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold mb-1 font-heading">Per Person</p>
                          <p className="text-3xl font-bold text-foreground font-heading">
                            ₹{pkg.price.toLocaleString()}
                          </p>
                        </div>
                        <Button asChild className="bg-foreground hover:bg-primary text-background hover:text-white rounded-full px-8 py-6 font-bold uppercase tracking-widest text-[10px] transition-all shadow-lg hover:scale-105 font-heading">
                          <Link to={`/destination/${pkg.destination.id}`}>
                            View Details
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Packages;
