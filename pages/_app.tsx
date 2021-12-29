import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import React, { useState, useEffect } from 'react'

const MyApp = ({ Component, pageProps }: AppProps) => {

  const date = new Date();
  const thisMonth = date.getMonth() + 1;
  const [year, setYear] = useState(date.getFullYear());
  const [season, setSeason] = useState(1);

  // const setDefaultSeason = (month: number) => {
  //   switch (month) {
  //     case 1:
  //     case 2:
  //     case 3:
  //       setSeason(1);
  //       setSeasonString('春');
  //       break;
  //     case 4:
  //     case 5:
  //     case 6:
  //       return 2;
  //       setSeason(2);
  //       setSeasonString('夏');
  //       break;
  //     case 7:
  //     case 8:
  //     case 9:
  //       setSeason(3);
  //       setSeasonString('秋');
  //       break;
  //     case 10:
  //     case 11:
  //     case 12:
  //       setSeason(4);
  //       setSeasonString('冬');
  //       break;
  //   }
  // }

  // useEffect(() => {
  //   setDefaultSeason(thisMonth);
  // }, []);

  return (
    <Component
      {...pageProps}
      year={year}
      setYear={setYear}
      season={season}
      setSeason={setSeason}
    />
  );
}
export default MyApp
