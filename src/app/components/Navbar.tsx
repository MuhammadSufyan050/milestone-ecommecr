"use client";
import Link from "next/link";
export default function Navbar() {
  return (
    <header className="text-slate-400 body-font">
      <div className="container mx-auto flex flex-wrap p-2 flex-col  md:flex-row items-center">
        <div className="flex text-black">
          <h1 className="text-3xl font-bold ">E-COMMERCE </h1>
        </div>
        <nav className="md:ml-auto flex items-center flex-wrap justify-center text-black font-semibold text-xl">
          <Link
            href="/"
            className="mr-5 hover:text-orange-600 transition-colors duration-300 transform hover:scale-105"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="mr-5 hover:text-orange-600 transition-colors duration-300 transform hover:scale-105"
          >
            About
          </Link>
          <Link
            href="/product"
            className="mr-5 hover:text-orange-600 transition-colors duration-300 transform hover:scale-105"
          >
            Product
          </Link>
          <Link
            href="/contact"
            className="mr-5 hover:text-orange-600 transition-colors duration-300 transform hover:scale-105"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
