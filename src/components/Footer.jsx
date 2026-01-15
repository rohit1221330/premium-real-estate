import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageCircle, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

          {/* Column 1: Brand Logo & Description */}
          <div>
            <div className="flex items-center gap-3 mb-6">
               {/* Logo Box matching image style */}
               <div className="w-10 h-10 bg-brand-primary rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg">
                 S
               </div>
               <span className="text-xl font-bold text-white tracking-tight">
                 Sharma<span className="text-blue-400">Properties</span>
               </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Your trusted partner for buying and selling properties in Delhi NCR. 
              10+ years of experience serving happy clients.
            </p>
          </div>

    
          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/properties" className="text-slate-400 hover:text-white hover:underline transition-colors text-sm">
                  View Properties
                </Link>
              </li>
              <li>
                <Link to="/seller" className="text-slate-400 hover:text-white hover:underline transition-colors text-sm">
                  Sell Your Property
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-400 hover:text-white hover:underline transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
               <li>
                <Link to="/" className="text-slate-400 hover:text-white hover:underline transition-colors text-sm">
                  Home
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Us */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-slate-400 text-sm group cursor-pointer hover:text-white transition">
                <Phone size={18} className="text-brand-primary" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3 text-slate-400 text-sm group cursor-pointer hover:text-white transition">
                <MessageCircle size={18} className="text-brand-primary" />
                <span>WhatsApp</span>
              </li>
              <li className="flex items-center gap-3 text-slate-400 text-sm group cursor-pointer hover:text-white transition">
                <Mail size={18} className="text-brand-primary" />
                <span>contact@sharmaproperties.com</span>
              </li>
              <li className="flex items-start gap-3 text-slate-400 text-sm">
                <MapPin size={18} className="text-brand-primary mt-0.5 flex-shrink-0" />
                <span>Sector 62, Golf Course Ext,<br/>Gurgaon, India</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="border-t border-slate-800 pt-8 mb-14 lg:mb-0 text-center">
          <p className="text-slate-500 text-sm">
            © 2025 Sharma Properties. All rights reserved.
          </p>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;