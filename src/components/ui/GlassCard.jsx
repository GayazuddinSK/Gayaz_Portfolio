import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

export function GlassCard({ children, className, delay = 0, ...props }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      className={cn("glass-panel rounded-2xl p-6 sm:p-8", className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}
