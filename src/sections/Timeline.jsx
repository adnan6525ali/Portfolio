import { FiAward, FiBookOpen } from 'react-icons/fi';
import Reveal from '../components/Reveal.jsx';
import Section from '../components/Section.jsx';
import { timeline } from '../data/portfolio.js';

export default function Timeline() {
  return (
    <Section
      id="timeline"
      eyebrow="Experience / Education"
      title="Academic path with engineering momentum."
      intro="A concise view of the foundation behind the portfolio: postgraduate computer science depth paired with hands-on software and ML projects."
      className="bg-night/[0.04] dark:bg-white/[0.025]"
    >
      <div className="relative mx-auto max-w-4xl">
        <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-cyanGlow via-mintGlow to-coralGlow sm:left-1/2" />
        <div className="space-y-8">
          {timeline.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.08}>
              <article className={`relative sm:grid sm:grid-cols-2 sm:gap-10 ${index % 2 ? '' : 'sm:text-right'}`}>
                <div className={`${index % 2 ? 'sm:col-start-2' : ''} pl-12 sm:pl-0`}>
                  <div className="glass-card p-6">
                    <div className={`mb-4 flex items-center gap-3 ${index % 2 ? '' : 'sm:justify-end'}`}>
                      <span className="grid h-10 w-10 place-items-center rounded-lg bg-night text-cyanGlow dark:bg-white/10">
                        {index === 0 ? <FiBookOpen /> : <FiAward />}
                      </span>
                      <span className="text-sm font-bold uppercase tracking-[0.18em] text-coralGlow">{item.period}</span>
                    </div>
                    <h3 className="text-2xl font-black">{item.title}</h3>
                    <p className="mt-2 font-semibold text-cyanGlow">{item.institution}</p>
                    <p className="mt-4 leading-7 text-night/65 dark:text-frost/65">{item.description}</p>
                  </div>
                </div>
                <span className="absolute left-0 top-8 grid h-8 w-8 place-items-center rounded-lg border border-cyanGlow/50 bg-frost shadow-glow dark:bg-ink sm:left-1/2 sm:-translate-x-1/2">
                  <span className="h-2.5 w-2.5 rounded-full bg-cyanGlow" />
                </span>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
