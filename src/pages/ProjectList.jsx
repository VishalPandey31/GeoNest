import React, { useState } from 'react';
import { properties } from '../data/properties';
import PropertyCard from '../components/PropertyCard';
import { Search, Filter, MapPin, IndianRupee, ChevronDown } from 'lucide-react';

const ProjectList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [locationFilter, setLocationFilter] = useState('All');
  const [priceFilter, setPriceFilter] = useState(300); // in Lakhs
  const [bhkFilter, setBhkFilter] = useState('All');

  const locations = ['All', ...new Set(properties.map(p => p.location))];

  const filteredProperties = properties.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLocation = locationFilter === 'All' || p.location === locationFilter;
    
    // Price logic: extract min price from "₹30 Lakhs - ₹60 Lakhs"
    const minPrice = parseInt(p.price.match(/\d+/)[0]);
    const matchesPrice = minPrice <= priceFilter;

    // BHK logic
    const matchesBhk = bhkFilter === 'All' || p.configuration.includes(bhkFilter);

    return matchesSearch && matchesLocation && matchesPrice && matchesBhk;
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
          <div className="flex flex-col lg:flex-row items-center gap-6 w-full">
            {/* Price Filter */}
            <div className="flex-grow w-full lg:w-1/3">
              <div className="flex justify-between text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">
                <span>Max Price</span>
                <span className="text-primary">Under ₹{priceFilter} Lakhs</span>
              </div>
              <input 
                type="range" 
                min="30" 
                max="300" 
                step="10"
                value={priceFilter}
                onChange={(e) => setPriceFilter(parseInt(e.target.value))}
                className="w-full accent-primary h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer"
              />
            </div>

            {/* BHK Filter */}
            <div className="w-full lg:w-1/4">
              <select
                value={bhkFilter}
                onChange={(e) => setBhkFilter(e.target.value)}
                className="w-full bg-white-5 border border-white-10 rounded-xl py-3 px-4 text-white outline-none appearance-none font-bold text-xs uppercase"
              >
                <option value="All">All Configurations</option>
                <option value="1">1 BHK Only</option>
                <option value="2">2 BHK Only</option>
                <option value="3">3 BHK Only</option>
              </select>
            </div>

            {/* Location Filter */}
            <div className="w-full lg:w-1/4 relative">
              <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-primary" size={18} />
              <select
                value={locationFilter}
                onChange={(e) => setLocationFilter(e.target.value)}
                className="w-full bg-white-5 border border-white-10 rounded-xl py-3 pl-12 pr-10 text-white outline-none appearance-none font-bold text-xs uppercase"
              >
                {locations.map(loc => (
                  <option key={loc} value={loc} className="bg-[#0f0f0f]">{loc.toUpperCase()}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" size={14} />
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
