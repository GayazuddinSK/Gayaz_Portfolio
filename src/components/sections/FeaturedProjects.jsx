import React, { useState } from 'react';
import { GlassCard } from '../ui/GlassCard';
import { ExternalLink, Workflow, ArrowRight, Play, X, Code2, Layers, Server } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

export function FeaturedProjects() {
  const [activeVideo, setActiveVideo] = useState(null);
  const [showMiniProjects, setShowMiniProjects] = useState(false);

  const miniProjectsList = [
    {
      name: "College Wallah Clone",
      description: "A YouTube video inspired clone demonstrating layout structuring, responsive CSS, and basic DOM manipulation.",
      link: "https://projectcwclone.netlify.app/",
      tech: ["HTML", "CSS"]
    }
  ];

  return (
    <div className="w-full">
      <div className="mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-100 flex items-center gap-3">
          <Workflow className="text-cyan-400 w-8 h-8" />
          Engineering Architecture
        </h2>
        <p className="text-slate-400 mt-3 max-w-2xl text-lg">
          Practical systems engineered for automation, intelligence, and scale.
        </p>
      </div>

      {/* Flagship Project: LeadForge AI */}
      <div className="mb-24">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          {/* Left Column: Context & Tech */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <h3 className="text-3xl font-bold text-slate-100 mb-4">LeadForge AI</h3>
            <p className="text-slate-400 text-lg leading-relaxed mb-6">
              A full-stack AI lead qualification system. It integrates a self-hosted n8n automation backend via Docker and ngrok webhooks to process, score, and route incoming business inquiries in real time.
            </p>

            <div className="space-y-6 mb-8">
              <div>
                <h4 className="text-sm uppercase tracking-widest text-slate-500 font-bold mb-3">Core Problem Solved</h4>
                <p className="text-slate-300">Eliminated manual lead triage by automating CRM synchronization and using LLMs to rank urgency instantly.</p>
              </div>
              
              <div>
                <h4 className="text-sm uppercase tracking-widest text-slate-500 font-bold mb-3">Technology Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {["React", "Tailwind CSS", "n8n", "Docker", "OpenRouter AI", "Gmail API", "Sheets API", "ngrok"].map((t, i) => (
                    <span key={i} className="px-3 py-1 rounded-md text-sm font-medium bg-navy-800 text-slate-300 border border-white/5">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <a 
              href="https://leadforge-aknvnpdua-gayaz-s-projects.vercel.app/" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-cyan-500/10 text-cyan-400 hover:bg-cyan-500 hover:text-navy-900 transition-colors font-medium"
            >
              <ExternalLink className="w-4 h-4" />
              View Live System
            </a>
          </div>

          {/* Right Column: Visuals */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <div 
              className="relative rounded-2xl overflow-hidden border border-white/10 group cursor-pointer aspect-video bg-navy-800"
              onClick={() => setActiveVideo("/leadforge-demo.mp4")}
            >
              <img 
                src="/leadforge-cover.png" 
                alt="LeadForge AI Architecture" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop";
                }}
              />
              <div className="absolute inset-0 bg-navy-900/20 transition-colors group-hover:bg-transparent" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-16 h-16 rounded-full bg-cyan-500/90 flex items-center justify-center text-navy-900 shadow-lg transform scale-90 group-hover:scale-100 transition-all">
                  <Play className="w-6 h-6 ml-1" />
                </div>
              </div>
            </div>
            <div className="mt-4 flex gap-4 text-sm text-slate-500 justify-center font-mono">
              <span className="flex items-center gap-1"><Server className="w-4 h-4" /> Self-Hosted</span>
              <span className="flex items-center gap-1"><Layers className="w-4 h-4" /> Microservices</span>
            </div>
          </div>

        </div>
      </div>

      {/* Mini Projects & Experiments */}
      <div>
        <h3 className="text-2xl font-bold text-slate-200 mb-6 flex items-center gap-2">
          <Code2 className="text-indigo-400 w-6 h-6" />
          Interactive UI Experiments
        </h3>
        <GlassCard 
          className="flex flex-col md:flex-row items-center justify-between gap-6 cursor-pointer hover:border-cyan-500/30 transition-colors group"
          onClick={() => setShowMiniProjects(true)}
        >
          <div>
            <h4 className="text-xl font-bold text-slate-100 mb-2">Frontend Clones & DOM Manipulation</h4>
            <p className="text-slate-400 max-w-2xl">
              Standalone experiments focused on responsive CSS layouts, event-driven UI components, and real-time form validation without frameworks.
            </p>
          </div>
          <div className="flex-shrink-0 flex items-center gap-2 text-cyan-400 font-medium bg-cyan-500/10 px-4 py-2 rounded-lg group-hover:bg-cyan-500 group-hover:text-navy-900 transition-colors">
            View Directory <ArrowRight className="w-4 h-4" />
          </div>
        </GlassCard>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-navy-900/95 backdrop-blur-sm p-4"
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-5xl aspect-video bg-black rounded-xl overflow-hidden border border-white/10 shadow-2xl"
            >
              <button 
                onClick={() => setActiveVideo(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-cyan-500 hover:text-navy-900 transition-colors backdrop-blur-md"
              >
                <X className="w-5 h-5" />
              </button>
              <video 
                src={activeVideo} 
                controls 
                autoPlay 
                className="w-full h-full object-contain"
              >
                Your browser does not support the video tag.
              </video>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mini Projects Directory Modal */}
      <AnimatePresence>
        {showMiniProjects && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-navy-900/95 backdrop-blur-sm p-4"
          >
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto bg-navy-800 rounded-2xl border border-white/10 shadow-2xl p-6 md:p-8"
            >
              <button 
                onClick={() => setShowMiniProjects(false)}
                className="absolute top-6 right-6 z-10 w-10 h-10 rounded-full bg-white/5 text-slate-300 flex items-center justify-center hover:bg-cyan-500/20 hover:text-cyan-400 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              
              <h3 className="text-2xl md:text-3xl font-bold text-slate-100 mb-2">
                UI Experiments
              </h3>
              <p className="text-slate-400 mb-8 pb-6 border-b border-white/5">Directory of standalone frontend components and clones.</p>

              <div className="space-y-4">
                {miniProjectsList.map((mini, i) => (
                  <div key={i} className="group relative p-6 rounded-xl border border-white/5 bg-navy-900/50 hover:bg-navy-900 hover:border-indigo-500/30 transition-all">
                    <div className="flex justify-between items-start gap-4">
                      <div>
                        <h4 className="text-lg font-bold text-slate-200 mb-2">{mini.name}</h4>
                        <p className="text-sm text-slate-400 mb-4">{mini.description}</p>
                        <div className="flex gap-2">
                          {mini.tech.map((t, idx) => (
                            <span key={idx} className="px-2 py-1 rounded bg-white/5 text-slate-300 text-xs font-mono">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                      <a 
                        href={mini.link} 
                        target="_blank" 
                        rel="noreferrer"
                        className="flex-shrink-0 p-3 rounded-lg bg-white/5 text-slate-300 hover:bg-cyan-500 hover:text-navy-900 transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
