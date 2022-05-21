import { createContext, useContext } from "react";
import { Context } from "../types";

const AppContext = createContext<Context | null>(null);

const useAppContext = () => {
  return useContext(AppContext);
};
export { useAppContext, AppContext };
