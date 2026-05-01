import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useAdmin } from "@/context/AdminContext";
import { ArrowLeft, CheckCircle2, Clock, MapPin, Star, ShieldCheck, Users } from "lucide-react";

import heroVideo from "@/assets/hero-video.mp4";
import malaysiaVideo from "@/assets/malaysia_video.mp4";

const videoMap: Record<string, string> = {
    "hero-video.mp4": heroVideo,
    "malaysia_video.mp4": malaysiaVideo,
};

const Booking = () => {
    const { packageId } = useParams();
    const navigate = useNavigate();
    const { toast } = useToast();
    const { destinations } = useAdmin();

    const [step, setStep] = useState(1);
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
        setStep(1); // Reset to first step if package changes
    }, [packageId]);

    // Form State
    const [formData, setFormData] = useState({
        travelMonth: "",
        duration: "",
        numPersons: "",
        name: "",
        email: "",
        whatsapp: "",
        language: ""
    });

    // Find package and destination
    const found = destinations.flatMap(d => d.packages.map(p => ({ ...p, destinationName: d.name, destinationImage: d.image, destinationId: d.id, video: d.video }))).find(p => p.id === packageId);

    if (!found) {
        return (
            <div className="min-h-screen pt-20 flex items-center justify-center font-sans">
                <div className="text-center">
                    <h1 className="text-4xl font-extrabold mb-4 uppercase">Package Not Found</h1>
                    <Button asChild className="bg-red-600 hover:bg-black text-white px-8 py-6 rounded-full uppercase font-bold tracking-widest transition-all">
                        <Link to="/destinations">Back to Destinations</Link>
                    </Button>
                </div>
            </div>
        );
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSelectChange = (name: string, value: string) => {
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleNext = () => {
        if (!formData.travelMonth || !formData.duration || !formData.numPersons) {
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
        const message = `*Tour Booking Request - Planet Life*%0A%0A` +
                        `*Package:* ${found.title}%0A` +
                        `*Destination:* ${found.destinationName}%0A` +
                        `*Name:* ${formData.name}%0A` +
                        `*WhatsApp:* ${formData.whatsapp}%0A` +
                        `*Email:* ${formData.email}%0A` +
                        `*Month:* ${formData.travelMonth}%0A` +
                        `*Duration:* ${formData.duration}%0A` +
                        `*Persons:* ${formData.numPersons}%0A` +
                        `*Preferred Language:* ${formData.language}`;
        
        const whatsappUrl = `https://wa.me/919994553297?text=${message}`;

        await new Promise(resolve => setTimeout(resolve, 800));

        toast({
            title: "Redirecting to WhatsApp...",
            description: "Finalizing your booking details.",
        });

        window.open(whatsappUrl, '_blank');

        setIsSubmitting(false);
        navigate("/");
    };

    const getVideoSrc = (vid?: string) => {
        if (!vid) return null;
        return videoMap[vid] || vid;
    };

    return (
        <div className="min-h-screen relative overflow-hidden font-sans" key={packageId}>
            {/* Background Media */}
            {found.video ? (
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                >
                    <source src={getVideoSrc(found.video)} type="video/mp4" />
                </video>
            ) : (
                <div
                    className="absolute inset-0 w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${found.destinationImage})` }}
                />
            )}

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />

            <div className="container mx-auto px-3 mobile:px-4 relative z-10 py-8 mobile:py-10 md:py-12 pt-24 mobile:pt-28 md:pt-32">
                <Button variant="ghost" asChild className="mb-6 text-white hover:text-white hover:bg-white/20 uppercase font-black tracking-widest text-xs">
                    <Link to={`/destination/${found.destinationId}`}>
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to Package
                    </Link>
                </Button>

                <div className="text-center mb-8 mobile:mb-12 md:mb-16 text-white max-w-4xl mx-auto">
                    <h1 className="text-2xl xs:text-3xl mobile:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 mobile:mb-6 md:mb-8 uppercase tracking-tighter leading-tight font-heading">
                        {found.title}
                    </h1>
                    <p className="max-w-2xl mx-auto text-white/80 text-sm mobile:text-base md:text-lg lg:text-xl font-medium leading-relaxed">
                        Secure your spot for an unforgettable experience in {found.destinationName}. Custom planning at your fingertips.
                    </p>
                </div>

                <div className="flex flex-col items-center justify-center">
                    {/* Form Card */}
                    <Card className="w-full max-w-md bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border-none p-2">
                        <CardContent className="p-8">
                            <div className="text-center mb-10">
                                <h3 className="font-bold text-primary uppercase text-[10px] tracking-[0.4em] mb-3 font-heading">Secure Your Adventure</h3>
                                <h2 className="text-2xl font-bold text-foreground font-heading uppercase tracking-tight">Confirm Booking</h2>
                            </div>

                            {step === 1 ? (
                                <div className="space-y-6">
                                    <div className="space-y-2">
                                        <Label className="text-red-600 font-extrabold uppercase text-[10px] flex items-center gap-2">
                                            <CheckCircle2 className="w-4 h-4" /> Travel Month
                                        </Label>
                                        <Select value={formData.travelMonth} onValueChange={(v) => handleSelectChange("travelMonth", v)}>
                                            <SelectTrigger className="bg-gray-50 border-gray-100 text-gray-900 h-12 rounded-xl">
                                                <SelectValue placeholder="Select Month" />
                                            </SelectTrigger>
                                            <SelectContent className="bg-white text-gray-900">
                                                {["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"].map(m => (
                                                    <SelectItem key={m} value={m}>{m}</SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    <div className="space-y-2">
                                        <Label className="text-red-600 font-extrabold uppercase text-[10px] flex items-center gap-2">
                                            <Clock className="w-4 h-4" /> Duration
                                        </Label>
                                        <Select value={formData.duration} onValueChange={(v) => handleSelectChange("duration", v)}>
                                            <SelectTrigger className="bg-gray-50 border-gray-100 text-gray-900 h-12 rounded-xl">
                                                <SelectValue placeholder="Select Duration" />
                                            </SelectTrigger>
                                            <SelectContent className="bg-white text-gray-900">
                                                <SelectItem value="3-5">3-5 Days</SelectItem>
                                                <SelectItem value="5-7">5-7 Days</SelectItem>
                                                <SelectItem value="7-10">7-10 Days</SelectItem>
                                                <SelectItem value="10+">10+ Days</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    <div className="space-y-2">
                                        <Label className="text-red-600 font-extrabold uppercase text-[10px] flex items-center gap-2">
                                            <Users className="w-4 h-4" /> Number of Persons
                                        </Label>
                                        <Select value={formData.numPersons} onValueChange={(v) => handleSelectChange("numPersons", v)}>
                                            <SelectTrigger className="bg-gray-50 border-gray-100 text-gray-900 h-12 rounded-xl">
                                                <SelectValue placeholder="Select Persons" />
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

                                    <Button
                                        onClick={handleNext}
                                        className="w-full bg-red-600 hover:bg-black text-white font-extrabold py-7 rounded-xl mt-4 uppercase tracking-widest transition-all shadow-lg"
                                    >
                                        Continue
                                    </Button>

                                    <div className="flex justify-center gap-2 mt-4">
                                        <div className="w-8 h-1.5 rounded-full bg-red-600"></div>
                                        <div className="w-1.5 h-1.5 rounded-full bg-gray-200"></div>
                                    </div>
                                </div>
                            ) : (
                                <div className="space-y-6">
                                    <div className="space-y-2">
                                        <Label className="text-red-600 font-extrabold uppercase text-[10px]">Name</Label>
                                        <Input
                                            name="name"
                                            placeholder="Your Name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            className="bg-gray-50 border-gray-100 text-gray-900 h-12 rounded-xl"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <Label className="text-red-600 font-extrabold uppercase text-[10px]">Email Address</Label>
                                        <Input
                                            name="email"
                                            type="email"
                                            placeholder="youremail@gmail.com"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            className="bg-gray-50 border-gray-100 text-gray-900 h-12 rounded-xl"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <Label className="text-red-600 font-extrabold uppercase text-[10px]">WhatsApp Number</Label>
                                        <div className="flex">
                                            <div className="bg-gray-100 border border-r-0 border-gray-100 rounded-l-xl px-4 flex items-center text-gray-900 font-bold text-sm">
                                                🇮🇳 +91
                                            </div>
                                            <Input
                                                name="whatsapp"
                                                placeholder="9876543210"
                                                value={formData.whatsapp}
                                                onChange={handleInputChange}
                                                className="bg-gray-50 border-gray-100 rounded-l-none text-gray-900 h-12 rounded-r-xl"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <Label className="text-red-600 font-extrabold uppercase text-[10px]">Select Language</Label>
                                        <Select value={formData.language} onValueChange={(v) => handleSelectChange("language", v)}>
                                            <SelectTrigger className="bg-gray-50 border-gray-100 text-gray-900 h-12 rounded-xl">
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
                                        className="w-full bg-primary hover:bg-foreground text-white font-bold py-7 rounded-xl mt-6 uppercase tracking-widest transition-all shadow-xl hover:scale-[1.02] text-[10px]"
                                    >
                                        {isSubmitting ? "Processing..." : "Confirm via WhatsApp"}
                                    </Button>

                                    <div className="flex justify-center gap-2 mt-6">
                                        <div className="w-1.5 h-1.5 rounded-full bg-muted"></div>
                                        <div className="w-8 h-1.5 rounded-full bg-primary/40"></div>
                                    </div>

                                    <Button variant="link" onClick={() => setStep(1)} className="w-full text-xs text-gray-400 font-bold uppercase tracking-wider">
                                        Back to previous step
                                    </Button>
                                </div>
                            )}
                        </CardContent>
                    </Card>

                    {/* Stats Bar */}
                    <div className="mt-8 mobile:mt-10 md:mt-12 bg-white text-black rounded-xl mobile:rounded-2xl p-4 mobile:p-5 md:p-6 lg:p-8 w-full max-w-5xl shadow-2xl grid grid-cols-2 md:grid-cols-4 gap-4 mobile:gap-5 md:gap-6">
                        <div className="flex items-center gap-3">
                            <div className="bg-red-50 p-2 rounded-full">
                                <Star className="w-5 h-5 text-red-600 fill-red-600" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-sm font-extrabold uppercase">4.9 Ratings</span>
                                <span className="text-[10px] text-black/50 font-bold">Google Reviews</span>
                            </div>
                        </div>
                        <div className="hidden md:block h-8 w-px bg-gray-100" />
                        <div className="flex items-center gap-3">
                            <div className="bg-red-50 p-2 rounded-full">
                                <Clock className="w-5 h-5 text-red-600" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-sm font-extrabold uppercase">24/7 Support</span>
                                <span className="text-[10px] text-black/50 font-bold">Trip Assistance</span>
                            </div>
                        </div>
                        <div className="hidden md:block h-8 w-px bg-gray-100" />
                        <div className="flex items-center gap-3">
                            <div className="bg-red-50 p-2 rounded-full">
                                <ShieldCheck className="w-5 h-5 text-red-600" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-sm font-extrabold uppercase">100% Secure</span>
                                <span className="text-[10px] text-black/50 font-bold">Payment Protection</span>
                            </div>
                        </div>
                        <div className="hidden md:block h-8 w-px bg-gray-100" />
                        <div className="flex items-center gap-3">
                            <div className="bg-red-50 p-2 rounded-full">
                                <MapPin className="w-5 h-5 text-red-600" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-sm font-extrabold uppercase">Global Tours</span>
                                <span className="text-[10px] text-black/50 font-bold">Expert Guides</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Booking;
