import { useRef, useState } from 'react';
import { Button } from './components/Button';
import { EnterField } from './components/EnterField';
import { buttonData } from './constants/buttons';

import { calcRpnExpression } from 'src/utils/calc-rpn-expression';
import { convertToRPN } from 'src/utils/convert-to-RPN';
import { formatToNumberWithSpaces } from 'src/utils/format-to-number-with-spaces';
import { formatUserExpression } from 'src/utils/format-user-expression';
import { removeOperatorsAndSpacesFromEnd } from 'src/utils/remove-operators-and-spaces-from-end';

import { useEqualByEnter } from './hooks/useEqualByEnter';
import { useInputFocus } from './hooks/useInputFocus';
import { useResetByEscape } from './hooks/useResetByEscape';

import S from './App.module.css';

export function App(): JSX.Element {
  const [formattedUserInput, setFormattedUserInput] = useState('');
  const [result, setResult] = useState<string>(' ');
  const enterFieldRef = useRef<HTMLInputElement | null>(null);

  const {buttonValues} = buttonData;


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
    const calcResult = calcRpnExpression(rpnValue);
    setResult(isFinite(calcResult) ? (formatToNumberWithSpaces((calcResult))) : '');
    setFormattedUserInput('');
  };

  const handleReset = () => {
    setFormattedUserInput('');
    setResult('');
  };

  const handleSqrt = (value: string) => {
    setFormattedUserInput((prev) => formatUserExpression(`${prev}${value}(`));
  };

  useInputFocus(enterFieldRef.current);
  useEqualByEnter(handleEqual);
  useResetByEscape(handleReset);

  return (
    <div className={S.calcWrapper}>
      <div className={S.calc}>
        <div className={S.display}>
          <EnterField
            userValues={formattedUserInput}
            onChange={handleInputChange}
            onLoadCb={getInputRefCb}
          />
          <div className={S.resultField}>
            {result ? result : 'oops!'}
          </div>
        </div>
        <div className={S.buttonsWrapper}>
          {buttonValues.map((buttonValue) => (
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
