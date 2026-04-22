import { useEffect, useState } from 'react';

export default function TypingText({ words }) {
  const [wordIndex, setWordIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex];
    const atEnd = letterIndex === current.length;
    const atStart = letterIndex === 0;
    const delay = deleting ? 42 : atEnd ? 1400 : 74;

    const timer = window.setTimeout(() => {
      if (!deleting && atEnd) {
        setDeleting(true);
        return;
      }

      if (deleting && atStart) {
        setDeleting(false);
        setWordIndex((value) => (value + 1) % words.length);
        return;
      }

      setLetterIndex((value) => value + (deleting ? -1 : 1));
    }, delay);

    return () => window.clearTimeout(timer);
  }, [deleting, letterIndex, wordIndex, words]);

  return (
    <span className="inline-flex min-h-[1.45em] items-center text-cyanGlow">
      {words[wordIndex].slice(0, letterIndex)}
      <span className="ml-1 h-6 w-[2px] animate-caret bg-mintGlow sm:h-8" />
    </span>
  );
}
