import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    // Close menu on route change
    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    const links = [
        { name: 'Projects', path: '/projects' },
        { name: 'About', path: '/about' },
        { name: 'Gallery', path: '/gallery' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <header
            className="fixed top-0 left-0 right-0 z-50 bg-[#f4f3ef] shadow-md py-4 transition-all duration-300"
        >
            <div className="container-custom flex justify-between items-center relative z-50">
                {/* Logo */}
                <Link to="/" className="flex flex-col leading-none group">
                    <span className="text-2xl font-serif font-bold tracking-tight text-primary transition-colors duration-300">
                        PrimeLand
                    </span>
                    <span className="text-[10px] tracking-[0.25em] uppercase text-neutral-500 pl-0.5 group-hover:text-accent transition-colors">
                        Developers
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-12">
                    {links.map((link) => (
                        <NavLink
                            key={link.name}
                            to={link.path}
                            className={({ isActive }) =>
                                `text-xs font-bold tracking-widest uppercase transition-all duration-300 relative hover:text-accent ${
                                    isActive ? 'text-accent' : 'text-primary'
                                }`
                            }
                        >
                            {link.name}
                        </NavLink>
                    ))}
                    <a
                        href="https://wa.me/919999999999"
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 px-6 py-3 rounded-none border border-primary font-bold text-xs uppercase tracking-widest transition-all duration-300 bg-primary text-white hover:bg-transparent hover:text-primary"
                    >
                        <span>Enquire</span>
                        <ArrowRight size={14} />
                    </a>
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-primary p-2 focus:outline-none"
                    aria-label="Toggle Menu"
                >
                    {isOpen ? <X size={28} strokeWidth={1.5} /> : <Menu size={28} strokeWidth={1.5} />}
                </button>
            </div>

            {/* Mobile Menu Overlay - SOLID BACKGROUND */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ clipPath: "circle(0% at 100% 0%)" }}
                        animate={{ clipPath: "circle(150% at 100% 0%)" }}
                        exit={{ clipPath: "circle(0% at 100% 0%)" }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        className="fixed inset-0 bg-[#f4f3ef] z-40 flex flex-col pt-32 px-8 h-screen w-screen overflow-hidden"
                    >
                        <nav className="flex flex-col gap-8">
                            {links.map((link, i) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.1 + i * 0.1 }}
                                >
                                    <NavLink
                                        to={link.path}
                                        onClick={() => setIsOpen(false)}
                                        className={({ isActive }) => 
                                            `text-4xl font-serif block ${isActive ? 'text-accent' : 'text-primary'}`
                                        }
                                    >
                                        {link.name}
                                    </NavLink>
                                </motion.div>
                            ))}
                            
                            <motion.div 
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="mt-12 border-t border-neutral-300 pt-8"
                            >
                                <p className="text-neutral-400 text-xs uppercase tracking-widest mb-4">Get in touch</p>
                                <a 
                                    href="tel:+919999999999" 
                                    className="text-2xl block mb-2 font-medium text-primary"
                                >
                                    +91 999 999 9999
                                </a>
                                <a 
                                    href="mailto:hello@primeland.in" 
                                    className="text-lg text-accent border-b border-accent inline-block pb-1"
                                >
                                    hello@primeland.in
                                </a>
                            </motion.div>
                        </nav>
                        
                        {/* Decorative background logo */}
                        <div className="absolute bottom-[-5%] right-[-10%] text-[20vw] font-serif text-black/[0.03] pointer-events-none select-none leading-none">
                            Prime
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Navbar;
