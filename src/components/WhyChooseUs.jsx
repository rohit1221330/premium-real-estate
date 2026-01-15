import React from 'react';
import { Clock, Users, MapPin, Phone, ShieldCheck } from "lucide-react"; // ShieldCheck extra add kiya trust ke liye
import { motion } from 'framer-motion';

const features = [
  {
    icon: Clock,
    title: "10+ Years Experience",
    description: "A decade of mastering the Delhi NCR real estate market trends.",
  },
  {
    icon: Users,
    title: "500+ Happy Clients",
    description: "From first-time buyers to investors, we've delivered smiles.",
  },
  {
    icon: MapPin,
    title: "Hyper-Local Expertise",
    description: "We know every street, corner, and future plan of this city.",
  },
  {
    icon: ShieldCheck, // Changed from Phone to Shield for more "Premium" feel
    title: "100% Transparent",
    description: "No hidden charges. No surprises. Just honest business.",
  },
];

const WhyChooseUs = () => {
  // Animation Variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } }
  };

  return (
    <section className="py-12 bg-white relative overflow-hidden">

      {/* Background Decor (Subtle Gradients) */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-brand-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header (Animated) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-brand-primary font-bold tracking-widest uppercase text-xs mb-3 block">
            The Gold Standard
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
            Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-blue-400">Sharma Properties?</span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed">
            We don't just close deals; we build legacies. Experience a level of service that goes beyond the transaction.
          </p>
        </motion.div>

        {/* Grid Layout (Staggered Animation) */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={item}
              className="relative group bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden"
            >

              {/* Hover Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/0 to-brand-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-primary to-blue-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

              {/* Animated Icon */}
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-600 group-hover:bg-brand-primary group-hover:text-white group-hover:-translate-y-2 group-hover:rotate-3 transition-all duration-300 shadow-sm group-hover:shadow-lg group-hover:shadow-blue-200">
                  <feature.icon className="w-8 h-8" />
                </div>
              </div>

              {/* Text Content */}
              <div className="relative">
                <h3 className="font-bold text-xl text-slate-900 mb-3 group-hover:text-brand-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed group-hover:text-slate-600 hidden lg:block">
                  {feature.description}
                </p>

              </div>

            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;