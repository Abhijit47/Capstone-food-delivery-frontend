import axios from "axios";
import { toast } from "react-toastify";

const BASE_URI = `http://localhost:9999/api/v1`;

export const restaurentSignUp = async (formData) => {
  try {
    const res = await axios.post(BASE_URI, formData);
    toast.success(res.data.message, {
      position: "top-center",
      autoClose: 1500,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      className: "bg-green-500 text-gray-200"

    });
  } catch (error) {
    toast.error(error.message, {
      position: "top-center",
      autoClose: 1500,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      className: "bg-red-500 text-gray-200"
    });
  }
};

export const createFoodItem = async (formData, token) => {
  // const API_URI = `http://localhost:9999/api/v1/foodItem/create-item`;

  // let config = {
  //   headers: { Authorization: `Bearer ${localStorage.getItem("token")}`}
  // }

  let config = {
    headers: { Authorization: `Bearer ${token}` }
  };

  try {
    const res = await axios.post(`${BASE_URI}/foodItem/create-item`, formData, config);
    console.log(res);
    toast.success(res.data.message, {
      position: "top-center",
      autoClose: 1500,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      className: "bg-green-500 text-gray-200"
    });

  } catch (error) {
    console.log(error);
    return toast.error(error.message, {
      position: "top-center",
      autoClose: 1500,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      className: "bg-red-500 text-gray-200"
    });
  }
};