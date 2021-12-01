import '../styles/globals.scss';
import React, { useState } from 'react';
import type { AppProps } from 'next/app';
import { DataUserContext } from '../UserContext';

const date = new Date();
const thisYear = date.getFullYear();

function MyApp({ Component, pageProps }: AppProps) {

  const [year, setYear] = useState(thisYear);

  console.log(pageProps);
  return (
    <DataUserContext.Provider value="hello from context!!">
      <Component {...pageProps} />
    </DataUserContext.Provider>
  );
}
export default MyApp
