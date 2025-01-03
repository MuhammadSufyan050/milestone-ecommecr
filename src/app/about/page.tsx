// export default function About() {
//   return (
//     <div className="flex flex-col-reverse lg:flex-row items-cente p-6 md:p-12 lg:gap-12 min-h-screen">
//       {/* Text Section */}
//       <div className="lg:w-1/2">
//         <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center lg:text-left">
//           Our Story
//         </h1>
//         <p className="text-gray-700 text-justify mb-6 leading-relaxed">
//           Welcome to E-Commerce Store, your trusted online shopping destination.
//           Established in 2024, our mission is to provide high-quality products
//           with exceptional customer service. With over a year of experience in
//           the e-commerce industry, weve built a platform that combines
//           convenience, reliability, and affordability. From the latest trends to
//           everyday essentials, we offer a wide range of products designed to
//           meet your needs and exceed your expectations. Our commitment is to
//           create a seamless shopping experience for our customers. We value your
//           trust and strive to ensure that every purchase with us is safe,
//           secure, and satisfying.
//         </p>
//         <p className="text-gray-700 leading-relaxed  text-justify">
//           Thank you for choosing E-Commerce Store. Were here to make your
//           shopping journey simple, enjoyable, and memorable!
//         </p>
//       </div>

//       {/* Image Section */}
//       <div className="lg:w-1/2 lg:h-1/2 flex justify-center lg:justify-end">
//         <img
//           src="/images/about.jpg"
//           alt="A snapshot showcasing our e-commerce journey"
//           className="rounded-lg shadow-lg relative top-9 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
//         />
//       </div>
//     </div>
//   );
// }
 

// export default function About() {
//   return (
//     <div className="flex flex-col-reverse lg:flex-row items-center p-6 md:p-12 lg:gap-12 min-h-screen max-w-7xl mx-auto">
//       {/* Text Section */}
//       <div className="lg:w-1/2">
//         <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center lg:text-left">
//           Our Story
//         </h1>
//         <p className="text-gray-700 mb-6 leading-relaxed text-justify">
//           Welcome to E-Commerce Store, your trusted online shopping destination.
//           Established in 2024, our mission is to provide high-quality products
//           with exceptional customer service. With over a year of experience in
//           the e-commerce industry, we’ve built a platform that combines
//           convenience, reliability, and affordability. From the latest trends to
//           everyday essentials, we offer a wide range of products designed to
//           meet your needs and exceed your expectations. Our commitment is to
//           create a seamless shopping experience for our customers. We value your
//           trust and strive to ensure that every purchase with us is safe,
//           secure, and satisfying.
//         </p>
//         <p className="text-gray-700 leading-relaxed text-justify">
//           Thank you for choosing E-Commerce Store. We’re here to make your
//           shopping journey simple, enjoyable, and memorable!
//         </p>
//       </div>

//       {/* Image Section */}
//       <div className="lg:w-1/2 flex justify-center lg:justify-end">
//         <img
//           src="/images/about.jpg"
//           alt="A snapshot showcasing our e-commerce journey"
//           className="rounded-lg shadow-lg w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xl object-cover"
//         />
//       </div>
//     </div>
//   );
// }


import Image from 'next/image';

export default function About() {
  return (
    <div className="flex flex-col-reverse lg:flex-row items-center p-6 md:p-12 lg:gap-12 min-h-screen max-w-7xl mx-auto">
      {/* Text Section */}
      <div className="lg:w-1/2">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center lg:text-left">
          Our Story
        </h1>
        <p className="text-gray-700 mb-6 leading-relaxed text-justify">
          Welcome to E-Commerce Store, your trusted online shopping destination.
          Established in 2024, our mission is to provide high-quality products
          with exceptional customer service. With over a year of experience in
          the e-commerce industry, we are built a platform that combines
          convenience, reliability, and affordability. From the latest trends to
          everyday essentials, we offer a wide range of products designed to
          meet your needs and exceed your expectations. Our commitment is to
          create a seamless shopping experience for our customers. We value your
          trust and strive to ensure that every purchase with us is safe,
          secure, and satisfying.
        </p>
        <p className="text-gray-700 leading-relaxed text-justify">
          Thank you for choosing E-Commerce Store. We are here to make your
          shopping journey simple, enjoyable, and memorable!
        </p>
      </div>

      {/* Image Section */}
      <div className="lg:w-1/2 flex justify-center lg:justify-end">
        <Image
          src="/images/about.jpg"
          alt="A snapshot showcasing our e-commerce journey"
          className="rounded-lg shadow-lg object-cover"
          width={800} // Adjust the width according to your layout
          height={600} // Adjust the height according to your layout
        />
      </div>
    </div>
  );
}
