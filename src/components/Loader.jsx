import { motion } from 'framer-motion';

export default function Loader() {
  return (
    <div className="grid min-h-screen place-items-center bg-ink text-frost">
      <div className="relative flex h-36 w-36 items-center justify-center">
        <motion.div
          className="absolute inset-0 rounded-full border border-cyanGlow/20"
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute inset-4 rounded-full border-x border-mintGlow/80"
          animate={{ rotate: -360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="h-14 w-14 rounded-lg bg-gradient-to-br from-cyanGlow via-mintGlow to-coralGlow shadow-glow"
          animate={{ scale: [0.9, 1.12, 0.9], rotate: [0, 10, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>
    </div>
  );
}
