import React from "react";

const PriceTestimonial = () => {
  let monthly = document.getElementById("monthly");
  let annually = document.getElementById("annually");

  let flag = false;
  const toggleIt = () => {
    if (!flag) {
      monthly.classList.add("bg-indigo-700");
      monthly.classList.add("text-white");
      monthly.classList.remove("bg-gray-100");
      monthly.classList.remove("text-gray-600");
      annually.classList.remove("bg-indigo-700");
      annually.classList.remove("text-white");
      annually.classList.add("bg-gray-100");
      annually.classList.add("text-gray-600");
      flag = true;
    } else {
      monthly.classList.remove("bg-indigo-700");
      monthly.classList.remove("text-white");
      monthly.classList.add("bg-gray-100");
      monthly.classList.add("text-gray-600");
      annually.classList.add("bg-indigo-700");
      annually.classList.add("text-white");
      annually.classList.remove("bg-gray-100");
      annually.classList.remove("text-gray-600");
      flag = false;
    }
  };
  return (
    <div className="2xl:px-0 px-6 py-20 xl:container xl:mx-auto">
      <div className="items-center justify-between lg:flex">
        <div className=" w-full lg:w-1/2">
          <p className="text-base leading-4 text-gray-600">Choose your plan</p>
          <p className="mt-3 text-3xl font-bold leading-10 text-gray-800 md:text-5xl">
            Our pricing plan
          </p>
          <p
            role="contentinfo"
            className="mt-5 text-base leading-5 text-gray-600"
          >
            We’re working on a suit of tools to make managing complex systems
            easier, for everyone for free. we can’t wait to hear what you think
          </p>
          <div className="w-56">
            <div className="shadow mt-10 flex items-center rounded-full bg-gray-100">
              <button
                onClick={toggleIt}
                className="mr-1 rounded-full bg-gray-100 px-6 py-4 text-base leading-none text-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-offset-2"
                id="monthly"
              >
                Monthly
              </button>
              <button
                onClick={toggleIt}
                className="rounded-full bg-indigo-700 px-6 py-4 text-base leading-none text-white focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-offset-2"
                id="annually"
              >
                Annually
              </button>
            </div>
          </div>
        </div>
        <div
          className="relative mt-12 w-full md:px-8 lg:mt-0 lg:w-7/12 xl:w-1/2"
          role="list"
        >
          <img
            src="https://i.ibb.co/0n6DSS3/bgimg.png"
            className="absolute -ml-12 mt-24 w-full"
            alt="background circle images"
          />
          <div
            role="listitem"
            className="shadow relative z-30 cursor-pointer rounded-lg bg-white p-8"
          >
            <div className="items-center justify-between md:flex">
              <h2 className="text-2xl font-semibold leading-6 text-gray-800">
                Starter
              </h2>
              <p className="mt-4 text-2xl font-semibold leading-6 text-gray-800 md:mt-0">
                FREE
              </p>
            </div>
            <p className="md:w-80 mt-4 text-base leading-6 text-gray-600">
              Full access to all features and no credit card required
            </p>
          </div>
          <div
            role="listitem"
            className="shadow relative z-30 mt-3 flex cursor-pointer rounded-lg bg-white"
          >
            <div className="w-2.5  h-auto rounded-bl-md rounded-tl-md bg-indigo-700" />
            <div className="w-full p-8">
              <div className="items-center justify-between md:flex">
                <h2 className="text-2xl font-semibold leading-6 text-gray-800">
                  Personal
                </h2>
                <p className="mt-4 text-2xl font-semibold leading-6 text-gray-800 md:mt-0">
                  $18<span className="text-base font-normal">/mo</span>
                </p>
              </div>
              <p className="md:w-80 mt-4 text-base leading-6 text-gray-600">
                Unlimited products features and dedicated support channels
              </p>
            </div>
          </div>
          <div
            role="listitem"
            className="shadow mt-7 relative z-30 cursor-pointer rounded-lg bg-white p-8"
          >
            <div className="items-center justify-between md:flex">
              <h2 className="text-2xl font-semibold leading-6 text-gray-800">
                Team
              </h2>
              <p className="mt-4 text-2xl font-semibold leading-6 text-gray-800 md:mt-0">
                $18<span className="text-base font-normal">/mo</span>
              </p>
            </div>
            <p className="md:w-80 mt-4 text-base leading-6 text-gray-600">
              Unlimited products features and dedicated support channels
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceTestimonial;
