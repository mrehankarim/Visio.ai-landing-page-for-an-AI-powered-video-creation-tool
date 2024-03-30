import React from "react";
import Singletest from "./Singletest";
import Blackstripe from "./Blackstripe";
const Topcreator = () => {
  return (
    <>
      <section className="flex flex-col gap-10 ">
        <h2 className="text-3xl font-black text-center text-slate-900">
          Trusted By 300K+ Creators
        </h2>
        <div className="flex justify-center md:flex-col md:items-center gap-10">
          <Singletest
            img="https://cdn.pixabay.com/photo/2023/12/21/06/23/middle-age-8461306_960_720.jpg%201x,%20https://cdn.pixabay.com/photo/2023/12/21/06/23/middle-age-8461306_1280.jpg"
            review="Using Visio.AI has been a game-changer for my business. The AI-powered editing capabilities and extensive template library saved me hours of work. I can now create high-quality videos with ease, enhancing my brand's visual appeal. Visio.AI is a must-have tool for anyone serious about video marketing."
            owner="Chris Brad - Founder Tri Marketing"
          ></Singletest>
          <Singletest
            img="https://cdn.pixabay.com/photo/2021/11/19/00/12/man-6807759_960_720.jpg%201x,%20https://cdn.pixabay.com/photo/2021/11/19/00/12/man-6807759_1280.jpg"
            review="Visio.AI revolutionized my video production process! Its intuitive interface and powerful editing tools helped me create stunning videos effortlessly. With a vast library of templates and smart features, I can now produce professional content in minutes. Highly recommended for anyone in need of a game-changing video tool!"
            owner=" Mark William - Founder VidLabs"
          ></Singletest>
        </div>
        <div className="flex justify-center">
          <Singletest
            img="https://cdn.pixabay.com/photo/2017/07/11/18/59/mentor-2494673_960_720.jpg%201x,%20https://cdn.pixabay.com/photo/2017/07/11/18/59/mentor-2494673_1280.jpg"
            review="Visio.AI exceeded my expectations! As a content creator, I needed a tool that could streamline my video production workflow without compromising quality. Visio.AI delivered with its user-friendly interface, customizable templates, and AI-driven editing features. It's my go-to solution for creating engaging videos that resonate with my audience."
            owner="James Daniel - Found MarkHub"
          ></Singletest>
        </div>
        <Blackstripe
          heading="Trusted By 300K+ Creators"
          tagline="Create Engaging videos in no time"
          btnText="Try for free"
        ></Blackstripe>
      </section>
    </>
  );
};

export default Topcreator;
