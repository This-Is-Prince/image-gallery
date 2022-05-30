import { useEffect } from "react";
import { Random } from "unsplash-js/dist/methods/photos/types";
import { unsplash } from "../../api/unsplash";
import { useAppContext } from "../../context/AppContext";
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
      {images.map(
        (
          { id, likes, user, alt_description, description, links, urls },
          index
        ) => {
          const obj = {
            description,
            likes,
            img_url: urls.regular,
            download_url: links.download,
            user: {
              name: user.name,
              username: user.username,
              twitter_username: user.twitter_username,
              instagram_username: user.instagram_username,
              total_downloads: user,
            },
          };
          if (index === 0) {
            console.log(alt_description);
            console.log(description);
            console.log(links);
            console.log(urls);
            console.log(likes);
            console.log(user);
          }
          return <ImageCard key={id} />;
        }
      )}
    </section>
  );
};

export default Images;
