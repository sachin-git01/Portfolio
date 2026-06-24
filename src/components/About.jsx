import { motion } from 'framer-motion';
import { FiCpu, FiLayers, FiZap } from 'react-icons/fi';
import SectionHeader from './SectionHeader.jsx';

const focusAreas = [
  { icon: FiLayers, title: 'MERN Product Thinking', copy: 'Reusable components, REST APIs, auth flows, CRUD systems, and responsive product screens.' },
  { icon: FiCpu, title: 'CS-DS Foundation', copy: 'B.Tech Computer Science & Data Science student with DBMS, OS, networks, and software engineering fundamentals.' },
  { icon: FiZap, title: 'AI Integration Mindset', copy: 'Interested in blending useful AI capabilities into real full stack applications without overcomplicating the user flow.' }
];

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="section-shell">
        <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 28 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.75, ease: 'easeOut' }}
            className="real-photo-card"
          >
            <span className="real-photo-aura" aria-hidden="true" />
            <span className="real-photo-orbit real-photo-orbit--one" aria-hidden="true" />
            <span className="real-photo-orbit real-photo-orbit--two" aria-hidden="true" />
            <span className="real-photo-scan" aria-hidden="true" />
            <div className="real-photo-frame">
              <img src="/assets/sachin-about-avatar-v2.png" alt="Sachin Kumar anime avatar" className="real-photo-img" />
            </div>
            <span className="real-photo-chip real-photo-chip--top">CS-DS</span>
            <span className="real-photo-chip real-photo-chip--right">MERN</span>
            <span className="real-photo-chip real-photo-chip--bottom">AI</span>
          </motion.div>

          <div>
            <SectionHeader
              eyebrow="About"
              title="Developer energy with product polish."
              copy="I am Sachin Kumar, an aspiring Full Stack Developer focused on building practical, recruiter-ready applications with React.js, Node.js, Express, MongoDB, Firebase, SQL, and clean user experiences."
            />
            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {focusAreas.map((area, index) => {
                const Icon = area.icon;
                return (
                  <motion.article
                    key={area.title}
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{ delay: index * 0.08, duration: 0.62 }}
                    className="glass rounded-[1.75rem] p-6"
                  >
                    <div className="mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-cyan/20 to-coral/20 text-2xl text-cyan">
                      <Icon />
                    </div>
                    <h3 className="font-display text-xl font-bold">{area.title}</h3>
                    <p className="mt-3 leading-7 text-white/64 light:text-[#30415f]">{area.copy}</p>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
