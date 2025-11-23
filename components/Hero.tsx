import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-slate-950">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-nova-500/10 rounded-full blur-[100px] animate-pulse-slow"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/10 rounded-full blur-[100px] animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-[20%] right-[20%] w-[20%] h-[20%] bg-cyan-500/5 rounded-full blur-[80px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8">
          <span className="w-2 h-2 bg-nova-400 rounded-full mr-2 animate-pulse"></span>
          <span className="text-sm text-slate-300 font-medium">Innovating the Future</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-tech font-bold text-white mb-6 tracking-tight leading-tight">
          Digital Excellence <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-nova-400 to-purple-500">
            Redefined.
          </span>
        </h1>
        
        <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-400 leading-relaxed">
          TechNova connects ambitious businesses with cutting-edge technology. 
          We build responsive websites, powerful apps, and brands that matter.
        </p>
        
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <a href="#services" className="group px-8 py-4 bg-nova-600 hover:bg-nova-500 text-white font-semibold rounded-lg transition-all duration-300 flex items-center justify-center shadow-lg shadow-nova-500/20">
            Explore Services
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#query" className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold rounded-lg transition-all duration-300 backdrop-blur-sm">
            Start a Project
          </a>
        </div>
      </div>
      
      {/* Decorative Grid */}
      <div className="absolute bottom-0 w-full h-[200px] bg-gradient-to-t from-slate-950 to-transparent z-10 pointer-events-none"></div>
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
    </section>
  );
};
