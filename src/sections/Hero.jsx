import { motion } from 'framer-motion';
import { FiArrowDown, FiDownload, FiMail, FiTerminal } from 'react-icons/fi';
import HeroScene from '../components/HeroScene.jsx';
import TypingText from '../components/TypingText.jsx';
import { profile, stats } from '../data/portfolio.js';

export default function Hero() {
  return (
    <section id="home" className="relative isolate flex min-h-[94svh] items-center overflow-hidden bg-ink pb-16 pt-28 text-frost">
      <HeroScene />
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.04fr_0.96fr]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl"
        >
          <div className="mb-7 inline-flex items-center gap-3 rounded-lg border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-frost/80 backdrop-blur-xl">
            <span className="h-2 w-2 rounded-full bg-mintGlow shadow-[0_0_18px_rgba(110,243,181,.9)]" />
            Open to Python, Django, and ML engineering roles
          </div>
          <h1 className="max-w-5xl text-5xl font-black leading-[0.95] tracking-tight text-white sm:text-7xl lg:text-8xl">
            Mohammad Adnan Ali
          </h1>
          <p className="mt-5 text-xl font-semibold text-frost/85 sm:text-2xl">
            Python Developer | Machine Learning Engineer
          </p>
          <div className="mt-5 text-2xl font-black sm:text-4xl">
            <TypingText
              words={[
                'Building intelligent backend systems.',
                'Training practical ML workflows.',
                'Designing secure Django APIs.',
              ]}
            />
          </div>
          <p className="mt-7 max-w-2xl text-base leading-8 text-frost/70 sm:text-lg">
            M.Tech Computer Science student turning Python, data, and backend engineering into polished products:
            predictive models, REST APIs, authentication systems, and automation workflows.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#projects" className="btn-primary">
              <FiTerminal />
              View Projects
            </a>
            <a href={profile.resume} className="btn-secondary" download>
              <FiDownload />
              Download Resume
            </a>
            <a href="#contact" className="btn-ghost">
              <FiMail />
              Contact Me
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative hidden min-h-[30rem] lg:block"
          aria-hidden="true"
        >
          <div className="absolute right-3 top-0 h-64 w-64 rounded-full border border-cyanGlow/20" />
          <div className="absolute bottom-10 right-28 h-44 w-44 rounded-full border border-coralGlow/20" />
          <div className="absolute right-20 top-24 w-80 rounded-lg border border-white/15 bg-white/10 p-5 shadow-card backdrop-blur-xl">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-cyanGlow">Current Focus</p>
            <p className="mt-4 text-2xl font-black">ML-backed APIs with clean production habits</p>
            <div className="mt-6 grid grid-cols-3 gap-3">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-lg border border-white/10 bg-ink/50 p-4">
                  <p className="text-lg font-black text-white">{stat.value}</p>
                  <p className="mt-1 text-xs text-frost/60">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
      <a
        href="#about"
        aria-label="Scroll to about section"
        className="absolute bottom-6 left-1/2 grid h-11 w-11 -translate-x-1/2 place-items-center rounded-lg border border-white/15 bg-white/10 text-frost/80 backdrop-blur-xl transition hover:-translate-y-1 hover:text-cyanGlow"
      >
        <FiArrowDown />
      </a>
    </section>
  );
}
