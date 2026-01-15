import React from 'react';
import LeadForm from '../components/LeadForm';
import { Users, TrendingUp, Shield, Clock, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const Seller = () => {
  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const features = [
    {
      icon: Users,
      title: "Serious Buyers Only",
      desc: "We bring only verified, serious buyers to the table. No time wasters."
    },
    {
      icon: TrendingUp,
      title: "Best Price Strategy",
      desc: "Our market expertise ensures you get the maximum value for your property."
    },
    {
      icon: Shield,
      title: "Legal Support",
      desc: "Complete documentation and legal verification handled by experts."
    },
    {
      icon: Clock,
      title: "Faster Closure",
      desc: "Our network and process ensures quicker deal closure."
    }
  ];

  return (
    <div className="animate-fade-in pb-20 bg-gray-50 min-h-screen">
      
      {/* 1. TOP BANNER SECTION (Cinematic Zoom) */}
      <div className="relative h-[450px] flex items-center justify-center overflow-hidden bg-slate-900">
        
        {/* Animated Background */}
        <motion.div 
           initial={{ scale: 1 }}
           animate={{ scale: 1.1 }}
           transition={{ duration: 15, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
           className="absolute inset-0 z-0"
        >
           <img 
             src="https://images.unsplash.com/photo-1560518883-ce09059ee971?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
             alt="Luxury Office"
             className="w-full h-full object-cover opacity-80"
           />
        </motion.div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/60 to-gray-50/90 z-10"></div>

        {/* Banner Text (Animated) */}
        <motion.div 
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
           className="relative z-20 text-center px-4 max-w-4xl mx-auto pt-10"
        >
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-brand-accent font-bold tracking-wider uppercase text-xs mb-4 shadow-lg">
               Seller's Advantage
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6 drop-shadow-2xl">
               Sell Your Property <br/>
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-white">
                  With Absolute Confidence
               </span>
            </h1>
            <p className="text-xl text-gray-200 font-medium max-w-2xl mx-auto drop-shadow-md">
               Get the best market price, verified buyers, and a hassle-free selling experience.
            </p>
        </motion.div>
      </div>

      {/* 2. MAIN CONTENT SECTION */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-30">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* --- LEFT COLUMN: Features (Animated Stagger) --- */}
          <motion.div 
             variants={staggerContainer}
             initial="hidden"
             animate="visible"
             className="flex flex-col gap-6"
          >
             {/* Feature Box */}
             <motion.div variants={fadeInUp} className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100/50 backdrop-blur-sm">
                <h2 className="text-2xl font-bold text-gray-900 mb-8 border-l-4 border-brand-primary pl-4">Why Sell With Us?</h2>
                
                <div className="space-y-8">
                  {features.map((item, index) => (
                    <div key={index} className="flex gap-5 group">
                      <div className="flex-shrink-0">
                        <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-md group-hover:scale-110">
                          <item.icon size={26} />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-brand-primary transition-colors">{item.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
             </motion.div>

             {/* "Our Promise" Box */}
             <motion.div variants={fadeInUp} className="bg-gradient-to-br from-white to-blue-50 border border-blue-100 rounded-2xl p-8 shadow-lg">
                <h3 className="font-bold text-gray-900 mb-6 flex items-center gap-3 text-lg">
                  <span className="bg-brand-primary text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">✓</span>
                  Our Promise to You
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "No fake enquiries",
                    "Proper pricing strategy",
                    "Marketing + buyers network",
                    "Transparent process"
                  ].map((promise, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm text-gray-700 font-medium bg-white p-3 rounded-lg border border-gray-100 shadow-sm">
                      <CheckCircle2 size={18} className="text-green-500 flex-shrink-0" />
                      {promise}
                    </div>
                  ))}
                </div>
             </motion.div>
          </motion.div>

          {/* --- RIGHT COLUMN: Form Container (Slide Up) --- */}
          <motion.div 
             initial={{ opacity: 0, y: 50 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.4, duration: 0.8 }}
             className="h-fit sticky top-28"
          >
             <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden relative">
                 {/* Decorative Top Strip */}
                 <div className="h-2 w-full bg-gradient-to-r from-brand-primary to-brand-accent"></div>
                 
                 <div className="p-8 pb-0 text-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Get Free Valuation</h3>
                    <p className="text-gray-500 text-sm">Fill in your details and our expert will call you within 10 minutes.</p>
                 </div>
                 
                 <div className="p-4">
                    <LeadForm variant="seller" />
                 </div>
             </div>
             
             {/* Trust Badge below form */}
             <div className="mt-6 text-center text-xs text-gray-400 font-medium uppercase tracking-widest">
                🔒 100% Secure & Confidential
             </div>
          </motion.div>

        </div>
      </div>

    </div>
  );
};

export default Seller;