import { Basic, Full, Random } from "unsplash-js/dist/methods/photos/types";

type ImagesType = Basic[] | Random[];

interface ImageStoreType {
  images: ImagesType[];
  isModalOpen: boolean;
  selectedImage: SelectedImage | null;
  addImages: (images: ImagesType) => void;
  toggleModal: () => void;
  selectImage: (obj: SelectedImage | null) => void;
  unSelectImage: () => void;
}

interface SearchBarType {
  searchQuery: string;
  getPhotos: () => Promise<void>;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}

interface UserType {
  name: string;
  username: string;
  twitter_username: string;
  instagram_username: string;
  profile_img: string;
}

interface ImageCardType {
  likes: number;
  user: UserType;
  img_url: string;
  description: string;
  download_url: string;
}


interface SelectedImage extends ImageCardType {
  user: UserType
}


export { SearchBarType, ImageCardType, UserType, ImagesType, ImageStoreType };
