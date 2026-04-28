import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useAdmin } from "@/context/AdminContext";
import { MapPin, Calendar, Users, Star, ArrowRight, Clock, Shield, CheckCircle2 } from "lucide-react";
import heroVideo from "@/assets/hero-video.mp4";
import malaysiaImg from "@/assets/malaysia_main_new.jpg";
import thailandImg from "@/assets/thailand_new.jpg";
import baliImg from "@/assets/bali_main_new.jpg";
import vietnamImg from "@/assets/vietnam/vietnam_main.jpg";
import dubaiImg from "@/assets/dubai_new.jpg";
import singaporeImg from "@/assets/singapore_main_new.jpg";
import maldivesImg from "@/assets/maldives_main_new.jpg";
import srilankaImg from "@/assets/srilanka_main.jpg";
import keralaImg from "@/assets/kerala/kerala_main.jpg";
// Removed direct import of Andaman asset to troubleshoot
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Helmet } from "react-helmet-async";
import { Skeleton } from "@/components/ui/skeleton";
import { useState, useEffect } from "react";
// newly added imports
import { useToast } from "@/hooks/use-toast";
import { Label } from "@/components/ui/label";
import StoryMarquee from "@/components/StoryMarquee";

const imageMap: Record<string, string> = {
  "malaysia_main_new.jpg": malaysiaImg,
  "thailand_new.jpg": thailandImg,
  "bali_main_new.jpg": baliImg,
  "vietnam_main.jpg": vietnamImg,
  "dubai_new.jpg": dubaiImg,
  "singapore_main_new.jpg": singaporeImg,
  "maldives_main_new.jpg": maldivesImg,
  "srilanka_main.jpg": srilankaImg,
  "kerala_main.jpg": keralaImg,
  "andaman_main.jpg": "/src/assets/andaman/andaman_main.jpg",
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
  "sl_adv_2.jpg": "/src/assets/sl_adv_2.jpg",
  "himachal_main.webp": "/src/assets/himachal/himachal_main.webp",
  "kashmir_main.jpg": "/src/assets/kashmir/kashmir_main.jpg",
  "goa_main.jpg": "/src/assets/goa/goa_main.jpg",
  "kar_main.jpg": "/src/assets/karnataka/kar_main.jpg",
  "malaysia_new_front.jpg": "/src/assets/malaysia_new_front.jpg",
};

const Home = () => {
  const { destinations } = useAdmin();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(true);
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [reviewsPaused, setReviewsPaused] = useState(false);

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
      
      // Construct WhatsApp Message
      const message = `*New Quote Request - Planet Life*%0A%0A` +
                      `*Name:* ${formData.name}%0A` +
                      `*WhatsApp:* ${formData.whatsapp}%0A` +
                      `*Email:* ${formData.email}%0A` +
                      `*Destination:* ${formData.destination}%0A` +
                      `*Month:* ${formData.travelMonth}%0A` +
                      `*Duration:* ${formData.duration}%0A` +
                      `*Persons:* ${formData.numPersons}%0A` +
                      `*Preferred Language:* ${formData.language}`;
      
      const whatsappUrl = `https://wa.me/919994553297?text=${message}`;
      
      // Minor delay for feedback
      await new Promise(resolve => setTimeout(resolve, 800));

      toast({
          title: "Redirecting to WhatsApp...",
          description: "Sending your request to our travel experts.",
      });

      // Redirect to WhatsApp
      window.open(whatsappUrl, '_blank');
      
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
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative container mx-auto px-3 mobile:px-4 flex-grow flex flex-col lg:flex-row items-center justify-between pt-20 mobile:pt-24 pb-8 mobile:pb-12 z-10">
          {/* Left Content */}
          <div className="text-white max-w-3xl mb-8 mobile:mb-12 lg:mb-0 z-10">
            <ScrollReveal>
            <h1 className="text-2xl xs:text-3xl mobile:text-4xl sm:text-5xl lg:text-7xl font-heading font-bold mb-3 mobile:mb-4 sm:mb-6 leading-[1.1] drop-shadow-2xl text-white uppercase tracking-tight">
                Customized <br className="hidden sm:block" /> International Adventures
              </h1>
              <p className="text-sm mobile:text-base sm:text-lg md:text-xl lg:text-2xl mb-6 mobile:mb-8 sm:mb-10 text-white/90 font-medium max-w-xl drop-shadow-md leading-relaxed">
                Experience the epitome of luxury and adventure with our carefully curated international journeys.
              </p>
              <Button size="lg" className="bg-red-600 hover:bg-black text-white rounded-full px-5 mobile:px-6 sm:px-8 py-4 mobile:py-5 sm:py-6 text-xs mobile:text-sm sm:text-base shadow-xl transition-all hover:scale-105 font-extrabold uppercase mb-6 mobile:mb-8 lg:mb-0">
                Explore Packages <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            </ScrollReveal>
          </div>

          {/* Right Booking Card */}
          <div className="w-full lg:w-[400px] bg-white/95 backdrop-blur-sm rounded-2xl mobile:rounded-3xl shadow-2xl p-4 mobile:p-5 sm:p-6 relative border border-white/20">
            <div className="text-center mb-4 mobile:mb-6 sm:mb-8">
              <h3 className="font-heading font-semibold text-muted-foreground text-[10px] mobile:text-xs sm:text-sm uppercase tracking-[0.15em] mobile:tracking-[0.2em] mb-1 mobile:mb-2">Your Perfect Holiday Awaits!</h3>
              <h2 className="text-lg mobile:text-xl sm:text-2xl font-bold text-foreground font-heading uppercase">Get Your Custom Quote</h2>
            </div>

            {step === 1 ? (
              <div className="space-y-4">
                <div className="space-y-3">
                  <Label className="text-red-600 font-extrabold uppercase text-[10px] flex items-center gap-2">
                    <MapPin className="w-3 h-3" /> Destination
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

                <div className="space-y-3">
                  <Label className="text-red-600 font-extrabold uppercase text-[10px] flex items-center gap-2">
                    <CheckCircle2 className="w-3 h-3" /> Travel Month
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
                  <div className="space-y-3">
                    <Label className="text-red-600 font-extrabold uppercase text-[10px] flex items-center gap-2">
                      <Clock className="w-3 h-3" /> Duration
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

                  <div className="space-y-3">
                    <Label className="text-red-600 font-extrabold uppercase text-[10px] flex items-center gap-2">
                      <Users className="w-3 h-3" /> Persons
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
                  className="w-full bg-red-600 hover:bg-black text-white font-extrabold py-6 rounded-xl mt-6 uppercase transition-all duration-300 shadow-lg"
                >
                  Continue Request
                </Button>
                
                <div className="flex justify-center gap-2 mt-4">
                    <div className="w-8 h-1.5 rounded-full bg-red-600"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label className="text-red-600 font-extrabold uppercase text-xs">Name</Label>
                  <Input
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="bg-gray-50 border-gray-200 text-gray-900"
                  />
                </div>

                <div className="space-y-2">
                  <Label className="text-red-600 font-extrabold uppercase text-xs">Email Address</Label>
                  <Input
                    name="email"
                    type="email"
                    placeholder="youremail@gmail.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="bg-gray-50 border-gray-200 text-gray-900"
                  />
                </div>

                <div className="space-y-2">
                  <Label className="text-red-600 font-extrabold uppercase text-xs">WhatsApp Number</Label>
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

                <div className="space-y-2">
                  <Label className="text-red-600 font-extrabold uppercase text-xs">Select Language</Label>
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
                  className="w-full bg-primary hover:bg-black text-white font-bold py-6 rounded-xl mt-6 uppercase transition-all duration-300 shadow-lg tracking-widest"
                >
                  {isSubmitting ? "Processing..." : "Submit Quote Request"}
                </Button>
 
                <div className="flex justify-center gap-2 mt-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-muted"></div>
                  <div className="w-8 h-1.5 rounded-full bg-primary/40"></div>
                </div>
 
                <Button variant="link" onClick={() => setStep(1)} className="w-full text-sm text-muted-foreground hover:text-foreground">
                  Back to previous step
                </Button>
              </div>
            )}
          </div>
        </div>

        <div className="relative bg-white border-t border-gray-100 shadow-2xl py-4 mobile:py-6 md:py-8 z-20">
          <div className="container mx-auto px-3 mobile:px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mobile:gap-5 md:gap-6">

              <div className="flex items-center gap-2">
                <div className="flex-shrink-0 bg-red-50 p-1.5 rounded-full">
                  <Star className="w-4 h-4 text-red-600 fill-red-600" />
                </div>
                <div className="flex flex-col min-w-0">
                  <p className="font-extrabold text-[10px] mobile:text-xs text-black font-sans uppercase truncate">4.9/5 Ratings</p>
                  <p className="text-[7px] mobile:text-[8px] text-black/50 font-black uppercase tracking-tighter truncate">On Google Reviews</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="flex-shrink-0 bg-red-50 p-1.5 rounded-full">
                  <Clock className="w-4 h-4 text-red-600" />
                </div>
                <div className="flex flex-col min-w-0">
                  <p className="font-extrabold text-[10px] mobile:text-xs text-black font-sans uppercase truncate">24/7 Support</p>
                  <p className="text-[7px] mobile:text-[8px] text-black/50 font-black uppercase tracking-tighter truncate">Trip Assistance</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="flex-shrink-0 bg-red-50 p-1.5 rounded-full">
                  <Shield className="w-4 h-4 text-red-600" />
                </div>
                <div className="flex flex-col min-w-0">
                  <p className="font-extrabold text-[10px] mobile:text-xs text-black font-sans uppercase truncate">100% Secure</p>
                  <p className="text-[7px] mobile:text-[8px] text-black/50 font-black uppercase tracking-tighter truncate">Payment Protection</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="flex-shrink-0 bg-red-50 p-1.5 rounded-full">
                  <CheckCircle2 className="w-4 h-4 text-red-600" />
                </div>
                <div className="flex flex-col min-w-0">
                  <p className="font-extrabold text-[10px] mobile:text-xs text-black font-sans uppercase truncate">Customized</p>
                  <p className="text-[7px] mobile:text-[8px] text-black/50 font-black uppercase tracking-tighter truncate">Tailor-made Trips</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Google Reviews Section */}
      <section className="py-12 mobile:py-16 md:py-24 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-3 mobile:px-4 mb-8 mobile:mb-12 md:mb-16">
          <ScrollReveal width="100%">
             <div className="w-full flex flex-col items-center text-center">
              {/* Rating Badge */}
              <div className="flex items-center gap-2 mobile:gap-3 sm:gap-4 bg-white px-4 mobile:px-6 sm:px-10 py-3 mobile:py-4 sm:py-5 rounded-full shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-black/5 mb-8 mobile:mb-10 md:mb-14 transition-all duration-500 mx-auto group">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <div className="h-6 w-px bg-gray-100 mx-2" />
                <span className="text-foreground font-bold text-sm mobile:text-base sm:text-lg md:text-xl tracking-tight">4.9/5 Rating</span>
              </div>
              
              <h2 className="text-2xl xs:text-3xl mobile:text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-heading font-bold text-foreground mb-6 mobile:mb-8 md:mb-10 uppercase tracking-tighter leading-[0.85] max-w-5xl mx-auto">
                What Our Travelers <br className="hidden sm:block" /> Say on Google
              </h2>
              
              <div className="flex items-center justify-center gap-8 w-full max-w-md mx-auto">
                <div className="h-px flex-grow bg-primary/20" />
                <p className="text-primary font-bold uppercase tracking-[0.4em] text-[11px] whitespace-nowrap">
                  Trusted Excellence
                </p>
                <div className="h-px flex-grow bg-primary/20" />
              </div>
            </div>
          </ScrollReveal>
        </div>

        <div 
          className={`relative space-y-6 cursor-pointer ${reviewsPaused ? 'marquee-paused' : ''}`}
          onClick={() => setReviewsPaused(!reviewsPaused)}
        >
          {/* First Row - Moving Left */}
          <div className="flex animate-marquee whitespace-nowrap gap-6">
            {[
              { name: "Vignesh Kumar", text: "Had an amazing trip to Thailand planned by Planet Life Madurai. Everything was seamless!" },
              { name: "Priyadharshini", text: "Excellent service and professional approach. They customized our Dubai package perfectly." },
              { name: "Mohamed Ibrahim", text: "Superb experience! Our Bali trip was unforgettable. Thank you team!" },
              { name: "Ananya R", text: "Very transparent pricing and great selection of packages. Loved the Vietnam tour." },
              { name: "Sathish Kumar", text: "Best decision for our family trip. Hassle-free experience and top-notch hospitality." },
              { name: "Karthik Raja", text: "Best customized international trips. Their attention to detail is impressive." }
            ].concat([
              { name: "Vignesh Kumar", text: "Had an amazing trip to Thailand planned by Planet Life Madurai. Everything was seamless!" },
              { name: "Priyadharshini", text: "Excellent service and professional approach. They customized our Dubai package perfectly." },
              { name: "Mohamed Ibrahim", text: "Superb experience! Our Bali trip was unforgettable. Thank you team!" },
              { name: "Ananya R", text: "Very transparent pricing and great selection of packages. Loved the Vietnam tour." },
              { name: "Sathish Kumar", text: "Best decision for our family trip. Hassle-free experience and top-notch hospitality." },
              { name: "Karthik Raja", text: "Best customized international trips. Their attention to detail is impressive." }
            ]).map((review, i) => (
              <div key={i} className="inline-block w-[260px] mobile:w-[300px] sm:w-[350px] bg-white p-5 mobile:p-6 sm:p-8 rounded-2xl mobile:rounded-3xl shadow-xl border border-gray-100 flex-shrink-0">
                <div className="flex items-center gap-1 text-yellow-400 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 font-medium mb-6 whitespace-normal line-clamp-3">
                  "{review.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center text-white font-extrabold uppercase">
                    {review.name[0]}
                  </div>
                  <div>
                    <p className="font-extrabold text-black uppercase text-sm">{review.name}</p>
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Google Local Guide</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Second Row - Moving Right */}
          <div className="flex animate-marquee-reverse whitespace-nowrap gap-6">
            {[
              { name: "Arun Prasath", text: "Thailand trip was just amazing. The guidance provided was very professional." },
              { name: "Deepika M", text: "Everything from visa to stay was well managed. Planet Life is the best in Madurai." },
              { name: "Rahul Singh", text: "Had a great time in Singapore. Transparent pricing and no hidden costs." },
              { name: "Meera Krishnan", text: "Highly recommends for international tours. Their team is always available for support." },
              { name: "Suresh Babu", text: "The customized itinerary was perfect. Enjoyed every bit of our holiday." },
              { name: "Swathi", text: "Friendly staff and excellent tour coordination. Truly a stress-free travel experience." }
            ].concat([
              { name: "Arun Prasath", text: "Thailand trip was just amazing. The guidance provided was very professional." },
              { name: "Deepika M", text: "Everything from visa to stay was well managed. Planet Life is the best in Madurai." },
              { name: "Rahul Singh", text: "Had a great time in Singapore. Transparent pricing and no hidden costs." },
              { name: "Meera Krishnan", text: "Highly recommends for international tours. Their team is always available for support." },
              { name: "Suresh Babu", text: "The customized itinerary was perfect. Enjoyed every bit of our holiday." },
              { name: "Swathi", text: "Friendly staff and excellent tour coordination. Truly a stress-free travel experience." }
            ]).map((review, i) => (
              <div key={i} className="inline-block w-[260px] mobile:w-[300px] sm:w-[350px] bg-white p-5 mobile:p-6 sm:p-8 rounded-2xl mobile:rounded-3xl shadow-xl border border-gray-100 flex-shrink-0">
                <div className="flex items-center gap-1 text-yellow-400 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 font-medium mb-6 whitespace-normal line-clamp-3">
                  "{review.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center text-white font-extrabold uppercase">
                    {review.name[0]}
                  </div>
                  <div>
                    <p className="font-extrabold text-black uppercase text-sm">{review.name}</p>
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Google Local Guide</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <a 
            href="https://www.google.com/search?q=planet+life+madurai+reviews" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-black font-extrabold uppercase text-sm hover:text-red-600 transition-colors tracking-widest"
          >
            Read All 500+ Google Reviews <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-12 mobile:py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 mobile:mb-14 md:mb-20 max-w-3xl mx-auto">
            <span className="text-primary font-bold tracking-[0.2em] mobile:tracking-[0.3em] uppercase text-[10px] mobile:text-xs mb-3 mobile:mb-4 block">World-Class Experiences</span>
            <h2 className="text-2xl xs:text-3xl mobile:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-4 mobile:mb-6 uppercase tracking-tight">
              Trending Destinations
            </h2>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              Explore our most popular international destinations, handpicked for your perfect vacation.
            </p>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {isLoading ? (
              Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="h-[300px] mobile:h-[380px] md:h-[450px] rounded-[1.5rem] mobile:rounded-[2rem] overflow-hidden bg-white p-3 mobile:p-4 space-y-3 mobile:space-y-4">
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
              featuredDestinations.slice(0, 6).map((destination, index) => (
                <ScrollReveal key={destination.id} delay={index * 0.1} width="100%" overflow="visible">
                  <Link to={`/destination/${destination.id}`} className="group block h-full">
                    <div className="relative h-[300px] mobile:h-[380px] md:h-[450px] rounded-[1.5rem] mobile:rounded-[2rem] overflow-hidden shadow-lg transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2 bg-white">
                      <img
                        src={getImageSrc(destination.image)}
                        alt={destination.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent duration-500 group-hover:from-red-600/90" />

                      {/* Content */}
                      <div className="absolute bottom-0 left-0 right-0 p-4 mobile:p-6 sm:p-8 text-white transform transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                        <div className="flex justify-between items-end mb-2">
                          <h3 className="text-xl mobile:text-2xl sm:text-3xl font-sans font-extrabold mb-1 text-white uppercase">{destination.name}</h3>
                          <div className="bg-white text-black px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-tighter mb-2 shadow-lg">
                            {destination.packages.length} Packages
                          </div>
                        </div>

                        <div className="flex items-center gap-2 text-white/90 mb-6 font-bold uppercase text-xs tracking-widest">
                          <MapPin className="w-4 h-4 text-red-600" />
                          <span>{destination.country}</span>
                        </div>

                        <div className="border-t border-white/20 pt-6 mt-2 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 transform translate-y-4 group-hover:translate-y-0">
                          <div>
                            <p className="text-[10px] text-white/70 uppercase tracking-[0.2em] font-black mb-1">Starting From</p>
                             <p className="text-2xl font-extrabold text-white">₹{destination.packages[0]?.price.toLocaleString()}</p>
                          </div>
                          <span className="bg-white text-black p-4 rounded-full hover:bg-black hover:text-white transition-all shadow-xl">
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

          <div className="text-center mt-10 mobile:mt-14 md:mt-20">
            <Button asChild size="lg" className="bg-black hover:bg-red-600 text-white rounded-full px-6 mobile:px-8 sm:px-12 py-5 mobile:py-6 sm:py-8 text-sm mobile:text-base sm:text-lg font-extrabold uppercase transition-all duration-300 shadow-2xl tracking-wider sm:tracking-widest">
              <Link to="/destinations">View All Destinations</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Happy Customers Section */}
      <section className="py-12 mobile:py-16 md:py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-3 mobile:px-4 mb-8 mobile:mb-12 md:mb-16">
          <ScrollReveal width="100%">
             <div className="flex flex-col items-center text-center">
               <span className="text-muted-foreground font-bold tracking-[0.2em] mobile:tracking-[0.3em] uppercase text-[10px] mobile:text-xs mb-3 mobile:mb-4 block">Traveler Community</span>
               <h2 className="text-2xl xs:text-3xl mobile:text-4xl md:text-5xl lg:text-7xl font-heading font-bold text-foreground mb-4 mobile:mb-6 md:mb-8 uppercase tracking-tighter">
                Happy Customers, <span className="text-primary italic">Happy Stories</span>
              </h2>
              <p className="text-sm mobile:text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 mobile:mb-12 md:mb-16 font-medium leading-relaxed">
                Join thousands of satisfied travelers who have explored the world with us. <br className="hidden md:block" /> Every picture tells a story of adventure and joy.
              </p>
             </div>
          </ScrollReveal>
        </div>

        <StoryMarquee />

        <div className="container mx-auto px-4 text-center mt-8 mobile:mt-12 md:mt-16">
          <Button size="lg" className="bg-black hover:bg-red-600 text-white rounded-full px-6 mobile:px-8 sm:px-12 py-5 mobile:py-6 sm:py-8 font-extrabold uppercase tracking-wider sm:tracking-widest transition-all duration-300 shadow-2xl hover:scale-105">
            View Instagram Stories
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
