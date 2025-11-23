import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useAdmin } from "@/context/AdminContext";
import { MapPin, Calendar, Users, Star, ArrowRight } from "lucide-react";
import heroVideo from "@/assets/hero-video.mp4";
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

const Home = () => {
  const { destinations, homeContent } = useAdmin();
  const featuredDestinations = destinations.filter((d) => d.featured);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[85vh] w-full flex items-center justify-center overflow-hidden bg-black">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover contrast-125 saturate-150"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/30" />

        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 animate-fade-in">
            {homeContent.heroTitle}
          </h1>
          <p className="text-xl md:text-2xl text-white font-bold mb-8 animate-fade-in">
            {homeContent.heroSubtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button size="lg" variant="secondary" asChild className="text-lg">
              <Link to="/destinations">
                Explore Destinations
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="secondary" asChild className="text-lg">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
              {homeContent.whyChooseUsTitle}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {homeContent.whyChooseUsSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: MapPin,
                title: "Curated Destinations",
                description: "Handpicked locations offering unique cultural and natural experiences"
              },
              {
                icon: Calendar,
                title: "Flexible Packages",
                description: "Choose from various durations and customize your perfect trip"
              },
              {
                icon: Users,
                title: "Expert Guidance",
                description: "Professional tour guides ensuring smooth and memorable journeys"
              },
              {
                icon: Star,
                title: "4.9 Rating",
                description: "Trusted by thousands of happy travelers worldwide"
              }
            ].map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-border">
                <CardContent className="pt-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-card-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
              Featured Destinations
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our most popular travel destinations around the world
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredDestinations.map((destination) => (
              <Card
                key={destination.id}
                className="group overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300 border-border"
              >
                <div className="relative aspect-[3/4] h-auto overflow-hidden">
                  <img
                    src={imageMap[destination.image]}
                    alt={destination.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-serif font-bold text-primary-foreground mb-1">
                      {destination.name}
                    </h3>
                    <p className="text-primary-foreground/90 text-sm">{destination.country}</p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-muted-foreground mb-4 line-clamp-2">
                    {destination.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-primary">
                      From ₹{destination.packages[0].price.toLocaleString()}
                    </span>
                    <Button variant="outline" asChild>
                      <Link to={`/destination/${destination.id}`}>
                        View Details
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" asChild>
              <Link to="/destinations">View All Destinations</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            {homeContent.ctaTitle}
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            {homeContent.ctaText}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contact">Get in Touch</Link>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <Link to="/packages">Browse Packages</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
