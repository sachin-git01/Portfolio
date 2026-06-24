import { motion } from 'framer-motion';
import { FiArrowRight, FiSend } from 'react-icons/fi';
import { heroStats, socials } from '../data/portfolio.js';
import HeroScene from './HeroScene.jsx';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-24 sm:pt-28">
      <div className="scroll-hero-wash absolute inset-0 -z-10" />
      <div className="scroll-hero-orb absolute left-1/2 top-20 -z-10 h-[520px] w-[520px] -translate-x-1/2 rounded-full blur-[100px] lg:left-[68%]" />
      <div className="section-shell grid min-h-[calc(100vh-6rem)] items-center gap-6 pb-12 lg:min-h-[calc(100vh-7rem)] lg:grid-cols-[0.86fr_1.14fr]">
        <div className="reveal-on-load max-w-2xl">
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
          <div className="mt-7 grid max-w-xl grid-cols-3 gap-2 sm:mt-9 sm:gap-3">
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
          className="reveal-on-load relative mx-auto h-[360px] min-h-[330px] w-full max-w-[520px] overflow-visible rounded-full sm:h-[470px] lg:h-[660px] lg:max-w-[720px]"
        >
          <div className="absolute inset-4 rounded-full bg-[radial-gradient(circle,rgba(184,251,255,0.22),rgba(155,92,255,0.12)_38%,transparent_68%)] blur-2xl" />
          <div className="absolute left-1/2 top-1/2 h-[76%] w-[76%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan/20 shadow-[0_0_90px_rgba(0,229,255,0.24),0_0_160px_rgba(255,79,136,0.18)]" />
          <HeroScene />
          <div className="pointer-events-none absolute left-1 top-24 hidden rounded-3xl border border-cyan/30 bg-[#071026]/55 px-5 py-4 shadow-neon backdrop-blur-xl md:block">
            <p className="font-display text-xl font-bold">Full Stack</p>
            <p className="text-sm text-cyan">Developer</p>
          </div>
          <div className="pointer-events-none absolute bottom-24 right-0 hidden rounded-3xl border border-coral/30 bg-[#160820]/60 px-5 py-4 shadow-coral backdrop-blur-xl md:block">
            <p className="font-display text-xl font-bold">AI + MERN</p>
            <p className="text-sm text-coral">Builder</p>
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
