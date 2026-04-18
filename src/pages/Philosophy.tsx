import { motion } from 'motion/react';
import { ShieldCheck, Users, TrendingDown, Clock, Building2, Heart } from 'lucide-react';
import { assetPath } from '../lib/utils';

export default function Philosophy() {
  return (
    <div className="bg-ivory overflow-hidden text-primary">
      {/* 1. REFINED HERO QUOTE */}
      <section className="min-h-screen flex items-center justify-center relative px-6 bg-ivory">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none overflow-hidden select-none">
          <div className="text-[12rem] md:text-[25rem] font-display font-bold leading-none text-primary absolute -top-10 -left-10 rotate-12">VAIDYA</div>
          <div className="text-[12rem] md:text-[25rem] font-display font-bold leading-none text-gold absolute bottom-10 -right-10 -rotate-6 opacity-20">GROUP</div>
        </div>
        
        <div className="relative z-10 max-w-5xl px-2">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-gold text-xs font-bold uppercase tracking-[0.8em] mb-16 text-center"
          >
            The Covenant
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-2xl md:text-[4.75rem] font-display font-light text-center leading-[1.05] normal-case italic text-primary"
          >
            “We build like <span className="text-gold font-normal not-italic px-4 border-b-2 border-gold/10">someone</span> will live there. Because we know they will.”
          </motion.h1>
          <div className="mt-16 flex justify-center">
             <div className="section-divider max-w-xs mx-auto" />
          </div>
        </div>
      </section>

      {/* 2. THE HUMAN SIDE (DOCUMENTARY FEEL) */}
      <section className="py-40 px-6 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 md:gap-24">
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2 }}
              className="aspect-[4/5] overflow-hidden shadow-2xl relative group bg-beige"
            >
              {/* Bottom Layer: "Old" Image */}
              <img 
                src="https://picsum.photos/seed/founders/800/1000" 
                alt="Original Story" 
                className="w-full h-full object-cover brightness-105"
                referrerPolicy="no-referrer"
              />
              
              {/* Top Layer: "New" Image with Wipe Animation */}
              <motion.div
                initial={{ clipPath: 'inset(0 0 100% 0)' }}
                animate={{ clipPath: 'inset(0 0 0% 0)' }}
                transition={{ duration: 4, ease: [0.16, 1, 0.3, 1], delay: 0.8 }}
                className="absolute inset-0"
              >
                <img 
                  src={assetPath('SagarSociety.jpg')} 
                  alt="Sagar Society" 
                  className="w-full h-full object-cover brightness-105 group-hover:scale-105 transition-all duration-1500"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              
              <div className="absolute inset-0 bg-muted-green/5 mix-blend-multiply opacity-50 pointer-events-none" />
            </motion.div>
          </div>
          <div className="flex-1 flex flex-col justify-center space-y-12 text-center lg:text-left">
            <div className="space-y-6">
              <span className="text-muted-green text-xs font-bold uppercase tracking-[0.4em] mb-4 block">15+ Years of Evolution</span>
              <h2 className="text-4xl md:text-7xl mb-8 leading-[1.1] tracking-tight">Built on <br /> <span className="text-muted-green italic">Silent Integrity</span></h2>
              <p className="text-xl font-light text-secondary leading-relaxed italic max-w-xl">
                Vaidya Group Construction was born out of a desire for structural truth. We believed there was a more soulful, financially transparent way—the cooperative way.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6 md:gap-12 pt-12 border-t border-card-border">
              <div>
                <h4 className="text-5xl font-display text-muted-green mb-2 tracking-tighter">70+</h4>
                <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-secondary">Completed Works</p>
              </div>
              <div>
                <h4 className="text-5xl font-display text-muted-green mb-2 tracking-tighter">500+</h4>
                <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-secondary">Nurtured Families</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. COOPERATIVE MODEL — Soft Beige Background */}
      <section className="py-40 px-6 bg-beige">
        <div className="max-w-5xl mx-auto">
          <header className="text-center mb-32">
            <span className="text-muted-green text-xs font-bold uppercase tracking-[0.5em] mb-6 block">Structural Divergence</span>
            <h2 className="text-4xl md:text-7xl tracking-tight leading-none text-primary">Shift in <br /> <span className="text-gold italic">Sovereignty</span></h2>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-card-border overflow-hidden shadow-xl ring-1 ring-card-border">
            <div className="p-8 md:p-16 bg-ivory hover:bg-beige transition-colors duration-500">
              <div className="flex items-center gap-6 mb-12">
                <div className="w-12 h-12 rounded-full border border-red-500/20 flex items-center justify-center">
                  <TrendingDown className="text-red-500/50" size={24} />
                </div>
                <h3 className="text-2xl uppercase font-bold tracking-tight text-secondary">Typical Developer</h3>
              </div>
              <ul className="space-y-8 md:space-y-10 opacity-60">
                <li className="flex gap-6 items-start font-light italic text-sm">Marginal profit override living experience</li>
                <li className="flex gap-6 items-start font-light italic text-sm">Opaque costs & structural concessions</li>
                <li className="flex gap-6 items-start font-light italic text-sm">Residents viewed as transactional units</li>
                <li className="flex gap-6 items-start font-light italic text-sm">Limited post-delivery structural support</li>
              </ul>
            </div>
            <div className="p-8 md:p-16 bg-white hover:bg-beige transition-colors duration-500 relative">
              <div className="flex items-center gap-6 mb-12">
                <div className="w-12 h-12 rounded-full bg-muted-green/10 flex items-center justify-center">
                  <Users className="text-muted-green" size={24} />
                </div>
                <h3 className="text-2xl uppercase font-bold tracking-tight text-muted-green">Cooperative Model</h3>
              </div>
              <ul className="space-y-8 md:space-y-10 relative z-10">
                <li className="flex gap-6 items-start font-medium text-sm">
                  <ShieldCheck className="text-gold shrink-0 mt-0.5" size={18} /> 
                  <span>Collective vision drives the blueprint</span>
                </li>
                <li className="flex gap-6 items-start font-medium text-sm">
                  <ShieldCheck className="text-gold shrink-0 mt-0.5" size={18} /> 
                  <span>Absolute transparency in resource use</span>
                </li>
                <li className="flex gap-6 items-start font-medium text-sm">
                  <ShieldCheck className="text-gold shrink-0 mt-0.5" size={18} /> 
                  <span>Engineered by residents for durability</span>
                </li>
                <li className="flex gap-6 items-start font-medium text-sm">
                  <ShieldCheck className="text-gold shrink-0 mt-0.5" size={18} /> 
                  <span>Generational commitment to community</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PROCESS VISUAL FLOW — White Background */}
      <section className="py-40 px-6 bg-white relative">
        <div className="max-w-7xl mx-auto">
          <header className="mb-20 md:mb-32 flex flex-col md:flex-row items-center md:items-end justify-between gap-8 md:gap-12 text-center md:text-left">
            <h2 className="text-4xl md:text-[7rem] leading-none tracking-tight">The <br /> <span className="text-muted-green italic">Standards</span></h2>
            <p className="text-secondary text-sm font-bold uppercase tracking-[0.3em] md:tracking-[0.4em] max-w-sm italic text-center md:text-right">Four pillars of architectural precision and cooperative success.</p>
            </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: <Users />, step: 'I', title: 'Synergy', desc: 'Curating a community of residents with shared long-term values.' },
              { icon: <Building2 />, step: 'II', title: 'Blueprint', desc: 'Crafting spaces that prioritize natural light, air, and human scale.' },
              { icon: <Clock />, step: 'III', title: 'Assembly', desc: 'Painless, surgical precision in every phase of structural build.' },
              { icon: <Heart />, step: 'IV', title: 'Hearth', desc: 'Transitioning from construction site to a thriving co-op home.' },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: idx * 0.15 }}
                className="premium-card p-12 hover:bg-beige transition-all duration-700"
              >
                <div className="text-muted-green/40 mb-12 group-hover:text-gold transition-colors">{item.icon}</div>
                <span className="text-[10px] font-bold uppercase tracking-[0.6em] text-gold mb-6 block opacity-60">{item.step}</span>
                <h4 className="text-3xl font-display mb-6 tracking-tight group-hover:text-muted-green transition-colors">{item.title}</h4>
                <p className="text-sm font-light text-secondary leading-relaxed italic">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
