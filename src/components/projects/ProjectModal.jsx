import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Layers, Cpu, CheckCircle2, AlertTriangle, Lightbulb } from 'lucide-react';
import { GithubIcon } from '../common/SocialIcons';

export const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#050816]/85 backdrop-blur-xl"
        />

        {/* Modal Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl max-h-[90vh] bg-slate-900/95 border border-cyan-500/40 rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(6,182,212,0.25)] backdrop-blur-2xl z-10 flex flex-col"
        >
          {/* Header Image banner */}
          <div className="relative h-64 sm:h-80 w-full overflow-hidden flex-shrink-0">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />

            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2.5 rounded-full bg-slate-900/80 border border-white/20 text-white hover:bg-rose-600 transition-colors z-20"
            >
              <X size={20} />
            </button>

            {/* Title Overlay */}
            <div className="absolute bottom-6 left-6 right-6 space-y-2">
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 inline-block">
                {project.categoryLabel}
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-white">{project.title}</h2>
            </div>
          </div>

          {/* Scrollable Content Body */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-grow">
            {/* Description */}
            <div className="space-y-2">
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider">Project Overview</h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light">
                {project.description}
              </p>
            </div>

            {/* Key Features */}
            <div className="space-y-3">
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider">Key Engineering Features</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.features.map((feature, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-slate-950/60 border border-white/5 flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span className="text-xs text-slate-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Architecture Details */}
            {project.architecture && (
              <div className="p-4 rounded-2xl bg-cyan-950/20 border border-cyan-500/30 space-y-2">
                <div className="flex items-center gap-2 text-cyan-400 text-sm font-bold">
                  <Layers size={18} />
                  <span>Software Architecture</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 font-mono leading-relaxed">
                  {project.architecture}
                </p>
              </div>
            )}

            {/* Challenges & Solutions */}
            {project.challenges && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-rose-950/20 border border-rose-500/30 space-y-2">
                  <div className="flex items-center gap-2 text-rose-400 text-xs font-bold uppercase tracking-wider">
                    <AlertTriangle size={16} />
                    <span>Technical Challenge</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {project.challenges}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-emerald-950/20 border border-emerald-500/30 space-y-2">
                  <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                    <Lightbulb size={16} />
                    <span>Applied Solution</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              </div>
            )}

            {/* Tech Stack Pills */}
            <div className="space-y-2 pt-2 border-t border-white/10">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="px-3 py-1 rounded-lg text-xs font-bold bg-slate-950 text-cyan-300 border border-cyan-500/30">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Sticky Bottom Actions */}
          <div className="p-4 sm:p-6 bg-slate-950 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs text-slate-200 bg-slate-900 border border-white/10 hover:border-cyan-400 hover:text-white transition-all"
                >
                  <GithubIcon size={16} />
                  <span>GitHub Repository</span>
                </a>
              )}

              {project.liveDemo && (
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-blue-600 to-cyan-500 shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] transition-all"
                >
                  <span>Live Demo</span>
                  <ExternalLink size={16} />
                </a>
              )}
            </div>

            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl text-xs font-bold text-slate-400 hover:text-white"
            >
              Close Window
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
