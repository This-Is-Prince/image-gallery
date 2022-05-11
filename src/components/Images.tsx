import React, { useContext } from "react";
import { UserContext } from "../app/context";
import ImageCard from "./ImageCard";

const Images = () => {
  const {
    appState: { images },
    dispatch,
  } = useContext(UserContext)!;
  return (
    <section className="images">
      {images.map((image) => {
        return <ImageCard key={image.id} image={image} />;
      })}
    </section>
  );
};

export default Images;
