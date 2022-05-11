interface State {}
interface Action {}
interface Context {
  appState: State;
  dispatch: INITIAL_STATE;
}

export { State, Action, Context };
