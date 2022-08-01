import { useEffect } from "react";
import { AiOutlineLike } from "react-icons/ai";
import { FiTwitter, FiInstagram } from "react-icons/fi";
import { GrClose } from "react-icons/gr";
import useImageStore from "../../app/imageStore";
import { convertLikes } from "../../utils";

const Modal = () => {
  const { selectedImage, unSelectImage } = useImageStore((store) => {
    return {
      selectedImage: store.selectedImage,
      unSelectImage: store.unSelectImage,
    };
  });
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  if (!selectedImage) {
    return <></>;
  }
  return (
    <section className="fixed z-[100] inset-0 flex justify-center items-center p-5 w-screen h-screen bg-gray-500 bg-opacity-50">
      <div className="bg-black relative rounded-md h-5/6">
        <button
          className="absolute -top-3 -right-3 bg-white rounded-full p-2 text-base"
          onClick={() => {
            unSelectImage();
          }}
        >
          <GrClose />
        </button>
        <div className="h-full grid grid-rows-2">
          <article className="row-span-2">
            <div className="h-full overflow-auto scrollbar-thin scrollbar-thumb-white scrollbar-track-transparent rounded-t-md">
              <img
                src={selectedImage?.img_url}
                className="shrink-0 block w-auto h-auto rounded-t-md"
                alt={selectedImage?.description}
              />
            </div>
          </article>
          <article className="p-3 flex flex-col gap-y-5 justify-center text-white">
            <div className="flex items-center w-full gap-x-5">
              <img
                className="rounded-full"
                src={selectedImage?.user.profile_img}
                alt="profile img"
              />
              <p className="flex flex-col italic">
                <span className="font-bold">{selectedImage?.user.name}</span>
                {selectedImage?.user.username && (
                  <span className="text-sm text-gray-400">
                    @ {selectedImage?.user.username}
                  </span>
                )}
              </p>
              <div className="flex justify-between items-center flex-grow text-sm text-gray-400">
                <div className="flex gap-x-2">
                  {selectedImage?.user.instagram_username && (
                    <p className="flex items-center text-xs gap-x-1">
                      <span>
                        <FiInstagram />
                      </span>
                      <span>/{selectedImage?.user.instagram_username}</span>
                    </p>
                  )}
                  {selectedImage?.user.twitter_username && (
                    <p className="flex items-center text-xs gap-x-1">
                      <span>
                        <FiTwitter />
                      </span>
                      <span> /{selectedImage?.user.twitter_username}</span>
                    </p>
                  )}
                </div>
                <div className="flex gap-x-2">
                  <p className="flex items-center text-xs gap-x-1">
                    <span>
                      <AiOutlineLike />
                    </span>
                    <span>{convertLikes(selectedImage?.likes)}</span>
                  </p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Modal;
