import React from 'react';
import { motion } from 'framer-motion';
import FadeIn from '../components/ui/FadeIn';

const images = [
    { src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=60&w=800", aspect: "aspect-[4/3]" },
    { src: "https://images.unsplash.com/photo-1592595896551-12b371d546d5?auto=format&fit=crop&q=60&w=800", aspect: "aspect-[3/4]" },
    { src: "https://images.unsplash.com/photo-1628744876497-eb30460be9f6?auto=format&fit=crop&q=60&w=800", aspect: "aspect-[4/3]" },
    { src: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=60&w=800", aspect: "aspect-[3/4]" },
    { src: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=60&w=800", aspect: "aspect-[16/9]" },
    { src: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=60&w=800", aspect: "aspect-[4/3]" },
];

const Gallery = () => {
    return (
        <div className="min-h-screen bg-secondary pt-40 pb-32">
            <div className="container-custom mb-20">
                <FadeIn>
                    <span className="text-accent uppercase tracking-widest text-xs font-bold mb-6 block">Portfolio</span>
                    <h1 className="text-5xl md:text-8xl font-serif text-primary mb-8">Visual Story</h1>
                    <p className="text-neutral-600 font-light text-xl max-w-2xl leading-relaxed">
                        Glimpses of our completed projects, happy communities, and the fine details that set us apart.
                    </p>
                </FadeIn>
            </div>

            <div className="container-custom">
                <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
                    {images.map((img, i) => (
                        <FadeIn key={i} delay={i * 0.1} className="break-inside-avoid">
                            <div className={`relative group overflow-hidden ${img.aspect} bg-neutral-200`}>
                                <img
                                    src={img.src}
                                    alt={`Gallery ${i}`}
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                                    <span className="text-white tracking-[0.3em] uppercase text-[10px] font-bold border border-white/50 px-6 py-3 backdrop-blur-sm hover:bg-white hover:text-black transition-colors">
                                        View Full
                                    </span>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Gallery;
