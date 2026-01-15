import React from "react";
import { Link } from "react-router-dom";
import { Home, TrendingUp, Check, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

/* Variants */
const cardLeft = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const cardRight = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delay: 0.15,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const BuyerSellerSection = () => {
  return (
    <section className="py-20 bg-white relative -top-12 z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">

          {/* Buyer Card */}
          <motion.div
            variants={cardLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            className="
              bg-white rounded-2xl p-8
              border border-gray-100
              shadow-[0_10px_30px_rgba(0,0,0,0.08)]
              transition-all duration-300
              hover:-translate-y-2 hover:shadow-2xl
            "
          >
            <div className="flex flex-col h-full">
              <div className="w-14 h-14 bg-brand-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Home className="w-7 h-7 text-brand-primary" />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Looking to Buy?
              </h3>

              <ul className="space-y-4 mb-8 flex-grow">
                {[
                  "Budget-friendly options",
                  "Free site visit support",
                  "No brokerage surprises",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="mt-1 bg-brand-green/15 p-1 rounded-full">
                      <Check className="w-3 h-3 text-brand-green" />
                    </div>
                    <span className="text-gray-600 font-medium">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <Link to="/properties">
                <button
                  className="
                    w-full bg-brand-primary text-white
                    font-semibold py-4 rounded-xl
                    flex items-center justify-center gap-2
                    transition-all duration-300
                    hover:bg-brand-primary/90
                    hover:shadow-[0_15px_40px_rgba(37,99,235,0.35)]
                  "
                >
                  View Properties <ArrowRight size={18} />
                </button>
              </Link>
            </div>
          </motion.div>

          {/* Seller Card */}
          <motion.div
            variants={cardRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            className="
              bg-brand-dark text-white rounded-2xl p-8
              border border-white/10
              shadow-[0_10px_30px_rgba(0,0,0,0.2)]
              transition-all duration-300
              hover:-translate-y-2 hover:shadow-2xl
            "
          >
            <div className="flex flex-col h-full">
              <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center mb-6">
                <TrendingUp className="w-7 h-7 text-brand-accent" />
              </div>

              <h3 className="text-2xl font-bold mb-4">
                Want to Sell Fast?
              </h3>

              <ul className="space-y-4 mb-8 flex-grow">
                {[
                  "Serious buyers only",
                  "Smart pricing strategy",
                  "Faster deal closure",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="mt-1 bg-brand-accent p-1 rounded-full text-brand-dark">
                      <Check className="w-3 h-3" />
                    </div>
                    <span className="text-gray-300 font-medium">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <Link to="/seller">
                <button
                  className="
                    w-full border-2 border-brand-accent
                    text-brand-accent font-semibold py-4 rounded-xl
                    flex items-center justify-center gap-2
                    transition-all duration-300
                    hover:bg-brand-accent hover:text-brand-dark
                  "
                >
                  Get Free Valuation <ArrowRight size={18} />
                </button>
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default BuyerSellerSection;
