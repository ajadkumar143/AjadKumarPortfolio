import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Server, Database, Wrench } from 'lucide-react';
import { SectionHeader } from '../common/SectionHeader';
import { services } from '../../data/portfolioData';

const iconMap = {
  Globe: Globe,
  Server: Server,
  Database: Database,
  Wrench: Wrench
};

export const ServicesSection = () => {
  return (
    <section id="services" className="relative py-20 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Services" />

        {/* 4 Clean Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, idx) => {
            const IconComponent = iconMap[service.icon] || Globe;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileHover={{ y: -4 }}
                className="slate-card rounded-2xl p-6 border border-white/10 hover:border-indigo-500/40 transition-all duration-300 shadow-xl group flex flex-col justify-between"
              >
                <div>
                  <div className="p-3.5 rounded-xl bg-slate-900 border border-white/10 text-indigo-400 group-hover:text-white group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-sky-500 transition-all duration-300 w-fit mb-4 shadow-md">
                    <IconComponent size={24} />
                  </div>

                  <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-sky-300 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-slate-300 text-xs sm:text-sm font-light leading-relaxed mt-2">
                    {service.description}
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
