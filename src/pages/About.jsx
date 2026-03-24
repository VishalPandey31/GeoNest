import React from 'react';
import { Landmark, Users, Award, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ShieldCheck = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>
);

const About = () => {
  return (
    <div className="pt-32 pb-20 animate-fade-in">
      <div className="container mx-auto px-6">
        {/* Story Section */}
        <div className="flex flex-col md:flex-row gap-16 items-center mb-24">
          <div className="flex-grow md:w-1/2">
            <h4 className="text-primary font-bold tracking-widest uppercase text-sm mb-2">Our Story</h4>
            <h2 className="text-5xl font-bold text-white premium-font mb-6 leading-tight">Bringing <span className="text-primary">Transparency</span> To Real Estate.</h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              Founded in 2010, GeoNest was born out of a desire to simplify the complex journey of finding a home. We noticed that many aspiring homeowners struggled with unclear pricing and unverified listings in the Kalyan-Dombivli region.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed mb-10">
              Today, we are the most trusted property consultants in the area, having helped over 5,000 families find their dream spaces. Our commitment to excellence and transparent communication remains our North Star.
            </p>
            <div className="flex gap-4">
              <Link to="/contact" className="bg-primary text-black px-8 py-4 rounded-xl font-bold transition-all">
                JOIN OUR MISSION
              </Link>
            </div>
          </div>
          <div className="flex-grow md:w-1/2 relative">
            <div className="w-full h-[500px] rounded-xl overflow-hidden border-white-10">
              <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000" alt="Office Building" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-primary p-10 rounded-xl shadow-2xl hidden md:block">
              <span className="text-5xl font-bold text-black block">15+</span>
              <span className="text-black font-bold uppercase tracking-widest text-xs">Years of Excellence</span>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-24">
          {[
            { icon: <ShieldCheck size={32} />, title: 'Integrity', desc: 'No hidden costs, no false promises. Only honest advice.' },
            { icon: <Award size={32} />, title: 'Quality', desc: 'We only partner with developers who share our high standards.' },
            { icon: <Clock size={32} />, title: 'Efficiency', desc: 'Saving your time with curated listings that match your needs.' },
            { icon: <Users size={32} />, title: 'Community', desc: 'We don\'t just sell houses, we build lasting communities.' },
          ].map((item, idx) => (
            <div key={idx} className="glass-morphism p-8 hover:border-primary transition-all group">
              <div className="text-primary mb-4 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};



export default About;
