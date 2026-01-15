import React, { useState } from 'react';
import { properties } from '../data/properties';
import { MapPin, RotateCcw, Bed, Bath, Square, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

// --- HELPER: Price Parser ---
const parsePriceToLakhs = (priceStr) => {
    if (!priceStr) return 0;
    const cleanStr = priceStr.replace(/[^0-9.]/g, ''); 
    let value = parseFloat(cleanStr);
    if (priceStr.includes('Cr')) value = value * 100;
    return value;
};

const Properties = () => {
    const [filters, setFilters] = useState({
        location: 'All Locations',
        budget: 'All Budgets',
        type: 'All Types'
    });

    const locations = ['All Locations', ...new Set(properties.map(p => p.location))];
    const types = ['All Types', ...new Set(properties.map(p => p.type))];
    const budgets = ['All Budgets', 'Under 50 Lac', '50 Lac - 1 Cr', '1 Cr - 3 Cr', 'Above 3 Cr'];

    const filteredProperties = properties.filter((property) => {
        const matchLocation = filters.location === 'All Locations' || property.location === filters.location;
        const matchType = filters.type === 'All Types' || property.type === filters.type;
        let matchBudget = true;
        const priceInLakhs = parsePriceToLakhs(property.price);

        if (filters.budget === 'Under 50 Lac') matchBudget = priceInLakhs < 50;
        else if (filters.budget === '50 Lac - 1 Cr') matchBudget = priceInLakhs >= 50 && priceInLakhs <= 100;
        else if (filters.budget === '1 Cr - 3 Cr') matchBudget = priceInLakhs > 100 && priceInLakhs <= 300;
        else if (filters.budget === 'Above 3 Cr') matchBudget = priceInLakhs > 300;

        return matchLocation && matchType && matchBudget;
    });

    const handleFilterChange = (key, value) => setFilters(prev => ({ ...prev, [key]: value }));
    const resetFilters = () => setFilters({ location: 'All Locations', budget: 'All Budgets', type: 'All Types' });

    return (
        <div className="min-h-screen bg-gray-50">
            
            {/* 1. PAGE HEADER WITH BACKGROUND IMAGE */}
            <div className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 px-4 bg-slate-900 overflow-hidden">
                
                {/* Background Image & Overlay */}
                <div className="absolute inset-0 z-0">
                    <img 
                        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
                        alt="City Skyline" 
                        className="w-full h-full object-cover opacity-40"
                    />
                    {/* Gradient Overlay for Text Readability */}
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 via-slate-900/80 to-gray-50"></div>
                </div>

                {/* Content (Centered) */}
                <div className="relative z-10 max-w-7xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight drop-shadow-lg">
                            Find Your <span className="text-brand-primary">Perfect Space</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto font-medium">
                            Browse verified listings across Delhi NCR tailored to your lifestyle and budget.
                        </p>
                    </motion.div>

                    {/* FLOATING FILTER BAR */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="mt-10 inline-flex flex-col md:flex-row items-center gap-4 bg-white p-4 rounded-2xl shadow-2xl border border-gray-100 max-w-4xl mx-auto w-full"
                    >
                        {/* Location */}
                        <div className="w-full md:flex-1 relative">
                            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                            <select 
                                value={filters.location} 
                                onChange={(e) => handleFilterChange('location', e.target.value)}
                                className="w-full pl-10 pr-4 py-3 bg-gray-50 hover:bg-white border border-transparent hover:border-brand-primary text-gray-900 text-sm font-medium rounded-xl focus:ring-2 focus:ring-brand-primary outline-none transition cursor-pointer appearance-none"
                            >
                                {locations.map((loc, i) => <option key={i} value={loc}>{loc}</option>)}
                            </select>
                        </div>

                        {/* Budget */}
                        <div className="w-full md:flex-1 relative">
                             <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">₹</span>
                            <select 
                                value={filters.budget} 
                                onChange={(e) => handleFilterChange('budget', e.target.value)}
                                className="w-full pl-8 pr-4 py-3 bg-gray-50 hover:bg-white border border-transparent hover:border-brand-primary text-gray-900 text-sm font-medium rounded-xl focus:ring-2 focus:ring-brand-primary outline-none transition cursor-pointer appearance-none"
                            >
                                {budgets.map((b, i) => <option key={i} value={b}>{b}</option>)}
                            </select>
                        </div>

                        {/* Type */}
                        <div className="w-full md:flex-1 relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                            <select 
                                value={filters.type} 
                                onChange={(e) => handleFilterChange('type', e.target.value)}
                                className="w-full pl-10 pr-4 py-3 bg-gray-50 hover:bg-white border border-transparent hover:border-brand-primary text-gray-900 text-sm font-medium rounded-xl focus:ring-2 focus:ring-brand-primary outline-none transition cursor-pointer appearance-none"
                            >
                                {types.map((t, i) => <option key={i} value={t}>{t}</option>)}
                            </select>
                        </div>

                        {/* Reset Button */}
                        <button 
                            onClick={resetFilters} 
                            className="w-full md:w-auto flex items-center justify-center gap-2 text-brand-primary bg-blue-50 hover:bg-blue-100 font-bold text-sm px-6 py-3 rounded-xl transition whitespace-nowrap"
                        >
                            <RotateCcw size={16} /> Reset
                        </button>
                    </motion.div>
                </div>
            </div>

            {/* 2. PROPERTIES GRID SECTION */}
            <div className="max-w-7xl mx-auto px-4 pb-24 -mt-12 relative z-20">
                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence mode='popLayout'>
                        {filteredProperties.length > 0 ? (
                            filteredProperties.map((property) => (
                                <motion.div
                                    layout
                                    key={property.id}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.3 }}
                                    className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group"
                                >
                                    {/* Image Area */}
                                    <div className="h-64 overflow-hidden relative">
                                        <div className="absolute top-4 left-4 z-10 flex gap-2">
                                            <span className="bg-white/90 backdrop-blur-md text-brand-dark text-xs font-bold px-3 py-1.5 rounded-lg uppercase tracking-wider shadow-sm">
                                                {property.type}
                                            </span>
                                        </div>
                                        <div className="absolute top-4 right-4 z-10">
                                            <span className="bg-brand-accent text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
                                                {property.status}
                                            </span>
                                        </div>
                                        
                                        <img src={property.image} alt={property.title} className="w-full h-full object-cover transition transform group-hover:scale-110 duration-700" />
                                        
                                        {/* Overlay Gradient for Price */}
                                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 pt-20">
                                            <p className="text-white font-bold text-2xl">{property.price}</p>
                                        </div>
                                    </div>

                                    {/* Content Area */}
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-1 group-hover:text-brand-primary transition-colors">{property.title}</h3>
                                        <div className="flex items-center text-gray-500 text-sm mb-6">
                                            <MapPin size={16} className="mr-1 text-brand-primary" /> {property.location}
                                        </div>
                                        
                                        <div className="flex items-center justify-between text-xs text-gray-500 mb-6 border-t border-b border-gray-100 py-4">
                                            <div className="flex flex-col items-center gap-1"><span className="flex items-center gap-1 font-bold text-gray-700"><Bed size={16} /> 3</span> Beds</div>
                                            <div className="w-px h-8 bg-gray-100"></div>
                                            <div className="flex flex-col items-center gap-1"><span className="flex items-center gap-1 font-bold text-gray-700"><Bath size={16} /> 2</span> Baths</div>
                                            <div className="w-px h-8 bg-gray-100"></div>
                                            <div className="flex flex-col items-center gap-1"><span className="flex items-center gap-1 font-bold text-gray-700"><Square size={16} /> 1200</span> Sqft</div>
                                        </div>

                                        <div className="grid grid-cols-2 gap-4">
                                            <Link to={`/property/${property.id}`} className="border-2 border-brand-primary text-brand-primary font-bold py-3 rounded-xl hover:bg-brand-primary hover:text-white transition flex items-center justify-center text-sm">
                                                View Details
                                            </Link>
                                            <a href={`https://wa.me/919876543210?text=Interested in ${property.title}`} target="_blank" className="bg-green-500 text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-green-600 transition text-sm shadow-lg shadow-green-200">
                                                WhatsApp
                                            </a>
                                        </div>
                                    </div>
                                </motion.div>
                            ))
                        ) : (
                            <motion.div 
                                initial={{ opacity: 0 }} 
                                animate={{ opacity: 1 }} 
                                className="col-span-full text-center py-20 bg-white rounded-2xl border border-dashed border-gray-300 shadow-sm"
                            >
                                <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Search className="text-gray-400" size={32} />
                                </div>
                                <p className="text-xl text-gray-900 font-bold mb-2">No properties match your filters.</p>
                                <p className="text-gray-500 mb-6">Try adjusting your budget or location.</p>
                                <button onClick={resetFilters} className="text-brand-primary font-bold hover:underline">Clear all filters</button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            </div>
        </div>
    );
};

export default Properties;