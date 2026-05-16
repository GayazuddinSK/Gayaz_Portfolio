import React from 'react';
import { GlassCard } from '../ui/GlassCard';
import { Cpu, Zap, Network, Database } from 'lucide-react';

export function AutomationLab() {
  const workflows = [
    {
      title: "AI Lead Scoring & Urgency Detection",
      icon: Cpu,
      description: "Conditional n8n workflow logic to perform AI-powered lead scoring and urgency detection via OpenRouter API.",
      status: "Active"
    },
    {
      title: "Multi-Service Orchestration",
      icon: Network,
      description: "End-to-end OAuth authentication flows for Gmail and Google Sheets APIs, handling structured API response parsing.",
      status: "Deployed"
    },
    {
      title: "Urgent Lead Alert System",
      icon: Zap,
      description: "Conditional branching to escalate high-priority inquiries with dedicated notification flows, demonstrating production automation logic.",
      status: "Production"
    }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-12">
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-indigo-400 inline-flex items-center gap-3">
          <Zap className="text-indigo-400 w-8 h-8" />
          Automation Lab
        </h2>
        <p className="text-slate-400 mt-2 max-w-2xl">
          Where manual processes become intelligent, self-sustaining workflows.
        </p>
      </div>

      <div className="space-y-6">
        {workflows.map((flow, idx) => (
          <GlassCard key={idx} delay={idx * 0.15} className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="p-4 rounded-full bg-indigo-900/30 border border-indigo-500/20 text-indigo-400">
              <flow.icon className="w-8 h-8" />
            </div>
            
            <div className="flex-grow">
              <div className="flex items-center gap-3 mb-2">
                <h3 className="text-xl font-bold text-slate-200">{flow.title}</h3>
                <span className="px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider bg-green-950/50 text-green-400 border border-green-500/30">
                  {flow.status}
                </span>
              </div>
              <p className="text-slate-400 text-sm md:text-base">{flow.description}</p>
            </div>
            
            <div className="hidden md:flex items-center gap-2 opacity-50">
              <div className="w-16 h-[1px] bg-cyan-500" />
              <div className="w-2 h-2 rounded-full bg-cyan-400 glow-cyan" />
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  );
}
