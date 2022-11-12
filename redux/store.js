import { createStore } from "redux";
import reducer from "./reducers/index";

export default function configureState(initialState) {
  return createStore(reducer, initialState);
}
