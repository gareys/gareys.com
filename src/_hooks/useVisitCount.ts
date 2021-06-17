import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';

export const useVisitCount = () => {
  const { value, setValue } = useLocalStorage('visits');

  useEffect(() => {
    const interval = setInterval(() => {
      const newVisits = String(
        Number(value || Math.random().toString().slice(2, 13)) + 1
      );
      setValue(newVisits);
    }, 10);

    return () => clearInterval(interval);
  });

  return value || '';
};
