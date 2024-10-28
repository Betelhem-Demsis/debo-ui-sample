"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/sections/Hero";
import Info from "@/sections/Info";
import Services from "@/sections/Services";
import Partners from "@/sections/Partners";
import Achievement from "@/sections/Achievement";
import Testimony from "@/sections/Testimony";
import Blog from "@/sections/Blog";
import Pricing from "@/sections/Pricing";

const currentPath = "/";
export default function Home() {
  return (
    <div>
      <Navbar currentPath={currentPath} />
      <Hero />
      <Info />
      <Services />
      <Achievement />
      <Partners />
      <Testimony />
      <Blog />
      <Pricing />
      <Footer />
    </div>
  );
}
