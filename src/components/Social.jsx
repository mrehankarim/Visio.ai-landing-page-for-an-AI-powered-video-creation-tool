import React from "react";
import Blackstripe from "./Blackstripe";
const Social = () => {
  return (
    <>
      <section className="my-28 flex justify-around items-center md:flex-col md:gap-10 md:text-center">
        <div className="flex flex-col gap-7">
          <div>
            <h2 className="text-4xl font-semibold text-slate-800">
              Grow on Social Media Fast
            </h2>
            <p>Make content repurposing your super online growth</p>
          </div>
          <div className=" flex flex-col gap-3">
            <div>
              <h4 className="text-lg font-semibold leading-8">
                Get short videos from long ones
              </h4>
              <p>Caption impover video performance by 80%</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold leading-8">
                Get 100+templates per video
              </h4>
              <p>Caption impover video performance by 80%</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold leading-8">
                Good buy to agency and freelancers
              </h4>
              <p>Caption impover video performance by 80%</p>
            </div>
          </div>
        </div>
        <div className="w-2/5 md:w-4/5">
          <img
            src="https://cdn.pixabay.com/photo/2017/03/28/12/11/chairs-2181960_1280.jpg"
            alt=""
            className="w-full rounded-lg "
          />
        </div>
      </section>
    </>
  );
};

export default Social;
