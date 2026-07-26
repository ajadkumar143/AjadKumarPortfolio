import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Terminal } from 'lucide-react';

const statusPhrases = [
  "Initializing .NET Core 8 Engine...",
  "Loading React 19 Micro-Frontends...",
  "Configuring SQL Query Optimizations...",
  "Spinning up WebGL Aurora Waves...",
  "Ready to Launch Enterprise Experience..."
];

export const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    // Progress counter timer
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsFinished(true);
            setTimeout(onComplete, 800);
          }, 300);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [onComplete]);

  useEffect(() => {
    // Cycle status phrases
    const phraseInterval = setInterval(() => {
      setPhraseIndex((prev) => (prev + 1) % statusPhrases.length);
    }, 500);

    return () => clearInterval(phraseInterval);
  }, []);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          key="loading-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -50, scale: 0.98 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#050816] text-white select-none overflow-hidden"
        >
          {/* Animated Background Glow */}
          <div className="absolute w-[500px] h-[500px] bg-gradient-to-r from-blue-600/20 via-cyan-500/20 to-purple-600/20 rounded-full blur-[120px] animate-pulse pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center max-w-sm w-full px-6">
            {/* Glowing Logo Container */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative mb-8"
            >
              <div className="w-24 h-24 rounded-2xl bg-gradient-to-tr from-blue-600 via-cyan-400 to-purple-600 p-[2px] shadow-[0_0_50px_rgba(6,182,212,0.5)]">
                <div className="w-full h-full bg-[#050816] rounded-[14px] flex items-center justify-center">
                  <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-300 tracking-wider">
                    AK
                  </span>
                </div>
              </div>

              {/* Pulsing Ring */}
              <motion.div
                animate={{ scale: [1, 1.25, 1], opacity: [0.6, 0, 0.6] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 rounded-2xl border-2 border-cyan-400/40 pointer-events-none"
              />
            </motion.div>

            {/* Developer Title */}
            <h2 className="text-xl font-bold tracking-tight text-slate-100 mb-1">
              Ajad Kumar
            </h2>
            <p className="text-xs uppercase tracking-widest font-mono text-cyan-400 mb-8">
              Full Stack .NET Architect
            </p>

            {/* Progress Bar Container */}
            <div className="w-full bg-slate-900/90 border border-white/10 rounded-full h-3 p-[2px] overflow-hidden shadow-inner mb-4">
              <motion.div
                className="h-full bg-gradient-to-r from-blue-600 via-cyan-400 to-purple-500 rounded-full shadow-[0_0_15px_rgba(6,182,212,0.8)]"
                style={{ width: `${progress}%` }}
                transition={{ ease: 'easeOut' }}
              />
            </div>

            {/* Percentage & Dynamic Phrase */}
            <div className="w-full flex items-center justify-between text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5 text-cyan-400 font-semibold truncate max-w-[220px]">
                <Terminal size={14} className="animate-pulse" />
                {statusPhrases[phraseIndex]}
              </span>
              <span className="font-extrabold text-white text-sm">
                {progress}%
              </span>
            </div>
          </div>

          {/* Footer Subtext */}
          <div className="absolute bottom-8 flex items-center gap-2 text-slate-500 text-[11px] font-mono tracking-widest uppercase">
            <Code2 size={14} className="text-cyan-500" />
            <span>Luxury Portfolio Experience 2026</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
