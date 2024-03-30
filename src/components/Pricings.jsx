import React from "react";
import Button from "./Button";
const Card = ({ plan, price, features }) => {
  return (
    <>
      <div className="flex flex-col gap-7 border-2 border-slate-600 m-3 items-center rounded-xl px-3 py-10  md:w-11/12 bg-slate-900 text-white">
        <div>
          <h3 className="text-xl font-semibold text-white-800">{plan}</h3>
          <h2 className="text-5xl font-semibold text-orange-600">{price}</h2>
        </div>
        <ul>
          {features.map((feature) => (
            <li
              style={{
                fontSize: "15px",
              }}
            >
              {feature}
            </li>
          ))}
        </ul>
        <div className="flex justify-center">
          <Button text="Buy now" />
        </div>
      </div>
    </>
  );
};
const plans = [
  {
    id: 1,
    plan: "Basic Plan",
    price: 9.99,
    features: [
      "Up to 5 minutes per video",
      "Standard definition (SD)",
      "Normal processing speed",
      "MP4",
      "Basic AI enhancements",
      "Limited customization options",
      "10 GB",
      "Email support ",
      "Single-user account",
      "Basic usage analytics",
    ],
  },
  {
    id: 2,
    plan: "Standard Plan",
    price: 19.99,
    features: [
      "Up to 10 minutes per video",
      "High definition (HD)",
      "Faster processing speed",
      "MP4 and AVI",
      "Advanced AI enhancements",
      "More customization options",
      "50 GB",
      "Email and chat support ",
      "Multi-user account ",
      "Advanced analytics and insights",
    ],
  },
  {
    id: 3,
    plan: "Premium Plan",
    price: 29.99,
    features: [
      "Up to 20 minutes per video",
      "Ultra-high definition (UHD)",
      "Lightning-fast processing speed",
      "MP4 , AVI and MOV",
      "Premium AI enhancements",
      "Full customization options",
      "100 GB",
      "Wmail, chat, and phone support",
      "Multi-user account ",
      "Customizable analytics dashboard ",
    ],
  },
];
const Pricings = () => {
  return (
    <>
      <div className="grid grid-cols-3 lg:grid-cols-2 md:grid-cols-1 w-11/12 mx-auto">
        {plans.map((plan) => (
          <Card
            key={plan.id}
            plan={plan.plan}
            price={plan.price}
            features={plan.features}
          ></Card>
        ))}
      </div>
    </>
  );
};

export default Pricings;
