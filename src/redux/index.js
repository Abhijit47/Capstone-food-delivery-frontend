import { configureStore } from "@reduxjs/toolkit";
import userSlices from "./slices/userSlices";
import restaurentSlices from "./slices/restaurentSlices";

// Create our store
export const store = configureStore({
  reducer: {
    users: userSlices,
    restaurants: restaurentSlices
  }
});
