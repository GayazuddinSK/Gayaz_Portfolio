import React, { useState } from 'react';
import { GlassCard } from '../ui/GlassCard';
import { Mail, Send, Terminal } from 'lucide-react';
import { motion } from 'framer-motion';

export function ContactPortal() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate network request
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <div className="w-full max-w-2xl mx-auto px-4 py-12">
      <div className="mb-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-indigo-400 inline-flex items-center gap-3">
          <Mail className="text-cyan-400 w-8 h-8" />
          Initialize Contact
        </h2>
        <p className="text-slate-400 mt-2">
          Open a direct channel for system architecture consulting or collaboration.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-6 text-sm">
          <a href="mailto:shaikgayaz508@gmail.com" className="px-4 py-2 rounded-full glass-panel border border-cyan-500/20 text-cyan-400 hover:glow-cyan transition-all">shaikgayaz508@gmail.com</a>
          <span className="px-4 py-2 rounded-full glass-panel border border-white/10 text-slate-300">+91 8179353134</span>
          <a href="https://www.linkedin.com/in/gayazuddin-shaik-450246306/" className="px-4 py-2 rounded-full glass-panel border border-indigo-500/20 text-indigo-400 hover:glow-indigo transition-all">LinkedIn</a>
          <a href="https://github.com/GayazuddinSK" className="px-4 py-2 rounded-full glass-panel border border-indigo-500/20 text-indigo-400 hover:glow-indigo transition-all">GitHub</a>
        </div>
      </div>

      <GlassCard className="relative overflow-hidden">
        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center py-12 text-center"
          >
            <div className="w-16 h-16 rounded-full bg-cyan-900/50 border border-cyan-400 flex items-center justify-center mb-6 glow-cyan">
              <Terminal className="text-cyan-400 w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-slate-100 mb-2">Transmission Successful</h3>
            <p className="text-slate-400">Your signal has been received. Expect a response shortly.</p>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-8 px-6 py-2 rounded-lg bg-navy-900 border border-white/10 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 transition-colors"
            >
              Send Another
            </button>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-xs font-mono text-cyan-500 uppercase tracking-wider">Enter your Name</label>
              <input
                required
                type="text"
                placeholder="Name or Organization"
                className="w-full bg-navy-900/50 border border-white/10 rounded-lg px-4 py-3 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-mono text-cyan-500 uppercase tracking-wider">Return Address</label>
              <input
                required
                type="email"
                placeholder="Email Address"
                className="w-full bg-navy-900/50 border border-white/10 rounded-lg px-4 py-3 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-mono text-cyan-500 uppercase tracking-wider">Payload</label>
              <textarea
                required
                rows={4}
                placeholder="Project details or inquiry..."
                className="w-full bg-navy-900/50 border border-white/10 rounded-lg px-4 py-3 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 text-white rounded-lg px-6 py-3 font-semibold shadow-lg transition-all transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <span className="animate-pulse">Transmitting...</span>
              ) : (
                <>
                  <span>Send Query</span>
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        )}
      </GlassCard>
    </div>
  );
}
