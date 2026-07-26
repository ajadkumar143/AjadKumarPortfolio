import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Command, ArrowRight, Download, Mail, ExternalLink, X, Code2, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { personalInfo } from '../../data/portfolioData';

export const CommandPalette = ({ isOpen, onClose, onOpenResume }) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
      setSelectedIndex(0);
    }
  }, [isOpen]);

  // Command items list matching 6 active sections
  const commands = [
    {
      category: 'Navigation',
      items: [
        { name: 'Go to Hero Section', action: () => scrollToSection('home'), icon: Sparkles },
        { name: 'Go to About Me', action: () => scrollToSection('about'), icon: Code2 },
        { name: 'Go to Technical Stack', action: () => scrollToSection('skills'), icon: Code2 },
        { name: 'Go to Experience Journey', action: () => scrollToSection('experience'), icon: Code2 },
        { name: 'Go to Services', action: () => scrollToSection('services'), icon: Code2 },
        { name: 'Go to Contact', action: () => scrollToSection('contact'), icon: Mail },
      ]
    },
    {
      category: 'Actions',
      items: [
        {
          name: 'Download / View Resume (PDF)',
          action: () => {
            onClose();
            onOpenResume();
          },
          icon: Download
        },
        {
          name: `Copy Email (${personalInfo.email})`,
          action: () => {
            navigator.clipboard.writeText(personalInfo.email);
            alert('Email address copied to clipboard!');
            onClose();
          },
          icon: Mail
        },
        {
          name: 'Open GitHub Profile',
          action: () => {
            window.open(personalInfo.github, '_blank');
            onClose();
          },
          icon: ExternalLink
        },
        {
          name: 'Open LinkedIn Profile',
          action: () => {
            window.open(personalInfo.linkedin, '_blank');
            onClose();
          },
          icon: ExternalLink
        }
      ]
    }
  ];

  // Flatten and filter commands
  const allItems = commands.flatMap(c => c.items);
  const filteredItems = allItems.filter(item =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  const scrollToSection = (id) => {
    onClose();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % (filteredItems.length || 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filteredItems.length) % (filteredItems.length || 1));
    } else if (e.key === 'Enter' && filteredItems[selectedIndex]) {
      e.preventDefault();
      filteredItems[selectedIndex].action();
    } else if (e.key === 'Escape') {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#0A0F1D]/80 backdrop-blur-xl"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-2xl bg-[#131B2E] border border-indigo-500/30 rounded-2xl shadow-[0_0_50px_rgba(79,70,229,0.3)] overflow-hidden z-10"
          >
            {/* Search Input Bar */}
            <div className="flex items-center px-4 py-3.5 border-b border-white/10 gap-3 bg-[#0A0F1D]/80">
              <Search size={18} className="text-indigo-400" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setSelectedIndex(0);
                }}
                onKeyDown={handleKeyDown}
                placeholder="Type a command or search sections, links..."
                className="w-full bg-transparent text-white placeholder-slate-400 text-sm focus:outline-none font-sans"
              />
              <span className="text-[10px] font-mono text-slate-400 bg-slate-800 px-2 py-1 rounded border border-white/10 flex items-center gap-1">
                ESC
              </span>
              <button onClick={onClose} className="text-slate-400 hover:text-white">
                <X size={18} />
              </button>
            </div>

            {/* Results List */}
            <div className="max-h-80 overflow-y-auto p-2 space-y-1">
              {filteredItems.length > 0 ? (
                filteredItems.map((item, idx) => {
                  const Icon = item.icon;
                  const isSelected = idx === selectedIndex;
                  return (
                    <button
                      key={item.name}
                      onClick={item.action}
                      onMouseEnter={() => setSelectedIndex(idx)}
                      className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-medium transition-all ${
                        isSelected
                          ? 'bg-gradient-to-r from-indigo-600/40 to-sky-500/40 text-sky-200 border border-indigo-500/40'
                          : 'text-slate-300 hover:bg-slate-800/60'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <Icon size={16} className={isSelected ? 'text-sky-300' : 'text-slate-400'} />
                        <span>{item.name}</span>
                      </div>
                      {isSelected && <ArrowRight size={14} className="text-indigo-400 animate-pulse" />}
                    </button>
                  );
                })
              ) : (
                <div className="p-8 text-center text-slate-400 text-xs">
                  No matching commands found for "{query}"
                </div>
              )}
            </div>

            {/* Footer Shortcut Bar */}
            <div className="px-4 py-2.5 bg-[#0A0F1D] border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-400">
              <div className="flex items-center gap-4">
                <span><kbd className="bg-slate-800 px-1.5 py-0.5 rounded border border-white/10 text-slate-300">↑↓</kbd> Navigate</span>
                <span><kbd className="bg-slate-800 px-1.5 py-0.5 rounded border border-white/10 text-slate-300">↵</kbd> Select</span>
              </div>
              <span className="text-indigo-400 font-semibold">Ajad Kumar Portfolio</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
