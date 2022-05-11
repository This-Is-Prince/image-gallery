interface State {
  images: Basic[];
}
type Action = { type: "ADD_IMAGES"; payload: Basic[] };

interface Context {
  appState: State;
  dispatch: INITIAL_STATE;
}

interface ImageCardType {
  image: Basic;
}

export { State, Action, Context, ImageCardType };
