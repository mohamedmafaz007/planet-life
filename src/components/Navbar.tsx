import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
    DropdownMenuSub,
    DropdownMenuSubTrigger,
    DropdownMenuSubContent,
} from "@/components/ui/dropdown-menu";
import { useAdmin } from "@/context/AdminContext";

const Navbar = () => {
    const { destinations } = useAdmin();
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Dark blue background
    const navbarClasses = "bg-[#0f172a] shadow-lg";

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "Destinations", path: "/destinations" },
        { name: "Packages", path: "/packages" },
        { name: "About", path: "/about" },
        { name: "Contact", path: "/contact" },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navbarClasses}`}
        >
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="flex items-center space-x-2 group">
                    <img
                        src="/planet-life-logo.jpg"
                        alt="Planet Life Logo"
                        className="h-12 w-auto rounded-sm transition-transform duration-300 group-hover:scale-105"
                    />
                    <span className="text-2xl font-serif font-bold text-white tracking-wide group-hover:text-primary transition-colors">
                        PLANET LIFE
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className="font-medium text-white hover:text-primary transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Hamburger Menu */}
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                            <Menu className="h-8 w-8" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-56 bg-[#0f172a] border-gray-800 text-white">
                        <DropdownMenuItem asChild className="focus:bg-white/10 focus:text-white cursor-pointer">
                            <Link to="/" className="w-full">Home</Link>
                        </DropdownMenuItem>

                        <DropdownMenuSub>
                            <DropdownMenuSubTrigger className="focus:bg-white/10 focus:text-white cursor-pointer">
                                Destinations
                            </DropdownMenuSubTrigger>
                            <DropdownMenuSubContent className="bg-[#0f172a] border-gray-800 text-white">
                                <DropdownMenuItem asChild className="focus:bg-white/10 focus:text-white cursor-pointer">
                                    <Link to="/destinations" className="w-full font-semibold">All Destinations</Link>
                                </DropdownMenuItem>
                                {destinations.map((destination) => (
                                    <DropdownMenuItem key={destination.id} asChild className="focus:bg-white/10 focus:text-white cursor-pointer">
                                        <Link to={`/destination/${destination.id}`} className="w-full">
                                            {destination.name}
                                        </Link>
                                    </DropdownMenuItem>
                                ))}
                            </DropdownMenuSubContent>
                        </DropdownMenuSub>

                        <DropdownMenuItem asChild className="focus:bg-white/10 focus:text-white cursor-pointer">
                            <Link to="/packages" className="w-full">Packages</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild className="focus:bg-white/10 focus:text-white cursor-pointer">
                            <Link to="/about" className="w-full">About Us</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild className="focus:bg-white/10 focus:text-white cursor-pointer">
                            <Link to="/contact" className="w-full">Contact</Link>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </nav>
    );
};

export default Navbar;
