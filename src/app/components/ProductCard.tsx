import React from 'react';
import Image from 'next/image'; 
import  Product  from '@/pages/type';

interface ProductCardProps extends Product {
  onAddToCart: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  price,
  image,
  onAddToCart,
}) => {
  return (
    <div className="w-full max-w-sm sm:max-w-xs md:max-w-md mx-auto shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl z-10 relative">
      {/* Image Section */}
      <div className="h-60 sm:h-64 md:h-72 w-full overflow-hidden rounded-t-xl">
        <Image
          src={image}
          alt={name}
          width={310}
          height={320}
          className="w-full h-full rounded-t-xl object-cover"
        />
      </div>

      {/* Product Details */}
      <div className="px-4 py-3">
        <h3 className="text-base sm:text-lg md:text-xl font-bold text-black truncate block capitalize mb-2">
          {name}
        </h3>
        <p className="text-sm sm:text-md md:text-lg font-semibold text-black my-3 cursor-auto">
          ${price}
        </p>

        <button
          onClick={() => onAddToCart({ id, name, price, image })}
          className="bg-black text-white w-full px-4 py-2 rounded-lg text-sm sm:text-md md:text-lg shadow-md hover:bg-orange-500 transition duration-300 ease-in-out"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
