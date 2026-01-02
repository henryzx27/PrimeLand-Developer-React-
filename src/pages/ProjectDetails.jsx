import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { MapPin, Check, IndianRupee, ArrowLeft } from 'lucide-react';
import FadeIn from '../components/ui/FadeIn';

// Centralized project data (Should technically be imported, but redeclared for dynamic serving simplicity in this demo structure)
const projectsData = {
    "green-valley-nagar": {
        name: "Green Valley Nagar",
        location: "Avadi, Chennai",
        price: "28 Lakhs Onwards",
        desc: "Green Valley Nagar is a premium plotted development designed for those who appreciate the finer things in life. Spread across 15 acres, this project offers a perfect blend of urban connectivity and natural tranquility.",
        amenities: ["Black Top Roads", "Street Lights", "Gated Community", "24/7 Security", "Avenue Trees", "Potable Water"],
        image: "https://images.unsplash.com/photo-1592595896551-12b371d546d5?auto=format&fit=crop&q=60&w=1200",
        gallery: [
            "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=60&w=800",
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=60&w=800"
        ]
    },
    "urban-nest": {
        name: "Urban Nest",
        location: "Poonamallee, Chennai",
        price: "35 Lakhs Onwards",
        desc: "Experience the serenity of nature without leaving the city. Urban Nest offers DTCP approved plots with 40ft wide black top roads, ensuring a spacious and premium living environment for you and your family.",
        amenities: ["Grand Entrance Arch", "Kids Play Area", "Clubhouse", "Underground Drainage", "CCTV Surveillance"],
        image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=60&w=1200",
        gallery: [
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=60&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=60&w=800"
        ]
    },
    "prime-city": {
        name: "Prime City",
        location: "Thiruninravur",
        price: "18 Lakhs Onwards",
        desc: "An affordable investment opportunity in one of Chennai's fastest growing suburbs. Prime City is strategized for high appreciation, making it the ideal choice for first-time investors looking to build wealth.",
        amenities: ["Clear Title", "EB Connection", "Good Ground Water", "Ready to Construct", "Near Railway Station"],
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=60&w=1200",
        gallery: [
            "https://images.unsplash.com/photo-1592595896551-12b371d546d5?auto=format&fit=crop&q=60&w=800",
            "https://images.unsplash.com/photo-1600596542815-3ad19fb2a258?q=60&w=800&auto=format&fit=crop"
        ]
    },
    "sai-enclave": {
        name: "Sri Sai Enclave",
        location: "Perungalathur",
        price: "22 Lakhs Onwards",
        desc: "Luxury villa plots right next to the IT corridor. With the proposed metro extension and new bus terminus nearby, Sri Sai Enclave offers unmatched connectivity and appreciation potential.",
        amenities: ["Park & Jogging Track", "Plots Vastu Compliant", "Sweet Ground Water", "30ft & 24ft Roads", "Nearby Schools"],
        image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=60&w=1200",
        gallery: [
             "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=60&w=800&auto=format&fit=crop",
             "https://images.unsplash.com/photo-1622396636133-2709d812c1e8?q=60&w=800&auto=format&fit=crop"
        ]
    }
};

const ProjectDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);

  useEffect(() => {
    // Simulate loading or database fetch
    if (projectsData[slug]) {
        setProject(projectsData[slug]);
    } else {
        navigate('/projects');
    }
  }, [slug, navigate]);

  if (!project) return <div className="h-screen bg-secondary"></div>;

  return (
    <div className="bg-secondary min-h-screen">
       {/* Scrolling Header Image */}
       <div className="h-[70vh] relative overflow-hidden">
            <div className="absolute inset-0 bg-black/30 z-10"></div>
            <img 
                src={project.image} 
                alt={project.name} 
                className="w-full h-full object-cover fixed top-0 left-0 -z-10" // Parallax effect
            />
            
            <div className="absolute bottom-0 left-0 right-0 p-10 md:p-20 text-white z-20 bg-gradient-to-t from-black/80 to-transparent">
                <div className="container-custom">
                    <Link to="/projects" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 text-xs uppercase tracking-widest transition-colors">
                        <ArrowLeft size={16} /> Back to Collection
                    </Link>
                    <span className="block text-accent font-bold tracking-widest uppercase text-xs mb-4">Ready to Construct</span>
                    <h1 className="text-5xl md:text-8xl font-serif mb-6">{project.name}</h1>
                    <div className="flex items-center gap-2 text-white/90 text-lg font-light tracking-wide">
                        <MapPin size={20} className="text-accent" /> {project.location}
                    </div>
                </div>
            </div>
       </div>

       {/* Content Section - Overlapping for depth */}
       <div className="relative z-30 bg-secondary pt-24 pb-32 rounded-t-[3rem] -mt-10 shadow-[0_-10px_40px_rgba(0,0,0,0.1)]">
           <div className="container-custom grid grid-cols-1 lg:grid-cols-12 gap-16">
                
                {/* Main Content */}
                <div className="lg:col-span-8">
                     <FadeIn>
                        <h2 className="text-sm font-bold tracking-widest uppercase text-neutral-400 mb-6">Overview</h2>
                        <p className="text-primary font-serif text-2xl md:text-3xl leading-relaxed mb-12">
                            {project.desc}
                        </p>
                        <p className="text-neutral-600 font-light text-lg leading-relaxed mb-16">
                             Located just 10 minutes from main connectivity hubs, this project offers excellent access to industrial zones and IT corridors.
                             With schools, colleges, and hospitals within a 5km radius, it is the perfect place to build your dream home.
                        </p>
                     </FadeIn>

                     <FadeIn delay={0.2}>
                         <h2 className="text-sm font-bold tracking-widest uppercase text-neutral-400 mb-8">Amenities & Features</h2>
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
                            {project.amenities.map((amenity, i) => (
                                <div key={i} className="flex items-center gap-4 p-6 border border-neutral-200 bg-white hover:border-accent/30 transition-colors duration-300">
                                    <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-accent">
                                        <Check size={18} />
                                    </div>
                                    <span className="text-primary font-medium tracking-wide">{amenity}</span>
                                </div>
                            ))}
                         </div>
                     </FadeIn>

                     <FadeIn delay={0.4}>
                         <h2 className="text-sm font-bold tracking-widest uppercase text-neutral-400 mb-8">Gallery</h2>
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                             {project.gallery.map((img, i) => (
                                <div key={i} className="aspect-[4/3] overflow-hidden">
                                     <img src={img} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" alt={`Gallery ${i+1}`} />
                                </div>
                             ))}
                         </div>
                     </FadeIn>
                </div>

                {/* Sticky Sidebar */}
                <div className="lg:col-span-4">
                    <div className="sticky top-32 space-y-8">
                        <div className="bg-primary text-white p-10">
                            <h3 className="text-3xl font-serif mb-2">Interested?</h3>
                            <p className="text-neutral-400 mb-10 font-light text-sm leading-relaxed">Download our detailed brochure or schedule a free site visit to this property.</p>
                            
                            <div className="space-y-8">
                                <div>
                                     <div className="flex items-center gap-2 mb-2 text-accent">
                                         <IndianRupee size={20} />
                                         <p className="text-xs uppercase tracking-wider font-bold">Starting Price</p>
                                     </div>
                                     <p className="text-4xl font-serif">{project.price}</p>
                                </div>
                                
                                <a 
                                    href="https://wa.me/919999999999" 
                                    className="block w-full text-center bg-cta text-white py-4 font-bold uppercase tracking-widest text-xs hover:bg-green-600 transition-colors shadow-lg"
                                >
                                    WhatsApp Brochure
                                </a>
                                <Link 
                                    to="/contact" 
                                    className="block w-full text-center border border-white/20 py-4 font-bold uppercase tracking-widest text-xs hover:bg-white hover:text-primary transition-colors"
                                >
                                    Enquire Now
                                </Link>
                            </div>
                        </div>

                        <div className="bg-white p-8 border border-neutral-200">
                             <p className="font-serif italic text-lg text-primary mb-4">"A perfect choice for long term investment."</p>
                             <div className="flex gap-2">
                                 {[1,2,3,4,5].map(s => <span key={s} className="text-yellow-500">★</span>)}
                             </div>
                        </div>
                    </div>
                </div>
           </div>
       </div>
    </div>
  );
};

export default ProjectDetails;
