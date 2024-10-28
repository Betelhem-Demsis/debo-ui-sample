import React from 'react'
import { pricingData } from "@/constants/pricingdata";
import "@/css/pricing.css";

function Pricing() {
  return (
    <>
      <div className="pricing-header">
        <h1 className="poppins-bold">Pricings</h1>
        <p className="text-center">
        How we work with you,Here  latest  services we offers. Contact us<br/> by choosing your preferred service.
        </p>
      </div>
     {/* pricings */}
     <div className="pricing-boxes grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
  {pricingData.map((box, index) => (
    <div
      key={index}
      className="pricing-box bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden hover:scale-105 transform transition-all duration-300"
    >
      <div className="pricing-box-content p-6 text-center">
        <h3 className="pricing-title text-2xl font-semibold mb-2">
          {box.title}
        </h3>
        <p className="pricing-purpose mb-4">{box.purpose}</p>
        <h2 className="pricing-price text-4xl font-bold mb-2">
          {box.price}
        </h2>
        <h4 className="pricing-time mb-4">{box.time}</h4>
        <p className="pricing-description mb-6">{box.description}</p>
        <button className="pricing-button mt-4">
          Choose Plan
        </button>
      </div>
    </div>
  ))}
</div>

    </>
  )
}

export default Pricing
