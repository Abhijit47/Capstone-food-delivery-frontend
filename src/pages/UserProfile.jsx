import React from "react";

const UserProfile = () => {
  const style1 = {
    transform: "scale(1.5)",
    opacity: "0.1",
  };

  const style2 = {
    background: "radial-gradient(black, transparent 60%)",
    transform: "rotate3d(0, 0, 1, 20deg), scale3d(1, 0.6, 1)",
    opacity: "0.2",
  };

  return (
    <section className="h-full">
      <div className="flex items-center justify-center mt-10">
        <div>
          {/* <!-- component --> */}
          <div className="flex items-center justify-center">
            <div className="grid max-w-5xl grid-cols-6 rounded-lg bg-blue-800">
              <div className="col-span-4">
                <h2 className="ml-10 mt-8 text-3xl font-bold text-white">
                  A food for your entire journey
                </h2>

                <p className="ml-10 mt-5 text-sm font-light text-white">
                  The smart 365-days-per-year food subscription that will make
                  you eat healthy again. Tailored to your personal tastes and
                  nutritional needs.
                </p>

                <button className="group mb-8 ml-10 mt-5 font-semibold text-white ">
                  View my all orders
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="transition transition-200 inline-block h-6 w-6 delay-100 group-hover:translate-x-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </button>
              </div>

              <div className="relative col-span-2">
                <img
                  src="https://i.pravatar.cc/150"
                  className="absolute bottom-0 right-0 opacity-25"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <h4 className="text-center font-sans text-4xl font-bold text-gray-800 p-4">
        My orders
      </h4>
      <div>
        <div className="flex flex-wrap items-center justify-center p-1">
          <div className="relative m-6 max-w-xs flex-shrink-0 overflow-hidden rounded-lg bg-orange-500 shadow-lg">
            <svg
              className="absolute bottom-0 left-0 mb-8"
              viewBox="0 0 375 283"
              fill="none"
              style={style1}
            >
              <rect
                x="159.52"
                y="175"
                width="152"
                height="152"
                rx="8"
                transform="rotate(-45 159.52 175)"
                fill="white"
              />
              <rect
                y="107.48"
                width="152"
                height="152"
                rx="8"
                transform="rotate(-45 0 107.48)"
                fill="white"
              />
            </svg>
            <div className="relative flex items-center justify-center px-10 pt-10">
              <div
                className="absolute bottom-0 left-0 -mb-24 ml-3 block h-48 w-48"
                style={style2}
              ></div>
              <img
                className="relative w-40"
                src="https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png"
                alt=""
              />
            </div>
            <div className="relative mt-6 px-6 pb-6 text-white">
              <span className="-mb-1 block opacity-75">Indoor</span>
              <div className="flex justify-between">
                <span className="block text-xl font-semibold">Peace Lily</span>
                <span className="flex items-center rounded-full bg-white px-3 py-2 text-xs font-bold leading-none text-orange-500">
                  $36.00
                </span>
              </div>
            </div>
          </div>
          <div className="relative m-6 max-w-xs flex-shrink-0 overflow-hidden rounded-lg bg-teal-500 shadow-lg">
            <svg
              className="absolute bottom-0 left-0 mb-8"
              viewBox="0 0 375 283"
              fill="none"
              style={style1}
            >
              <rect
                x="159.52"
                y="175"
                width="152"
                height="152"
                rx="8"
                transform="rotate(-45 159.52 175)"
                fill="white"
              />
              <rect
                y="107.48"
                width="152"
                height="152"
                rx="8"
                transform="rotate(-45 0 107.48)"
                fill="white"
              />
            </svg>
            <div className="relative flex items-center justify-center px-10 pt-10">
              <div
                className="absolute bottom-0 left-0 -mb-24 ml-3 block h-48 w-48"
                style={style2}
              ></div>
              <img
                className="relative w-40"
                src="https://user-images.githubusercontent.com/2805249/64069998-305de300-cc9a-11e9-8ae7-5a0fe00299f2.png"
                alt=""
              />
            </div>
            <div className="relative mt-6 px-6 pb-6 text-white">
              <span className="-mb-1 block opacity-75">Outdoor</span>
              <div className="flex justify-between">
                <span className="block text-xl font-semibold">Monstera</span>
                <span className="flex items-center rounded-full bg-white px-3 py-2 text-xs font-bold leading-none text-teal-500">
                  $45.00
                </span>
              </div>
            </div>
          </div>
          <div className="relative m-6 max-w-xs flex-shrink-0 overflow-hidden rounded-lg bg-purple-500 shadow-lg">
            <svg
              className="absolute bottom-0 left-0 mb-8"
              viewBox="0 0 375 283"
              fill="none"
              style={style1}
            >
              <rect
                x="159.52"
                y="175"
                width="152"
                height="152"
                rx="8"
                transform="rotate(-45 159.52 175)"
                fill="white"
              />
              <rect
                y="107.48"
                width="152"
                height="152"
                rx="8"
                transform="rotate(-45 0 107.48)"
                fill="white"
              />
            </svg>
            <div className="relative flex items-center justify-center px-10 pt-10">
              <div
                className="absolute bottom-0 left-0 -mb-24 ml-3 block h-48 w-48"
                style={style2}
              ></div>
              <img
                className="relative w-40"
                src="https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png"
                alt=""
              />
            </div>
            <div className="relative mt-6 px-6 pb-6 text-white">
              <span className="-mb-1 block opacity-75">Outdoor</span>
              <div className="flex justify-between">
                <span className="block text-xl font-semibold">Oak Tree</span>
                <span className="flex items-center rounded-full bg-white px-3 py-2 text-xs font-bold leading-none text-purple-500">
                  $68.50
                </span>
              </div>
            </div>
          </div>

          <div className="relative m-6 max-w-xs flex-shrink-0 overflow-hidden rounded-lg bg-purple-500 shadow-lg">
            <svg
              className="absolute bottom-0 left-0 mb-8"
              viewBox="0 0 375 283"
              fill="none"
              style={style1}
            >
              <rect
                x="159.52"
                y="175"
                width="152"
                height="152"
                rx="8"
                transform="rotate(-45 159.52 175)"
                fill="white"
              />
              <rect
                y="107.48"
                width="152"
                height="152"
                rx="8"
                transform="rotate(-45 0 107.48)"
                fill="white"
              />
            </svg>
            <div className="relative flex items-center justify-center px-10 pt-10">
              <div
                className="absolute bottom-0 left-0 -mb-24 ml-3 block h-48 w-48"
                style={style2}
              ></div>
              <img
                className="relative w-40"
                src="https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png"
                alt=""
              />
            </div>
            <div className="relative mt-6 px-6 pb-6 text-white">
              <span className="-mb-1 block opacity-75">Outdoor</span>
              <div className="flex justify-between">
                <span className="block text-xl font-semibold">Oak Tree</span>
                <span className="flex items-center rounded-full bg-white px-3 py-2 text-xs font-bold leading-none text-purple-500">
                  $68.50
                </span>
              </div>
            </div>
          </div>

          <div className="relative m-6 max-w-xs flex-shrink-0 overflow-hidden rounded-lg bg-purple-500 shadow-lg">
            <svg
              className="absolute bottom-0 left-0 mb-8"
              viewBox="0 0 375 283"
              fill="none"
              style={style1}
            >
              <rect
                x="159.52"
                y="175"
                width="152"
                height="152"
                rx="8"
                transform="rotate(-45 159.52 175)"
                fill="white"
              />
              <rect
                y="107.48"
                width="152"
                height="152"
                rx="8"
                transform="rotate(-45 0 107.48)"
                fill="white"
              />
            </svg>
            <div className="relative flex items-center justify-center px-10 pt-10">
              <div
                className="absolute bottom-0 left-0 -mb-24 ml-3 block h-48 w-48"
                style={style2}
              ></div>
              <img
                className="relative w-40"
                src="https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png"
                alt=""
              />
            </div>
            <div className="relative mt-6 px-6 pb-6 text-white">
              <span className="-mb-1 block opacity-75">Outdoor</span>
              <div className="flex justify-between">
                <span className="block text-xl font-semibold">Oak Tree</span>
                <span className="flex items-center rounded-full bg-white px-3 py-2 text-xs font-bold leading-none text-purple-500">
                  $68.50
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserProfile;
