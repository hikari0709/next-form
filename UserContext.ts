import { createContext } from 'react';

type values = {
  year: number;
  setYear: number;
};

export const DataContext = createContext<values>();
