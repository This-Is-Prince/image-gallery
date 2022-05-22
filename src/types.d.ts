import { Basic, Full } from "unsplash-js/dist/methods/photos/types";

interface State {
  query: string;
  images: Basic[];
}

type Action =
  | { type: "ADD_QUERY"; payload: string }
  | { type: "ADD_IMAGES"; payload: Basic[] };

interface Context {
  state: State;
  dispatch: React.Dispatch<Action>;
}

export { State, Action, Context };
