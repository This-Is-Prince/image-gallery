import Content from "./components/content/Content";
import Header from "./components/header/Header";
import AppWrapper from "./context/AppContext";

const App = () => {
  return (
    <AppWrapper>
      <Header />
      <Content />
    </AppWrapper>
  );
};

export default App;
