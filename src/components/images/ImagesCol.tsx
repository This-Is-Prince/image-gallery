import React, { FC } from "react";
import { ImagesType, UserType } from "../../types";
import ImageCard from "./ImageCard";

const ImagesCol: FC<{ images: ImagesType }> = ({ images }) => {
  return (
    <section className="flex flex-col gap-y-10">
      {images.map((image, index) => {
        const { id, likes, user, description, links, urls }=image
        const userObj: UserType = {
          name: user.name,
          username: user.username,
          twitter_username: user.twitter_username || "",
          instagram_username: user.instagram_username || "",
          profile_img: user.profile_image.medium,
        };
        return (
          <ImageCard
            key={id}
            description={description || ""}
            download_url={links.download}
            img_url={urls.regular}
            likes={likes}
            user={userObj}
          />
        );
      })}
    </section>
  );
};

export default ImagesCol;
