import React from "react";
import { featureImages } from "../constant/index";

const Features = () => {
  return (
    <section className="p-10">
      <h3 className="text-center lg:text-lg sm:text-sm font-semibold text-gray-500">AS FEATURED IN</h3>
      <div className="mt-5 grid grid-cols-10 gap-4">
        {featureImages.map((feature, index) => (
          <div
            className="col-span-2 h-32 rounded-lg p-2 cursor-pointer"
            key={index + 1}
          >
            <img
              className="aspect-video h-20 m-auto object-scale-down brightness-0 opacity-50"
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
