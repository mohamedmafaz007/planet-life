import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Globe, Heart, Award, Users } from "lucide-react";
import malaysiaImg from "@/assets/malaysia_new.jpg";
import thailandImg from "@/assets/thailand.jpg";
import baliImg from "@/assets/bali_new.jpg";
import vietnamImg from "@/assets/vietnam_new.jpg";
import dubaiImg from "@/assets/dubai.jpg";
import singaporeImg from "@/assets/singapore.jpg";

import { useAdmin } from "@/context/AdminContext";

const About = () => {
  const { aboutContent } = useAdmin();

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
            {aboutContent.heroTitle}
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            {aboutContent.heroSubtitle}
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-serif font-bold mb-8 text-center text-foreground">
              {aboutContent.ourStoryTitle}
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground whitespace-pre-line">
              {aboutContent.ourStoryText}
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Founder */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto">
            <div className="w-full md:w-1/2">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/10 transform translate-x-4 translate-y-4 rounded-lg" />
                <img
                  src={aboutContent.founderImage}
                  alt="Founder of Planet Life"
                  className="relative rounded-lg shadow-xl w-full h-[500px] object-cover"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-4xl font-serif font-bold mb-6 text-foreground">
                {aboutContent.founderTitle}
              </h2>
              <div className="prose prose-lg text-muted-foreground whitespace-pre-line">
                {aboutContent.founderText}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-serif font-bold mb-12 text-center text-foreground">
            Why Travelers Choose Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Globe,
                title: "Global Expertise",
                description: "Extensive knowledge of destinations worldwide with local insights and connections"
              },
              {
                icon: Heart,
                title: "Passion for Travel",
                description: "We love what we do and it shows in every carefully planned itinerary"
              },
              {
                icon: Award,
                title: "Premium Quality",
                description: "Hand-picked hotels, attractions, and experiences that exceed expectations"
              },
              {
                icon: Users,
                title: "Customer First",
                description: "Dedicated support team available 24/7 to ensure your trip is perfect"
              }
            ].map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-8 pb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-card-foreground">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "5000+", label: "Happy Travelers" },
              { number: "50+", label: "Destinations" },
              { number: "4.9", label: "Google Rating" },
              { number: "24/7", label: "Support Available" }
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Travel Gallery */}
      <section className="py-20 bg-background overflow-hidden">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-serif font-bold mb-12 text-center text-foreground">
            Our Journey in Pictures
          </h2>
          <div className="px-12">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full max-w-5xl mx-auto"
            >
              <CarouselContent>
                {[
                  { src: baliImg, alt: "Bali scenery" },
                  { src: thailandImg, alt: "Thailand temple" },
                  { src: dubaiImg, alt: "Dubai skyline" },
                  { src: singaporeImg, alt: "Singapore gardens" },
                  { src: vietnamImg, alt: "Vietnam landscape" },
                  { src: malaysiaImg, alt: "Malaysia city" },
                ].map((img, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                      <Card>
                        <CardContent className="flex aspect-square items-center justify-center p-0 overflow-hidden rounded-lg relative group">
                          <img
                            src={img.src}
                            alt={img.alt}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300" />
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-serif font-bold mb-6 text-foreground">
              {aboutContent.missionTitle}
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {aboutContent.missionText}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
