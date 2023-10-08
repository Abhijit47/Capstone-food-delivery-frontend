import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import _ from "lodash";
const MealCard = ({ meal, index }) => {
  const [userState, setUserState] = useState(null);
  // eslint-disable-next-line
  const location = useLocation();

  const state = useSelector((state) => state.restaurants.initialState);

  const handleDelete = (mealId) => {
    console.log("delete" + mealId);
  };

  useEffect(() => {
    setUserState(state);
  }, [state]);

  return (
    <div className="hover:scale-400 col-span-1 h-[28rem] rounded-md bg-gray-200 shadow-lg">
      <div className="relative overflow-hidden rounded-md pb-48">
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src={meal.picture}
          alt={meal.itemName}
        />
      </div>
      <div className="p-4">
        <span className="inline-block rounded-full bg-orange-200 px-2 py-1 text-xs font-semibold uppercase leading-none tracking-wide text-orange-800">
          Highlight
        </span>
        <h2 className="mb-2 mt-2 font-bold">{meal.itemName}</h2>
        <p className="text-sm">{meal.description}</p>
        <div className="mt-3 flex items-center">
          <span className="text-sm font-semibold">₹</span>&nbsp;
          <span className="text-xl font-bold">{meal.price}</span>
        </div>
      </div>
      <div className="flex items-center justify-between p-4 text-sm text-gray-600">
        {!_.isEmpty(userState) && userState?.user.role === "admin" ? (
          <>
            <Link
              to={`/meal/${meal._id}`}
              className="rounded-md bg-indigo-500 px-3 py-2 capitalize text-gray-100"
            >
              order now
            </Link>
            <button
              onClick={() => handleDelete(meal._id)}
              className="rounded-md bg-indigo-500 px-3 py-2 capitalize text-gray-100"
            >
              delete
            </button>
          </>
        ) : (
          <Link
            to={`/meal/${meal._id}`}
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
