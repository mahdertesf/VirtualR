import React from "react";
import { features } from "../constants";

function Feature() {
  return (
    <section className="mt-20 min-h-[800px]">
      <div className="text-center">
        <span className="bg-neutral-900 text-orange-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
          feature
        </span>
        <h2 className="text-center text-3xl sm:text-5xl lg:text-5xl  mt-10 lg:mt-20 tracking-wide">
          Build{" "}
          <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
            Your Code
          </span>{" "}
          Easily
        </h2>
      </div>
      <div className="flex flex-wrap  mt-10 lg:mt-20 mx-4">
        {features.map((feature) => {
          return (
            <div key={feature.text} className="w-full md:w-1/2 lg:w-1/3 pl-6 mb-12">
              <div className="flex  items-center gap-4 mb-4">
                <div className="text-orange-600">{feature.icon}</div>
                <h3>{feature.text}</h3>
              </div>
              <p className="text-neutral-500 ml-6">{feature.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Feature;
