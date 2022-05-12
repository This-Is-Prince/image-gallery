import { Reducer } from "react";
import { Action, State } from "../types";

const INITIAL_STATE: State = {
  images: null,
  isLoading: true,
  popup: null,
  mode: "",
};

const reducer: Reducer<State, Action> = (state, action) => {
  switch (action.type) {
    case "ADD_IMAGES":
      return { ...state, images: action.payload, isLoading: false };
    case "OPEN_POPUP":
      return { ...state, popup: action.payload };
    case "CHANGE_MODE":
      return { ...state, mode: action.payload };
    default:
      return state;
  }
};
export { reducer, INITIAL_STATE };
