import { AppContext } from "./app/context";
import useGlobalReducer from "./app/reducer";
import Content from "./components/content/Content";
import Header from "./components/header/Header";

const App = () => {
  const [state, dispatch] = useGlobalReducer();
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <Header />
      <Content />
    </AppContext.Provider>
  );
};

export default App;
