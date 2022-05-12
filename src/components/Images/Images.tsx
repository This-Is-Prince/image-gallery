import { FC } from "react";
import "./style.css";
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
