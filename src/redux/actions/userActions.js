import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// create a user action
const signIn = createAsyncThunk(
  "signIn",

  // create payload Creator
  async (payload) => {
    // try to login here and send payload to userSlice for further use.
    const API_URI = `${process.env.REACT_APP_BASE_URI}/user/signin`;

    try {
      const res = await axios.post(API_URI, payload);

      // after successful login user token will be saved to local-storage
      if (res.status === 200) {
        localStorage.setItem("user-token", res.data.data.token);
      }

      // return this response payload
      return res.data.data.token;

    } catch (error) {
      // if any error
      console.log(error.code);
    }
  }
);

export const signUp = createAsyncThunk(
  "signup",

  // create payload Creator
  async (payload) => {
    // try to login here and send payload to userSlice for further use.
    const API_URI = `${process.env.REACT_APP_BASE_URI}/user/signup`;

    try {
      const res = await axios.post(API_URI, payload);

      // return this response payload
      return res.data.data.user;

    } catch (error) {
      // if any error
      console.log(error.code);
    }
  }
);

export default signIn;