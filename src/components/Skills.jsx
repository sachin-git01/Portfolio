import { motion } from 'framer-motion';
import { skills } from '../data/portfolio.js';
import SectionHeader from './SectionHeader.jsx';

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Skills"
          title="A floating stack for full stack execution."
          copy="Core web technologies, backend APIs, databases, DSA practice, and tooling for building maintainable modern applications."
        />
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 24, rotateX: -12 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ delay: index * 0.035, duration: 0.5 }}
                whileHover={{ y: -10, rotate: index % 2 === 0 ? 1.5 : -1.5 }}
                className="glass group relative overflow-hidden rounded-[1.4rem] p-5"
              >
                <div className="absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-cyan/70 to-transparent" />
                <div
                  className="mb-4 grid h-14 w-14 place-items-center rounded-2xl text-3xl transition group-hover:scale-110"
                  style={{ color: skill.tone, background: `${skill.tone}18`, boxShadow: `0 0 28px ${skill.tone}24` }}
                >
                  <Icon />
                </div>
                <p className="font-display text-lg font-bold">{skill.name}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
