import { Basic, Full, Random } from "unsplash-js/dist/methods/photos/types";

type ImagesType = Basic[] | Random[];

interface State {
  query: string;
  images: ImagesType[];
}

type Action =
  | { type: "ADD_QUERY"; payload: string }
  | { type: "ADD_IMAGES"; payload: Basic[] };

interface Context {
  state: State;
  dispatch: React.Dispatch<Action>;
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

export {
  State,
  Action,
  Context,
  SearchBarType,
  ImageCardType,
  UserType,
  ImagesType,
};
