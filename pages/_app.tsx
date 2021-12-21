import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import { useForm, FormProvider } from "react-hook-form";
import React, { useState } from 'react'

const date = new Date();
const thisYear = date.getFullYear();

export type FormType = {
  year: number;
  season: number;
  result: Array<Response>;
};


const MyApp = ({ Component, pageProps }: AppProps) => {

  const methods = useForm<FormType>({
    defaultValues: {
      year: thisYear,
      season: 1,
      result: [],
    },
  });

  const [year, setYear] = useState();
  const [season, setSeason] = useState();

  return (
    <FormProvider {...methods}>
      <Component {...pageProps} year={year} setYear={setYear} season={season} setSeason={setSeason} />
    </FormProvider>
  );
}
export default MyApp
