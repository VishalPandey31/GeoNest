import React, { useState } from 'react';
import { MessageCircle, X, Send, User, ChevronRight } from 'lucide-react';

const WhatsAppWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', message: '' });
  const phoneNumber = "919321669266"; // Rutuja Khot

  const handleStartChat = (e) => {
    e.preventDefault();
    const encodedMessage = encodeURIComponent(
      `Hi Rutuja, I'm ${formData.name}. ${formData.message}`
    );
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      {/* Concierge Modal */}
      {isOpen && (
        <div className="absolute bottom-24 right-0 w-[350px] glass-morphism rounded-2xl shadow-2xl overflow-hidden animate-fade-in border-white-10">
          {/* Header */}
          <div className="bg-primary p-6 text-black flex justify-between items-center">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center border-2 border-white">
                  <User size={24} className="text-primary" />
                </div>
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-primary rounded-full"></div>
              </div>
              <div className="flex flex-col">
                <h4 className="font-bold text-base leading-none mb-1">Rutuja Khot</h4>
                <p className="text-[10px] uppercase tracking-widest font-black opacity-70">Property Concierge</p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)} 
              className="w-8 h-8 rounded-full bg-black/10 flex items-center justify-center hover:bg-black/20 transition-all"
            >
              <X size={18} />
            </button>
          </div>
          
          {/* Form Body */}
          <div className="p-8 space-y-6">
            <div className="bg-white-5 p-4 rounded-xl border-white-10">
              <p className="text-gray-300 text-sm italic leading-relaxed">
                "Hi! I'm here to help you find the best property in Dombivli & Kalyan. Let's chat!"
              </p>
            </div>

            <form onSubmit={handleStartChat} className="space-y-4">
              <div className="space-y-2">
                <label className="text-[10px] text-gray-500 uppercase tracking-[0.2em] font-bold">Your Name</label>
                <input 
                  type="text" 
                  required
                  placeholder="Enter your name" 
                  className="w-full bg-dark border-white-10 rounded-xl px-4 py-3 text-white text-sm outline-none"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] text-gray-500 uppercase tracking-[0.2em] font-bold">Requirement</label>
                <textarea 
                  rows="3" 
                  required
                  placeholder="I'm looking for 2BHK in..." 
                  className="w-full bg-dark border-white-10 rounded-xl px-4 py-3 text-white text-sm outline-none resize-none"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>
              <button 
                type="submit"
                className="w-full bg-primary text-black py-4 rounded-xl font-bold flex items-center justify-center gap-3 transition-all"
              >
                START CHAT <ChevronRight size={18} />
              </button>
            </form>
          </div>
          
          {/* Footer */}
          <div className="bg-white-5 p-3 text-center border-t border-white-10">
            <p className="text-[9px] text-gray-500 uppercase tracking-widest font-bold">GeoNest • Secured Chat</p>
          </div>
        </div>
      )}

      {/* Primary Floating Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-all duration-500 ${isOpen ? 'bg-dark rotate-90 border-white-10' : 'bg-primary'}`}
      >
        {isOpen ? <X className="text-primary" size={32} /> : <MessageCircle className="text-black" size={32} />}
        {!isOpen && (
          <span className="absolute -top-1 -right-1 flex h-6 w-6">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-6 w-6 bg-primary flex items-center justify-center text-[10px] font-black text-black">1</span>
          </span>
        )}
      </button>
    </div>
  );
};

export default WhatsAppWidget;
