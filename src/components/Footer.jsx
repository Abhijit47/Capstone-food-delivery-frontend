import React from "react";
import { Link } from "react-router-dom";
import Instagram from "../assets/icons/Instagram";
import Facebook from "../assets/icons/Facebook";
import Twitter from "../assets/icons/Twitter";
import Github from "../assets/icons/Github";
import Dribble from "../assets/icons/Dribble";

const Footer = () => {
  // eslint-disable-next-line
  const footerMenu = [
    {
      id: 1,
      rowName: "",
      link_1: "",
      link_2: "",
      link_3: "",
      link_4: "",
      link_5: "",
    },
    {
      id: 2,
      rowName: "",
      link_1: "",
      link_2: "",
      link_3: "",
      link_4: "",
      link_5: "",
    },
    {
      id: 3,
      rowName: "",
      link_1: "",
      link_2: "",
      link_3: "",
      link_4: "",
      link_5: "",
    },
    {
      id: 4,
      rowName: "",
      link_1: "",
      link_2: "",
      link_3: "",
      link_4: "",
      link_5: "",
    },
    {
      id: 5,
      rowName: "",
      link_1: "",
      link_2: "",
      link_3: "",
      link_4: "",
      link_5: "",
    },
  ];
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-start lg:gap-8">
          {/* <div className="text-indigo-600">
            <FoodIcon />
          </div> */}

          <div className="mt-8 grid grid-cols-2 gap-8 lg:mt-0 lg:grid-cols-5 justify-center lg:gap-y-16">
            {/* <div className="col-span-2">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Get the latest news!
                </h2>

                <p className="mt-4 text-gray-500">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse
                  non cupiditate quae nam molestias.
                </p>
              </div>
            </div>

            <div className="col-span-2 lg:col-span-3 lg:flex lg:items-end">
              <form className="w-full">
                <label htmlFor="UserEmail" className="sr-only">
                  {" "}
                  Email{" "}
                </label>

                <div className="border border-gray-100 p-2 ring-indigo-500 focus-within:ring sm:flex sm:items-center sm:gap-4">
                  <input
                    type="email"
                    id="UserEmail"
                    placeholder="john@rhcp.com"
                    className="w-full border-none focus:border-transparent focus:ring-transparent sm:text-sm"
                  />

                  <Link
                    to={"/login"}
                    className="mt-1 w-full rounded-md bg-indigo-500 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-none hover:bg-indigo-600 sm:mt-0 sm:w-auto sm:shrink-0"
                  >
                    Sign Up
                  </Link>
                </div>
              </form>
            </div> */}

            <div className="col-span-2 sm:col-span-1 p-10">
              <p className="font-medium text-gray-900">Services</p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <Link
                    to="#"
                    className="transition text-gray-700 hover:opacity-75"
                  >
                    1on1 Coaching
                  </Link>
                </li>

                <li>
                  <Link
                    to="#"
                    className="transition text-gray-700 hover:opacity-75"
                  >
                    Company Review
                  </Link>
                </li>

                <li>
                  <Link
                    to="#"
                    className="transition text-gray-700 hover:opacity-75"
                  >
                    Accounts Review
                  </Link>
                </li>

                <li>
                  <Link
                    to="#"
                    className="transition text-gray-700 hover:opacity-75"
                  >
                    HR Consulting
                  </Link>
                </li>

                <li>
                  <Link
                    to="#"
                    className="transition text-gray-700 hover:opacity-75"
                  >
                    SEO Optimisation
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1 p-10">
              <p className="font-medium text-gray-900">Company</p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <Link
                    to="#"
                    className="transition text-gray-700 hover:opacity-75"
                  >
                    About
                  </Link>
                </li>

                <li>
                  <Link
                    to="#"
                    className="transition text-gray-700 hover:opacity-75"
                  >
                    Meet the Team
                  </Link>
                </li>

                <li>
                  <Link
                    to="#"
                    className="transition text-gray-700 hover:opacity-75"
                  >
                    Accounts Review
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1 p-10">
              <p className="font-medium text-gray-900">Helpful Links</p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <Link
                    to="#"
                    className="transition text-gray-700 hover:opacity-75"
                  >
                    Contact
                  </Link>
                </li>

                <li>
                  <Link
                    to="#"
                    className="transition text-gray-700 hover:opacity-75"
                  >
                    FAQs
                  </Link>
                </li>

                <li>
                  <Link
                    to="#"
                    className="transition text-gray-700 hover:opacity-75"
                  >
                    Live Chat
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1 p-10">
              <p className="font-medium text-gray-900">Legal</p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <Link
                    to="#"
                    className="transition text-gray-700 hover:opacity-75"
                  >
                    Accessibility
                  </Link>
                </li>

                <li>
                  <Link
                    to="#"
                    className="transition text-gray-700 hover:opacity-75"
                  >
                    Returns Policy
                  </Link>
                </li>

                <li>
                  <Link
                    to="#"
                    className="transition text-gray-700 hover:opacity-75"
                  >
                    Refund Policy
                  </Link>
                </li>

                <li>
                  <Link
                    to="#"
                    className="transition text-gray-700 hover:opacity-75"
                  >
                    Hiring Statistics
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1 p-10">
              <p className="font-medium text-gray-900">Downloads</p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <Link
                    to="#"
                    className="transition text-gray-700 hover:opacity-75"
                  >
                    Marketing Calendar
                  </Link>
                </li>

                <li>
                  <Link
                    to="#"
                    className="transition text-gray-700 hover:opacity-75"
                  >
                    SEO Infographics
                  </Link>
                </li>
              </ul>
            </div>

            <ul className="col-span-2 flex justify-start gap-6 lg:col-span-5 lg:justify-end p-4">
              <li>
                <Link
                  href="/"
                  rel="noreferrer"
                  target="_blank"
                  className="transition text-gray-700 hover:opacity-75"
                >
                  <span className="sr-only">Facebook</span>

                  <Facebook />
                </Link>
              </li>

              <li>
                <Link
                  href="/"
                  rel="noreferrer"
                  target="_blank"
                  className="transition text-gray-700 hover:opacity-75"
                >
                  <span className="sr-only">Instagram</span>

                  <Instagram />
                </Link>
              </li>

              <li>
                <Link
                  href="/"
                  rel="noreferrer"
                  target="_blank"
                  className="transition text-gray-700 hover:opacity-75"
                >
                  <span className="sr-only">Twitter</span>

                  <Twitter />
                </Link>
              </li>

              <li>
                <Link
                  href="/"
                  rel="noreferrer"
                  target="_blank"
                  className="transition text-gray-700 hover:opacity-75"
                >
                  <span className="sr-only">GitHub</span>

                  <Github />
                </Link>
              </li>

              <li>
                <Link
                  href="/"
                  rel="noreferrer"
                  target="_blank"
                  className="transition text-gray-700 hover:opacity-75"
                >
                  <span className="sr-only">Dribbble</span>

                  <Dribble />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 border-gray-100 pt-8">
          <div className="sm:flex sm:justify-between">
            <p className="text-xs text-gray-500">
              &copy; {new Date().getFullYear()}. Company Name. All rights
              reserved.
            </p>

            <ul className="mt-8 flex flex-wrap justify-start gap-4 text-xs sm:mt-0 lg:justify-end">
              <li>
                <Link
                  to="#"
                  className="transition text-gray-500 hover:opacity-75"
                >
                  Terms & Conditions
                </Link>
              </li>

              <li>
                <Link
                  to="#"
                  className="transition text-gray-500 hover:opacity-75"
                >
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link
                  to="#"
                  className="transition text-gray-500 hover:opacity-75"
                >
                  Cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
