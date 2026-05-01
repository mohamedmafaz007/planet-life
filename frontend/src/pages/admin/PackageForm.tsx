import { useState, useEffect } from "react";
import { Package, DayItinerary } from "@/data/destinations";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, Trash, ChevronDown, ChevronUp } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

interface PackageFormProps {
    packages: Package[];
    onChange: (packages: Package[]) => void;
}

const PackageForm = ({ packages, onChange }: PackageFormProps) => {
    const handleAddPackage = () => {
        const newPackage: Package = {
            id: `pkg-${Date.now()}`,
            duration: "",
            nights: 0,
            days: 0,
            price: 0,
            inclusions: [],
            itinerary: []
        };
        onChange([...packages, newPackage]);
    };

    const handleRemovePackage = (index: number) => {
        const newPackages = [...packages];
        newPackages.splice(index, 1);
        onChange(newPackages);
    };

    const updatePackage = (index: number, field: keyof Package, value: string | number) => {
        const newPackages = [...packages];
        // @ts-expect-error - dynamic assignment
        newPackages[index] = { ...newPackages[index], [field]: value };
        onChange(newPackages);
    };

    // Inclusions Management
    const addInclusion = (pkgIndex: number) => {
        const newPackages = [...packages];
        newPackages[pkgIndex].inclusions.push("");
        onChange(newPackages);
    };

    const updateInclusion = (pkgIndex: number, incIndex: number, value: string) => {
        const newPackages = [...packages];
        newPackages[pkgIndex].inclusions[incIndex] = value;
        onChange(newPackages);
    };

    const removeInclusion = (pkgIndex: number, incIndex: number) => {
        const newPackages = [...packages];
        newPackages[pkgIndex].inclusions.splice(incIndex, 1);
        onChange(newPackages);
    };

    // Itinerary Management
    const addItineraryDay = (pkgIndex: number) => {
        const newPackages = [...packages];
        const dayNum = (newPackages[pkgIndex].itinerary?.length || 0) + 1;
        const newDay: DayItinerary = {
            day: dayNum,
            title: "",
            description: "",
            activities: []
        };
        newPackages[pkgIndex].itinerary = [...(newPackages[pkgIndex].itinerary || []), newDay];
        onChange(newPackages);
    };

    const updateItineraryDay = (pkgIndex: number, dayIndex: number, field: keyof DayItinerary, value: string) => {
        const newPackages = [...packages];
        if (newPackages[pkgIndex].itinerary) {
            newPackages[pkgIndex].itinerary![dayIndex] = {
                ...newPackages[pkgIndex].itinerary![dayIndex],
                [field]: value
            };
            onChange(newPackages);
        }
    };

    const removeItineraryDay = (pkgIndex: number, dayIndex: number) => {
        const newPackages = [...packages];
        if (newPackages[pkgIndex].itinerary) {
            newPackages[pkgIndex].itinerary!.splice(dayIndex, 1);
            // Reorder day numbers
            newPackages[pkgIndex].itinerary = newPackages[pkgIndex].itinerary!.map((day, idx) => ({
                ...day,
                day: idx + 1
            }));
            onChange(newPackages);
        }
    };

    // Activities Management
    const addActivity = (pkgIndex: number, dayIndex: number) => {
        const newPackages = [...packages];
        if (newPackages[pkgIndex].itinerary) {
            newPackages[pkgIndex].itinerary![dayIndex].activities.push("");
            onChange(newPackages);
        }
    };

    const updateActivity = (pkgIndex: number, dayIndex: number, actIndex: number, value: string) => {
        const newPackages = [...packages];
        if (newPackages[pkgIndex].itinerary) {
            newPackages[pkgIndex].itinerary![dayIndex].activities[actIndex] = value;
            onChange(newPackages);
        }
    };

    const removeActivity = (pkgIndex: number, dayIndex: number, actIndex: number) => {
        const newPackages = [...packages];
        if (newPackages[pkgIndex].itinerary) {
            newPackages[pkgIndex].itinerary![dayIndex].activities.splice(actIndex, 1);
            onChange(newPackages);
        }
    };

    return (
        <div className="space-y-4">
            <div className="flex justify-between items-center">
                <Label className="text-lg font-semibold">Packages</Label>
                <Button type="button" onClick={handleAddPackage} size="sm">
                    <Plus className="h-4 w-4 mr-2" /> Add Package
                </Button>
            </div>

            {packages.map((pkg, pkgIndex) => (
                <Card key={pkg.id || pkgIndex} className="border-l-4 border-l-primary">
                    <CardHeader className="py-3 px-4 bg-muted/50 flex flex-row items-center justify-between">
                        <CardTitle className="text-base">
                            {pkg.duration || "New Package"} - ₹{pkg.price}
                        </CardTitle>
                        <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            onClick={() => handleRemovePackage(pkgIndex)}
                            className="text-destructive hover:text-destructive"
                        >
                            <Trash className="h-4 w-4" />
                        </Button>
                    </CardHeader>
                    <CardContent className="p-4 space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label>Duration (e.g., 3 Nights 4 Days)</Label>
                                <Input
                                    value={pkg.duration}
                                    onChange={(e) => updatePackage(pkgIndex, "duration", e.target.value)}
                                />
                            </div>
                            <div className="space-y-2">
                                <Label>Price (₹)</Label>
                                <Input
                                    type="number"
                                    value={pkg.price}
                                    onChange={(e) => updatePackage(pkgIndex, "price", parseInt(e.target.value) || 0)}
                                />
                            </div>
                            <div className="space-y-2">
                                <Label>Nights</Label>
                                <Input
                                    type="number"
                                    value={pkg.nights}
                                    onChange={(e) => updatePackage(pkgIndex, "nights", parseInt(e.target.value) || 0)}
                                />
                            </div>
                            <div className="space-y-2">
                                <Label>Days</Label>
                                <Input
                                    type="number"
                                    value={pkg.days}
                                    onChange={(e) => updatePackage(pkgIndex, "days", parseInt(e.target.value) || 0)}
                                />
                            </div>
                        </div>

                        {/* Inclusions */}
                        <div className="space-y-2">
                            <Label>Inclusions</Label>
                            {pkg.inclusions.map((inc, incIndex) => (
                                <div key={incIndex} className="flex gap-2">
                                    <Input
                                        value={inc}
                                        onChange={(e) => updateInclusion(pkgIndex, incIndex, e.target.value)}
                                    />
                                    <Button type="button" variant="ghost" size="icon" onClick={() => removeInclusion(pkgIndex, incIndex)}>
                                        <Trash className="h-4 w-4" />
                                    </Button>
                                </div>
                            ))}
                            <Button type="button" variant="outline" size="sm" onClick={() => addInclusion(pkgIndex)}>
                                <Plus className="h-3 w-3 mr-2" /> Add Inclusion
                            </Button>
                        </div>

                        {/* Itinerary */}
                        <div className="space-y-2">
                            <Label className="text-base font-semibold">Itinerary</Label>
                            {pkg.itinerary?.map((day, dayIndex) => (
                                <Card key={dayIndex} className="bg-muted/20">
                                    <CardContent className="p-3 space-y-3">
                                        <div className="flex justify-between items-center">
                                            <span className="font-medium">Day {day.day}</span>
                                            <Button type="button" variant="ghost" size="sm" onClick={() => removeItineraryDay(pkgIndex, dayIndex)}>
                                                <Trash className="h-3 w-3" />
                                            </Button>
                                        </div>
                                        <Input
                                            placeholder="Title (e.g., Arrival)"
                                            value={day.title}
                                            onChange={(e) => updateItineraryDay(pkgIndex, dayIndex, "title", e.target.value)}
                                        />
                                        <Textarea
                                            placeholder="Description"
                                            value={day.description}
                                            onChange={(e) => updateItineraryDay(pkgIndex, dayIndex, "description", e.target.value)}
                                        />

                                        {/* Activities */}
                                        <div className="pl-4 border-l-2 border-primary/20 space-y-2">
                                            <Label className="text-xs text-muted-foreground">Activities</Label>
                                            {day.activities.map((act, actIndex) => (
                                                <div key={actIndex} className="flex gap-2">
                                                    <Input
                                                        className="h-8 text-sm"
                                                        value={act}
                                                        onChange={(e) => updateActivity(pkgIndex, dayIndex, actIndex, e.target.value)}
                                                    />
                                                    <Button type="button" variant="ghost" size="icon" className="h-8 w-8" onClick={() => removeActivity(pkgIndex, dayIndex, actIndex)}>
                                                        <Trash className="h-3 w-3" />
                                                    </Button>
                                                </div>
                                            ))}
                                            <Button type="button" variant="ghost" size="sm" className="h-6 text-xs" onClick={() => addActivity(pkgIndex, dayIndex)}>
                                                <Plus className="h-3 w-3 mr-1" /> Add Activity
                                            </Button>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                            <Button type="button" variant="outline" size="sm" onClick={() => addItineraryDay(pkgIndex)}>
                                <Plus className="h-3 w-3 mr-2" /> Add Day
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
};

export default PackageForm;
