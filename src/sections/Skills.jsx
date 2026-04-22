import { FiCode, FiDatabase, FiGitBranch, FiGlobe, FiLayers, FiZap } from 'react-icons/fi';
import Reveal from '../components/Reveal.jsx';
import Section from '../components/Section.jsx';
import { skillGroups } from '../data/portfolio.js';

const iconMap = {
  Programming: FiCode,
  'ML & Data': FiZap,
  Web: FiGlobe,
  Database: FiDatabase,
  Tools: FiGitBranch,
  Concepts: FiLayers,
};

const accentMap = {
  cyan: 'from-cyanGlow to-cyanGlow',
  mint: 'from-mintGlow to-mintGlow',
  coral: 'from-coralGlow to-coralGlow',
  gold: 'from-goldGlow to-goldGlow',
};

export default function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="A Python-first stack for backend, data, and ML."
      intro="Interactive skill cards with a recruiter-friendly read on where the strongest signal is: Python, Django, REST, data handling, and model-building fundamentals."
      className="bg-night/[0.04] dark:bg-white/[0.025]"
    >
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {skillGroups.map((group, index) => {
          const Icon = iconMap[group.title];
          return (
            <Reveal key={group.title} delay={index * 0.05}>
              <article className="glass-card group h-full p-6">
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <span className="grid h-11 w-11 place-items-center rounded-lg bg-night text-cyanGlow dark:bg-white/10">
                      <Icon />
                    </span>
                    <h3 className="text-xl font-black">{group.title}</h3>
                  </div>
                  <span className="h-2 w-2 rounded-full bg-coralGlow shadow-[0_0_18px_rgba(255,122,144,.75)]" />
                </div>
                <div className="space-y-5">
                  {group.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="mb-2 flex items-center justify-between gap-4 text-sm font-semibold">
                        <span>{skill.name}</span>
                        <span className="text-night/45 dark:text-frost/50">{skill.level}%</span>
                      </div>
                      <div className="h-2.5 overflow-hidden rounded-lg bg-night/10 dark:bg-white/10">
                        <div
                          className={`h-full rounded-lg bg-gradient-to-r ${accentMap[group.accent]} transition-all duration-700 group-hover:brightness-125`}
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
