import { motion, useScroll, useTransform } from 'motion/react';
import { useRef, useMemo } from 'react';
import { MapPin, Clock, ArrowLeft, Maximize2, ShieldCheck, Star } from 'lucide-react';
import { Page } from '../types';
import { PROJECTS } from '../constants';
import { assetPath } from '../lib/utils';

interface ProjectDetailProps {
  setPage: (page: Page) => void;
  id: string;
}

export default function ProjectDetail({ setPage, id }: ProjectDetailProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });

  const project = useMemo(() => PROJECTS.find(p => p.id === id) || PROJECTS[0], [id]);

  const introScale = useTransform(scrollYProgress, [0, 0.1], [1, 1.2]);
  const introOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);

  const timelineItems = project.timeline || [
    { time: '1 min', place: 'HA Ground', desc: 'Step into green expanses' },
    { time: '2 mins', place: 'Tata Motors', desc: 'Proximity to precision' },
    { time: '5 mins', place: 'DY Patil', desc: 'Education at your doorstep' },
    { time: '8 mins', place: 'Pimpri Metro', desc: 'Seamless connectivity' },
  ];

  return (
    <div ref={containerRef} className="bg-ivory text-primary">
      {/* 1. REFINED INTRO */}
      <section className="min-h-[80vh] md:h-screen w-full flex items-center justify-center relative overflow-hidden bg-white px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-ivory/50 to-white z-0" />
        <motion.div style={{ scale: introScale, opacity: introOpacity }} className="text-center z-10 max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, letterSpacing: '0.6em' }}
            animate={{ opacity: 1, letterSpacing: '0.2em' }}
            transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-[10rem] font-display font-medium text-gold leading-none tracking-tighter"
          >
            {project.units || '42'}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 0.8, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
            className="text-[10px] md:text-sm uppercase tracking-[0.3em] md:tracking-[0.6em] mt-6 md:mt-8 font-bold text-secondary"
          >
            {project.highlight || 'Exclusive Sanctuary Residences'}
          </motion.p>
        </motion.div>
        
        <div className="absolute inset-x-0 bottom-12 flex justify-center z-10">
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2.5 }}>
            <div className="w-px h-16 bg-gold/20 relative">
               <div className="absolute inset-0 bg-gold/40 animate-pulse" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. THE REVEAL — White Background */}
      <section className="relative min-h-screen py-24 md:py-40 px-6 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 md:gap-24 items-start">
          <div className="flex-1 space-y-12 md:space-y-16 text-center lg:text-left">
            <button onClick={() => setPage('projects')} className="flex items-center justify-center lg:justify-start gap-3 text-secondary text-[10px] uppercase tracking-[0.3em] md:tracking-[0.4em] font-bold group w-full lg:w-auto">
              <ArrowLeft size={16} className="group-hover:-translate-x-2 transition-transform text-gold" /> Back to Collection
            </button>
            <div className="space-y-6">
               <span className="text-gold text-xs font-bold uppercase tracking-[0.4em] block">{project.status === 'Completed' ? 'Delivered Project' : 'Featured Project'}</span>
               <h2 className="text-5xl md:text-[7rem] font-display leading-[0.95] text-primary tracking-tight">
                 {project.title.split(' ')[0]} <br /> 
                 <span className="text-muted-green italic">{project.title.split(' ').slice(1).join(' ')}</span>
               </h2>
               {project.status === 'Completed' && (
                  <div className="inline-block bg-[#C5A059] text-white text-[10px] px-6 py-2 font-bold uppercase tracking-[0.3em] shadow-lg">
                    SOLD OUT
                  </div>
               )}
            </div>
            <p className="text-lg md:text-xl font-light text-secondary leading-relaxed max-w-xl italic border-l-0 lg:border-l-4 border-gold/10 pl-0 lg:pl-10 mx-auto lg:mx-0">
              "{project.description}"
            </p>
            {project.id === 'sagar' && (
              <div>
                <a
                  href={assetPath('files/sagarsocietybrochure.pdf')}
                  download="sagarsocietybrochure.pdf"
                  className="inline-flex items-center justify-center px-8 md:px-10 py-4 bg-midnight text-white rounded-none hover:bg-gold hover:text-midnight transition-all text-[10px] font-bold uppercase tracking-[0.3em] md:tracking-[0.4em] shadow-xl w-full sm:w-auto"
                >
                  Download Brochure
                </a>
              </div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
              <div className="premium-card p-10 bg-ivory">
                <span className="text-muted-green text-5xl font-display font-bold block mb-2 tracking-tighter">{project.units}</span>
                <span className="text-[10px] uppercase tracking-[0.3em] text-secondary font-bold">Residences</span>
              </div>
              <div className="premium-card p-10 bg-ivory">
                <span className="text-muted-green text-2xl font-display font-bold block mb-2 tracking-tight">
                  {project.configuration || 'Premium Blueprint'}
                </span>
                <span className="text-[10px] uppercase tracking-[0.3em] text-secondary font-bold">Configuration</span>
              </div>
            </div>
          </div>
          <div className="flex-1 relative aspect-[3/2] w-full lg:sticky lg:top-32">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 1.2 }}
              className="w-full h-full rounded-none overflow-hidden shadow-2xl border border-card-border"
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-contain brightness-[1.05] contrast-[1.05] transition-all duration-1500 bg-white"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. LOCATION SCROLL — Soft Beige */}
      <section className="py-24 md:py-40 bg-beige px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-32">
            <span className="text-gold text-xs font-bold uppercase tracking-[0.5em] mb-8 block">Location Highlights</span>
            <h2 className="text-4xl md:text-7xl mb-4 leading-tight tracking-tight text-primary">At the center of <br /> <span className="text-muted-green italic font-normal">it all</span></h2>
          </div>

          <div className="w-full max-w-5xl mx-auto space-y-16 md:space-y-24 relative">
            <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-gold/15 hidden md:block" />
            
            {timelineItems.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                className={`flex flex-col md:flex-row items-center gap-10 md:gap-16 group text-center md:text-left ${idx % 2 === 0 ? '' : 'md:flex-row-reverse md:text-right'}`}
              >
                <div className="flex-1 order-2 md:order-none">
                  <span className="text-4xl md:text-8xl font-display text-gold group-hover:tracking-tighter transition-all duration-700">{item.time}</span>
                </div>
                <div className="z-10 bg-beige p-4 order-1 md:order-none">
                   <div className="w-3 h-3 rounded-full bg-gold shadow-lg ring-4 ring-gold/10" />
                </div>
                <div className="flex-1 order-3 md:order-none space-y-4">
                  <h4 className="text-2xl md:text-3xl font-display text-primary group-hover:text-muted-green transition-colors tracking-tight">{item.place}</h4>
                  <p className="text-sm md:text-base text-secondary font-light italic">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. MATERIAL EXPERIENCE — White */}
      <section className="py-24 md:py-40 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <header className="text-center mb-32">
            <span className="text-muted-green text-xs font-bold uppercase tracking-[0.4em] mb-4 block">Build Quality</span>
            <h2 className="text-4xl md:text-7xl tracking-tight text-primary">Attention to Detail</h2>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              { title: 'Premium Hardware', desc: 'Solid brass handles designed for weight, durability, and a comfortable grip.', img: assetPath('images/brasshandles.jpg') },
              { title: 'Durable Windows', desc: 'High-quality aluminum frames designed for silent operation and long-lasting performance.', img: assetPath('images/window.jpg') },
              { title: 'Smart Lighting', desc: 'Thoughtfully planned internal lighting designed to match your natural daily routine.', img: assetPath('images/naturallight.jpg') },
            ].map((detail, idx) => (
              <motion.div 
                key={idx} 
                className="group text-center"
                whileHover={{ y: -10 }}
              >
                <div className="aspect-square rounded-full overflow-hidden mb-12 border border-card-border shadow-soft relative mx-auto max-w-[320px]">
                  <motion.img 
                    src={detail.img} 
                    alt={detail.title} 
                    className="w-full h-full object-cover scale-105 group-hover:scale-115 transition-transform duration-1000"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h3 className="text-2xl font-display mb-4 text-primary group-hover:text-gold transition-colors tracking-tight font-bold">{detail.title}</h3>
                <p className="text-sm text-secondary font-medium tracking-wide leading-relaxed px-6 italic">{detail.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION — Ivory Finish */}
      <section className="py-24 md:py-40 bg-ivory text-center px-6 relative overflow-hidden">
        <div className="max-w-4xl mx-auto space-y-10 md:space-y-16">
          <h2 className="text-4xl md:text-[7rem] text-primary leading-[1] font-display tracking-tight">
            {project.status === 'Completed' ? 'Delivered' : 'Limited'} <br /> <span className="text-gold italic">{project.status === 'Completed' ? 'Legacy' : 'Opportunity'}</span>
          </h2>
          <p className="text-xl md:text-2xl text-secondary font-light italic max-w-2xl mx-auto">
            {project.status === 'Completed' 
              ? `Ownership at ${project.title} is now settled. Browse our current collection for future opportunities.`
              : `Ownership at ${project.title} is limited. Get Pricing & Floor Plans to explore your options and resident privileges.`
            }
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-8 pt-8 px-4">
             <button
               onClick={() => setPage('contact')}
               className="cta-button shadow-2xl"
             >
               {project.status === 'Completed' ? 'Check Availability' : 'Get Pricing & Floor Plans'}
             </button>
             <button
               onClick={() => setPage('projects')}
               className="cta-button-outline"
             >
               Browse All Projects
             </button>
          </div>
        </div>
      </section>
    </div>
  );
}
