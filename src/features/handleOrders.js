import axios from "axios";


const BASE_URI = `${process.env.REACT_APP_BASE_API_URL}`;

export const userOrdersDetails = async (userToken) => {
  try {
    let configs = {
      headers: { Authorization: `Bearer ${userToken}` },
    };

    const res = await axios.get(`${BASE_URI}/order/get-user-orders`, configs);
    return res.data.data.userOrders;
  } catch (error) {
    console.log(error);
  }
};

export const restaurantOrdersDetails = async (restaurantToken) => {
  try {
    let configs = {
      headers: { Authorization: `Bearer ${restaurantToken}` },
    };

    const res = await axios.get(`${BASE_URI}/order/get-all-orders`, configs);
    return res.data.data.allOrders;
  } catch (error) {
    console.log(error);
  }
};