import { useEffect, useReducer } from "react";
import { UserContext } from "./app/context";
import Header from "./components/Header";
import { INITIAL_STATE, reducer } from "./app/reducer";
import Main from "./components/Main";
import { unsplash } from "./api/unsplash";

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
    </UserContext.Provider>
  );
};

export default App;

/* 
const App = () => {
  const [images, setImages] = useState<Basic[]>([]);
  useEffect(() => {
    const unsplash = createApi({
      accessKey: import.meta.env.VITE_UNSPLASH_API_ACCESS_KEY,
    });
    
  }, []);
  return (
    <div>
      {images.map((image) => {
        console.log(image.id);
        return (
          <section key={image.id}>
            <img
              src={image.links.download}
              width="250"
              height="250"
              alt={image.alt_description!}
            />
          </section>
        );
      })}
    </div>
  );
};

export default App;
 */
