import React from "react";
import video1 from "../assets/videos/video1.mp4";
import video2 from "../assets/videos/video2.mp4";

function HeroSection() {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20 p-12">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        VirtualR build tools
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-t bg-clip-text text-transparent">
          {" "}
          for developers
        </span>
      </h1>
      <p className="text-center mt-10 text-lg text-neutral-500 max-w-4xl">
        Build your creativity and bring your VR app ideas to life with our
        intuitive development tools. Get started today and turn your
        immagination into reality.
      </p>
      <div className="flex justify-center my-10 gap-6">
        <a href="#" className=" text-center bg-gradient-to-r from-orange-500 to-red-800 rounded-md py-3 px-4">Start for free</a>
        <a className="py-3 px-4 border rounded-md">Documentation</a>
      </div>
      <div className="flex flex-wrap lg:gap-[2%] gap-2">
        <video className="border border-orange-700 rounded-lg shadow-orange-400 lg:w-[49%]" autoPlay loop muted>
          <source src={video1} type="video/mp4" />
        </video>
        <video className="border border-orange-700 rounded-lg lg:w-[49%]" autoPlay loop muted>
          <source src={video2} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

export default HeroSection;
