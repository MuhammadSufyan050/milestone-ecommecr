// "use client";
// import { useState, useEffect } from "react";
// import ProductCard from "./ProductCard";
// import { Product } from "@/pages/type";

// const BestSelling = (): any => {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [cart, setCart] = useState<Product[]>([]);
//   const [showCart, setShowCart] = useState(false);
//   const [isCheckout, setIsCheckout] = useState(false);

//   useEffect(() => {
//     async function fetchProducts() {
//       const response = await fetch("/api/product");
//       const data = await response.json();
//       setProducts(data);
//     }
//     fetchProducts();

//     const savedCart = localStorage.getItem("cart");
//     if (savedCart) {
//       setCart(JSON.parse(savedCart));
//     }
//   }, []);

//   const addToCart = (product: Product) => {
//     setCart((prevCart) => {
//       const updatedCart = [...prevCart, product];
//       localStorage.setItem("cart", JSON.stringify(updatedCart));
//       return updatedCart;
//     });
//   };

//   const toggleCart = () => {
//     setShowCart((prev) => !prev);
//   };

//   const goToCheckout = () => {
//     setIsCheckout(true);
//   };

//   const clearCart = () => {
//     localStorage.removeItem("cart");
//     setCart([]);
//   };

//   return (
//     <div className="relative min-h-screen py-6 bg-gray-100">
//       <div className="absolute inset-0 bg-cover bg-center opacity-10 animate-background"></div>

//       <div className="relative z-10">
//         <div className="max-w-screen-lg mx-auto text-center mb-8">
//           <h1 className="text-4xl font-bold text-gray-800 mb-4">
//             Our Products
//           </h1>
//           <p className="text-lg text-gray-600">
//             Discover our exclusive collection!
//           </p>
//         </div>

//         {/* Product Grid */}
//         <div className="max-w-screen-lg mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-800">
//           {products.map((product) => (
//             <ProductCard
//               key={product.id}
//               {...product}
//               onAddToCart={addToCart}
//             />
//           ))}
//         </div>

//         {/* Cart Section */}
//         <div className="max-w-screen-lg mx-auto mt-8 px-4">
//           <button
//             onClick={toggleCart}
//             className="w-full sm:w-auto bg-gray-800 text-white py-3 px-6 rounded-lg shadow-md hover:bg-orange-500 transition duration-300 ease-in-out transform"
//           >
//             {showCart ? "Hide Cart" : "View Cart"} ({cart.length} items)
//           </button>

//           {showCart && (
//             <div className="mt-6 bg-white p-6 rounded-lg shadow-lg">
//               <h2 className="text-3xl font-bold mb-4 text-orange-500">
//                 Cart Items
//               </h2>
//               {cart.length > 0 ? (
//                 <div>
//                   <ul>
//                     {cart.map((product, index) => (
//                       <li
//                         key={index}
//                         className="flex items-center justify-between mb-4 border-b pb-2"
//                       >
//                         <img
//                           src={product.image}
//                           alt={product.name}
//                           className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded"
//                         />
//                         <span className="ml-4 text-lg font-medium text-gray-700">
//                           {product.name}
//                         </span>
//                         <span className="text-lg text-orange-500">
//                           ${product.price}
//                         </span>
//                       </li>
//                     ))}
//                   </ul>
//                   <div className="flex justify-between items-center mt-6">
//                     <span className="font-semibold text-xl text-gray-800">
//                       Total: $
//                       {cart.reduce(
//                         (total, product) => total + product.price,
//                         0
//                       )}
//                     </span>
//                     <div className="space-x-4">
//                       <button
//                         onClick={goToCheckout}
//                         className="bg-black py-2 px-6 rounded-lg text-lg text-white shadow-md hover:bg-orange-500 transition duration-300 transform hover:scale-105"
//                       >
//                         Check Out
//                       </button>
//                       <button
//                         onClick={clearCart}
//                         className="bg-red-600 py-2 px-6 rounded-lg text-lg text-white shadow-md hover:bg-red-700 transition duration-300 transform hover:scale-105"
//                       >
//                         Clear
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               ) : (
//                 <p className="text-lg text-red-500">Your Cart is Empty</p>
//               )}
//             </div>
//           )}
//         </div>

//         {/* Checkout Modal */}
//         {isCheckout && (
//           <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
//             <div className="bg-white p-8 rounded-lg shadow-lg w-11/12 sm:w-96">
//               <h2 className="text-3xl font-bold text-blue-600 mb-4">
//                 Checkout
//               </h2>
//               <p className="text-lg text-gray-600">
//                 Please confirm your order.
//               </p>
//               <ul className="mt-4 space-y-2">
//                 {cart.map((product, index) => (
//                   <li
//                     key={index}
//                     className="flex justify-between text-gray-800"
//                   >
//                     <span>{product.name}</span>
//                     <span>${product.price}</span>
//                   </li>
//                 ))}
//               </ul>
//               <div className="flex justify-between mt-6">
//                 <span className="font-semibold text-gray-700">Total:</span>
//                 <span className="font-semibold text-gray-700">
//                   ${cart.reduce((total, product) => total + product.price, 0)}
//                 </span>
//               </div>
//               <div className="mt-6 flex justify-between">
//                 <button
//                   onClick={() => setIsCheckout(false)}
//                   className="bg-gray-500 text-white py-2 px-6 rounded-lg text-lg shadow-md hover:bg-gray-700 transition duration-300"
//                 >
//                   Close
//                 </button>
//                 <button
//                   onClick={() =>
//                     alert(
//                       "Order Confirmed! It will be delivered to your location."
//                     )
//                   }
//                   className="bg-green-600 text-white py-2 px-6 rounded-lg text-lg shadow-md hover:bg-green-700 transition duration-300"
//                 >
//                   Confirm Order
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default BestSelling;



"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import ProductCard from "./ProductCard";
import { Product } from '@/pages/type';


const BestSelling = (): JSX.Element => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<Product[]>([]);
  const [showCart, setShowCart] = useState(false);
  const [isCheckout, setIsCheckout] = useState(false);

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch("/api/product");
      const data: Product[] = await response.json();
      setProducts(data);
    }
    fetchProducts();

    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart, product];
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  const toggleCart = () => setShowCart((prev) => !prev);

  const goToCheckout = () => setIsCheckout(true);

  const clearCart = () => {
    localStorage.removeItem("cart");
    setCart([]);
  };

  return (
    <div className="relative min-h-screen py-6 bg-gray-100">
      <div className="absolute inset-0 bg-cover bg-center opacity-10 animate-background"></div>
      <div className="relative z-10">
        <div className="max-w-screen-lg mx-auto text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Products</h1>
          <p className="text-lg text-gray-600">
            Discover our exclusive collection!
          </p>
        </div>

        <div className="max-w-screen-lg mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-800">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              {...product}
              onAddToCart={addToCart}
            />
          ))}
        </div>

        <div className="max-w-screen-lg mx-auto mt-8 px-4">
          <button
            onClick={toggleCart}
            className="w-full sm:w-auto bg-gray-800 text-white py-3 px-6 rounded-lg shadow-md hover:bg-orange-500 transition duration-300 ease-in-out transform"
          >
            {showCart ? "Hide Cart" : "View Cart"} ({cart.length} items)
          </button>

          {showCart && (
            <div className="mt-6 bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-4xl font-bold mb-4 text-red-500">
                Cart Items
              </h2>
              {cart.length > 0 ? (
                <div>
                  <ul>
                    {cart.map((product, index) => (
                      <li
                        key={index}
                        className="flex items-center justify-between mb-4 border-b pb-2"
                      >
                        <Image
                          src={product.image}
                          alt={product.name}
                          width={80}
                          height={80}
                          className="object-cover rounded"
                        />
                        <span className="ml-4 text-lg font-medium text-gray-700">
                          {product.name}
                        </span>
                        <span className="text-lg text-orange-500">
                          ${product.price}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex justify-between items-center mt-6">
                    <span className="font-semibold text-xl text-gray-800">
                      Total: $
                      {cart.reduce((total, product) => total + product.price, 0)}
                    </span>
                    <div className="space-x-4">
                      <button
                        onClick={goToCheckout}
                        className="bg-black py-2 px-6 rounded-lg text-lg text-white shadow-md hover:bg-orange-500 transition duration-300 transform hover:scale-105"
                      >
                        Check Out
                      </button>
                      <button
                        onClick={clearCart}
                        className="bg-red-600 py-2 px-6 rounded-lg text-lg text-white shadow-md hover:bg-red-700 transition duration-300 transform hover:scale-105"
                      >
                        Clear
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <p className="text-lg text-red-900">Your Cart is Empty</p>
              )}
            </div>
          )}
        </div>

        {isCheckout && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-8 rounded-lg shadow-lg w-11/12 sm:w-96">
              <h2 className="text-3xl font-bold text-red-600 mb-4">
                Checkout
              </h2>
              <p className="text-lg text-gray-600">
                Please confirm your order.
              </p>
              <ul className="mt-4 space-y-2">
                {cart.map((product, index) => (
                  <li
                    key={index}
                    className="flex justify-between text-gray-800"
                  >
                    <span>{product.name}</span>
                    <span>${product.price}</span>
                  </li>
                ))}
              </ul>
              <div className="flex justify-between mt-6">
                <span className="font-semibold text-gray-700">Total:</span>
                <span className="font-semibold text-gray-700">
                  ${cart.reduce((total, product) => total + product.price, 0)}
                </span>
              </div>
              <div className="mt-6 flex justify-between">
                <button
                  onClick={() => setIsCheckout(false)}
                  className="bg-gray-500 text-white py-2 px-6 rounded-lg text-lg shadow-md hover:bg-gray-700 transition duration-300"
                >
                  Close
                </button>
                <button
                  onClick={() =>
                    alert("Order Confirmed! It will be delivered to your location.")
                  }
                  className="bg-black text-white py-2 px-6 rounded-lg text-lg shadow-md hover:bg-orange-500 transition duration-300"
                >
                  Confirm Order
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BestSelling;
