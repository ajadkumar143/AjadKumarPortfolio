import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, BookOpen, Layers, ArrowUpRight, Filter } from 'lucide-react';
import { GithubIcon } from '../common/SocialIcons';
import { SectionHeader } from '../common/SectionHeader';
import { ProjectModal } from './ProjectModal';
import { featuredProjects } from '../../data/portfolioData';

const categories = [
  { id: 'all', label: 'All Projects' },
  { id: 'dotnet', label: '.NET Core & C#' },
  { id: 'react', label: 'React Apps' },
  { id: 'webapi', label: 'Web API' },
  { id: 'ai', label: 'AI & Face Rec' },
  { id: 'desktop', label: 'Desktop (WPF)' }
];

export const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  // Filter projects based on active pill
  const filteredProjects = featuredProjects.filter((project) => {
    if (activeCategory === 'all') return true;
    const catLabel = project.categoryLabel.toLowerCase();
    const title = project.title.toLowerCase();
    const tech = project.technologies.join(' ').toLowerCase();

    if (activeCategory === 'dotnet') return catLabel.includes('.net') || tech.includes('c#');
    if (activeCategory === 'react') return catLabel.includes('react') || tech.includes('react');
    if (activeCategory === 'webapi') return catLabel.includes('api') || tech.includes('api');
    if (activeCategory === 'ai') return catLabel.includes('ai') || title.includes('face');
    if (activeCategory === 'desktop') return catLabel.includes('desktop') || tech.includes('wpf');
    return true;
  });

  return (
    <section id="projects" className="relative py-24 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          subtitle="Portfolio Showcase"
          title="Featured Projects"
          description="Enterprise application software built with ASP.NET Core, React, SQL Server, and modern cloud architectures."
        />

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`relative px-4 py-2 text-xs font-semibold rounded-xl transition-all duration-300 ${
                  isActive
                    ? 'text-white shadow-[0_0_20px_rgba(6,182,212,0.4)]'
                    : 'text-slate-300 hover:text-white bg-slate-900/60 border border-white/10 hover:bg-slate-800'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeCategoryPill"
                    className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl -z-10"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* 6 Premium Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -8 }}
                className="glass-card rounded-3xl overflow-hidden border border-white/10 hover:border-cyan-500/50 transition-all duration-300 shadow-xl group flex flex-col justify-between"
              >
                {/* Project Image Container with Zoom Effect */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter brightness-95 contrast-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-transparent to-transparent opacity-80" />
                  
                  {/* Category Pill Badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md border border-white/10 text-cyan-300 text-xs font-mono font-semibold">
                    {project.categoryLabel}
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-300 text-xs sm:text-sm font-light mt-2 line-clamp-3 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Stack Chips */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-lg bg-slate-900 border border-white/10 text-slate-300 text-[11px] font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2.5 py-1 rounded-lg bg-slate-900/50 border border-white/10 text-cyan-400 text-[11px] font-mono">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Card Action Buttons: Live Demo, GitHub, Case Study */}
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      {project.liveDemo && (
                        <a
                          href={project.liveDemo}
                          target="_blank"
                          rel="noreferrer"
                          className="p-2 rounded-xl bg-slate-900 border border-white/10 text-slate-300 hover:text-white hover:bg-cyan-500/20 hover:border-cyan-500/40 transition-all text-xs font-semibold flex items-center gap-1.5"
                          title="Live Demo"
                        >
                          <ExternalLink size={14} className="text-cyan-400" />
                          <span>Demo</span>
                        </a>
                      )}
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          className="p-2 rounded-xl bg-slate-900 border border-white/10 text-slate-300 hover:text-white hover:bg-purple-500/20 hover:border-purple-500/40 transition-all text-xs font-semibold flex items-center gap-1.5"
                          title="View Code on GitHub"
                        >
                          <GithubIcon size={14} className="text-purple-400" />
                          <span>Code</span>
                        </a>
                      )}
                    </div>

                    <button
                      onClick={() => setSelectedProject(project)}
                      className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-gradient-to-r from-blue-600/30 to-cyan-500/30 hover:from-blue-600 hover:to-cyan-500 text-cyan-300 hover:text-white border border-cyan-500/40 text-xs font-bold transition-all"
                    >
                      <BookOpen size={14} />
                      <span>Case Study</span>
                    </button>
                  </div>

                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* View All Projects Case Studies Action */}
        <div className="mt-12 flex justify-center">
          <button
            onClick={() => setSelectedProject(featuredProjects[0])}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl font-bold text-sm text-white bg-slate-900 border border-cyan-500/40 hover:border-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.2)] hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] transition-all duration-300 hover:-translate-y-0.5"
          >
            <Layers size={16} className="text-cyan-400" />
            <span>View Detailed Architecture Case Studies</span>
            <ArrowUpRight size={16} />
          </button>
        </div>

      </div>

      {/* Case Study Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};
