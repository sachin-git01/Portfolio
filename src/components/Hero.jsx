import { motion } from 'framer-motion';
import { FiArrowRight, FiSend } from 'react-icons/fi';
import { heroStats, socials } from '../data/portfolio.js';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[100svh] overflow-hidden pt-24 sm:pt-28">
      <div className="scroll-hero-wash absolute inset-0 -z-10" />
      <div className="scroll-hero-orb absolute left-1/2 top-20 -z-10 h-[420px] w-[420px] -translate-x-1/2 rounded-full blur-[90px] md:h-[520px] md:w-[520px] lg:left-[68%]" />
      <div className="hero-layout section-shell grid min-h-[calc(100svh-6rem)] items-center gap-10 pb-12 lg:min-h-[calc(100svh-7rem)] lg:grid-cols-[0.9fr_1.1fr]">
        <div className="hero-copy reveal-on-load max-w-2xl">
          <p className="mb-4 inline-flex max-w-full rounded-full border border-cyan/30 bg-cyan/10 px-3 py-2 text-xs font-bold uppercase tracking-[0.16em] text-cyan sm:mb-5 sm:px-4 sm:text-sm sm:tracking-[0.22em]">
            Future-ready developer portfolio
          </p>
          <h1 className="font-display text-[3.1rem] font-bold leading-[1.02] sm:text-6xl md:text-7xl">
            <span className="block">Sachin</span>
            <span className="gradient-text block">Kumar</span>
          </h1>
          <p className="mt-4 text-lg font-semibold text-white/88 light:text-[#182842] sm:mt-5 sm:text-xl">
            Full Stack Developer | React.js | Node.js | AI Enthusiast
          </p>
          <p className="mt-4 max-w-xl text-sm leading-7 text-white/68 light:text-[#30415f] sm:mt-5 sm:text-base sm:leading-8">
            B.Tech CS-DS student building fast, responsive MERN products with clean APIs, polished interfaces,
            practical AI integration, and a strong DSA foundation.
          </p>
          <div className="mt-7 grid gap-3 sm:flex sm:flex-wrap sm:gap-4">
            <a
              href="#projects"
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan via-plasma to-coral px-6 py-3 font-bold text-white shadow-neon"
            >
              View Projects <FiArrowRight />
            </a>
            <a
              href="#contact"
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-full border border-white/18 bg-white/10 px-6 py-3 font-bold text-white transition hover:border-cyan/60 hover:text-cyan light:border-[#091223]/15 light:bg-white/70 light:text-[#091223]"
            >
              Connect With Me <FiSend />
            </a>
          </div>
          <div className="hero-stats mt-7 grid max-w-xl grid-cols-3 gap-2 sm:mt-9 sm:gap-3">
            {heroStats.map((stat) => (
              <div key={stat.label} className="glass rounded-2xl p-3 sm:p-4">
                <p className="font-display text-xl font-bold text-cyan sm:text-2xl">{stat.value}</p>
                <p className="mt-1 text-[0.65rem] font-semibold uppercase tracking-wide text-white/58 light:text-[#52627e] sm:text-xs">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.35, duration: 1, ease: 'easeOut' }}
          className="hero-showcase reveal-on-load"
        >
          <span className="hero-showcase__aura" aria-hidden="true" />
          <span className="hero-showcase__ring hero-showcase__ring--outer" aria-hidden="true" />
          <span className="hero-showcase__ring hero-showcase__ring--inner" aria-hidden="true" />
          <span className="hero-showcase__spark hero-showcase__spark--one" aria-hidden="true" />
          <span className="hero-showcase__spark hero-showcase__spark--two" aria-hidden="true" />
          <span className="hero-showcase__spark hero-showcase__spark--three" aria-hidden="true" />

          <div className="hero-avatar-card">
            <img src="/assets/sachin-hero-avatar-v2.png" alt="Sachin Kumar anime developer avatar" />
          </div>

          <div className="hero-platform" aria-hidden="true">
            <span />
          </div>

          <div className="hero-chip hero-chip--left">
            <strong>Full Stack</strong>
            <span>React + Node</span>
          </div>
          <div className="hero-chip hero-chip--right">
            <strong>MERN Stack</strong>
            <span>Express APIs</span>
          </div>
          <div className="hero-tech-strip" aria-label="Core technologies">
            <span>MongoDB</span>
            <span>Express</span>
            <span>React</span>
            <span>Node</span>
          </div>
        </motion.div>
      </div>

      <div className="fixed right-4 top-1/2 z-40 hidden -translate-y-1/2 gap-3 rounded-full border border-white/12 bg-white/8 p-2 backdrop-blur-2xl xl:grid">
        {socials.map((item) => {
          const Icon = item.icon;
          return (
            <a
              key={item.label}
              href={item.href}
              title={item.label}
              aria-label={item.label}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              className="focus-ring grid h-11 w-11 place-items-center rounded-full border border-white/12 bg-white/10 text-lg transition hover:-translate-y-1"
              style={{ color: item.color }}
            >
              <Icon />
            </a>
          );
        })}
      </div>
    </section>
  );
}
