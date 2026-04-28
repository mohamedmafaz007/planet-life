import { useParams, Link, useSearchParams } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
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
import malaysiaImg from "@/assets/malaysia_main_new.jpg";
import malaysiaVideo from "@/assets/malaysia_video_final.mp4";
import malAdv1 from "@/assets/mal_adv_1.jpg";
import malAdv2 from "@/assets/mal_adv_2.jpg";
import malAdv3 from "@/assets/mal_adv_3.jpg";
import malAdv4 from "@/assets/mal_adv_4.jpg";
import malAdv5 from "@/assets/mal_adv_5.jpg";
import thailandImg from "@/assets/thailand_new.jpg";
import thailandVideo from "@/assets/thailand_video.mp4";
import thailandAdv1 from "@/assets/thailand_adv_1.jpg";
import thailandAdv2 from "@/assets/thailand_adv_2.jpg";
import thailandAdv3 from "@/assets/thailand_adv_3.jpg";
import thailandAdv4 from "@/assets/thailand_adv_4.jpg";
import thailandAdv5 from "@/assets/thailand_adv_5.jpg";
import baliImg from "@/assets/bali_main_new.jpg";
import baliVideo from "@/assets/bali_video_final.mp4";
import baliAdv1 from "@/assets/bali_adv_1.jpg";
import baliAdv2 from "@/assets/bali_adv_2.jpg";
import baliAdv3 from "@/assets/bali_adv_3.jpg";
import baliAdv4 from "@/assets/bali_adv_4.jpg";
import srilankaImg from "@/assets/srilanka_main.jpg";
import srilankaVideo from "@/assets/srilanka_video.mp4";
import slAdv1 from "@/assets/sl_adv_1.jpg";
import slAdv2 from "@/assets/sl_adv_2.jpg";
import slAdv3 from "@/assets/sl_adv_3.jpg";
import slAdv4 from "@/assets/sl_adv_4.jpg";
import vietnamImg from "@/assets/vietnam/vietnam_main.jpg";
import vietnamVideo from "@/assets/vietnam/vietnam_video.mp4";
import vietAdv1 from "@/assets/vietnam/viet_adv_1.jpg";
import vietAdv2 from "@/assets/vietnam/viet_adv_2.jpg";
import vietAdv3 from "@/assets/vietnam/viet_adv_3.jpg";
import vietAdv4 from "@/assets/vietnam/viet_adv_4.jpg";
import dubaiImg from "@/assets/dubai_new.jpg";
import dubaiVideoNew from "@/assets/dubai_video_new.mp4";
import dubaiAdv1 from "@/assets/dubai_adv_1.jpg";
import dubaiAdv2 from "@/assets/dubai_adv_2.jpg";
import dubaiAdv3 from "@/assets/dubai_adv_3.jpg";
import dubaiAdv4 from "@/assets/dubai_adv_4.jpg";
import dubaiAdv5 from "@/assets/dubai_adv_5.jpg";
import maldivesImg from "@/assets/maldives_main_new.jpg";
import maldivesVideo from "@/assets/maldives_video_final.mp4";
import maldAdv1 from "@/assets/mald_adv_1.jpg";
import maldAdv2 from "@/assets/mald_adv_2.jpg";
import maldAdv3 from "@/assets/mald_adv_3.jpg";
import maldAdv4 from "@/assets/mald_adv_4.jpg";
import singaporeImg from "@/assets/singapore_main_new.jpg";
import singaporeVideo from "@/assets/singapore_video_new.mp4";
import singAdv1 from "@/assets/sing_adv_1.jpg";
import singAdv2 from "@/assets/sing_adv_2.jpg";
import singAdv3 from "@/assets/sing_adv_3.jpg";
import singAdv4 from "@/assets/sing_adv_4.jpg";
import singAdv5 from "@/assets/sing_adv_5.jpg";
import keralaImg from "@/assets/kerala/kerala_main.jpg";
import keralaVideo from "@/assets/kerala/kerala_video.mp4";
import keralaAdv1 from "@/assets/kerala/kerala_adv_1.jpg";
import keralaAdv2 from "@/assets/kerala/kerala_adv_2.jpg";
import keralaAdv3 from "@/assets/kerala/kerala_adv_3.jpg";
import keralaAdv4 from "@/assets/kerala/kerala_adv_4.jpg";
import keralaAdv5 from "@/assets/kerala/kerala_adv_5.jpg";
import keralaAdv6 from "@/assets/kerala/kerala_adv_6.jpg";
// Removed direct imports of Andaman assets to troubleshoot

const imageMap: Record<string, string> = {
  "malaysia_main_new.jpg": malaysiaImg,
  "malaysia_video_final.mp4": malaysiaVideo,
  "mal_adv_1.jpg": malAdv1,
  "mal_adv_2.jpg": malAdv2,
  "mal_adv_3.jpg": malAdv3,
  "mal_adv_4.jpg": malAdv4,
  "mal_adv_5.jpg": malAdv5,
  "thailand_new.jpg": thailandImg,
  "thailand_video.mp4": thailandVideo,
  "thailand_adv_1.jpg": thailandAdv1,
  "thailand_adv_2.jpg": thailandAdv2,
  "thailand_adv_3.jpg": thailandAdv3,
  "thailand_adv_4.jpg": thailandAdv4,
  "thailand_adv_5.jpg": thailandAdv5,
  "bali_main_new.jpg": baliImg,
  "bali_video_final.mp4": baliVideo,
  "bali_adv_1.jpg": baliAdv1,
  "bali_adv_2.jpg": baliAdv2,
  "bali_adv_3.jpg": baliAdv3,
  "bali_adv_4.jpg": baliAdv4,
  "srilanka_main.jpg": srilankaImg,
  "srilanka_video.mp4": srilankaVideo,
  "sl_adv_1.jpg": slAdv1,
  "sl_adv_2.jpg": slAdv2,
  "sl_adv_3.jpg": slAdv3,
  "sl_adv_4.jpg": slAdv4,
  "vietnam_main.jpg": vietnamImg,
  "vietnam_video.mp4": vietnamVideo,
  "viet_adv_1.jpg": vietAdv1,
  "viet_adv_2.jpg": vietAdv2,
  "viet_adv_3.jpg": vietAdv3,
  "viet_adv_4.jpg": vietAdv4,
  "dubai_new.jpg": dubaiImg,
  "dubai_video_new.mp4": dubaiVideoNew,
  "dubai_adv_1.jpg": dubaiAdv1,
  "dubai_adv_2.jpg": dubaiAdv2,
  "dubai_adv_3.jpg": dubaiAdv3,
  "dubai_adv_4.jpg": dubaiAdv4,
  "dubai_adv_5.jpg": dubaiAdv5,
  "maldives_main_new.jpg": maldivesImg,
  "maldives_video_final.mp4": maldivesVideo,
  "mald_adv_1.jpg": maldAdv1,
  "mald_adv_2.jpg": maldAdv2,
  "mald_adv_3.jpg": maldAdv3,
  "mald_adv_4.jpg": maldAdv4,
  "singapore_main_new.jpg": singaporeImg,
  "singapore_video_new.mp4": singaporeVideo,
  "sing_adv_1.jpg": singAdv1,
  "sing_adv_2.jpg": singAdv2,
  "sing_adv_3.jpg": singAdv3,
  "sing_adv_4.jpg": singAdv4,
  "sing_adv_5.jpg": singAdv5,
  "kerala_main.jpg": keralaImg,
  "kerala_video.mp4": keralaVideo,
  "kerala_adv_1.jpg": keralaAdv1,
  "kerala_adv_2.jpg": keralaAdv2,
  "kerala_adv_3.jpg": keralaAdv3,
  "kerala_adv_4.jpg": keralaAdv4,
  "kerala_adv_5.jpg": keralaAdv5,
  "kerala_adv_6.jpg": keralaAdv6,
  "andaman_main.jpg": "/src/assets/andaman/andaman_main.jpg",
  "andaman_video.mp4": "/src/assets/andaman/andaman_video.mp4",
  "andaman_adv_1.jpg": "/src/assets/andaman/andaman_adv_1.jpg",
  "andaman_adv_2.jpg": "/src/assets/andaman/andaman_adv_2.jpg",
  "andaman_adv_3.jpg": "/src/assets/andaman/andaman_adv_3.jpg",
  "andaman_adv_4.jpg": "/src/assets/andaman/andaman_adv_4.jpg",
  "andaman_adv_5.jpg": "/src/assets/andaman/andaman_adv_5.jpg",
  "himachal_main.webp": "/src/assets/himachal/himachal_main.webp",
  "himachal_video.mp4": "/src/assets/himachal/himachal_video.mp4",
  "him_adv_1.jpg": "/src/assets/himachal/him_adv_1.jpg",
  "him_adv_2.jpg": "/src/assets/himachal/him_adv_2.jpg",
  "him_adv_3.jpg": "/src/assets/himachal/him_adv_3.jpg",
  "him_adv_4.jpg": "/src/assets/himachal/him_adv_4.jpg",
  "him_adv_5.jpg": "/src/assets/himachal/him_adv_5.jpg",
  "kashmir_main.jpg": "/src/assets/kashmir/kashmir_main.jpg",
  "kashmir_video.mp4": "/src/assets/kashmir/kashmir_video.mp4",
  "kas_adv_1.jpg": "/src/assets/kashmir/kas_adv_1.jpg",
  "kas_adv_2.jpg": "/src/assets/kashmir/kas_adv_2.jpg",
  "kas_adv_3.jpg": "/src/assets/kashmir/kas_adv_3.jpg",
  "kas_adv_4.jpg": "/src/assets/kashmir/kas_adv_4.jpg",
  "kas_adv_5.jpg": "/src/assets/kashmir/kas_adv_5.jpg",
  "kas_adv_6.jpg": "/src/assets/kashmir/kas_adv_6.jpg",
  "goa_main.jpg": "/src/assets/goa/goa_main.jpg",
  "goa_video.mp4": "/src/assets/goa/goa_video.mp4",
  "goa_adv_1.jpg": "/src/assets/goa/goa_adv_1.jpg",
  "goa_adv_2.jpg": "/src/assets/goa/goa_adv_2.jpg",
  "goa_adv_3.jpg": "/src/assets/goa/goa_adv_3.jpg",
  "goa_adv_4.jpg": "/src/assets/goa/goa_adv_4.jpg",
  "kar_main.jpg": "/src/assets/karnataka/kar_main.jpg",
  "kar_video.mp4": "/src/assets/karnataka/kar_video.mp4",
  "kar_adv_1.jpg": "/src/assets/karnataka/kar_adv_1.jpg",
  "kar_adv_2.jpg": "/src/assets/karnataka/kar_adv_2.jpg",
  "kar_adv_3.jpg": "/src/assets/karnataka/kar_adv_3.jpg",
  "kar_adv_4.jpg": "/src/assets/karnataka/kar_adv_4.jpg",
  "kar_adv_5.jpg": "/src/assets/karnataka/kar_adv_5.jpg",
  "kar_adv_6.jpg": "/src/assets/karnataka/kar_adv_6.jpg",
  "malaysia_new_front.jpg": "/src/assets/malaysia_new_front.jpg",
};

const DestinationDetail = () => {
  const { id } = useParams();
  const { destinations } = useAdmin();
  const destination = destinations.find((d) => d.id === id);
  const [searchParams] = useSearchParams();
  const pkgParam = searchParams.get("pkg");
  const packagesRef = useRef<HTMLDivElement>(null);

  const [selectedPkgId, setSelectedPkgId] = useState<string | null>(pkgParam);

  useEffect(() => {
    // Reset selected package when switching destinations
    setSelectedPkgId(pkgParam);
    
    if (pkgParam) {
      // Scroll to packages section if a package is pre-selected
      setTimeout(() => {
        packagesRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 500);
    } else {
      // Otherwise scroll to top when destination changes
      window.scrollTo(0, 0);
    }
  }, [pkgParam, id]);

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

  // For destinations with multiple packages, pick the selected one or default to first
  const activePkg = destination
    ? selectedPkgId
      ? destination.packages.find((p) => p.id === selectedPkgId) ?? destination.packages[0]
      : destination.packages[0]
    : null;

  if (!activePkg) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">No Packages Available</h1>
          <Button asChild>
            <Link to="/destinations">Back to Destinations</Link>
          </Button>
        </div>
      </div>
    );
  }

  const safeDescription = destination.description || "";

  return (
    <div className="min-h-screen" key={id}>
      <Helmet>
        <title>{destination.name} Tour Packages | Planet Life</title>
        <meta name="description" content={safeDescription.substring(0, 160)} />
        <meta property="og:title" content={`${destination.name} Tour Packages | Planet Life`} />
        <meta property="og:description" content={safeDescription.substring(0, 160)} />
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
            preload="none"
            poster={getImageSrc(destination.image)}
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
          <div className="container mx-auto px-3 mobile:px-4 pb-8 mobile:pb-12">
            <Link to="/destinations" className="inline-flex items-center text-white/90 mb-4 hover:text-white hover:underline transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Destinations
            </Link>
            <div className="flex items-center text-white/90 mb-2">
              <MapPin className="h-5 w-5 mr-2" />
              <span>{destination.country}</span>
            </div>
            <h1 className="text-3xl xs:text-4xl mobile:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-bold text-white drop-shadow-2xl uppercase tracking-tighter leading-[0.85]">
              {destination.name}
            </h1>
          </div>
        </div>
      </section>

      {/* Adventure Picz Carousel */}
      {destination.adventureImages && destination.adventureImages.length > 0 && (
        <section className="py-10 mobile:py-14 md:py-20 bg-white">
          <div className="container mx-auto px-3 mobile:px-4">
            <span className="text-primary font-bold tracking-[0.2em] mobile:tracking-[0.3em] uppercase text-[10px] mobile:text-xs mb-3 mobile:mb-4 block text-center">Visual Highlights</span>
            <h2 className="text-2xl xs:text-3xl mobile:text-4xl md:text-5xl font-heading font-bold mb-6 mobile:mb-8 md:mb-12 text-center text-foreground uppercase tracking-tight">Adventure Picz</h2>
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
                  <CarouselItem key={index} className="basis-full mobile:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                      <Card>
                        <CardContent className="flex aspect-square items-center justify-center p-0 overflow-hidden rounded-lg">
                          <img
                            src={getImageSrc(img)}
                            alt={`Adventure ${index + 1}`}
                            loading="lazy"
                            decoding="async"
                            className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                          />
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden sm:flex" />
              <CarouselNext className="hidden sm:flex" />
            </Carousel>
          </div>
        </section>
      )}

      {/* Content */}
      <section className="py-8 mobile:py-10 md:py-12 bg-background">
        <div className="container mx-auto px-3 mobile:px-4">
          {/* Overview */}
          <div className="mb-16">
            <h2 className="text-xl mobile:text-2xl md:text-3xl font-heading font-bold mb-4 mobile:mb-6 text-foreground uppercase tracking-tight">Overview</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {destination.description}
            </p>
          </div>

          {/* Why Visit */}
          <div className="mb-16">
            <h2 className="text-xl mobile:text-2xl md:text-3xl font-heading font-bold mb-4 mobile:mb-6 md:mb-8 text-foreground uppercase tracking-tight">Why Visit {destination.name}?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {destination.whyVisit.map((reason, index) => (
                <div key={index} className="flex items-start space-x-3 mobile:space-x-4 bg-muted/30 p-4 mobile:p-5 md:p-6 rounded-xl mobile:rounded-2xl border border-border/50">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <p className="text-foreground/80 font-medium leading-relaxed">{reason}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Packages */}
          <div ref={packagesRef}>
            <h2 className="text-xl mobile:text-2xl md:text-3xl font-heading font-bold mb-3 mobile:mb-4 text-foreground uppercase tracking-tight">Available Packages</h2>

            {/* Package Selector — shown only when there are multiple packages */}
            {destination.packages.length > 1 && (
              <div className="flex flex-wrap gap-2 mobile:gap-3 mb-6 mobile:mb-8 md:mb-10">
                {destination.packages.map((pkg) => (
                  <button
                    key={pkg.id}
                    onClick={() => setSelectedPkgId(pkg.id)}
                    className={`px-4 mobile:px-5 md:px-6 py-2 mobile:py-2.5 md:py-3 rounded-full font-bold uppercase tracking-wider md:tracking-widest text-[10px] mobile:text-xs transition-all duration-300 border-2 ${
                      activePkg.id === pkg.id
                        ? "bg-primary text-white border-primary shadow-xl scale-105"
                        : "bg-white text-foreground border-border hover:border-primary hover:text-primary"
                    }`}
                  >
                    {pkg.duration}
                  </button>
                ))}
              </div>
            )}

            {/* Active Package Card */}
            <Card className="overflow-hidden border-none shadow-2xl shadow-black/5">
              <CardHeader className="bg-muted py-4 mobile:py-6 md:py-8 px-4 mobile:px-6 md:px-8">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                  <div>
                    <CardTitle className="text-xl mobile:text-2xl md:text-3xl mb-2 mobile:mb-3 font-bold font-heading uppercase tracking-tight">{activePkg.duration}</CardTitle>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground font-medium">
                      <span className="flex items-center bg-white/50 px-3 py-1 rounded-full border border-black/5">
                        <Calendar className="h-4 w-4 mr-2 text-primary" />
                        {activePkg.nights} Nights / {activePkg.days} Days
                      </span>
                    </div>
                  </div>
                  <div className="text-left lg:text-right bg-white p-4 mobile:p-5 md:p-6 rounded-xl mobile:rounded-2xl shadow-sm border border-black/5">
                    <p className="text-xs text-muted-foreground mb-1 font-bold uppercase tracking-widest leading-relaxed">Starting from</p>
                    <p className="text-2xl mobile:text-3xl md:text-4xl font-bold text-primary font-heading">
                      ₹{activePkg.price.toLocaleString()}
                    </p>
                    <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-tighter mt-1">Per Person</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-3 mobile:p-4 md:p-6">
                <Tabs defaultValue="itinerary" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="itinerary">Itinerary</TabsTrigger>
                    <TabsTrigger value="inclusions">Inclusions</TabsTrigger>
                  </TabsList>

                  <TabsContent value="itinerary" className="mt-6">
                    {activePkg.itinerary ? (
                      <div className="space-y-6">
                        {activePkg.itinerary.map((day) => (
                          <div key={day.day} className="border-l-2 border-primary pl-6 mobile:pl-8 md:pl-12 pb-6 mobile:pb-8 md:pb-10 relative">
                            <div className="absolute -left-5 mobile:-left-6 md:-left-7 top-0 w-10 mobile:w-12 md:w-14 h-6 mobile:h-7 rounded-full bg-primary text-white flex items-center justify-center text-[8px] mobile:text-[9px] md:text-[10px] font-black uppercase tracking-tighter shadow-lg shadow-primary/20">
                              Day {day.day}
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

                  <TabsContent value="inclusions" className="mt-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {activePkg.inclusions.map((inclusion, index) => (
                        <div key={index} className="flex items-start space-x-2">
                          <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{inclusion}</span>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                </Tabs>

                <div className="mt-6 mobile:mt-8 md:mt-10 pt-4 mobile:pt-6 md:pt-8 border-t border-border flex justify-center mobile:justify-end">
                  <Button size="lg" asChild className="w-full mobile:w-auto bg-primary hover:bg-foreground text-white rounded-full px-8 mobile:px-10 md:px-12 py-5 mobile:py-6 md:py-7 font-bold uppercase transition-all duration-300 shadow-xl hover:scale-105 tracking-wider md:tracking-widest text-[10px] mobile:text-xs">
                    <Link to={`/booking/${activePkg.id}`}>Get Free Quote</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
          {/* FAQ Section */}
          <div className="mt-12 mobile:mt-16 md:mt-20 pt-8 mobile:pt-12 md:pt-16 border-t border-border">
            <span className="text-primary font-bold tracking-[0.2em] mobile:tracking-[0.3em] uppercase text-[10px] mobile:text-xs mb-3 mobile:mb-4 block text-center">Common Queries</span>
            <h2 className="text-2xl xs:text-3xl mobile:text-4xl md:text-5xl font-heading font-bold mb-6 mobile:mb-8 md:mb-12 text-center text-foreground uppercase tracking-tight">Frequently Asked Questions</h2>
            <div className="max-w-4xl mx-auto grid gap-6">
              {[
                { q: "How do I book a customized tour?", a: "Simply click on 'Get Quote' and fill in your details. Our travel experts will contact you to design a personalized itinerary based on your preferences." },
                { q: "What is included in the package price?", a: "Standard inclusions typically cover accommodation, breakfast, sightseeing transfers, and expert guide services. Specific inclusions vary by package and are listed in the 'Inclusions' tab." },
                { q: "Can I change the itinerary after booking?", a: "Yes, we pride ourselves on flexibility. You can discuss modifications with your dedicated travel consultant even after the initial booking." },
                { q: "Is travel insurance included?", a: "While not included by default, we highly recommend travel insurance and can assist you in obtaining the best coverage for your trip." }
              ].map((faq, i) => (
                <div key={i} className="bg-white border border-border rounded-2xl mobile:rounded-3xl p-4 mobile:p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-base mobile:text-lg md:text-xl mb-2 mobile:mb-3 md:mb-4 text-foreground font-heading uppercase tracking-tight">{faq.q}</h4>
                  <p className="text-muted-foreground leading-relaxed font-medium">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Mobile Button */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-background/80 backdrop-blur-xl border-t border-border z-40">
        <Button size="lg" asChild className="w-full bg-primary hover:bg-black text-white rounded-full py-7 text-lg font-bold shadow-[0_8px_30px_rgb(0,0,0,0.12)] uppercase tracking-widest transition-all">
          <Link to={`/booking/${activePkg.id}`}>Get Free Quote Now</Link>
        </Button>
      </div>
    </div>
  );
};

export default DestinationDetail;
