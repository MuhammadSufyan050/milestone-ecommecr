import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="flex flex-col md:flex-row gap-8 p-6 md:p-16 bg-gray-100 min-h-screen">
      {/* Left Section */}
      <div className="flex flex-col gap-6 bg-white p-6 rounded-md shadow-md w-full md:w-1/3">
        <div className="flex items-center gap-4">
          <FaPhoneAlt className="text-red-500 text-2xl" />
          <div>
            <h3 className="text-lg font-semibold">Call To Us</h3>
            <p className="text-gray-500 text-sm">
              We are available 24/7, 7 days a week.
            </p>
            <p className="text-gray-700 font-semibold mt-2">+92 555777666</p>
          </div>
        </div>
        <div className="border-t border-gray-300"></div>
        <div className="flex items-center gap-4">
          <FaEnvelope className="text-red-500 text-2xl" />
          <div>
            <h3 className="text-lg font-semibold">Write To Us</h3>
            <p className="text-gray-500 text-sm">
              Fill out our form and we will contact you within 24 hours.
            </p>
            <p className="text-gray-700 mt-2">
              Emails: <span className="font-semibold">customer@exclusive.com</span>
            </p>
            <p className="text-gray-700">
              Emails: <span className="font-semibold">support@exclusive.com</span>
            </p>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex flex-col bg-white p-6 rounded-md shadow-md w-full md:w-2/3">
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            placeholder="Your Name *"
            className="border border-gray-300 rounded-md p-2 w-full"
          />
          <input
            type="email"
            placeholder="Your Email *"
            className="border border-gray-300 rounded-md p-2 w-full"
          />
          <input
            type="tel"
            placeholder="Your Phone *"
            className="border border-gray-300 rounded-md p-2 w-full"
          />
        </div>
        <textarea
          placeholder="Your Message"
          className="border border-gray-300 rounded-md p-2 w-full mt-4 h-32 resize-none"
        ></textarea>
        <button className="bg-black text-white font-semibold py-2 px-6 rounded-md mt-4 self-start hover:bg-orange-600 duration-500">
          Send Message
        </button>
      </div>
    </div>
  );
}
