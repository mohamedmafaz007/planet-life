import { useState, useEffect } from "react";
import { useAdmin, PackagesContent } from "@/context/AdminContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const PackagesEditor = () => {
    const { packagesContent, updatePackagesContent } = useAdmin();
    const [formData, setFormData] = useState<PackagesContent>(packagesContent);
    const { toast } = useToast();

    useEffect(() => {
        setFormData(packagesContent);
    }, [packagesContent]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        updatePackagesContent(formData);
        toast({
            title: "Packages Page Updated",
            description: "Changes have been saved successfully.",
        });
    };

    return (
        <Card>
            <CardHeader>
                <CardTitle>Edit Packages Page Content</CardTitle>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Hero Section</h3>
                        <div className="space-y-2">
                            <Label htmlFor="heroTitle">Hero Title</Label>
                            <Input
                                id="heroTitle"
                                name="heroTitle"
                                value={formData.heroTitle}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="heroSubtitle">Hero Subtitle</Label>
                            <Textarea
                                id="heroSubtitle"
                                name="heroSubtitle"
                                value={formData.heroSubtitle}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <Button type="submit">Save Changes</Button>
                </form>
            </CardContent>
        </Card>
    );
};

export default PackagesEditor;
