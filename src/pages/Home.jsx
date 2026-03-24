import React, { useState } from 'react';
import { MapPin, Search, Phone, ChevronDown, Building, Users, Star, Trophy, ArrowRight } from 'lucide-react';
import { properties, locationStats } from '../data/properties';
import PropertyCard from '../components/PropertyCard';

const Home = () => {
  const [selectedLocation, setSelectedLocation] = useState('');
  const [searched, setSearched] = useState(false);

  const locations = [...new Set(properties.map(p => p.location))];

  const handleSearch = () => {
    if (selectedLocation) setSearched(true);
  };

  const filteredProperties = properties.filter(p => p.location === selectedLocation);
  const stats = locationStats[selectedLocation];

  return (
    <div className="min-h-screen bg-[#0f0f0f]">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 pt-20">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=2000"
            alt="bg"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0f0f0f]/80 via-transparent to-[#0f0f0f]" />
        </div>

        <div className="relative z-10 w-full max-w-4xl mx-auto">
          <p className="text-[#c5a059] font-bold tracking-[0.3em] uppercase text-sm mb-4">
            GeoNest
          </p>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight" style={{fontFamily:'Outfit,sans-serif'}}>
            Find Properties <br />
            <span className="text-[#c5a059]">Near Your Station</span>
          </h1>
          <p className="text-gray-400 text-lg mb-12 max-w-xl mx-auto">
            Select a location below to see available properties, pricing, and unit availability — then contact directly on WhatsApp.
          </p>

          {/* Location Search Box */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8 max-w-2xl mx-auto">
            <p className="text-gray-400 text-sm mb-4 font-medium uppercase tracking-widest">Select Your Location</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-grow">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-[#c5a059]" size={20} />
                <select
                  value={selectedLocation}
                  onChange={e => { setSelectedLocation(e.target.value); setSearched(false); }}
                  className="w-full bg-[#1a1a1a] border border-white/10 rounded-xl pl-12 pr-4 py-4 text-white outline-none appearance-none text-lg font-semibold"
                >
                  <option value="">Search properties near you</option>
                  {locations.map(loc => (
                    <option key={loc} value={loc}>{loc}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={18} />
              </div>
              <button
                onClick={handleSearch}
                disabled={!selectedLocation}
                className="bg-[#c5a059] hover:bg-[#a68545] disabled:opacity-50 disabled:cursor-not-allowed text-black font-bold px-8 py-4 rounded-xl flex items-center justify-center gap-2 transition-all text-base whitespace-nowrap"
              >
                <Search size={18} /> Search Properties
              </button>
            </div>

            {/* Quick select buttons */}
            <div className="flex flex-wrap gap-3 mt-5 justify-center">
              {locations.map(loc => (
                <button
                  key={loc}
                  onClick={() => { setSelectedLocation(loc); setSearched(true); }}
                  className={`px-5 py-2 rounded-full text-sm font-bold border transition-all ${
                    selectedLocation === loc
                      ? 'bg-[#c5a059] text-black border-[#c5a059]'
                      : 'border-white/20 text-gray-400 hover:border-[#c5a059] hover:text-[#c5a059]'
                  }`}
                >
                  {loc}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        {!searched && (
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-600 text-xs flex flex-col items-center gap-1 animate-bounce z-10">
            <ChevronDown size={20} />
            <span>Scroll down</span>
          </div>
        )}
      </section>

      {/* Featured Properties Section (MagicBricks/NoBroker style) */}
      <section className="py-16 px-4 max-w-6xl mx-auto" id="properties">
        {selectedLocation && stats ? (
          <div className="bg-[#c5a059]/10 border border-[#c5a059]/30 rounded-2xl p-6 mb-10">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl font-bold text-white" style={{fontFamily:'Outfit,sans-serif'}}>
                  Properties in <span className="text-[#c5a059]">{selectedLocation}</span>
                </h2>
                <p className="text-gray-400 text-sm mt-1">{stats.about}</p>
              </div>
              <div className="flex flex-wrap gap-6 shrink-0">
                <div className="text-center">
                  <p className="text-3xl font-bold text-[#c5a059]">{stats.availableUnits}</p>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">Units Available</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-[#c5a059]">{stats.totalProjects}</p>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">Projects</p>
                </div>
                <div className="text-center">
                  <p className="text-lg font-bold text-[#c5a059]">{stats.priceRange}</p>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">Price Range</p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold text-white" style={{fontFamily:'Outfit,sans-serif'}}>
              Exclusive <span className="text-[#c5a059]">Premium Projects</span>
            </h2>
            <p className="text-gray-400 text-sm mt-2">Explore our handpicked collection across major locations.</p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {(selectedLocation ? filteredProperties : properties).map(property => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>

        {selectedLocation && filteredProperties.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-400 text-lg">No properties found in {selectedLocation}.</p>
          </div>
        )}
      </section>

      {/* Browse by Location overview */}
      <section className="py-16 px-4 max-w-6xl mx-auto border-t border-white/5">
        <h2 className="text-3xl font-bold text-white text-center mb-10" style={{fontFamily:'Outfit,sans-serif'}}>
          Top <span className="text-[#c5a059]">Localities</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Object.entries(locationStats).map(([loc, stat]) => (
            <button
              key={loc}
              onClick={() => {
                setSelectedLocation(loc);
                setSearched(true);
                document.getElementById('properties').scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-white/5 border border-white/10 hover:border-[#c5a059] rounded-2xl p-6 text-left transition-all group hover:bg-[#c5a059]/5"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#c5a059]/10 rounded-full flex items-center justify-center">
                  <MapPin className="text-[#c5a059]" size={20} />
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-[#c5a059] transition-colors" style={{fontFamily:'Outfit,sans-serif'}}>{loc}</h3>
              </div>
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="bg-black/30 rounded-xl p-3 text-center">
                  <p className="text-2xl font-bold text-[#c5a059]">{stat.availableUnits}</p>
                  <p className="text-[10px] text-gray-500 uppercase tracking-wider">Units</p>
                </div>
                <div className="bg-black/30 rounded-xl p-3 text-center">
                  <p className="text-2xl font-bold text-[#c5a059]">{stat.totalProjects}</p>
                  <p className="text-[10px] text-gray-500 uppercase tracking-wider">Projects</p>
                </div>
              </div>
              <p className="text-[#c5a059] text-sm font-bold">{stat.priceRange}</p>
              <p className="text-gray-500 text-xs mt-1">Popular: {stat.popular}</p>
            </button>
          ))}
        </div>
      </section>
      {/* Paradise-Inspired Stats Section */}
      <section className="py-20 bg-[#1a1a1a] border-y border-white/5 mt-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-[#c5a059] font-bold tracking-[0.3em] uppercase text-sm mb-4">
            Developing Quality Since 2010
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-16" style={{fontFamily:'Outfit,sans-serif'}}>
            Pioneers of Global Lifestyle
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-[#c5a059]/10 rounded-full flex items-center justify-center mb-4">
                <Building className="text-[#c5a059]" size={32} />
              </div>
              <h3 className="text-4xl font-bold text-white mb-2">125+</h3>
              <p className="text-gray-400 text-sm">Successful Projects</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-[#c5a059]/10 rounded-full flex items-center justify-center mb-4">
                <Users className="text-[#c5a059]" size={32} />
              </div>
              <h3 className="text-4xl font-bold text-white mb-2">25,000+</h3>
              <p className="text-gray-400 text-sm">Happy Residents</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-[#c5a059]/10 rounded-full flex items-center justify-center mb-4">
                <Star className="text-[#c5a059]" size={32} />
              </div>
              <h3 className="text-4xl font-bold text-white mb-2">2 Cr</h3>
              <p className="text-gray-400 text-sm">Sq.Ft. Under Construction</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-[#c5a059]/10 rounded-full flex items-center justify-center mb-4">
                <Trophy className="text-[#c5a059]" size={32} />
              </div>
              <h3 className="text-4xl font-bold text-white mb-2">14,000</h3>
              <p className="text-gray-400 text-sm">Luxury Residencies</p>
            </div>
          </div>
        </div>
      </section>

      {/* Paradise-Inspired Awards & Accolades */}
      <section className="py-20 bg-[#0f0f0f]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <p className="text-[#c5a059] font-bold tracking-[0.3em] uppercase text-sm mb-2">
                Awards & Recognition
              </p>
              <h2 className="text-4xl font-bold text-white" style={{fontFamily:'Outfit,sans-serif'}}>
                Collection Of Accolades
              </h2>
            </div>
            <button className="text-[#c5a059] font-bold uppercase tracking-widest text-xs flex items-center gap-2 hover:underline mt-4 md:mt-0">
              View All Awards <ArrowRight size={14} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#1a1a1a] p-8 rounded-2xl border border-white/5 hover:border-[#c5a059]/50 transition-colors group cursor-pointer">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#c5a059]/10 rounded-xl flex items-center justify-center shrink-0">
                  <Trophy className="text-[#c5a059]" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#c5a059] transition-colors" style={{fontFamily:'Outfit,sans-serif'}}>
                    Times Real Estate Conclave Award 2024-25
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Honored to be awarded 'Iconic Developer of the Year' at the prestigious Times Real Estate Conclave Awards for our continuous excellence.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-[#1a1a1a] p-8 rounded-2xl border border-white/5 hover:border-[#c5a059]/50 transition-colors group cursor-pointer">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#c5a059]/10 rounded-xl flex items-center justify-center shrink-0">
                  <Star className="text-[#c5a059]" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#c5a059] transition-colors" style={{fontFamily:'Outfit,sans-serif'}}>
                    Best Residential Project - Dombivli
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Awarded the best luxury residential project in Dombivli for our outstanding architectural design and premium lifestyle amenities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
