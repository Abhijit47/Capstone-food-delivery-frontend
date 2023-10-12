import axios from "axios";
import { loadStripe } from "@stripe/stripe-js/pure";

const BASE_URI = "http://localhost:9999/api/v1";

export const orderMeal = async (mealId, userToken, restaurantToken, price) => {
  const stripe = await loadStripe(
    "pk_test_51NxsAUSEaPfuKDYexuUxShWfEd1jPNGZRMSmaUeWVMpgMtE9Kuo4wL7DJTXqTHdu4sBCk3tJitHovS4ADtJMuvT800CmFQ4tls",
  );
  try {
    let config = {
      headers: { Authorization: `Bearer ${userToken || restaurantToken}` },
    };
    // 1. Get checkout session from API
    const SESSION_URI = `${BASE_URI}/order/checkout-session/${mealId}`;
    const CREATE_ORDER_URI = `${BASE_URI}/order/create-order/${mealId}`;

    // 2. Create a session for order
    const session = await axios.get(SESSION_URI, config);

    // 2. Book a food item
    const foodItem = await axios.post(CREATE_ORDER_URI, {
      quantity: 1, price: price
    }, config);

    // Check status then redirect
    if (foodItem.status === 201) {
      // 3. create a checkout form + charge a credit card
      await stripe.redirectToCheckout(
        { sessionId: session.data.session.id }
      );
    }
  } catch (error) {
    console.log(error);
    alert(error.message);
  }

};