import { combineReducers, createStore } from "redux";
import commentsReducer from "./comments";

export const reducers = combineReducers({
  comments: commentsReducer,
});

const store = createStore(reducers, {});

export default store;
