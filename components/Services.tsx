import React from 'react';
import { SERVICES } from '../constants';

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold text-nova-400 tracking-wide uppercase">What We Do</h2>
          <p className="mt-2 text-3xl leading-8 font-tech font-bold tracking-tight text-white sm:text-4xl">
            Our Services
          </p>
          <p className="mt-4 max-w-2xl text-xl text-slate-400 mx-auto">
            Comprehensive digital solutions tailored to elevate your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service) => (
            <div 
              key={service.id}
              className="group relative p-8 bg-slate-950/50 border border-white/5 rounded-2xl hover:bg-slate-800/50 transition-all duration-300 hover:border-nova-500/30 overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <service.icon size={120} className="text-white" />
              </div>
              
              <div className="relative z-10">
                <div className="h-12 w-12 bg-nova-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-nova-500/20 transition-colors">
                  <service.icon className="h-6 w-6 text-nova-400" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-nova-300 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-slate-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
              
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-nova-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
