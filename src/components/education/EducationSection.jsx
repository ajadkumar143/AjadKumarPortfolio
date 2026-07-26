import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../common/SectionHeader';
import { education } from '../../data/portfolioData';
import { GraduationCap, Award, BookOpen, CheckCircle2 } from 'lucide-react';

export const EducationSection = () => {
  return (
    <section id="education" className="relative py-24 z-10 bg-slate-950/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          badge="Academic Background"
          title="Education & Qualifications"
          subtitle="Strong theoretical foundation in Computer Science & Engineering combined with continuous software architecture learning."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass-card p-8 rounded-3xl border border-white/10 hover:border-cyan-500/50 transition-all flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                    <GraduationCap size={26} />
                  </div>

                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-950/80 text-blue-300 border border-blue-500/30">
                    {edu.period}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-extrabold text-white group-hover:text-cyan-300 transition-colors">
                    {edu.degree}
                  </h3>
                  <p className="text-sm font-bold text-cyan-400 mt-1">{edu.field}</p>
                  <p className="text-xs text-slate-400 mt-0.5">{edu.institution}</p>
                </div>

                <div className="p-3 rounded-xl bg-slate-950/60 border border-white/5 inline-block">
                  <span className="text-[10px] text-slate-400 uppercase font-semibold block">Grade / Performance</span>
                  <span className="text-sm font-extrabold text-emerald-400">{edu.grade}</span>
                </div>

                <div className="pt-4 border-t border-white/10 space-y-2">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Academic Highlights:</h4>
                  <ul className="space-y-2">
                    {edu.highlights.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-slate-300 leading-normal">
                        <CheckCircle2 size={14} className="text-cyan-400 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
