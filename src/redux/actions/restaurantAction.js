import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";


// create a restaurant action
const restaurantSignIn = createAsyncThunk(
  "restaurantSignIn",

  // create payload Creator
  async (payload) => {
    // try to login here and send payload to userSlice for further use.
    const API_URI = `${process.env.REACT_APP_BASE_API_URL}/restaurant/signin`;

    try {
      const res = await axios.post(API_URI, payload);

      // after successful login user token will be saved to local-storage
      if (res.status === 200) {
        localStorage.setItem("restaurant-token", res.data.data.token);
      }

      toast.success(res.data.message, {
        position: "top-center",
        autoClose: 1500,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true
      });

      // return this response payload
      return res.data.data.token;

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
    }
  }
);



export default restaurantSignIn;