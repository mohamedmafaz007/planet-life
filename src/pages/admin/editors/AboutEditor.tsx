import { useState, useEffect } from "react";
import { useAdmin, AboutContent } from "@/context/AdminContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const AboutEditor = () => {
    const { aboutContent, updateAboutContent } = useAdmin();
    const [formData, setFormData] = useState<AboutContent>(aboutContent);
    const { toast } = useToast();

    useEffect(() => {
        setFormData(aboutContent);
    }, [aboutContent]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        updateAboutContent(formData);
        toast({
            title: "About Page Updated",
            description: "Changes have been saved successfully.",
        });
    };

    return (
        <Card>
            <CardHeader>
                <CardTitle>Edit About Page Content</CardTitle>
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

                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Our Story</h3>
                        <div className="space-y-2">
                            <Label htmlFor="ourStoryTitle">Title</Label>
                            <Input
                                id="ourStoryTitle"
                                name="ourStoryTitle"
                                value={formData.ourStoryTitle}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="ourStoryText">Story Text</Label>
                            <Textarea
                                id="ourStoryText"
                                name="ourStoryText"
                                value={formData.ourStoryText}
                                onChange={handleChange}
                                rows={6}
                            />
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Founder Section</h3>
                        <div className="space-y-2">
                            <Label htmlFor="founderTitle">Title</Label>
                            <Input
                                id="founderTitle"
                                name="founderTitle"
                                value={formData.founderTitle}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="founderText">Founder Text</Label>
                            <Textarea
                                id="founderText"
                                name="founderText"
                                value={formData.founderText}
                                onChange={handleChange}
                                rows={6}
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="founderImage">Founder Image URL</Label>
                            <Input
                                id="founderImage"
                                name="founderImage"
                                value={formData.founderImage}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Mission Section</h3>
                        <div className="space-y-2">
                            <Label htmlFor="missionTitle">Title</Label>
                            <Input
                                id="missionTitle"
                                name="missionTitle"
                                value={formData.missionTitle}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="missionText">Mission Text</Label>
                            <Textarea
                                id="missionText"
                                name="missionText"
                                value={formData.missionText}
                                onChange={handleChange}
                                rows={4}
                            />
                        </div>
                    </div>

                    <Button type="submit">Save Changes</Button>
                </form>
            </CardContent>
        </Card>
    );
};

export default AboutEditor;
