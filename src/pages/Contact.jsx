import React from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';

const Contact = () => {
  return (
    <div className="pt-32 pb-20 animate-fade-in">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h4 className="text-primary font-bold tracking-widest uppercase text-sm mb-2">Get In Touch</h4>
          <h1 className="text-5xl font-bold text-white premium-font mb-6">Let's Find Your <span className="text-primary">Perfect Home</span></h1>
          <p className="text-gray-400 max-w-2xl mx-auto">Have questions? Our experts are here to help you navigate your property journey.</p>
        </div>

        <div className="flex flex-col md:flex-row gap-12">
          {/* Contact Info */}
          <div className="flex-grow md:w-1/3 space-y-8">
            <div className="glass-morphism p-8">
              <div className="flex items-center gap-6 mb-8 group">
                <div className="w-14 h-14 bg-white-5 rounded-xl flex items-center justify-center border-white-10 group-hover:bg-primary group-hover:text-black transition-all">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-1">Call Us</h4>
                  <p className="text-white font-bold">+91 93216 69266</p>
                </div>
              </div>

              <div className="flex items-center gap-6 mb-8 group">
                <div className="w-14 h-14 bg-white-5 rounded-xl flex items-center justify-center border-white-10 group-hover:bg-primary group-hover:text-black transition-all">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-1">Email Us</h4>
                  <p className="text-white font-bold">enquiry@smartpropertyfinder.com</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-white-5 rounded-xl flex items-center justify-center border-white-10 group-hover:bg-primary group-hover:text-black transition-all">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-1">Visit Us</h4>
                  <p className="text-white font-bold">102, Business Hub, Dombivli East</p>
                </div>
              </div>
            </div>

            <div className="bg-white-5 border-white-10 p-8 rounded-xl">
              <div className="flex items-center gap-4 mb-4">
                <MessageCircle size={32} className="text-[#25d366]" />
                <h3 className="text-xl font-bold text-white">Live WhatsApp Chat</h3>
              </div>
              <p className="text-gray-400 text-sm mb-6">Prefer a quick chat? Message us on WhatsApp for instant assistance and project brochures.</p>
              <a 
                href="https://wa.me/919321669266" 
                className="inline-block bg-[#25d366] text-white px-8 py-3 rounded-xl font-bold transition-all"
              >
                CHAT NOW
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="flex-grow md:w-2/3">
            <div className="glass-morphism p-10">
              <h3 className="text-2xl font-bold text-white mb-8">Send Us A Message</h3>
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Full Name</label>
                  <input type="text" placeholder="John Doe" className="w-full bg-white-5 border-white-10 rounded-xl px-4 py-4 text-white outline-none" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Phone Number</label>
                  <input type="tel" placeholder="+91 98XXX XXXXX" className="w-full bg-white-5 border-white-10 rounded-xl px-4 py-4 text-white outline-none" />
                </div>
                <div className="flex flex-col gap-2 md:col-span-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Subject</label>
                  <input type="text" placeholder="I'm interested in..." className="w-full bg-white-5 border-white-10 rounded-xl px-4 py-4 text-white outline-none" />
                </div>
                <div className="flex flex-col gap-2 md:col-span-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Message</label>
                  <textarea rows="5" placeholder="Tell us about your requirements..." className="w-full bg-white-5 border-white-10 rounded-xl px-4 py-4 text-white outline-none resize-none"></textarea>
                </div>
                <div className="md:col-span-2">
                  <button className="flex items-center justify-center gap-3 bg-primary text-black w-full py-5 rounded-xl font-bold transition-all uppercase tracking-widest text-sm">
                    SEND MESSAGE <Send size={18} />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
