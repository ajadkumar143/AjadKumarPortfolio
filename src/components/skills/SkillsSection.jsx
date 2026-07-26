import React from 'react';
import { motion } from 'framer-motion';
import { Server, Layout, Database, Wrench, CheckCircle2 } from 'lucide-react';
import { SectionHeader } from '../common/SectionHeader';
import { techStackCategories } from '../../data/portfolioData';

const iconMap = {
  Server: Server,
  Layout: Layout,
  Database: Database,
  Wrench: Wrench
};

export const SkillsSection = () => {
  return (
    <section id="skills" className="relative py-20 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Technical Stack" />

        {/* 4 Clean Slate Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {techStackCategories.map((cat, idx) => {
            const IconComponent = iconMap[cat.icon] || Server;
            return (
              <motion.div
                key={cat.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileHover={{ y: -4 }}
                className="slate-card rounded-2xl p-6 border border-white/10 hover:border-indigo-500/40 transition-all duration-300 shadow-xl group"
              >
                {/* Card Header */}
                <div className="flex items-center gap-3.5 mb-5">
                  <div className="p-3 rounded-xl bg-slate-900 border border-white/10 text-indigo-400 group-hover:text-white group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-sky-500 transition-all duration-300 shadow-md">
                    <IconComponent size={22} />
                  </div>
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    {cat.category}
                  </h3>
                </div>

                {/* Skill Tag Chips */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill}
                      className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900/90 border border-white/10 hover:border-indigo-500/40 text-slate-200 text-xs font-medium tracking-wide transition-all duration-200"
                    >
                      <CheckCircle2 size={13} className="text-indigo-400 flex-shrink-0" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
