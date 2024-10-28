"use client"; 
import React, { useRef } from "react";
import Link from "next/link";
import "@/css/hero.css";
import { motion, useInView } from 'framer-motion';
import { textVariant, fadeInUpVariant } from '../utils/motion';

function Info() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <div ref={ref} className="about flex flex-col items-center sm:flex-row sm:justify-between">
      <motion.div
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        variants={fadeInUpVariant}
        className="sm:w-1/2 "
      >
        <img src="/photo.jpg" alt="logo" className="about-img  sm:w-auto object-cover" />
      </motion.div>
      
      <div className="middle-text sm:text-left sm:w-1/2 sm:p-8">
        <motion.h1 
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          variants={textVariant(0.1)}
          className="sm:text-3xl about-title poppins-bold"
        >
         About us 
        </motion.h1>
        
        <motion.p
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          variants={textVariant(0.5)}
          className=" sm:text-base"
        >
       Debo Engineering is an integrated engineering discipline organization based on recently emerging technologies such as Artificial Intelligence, Machine Learning (ML), Internet of things (IOT), Image Processing, Big Data analysis, Mobile computing and any field related to engineering. We design, analyze, develop and implement smart business applications, solution for any problems those need Digital solution for agriculture, transportation, health, education, and other sectors.<br/>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut maiores repudiandae expedita, cupiditate veritatis accusantium?
        </motion.p>
        
        <motion.div
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          variants={textVariant(0.9)}
        >
          <Link href="/about">
            <button 
              type="button" 
              className="bg-cyan-700 text-white px-6 py-2  hover:bg-cyan-800 transition-colors duration-300"
            >
              Learn more
            </button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

export default Info;