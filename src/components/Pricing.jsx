import React from "react";
import { pricingOptions } from "../constants";
import { FaRegCheckCircle } from "react-icons/fa";

function Pricing() {
  return (
    <div className="flex flex-col mt-20 ">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide mb-10">
        Pricing
      </h1>
      <div className="flex flex-wrap mx-3  justify-center ">
        {pricingOptions.map((option) => {
          return (
            <div
              key={option.title}
              className="flex flex-col border 
                    border-neutral-500 rounded-md w-full lg:w-[30%] md:w-[40%] m-2 p-10"
            >
              <h2 className="text-4xl mb-8">
                {option.title}
                {option.title === "Pro" && <span className="bg-gradient-to-r
                 from-orange-500 to-red-400 text-transparent bg-clip-text text-xl"> (Most Popular)</span>}
                </h2>
              <h2 className="text-2xl">
                {option.price}
                <span className="text-sm text-neutral-500">/Month</span> 
              </h2>
             <ul className="">
                {option.features.map((feature)=>{
                    return(
                        <li key={feature} className="flex mt-8 items-center gap-2 " >
                             <FaRegCheckCircle className="text-green-400"/>
                             <span>{feature}</span></li>
                    )
                })}
             </ul>
             <a href="#" className="text-center w-full h-12 
             p-2 rounded-lg transition duration-200 mt-20 tracking-tight text-xl hover:bg-orange-900 border border-orange-900">Subscribe</a>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Pricing;
