export default function Footer() {
  return (
    <footer className="border-t border-night/10 bg-frost px-5 py-8 text-center text-sm text-night/60 dark:border-white/10 dark:bg-ink dark:text-frost/50">
      <p>© {new Date().getFullYear()} Mohammad Adnan Ali. Built with React, Three.js, Tailwind CSS, and Framer Motion.</p>
    </footer>
  );
}
