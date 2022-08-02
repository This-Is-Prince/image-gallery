import useImageStore from "../../app/imageStore";
import { TSearchPhotos } from "../../types";
import { getPhotos } from "../../utils";
import SearchBar from "./SearchBar";

const SearchBarCard = () => {
  const addImages = useImageStore((state) => state.addImages);

  const searchPhotos: TSearchPhotos = async (searchQuery) => {
    const photos = await getPhotos(searchQuery);
    addImages(photos);
  };

  return (
    <section className="bg-[url('/assets/mountain.jpg')] bg-cover bg-no-repeat bg-center px-10 min-h-[28rem] flex flex-col gap-y-5 justify-center items-center bg-blend-overlay bg-gray-600">
      <h1 className="text-white font-bold text-3xl text-center">
        Download High Display Images by creators
      </h1>
      <p className="text-center text-gray-300 ">
        Over 2.4 million+ stock Images by our talented community
      </p>
      <SearchBar searchPhotos={searchPhotos} />
    </section>
  );
};

export default SearchBarCard;
