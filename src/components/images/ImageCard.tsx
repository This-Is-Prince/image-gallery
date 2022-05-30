import { AiOutlineLike } from "react-icons/ai";
import { FC } from "react";
import { ImageCardType } from "../../types";

const ImageCard: FC<ImageCardType> = ({
  description,
  download_url,
  img_url,
  likes,
  user,
}) => {
  return (
    <article className="border-[1px] border-gray-200  rounded-md">
      <div>
        <img
          src={img_url}
          className="block object-cover object-center rounded-t-md"
          alt={description}
        />
      </div>
      <div className="p-3 flex gap-x-5 items-center">
        <img
          className="rounded-full"
          src={user.profile_img}
          alt="profile img"
        />
        <p className="flex flex-col italic">
          <span className="font-bold">{user.name}</span>
          <span className="text-sm text-gray-400">
            @ {user.twitter_username}
          </span>
        </p>
        <p className="ml-auto flex items-center gap-x-1">
          <AiOutlineLike />

          <span className="text-xs">{likes}</span>
        </p>
      </div>
    </article>
  );
};

export default ImageCard;
