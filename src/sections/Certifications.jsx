import { FiAward, FiCheckCircle } from 'react-icons/fi';
import Reveal from '../components/Reveal.jsx';
import Section from '../components/Section.jsx';
import { achievements, certifications } from '../data/portfolio.js';

export default function Certifications() {
  return (
    <Section
      id="certifications"
      eyebrow="Proof Points"
      title="Certifications and achievements."
      intro="Focused signals that support the Python/Django/ML engineering direction."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        <Reveal>
          <div className="glass-card h-full p-6">
            <div className="mb-6 flex items-center gap-4">
              <span className="grid h-12 w-12 place-items-center rounded-lg bg-night text-mintGlow dark:bg-white/10">
                <FiCheckCircle />
              </span>
              <h3 className="text-2xl font-black">Certifications</h3>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {certifications.map((item) => (
                <div key={item} className="rounded-lg border border-night/10 bg-night/5 p-4 font-semibold dark:border-white/10 dark:bg-white/10">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="glass-card h-full p-6">
            <div className="mb-6 flex items-center gap-4">
              <span className="grid h-12 w-12 place-items-center rounded-lg bg-night text-goldGlow dark:bg-white/10">
                <FiAward />
              </span>
              <h3 className="text-2xl font-black">Achievements</h3>
            </div>
            <div className="space-y-3">
              {achievements.map((item) => (
                <div key={item} className="rounded-lg border border-night/10 bg-night/5 p-4 font-semibold dark:border-white/10 dark:bg-white/10">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
