import React from 'react';
import { Cpu, Zap, Network, Webhook, ArrowRight } from 'lucide-react';

export function AutomationLab() {
  const workflows = [
    {
      title: "AI Lead Scoring & Urgency Detection",
      icon: Cpu,
      description: "Conditional n8n workflow logic to perform AI-powered lead scoring and urgency detection via OpenRouter API.",
      status: "Active",
      trigger: "Webhook",
      action: "LLM Processing"
    },
    {
      title: "Multi-Service Orchestration",
      icon: Network,
      description: "End-to-end OAuth authentication flows for Gmail and Google Sheets APIs, handling structured API response parsing.",
      status: "Deployed",
      trigger: "Schedule",
      action: "Data Sync"
    },
    {
      title: "Urgent Lead Alert System",
      icon: Zap,
      description: "Conditional branching to escalate high-priority inquiries with dedicated notification flows, demonstrating production automation logic.",
      status: "Production",
      trigger: "Filter Node",
      action: "Email Alert"
    }
  ];

  return (
    <div className="w-full">
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-100 flex items-center gap-3">
          <Webhook className="text-cyan-400 w-8 h-8" />
          Automation & Systems
        </h2>
        <p className="text-slate-400 mt-3 max-w-2xl text-lg">
          Intelligent workflows transforming manual processes into self-sustaining systems.
        </p>
      </div>

      <div className="border border-white/10 rounded-xl overflow-hidden bg-navy-900/50">
        {workflows.map((flow, idx) => (
          <div 
            key={idx} 
            className={`p-6 md:p-8 flex flex-col md:flex-row gap-6 md:items-center ${idx !== workflows.length - 1 ? 'border-b border-white/5' : ''} hover:bg-white/[0.02] transition-colors`}
          >
            <div className="hidden md:flex p-3 rounded-lg bg-navy-800 border border-white/5 text-cyan-400 shrink-0">
              <flow.icon className="w-6 h-6" />
            </div>
            
            <div className="flex-grow">
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <h3 className="text-xl font-bold text-slate-200">{flow.title}</h3>
                <span className="px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-green-500/10 text-green-400 border border-green-500/20">
                  {flow.status}
                </span>
              </div>
              <p className="text-slate-400 text-sm md:text-base mb-4 md:mb-0 max-w-3xl">{flow.description}</p>
            </div>
            
            <div className="flex items-center gap-4 shrink-0 font-mono text-xs text-slate-500 bg-navy-800 p-3 rounded-lg border border-white/5">
              <span>{flow.trigger}</span>
              <ArrowRight className="w-3 h-3 text-cyan-500/50" />
              <span className="text-slate-300">{flow.action}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
