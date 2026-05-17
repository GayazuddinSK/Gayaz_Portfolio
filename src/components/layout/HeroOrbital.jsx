import React, { useState, useEffect } from 'react';
import { motion, useAnimation, useMotionValue } from 'framer-motion';
import { OrbitNode } from '../ui/OrbitNode';
import { Code, Cpu, Workflow, Terminal, User, Mail } from 'lucide-react';
import { cn } from '../../lib/utils';

const SECTIONS = [
  { id: 'projects', label: 'Featured Projects', icon: Code },
  { id: 'automation', label: 'Automation Lab', icon: Workflow },
  { id: 'ecosystem', label: 'Skill Environment', icon: Cpu },
  { id: 'journey', label: 'Engineering Journey', icon: Terminal },
  { id: 'about', label: 'About Me', icon: User },
  { id: 'contact', label: 'Contact Portal', icon: Mail },
];

export function HeroOrbital({ activeSection, onSectionChange }) {
  const [isHovered, setIsHovered] = useState(false);
  const rotation = useMotionValue(0);
  const controls = useAnimation();

  useEffect(() => {
    let animation;
    if (!isHovered) {
      animation = controls.start({
        rotate: rotation.get() + 360,
        transition: {
          duration: 120, // Calmer, slower physics
          ease: "linear",
          repeat: Infinity,
        }
      });
    } else {
      controls.stop();
    }
    return () => {
      if (animation) controls.stop();
    };
  }, [isHovered, controls, rotation]);

  // Dynamic, perfectly responsive radius calculation
  const getRadius = () => {
    if (typeof window !== 'undefined') {
      const minDimension = Math.min(window.innerWidth, window.innerHeight);
      let maxAllowedRadius = (minDimension / 2) - 100;

      // Cap sizes to maintain aesthetics
      if (maxAllowedRadius > 320) maxAllowedRadius = 320;
      if (maxAllowedRadius < 130) maxAllowedRadius = 130;

      return maxAllowedRadius;
    }
    return 280;
  };

  const [radius, setRadius] = useState(getRadius());

  useEffect(() => {
    const handleResize = () => setRadius(getRadius());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-navy-800/40 via-navy-900 to-navy-900 pointer-events-none" />

      {/* Central Profile Element */}
      <motion.div
        className="absolute z-20 flex items-center justify-center"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, type: "spring", bounce: 0.2 }}
      >
        <div className="relative w-36 h-36 md:w-48 md:h-48 rounded-full p-1 bg-gradient-to-tr from-cyan-500/30 to-indigo-500/30">
          <div className="absolute inset-0 rounded-full border border-cyan-400/20 backdrop-blur-sm" />
          <div className="w-full h-full rounded-full overflow-hidden bg-navy-900 relative shadow-inner z-10 border-4 border-navy-900">
            <img
              src="/profile.jpg"
              alt="Systems Engineer"
              className="w-full h-full object-cover opacity-90 transition-transform duration-700 hover:scale-105"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80";
              }}
            />
          </div>
        </div>
      </motion.div>

      {/* Orbit Rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <div
          className="rounded-full border border-white/5 border-dashed animate-[spin_60s_linear_infinite]"
          style={{ width: radius * 2, height: radius * 2 }}
        />
        <div
          className="absolute rounded-full border border-white/5 opacity-50 animate-[spin_80s_linear_infinite_reverse]"
          style={{ width: radius * 2.5, height: radius * 2.5 }}
        />
      </div>

      {/* Interactive Orbit Nodes */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center z-10"
        animate={controls}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        style={{ rotate: rotation }}
      >
        {SECTIONS.map((section, index) => {
          const angle = (index * 360) / SECTIONS.length;
          return (
            <CounterRotatingNode
              key={section.id}
              parentRotation={rotation}
              angle={angle}
              radius={radius}
              section={section}
              isActive={activeSection === section.id}
              onClick={() => onSectionChange(section.id)}
            />
          );
        })}
      </motion.div>

      {/* Floating Title (Moved to top-left to prevent orbit overlap) */}
      <motion.div
        className="absolute top-6 left-1/2 -translate-x-1/2 md:top-8 md:left-8 md:translate-x-0 z-20 text-center md:text-left glass-panel px-6 py-4 rounded-2xl md:rounded-xl border border-cyan-500/20 shadow-[0_0_15px_rgba(0,240,255,0.05)] w-max max-w-[90vw]"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <h1 className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-indigo-400 leading-tight">
          Gayazuddin Sk
        </h1>
        <p className="text-xs md:text-sm text-slate-400 mt-2 uppercase tracking-widest font-semibold flex items-center gap-2 justify-center md:justify-start">
          <span className="w-2 h-2 rounded-full bg-cyan-400 glow-cyan animate-pulse"></span>
          Automation and Web developer
        </p>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-cyan-500/0 via-cyan-500 to-cyan-500/0" />
      </motion.div>
    </div>
  );
}

// Separate component to handle the counter-rotation of individual nodes
function CounterRotatingNode({ parentRotation, angle, radius, section, isActive, onClick }) {
  const [currentRot, setCurrentRot] = useState(0);

  useEffect(() => {
    return parentRotation.on("change", (v) => {
      // Counter rotate to keep text horizontal
      setCurrentRot(-v);
    });
  }, [parentRotation]);

  // Base position logic
  const radian = (angle * Math.PI) / 180;
  const x = Math.cos(radian) * radius;
  const y = Math.sin(radian) * radius;

  return (
    <div
      className="absolute flex items-center justify-center top-1/2 left-1/2"
      style={{ transform: `translate(${x}px, ${y}px)` }}
    >
      <motion.div style={{ rotate: currentRot }}>
        <OrbitNode
          icon={section.icon}
          label={section.label}
          active={isActive}
          onClick={onClick}
        />
      </motion.div>
    </div>
  );
}
