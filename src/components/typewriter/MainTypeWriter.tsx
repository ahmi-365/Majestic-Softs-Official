import React, { useState, useEffect, useCallback } from 'react';

interface TypewriterProps {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetweenWords?: number;
  className?: string;
}

export const Typewriter: React.FC<TypewriterProps> = ({
  words,
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBetweenWords = 2000,
  className = '',
}) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const animate = useCallback(() => {
    const currentWord = words[currentIndex];
    
    if (isDeleting) {
      // Deleting effect
      setCurrentText(currentWord.substring(0, currentText.length - 1));
      
      if (currentText === '') {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % words.length);
      }
    } else {
      // Typing effect
      setCurrentText(currentWord.substring(0, currentText.length + 1));
      
      if (currentText === currentWord) {
        // Delay before starting to delete
        setTimeout(() => {
          setIsDeleting(true);
        }, delayBetweenWords);
      }
    }
  }, [currentText, currentIndex, isDeleting, words, delayBetweenWords]);

  useEffect(() => {
    const timeout = setTimeout(
      animate,
      isDeleting ? deletingSpeed : typingSpeed
    );
    return () => clearTimeout(timeout);
  }, [animate, isDeleting, deletingSpeed, typingSpeed]);

  return (
    <span className={`inline-block ${className}`}>
      {currentText}
      <span className="animate-pulse ml-0.5 font-bold text-black dark:text-white">|</span>
    </span>
  );
};