import React from 'react';
import LeadForm from '../components/LeadForm';
import { Phone, MessageCircle, Mail, MapPin, Clock, ArrowRight } from "lucide-react";
import { motion } from 'framer-motion';

const Contact = () => {
  // Animations
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  return (
    <div className="animate-fade-in pb-10 min-h-screen bg-gray-50">

      {/* 1. HERO SECTION (Parallax & Cinematic) */}
      <div className="relative h-[400px] flex items-center justify-center overflow-hidden bg-slate-900">

        {/* Animated Background */}
        <motion.div
          initial={{ scale: 1 }}
          animate={{ scale: 1.1 }}
          transition={{ duration: 15, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
          className="absolute inset-0 z-0"
        >
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
            alt="Modern Office"
            className="w-full h-full object-cover opacity-60"
          />
        </motion.div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-50 via-slate-900/40 to-slate-900/60 z-10"></div>

        {/* Hero Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-20 text-center px-4 max-w-4xl mx-auto pt-10"
        >
          <span className=" inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-brand-accent font-bold tracking-wider uppercase text-xs mb-4 shadow-lg">
            24/7 Support
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 drop-shadow-2xl">
            Let's 
            <span className="text-brand-primary"> Start </span>
            a Conversation
          </h1>
          <p className="text-xl text-gray-200 font-medium max-w-2xl mx-auto drop-shadow-md">
            Whether you're buying, selling, or just curious about the market, our team is ready to help.
          </p>
        </motion.div>
      </div>

      {/* 2. MAIN GRID (Floating Over Header) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-30">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">

          {/* --- LEFT COLUMN: Contact Cards (Staggered) --- */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={fadeInUp} className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Get In Touch</h2>
              <p className="text-gray-600 text-lg">
                Visit our office for a coffee or reach out to us digitally. We typically reply within minutes.
              </p>
            </motion.div>

            <div className="space-y-5">

              {/* Phone Card */}
              <motion.a
                href="tel:+919876543210"
                variants={fadeInUp}
                className="flex items-center gap-5 p-6 bg-white rounded-2xl border border-gray-100 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center group-hover:bg-brand-primary group-hover:text-white transition-all duration-300 shadow-sm">
                  <Phone className="w-7 h-7 text-brand-primary group-hover:text-white transition-colors" />
                </div>
                <div className="flex-1">
                  <p className="font-bold text-gray-900 text-lg group-hover:text-brand-primary transition-colors">Call Us</p>
                  <p className="text-gray-500 font-medium">+91 98765 43210</p>
                </div>
                <ArrowRight className="text-gray-300 group-hover:text-brand-primary transform group-hover:translate-x-1 transition-all" />
              </motion.a>

              {/* WhatsApp Card */}
              <motion.a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noreferrer"
                variants={fadeInUp}
                className="flex items-center gap-5 p-6 bg-white rounded-2xl border border-gray-100 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center group-hover:bg-green-500 group-hover:text-white transition-all duration-300 shadow-sm">
                  <MessageCircle className="w-7 h-7 text-green-600 group-hover:text-white transition-colors" />
                </div>
                <div className="flex-1">
                  <p className="font-bold text-gray-900 text-lg group-hover:text-green-600 transition-colors">WhatsApp</p>
                  <p className="text-gray-500 font-medium">Chat instantly</p>
                </div>
                <ArrowRight className="text-gray-300 group-hover:text-green-600 transform group-hover:translate-x-1 transition-all" />
              </motion.a>

              {/* Email Card */}
              <motion.a
                href="mailto:contact@sharmaproperties.com"
                variants={fadeInUp}
                className="flex items-center gap-5 p-6 bg-white rounded-2xl border border-gray-100 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center group-hover:bg-brand-accent group-hover:text-white transition-all duration-300 shadow-sm">
                  <Mail className="w-7 h-7 text-brand-accent group-hover:text-white transition-colors" />
                </div>
                <div className="flex-1">
                  <p className="font-bold text-gray-900 text-lg group-hover:text-brand-accent transition-colors">Email</p>
                  <p className="text-gray-500 font-medium">contact@sharmaproperties.com</p>
                </div>
                <ArrowRight className="text-gray-300 group-hover:text-brand-accent transform group-hover:translate-x-1 transition-all" />
              </motion.a>

              {/* Info Grid */}
              <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <div className="p-5 bg-white rounded-2xl border border-gray-100 shadow-md hover:shadow-lg transition">
                  <div className="flex items-center gap-3 mb-2 font-bold text-gray-900">
                    <div className="p-2 bg-gray-100 rounded-lg"><MapPin size={18} className="text-brand-primary" /></div>
                    Location
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed pl-1">Sector 62, Golf Course Ext,<br />Gurgaon, India</p>
                </div>
                <div className="p-5 bg-white rounded-2xl border border-gray-100 shadow-md hover:shadow-lg transition">
                  <div className="flex items-center gap-3 mb-2 font-bold text-gray-900">
                    <div className="p-2 bg-gray-100 rounded-lg"><Clock size={18} className="text-brand-primary" /></div>
                    Hours
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed pl-1">Mon - Sat<br />9:30 AM - 7:00 PM</p>
                </div>
              </motion.div>

            </div>
          </motion.div>

          {/* --- RIGHT COLUMN: Premium Form Container --- */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Sticky Form Wrapper */}
            <div className="sticky top-28">
              {/* Decorative Glow */}
              <div className="absolute -inset-1 bg-gradient-to-br from-brand-primary to-blue-400 rounded-3xl blur opacity-20"></div>

              <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
                <div className="bg-slate-50 p-6 md:p-8 border-b border-gray-100 text-center">
                  <h3 className="text-2xl font-bold text-gray-900">Send a Message</h3>
                  <p className="text-gray-500 text-sm mt-2">
                    Fill the form below and we'll get back to you within <span className="font-bold text-brand-primary">10 minutes</span>.
                  </p>
                </div>

                <div className="p-2">
                  {/* Reusing existing LeadForm - Ensure it handles "default" variant well */}
                  <LeadForm variant="default" />
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* 3. MAP SECTION (Full Width) */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-20 bg-white p-3 rounded-3xl border border-gray-200 shadow-xl"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224346.48129412968!2d77.06889954713626!3d28.52728034389636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1709123456789!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0, borderRadius: '1.5rem' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Office Location"
          ></iframe>
        </motion.div>

      </div>
    </div>
  );
};

export default Contact;