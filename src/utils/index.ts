import { unsplash } from "../api/unsplash";
import { ImagesType, TGetPhotos, TGetRandomPhotos } from "../types";
import { toast } from "react-toastify";

const convertLikes = (likes: number) => {
  if (likes < 1000) {
    return likes + "";
  } else {
    return (likes / 1000).toFixed(1) + "k";
  }
};

const getPhotos: TGetPhotos = async (searchQuery) => {
  try {
    const res = await unsplash.search.getPhotos({
      query: searchQuery,
    });
    if (res.response && res.response.results.length > 0) {
      toast.success("Successfully find images");
      return res.response.results;
    } else {
      toast.warn(`No images related to "${searchQuery}"`);
      return [];
    }
  } catch (error) {
    toast.error("Can't find images there is some error.");
    console.log(error);
    return [];
  }
};

const getRandomPhotos: TGetRandomPhotos = async () => {
  try {
    const res = await unsplash.photos.getRandom({ count: 30 });
    if (res.response) {
      let results: ImagesType = [];
      if (Array.isArray(res.response)) {
        results = res.response as ImagesType;
      } else {
        results.push(res.response);
      }
      toast.success("Successfully find random images.");
      return results;
    } else {
      toast.warn(`Can't find random images.`);
      return [];
    }
  } catch (error) {
    toast.error("Can't find images there is some error.");
    console.log(error);
    return [];
  }
};

export { convertLikes, getPhotos, getRandomPhotos };
