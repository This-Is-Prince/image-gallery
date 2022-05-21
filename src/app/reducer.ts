import React, { Reducer, useReducer } from "react";
import { Action, State } from "../types";

const state: State = {
  query: "",
  images: [],
};

const reducer: Reducer<State, Action> = (state, action) => {
  switch (action.type) {
    case "ADD_IMAGES":
      return { ...state };
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
