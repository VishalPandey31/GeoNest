import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { properties } from '../data/properties';
import { MapPin, IndianRupee, Layout, CheckCircle2, ChevronRight, Share2, Heart, MessageCircle } from 'lucide-react';
import EmiCalculator from '../components/EmiCalculator';

const ProjectDetails = () => {
  const { id } = useParams();
  const property = properties.find(p => p.id === parseInt(id));
  const [activeImage, setActiveImage] = useState(0);

  if (!property) return <div className="pt-40 text-center text-white">Project not found</div>;

  return (
    <div className="pt-24 pb-20 animate-fade-in">
      <div className="container py-6 flex items-center gap-2 text-xs text-gray-500 uppercase tracking-widest font-bold">
        <Link to="/" className="hover:text-white">HOME</Link>
        <ChevronRight size={12} />
        <Link to="/projects" className="hover:text-white">PROJECTS</Link>
        <ChevronRight size={12} />
        <span className="text-primary">{property.name}</span>
      </div>

      <div className="container">
        <div className="flex flex-col md:flex-row gap-12">
          {/* Main Content */}
          <div className="flex-grow lg:w-2/3">
            {/* Image Gallery */}
            <div className="mb-8 group">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-4 h-[500px] border border-white/5">
                <img 
                  src={property.images ? property.images[activeImage] : property.image} 
                  alt={property.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="absolute top-6 right-6 flex gap-3">
                  <button className="w-10 h-10 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-primary transition-all">
                    <Share2 size={18} />
                  </button>
                  <button className="w-10 h-10 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-primary transition-all">
                    <Heart size={18} />
                  </button>
                </div>

                {/* Navigation Arrows */}
                {property.images && (
                  <>
                    <button 
                      onClick={() => setActiveImage(prev => (prev === 0 ? property.images.length - 1 : prev - 1))}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all hover:bg-primary"
                    >
                      <ChevronRight size={24} className="rotate-180" />
                    </button>
                    <button 
                      onClick={() => setActiveImage(prev => (prev === property.images.length - 1 ? 0 : prev + 1))}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all hover:bg-primary"
                    >
                      <ChevronRight size={24} />
                    </button>
                  </>
                )}
              </div>

              {/* Thumbnails */}
              {property.images && (
                <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
                  {property.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImage(idx)}
                      className={`relative flex-shrink-0 w-24 h-24 rounded-xl overflow-hidden border-2 transition-all ${
                        activeImage === idx ? 'border-primary ring-4 ring-primary/20' : 'border-transparent opacity-50 hover:opacity-100'
                      }`}
                    >
                      <img src={img} className="w-full h-full object-cover" alt="thumbnail" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="mb-10">
              <div className="flex flex-col md:row justify-between items-start md:items-center gap-4 mb-6">
                <div className="glass-morphism p-10 mb-8 border-primary">
                  <h1 className="text-4xl font-bold text-white premium-font mb-4">{property.name}</h1>
                  <div className="flex items-center gap-2 text-primary font-bold text-2xl mb-8">
                    <IndianRupee size={24} />
                    {property.price}
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <MapPin size={16} className="text-primary" />
                    {property.location}, Maharashtra
                  </div>
                </div>
                <div className="text-3xl font-bold text-primary">
                  {property.price.split(' - ')[0]}*
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
                <div className="bg-white-5 p-4 rounded-xl border-white-10 flex flex-col items-center text-center">
                  <Layout size={24} className="text-primary mb-2" />
                  <span className="text-xs text-gray-500 uppercase font-bold">Configuration</span>
                  <span className="text-white font-bold">{property.configuration}</span>
                </div>
                <div className="bg-white-5 p-4 rounded-xl border-white-10 flex flex-col items-center text-center">
                  <MapPin size={24} className="text-primary mb-2" />
                  <span className="text-xs text-gray-500 uppercase font-bold">Location</span>
                  <span className="text-white font-bold">{property.location}</span>
                </div>
                <div className="bg-white-5 p-4 rounded-xl border-white-10 flex flex-col items-center text-center">
                  <span className="text-primary font-bold text-xl mb-2">POSS</span>
                  <span className="text-xs text-gray-500 uppercase font-bold">Possession</span>
                  <span className="text-white font-bold">Dec 2026</span>
                </div>
              </div>

              <div className="prose prose-invert max-w-none text-gray-400">
                <h3 className="text-white text-xl font-bold mb-4">Project Overview</h3>
                <p className="mb-6">{property.description}</p>
                <p>{property.layout}</p>
              </div>
            </div>

            <div className="mb-10">
              <h3 className="text-white text-xl font-bold mb-6">Premium Amenities</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {property.amenities.map((amenity, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-white-5 p-4 rounded-xl border-white-10">
                    <CheckCircle2 size={18} className="text-primary" />
                    <span className="text-gray-300 text-sm">{amenity}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* EMI Calculator */}
            <h3 className="text-white text-xl font-bold mb-6 mt-10">Plan Your Finances</h3>
            <EmiCalculator propertyPriceStr={property.price} />
          </div>

          {/* Sidebar Enquiry Form */}
          <div className="lg:w-1/3">
            <div className="sticky top-32 glass-morphism p-8 border-primary">
              <h3 className="text-2xl font-bold text-white mb-2">Request Details</h3>
              <p className="text-gray-400 text-sm mb-8">Fill in your information and our property expert will get back to you.</p>

              <form className="space-y-4 gap-4 flex flex-col">
                <div>
                  <input type="text" placeholder="Full Name" className="w-full bg-white-5 border-white-10 rounded-xl px-4 py-3 text-white outline-none" />
                </div>
                <div>
                  <input type="email" placeholder="Email Address" className="w-full bg-white-5 border-white-10 rounded-xl px-4 py-3 text-white outline-none" />
                </div>
                <div>
                  <input type="tel" placeholder="Phone Number" className="w-full bg-white-5 border-white-10 rounded-xl px-4 py-3 text-white outline-none" />
                </div>
                <div>
                  <select className="w-full bg-dark border-white-10 rounded-xl px-4 py-3 text-white outline-none">
                    <option>Interested in 1 BHK</option>
                    <option>Interested in 2 BHK</option>
                    <option>Interested in 3 BHK</option>
                  </select>
                </div>
                <button className="w-full bg-primary text-black py-4 rounded-xl font-bold transition-all uppercase tracking-widest text-xs mt-4">
                  SEND ENQUIRY
                </button>
              </form>

              <div className="mt-8 pt-8 border-t border-white/10 text-center">
                <p className="text-xs text-gray-500 mb-4">OR CHAT WITH US NOW</p>
                <a 
                  href="https://wa.me/919321669266" 
                  className="flex items-center justify-center gap-2 text-[#25d366] font-bold text-sm hover:underline"
                >
                  <MessageCircle size={18} /> START WHATSAPP CHAT
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
