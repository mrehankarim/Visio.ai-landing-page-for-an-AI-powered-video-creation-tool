import React from "react";

const Singletest = ({ img, review, owner }) => {
  return (
    <>
      <div className=" w-2/5 flex flex-col gap-5 md:w-4/5">
        <img
          src={img}
          alt=" "
          className="w-20 aspect-square rounded-full mx-auto justify-center p-0.5 bg-slate-600"
        />
        <p className="text-slate-900 text-sm font-normal text-center">
          {review}
        </p>
        <p className="text-center font-semibold">{owner}</p>
      </div>
    </>
  );
};

export default Singletest;
