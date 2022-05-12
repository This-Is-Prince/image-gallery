import { Basic, Full } from "unsplash-js/dist/methods/photos/types";

type Mode = "light" | "";

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

interface Context {
  appState: State;
  dispatch: INITIAL_STATE;
}

interface ImageCardType {
  image: Basic;
}

export { State, Action, Context, ImageCardType };
