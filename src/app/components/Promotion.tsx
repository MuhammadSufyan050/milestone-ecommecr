import React from "react";

const Promotion = () => {
  return (
    <div className="mb-20 mt-20 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-10">
        <h1 className="scroll-m-20 text-xl font-extrabold tracking-tight text-myBlackHead lg:text-3xl">
          Our Promotions
        </h1>
        <div className="flex mt-2 justify-center">
        </div>
      </div>
      {/* Promotion Starts here */}
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
        {/* First Promotion */}
        <div className="relative flex items-center justify-center rounded-xl bg-cover bg-center min-h-[18rem] sm:min-h-[22rem] lg:min-h-[25rem] promo-1">
          <div className="absolute inset-0 bg-black bg-opacity-60 rounded-xl"></div>
          <div className="relative z-10 text-center text-white px-4">
            <h1 className="text-3xl font-bold uppercase tracking-tight sm:text-4xl">
              Get upto <span className="text-orange-400">60%</span> off
            </h1>
            <p className="mt-2 text-base font-medium tracking-tight sm:text-lg">
              Flash Sale, get upto 60% off on the season Variant.
            </p>
          </div>
        </div>
        {/* Second Promotion */}
        <div className="relative flex items-center justify-center rounded-xl bg-cover bg-center min-h-[18rem] sm:min-h-[22rem] lg:min-h-[25rem] promo-2">
          <div className="absolute inset-0 bg-black bg-opacity-60 rounded-xl"></div>
          <div className="relative  text-center text-white px-4">
            <h1 className="text-3xl font-bold uppercase tracking-tight sm:text-4xl">
              Get upto <span className="text-orange-500">30%</span> off
            </h1>
            <p className="mt-2 text-base font-medium tracking-tight sm:text-lg">
              Flash Sale, get upto 30% off on the New Accessories.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promotion;
