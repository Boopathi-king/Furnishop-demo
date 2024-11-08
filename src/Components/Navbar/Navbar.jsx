import React, { useState } from 'react'
import './Navbar.css'

const Navbar = () => {
    const [isMobile, setIsMobile] = useState(false);

    const toggleMenu = () => {
        setIsMobile(!isMobile);
    }
  return (
<div className='bg-img'>
    <nav className='navbar'>
        <p className='logo'>Furnishop</p>
        <div className={`desktopmenu ${isMobile ? 'active' : ''}`}>
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Features</a>
            <a href="#">Contact</a>
        </div>
        <div className='hamburger' onClick={toggleMenu}>
          <div className={`line ${isMobile ? 'active' : ''}`}></div>
          <div className={`line ${isMobile ? 'active' : ''}`}></div>
          <div className={`line ${isMobile ? 'active' : ''}`}></div>
        </div>
    </nav>
    <div>
        <h2 className='heading'>
            Creative Home Simpify Your <br/>
            Furniture
        </h2>
        <p className='heading-content'>
            Do i have consent to record this meeting gain location, root-and- <br />
            branch,review, nor game plan who's the goto
        </p>
        <button className='shopnow-btn'>Shop Now</button>
    </div>
</div>
  )
}

export default Navbar