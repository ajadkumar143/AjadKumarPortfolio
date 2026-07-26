import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeader } from '../common/SectionHeader';
import { testimonials } from '../../data/portfolioData';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';

export const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section id="testimonials" className="relative py-24 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          badge="Endorsements"
          title="Client & Leadership Testimonials"
          subtitle="Feedback from engineering leaders, CTOs, and founders who have collaborated with Ajad Kumar."
        />

        <div className="max-w-4xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
              className="glass-card p-8 sm:p-12 rounded-3xl border border-white/10 relative shadow-[0_0_40px_rgba(6,182,212,0.15)]"
            >
              {/* Quote Mark Icon Background */}
              <div className="absolute top-6 right-8 text-cyan-500/10 pointer-events-none">
                <Quote size={80} />
              </div>

              {/* Rating Stars */}
              <div className="flex items-center gap-1 mb-6">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} size={18} className="text-amber-400 fill-amber-400" />
                ))}
              </div>

              {/* Testimonial Quote Text */}
              <p className="text-base sm:text-xl text-slate-200 font-light leading-relaxed italic mb-8">
                "{current.text}"
              </p>

              {/* Author Details */}
              <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                <img
                  src={current.avatar}
                  alt={current.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-cyan-400 shadow-md"
                />
                <div>
                  <h4 className="text-lg font-extrabold text-white">{current.name}</h4>
                  <p className="text-xs font-semibold text-cyan-400">
                    {current.role} • <span className="text-slate-400">{current.company}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Slider Controls */}
          <div className="flex items-center justify-between mt-8">
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    currentIndex === i
                      ? 'w-8 bg-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.8)]'
                      : 'bg-slate-700 hover:bg-slate-500'
                  }`}
                />
              ))}
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={handlePrev}
                className="p-3 rounded-xl bg-slate-900 border border-white/10 text-slate-300 hover:text-cyan-400 hover:border-cyan-400 transition-all"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={handleNext}
                className="p-3 rounded-xl bg-slate-900 border border-white/10 text-slate-300 hover:text-cyan-400 hover:border-cyan-400 transition-all"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
