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
    <div className="min-h-screen pt-20 bg-gray-50">
      {/* Hero */}
      <section className="bg-[#022c22] text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/pattern.png')]"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Explore Our Destinations
          </h1>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto font-light">
            From tropical paradises to cultural wonders, discover your next adventure with us.
          </p>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

                  <div className="absolute top-4 right-4">
                    <span className="bg-[#d4af37] text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                      {destination.packages.length} Packages
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="flex items-center text-white/90 mb-1">
                      <MapPin className="h-3 w-3 mr-1" />
                      <span className="text-xs font-medium uppercase tracking-wider">{destination.country}</span>
                    </div>
                    <h3 className="text-2xl font-serif font-bold">
                      {destination.name}
                    </h3>
                  </div>
                </div>

                <CardContent className="p-6">
                  <p className="text-gray-600 mb-6 line-clamp-2 text-sm leading-relaxed">
                    {destination.description}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wider font-medium">Starting from</p>
                      <p className="text-xl font-bold text-[#022c22]">
                        ₹{Math.min(...destination.packages.map(p => p.price)).toLocaleString()}
                      </p>
                    </div>
                    <Button asChild className="bg-[#022c22] hover:bg-[#064e3b] text-white rounded-full px-6">
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
