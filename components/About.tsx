import React from 'react';
import { COMPANY_INFO } from '../constants';
import { Target, Eye, Award } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <>
      <section id="about" className="py-24 bg-black overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div className="mb-12 lg:mb-0 relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-nova-600 to-purple-900 rounded-2xl opacity-20 blur-xl"></div>
              <img 
                src="https://picsum.photos/800/600" 
                alt="Team working" 
                className="relative rounded-2xl shadow-2xl border border-white/10 grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
            <div>
              <h2 className="text-base font-semibold text-nova-500 tracking-wide uppercase">About Us</h2>
              <p className="mt-2 text-3xl font-tech font-bold text-white sm:text-4xl mb-6">
                We Build The Digital Future
              </p>
              <p className="text-lg text-slate-300 mb-6">
                At <span className="text-white font-semibold">TechNova</span>, we believe in the power of technology to transform businesses. Founded in the heart of Silicon Valley, we are a team of passionate developers, designers, and strategists dedicated to delivering excellence.
              </p>
              <p className="text-lg text-slate-400 mb-8">
                From startups to Fortune 500 companies, we partner with our clients to create digital experiences that are not only visually stunning but also technically robust and scalable.
              </p>
              
              <div className="flex items-center gap-4">
                 <div className="flex -space-x-4">
                    {[1,2,3,4].map(i => (
                        <div key={i} className="w-12 h-12 rounded-full border-2 border-black bg-zinc-800 overflow-hidden">
                            <img src={`https://picsum.photos/100/100?random=${i}`} alt="Avatar" />
                        </div>
                    ))}
                 </div>
                 <div className="text-sm text-slate-400">
                    <span className="text-white font-bold block">100+</span> Projects Delivered
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="mission" className="py-24 bg-[#050505] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-tech font-bold text-white">Mission & Vision</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-zinc-900/30 p-8 rounded-2xl border border-white/5 shadow-xl hover:-translate-y-2 transition-transform duration-300">
              <div className="w-14 h-14 bg-nova-500/10 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-nova-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-slate-400 text-lg leading-relaxed">
                {COMPANY_INFO.mission}
              </p>
            </div>

            <div className="bg-zinc-900/30 p-8 rounded-2xl border border-white/5 shadow-xl hover:-translate-y-2 transition-transform duration-300">
              <div className="w-14 h-14 bg-purple-500/10 rounded-xl flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-slate-400 text-lg leading-relaxed">
                {COMPANY_INFO.vision}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};