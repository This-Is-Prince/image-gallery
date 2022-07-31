import { Random } from "unsplash-js/dist/methods/photos/types";
import create from "zustand";
import { devtools, persist } from "zustand/middleware";
import { ImageStoreType, ImagesType } from "../types";

const useImageStore = create<ImageStoreType>()(
  devtools(
    persist(
      (set) => ({
        images: [[], [], [], []],
        isModalOpen: false,
        selectedImage: null,
        addImages: (images) => {
          const results: ImagesType[] = [[], [], [], []];
          images.forEach((image, index) => {
            results[index % 4].push(image as Random);
          });
          set((prevState) => ({ ...prevState, images: results }));
        },
        toggleModal: () => {
          set((prevState) => ({
            ...prevState,
            isModalOpen: !prevState.isModalOpen,
          }));
        },
        selectImage: (selectedImage) => {
          set((prevState) => ({ ...prevState, selectedImage }));
        },
        unSelectImage: () => {
          set((prevState) => ({
            ...prevState,
            selectedImage: null,
            isModalOpen: !prevState.isModalOpen,
          }));
        },
      }),
      { name: "images" }
    )
  )
);
export default useImageStore;
