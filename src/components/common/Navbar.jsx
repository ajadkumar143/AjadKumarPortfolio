import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download, Send, Volume2, VolumeX, Sparkles } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Services', href: '#services' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar = ({ onOpenResume }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [soundEnabled, setSoundEnabled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Section spy
      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const playClickSound = () => {
    if (!soundEnabled) return;
    try {
      const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(600, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(1200, audioCtx.currentTime + 0.08);
      gain.gain.setValueAtTime(0.05, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.08);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.08);
    } catch (e) {
      // Ignore audio policy error
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'py-3 bg-[#0A0F1D]/90 backdrop-blur-xl border-b border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)]'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={playClickSound}
            className="flex items-center gap-2 group cursor-pointer"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-sky-400 to-indigo-700 p-[1px] shadow-[0_0_15px_rgba(79,70,229,0.4)] group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full bg-[#0A0F1D] rounded-[11px] flex items-center justify-center font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-indigo-300 text-lg">
                AK
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-white tracking-tight text-lg group-hover:text-indigo-400 transition-colors">
                Ajad Kumar
              </span>
              <span className="text-[10px] uppercase font-semibold tracking-widest text-slate-400 -mt-1">
                Full Stack .NET
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#131B2E]/90 p-1.5 rounded-full border border-white/10 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={playClickSound}
                  className={`relative px-4 py-1.5 text-xs font-semibold rounded-full transition-all duration-300 ${
                    isActive ? 'text-white' : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-sky-500 rounded-full shadow-[0_0_15px_rgba(79,70,229,0.5)] -z-10"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Desktop Right Actions */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Sound Toggle Button */}
            <button
              onClick={() => setSoundEnabled(!soundEnabled)}
              title={soundEnabled ? 'Mute Interaction Audio' : 'Enable Interaction Audio'}
              className="p-2.5 rounded-xl bg-[#131B2E] border border-white/10 text-slate-300 hover:text-indigo-400 hover:border-indigo-500/50 transition-all duration-300"
            >
              {soundEnabled ? <Volume2 size={16} className="text-indigo-400" /> : <VolumeX size={16} />}
            </button>

            {/* Download Resume Button */}
            <button
              onClick={() => {
                playClickSound();
                onOpenResume();
              }}
              className="flex items-center gap-2 px-4 py-2 text-xs font-bold text-white rounded-xl bg-[#131B2E] border border-indigo-500/40 hover:border-indigo-400 hover:shadow-[0_0_20px_rgba(79,70,229,0.3)] transition-all duration-300"
            >
              <Download size={14} className="text-indigo-400" />
              Resume
            </button>

            {/* Contact Me Button */}
            <a
              href="#contact"
              onClick={playClickSound}
              className="flex items-center gap-2 px-4 py-2 text-xs font-bold text-white rounded-xl bg-gradient-to-r from-indigo-600 via-sky-500 to-indigo-700 hover:opacity-95 shadow-[0_0_20px_rgba(79,70,229,0.4)] transition-all duration-300 hover:-translate-y-0.5"
            >
              <Sparkles size={14} />
              Contact Me
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setSoundEnabled(!soundEnabled)}
              className="p-2 rounded-lg bg-[#131B2E] border border-white/10 text-slate-300"
            >
              {soundEnabled ? <Volume2 size={16} className="text-indigo-400" /> : <VolumeX size={16} />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-[#131B2E] border border-indigo-500/30 text-white focus:outline-none"
            >
              {mobileMenuOpen ? <X size={20} className="text-indigo-400" /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#0A0F1D]/95 backdrop-blur-2xl border-b border-white/10 px-4 pt-4 pb-6 overflow-hidden"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => {
                    playClickSound();
                    setMobileMenuOpen(false);
                  }}
                  className={`px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                    activeSection === link.href.substring(1)
                      ? 'bg-gradient-to-r from-indigo-600/30 to-sky-500/30 text-sky-300 border border-sky-500/40'
                      : 'text-slate-300 hover:bg-slate-900/60'
                  }`}
                >
                  {link.name}
                </a>
              ))}

              <div className="mt-4 flex flex-col gap-2 pt-4 border-t border-white/10">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenResume();
                  }}
                  className="flex items-center justify-center gap-2 py-3 text-sm font-bold text-white rounded-xl bg-[#131B2E] border border-indigo-500/40"
                >
                  <Download size={16} className="text-indigo-400" />
                  Download Resume
                </button>

                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 py-3 text-sm font-bold text-white rounded-xl bg-gradient-to-r from-indigo-600 to-sky-500 shadow-lg shadow-indigo-500/20"
                >
                  <Send size={16} />
                  Contact Me
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
