import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { properties } from '../data/properties';
import { MapPin, ArrowLeft, Phone, MessageCircle, CheckCircle2, Bed, Bath, Square, Calendar, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const PropertyDetail = () => {
  const { id } = useParams();
  const property = properties.find(p => p.id === parseInt(id));

  // Agar property nahi mili to ye dikhana hai
  if (!property) {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Property Not Found</h2>
                <Link to="/properties" className="text-brand-primary font-bold hover:underline">Back to Listings</Link>
            </div>
        </div>
    );
  }

  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  return (
    <div className="animate-fade-in pb-20 bg-gray-50 min-h-screen">
      
      {/* 1. IMMERSIVE HERO SECTION */}
      <div className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden">
        {/* Back Button (Floating) */}
        <div className="absolute top-6 left-6 z-20">
            <Link to="/properties" className="bg-white/10 backdrop-blur-md border border-white/20 p-3 rounded-full flex items-center justify-center hover:bg-white text-white hover:text-gray-900 transition-all shadow-lg group">
                <ArrowLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
            </Link>
        </div>

        {/* Parallax Image */}
        <motion.img 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "linear" }}
          src={property.image} 
          alt={property.title} 
          className="w-full h-full object-cover"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>

        {/* Hero Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 pb-16">
            <div className="max-w-7xl mx-auto">
                <motion.div 
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ delay: 0.3 }}
                >
                    <div className="flex gap-3 mb-4">
                        <span className="bg-brand-primary text-white px-4 py-1.5 rounded-full text-sm font-bold shadow-lg shadow-brand-primary/20">
                            {property.status}
                        </span>
                        <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white px-4 py-1.5 rounded-full text-sm font-bold">
                            {property.type}
                        </span>
                    </div>
                    
                    <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 leading-tight drop-shadow-xl">
                        {property.title}
                    </h1>
                    
                    <div className="flex items-center text-gray-200 text-lg md:text-xl font-medium">
                        <MapPin size={22} className="mr-2 text-brand-primary" /> 
                        {property.location}
                    </div>
                </motion.div>
            </div>
        </div>
      </div>

      {/* 2. MAIN CONTENT GRID */}
      <div className="max-w-7xl mx-auto px-4 -mt-10 relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* LEFT COLUMN: Property Details */}
        <motion.div 
           variants={staggerContainer}
           initial="hidden"
           animate="visible"
           className="lg:col-span-2 space-y-8"
        >
            
            {/* Quick Stats Bar */}
            <motion.div variants={fadeInUp} className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 flex flex-wrap justify-between items-center gap-6">
                <div>
                    <p className="text-slate-400 text-xs uppercase tracking-wider font-bold mb-1">Price</p>
                    <p className="text-3xl font-extrabold text-brand-primary">{property.price}</p>
                </div>
                <div className="h-10 w-px bg-gray-100 hidden sm:block"></div>
                <div className="flex gap-8">
                     <div>
                        <p className="text-slate-400 text-xs uppercase tracking-wider font-bold mb-1">Bedrooms</p>
                        <p className="text-xl font-bold text-gray-800 flex items-center gap-2"><Bed size={20} className="text-gray-400"/> 3</p>
                     </div>
                     <div>
                        <p className="text-slate-400 text-xs uppercase tracking-wider font-bold mb-1">Bathrooms</p>
                        <p className="text-xl font-bold text-gray-800 flex items-center gap-2"><Bath size={20} className="text-gray-400"/> 2</p>
                     </div>
                     <div>
                        <p className="text-slate-400 text-xs uppercase tracking-wider font-bold mb-1">Area</p>
                        <p className="text-xl font-bold text-gray-800 flex items-center gap-2"><Square size={20} className="text-gray-400"/> 1200 sqft</p>
                     </div>
                </div>
            </motion.div>

            {/* Description */}
            <motion.div variants={fadeInUp} className="bg-white p-8 rounded-2xl shadow-md border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                    About this Home
                </h2>
                <div className="prose prose-blue max-w-none text-gray-600 leading-relaxed">
                    <p>
                        Welcome to your potential new home. Experience the perfect blend of luxury and comfort in this 
                        stunning <strong>{property.type}</strong> located in the prime neighborhood of <strong>{property.location}</strong>.
                    </p>
                    <p className="mt-4">
                        Designed for modern living, this property offers spacious interiors, premium fittings, and excellent connectivity 
                        to major city hubs, international schools, and shopping centers. Whether you are looking for a peaceful sanctuary 
                        or a vibrant community, this home delivers on all fronts.
                    </p>
                    <div className="mt-6 p-4 bg-blue-50 rounded-xl border border-blue-100 flex items-start gap-3">
                        <ShieldCheck className="text-brand-primary flex-shrink-0 mt-1" />
                        <p className="text-sm text-blue-800 font-medium">
                            <strong>Verified Listing:</strong> All documents and legal clearances have been checked by our team.
                        </p>
                    </div>
                </div>
            </motion.div>

            {/* Amenities Grid */}
            <motion.div variants={fadeInUp} className="bg-white p-8 rounded-2xl shadow-md border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Premium Amenities</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-6">
                    {['24/7 Security', 'Power Backup', 'Covered Parking', 'Gymnasium', 'Swimming Pool', 'Club House', 'Kids Play Area', 'Jogging Track'].map((amenity, idx) => (
                        <div key={idx} className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                            <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 flex-shrink-0">
                                <CheckCircle2 size={14} />
                            </div>
                            <span className="text-gray-700 font-medium text-sm">{amenity}</span>
                        </div>
                    ))}
                </div>
            </motion.div>

        </motion.div>

        {/* RIGHT COLUMN: Sticky Sidebar */}
        <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="lg:col-span-1"
        >
            <div className="sticky top-28 space-y-6">
                
                {/* Agent Card */}
                <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 overflow-hidden relative">
                    <div className="absolute top-0 left-0 w-full h-1 bg-brand-primary"></div>
                    
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-14 h-14 rounded-full bg-gray-200 overflow-hidden border-2 border-white shadow-md">
                            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Agent" className="w-full h-full object-cover" />
                        </div>
                        <div>
                            <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Listing Agent</p>
                            <h3 className="text-lg font-bold text-gray-900">Rahul Sharma</h3>
                            <div className="flex gap-1 text-yellow-400 text-xs mt-0.5">★★★★★ (4.9)</div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-3">
                        <a 
                            href={`https://wa.me/919876543210?text=Hi, I am interested in ${property.title}`}
                            target="_blank" 
                            className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 transition shadow-lg shadow-green-200"
                        >
                            <MessageCircle size={20} /> WhatsApp
                        </a>
                        
                        <a 
                            href="tel:+919876543210"
                            className="w-full bg-white border-2 border-brand-primary text-brand-primary hover:bg-blue-50 font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 transition"
                        >
                            <Phone size={20} /> Call Agent
                        </a>
                    </div>
                </div>

                {/* Site Visit Form */}
                <div className="bg-slate-900 p-6 rounded-2xl shadow-2xl text-white relative overflow-hidden">
                    {/* Background Blob */}
                    <div className="absolute top-[-50px] right-[-50px] w-32 h-32 bg-brand-primary rounded-full blur-[60px] opacity-40"></div>
                    
                    <h3 className="text-lg font-bold mb-4 relative z-10 flex items-center gap-2">
                        <Calendar size={18} className="text-brand-accent"/> Schedule a Visit
                    </h3>
                    
                    <form className="space-y-3 relative z-10">
                        <div>
                            <input type="text" placeholder="Your Name" className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder:text-gray-400 focus:border-brand-primary focus:ring-1 focus:ring-brand-primary outline-none text-sm transition" />
                        </div>
                        <div>
                            <input type="tel" placeholder="Phone Number" className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder:text-gray-400 focus:border-brand-primary focus:ring-1 focus:ring-brand-primary outline-none text-sm transition" />
                        </div>
                        <button className="w-full bg-brand-primary hover:bg-blue-600 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-blue-900/50 transition mt-2">
                            Request Site Visit
                        </button>
                    </form>
                    <p className="text-[10px] text-gray-400 mt-4 text-center">
                        Our team will contact you to confirm the timing.
                    </p>
                </div>

            </div>
        </motion.div>

      </div>
    </div>
  );
};

export default PropertyDetail;