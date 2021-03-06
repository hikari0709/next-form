/* eslint-disable react/jsx-no-undef */
import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import React from 'react'
import { FormProvider, useForm } from 'react-hook-form';
import { ResultProvider } from '../hooks/ResultProvider';

export type FormType = {
  year: number;
  years: Array<number>;
  season: number;
};

const MyApp = ({ Component, pageProps }: AppProps) => {
  const date = new Date();
  const thisMonth = date.getMonth() + 1;

  const setDefaultSeason = (value: number) => {
    switch (value) {
      case 1:
      case 2:
      case 3:
        return 1;
        break;
      case 4:
      case 5:
      case 6:
        return 2;
        break;
      case 7:
      case 8:
      case 9:
        return 3;
        break;
      case 10:
      case 11:
      case 12:
        return 4;
        break;
    }
  }

  const methods = useForm<FormType>({
    defaultValues: {
      year: date.getFullYear(),
      season: setDefaultSeason(thisMonth),
    },
  });

  return (
    <FormProvider {...methods}>
      <ResultProvider>
        <Component
          {...pageProps}
        />
      </ResultProvider>
    </FormProvider>
  );
}
export default MyApp
