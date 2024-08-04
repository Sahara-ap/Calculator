import S from './App.module.css';
import { Button } from './components/Button';
import { EnterField } from './components/EnterField';
import { buttonList } from './constants/buttons';

export function App(): JSX.Element {
  return (
    <div className={S.calcWrapper}>
      <div className={S.calc}>
        <div className={S.display}>
          <EnterField />
          <div className={S.storyField}>800</div>
        </div>
        <div className={S.buttonsWrapper}>
          {buttonList.map((buttonValue) => (
            <Button key={buttonValue} text={buttonValue} />
          ))}
        </div>
      </div>
    </div>
  );
}
