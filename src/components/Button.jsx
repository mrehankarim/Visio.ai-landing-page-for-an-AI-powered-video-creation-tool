import React from "react";

const Button = ({ text }) => {
  return (
    <>
      <button className="bg-orange-600 text-white rounded flex gap-2 align-items-center px-3 py-2 ">
        {text}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
          />
        </svg>
      </button>
    </>
  );
};

export default Button;
