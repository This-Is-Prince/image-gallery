import { createContext, FC, useContext } from "react";
import { Context } from "../types";
import useGlobalReducer from "./AppReducer";

const AppContext = createContext<Context | null>(null);

const AppWrapper: FC<any> = ({ children }) => {
  const [state, dispatch] = useGlobalReducer()!;
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
export function useAppContext() {
  return useContext(AppContext);
}

export default AppWrapper;
