import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getAllMeals, deleteOneMeal } from "../features/handleMeals";
// eslint-disable-next-line
import { toast } from "react-toastify";
import { addToCart } from "../redux/slices/cartSlices";
import MealCard from "./MealCard";

const Meals = () => {
  // eslint-disable-next-line
  const [showModal, setShowModal] = useState(false);
  const [meals, setAllMeals] = useState([]);

  // eslint-disable-next-line
  const [isExpiredUserToken, setIsExpiredUserToken] = useState(false);
  // eslint-disable-next-line
  const [isExpiredRestaurantToken, setIsExpiredRestaurantToken] =
    useState(false);

  let location = useLocation();
  let { pathname } = location;

  // eslint-disable-next-line
  const userToken = localStorage.getItem("user-token");
  const restaurantToken = localStorage.getItem("restaurant-token");

  // eslint-disable-next-line
  const handleModal = () => {
    setShowModal(true);
  };
  // eslint-disable-next-line
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
  const dispatch = useDispatch();
  // eslint-disable-next-line
  const handleAddToCart = (meal) => {
    dispatch(addToCart(meal));
    // toast.success("Items added to your cart.", {
    //   duration: 1500,
    //   position: "top-center",
    //   className: "bg-green-500 text-white",
    //   icon: "✅",
    //   ariaProps: {
    //     role: "status",
    //     "aria-live": "polite",
    //   },
    // });
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
      <h3 className="mb-10 text-center font-sans text-2xl font-bold">Meals</h3>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {meals?.slice(0, 8).map((meal, index) => (
          <MealCard key={index} meal={meal} setAllMeals={setAllMeals} />
        ))}
      </div>
      <div className="mt-12 flex justify-center">
        {pathname === "/all-meals" ? null : (
          <Link
            to={"/all-meals"}
            className="rounded-md bg-indigo-500 px-4 py-2 capitalize text-white shadow-2xl transition-all delay-200 duration-200 hover:translate-y-2"
          >
            view more
          </Link>
        )}
      </div>
    </section>
  );
};

export default Meals;
