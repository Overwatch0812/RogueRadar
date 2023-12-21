import { configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import searchReducer from "../features/search/searchSlice";

const rootReducer = {
  search: searchReducer,
};
export const store = configureStore({
  reducer: rootReducer,
});
