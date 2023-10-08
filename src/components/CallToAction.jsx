import React from "react";
import { Link } from "react-router-dom";

export default function CallToAction() {
  return (
    <div>
      <div className="2xl:mx-auto 2xl:container py-9 px-4 md:px-20 md:py-12">
        <div className="relative rounded-md">
          <img
            // src="https://i.ibb.co/SBpL1cK/pexels-aleksandar-pasaric-325185-1.png"
            src={require("./../assets/images/CTA.jpg")}
            alt="food view"
            className="absolute hidden h-full w-full rounded-md object-cover  sm:block"
          />
          <img
            // src="https://i.ibb.co/LQpxBsc/mobile.png"
            src={require("./../assets/images/CTA.jpg")}
            alt="food view"
            className="absolute h-full w-full rounded-md object-cover sm:hidden"
          />
          <div className="relative top-0 z-20 flex h-full w-full flex-col justify-between rounded-md bg-gradient-to-r from-blue-700 to-transparent p-6 text-xl md:p-16 ">
            <div>
              <h1 className="xs:text-xl w-64 text-3xl font-bold leading-9 text-white sm:w-auto md:text-5xl md:leading-10">
                Act Before It’s Too Late!
              </h1>
              <p className="2xl:pr-12 mt-4 text-lg leading-6 text-white md:w-10/12  lg:w-8/12 xl:w-5/12">
                A good idiom for kids is "It's raining cats and dogs." Kids know
                what both cats and dogs are from an early age.
              </p>
            </div>
            <div className="mt-20 w-full md:mt-12">
              <Link className="w-full rounded-md bg-white p-4 text-base font-medium leading-4 text-indigo-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 sm:w-auto">
                Explore More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
