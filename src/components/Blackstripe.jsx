import React from "react";
import Button from "./Button";
const Blackstripe = ({ heading, tagline, btnText }) => {
  return (
    <>
      <div className="bg-slate-900 flex flex-col items-center justify-center text-white gap-3 py-6">
        <h2 className="text-3xl font-semibold text-center">{heading}</h2>
        <p>{tagline}</p>
        <div>
          <Button text={btnText}></Button>
        </div>
      </div>
    </>
  );
};

export default Blackstripe;
