import axios from "axios";
import { loadStripe } from "@stripe/stripe-js/pure";

const BASE_URI = "http://localhost:9999/api/v1";

export const orderMeal = async (mealId, userToken, restaurantToken) => {
  const stripe = await loadStripe(
    "pk_test_51NxsAUSEaPfuKDYexuUxShWfEd1jPNGZRMSmaUeWVMpgMtE9Kuo4wL7DJTXqTHdu4sBCk3tJitHovS4ADtJMuvT800CmFQ4tls",
  );
  try {
    let config = {
      headers: { Authorization: `Bearer ${userToken || restaurantToken}` },
    };
    // 1. Get checkout session from API
    const API_URI = `${BASE_URI}/order/checkout-session/${mealId}`;

    const session = await axios(API_URI, config);
    // console.log(session.data.session);

    // 2. create a checkout form + charge a credit card
    await stripe.redirectToCheckout(
      { sessionId: session.data.session.id }
    );
    // { successUrl: session.data.session.url.split("?")[0] });
  } catch (error) {
    console.log(error.message);
    alert(error.message);
  }

};