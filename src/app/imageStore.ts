import { Random } from 'unsplash-js/dist/methods/photos/types';
import create, { StateCreator } from 'zustand';
import { ImageStoreType, ImagesType } from '../types';

const imageStore: StateCreator<ImageStoreType> = (set) => ({
    images: [[], [], [], []],
    addImages: (images) => {
        const results: ImagesType[] = [[], [], [], []];
        images.forEach((image, index) => {
            results[index % 4].push(image as Random);
        });
        set((prevState) => ({ ...prevState, images: results }));
    },
});

const useImageStore = create(imageStore);
export default useImageStore;
