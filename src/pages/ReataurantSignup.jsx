import React, { useState } from "react";
import _ from "lodash";
import GenericButton from "../components/GenericButton";
import FormFooter from "../components/FormFooter";
import { restaurentSignUp } from "../features/handlerFormSubmit";

const ReataurantSignup = () => {
  const [restaurantFormData, setRestaurantFormData] = useState({
    name: "Casa Mexicana",
    address: "101 Maple Lane, Riverside",
    cuisine: "Mexican",
    rating: "4.0",
    openingTime: "09:00",
    closingTime: "22:00",
    username: "casamexicana",
    email: "thecasamexicana@gmail.com",
    role: "admin",
    password: "admin123",
    confirmPassword: "admin123",
  });
  // destructuring form data
  const {
    name,
    address,
    cuisine,
    rating,
    openingTime,
    closingTime,
    username,
    email,
    role,
    password,
    confirmPassword,
  } = restaurantFormData;

  // define a function for handle form inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setRestaurantFormData({ ...restaurantFormData, [name]: value });
  };

  // define a function for handle form request
  const handleSubmit = async (e) => {
    // Prevent default form behavior
    e.preventDefault();

    // check password and conf.Password are same or not
    if (!_.isEqual(password, confirmPassword)) {
      return alert("Passwords are not matched!");
    }
    // console.log(restaurantFormData);

    // dispatch signup request with form data
    await restaurentSignUp(restaurantFormData);
  };

  return (
    <section className="flex min-h-full flex-1 flex-col justify-center bg-gradient-to-tr from-pink-400 to-indigo-400 px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-10 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          alt="Your Company"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign up to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm md:max-w-md lg:max-w-lg">
        <form className="space-y-6" onSubmit={handleSubmit} method="POST">
          <div>
            <label htmlFor="name" className="form-label">
              restaurant name
            </label>
            <div className="mt-2">
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="off"
                required
                className="form-input"
                value={name}
                onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <label htmlFor="address" className="form-label">
              restaurant address
            </label>
            <div className="mt-2">
              <input
                id="address"
                name="address"
                type="text"
                autoComplete="off"
                required
                className="form-input"
                value={address}
                onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <label htmlFor="cuisine" className="form-label">
              cuisine
            </label>
            <div className="mt-2">
              <input
                id="cuisine"
                name="cuisine"
                type="text"
                autoComplete="off"
                required
                className="form-input"
                value={cuisine}
                onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <label htmlFor="rating" className="form-label">
              rating
            </label>
            <div className="mt-2">
              <input
                id="rating"
                name="rating"
                type="text"
                maxLength={3}
                autoComplete="off"
                required
                className="form-input"
                value={rating}
                onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <label htmlFor="openingTime" className="form-label">
              opening time
            </label>
            <div className="mt-2">
              <input
                id="openingTime"
                name="openingTime"
                type="time"
                min="09:00"
                max="23:00"
                autoComplete="off"
                required
                className="form-input"
                value={openingTime}
                onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <label htmlFor="closingTime" className="form-label">
              closing time
            </label>
            <div className="mt-2">
              <input
                id="closingTime"
                name="closingTime"
                type="time"
                min="09:00"
                max="23:00"
                autoComplete="off"
                required
                className="form-input"
                value={closingTime}
                onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <label htmlFor="username" className="form-label">
              username
            </label>
            <div className="mt-2">
              <input
                id="username"
                name="username"
                type="text"
                maxLength={3}
                autoComplete="off"
                required
                className="form-input"
                value={username}
                onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="form-label">
              email address
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

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="form-label">
                password
              </label>
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
            <div className="flex items-center justify-between">
              <label htmlFor="confirmPassword" className="form-label">
                confirm password
              </label>
            </div>
            <div className="mt-2">
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                autoComplete="off"
                required
                className="form-input"
                value={confirmPassword}
                onChange={handleChange}
              />
            </div>
          </div>

          <GenericButton buttonName={"Sign up"} />
        </form>

        <FormFooter to={"/restaurant-signin"} />
      </div>
    </section>
  );
};

export default ReataurantSignup;
