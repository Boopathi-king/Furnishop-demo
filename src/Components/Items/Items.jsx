import React from 'react';
import './Items.css';
import Bed from './../../assets/bed.png';
import Sofa from './../../assets/chair.png';
import CupBoard from './../../assets/cupboard.png';
import Lightning from './../../assets/lighting.png';


const Items = () => {
  return (
    <div className='items'>
        <div className='item'>
            <img src={Sofa} alt="Sofa image" /> <div className='text'>Sofa</div>
        </div>
        <div className='item'><img src={Bed} alt="Bed image" /><div className='text'>Bed</div></div>
        <div className='item'><img src={CupBoard} alt="Cupboard image" /><div className='text'>Cupboard</div></div>
        <div className='item'><img src={Lightning} alt="Lightning Image" /><div className='text'>Lighting</div></div>
        
    </div>
  )
}

export default Items