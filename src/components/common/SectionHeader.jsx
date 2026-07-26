import React from 'react';
import { motion } from 'framer-motion';

export const SectionHeader = ({ title, centered = true }) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : 'text-left'}`}>
      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-5xl font-black tracking-tight text-white mb-3"
      >
        {title}
      </motion.h2>

      <div className={`flex ${centered ? 'justify-center' : 'justify-start'}`}>
        <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 via-sky-400 to-indigo-600 rounded-full" />
      </div>
    </div>
  );
};
