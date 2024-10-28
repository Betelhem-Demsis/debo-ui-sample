import React from "react";
import Info from "@/sections/Info";
import Achievement from "@/sections/Achievement";
import "@/css/aboutpg.css";
import LayoutGridDemo from "@/components/LayoutGrid";
import {
  FaTwitter,
  FaFacebook,
  FaLinkedin,
  FaTelegram,
} from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { teamData } from "@/constants/teamdata";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

function About() {
  return (
    <>
      <div className="header_top">
        <h1>About Us</h1>
      </div>
      <div className="mb-32">
        <Info />
      </div>

      {/* founders */}
      <div className="founder-section">
        <h1 className="poppins-bold text-center">Meet our Founders</h1>
        <div className="boxes">
          <div className="box">
            {/* founder 1 */}
            <img src="/boaz.png" alt="boaz" />
            <div className="">
              <h2>Boaz Birhanu</h2>
              <h3 className="text-center text-lg font-bold pb-2 text-cyan-600">
                Co-founder
              </h3>
              <p>
                BSc in Electrical and Computer Engineering and MSc in Computer
                Engineering
              </p>
              <ul className="footer-icons flex space-x-10 pt-8 pl-16">
                <li className="rounded-full">
                  <FaFacebook className="text-gray-600  h-8 w-8 hover:text-blue-500 cursor-pointer transition-colors duration-300" />
                </li>
                <li className="rounded-full ">
                  <FaTwitter className="text-gray-600  h-8 w-8  hover:text-blue-500  cursor-pointer transition-colors duration-300" />
                </li>
                <li className="rounded-full">
                  <FaLinkedin className="text-gray-600 h-8 w-8  hover:text-blue-500  cursor-pointer transition-colors duration-300" />
                </li>
                <li className="rounded-full">
                  <FaTelegram className="text-gray-600  h-8 w-8  hover:text-blue-500  cursor-pointer transition-colors duration-300" />
                </li>
              </ul>
            </div>
          </div>
          {/* founder 2 */}

          <div className="box">
            <img src="/jeremiah.jpg" alt="boaz" />
            <div className="">
              <h2>Boaz Birhanu</h2>
              <h3 className="text-center text-lg font-bold pb-2 text-cyan-600">
                Co-founder
              </h3>
              <p>
                BSc in Electrical and Computer Engineering and MSc in Computer
                Engineering
              </p>
              <ul className="footer-icons flex space-x-10 pt-8 pl-16">
                <li className="rounded-full">
                  <FaFacebook className="text-gray-600  h-8 w-8 hover:text-blue-500 cursor-pointer transition-colors duration-300" />
                </li>
                <li className="rounded-full ">
                  <FaTwitter className="text-gray-600  h-8 w-8  hover:text-blue-500  cursor-pointer transition-colors duration-300" />
                </li>
                <li className="rounded-full">
                  <FaLinkedin className="text-gray-600 h-8 w-8  hover:text-blue-500  cursor-pointer transition-colors duration-300" />
                </li>
                <li className="rounded-full">
                  <FaTelegram className="text-gray-600  h-8 w-8  hover:text-blue-500  cursor-pointer transition-colors duration-300" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* achievement */}
      <div className="achieve-section">
        <Achievement />
      </div>

      {/* team */}
      <div className="team-section">
        <div className="team-title">
  <h1 className="poppins-bold text-center">Our Team</h1>
  <h3 className="text-center text-xl text-gray-500">Meet our Team</h3>
  </div>
 <div className="team-swiper">
  <Swiper slidesPerView={1}
          spaceBetween={10}
          autoplay={{
            delay: 3000, 
            disableOnInteraction: false,
          }}
         
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          modules={[Autoplay]}>
      {teamData.map((data, index) => (
        <SwiperSlide>
          <div className="grid text-center">
            <img
              src={data.img}
              alt="team"
              className="teamimg"
            />
            <div className="concept">
            <h3 className="font-bold text-2xl text-cyan-200 mt-4">
              {data.name}
            </h3>
            <p className="text-gray-400  text-center">{data.position}</p>
            <ul className="footer-icons flex justify-center space-x-6 pt-4">
              <li className="rounded-full">
                <FaFacebook className="text-gray-600 h-8 w-8 hover:text-blue-500 cursor-pointer transition-colors duration-300" />
              </li>
              <li className="rounded-full">
                <FaTwitter className="text-gray-600 h-8 w-8 hover:text-blue-500 cursor-pointer transition-colors duration-300" />
              </li>
              <li className="rounded-full">
                <FaLinkedin className="text-gray-600 h-8 w-8 hover:text-blue-500 cursor-pointer transition-colors duration-300" />
              </li>
              <li className="rounded-full">
                <FaTelegram className="text-gray-600 h-8 w-8 hover:text-blue-500 cursor-pointer transition-colors duration-300" />
              </li>
            </ul>
            </div>
        </div>
        </SwiperSlide>
      ))}
   </Swiper>
   </div>
   </div>

   {/* Gallery */}

     <div className="gallery">
      <h1 className="text-center poppins-bold">Gallery</h1>
        
       <LayoutGridDemo/>

     </div>



    </>
  );
}

export default About;
