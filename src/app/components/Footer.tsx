import { FaFacebook, FaInstagram, FaPinterest } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-8 text-gray-700">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
      
        <div>
          <h2 className="text-xl font-bold">E-COMMERCE</h2>
          <p className="mt-4 text-sm">
            We have clothes that suit your style and which your proud to wear.
            From women to men.
          </p>
          <div className="flex mt-4 space-x-3">
            <a href="#" className="text-gray-700 hover:text-black">
              <FaFacebook size={24} />
            </a>
            <a href="#" className="text-gray-700 hover:text-black">
              <FaInstagram size={24} />
            </a>
            <a href="#" className="text-gray-700 hover:text-black">
              <FaPinterest size={24} />
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-semibold">COMPANY</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="#" className="hover:underline">About</a></li>
            <li><a href="#" className="hover:underline">Features</a></li>
            <li><a href="#" className="hover:underline">Works</a></li>
            <li><a href="#" className="hover:underline">Career</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold">HELP</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Customer Support</a></li>
            <li><a href="#" className="hover:underline">Delivery Details</a></li>
            <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold">FAQ</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Account</a></li>
            <li><a href="#" className="hover:underline">Manage Deliveries</a></li>
            <li><a href="#" className="hover:underline">Orders</a></li>
            <li><a href="#" className="hover:underline">Payments</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold">CONTACT US</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>Email: support@ecommerce.com</li>
            <li>Phone: +1 234 567 890</li>
            <li>Address: ABC, KARACHI.</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
