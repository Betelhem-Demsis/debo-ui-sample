import React from "react";
import { FaTwitter, FaFacebook, FaInstagram, FaYoutube,FaLinkedin,FaTelegram } from "react-icons/fa";
import Link from "next/link";
import '@/css/footer.css'

function Footer() {
  return (
    <div className="footer">
      <div className="lg:flex sm:grid justify-between pt-20 px-20">
        <img
          src="/debologo.png"
          className="h-28"
          alt="Osafi Fitness Logo"
        />
        <ul className="footer-icons flex space-x-10 pt-8">
          <li className="rounded-full">
            <FaFacebook className="text-white h-8 w-8 hover:text-blue-500 cursor-pointer transition-colors duration-300" />
          </li>
          <li className="rounded-full ">
            <FaTwitter className="text-white h-8 w-8  hover:text-blue-500  cursor-pointer transition-colors duration-300" />
          </li>
          <li className="rounded-full ">
            <FaInstagram className="text-white h-8 w-8  hover:text-blue-500  cursor-pointer transition-colors duration-300" />
          </li>
          <li className="rounded-full">
            <FaYoutube className="text-white h-8 w-8  hover:text-blue-500  cursor-pointer transition-colors duration-300" />
          </li>
          <li className="rounded-full">
            <FaLinkedin className="text-white h-8 w-8  hover:text-blue-500  cursor-pointer transition-colors duration-300" />
          </li>
          <li className="rounded-full">
            <FaTelegram className="text-white h-8 w-8  hover:text-blue-500  cursor-pointer transition-colors duration-300" />
          </li>
        </ul>
      </div>
      <div className="h-1 bg-slate-500 mx-20 mt-5"></div>
      <div className="lg:flex sm:grid space-x-80 text-white">
    <div className="px-10 py-10 ml-20 rounded-lg shadow-lg">
    <h3 className="text-cyan-400 text-lg font-semibold py-2">
      SUBSCRIBE TO OUR NEWSLETTER
    </h3>
    <p className="text-cyan-200 leading-relaxed">
      Get all the latest content delivered to your email a few times a month.
      <br />
      Updates and news about all categories will be sent to you.
    </p>
    <label className="flex mt-4 space-x-2">
      <input
        className="input bg-gray-700 text-white px-4 py-2 rounded-l-lg focus:outline-none w-full"
        type="email"
        placeholder="Enter your email"
      />
      <button className="btn bg-cyan-800 hover:bg-cyan-600  text-white px-6 py-2 rounded">
        Subscribe
      </button>
    </label>
    <p className="mt-10 text-cyan-200">
      <span className="text-lg text-cyan-300">Office Address -  </span>
       Aba-estifanos Building, 505<br/> <span className="pl-32 ">Jimma, Ethiopia</span>
    </p>
  </div>

  <div className="text-cyan-50 py-16 px-28 lg:ml-64 rounded-lg shadow-lg">
    <h3 className="text-cyan-400 text-lg font-semibold mb-4">Contact Info</h3>
    <h3 className="font-semibold text-cyan-300">CEO Contact</h3>
    <p className="text-cyan-200">Phone: +251949540860</p>
    <p className="text-cyan-200">Email: jarmdebo@gmail.com</p>

    <h3 className="font-semibold text-cyan-300 mt-6">CTO Contact</h3>
    <p className="text-cyan-200">Phone: +251911086178</p>
    <p className="text-cyan-200">Email: boazict@gmail.com</p>
  </div>
</div>


      <div className="footer-bottom grid  justify-center lg:pt-16 pb-5">
        <p className="text-white pt-10">
          © {new Date().getFullYear()} DEBO ENGINEERING CORPORATE
        </p>
      </div>
    </div>
  );
}

export default Footer;
