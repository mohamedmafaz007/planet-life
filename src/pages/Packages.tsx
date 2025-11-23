import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { destinations } from "@/data/destinations";
import { Calendar, ArrowRight, MapPin } from "lucide-react";
import malaysiaImg from "@/assets/malaysia_new.jpg";
import thailandImg from "@/assets/thailand.jpg";
import baliImg from "@/assets/bali_new.jpg";
import vietnamImg from "@/assets/vietnam_new.jpg";
import dubaiImg from "@/assets/dubai.jpg";
import singaporeImg from "@/assets/singapore.jpg";
import meghalayaImg from "@/assets/meghalaya_new.jpg";

const imageMap: Record<string, string> = {
  "malaysia_new.jpg": malaysiaImg,
  "thailand.jpg": thailandImg,
  "bali_new.jpg": baliImg,
  "vietnam_new.jpg": vietnamImg,
  "dubai.jpg": dubaiImg,
  "singapore.jpg": singaporeImg,
  "meghalaya_new.jpg": meghalayaImg
};

import { useAdmin } from "@/context/AdminContext";

const Packages = () => {
  const { destinations, packagesContent } = useAdmin();
  const [selectedDestination, setSelectedDestination] = useState<string>("all");
  const [selectedDuration, setSelectedDuration] = useState<string>("all");
  const [selectedBudget, setSelectedBudget] = useState<string>("all");

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
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
            {packagesContent.heroTitle}
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            {packagesContent.heroSubtitle}
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-muted border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2 text-foreground">Destination</label>
              <Select value={selectedDestination} onValueChange={setSelectedDestination}>
                <SelectTrigger>
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
              <label className="block text-sm font-medium mb-2 text-foreground">Duration</label>
              <Select value={selectedDuration} onValueChange={setSelectedDuration}>
                <SelectTrigger>
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
              <label className="block text-sm font-medium mb-2 text-foreground">Budget</label>
              <Select value={selectedBudget} onValueChange={setSelectedBudget}>
                <SelectTrigger>
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
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="mb-6 text-muted-foreground">
            Showing {filteredPackages.length} package{filteredPackages.length !== 1 ? 's' : ''}
          </div>

          {filteredPackages.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl text-muted-foreground mb-4">
                No packages found matching your criteria
              </p>
              <Button
                onClick={() => {
                  setSelectedDestination("all");
                  setSelectedDuration("all");
                  setSelectedBudget("all");
                }}
              >
                Clear Filters
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filteredPackages.map((pkg) => (
                <Card key={`${pkg.destination.id}-${pkg.id}`} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3 h-48 md:h-auto min-h-[300px] relative">
                      <img
                        src={imageMap[pkg.destination.image]}
                        alt={pkg.destination.name}
                        className="w-full h-full object-contain bg-muted"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent" />
                      <div className="absolute bottom-3 left-3 right-3">
                        <div className="flex items-center text-primary-foreground text-sm mb-1">
                          <MapPin className="h-3 w-3 mr-1" />
                          {pkg.destination.country}
                        </div>
                        <h3 className="text-lg font-serif font-bold text-primary-foreground">
                          {pkg.destination.name}
                        </h3>
                      </div>
                    </div>

                    <div className="md:w-2/3 p-6">
                      <CardHeader className="p-0 mb-4">
                        <CardTitle className="text-xl mb-2">{pkg.duration}</CardTitle>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4 mr-1" />
                          {pkg.nights} Nights / {pkg.days} Days
                        </div>
                      </CardHeader>

                      <CardContent className="p-0">
                        <div className="mb-4">
                          <p className="text-sm text-muted-foreground mb-2">Includes:</p>
                          <div className="flex flex-wrap gap-2">
                            {pkg.inclusions.slice(0, 3).map((inclusion, index) => (
                              <span
                                key={index}
                                className="text-xs bg-muted px-2 py-1 rounded-full text-muted-foreground"
                              >
                                {inclusion}
                              </span>
                            ))}
                            {pkg.inclusions.length > 3 && (
                              <span className="text-xs bg-muted px-2 py-1 rounded-full text-muted-foreground">
                                +{pkg.inclusions.length - 3} more
                              </span>
                            )}
                          </div>
                        </div>

                        <div className="flex items-end justify-between pt-4 border-t border-border">
                          <div>
                            <p className="text-xs text-muted-foreground">Per Person</p>
                            <p className="text-2xl font-bold text-primary">
                              ₹{pkg.price.toLocaleString()}
                            </p>
                          </div>
                          <Button asChild>
                            <Link to={`/destination/${pkg.destination.id}`}>
                              View Details
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                          </Button>
                        </div>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Packages;
