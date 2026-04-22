import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
    DropdownMenuLabel,
    DropdownMenuSeparator,
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
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-red-600 shadow-xl ${isScrolled ? "py-2" : "py-4"
                }`}
        >
            <div className="container mx-auto px-4 flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="flex items-center space-x-2">
                    <img
                        src="/planet-life-logo.jpg"
                        alt="Planet Life Logo"
                        className="h-10 w-auto rounded-md shadow-sm"
                    />
                    <span className="text-2xl font-extrabold tracking-tight text-black font-sans uppercase">
                        PLANET LIFE
                    </span>
                </Link>

                {/* Right Side Actions */}
                <div className="flex items-center gap-8">
                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-6">
                        <Link to="/" className="font-bold hover:text-white transition-colors text-black font-sans uppercase text-sm">Home</Link>
                        <DropdownMenu>
                            <DropdownMenuTrigger className="flex items-center gap-1 font-bold hover:text-white transition-colors text-black font-sans uppercase text-sm outline-none">
                                Destinations <ChevronDown className="w-4 h-4" />
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="bg-white border-black/10 p-2 min-w-[280px] z-[60]">
                                <div className="grid grid-cols-2 gap-2 p-2">
                                    <div>
                                        <DropdownMenuLabel className="text-[10px] text-red-600 font-black uppercase mb-1 px-2">International Tours</DropdownMenuLabel>
                                        {["Thailand", "Malaysia", "Bali", "Maldives", "Vietnam", "Srilanka", "Dubai", "Singapore"].map((name) => {
                                            const dest = destinations.find(d => 
                                                d.name.toLowerCase() === name.toLowerCase() || 
                                                d.country.toLowerCase() === name.toLowerCase()
                                            );
                                            return (
                                                <DropdownMenuItem key={name} asChild>
                                                    <Link
                                                        to={dest ? `/destination/${dest.id}` : "/destinations"}
                                                        className="w-full font-bold text-black hover:text-white hover:bg-red-600 py-1.5 px-3 rounded-md transition-colors font-sans uppercase text-[10px] cursor-pointer block"
                                                    >
                                                        {name}
                                                    </Link>
                                                </DropdownMenuItem>
                                            );
                                        })}
                                    </div>
                                    <div className="border-l border-black/5 pl-2">
                                        <DropdownMenuLabel className="text-[10px] text-red-600 font-black uppercase mb-1 px-2">National Tours</DropdownMenuLabel>
                                        {["Kerala", "Andaman", "Himachal", "Kashmir", "Goa", "Karnataka", "Rajasthan"].map((name) => {
                                            const dest = destinations.find(d => 
                                                d.name.toLowerCase() === name.toLowerCase() || 
                                                d.country.toLowerCase() === name.toLowerCase()
                                            );
                                            return (
                                                <DropdownMenuItem key={name} asChild>
                                                    <Link
                                                        to={dest ? `/destination/${dest.id}` : "/destinations"}
                                                        className="w-full font-bold text-black hover:text-white hover:bg-red-600 py-1.5 px-3 rounded-md transition-colors font-sans uppercase text-[10px] cursor-pointer block"
                                                    >
                                                        {name}
                                                    </Link>
                                                </DropdownMenuItem>
                                            );
                                        })}
                                    </div>
                                </div>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem asChild>
                                    <Link
                                        to="/destinations"
                                        className="w-full font-bold text-black hover:text-white hover:bg-red-600 py-2 px-4 rounded-md transition-colors font-sans uppercase text-xs mt-1 cursor-pointer block text-center"
                                    >
                                        View All Destinations
                                    </Link>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>

                        <Link to="/packages" className="font-bold hover:text-white transition-colors text-black font-sans uppercase text-sm">Packages</Link>
                        <Link to="/about" className="font-bold hover:text-white transition-colors text-black font-sans uppercase text-sm">About Us</Link>
                        <Link to="/contact" className="font-bold hover:text-white transition-colors text-black font-sans uppercase text-sm">Contact</Link>
                    </div>

                    {/* Get Quote Button (Visible on all screens) */}
                    <Link to="/quote">
                        <Button
                            className="bg-black hover:bg-black/80 text-white font-extrabold rounded-full px-6 font-sans border-2 border-black/10 uppercase text-xs"
                        >
                            <Phone className="w-4 h-4 mr-2" />
                            Get Quote
                        </Button>
                    </Link>

                    {/* Mobile Menu Trigger */}
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="md:hidden text-black hover:bg-black/10">
                                <Menu className="h-6 w-6" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-64 bg-white border-black/20 p-4 max-h-[80vh] overflow-y-auto z-[60]">
                            <DropdownMenuItem asChild>
                                <Link to="/" className="w-full py-2 font-bold text-black hover:text-red-600 font-sans uppercase text-sm">Home</Link>
                            </DropdownMenuItem>
                            
                            <div className="my-2 border-t border-black/10 pt-2 px-2">
                                <p className="text-[10px] text-red-600 font-black uppercase mb-2">International Tours</p>
                                <div className="grid grid-cols-2 gap-1 mb-4">
                                    {["Thailand", "Malaysia", "Bali", "Maldives", "Vietnam", "Srilanka", "Dubai", "Singapore"].map(name => {
                                        const dest = destinations.find(d => 
                                            d.name.toLowerCase() === name.toLowerCase() || 
                                            d.country.toLowerCase() === name.toLowerCase()
                                        );
                                        return (
                                            <DropdownMenuItem key={name} asChild>
                                                <Link to={dest ? `/destination/${dest.id}` : "/destinations"} className="w-full py-1 px-2 font-bold text-black hover:text-red-600 font-sans text-[10px] uppercase">{name}</Link>
                                            </DropdownMenuItem>
                                        );
                                    })}
                                </div>
                                <p className="text-[10px] text-red-600 font-black uppercase mb-2">National Tours</p>
                                <div className="grid grid-cols-2 gap-1">
                                    {["Kerala", "Andaman", "Himachal", "Kashmir", "Goa", "Karnataka", "Rajasthan"].map(name => {
                                        const dest = destinations.find(d => 
                                            d.name.toLowerCase() === name.toLowerCase() || 
                                            d.country.toLowerCase() === name.toLowerCase()
                                        );
                                        return (
                                            <DropdownMenuItem key={name} asChild>
                                                <Link to={dest ? `/destination/${dest.id}` : "/destinations"} className="w-full py-1 px-2 font-bold text-black hover:text-red-600 font-sans text-[10px] uppercase">{name}</Link>
                                            </DropdownMenuItem>
                                        );
                                    })}
                                </div>
                            </div>

                            <DropdownMenuItem asChild>
                                <Link to="/packages" className="w-full py-2 font-bold text-black hover:text-red-600 font-sans uppercase text-sm border-t border-black/10 mt-2">All Packages</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                                <Link to="/about" className="w-full py-2 font-bold text-black hover:text-red-600 font-sans uppercase text-sm">About Us</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                                <Link to="/contact" className="w-full py-2 font-bold text-black hover:text-red-600 font-sans uppercase text-sm">Contact</Link>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

