import React from 'react';
import "@/css/achieve.css";

function Achievement() {
  return (
    <div className="achievement-container">
      <div className="achievement-header">
        <h1 className='poppins-bold'>Achievements</h1>
        <p className='text-center'>
          Our achievements are the best moments in our company. <br/>Each of our achievements has signified that we have accomplished something.
        </p>
      </div>
      <div className="achievement-boxes">
        <div className="achievement-box">
          <h1>14+</h1>
          <p>Awards</p>
        </div>
        <div className="achievement-box">
          <h1>69+</h1>
          <p>Happy Clients</p>
        </div>
        <div className="achievement-box">
          <h1>12+</h1>
          <p>Projects</p>
        </div>
      </div>
    </div>
  );
}


export default Achievement;