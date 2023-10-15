import React from "react";
import { featureImages } from "../constant/index";

const Features = () => {
  return (
    <section className="p-10">
      <h3 className="text-center font-semibold text-gray-600 sm:text-sm lg:text-lg">
        AS FEATURED IN
      </h3>
      <div className="mt-5 grid grid-cols-10 gap-4">
        {featureImages.map((feature, index) => (
          <div
            className="col-span-2 h-32 cursor-pointer rounded-lg p-2"
            key={index + 1}
          >
            <img
              className="m-auto aspect-video h-20 object-scale-down opacity-50 brightness-0"
              src={feature.imageUrl}
              alt={feature.companyName}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
