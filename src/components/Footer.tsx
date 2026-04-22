import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin, ShieldCheck, Clock, Star, CheckCircle2 } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-[#0f1115] text-white pt-24 pb-12">
            <div className="container mx-auto px-4">
                {/* Partners Section */}
                <div className="text-center mb-24 pb-16 border-b border-white/5">
                    <span className="text-[10px] uppercase tracking-[0.4em] mb-10 text-white/40 block font-bold">Partnered With Global Tourism Boards</span>
                    <div className="flex flex-wrap justify-center items-center gap-10 md:gap-24 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700">
                        <span className="text-3xl font-heading font-bold text-white tracking-tighter">PENANG</span>
                        <span className="text-3xl font-heading font-bold text-white tracking-tighter">ABU DHABI</span>
                        <span className="text-3xl font-heading font-bold text-white tracking-tighter">JAPAN.</span>
                        <span className="text-3xl font-heading font-bold text-white tracking-tighter">THAILAND</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
                    {/* Company Info */}
                    <div className="space-y-8">
                        <Link to="/" className="inline-block group">
                            <span className="text-2xl font-bold tracking-tighter text-white font-heading uppercase group-hover:text-primary transition-colors">PLANET LIFE</span>
                        </Link>
                        <p className="text-white/60 leading-relaxed font-medium text-sm">
                            Curating bespoke international adventures that define luxury and discovery. Experience the world through our expert eyes.
                        </p>
                        <div className="flex space-x-4">
                            {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 border border-white/10 flex items-center justify-center rounded-full hover:bg-primary hover:border-primary transition-all duration-300">
                                    <Icon className="w-4 h-4" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-sm font-bold mb-8 font-heading uppercase tracking-widest text-primary">Explore</h3>
                        <ul className="space-y-4">
                            <li><Link to="/" className="text-white/50 hover:text-white transition-colors text-sm font-medium">Home</Link></li>
                            <li><Link to="/about" className="text-white/50 hover:text-white transition-colors text-sm font-medium">About Us</Link></li>
                            <li><Link to="/destinations" className="text-white/50 hover:text-white transition-colors text-sm font-medium">Destinations</Link></li>
                            <li><Link to="/packages" className="text-white/50 hover:text-white transition-colors text-sm font-medium">Packages</Link></li>
                            <li><Link to="/contact" className="text-white/50 hover:text-white transition-colors text-sm font-medium">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Destinations */}
                    <div>
                        <h3 className="text-sm font-bold mb-8 font-heading uppercase tracking-widest text-primary">Destinations</h3>
                        <ul className="space-y-4">
                            <li><Link to="/destination/thailand" className="text-white/50 hover:text-white transition-colors text-sm font-medium">Thailand</Link></li>
                            <li><Link to="/destination/bali" className="text-white/50 hover:text-white transition-colors text-sm font-medium">Bali</Link></li>
                            <li><Link to="/destination/maldives" className="text-white/50 hover:text-white transition-colors text-sm font-medium">Maldives</Link></li>
                            <li><Link to="/destination/dubai" className="text-white/50 hover:text-white transition-colors text-sm font-medium">Dubai</Link></li>
                            <li><Link to="/destination/singapore" className="text-white/50 hover:text-white transition-colors text-sm font-medium">Singapore</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-8">
                        <h3 className="text-sm font-bold mb-8 font-heading uppercase tracking-widest text-primary">Office</h3>
                        <ul className="space-y-6">
                            <li className="flex items-start gap-4">
                                <div className="w-10 h-10 border border-white/10 flex items-center justify-center rounded-full shrink-0">
                                    <MapPin className="w-4 h-4 text-white/40" />
                                </div>
                                <span className="text-white/60 text-sm font-medium leading-relaxed italic">123 Travel Street, Adventure City, AC 56789</span>
                            </li>
                            <li className="flex items-center gap-4">
                                <div className="w-10 h-10 border border-white/10 flex items-center justify-center rounded-full shrink-0">
                                    <Phone className="w-4 h-4 text-white/40" />
                                </div>
                                <span className="text-white/60 text-sm font-medium tracking-wider">+91 98765 43210</span>
                            </li>
                            <li className="flex items-center gap-4">
                                <div className="w-10 h-10 border border-white/10 flex items-center justify-center rounded-full shrink-0">
                                    <Mail className="w-4 h-4 text-white/40" />
                                </div>
                                <span className="text-white/60 text-sm font-medium">hello@planetlife.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Trust Badges */}
                <div className="border-t border-white/5 py-20">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
                        {[
                            { icon: ShieldCheck, label: "100% Secure", sub: "Payment Protection" },
                            { icon: Clock, label: "24/7 Support", sub: "Trip Assistance" },
                            { icon: Star, label: "Top Rated", sub: "4.9/5 Google Reviews" },
                            { icon: CheckCircle2, label: "Verified", sub: "Certified Agency" }
                        ].map((item, i) => (
                            <div key={i} className="flex flex-col items-center text-center gap-4 group">
                                <item.icon className="w-8 h-8 text-white/20 group-hover:text-primary transition-colors duration-500" />
                                <div>
                                    <h4 className="font-bold font-heading text-white text-xs uppercase tracking-widest mb-1">{item.label}</h4>
                                    <p className="text-[10px] text-white/40 uppercase tracking-tighter font-bold">{item.sub}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-white/30 text-[11px] font-bold tracking-widest uppercase">
                        &copy; {new Date().getFullYear()} PLANET LIFE. All rights reserved.
                    </p>
                    <div className="flex gap-8">
                        <Link to="/privacy" className="text-white/30 hover:text-white transition-colors text-[10px] font-bold uppercase tracking-widest">Privacy Policy</Link>
                        <Link to="/terms" className="text-white/30 hover:text-white transition-colors text-[10px] font-bold uppercase tracking-widest">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
