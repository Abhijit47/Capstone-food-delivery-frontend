import { createSlice } from "@reduxjs/toolkit";
// import the restaurant action to create reducer for login a restaurent admin
import restaurantSignIn from "../actions/restaurantAction";

let initialState = {
  isLoading: false,
  isError: false,
  token: ""
};

// create user slices
const restaurantSlices = createSlice({
  name: "restaurant",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    // 1. if state is pending or not
    builder.addCase(restaurantSignIn.pending, (state) => {
      state.isLoading = true;
    });

    // 2. if state is error or not
    builder.addCase(restaurantSignIn.rejected, (state, action) => {
      state.isError = true;
    });

    // 3. if state is resolved
    builder.addCase(restaurantSignIn.fulfilled, (state, action) => {
      // state.initialState = Object.assign({}, action.payload);
      state.token = action.payload;
    });
  }
});

// We need export the user slice
export default restaurantSlices.reducer;