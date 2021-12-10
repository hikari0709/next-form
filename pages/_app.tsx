import '../styles/globals.scss';
import React, { useState } from 'react';
import type { AppProps } from 'next/app';
import { DataContext } from '../UserContext';

const date = new Date();
const thisYear = date.getFullYear();

function MyApp({ Component, pageProps }: AppProps) {

  const [year, setYear] = useState(thisYear);

  const updateYear = (value: number): void => {
    setYear(value);
  }

  const values = {
    year,
    updateYear,
  }
  return (
    <DataContext.Provider value={values}>
      <Component {...pageProps} />
    </DataContext.Provider>
  );
}
export default MyApp
