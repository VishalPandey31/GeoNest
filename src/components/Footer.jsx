import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Landmark } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-dark pt-16 pb-8 border-t">
      <div className="container grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-2">
            <Landmark className="text-primary" size={36} />
            <span className="text-2xl font-bold premium-font text-white tracking-tight">
              SMART <span className="text-primary">PROPERTY</span>
            </span>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            Your trusted partner in finding the perfect home in Dombivli, Kalyan, and Thakurli. We bring you the best projects with transparent pricing and premium quality.
          </p>
          <div className="flex gap-4">
            <a href="#" className="p-2 bg-dark rounded-full transition-all">
              <Facebook size={18} />
            </a>
            <a href="#" className="p-2 bg-dark rounded-full transition-all">
              <Twitter size={18} />
            </a>
            <a href="#" className="p-2 bg-dark rounded-full transition-all">
              <Instagram size={18} />
            </a>
            <a href="#" className="p-2 bg-dark rounded-full transition-all">
              <Linkedin size={18} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-6">
          <h4 className="text-white text-lg font-bold">Quick Links</h4>
          <div className="flex flex-col gap-3">
            <a href="/" className="text-gray-400 hover:text-primary text-sm tracking-wide">HOME</a>
            <a href="/projects" className="text-gray-400 hover:text-primary text-sm tracking-wide">PROJECTS</a>
            <a href="/locations" className="text-gray-400 hover:text-primary text-sm tracking-wide">LOCATIONS</a>
            <a href="/about" className="text-gray-400 hover:text-primary text-sm tracking-wide">ABOUT US</a>
            <a href="/contact" className="text-gray-400 hover:text-primary text-sm tracking-wide">CONTACT</a>
          </div>
        </div>

        {/* Top Locations */}
        <div className="flex flex-col gap-6">
          <h4 className="text-white text-lg font-bold">Top Locations</h4>
          <div className="flex flex-col gap-3">
            <a href="/projects?location=Dombivli" className="text-gray-400 hover:text-primary text-sm">Projects in Dombivli</a>
            <a href="/projects?location=Kalyan" className="text-gray-400 hover:text-primary text-sm">Projects in Kalyan</a>
            <a href="/projects?location=Thakurli" className="text-gray-400 hover:text-primary text-sm">Projects in Thakurli</a>
            <a href="/projects?location=Palava" className="text-gray-400 hover:text-primary text-sm">Projects in Palava</a>
          </div>
        </div>

        {/* Contact info */}
        <div className="flex flex-col gap-6">
          <h4 className="text-white text-lg font-bold">Get In Touch</h4>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3 text-gray-400 text-sm">
              <Phone size={18} className="text-primary" />
              <span>+91 93216 69266</span>
            </div>
            <div className="flex items-center gap-3 text-gray-400 text-sm">
              <Mail size={18} className="text-primary" />
              <span>enquiry@smartpropertyfinder.com</span>
            </div>
            <div className="flex items-center gap-3 text-gray-400 text-sm">
              <MapPin size={18} className="text-primary" />
              <span>102, Business Hub, Dombivli East, Maharashtra 421201</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-16 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-500 text-xs">
          © 2026 GeoNest. All Rights Reserved. Designed for Excellence.
        </p>
        <div className="flex gap-8 text-gray-500 text-xs uppercase tracking-widest">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
