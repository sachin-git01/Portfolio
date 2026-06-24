import { motion } from 'framer-motion';

export default function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-[100] grid place-items-center bg-night"
      exit={{ opacity: 0, transition: { duration: 0.55, ease: 'easeInOut' } }}
    >
      <div className="relative grid place-items-center">
        <div className="absolute h-44 w-44 animate-spin rounded-full border border-cyan/20 border-t-cyan" />
        <div className="absolute h-32 w-32 animate-[spin_1.4s_linear_infinite_reverse] rounded-full border border-coral/20 border-b-coral" />
        <div className="glass rounded-full px-7 py-4 text-center">
          <p className="font-display text-2xl font-bold gradient-text">Launching Portfolio</p>
          <p className="mt-1 text-sm text-white/62">rendering neon interface</p>
        </div>
      </div>
    </motion.div>
  );
}
