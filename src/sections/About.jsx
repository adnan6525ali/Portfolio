import { FiCpu, FiDatabase, FiLayers } from 'react-icons/fi';
import Reveal from '../components/Reveal.jsx';
import Section from '../components/Section.jsx';
import { aboutHighlights } from '../data/portfolio.js';

const icons = [FiLayers, FiCpu, FiDatabase];

export default function About() {
  return (
    <Section
      id="about"
      eyebrow="About Me"
      title="Engineering data-aware systems with practical depth."
      intro="M.Tech Computer Science student with expertise in Python, Django, Flask, SQL, and Machine Learning. I like building systems where backend clarity, model quality, and user trust all meet."
    >
      <div className="grid gap-5 md:grid-cols-3">
        {aboutHighlights.map((item, index) => {
          const Icon = icons[index];
          return (
            <Reveal key={item.title} delay={index * 0.08}>
              <article className="glass-card group h-full p-6 transition duration-300 hover:-translate-y-2 hover:border-cyanGlow/45">
                <div className="mb-6 grid h-12 w-12 place-items-center rounded-lg bg-night text-cyanGlow shadow-glow transition group-hover:rotate-3 dark:bg-white/10">
                  <Icon className="text-xl" />
                </div>
                <h3 className="text-xl font-black">{item.title}</h3>
                <p className="mt-4 leading-7 text-night/65 dark:text-frost/65">{item.description}</p>
              </article>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
