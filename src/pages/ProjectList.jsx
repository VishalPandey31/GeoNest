import React, { useState } from 'react';
import { properties } from '../data/properties';
import PropertyCard from '../components/PropertyCard';
import { Search, Filter, MapPin, IndianRupee } from 'lucide-react';

const ProjectList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [locationFilter, setLocationFilter] = useState('All');

  const locations = ['All', 'Dombivli', 'Kalyan', 'Thakurli'];

  const filteredProperties = properties.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLocation = locationFilter === 'All' || p.location === locationFilter;
    return matchesSearch && matchesLocation;
  });

  return (
    <div className="pt-32 pb-20 animate-fade-in">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h4 className="text-primary font-bold tracking-widest uppercase text-sm mb-2">Exclusive Listings</h4>
          <h1 className="text-5xl font-bold text-white premium-font mb-6">Our <span className="text-primary">Premium Projects</span></h1>
          <p className="text-gray-400 max-w-2xl mx-auto">Explore our handpicked collection of luxury residences across major locations.</p>
        </div>

        {/* Filters */}
        <div className="glass-morphism p-6 mb-12 flex flex-col md:flex-row gap-6">
          <div className="flex-grow relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
            <input 
              type="text" 
              placeholder="Search by project name..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white-5 border-white-10 rounded-xl py-3 pl-12 pr-4 text-white outline-none"
            />
          </div>
          <div className="flex items-center gap-4">
            <div className="flex bg-white-5 p-1 rounded-xl border-white-10">
              {locations.map(loc => (
                <button
                  key={loc}
                  onClick={() => setLocationFilter(loc)}
                  className={`px-6 py-2 rounded-xl text-xs font-bold transition-all ${locationFilter === loc ? 'bg-primary text-black' : 'text-gray-400'}`}
                >
                  {loc.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="flex justify-between items-center mb-8">
          <p className="text-gray-400 text-sm">Showing <span className="text-white font-bold">{filteredProperties.length}</span> projects</p>
          <div className="flex items-center gap-2 text-[#c5a059] cursor-pointer hover:underline text-sm font-bold">
            <Filter size={14} /> SORT BY: RELEVANCE
          </div>
        </div>

        {filteredProperties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {filteredProperties.map(property => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white/5 rounded-3xl border border-dashed border-white/10">
            <Search size={48} className="text-gray-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">No projects found</h3>
            <p className="text-gray-400">Try adjusting your filters or search terms.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectList;
