"use client";
import React from "react";
import { LayoutGrid } from "@/components/ui/layout-grid";

function LayoutGridDemo() {
  return (
    <div className="h-screen py-20 w-full">
      <LayoutGrid cards={cards} />
    </div>
  );
}

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">debo engineering</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonTwo />,
    thumbnail: "/homepic.jpg",
    className: "col-span-1", // Added className
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    thumbnail: "/gallery1.jpg",
    className: "col-span-1", // Added className
  },
  {
    id: 3,
    content: <SkeletonTwo />,
    thumbnail: "/gallery2.jpg",
    className: "col-span-1", // Added className
  },
  {
    id: 4,
    content: <SkeletonTwo />,
    thumbnail: "/gallery4.jpg",
    className: "col-span-1", // Added className
  },
  {
    id: 5,
    content: <SkeletonTwo />,
    thumbnail: "/gallery3.png",
    className: "col-span-1", // Added className
  },
  {
    id: 6,
    content: <SkeletonTwo />,
    thumbnail: "gallery6.jpg",
    className: "col-span-1", // Added className
  },
];

export default LayoutGridDemo;
