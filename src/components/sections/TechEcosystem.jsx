import React from 'react';
import { Cpu } from 'lucide-react';

export function TechEcosystem() {
  const ecosystem = [
    { category: "Web Architecture", tools: ["React", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"] },
    { category: "System Automation", tools: ["n8n", "RESTful APIs", "Gemini API", "OAuth Flows", "Webhooks"] },
    { category: "Core Engineering", tools: ["JavaScript", "Python", "C", "Data Structures"] },
    { category: "DevOps & Tooling", tools: ["Git", "Docker", "Postman", "ngrok", "VS Code"] },
  ];

  return (
    <div className="w-full">
      <div className="mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-100 flex items-center gap-3">
          <Cpu className="text-cyan-400 w-8 h-8" />
          Technology Ecosystem
        </h2>
        <p className="text-slate-400 mt-3 max-w-2xl text-lg">
          The interconnected stack of languages, frameworks, and infrastructure tools I use to build scalable systems.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
        {ecosystem.map((cluster, idx) => (
          <div key={idx} className="relative group">
            {/* Minimalist node design instead of glowing card */}
            <div className="pl-6 border-l-2 border-white/10 group-hover:border-cyan-500/50 transition-colors duration-500 h-full">
              <div className="absolute left-[-5px] top-2 w-2 h-2 rounded-full bg-navy-800 border-2 border-white/20 group-hover:border-cyan-400 transition-colors duration-500" />
              
              <h3 className="text-xl font-bold text-slate-200 mb-6 flex items-center gap-2">
                {cluster.category}
              </h3>

              <div className="flex flex-wrap gap-3">
                {cluster.tools.map((tool, i) => (
                  <div
                    key={i}
                    className="px-4 py-2 rounded-md bg-navy-800/50 border border-white/5 text-sm text-slate-300 font-mono transition-all duration-300 group-hover:bg-navy-800 hover:!border-cyan-500/30 hover:!text-cyan-300 cursor-default"
                  >
                    {tool}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
        
        {/* Subtle SVG Connection lines in background */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20 hidden md:block" style={{ zIndex: -1 }}>
          <path d="M 50% 0 L 50% 100%" stroke="currentColor" className="text-cyan-500" strokeWidth="1" strokeDasharray="4 4" />
          <path d="M 0 50% L 100% 50%" stroke="currentColor" className="text-cyan-500" strokeWidth="1" strokeDasharray="4 4" />
        </svg>
      </div>
    </div>
  );
}
