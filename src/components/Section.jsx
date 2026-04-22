import { motion } from 'framer-motion';

export default function Section({ id, eyebrow, title, intro, children, className = '' }) {
  return (
    <section id={id} className={`section-shell ${className}`}>
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {(eyebrow || title || intro) && (
          <motion.div
            className="mx-auto mb-12 max-w-3xl text-center"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
          >
            {eyebrow && (
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.28em] text-cyanGlow">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="text-3xl font-black tracking-tight text-night dark:text-frost sm:text-5xl">
                {title}
              </h2>
            )}
            {intro && (
              <p className="mt-5 text-base leading-8 text-night/70 dark:text-frost/70 sm:text-lg">
                {intro}
              </p>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}
