import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

export function OrbitNode({ icon: Icon, label, onClick, active }) {
  return (
    <motion.button
      className={cn(
        "absolute flex flex-col items-center justify-center gap-2 group z-10",
        "w-16 h-16 sm:w-20 sm:h-20 rounded-full glass-panel transition-all duration-300",
        active ? "glow-cyan border-cyan-400/50" : "hover:glow-indigo hover:border-indigo-400/50",
        "focus:outline-none"
      )}
      style={{ x: "-50%", y: "-50%" }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1, x: "-50%", y: "-50%" }}
      whileTap={{ scale: 0.95, x: "-50%", y: "-50%" }}
      onClick={onClick}
    >
      <Icon className={cn(
        "w-6 h-6 sm:w-8 sm:h-8 transition-colors duration-300",
        active ? "text-cyan-400" : "text-slate-300 group-hover:text-indigo-300"
      )} />
      <span className="absolute -bottom-8 whitespace-nowrap text-xs font-medium text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {label}
      </span>
    </motion.button>
  );
}
