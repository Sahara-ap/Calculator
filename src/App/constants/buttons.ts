interface IButtons {
  value: string;
  category: ECategoryButtons;
  rating: number | null;
  isUnary: boolean;
  type: 'unary' | 'binary' | 'partial' | 'not';
  isShow: boolean;
}
enum EOperator {
    Plus = '+',
    Minus = '-',
    Divide = '/',
    Multiply = '*',
    Sqrt = '√',
    OpenParenthesis = '(',
    CloseParenthesis = ')',
    Percent = '%',
  }

enum ECategoryButtons {
  Service = 'service',
  Operator = 'operator',
  Digit = 'digit',
  Separator = 'separator',
  Equal = 'equal',
}

interface IOperatorsRating {
  '+': number;
  '-': number;
  '/': number;
  '*': number;
  '√': number;
  '(': number;
  ')': number;
  '%': number;
}

const Rating = {
  Null: null,
  Low: 1,
  Medium: 10,
  High: 100,
  UnaryOperator: 1000,
  Parenthesis: -1,
};


export const buttons:IButtons[] = [
  {
    value: EOperator.OpenParenthesis,
    category: ECategoryButtons.Operator,
    rating: Rating.Parenthesis,
    isUnary: false,
    isShow: false,
    type: 'not',
  },
  {
    value: EOperator.CloseParenthesis,
    category: ECategoryButtons.Operator,
    rating: Rating.Parenthesis,
    isUnary: false,
    isShow: false,
    type: 'not',
  },
  {
    value: 'C',
    category: ECategoryButtons.Service,
    rating: Rating.Null,
    isUnary: false,
    isShow: true,
    type: 'not',
  },
  {
    value: EOperator.Sqrt,
    category: ECategoryButtons.Operator,
    rating: Rating.UnaryOperator,
    isUnary: true,
    isShow: true,
    type: 'unary',
  },
  {
    value: EOperator.Percent,
    category: ECategoryButtons.Operator,
    rating: Rating.High,
    isUnary: true,
    isShow: true,
    type: 'partial',
  },
  {
    value: EOperator.Divide,
    category: ECategoryButtons.Operator,
    rating: Rating.Medium,
    isUnary: false,
    isShow: true,
    type: 'binary',
  },
  {
    value: '7',
    category: ECategoryButtons.Digit,
    rating: Rating.Null,
    isUnary: false,
    isShow: true,
    type: 'not',
  },
  {
    value: '8',
    category: ECategoryButtons.Digit,
    rating: Rating.Null,
    isUnary: false,
    isShow: true,
    type: 'not',
  },
  {
    value: '9',
    category: ECategoryButtons.Digit,
    rating: Rating.Null,
    isUnary: false,
    isShow: true,
    type: 'not',
  },
  {
    value: EOperator.Multiply,
    category: ECategoryButtons.Operator ,
    rating: Rating.Medium,
    isUnary: false,
    isShow: true,
    type: 'binary',
  },
  {
    value: '4',
    category: ECategoryButtons.Digit,
    rating: Rating.Null,
    isUnary: false,
    isShow: true,
    type: 'not',
  },
  {
    value: '5',
    category: ECategoryButtons.Digit,
    rating: Rating.Null,
    isUnary: false,
    isShow: true,
    type: 'not',
  },
  {
    value: '6',
    category: ECategoryButtons.Digit,
    rating: Rating.Null,
    isUnary: false,
    isShow: true,
    type: 'not',
  },
  {
    value: EOperator.Minus,
    category: ECategoryButtons.Operator,
    rating: Rating.Low,
    isUnary: false,
    isShow: true,
    type: 'binary',
  },
  {
    value: '1',
    category: ECategoryButtons.Digit,
    rating: Rating.Null,
    isUnary: false,
    isShow: true,
    type: 'not',
  },
  {
    value: '2',
    category: ECategoryButtons.Digit,
    rating: Rating.Null,
    isUnary: false,
    isShow: true,
    type: 'not',
  },
  {
    value: '3',
    category: ECategoryButtons.Digit,
    rating: Rating.Null,
    isUnary: false,
    isShow: true,
    type: 'not',
  },
  {
    value: EOperator.Plus,
    category: ECategoryButtons.Operator,
    rating: Rating.Low,
    isUnary: false,
    isShow: true,
    type: 'binary',
  },
  {
    value: '0',
    category: ECategoryButtons.Digit,
    rating: Rating.Null,
    isUnary: false,
    isShow: true,
    type: 'not',
  },
  {
    value: '00',
    category: ECategoryButtons.Digit,
    rating: Rating.Null,
    isUnary: false,
    isShow: true,
    type: 'not',
  },
  {
    value: ',',
    category: ECategoryButtons.Separator,
    rating: Rating.Null,
    isUnary: false,
    isShow: true,
    type: 'not',
  },
  {
    value: '=',
    category: ECategoryButtons.Equal,
    rating: Rating.Null,
    isUnary: false,
    isShow: true,
    type: 'not',
  },
];


const buttonValues = buttons.filter((item) => item.isShow).map((item) => item.value);
const buttonCategories = buttons.map((item) => item.category);
const operatorsRating = buttons
  .filter((item) => item.rating)
  .reduce<IOperatorsRating>((acc, item) => {
    const key = item.value;
    return Object.assign(acc, {[key]: item.rating});
  }, {} as IOperatorsRating);

const operatorsTypes = buttons
  .filter((item) => item.type !== 'not')
  .reduce<Record<IButtons['type'], string[]>>((acc, item) => {
    const key = item.type;
    const value = item.value as EOperator;
    if (!(key in acc)) {
      acc[key] = [];
    }
    acc[key].push(value);

    return acc;
  }, {} as Record<IButtons['type'], string[]>);

export const buttonData = {buttonValues, operatorsRating, buttonCategories, operatorsTypes, buttonsList: buttons};


