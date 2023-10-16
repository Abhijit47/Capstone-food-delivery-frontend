import { createSlice } from "@reduxjs/toolkit";
// import the user action to create reducer for login a user
import signIn from "../actions/userActions";

// create user slices
const userSlices = createSlice({
  name: "user",
  initialState: {
    isLoading: false,
    isError: false,
    token: ""
  },
  reducers: {},
  extraReducers: (builder) => {
    // 1. if state is pending or not
    builder.addCase(signIn.pending, (state) => {
      state.isLoading = true;
    });

    // 2. if state is error or not
    builder.addCase(signIn.rejected, (state) => {
      state.isError = true;
    });

    // 3. if state is resolved
    builder.addCase(signIn.fulfilled, (state, action) => {
      state.token = action.payload;
    });
  }
});

// We need export the user slice
export default userSlices.reducer;