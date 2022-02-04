import { createContext, useState, useContext, VFC, ReactNode, SetStateAction, Dispatch } from 'react';

type Response = {
  public_url: String;
  title: String;
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

const ResultProvider:VFC<Props> = ({children}) => {
  const [result, setResult] = useState<Response[]>([]);

  return (
    <ResultContext.Provider value={{ result, setResult }}>
      {children}
    </ResultContext.Provider>
  );
};

export { ResultContext, ResultProvider }

//
