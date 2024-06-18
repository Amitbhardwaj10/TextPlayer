import { configureStore } from "@reduxjs/toolkit";
import textplayerReducer from "./slices/Slice";

const store = configureStore({
  reducer: textplayerReducer,
})

export default store;