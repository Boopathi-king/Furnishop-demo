import React from 'react'
import SofaImg from './../../assets/features-1.png';
import './Content1.css';

const Content1 = () => {
  return (
    <div className='container-1'>
        <div className='img'>
            <img src={SofaImg} alt="" />
        </div>
        <div className='content-1'>
            <h2>We Create Your Home <br /> More Aesteic </h2>
            <p>Furniture power is a Software as services for multipurpose <br />busniess management system.</p>
        </div>
    </div>
  )
}

export default Content1