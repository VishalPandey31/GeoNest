import React from 'react';
import { MapPin, IndianRupee, Home, MessageCircle, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const PropertyCard = ({ property }) => {
  const handleWhatsApp = () => {
    const msg = encodeURIComponent(
      `Hi Rutuja! \n\nI'm interested in *${property.name}* at ${property.location}.\n\n Details:\n• Configuration: ${property.configuration}\n• Price: ${property.price}\n• Possession: ${property.possession}\n\nPlease share more details.`
    );
    window.open(`https://wa.me/919321669266?text=${msg}`, '_blank');
  };

  return (
    <div className="group bg-[#1a1a1a] rounded-2xl overflow-hidden border border-white/10 hover:border-[#c5a059]/50 transition-all duration-300 shadow-xl hover:shadow-[#c5a059]/10 hover:shadow-2xl flex flex-col">
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={property.image}
          alt={property.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          onError={e => { e.target.src = 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=600'; }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1">
          <span className="bg-[#c5a059] text-black text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full">
            {property.highlight || 'New Launch'}
          </span>
        </div>

        {/* Available units badge */}
        <div className="absolute top-3 right-3 bg-green-500/90 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
          {property.availableUnits} Units Available
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        {/* Title & Location */}
        <div className="mb-3">
          <h3 className="text-white text-lg font-bold leading-tight mb-1" style={{fontFamily:'Outfit,sans-serif'}}>
            {property.name}
          </h3>
          <div className="flex items-center gap-1 text-gray-400 text-xs">
            <MapPin size={12} className="text-[#c5a059]" />
            {property.location}
            {property.possession && (
              <span className="ml-2 text-gray-500">• Possession: {property.possession}</span>
            )}
          </div>
        </div>

        {/* Key Info Grid */}
        <div className="grid grid-cols-2 gap-2 mb-4">
          <div className="bg-white/5 rounded-lg p-2.5">
            <p className="text-[9px] text-gray-500 uppercase tracking-wider mb-0.5">Price</p>
            <p className="text-[#c5a059] text-sm font-bold leading-tight">{property.priceLabel || property.price.split(' - ')[0]}</p>
          </div>
          <div className="bg-white/5 rounded-lg p-2.5">
            <p className="text-[9px] text-gray-500 uppercase tracking-wider mb-0.5">Configuration</p>
            <p className="text-white text-sm font-bold leading-tight">{property.configuration}</p>
          </div>
        </div>

        {/* Amenities preview */}
        {property.amenities && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {property.amenities.slice(0, 3).map((a, i) => (
              <span key={i} className="flex items-center gap-1 text-[10px] text-gray-400 bg-white/5 px-2 py-0.5 rounded-full">
                <CheckCircle size={9} className="text-[#c5a059]" /> {a}
              </span>
            ))}
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex gap-2 mt-auto">
          <Link
            to={`/project/${property.id}`}
            className="flex-1 border border-white/10 hover:border-[#c5a059] text-gray-300 hover:text-[#c5a059] py-2.5 rounded-xl text-xs font-bold text-center transition-all uppercase tracking-wider"
          >
            View Details
          </Link>
          <button
            onClick={handleWhatsApp}
            className="flex-1 bg-[#25d366] hover:bg-[#1da851] text-white py-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all"
          >
            <MessageCircle size={14} />
            WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
