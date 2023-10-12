import { Fragment, useState } from "react";
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

const products = [
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
    name: "Security",
    description: "Your customers’ data will be safe and secure",
    to: "#",
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

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { carts } = useSelector((state) => state.carts);

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
              className="h-6 w-40"
              src="https://omnifood.dev/img/omnifood-logo.png"
              alt="hero-logo"
            />
          </Link>
        </div>
        <div className="flex gap-4 lg:hidden">
          <Link to={"/your-cart"} className="relative">
            <div className="">
              <span className="text-slate-50 absolute right-[3px] top-[-12px] rounded-full bg-gray-400 pe-1 ps-1 text-xs">
                {carts.length}
              </span>
              <CartIcon />
            </div>
          </Link>
          <button
            type="button"
            className="-m-2.5 p-2.5 inline-flex items-center justify-center rounded-md text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 outline-none">
              Menu
              <ChevronDownIcon
                className="h-5 w-5 flex-none text-gray-400"
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
              <Popover.Panel className="-left-8 top-full ring-gray-900/5 absolute z-10 mt-3 w-screen max-w-md overflow-hidden rounded-lg bg-white shadow-lg ring-1">
                <div className="p-4">
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className="hover:bg-gray-50 group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6"
                    >
                      <div className="h-11 w-11 bg-gray-50 flex flex-none items-center justify-center rounded-lg group-hover:bg-white">
                        <item.icon
                          className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
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
                <div className="divide-x divide-gray-900/5 bg-gray-50 grid grid-cols-2">
                  {callsToAction.map((item) => (
                    <Link
                      key={item.name}
                      to={item.to}
                      className="gap-x-2.5 flex items-center justify-center p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
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

          <a
            href="#price-section"
            className="text-sm font-semibold leading-6 text-gray-900 hover:text-gray-700"
          >
            Features
          </a>
          <Link
            to="/all-meals"
            className="text-sm font-semibold leading-6 text-gray-900 hover:text-gray-700"
          >
            Explore food items
          </Link>
          <Link
            to="/restaurant-login"
            className="text-sm font-semibold leading-6 text-gray-900 hover:text-gray-700"
          >
            Restaurant login
          </Link>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-4">
          <Link
            to="/login"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Log in <span aria-hidden="true">&rarr;</span>
          </Link>
          <Link
            to="/signup"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            sign up<span aria-hidden="true">&rarr;</span>
          </Link>
          <Link to={"/your-cart"} className="relative">
            <div className="">
              <span className="text-slate-50 absolute right-[3px] top-[-12px] rounded-full bg-gray-400 pe-1 ps-1 text-xs">
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
            <div className="divide-y divide-gray-500/10 -my-6">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="pr-3.5 hover:bg-gray-50 flex w-full items-center justify-between rounded-lg py-2 pl-3 text-base font-semibold leading-7 text-gray-900">
                        Product
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none",
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...products, ...callsToAction].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            to={item.to}
                            className="hover:bg-gray-50 block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Link
                  to="#"
                  className="hover:bg-gray-50 -mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900"
                >
                  Features
                </Link>
                <Link
                  to="#"
                  className="hover:bg-gray-50 -mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900"
                >
                  Marketplace
                </Link>
                <Link
                  to="#"
                  className="hover:bg-gray-50 -mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900"
                >
                  Company
                </Link>
              </div>
              <div className="flex justify-center gap-8 py-6">
                <Link
                  to="/login"
                  className="py-2.5 hover:bg-gray-50 -mx-3 block rounded-lg border-gray-900 px-3 text-base font-semibold leading-7 text-gray-900 transition-all delay-150 duration-150 hover:border-b-2"
                >
                  Log in
                </Link>
                <Link
                  to="/signup"
                  className="py-2.5 hover:bg-gray-50 -mx-3 block rounded-lg border-gray-900 px-3 text-base font-semibold leading-7 text-gray-900 transition-all delay-150 duration-150 hover:border-b-2"
                >
                  sign up
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
