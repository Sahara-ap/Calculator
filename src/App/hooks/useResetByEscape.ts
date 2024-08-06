import { useEffect } from 'react';

export const useResetByEscape = (callback: () => void): void => {
  useEffect(() => {
    const handleKeydown = (evt: KeyboardEvent) => {
      if (evt.key.startsWith('Esc')) {
        callback();
      }
    };

    document.addEventListener('keydown', handleKeydown);

    return () => document.removeEventListener('keydown', handleKeydown);
  }, [callback]);
};
