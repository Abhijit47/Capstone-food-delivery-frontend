import axios from "axios";
import { toast } from "react-toastify";

const BASE_URI = `${process.env.REACT_APP_BASE_API_URL}`;

export const restaurentSignUp = async (formData) => {
  try {
    const res = await axios.post(`${BASE_URI}/restaurant/create-restaurant`, formData);
    if (res.status === 201) {
      toast.success(res.data.message, {
        position: "top-center",
        autoClose: 1500,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        className: "bg-green-500 text-gray-200"
      });
    }

  } catch (error) {
    console.log(error.message);
    toast.error("Something went wrong!", {
      position: "top-center",
      autoClose: 1500,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      className: "bg-red-500 text-gray-200"
    });
  }
};