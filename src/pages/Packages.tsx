import { useState } from "react";
import { Link } from "react-router-dom";
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
  const [selectedDestination, setSelectedDestination] = useState<string>("all");
  const [selectedDuration, setSelectedDuration] = useState<string>("all");
  const [selectedBudget, setSelectedBudget] = useState<string>("all");

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
    const durationMatch =
      selectedDuration === "all" ||
      (selectedDuration === "short" && pkg.nights <= 3) ||
      (selectedDuration === "medium" && pkg.nights === 4) ||
      (selectedDuration === "long" && pkg.nights >= 5);
    const budgetMatch =
      selectedBudget === "all" ||
      (selectedBudget === "budget" && pkg.price < 18000) ||
      (selectedBudget === "mid" && pkg.price >= 18000 && pkg.price < 30000) ||
      (selectedBudget === "luxury" && pkg.price >= 30000);

    return destinationMatch && durationMatch && budgetMatch;
  });

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      {/* Hero */}
      <section className="bg-[#022c22] text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/pattern.png')]"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <ScrollReveal>
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              {packagesContent.heroTitle}
            </h1>
            <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto font-light">
              {packagesContent.heroSubtitle}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Filters */}
      <section className="py-6 bg-white border-b border-gray-200 sticky top-[72px] z-40 shadow-sm">
        <div className="container mx-auto px-4">
          <ScrollReveal delay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">Destination</label>
                <Select value={selectedDestination} onValueChange={setSelectedDestination}>
                  <SelectTrigger className="bg-gray-50 border-gray-200 focus:ring-[#d4af37]">
                    <SelectValue placeholder="All Destinations" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Destinations</SelectItem>
                    {destinations.map((dest) => (
                      <SelectItem key={dest.id} value={dest.id}>
                        {dest.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">Duration</label>
                <Select value={selectedDuration} onValueChange={setSelectedDuration}>
                  <SelectTrigger className="bg-gray-50 border-gray-200 focus:ring-[#d4af37]">
                    <SelectValue placeholder="All Durations" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Durations</SelectItem>
                    <SelectItem value="short">Short (3 nights or less)</SelectItem>
                    <SelectItem value="medium">Medium (4 nights)</SelectItem>
                    <SelectItem value="long">Long (5+ nights)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">Budget</label>
                <Select value={selectedBudget} onValueChange={setSelectedBudget}>
                  <SelectTrigger className="bg-gray-50 border-gray-200 focus:ring-[#d4af37]">
                    <SelectValue placeholder="All Budgets" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Budgets</SelectItem>
                    <SelectItem value="budget">Budget (Under ₹18,000)</SelectItem>
                    <SelectItem value="mid">Mid-Range (₹18,000 - ₹30,000)</SelectItem>
                    <SelectItem value="luxury">Luxury (₹30,000+)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
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
                        <div className="flex items-center text-xs text-gray-500 mb-2 uppercase tracking-wider font-medium">
                          <Clock className="h-3 w-3 mr-1 text-[#d4af37]" />
                          {pkg.nights} Nights / {pkg.days} Days
                        </div>
                        <h3 className="text-xl font-bold text-[#022c22] mb-3 group-hover:text-[#d4af37] transition-colors">
                          {pkg.duration}
                        </h3>

                        <div className="mb-4">
                          <div className="flex flex-wrap gap-2">
                            {pkg.inclusions.slice(0, 4).map((inclusion, index) => (
                              <span
                                key={index}
                                className="text-xs bg-gray-100 px-2 py-1 rounded-md text-gray-600"
                              >
                                {inclusion}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-end justify-between pt-4 border-t border-gray-100 mt-2">
                        <div>
                          <p className="text-xs text-gray-400 uppercase tracking-wider font-medium">Per Person</p>
                          <p className="text-2xl font-bold text-[#d4af37]">
                            ₹{pkg.price.toLocaleString()}
                          </p>
                        </div>
                        <Button asChild className="bg-[#022c22] hover:bg-[#064e3b] text-white rounded-full px-6">
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
