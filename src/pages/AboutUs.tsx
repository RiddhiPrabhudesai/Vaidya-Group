import { motion } from 'motion/react';
import { Page } from '../types';
import { ShieldCheck, Target, Layers, Users, Building2, CheckCircle2, Trophy, Landmark } from 'lucide-react';
import { assetPath } from '../lib/utils';

interface AboutUsProps {
  setPage: (page: Page) => void;
}

export default function AboutUs({ setPage }: AboutUsProps) {
  return (
    <div className="bg-white overflow-hidden text-primary selection:bg-gold selection:text-white">
      {/* 1. HERO SECTION */}
      <section className="relative pt-60 pb-40 px-6 bg-ivory/30">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h1 className="text-3xl md:text-[5rem] font-display leading-[0.95] tracking-tight text-primary mb-12">
              Built on <span className="text-gold italic">Trust.</span> <br /> Designed for Real Living.
            </h1>
            <p className="text-lg md:text-2xl text-secondary font-light max-w-3xl mx-auto italic leading-relaxed">
              A Pune-based real estate developer delivering thoughtfully planned homes in Satara, focused on practicality, durability, and long-term comfort.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. ABOUT SECTION */}
      <section className="py-32 px-6 bg-white border-y border-card-border/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-gold text-xs font-bold uppercase tracking-[0.6em] mb-4 block">Our Story</span>
            <h2 className="text-4xl md:text-6xl font-display text-primary tracking-tight">About Vaidya Group</h2>
          </div>
          <div className="space-y-10 text-lg md:text-xl font-light text-secondary leading-relaxed italic border-l-4 border-gold/10 pl-6 md:pl-16">
            <p>
              Vaidya Group is a Pune-based real estate developer with a strong presence in Satara, focused on delivering practical and well-planned residential projects.
            </p>
            <p>
              With a foundation built on construction quality, efficient planning, and transparent dealings, the group has earned the trust of homebuyers over the years. Each project is developed with a clear purpose — to create homes that are comfortable, functional, and built for long-term living.
            </p>
            <p>
              By combining professional expertise with a deep understanding of local needs, Vaidya Group delivers homes that balance modern expectations with everyday practicality.
            </p>
          </div>
        </div>
      </section>

      {/* 3. OUR APPROACH */}
      <section className="py-32 px-6 bg-ivory/20">
        <div className="max-w-7xl mx-auto">
          <header className="mb-24 text-center">
            <h2 className="text-4xl md:text-7xl font-display text-primary tracking-tight mb-6">Our Approach</h2>
            <p className="text-gold text-sm font-bold uppercase tracking-[0.4em] italic">"Designed for how you actually live."</p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: <Target className="text-gold" size={32} />, title: "Practical Design", desc: "Homes planned with usability in mind — every space serves a purpose." },
              { icon: <Layers className="text-gold" size={32} />, title: "Quality Construction", desc: "Reliable materials and sound practices ensuring durability." },
              { icon: <ShieldCheck className="text-gold" size={32} />, title: "Transparent Process", desc: "Clear communication and honest commitments at every stage." },
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-12 border border-card-border shadow-sm hover:shadow-xl hover:bg-beige transition-all duration-700"
              >
                <div className="mb-8">{item.icon}</div>
                <h3 className="text-2xl font-display font-medium text-primary mb-6 tracking-tight">{item.title}</h3>
                <p className="text-secondary font-light italic leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. LEADERSHIP */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <header className="mb-24 text-center md:text-left">
            <span className="text-gold text-xs font-bold uppercase tracking-[0.6em] mb-4 block">The Visionaries</span>
            <h2 className="text-4xl md:text-7xl font-display text-primary tracking-tight">Leadership</h2>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32">
            {/* Director 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col gap-10 items-center md:items-start text-center md:text-left"
            >
              <div className="w-full max-w-[280px] aspect-[4/5] bg-[#F5EFE7] rounded-xl overflow-hidden relative group">
                <img 
                  src={assetPath('director1.jpg')} 
                  alt="Prashant Vaidya" 
                  className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="space-y-4">
                <h3 className="text-3xl font-display font-bold text-primary tracking-tight">Prashant Vaidya</h3>
                <p className="text-gold text-xs font-bold uppercase tracking-[0.3em]">Director</p>
                <p className="text-lg font-light text-secondary leading-relaxed italic max-w-lg">
                  A key driving force behind Vaidya Group, Prashant Vaidya brings hands-on experience in construction and execution. His focus lies in maintaining structural integrity, ensuring consistent quality, and delivering projects with precision.
                </p>
              </div>
            </motion.div>

            {/* Director 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col gap-10 items-center md:items-start text-center md:text-left"
            >
              <div className="w-full max-w-[280px] aspect-[4/5] bg-[#F5EFE7] rounded-xl overflow-hidden relative group">
                <img 
                  src={assetPath('director2.jpg')} 
                  alt="Guruprasad Vaidya" 
                  className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="space-y-4">
                <h3 className="text-3xl font-display font-bold text-primary tracking-tight">Guruprasad Vaidya</h3>
                <p className="text-gold text-xs font-bold uppercase tracking-[0.3em]">Director</p>
                <p className="text-lg font-light text-secondary leading-relaxed italic max-w-lg">
                  Guruprasad Vaidya leads planning and coordination, ensuring projects are executed efficiently while aligning with the expectations of modern homebuyers through a transparent and customer-focused approach.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. WHY HOMEBUYERS CHOOSE US */}
      <section className="py-32 px-6 bg-beige/30">
        <div className="max-w-7xl mx-auto">
          <header className="mb-24 text-center">
            <h2 className="text-4xl md:text-7xl font-display text-primary tracking-tight mb-6">Why Homebuyers Choose <br /> <span className="text-gold italic">Vaidya Group</span></h2>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12">
            {[
              { title: "Customer-Centric Approach", desc: "Decisions guided by the needs of the cooperative members." },
              { title: "Timely Delivery", desc: "Commitment to project schedules and move-in dates." },
              { title: "Thoughtful Planning", desc: "Optimized floor plans for natural light and ventilation." },
              { title: "Well-Connected Locations", desc: "Strategically selected areas with proximity to essentials." },
              { title: "Strong Technical Leadership", desc: "Experienced directors overseeing every engineering detail." },
              { title: "Financial Stability", desc: "Secure cooperative model ensuring project completion." },
              { title: "Reliability", desc: "Using high-grade materials for multi-generational durability." },
            ].map((point, idx) => (
              <div key={idx} className="flex gap-6 items-start pb-8 border-b border-card-border/50">
                <CheckCircle2 className="text-gold shrink-0 mt-1" size={20} />
                <div className="space-y-2">
                  <h4 className="text-xl font-display font-bold text-primary tracking-tight">{point.title}</h4>
                  <p className="text-sm font-light text-secondary italic">{point.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. TRACK RECORD */}
      <section className="py-32 px-6 bg-midnight text-white">
        <div className="max-w-7xl mx-auto">
          <header className="mb-24 text-center">
            <h2 className="text-4xl md:text-7xl font-display tracking-tight text-white">Our Track Record</h2>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
            {[
              { val: "70+", label: "Homes Successfully Delivered", icon: <Building2 className="text-gold/40" size={40} /> },
              { val: "500+", label: "Families Who Trust Us", icon: <Users className="text-gold/40" size={40} /> },
              { val: "15+", label: "Years of Building Trust", icon: <Trophy className="text-gold/40" size={40} /> },
            ].map((stat, idx) => (
              <div key={idx} className="text-center group">
                <div className="flex justify-center mb-8 transform transition-transform group-hover:scale-110 duration-700">{stat.icon}</div>
                <div className="text-6xl md:text-[5rem] font-display font-bold text-gold mb-4 tracking-tighter">{stat.val}</div>
                <p className="text-[10px] md:text-xs uppercase tracking-[0.5em] font-bold text-white/60">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CREDIBILITY SECTION */}
      <section className="py-32 px-6 bg-white border-b border-card-border">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-20">
          <div className="flex-1 space-y-8 text-center md:text-left">
            <span className="text-gold text-xs font-bold uppercase tracking-[0.6em] mb-4 block">Compliance First</span>
            <h2 className="text-4xl md:text-6xl font-display text-primary tracking-tight">Credibility & <br /> <span className="text-gold italic">Compliance</span></h2>
            <p className="text-secondary tracking-[0.2em] uppercase text-[10px] font-bold">
              "A commitment to transparency, compliance, and responsible development."
            </p>
          </div>
          <div className="flex-1 grid grid-cols-1 gap-8">
            {[
              { icon: <Landmark size={18} />, text: "Registered with Builders Association of India" },
              { icon: <ShieldCheck size={18} />, text: "Registered under MahaRERA" },
              { icon: <Building2 size={18} />, text: "Pune-based developer with regional presence" },
              { icon: <Users size={18} />, text: "Delivered multiple residential communities" },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-6 p-6 bg-ivory/30 border border-card-border/50">
                <div className="text-gold">{item.icon}</div>
                <span className="text-sm font-medium text-primary tracking-wide">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CLOSING CTA */}
      <section className="py-32 px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-12">
          <h2 className="text-4xl md:text-[6rem] font-display text-primary leading-[0.95] tracking-tight">
            Find a Home That <br /> <span className="text-gold italic">Works for You</span>
          </h2>
          <p className="text-xl md:text-2xl text-secondary font-light max-w-2xl mx-auto italic leading-relaxed">
            Explore thoughtfully designed homes built with practical planning and long-term comfort.
          </p>
          <div className="pt-8">
            <button
              onClick={() => setPage('projects')}
              className="px-12 py-5 bg-midnight hover:bg-gold text-white hover:text-midnight transition-all duration-500 rounded-none text-xs font-bold uppercase tracking-[0.5em] shadow-2xl"
            >
              View Projects
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
