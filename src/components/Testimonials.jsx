import React from 'react';
import { Star, Quote, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    role: "Buyer, Gurgaon",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
    text: "Sharma Properties helped me find my dream 3BHK apartment in Sector 62 in just one week. The entire process was transparent and hassle-free.",
  },
  {
    id: 2,
    name: "Anita Desai",
    role: "Seller, Noida",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
    text: "I was struggling to sell my villa for months. They brought serious buyers and closed the deal at the price I wanted within 15 days.",
  },
  {
    id: 3,
    name: "Vikram Singh",
    role: "NRI Investor",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    rating: 5,
    text: "Living abroad, it's hard to trust agents back home. But Sharma ji's team handled everything efficiently. My go-to advisors.",
  },
];

const Testimonials = () => {
  // Animation Variants
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const cardAnim = {
    hidden: { opacity: 0, y: 30 }, // Reduced movement for mobile
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } }
  };

  return (
    <section className="py-12 md:py-24 bg-white relative overflow-hidden">
      
      {/* Background Decor (Smaller on mobile) */}
      <div className="absolute top-0 right-0 w-32 h-32 md:w-64 md:h-64 bg-blue-50 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 md:w-64 md:h-64 bg-orange-50 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-brand-primary/10 text-brand-primary text-[10px] md:text-xs font-bold tracking-widest uppercase mb-2 md:mb-3">
             Client Stories
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-3 md:mb-6">
            Trusted By <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-blue-500">Hundreds</span>
          </h2>
          <p className="text-slate-500 text-sm md:text-lg max-w-xl mx-auto">
            Real stories from real people who found their dream property with us.
          </p>
        </motion.div>

        {/* Testimonial Grid */}
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
        >
          {testimonials.map((testimonial) => (
            <motion.div 
              key={testimonial.id} 
              variants={cardAnim}
              className="group relative bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 overflow-hidden"
            >
              
              {/* Top Gradient Border */}
              <div className="absolute top-0 left-0 w-full h-1 md:h-1.5 bg-gradient-to-r from-brand-primary to-blue-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

              {/* Quote Icon (Smaller on Mobile) */}
              <Quote className="absolute top-4 right-4 md:top-6 md:right-6 text-gray-100 h-12 w-12 md:h-20 md:w-20 transform rotate-12 group-hover:rotate-0 group-hover:text-brand-primary/10 transition-all duration-500" />

              {/* Stars */}
              <div className="flex gap-1 mb-4 md:mb-6 relative z-10">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={14} className="text-yellow-400 fill-yellow-400 md:w-[18px]" />
                ))}
              </div>

              {/* Review Text (Optimized Font Size) */}
              <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-6 md:mb-8 relative z-10 font-medium line-clamp-4 md:line-clamp-none">
                "{testimonial.text}"
              </p>

              {/* Divider */}
              <div className="w-full h-px bg-gray-100 mb-4 md:mb-6 group-hover:bg-gray-200 transition-colors"></div>

              {/* User Info */}
              <div className="flex items-center gap-3 md:gap-4 relative z-10">
                <div className="relative">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover border-2 border-white shadow-md"
                    />
                    <div className="absolute -bottom-1 -right-1 bg-green-500 border-2 border-white text-white rounded-full p-0.5">
                        <CheckCircle2 size={8} className="md:w-[10px] md:h-[10px]" />
                    </div>
                </div>
                
                <div>
                  <h4 className="font-bold text-slate-900 text-sm md:text-base group-hover:text-brand-primary transition-colors">{testimonial.name}</h4>
                  <p className="text-[10px] md:text-xs text-slate-400 font-medium uppercase tracking-wide">{testimonial.role}</p>
                </div>
              </div>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Testimonials;