import { motion } from 'motion/react';
import { Page } from '../types';
import { assetPath } from '../lib/utils';

const SOCIAL_LINKS = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/vaidyagroup.co?igsh=bWl6MWRlYzhzemF5&utm_source=qr',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/vaidya-group-construction-5a2136404?utm_source=share_via&utm_content=profile&utm_medium=member_ios',
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/share/1KFQq4AXrg/?mibextid=wwXIfr',
  },
];

export default function Footer({ setPage }: { setPage: (page: Page) => void }) {
  const phoneHref = 'tel:+918830561188';

  const handleInquireClick = () => {
    if (window.matchMedia('(max-width: 768px)').matches) {
      window.location.href = phoneHref;
      return;
    }

    setPage('contact');
  };

  return (
    <footer className="bg-midnight border-t border-white/5 py-24 px-6 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-12 relative z-10">
        <div className="md:col-span-2">
          <div className="mb-8 pointer-events-none">
            <img 
              src={assetPath('images/logoupdated.png')} 
              alt="Vaidya Group Logo" 
              className="h-14 w-auto object-contain" 
              referrerPolicy="no-referrer"
            />
          </div>
          <p className="text-lg font-light text-white opacity-60 max-w-sm italic mb-10 leading-relaxed">
            Designing sanctuaries around the rhythm of life. A 15-year legacy of engineering trust and architectural excellence.
          </p>
          <div className="flex flex-wrap gap-4">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] uppercase tracking-[0.2em] text-white/40 hover:text-gold transition-colors"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-gold text-xs font-bold uppercase tracking-widest mb-8">Navigation</h4>
          <ul className="space-y-4">
            {[
              { label: 'Collection', value: 'projects' },
              { label: 'Philosophy', value: 'about' },
              { label: 'About Us', value: 'about-us' },
              { label: 'Expertise', value: 'services' },
              { label: 'Real Stories', value: 'testimonials' },
            ].map(link => (
              <li key={link.value}>
                <button 
                  onClick={() => setPage(link.value as Page)}
                  className="text-sm font-light text-white opacity-60 hover:opacity-100 hover:text-gold transition-all"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-gold text-xs font-bold uppercase tracking-widest mb-8">Connect</h4>
          <ul className="space-y-4 text-sm font-light text-white opacity-60 cursor-default break-words">
            <li>Sagar Society, Rudra Colony, Udhyamnagar, Pimpri Colony, Pimpri-Chinchwad, Maharashtra - 411018</li>
            <li>vaidyagroupac@gmail.com</li>
            <li>+91 8830561188</li>
            <li className="pt-4">
               <button 
                onClick={handleInquireClick}
                className="px-8 py-2.5 border border-gold/30 text-gold rounded-full hover:bg-gold hover:text-midnight transition-all text-[10px] font-bold uppercase tracking-widest"
               >
                 Inquire Now
               </button>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between text-[10px] uppercase tracking-widest text-white/20 gap-4 relative z-10">
        <p>&copy; 2026 Vaidya Group Construction. All rights reserved.</p>
        <div className="flex gap-8">
           <button onClick={() => setPage('privacy-policy')} className="cursor-pointer hover:text-white transition-colors">Privacy Policy</button>
           <button onClick={() => setPage('accessibility')} className="cursor-pointer hover:text-white transition-colors">Accessibility</button>
        </div>
      </div>
    </footer>
  );
}
