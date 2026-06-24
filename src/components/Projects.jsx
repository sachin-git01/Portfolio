import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FiCode, FiCornerUpLeft } from 'react-icons/fi';
import { miniProjects, projects } from '../data/portfolio.js';
import SectionHeader from './SectionHeader.jsx';

function FlipProjectCard({ project, index, compact = false, className = '' }) {
  const [flipped, setFlipped] = useState(false);
  const miniContentMotion = {
    initial: { opacity: 0, y: 12, scale: 0.98, filter: 'blur(4px)' },
    animate: { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' },
    exit: { opacity: 0, y: -12, scale: 0.98, filter: 'blur(4px)' },
    transition: { duration: 0.24, ease: 'easeOut' }
  };

  if (compact) {
    return (
      <motion.article
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.22 }}
        transition={{ delay: index * 0.045, duration: 0.5 }}
        className="mini-project-card min-h-[286px]"
      >
        <button
          type="button"
          aria-pressed={flipped}
          aria-label={`${project.title} details`}
          onClick={() => setFlipped((value) => !value)}
          className="mini-card-button focus-ring glass group flex min-h-[286px] w-full flex-col rounded-[1.25rem] p-5 text-left"
        >
          <AnimatePresence mode="wait" initial={false}>
            {!flipped ? (
              <motion.span key="front" className="flex min-h-[246px] flex-col" {...miniContentMotion}>
                <span className="mb-5 flex items-center justify-between">
                  <span className="rounded-full bg-white/10 px-3 py-1 text-sm font-bold text-cyan light:bg-[#091223]/5">{project.year}</span>
                  <span className="grid h-10 w-10 place-items-center rounded-full border border-white/12 bg-white/10 text-coral transition group-hover:-translate-y-1 group-hover:rotate-12">
                    <FiCode />
                  </span>
                </span>
                <span className="block font-display text-xl font-bold leading-tight">{project.title}</span>
                <span className="mt-3 block flex-1 text-sm leading-6 text-white/66 light:text-[#30415f]">{project.summary}</span>
                <span className="mt-4 block rounded-2xl border border-cyan/20 bg-cyan/10 p-3 text-xs font-semibold text-cyan">{project.highlight}</span>
              </motion.span>
            ) : (
              <motion.span key="back" className="flex min-h-[246px] flex-col" {...miniContentMotion}>
                <span className="mb-4 flex items-center justify-between">
                  <span className="font-display text-xl font-bold gradient-text">Tech Stack</span>
                  <span className="grid h-10 w-10 place-items-center rounded-full border border-white/12 bg-white/10 text-cyan">
                    <FiCornerUpLeft />
                  </span>
                </span>
                <span className="block text-base font-bold">{project.title}</span>
                <span className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-cyan/25 bg-cyan/10 px-2.5 py-1.5 text-xs font-bold text-cyan shadow-[0_0_18px_rgba(0,229,255,0.12)]"
                    >
                      {item}
                    </span>
                  ))}
                </span>
                <span className="mt-auto block rounded-2xl border border-coral/20 bg-coral/10 p-3 text-xs font-semibold text-coral">
                  Click again to return.
                </span>
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </motion.article>
    );
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.22 }}
      transition={{ delay: index * 0.055, duration: 0.58 }}
      className={`flip-card ${compact ? 'mini-project-card min-h-[286px]' : 'min-h-[430px]'} ${className}`}
    >
      <button
        type="button"
        aria-pressed={flipped}
        aria-label={`${project.title} details`}
        onClick={() => setFlipped((value) => !value)}
        className={`flip-card-inner focus-ring ${flipped ? 'is-flipped' : ''}`}
      >
        <span className={`flip-card-face glass group flex flex-col text-left ${compact ? 'p-5' : 'p-7'}`}>
          <span className={`${compact ? 'mb-5' : 'mb-7'} flex items-center justify-between`}>
            <span className="rounded-full bg-white/10 px-3 py-1 text-sm font-bold text-cyan light:bg-[#091223]/5">{project.year}</span>
            <span className={`${compact ? 'h-10 w-10' : 'h-11 w-11'} grid place-items-center rounded-full border border-white/12 bg-white/10 text-coral transition group-hover:-translate-y-1 group-hover:rotate-12`}>
              <FiCode />
            </span>
          </span>
          <span className={`block font-display font-bold leading-tight ${compact ? 'text-xl' : 'text-2xl sm:text-3xl'}`}>{project.title}</span>
          <span className={`${compact ? 'mt-3 text-sm leading-6' : 'mt-4 text-sm leading-6 sm:text-base sm:leading-7'} block flex-1 text-white/66 light:text-[#30415f]`}>{project.summary}</span>
          <span className={`${compact ? 'mt-4 p-3 text-xs' : 'mt-5 p-3 text-xs sm:p-4 sm:text-sm'} block rounded-2xl border border-cyan/20 bg-cyan/10 font-semibold text-cyan`}>{project.highlight}</span>
        </span>

        <span className={`flip-card-face flip-card-back glass flex flex-col text-left ${compact ? 'p-5' : 'p-7'}`}>
          <span className={`${compact ? 'mb-4' : 'mb-5'} flex items-center justify-between`}>
            <span className={`font-display font-bold gradient-text ${compact ? 'text-xl' : 'text-2xl'}`}>Tech Stack</span>
            <span className={`${compact ? 'h-10 w-10' : 'h-11 w-11'} grid place-items-center rounded-full border border-white/12 bg-white/10 text-cyan`}>
              <FiCornerUpLeft />
            </span>
          </span>
          <span className={`${compact ? 'text-base' : 'text-base sm:text-lg'} block font-bold`}>{project.title}</span>
          <span className={`${compact ? 'mt-4 gap-2' : 'mt-5 gap-2'} flex flex-wrap`}>
            {project.stack.map((item) => (
              <span
                key={item}
                className={`${compact ? 'px-2.5 py-1.5' : 'px-3 py-2'} rounded-full border border-cyan/25 bg-cyan/10 text-xs font-bold text-cyan shadow-[0_0_18px_rgba(0,229,255,0.12)]`}
              >
                {item}
              </span>
            ))}
          </span>
          <span className={`${compact ? 'p-3 text-xs' : 'p-4 text-sm'} mt-auto block rounded-2xl border border-coral/20 bg-coral/10 font-semibold text-coral`}>
            Click again to return.
          </span>
        </span>
      </button>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <>
      <section id="projects" className="py-24">
        <div className="section-shell">
          <SectionHeader
            eyebrow="Projects"
            title="Major builds with real product logic."
            copy="A connected project timeline showing full stack, computer vision, form workflows, and Firebase builds."
          />
          <div className="relative">
            <div className="absolute bottom-8 left-5 top-4 w-px bg-gradient-to-b from-cyan via-plasma to-coral md:left-1/2" />
            <div className="grid gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -28 : 28 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.24 }}
                  transition={{ duration: 0.58 }}
                  className={`relative pl-14 md:w-[calc(50%-1.75rem)] md:pl-0 ${index % 2 === 0 ? 'md:mr-auto md:pr-10' : 'md:ml-auto md:pl-10'}`}
                >
                  <span className="absolute left-[13px] top-8 h-4 w-4 rounded-full border-4 border-night bg-cyan shadow-neon light:border-[#f4f9ff] md:left-auto md:right-[-2.25rem]" />
                  {index % 2 !== 0 && (
                    <span className="hidden md:absolute md:left-[-2.25rem] md:top-8 md:block md:h-4 md:w-4 md:rounded-full md:border-4 md:border-night md:bg-coral md:shadow-coral light:md:border-[#f4f9ff]" />
                  )}
                  <FlipProjectCard project={project} index={index} className="project-timeline-card" />
                </motion.div>
              ))}
            </div>
          </div>
      </div>
      </section>

      <section id="mini-projects" className="py-24">
        <div className="section-shell">
          <SectionHeader
            eyebrow="Mini Projects"
            title="Small builds, sharp fundamentals."
            copy="Quick JavaScript projects that show DOM logic, API calls, timers, state handling, validation, and clean UI practice."
          />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {miniProjects.map((project, index) => (
              <FlipProjectCard key={project.title} project={project} index={index} compact />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
