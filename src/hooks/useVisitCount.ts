import { useState, useEffect } from 'react';

export const useVisitCount = () => {
  const localStorageVisits = window.localStorage.getItem('visits')
    ? Number(window.localStorage.getItem('visits'))
    : undefined;
  const [visits, setVisits] = useState(
    localStorageVisits || Number(Math.random().toString().slice(2, 15))
  );

  useEffect(() => {
    const newVisits = visits + 1;
    setVisits(newVisits);
    window.localStorage.setItem('visits', newVisits.toString());
  }, []);

  return visits;
};
