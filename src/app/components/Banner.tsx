import Link from "next/link";

const Banner = () => {
  return (
    <div
      className="relative min-h-screen  h-auto flex items-center justify-center bg-cover bg-center bg-fixed"
      style={{ backgroundImage: 'url(/images/banner.jpg)' }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative text-center text-white z-10 px-4">
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold mb-6">
          Welcome to Our <span className="text-yellow-400">E-Commerce Store</span>
        </h1>
        <p className="text-base sm:text-lg lg:text-xl mb-8 leading-relaxed">
          Discover the best products at unbeatable prices.
          <br />
          Shop the latest trends and styles.
          <br />
          Experience fast and secure shipping.
        </p>
        <Link href="/product">
          <button className="bg-yellow-400 text-white text-lg sm:text-xl px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-yellow-600 transition-transform transform hover:scale-105">
            Shop Now
          </button>
        </Link>
      </div>

      
    </div>
  );
};

export default Banner;
