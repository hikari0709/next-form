import { createContext } from 'react';

type values = {
  year: number;
  setYear:   (value: number) => void;
};

const defaultContext: values = {
  year: 1,
  setYear: () => {},
};

export const DataContext = createContext<values>(defaultContext);
