import React, { FC, useContext } from "react";
import { UserContext } from "../../app/context";
import { ImagesProps } from "../../types";
import ImageCard from "./ImageCard";

const Images: FC<ImagesProps> = ({ images }) => {
  return (
    <section className="images">
      {images.map((image) => {
        return <ImageCard key={image.id} image={image} />;
      })}
    </section>
  );
};

export default Images;
