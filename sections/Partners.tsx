import React, { useEffect } from 'react';
import '@/css/partner.css'; 

const Partners = () => {
  return (
    <div className="partners">
       <h1 className='poppins-bold'>Our Partners</h1>

    <div className="logos">
      <div className="logos-slide">
        <div className='flex'>
       <img src="/voa.png" alt="voa" />
        <img src="/undp-logo.png" alt="undp"/>
        <img src="/mint.png" alt="mint"/>
        <img src="/ju-logo.png" alt="undp" className='h-20'/>
        <img src="/bbc-logo.png" alt="undp"/>
        <img src="/ATI-logo.png" alt="undp"/>
        <img src="/BIC_Ethiopia.png" alt="undp"/>
        </div>
      </div>
      <div className="logos-slide">
        <div className='flex'>
       <img src="/voa.png" alt="voa" />
        <img src="/undp-logo.png" alt="undp"/>
        <img src="/mint.png" alt="mint"/>
        <img src="/ju-logo.png" alt="undp" className="h-20"/>
        <img src="/bbc-logo.png" alt="undp"/>
        <img src="/ATI-logo.png" alt="undp"/>
        <img src="/BIC_Ethiopia.png" alt="undp"/>
        </div>
      </div>
 
    </div>
    </div>
  );
};

export default Partners;
