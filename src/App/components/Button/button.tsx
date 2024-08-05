import React from 'react';

import S from './Button.module.css';
import { useButtonAttributes } from 'src/App/hooks/useButtonAttributes';
import { IButtonProps } from './types/button-props.interface';

export const Button: React.FC<IButtonProps> = ({buttonValue, ...props}) => {

  const {className, handleClick} = useButtonAttributes({buttonValue, ...props});

  return (
    <button
      className={S[className]}
      onClick={handleClick}
    >
      {buttonValue}
    </button>

  );
};

