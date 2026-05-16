import React from 'react';
import { GlassCard } from '../ui/GlassCard';
import { Cpu } from 'lucide-react';
import { motion } from 'framer-motion';

export function TechEcosystem() {
  const ecosystem = [
    { category: "Web Development", tools: ["React", "JavaScript", "HTML", "CSS", "Tailwind CSS"] },
    { category: "Automation & APIs", tools: ["n8n", "REST APIs", "Gemini API", "Gmail API", "Google Sheets API"] },
    { category: "Programming", tools: ["JavaScript", "Python (Basic)", "C (Basic)"] },
    { category: "Developer Tools", tools: ["Git", "GitHub", "VS Code", "Postman", "Docker", "ngrok"] },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-12">
      <div className="mb-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-indigo-400 inline-flex items-center gap-3">
          <Cpu className="text-indigo-400 w-8 h-8" />
          Skill Environment
        </h2>
        <p className="text-slate-400 mt-2">
          Skills developed and learning for building websites and automations.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {ecosystem.map((cluster, idx) => (
          <GlassCard key={idx} delay={idx * 0.15} className="relative overflow-hidden group">
            {/* Background connection graphic */}
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-20 transition-opacity duration-500">
              <Cpu className="w-32 h-32" />
            </div>

            <h3 className="text-xl font-bold text-slate-200 mb-6 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-cyan-400 glow-cyan" />
              {cluster.category}
            </h3>

            <div className="flex flex-wrap gap-3">
              {cluster.tools.map((tool, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="px-4 py-2 rounded-lg bg-navy-900 border border-white/5 text-sm text-slate-300 shadow-sm hover:border-indigo-500/50 hover:glow-indigo cursor-default"
                >
                  {tool}
                </motion.div>
              ))}
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  );
}
