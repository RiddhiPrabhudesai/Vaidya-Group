import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { MousePointer2, ShieldCheck, Users, Building2, ArrowRight, Waves, Gem, Wind, LayoutGrid, CheckCircle2 } from 'lucide-react';
import { Page } from '../types';
import { PROJECTS } from '../constants';
import { assetPath } from '../lib/utils';

interface HomeProps {
  setPage: (page: Page) => void;
  onProjectClick: (id: string) => void;
}

export default function Home({ setPage, onProjectClick }: HomeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroScale = useTransform(scrollYProgress, [0, 0.1], [1, 1.1]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  // Stat Reveals
  const stats = [
    { label: 'Homes Successfully Delivered', value: 70, suffix: '+', icon: <Building2 className="text-teal" /> },
    { label: 'Families Who Trust Us', value: 500, suffix: '+', icon: <Users className="text-green" /> },
    { label: 'Years of Building Trust', value: 15, suffix: '+', icon: <Gem className="text-gold" /> },
  ];

  return (
    <div ref={containerRef} className="relative bg-ivory overflow-x-hidden text-primary">
      {/* 1. LIGHT REFINED HERO */}
      <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-white">
        <motion.div 
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="absolute inset-0 z-0 bg-midnight"
        >
          <img 
            src={assetPath('images/herobanner.jpg')} 
            alt="Vaidya Group - Architectural Excellence" 
            className="w-full h-full object-cover object-center filter brightness-100 contrast-[1.05]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-midnight/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-midnight/70 via-transparent to-midnight/50" />
        </motion.div>
        
        <div className="relative z-10 text-center px-6 max-w-6xl w-full pt-16 sm:pt-20 md:pt-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-4xl md:text-[7rem] font-display font-light leading-[0.95] mb-10 text-white drop-shadow-2xl">
              Yours to call <br /> <span className="text-white italic font-normal text-5xl md:text-[8rem] drop-shadow-[0_0_15px_rgba(197,160,89,0.5)]">Home.</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 font-medium max-w-2xl mx-auto mb-10 italic drop-shadow-lg">
              Premium homes designed around collective trust and architectural transparency.
            </p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="mt-6 mb-8 flex flex-col md:flex-row items-center justify-center gap-4 max-w-3xl mx-auto"
            >
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-gold/40 bg-gold/5 backdrop-blur-sm transition-all hover:bg-gold/10 group cursor-default max-w-full">
                <ShieldCheck size={16} className="text-gold" />
                <div className="flex flex-col items-start text-left">
                  <span className="text-[12px] md:text-[13px] font-medium text-white tracking-wide">BAI Registered</span>
                  <span className="text-[9px] text-white/50 uppercase tracking-[0.15em] font-semibold leading-none mt-1">Builders Association of India</span>
                </div>
              </div>

              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-gold/40 bg-gold/5 backdrop-blur-sm transition-all hover:bg-gold/10 group cursor-default max-w-full">
                <CheckCircle2 size={16} className="text-gold" />
                <div className="flex flex-col items-start text-left">
                  <span className="text-[12px] md:text-[13px] font-medium text-white tracking-wide">MahaRERA Registered</span>
                  <span className="text-[9px] text-white/50 uppercase tracking-[0.15em] font-semibold leading-none mt-1">Real Estate Regulatory Authority</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10"
          >
             <button onClick={() => setPage('projects')} className="cta-button shadow-sm">
                View Collection
             </button>
             <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-[10px] uppercase tracking-[0.3em] font-bold text-white/70 text-center">
                <span className="flex items-center gap-2"><Waves size={14} className="text-gold" /> Trust Driven</span>
                <span className="flex items-center gap-2"><ShieldCheck size={14} className="text-white/90" /> Financially Safe</span>
             </div>
          </motion.div>
          

        </div>
      </section>

      {/* 2. PHILOSOPHY — Warm Ivory Background */}
      <section className="relative py-40 bg-ivory text-primary overflow-hidden">
        {/* Soft merge with hero */}
        <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-white to-ivory" />
        
         <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center md:text-left"
            >
               <span className="text-muted-green text-xs font-bold uppercase tracking-[0.4em] mb-6 block">Our Values</span>
               <h2 className="text-4xl md:text-6xl mb-10 leading-tight tracking-tight">Building Better <br /> <span className="text-gold italic">Communities</span></h2>
               <p className="text-xl font-light text-secondary leading-relaxed mb-12 italic">
                  We reject the standard developer chaos. By adopting a resident-first cooperative model, we ensure every decision is made for your living comfort, not for a profit margin.
               </p>
               <button onClick={() => setPage('about')} className="cta-button-outline">
                  Our Philosophy
               </button>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
               <div className="absolute inset-0 bg-gold/5 blur-[100px] -z-10 rounded-full" />
               <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="premium-card p-12 flex flex-col items-center justify-center text-center group"
               >
                  <Gem size={40} className="text-gold mb-6 group-hover:scale-110 transition-transform duration-500" />
                  <h4 className="font-display font-bold text-xl mb-2 text-primary">Luxury</h4>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-secondary font-bold">Uncompromising Craft</p>
               </motion.div>
               <motion.div 
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="premium-card p-12 flex flex-col items-center justify-center text-center group shadow-xl transform md:translate-y-12"
               >
                  <ShieldCheck size={40} className="text-gold mb-6 group-hover:scale-110 transition-transform duration-500" />
                  <h4 className="font-display font-bold text-xl mb-2 text-primary">Security</h4>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-secondary font-bold">Complete Transparency</p>
               </motion.div>
            </div>
         </div>
      </section>

      {/* 3. COLLECTION — White Background */}
      <section className="py-40 bg-white text-primary px-6 relative">
        <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-ivory to-white" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-20 md:mb-32 gap-8 text-center md:text-left">
            <div className="max-w-2xl">
              <span className="text-leaf-green text-xs font-bold uppercase tracking-[0.4em] mb-4 block">Our Portfolio</span>
              <h2 className="text-4xl md:text-7xl mb-0 leading-none">Featured <br /> <span className="text-muted-green italic">Properties</span></h2>
            </div>
            <motion.button
              whileHover={{ x: 10 }}
              onClick={() => setPage('projects')}
              className="flex items-center gap-4 text-gold font-bold uppercase tracking-[0.4em] text-xs group justify-center"
            >
              Examine Collection <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </motion.button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {PROJECTS.slice(0, 3).map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                onClick={() => onProjectClick(project.id)}
                className="premium-card group cursor-pointer overflow-hidden rounded-none"
              >
                <div className="relative aspect-[3/2] overflow-hidden">
                  <motion.img 
                    src={project.image} 
                    alt={project.title}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className={`w-full h-full filter brightness-[0.95] group-hover:brightness-100 transition-all duration-1000 ${project.id === 'sagar' ? 'object-contain' : 'object-cover'}`}
                    referrerPolicy="no-referrer"
                  />
                    <div className="absolute top-8 left-8 flex flex-col gap-2 items-start">
                      <span className="bg-white/90 backdrop-blur text-primary text-[9px] px-5 py-2 font-bold uppercase tracking-[0.2em] rounded-none shadow-sm border border-card-border/50">
                        {project.status}
                      </span>
                      {project.status === 'Completed' && (
                        <span className="bg-[#C5A059] text-white text-[9px] px-5 py-2 font-bold uppercase tracking-[0.2em] rounded-none shadow-lg border border-[#C5A059]">
                          SOLD OUT
                        </span>
                      )}
                    </div>
                </div>
                <div className="p-10 space-y-4">
                   <div className="space-y-1">
                      <h3 className="text-3xl font-display group-hover:text-gold transition-colors tracking-tight">{project.title}</h3>
                      {project.configuration && (
                        <p className="text-[10px] text-muted-green font-bold uppercase tracking-[0.1em]">{project.configuration}</p>
                      )}
                   </div>
                   <p className="text-[11px] uppercase tracking-[0.3em] text-secondary font-bold italic line-clamp-1">{project.deliveredLine || project.tagline}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PRACTICAL THINKING — Depth Beige Background */}
      <section className="relative bg-gradient-to-b from-[#F7F3EE] to-[#EFE7DC] py-24 md:py-32 px-6 overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-white to-[#F7F3EE]" />
         <div className="max-w-7xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
               <span className="text-[14px] text-[#8A7F73] font-medium block mb-8">Designed for how you actually live.</span>
               <h2 className="text-4xl md:text-7xl text-primary font-display mb-10 leading-tight tracking-tight">Built for <br /> <span className="italic text-gold">Real Living</span></h2>
               <p className="text-xl md:text-2xl font-light text-secondary leading-relaxed italic max-w-2xl mx-auto">
                  At Vaidya Group, we focus on building homes that work for real life — comfortable, practical, and built to last in everyday conditions.
               </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-24 items-start">
               {[
                 { 
                   label: 'Comfort Through Natural Ventilation', 
                   desc: 'Homes designed for airflow, light, and everyday comfort',
                   icon: <Wind size={24} className="text-[#C5A059]" />
                 },
                 { 
                   label: 'Smart, Practical Layouts', 
                   desc: 'No wasted space — every square foot is purposeful',
                   icon: <LayoutGrid size={24} className="text-[#C5A059]" />
                 },
                 { 
                   label: 'Built to Last for Years', 
                   desc: 'Construction focused on durability and long-term reliability',
                   icon: <ShieldCheck size={24} className="text-[#C5A059]" />
                 },
               ].map((item, i) => (
                 <div key={i} className="flex flex-col items-center text-center">
                    <div className="mb-3">{item.icon}</div>
                    <h4 className="text-[20px] md:text-[22px] font-display font-semibold text-[#3F5E4B] mb-3 leading-snug tracking-normal">
                      {item.label}
                    </h4>
                    <p className="text-sm md:text-[15px] text-[#5F5F5F] leading-[1.7] max-w-[280px]">
                      {item.desc}
                    </p>
                 </div>
               ))}
            </div>

            <div className="w-[70%] h-px bg-[#C5A059]/20 mx-auto mt-20" />
         </div>
      </section>

      {/* 5. STATS — Premium Depth Background */}
      <section className="py-[100px] md:py-[120px] bg-gradient-to-b from-[#F7F3EE] to-[#EFE7DC] px-6 relative">
        <div className="max-w-6xl mx-auto relative z-10">
          <span className="text-[14px] text-[#8A7F73] text-center block mb-12">A track record built over years, not claims.</span>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 text-center items-center">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className={`p-12 border-card-border/10 flex flex-col items-center ${
                  idx === 1 ? 'md:border-x border-black/5' : ''
                }`}
              >
                <h4 className="text-5xl md:text-7xl font-semibold bg-clip-text text-transparent bg-gradient-to-b from-[#3F5E4B] to-[#2E4738] mb-4 leading-none">
                  {stat.value}{stat.suffix}
                </h4>
                <p className="text-[13px] md:text-[14px] tracking-[0.5px] text-[#6E6E6E] font-medium mt-4">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FINAL CTA — Warm Ivory Finish */}
      <section className="relative py-40 flex items-center justify-center px-6 bg-ivory">
         <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-white to-ivory" />
         <div className="text-center space-y-12 md:space-y-16 max-w-4xl relative z-10">
            <h2 className="text-5xl md:text-[7rem] text-primary font-display leading-[1] tracking-tight">Your Legacy <br /> <span className="text-gold italic">Begins Here</span></h2>
            <p className="text-xl font-light text-secondary italic max-w-2xl mx-auto">
               Secure your place in a community that values stability, serenity, and architectural vision.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-8 pt-8 px-4">
               <button onClick={() => setPage('contact')} className="cta-button shadow-2xl">
                  Connect with Us
               </button>
               <button onClick={() => setPage('projects')} className="cta-button-outline">
                  Browse Properties
               </button>
            </div>
         </div>
      </section>
    </div>

  );
}
