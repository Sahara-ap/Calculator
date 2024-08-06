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
};

export interface IButtons {
  value: string;
  category: ECategoryButtons;
  rating: number | null;
  isUnary: boolean;
}

export const buttons:IButtons[] = [
  {
    value: 'C',
    category: ECategoryButtons.Service,
    rating: Rating.Null,
    isUnary: false,
  },
  {
    value: '√',
    category: ECategoryButtons.Operator,
    rating: Rating.Null,
    isUnary: true,
  },
  {
    value: '%',
    category: ECategoryButtons.Operator,
    rating: Rating.High,
    isUnary: false,
  },
  {
    value: '/',
    category: ECategoryButtons.Operator,
    rating: Rating.Medium,
    isUnary: false,
  },
  {
    value: '7',
    category: ECategoryButtons.Digit,
    rating: Rating.Null,
    isUnary: false,
  },
  {
    value: '8',
    category: ECategoryButtons.Digit,
    rating: Rating.Null,
    isUnary: false,
  },
  {
    value: '9',
    category: ECategoryButtons.Digit,
    rating: Rating.Null,
    isUnary: false,
  },
  {
    value: '*',
    category: ECategoryButtons.Operator ,
    rating: Rating.Medium,
    isUnary: false,
  },
  {
    value: '4',
    category: ECategoryButtons.Digit,
    rating: Rating.Null,
    isUnary: false,
  },
  {
    value: '5',
    category: ECategoryButtons.Digit,
    rating: Rating.Null,
    isUnary: false,
  },
  {
    value: '6',
    category: ECategoryButtons.Digit,
    rating: Rating.Null,
    isUnary: false,
  },
  {
    value: '-',
    category: ECategoryButtons.Operator,
    rating: Rating.Low,
    isUnary: false,
  },
  {
    value: '1',
    category: ECategoryButtons.Digit,
    rating: Rating.Null,
    isUnary: false,
  },
  {
    value: '2',
    category: ECategoryButtons.Digit,
    rating: Rating.Null,
    isUnary: false,
  },
  {
    value: '3',
    category: ECategoryButtons.Digit,
    rating: Rating.Null,
    isUnary: false,
  },
  {
    value: '+',
    category: ECategoryButtons.Operator,
    rating: Rating.Low,
    isUnary: false,
  },
  {
    value: '0',
    category: ECategoryButtons.Digit,
    rating: Rating.Null,
    isUnary: false,
  },
  {
    value: '00',
    category: ECategoryButtons.Digit,
    rating: Rating.Null,
    isUnary: false,
  },
  {
    value: ',',
    category: ECategoryButtons.Separator,
    rating: Rating.Null,
    isUnary: false,
  },
  {
    value: '=',
    category: ECategoryButtons.Equal,
    rating: Rating.Null,
    isUnary: false,
  },
];


const buttonValues = buttons.map((item) => item.value);
const buttonRating = buttons.map((item) => item.rating);
const buttonCategories = buttons.map((item) => item.category);

export const buttonData = {buttonValues, buttonRating, buttonCategories};
