import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Philosophy from './pages/Philosophy';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import AccessibilityStatement from './pages/AccessibilityStatement';
import { Page } from './types';
import { assetPath } from './lib/utils';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [projectId, setProjectId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const navigateToProject = (id: string) => {
    setProjectId(id);
    setCurrentPage('project-detail');
  };

  useEffect(() => {
    // Simulate premium loading phase
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Scroll to top on page change
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <Home setPage={setCurrentPage} onProjectClick={navigateToProject} />;
      case 'projects': return <Projects onProjectClick={navigateToProject} />;
      case 'project-detail': return <ProjectDetail setPage={setCurrentPage} id={projectId || 'sagar'} />;
      case 'about': return <Philosophy />;
      case 'about-us': return <AboutUs setPage={setCurrentPage} />;
      case 'services': return <Services />;
      case 'testimonials': return <Testimonials />;
      case 'contact': return <Contact />;
      case 'privacy-policy': return <PrivacyPolicy />;
      case 'accessibility': return <AccessibilityStatement />;
      default: return <Home setPage={setCurrentPage} onProjectClick={navigateToProject} />;
    }
  };

  return (
    <div className="relative font-sans selection:bg-gold selection:text-white overflow-x-hidden">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div
            key="loader"
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] bg-ivory flex flex-col items-center justify-center"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center"
            >
              <div className="flex flex-col items-center mb-12">
                <img 
                  src={assetPath('images/logoupdated.png')} 
                  alt="Vaidya Group Logo" 
                  className="h-32 w-auto object-contain" 
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="w-48 h-[1px] bg-gold/10 relative overflow-hidden">
                <motion.div 
                  initial={{ x: '-100%' }}
                  animate={{ x: '100%' }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 bg-gold"
                />
              </div>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div 
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Navbar currentPage={currentPage} setPage={setCurrentPage} />
            
            <main>
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentPage}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                  {renderPage()}
                </motion.div>
              </AnimatePresence>
            </main>

            <Footer setPage={setCurrentPage} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
