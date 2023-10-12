import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import _ from "lodash";
import { isExpired } from "react-jwt";
import { getAllMeals, deleteOneMeal } from "../features/handleMeals";
import UpdateModal from "./UpdateModal";

const MealCard = ({ meal, setAllMeals }) => {
  const [showModal, setShowModal] = useState(false);
  const [isExpiredUserToken, setIsExpiredUserToken] = useState(false);
  const [isExpiredRestaurantToken, setIsExpiredRestaurantToken] =
    useState(false);

  // eslint-disable-next-line
  const navigate = useNavigate();

  // const restaurant = useSelector((state) => state.restaurants.initialState);
  const restaurantToken = localStorage.getItem("restaurant-token");
  // const user = useSelector((state) => state.users.userDetails);
  const userToken = localStorage.getItem("user-token");

  const handleModal = () => {
    setShowModal(true);
  };
  const handleDelete = async (mealId) => {
    await deleteOneMeal(mealId, restaurantToken);
    getAllMeals()
      .then((res) => {
        setAllMeals(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // useEffect(() => {
  //   setRestaurantState({ restaurant, restaurantToken });
  // }, [restaurant, restaurantToken]);

  useEffect(() => {
    if (!_.isNull(userToken)) {
      setIsExpiredUserToken(isExpired(userToken));
    } else if (!_.isNull(restaurantToken)) {
      setIsExpiredRestaurantToken(isExpired(restaurantToken));
    }
  }, [userToken, restaurantToken]);

  // console.log("ut", isExpiredUserToken || "rt", isExpiredRestaurantToken);
  // console.log("ut", isExpiredUserToken);
  // console.log("rt", isExpiredRestaurantToken);
  // console.log(_.isNull(restaurantToken) || isExpiredRestaurantToken);
  // console.log(_.isNull(restaurantToken));
  // console.log(isExpiredRestaurantToken);

  return (
    <div className="hover:scale-400 col-span-1 h-[28rem] rounded-md bg-gray-200 shadow-lg">
      <div className="relative overflow-hidden rounded-md pb-48">
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src={meal.picture}
          alt={meal.itemName}
          loading="lazy"
          crossOrigin="true"
          async
          fetchpriority="high"
        />
      </div>
      <div className="p-4">
        <div className="flex justify-between">
          <span className="inline-block rounded-full bg-orange-200 px-2 py-1 text-xs font-semibold uppercase leading-none tracking-wide text-orange-800">
            Highlight
          </span>
          {_.isNull(restaurantToken) || isExpiredRestaurantToken ? null : (
            <div className="flex gap-2">
              <span className="cursor-pointer hover:text-yellow-700">
                <svg
                  onClick={handleModal}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                  />
                </svg>
              </span>
              <UpdateModal
                mealId={meal._id}
                setAllMeals={setAllMeals}
                showModal={showModal}
                setShowModal={setShowModal}
              />
              <span className="cursor-pointer hover:text-red-700">
                <svg
                  onClick={() => handleDelete(meal._id)}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </span>
            </div>
          )}
        </div>
        <h2 className="mb-2 mt-2 font-bold">{meal.itemName}</h2>
        <p className="text-sm">{meal.description}</p>
        <div className="mt-3 flex items-center">
          <span className="text-sm font-semibold">₹</span>&nbsp;
          <span className="text-xl font-bold">{meal.price}</span>
        </div>
      </div>
      <div className="flex items-center justify-center p-4 text-sm text-gray-600">
        {(!_.isNull(userToken) && !isExpiredUserToken) ||
        (!_.isNull(restaurantToken) && !isExpiredRestaurantToken) ? (
          <Link
            to={`/meal/${meal._id}`}
            className="rounded-md bg-indigo-500 px-3 py-2 capitalize text-gray-100"
          >
            order now
          </Link>
        ) : (
          <Link
            to={"/login"}
            className="rounded-md bg-indigo-500 px-3 py-2 capitalize text-gray-100"
          >
            order now
          </Link>
        )}
      </div>
    </div>
  );
};

export default MealCard;
