import React, { useEffect, useRef } from 'react';
import { useInnerWidth } from 'src/App/hooks/useInnerWidth';

import S from './EnterField.module.css';

interface IEnterFieldProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  userValues: string;
  onLoadCb: (el: HTMLInputElement) => void;
}

export const EnterField: React.FC<IEnterFieldProps> = ({
  userValues,
  onChange,
  onLoadCb,
}) => {
  const {innerWidth} = useInnerWidth();
  const inputRef = useRef<HTMLInputElement>(null);
  const readOnly = innerWidth <= 600;

  useEffect (() => {
    if (inputRef && inputRef.current) {
      onLoadCb(inputRef.current);
    }
  }, [onLoadCb]);

  return (
    <div className={S.inputWrapper}>
      <input
        className={S.input}
        ref={inputRef}
        type="text"
        onChange={onChange}
        value={userValues}
        autoFocus
        readOnly={readOnly}
      />
    </div>
  );
};
