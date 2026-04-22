import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FiMenu, FiMoon, FiSun, FiX } from 'react-icons/fi';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Timeline', href: '#timeline' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar({ darkMode, onThemeToggle }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-night/10 bg-frost/80 shadow-lg shadow-black/5 backdrop-blur-xl dark:border-white/10 dark:bg-ink/70'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#home" className="group flex items-center gap-3" onClick={closeMenu}>
          <span className="grid h-10 w-10 place-items-center rounded-lg bg-night text-sm font-black text-frost shadow-glow dark:bg-frost dark:text-ink">
            MA
          </span>
          <span className="hidden text-sm font-semibold tracking-wide sm:block">
            Mohammad Adnan Ali
          </span>
        </a>

        <div className="hidden items-center gap-1 rounded-lg border border-night/10 bg-white/55 p-1 backdrop-blur-xl dark:border-white/10 dark:bg-white/5 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-lg px-4 py-2 text-sm font-medium text-night/70 transition hover:bg-night hover:text-frost dark:text-frost/70 dark:hover:bg-white dark:hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Toggle color theme"
            onClick={onThemeToggle}
            className="group grid h-10 w-10 place-items-center rounded-lg border border-night/10 bg-white/60 text-night transition hover:-translate-y-0.5 hover:border-cyanGlow hover:text-cyanGlow dark:border-white/10 dark:bg-white/5 dark:text-frost"
          >
            {darkMode ? <FiSun /> : <FiMoon />}
          </button>
          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setMenuOpen((value) => !value)}
            className="grid h-10 w-10 place-items-center rounded-lg border border-night/10 bg-white/60 text-night dark:border-white/10 dark:bg-white/5 dark:text-frost md:hidden"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="mx-5 mb-4 rounded-lg border border-night/10 bg-frost/95 p-2 shadow-card backdrop-blur-xl dark:border-white/10 dark:bg-night/95 md:hidden"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="block rounded-lg px-4 py-3 text-sm font-semibold transition hover:bg-night hover:text-frost dark:hover:bg-white dark:hover:text-ink"
              >
                {item.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
