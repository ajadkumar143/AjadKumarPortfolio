import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, FileText, CheckCircle2, Mail, ExternalLink, ShieldCheck } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';

export const ResumeModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#050816]/80 backdrop-blur-xl"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-2xl bg-slate-900/90 border border-cyan-500/40 rounded-3xl p-6 sm:p-8 shadow-[0_0_50px_rgba(6,182,212,0.2)] backdrop-blur-2xl z-10"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-xl bg-slate-800/80 border border-white/10 text-slate-300 hover:text-white hover:border-cyan-400 transition-all"
          >
            <X size={20} />
          </button>

          {/* Header */}
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-400 p-[1px] flex-shrink-0">
              <div className="w-full h-full bg-[#050816] rounded-[15px] flex items-center justify-center text-cyan-400">
                <FileText size={28} />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-2xl font-extrabold text-white">{personalInfo.name}</h3>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center gap-1">
                  <ShieldCheck size={12} /> Verified CV
                </span>
              </div>
              <p className="text-sm text-cyan-400 font-medium">{personalInfo.title} • {personalInfo.experienceYears} Exp</p>
            </div>
          </div>

          {/* Resume Snapshot Highlights */}
          <div className="space-y-4 mb-8">
            <div className="p-4 rounded-2xl bg-slate-950/60 border border-white/5 space-y-3">
              <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider">Professional Profile Summary</h4>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Full Stack .NET & React Engineer with over 4+ years specializing in building enterprise REST APIs (ASP.NET Core 8), Entity Framework Core, complex SQL Server database query tuning, and modern React 19 web applications.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="p-3.5 rounded-xl bg-slate-950/60 border border-white/5">
                <span className="text-[10px] font-semibold text-slate-500 uppercase">Qualification</span>
                <p className="text-xs font-bold text-slate-200 mt-1">{personalInfo.qualification}</p>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-950/60 border border-white/5">
                <span className="text-[10px] font-semibold text-slate-500 uppercase">Primary Stack</span>
                <p className="text-xs font-bold text-cyan-400 mt-1">C#, .NET Core, SQL, React</p>
              </div>
            </div>

            {/* Key Skills Checklist */}
            <div className="p-4 rounded-2xl bg-slate-950/60 border border-white/5">
              <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">Core Competencies</h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {[
                  "ASP.NET Core Web API",
                  "React 19 & JavaScript",
                  "SQL Server & Stored Procs",
                  "Entity Framework & Dapper",
                  "JWT Auth & Security",
                  "Docker & Azure Services"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-1.5 text-xs text-slate-300">
                    <CheckCircle2 size={14} className="text-cyan-400 flex-shrink-0" />
                    <span className="truncate">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <a
              href={personalInfo.resumeUrl}
              download="Ajad_Kumar_FullStack_NET_Resume.pdf"
              onClick={() => {
                // If placeholder pdf doesn't exist, trigger print / fallback
                alert("Downloading Ajad Kumar's Resume (PDF)");
                onClose();
              }}
              className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2 py-3.5 px-6 text-sm font-extrabold text-white rounded-xl bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600 shadow-[0_0_25px_rgba(6,182,212,0.4)] hover:shadow-[0_0_35px_rgba(6,182,212,0.6)] transition-all"
            >
              <Download size={18} />
              Download Official CV (PDF)
            </a>

            <a
              href={`mailto:${personalInfo.email}`}
              className="w-full sm:w-auto flex items-center justify-center gap-2 py-3.5 px-6 text-sm font-extrabold text-slate-200 rounded-xl bg-slate-800 border border-white/10 hover:border-cyan-500/50 transition-all"
            >
              <Mail size={18} className="text-cyan-400" />
              Email Direct
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
