import React from 'react';
import { Terminal, GitBranch, TerminalSquare, RefreshCw } from 'lucide-react';

export function EngineeringJourney() {
  const milestones = [
    {
      year: "2028 (Expected)",
      title: "B.Tech Computer Science and Engineering",
      description: "SRKR Engineering College, Andhra Pradesh. Current CGPA: 8.2",
      icon: Terminal,
      highlight: true
    },
    {
      year: "2026",
      title: "3rd Place - n8n Automation Workshop",
      description: "\"Let's Automate with n8n\" Workshop by Association of Computer Engineers (ACE).",
      icon: RefreshCw,
      highlight: true
    },
    {
      year: "2025",
      title: "1st Place - Arduino Robotics Workshop",
      description: "Technex'25 (IIT Varanasi) in collaboration with Innovians Technologies.",
      icon: TerminalSquare,
      highlight: true
    },
    {
      year: "2025",
      title: "Special Prize - Vedic Vision 2K25 Hackathon",
      description: "24-Hour hackathon organized by SRKR Event Organizing Cell. Team: Vision Busters.",
      icon: GitBranch,
      highlight: false
    }
  ];

  return (
    <div className="w-full">
      <div className="mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-100 flex items-center gap-3">
          <TerminalSquare className="text-cyan-400 w-8 h-8" />
          Engineering Journey
        </h2>
        <p className="text-slate-400 mt-3 max-w-2xl text-lg">
          Milestones in learning, building, and solving complex problems.
        </p>
      </div>

      <div className="relative border-l border-white/10 ml-4 md:ml-8 space-y-12">
        {milestones.map((milestone, idx) => (
          <div key={idx} className="relative pl-8 md:pl-12 group">
            {/* Timeline Node */}
            <div className={`absolute -left-3 md:-left-4 top-1 w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center transition-colors duration-500
              ${milestone.highlight ? 'bg-navy-900 border-2 border-cyan-500/50 group-hover:border-cyan-400' : 'bg-navy-900 border-2 border-white/20 group-hover:border-white/50'}`}>
              <milestone.icon className={`w-3 h-3 md:w-4 md:h-4 ${milestone.highlight ? 'text-cyan-400' : 'text-slate-400'}`} />
            </div>

            <div className="p-6 rounded-xl bg-navy-800/30 border border-white/5 group-hover:bg-navy-800/80 transition-colors">
              <span className="text-sm font-mono text-cyan-500 mb-2 block">{milestone.year}</span>
              <h3 className="text-xl font-bold text-slate-200 mb-2">{milestone.title}</h3>
              <p className="text-slate-400 leading-relaxed">{milestone.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
