import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [active, setActive] = useState(false);

  useEffect(() => {
    const move = (event) => setPosition({ x: event.clientX, y: event.clientY });
    const enter = () => setActive(true);
    const leave = () => setActive(false);

    window.addEventListener('mousemove', move);
    const targets = document.querySelectorAll('a, button, input, textarea');
    targets.forEach((target) => {
      target.addEventListener('mouseenter', enter);
      target.addEventListener('mouseleave', leave);
    });

    return () => {
      window.removeEventListener('mousemove', move);
      targets.forEach((target) => {
        target.removeEventListener('mouseenter', enter);
        target.removeEventListener('mouseleave', leave);
      });
    };
  }, []);

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[80] hidden h-7 w-7 rounded-full border border-cyanGlow/70 mix-blend-difference md:block"
      animate={{
        x: position.x - 14,
        y: position.y - 14,
        scale: active ? 1.9 : 1,
        opacity: active ? 0.7 : 0.95,
      }}
      transition={{ type: 'spring', stiffness: 420, damping: 32, mass: 0.4 }}
    />
  );
}
