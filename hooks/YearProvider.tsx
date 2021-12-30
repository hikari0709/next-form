import { createContext, useState, useContext, VFC, ReactNode, SetStateAction, Dispatch } from 'react';


const YearContext = createContext<{
  year: number;
  setYear:Dispatch<SetStateAction<number>>
}>({
  year: 0,
  setYear: () => {
    // no-op
  }
});

type Props = {
  children: ReactNode;
}

export const YearProvider:VFC<Props> = ({children}) => {
  const date = new Date();
  const [year, setYear] = useState(date.getFullYear());

  return (
    <YearContext.Provider value={{year, setYear}}>
      {children}
    </YearContext.Provider>
  );
};


export const useYear = () => useContext(YearContext)
