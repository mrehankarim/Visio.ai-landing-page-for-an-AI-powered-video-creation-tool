import React from "react";
import Blackstripe from "./Blackstripe";
const HowItWorks = () => {
  return (
    <>
      <section className="flex flex-col items-center py-28 gap-16 md:text-center">
        <div className="text-center">
          <h1 className="text-4xl font-black  text-slate-900">How it works?</h1>
          <p>Marke Content Fast for hyper fast online growth</p>
        </div>
        <div className="flex justify-center md:flex-col items-center gap-28 md:gap-4">
          <div>
            <h3 className="text-4xl font-bold md:text-2xl">
              Import Your Video
            </h3>
            <p>
              make content repurposing your super online <br /> growth
            </p>
          </div>
          <div>
            <img
              src="https://cdn.pixabay.com/photo/2015/01/11/09/19/film-596009_1280.jpg"
              alt=""
              className="rounded-lg aspect-square h-96  md:w-4/5 md:mx-auto md:h-auto "
            />
          </div>
        </div>
        <div className="flex justify-center md:flex-col-reverse  items-center gap-28 md:gap-4">
          <div>
            <img
              src="https://cdn.pixabay.com/photo/2012/08/27/22/59/movie-projector-55122_1280.png"
              alt=""
              className="rounded-lg aspect-square h-96 md:w-4/5 md:mx-auto md:h-auto"
            />
          </div>
          <div>
            <h3 className="text-4xl font-bold md:text-2xl">
              Set Your Performance
            </h3>
            <p>
              make content repurposing your super online <br /> growth
            </p>
          </div>
        </div>
        <div className="flex justify-center md:flex-col items-center gap-28 md:gap-4">
          <div>
            <h3 className="text-4xl font-bold md:text-2xl">
              Get Your Videos in <br /> minutes
            </h3>
            <p>
              make content repurposing your super online <br /> growth
            </p>
          </div>
          <div className="">
            <img
              src="https://cdn.pixabay.com/photo/2014/10/16/09/15/lens-490806_1280.jpg"
              alt=""
              className="rounded-lg aspect-square h-96  md:w-4/5 md:mx-auto md:h-auto"
            />
          </div>
        </div>
      </section>
      <Blackstripe
        heading="Trusted By 300K+ Creators"
        tagline="Create Engaging videos in no time"
        btnText="Try for Free"
      ></Blackstripe>
    </>
  );
};

export default HowItWorks;
