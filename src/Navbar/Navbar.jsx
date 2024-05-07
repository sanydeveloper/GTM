import React, { useState } from 'react';
import './Navbar.css';
import './Phone.css'; // Include Phone.css for phone-specific styles
import logo1 from './logo1.png';
import logo2 from './logo 2.png';
import logo3 from './logo3.png';
import { Link } from 'react-router-dom';

function Navbar(props) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    var element = document.getElementById("nav0");
    var element1 = document.getElementById("nav1");
    setMenuOpen(!menuOpen);
    if (menuOpen) {
      element.classList.toggle("classHide");
       element1.style.visibility = "visible";
      
    } else {
      element1.classList.toggle("classHide");
      element1.style.visibility = "hidden";
    }
  };

  return (
    <div className="navbar">
      <div className="logo-container">
        <img className="logo1" src={logo1} alt="logo1" />
        <img className="logo2" src={logo2} alt="logo2" />
        <img className="logo3" src={logo3} alt="logo3" />
      </div>
      <div className="button-row" id='nav0'>
        <button href="#">Home</button>
        <button href="#">Service</button>
        <button href="#">Products</button>
        <button href="#">Team</button>
        <button href="#">Blogs</button>
        <button href="#">Carrier</button>
        <button href="#">Director</button>
        <Link to="/about" className="LinkTag">
          About Us
        </Link>
        <button href="#">Contact Us</button>
      </div>
      <div className="button-row1" id='nav1' hidden>
        <button href="#" style={{backgroundColor:'transparent', color:'white',cursor:'pointer' }}>Home</button>
        <button href="#" style={{backgroundColor:'transparent', color:'white' ,cursor:'pointer' }}>Service</button>
        <button href="#" style={{backgroundColor:'transparent', color:'white',cursor:'pointer' }}>Products</button>
        <button href="#" style={{backgroundColor:'transparent', color:'white',cursor:'pointer' }}>Team</button>
        <button href="#" style={{backgroundColor:'transparent', color:'white',cursor:'pointer' }}>Blogs</button>
        <button href="#" style={{backgroundColor:'transparent', color:'white',cursor:'pointer' }}>Carrier</button>
        <button href="#" style={{backgroundColor:'transparent', color:'white',cursor:'pointer' }}>Director</button>
        <Link to="/about" className="LinkTag">
          About Us
        </Link>
        <button href="#" style={{backgroundColor:'transparent', color:'white'}}>Contact Us</button>
      </div>
      <button className="menu-icon" onClick={toggleMenu}>
        <span style={{ display: 'block' }}>-</span>
        <span style={{ display: 'block' }}>-</span>
        <span style={{ display: 'block' }}>-</span>
      </button>
    </div>
  );
}

export default Navbar;
