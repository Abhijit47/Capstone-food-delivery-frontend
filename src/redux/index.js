import { configureStore } from "@reduxjs/toolkit";
import userSlices from "./slices/userSlices";

// Create our store
export const store = configureStore({
  reducer: {
    users: userSlices,
  }
});
