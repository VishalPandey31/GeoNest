import React, { useState, useEffect } from 'react';
import { X, Phone, User, MapPin, MessageCircle } from 'lucide-react';

const LeadPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', location: '', requirement: '' });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    // Show popup after 1.5 seconds
    const timer = setTimeout(() => setIsOpen(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `Hello Rutuja! \n\nNew Enquiry from Website:\n\n Name: ${form.name}\n Phone: ${form.phone}\n Location Interest: ${form.location || 'Not specified'}\n Requirement: ${form.requirement || 'General enquiry'}\n\nPlease get in touch.`
    );
    window.open(`https://wa.me/919321669266?text=${msg}`, '_blank');
    setSubmitted(true);
    setTimeout(() => setIsOpen(false), 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={() => setIsOpen(false)}
      />

      {/* Modal */}
      <div className="relative z-10 w-full max-w-3xl bg-[#0f0f0f] rounded-2xl overflow-hidden shadow-2xl border border-[#c5a059]/30 animate-fade-in flex flex-col md:flex-row">
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 z-20 w-8 h-8 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-[#c5a059] hover:text-black transition-all"
        >
          <X size={16} />
        </button>

        {/* Left — Property Banner */}
        <div className="relative md:w-5/12 min-h-[220px] md:min-h-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=600"
            alt="Featured Property"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          <div className="absolute bottom-0 left-0 p-6">
            <span className="bg-[#c5a059] text-black text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full mb-3 inline-block">
              🔥 New Launch
            </span>
            <h3 className="text-white text-2xl font-bold leading-tight" style={{fontFamily:'Outfit,sans-serif'}}>
              Premium Homes<br />
              <span className="text-[#c5a059]">Dombivli • Kalyan • Thakurli</span>
            </h3>
            <p className="text-gray-300 text-sm mt-2">Starting from <span className="text-[#c5a059] font-bold">₹38 Lakhs</span></p>
          </div>
        </div>

        {/* Right — Enquiry Form */}
        <div className="flex-1 p-6 md:p-8 flex flex-col justify-center">
          {submitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="text-green-400" size={32} />
              </div>
              <h3 className="text-white text-xl font-bold mb-2">Redirecting to WhatsApp!</h3>
              <p className="text-gray-400 text-sm">We'll get back to you shortly.</p>
            </div>
          ) : (
            <>
              <p className="text-[#c5a059] text-xs font-bold uppercase tracking-widest mb-1">Get Free Consultation</p>
              <h3 className="text-white text-2xl font-bold mb-6" style={{fontFamily:'Outfit,sans-serif'}}>
                For any query, fill up the form.
              </h3>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                {/* Name */}
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
                  <input
                    required
                    type="text"
                    placeholder="Your Name"
                    value={form.name}
                    onChange={e => setForm({...form, name: e.target.value})}
                    className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-3 text-white text-sm outline-none focus:border-[#c5a059] transition-colors"
                  />
                </div>

                {/* Phone */}
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
                  <input
                    required
                    type="tel"
                    placeholder="Phone Number"
                    value={form.phone}
                    onChange={e => setForm({...form, phone: e.target.value})}
                    className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-3 text-white text-sm outline-none focus:border-[#c5a059] transition-colors"
                  />
                </div>

                {/* Location */}
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
                  <select
                    value={form.location}
                    onChange={e => setForm({...form, location: e.target.value})}
                    className="w-full bg-[#1a1a1a] border border-white/10 rounded-xl pl-10 pr-4 py-3 text-sm outline-none focus:border-[#c5a059] transition-colors text-white appearance-none"
                  >
                    <option value="">Select Location (Optional)</option>
                    <option>Dombivli</option>
                    <option>Kalyan</option>
                    <option>Thakurli</option>
                  </select>
                </div>

                {/* Requirement */}
                <textarea
                  rows={2}
                  placeholder="Your Requirement (e.g. 2 BHK in Dombivli...)"
                  value={form.requirement}
                  onChange={e => setForm({...form, requirement: e.target.value})}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-[#c5a059] transition-colors resize-none"
                />

                <button
                  type="submit"
                  className="w-full bg-[#c5a059] hover:bg-[#a68545] text-black font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 transition-all text-sm uppercase tracking-wider"
                >
                  <MessageCircle size={18} />
                  Submit on WhatsApp
                </button>
              </form>

              <p className="text-gray-600 text-[10px] text-center mt-4">
                By submitting, you agree to be contacted by Rutuja Khot via WhatsApp.
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default LeadPopup;
