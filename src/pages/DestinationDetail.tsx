import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAdmin } from "@/context/AdminContext";
import { ArrowLeft, Calendar, Check, MapPin, Users } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Helmet } from "react-helmet-async";
import malaysiaImg from "@/assets/malaysia_new.jpg";
import malaysiaVideo from "@/assets/malaysia_video.mp4";
import malaysiaAdv1 from "@/assets/malaysia_adventure_1.jpg";
import malaysiaAdv2 from "@/assets/malaysia_adventure_2.jpg";
import malaysiaAdv3 from "@/assets/malaysia_adventure_3.jpg";
import thailandImg from "@/assets/thailand.jpg";
import baliImg from "@/assets/bali_new.jpg";
import vietnamImg from "@/assets/vietnam_new.jpg";
import dubaiImg from "@/assets/dubai.jpg";
import singaporeImg from "@/assets/singapore.jpg";
import meghalayaImg from "@/assets/meghalaya_new.jpg";

const imageMap: Record<string, string> = {
  "malaysia_new.jpg": malaysiaImg,
  "malaysia_video.mp4": malaysiaVideo,
  "malaysia_adventure_1.jpg": malaysiaAdv1,
  "malaysia_adventure_2.jpg": malaysiaAdv2,
  "malaysia_adventure_3.jpg": malaysiaAdv3,
  "thailand.jpg": thailandImg,
  "bali_new.jpg": baliImg,
  "vietnam_new.jpg": vietnamImg,
  "dubai.jpg": dubaiImg,
  "singapore.jpg": singaporeImg,
  "meghalaya_new.jpg": meghalayaImg
};

const DestinationDetail = () => {
  const { id } = useParams();
  const { destinations } = useAdmin();
  const destination = destinations.find((d) => d.id === id);

  if (!destination) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Destination Not Found</h1>
          <Button asChild>
            <Link to="/destinations">Back to Destinations</Link>
          </Button>
        </div>
      </div>
    );
  }

  const getImageSrc = (img: string) => {
    return imageMap[img] || img;
  };

  return (
    <div className="min-h-screen pt-20">
      <Helmet>
        <title>{destination.name} Tour Packages | Planet Life</title>
        <meta name="description" content={destination.description.substring(0, 160)} />
        <meta property="og:title" content={`${destination.name} Tour Packages | Planet Life`} />
        <meta property="og:description" content={destination.description.substring(0, 160)} />
        <meta property="og:image" content={getImageSrc(destination.image)} />
      </Helmet>
      {/* Hero Banner */}
      {/* Hero Banner */}
      <section className="relative w-full bg-black flex justify-center items-center overflow-hidden">
        {destination.video ? (
          <video
            className="w-full h-auto max-h-[85vh] object-contain"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src={getImageSrc(destination.video)} type="video/mp4" />
            <img
              src={getImageSrc(destination.image)}
              alt={destination.name}
              className="w-full h-full object-cover"
            />
          </video>
        ) : (
          <div
            className="w-full h-[60vh] bg-cover bg-center"
            style={{ backgroundImage: `url(${getImageSrc(destination.image)})` }}
          />
        )}

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />

        {/* Content */}
        <div className="absolute inset-0 flex items-end z-10">
          <div className="container mx-auto px-4 pb-12">
            <Link to="/destinations" className="inline-flex items-center text-white/90 mb-4 hover:text-white hover:underline transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Destinations
            </Link>
            <div className="flex items-center text-white/90 mb-2">
              <MapPin className="h-5 w-5 mr-2" />
              <span>{destination.country}</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-sans font-extrabold text-white drop-shadow-lg uppercase">
              {destination.name}
            </h1>
          </div>
        </div>
      </section>

      {/* Adventure Picz Carousel */}
      {destination.adventureImages && destination.adventureImages.length > 0 && (
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-sans font-extrabold mb-8 text-center text-black uppercase">Adventure Picz</h2>
            <Carousel
              plugins={[
                Autoplay({
                  delay: 3000,
                }),
              ]}
              className="w-full max-w-4xl mx-auto"
            >
              <CarouselContent>
                {destination.adventureImages.map((img, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                      <Card>
                        <CardContent className="flex aspect-square items-center justify-center p-0 overflow-hidden rounded-lg">
                          <img
                            src={getImageSrc(img)}
                            alt={`Adventure ${index + 1}`}
                            className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                          />
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
        </section>
      )}

      {/* Content */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          {/* Overview */}
          <div className="mb-12">
            <h2 className="text-3xl font-sans font-extrabold mb-4 text-black uppercase">Overview</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {destination.description}
            </p>
          </div>

          {/* Why Visit */}
          <div className="mb-12">
            <h2 className="text-3xl font-sans font-extrabold mb-6 text-black uppercase">Why Visit {destination.name}?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {destination.whyVisit.map((reason, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-50 flex items-center justify-center mt-1">
                    <Check className="h-4 w-4 text-red-600" />
                  </div>
                  <p className="text-muted-foreground">{reason}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Packages */}
          <div>
            <h2 className="text-3xl font-sans font-extrabold mb-6 text-black uppercase">Available Packages</h2>
            <div className="space-y-6">
              {destination.packages.map((pkg) => (
                <Card key={pkg.id} className="overflow-hidden">
                  <CardHeader className="bg-muted">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div>
                        <CardTitle className="text-2xl mb-2 font-extrabold font-sans uppercase">{pkg.duration}</CardTitle>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <span className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            {pkg.nights} Nights / {pkg.days} Days
                          </span>
                        </div>
                      </div>
                      <div className="text-left md:text-right">
                        <p className="text-sm text-black/60 mb-1 font-bold">Starting from</p>
                        <p className="text-4xl font-extrabold text-red-600">
                          ₹{pkg.price.toLocaleString()}
                        </p>
                        <p className="text-sm text-muted-foreground">Per Person</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <Tabs defaultValue="inclusions" className="w-full">
                      <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="inclusions">Inclusions</TabsTrigger>
                        <TabsTrigger value="itinerary">Itinerary</TabsTrigger>
                      </TabsList>

                      <TabsContent value="inclusions" className="mt-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {pkg.inclusions.map((inclusion, index) => (
                            <div key={index} className="flex items-start space-x-2">
                              <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                              <span className="text-muted-foreground">{inclusion}</span>
                            </div>
                          ))}
                        </div>
                      </TabsContent>

                      <TabsContent value="itinerary" className="mt-6">
                        {pkg.itinerary ? (
                          <div className="space-y-6">
                            {pkg.itinerary.map((day) => (
                              <div key={day.day} className="border-l-2 border-primary pl-6 pb-6 relative">
                                <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-red-600 text-black flex items-center justify-center text-sm font-extrabold">
                                  {day.day}
                                </div>
                                <h4 className="text-lg font-semibold mb-1 text-foreground">{day.title}</h4>
                                <p className="text-sm text-muted-foreground mb-3">{day.description}</p>
                                <ul className="space-y-2">
                                  {day.activities.map((activity, index) => (
                                    <li key={index} className="flex items-start text-sm text-muted-foreground">
                                      <span className="text-primary mr-2">•</span>
                                      <span>{activity}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <p className="text-muted-foreground">Detailed itinerary will be shared upon booking.</p>
                        )}
                      </TabsContent>
                    </Tabs>

                    <div className="mt-6 pt-6 border-t border-border flex justify-end">
                      <Button size="lg" asChild className="bg-red-600 hover:bg-black hover:text-white text-white rounded-full px-8 font-bold uppercase transition-all duration-300">
                        <Link to={`/booking/${pkg.id}`}>Get Quote</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          {/* FAQ Section */}
          <div className="mt-16 pt-12 border-t border-border">
            <h2 className="text-3xl font-sans font-extrabold mb-8 text-center text-black uppercase">Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto space-y-4">
              {[
                { q: "How do I book a customized tour?", a: "Simply click on 'Get Quote' and fill in your details. Our travel experts will contact you to design a personalized itinerary based on your preferences." },
                { q: "What is included in the package price?", a: "Standard inclusions typically cover accommodation, breakfast, sightseeing transfers, and expert guide services. Specific inclusions vary by package and are listed in the 'Inclusions' tab." },
                { q: "Can I change the itinerary after booking?", a: "Yes, we pride ourselves on flexibility. You can discuss modifications with your dedicated travel consultant even after the initial booking." },
                { q: "Is travel insurance included?", a: "While not included by default, we highly recommend travel insurance and can assist you in obtaining the best coverage for your trip." }
              ].map((faq, i) => (
                <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                  <h4 className="font-extrabold text-lg mb-2 text-black uppercase">{faq.q}</h4>
                  <p className="text-muted-foreground">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Mobile Button */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-red-600/95 backdrop-blur-lg border-t border-black/10 z-40">
        <Button size="lg" asChild className="w-full bg-black hover:bg-white hover:text-black text-white rounded-full py-6 text-lg font-extrabold shadow-xl uppercase transition-all">
          <Link to={`/booking/${destination.packages[0]?.id}`}>Get Free Quote Now</Link>
        </Button>
      </div>
    </div>
  );
};

export default DestinationDetail;
