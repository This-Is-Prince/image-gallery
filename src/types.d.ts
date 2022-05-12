import { Basic, Full } from "unsplash-js/dist/methods/photos/types";

type Mode = "dark" | "";

interface State {
  images: Basic[] | null;
  isLoading: boolean;
  popup: Basic | null;
  mode: Mode;
}
type Action =
  | { type: "ADD_IMAGES"; payload: Basic[] }
  | { type: "ADD_BG_IMAGES"; payload: Full }
  | { type: "OPEN_POPUP"; payload: Basic }
  | { type: "CHANGE_MODE"; payload: Mode };

interface SearchBarProps {}
interface EmptyImagesProps {
  query: string;
}

interface ImagesProps {
  images: Basic[];
}

interface Context {
  appState: State;
  dispatch: React.Dispatch<Action>;
}

interface ImageCardProps {
  image: Basic;
}

export {
  State,
  Action,
  Context,
  ImageCardProps,
  SearchBarProps,
  ImagesProps,
  EmptyImagesProps,
};
