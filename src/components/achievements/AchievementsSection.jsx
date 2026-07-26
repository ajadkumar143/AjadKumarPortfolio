import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../common/SectionHeader';
import { achievements } from '../../data/portfolioData';
import { Trophy, Zap, Award, BookOpen } from 'lucide-react';

const iconMap = {
  Trophy, Zap, Award, BookOpen
};

export const AchievementsSection = () => {
  return (
    <section id="achievements" className="relative py-24 z-10 bg-slate-950/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          badge="Milestones & Impact"
          title="Key Engineering Achievements"
          subtitle="Honors, hackathon victories, and quantitative performance optimization benchmarks achieved throughout my software career."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((ach, index) => {
            const IconComponent = iconMap[ach.icon] || Trophy;
            return (
              <motion.div
                key={ach.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-6 rounded-2xl border border-white/10 hover:border-cyan-500/50 transition-all group flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
                      <IconComponent size={24} />
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase bg-amber-950/60 text-amber-300 border border-amber-500/30">
                      {ach.category}
                    </span>
                  </div>

                  <h3 className="text-base font-extrabold text-white group-hover:text-amber-300 transition-colors">
                    {ach.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed font-light">
                    {ach.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
