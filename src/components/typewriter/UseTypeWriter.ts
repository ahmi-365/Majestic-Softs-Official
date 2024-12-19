import { useState, useCallback, useEffect } from 'react';

export const useTypewriter = (
  words: string[],
  typingSpeed: number,
  deletingSpeed: number,
  delayBetweenWords: number
) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const animate = useCallback(() => {
    const currentWord = words[currentIndex];
    
    if (isDeleting) {
      setCurrentText(currentWord.substring(0, currentText.length - 1));
      
      if (currentText === '') {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % words.length);
      }
    } else {
      setCurrentText(currentWord.substring(0, currentText.length + 1));
      
      if (currentText === currentWord) {
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

  return { currentText };
}