import { useState, useEffect, useReducer } from "react";
import { createApi } from "unsplash-js";
import { Basic } from "unsplash-js/dist/methods/photos/types";
import { UserContext } from "./app/context";
import Navbar from "./components/Navbar";
import { INITIAL_STATE, reducer } from "./app/reducer";

const App = () => {
  const [appState, dispatch] = useReducer(reducer, INITIAL_STATE);
  return (
    <UserContext.Provider value={{ appState: appState, dispatch: dispatch }}>
      <Navbar />
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
    unsplash.photos.list({}).then((data) => {
      if (
        data !== undefined &&
        data.response !== undefined &&
        data.response.results !== undefined
      ) {
        setImages(data.response.results);
      }
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
