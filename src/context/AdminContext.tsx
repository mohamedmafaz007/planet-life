import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Destination, destinations as initialDestinations } from "@/data/destinations";

// Content Interfaces
export interface HomeContent {
    heroTitle: string;
    heroSubtitle: string;
    whyChooseUsTitle: string;
    whyChooseUsSubtitle: string;
    ctaTitle: string;
    ctaText: string;
}

export interface AboutContent {
    heroTitle: string;
    heroSubtitle: string;
    ourStoryTitle: string;
    ourStoryText: string;
    founderTitle: string;
    founderText: string;
    founderImage: string;
    missionTitle: string;
    missionText: string;
}

export interface ContactContent {
    heroTitle: string;
    heroSubtitle: string;
    sectionTitle: string;
    sectionText: string;
    phone: string;
    email: string;
    instagram: string;
}

export interface PackagesContent {
    heroTitle: string;
    heroSubtitle: string;
}

interface AdminContextType {
    isAuthenticated: boolean;
    login: (password: string) => boolean;
    logout: () => void;
    destinations: Destination[];
    addDestination: (destination: Destination) => void;
    updateDestination: (destination: Destination) => void;
    deleteDestination: (id: string) => void;
    // New Content State
    homeContent: HomeContent;
    updateHomeContent: (content: HomeContent) => void;
    aboutContent: AboutContent;
    updateAboutContent: (content: AboutContent) => void;
    contactContent: ContactContent;
    updateContactContent: (content: ContactContent) => void;
    packagesContent: PackagesContent;
    updatePackagesContent: (content: PackagesContent) => void;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

// Default Values (Current Hardcoded Content)
const defaultHomeContent: HomeContent = {
    heroTitle: "Let's Go Travel",
    heroSubtitle: "Discover the world's most breathtaking destinations with curated premium packages",
    whyChooseUsTitle: "Why Choose Planet Life?",
    whyChooseUsSubtitle: "We deliver exceptional travel experiences with attention to every detail",
    ctaTitle: "Ready to Start Your Adventure?",
    ctaText: "Contact us today to plan your dream vacation. Our travel experts are ready to help you create unforgettable memories."
};

const defaultAboutContent: AboutContent = {
    heroTitle: "About Planet Life",
    heroSubtitle: "Creating unforgettable travel experiences since day one",
    ourStoryTitle: "Our Story",
    ourStoryText: "Planet Life was founded with a simple vision: to make world-class travel experiences accessible to everyone. We believe that travel is not just about visiting new places; it's about creating memories, discovering cultures, and connecting with the world.\n\nOur team of travel experts carefully curates each destination and package, ensuring that every detail is perfect. From the moment you contact us to the moment you return home, we're committed to providing exceptional service and unforgettable experiences.\n\nWith thousands of satisfied travelers and a 4.9 Google rating, we've established ourselves as a trusted name in premium travel. Our passion is your adventure, and we're here to make your dream vacation a reality.",
    founderTitle: "Meet Our Founder",
    founderText: "\"Travel isn't just about seeing new places; it's about the transformation that happens within us when we step outside our comfort zone.\"\n\nDriven by an insatiable wanderlust and a deep curiosity for the world's diverse cultures, our founder established Planet Life with a singular mission: to share the magic of travel with others.\n\nWith years of personal exploration across continents, he understands that the best journeys are those that are authentic, immersive, and worry-free. His passion lies in crafting experiences that go beyond the guidebook, connecting travelers with the heart and soul of each destination.",
    founderImage: "/founder.jpg",
    missionTitle: "Our Mission",
    missionText: "To inspire and enable people to explore the world, creating transformative travel experiences that broaden perspectives, foster connections, and create lasting memories. We strive to make every journey extraordinary through meticulous planning, exceptional service, and genuine care for our travelers."
};

const defaultContactContent: ContactContent = {
    heroTitle: "Get in Touch",
    heroSubtitle: "Ready to plan your next adventure? We're here to help!",
    sectionTitle: "Contact Information",
    sectionText: "Have questions about our packages or need help planning your trip? Reach out to us through any of the following channels:",
    phone: "+91 99945 58497",
    email: "planetlifecamping@gmail.com",
    instagram: "@_planet_life"
};

const defaultPackagesContent: PackagesContent = {
    heroTitle: "Our Travel Packages",
    heroSubtitle: "Find the perfect package for your next adventure"
};

export const AdminProvider = ({ children }: { children: ReactNode }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [destinations, setDestinations] = useState<Destination[]>([]);

    // Content State
    const [homeContent, setHomeContent] = useState<HomeContent>(defaultHomeContent);
    const [aboutContent, setAboutContent] = useState<AboutContent>(defaultAboutContent);
    const [contactContent, setContactContent] = useState<ContactContent>(defaultContactContent);
    const [packagesContent, setPackagesContent] = useState<PackagesContent>(defaultPackagesContent);

    // Load data from localStorage on mount
    useEffect(() => {
        try {
            // Explicitly clear ALL old versions to force refresh
            Object.keys(localStorage).forEach(key => {
                if (key.startsWith("destinations_v") && key !== "destinations_v31") {
                    localStorage.removeItem(key);
                }
            });

            const storedAuth = localStorage.getItem("isAdminAuthenticated");
            if (storedAuth === "true") {
                setIsAuthenticated(true);
            }

            const storedDestinations = localStorage.getItem("destinations_v31");
            if (storedDestinations) {
                setDestinations(JSON.parse(storedDestinations));
            } else {
                setDestinations(initialDestinations);
            }

            // Load Content
            const storedHome = localStorage.getItem("homeContent");
            if (storedHome) setHomeContent(JSON.parse(storedHome));

            const storedAbout = localStorage.getItem("aboutContent");
            if (storedAbout) setAboutContent(JSON.parse(storedAbout));

            const storedContact = localStorage.getItem("contactContent");
            if (storedContact) setContactContent(JSON.parse(storedContact));

            const storedPackages = localStorage.getItem("packagesContent");
            if (storedPackages) setPackagesContent(JSON.parse(storedPackages));
        } catch (error) {
            console.error("Error loading data from localStorage:", error);
            // Fallback to defaults if parsing fails
            setDestinations(initialDestinations);
        }
    }, []);

    // Save destinations to localStorage whenever they change
    useEffect(() => {
        if (destinations.length > 0) {
            localStorage.setItem("destinations_v31", JSON.stringify(destinations));
        }
    }, [destinations]);

    // Save Content to localStorage
    useEffect(() => {
        localStorage.setItem("homeContent", JSON.stringify(homeContent));
    }, [homeContent]);

    useEffect(() => {
        localStorage.setItem("aboutContent", JSON.stringify(aboutContent));
    }, [aboutContent]);

    useEffect(() => {
        localStorage.setItem("contactContent", JSON.stringify(contactContent));
    }, [contactContent]);

    useEffect(() => {
        localStorage.setItem("packagesContent", JSON.stringify(packagesContent));
    }, [packagesContent]);

    const login = (password: string) => {
        if (password === "password123") {
            setIsAuthenticated(true);
            localStorage.setItem("isAdminAuthenticated", "true");
            return true;
        }
        return false;
    };

    const logout = () => {
        setIsAuthenticated(false);
        localStorage.removeItem("isAdminAuthenticated");
    };

    const addDestination = (destination: Destination) => {
        setDestinations((prev) => [...prev, destination]);
    };

    const updateDestination = (updatedDestination: Destination) => {
        setDestinations((prev) =>
            prev.map((dest) => (dest.id === updatedDestination.id ? updatedDestination : dest))
        );
    };

    const deleteDestination = (id: string) => {
        setDestinations((prev) => prev.filter((dest) => dest.id !== id));
    };

    // Content Updaters
    const updateHomeContent = (content: HomeContent) => setHomeContent(content);
    const updateAboutContent = (content: AboutContent) => setAboutContent(content);
    const updateContactContent = (content: ContactContent) => setContactContent(content);
    const updatePackagesContent = (content: PackagesContent) => setPackagesContent(content);

    return (
        <AdminContext.Provider
            value={{
                isAuthenticated,
                login,
                logout,
                destinations,
                addDestination,
                updateDestination,
                deleteDestination,
                homeContent,
                updateHomeContent,
                aboutContent,
                updateAboutContent,
                contactContent,
                updateContactContent,
                packagesContent,
                updatePackagesContent,
            }}
        >
            {children}
        </AdminContext.Provider>
    );
};

export const useAdmin = () => {
    const context = useContext(AdminContext);
    if (context === undefined) {
        throw new Error("useAdmin must be used within an AdminProvider");
    }
    return context;
};
