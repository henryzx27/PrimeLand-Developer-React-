import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import FadeIn from '../components/ui/FadeIn';

const Home = () => {
    const { scrollY } = useScroll();
    const heroY = useTransform(scrollY, [0, 500], [0, 100]);
    const imageScale = useTransform(scrollY, [0, 500], [1, 1.1]);

    return (
        <div className="overflow-hidden">
            {/* HERRO SECTION - Asymmetric & Architectural */}
            <section className="relative min-h-screen flex items-center bg-secondary pt-24">
                <div className="container-custom grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    
                    {/* Text Area (Left - 7 cols) */}
                    <div className="lg:col-span-7 relative z-10 py-10 lg:py-0">
                        <FadeIn>
                            {/* <span className="inline-block border-b border-primary pb-1 text-xs font-bold tracking-[0.2em] uppercase mb-8 text-neutral-500">
                                Est. 2012
                            </span> */}
                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-primary leading-[0.9] mb-8">
                                Crafting <br />
                                <span className="italic font-light text-neutral-400">Timeless</span> <br />
                                Legacies.
                            </h1>
                            <p className="relative top-[-8px] max-w-md text-lg text-neutral-600 font-light mb-12 leading-relaxed">
                                PrimeLand Developers redefines the landscape of Chennai with DTCP Approved plots and premium villas. 
                                We curate lifestyles rooted in trust, transparency, and value.
                            </p>
                            
                            <div className="flex flex-wrap gap-6">
                                <Link 
                                    to="/projects" 
                                    className="relative top-[-24px] bg-primary text-secondary px-8 py-4 text-xs font-bold tracking-widest uppercase hover:bg-accent hover:-translate-y-0.5 transition-transform transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center gap-3 group"
                                >
                                    View Projects
                                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                </Link>
                                <a 
                                    href="https://wa.me/919999999999" 
                                    className="relative top-[-24px] border border-primary text-primary px-8 py-4 text-xs font-bold tracking-widest uppercase hover:bg-primary hover:text-white hover:-translate-y-0.5 transition-transform transition-all duration-300 flex items-center gap-3"
                                >
                                    <MessageCircle size={16} />
                                    WhatsApp Us
                                </a>
                            </div>
                        </FadeIn>
                    </div>

                    {/* Image Area (Right - 5 cols) */}
                    <div className="lg:col-span-5 relative h-[50vh] lg:h-[80vh] w-full">
                         <motion.div 
                            style={{ y: heroY }}
                            className="absolute right-0 top-0 w-full h-full"
                         >
                            <div className="relative w-full h-full overflow-hidden">
                                <motion.img 
                                    style={{ scale: imageScale }}
                                    src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=50&w=1200&auto=format&fit=crop" 
                                    alt="Modern Architecture" 
                                    className="w-full h-full object-cover object-center"
                                />
                                {/* Decorative elements */}
                                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl z-10 mix-blend-multiply"></div>
                            </div>
                         </motion.div>
                    </div>
                </div>
            </section>

            {/* TRUST STATS - Minimal & Clean */}
            <section className="py-20 border-b border-neutral-200 bg-white relative z-20">
                <div className="container-custom">
                     <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center md:text-left">
                        {[
                            { label: "Years of Excellence", value: "12+" },
                            { label: "Happy Families", value: "350+" },
                            { label: "Projects Delivered", value: "80+" },
                            { label: "Legal Clarity", value: "100%" },
                        ].map((stat, i) => (
                            <FadeIn key={i} delay={i * 0.1}>
                                <h3 className="text-4xl md:text-6xl font-serif text-primary mb-2 tracking-tighter">{stat.value}</h3>
                                <p className="text-xs uppercase tracking-widest text-neutral-400 font-medium">{stat.label}</p>
                            </FadeIn>
                        ))}
                     </div>
                </div>
            </section>

            {/* OUR STORY - Editorial Layout */}
            <section className="py-32 bg-secondary overflow-hidden">
                <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <FadeIn direction="right" className="relative order-2 lg:order-1">
                        <div className="aspect-[4/5] overflow-hidden bg-neutral-200 relative">
                            <motion.img 
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.7 }}
                                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=50&w=800" 
                                alt="Founder with client" 
                                loading="lazy"
                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
                            />
                        </div>
                        <div className="absolute -bottom-10 -right-10 bg-white p-10 max-w-xs shadow-2xl hidden md:block z-10 border-l-4 border-accent">
                            <p className="font-serif italic text-xl leading-relaxed text-primary">
                                "Real estate is not about property. It's about people."
                            </p>
                        </div>
                    </FadeIn>
                    
                    <div className="order-1 lg:order-2">
                        <FadeIn>
                            <span className="text-accent uppercase tracking-widest text-xs font-bold mb-6 block">Our Philosophy</span>
                            <h3 className="text-4xl md:text-6xl font-serif text-primary mb-8 leading-tight">
                                Building beyond <br />
                                <span className="text-neutral-400 italic">expectations.</span>
                            </h3>
                            
                            <div className="space-y-8 text-neutral-600 font-light text-lg leading-relaxed">
                                <p>
                                    In an industry often clouded by ambiguity, PrimeLand stands as a beacon of transparency. 
                                    We started in 2012 with a simple mission: to make land ownership in Chennai safe, simple, and profitable.
                                </p>
                                <p>
                                    Our properties are handpicked for their future appreciation potential. 
                                    We obsess over legal due diligence so you can sleep peacefully, knowing your investment is secure.
                                </p>
                            </div>

                            <div className="mt-12 pt-8 border-t border-neutral-300">
                                <Link to="/about" className="text-primary font-bold uppercase tracking-widest text-xs border-b border-primary pb-1 hover:text-accent hover:border-accent transition-colors">
                                    Read our full story
                                </Link>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

             {/* PREVIEW PROJECTS - Selected Works */}
             <section className="py-32 bg-primary text-secondary">
                <div className="container-custom mb-24 flex flex-col md:flex-row justify-between items-end gap-8">
                    <FadeIn>
                        <h2 className="text-4xl md:text-7xl font-serif mb-6">Curated Projects</h2>
                        <p className="text-neutral-400 max-w-md font-light text-lg">
                            Discover our most sought-after developments in Chennai's emerging corridors.
                        </p>
                    </FadeIn>
                    <FadeIn delay={0.2}>
                        <Link to="/projects" className="hidden md:flex items-center gap-3 text-xs uppercase tracking-widest hover:text-accent transition-colors border border-white/20 px-6 py-3 rounded-full">
                            View All Collection <ArrowRight size={14} />
                        </Link>
                    </FadeIn>
                </div>

                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-20">
                         {/* Project Card 1 */}
                        <FadeIn className="group cursor-pointer">
                            <Link to="/projects/green-valley-nagar" className="block">
                                <div className="aspect-[4/3] overflow-hidden mb-8 relative">
                                    <img 
                                        src="https://images.unsplash.com/photo-1592595896551-12b371d546d5?auto=format&fit=crop&q=50&w=800"
                                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                                        alt="Green Valley Nagar"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500"></div>
                                </div>
                                <div className="flex justify-between items-start border-t border-white/10 pt-6">
                                    <div>
                                        <h3 className="text-3xl font-serif mb-2 group-hover:text-accent transition-colors">Green Valley Nagar</h3>
                                        <p className="text-neutral-400 text-sm tracking-wide">Avadi, Chennai</p>
                                    </div>
                                    <span className="border border-white/30 px-3 py-1 text-[10px] uppercase tracking-widest text-neutral-300">Ready to build</span>
                                </div>
                            </Link>
                        </FadeIn>

                         {/* Project Card 2 - Offset */}
                         <FadeIn delay={0.2} className="group cursor-pointer md:mt-32">
                            <Link to="/projects/urban-nest" className="block">
                                <div className="aspect-[4/3] overflow-hidden mb-8 relative">
                                    <img 
                                        src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=50&w=800" 
                                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                                        alt="Urban Nest"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500"></div>
                                </div>
                                <div className="flex justify-between items-start border-t border-white/10 pt-6">
                                    <div>
                                        <h3 className="text-3xl font-serif mb-2 group-hover:text-accent transition-colors">Urban Nest</h3>
                                        <p className="text-neutral-400 text-sm tracking-wide">Poonamallee, Chennai</p>
                                    </div>
                                    <span className="border border-white/30 px-3 py-1 text-[10px] uppercase tracking-widest text-neutral-300">New Launch</span>
                                </div>
                            </Link>
                        </FadeIn>
                    </div>
                </div>
             </section>

             {/* CTA SECTION - Simple & Direct */}
            <section className="py-40 bg-secondary text-center">
                 <div className="container-custom max-w-4xl mx-auto">
                    <FadeIn>
                        <h2 className="text-4xl md:text-7xl font-serif text-primary mb-8 leading-tight">
                            Ready to find your <br />
                            <span className="italic text-neutral-400">perfect plot?</span>
                        </h2>
                        <p className="text-neutral-600 font-light text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
                            Schedule a site visit this weekend. We'll pick you up, show you the property, and drop you back. No obligations.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-6">
                             <a 
                                href="https://wa.me/919999999999" 
                                className="bg-cta text-white px-10 py-5 text-sm font-bold tracking-widest uppercase hover:bg-green-600 transition-all shadow-xl hover:shadow-2xl flex items-center justify-center gap-3 rounded-full"
                            >
                                Chat on WhatsApp
                            </a>
                            <Link 
                                to="/contact" 
                                className="border border-primary text-primary px-10 py-5 text-sm font-bold tracking-widest uppercase hover:bg-primary hover:text-white transition-all rounded-full"
                            >
                                Contact Sales
                            </Link>
                        </div>
                    </FadeIn>
                 </div>
            </section>
        </div>
    );
};

export default Home;
