import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAdmin } from "@/context/AdminContext";

const Navbar = () => {
    const { destinations } = useAdmin();
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#022c22] shadow-md ${isScrolled ? "py-2" : "py-4"
                }`}
        >
            <div className="container mx-auto px-4 flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="flex items-center space-x-2">
                    <img
                        src="/planet-life-logo.jpg"
                        alt="Planet Life Logo"
                        className="h-10 w-auto"
                    />
                    <span className="text-2xl font-bold tracking-wide text-white">
                        PLANET LIFE
                    </span>
                </Link>

                {/* Right Side Actions */}
                <div className="flex items-center gap-8">
                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        <Link to="/" className="font-medium hover:opacity-80 transition-colors text-white">Home</Link>
                        <Link to="/destinations" className="font-medium hover:opacity-80 transition-colors text-white">Destinations</Link>
                        <Link to="/packages" className="font-medium hover:opacity-80 transition-colors text-white">Packages</Link>
                        <Link to="/about" className="font-medium hover:opacity-80 transition-colors text-white">About Us</Link>
                        <Link to="/contact" className="font-medium hover:opacity-80 transition-colors text-white">Contact</Link>
                    </div>

                    {/* Get Quote Button (Visible on all screens) */}
                    <Button
                        className="bg-[#d4af37] hover:bg-[#b8962e] text-white font-semibold rounded-full px-6"
                    >
                        <Phone className="w-4 h-4 mr-2" />
                        Get Quote
                    </Button>

                    {/* Mobile Menu Trigger */}
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="md:hidden text-white hover:bg-white/10">
                                <Menu className="h-6 w-6" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-64 bg-white text-secondary p-4">
                            <DropdownMenuItem asChild>
                                <Link to="/" className="w-full py-2 font-medium">Home</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                                <Link to="/destinations" className="w-full py-2 font-medium">Destinations</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                                <Link to="/packages" className="w-full py-2 font-medium">Packages</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                                <Link to="/about" className="w-full py-2 font-medium">About Us</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                                <Link to="/contact" className="w-full py-2 font-medium">Contact</Link>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

