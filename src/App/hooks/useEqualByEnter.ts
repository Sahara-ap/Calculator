import { useEffect } from 'react';

export const useEqualByEnter = (callback: () => void): void => {
  useEffect(() => {
    const handleKeydown = (evt: KeyboardEvent) => {
      if (evt.key.startsWith('Ent')) {
        callback();
      }
    };

    document.addEventListener('keydown', handleKeydown);

    return () => document.removeEventListener('keydown', handleKeydown);
  }, [callback]);
};
