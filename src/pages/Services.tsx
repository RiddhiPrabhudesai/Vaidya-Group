import { motion } from 'motion/react';
import { Layout, Hammer, Users, Briefcase, Ruler, Search } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Layout size={40} />,
      title: 'Architectural Design',
      desc: 'Crafting spaces that breathe and evolve with the families that inhabit them.',
      details: ['Climate-responsive design', 'Spatial optimization', 'Modern aesthetics']
    },
    {
      icon: <Hammer size={40} />,
      title: 'Construction Management',
      desc: 'Precise execution of civil engineering with zero tolerance for structural flaws.',
      details: ['Superior material sourcing', 'Rigorous safety audits', 'On-time delivery benchmarks']
    },
    {
      icon: <Users size={40} />,
      title: 'Cooperative Consulting',
      desc: 'Expert guidance on the legally sound and financially transparent cooperative model.',
      details: ['Project feasibility studies', 'Legal framework setup', 'Transparancy audits']
    },
    {
      icon: <Briefcase size={40} />,
      title: 'Real Estate Strategy',
      desc: 'Helping residents make informed choices for long-term value and living comfort.',
      details: ['Market analysis', 'Investment ROI mapping', 'Location scouting']
    }
  ];

  return (
    <div className="bg-ivory min-h-screen pt-40 pb-32 px-6 overflow-hidden text-primary">
      <div className="max-w-7xl mx-auto">
        <header className="mb-20 md:mb-32 relative text-center md:text-left">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-gold text-xs font-bold uppercase tracking-[0.8em] mb-6 relative z-10"
          >
            Our Capabilities
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl md:text-[6rem] font-display font-light leading-[0.95] normal-case relative z-10 text-primary tracking-tight"
          >
            Structured <br /> <span className="text-muted-green italic">Authority</span>
          </motion.h1>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-card-border shadow-xl ring-1 ring-card-border overflow-hidden">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 md:p-24 group hover:bg-ivory transition-all duration-700 relative overflow-hidden text-center md:text-left"
            >
              <div className="text-gold mb-12 group-hover:scale-110 transition-transform duration-500 origin-left">
                {service.icon}
              </div>
              <h3 className="text-4xl font-display mb-8 group-hover:text-muted-green transition-colors tracking-tight text-primary">{service.title}</h3>
              <p className="text-lg font-light text-secondary leading-relaxed mb-12 max-w-sm italic mx-auto md:mx-0">
                {service.desc}
              </p>
              <ul className="space-y-6">
                {service.details.map((detail, i) => (
                  <li key={i} className="flex items-center justify-center md:justify-start gap-4 text-[11px] uppercase font-bold tracking-[0.3em] text-secondary/60">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold/50 group-hover:bg-gold transition-colors" />
                    {detail}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* BOLD STAT SECTION — Beige Background */}
        <section className="mt-32 md:mt-40 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center bg-beige p-8 md:p-32 rounded-none">
          <div className="space-y-10 md:space-y-12 text-center md:text-left">
            <span className="text-muted-green text-xs font-bold uppercase tracking-[0.4em] block">Technical Foundation</span>
            <h2 className="text-5xl md:text-7xl leading-tight tracking-tight text-primary">The Science of <br /> <span className="text-gold italic">Sanctuary</span></h2>
            <p className="text-xl font-light text-secondary leading-relaxed italic max-w-xl">
              Our authority is forged from 15 years of technical mastery. We do not just build structures; we curate environments that transcend standard housing benchmarks.
            </p>
            <div className="flex flex-col sm:flex-row items-center md:items-start justify-center md:justify-start gap-10 md:gap-20 pt-12 border-t border-card-border">
              <div className="flex flex-col">
                <span className="text-6xl font-display text-gold mb-2 font-bold tracking-tighter">100%</span>
                <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-secondary">Regulatory Trust</span>
              </div>
              <div className="flex flex-col">
                <span className="text-6xl font-display text-gold mb-2 font-bold tracking-tighter">Zero</span>
                <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-secondary">Material Errors</span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
             <div className="premium-card bg-ivory p-12 flex flex-col items-center justify-center text-center group transition-all duration-700 hover:-translate-y-2">
                <Ruler className="text-gold mb-6 group-hover:rotate-45 transition-transform duration-700" size={40} />
                <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-secondary group-hover:text-primary transition-colors">Precision Mapping</span>
             </div>
             <div className="premium-card bg-white p-12 flex flex-col items-center justify-center text-center group md:translate-y-12 shadow-xl transition-all duration-700 hover:-translate-y-2 border-none">
                <Search className="text-muted-green mb-6 group-hover:scale-125 transition-transform duration-700" size={40} />
                <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-muted-green group-hover:text-primary transition-colors">Material Integrity</span>
             </div>
          </div>
        </section>
      </div>
    </div>

  );
}
