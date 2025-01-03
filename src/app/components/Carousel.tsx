import Image from "next/image";
import React from "react";

const Carousel = () => {
  return (
    <div className="mb-16 mt-16 px-4 md:px-8 lg:px-16">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="scroll-m-20 text-xl font-extrabold tracking-tight text-gray-900 lg:text-3xl">
          Our Categories
        </h1>
        <div className="flex mt-2 justify-center">
        
        </div>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {/* Category 1 */}
       
          <div className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <Image
              src="/images/caro-1.png"
              alt="T-Shirts"
              width={500}
              height={500}
              className="object-cover w-full h-[250px] md:h-[300px] lg:h-[350px] duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-x-0 bottom-0 bg-black/70 py-3 text-center text-white opacity-0 group-hover:opacity-100 duration-300">
              <h1 className="uppercase text-lg lg:text-xl font-bold">T-Shirts</h1>
            </div>
          </div>
      

        {/* Category 2 */}
        
          <div className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <Image
              src="/images/caro-2.png"
              alt="Bags"
              width={500}
              height={500}
              className="object-cover w-full h-[250px] md:h-[300px] lg:h-[350px] duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-x-0 bottom-0 bg-black/70 py-3 text-center text-white opacity-0 group-hover:opacity-100 duration-300">
              <h1 className="uppercase text-lg lg:text-xl font-bold">Bags</h1>
            </div>
          </div>
   
        {/* Category 3 */}
      
          <div className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <Image
              src="/images/caro-3.jpg"
              alt="Accessories"
              width={500}
              height={500}
              className="object-cover w-full h-[250px] md:h-[300px] lg:h-[350px] duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-x-0 bottom-0 bg-black/70 py-3 text-center text-white opacity-0 group-hover:opacity-100 duration-300">
              <h1 className="uppercase text-lg lg:text-xl font-bold">Accessories</h1>
            </div>
          </div>
       
      </div>
    </div>
  );
};

export default Carousel;
