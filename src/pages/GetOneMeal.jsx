import React from "react";
import { useNavigate } from "react-router-dom";
const GetOneMeal = () => {
  const navigate = useNavigate();

  const goToCheckOut = () => {
    navigate("/checkout");
  };

  return (
    <div className="p-10">
      <div className="grid grid-cols-12 justify-items-center rounded-lg bg-gray-200 p-2 shadow-xl">
        <div className="xs:bg-red-500 sm:col-span-12 sm:self-center lg:col-span-6">
          <img
            className="w-full object-cover"
            src="https://placehold.co/600x400"
            alt="food"
          />
        </div>
        <div className="self-center sm:col-span-12 lg:col-span-6">
          <h4 className="text-xl font-semibold tracking-tight text-blue-600">
            react tailwind horizontal card image
          </h4>
          <p className="mb-2 leading-normal">
            react tailwind css horizontal card with image It is a long
            established fact that a reader will be distracted by the readable
            content.
          </p>
          <button
            onClick={goToCheckOut}
            className="shadow rounded-md bg-blue-500 px-4 py-2 text-sm capitalize text-blue-100"
          >
            buy now
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetOneMeal;
