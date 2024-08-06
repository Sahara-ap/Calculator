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

const Rating = {
  Null: null,
  Low: 1,
  Medium: 10,
  High: 100,
  UnaryOperator: 1000,
  Parenthesis: -1,
};

export interface IButtons {
  value: string;
  category: ECategoryButtons;
  rating: number | null;
  isUnary: boolean;
  isShow: boolean;
}

export const buttons:IButtons[] = [
  {
    // value: '(',
    value: EOperator.OpenParenthesis,
    category: ECategoryButtons.Operator,
    rating: Rating.Parenthesis,
    isUnary: false,
    isShow: false,
  },
  {
    // value: ')',
    value: EOperator.CloseParenthesis,
    category: ECategoryButtons.Operator,
    rating: Rating.Parenthesis,
    isUnary: false,
    isShow: false,
  },
  {
    value: 'C',
    category: ECategoryButtons.Service,
    rating: Rating.Null,
    isUnary: false,
    isShow: true,
  },
  {
    // value: '√',
    value: EOperator.Sqrt,
    category: ECategoryButtons.Operator,
    rating: Rating.UnaryOperator,
    isUnary: true,
    isShow: true,
  },
  {
    // value: '%',
    value: EOperator.Percent,
    category: ECategoryButtons.Operator,
    rating: Rating.High,
    isUnary: true,
    isShow: true,
  },
  {
    // value: '/',
    value: EOperator.Divide,
    category: ECategoryButtons.Operator,
    rating: Rating.Medium,
    isUnary: false,
    isShow: true,
  },
  {
    value: '7',
    category: ECategoryButtons.Digit,
    rating: Rating.Null,
    isUnary: false,
    isShow: true,
  },
  {
    value: '8',
    category: ECategoryButtons.Digit,
    rating: Rating.Null,
    isUnary: false,
    isShow: true,
  },
  {
    value: '9',
    category: ECategoryButtons.Digit,
    rating: Rating.Null,
    isUnary: false,
    isShow: true,
  },
  {
    // value: '*',
    value: EOperator.Multiply,
    category: ECategoryButtons.Operator ,
    rating: Rating.Medium,
    isUnary: false,
    isShow: true,
  },
  {
    value: '4',
    category: ECategoryButtons.Digit,
    rating: Rating.Null,
    isUnary: false,
    isShow: true,
  },
  {
    value: '5',
    category: ECategoryButtons.Digit,
    rating: Rating.Null,
    isUnary: false,
    isShow: true,
  },
  {
    value: '6',
    category: ECategoryButtons.Digit,
    rating: Rating.Null,
    isUnary: false,
    isShow: true,
  },
  {
    // value: '-',
    value: EOperator.Minus,
    category: ECategoryButtons.Operator,
    rating: Rating.Low,
    isUnary: false,
    isShow: true,
  },
  {
    value: '1',
    category: ECategoryButtons.Digit,
    rating: Rating.Null,
    isUnary: false,
    isShow: true,
  },
  {
    value: '2',
    category: ECategoryButtons.Digit,
    rating: Rating.Null,
    isUnary: false,
    isShow: true,
  },
  {
    value: '3',
    category: ECategoryButtons.Digit,
    rating: Rating.Null,
    isUnary: false,
    isShow: true,
  },
  {
    // value: '+',
    value: EOperator.Plus,
    category: ECategoryButtons.Operator,
    rating: Rating.Low,
    isUnary: false,
    isShow: true,
  },
  {
    value: '0',
    category: ECategoryButtons.Digit,
    rating: Rating.Null,
    isUnary: false,
    isShow: true,
  },
  {
    value: '00',
    category: ECategoryButtons.Digit,
    rating: Rating.Null,
    isUnary: false,
    isShow: true,
  },
  {
    value: ',',
    category: ECategoryButtons.Separator,
    rating: Rating.Null,
    isUnary: false,
    isShow: true,
  },
  {
    value: '=',
    category: ECategoryButtons.Equal,
    rating: Rating.Null,
    isUnary: false,
    isShow: true,
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

export const buttonData = {buttonValues, operatorsRating, buttonCategories, buttonsList: buttons};

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
