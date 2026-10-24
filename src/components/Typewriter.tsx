import React, { useEffect, useState } from 'react';

interface TypewriterProps {
  words: string[];
  loop?: number;
  cursor?: boolean;
  cursorStyle?: string;
  typeSpeed?: number;
  deleteSpeed?: number;
  delaySpeed?: number;
  className?: string;
}

export const Typewriter: React.FC<TypewriterProps> = ({
  words,
  cursor = true,
  cursorStyle = '|',
  typeSpeed = 70,
  deleteSpeed = 40,
  delaySpeed = 1600,
  className = ''
}) => {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex % words.length];
    let timer: NodeJS.Timeout;

    if (!isDeleting && text === currentWord) {
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, delaySpeed);
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    } else {
      const speed = isDeleting ? deleteSpeed : typeSpeed;
      timer = setTimeout(() => {
        setText((prev) =>
          isDeleting
            ? currentWord.substring(0, prev.length - 1)
            : currentWord.substring(0, prev.length + 1)
        );
      }, speed);
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIndex, words, typeSpeed, deleteSpeed, delaySpeed]);

  return (
    <span className={`inline-block ${className}`}>
      <span>{text}</span>
      {cursor && (
        <span className="animate-pulse text-[#05f244] font-mono font-bold ml-0.5">
          {cursorStyle}
        </span>
      )}
    </span>
  );
};
