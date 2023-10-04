import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";


// create a user action
const signIn = createAsyncThunk(
  "signIn",

  // create payload Creator
  async (payload) => {
    // try to login here and send payload to userSlice for further use.
    const API_URI = `http://localhost:9999/api/v1/user/signin`;

    try {
      const res = await axios.post(API_URI, payload);

      // after successful login user token will be saved to local-storage
      if (res.status === 200) {
        localStorage.setItem("token", res.data.data.token);
      }

      toast.success(res.data.message, {
        position: "top-center",
        autoClose: 1500,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true
      });
      // Navigate({ to: "/login", replace: "/" });
      // return this response payload
      return res.data.data;

    } catch (error) {
      // if any error
      return toast.error(error.message, {
        position: "top-right",
        autoClose: 5000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true
      });
      // console.log(error.message);
      // console.log(error.response.data.message);
      // Navigate({ to: "/login" });

    }
  }
);


export default signIn;