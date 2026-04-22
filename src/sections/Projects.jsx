import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub, FiMail } from 'react-icons/fi';
import Reveal from '../components/Reveal.jsx';
import Section from '../components/Section.jsx';
import { profile, projects } from '../data/portfolio.js';

export default function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Selected Projects"
      title="Recruiter-ready work with clear technical stories."
      intro="Each project emphasizes the practical engineering surface: what was built, the stack involved, and the type of problem it solves."
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Reveal key={project.title} delay={index * 0.09}>
            <motion.article
              whileHover={{ y: -10, rotateX: 2, rotateY: -2 }}
              transition={{ type: 'spring', stiffness: 260, damping: 22 }}
              className="glass-card group relative flex h-full min-h-[31rem] flex-col overflow-hidden p-6"
            >
              <div className={`absolute inset-x-0 top-0 h-44 bg-gradient-to-br ${project.gradient}`} />
              <div className="relative">
                <div className="mb-7 h-32 overflow-hidden rounded-lg border border-white/10 bg-ink">
                  <div className="project-visual h-full w-full" />
                </div>
                <h3 className="text-2xl font-black leading-tight">{project.title}</h3>
                <p className="mt-4 leading-7 text-night/65 dark:text-frost/65">{project.description}</p>
                <ul className="mt-5 space-y-2">
                  {project.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-center gap-3 text-sm text-night/70 dark:text-frost/70">
                      <span className="h-1.5 w-1.5 rounded-full bg-mintGlow" />
                      {highlight}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-lg border border-night/10 bg-night/5 px-3 py-1 text-xs font-bold text-night/70 dark:border-white/10 dark:bg-white/10 dark:text-frost/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="relative mt-auto flex gap-3 pt-7">
                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noreferrer" className="btn-card">
                    <FiGithub />
                    GitHub
                  </a>
                )}
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noreferrer" className="btn-card">
                    <FiExternalLink />
                    Live Demo
                  </a>
                )}
                {!project.githubUrl && !project.liveUrl && (
                  <a
                    href={`mailto:${profile.email}?subject=${encodeURIComponent(`Project inquiry: ${project.title}`)}`}
                    className="btn-card"
                  >
                    <FiMail />
                    Ask About Project
                  </a>
                )}
              </div>
            </motion.article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
