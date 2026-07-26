import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../common/SectionHeader';
import { certificates } from '../../data/portfolioData';
import { Award, ExternalLink, ShieldCheck, Calendar } from 'lucide-react';

export const CertificatesSection = () => {
  return (
    <section id="certificates" className="relative py-24 z-10 bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          badge="Verified Qualifications"
          title="Certifications & Credentials"
          subtitle="Industry certifications from Microsoft, Meta, and leading technology institutions verifying enterprise competence."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-2xl p-5 border border-white/10 hover:border-cyan-500/50 transition-all group flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="relative h-40 w-full rounded-xl overflow-hidden bg-slate-900 border border-white/10">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2 right-2 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-slate-950/90 text-cyan-300 border border-cyan-500/30 flex items-center gap-1">
                    <ShieldCheck size={12} /> Verified
                  </div>
                </div>

                <div>
                  <span className="text-[10px] font-bold uppercase text-slate-400 tracking-wider flex items-center gap-1 mb-1">
                    <Award size={12} className="text-cyan-400" />
                    {cert.issuer}
                  </span>
                  <h3 className="text-sm font-extrabold text-white group-hover:text-cyan-300 transition-colors leading-snug">
                    {cert.title}
                  </h3>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between mt-4">
                <span className="text-[10px] font-mono text-slate-400 flex items-center gap-1">
                  <Calendar size={11} /> {cert.date}
                </span>

                <a
                  href={cert.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-bold text-cyan-400 hover:text-cyan-300 flex items-center gap-1"
                >
                  <span>Verify</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
