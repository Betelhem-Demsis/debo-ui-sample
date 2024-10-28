import React from 'react'
import Services from '@/sections/Services';
import Pricing from '@/sections/Pricing';
import "@/css/servicepg.css";

function Service() {
  return (
    <>
    <div className="header_top">
        <h1>Our Service</h1>
      </div>
     
     <div className="servicepg">
      <Services/>
     </div>

     <div className="Pricingpg">
     <Pricing/>
     </div>

      </>
  )
}

export default Service
