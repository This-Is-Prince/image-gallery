import { useEffect, useReducer } from "react";
import { UserContext } from "./app/context";
import Header from "./components/Header/Header";
import { INITIAL_STATE, reducer } from "./app/reducer";
import Main from "./components/Main";
import { unsplash } from "./api/unsplash";
import ImageCardPopUp from "./components/Images/ImageCardPopUp";

const App = () => {
  const [appState, dispatch] = useReducer(reducer, INITIAL_STATE);
  useEffect(() => {
    unsplash.photos.list({ page: 1, perPage: 18 }).then((data) => {
      if (
        data !== undefined &&
        data.response !== undefined &&
        data.response.results !== undefined
      ) {
        dispatch({ payload: data.response.results, type: "ADD_IMAGES" });
      }
    });
  }, []);
  return (
    <UserContext.Provider value={{ appState: appState, dispatch: dispatch }}>
      <Header />
      <Main />
      {appState.popup !== null && <ImageCardPopUp image={appState.popup} />}
    </UserContext.Provider>
  );
};

export default App;
