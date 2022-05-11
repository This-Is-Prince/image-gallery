import { Reducer } from "react";
import { Action, State } from "../types";

const INITIAL_STATE: State = { images: [] };

const reducer: Reducer<State, Action> = (state, action) => {
  switch (action.type) {
    case "ADD_IMAGES":
      return { ...state, images: action.payload };
    default:
      return state;
  }
};
export { reducer, INITIAL_STATE };
