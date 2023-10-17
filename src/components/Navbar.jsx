import { Fragment, useEffect, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import {
  ArrowRightOnRectangleIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  UserCircleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import CartIcon from "../assets/icons/CartIcon";
import _ from "lodash";
import { isExpired } from "react-jwt";

const menus = [
  {
    name: "Analytics",
    description: "Get a better understanding of your traffic",
    to: "#",
    icon: ChartPieIcon,
  },
  {
    name: "Engagement",
    description: "Speak directly to your customers",
    to: "#",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "User profile",
    description: "Your customers’ data will be safe and secure",
    to: "/user-profile",
    icon: FingerPrintIcon,
  },
  {
    name: "Restaurant profile",
    description: "Connect with third-party tools",
    to: "/restaurant-profile",
    icon: UserCircleIcon,
  },
  {
    name: "Restaurant signup",
    description: "Build strategic funnels that will convert",
    to: "/restaurant-signup",
    icon: ArrowRightOnRectangleIcon,
  },
];

const callsToAction = [
  { name: "Watch demo", to: "#", icon: PlayCircleIcon },
  { name: "Contact us", to: "#", icon: PhoneIcon },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export const handleLogout = () => {
  localStorage.clear();
  window.location.reload();
  window.location.href = "/";
};

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isExpiredUserToken, setIsExpiredUserToken] = useState(false);
  const [isExpiredRestaurantToken, setIsExpiredRestaurantToken] =
    useState(null);

  const { carts } = useSelector((state) => state.carts);

  const userToken = localStorage.getItem("user-token");
  const restaurantToken = localStorage.getItem("restaurant-token");

  useEffect(() => {
    if (!_.isNull(userToken)) {
      setIsExpiredUserToken(isExpired(userToken));
    }
    if (!_.isNull(restaurantToken)) {
      setIsExpiredRestaurantToken(isExpired(restaurantToken));
    }
  }, [userToken, restaurantToken]);

  return (
    <header className="sticky top-0 z-[1000] bg-white shadow-md">
      <nav
        className="max-w-7xl mx-auto flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              className="h-4 w-30 xs:w-30 xs:h-4 lg:h-5 lg:w-5/5 xl:h-6 xl:w-40"
              src={require("../assets/images/omnifood-logo.png")}
              alt="hero-logo"
            />
          </Link>
        </div>
        <div className="flex gap-4 lg:hidden">
          {/* md to xs cart icon */}
          <Link to={"/your-cart"} className="relative">
            <div className="">
              <span className="text-slate-50 absolute right-[3px] top-[-12px] rounded-full pe-1 ps-1 text-xs hover:text-orange-500">
                {carts.length}
              </span>
              <CartIcon />
            </div>
          </Link>
          {/* md to xs hamburger icon */}
          <button
            type="button"
            className="-m-2.5 p-2.5 inline-flex items-center justify-center rounded-md text-gray-700 hover:text-orange-500"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Link
            to="/all-restaurents"
            className="text-sm font-semibold leading-6 text-gray-900 hover:text-orange-500"
          >
            Explore restaurants
          </Link>
          <Link
            to="/all-meals"
            className="text-sm font-semibold leading-6 text-gray-900 hover:text-orange-500"
          >
            Explore food items
          </Link>
          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 outline-none hover:text-orange-500 focus:outline-none">
              Menu
              <ChevronDownIcon
                className="h-5 w-5 flex-none text-gray-500 hover:text-orange-500"
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="top-full absolute inset-x-[-20rem] z-10 mt-3 w-screen max-w-md overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-orange-500">
                {/* popover list icons */}
                <div className="p-4">
                  {menus.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-orange-100"
                    >
                      <div className="h-11 w-11 flex flex-none items-center justify-center rounded-lg bg-gray-100 group-hover:bg-white">
                        <item.icon
                          className="h-6 w-6 text-gray-600 group-hover:text-orange-600"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="flex-auto">
                        <Link
                          to={item.to}
                          className="block font-semibold text-gray-900"
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                        </Link>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                {/* popover call to action */}
                <div className="divide-x grid grid-cols-2 divide-gray-900 bg-gray-100">
                  {callsToAction.map((item) => (
                    <Link
                      key={item.name}
                      to={item.to}
                      className="flex items-center justify-center gap-x-2 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-orange-100"
                    >
                      <item.icon
                        className="h-5 w-5 flex-none text-gray-400"
                        aria-hidden="true"
                      />
                      {item.name}
                    </Link>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
          {/* restaurant login */}
          {!isExpiredRestaurantToken && restaurantToken ? (
            <button
              onClick={handleLogout}
              className="text-sm font-semibold leading-6 text-gray-900 hover:text-red-600"
            >
              Log out&nbsp;<span className="text-sm">&rarr;</span>
            </button>
          ) : (
            <Link
              to="/restaurant-login"
              className="text-sm font-semibold leading-6 text-gray-900 hover:text-orange-500"
            >
              Restaurant login
            </Link>
          )}
        </Popover.Group>
        {/* navbar login & signup button */}
        <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:gap-4">
          {!_.isEmpty(userToken) && !isExpiredUserToken ? (
            <button
              className="text-sm font-semibold leading-6 text-gray-900 hover:text-red-600"
              onClick={handleLogout}
            >
              Sign out
            </button>
          ) : (
            <Fragment>
              <Link
                to="/login"
                className="text-sm font-semibold leading-6 text-gray-900 hover:text-orange-500"
              >
                Log in <span aria-hidden="true">&rarr;</span>
              </Link>
              <Link
                to="/signup"
                className="text-sm font-semibold leading-6 text-gray-900 hover:text-orange-500"
              >
                sign up<span aria-hidden="true">&rarr;</span>
              </Link>
            </Fragment>
          )}

          {/* cart icon */}
          <Link to={"/your-cart"} className="relative">
            <div className="">
              <span className="text-slate-50 absolute right-[3px] top-[-12px] rounded-full pe-1 ps-1 text-xs hover:text-orange-500">
                {carts.length}
              </span>
              <CartIcon />
            </div>
          </Link>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="sm:ring-gray-900/10 fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1">
          <div className="flex items-center justify-between">
            <Link to="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="https://omnifood.dev/img/omnifood-logo.png"
                alt="hero-logo"
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
            <div className="-my-6 divide-y-2 divide-orange-500">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-4 text-base font-semibold leading-7 text-gray-900 hover:bg-orange-100 hover:text-orange-500">
                        Menu
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none",
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...menus, ...callsToAction].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            to={item.to}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-orange-100"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Link
                  to="/all-meals"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-orange-100 hover:text-orange-500"
                >
                  Features
                </Link>
                <Link
                  to="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-orange-100 hover:text-orange-500"
                >
                  Marketplace
                </Link>
                {/* drawer restaurant login & signup button  */}
                <div>
                  {!_.isNull(restaurantToken) && !isExpiredRestaurantToken ? (
                    <button
                      className="-mx-3 block rounded-lg px-2 py-1 text-base font-semibold leading-7 text-gray-900 hover:bg-orange-100 hover:text-red-600"
                      onClick={handleLogout}
                    >
                      Sign out
                    </button>
                  ) : (
                    <Fragment>
                      <Link
                        to="/restaurant-login"
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-orange-100 hover:text-orange-500"
                      >
                        Restaurant login
                      </Link>
                      <Link
                        to="/restaurant-signup"
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-orange-100 hover:text-orange-500"
                      >
                        Restaurant Signup
                      </Link>
                    </Fragment>
                  )}
                </div>
              </div>
              {/* drawer user login & signup button */}
              <div className="flex flex-col justify-center gap-4 py-4">
                {!_.isNull(userToken) && !isExpiredUserToken ? (
                  <button
                    className="rounded-md bg-red-700 px-3 py-1 text-gray-100 shadow-lg hover:bg-red-500"
                    onClick={handleLogout}
                  >
                    Sign out
                  </button>
                ) : (
                  <Fragment>
                    <Link
                      to="/login"
                      className="-mx-3 block rounded-lg border-gray-900 px-3 py-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-100"
                    >
                      Log in
                    </Link>
                    <Link
                      to="/signup"
                      className="-mx-3 block rounded-lg border-gray-900 px-3 py-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-100"
                    >
                      Sign up
                    </Link>
                  </Fragment>
                )}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};

export default Navbar;
