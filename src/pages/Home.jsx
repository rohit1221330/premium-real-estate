import React from 'react';
import { Link } from 'react-router-dom';
import { Search, ArrowRight, CheckCircle, Star } from 'lucide-react';
import { motion } from 'framer-motion'; // Animation library
import { properties } from '../data/properties'; // Fake Data Import
import BuyerSellerSection from '../components/BuyerSellerSection';
import WhyChooseUs from '../components/WhyChooseUs';
import LeadForm from '../components/LeadForm';
import Testimonials from '../components/Testimonials';




const Home = () => {
    const container = {
        hidden: { opacity: 0, scale: 0.98 },
        show: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 1,
                ease: [0.16, 1, 0.3, 1],
                delayChildren: 0.4,
                staggerChildren: 0.18,
            },
        },
    };

    const item = {
        hidden: { opacity: 0, y: 26 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.85,
                ease: [0.16, 1, 0.3, 1],
            },
        },
    };
    // Sirf pehli 3 properties dikhayenge homepage par
    const featuredProperties = properties.slice(0, 3);

    return (
        <div className="animate-fade-in">

            {/* 1. HERO SECTION - The Money Shot */}
            {/* HERO SECTION */}
            <div className="relative h-[650px] flex items-center overflow-hidden mt-8">

                {/* Background */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.6, ease: "easeOut" }}
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage:
                            'url("https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80")',
                    }}
                >
                    {/* Gradient overlay for depth */}
                    <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/90 via-brand-dark/80 to-brand-dark/90"></div>
                </motion.div>

                {/* Content */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="relative z-10 max-w-7xl mx-auto px-6"
                >
                    <div className="max-w-3xl relative">

                        {/* Soft glow behind text */}
                        <div className="absolute -inset-6 bg-brand-primary/10 blur-3xl rounded-full"></div>

                        {/* Heading */}
                        <motion.h1
                            variants={item}
                            className="relative text-4xl md:text-6xl font-extrabold text-white leading-tight"
                        >
                            Find Your Dream Home
                            <span className="block text-brand-accent mt-2">
                                Without the Hassle
                            </span>
                        </motion.h1>

                        {/* Description */}
                        <motion.p
                            variants={item}
                            className="relative mt-6 text-lg md:text-xl text-slate-300 leading-relaxed"
                        >
                            Verified listings across Delhi NCR.
                            Direct owner access. Real market pricing.
                            <span className="text-white font-medium">
                                No brokers. No time waste.
                            </span>
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            variants={item}
                            className="relative mt-10 flex flex-col sm:flex-row gap-5"
                        >
                            <Link
                                to="/properties"
                                className="
          inline-flex items-center justify-center gap-2
          bg-brand-primary hover:bg-brand-primary/90
          text-white px-8 py-4 rounded-xl
          font-semibold text-lg
          transition-all duration-300
          hover:-translate-y-1
          hover:shadow-[0_20px_40px_rgba(37,99,235,0.35)]
          "
                            >
                                <Search size={20} />
                                Find a Property
                            </Link>

                            <Link
                                to="/seller"
                                className="
          inline-flex items-center justify-center
          border border-brand-accent
          text-brand-accent hover:bg-brand-accent hover:text-brand-dark
          px-8 py-4 rounded-xl
          font-semibold text-lg
          transition-all duration-300
          hover:-translate-y-1
          "
                            >
                                Sell My Property
                            </Link>
                        </motion.div>

                    </div>
                </motion.div>
            </div>
            <BuyerSellerSection />



            {/* 3. FEATURED PROPERTIES (Premium + Animated) */}
            <section className="py-12 bg-gray-50 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* A. CENTERED HEADING (Animated) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-brand-primary text-xs font-bold tracking-widest uppercase mb-3">
                            Exclusive Listings
                        </span>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
                            Featured Properties
                        </h2>
                        <p className="text-lg text-slate-500 max-w-2xl mx-auto">
                            Handpicked premium residences curated for the elite lifestyle.
                        </p>
                    </motion.div>

                    {/* B. PROPERTIES GRID (Mobile: 2, Desktop: 4) */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={{
                            visible: { transition: { staggerChildren: 0.1 } }
                        }}
                        className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
                    >
                        {properties.slice(0, 4).map((property) => (
                            <motion.div
                                key={property.id}
                                variants={{
                                    hidden: { opacity: 0, y: 50 },
                                    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } }
                                }}
                                className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group flex flex-col h-full"
                            >

                                {/* Image Wrapper */}
                                <div className="h-40 md:h-52 overflow-hidden relative">
                                    {/* Status Badges */}
                                    <div className="absolute top-3 left-3 z-10">
                                        <span className="bg-white/90 backdrop-blur-md text-brand-dark text-[10px] md:text-xs font-bold px-2 py-1 rounded shadow-sm uppercase tracking-wide">
                                            {property.type}
                                        </span>
                                    </div>
                                    <div className="absolute top-3 right-3 z-10">
                                        <span className="bg-brand-accent text-white text-[10px] md:text-xs font-bold px-2 py-1 rounded shadow-sm">
                                            {property.status}
                                        </span>
                                    </div>

                                    {/* Image with Zoom Effect */}
                                    <img
                                        src={property.image}
                                        alt={property.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />

                                    {/* Price Overlay (Bottom Gradient) */}
                                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-3 md:p-4 pt-10">
                                        <p className="text-white font-bold text-base md:text-xl tracking-tight">{property.price}</p>
                                    </div>
                                </div>

                                {/* Content Body */}
                                <div className="p-3 md:p-5 flex flex-col flex-grow">

                                    {/* Title & Location */}
                                    <div className="mb-3">
                                        <h3 className="text-sm md:text-base font-bold text-gray-900 line-clamp-1 group-hover:text-brand-primary transition-colors">
                                            {property.title}
                                        </h3>
                                        <div className="flex items-center text-gray-500 text-[10px] md:text-xs mt-1">
                                            <span className="text-brand-primary mr-1">📍</span>
                                            <span className="line-clamp-1">{property.location}</span>
                                        </div>
                                    </div>

                                    {/* Compact Specs Row */}
                                    <div className="flex items-center justify-between text-[10px] md:text-xs text-gray-500 bg-gray-50 rounded-lg p-2 mb-4 border border-gray-100">
                                        <div className="flex flex-col items-center">
                                            <span className="font-bold text-gray-800">3</span> Beds
                                        </div>
                                        <div className="w-px h-6 bg-gray-200"></div>
                                        <div className="flex flex-col items-center">
                                            <span className="font-bold text-gray-800">2</span> Bath
                                        </div>
                                        <div className="w-px h-6 bg-gray-200"></div>
                                        <div className="flex flex-col items-center">
                                            <span className="font-bold text-gray-800">1200</span> Sqft
                                        </div>
                                    </div>

                                    {/* Buttons (Push to bottom) */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-auto">
                                        <Link to={`/property/${property.id}`} className="flex items-center justify-center border border-gray-200 hover:border-brand-primary text-gray-600 hover:text-brand-primary font-bold py-2 rounded-lg transition text-xs md:text-sm">
                                            View
                                        </Link>
                                        <a
                                            href={`https://wa.me/919876543210?text=I am interested in ${property.title}`}
                                            target="_blank"
                                            className="flex items-center justify-center bg-green-500 text-white font-bold py-2 rounded-lg hover:bg-green-600 transition text-xs md:text-sm shadow-sm hover:shadow-green-200"
                                        >
                                            WhatsApp
                                        </a>
                                    </div>
                                </div>

                            </motion.div>
                        ))}
                    </motion.div>

                    {/* C. VIEW ALL BUTTON (Centered & Animated) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="mt-16 text-center"
                    >
                        <Link to="/properties" className="group inline-flex items-center gap-3 bg-white border-2 border-brand-primary text-brand-primary font-bold py-3 px-8 rounded-full transition-all duration-300 hover:bg-brand-primary hover:text-white hover:shadow-xl hover:shadow-blue-200">
                            View All Properties
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>

                </div>
            </section>
            {/* 2. TRUST INDICATORS (Why Choose Us) */}
            <WhyChooseUs />
           {/* 4. PREMIUM LEAD MAGNET FORM (Fixed Background) */}
      <section className="py-24 relative overflow-hidden flex items-center">
        
        {/* A. CINEMATIC BACKGROUND IMAGE */}
        <div className="absolute inset-0 z-0">
           {/* Image with Slow Zoom Animation */}
           <motion.div 
             initial={{ scale: 1 }}
             whileInView={{ scale: 1.1 }}
             transition={{ duration: 20, ease: "linear" }}
             className="w-full h-full"
           >
             <img 
               src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
               alt="City Night View" 
               className="w-full h-full object-cover"
             />
           </motion.div>
           
           {/* Heavy Dark Overlay (Taaki text saaf dikhe) */}
           <div className="absolute inset-0 bg-slate-900/90 mix-blend-multiply"></div>
           <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-slate-900/60"></div>
        </div>

        {/* Content Container */}
        <div className="max-w-7xl mx-auto px-4 relative z-10 w-full">
          <div className="flex flex-col lg:flex-row items-center gap-16">

            {/* Left Side: Text Content */}
            <motion.div 
               initial={{ opacity: 0, x: -50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
               className="lg:w-1/2 text-center lg:text-left"
            >
                <span className="inline-block py-1 px-3 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-md shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                   VIP Concierge Service
                </span>
                
                <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight drop-shadow-lg">
                    Can't find exactly <br/>
                    what you need?
                </h2>
                
                <p className="text-lg text-slate-300 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0 font-light">
                    Don't settle for average listings. Tell us your specific requirements, and we will scan our 
                    <span className="text-white font-semibold"> exclusive off-market network </span> 
                    to find your dream property within 24 hours.
                </p>

                {/* Feature Points */}
                <div className="flex flex-col gap-4 max-w-sm mx-auto lg:mx-0">
                    {['Access to exclusive off-market deals', 'Free consultation with senior experts', 'Zero spam, direct options'].map((item, index) => (
                        <div key={index} className="flex items-center gap-4 p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors backdrop-blur-sm group">
                            <div className="w-8 h-8 rounded-full bg-brand-primary/20 flex items-center justify-center text-brand-primary flex-shrink-0 group-hover:bg-brand-primary group-hover:text-white transition-colors">
                                <CheckCircle size={16} />
                            </div>
                            <span className="text-slate-200 text-sm font-medium">{item}</span>
                        </div>
                    ))}
                </div>
            </motion.div>

            {/* Right Side: The Glass Form */}
            <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8, delay: 0.2 }}
               className="lg:w-1/2 w-full max-w-md mx-auto"
            >
                <div className="relative group">
                    {/* Animated Glow Effect behind Form */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-brand-primary to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                    
                    <div className="relative bg-slate-900/40 backdrop-blur-xl p-2 rounded-2xl border border-white/10 shadow-2xl">
                        <div className="bg-white rounded-xl border border-gray-100 p-6 md:p-8">
                            <div className="mb-6 text-center md:text-left">
                                <h3 className="text-2xl font-bold text-gray-900">Request a Call Back</h3>
                                <p className="text-gray-500 text-xs mt-1 uppercase tracking-wide">
                                  Fields marked <span className="text-red-500">*</span> are mandatory
                                </p>
                            </div>
                            
                            {/* LeadForm Component */}
                            <LeadForm variant="default" />
                        </div>
                    </div>
                </div>
            </motion.div>

          </div>
        </div>
      </section>

            <Testimonials />

        </div>
    );
};

export default Home;