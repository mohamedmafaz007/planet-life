import { Link } from "react-router-dom";
import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-[#0f172a] text-secondary-foreground">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* About */}
                    <div>
                        <div className="flex items-center space-x-2 mb-4">
                            <img
                                src="/planet-life-logo.jpg"
                                alt="Planet Life Logo"
                                className="h-10 w-auto rounded-sm"
                            />
                            <h3 className="text-xl font-serif font-bold">PLANET LIFE</h3>
                        </div>
                        <p className="text-sm opacity-90 mb-4">
                            Your trusted travel partner for unforgettable journeys across the globe.
                            We create premium travel experiences tailored to your dreams.
                        </p>
                        <div className="flex space-x-4">
                            <a
                                href="https://instagram.com/_planet_life"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-primary transition-colors"
                                aria-label="Instagram"
                            >
                                <Instagram className="h-5 w-5" />
                            </a>
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-primary transition-colors"
                                aria-label="Facebook"
                            >
                                <Facebook className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link to="/" className="hover:text-primary transition-colors">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/destinations" className="hover:text-primary transition-colors">
                                    Destinations
                                </Link>
                            </li>
                            <li>
                                <Link to="/packages" className="hover:text-primary transition-colors">
                                    Packages
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" className="hover:text-primary transition-colors">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className="hover:text-primary transition-colors">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Popular Destinations */}
                    <div>
                        <h4 className="font-semibold mb-4">Popular Destinations</h4>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link to="/destination/malaysia" className="hover:text-primary transition-colors">
                                    Malaysia
                                </Link>
                            </li>
                            <li>
                                <Link to="/destination/thailand" className="hover:text-primary transition-colors">
                                    Bangkok, Thailand
                                </Link>
                            </li>
                            <li>
                                <Link to="/destination/bali" className="hover:text-primary transition-colors">
                                    Bali, Indonesia
                                </Link>
                            </li>
                            <li>
                                <Link to="/destination/dubai" className="hover:text-primary transition-colors">
                                    Dubai, UAE
                                </Link>
                            </li>
                            <li>
                                <Link to="/destination/singapore" className="hover:text-primary transition-colors">
                                    Singapore
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="font-semibold mb-4">Contact Us</h4>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-start space-x-2">
                                <Phone className="h-4 w-4 mt-1 flex-shrink-0" />
                                <div>
                                    <a href="tel:+919994558497" className="hover:text-primary transition-colors">
                                        +91 99945 58497
                                    </a>
                                </div>
                            </li>
                            <li className="flex items-start space-x-2">
                                <Mail className="h-4 w-4 mt-1 flex-shrink-0" />
                                <div>
                                    <a
                                        href="mailto:planetlifecamping@gmail.com"
                                        className="hover:text-primary transition-colors break-all"
                                    >
                                        planetlifecamping@gmail.com
                                    </a>
                                </div>
                            </li>
                            <li className="flex items-start space-x-2">
                                <Instagram className="h-4 w-4 mt-1 flex-shrink-0" />
                                <div>
                                    <a
                                        href="https://instagram.com/_planet_life"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-primary transition-colors"
                                    >
                                        @_planet_life
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-secondary-foreground/20 mt-8 pt-8 text-center text-sm opacity-90">
                    <p>
                        &copy; {new Date().getFullYear()} Planet Life Travel & Tours. All rights reserved.
                    </p>
                    <p className="mt-2">
                        Google Rating: ⭐ 4.9 | Trusted by thousands of happy travelers
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
