import React from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import { SectionHeader } from '../common/SectionHeader';
import { experienceJourney } from '../../data/portfolioData';

export const ExperienceSection = () => {
  return (
    <section id="experience" className="relative py-20 z-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Experience Journey" />

        <div className="relative mt-8">
          {/* Central Vertical Connector Line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-600 via-sky-400 to-indigo-700 -translate-x-1/2 opacity-30 hidden sm:block" />
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-600 via-sky-400 to-indigo-700 sm:hidden opacity-30" />

          <div className="space-y-8">
            {experienceJourney.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className={`relative flex flex-col sm:flex-row items-center ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Step Dot Indicator */}
                  <div className="absolute left-6 sm:left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-[#0A0F1D] border-2 border-indigo-400 flex items-center justify-center shadow-[0_0_15px_rgba(79,70,229,0.5)] z-20">
                    <span className="text-xs font-mono font-bold text-indigo-300">
                      {item.step}
                    </span>
                  </div>

                  {/* Card Content */}
                  <div className={`w-full sm:w-1/2 pl-14 sm:pl-0 ${isEven ? 'sm:pr-10 sm:text-right' : 'sm:pl-10 sm:text-left'}`}>
                    <div className="slate-card rounded-2xl p-5 border border-white/10 hover:border-indigo-500/40 transition-all duration-300 shadow-xl group hover:-translate-y-1">
                      <div className={`flex items-center gap-2 mb-1.5 ${isEven ? 'sm:justify-end' : 'sm:justify-start'}`}>
                        <Calendar size={13} className="text-indigo-400" />
                        <span className="text-[11px] font-mono font-semibold text-indigo-300 bg-indigo-500/10 px-2.5 py-0.5 rounded-full border border-indigo-500/20">
                          {item.year}
                        </span>
                      </div>

                      <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                        {item.title}
                      </h3>

                      <p className="text-xs font-medium text-slate-400 mt-0.5">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
