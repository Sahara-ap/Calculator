import { EButtonValue } from 'src/App/types/button-value.enum';

export const useButtonAttributes = ({
  buttonValue,
  onEqual,
  onReset,
  onSqrt,
  onButtonClick,
}: {
  buttonValue: EButtonValue | string;
    onEqual: () => void;
    onReset: () => void;
    onSqrt: (value: string) => void;
    onButtonClick: (value: string) => void;
  }

) => {
  let className = '';
  let handleClick = null;

  switch (buttonValue) {
    case EButtonValue.equal:
      className = 'equalButton';
      handleClick = onEqual;
      break;
    case EButtonValue.reset:
      className = 'resetButton';
      handleClick = onReset;
      break;
    case EButtonValue.sqrt:
      className = 'sqrtButton';
      handleClick = () => onSqrt(EButtonValue.sqrt);
      break;
    default:
      className = 'button';
      handleClick = () => onButtonClick(buttonValue);
  }

  return {className, handleClick};

};
