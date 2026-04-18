import { motion } from 'motion/react';
import { Quote } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

export default function Testimonials() {
  return (
    <div className="bg-ivory min-h-screen pt-40 pb-32 px-6 overflow-hidden text-primary">
      <div className="max-w-7xl mx-auto">
        <header className="mb-32 text-center relative">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-gold text-xs font-bold uppercase tracking-[0.8em] mb-6 relative z-10"
          >
            Verification
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl md:text-[6rem] font-display font-light normal-case relative z-10 leading-none text-primary tracking-tight"
          >
            Real <span className="text-muted-green italic">Stories</span>
          </motion.h1>
        </header>

        <div className="space-y-24 md:space-y-60">
          {TESTIMONIALS.map((testimonial, idx) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 md:gap-20 lg:gap-32 items-center`}
            >
              {/* Image / Portrait Placeholder */}
              <div className="flex-1 w-full relative">
                 <div className="aspect-[4/5] overflow-hidden bg-ivory relative group shadow-2xl transition-all duration-700 hover:shadow-xl">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-full h-full object-cover brightness-[1.05] transition-all duration-1500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-transparent to-transparent group-hover:from-white/60 transition-all duration-1000" />
                    <div className="absolute bottom-6 left-6 md:bottom-12 md:left-12 right-6 md:right-auto">
                       <h3 className="text-3xl md:text-4xl font-display text-primary mb-2 tracking-tight">{testimonial.name}</h3>
                       <p className="text-[10px] uppercase tracking-[0.4em] text-gold font-bold italic">{testimonial.role}</p>
                    </div>
                 </div>
                 <div className="absolute -top-16 -left-16 hidden lg:block pointer-events-none">
                    <Quote className="text-gold opacity-[0.05]" size={240} />
                 </div>
              </div>

              {/* Case Study Data */}
              <div className="flex-1 space-y-10 md:space-y-16">
                 <div className="space-y-8">
                    <h4 className="text-muted-green text-xs font-bold uppercase tracking-[0.4em] border-b-2 border-card-border/50 pb-4 inline-block">The Trajectory</h4>
                    <div className="space-y-12">
                       <div className="relative pl-12 border-l border-card-border group">
                          <span className="absolute left-0 top-0 text-[10px] font-bold text-secondary/30 group-hover:text-gold transition-colors duration-500">01</span>
                          <h5 className="text-[11px] uppercase tracking-[0.4em] font-bold mb-3 text-secondary italic">Before the Shift</h5>
                          <p className="text-xl font-light italic text-secondary leading-relaxed group-hover:text-primary transition-colors duration-500">"{testimonial.story.before}"</p>
                       </div>
                       <div className="relative pl-12 border-l-2 border-gold group">
                          <span className="absolute left-0 top-0 text-[10px] font-bold text-gold/60">02</span>
                          <h5 className="text-[11px] uppercase tracking-[0.4em] font-bold mb-3 text-gold italic">The Decision</h5>
                          <p className="text-xl font-light text-primary leading-relaxed">"{testimonial.story.decision}"</p>
                       </div>
                       <div className="relative pl-12 border-l-2 border-muted-green group">
                          <span className="absolute left-0 top-0 text-[10px] font-bold text-muted-green">03</span>
                          <h5 className="text-[11px] uppercase tracking-[0.4em] font-bold mb-3 text-muted-green italic">Aftermath</h5>
                          <p className="text-2xl font-light leading-relaxed italic text-gold group-hover:tracking-tighter transition-all duration-700">"{testimonial.story.after}"</p>
                       </div>
                    </div>
                 </div>

                 <div className="bg-white p-12 border border-card-border relative italic shadow-xl">
                    <div className="absolute top-0 left-0 w-1 h-full bg-gold" />
                    <p className="text-2xl md:text-3xl leading-relaxed text-primary/80 font-light">
                       "{testimonial.quote}"
                    </p>
                 </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* JOIN THE COMMUNITY CTA — Beige Finish */}
        <section className="mt-24 md:mt-60 relative overflow-hidden bg-white py-20 md:py-32 px-6 md:px-12 group shadow-soft">
            <div className="relative z-10 flex flex-col items-center text-center space-y-16">
                <div className="space-y-8">
                   <h2 className="text-5xl md:text-[7rem] text-primary font-display leading-[1] tracking-tight">Join the <span className="text-gold italic font-normal">500+</span> Legacy</h2>
                   <p className="text-xl font-light text-secondary max-w-2xl mx-auto italic">
                      The cooperative model isn't just about structural engineering. It's about engineering human connection and collective legacy.
                   </p>
                </div>
                <div className="flex flex-col md:flex-row justify-center gap-8">
                   <button className="cta-button shadow-2xl">Start Your Journey</button>
                   <button className="cta-button-outline">Explore the Model</button>
                </div>
            </div>
            <div className="absolute -bottom-20 -right-20 text-[15rem] font-bold text-gold/5 pointer-events-none group-hover:rotate-12 transition-transform duration-1000 select-none">RESIDENT</div>
        </section>
      </div>
    </div>

  );
}
