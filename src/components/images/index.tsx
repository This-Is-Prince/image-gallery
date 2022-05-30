import { useEffect } from "react";
import { Random } from "unsplash-js/dist/methods/photos/types";
import { unsplash } from "../../api/unsplash";
import { useAppContext } from "../../context/AppContext";
import ImagesCol from "./ImagesCol";

const Images = () => {
  const {
    dispatch,
    state: { images },
  } = useAppContext()!;
  const getRandomPhotos = async () => {
    try {
      const res = await unsplash.photos.getRandom({ count: 30 });
      if (res.response) {
        let results: Random[] = [];
        if (Array.isArray(res.response)) {
          results = res.response as Random[];
        } else {
          results.push(res.response as Random);
        }
        dispatch({ type: "ADD_IMAGES", payload: results });
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getRandomPhotos();
  }, []);
  return (
    <div className="p-5 md:py-10 md:px-20 grid gap-10 lg:grid-cols-2 2xl:grid-cols-4">
      {images.map((images, index) => {
        return <ImagesCol key={index} images={images} />;
      })}
    </div>
  );
};

export default Images;
