import React from 'react';
import FeaturesImg from './../../assets/features.png';
import './Features.css';

const Features = () => {
  return (
    <div className='features-container'>
        <div className='feature-content'>
            <h2>The Best Furniture <br /> Manufacturer Of Your Choice</h2>
            <p>Furnitre power is a software as services for multiperpose <br /> business management system, expecially for them who are <br /> running two or more business exploree the future Furnitre <br /> power is a software as services.</p>
        </div>
        <div className='feature-img'>
            <img src={FeaturesImg} alt="Features image" />
        </div>
    </div>
  )
}

export default Features