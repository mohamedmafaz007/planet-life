import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin, ShieldCheck, Clock, Star, CheckCircle2 } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-[#022c22] text-white pt-16 pb-8">
            <div className="container mx-auto px-4">
                {/* Partners Section */}
                <div className="text-center mb-16 border-b border-white/10 pb-12">
                    <p className="text-sm uppercase tracking-widest mb-8 text-gray-400">Partnered With the Best in Travel</p>
                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                        {/* Placeholder for Partner Logos - using text for now as I don't have the exact logo assets */}
                        <span className="text-2xl font-serif font-bold">Penang</span>
                        <span className="text-2xl font-serif font-bold">abu dhabi</span>
                        <span className="text-2xl font-serif font-bold">Japan.</span>
                        <span className="text-2xl font-serif font-bold">Thailand</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Company Info */}
                    <div>
                        <Link to="/" className="inline-block mb-6">
                            <span className="text-3xl font-bold tracking-wide">PLANET LIFE</span>
                        </Link>
                        <p className="text-gray-300 mb-6 leading-relaxed">
                            Customized international adventures tailored to your desires. Experience the world with our expert guidance.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-[#d4af37] transition-colors">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-[#d4af37] transition-colors">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-[#d4af37] transition-colors">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-[#d4af37] transition-colors">
                                <Youtube className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-bold mb-6">Quick Links</h3>
                        <ul className="space-y-4">
                            <li><Link to="/" className="text-gray-300 hover:text-[#d4af37] transition-colors">Home</Link></li>
                            <li><Link to="/about" className="text-gray-300 hover:text-[#d4af37] transition-colors">About Us</Link></li>
                            <li><Link to="/destinations" className="text-gray-300 hover:text-[#d4af37] transition-colors">Destinations</Link></li>
                            <li><Link to="/packages" className="text-gray-300 hover:text-[#d4af37] transition-colors">Packages</Link></li>
                            <li><Link to="/contact" className="text-gray-300 hover:text-[#d4af37] transition-colors">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Destinations */}
                    <div>
                        <h3 className="text-xl font-bold mb-6">Popular Destinations</h3>
                        <ul className="space-y-4">
                            <li><Link to="/destination/thailand" className="text-gray-300 hover:text-[#d4af37] transition-colors">Thailand</Link></li>
                            <li><Link to="/destination/bali" className="text-gray-300 hover:text-[#d4af37] transition-colors">Bali</Link></li>
                            <li><Link to="/destination/maldives" className="text-gray-300 hover:text-[#d4af37] transition-colors">Maldives</Link></li>
                            <li><Link to="/destination/dubai" className="text-gray-300 hover:text-[#d4af37] transition-colors">Dubai</Link></li>
                            <li><Link to="/destination/singapore" className="text-gray-300 hover:text-[#d4af37] transition-colors">Singapore</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-xl font-bold mb-6">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-[#d4af37] mt-1" />
                                <span className="text-gray-300">123 Travel Street, Adventure City, AC 56789</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-[#d4af37]" />
                                <span className="text-gray-300">+91 98765 43210</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-[#d4af37]" />
                                <span className="text-gray-300">hello@planetlife.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Trust Badges */}
                <div className="border-t border-white/10 py-12">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div className="flex flex-col items-center text-center gap-3">
                            <div className="bg-white/10 p-4 rounded-2xl">
                                <ShieldCheck className="w-8 h-8 text-[#d4af37]" />
                            </div>
                            <div>
                                <h4 className="font-bold">100% Secure</h4>
                                <p className="text-xs text-gray-400">Payment Protection</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center text-center gap-3">
                            <div className="bg-white/10 p-4 rounded-2xl">
                                <Clock className="w-8 h-8 text-[#d4af37]" />
                            </div>
                            <div>
                                <h4 className="font-bold">24/7 Support</h4>
                                <p className="text-xs text-gray-400">Trip Assistance</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center text-center gap-3">
                            <div className="bg-white/10 p-4 rounded-2xl">
                                <Star className="w-8 h-8 text-[#d4af37]" />
                            </div>
                            <div>
                                <h4 className="font-bold">Top Rated</h4>
                                <p className="text-xs text-gray-400">4.9/5 Google Reviews</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center text-center gap-3">
                            <div className="bg-white/10 p-4 rounded-2xl">
                                <CheckCircle2 className="w-8 h-8 text-[#d4af37]" />
                            </div>
                            <div>
                                <h4 className="font-bold">Verified</h4>
                                <p className="text-xs text-gray-400">IATA Certified Agency</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 text-center text-gray-400 text-sm">
                    <p>&copy; {new Date().getFullYear()} PLANET LIFE. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
