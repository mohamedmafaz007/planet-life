import { useState } from "react";
import { useAdmin } from "@/context/AdminContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plus, Edit, Trash, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Destination } from "@/data/destinations";
import DestinationForm from "./DestinationForm";
import HomeEditor from "./editors/HomeEditor";
import AboutEditor from "./editors/AboutEditor";
import ContactEditor from "./editors/ContactEditor";
import PackagesEditor from "./editors/PackagesEditor";

const AdminDashboard = () => {
    const { destinations, deleteDestination, addDestination, updateDestination, logout } = useAdmin();
    const [isEditing, setIsEditing] = useState(false);
    const [currentDestination, setCurrentDestination] = useState<Destination | undefined>(undefined);
    const navigate = useNavigate();

    const handleEdit = (destination: Destination) => {
        setCurrentDestination(destination);
        setIsEditing(true);
    };

    const handleAdd = () => {
        setCurrentDestination(undefined);
        setIsEditing(true);
    };

    const handleDelete = (id: string) => {
        if (window.confirm("Are you sure you want to delete this destination?")) {
            deleteDestination(id);
        }
    };

    const handleSubmit = (data: Destination) => {
        if (currentDestination) {
            updateDestination(data);
        } else {
            addDestination(data);
        }
        setIsEditing(false);
    };

    const handleLogout = () => {
        logout();
        navigate("/admin/login");
    };

    if (isEditing) {
        return (
            <div className="container mx-auto py-20 px-4">
                <DestinationForm
                    initialData={currentDestination}
                    onSubmit={handleSubmit}
                    onCancel={() => setIsEditing(false)}
                />
            </div>
        );
    }

    return (
        <div className="container mx-auto py-20 px-4">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold">Admin Dashboard</h1>
                <Button variant="destructive" onClick={handleLogout}>
                    <LogOut className="mr-2 h-4 w-4" />
                    Logout
                </Button>
            </div>

            <Tabs defaultValue="home" className="space-y-6">
                <TabsList className="grid w-full grid-cols-5">
                    <TabsTrigger value="home">Home</TabsTrigger>
                    <TabsTrigger value="destinations">Destinations</TabsTrigger>
                    <TabsTrigger value="packages">Packages</TabsTrigger>
                    <TabsTrigger value="about">About</TabsTrigger>
                    <TabsTrigger value="contact">Contact</TabsTrigger>
                </TabsList>

                <TabsContent value="home">
                    <HomeEditor />
                </TabsContent>

                <TabsContent value="destinations" className="space-y-4">
                    <div className="flex justify-end">
                        <Button onClick={handleAdd}>
                            <Plus className="mr-2 h-4 w-4" />
                            Add New Destination
                        </Button>
                    </div>

                    <div className="grid gap-4">
                        {destinations.map((destination) => (
                            <Card key={destination.id}>
                                <CardContent className="flex items-center justify-between p-6">
                                    <div className="flex items-center space-x-4">
                                        <img
                                            src={destination.image.startsWith("/") ? destination.image : `/${destination.image}`}
                                            alt={destination.name}
                                            className="w-16 h-16 object-cover rounded"
                                        />
                                        <div>
                                            <h3 className="font-bold text-lg">{destination.name}</h3>
                                            <p className="text-sm text-gray-500">{destination.country}</p>
                                        </div>
                                    </div>
                                    <div className="flex space-x-2">
                                        <Button variant="outline" size="icon" onClick={() => handleEdit(destination)}>
                                            <Edit className="h-4 w-4" />
                                        </Button>
                                        <Button variant="destructive" size="icon" onClick={() => handleDelete(destination.id)}>
                                            <Trash className="h-4 w-4" />
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </TabsContent>

                <TabsContent value="packages">
                    <PackagesEditor />
                </TabsContent>

                <TabsContent value="about">
                    <AboutEditor />
                </TabsContent>

                <TabsContent value="contact">
                    <ContactEditor />
                </TabsContent>
            </Tabs>
        </div>
    );
};

export default AdminDashboard;
