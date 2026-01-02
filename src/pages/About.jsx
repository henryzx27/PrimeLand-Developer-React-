import React from 'react';
import { motion } from 'framer-motion';
import FadeIn from '../components/ui/FadeIn';

const values = [
    { title: "Transparency", desc: "No hidden charges, ever. We ensure every document is clear and explained." },
    { title: "Legality", desc: "100% EC and Patta cleared properties. We take zero risks with legalities." },
    { title: "Customer First", desc: "We don't just sell plots; we build long-term relationships with our investors." }
];

const About = () => {
    return (
        <div className="bg-white min-h-screen">
            {/* Header */}
            <div className="pt-40 pb-20 bg-primary text-secondary">
                <div className="container-custom">
                     <FadeIn>
                        <span className="text-accent uppercase tracking-widest text-xs font-bold mb-6 block">Our Story</span>
                        <h1 className="text-5xl md:text-8xl font-serif mb-12">Not Just Builders. <br/> Curators.</h1>
                        <div className="w-32 h-1 bg-accent mb-12"></div>
                        <p className="text-xl md:text-2xl font-light text-neutral-400 max-w-4xl leading-relaxed">
                            PrimeLand Developers was founded on a simple premise: Real estate in India needs a revolution of trust. 
                            We are here to lead that change.
                        </p>
                     </FadeIn>
                </div>
            </div>

            {/* Founder Note */}
            <div className="container-custom py-32 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                 <div className="lg:col-span-5 relative">
                    <FadeIn direction="right">
                        <div className="aspect-[3/4] bg-neutral-100">
                             <img 
                                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80" 
                                alt="Founder" 
                                className="w-full h-full object-cover grayscale"
                            />
                        </div>
                    </FadeIn>
                 </div>
                 <div className="lg:col-span-7 pt-10">
                    <FadeIn>
                        <h2 className="text-3xl font-serif text-primary mb-10">A Note from our Founder</h2>
                        <div className="prose prose-lg text-neutral-600 font-light leading-loose">
                            <p className="mb-8">
                                "When I started PrimeLand in 2012, the Chennai real estate market was fragmented. 
                                Buyers were confused, and trust was hard to come by. I wanted to create a company that operated differently—one where a handshake meant something."
                            </p>
                            <p className="mb-8">
                                "Over the last decade, we have helped over 350 families find not just a plot of land, but a piece of the future. 
                                Our focus has always been on high-growth corridors like Avadi and Poonamallee, where the value of land appreciates consistently."
                            </p>
                            <blockquote className="font-serif italic text-3xl text-primary my-12 border-l-4 border-accent pl-8 py-2">
                                "We sell what we would buy ourselves."
                            </blockquote>
                            <p className="mt-8 font-bold text-accent uppercase tracking-widest text-xs">
                                — K. Senthil Kumar, Founder & CMD
                            </p>
                        </div>
                    </FadeIn>
                 </div>
            </div>

            {/* Values */}
            <div className="bg-secondary py-32 border-t border-neutral-200">
                <div className="container-custom">
                    <FadeIn>
                         <h2 className="text-4xl md:text-5xl font-serif text-center mb-20 text-primary">Our Core Values</h2>
                    </FadeIn>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {values.map((v, i) => (
                            <FadeIn key={i} delay={i * 0.2}>
                                <div className="bg-white p-12 shadow-sm border-t-4 border-accent hover:-translate-y-2 transition-transform duration-500 h-full">
                                    <h3 className="text-2xl font-serif mb-6 text-primary">{v.title}</h3>
                                    <p className="text-neutral-600 font-light leading-relaxed text-lg">
                                        {v.desc}
                                    </p>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
