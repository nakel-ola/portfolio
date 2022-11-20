import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { ResponseData } from "./pages/api/index";
import { fetchData } from "./utils/fetchData";

const StateContext = createContext<ResponseData | null>(null);

const Provider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState<ResponseData | null>(null);

  const getData = async () => {
    const res = await fetchData();

    setData(res);
  };

  useEffect(() => {
    getData();
  }, []);

  return <StateContext.Provider value={data}>{children}</StateContext.Provider>;
};

export default Provider;

export const useStore = (): ResponseData | null => {
  return useContext(StateContext);
};
