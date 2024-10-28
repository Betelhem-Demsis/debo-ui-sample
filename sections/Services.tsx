"use client";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import "@/css/Service.css";
import React, { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import {  fadeInUpVariant } from "../utils/motion";

import { words, boxData } from "@/constants/servicedata";
function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  return (
    <div ref={ref}>
      <motion.div
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        variants={fadeInUpVariant}
        className="grid flex-row spacce-y-5 items-center justify-center service"
      >
        <h1 className="poppins-bold">Our Services</h1>
        <div className="text-center mx-20">
          <TypewriterEffectSmooth words={words} className="type-writer poppins-light" />
        </div>
      </motion.div>

      {/* service box */}
      <motion.div
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        variants={fadeInUpVariant}
        className="boxes"
      >
        {boxData.map((box, index) => (
          <div key={index} className="box border">
            <img src={box.img} alt={box.title} />
            <div className="box-content">
              <h2 className="dark:text-white text-xl text-black mt-4 font-bold">
                {box.title}
              </h2>
              <p className="">{box.description}</p>
              <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors">
                Get it Now
              </button>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
export default Services;
