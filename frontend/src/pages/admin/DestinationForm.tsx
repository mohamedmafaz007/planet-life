import { useState, useEffect } from "react";
import { Destination } from "@/data/destinations";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, Trash } from "lucide-react";
import PackageForm from "./PackageForm";
import { CloudinaryUpload } from "@/components/admin/CloudinaryUpload";

interface DestinationFormProps {
    initialData?: Destination;
    onSubmit: (data: Destination) => void;
    onCancel: () => void;
}

const DestinationForm = ({ initialData, onSubmit, onCancel }: DestinationFormProps) => {
    const [formData, setFormData] = useState<Destination>({
        id: "",
        name: "",
        country: "",
        description: "",
        image: "",
        video: "",
        featured: false,
        whyVisit: [],
        packages: [],
    });

    useEffect(() => {
        if (initialData) {
            setFormData(initialData);
        }
    }, [initialData]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    // Why Visit Management
    const handleAddWhyVisit = () => {
        setFormData(prev => ({ ...prev, whyVisit: [...prev.whyVisit, ""] }));
    };

    const handleUpdateWhyVisit = (index: number, value: string) => {
        const newWhyVisit = [...formData.whyVisit];
        newWhyVisit[index] = value;
        setFormData(prev => ({ ...prev, whyVisit: newWhyVisit }));
    };

    const handleRemoveWhyVisit = (index: number) => {
        const newWhyVisit = [...formData.whyVisit];
        newWhyVisit.splice(index, 1);
        setFormData(prev => ({ ...prev, whyVisit: newWhyVisit }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <Card className="w-full max-w-4xl mx-auto">
            <CardHeader>
                <CardTitle>{initialData ? "Edit Destination" : "Add New Destination"}</CardTitle>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Basic Info */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold border-b pb-2">Basic Information</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="id">ID (Unique)</Label>
                                <Input
                                    id="id"
                                    name="id"
                                    value={formData.id}
                                    onChange={handleChange}
                                    disabled={!!initialData}
                                    required
                                    placeholder="e.g., paris"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="name">Name</Label>
                                <Input
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="e.g., Paris"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="country">Country</Label>
                                <Input
                                    id="country"
                                    name="country"
                                    value={formData.country}
                                    onChange={handleChange}
                                    required
                                    placeholder="e.g., France"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="description">Description</Label>
                            <Textarea
                                id="description"
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                required
                                rows={4}
                                placeholder="Brief overview of the destination..."
                            />
                        </div>
                    </div>

                    {/* Media */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold border-b pb-2">Media</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <Label>Destination Image (Main)</Label>
                                <CloudinaryUpload 
                                    onUpload={(url) => setFormData(prev => ({ ...prev, image: url }))}
                                    defaultImage={formData.image}
                                    folder="planet_life/images"
                                />
                            </div>

                            <div className="space-y-2">
                                <Label>Video URL</Label>
                                <CloudinaryUpload 
                                    onUpload={(url) => setFormData(prev => ({ ...prev, video: url }))}
                                    defaultImage={formData.video}
                                    folder="planet_life/videos"
                                />
                                <p className="text-xs text-muted-foreground mt-2">
                                    Alternatively, you can provide a direct link to an MP4 video file.
                                </p>
                                <Input
                                    id="video"
                                    name="video"
                                    value={formData.video || ''}
                                    onChange={handleChange}
                                    placeholder="https://example.com/video.mp4"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Why Visit */}
                    <div className="space-y-4">
                        <div className="flex justify-between items-center border-b pb-2">
                            <h3 className="text-lg font-semibold">Why Visit?</h3>
                            <Button type="button" variant="outline" size="sm" onClick={handleAddWhyVisit}>
                                <Plus className="h-4 w-4 mr-2" /> Add Reason
                            </Button>
                        </div>
                        <div className="space-y-2">
                            {formData.whyVisit.map((reason, index) => (
                                <div key={index} className="flex gap-2">
                                    <Input
                                        value={reason}
                                        onChange={(e) => handleUpdateWhyVisit(index, e.target.value)}
                                        placeholder="e.g., Experience the Eiffel Tower"
                                    />
                                    <Button type="button" variant="ghost" size="icon" onClick={() => handleRemoveWhyVisit(index)}>
                                        <Trash className="h-4 w-4" />
                                    </Button>
                                </div>
                            ))}
                            {formData.whyVisit.length === 0 && (
                                <p className="text-sm text-muted-foreground italic">No reasons added yet.</p>
                            )}
                        </div>
                    </div>

                    {/* Packages */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold border-b pb-2">Available Packages</h3>
                        <PackageForm
                            packages={formData.packages}
                            onChange={(newPackages) => setFormData(prev => ({ ...prev, packages: newPackages }))}
                        />
                    </div>

                    {/* Actions */}
                    <div className="flex justify-end space-x-4 pt-6 border-t">
                        <Button type="button" variant="outline" onClick={onCancel} size="lg">
                            Cancel
                        </Button>
                        <Button type="submit" size="lg">
                            {initialData ? "Update Destination" : "Add Destination"}
                        </Button>
                    </div>
                </form>
            </CardContent>
        </Card>
    );
};

export default DestinationForm;
