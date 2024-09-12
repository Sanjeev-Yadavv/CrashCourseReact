import React from 'react'
import { useState } from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHome, faImages, faEnvelope, faInfoCircle, faBars} from '@fortawesome/free-solid-svg-icons'
import './Navbar.css'
const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }
  return (
   <nav className="navbar">

    <div className='navbar-container'>
        <div className='navbar-logo'>MyGallery</div>

        <ul className={`navbar-menu ${isOpen ? 'open': ''}`}>
            <li className='navbar-item'>
                <a href='#' className='navbar-link'>
                <FontAwesomeIcon icon={faHome}/> Home
                </a>
            </li>
            <li className="navbar-item">
            <a href="#" className="navbar-link">
              <FontAwesomeIcon icon={faImages} /> Gallery
            </a>
          </li>
          <li className="navbar-item">
            <a href="#" className="navbar-link">
              <FontAwesomeIcon icon={faEnvelope} /> Contact
            </a>
          </li>
          <li className="navbar-item">
            <a href="#" className="navbar-link">
              <FontAwesomeIcon icon={faInfoCircle} /> About
            </a>
          </li>
        </ul>

        <div className='hamburger' onClick={toggleMenu}>
            <FontAwesomeIcon icon={faBars}/>
        </div>
    </div>

   </nav>
  )
}

export default Navbar
