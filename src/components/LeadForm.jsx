import React, { useState } from 'react';
import { Loader2, CheckCircle, AlertCircle } from 'lucide-react';

const LeadForm = ({ variant = "default" }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    interest: "buy",
    budget: "",
    propertyType: "apartment",
    location: "",
  });

  // Handle Input Changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    // PHONE NUMBER VALIDATION (Only Numbers, Max 10)
    if (name === "phone") {
        const numericValue = value.replace(/\D/g, ''); // Remove non-numeric chars
        if (numericValue.length <= 10) {
            setFormData({ ...formData, [name]: numericValue });
        }
        return; // Stop execution here for phone
    }

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Extra Check: Phone number must be 10 digits
    if (formData.phone.length < 10) {
        alert("Please enter a valid 10-digit phone number.");
        return;
    }

    setIsSubmitting(true);

    // Simulate API Call
    setTimeout(() => {
      console.log("Form Submitted:", formData);
      setIsSubmitting(false);
      setIsSuccess(true);
      
      setTimeout(() => {
          setIsSuccess(false);
          setFormData({ name: "", phone: "", interest: "buy", budget: "", propertyType: "apartment", location: "" });
      }, 3000);
    }, 1500);
  };

  // Shared Styles
  const inputClasses = "w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/10 outline-none transition-all bg-gray-50 text-gray-900 placeholder:text-gray-400 font-medium";
  const labelClasses = "block text-xs font-bold text-gray-600 mb-1.5 uppercase tracking-wide";

  if (isSuccess) {
    return (
        <div className="bg-green-50 p-8 rounded-2xl border border-green-200 text-center animate-fade-in h-full flex flex-col items-center justify-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Received!</h3>
            <p className="text-gray-600">Our expert will call you shortly.</p>
        </div>
    );
  }

  // --- SELLER FORM VARIANT ---
  if (variant === "seller") {
    return (
      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-1">
        <div>
          <label className={labelClasses}>Your Name <span className="text-red-500">*</span></label>
          <input
            name="name"
            type="text"
            placeholder="John Doe"
            value={formData.name}
            onChange={handleChange}
            required
            className={inputClasses}
          />
        </div>
        <div>
          <label className={labelClasses}>Phone Number <span className="text-red-500">*</span></label>
          <div className="relative">
             <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-bold text-sm">+91</span>
             <input
                name="phone"
                type="tel"
                placeholder="98765 XXXXX"
                value={formData.phone}
                onChange={handleChange}
                required
                className={`${inputClasses} pl-12`} // Extra padding for +91
             />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
            <div>
            <label className={labelClasses}>Type <span className="text-red-500">*</span></label>
            <select name="propertyType" value={formData.propertyType} onChange={handleChange} className={inputClasses}>
                <option value="apartment">Apartment</option>
                <option value="villa">Villa</option>
                <option value="plot">Plot</option>
            </select>
            </div>
            <div>
            <label className={labelClasses}>City <span className="text-red-500">*</span></label>
            <input
                name="location"
                type="text"
                placeholder="Delhi"
                value={formData.location}
                onChange={handleChange}
                required
                className={inputClasses}
            />
            </div>
        </div>
        <button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full bg-brand-primary text-white font-bold py-4 rounded-xl hover:bg-blue-700 transition flex items-center justify-center gap-2 shadow-lg shadow-blue-200 mt-2"
        >
            {isSubmitting ? <Loader2 className="animate-spin" /> : "Get Free Valuation"}
        </button>
      </form>
    );
  }

  // --- DEFAULT (BUYER) FORM VARIANT ---
  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label className={labelClasses}>Name <span className="text-red-500">*</span></label>
        <input
          name="name"
          type="text"
          placeholder="Enter full name"
          value={formData.name}
          onChange={handleChange}
          required
          className={inputClasses}
        />
      </div>
      <div>
        <label className={labelClasses}>Mobile Number <span className="text-red-500">*</span></label>
        <div className="relative">
             <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-bold text-sm">+91</span>
             <input
                name="phone"
                type="tel"
                placeholder="98765 XXXXX"
                value={formData.phone}
                onChange={handleChange}
                required
                className={`${inputClasses} pl-12`} 
             />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
            <label className={labelClasses}>Interest</label>
            <select name="interest" value={formData.interest} onChange={handleChange} className={inputClasses}>
            <option value="buy">Buy</option>
            <option value="rent">Rent</option>
            <option value="invest">Invest</option>
            </select>
        </div>
        <div>
            <label className={labelClasses}>Budget <span className="text-red-500">*</span></label>
            <select name="budget" value={formData.budget} onChange={handleChange} required className={inputClasses}>
            <option value="">Select</option>
            <option value="50l-1cr">50L - 1Cr</option>
            <option value="1cr-3cr">1Cr - 3Cr</option>
            <option value="3cr+">3Cr+</option>
            </select>
        </div>
      </div>
      
      <button 
        type="submit" 
        disabled={isSubmitting}
        className="w-full bg-brand-primary text-white font-bold py-4 rounded-xl hover:bg-blue-600 transition flex items-center justify-center gap-2 shadow-xl shadow-brand-primary/20 hover:shadow-brand-primary/40 transform active:scale-95 duration-200"
      >
        {isSubmitting ? <Loader2 className="animate-spin" /> : "Request Call Back"}
      </button>
      
      <div className="flex items-center justify-center gap-2 text-[10px] text-gray-400 mt-2">
        <AlertCircle size={12} />
        <span>Your data is 100% secure with us.</span>
      </div>
    </form>
  );
};

export default LeadForm;