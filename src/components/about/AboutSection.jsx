import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, MapPin, Code2, Sparkles } from 'lucide-react';
import { SectionHeader } from '../common/SectionHeader';
import { personalInfo, aboutCards } from '../../data/portfolioData';

const iconMap = {
  Briefcase: Briefcase,
  GraduationCap: GraduationCap,
  MapPin: MapPin,
  Code2: Code2
};

export const AboutSection = () => {
  return (
    <section id="about" className="relative py-20 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="About Me" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Side: Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative group w-full max-w-sm">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 via-sky-400 to-indigo-700 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition duration-500" />
              
              <div className="relative slate-card rounded-3xl p-3 border border-white/10 overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80"
                  alt={personalInfo.name}
                  className="w-full h-80 sm:h-96 object-cover object-center rounded-2xl filter brightness-95 contrast-105 group-hover:scale-105 transition-transform duration-500"
                />
                
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-[#0A0F1D] via-transparent to-transparent opacity-60" />
                
                <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between p-3 rounded-xl bg-[#0A0F1D]/90 backdrop-blur-md border border-white/10">
                  <div className="flex items-center gap-2 text-indigo-400 font-mono text-xs font-semibold">
                    <Sparkles size={14} />
                    <span>Full Stack .NET Developer</span>
                  </div>
                  <span className="text-[11px] text-slate-300 font-bold bg-indigo-500/20 px-2.5 py-1 rounded-lg border border-indigo-500/30">
                    4+ Yrs Exp
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: 4 Information Cards Only */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {aboutCards.map((card) => {
                const IconComponent = iconMap[card.icon] || Code2;
                return (
                  <motion.div
                    key={card.title}
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.2 }}
                    className="slate-card p-6 rounded-2xl border border-white/10 hover:border-indigo-500/40 transition-all shadow-lg group relative overflow-hidden"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3.5 rounded-xl bg-slate-900 border border-white/10 text-indigo-400 group-hover:text-white group-hover:bg-gradient-to-tr group-hover:from-indigo-600 group-hover:to-sky-500 transition-colors shadow-md">
                        <IconComponent size={22} />
                      </div>
                      <div>
                        <span className="text-xs uppercase font-semibold text-slate-400 tracking-wider">
                          {card.title}
                        </span>
                        <h4 className="text-lg font-black text-white mt-0.5 tracking-tight">
                          {card.subtitle}
                        </h4>
                        <p className="text-xs text-slate-300 mt-1 font-light">
                          {card.detail}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
