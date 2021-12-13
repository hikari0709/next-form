import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import { useForm, FormProvider } from "react-hook-form";

const date = new Date();
const thisYear = date.getFullYear();

export type FormType = {
  year: number;
  season: number;
};


const MyApp = ({ Component, pageProps }: AppProps) => {

  const methods = useForm<FormType>({
    defaultValues: {
      year: thisYear,
      season: 1,
    },
  });

  return (
    <FormProvider {...methods}>
      <Component {...pageProps} />
    </FormProvider>
  );
}
export default MyApp
