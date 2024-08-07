export interface ILocalMath {
  '+': () => number;
  '-': () => number;
  '/': () => number;
  '*': () => number;
  '√': () => number;
  '%': () => number;
}

export interface IUnaryOperator {
  sqrt: '√';
}

export interface IPartialOperator {
  percent: '%';
}
