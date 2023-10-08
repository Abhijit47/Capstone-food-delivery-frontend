import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import GenericButton from "../components/GenericButton";
import FormFooter from "../components/FormFooter";
import { useDispatch, useSelector } from "react-redux";
import signIn from "../redux/actions/userActions";

const Login = () => {
  const [userDetails, setUserDetails] = useState({
    email: "jhondoe@gmail.com",
    password: "admin123",
  });

  // A hook to access the redux dispatch function.
  const dispatch = useDispatch();

  // to navigate other page
  const navigate = useNavigate();

  // destucture the userDetails
  const { email, password } = userDetails;

  // define a function to track input fields
  const handleChange = (e) => {
    // destructuring the event.target name and value
    const { name, value } = e.target;

    // set the name and value to corresponding field
    setUserDetails({ ...userDetails, [name]: value });
  };

  // define a function to handle form submit
  const handleSubmit = (e) => {
    // prevent the from default behaviour
    e.preventDefault();
    // console.log(userDetails);

    // dispatch signin action creator for login
    dispatch(signIn(userDetails));
    navigate("/");
  };

  // A hook to access the redux store's state.
  const user = useSelector((state) => state.users.isLoading);
  // console.log(user);
  const userToken = localStorage.getItem("user-token");

  // check user is already in store or not
  // useEffect(() => {
  //   if (userToken) {
  //     console.log(userToken);
  //     navigate("/");
  //   }
  // }, [userToken, navigate]);

  return (
    <>
      {user.isLoading ? (
        <h3 className="bg-red-500 text-4xl">Loading...</h3>
      ) : (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              className="mx-auto h-10 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company"
            />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Sign in to your account
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
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
                      className="font-semibold text-indigo-600 hover:text-indigo-500"
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

              <GenericButton buttonName={"Sign in"} />
            </form>

            <FormFooter to={"/signup"} />
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
