import React, { Fragment } from "react";

const HowItWorks = () => {
  const data = [
    {
      id: "01",
      heading: "Tell us what you like (and what not)",
      description:
        "Never again waste time thinking about what to eat! Omnifood AI will create a 100% personalized weekly meal plan just for you. It makes sure you get all the nutrients and vitamins you need, no matter what diet you follow!",
      imageURL: "https://omnifood.dev/img/app/app-screen-1.png",
    },
    {
      id: "02",
      heading: "Approve your weekly meal plan",
      description:
        "Once per week, approve the meal plan generated for you by Omnifood AI. You can change ingredients, swap entire meals, or even add your own recipes.",
      imageURL: "https://omnifood.dev/img/app/app-screen-2.png",
    },
    {
      id: "03",
      heading: "Receive meals at convenient time",
      description:
        "Best chefs in town will cook your selected meal every day, and we will deliver it to your door whenever works best for you. You can change delivery schedule and address daily!",
      imageURL: "https://omnifood.dev/img/app/app-screen-3.png",
    },
  ];
  return (
    <section className="h-auto bg-white p-12">
      <div>
        <h3 className="font-sans font-bold text-orange-700">HOW IT WORKS</h3>
        <p className="text-5xl font-bold text-gray-800">
          Your daily dose of health in 3 simple steps
        </p>
      </div>

      <div className="">
        {data.map((item, index) => (
          <Fragment key={index}>
            {index === 1 ? (
              <div className="p-8">
                <div className="grid justify-items-center gap-8 lg:grid-cols-2">
                  <div className="xs:order-last sm:order-last md:order-last lg:order-first">
                    <img
                      src={item.imageURL}
                      alt={item.id}
                      className="h-[20rem]"
                    />
                  </div>
                  <div>
                    <h4 className="text-6xl font-extrabold text-orange-300">
                      {item.id}
                    </h4>
                    <h5 className="text-3xl font-bold text-gray-800">
                      {item.heading}
                    </h5>
                    <p className="text-lg font-medium leading-8 text-gray-700">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="p-8">
                <div className="grid justify-items-center gap-8 lg:grid-cols-2">
                  <div>
                    <h4 className="text-6xl font-extrabold text-orange-300">
                      {item.id}
                    </h4>
                    <h5 className="text-3xl font-bold text-gray-800">
                      {item.heading}
                    </h5>
                    <p className="text-lg font-medium leading-8 text-gray-700">
                      {item.description}
                    </p>
                  </div>
                  <div>
                    <img
                      src={item.imageURL}
                      alt={item.id}
                      className="h-[20rem]"
                    />
                  </div>
                </div>
              </div>
            )}
          </Fragment>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
