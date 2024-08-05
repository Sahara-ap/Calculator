import { useRef, useState } from 'react';
import { Button } from './components/Button';
import { EnterField } from './components/EnterField';
import { buttonList } from './constants/buttons';
import { useInputFocus } from './hooks/useInputFocus';

import { calcRpnExpression } from 'src/utils/calc-rpn-expression';
import { convertToRPN } from 'src/utils/convert-to-RPN';
import { formatUserExpression } from 'src/utils/format-user-expression';
import { removeOperatorsAndSpacesFromEnd } from 'src/utils/remove-operators-and-spaces-from-end';
import { splitDigits } from 'src/utils/split-digits';

import S from './App.module.css';

export function App(): JSX.Element {
  const [formattedUserInput, setFormattedUserInput] = useState('');
  const [result, setResult] = useState('');
  const enterFieldRef = useRef<HTMLInputElement | null>(null);

  const getInputRefCb = (el: HTMLInputElement) => {
    if (enterFieldRef) {
      enterFieldRef.current = el;
    }
  };

  const handleButtonClick = (value: string) => {
    setFormattedUserInput((prev) => formatUserExpression(prev + value));
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const formattedValue = formatUserExpression(value);
    setFormattedUserInput(formattedValue);
  };

  const handleEqual = () => {
    const formattedUserInputWithoutNonNumericEnd =
      removeOperatorsAndSpacesFromEnd(formattedUserInput);
    const rpnValue = convertToRPN(formattedUserInputWithoutNonNumericEnd);
    const formattedRpnValue = calcRpnExpression(rpnValue);
    setResult(splitDigits(String(formattedRpnValue)));
    setFormattedUserInput('');
  };

  const handleReset = () => {
    setFormattedUserInput('');
  };

  const handleSqrt = (value: string) => {

    setFormattedUserInput((prev) => formatUserExpression(`${prev}${value}(`));
  };

  useInputFocus(enterFieldRef.current);

  return (
    <div className={S.calcWrapper}>
      <div className={S.calc}>
        <div className={S.display}>
          <EnterField
            userValues={formattedUserInput}
            onChange={handleInputChange}
            onLoadCb={getInputRefCb}
          />
          <div className={S.storyField}>{result}</div>
        </div>
        <div className={S.buttonsWrapper}>
          {buttonList.map((buttonValue) => (
            <Button
              key={buttonValue}
              buttonValue={buttonValue}
              onButtonClick={handleButtonClick}
              onEqual={handleEqual}
              onReset={handleReset}
              onSqrt={handleSqrt}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
