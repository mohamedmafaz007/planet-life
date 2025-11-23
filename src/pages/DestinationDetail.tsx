import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAdmin } from "@/context/AdminContext";
import { ArrowLeft, Calendar, Check, MapPin, Users } from "lucide-react";
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
      {/* Hero Banner */}
      <section className="relative h-[60vh] bg-cover bg-center">
        {destination.video ? (
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src={destination.video} type="video/mp4" />
            <img
              src={getImageSrc(destination.image)}
              alt={destination.name}
              className="w-full h-full object-cover"
            />
          </video>
        ) : (
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${getImageSrc(destination.image)})` }}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/50 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-4 pb-12">
            <Link to="/destinations" className="inline-flex items-center text-primary-foreground mb-4 hover:underline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Destinations
            </Link>
            <div className="flex items-center text-primary-foreground/90 mb-2">
              <MapPin className="h-5 w-5 mr-2" />
              <span>{destination.country}</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-primary-foreground">
              {destination.name}
            </h1>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          {/* Overview */}
          <div className="mb-12">
            <h2 className="text-3xl font-serif font-bold mb-4 text-foreground">Overview</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {destination.description}
            </p>
          </div>

          {/* Why Visit */}
          <div className="mb-12">
            <h2 className="text-3xl font-serif font-bold mb-6 text-foreground">Why Visit {destination.name}?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {destination.whyVisit.map((reason, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <p className="text-muted-foreground">{reason}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Packages */}
          <div>
            <h2 className="text-3xl font-serif font-bold mb-6 text-foreground">Available Packages</h2>
            <div className="space-y-6">
              {destination.packages.map((pkg) => (
                <Card key={pkg.id} className="overflow-hidden">
                  <CardHeader className="bg-muted">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div>
                        <CardTitle className="text-2xl mb-2">{pkg.duration}</CardTitle>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <span className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            {pkg.nights} Nights / {pkg.days} Days
                          </span>
                        </div>
                      </div>
                      <div className="text-left md:text-right">
                        <p className="text-sm text-muted-foreground mb-1">Starting from</p>
                        <p className="text-4xl font-bold text-primary">
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
                                <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
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
                      <Button size="lg" asChild>
                        <Link to={`/booking/${pkg.id}`}>Book This Package</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DestinationDetail;
