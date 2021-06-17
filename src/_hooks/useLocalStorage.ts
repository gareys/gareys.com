import { useEffect, useState } from 'react';

export const useLocalStorage = (key: string) => {
  const [value, setValue] = useState<string | null>(
    window.localStorage.getItem(key)
  );

  useEffect(() => {
    if (value) {
      window.localStorage.setItem(key, value);
    }
  }, [value]);

  return { value, setValue };
};
