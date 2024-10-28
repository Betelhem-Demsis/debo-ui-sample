"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { testimonyData } from "@/constants/testimonydata";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FaQuoteRight } from "react-icons/fa";

import "@/css/testimony.css";

import { Pagination, Navigation } from "swiper/modules";

function Testimony() {
  return (
    <>
      <div className="Testimony-title">
        <h1 className="font-bold text-center mb-4">WHAT OUR CLIENTS SAY</h1>
      </div>
      <div className="testimony">
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          pagination={{ clickable: true }}
          navigation={true}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 60,
            },
          }}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {testimonyData.map((data, index) => (
            <SwiperSlide key={index}>
              <div className="grid content-testimony">
                <FaQuoteRight className="quote" />
                <h3 className="font-bold text-2xl text-yellow-200">{data.name}</h3>
                <h4 className=" text-slate-400">{data.title}</h4>
                <p>{data.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
export default Testimony;
