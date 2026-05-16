import React, { useState } from 'react';
import { GlassCard } from '../ui/GlassCard';
import { ExternalLink, Workflow, ArrowRight, Play, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

export function FeaturedProjects() {
  const [activeVideo, setActiveVideo] = useState(null);
  const [showMiniProjects, setShowMiniProjects] = useState(false);

  const projects = [
    {
      title: "LeadForge AI",
      description: "Full-stack AI lead qualification system integrating a self-hosted n8n automation backend via Docker and ngrok webhooks to process, score, and route incoming business inquiries in real time.",
      link: "https://leadforge-aknvnpdua-gayaz-s-projects.vercel.app/",
      tech: ["React", "Tailwind CSS", "n8n", "Docker", "OpenRouter AI", "Gmail API", "Sheets API", "ngrok"],
      metrics: ["AI Scoring", "Automated CRM Sync"],
      image: "/leadforge-cover.png", // User needs to add this to public/
      video: "/leadforge-demo.mp4", // User needs to add this to public/
      isMiniProjects: false
    },
    {
      title: "Interactive UI Mini-Projects",
      description: "Developed multiple mini-projects focused on form validation with real-time user feedback, DOM manipulation, event-driven UI components, and clean responsive CSS layouts.",
      link: "#",
      tech: ["HTML", "CSS", "JavaScript"],
      metrics: ["DOM Manipulation", "Responsive Design"],
      image: "/webdev.png", // Dashboard image
      isMiniProjects: true
    }
  ];

  const miniProjectsList = [
    {
      name: "College Wallah Clone",
      description: "A YouTube video inspired clone demonstrating layout structuring, responsive CSS, and basic DOM manipulation.",
      link: "https://projectcwclone.netlify.app/",
      tech: ["HTML", "CSS"]
    }
    // More mini-projects can be added here
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-12">
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-indigo-400 inline-flex items-center gap-3">
          <Workflow className="text-cyan-400 w-8 h-8" />
          Project Directory
        </h2>
        <p className="text-slate-400 mt-2 max-w-2xl">
          Systems engineered for scale, automation, and intelligent operations.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((project, idx) => (
          <GlassCard key={idx} delay={idx * 0.2} className="flex flex-col h-full group">
            <div 
              className={`w-full h-48 rounded-xl overflow-hidden relative mb-6 ${project.video || project.isMiniProjects ? 'cursor-pointer' : ''}`}
              onClick={() => {
                if (project.video) setActiveVideo(project.video);
                if (project.isMiniProjects) setShowMiniProjects(true);
              }}
            >
              <div className="absolute inset-0 bg-navy-900/40 group-hover:bg-transparent transition-colors duration-500 z-10" />
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              {project.video && (
                <div className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 rounded-full bg-cyan-500/80 backdrop-blur-sm flex items-center justify-center shadow-[0_0_15px_rgba(0,240,255,0.5)] transform scale-90 group-hover:scale-100 transition-all">
                    <Play className="w-5 h-5 text-navy-900 ml-1" />
                  </div>
                </div>
              )}
            </div>
            
            <h3 className="text-2xl font-bold text-slate-100 mb-2">{project.title}</h3>
            <p className="text-slate-400 mb-6 flex-grow">{project.description}</p>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((t, i) => (
                <span key={i} className="px-3 py-1 rounded-full text-xs font-medium bg-cyan-950/50 text-cyan-300 border border-cyan-500/20">
                  {t}
                </span>
              ))}
            </div>

            <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
              <div className="flex gap-4">
                {project.isMiniProjects ? (
                  <button 
                    onClick={() => setShowMiniProjects(true)}
                    className="text-slate-300 hover:text-cyan-400 transition-colors flex items-center gap-1 text-sm font-medium"
                  >
                    <ExternalLink className="w-4 h-4" /> View Directory
                  </button>
                ) : (
                  <a href={project.link} target="_blank" rel="noreferrer" className="text-slate-300 hover:text-cyan-400 transition-colors flex items-center gap-1 text-sm font-medium">
                    <ExternalLink className="w-4 h-4" /> Live System
                  </a>
                )}
              </div>
              <ArrowRight className="w-5 h-5 text-slate-500 group-hover:text-cyan-400 transition-colors transform group-hover:translate-x-1" />
            </div>
          </GlassCard>
        ))}
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-navy-900/90 backdrop-blur-md p-4"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(0,240,255,0.1)] border border-white/10"
            >
              <button 
                onClick={() => setActiveVideo(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-cyan-500 hover:text-navy-900 transition-colors backdrop-blur-md"
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
            className="fixed inset-0 z-[100] flex items-center justify-center bg-navy-900/95 backdrop-blur-md p-4"
          >
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              className="relative w-full max-w-3xl max-h-[80vh] overflow-y-auto glass-panel rounded-2xl border border-cyan-500/20 shadow-[0_0_40px_rgba(0,240,255,0.05)] p-8"
            >
              <button 
                onClick={() => setShowMiniProjects(false)}
                className="absolute top-6 right-6 z-10 w-10 h-10 rounded-full bg-white/5 text-slate-300 flex items-center justify-center hover:bg-cyan-500/20 hover:text-cyan-400 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              
              <h3 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-indigo-400 mb-2">
                Interactive UI Mini-Projects
              </h3>
              <p className="text-slate-400 mb-8">Directory of standalone frontend components and clones.</p>

              <div className="space-y-4">
                {miniProjectsList.map((mini, i) => (
                  <div key={i} className="group relative p-6 rounded-xl border border-white/5 bg-navy-800/30 hover:bg-navy-800/50 hover:border-cyan-500/30 transition-all">
                    <div className="flex justify-between items-start gap-4">
                      <div>
                        <h4 className="text-xl font-bold text-slate-200 mb-2 group-hover:text-cyan-400 transition-colors">{mini.name}</h4>
                        <p className="text-sm text-slate-400 mb-4">{mini.description}</p>
                        <div className="flex gap-2">
                          {mini.tech.map((t, idx) => (
                            <span key={idx} className="px-2 py-1 rounded-md text-[10px] font-medium bg-indigo-950/50 text-indigo-300 border border-indigo-500/20">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                      <a 
                        href={mini.link} 
                        target="_blank" 
                        rel="noreferrer"
                        className="flex-shrink-0 p-3 rounded-lg bg-cyan-500/10 text-cyan-400 hover:bg-cyan-500 hover:text-navy-900 transition-colors"
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
