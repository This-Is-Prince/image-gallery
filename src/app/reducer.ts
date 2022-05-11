import { Reducer } from "react";
import { Action, State } from "../types";

const INITIAL_STATE: State = {
  images: null,
  mainBgImage: null,
  isLoading: true,
};

const reducer: Reducer<State, Action> = (state, action) => {
  switch (action.type) {
    case "ADD_IMAGES":
      if (state.mainBgImage === null) {
        return { ...state, images: action.payload };
      } else {
        return { ...state, images: action.payload, isLoading: false };
      }
    case "ADD_BG_IMAGES":
      if (state.images === null) {
        return { ...state, mainBgImage: action.payload };
      } else {
        return { ...state, mainBgImage: action.payload, isLoading: false };
      }
    default:
      return state;
  }
};
export { reducer, INITIAL_STATE };
