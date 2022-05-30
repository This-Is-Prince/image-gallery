import { Reducer, useReducer } from "react";
import { Random } from "unsplash-js/dist/methods/photos/types";
import { Action, ImagesType, State } from "../types";

const state: State = {
  query: "",
  images: [[], [], [], []],
};

const reducer: Reducer<State, Action> = (state, action) => {
  switch (action.type) {
    case "ADD_IMAGES":
      const images: ImagesType[] = [[], [], [], []];
      const results = action.payload;
      results.forEach((image, index) => {
        images[index % 4].push(image as Random);
      });
      return { ...state, images: images };
    case "ADD_QUERY":
      return { ...state, query: action.payload };
    default:
      return state;
  }
};

const useGlobalReducer = () => {
  return useReducer(reducer, state);
};

export default useGlobalReducer;
