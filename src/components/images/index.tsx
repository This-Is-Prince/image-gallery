import { useEffect } from "react";
import { Random } from "unsplash-js/dist/methods/photos/types";
import { unsplash } from "../../api/unsplash";
import { useAppContext } from "../../app/context";
import ImageCard from "./ImageCard";

const Images = () => {
  const {
    dispatch,
    state: { images },
  } = useAppContext()!;
  useEffect(() => {
    unsplash.photos
      .getRandom({ count: 10 })
      .then((res) => {
        if (res.response) {
          dispatch({ type: "ADD_IMAGES", payload: res.response as Random[] });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <section>
      {images.map(({ id, likes, user }, index) => {
        if (index === 0) {
          console.log(user);
        }
        return <ImageCard key={id} />;
      })}
    </section>
  );
};

export default Images;
