import React, { useEffect, useState } from "react";
import { getAllMeals } from "../features/handleMeals";
import MealCard from "./MealCard";
import { Link } from "react-router-dom";

const Meals = () => {
  const [meals, setAllMeals] = useState([]);

  // eslint-disable-next-line
  const handleAddToCart = () => {
    //
  };

  useEffect(() => {
    getAllMeals()
      .then((res) => {
        setAllMeals(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <section className="p-10">
      <h3 className="pb-6 text-center text-lg font-semibold">Meals</h3>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {meals
          ?.reverse()
          .slice(0, 8)
          .map((meal, index) => (
            <Link to={`meal/${meal._id}`} key={index}>
              <MealCard meal={meal} />
            </Link>
          ))}
      </div>
      <div className="mt-12 flex justify-center">
        <button className="rounded-md bg-indigo-500 px-4 py-2 capitalize text-white">
          view more
        </button>
      </div>
    </section>
  );
};

export default Meals;
