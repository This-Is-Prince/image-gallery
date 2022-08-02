import { unsplash } from "../api/unsplash";
import { ImagesType, TGetPhotos, TGetRandomPhotos } from "../types";

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
    if (res.response) {
      return res.response.results;
    }
  } catch (error) {
    console.log(error);
  }
  return [];
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
      return results;
    }
  } catch (error) {
    console.log(error);
  }
  return [];
};

export { convertLikes, getPhotos, getRandomPhotos };
