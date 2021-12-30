import { createContext, useState, useContext, VFC, ReactNode, SetStateAction, Dispatch } from 'react';

type Response = {
  title_short2: String;
  twitter_account: String;
  public_url: String;
  title_short1: String
  sex: Number;
  twitter_hash_tag: String;
  id: Number;
  sequel: Number;
  created_at: String;
  cours_id: Number;
  title: String;
  title_short3: String;
  updated_at: String;
  product_companies: String;
}


const ResultContext = createContext<{
  result: Array<Response>;
  setResult: Dispatch<SetStateAction<Array<Response>>>
}>({
  result: [],
  setResult: () => {
    // no-op
  }
});

type Props = {
  children: ReactNode;
}

export const YearProvider:VFC<Props> = ({children}) => {
  const [result, setResult] = useState([]);

  return (
    <ResultContext.Provider value={{result, setResult}}>
      {children}
    </ResultContext.Provider>
  );
};


export const useResult = () => useContext(ResultContext)
