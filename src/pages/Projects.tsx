import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { Project, ProjectCategory } from '../types';
import { PROJECTS } from '../constants';

interface ProjectsProps {
  onProjectClick: (id: string) => void;
}

export default function Projects({ onProjectClick }: ProjectsProps) {
  const [filter, setFilter] = useState<ProjectCategory | 'All'>('All');

  const filteredProjects = PROJECTS.filter(p => filter === 'All' || p.category.includes(filter));

  const filters: { label: string; value: ProjectCategory | 'All' }[] = [
    { label: 'Everything', value: 'All' },
    { label: 'For Living', value: 'Living' },
    { label: 'For Investment', value: 'Investment' },
    { label: 'For Future Growth', value: 'Future Growth' },
  ];

  return (
    <div className="min-h-screen bg-ivory pt-40 pb-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <header className="mb-16 md:mb-24 text-center md:text-left">
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-gold text-xs font-bold uppercase tracking-[0.6em] mb-4"
          >
            Property Collection
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl md:text-[6rem] font-display font-light leading-[0.9] text-primary"
          >
            Our Project <br /> <span className="text-gold italic">Portfolio</span>
          </motion.h1>
        </header>

        {/* Dynamic Filter */}
        <div className="flex flex-nowrap md:flex-wrap gap-4 md:gap-12 mb-16 md:mb-20 border-b border-card-border pb-8 overflow-x-auto no-scrollbar whitespace-nowrap">
          {filters.map((f, idx) => (
            <motion.button
              key={f.value}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + idx * 0.05 }}
              onClick={() => setFilter(f.value)}
              className={`text-[10px] md:text-xs uppercase tracking-[0.4em] font-bold transition-all relative py-2 ${
                filter === f.value ? 'text-gold' : 'text-secondary hover:text-primary'
              }`}
            >
              {f.label}
              {filter === f.value && (
                <motion.div 
                  layoutId="filterLine"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold"
                />
              )}
            </motion.button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => {
              const isProminent = project.id === 'sagar';
              return (
                <motion.div
                  layout
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  onClick={() => onProjectClick(project.id)}
                  className={`group relative overflow-hidden bg-white shadow-sm border border-card-border cursor-pointer transition-all duration-700 hover:shadow-xl ${isProminent ? 'md:col-span-2' : ''}`}
                >
                  <div className={`relative h-full w-full overflow-hidden ${isProminent ? 'aspect-[2/1] md:aspect-[2.5/1]' : 'aspect-[3/2]'}`}>
                    <motion.img 
                      src={project.image} 
                      alt={project.title}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 1.5 }}
                      className={`w-full h-full filter brightness-[0.98] group-hover:brightness-100 transition-all duration-1000 ${isProminent ? 'object-contain' : 'object-cover'}`}
                      referrerPolicy="no-referrer"
                    />
                    
                    {/* Hover Info */}
                    <div className="absolute inset-0 hidden md:flex p-12 flex-col justify-end translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 bg-gradient-to-t from-white via-white/40 to-transparent">
                      <span className="text-gold text-[10px] uppercase tracking-[0.5em] block mb-2 font-bold">{project.tagline}</span>
                      <h3 className="text-4xl md:text-5xl font-display mb-2 text-primary leading-tight">{project.title}</h3>
                      {project.configuration && (
                         <p className="text-[10px] text-muted-green font-bold uppercase tracking-[0.2em] mb-4">{project.configuration}</p>
                      )}
                      <div className="flex items-center gap-6">
                        <span className="text-[10px] uppercase tracking-[0.3em] text-secondary font-medium">{project.location}</span>
                        <div className="w-8 h-[1px] bg-gold/30" />
                        <span className="text-[10px] uppercase tracking-[0.3em] text-muted-green font-bold">{project.status}</span>
                      </div>
                    </div>

                    {/* Default Label (Mobile) */}
                    <div className="absolute bottom-4 left-4 right-4 md:left-8 md:right-auto md:bottom-8 md:group-hover:opacity-0 transition-opacity p-4 md:p-6 bg-white/90 backdrop-blur-md rounded-none border border-card-border shadow-sm">
                      <h3 className="text-lg md:text-xl font-display uppercase tracking-[0.15em] md:tracking-[0.2em] text-primary break-words">{project.title}</h3>
                      <p className="text-[9px] uppercase tracking-[0.2em] text-gold mt-2 font-bold">Inquire Details</p>
                    </div>

                    <div className="absolute top-4 left-4 md:top-8 md:left-8 flex flex-col gap-2 items-start z-20">
                      {project.status === 'Completed' && (
                        <span className="bg-[#C5A059] text-white text-[9px] px-5 py-2 font-bold uppercase tracking-[0.2em] rounded-none shadow-lg border border-[#C5A059]">
                          SOLD OUT
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </div>

  );
}
