import React, { useState } from 'react';
import { HeroOrbital } from './components/layout/HeroOrbital';
import { FeaturedProjects } from './components/sections/FeaturedProjects';
import { AutomationLab } from './components/sections/AutomationLab';
import { EngineeringJourney } from './components/sections/EngineeringJourney';
import { TechEcosystem } from './components/sections/TechEcosystem';
import { ContactPortal } from './components/sections/ContactPortal';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState(null);

  const renderSection = () => {
    switch (activeSection) {
      case 'projects':
        return <FeaturedProjects />;
      case 'automation':
        return <AutomationLab />;
      case 'journey':
        return <EngineeringJourney />;
      case 'ecosystem':
        return <TechEcosystem />;
      case 'contact':
        return <ContactPortal />;
      case 'about':
        return (
          <div className="w-full max-w-4xl mx-auto px-4 py-12 text-center">
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
                className="text-indigo-400 font-bold hover:text-cyan-400 hover:glow-cyan transition-all"
              >
                @nameisgayaz
              </a>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-navy-900 text-slate-200 selection:bg-cyan-500/30 font-sans">
      <AnimatePresence mode="wait">
        {!activeSection ? (
          <motion.div
            key="hero"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0"
          >
            <HeroOrbital activeSection={activeSection} onSectionChange={setActiveSection} />
          </motion.div>
        ) : (
          <motion.div
            key="section"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative min-h-screen pt-24 pb-12 z-20"
          >
            {/* Ambient Background for Sections */}
            <div className="fixed inset-0 bg-navy-900 z-[-1]" />
            <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/20 via-navy-900 to-navy-900 z-[-1]" />

            <div className="fixed top-0 left-0 w-full p-4 md:p-8 z-50 flex items-center">
              <button
                onClick={() => setActiveSection(null)}
                className="flex items-center gap-2 px-4 py-2 rounded-full glass-panel text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 transition-all group"
              >
                <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" />
                <span className="text-sm font-medium">Return to Orbit</span>
              </button>
            </div>

            <main className="w-full">
              {renderSection()}
            </main>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
