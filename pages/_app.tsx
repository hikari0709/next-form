import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import React, { useState } from 'react'

const MyApp = ({ Component, pageProps }: AppProps) => {

  const [year, setYear] = useState('');
  const [season, setSeason] = useState('');

  return (
    <Component {...pageProps} year={year} setYear={setYear} season={season} setSeason={setSeason} />
  );
}
export default MyApp
