import { EButtonValueForHandle } from 'src/App/types/button-value.enum';

export const useButtonAttributes = ({
  buttonValue,
  onEqual,
  onReset,
  onSqrt,
  onButtonClick,
}: {
  buttonValue: EButtonValueForHandle | string;
    onEqual: () => void;
    onReset: () => void;
    onSqrt: (value: string) => void;
    onButtonClick: (value: string) => void;
  }
) => {
  let className = '';
  let handleClick = null;

  switch (buttonValue) {
    case EButtonValueForHandle.equal:
      className = 'equalButton';
      handleClick = onEqual;
      break;
    case EButtonValueForHandle.reset:
      className = 'resetButton';
      handleClick = onReset;
      break;
    case EButtonValueForHandle.sqrt:
      className = 'sqrtButton';
      handleClick = () => onSqrt(EButtonValueForHandle.sqrt);
      break;
    default:
      className = 'button';
      handleClick = () => onButtonClick(buttonValue);
  }

  return {className, handleClick};
};
