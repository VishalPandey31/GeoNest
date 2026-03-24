import React, { useState, useEffect } from 'react';
import { Search, Menu, X, Landmark } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Locations', path: '/locations' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-dark shadow-lg py-4' : 'bg-transparent py-6'}`}>
      <div className="container flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <Landmark className="text-primary" size={32} />
          <span className="text-2xl font-bold premium-font text-white tracking-tight">
            Geo<span className="text-primary">Nest</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm font-bold transition-all ${location.pathname === link.path ? 'text-primary' : 'text-gray-400'}`}
            >
              {link.name.toUpperCase()}
            </Link>
          ))}
          <Link to="/projects" className="bg-primary text-black px-6 py-2.5 rounded-full font-bold text-sm transition-all flex items-center gap-2">
            <Search size={16} />
            SEARCH NOW
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-dark border-t animate-fade-in">
          <div className="flex flex-col p-6 gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className="text-lg font-medium text-gray-300 hover:text-primary"
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/projects" 
              onClick={() => setIsMenuOpen(false)}
              className="bg-primary text-black text-center px-6 py-3 rounded-md font-bold"
            >
              SEARCH PROPERTIES
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
