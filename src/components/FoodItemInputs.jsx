import React, { Fragment } from "react";

const FoodItemInputs = ({ foodItem, setFoodItem }) => {
  // destructuring form data
  const { itemName, quantity, price, description, picture } = foodItem;

  // define a function for handle form inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFoodItem({ ...foodItem, [name]: value });
  };

  const formInputs = [
    {
      labelName: "item name",
      labelFor: "itemName",
      id: "itemName",
      name: "itemName",
      type: "text",
      value: itemName,
    },
    {
      labelName: "quantity",
      labelFor: "quantity",
      id: "quantity",
      name: "quantity",
      type: "number",
      value: quantity,
    },
    {
      labelName: "price",
      labelFor: "price",
      id: "price",
      name: "price",
      type: "number",
      value: price,
    },
    {
      labelName: "description",
      labelFor: "description",
      id: "description",
      name: "description",
      value: description,
    },
    {
      labelName: "picture",
      labelFor: "picture",
      id: "picture",
      name: "picture",
      type: "url",
      value: picture,
      pattern: "https://.*",
      size: "30",
    },
  ];

  return (
    <Fragment>
      {formInputs.map((input, index) => (
        <Fragment key={index}>
          {index === 3 ? (
            <div>
              <label htmlFor={input.labelFor} className="form-label">
                {input.labelName}
              </label>
              <div className="mt-2">
                <textarea
                  name={input.name}
                  id={input.id}
                  className="form-input"
                  cols="30"
                  rows={5}
                  value={input.value}
                  autoComplete="off"
                  required
                  onChange={handleChange}
                ></textarea>
              </div>
            </div>
          ) : (
            <Fragment key={index}>
              {!index === -1 ? (
                <div>
                  <label htmlFor={input.labelFor} className="form-label">
                    {input.labelName}
                  </label>
                  <div className="mt-2">
                    <input
                      id={input.id}
                      name={input.name}
                      type={input.type}
                      autoComplete="off"
                      required
                      className="form-input"
                      value={input.value}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              ) : (
                <div>
                  <label htmlFor={input.labelFor} className="form-label">
                    {input.labelName}
                  </label>
                  <div className="mt-2">
                    <input
                      id={input.id}
                      name={input.name}
                      type={input.type}
                      autoComplete="off"
                      pattern={input.pattern}
                      size={input.size}
                      required
                      className="form-input"
                      value={input.value}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              )}
            </Fragment>
          )}
        </Fragment>
      ))}
    </Fragment>
  );
};

export default FoodItemInputs;
