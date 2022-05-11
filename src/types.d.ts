import { Basic, Full } from "unsplash-js/dist/methods/photos/types";

interface State {
  images: Basic[] | null;
  mainBgImage: Full | null;
  isLoading: boolean;
}
type Action =
  | { type: "ADD_IMAGES"; payload: Basic[] }
  | { type: "ADD_BG_IMAGES"; payload: Full };

interface Context {
  appState: State;
  dispatch: INITIAL_STATE;
}

interface ImageCardType {
  image: Basic;
}

export { State, Action, Context, ImageCardType };
