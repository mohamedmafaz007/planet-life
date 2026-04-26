import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useAdmin } from "@/context/AdminContext";
import { ArrowRight, MapPin } from "lucide-react";
import malaysiaImg from "@/assets/malaysia_main_new.jpg";
import thailandImg from "@/assets/thailand_new.jpg";
import baliImg from "@/assets/bali_main_new.jpg";
import vietnamImg from "@/assets/vietnam_new.jpg";
import dubaiImg from "@/assets/dubai_new.jpg";
import singaporeImg from "@/assets/singapore_main_new.jpg";
import meghalayaImg from "@/assets/meghalaya_new.jpg";
import maldivesImg from "@/assets/maldives_main_new.jpg";
import srilankaImg from "@/assets/srilanka_main.jpg";

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
  "mal_adv_1.jpg": "/src/assets/mal_adv_1.jpg",
  "mal_adv_2.jpg": "/src/assets/mal_adv_2.jpg",
  "thailand_adv_1.jpg": "/src/assets/thailand_adv_1.jpg",
  "thailand_adv_2.jpg": "/src/assets/thailand_adv_2.jpg",
  "thailand_adv_3.jpg": "/src/assets/thailand_adv_3.jpg",
  "bali_adv_1.jpg": "/src/assets/bali_adv_1.jpg",
  "bali_adv_2.jpg": "/src/assets/bali_adv_2.jpg",
  "bali_adv_3.jpg": "/src/assets/bali_adv_3.jpg",
  "dubai_adv_1.jpg": "/src/assets/dubai_adv_1.jpg",
  "dubai_adv_2.jpg": "/src/assets/dubai_adv_2.jpg",
  "dubai_adv_3.jpg": "/src/assets/dubai_adv_3.jpg",
  "mald_adv_1.jpg": "/src/assets/mald_adv_1.jpg",
  "sing_adv_1.jpg": "/src/assets/sing_adv_1.jpg",
  "sl_adv_1.jpg": "/src/assets/sl_adv_1.jpg",
  "sl_adv_2.jpg": "/src/assets/sl_adv_2.jpg"
};

const Destinations = () => {
  const { destinations } = useAdmin();

  const getImageSrc = (img: string) => {
    return imageMap[img] || img;
  };

  return (
    <div className="min-h-screen pt-20 bg-background/50">
      {/* Hero */}
      <section className="bg-[#121212] text-white py-24 relative overflow-hidden shadow-2xl">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent"></div>
        <div className="container mx-auto px-4 text-center relative z-10 font-heading">
          <ScrollReveal>
            <span className="text-primary font-bold tracking-[0.4em] uppercase text-xs mb-4 block">World Exploration</span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 uppercase tracking-tighter">
              Explore Our Destinations
            </h1>
            <p className="text-xl text-white/60 max-w-2xl mx-auto font-medium leading-relaxed">
              From tropical paradises to cultural wonders, discover your next adventure with us.
            </p>
          </ScrollReveal>
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

                  <div className="absolute top-4 right-4 z-20">
                    <span className="bg-primary text-white px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-xl font-heading">
                      {destination.packages.length} Packages
                    </span>
                  </div>

                  <div className="absolute bottom-6 left-6 text-white z-20">
                    <div className="flex items-center text-white/80 mb-2 font-heading">
                       <MapPin className="h-4 w-4 mr-2 text-primary" />
                      <span className="text-xs font-bold uppercase tracking-widest">{destination.country}</span>
                    </div>
                    <h3 className="text-3xl font-heading font-bold text-white uppercase tracking-tight">
                      {destination.name}
                    </h3>
                  </div>
                </div>

                <CardContent className="p-8">
                  <p className="text-muted-foreground mb-8 line-clamp-2 text-sm leading-relaxed font-sans font-medium">
                    {destination.description}
                  </p>

                  <div className="flex items-center justify-between pt-6 border-t border-border">
                    <div>
                      <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold mb-1 font-heading">Starting from</p>
                      <p className="text-3xl font-bold text-foreground font-heading">
                        ₹{Math.min(...destination.packages.map(p => p.price)).toLocaleString()}
                      </p>
                    </div>
                    <Button asChild className="bg-foreground hover:bg-primary text-background hover:text-white rounded-full px-8 py-6 font-bold uppercase tracking-widest text-[10px] transition-all shadow-lg hover:scale-105 font-heading">
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
