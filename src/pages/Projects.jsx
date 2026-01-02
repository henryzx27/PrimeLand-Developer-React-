import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MapPin, ArrowUpRight, Maximize2, IndianRupee } from 'lucide-react';
import FadeIn from '../components/ui/FadeIn';

export const projects = [
    {
        id: 1,
        slug: "green-valley-nagar",
        name: "Green Valley Nagar",
        location: "Avadi, Chennai",
        description: "A premium gated community spread across 15 acres with 200+ villas and plots. Perfectly connected to the city via the new outer ring road.",
        price: "28L",
        size: "800-2400",
        image: "https://images.unsplash.com/photo-1592595896551-12b371d546d5?auto=format&fit=crop&q=60&w=800",
        status: "Ready",
        featured: true
    },
    {
        id: 2,
        slug: "urban-nest",
        name: "Urban Nest",
        location: "Poonamallee, Chennai",
        description: "Experience the serenity of nature without leaving the city. Urban Nest offers DTCP approved plots with 40ft wide black top roads.",
        price: "35L",
        size: "1000-1800",
        image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=60&w=800",
        status: "New",
        featured: false
    },
    {
        id: 3,
        slug: "prime-city",
        name: "Prime City",
        location: "Thiruninravur",
        description: "An affordable investment opportunity in one of Chennai's fastest growing suburbs. Ideal for first-time investors.",
        price: "18L",
        size: "600-1500",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=60&w=800",
        status: "Selling Fast",
        featured: false
    },
    {
        id: 4,
        slug: "sai-enclave",
        name: "Sri Sai Enclave",
        location: "Perungalathur",
        description: "Luxury villa plots right next to the IT corridor. High appreciation potential and ready for immediate construction.",
        price: "22L",
        size: "1200-2400",
        image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=60&w=800",
        status: "Final Few",
        featured: true
    }
];

const ProjectCard = ({ project, index }) => {
    return (
        <FadeIn delay={index * 0.1} className={`group block ${project.featured ? 'col-span-1 md:col-span-2' : 'col-span-1'}`}>
            <Link to={`/projects/${project.slug}`} className="block h-full">
                <div className="relative overflow-hidden mb-8 aspect-[16/10]">
                    <img 
                        src={project.image} 
                        alt={project.name} 
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 filter brightness-100 group-hover:brightness-110"
                    />
                    <div className="absolute top-6 left-6 bg-white/95 backdrop-blur px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-primary shadow-lg border border-neutral-100">
                        {project.status}
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex justify-end items-end">
                       <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-primary transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                            <ArrowUpRight size={20} className="group-hover:text-accent transition-colors" />
                       </div>
                    </div>
                </div>

                <div className="flex justify-between items-start">
                    <div className="max-w-2xl">
                        <h3 className="text-3xl md:text-4xl font-serif text-primary mb-3 group-hover:text-accent transition-colors">{project.name}</h3>
                        <div className="flex items-center gap-2 text-neutral-500 text-sm mb-6 tracking-wide uppercase">
                            <MapPin size={14} />
                            <span>{project.location}</span>
                        </div>
                        {project.featured && (
                            <p className="text-neutral-600 font-light mb-8 text-lg leading-relaxed max-w-xl">
                                {project.description}
                            </p>
                        )}
                    </div>
                </div>
                
                <div className="flex gap-8 pt-6 border-t border-neutral-200">
                    <div className="flex items-center gap-3 text-neutral-800">
                        <div className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center text-accent">
                            <IndianRupee size={14} />
                        </div>
                        <span className="text-sm font-medium tracking-wide">{project.price} Onwards</span>
                    </div>
                    <div className="flex items-center gap-3 text-neutral-800">
                        <div className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center text-accent">
                            <Maximize2 size={14} />
                        </div>
                        <span className="text-sm font-medium tracking-wide">{project.size} Sq.ft</span>
                    </div>
                </div>
            </Link>
        </FadeIn>
    );
};

const Projects = () => {
  return (
    <div className="bg-secondary min-h-screen">
      <div className="bg-primary text-secondary pt-40 pb-32 px-6">
        <div className="container-custom">
            <FadeIn>
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
                    <div>
                         <span className="text-accent uppercase tracking-widest text-xs font-bold mb-6 block">Our Portfolio</span>
                        <h1 className="text-5xl md:text-8xl font-serif leading-[0.9]">Our <br/> Collection</h1>
                    </div>
                    <p className="text-xl font-light text-neutral-400 max-w-md leading-relaxed mb-4">
                        Handpicked properties offering the perfect balance of connectivity, community, and capital appreciation.
                    </p>
                </div>
            </FadeIn>
        </div>
      </div>

      <div className="container-custom py-32">
         <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-24">
            {projects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
            ))}
         </div>
      </div>
      
      <div className="bg-white py-32 text-center border-t border-neutral-100">
        <div className="container-custom">
            <FadeIn>
                <h3 className="text-3xl font-serif text-primary mb-6">Cannot find what you are looking for?</h3>
                <p className="text-neutral-500 mb-10 max-w-xl mx-auto font-light text-lg">
                    We have upcoming projects in Tambaram, OMR, and ECR. Join our waitlist to get early access and pre-launch prices.
                </p>
                 <Link 
                    to="/contact" 
                    className="inline-block border-b border-primary pb-1 text-primary font-bold uppercase tracking-widest text-xs hover:text-accent hover:border-accent transition-all"
                >
                    Connect with an expert
                </Link>
            </FadeIn>
        </div>
      </div>
    </div>
  );
};

export default Projects;
