import { motion } from 'framer-motion';
import { timeline } from '../data/portfolio.js';
import SectionHeader from './SectionHeader.jsx';

export default function Timeline() {
  return (
    <section id="experience" className="py-24">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Experience / Certificates"
          title="Progress, proof, and momentum."
          copy="A focused timeline of internship experience, education, coding consistency, and leadership activity."
        />
        <div className="relative">
          <div className="absolute bottom-8 left-5 top-4 w-px bg-gradient-to-b from-cyan via-plasma to-coral md:left-1/2" />
          <div className="grid gap-6">
            {timeline.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -28 : 28 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.28 }}
                transition={{ duration: 0.58 }}
                className={`relative pl-14 md:w-[calc(50%-1.75rem)] md:pl-0 ${index % 2 === 0 ? 'md:mr-auto md:pr-10' : 'md:ml-auto md:pl-10'}`}
              >
                <span className="absolute left-[13px] top-7 h-4 w-4 rounded-full border-4 border-night bg-cyan shadow-neon light:border-[#f4f9ff] md:left-auto md:right-[-2.25rem]" />
                {index % 2 !== 0 && <span className="hidden md:absolute md:left-[-2.25rem] md:top-7 md:block md:h-4 md:w-4 md:rounded-full md:border-4 md:border-night md:bg-coral md:shadow-coral light:md:border-[#f4f9ff]" />}
                <div className="glass rounded-[1.6rem] p-6">
                  <p className="mb-2 text-sm font-bold uppercase tracking-[0.16em] text-cyan">{item.meta}</p>
                  <h3 className="font-display text-2xl font-bold">{item.title}</h3>
                  <p className="mt-3 leading-7 text-white/66 light:text-[#30415f]">{item.body}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
