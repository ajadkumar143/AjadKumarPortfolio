import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useMousePosition } from '../../hooks/useMousePosition';

export const CustomCursor = () => {
  const { x, y, isHovered } = useMousePosition();

  useEffect(() => {
    // Add custom-cursor-active class to body when on desktop
    if (window.innerWidth >= 1024) {
      document.body.classList.add('custom-cursor-active');
    }
    return () => {
      document.body.classList.remove('custom-cursor-active');
    };
  }, []);

  if (typeof window !== 'undefined' && window.innerWidth < 1024) return null;

  return (
    <>
      {/* Small Precision Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2.5 h-2.5 bg-cyan-400 rounded-full pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: x - 5,
          y: y - 5,
          scale: isHovered ? 2.5 : 1,
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 400, mass: 0.1 }}
      />

      {/* Outer Glowing Magnetic Ring */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 border border-cyan-400/40 rounded-full pointer-events-none z-50 shadow-[0_0_20px_rgba(6,182,212,0.4)]"
        animate={{
          x: x - 20,
          y: y - 20,
          scale: isHovered ? 1.6 : 1,
          borderColor: isHovered ? 'rgba(59, 130, 246, 0.8)' : 'rgba(6, 182, 212, 0.4)',
          backgroundColor: isHovered ? 'rgba(6, 182, 212, 0.1)' : 'transparent',
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 200, mass: 0.2 }}
      />
    </>
  );
};
