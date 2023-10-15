import axios from "axios";


const BASE_URI = "http://localhost:9999/api/v1";

export const getRestaurantDetails = async (restaurantToken) => {
  try {
    let configs = {
      headers: { Authorization: `Bearer ${restaurantToken}` },
    };

    const res = await axios.get(`${BASE_URI}/restaurant/get-restaurant`, configs);
    return res.data.data.restaurant;
  } catch (error) {
    console.log(error);
  }
};