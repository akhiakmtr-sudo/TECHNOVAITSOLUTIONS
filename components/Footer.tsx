import React from 'react';
import { Cpu, Facebook, Twitter, Linkedin, Instagram, ArrowUp } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div>
            <div className="flex items-center gap-2 mb-6">
               <div className="bg-nova-500 p-1.5 rounded-lg">
                <Cpu className="h-5 w-5 text-white" />
               </div>
               <span className="font-tech text-xl font-bold text-white">
                Tech<span className="text-nova-400">Nova</span>
               </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Transforming businesses through innovation. We provide top-tier digital solutions for the modern world.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Facebook className="w-5 h-5"/></a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Twitter className="w-5 h-5"/></a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Linkedin className="w-5 h-5"/></a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Instagram className="w-5 h-5"/></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="text-slate-400 hover:text-nova-400 text-sm transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Services</h4>
            <ul className="space-y-3">
              <li><a href="#services" className="text-slate-400 hover:text-nova-400 text-sm transition-colors">Web Development</a></li>
              <li><a href="#services" className="text-slate-400 hover:text-nova-400 text-sm transition-colors">Mobile Apps</a></li>
              <li><a href="#services" className="text-slate-400 hover:text-nova-400 text-sm transition-colors">Branding Design</a></li>
              <li><a href="#services" className="text-slate-400 hover:text-nova-400 text-sm transition-colors">Digital Marketing</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Newsletter</h4>
            <p className="text-slate-400 text-sm mb-4">Subscribe to stay updated with our latest news and tech trends.</p>
            <form className="flex gap-2">
              <input 
                type="email" 
                placeholder="Enter email" 
                className="bg-slate-900 border border-white/10 text-white px-4 py-2 rounded-lg text-sm w-full focus:outline-none focus:border-nova-500"
              />
              <button className="bg-nova-600 hover:bg-nova-500 text-white px-3 py-2 rounded-lg transition-colors">
                <ArrowUp className="w-4 h-4 rotate-45" />
              </button>
            </form>
          </div>

        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} TechNova IT Solutions. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-slate-500">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
