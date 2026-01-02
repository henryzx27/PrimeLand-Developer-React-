import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import FadeIn from '../components/ui/FadeIn';

const Contact = () => {
    return (
        <div className="min-h-screen bg-secondary pt-40 pb-32">
             <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-24">
                {/* Contact Info */}
                <div>
                     <FadeIn>
                         <span className="text-accent uppercase tracking-widest text-xs font-bold block mb-6">Get in Touch</span>
                         <h1 className="text-5xl md:text-7xl font-serif text-primary mb-12 leading-tight">Let's Discuss Your Investment.</h1>
                         <p className="text-neutral-600 font-light text-xl mb-16 max-w-lg leading-relaxed">
                            Whether you are looking for a villa plot or an investment opportunity, our team is here to guide you through every step.
                         </p>

                         <div className="space-y-12">
                            <div className="flex gap-8 items-start group">
                                <div className="w-14 h-14 bg-white flex items-center justify-center text-accent shadow-sm shrink-0 border border-neutral-100 group-hover:border-accent transition-colors">
                                    <Phone size={24} strokeWidth={1.5} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-serif mb-2 text-primary">Call Us</h3>
                                    <p className="text-neutral-500 font-light text-lg hover:text-primary transition-colors cursor-pointer">+91 999 999 9999</p>
                                    <p className="text-neutral-500 font-light text-lg hover:text-primary transition-colors cursor-pointer">+91 44 2828 2828</p>
                                </div>
                            </div>

                            <div className="flex gap-8 items-start group">
                                <div className="w-14 h-14 bg-white flex items-center justify-center text-accent shadow-sm shrink-0 border border-neutral-100 group-hover:border-accent transition-colors">
                                    <Mail size={24} strokeWidth={1.5} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-serif mb-2 text-primary">Email Us</h3>
                                    <p className="text-neutral-500 font-light text-lg hover:text-primary transition-colors cursor-pointer">hello@primeland.in</p>
                                    <p className="text-neutral-500 font-light text-lg hover:text-primary transition-colors cursor-pointer">sales@primeland.in</p>
                                </div>
                            </div>

                             <div className="flex gap-8 items-start group">
                                <div className="w-14 h-14 bg-white flex items-center justify-center text-accent shadow-sm shrink-0 border border-neutral-100 group-hover:border-accent transition-colors">
                                    <MapPin size={24} strokeWidth={1.5} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-serif mb-2 text-primary">Corporate Office</h3>
                                    <address className="text-neutral-500 font-light text-lg leading-relaxed not-italic">
                                        No. 45, Sterling Road, Nungambakkam,<br/>
                                        Chennai - 600034, Tamil Nadu.
                                    </address>
                                </div>
                            </div>
                         </div>
                     </FadeIn>
                </div>

                {/* Contact Form */}
                <FadeIn delay={0.2}>
                    <div className="bg-white p-12 md:p-16 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border-t-4 border-accent">
                        <h2 className="text-3xl font-serif mb-10 text-primary">Send us a message</h2>
                        <form className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-3">
                                    <label className="text-[10px] uppercase tracking-widest text-neutral-400 font-bold">First Name</label>
                                    <input type="text" className="w-full border-b border-neutral-200 py-3 focus:outline-none focus:border-accent transition-colors bg-transparent text-lg text-primary placeholder-neutral-200" placeholder="John" />
                                </div>
                                <div className="space-y-3">
                                    <label className="text-[10px] uppercase tracking-widest text-neutral-400 font-bold">Last Name</label>
                                    <input type="text" className="w-full border-b border-neutral-200 py-3 focus:outline-none focus:border-accent transition-colors bg-transparent text-lg text-primary placeholder-neutral-200" placeholder="Doe" />
                                </div>
                            </div>
                            <div className="space-y-3">
                                <label className="text-[10px] uppercase tracking-widest text-neutral-400 font-bold">Email Address</label>
                                <input type="email" className="w-full border-b border-neutral-200 py-3 focus:outline-none focus:border-accent transition-colors bg-transparent text-lg text-primary placeholder-neutral-200" placeholder="john@example.com" />
                            </div>
                            <div className="space-y-3">
                                <label className="text-[10px] uppercase tracking-widest text-neutral-400 font-bold">Phone</label>
                                <input type="tel" className="w-full border-b border-neutral-200 py-3 focus:outline-none focus:border-accent transition-colors bg-transparent text-lg text-primary placeholder-neutral-200" placeholder="+91" />
                            </div>
                            <div className="space-y-3">
                                <label className="text-[10px] uppercase tracking-widest text-neutral-400 font-bold">Message</label>
                                <textarea rows="4" className="w-full border-b border-neutral-200 py-3 focus:outline-none focus:border-accent transition-colors bg-transparent text-lg text-primary placeholder-neutral-200 resize-none" placeholder="I am interested in..."></textarea>
                            </div>

                            <button type="button" className="w-full bg-primary text-secondary py-5 uppercase tracking-widest text-xs font-bold hover:bg-accent transition-all duration-300 mt-8 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl">
                                Submit Enquiry <Send size={16} />
                            </button>
                        </form>
                    </div>
                </FadeIn>
             </div>
        </div>
    );
};

export default Contact;
