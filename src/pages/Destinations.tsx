import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useAdmin } from "@/context/AdminContext";
import { ArrowRight, MapPin } from "lucide-react";
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

const Destinations = () => {
  const { destinations } = useAdmin();

  const getImageSrc = (img: string) => {
    return imageMap[img] || img;
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
            Explore Our Destinations
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            From tropical paradises to cultural wonders, discover your next adventure
          </p>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((destination) => (
              <Card
                key={destination.id}
                className="group overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                <div className="relative aspect-[3/4] h-auto overflow-hidden">
                  <img
                    src={getImageSrc(destination.image)}
                    alt={destination.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/40 to-transparent" />
                  <div className="absolute top-4 right-4">
                    <div className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                      {destination.packages.length} Package{destination.packages.length > 1 ? 's' : ''}
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center text-primary-foreground/90 mb-2">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span className="text-sm">{destination.country}</span>
                    </div>
                    <h3 className="text-3xl font-serif font-bold text-primary-foreground">
                      {destination.name}
                    </h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-muted-foreground mb-4">
                    {destination.description}
                  </p>

                  <div className="space-y-3 mb-6">
                    <h4 className="font-semibold text-foreground">Why Visit:</h4>
                    <ul className="space-y-2">
                      {destination.whyVisit.slice(0, 2).map((reason, index) => (
                        <li key={index} className="flex items-start text-sm text-muted-foreground">
                          <span className="text-primary mr-2">•</span>
                          <span>{reason}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div>
                      <p className="text-sm text-muted-foreground">Starting from</p>
                      <p className="text-2xl font-bold text-primary">
                        ₹{Math.min(...destination.packages.map(p => p.price)).toLocaleString()}
                      </p>
                    </div>
                    <Button asChild>
                      <Link to={`/destination/${destination.id}`}>
                        Explore
                        <ArrowRight className="ml-2 h-4 w-4" />
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
