import { useEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { gsap } from 'gsap';
import Navbar from './components/Navbar.jsx';
import LoadingScreen from './components/LoadingScreen.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Timeline from './components/Timeline.jsx';
import Contact from './components/Contact.jsx';
import SmartBot from './components/SmartBot.jsx';
import { navItems } from './data/portfolio.js';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('home');
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');
  const navigationLock = useRef(null);
  const appRoot = useRef(null);
  const activeSectionRef = useRef('home');

  useEffect(() => {
    document.documentElement.classList.toggle('light', theme === 'light');
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 1500);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!appRoot.current) return;
    const sectionIndex = Math.max(navItems.findIndex((item) => item.id === activeSection), 0);
    const scrollTone = sectionIndex / Math.max(navItems.length - 1, 1);
    const scrollHue = sectionIndex * 44;
    const style = appRoot.current.style;
    style.setProperty('--scroll-hue', scrollHue);
    style.setProperty('--scroll-progress', scrollTone);
    style.setProperty('--tone-a', `hsl(${188 + scrollHue} 100% 58% / 0.27)`);
    style.setProperty('--tone-b', `hsl(${318 + scrollHue} 100% 64% / 0.22)`);
    style.setProperty('--tone-c', `hsl(${44 + scrollHue} 100% 66% / 0.16)`);
    style.setProperty('--tone-grid-a', `hsl(${188 + scrollHue} 100% 58% / 0.09)`);
    style.setProperty('--tone-grid-b', `hsl(${268 + scrollHue} 100% 68% / 0.08)`);
    style.setProperty('--tone-bg', `hsl(${232 + scrollHue * 0.24} 62% 8%)`);
  }, [activeSection]);

  useEffect(() => {
    let frame = 0;
    const syncActiveSection = () => {
      frame = 0;
      if (navigationLock.current && Date.now() < navigationLock.current.until) {
        if (activeSectionRef.current !== navigationLock.current.id) {
          activeSectionRef.current = navigationLock.current.id;
          setActiveSection(navigationLock.current.id);
        }
        return;
      }
      navigationLock.current = null;
      const checkpoint = window.scrollY + 130;
      const current = navItems.reduce((active, item) => {
        const section = document.getElementById(item.id);
        if (!section || section.offsetTop > checkpoint) return active;
        return item.id;
      }, 'home');
      if (activeSectionRef.current !== current) {
        activeSectionRef.current = current;
        setActiveSection(current);
      }
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(syncActiveSection);
    };

    syncActiveSection();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  const handleSectionChange = (id) => {
    navigationLock.current = { id, until: Date.now() + 1100 };
    activeSectionRef.current = id;
    setActiveSection(id);
  };

  useEffect(() => {
    if (!loading) {
      gsap.fromTo(
        '.reveal-on-load',
        { y: 34, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.1, duration: 0.85, ease: 'power3.out' }
      );
    }
  }, [loading]);

  const themeLabel = useMemo(() => (theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'), [theme]);

  return (
    <div
      ref={appRoot}
      className="theme-root noise min-h-screen overflow-hidden transition-colors duration-500"
    >
      <AnimatePresence>{loading && <LoadingScreen />}</AnimatePresence>
      <div className="scroll-aurora fixed inset-0 opacity-95" />
      <div className="cyber-grid fixed inset-0 opacity-70" />
      <SmartBot />
      <div className="relative z-10">
        <Navbar
          activeSection={activeSection}
          theme={theme}
          themeLabel={themeLabel}
          onSectionChange={handleSectionChange}
          onToggleTheme={() => setTheme((current) => (current === 'dark' ? 'light' : 'dark'))}
        />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Timeline />
          <Contact />
        </main>
      </div>
    </div>
  );
}
