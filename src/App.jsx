import React, { useState } from 'react';
import { HeroOrbital } from './components/layout/HeroOrbital';
import { FeaturedProjects } from './components/sections/FeaturedProjects';
import { AutomationLab } from './components/sections/AutomationLab';
import { EngineeringJourney } from './components/sections/EngineeringJourney';
import { TechEcosystem } from './components/sections/TechEcosystem';
import { ContactPortal } from './components/sections/ContactPortal';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState(null);

  const handleOrbitalClick = (sectionId) => {
    if (sectionId === 'projects') {
      setActiveSection('projects');
    } else {
      setActiveSection(null);
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 50);
    }
  };

  const FadeIn = ({ children }) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-navy-900 text-slate-200 selection:bg-cyan-500/30 font-sans overflow-x-hidden">
      <AnimatePresence mode="wait">
        {activeSection === 'projects' ? (
          <motion.div
            key="isolated-projects"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative min-h-screen pt-24 pb-12 z-20"
          >
             {/* Back Button */}
             <div className="fixed top-0 left-0 w-full p-4 md:p-8 z-50 flex items-center">
              <button
                onClick={() => setActiveSection(null)}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-navy-800/40 backdrop-blur-md border border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)] text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 transition-all group"
              >
                <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" />
                <span className="text-sm font-medium">Return to Orbit</span>
              </button>
            </div>
            
            <div className="max-w-7xl mx-auto px-4 md:px-8">
              <FeaturedProjects />
            </div>
          </motion.div>
        ) : (
          <motion.div key="main-scrollable">
            <HeroOrbital activeSection={activeSection} onSectionChange={handleOrbitalClick} />
            
            <main className="relative z-20 bg-navy-900 border-t border-white/5">
              <section id="automation" className="py-24 border-b border-white/5 bg-navy-800/30">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                  <FadeIn>
                    <AutomationLab />
                  </FadeIn>
                </div>
              </section>

              <section id="ecosystem" className="py-24 border-b border-white/5">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                  <FadeIn>
                    <TechEcosystem />
                  </FadeIn>
                </div>
              </section>

              <section id="journey" className="py-24 border-b border-white/5 bg-navy-800/30">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                  <FadeIn>
                    <EngineeringJourney />
                  </FadeIn>
                </div>
              </section>

              <section id="about" className="py-24 border-b border-white/5">
                <div className="max-w-4xl mx-auto px-4 py-12 text-center">
                  <FadeIn>
                    <h2 className="text-3xl font-bold text-slate-100 mb-6">About Me</h2>
                    <p className="text-slate-400 max-w-3xl mx-auto text-lg leading-relaxed mb-8">
                      I am a motivated Computer Science Engineering student (B.Tech CSE at SRKR Engineering College, Expected 2028) with hands-on experience in web development, workflow automation, and AI-powered integrations. 
                    </p>
                    <p className="text-slate-400 max-w-3xl mx-auto text-lg leading-relaxed mb-8">
                      Proficient in building real-world automation pipelines using n8n, REST APIs, and the Gemini API. I am passionate about solving practical problems through software, contributing to startup environments, and continuously learning by implementing. 
                    </p>
                    <p className="text-cyan-400 max-w-3xl mx-auto text-sm tracking-widest uppercase font-bold mb-8">
                      Actively seeking internship opportunities in software engineering, automation, or full-stack web development.
                    </p>
                    <div className="flex justify-center items-center gap-2 text-slate-300">
                      <span>Let's connect on Instagram:</span>
                      <a 
                        href="https://instagram.com/nameisgayaz" 
                        target="_blank" 
                        rel="noreferrer" 
                        className="text-indigo-400 font-bold hover:text-cyan-400 transition-all shadow-[0_0_20px_rgba(0,240,255,0.4)]"
                      >
                        @nameisgayaz
                      </a>
                    </div>
                  </FadeIn>
                </div>
              </section>

              <section id="contact" className="py-24 bg-navy-800/30">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                  <FadeIn>
                    <ContactPortal />
                  </FadeIn>
                </div>
              </section>
            </main>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
