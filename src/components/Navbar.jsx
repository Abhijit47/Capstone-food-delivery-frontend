import React, { useEffect, useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import _ from "lodash";

const navigation = [
  { name: "dashboard", to: "/", current: true },
  { name: "explore meals", to: "/all-meals", current: true },
  { name: "goto cart", to: "/checkout", current: true },
  { name: "restaurant login", to: "/restaurant-login", current: true },
  { name: "restaurant sign up", to: "/restaurant-signup", current: true },
  { name: "your profile", to: "/profile" },
  { name: "settings", to: "/settings" },
  { name: "create food item", to: "/food-item-create" },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // eslint-disable-next-line
  const [userState, setUserState] = useState({});
  // eslint-disable-next-line
  const [restaurantState, setRestaurantState] = useState({});
  // eslint-disable-next-line
  const navigate = useNavigate();

  // eslint-disable-next-line
  const user = useSelector((state) => state.users.userDetails);
  const restaurant = useSelector(
    (state) => state.restaurants.restaurantDetails,
  );

  // eslint-disable-next-line
  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
  };
  const userToken = localStorage.getItem("user-token");
  const restaurantToken = localStorage.getItem("restaurant-token");

  useEffect(() => {
    // if (!userToken) {
    //   navigate("/login");
    // } else if (!restaurantToken) {
    //   navigate("/restaurant-login");
    // } else {
    //   navigate("/");
    // }
    setUserState(user);
    setRestaurantState(restaurant);
  }, [user, restaurant, userToken, restaurantToken]);

  return (
    <header className="sticky inset-x-0 top-0 z-[100] border-b-[1px] border-b-gray-600 bg-gray-100 shadow-lg">
      <nav
        className="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link to="/" className="flex items-center gap-4">
            <span className="font-sans text-2xl font-bold text-gray-800">
              OMNIFOOD
            </span>
            <img
              className="h-8 w-auto"
              src={require("../assets/icons/food.png")}
              alt=""
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 p-2.5 inline-flex items-center justify-center rounded-md text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        {/* Middle part*/}
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.slice(0, 4).map((item) => (
            <Link
              key={item.name}
              to={item.to}
              className="text-sm font-semibold capitalize leading-6 text-gray-900"
            >
              {item.name}
            </Link>
          ))}
        </div>
        {/* Right part */}
        <div className="hidden gap-4 lg:flex lg:flex-1 lg:justify-end">
          {_.isNull(userToken) &&
          _.isEmpty(userState) &&
          _.isNull(restaurantToken) &&
          _.isEmpty(restaurantState) ? (
            <>
              <Link
                to="/login"
                className="rounded-md bg-indigo-500 px-3 py-1 text-sm font-semibold leading-6 text-gray-100"
              >
                Log in <span aria-hidden="true">&rarr;</span>
              </Link>
              <Link
                to="/signup"
                className="rounded-md bg-indigo-500 px-3 py-1 text-sm font-semibold leading-6 text-gray-100"
              >
                Sign up <span aria-hidden="true">&rarr;</span>
              </Link>
            </>
          ) : (
            <button
              onClick={handleLogout}
              className="rounded-md bg-red-500 px-3 py-1 text-sm font-semibold leading-6 text-gray-100"
            >
              sign out <span aria-hidden="true">&rarr;</span>
            </button>
          )}

          {/* {_.isNull(restaurantToken) || !_.isNull(userToken) ? (
            <>
              <button
                onClick={handleLogout}
                className="rounded-md bg-red-500 px-3 py-1 text-sm font-semibold leading-6 text-gray-100"
              >
                sign out <span aria-hidden="true">&rarr;</span>
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="rounded-md bg-indigo-500 px-3 py-1 text-sm font-semibold leading-6 text-gray-100"
              >
                Log in <span aria-hidden="true">&rarr;</span>
              </Link>
              <Link
                to="/signup"
                className="rounded-md bg-indigo-500 px-3 py-1 text-sm font-semibold leading-6 text-gray-100"
              >
                Sign up <span aria-hidden="true">&rarr;</span>
              </Link>
            </>
          )} */}

          {/* {!_.isNull(userToken) && _.isNull(restaurantToken) ? (
            <button
              onClick={handleLogout}
              className="rounded-md bg-red-500 px-3 py-1 text-sm font-semibold leading-6 text-gray-100"
            >
              sign out <span aria-hidden="true">&rarr;</span>
            </button>
          ) : (
            <>
              <Link
                to="/login"
                className="rounded-md bg-indigo-500 px-3 py-1 text-sm font-semibold leading-6 text-gray-100"
              >
                Log in <span aria-hidden="true">&rarr;</span>
              </Link>
              <Link
                to="/signup"
                className="rounded-md bg-indigo-500 px-3 py-1 text-sm font-semibold leading-6 text-gray-100"
              >
                Sign up <span aria-hidden="true">&rarr;</span>
              </Link>
            </>
          )} */}

          {/* sidebar */}
          <div>
            <button
              type="button"
              className="-m-2.5 p-2.5 inline-flex items-center justify-center rounded-md text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </nav>
      <Dialog
        as="div"
        className=""
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="sm:ring-gray-900/10 fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center justify-center gap-4">
              <span className="font-sans text-2xl font-bold text-gray-800">
                OMNIFOOD
              </span>
              <img
                className="h-8 w-auto"
                src={require("../assets/icons/food.png")}
                alt=""
              />
            </Link>
            <button
              type="button"
              className="-m-2.5 p-2.5 rounded-md text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="divide-y divide-gray-500/10 -my-6">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.to}
                    className="hover:bg-gray-50 -mx-3 block rounded-lg px-3 py-2 text-base font-semibold capitalize leading-7 text-gray-900"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6">
                <Link
                  to="/login"
                  className="py-2.5 hover:bg-gray-50 -mx-3 block rounded-lg px-3 text-base font-semibold leading-7 text-gray-900"
                >
                  Log in
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};

export default Navbar;
