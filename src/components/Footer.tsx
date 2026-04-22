import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin, ShieldCheck, Clock, Star, CheckCircle2 } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-red-600 text-black pt-16 pb-8 shadow-[0_-10px_20px_rgba(0,0,0,0.1)]">
            <div className="container mx-auto px-4">
                {/* Partners Section */}
                <div className="text-center mb-16 border-b border-black/10 pb-12">
                    <p className="text-sm uppercase tracking-widest mb-8 text-black/60 font-sans font-bold">Partnered With the Best in Travel</p>
                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-80 grayscale hover:grayscale-0 transition-all duration-500">
                        <span className="text-2xl font-sans font-extrabold text-black">Penang</span>
                        <span className="text-2xl font-sans font-extrabold text-black">abu dhabi</span>
                        <span className="text-2xl font-sans font-extrabold text-black">Japan.</span>
                        <span className="text-2xl font-sans font-extrabold text-black">Thailand</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Company Info */}
                    <div>
                        <Link to="/" className="inline-block mb-6">
                            <span className="text-3xl font-extrabold tracking-tight text-black font-sans uppercase">PLANET LIFE</span>
                        </Link>
                        <p className="text-black/80 mb-6 leading-relaxed font-sans font-medium">
                            Customized international adventures tailored to your desires. Experience the world with our expert guidance.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="bg-black/10 p-2 rounded-full hover:bg-black hover:text-red-500 transition-colors">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="#" className="bg-black/10 p-2 rounded-full hover:bg-black hover:text-red-500 transition-colors">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="bg-black/10 p-2 rounded-full hover:bg-black hover:text-red-500 transition-colors">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="#" className="bg-black/10 p-2 rounded-full hover:bg-black hover:text-red-500 transition-colors">
                                <Youtube className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-extrabold mb-6 font-sans uppercase">Quick Links</h3>
                        <ul className="space-y-4">
                            <li><Link to="/" className="text-black/80 hover:text-white transition-colors font-sans font-bold">Home</Link></li>
                            <li><Link to="/about" className="text-black/80 hover:text-white transition-colors font-sans font-bold">About Us</Link></li>
                            <li><Link to="/destinations" className="text-black/80 hover:text-white transition-colors font-sans font-bold">Destinations</Link></li>
                            <li><Link to="/packages" className="text-black/80 hover:text-white transition-colors font-sans font-bold">Packages</Link></li>
                            <li><Link to="/contact" className="text-black/80 hover:text-white transition-colors font-sans font-bold">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Destinations */}
                    <div>
                        <h3 className="text-xl font-extrabold mb-6 font-sans uppercase">Popular Destinations</h3>
                        <ul className="space-y-4">
                            <li><Link to="/destination/thailand" className="text-black/80 hover:text-white transition-colors font-sans font-bold">Thailand</Link></li>
                            <li><Link to="/destination/bali" className="text-black/80 hover:text-white transition-colors font-sans font-bold">Bali</Link></li>
                            <li><Link to="/destination/maldives" className="text-black/80 hover:text-white transition-colors font-sans font-bold">Maldives</Link></li>
                            <li><Link to="/destination/dubai" className="text-black/80 hover:text-white transition-colors font-sans font-bold">Dubai</Link></li>
                            <li><Link to="/destination/singapore" className="text-black/80 hover:text-white transition-colors font-sans font-bold">Singapore</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-xl font-extrabold mb-6 font-sans uppercase">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-black mt-1" />
                                <span className="text-black/80 font-sans font-bold">123 Travel Street, Adventure City, AC 56789</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-black" />
                                <span className="text-black/80 font-sans font-bold">+91 98765 43210</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-black" />
                                <span className="text-black/80 font-sans font-bold">hello@planetlife.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Trust Badges */}
                <div className="border-t border-black/10 py-12">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div className="flex flex-col items-center text-center gap-3">
                            <div className="bg-black/10 p-4 rounded-2xl border border-black/10">
                                <ShieldCheck className="w-8 h-8 text-black" />
                            </div>
                            <div>
                                <h4 className="font-extrabold font-sans text-black">100% Secure</h4>
                                <p className="text-xs text-black/60 font-sans">Payment Protection</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center text-center gap-3">
                            <div className="bg-black/10 p-4 rounded-2xl border border-black/10">
                                <Clock className="w-8 h-8 text-black" />
                            </div>
                            <div>
                                <h4 className="font-extrabold font-sans text-black">24/7 Support</h4>
                                <p className="text-xs text-black/60 font-sans">Trip Assistance</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center text-center gap-3">
                            <div className="bg-black/10 p-4 rounded-2xl border border-black/10">
                                <Star className="w-8 h-8 text-black" />
                            </div>
                            <div>
                                <h4 className="font-extrabold font-sans text-black">Top Rated</h4>
                                <p className="text-xs text-black/60 font-sans">4.9/5 Google Reviews</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center text-center gap-3">
                            <div className="bg-black/10 p-4 rounded-2xl border border-black/10">
                                <CheckCircle2 className="w-8 h-8 text-black" />
                            </div>
                            <div>
                                <h4 className="font-extrabold font-sans text-black">Verified</h4>
                                <p className="text-xs text-black/60 font-sans">IATA Certified Agency</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-black/10 py-8 text-center text-black/60 text-sm font-sans font-bold">
                    <p>&copy; {new Date().getFullYear()} PLANET LIFE. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
