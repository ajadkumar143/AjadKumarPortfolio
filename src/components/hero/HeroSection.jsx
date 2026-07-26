import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, Sparkles, ArrowRight, Mail, Command, Copy, Check, Terminal, Code2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../common/SocialIcons';
import { personalInfo, statistics } from '../../data/portfolioData';

const csCodeSnippet = `// ASP.NET Core 8 Web API Architecture
[ApiController]
[Route("api/v1/[controller]")]
public class AjadProfileController : ControllerBase
{
    private readonly IDeveloperRepository _repo;

    public AjadProfileController(IDeveloperRepository repo)
    {
        _repo = repo;
    }

    [HttpGet("developer-info")]
    public async Task<IActionResult> GetProfile()
    {
        var dev = await _repo.GetDetailsAsync("Ajad Kumar");
        // Experience: 4+ Years | Stack: C#, .NET 8, React
        return Ok(new { dev.Status, dev.CleanCode, dev.SOLID });
    }
}`;

const archSnippet = `// Clean Architecture & Microservices
namespace AjadPortfolio.Core.Domain
{
    public interface ICleanArchitecture
    {
        Task<Response> ExecuteHighThroughputQueryAsync();
        void ApplyDesignPatterns(params Pattern[] patterns);
    }
    // CQRS Pattern + Entity Framework Core 8
}`;

export const HeroSection = ({ onOpenResume, onOpenCommandPalette }) => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [activeCodeTab, setActiveCodeTab] = useState('controller');
  const [copiedCode, setCopiedCode] = useState(false);

  // Typing effect hook
  useEffect(() => {
    const currentRole = personalInfo.roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 35 : 75;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
        if (displayText === currentRole) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
        if (displayText === '') {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % personalInfo.roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRoleIndex]);

  const handleCopyCode = () => {
    const textToCopy = activeCodeTab === 'controller' ? csCodeSnippet : archSnippet;
    navigator.clipboard.writeText(textToCopy);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Status & Cmd+K Shortcut Badge */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#131B2E] border border-indigo-500/40 backdrop-blur-xl shadow-[0_0_20px_rgba(79,70,229,0.2)]">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <span className="text-xs font-bold text-slate-200 uppercase tracking-wider">
                  Available for Senior .NET Roles
                </span>
              </div>

              <button
                onClick={onOpenCommandPalette}
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#131B2E]/80 border border-white/10 text-slate-400 hover:text-white hover:border-indigo-500/40 text-xs font-mono transition-all"
                title="Open Command Menu (Ctrl + K)"
              >
                <Command size={12} className="text-indigo-400" />
                <span>Press</span>
                <kbd className="bg-slate-800 text-indigo-300 px-1 py-0.5 rounded text-[10px]">Ctrl + K</kbd>
              </button>
            </div>

            {/* Main Greeting & Name */}
            <div>
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-black text-white tracking-tight leading-none mb-3">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-indigo-400 to-sky-400">{personalInfo.name}</span>
              </h1>
              
              {/* Dynamic Typing Title */}
              <div className="h-12 sm:h-16 flex items-center">
                <p className="text-xl sm:text-3xl font-extrabold text-indigo-400 font-mono">
                  {displayText}
                  <span className="animate-pulse text-sky-400">|</span>
                </p>
              </div>
            </div>

            {/* Short Bio */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl font-light">
              {personalInfo.bio}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              {/* Download Resume CTA */}
              <button
                onClick={onOpenResume}
                className="group relative inline-flex items-center gap-3 px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-indigo-600 via-sky-500 to-indigo-700 shadow-[0_0_25px_rgba(79,70,229,0.4)] hover:shadow-[0_0_35px_rgba(56,189,248,0.5)] transition-all duration-300 hover:-translate-y-0.5"
              >
                <Download size={18} className="text-indigo-100 group-hover:animate-bounce" />
                <span>Download Resume</span>
              </button>

              {/* Contact Me CTA */}
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-slate-200 bg-[#131B2E] border border-indigo-500/40 hover:border-indigo-400 hover:text-white transition-all duration-300 hover:-translate-y-0.5"
              >
                <span>Contact Me</span>
                <ArrowRight size={16} className="text-indigo-400" />
              </a>
            </div>

            {/* Social Proof & Links */}
            <div className="pt-6 border-t border-white/10 flex items-center gap-6">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest">Connect:</span>
              <div className="flex items-center gap-3">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl bg-[#131B2E] border border-white/10 text-slate-300 hover:text-indigo-400 hover:border-indigo-500/50 transition-all duration-300"
                >
                  <GithubIcon size={18} />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl bg-[#131B2E] border border-white/10 text-slate-300 hover:text-indigo-400 hover:border-indigo-500/50 transition-all duration-300"
                >
                  <LinkedinIcon size={18} />
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="p-2.5 rounded-xl bg-[#131B2E] border border-white/10 text-slate-300 hover:text-indigo-400 hover:border-indigo-500/50 transition-all duration-300"
                >
                  <Mail size={18} />
                </a>
              </div>
            </div>

          </motion.div>

          {/* Right Hero Visual: Interactive C# IDE Terminal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-lg">
              {/* Glow backdrop behind terminal */}
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 via-sky-400 to-indigo-700 rounded-3xl blur-2xl opacity-35 animate-pulse-glow" />

              {/* IDE Code Editor Box */}
              <div className="relative glass-card rounded-3xl overflow-hidden border border-white/15 shadow-2xl bg-[#0d1424]">
                {/* IDE Window Header Bar */}
                <div className="flex items-center justify-between px-4 py-3 bg-[#0A0F1D] border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/90 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/90 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/90 inline-block" />
                    <span className="ml-2 text-xs font-mono text-slate-400 flex items-center gap-1">
                      <Code2 size={14} className="text-indigo-400" />
                      Visual Studio 2022
                    </span>
                  </div>

                  <button
                    onClick={handleCopyCode}
                    className="flex items-center gap-1 text-[11px] font-mono text-slate-400 hover:text-indigo-300 bg-[#131B2E] px-2.5 py-1 rounded-md border border-white/10 transition-colors"
                  >
                    {copiedCode ? <Check size={12} className="text-emerald-400" /> : <Copy size={12} />}
                    <span>{copiedCode ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>

                {/* File Tabs Bar */}
                <div className="flex items-center bg-[#090e1c] border-b border-white/10 text-xs font-mono">
                  <button
                    onClick={() => setActiveCodeTab('controller')}
                    className={`px-4 py-2 flex items-center gap-2 border-r border-white/10 transition-colors ${
                      activeCodeTab === 'controller'
                        ? 'bg-[#0d1424] text-indigo-300 font-bold border-b-2 border-b-indigo-400'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <Terminal size={13} className="text-sky-400" />
                    AjadProfileController.cs
                  </button>
                  <button
                    onClick={() => setActiveCodeTab('architecture')}
                    className={`px-4 py-2 flex items-center gap-2 transition-colors ${
                      activeCodeTab === 'architecture'
                        ? 'bg-[#0d1424] text-indigo-300 font-bold border-b-2 border-b-indigo-400'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <Code2 size={13} className="text-indigo-400" />
                    CleanArchitecture.cs
                  </button>
                </div>

                {/* Code Snippet Display Area */}
                <div className="p-5 font-mono text-xs sm:text-sm text-slate-200 leading-relaxed overflow-x-auto min-h-[260px] select-text">
                  <pre className="text-slate-300">
                    <code>
                      {activeCodeTab === 'controller' ? csCodeSnippet : archSnippet}
                    </code>
                  </pre>
                </div>

                {/* Status Bar Footer */}
                <div className="px-4 py-2.5 bg-[#0A0F1D] border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span className="text-emerald-400 font-semibold">HTTP 200 OK</span>
                  </div>
                  <span className="text-slate-500">UTF-8 | C# .NET 8</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Animated Statistics Bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6"
        >
          {statistics.map((stat, idx) => (
            <div
              key={idx}
              className="slate-card p-5 sm:p-6 rounded-2xl border border-white/10 text-center hover:border-indigo-500/40 transition-all group"
            >
              <div className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-indigo-400 to-sky-400 mb-1 group-hover:scale-110 transition-transform">
                {stat.value}{stat.suffix}
              </div>
              <p className="text-xs sm:text-sm font-semibold text-slate-300 tracking-wide uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Scroll Down Indicator */}
        <div className="mt-12 flex justify-center">
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-slate-400 hover:text-indigo-400 transition-colors group"
          >
            <span className="text-[10px] uppercase font-bold tracking-widest">Scroll Down</span>
            <div className="w-6 h-10 rounded-full border-2 border-slate-600 group-hover:border-indigo-400 flex justify-center pt-2 transition-colors">
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1.5 h-2.5 rounded-full bg-indigo-400"
              />
            </div>
          </a>
        </div>

      </div>
    </section>
  );
};
