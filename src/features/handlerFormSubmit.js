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