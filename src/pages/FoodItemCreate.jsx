import React, { useState } from "react";
import { toast } from "react-toastify";
import _ from "lodash";
import GenericButton from "../components/GenericButton";
import FormFooter from "../components/FormFooter";
import FoodItemInputs from "../components/FoodItemInputs";
import { createFoodItem } from "../features/handlerFormSubmit";
import { useNavigate } from "react-router-dom";

const FoodItemCreate = () => {
  const [foodItem, setFoodItem] = useState({
    itemName: "Fruit Salad",
    quantity: 30,
    price: 550,
    description: "A refreshing mix of seasonal fruits.",
    picture: "https://placehold.co/600x400",
  });

  const navigate = useNavigate();

  // define a function for handle form request
  const handleSubmit = async (e) => {
    e.preventDefault();

    // check formdata is empty or not
    if (_.isEmpty(foodItem)) {
      return toast.info("Please fill all the fields!", {
        position: "top-left",
        autoClose: 1500,
      });
    }
    console.log(foodItem);
    const token = localStorage.getItem("token");
    console.log(token);

    // dispatch signin request
    await createFoodItem(foodItem, token);

    navigate("/");
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <img
          className="h-15 mx-auto w-auto"
          src={require("../assets/icons/pizza-slice.png")}
          alt="Your Company"
        />
        <h2 className="mt-10 text-center text-2xl font-bold capitalize leading-9 tracking-tight text-gray-900">
          create a food item
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm md:max-w-md lg:max-w-lg">
        <form className="space-y-6" onSubmit={handleSubmit} method="POST">
          <FoodItemInputs foodItem={foodItem} setFoodItem={setFoodItem} />

          <GenericButton buttonName={"Sign in"} />
        </form>

        <FormFooter to={"/signup"} />
      </div>
    </div>
  );
};

export default FoodItemCreate;
