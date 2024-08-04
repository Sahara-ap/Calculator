import React from 'react';

import S from './Button.module.css';

interface IButtonProps {
  text: string;
}
export const Button: React.FC<IButtonProps> = ({ text }) => {
  const classButton = text !== '=' ? 'button' : 'specialButton';

  return <button className={S[classButton]}>{text}</button>;
};
