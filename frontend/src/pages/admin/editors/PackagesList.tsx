import { useAdmin } from "@/context/AdminContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Edit, MapPin, Clock, Tag } from "lucide-react";

interface PackagesListProps {
    onEditDestination: (destId: string) => void;
}

const PackagesList = ({ onEditDestination }: PackagesListProps) => {
    const { destinations } = useAdmin();

    return (
        <div className="space-y-6">
            <Card>
                <CardHeader>
                    <CardTitle>All Packages by Destination</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid gap-6">
                        {destinations.map((dest) => (
                            <div key={dest.id} className="border rounded-xl p-4 space-y-4">
                                <div className="flex justify-between items-center border-b pb-2">
                                    <div className="flex items-center gap-2">
                                        <MapPin className="h-4 w-4 text-red-600" />
                                        <h3 className="font-bold text-lg">{dest.name}</h3>
                                        <span className="text-sm text-muted-foreground">({dest.country})</span>
                                    </div>
                                    <Button 
                                        variant="outline" 
                                        size="sm" 
                                        onClick={() => onEditDestination(dest.id)}
                                    >
                                        <Edit className="h-4 w-4 mr-2" />
                                        Manage Packages
                                    </Button>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {dest.packages.map((pkg) => (
                                        <div key={pkg.id} className="bg-muted/30 rounded-lg p-3 border border-dashed">
                                            <div className="flex justify-between items-start mb-2">
                                                <span className="text-sm font-bold">{pkg.duration}</span>
                                                <span className="text-xs font-black text-red-600">₹{pkg.price.toLocaleString()}</span>
                                            </div>
                                            <div className="flex items-center gap-4 text-[10px] text-muted-foreground uppercase tracking-widest font-bold">
                                                <span className="flex items-center gap-1">
                                                    <Clock className="h-3 w-3" /> {pkg.nights}N / {pkg.days}D
                                                </span>
                                                <span className="flex items-center gap-1">
                                                    <Tag className="h-3 w-3" /> {pkg.id}
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                    {dest.packages.length === 0 && (
                                        <p className="text-sm text-muted-foreground italic">No packages added yet.</p>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default PackagesList;
