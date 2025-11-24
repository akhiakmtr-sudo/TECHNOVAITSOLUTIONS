import React, { useState } from 'react';
import { analyzeUserQuery } from '../services/geminiService';
import { LoadingState, QueryResponse } from '../types';
import { Sparkles, Send, Loader2, CheckCircle, AlertCircle } from 'lucide-react';

export const QueryForm: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', query: '' });
  const [loadingState, setLoadingState] = useState<LoadingState>(LoadingState.IDLE);
  const [aiResponse, setAiResponse] = useState<QueryResponse | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.query.trim()) return;

    setLoadingState(LoadingState.LOADING);
    setAiResponse(null);

    try {
      const result = await analyzeUserQuery(formData.query);
      setAiResponse(result);
      setLoadingState(LoadingState.SUCCESS);
    } catch (error) {
      setLoadingState(LoadingState.ERROR);
    }
  };

  const handleFinalSubmit = () => {
    alert("Thank you! Your query has been sent to our team along with the AI analysis.");
    setFormData({ name: '', email: '', query: '' });
    setAiResponse(null);
    setLoadingState(LoadingState.IDLE);
  };

  return (
    <section id="query" className="py-24 bg-black relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-nova-600/5 rounded-full blur-[100px]"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-900/20 border border-purple-500/20 text-purple-300 text-xs font-bold uppercase tracking-wider mb-4">
                <Sparkles className="w-3 h-3" />
                AI Powered
             </div>
             <h2 className="text-3xl font-tech font-bold text-white mb-4">Smart Query Assistant</h2>
             <p className="text-slate-400">
               Not sure which service you need? Describe your project, and our AI will recommend the best solution instantly.
             </p>
          </div>

          <div className="bg-zinc-900/40 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-10 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    id="name"
                    required
                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-nova-500 transition-all"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    id="email"
                    required
                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-nova-500 transition-all"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={e => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="query" className="block text-sm font-medium text-slate-300 mb-2">Project Details</label>
                <textarea 
                  id="query"
                  rows={4}
                  required
                  className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-nova-500 transition-all"
                  placeholder="Describe your idea (e.g., I need a mobile app for food delivery...)"
                  value={formData.query}
                  onChange={e => setFormData({...formData, query: e.target.value})}
                ></textarea>
              </div>

              {loadingState === LoadingState.IDLE && (
                 <button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-nova-600 to-purple-700 hover:from-nova-500 hover:to-purple-600 text-white font-bold py-4 rounded-lg transition-all transform hover:scale-[1.01] shadow-lg flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-5 h-5" />
                  Analyze with AI
                </button>
              )}

              {loadingState === LoadingState.LOADING && (
                <button disabled className="w-full bg-zinc-800 text-slate-400 font-bold py-4 rounded-lg flex items-center justify-center gap-2 cursor-not-allowed">
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Processing...
                </button>
              )}
            </form>
            
            {/* AI Analysis Result */}
            {loadingState === LoadingState.SUCCESS && aiResponse && (
              <div className="mt-8 animate-fade-in-up">
                <div className="bg-black/60 border border-nova-500/30 rounded-xl p-6 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full bg-nova-500"></div>
                  
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <CheckCircle className="text-nova-400 w-5 h-5" />
                    AI Assessment
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-white/10 pb-4">
                      <span className="text-slate-400">Recommended Service:</span>
                      <span className="text-nova-300 font-bold text-lg">{aiResponse.recommendedService}</span>
                    </div>
                    
                    <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-white/10 pb-4">
                      <span className="text-slate-400">Complexity Estimation:</span>
                      <span className={`font-bold px-3 py-1 rounded-full text-sm inline-block w-fit mt-1 md:mt-0 ${
                        aiResponse.estimatedComplexity === 'High' ? 'bg-red-500/10 text-red-400' :
                        aiResponse.estimatedComplexity === 'Medium' ? 'bg-yellow-500/10 text-yellow-400' :
                        'bg-green-500/10 text-green-400'
                      }`}>
                        {aiResponse.estimatedComplexity}
                      </span>
                    </div>
                    
                    <div>
                      <span className="text-slate-400 block mb-2">Analysis:</span>
                      <p className="text-slate-200 bg-white/5 p-4 rounded-lg text-sm leading-relaxed">
                        {aiResponse.analysis}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6">
                    <button 
                      onClick={handleFinalSubmit}
                      className="w-full bg-white text-black hover:bg-slate-200 font-bold py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      Submit Query to Team
                    </button>
                    <button 
                      onClick={() => {
                        setLoadingState(LoadingState.IDLE);
                        setAiResponse(null);
                      }}
                      className="w-full mt-3 text-slate-400 hover:text-white text-sm py-2"
                    >
                      Modify Request
                    </button>
                  </div>
                </div>
              </div>
            )}

            {loadingState === LoadingState.ERROR && (
               <div className="mt-6 p-4 bg-red-900/10 border border-red-500/30 rounded-lg flex items-center gap-3 text-red-200">
                  <AlertCircle className="w-5 h-5" />
                  <div>
                    <p className="font-bold">Analysis Failed</p>
                    <p className="text-sm opacity-80">Our AI service is currently unavailable. Please check your connection or try again later.</p>
                  </div>
                   <button 
                      onClick={() => setLoadingState(LoadingState.IDLE)}
                      className="ml-auto text-sm underline hover:text-white"
                    >
                      Retry
                    </button>
               </div>
            )}

          </div>
        </div>
    </section>
  );
};