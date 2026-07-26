import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp, Mail, Heart, Code2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './SocialIcons';
import { personalInfo } from '../../data/portfolioData';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 pt-20 pb-10 bg-[#060914] border-t border-white/10 overflow-hidden">
      {/* Glow highlight */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand & Bio */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-sky-400 to-indigo-700 p-[1px]">
                <div className="w-full h-full bg-[#0A0F1D] rounded-[11px] flex items-center justify-center font-black text-sky-400 text-lg">
                  AK
                </div>
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-white">{personalInfo.name}</h3>
                <p className="text-xs text-indigo-400 font-medium">{personalInfo.title}</p>
              </div>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed max-w-md">
              Building high-performance ASP.NET Core Web APIs, scalable microservices, optimized SQL database solutions, and modern React applications.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              {[
                { IconComponent: GithubIcon, href: personalInfo.github, label: "GitHub" },
                { IconComponent: LinkedinIcon, href: personalInfo.linkedin, label: "LinkedIn" },
                { IconComponent: ({ size }) => <Mail size={size} />, href: `mailto:${personalInfo.email}`, label: "Email" }
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={item.label}
                  className="w-10 h-10 rounded-xl bg-[#131B2E] border border-white/10 flex items-center justify-center text-slate-300 hover:text-indigo-400 hover:border-indigo-500/50 hover:shadow-[0_0_15px_rgba(79,70,229,0.3)] transition-all duration-300"
                >
                  <item.IconComponent size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div>
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider mb-4 border-l-2 border-indigo-500 pl-3">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              {['Home', 'About', 'Skills', 'Experience', 'Services', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="hover:text-indigo-400 transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500/40 group-hover:bg-indigo-400 transition-colors" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider mb-4 border-l-2 border-sky-400 pl-3">
              Get In Touch
            </h4>
            <div className="space-y-3 text-sm text-slate-400">
              <p className="flex items-center gap-2">
                <Mail size={16} className="text-indigo-400 flex-shrink-0" />
                <span className="truncate">{personalInfo.email}</span>
              </p>
              <p className="flex items-center gap-2">
                <Code2 size={16} className="text-sky-400 flex-shrink-0" />
                <span>{personalInfo.location}</span>
              </p>
              <div className="pt-2">
                <a
                  href="#contact"
                  className="inline-block px-4 py-2 text-xs font-bold text-white rounded-xl bg-gradient-to-r from-indigo-600 via-sky-500 to-indigo-700 hover:shadow-[0_0_20px_rgba(79,70,229,0.4)] transition-all"
                >
                  Contact Me
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
          
          <p className="flex items-center gap-1.5">
            Designed & Built with <Heart size={14} className="text-rose-500 fill-rose-500" /> using React 19 & .NET Architecture
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#131B2E] border border-indigo-500/30 text-indigo-400 hover:bg-indigo-950/40 hover:border-indigo-400 transition-all duration-300"
          >
            <span>Back to Top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
};
