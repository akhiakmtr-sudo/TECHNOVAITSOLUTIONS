import React from 'react';
import { COMPANY_INFO } from '../constants';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-[#050505] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          
          <div>
            <h2 className="text-base font-semibold text-nova-500 tracking-wide uppercase">Get In Touch</h2>
            <h3 className="mt-2 text-4xl font-tech font-bold text-white mb-8">Let's start a conversation</h3>
            <p className="text-slate-400 text-lg mb-12">
              Ready to start your next project with us? Give us a call or send us an email and we will get back to you as soon as possible.
            </p>

            <div className="space-y-8">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-zinc-900 rounded-lg flex items-center justify-center text-nova-400">
                    <MapPin className="w-6 h-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <p className="text-lg font-medium text-white">Our Headquarters</p>
                  <p className="mt-1 text-slate-400">{COMPANY_INFO.address}</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                   <div className="w-12 h-12 bg-zinc-900 rounded-lg flex items-center justify-center text-nova-400">
                    <Phone className="w-6 h-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <p className="text-lg font-medium text-white">Phone Number</p>
                  <p className="mt-1 text-slate-400">{COMPANY_INFO.phone}</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                   <div className="w-12 h-12 bg-zinc-900 rounded-lg flex items-center justify-center text-nova-400">
                    <Mail className="w-6 h-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <p className="text-lg font-medium text-white">Email Address</p>
                  <p className="mt-1 text-slate-400">{COMPANY_INFO.email}</p>
                </div>
              </div>

               <div className="flex items-start">
                <div className="flex-shrink-0">
                   <div className="w-12 h-12 bg-zinc-900 rounded-lg flex items-center justify-center text-nova-400">
                    <Clock className="w-6 h-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <p className="text-lg font-medium text-white">Business Hours</p>
                  <p className="mt-1 text-slate-400">Mon - Fri: 9am - 6pm PST</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative h-96 lg:h-auto w-full bg-zinc-900 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            {/* Simple Map Placeholder */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.628236506086!2d-122.08625152317376!3d37.42200407207639!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fba02425dad8f%3A0x6c296c66619367e0!2sGoogleplex!5e0!3m2!1sen!2sus!4v1695166223403!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{border:0}} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale opacity-60 hover:opacity-80 transition-opacity duration-500"
              title="Google Maps"
            ></iframe>
            
            <div className="absolute bottom-4 right-4 bg-black/90 backdrop-blur px-4 py-2 rounded-lg border border-white/10 text-xs text-white">
                TechNova Campus
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};