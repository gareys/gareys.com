import { useEffect, useState } from 'react';

export const useCountWithThreshold = (maxCount: number) => {
  const [count, setCount] = useState(0);
  const [thresholdReached, setThresholdReached] = useState(false);
  useEffect(() => {
    if (count === maxCount) {
      setThresholdReached(true);
    } else {
      setThresholdReached(false);
    }
  }, [count]);
  return { count, setCount, thresholdReached };
};
