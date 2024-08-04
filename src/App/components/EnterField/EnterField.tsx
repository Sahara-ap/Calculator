import React, { useState } from 'react';

import S from './EnterField.module.css';

export const EnterField: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const handleInputChange = (value: string) => {
    setInputValue(value);
  };

  return (
    <div className={S.inputWrapper}>
      <input
        className={S.input}
        type='text'
        onChange={(event) => handleInputChange(event.target.value)}
        value={inputValue}
      />
    </div>
  );

};
