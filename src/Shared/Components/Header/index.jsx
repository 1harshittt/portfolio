import React from 'react'
import './Header.scss'
import Logo from '../../../Assets/Logo/Logo.png'
import { HiMenu } from "react-icons/hi";
export default function Header() {
   

  return (
    <div className="bgcolour">
    <div className="Container">
    <div className='header'>
      <div className="logo">
        <img src={Logo} alt='logo' />
      </div>
      <div className="menubar-drop">
      <HiMenu className='menuicon' /><span>MENU</span>
      </div>
      <div className="navbar">
        <ul className='navitems'>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Resume</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Projects</a></li>
          <li><a href="#">My Blog</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
    </div>
    </div>
    </div>
  )
}
