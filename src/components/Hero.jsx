import React from "react";
import Button from "./Button";
const Hero = () => {
  return (
    <>
      <section
        className="flex flex-col gap-3  justify-center "
        style={{
          height: "90vh",
        }}
      >
        <h2
          className="font-black text-center"
          style={{
            fontSize: "40px",
            lineHeight: "1",
          }}
        >
          Generate concise videos <br /> from longer ones instantly.
        </h2>
        <p className="text-center">
          Leverage AI to create short videos <br />
          from long ones and save up to 95% of your time.
        </p>
        <div className="flex justify-center">
          <Button text="Try for free"></Button>
        </div>
        <p className="text-center text-slate-600">
          Get 120 min free every month
        </p>
      </section>
    </>
  );
};

export default Hero;
