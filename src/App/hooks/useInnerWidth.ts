import { useEffect, useState } from 'react';

export const useInnerWidth = () => {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  const updateInnerWidth = () => {
    setInnerWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', updateInnerWidth);

    return (() => window.removeEventListener('resize', updateInnerWidth));
  });

  return {innerWidth};
};
