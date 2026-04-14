import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle2, Clock, Users, Star, ShieldCheck, BadgePercent, MapPin } from "lucide-react";
import heroVideo from "@/assets/hero-video.mp4";

const Quote = () => {
    const navigate = useNavigate();
    const { toast } = useToast();
    const [step, setStep] = useState(1);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const [formData, setFormData] = useState({
        travelMonth: "",
        duration: "",
        numPersons: "",
        name: "",
        email: "",
        whatsapp: "",
        language: ""
    });

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
        await new Promise(resolve => setTimeout(resolve, 1500));

        toast({
            title: "Quote Request Sent!",
            description: "Our experts will contact you shortly.",
        });
        setIsSubmitting(false);
        navigate("/");
    };

    return (
        <div className="min-h-screen pt-20 relative overflow-hidden">
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
            <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />

            <div className="container mx-auto px-4 relative z-10 py-12">
                <div className="text-center mb-8 text-white">
                    <h1 className="text-3xl md:text-4xl font-serif font-bold mb-2">
                        Your Dream Holiday Awaits
                    </h1>
                    <p className="max-w-2xl mx-auto opacity-90 text-sm md:text-base">
                        Explore the world's wonders at your pace with our custom tour packages. Your perfect experience starts here.
                    </p>
                </div>

                <div className="flex flex-col items-center justify-center">
                    {/* Form Card */}
                    <Card className="w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden border-none">
                        <CardContent className="p-8">
                            <div className="text-center mb-6">
                                <h2 className="text-xl font-serif font-bold text-[#022c22] italic mb-1">Your Perfect Holiday Awaits!</h2>
                                <h3 className="text-lg font-bold text-gray-800">Download Your Itinerary Now!</h3>
                            </div>

                            {step === 1 ? (
                                <div className="space-y-4">
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

                                    <div className="space-y-1">
                                        <Label className="text-[#d4af37] font-semibold flex items-center gap-2">
                                            <Clock className="w-4 h-4" /> Duration
                                        </Label>
                                        <Select value={formData.duration} onValueChange={(v) => handleSelectChange("duration", v)}>
                                            <SelectTrigger className="bg-gray-50 border-gray-200 text-gray-900">
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

                                    <div className="space-y-1">
                                        <Label className="text-[#d4af37] font-semibold flex items-center gap-2">
                                            <Users className="w-4 h-4" /> Number of Persons
                                        </Label>
                                        <Select value={formData.numPersons} onValueChange={(v) => handleSelectChange("numPersons", v)}>
                                            <SelectTrigger className="bg-gray-50 border-gray-200 text-gray-900">
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
                        </CardContent>
                    </Card>

                    {/* Stats Bar */}
                    <div className="mt-8 bg-[#022c22] text-white rounded-xl p-4 md:p-6 w-full max-w-4xl shadow-lg flex flex-wrap justify-between items-center gap-4">
                        <div className="flex items-center gap-2">
                            <div className="bg-white/10 p-2 rounded-full">
                                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                            </div>
                            <span className="text-sm font-medium">4.9 Google Ratings</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="bg-white/10 p-2 rounded-full">
                                <Clock className="w-5 h-5 text-white" />
                            </div>
                            <span className="text-sm font-medium">24/7 Trip Assistance</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="bg-white/10 p-2 rounded-full">
                                <MapPin className="w-5 h-5 text-white" />
                            </div>
                            <span className="text-sm font-medium">Destination Experts</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="bg-white/10 p-2 rounded-full">
                                <ShieldCheck className="w-5 h-5 text-white" />
                            </div>
                            <span className="text-sm font-medium">100% Customized Trip</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="bg-white/10 p-2 rounded-full">
                                <BadgePercent className="w-5 h-5 text-white" />
                            </div>
                            <span className="text-sm font-medium">Transparent Pricing</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Quote;
