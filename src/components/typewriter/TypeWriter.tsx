import React from 'react';
import { TypewriterProps } from './Types';
import { useTypewriter } from './UseTypeWriter';
import { Cursor } from './Cursor';

export const Typewriter: React.FC<TypewriterProps> = ({
  words,
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBetweenWords = 2000,
  className = '',
}) => {
  const { currentText } = useTypewriter(
    words,
    typingSpeed,
    deletingSpeed,
    delayBetweenWords
  );

  return (
    <span className={`inline-block ${className}`}>
      {currentText}
      <Cursor />
    </span>
  );
};