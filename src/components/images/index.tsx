import { useEffect } from "react";
import { Random } from "unsplash-js/dist/methods/photos/types";
import { unsplash } from "../../api/unsplash";
import useImageStore from "../../app/imageStore";
import ImagesCol from "./ImagesCol";

const Images = () => {
  const { addImages, images } = useImageStore((state) => ({ images: state.images, addImages: state.addImages }));
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
        addImages(results);
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
      {images.map((imagesCol, index) => {
        return <ImagesCol key={index} images={imagesCol} />;
      })}
    </div>
  );
};

export default Images;
