import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { destinations } from "@/data/destinations";
import { ArrowLeft, Calendar, Users } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Booking = () => {
    const { packageId } = useParams();
    const navigate = useNavigate();
    const { toast } = useToast();

    // Find package and destination
    const found = destinations.flatMap(d => d.packages.map(p => ({ ...p, destinationName: d.name }))).find(p => p.id === packageId);

    if (!found) {
        return (
            <div className="min-h-screen pt-20 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Package Not Found</h1>
                    <Button asChild>
                        <Link to="/destinations">Back to Destinations</Link>
                    </Button>
                </div>
            </div>
        );
    }

    const [numPersons, setNumPersons] = useState(1);
    const [date, setDate] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Form State
    const [formData, setFormData] = useState({
        name: "",
        age: "",
        relationship: "friend",
        occupation: "",
        phone: "",
        email: "",
        state: "",
        city: "",
        heartCondition: "no",
        respiratoryIssue: "no",
        pastInjuries: "no",
        otherHealth: "",
        arrivingPlace: "",
        pickupNeeded: false,
        isMember: false,
        agreeTerms: false
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSelectChange = (name: string, value: string) => {
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleCheckboxChange = (name: string, checked: boolean) => {
        setFormData(prev => ({ ...prev, [name]: checked }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.agreeTerms) {
            toast({
                title: "Error",
                description: "Please agree to the terms and conditions.",
                variant: "destructive"
            });
            return;
        }

        setIsSubmitting(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));

        toast({
            title: "Booking Confirmed!",
            description: "Your adventure awaits. Check your email for details.",
        });
        setIsSubmitting(false);
        navigate("/");
    };

    const finalAmount = found.price * numPersons;

    return (
        <div className="min-h-screen pt-24 pb-12 bg-muted/30">
            <div className="container mx-auto px-4 max-w-5xl">
                <Button variant="ghost" asChild className="mb-6">
                    <Link to={`/destinations`}>
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back
                    </Link>
                </Button>

                <h1 className="text-3xl font-serif font-bold mb-8 text-foreground">Book Your Adventure</h1>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Form */}
                    <div className="lg:col-span-2 space-y-6">
                        <Card>
                            <CardContent className="pt-6 space-y-8">
                                {/* Top Section */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="numPersons">Number of Persons</Label>
                                        <Input
                                            id="numPersons"
                                            type="number"
                                            min="1"
                                            value={numPersons}
                                            onChange={(e) => setNumPersons(parseInt(e.target.value) || 1)}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="date">Date of Confirmation</Label>
                                        <Input
                                            id="date"
                                            type="date"
                                            value={date}
                                            onChange={(e) => setDate(e.target.value)}
                                        />
                                    </div>
                                </div>

                                {/* Person Details */}
                                <div>
                                    <h3 className="text-lg font-semibold mb-4">Person Details</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <Input placeholder="Person 1 Name" name="name" value={formData.name} onChange={handleInputChange} />
                                        <div className="grid grid-cols-2 gap-4">
                                            <Input placeholder="Age" name="age" value={formData.age} onChange={handleInputChange} />
                                            <Select value={formData.relationship} onValueChange={(v) => handleSelectChange("relationship", v)}>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Relation" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="friend">Friend</SelectItem>
                                                    <SelectItem value="family">Family</SelectItem>
                                                    <SelectItem value="couple">Couple</SelectItem>
                                                    <SelectItem value="other">Other</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <Input placeholder="Occupation" name="occupation" value={formData.occupation} onChange={handleInputChange} />
                                        <Input placeholder="Phone Number" name="phone" value={formData.phone} onChange={handleInputChange} />
                                        <Input placeholder="Email" name="email" type="email" value={formData.email} onChange={handleInputChange} />

                                        {/* Mock State/City Dropdowns */}
                                        <Select value={formData.state} onValueChange={(v) => handleSelectChange("state", v)}>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select State" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="kerala">Kerala</SelectItem>
                                                <SelectItem value="tamilnadu">Tamil Nadu</SelectItem>
                                                <SelectItem value="karnataka">Karnataka</SelectItem>
                                                <SelectItem value="maharashtra">Maharashtra</SelectItem>
                                                <SelectItem value="delhi">Delhi</SelectItem>
                                            </SelectContent>
                                        </Select>

                                        <Select value={formData.city} onValueChange={(v) => handleSelectChange("city", v)}>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select City" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="kochi">Kochi</SelectItem>
                                                <SelectItem value="chennai">Chennai</SelectItem>
                                                <SelectItem value="bangalore">Bangalore</SelectItem>
                                                <SelectItem value="mumbai">Mumbai</SelectItem>
                                                <SelectItem value="delhi">Delhi</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>

                                {/* Health Declaration */}
                                <div>
                                    <h3 className="text-lg font-semibold mb-4">Health Declaration</h3>
                                    <div className="space-y-4">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                                            <Label>Do you have any heart conditions?</Label>
                                            <Select value={formData.heartCondition} onValueChange={(v) => handleSelectChange("heartCondition", v)}>
                                                <SelectTrigger><SelectValue /></SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="no">No</SelectItem>
                                                    <SelectItem value="yes">Yes</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                                            <Label>Do you have any respiratory issues?</Label>
                                            <Select value={formData.respiratoryIssue} onValueChange={(v) => handleSelectChange("respiratoryIssue", v)}>
                                                <SelectTrigger><SelectValue /></SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="no">No</SelectItem>
                                                    <SelectItem value="yes">Yes</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                                            <Label>Any past injuries that might affect your trek?</Label>
                                            <Select value={formData.pastInjuries} onValueChange={(v) => handleSelectChange("pastInjuries", v)}>
                                                <SelectTrigger><SelectValue /></SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="no">No</SelectItem>
                                                    <SelectItem value="yes">Yes</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <div className="space-y-2">
                                            <Label>Please list any other health concerns</Label>
                                            <Textarea
                                                className="h-24"
                                                name="otherHealth"
                                                value={formData.otherHealth}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Logistics */}
                                <div>
                                    <h3 className="text-lg font-semibold mb-4">Logistics</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <Label>Arriving Place</Label>
                                            <Input name="arrivingPlace" value={formData.arrivingPlace} onChange={handleInputChange} />
                                        </div>
                                        <div className="flex items-center space-x-2 pt-8">
                                            <Checkbox
                                                id="pickup"
                                                checked={formData.pickupNeeded}
                                                onCheckedChange={(c) => handleCheckboxChange("pickupNeeded", c as boolean)}
                                            />
                                            <Label htmlFor="pickup">Pickup Needed?</Label>
                                        </div>
                                    </div>
                                </div>

                                {/* Terms */}
                                <div className="space-y-4 pt-4 border-t">
                                    <div className="flex items-center space-x-2">
                                        <Checkbox
                                            id="member"
                                            checked={formData.isMember}
                                            onCheckedChange={(c) => handleCheckboxChange("isMember", c as boolean)}
                                        />
                                        <Label htmlFor="member">Are you a Planet Life member?</Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <Checkbox
                                            id="terms"
                                            checked={formData.agreeTerms}
                                            onCheckedChange={(c) => handleCheckboxChange("agreeTerms", c as boolean)}
                                        />
                                        <Label htmlFor="terms" className="text-sm">
                                            I have read and agree to the <span className="text-primary cursor-pointer">terms and conditions</span>.
                                        </Label>
                                    </div>
                                </div>

                                <Button
                                    className="w-full bg-green-600 hover:bg-green-700 text-white h-12 text-lg mt-6"
                                    onClick={handleSubmit}
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? "Processing..." : "Confirm Details and Payment"}
                                </Button>

                            </CardContent>
                        </Card>
                    </div>

                    {/* Summary Card */}
                    <div className="lg:col-span-1">
                        <Card className="sticky top-24">
                            <CardHeader>
                                <CardTitle>Booking Summary</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="flex justify-between text-sm">
                                    <span className="text-muted-foreground">Package:</span>
                                    <span className="font-medium text-right">{found.destinationName} - {found.duration}</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-muted-foreground">Persons:</span>
                                    <span className="font-medium">{numPersons}</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-muted-foreground">Base Price:</span>
                                    <span className="font-medium">₹{found.price}</span>
                                </div>
                                <div className="pt-4 border-t flex justify-between items-center">
                                    <span className="font-bold text-lg">Final Amount:</span>
                                    <span className="font-bold text-xl text-green-600">₹{finalAmount.toLocaleString()}</span>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Booking;
