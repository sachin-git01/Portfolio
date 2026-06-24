import { motion } from 'framer-motion';

export default function SectionHeader({ eyebrow, title, copy }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.65, ease: 'easeOut' }}
      className="mb-10 max-w-3xl"
    >
      <p className="mb-3 text-sm font-bold uppercase tracking-[0.28em] text-cyan">{eyebrow}</p>
      <h2 className="font-display text-3xl font-bold leading-tight md:text-5xl">{title}</h2>
      {copy && <p className="mt-4 text-base leading-8 text-white/68 light:text-[#30415f] md:text-lg">{copy}</p>}
    </motion.div>
  );
}
