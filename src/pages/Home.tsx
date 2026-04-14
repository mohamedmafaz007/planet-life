import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useAdmin } from "@/context/AdminContext";
import { MapPin, Calendar, Users, Star, ArrowRight, Clock, Shield, CheckCircle2 } from "lucide-react";
import heroVideo from "@/assets/hero-video.mp4";
import malaysiaImg from "@/assets/malaysia_new.jpg";
import thailandImg from "@/assets/thailand.jpg";
import baliImg from "@/assets/bali_new.jpg";
import vietnamImg from "@/assets/vietnam_new.jpg";
import dubaiImg from "@/assets/dubai.jpg";
import singaporeImg from "@/assets/singapore.jpg";
import meghalayaImg from "@/assets/meghalaya_new.jpg";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Helmet } from "react-helmet-async";
import { Skeleton } from "@/components/ui/skeleton";
import { useState, useEffect } from "react";
// newly added imports
import { useToast } from "@/hooks/use-toast";
import { Label } from "@/components/ui/label";

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
  const { destinations } = useAdmin();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(true);
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
      destination: "",
      travelMonth: "",
      duration: "",
      numPersons: "",
      name: "",
      email: "",
      whatsapp: "",
      language: ""
  });

  const featuredDestinations = destinations.filter((d) => d.featured);

  const getImageSrc = (img: string) => {
    return imageMap[img] || img;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
      setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleNext = () => {
      if (!formData.destination || !formData.travelMonth || !formData.duration || !formData.numPersons) {
          toast({
              title: "Missing Fields",
              description: "Please fill in all fields to proceed.",
              variant: "destructive"
          });
          return;
      }
      setStep(2);
  };

  const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      if (!formData.name || !formData.email || !formData.whatsapp || !formData.language) {
          toast({
              title: "Missing Fields",
              description: "Please fill in all fields to submit.",
              variant: "destructive"
          });
          return;
      }

      setIsSubmitting(true);
      await new Promise(resolve => setTimeout(resolve, 1500));

      toast({
          title: "Quote Request Sent!",
          description: "Our experts will contact you shortly.",
      });
      setIsSubmitting(false);
      setStep(1);
      setFormData({
          destination: "",
          travelMonth: "",
          duration: "",
          numPersons: "",
          name: "",
          email: "",
          whatsapp: "",
          language: ""
      });
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Planet Life | Customized International Adventures</title>
        <meta name="description" content="Experience the epitome of luxury and adventure with our customized international journeys. Let our experts plan your perfect trip." />
        <meta property="og:title" content="Planet Life | Customized International Adventures" />
        <meta property="og:description" content="Experience the epitome of luxury and adventure with our customized international journeys." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      {/* Hero Section */}
      <section className="relative min-h-screen w-full overflow-hidden flex flex-col">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/src/assets/hero-bg.jpg"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-a-tropical-island-with-white-sand-4127-large.mp4" type="video/mp4" />
          <source src={heroVideo} type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative container mx-auto px-4 flex-grow flex flex-col md:flex-row items-center justify-between pt-32 pb-20">
          {/* Left Content */}
          <div className="text-white max-w-3xl mb-12 md:mb-0 z-10">
            <ScrollReveal>
              <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight drop-shadow-lg">
                Customized International Adventures.
              </h1>
              <p className="text-xl md:text-2xl mb-10 text-white/90 font-light max-w-2xl drop-shadow-md">
                Experience the epitome of luxury and adventure with our customized international journeys. Let our experts plan your perfect trip.
              </p>
              <Button size="lg" className="bg-[#d4af37] hover:bg-[#b8962e] text-white rounded-full px-10 py-7 text-lg shadow-xl transition-all hover:scale-105">
                Explore Packages <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </ScrollReveal>
          </div>

          {/* Right Booking Card */}
          <div className="w-full md:w-[420px] bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:mr-4 relative z-10 border border-white/20">
            <div className="text-center mb-8">
              <h3 className="font-serif text-[#022c22] text-xl italic mb-2">Your Perfect Holiday Awaits!</h3>
              <h2 className="text-2xl font-bold text-gray-900">Get Your Custom Quote</h2>
            </div>

            {step === 1 ? (
              <div className="space-y-4">
                <div className="space-y-1">
                  <Label className="text-[#d4af37] font-semibold flex items-center gap-2">
                    <MapPin className="w-4 h-4" /> Destination
                  </Label>
                  <Select value={formData.destination} onValueChange={(v) => handleSelectChange("destination", v)}>
                    <SelectTrigger className="bg-gray-50 border-gray-200 text-gray-900">
                      <SelectValue placeholder="Select Destination" />
                    </SelectTrigger>
                    <SelectContent className="bg-white text-gray-900">
                      {destinations.map(d => (
                        <SelectItem key={d.id} value={d.name}>{d.name}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-1">
                  <Label className="text-[#d4af37] font-semibold flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4" /> Travel Month
                  </Label>
                  <Select value={formData.travelMonth} onValueChange={(v) => handleSelectChange("travelMonth", v)}>
                    <SelectTrigger className="bg-gray-50 border-gray-200 text-gray-900">
                      <SelectValue placeholder="Select Month" />
                    </SelectTrigger>
                    <SelectContent className="bg-white text-gray-900">
                      {["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"].map(m => (
                        <SelectItem key={m} value={m}>{m}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <Label className="text-[#d4af37] font-semibold flex items-center gap-2">
                      <Clock className="w-4 h-4" /> Duration
                    </Label>
                    <Select value={formData.duration} onValueChange={(v) => handleSelectChange("duration", v)}>
                      <SelectTrigger className="bg-gray-50 border-gray-200 text-gray-900">
                        <SelectValue placeholder="Duration" />
                      </SelectTrigger>
                      <SelectContent className="bg-white text-gray-900">
                        <SelectItem value="3-5">3-5 Days</SelectItem>
                        <SelectItem value="5-7">5-7 Days</SelectItem>
                        <SelectItem value="7-10">7-10 Days</SelectItem>
                        <SelectItem value="10+">10+ Days</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-1">
                    <Label className="text-[#d4af37] font-semibold flex items-center gap-2">
                      <Users className="w-4 h-4" /> Persons
                    </Label>
                    <Select value={formData.numPersons} onValueChange={(v) => handleSelectChange("numPersons", v)}>
                      <SelectTrigger className="bg-gray-50 border-gray-200 text-gray-900">
                        <SelectValue placeholder="Persons" />
                      </SelectTrigger>
                      <SelectContent className="bg-white text-gray-900">
                        <SelectItem value="solo">Solo</SelectItem>
                        <SelectItem value="couple">Couple</SelectItem>
                        <SelectItem value="family-3">Family (3)</SelectItem>
                        <SelectItem value="family-4">Family (4+)</SelectItem>
                        <SelectItem value="group">Group</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Button
                  onClick={handleNext}
                  className="w-full bg-[#d4af37] hover:bg-[#b8962e] text-white font-bold py-6 rounded-xl mt-4"
                >
                  Next
                </Button>
                
                <div className="flex justify-center gap-2 mt-4">
                    <div className="w-8 h-1.5 rounded-full bg-[#d4af37]"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="space-y-1">
                  <Label className="text-[#d4af37] font-semibold">Name</Label>
                  <Input
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="bg-gray-50 border-gray-200 text-gray-900"
                  />
                </div>

                <div className="space-y-1">
                  <Label className="text-[#d4af37] font-semibold">Email</Label>
                  <Input
                    name="email"
                    type="email"
                    placeholder="youremail@gmail.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="bg-gray-50 border-gray-200 text-gray-900"
                  />
                </div>

                <div className="space-y-1">
                  <Label className="text-[#d4af37] font-semibold">Whatsapp</Label>
                  <div className="flex">
                    <div className="bg-gray-100 border border-r-0 border-gray-200 rounded-l-md px-3 flex items-center text-gray-500 text-sm">
                      🇮🇳 +91
                    </div>
                    <Input
                      name="whatsapp"
                      placeholder="9876543210"
                      value={formData.whatsapp}
                      onChange={handleInputChange}
                      className="bg-gray-50 border-gray-200 rounded-l-none text-gray-900"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <Label className="text-[#d4af37] font-semibold">Select Language</Label>
                  <Select value={formData.language} onValueChange={(v) => handleSelectChange("language", v)}>
                    <SelectTrigger className="bg-gray-50 border-gray-200 text-gray-900">
                      <SelectValue placeholder="Language" />
                    </SelectTrigger>
                    <SelectContent className="bg-white text-gray-900">
                      <SelectItem value="english">English</SelectItem>
                      <SelectItem value="hindi">Hindi</SelectItem>
                      <SelectItem value="tamil">Tamil</SelectItem>
                      <SelectItem value="malayalam">Malayalam</SelectItem>
                      <SelectItem value="kannada">Kannada</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="w-full bg-[#d4af37] hover:bg-[#b8962e] text-white font-bold py-6 rounded-xl mt-4"
                >
                  {isSubmitting ? "Submitting..." : "Submit >"}
                </Button>

                <div className="flex justify-center gap-2 mt-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
                  <div className="w-8 h-1.5 rounded-full bg-[#d4af37]"></div>
                </div>

                <Button variant="link" onClick={() => setStep(1)} className="w-full text-sm text-gray-400">
                  Back to previous step
                </Button>
              </div>
            )}
          </div>
        </div>

        {/* Stats Bar - Positioned relatively at bottom on mobile, absolute on desktop */}
        <div className="relative md:absolute bottom-0 left-0 right-0 z-20 bg-[#022c22]/95 backdrop-blur text-white py-6 border-t border-white/10">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center md:justify-between items-center gap-6 md:gap-0 text-center md:text-left">

              <div className="flex items-center gap-3 min-w-[200px] justify-center md:justify-start">
                <div className="bg-white/10 p-3 rounded-full">
                  <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                </div>
                <div>
                  <p className="font-bold text-lg">4.9/5 Ratings</p>
                  <p className="text-xs text-white/70">On Google Reviews</p>
                </div>
              </div>

              <div className="hidden md:block h-10 w-px bg-white/20" />

              <div className="flex items-center gap-3 min-w-[200px] justify-center md:justify-start">
                <div className="bg-white/10 p-3 rounded-full">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-bold text-lg">24/7 Support</p>
                  <p className="text-xs text-white/70">Trip Assistance</p>
                </div>
              </div>

              <div className="hidden md:block h-10 w-px bg-white/20" />

              <div className="flex items-center gap-3 min-w-[200px] justify-center md:justify-start">
                <div className="bg-white/10 p-3 rounded-full">
                  <Shield className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-bold text-lg">100% Secure</p>
                  <p className="text-xs text-white/70">Payment Protection</p>
                </div>
              </div>

              <div className="hidden md:block h-10 w-px bg-white/20" />

              <div className="flex items-center gap-3 min-w-[200px] justify-center md:justify-start">
                <div className="bg-white/10 p-3 rounded-full">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-bold text-lg">Customized</p>
                  <p className="text-xs text-white/70">Tailor-made Trips</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#022c22] mb-6">
              Trending Destinations
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Explore our most popular international destinations, handpicked for your perfect vacation.
            </p>
            <div className="w-24 h-1.5 bg-[#d4af37] mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {isLoading ? (
              Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="h-[450px] rounded-[2rem] overflow-hidden bg-white p-4 space-y-4">
                  <Skeleton className="w-full h-2/3 rounded-2xl" />
                  <Skeleton className="w-3/4 h-8" />
                  <Skeleton className="w-1/2 h-6" />
                  <div className="flex justify-between items-center pt-4">
                    <Skeleton className="w-24 h-10" />
                    <Skeleton className="w-12 h-12 rounded-full" />
                  </div>
                </div>
              ))
            ) : (
              featuredDestinations.map((destination, index) => (
                <ScrollReveal key={destination.id} delay={index * 0.1}>
                  <Link to={`/destination/${destination.id}`} className="group block h-full">
                    <div className="relative h-[450px] rounded-[2rem] overflow-hidden shadow-lg transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2 bg-white">
                      <img
                        src={getImageSrc(destination.image)}
                        alt={destination.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#022c22]/90 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                      {/* Content */}
                      <div className="absolute bottom-0 left-0 right-0 p-8 text-white transform transition-transform duration-300 translate-y-2 group-hover:translate-y-0">
                        <div className="flex justify-between items-end mb-2">
                          <h3 className="text-3xl font-serif font-bold mb-1">{destination.name}</h3>
                          <div className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-sm font-medium mb-2">
                            {destination.packages.length} Packages
                          </div>
                        </div>

                        <div className="flex items-center gap-2 text-white/80 mb-4 text-sm">
                          <MapPin className="w-4 h-4" />
                          <span>{destination.country}</span>
                        </div>

                        <div className="border-t border-white/20 pt-4 mt-2 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                          <div>
                            <p className="text-xs text-white/70 uppercase tracking-wider">Starting From</p>
                            <p className="text-xl font-bold text-[#d4af37]">₹{destination.packages[0]?.price.toLocaleString()}</p>
                          </div>
                          <span className="bg-white text-[#022c22] p-3 rounded-full hover:bg-[#d4af37] hover:text-white transition-colors">
                            <ArrowRight className="w-5 h-5" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </ScrollReveal>
              ))
            )}
          </div>

          <div className="text-center mt-16">
            <Button asChild variant="outline" size="lg" className="border-[#022c22] text-[#022c22] hover:bg-[#022c22] hover:text-white rounded-full px-10 py-6 text-lg font-semibold transition-all">
              <Link to="/destinations">View All Destinations</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#022c22] mb-8">
            Happy Customers, Happy Stories
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
            Join thousands of satisfied travelers who have explored the world with us.
          </p>
          <Button variant="outline" size="lg" className="border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-white rounded-full px-8">
            View Instagram Stories
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
