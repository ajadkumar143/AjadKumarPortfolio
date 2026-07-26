import React, { useState, useEffect } from 'react';
import { LoadingScreen } from './components/common/LoadingScreen';
import { ScrollProgressBar } from './components/common/ScrollProgressBar';
import { CommandPalette } from './components/common/CommandPalette';
import { CustomCursor } from './components/common/CustomCursor';
import { AuroraBackground } from './components/common/AuroraBackground';
import { ParticleBackground } from './components/common/ParticleBackground';
import { Navbar } from './components/common/Navbar';
import { HeroSection } from './components/hero/HeroSection';
import { AboutSection } from './components/about/AboutSection';
import { SkillsSection } from './components/skills/SkillsSection';
import { ExperienceSection } from './components/experience/ExperienceSection';
import { ServicesSection } from './components/services/ServicesSection';
import { ContactSection } from './components/contact/ContactSection';
import { Footer } from './components/common/Footer';
import { ResumeModal } from './components/common/ResumeModal';

export function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);

  // Global Ctrl+K / Cmd+K listener
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsCommandPaletteOpen((prev) => !prev);
        // hello this is my portfolio website, I am a software engineer and this is my personal website where I showcase my projects and skills.
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#0A0F1D] text-slate-100 font-sans selection:bg-indigo-500 selection:text-white">
      {/* Preloader Loading Screen */}
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}

      {/* Top Viewport Scroll Progress Bar */}
      <ScrollProgressBar />

      {/* Background Visual Effects */}
      <AuroraBackground />
      <ParticleBackground />
      <CustomCursor />

      {/* Command Palette (Ctrl+K) */}
      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
        onOpenResume={() => setIsResumeModalOpen(true)}
      />

      {/* Navigation Header */}
      <Navbar onOpenResume={() => setIsResumeModalOpen(true)} />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <HeroSection
          onOpenResume={() => setIsResumeModalOpen(true)}
          onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
        />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ServicesSection />
        <ContactSection />
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Resume Viewer / Download Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </div>
  );
}

export default App;
