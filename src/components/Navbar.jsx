import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  const navLinks = [
    { title: "Home", path: "/" },
    { title: "Properties", path: "/properties" },
    { title: "Sell Property", path: "/seller" },
    { title: "Contact", path: "/contact" },
  ];

  return (
    <>
      <nav 
        className={`fixed w-full top-0 z-50 transition-all duration-500 border-b ${
          scrolled 
            ? "bg-white/90 backdrop-blur-xl border-gray-200 py-3 shadow-sm" 
            : "bg-white border-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            
            {/* 1. LOGO (Clean & Minimal) */}
            <Link to="/" className="flex items-center gap-2.5 group">
              <div className="bg-brand-primary text-white w-9 h-9 rounded-lg flex items-center justify-center font-bold text-lg shadow-md transition-transform group-hover:scale-105">
                S
              </div>
              <span className="text-xl font-bold text-slate-900 tracking-tight">
                Sharma<span className="text-brand-primary">Properties</span>
              </span>
            </Link>

            {/* 2. CENTER LINKS (Sophisticated Hover) */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link 
                  key={link.title}
                  to={link.path} 
                  className="relative group py-2"
                >
                  <span className={`text-sm font-semibold tracking-wide transition-colors duration-300 ${
                    isActive(link.path) ? "text-brand-primary" : "text-slate-500 group-hover:text-slate-900"
                  }`}>
                    {link.title}
                  </span>
                  
                  {/* Subtle Dot Indicator instead of Line */}
                  {isActive(link.path) && (
                    <motion.div 
                        layoutId="nav-dot"
                        className="absolute -bottom-1 left-0 right-0 h-1 w-1 bg-brand-primary rounded-full mx-auto"
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* 3. RIGHT CTA (High Contrast) */}
            <div className="hidden md:flex items-center">
              <a 
                href="tel:+919876543210" 
                className="flex items-center gap-2 bg-slate-900 hover:bg-brand-primary text-white px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-300 shadow-lg hover:shadow-blue-200 hover:-translate-y-0.5"
              >
                <Phone size={16} />
                <span>+91 98765 43210</span>
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="flex items-center md:hidden">
              <button 
                onClick={() => setIsOpen(!isOpen)} 
                className="text-slate-800 p-2 hover:bg-slate-100 rounded-full transition"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU (Clean Slide Down) */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsOpen(false)}
                className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
            />
            
            {/* Menu Content */}
            <motion.div 
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 left-0 w-full bg-white z-50 md:hidden border-b border-gray-100 shadow-2xl rounded-b-3xl overflow-hidden"
            >
              <div className="p-6 pt-24 space-y-2">
                {navLinks.map((link) => (
                   <Link 
                      key={link.title}
                      onClick={() => setIsOpen(false)} 
                      to={link.path} 
                      className={`flex items-center justify-between text-lg font-medium p-4 rounded-xl transition ${
                          isActive(link.path) 
                          ? "bg-blue-50 text-brand-primary" 
                          : "text-slate-600 hover:bg-slate-50"
                      }`}
                   >
                      {link.title}
                      {isActive(link.path) && <ArrowRight size={18} />}
                   </Link>
                ))}
                
                <div className="pt-4 mt-2">
                    <a href="tel:+919876543210" className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold text-center flex items-center justify-center gap-2 active:scale-95 transition">
                      <Phone size={20} /> Call Expert
                    </a>
                </div>
              </div>
              
              {/* Close Button Inside Menu */}
              <button 
                onClick={() => setIsOpen(false)}
                className="absolute top-6 right-6 p-2 bg-slate-100 rounded-full text-slate-500 hover:bg-slate-200 transition"
              >
                <X size={24} />
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;