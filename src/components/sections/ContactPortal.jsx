import React, { useState } from 'react';
import { Mail, Send, Terminal, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { transmitInquiry } from '../../lib/api';

export function ContactPortal() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    organization: '',
    inquiryType: 'collaboration',
    preferredContact: 'email',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await transmitInquiry(formData);
      setSubmitted(true);
    } catch (error) {
      console.error("Submission failed", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full">
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-100 flex items-center gap-3">
          <Mail className="text-cyan-400 w-8 h-8" />
          Intelligent Inquiry System
        </h2>
        <p className="text-slate-400 mt-3 max-w-2xl text-lg">
          Open a direct channel for system architecture consulting, collaboration, or software engineering roles.
        </p>

        <div className="flex flex-wrap gap-4 mt-6 text-sm">
          <a href="mailto:shaikgayaz508@gmail.com" className="px-4 py-2 rounded-md bg-navy-800 border border-white/5 text-slate-300 hover:border-cyan-500/30 hover:text-cyan-400 transition-all font-mono">shaikgayaz508@gmail.com</a>
          <span className="px-4 py-2 rounded-md bg-navy-800 border border-white/5 text-slate-300 font-mono">+91 8179353134</span>
          <a href="https://www.linkedin.com/in/gayazuddin-shaik-450246306/" className="px-4 py-2 rounded-md bg-navy-800 border border-white/5 text-slate-300 hover:border-indigo-500/30 hover:text-indigo-400 transition-all font-mono">LinkedIn</a>
          <a href="https://github.com/GayazuddinSK" className="px-4 py-2 rounded-md bg-navy-800 border border-white/5 text-slate-300 hover:border-indigo-500/30 hover:text-indigo-400 transition-all font-mono">GitHub</a>
        </div>
      </div>

      <div className="relative overflow-hidden bg-navy-800/30 border border-white/10 rounded-xl p-6 md:p-10">
        {submitted ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center justify-center py-16 text-center"
          >
            <div className="w-16 h-16 rounded-full bg-cyan-900/50 border border-cyan-400/50 flex items-center justify-center mb-6">
              <Terminal className="text-cyan-400 w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-slate-100 mb-2">Transmission Successful</h3>
            <p className="text-slate-400 max-w-md mx-auto">Your payload has been routed to the automation backend. An AI acknowledgment will be dispatched shortly.</p>
            <button
              onClick={() => {
                setSubmitted(false);
                setFormData({ ...formData, message: '' }); // keep identity, clear message
              }}
              className="mt-8 px-6 py-2 rounded-md bg-navy-800 border border-white/10 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 transition-colors font-mono text-sm"
            >
              Initialize New Payload
            </button>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Left Column */}
              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Full Name</label>
                  <input
                    required
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    type="text"
                    placeholder="Enter your name"
                    className="w-full bg-navy-900 border border-white/5 rounded-md px-4 py-3 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-cyan-500/50 transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Email Address</label>
                  <input
                    required
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    type="email"
                    placeholder="name@domain.com"
                    className="w-full bg-navy-900 border border-white/5 rounded-md px-4 py-3 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-cyan-500/50 transition-colors"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Organization (Optional)</label>
                  <input
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    type="text"
                    placeholder="Company or Institution"
                    className="w-full bg-navy-900 border border-white/5 rounded-md px-4 py-3 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-cyan-500/50 transition-colors"
                  />
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Inquiry Type</label>
                    <select
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleChange}
                      className="w-full bg-navy-900 border border-white/5 rounded-md px-4 py-3 text-slate-200 focus:outline-none focus:border-cyan-500/50 transition-colors appearance-none"
                    >
                      <option value="collaboration">Project Collaboration</option>
                      <option value="freelance">Freelance/Consulting</option>
                      <option value="employment">Employment/Internship</option>
                      <option value="other">Other Inquiry</option>
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Contact Method</label>
                    <select
                      name="preferredContact"
                      value={formData.preferredContact}
                      onChange={handleChange}
                      className="w-full bg-navy-900 border border-white/5 rounded-md px-4 py-3 text-slate-200 focus:outline-none focus:border-cyan-500/50 transition-colors appearance-none"
                    >
                      <option value="email">Email Address</option>
                      <option value="phone">Phone Call</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2 h-full">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Message Payload</label>
                  <textarea
                    required
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Describe your engineering problem or inquiry..."
                    className="w-full h-[122px] bg-navy-900 border border-white/5 rounded-md px-4 py-3 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-cyan-500/50 transition-colors resize-none"
                  />
                </div>
              </div>
            </div>

            <div className="pt-4 flex justify-end">
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex items-center gap-2 bg-slate-100 hover:bg-white text-navy-900 rounded-md px-8 py-3 font-bold transition-all disabled:opacity-50 disabled:cursor-not-allowed group"
              >
                {isSubmitting ? (
                  <span className="animate-pulse">Transmitting Payload...</span>
                ) : (
                  <>
                    <span>Transmit</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
