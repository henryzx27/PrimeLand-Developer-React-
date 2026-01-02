import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Instagram, Facebook, Linkedin, MapPin, Phone, Mail } from 'lucide-react';
import FadeIn from './ui/FadeIn';

const Footer = () => {
    return (
        <footer className="bg-primary text-neutral-300 pt-24 pb-12 overflow-hidden">
            <div className="container-custom">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 border-b border-neutral-800 pb-20">
                    
                    <div className="md:col-span-5 flex flex-col justify-between">
                        <FadeIn>
                            <h2 className="text-4xl md:text-5xl font-serif text-white mb-8">PrimeLand<span className="text-accent">.</span></h2>
                            <p className="text-neutral-400 leading-relaxed max-w-sm font-light text-lg mb-8">
                                Crafting premium living spaces that stand the test of time. 
                                We don't just sell plots; we build legacies.
                            </p>
                            <div className="flex gap-4">
                                {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                                    <a 
                                        key={i} 
                                        href="#" 
                                        className="w-10 h-10 border border-neutral-700 rounded-full flex items-center justify-center hover:bg-accent hover:border-accent hover:text-white transition-all duration-300"
                                    >
                                        <Icon size={18} strokeWidth={1.5} />
                                    </a>
                                ))}
                           </div>
                        </FadeIn>
                    </div>

                    <div className="md:col-span-3 md:col-start-7">
                        <FadeIn delay={0.1}>
                            <h4 className="text-white font-medium mb-8 tracking-widest text-xs uppercase">Explore</h4>
                            <ul className="space-y-4 font-light text-neutral-400">
                                <li><Link to="/about" className="hover:text-white hover:translate-x-2 transition-all duration-300 inline-block">Our Story</Link></li>
                                <li><Link to="/projects" className="hover:text-white hover:translate-x-2 transition-all duration-300 inline-block">Current Projects</Link></li>
                                <li><Link to="/gallery" className="hover:text-white hover:translate-x-2 transition-all duration-300 inline-block">Visual Gallery</Link></li>
                                <li><Link to="/contact" className="hover:text-white hover:translate-x-2 transition-all duration-300 inline-block">Contact Us</Link></li>
                            </ul>
                        </FadeIn>
                    </div>

                    <div className="md:col-span-3">
                         <FadeIn delay={0.2}>
                             <h4 className="text-white font-medium mb-8 tracking-widest text-xs uppercase">Visit Us</h4>
                             <div className="space-y-6">
                                <div className="flex items-start gap-4 group">
                                    <MapPin className="text-accent shrink-0 mt-1 transition-transform group-hover:scale-110" size={20} strokeWidth={1.5} />
                                    <address className="not-italic text-neutral-400 font-light leading-relaxed group-hover:text-white transition-colors">
                                        No. 45, Sterling Road,<br />
                                        Nungambakkam,<br />
                                        Chennai - 600034
                                    </address>
                                </div>
                                
                                <a href="mailto:hello@primeland.in" className="flex items-center gap-4 group hover:text-white transition-colors">
                                    <Mail className="text-accent shrink-0 transition-transform group-hover:scale-110" size={20} strokeWidth={1.5} />
                                    <span className="text-neutral-400 font-light group-hover:text-white transition-colors">hello@primeland.in</span>
                                </a>

                                <a href="tel:+914428282828" className="flex items-center gap-4 group hover:text-white transition-colors">
                                    <Phone className="text-accent shrink-0 transition-transform group-hover:scale-110" size={20} strokeWidth={1.5} />
                                    <span className="text-neutral-400 font-light group-hover:text-white transition-colors">+91 44 2828 2828</span>
                                </a>
                             </div>
                         </FadeIn>
                    </div>
                </div>

                {/* <div className="pt-10 flex flex-col md:flex-row justify-between items-center text-xs text-neutral-500 font-light tracking-wide">
                    <p>&copy; {new Date().getFullYear()} PrimeLand Developers. All rights reserved.</p>
                    <div className="flex gap-8 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div> */}
                <div className="pt-10 flex flex-col md:flex-row justify-between items-center text-xs text-neutral-500 font-light tracking-wide">
                <div className="flex flex-col gap-2">
                    <p>
                        &copy; {new Date().getFullYear()} PrimeLand Developers. All rights reserved.
                    </p>
                    <p className="text-neutral-600 italic opacity-60">This is a demo project for presentation purposes.</p>
                </div>

                <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 mt-4 md:mt-0">
                    <div className="flex gap-8">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>

                    <span className="text-neutral-600 hidden md:inline">|</span>

                    <p className="text-neutral-400">
                        Designed & Developed by{" "}
                        <a 
                            href="https://cryza.in" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-accent hover:text-white transition-colors font-medium"
                        >
                            Cryza
                        </a>{" "}
                        –{" "}
                        <a 
                            href="https://henry.cryza.in" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="hover:text-white transition-colors"
                        >
                            Henry
                        </a>
                    </p>
                </div>
            </div>

            </div>
        </footer>
    );
};

export default Footer;
