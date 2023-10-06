import axios from "axios";
import { toast } from "react-toastify";

const BASE_URI = `http://localhost:9999/api/v1`;

export const getAllMeals = async () => {
  try {
    const res = await axios.get(`${BASE_URI}/foodItem/all-food-items`);
    toast.success(res.data.message, {
      position: "top-center",
      autoClose: 1000,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      className: "bg-green-500 text-gray-200"
    });
    return res.data.data.items;
  } catch (err) {
    console.log(err);
    toast.error(err.message, {
      position: "top-center",
      autoClose: 1500,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      className: "bg-red-500 text-gray-200"
    });
  }
};