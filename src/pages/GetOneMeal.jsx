import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import _ from "lodash";
import { isExpired } from "react-jwt";
import { getOneMeal } from "../features/handleMeals";
import { orderMeal } from "../features/stripe";

const GetOneMeal = () => {
  const [mealData, setMealData] = useState({});
  const [isExpiredUserToken, setIsExpiredUserToken] = useState(false);
  const [isExpiredRestaurantToken, setIsExpiredRestaurantToken] =
    useState(false);
  const navigate = useNavigate();
  let { mealId } = useParams();

  const userToken = localStorage.getItem("user-token");
  const restaurantToken = localStorage.getItem("restaurant-token");

  const goToCheckOut = async (e) => {
    e.target.textContent = "Processing";
    await orderMeal(mealId, userToken, restaurantToken);
    navigate("/");
  };

  useEffect(() => {
    if (!_.isNull(userToken)) {
      setIsExpiredUserToken(isExpired(userToken));
    } else if (!_.isNull(restaurantToken)) {
      setIsExpiredRestaurantToken(isExpired(restaurantToken));
    }
  }, [userToken, restaurantToken]);

  useEffect(() => {
    if (isExpiredUserToken) {
      return navigate("/login");
    } else if (isExpiredRestaurantToken) {
      return navigate("/restaurant-login");
    }
  }, [isExpiredUserToken, isExpiredRestaurantToken, navigate]);

  useEffect(() => {
    if (_.isNull(userToken) && _.isNull(restaurantToken)) {
      navigate("/login");
    } else {
      getOneMeal(mealId, restaurantToken, userToken)
        .then((res) => {
          setMealData(res);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  }, [mealId, userToken, restaurantToken, navigate]);

  return (
    <div className="p-10">
      <div className="grid grid-cols-12 justify-items-center rounded-lg bg-gray-200 p-2 shadow-xl">
        <div className="sm:col-span-12 sm:self-center lg:col-span-6">
          <img
            className="w-full rounded-md object-cover"
            src={mealData.picture}
            alt="food"
          />
        </div>
        <div className="self-center sm:col-span-12 lg:col-span-6">
          <h4 className="text-xl font-semibold tracking-tight text-blue-600">
            {mealData.itemName}
          </h4>
          <p className="mb-2 leading-normal">{mealData.description}</p>
          <p className="text-2xl font-semibold leading-normal">
            ₹&nbsp;{mealData.price}
          </p>
          <p className="text-xl font-semibold leading-normal">
            Quantity&nbsp;{mealData.quantity}
          </p>
          <button
            onClick={(e) => goToCheckOut(e)}
            className="mt-4 rounded-md bg-indigo-500 px-4 py-2 text-sm capitalize text-blue-100 shadow-sm"
          >
            buy now
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetOneMeal;
