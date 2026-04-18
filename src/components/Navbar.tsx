import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, MessageCircle, Phone } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Page } from '../types';
import { assetPath, cn } from '../lib/utils';

interface NavbarProps {
  currentPage: Page;
  setPage: (page: Page) => void;
}

export default function Navbar({ currentPage, setPage }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const phoneHref = 'tel:+918830561188';
  const whatsappHref = 'https://wa.me/918830561188';

  const handleInquireClick = () => {
    if (window.matchMedia('(max-width: 768px)').matches) {
      window.location.href = phoneHref;
      return;
    }

    setPage('contact');
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { label: string; value: Page }[] = [
    { label: 'Collection', value: 'projects' },
    { label: 'Philosophy', value: 'about' },
    { label: 'About Us', value: 'about-us' },
    { label: 'Expertise', value: 'services' },
    { label: 'Real Stories', value: 'testimonials' },
    { label: 'Connect', value: 'contact' },
  ];

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 left-0 w-full z-50 transition-all duration-500 py-6 px-6 md:px-12 flex justify-between items-center',
          scrolled ? 'bg-white/90 shadow-sm backdrop-blur-lg py-4 border-b border-card-border' : 'bg-transparent'
        )}
      >
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="cursor-pointer"
          onClick={() => setPage('home')}
        >
          <img 
            src={assetPath('images/logoupdated.png')} 
            alt="Vaidya Group Logo" 
            className="h-12 md:h-14 w-auto object-contain transition-all duration-500"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <motion.button
              key={link.value}
              whileHover={{ scale: 1.05 }}
              onClick={() => setPage(link.value)}
              className={cn(
                'text-xs font-bold uppercase tracking-[0.2em] transition-all hover:text-gold',
                currentPage === link.value 
                  ? 'text-gold' 
                  : (scrolled || currentPage !== 'home' ? 'text-primary' : 'text-white')
              )}
            >
              {link.label}
            </motion.button>
          ))}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleInquireClick}
            className="flex items-center gap-2 px-6 py-2 bg-muted-green hover:bg-muted-green/90 rounded-full transition-all font-bold text-xs uppercase tracking-widest text-white shadow-lg shadow-muted-green/10"
          >
            <Phone size={14} className="text-gold" />
            Inquire
          </motion.button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className={cn(
            "md:hidden transition-colors duration-500",
            scrolled || currentPage !== 'home' ? "text-midnight" : "text-white"
          )} 
          onClick={() => setIsOpen(true)}
        >
          <Menu size={24} />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            className="fixed inset-0 z-[60] bg-ivory flex flex-col p-10 pt-24"
          >
            <button className="absolute top-8 right-8 text-primary" onClick={() => setIsOpen(false)}>
              <X size={32} />
            </button>
            <div className="flex flex-col gap-10">
              {navLinks.map((link) => (
                <button
                  key={link.value}
                  onClick={() => {
                    setPage(link.value);
                    setIsOpen(false);
                  }}
                  className="text-5xl font-display font-medium text-left text-primary hover:text-gold transition-colors block"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating WhatsApp */}
      <motion.a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        className="fixed bottom-8 right-8 z-40 bg-leaf-green p-4 rounded-full shadow-2xl shadow-leaf-green/10 flex items-center justify-center text-white border border-white/10"
      >
        <MessageCircle size={28} />
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-gold rounded-full ring-4 ring-ivory animate-pulse" />
      </motion.a>
    </>
  );
}
