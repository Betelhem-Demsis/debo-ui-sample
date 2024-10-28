"use client"
"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "@/css/hero.css"
import { Autoplay, Pagination } from "swiper/modules";
import { textVariant } from "@/utils/motion";
import { motion} from 'framer-motion';
import Link from "next/link";
export default function Hero() {
  const swiperRef = useRef(null);

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000, 
          disableOnInteraction: false,
        }}
        pagination={false}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="/homepic.jpg" alt="Girl" />
          <div className="content">
          <motion.h3
          initial="hidden"
          animate="show"
          variants={textVariant(0.5)}
        > <b>In Pursuit of Service</b></motion.h3>
         <motion.h2
          initial="hidden"
          animate="show"
          variants={textVariant(0.3)}
        > Debo Engineering</motion.h2>
           <motion.p
          initial="hidden"
          animate="show"
          variants={textVariant(0.5)}
        > Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, sunt.  Lorem ipsum dolor sit amet <br/>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, ipsum?</motion.p>
          <Link href="/service">
          <motion.button
          animate="show"
          initial="hidden"
          variants={textVariant(0.8)}
        > Get Started</motion.button> </Link>      
            </div>
        </SwiperSlide>  
        <SwiperSlide>
          <img src="/people.jpg" alt="Girl" />
          <div className="content">
          <motion.h3
          initial="hidden"
          animate="show"
          variants={textVariant(0.5)}
        > <b>In Pursuit of Service</b></motion.h3>
         <motion.h2
          initial="hidden"
          animate="show"
          variants={textVariant(0.3)}
        > Debo Engineering</motion.h2>
           <motion.p
          initial="hidden"
          animate="show"
          variants={textVariant(0.5)}
        > Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, sunt.  Lorem ipsum dolor sit amet <br/>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, ipsum?</motion.p>
          <Link href="/service">
          <motion.button
          animate="show"
          initial="hidden"
          variants={textVariant(0.8)}
        > Get Started</motion.button> </Link>      
            </div>
        </SwiperSlide>   
      </Swiper>
    </>
  );
}
