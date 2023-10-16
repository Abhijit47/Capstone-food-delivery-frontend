import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import _ from "lodash";
import GenericButton from "../components/GenericButton";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import restaurantSignIn from "../redux/actions/restaurantAction";
import { BuildingStorefrontIcon } from "@heroicons/react/24/outline";

const RestaurantLogin = () => {
  const [restaurantFormData, setRestaurantFormData] = useState({
    email: "",
    password: "",
    role: "admin",
  });

  // eslint-disable-next-line
  const { isLoading } = useSelector((state) => state.restaurants);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  // destructuring form data
  const { email, password, role } = restaurantFormData;
  // define a function for handle form inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setRestaurantFormData({ ...restaurantFormData, [name]: value });
  };

  // eslint-disable-next-line
  const restaurantToken = localStorage.getItem("restaurant-token");

  // define a function for handle form request
  const handleSubmit = (e) => {
    e.preventDefault();

    // check formdata is empty or not
    if (_.isEmpty(restaurantFormData)) {
      return toast.info("Please fill all the fields!", {
        position: "top-left",
        autoClose: 1500,
      });
    }

    // dispatch signin request
    dispatch(restaurantSignIn(restaurantFormData));
    setRestaurantFormData({});
    navigate("/restaurant-profile");
  };

  useEffect(() => {
    if (_.isNull(restaurantToken)) {
      navigate("/restaurant-login");
    } else {
      navigate("/restaurant-profile");
    }
  }, [navigate, restaurantToken]);

  return (
    <section className="flex min-h-screen flex-1 flex-col items-center justify-center bg-gradient-to-tr from-pink-400 to-indigo-400 px-6 py-2 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm lg:px-8">
        <BuildingStorefrontIcon className="mx-auto h-20 w-20 text-orange-300" />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Restaurant Login
        </h2>
      </div>

      <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm md:max-w-md lg:max-w-lg">
        <form className="space-y-6" onSubmit={handleSubmit} method="POST">
          <div>
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="form-input"
                value={email}
                onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <div className="text-sm">
                <Link
                  to="/forgot-password"
                  className="font-semibold text-gray-900 hover:text-gray-700"
                >
                  Forgot password?
                </Link>
              </div>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="off"
                required
                className="form-input"
                value={password}
                onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <label htmlFor="role" className="form-label">
              role
            </label>
            <div className="mt-2">
              <input
                type="text"
                id="role"
                name="role"
                className="form-input select-none"
                autoComplete="off"
                required
                value={role}
                disabled
              />
            </div>
          </div>

          <GenericButton buttonName={"Sign in"} />
        </form>
      </div>
    </section>
  );
};

export default RestaurantLogin;
