import { useState, useEffect } from "react";
import { createApi } from "unsplash-js";
import { Basic } from "unsplash-js/dist/methods/photos/types";

const App = () => {
  const [images, setImages] = useState<Basic[]>([]);
  useEffect(() => {
    const unsplash = createApi({
      accessKey: "xs-zwbZ78ao1DOL22bLSmPV2SgHtd9uK5h7HTkAiFMw",
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
